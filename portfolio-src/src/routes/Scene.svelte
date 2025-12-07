<script lang="ts">
	import { T, extend, useTask } from '@threlte/core';
	import { Sky, OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';
	import { Water } from 'three/examples/jsm/objects/Water.js';
	import lakeGeoJson from '$lib/data/lake.json';
	import FirTree from '$lib/components/FirTree.svelte';
	import { mulberry32 } from '$lib/utils/random';

	extend({ Water });

	// Scene configuration
	const CONFIG = {
		sky: { elevation: 2, azimuth: 90, turbidity: 10, rayleigh: 0.5, mie: 0.1 },
		terrain: { size: 2000, color: '#1a2e1a' },
		water: { textureSize: 512, distortionScale: 20, animSpeed: 0.5 },
		camera: { position: [0, 80, 0] as [number, number, number], fov: 60, minDist: 10, maxDist: 1500 },
		light: { color: '#ffccaa', ambient: '#d4a5b5', shadowSize: 2048 },
		fog: { color: '#e8c8d8', near: 100, far: 800 }
	} as const;

	const lakeCoords = lakeGeoJson.geometry.coordinates[0] as [number, number][];

	// Point-in-polygon check (ray casting algorithm)
	function isInsideLake(x: number, z: number): boolean {
		let inside = false;
		for (let i = 0, j = lakeCoords.length - 1; i < lakeCoords.length; j = i++) {
			const xi = lakeCoords[i][0], yi = lakeCoords[i][1];
			const xj = lakeCoords[j][0], yj = lakeCoords[j][1];
			if (((yi > z) !== (yj > z)) && (x < (xj - xi) * (z - yi) / (yj - yi) + xi)) {
				inside = !inside;
			}
		}
		return inside;
	}

	// Create terrain with lake hole cut out (exact edge match)
	function createTerrainGeometry(): THREE.ShapeGeometry {
		const half = CONFIG.terrain.size / 2;

		// Outer terrain boundary
		const terrainShape = new THREE.Shape();
		terrainShape.moveTo(-half, -half);
		terrainShape.lineTo(half, -half);
		terrainShape.lineTo(half, half);
		terrainShape.lineTo(-half, half);
		terrainShape.closePath();

		// Lake hole (reverse winding for hole)
		const lakeHole = new THREE.Path();
		lakeHole.moveTo(lakeCoords[0][0], lakeCoords[0][1]);
		for (let i = lakeCoords.length - 1; i >= 0; i--) {
			lakeHole.lineTo(lakeCoords[i][0], lakeCoords[i][1]);
		}
		terrainShape.holes.push(lakeHole);

		return new THREE.ShapeGeometry(terrainShape, 1);
	}

	const terrainGeometry = createTerrainGeometry();

	const waterNormals = new THREE.TextureLoader().load(
		'https://threejs.org/examples/textures/waternormals.jpg',
		(tex) => {
			tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
		}
	);

	function createLakeGeometry(): THREE.ShapeGeometry {
		const coords = lakeGeoJson.geometry.coordinates[0] as [number, number][];
		const shape = new THREE.Shape();

		shape.moveTo(coords[0][0], coords[0][1]);
		for (let i = 1; i < coords.length; i++) {
			shape.lineTo(coords[i][0], coords[i][1]);
		}
		shape.closePath();

		return new THREE.ShapeGeometry(shape, 64);
	}

	const waterGeometry = createLakeGeometry();

	const sunDirection = new THREE.Vector3();
	const phi = THREE.MathUtils.degToRad(90 - CONFIG.sky.elevation);
	const theta = THREE.MathUtils.degToRad(CONFIG.sky.azimuth);
	sunDirection.setFromSphericalCoords(1, phi, theta);

	const waterOptions = {
		textureWidth: CONFIG.water.textureSize,
		textureHeight: CONFIG.water.textureSize,
		waterNormals,
		sunDirection,
		sunColor: 0xffccaa,
		waterColor: 0x001e0f,
		distortionScale: CONFIG.water.distortionScale,
		fog: true
	};

	let waterRef: InstanceType<typeof Water> | undefined;
	useTask((delta) => {
		if (waterRef?.material?.uniforms) {
			waterRef.material.uniforms['time'].value += delta * CONFIG.water.animSpeed;
		}
	});

	// Generate trees around lake (not inside)
	const treeRng = mulberry32(12345);
	const trees: Array<{
		position: [number, number, number];
		scale: number;
		seed: number;
		trunkHeight: number;
		branchLength: number;
		trunkBaseRadius: number;
		trunkTopRadius: number;
		branchTiers: number;
		branchesPerTier: number;
		branchDroop: number;
		needleDensity: number;
		needleSize: number;
		foliageStart: number;
	}> = [];

	for (let i = 0; i < 200; i++) {
		const angle = (i / 200) * Math.PI * 2 + treeRng() * 0.5;
		const dist = 200 + treeRng() * 300;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;

		// Skip if inside lake
		if (isInsideLake(x, z)) continue;

		trees.push({
			position: [x, 0, z],
			scale: 10 + treeRng() * 6,
			seed: i + 1,
			trunkHeight: 5 + treeRng() * 8,
			branchLength: 1.0 + treeRng() * 1.4,
			trunkBaseRadius: 0.18 + treeRng() * 0.04,
			trunkTopRadius: 0.008 + treeRng() * 0.004,
			branchTiers: 38 + Math.floor(treeRng() * 5),
			branchesPerTier: 6 + Math.floor(treeRng() * 2),
			branchDroop: 0.6 + treeRng() * 0.1,
			needleDensity: 15 + Math.floor(treeRng() * 3),
			needleSize: 0.75 + treeRng() * 0.1,
			foliageStart: 0.10 + treeRng() * 0.04
		});
	}
</script>

<!-- Camera + Controls -->
<T.PerspectiveCamera makeDefault position={CONFIG.camera.position} fov={CONFIG.camera.fov}>
	<OrbitControls
		enableDamping
		maxPolarAngle={Math.PI / 2.1}
		minDistance={CONFIG.camera.minDist}
		maxDistance={CONFIG.camera.maxDist}
		target={[200, 80, 0]}
	/>
</T.PerspectiveCamera>

<!-- Misty Pink Sky -->
<Sky
	elevation={CONFIG.sky.elevation}
	azimuth={CONFIG.sky.azimuth}
	turbidity={CONFIG.sky.turbidity}
	rayleigh={CONFIG.sky.rayleigh}
	mieCoefficient={CONFIG.sky.mie}
	mieDirectionalG={0.99}
/>

<!-- Terrain -->
<T.Mesh geometry={terrainGeometry} rotation.x={-Math.PI / 2} receiveShadow>
	<T.MeshStandardMaterial color={CONFIG.terrain.color} roughness={0.9} />
</T.Mesh>

<!-- Water -->
<T.Water
	args={[waterGeometry, waterOptions]}
	rotation.x={-Math.PI / 2}
	position.y={0.1}
	oncreate={(ref: InstanceType<typeof Water>) => { waterRef = ref }}
/>

<!-- Lighting -->
<T.DirectionalLight
	position={[500, 300, 100]}
	color={CONFIG.light.color}
	intensity={1.5}
	castShadow
	shadow.mapSize.width={CONFIG.light.shadowSize}
	shadow.mapSize.height={CONFIG.light.shadowSize}
	shadow.camera.far={CONFIG.camera.maxDist}
	shadow.camera.left={-500}
	shadow.camera.right={500}
	shadow.camera.top={500}
	shadow.camera.bottom={-500}
/>
<T.AmbientLight color={CONFIG.light.ambient} intensity={0.5} />

<!-- Fog for atmosphere -->
<T.Fog args={[CONFIG.fog.color, CONFIG.fog.near, CONFIG.fog.far]} attach="fog" />

<!-- Fir trees around lake -->
{#each trees as tree (tree.seed)}
	<FirTree
		position={tree.position}
		scale={tree.scale}
		seed={tree.seed}
		trunkHeight={tree.trunkHeight}
		trunkBaseRadius={tree.trunkBaseRadius}
		trunkTopRadius={tree.trunkTopRadius}
		branchTiers={tree.branchTiers}
		branchesPerTier={tree.branchesPerTier}
		branchDroop={tree.branchDroop}
		branchLength={tree.branchLength}
		needleDensity={tree.needleDensity}
		needleSize={tree.needleSize}
		foliageStart={tree.foliageStart}
	/>
{/each}
