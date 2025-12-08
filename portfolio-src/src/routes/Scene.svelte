<script lang="ts">
	import { T, extend, useTask } from '@threlte/core';
	import { Sky, OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';
	import { Water } from 'three/examples/jsm/objects/Water.js';
	import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import lakeGeoJson from '$lib/data/lake.json';
	import FirTree from '$lib/components/FirTree.svelte';
	import PineTree from '$lib/components/PineTree.svelte';
	import { mulberry32 } from '$lib/utils/random';
	import { browser } from '$app/environment';

	extend({ Water });


	// Camera URL hash persistence
	let controlsRef: ThreeOrbitControls | undefined;
	let cameraRef: THREE.PerspectiveCamera | undefined;

	function parseCameraHash(): { pos: [number, number, number]; target: [number, number, number] } | null {
		if (!browser) return null;
		const hash = window.location.hash;
		if (!hash.startsWith('#cam=')) return null;
		const parts = hash.slice(5).split(',').map(Number);
		if (parts.length !== 6 || parts.some(isNaN)) return null;
		return {
			pos: [parts[0], parts[1], parts[2]],
			target: [parts[3], parts[4], parts[5]]
		};
	}

	function saveCameraHash() {
		if (!controlsRef || !cameraRef) return;
		const p = cameraRef.position;
		const t = controlsRef.target;
		const round = (n: number) => Math.round(n * 10) / 10;
		const hash = `#cam=${round(p.x)},${round(p.y)},${round(p.z)},${round(t.x)},${round(t.y)},${round(t.z)}`;
		history.replaceState(null, '', hash);
	}

	// Scene configuration
	const CONFIG = {
		sky: { elevation: 2, azimuth: 90, turbidity: 10, rayleigh: 0.5, mie: 0.1 },
		terrain: { size: 2000, color: '#1a2e1a' },
		water: { textureSize: 512, distortionScale: 20, animSpeed: 0.5 },
		camera: { position: [0, 80, 0] as [number, number, number], fov: 60, minDist: 10, maxDist: 1500 },
		light: { color: '#ffccaa', ambient: '#d4a5b5', shadowSize: 2048 },
		fog: { color: '#e8c8d8', near: 100, far: 800 }
	} as const;

	const initialCamera = parseCameraHash();
	const initialCamPos: [number, number, number] = initialCamera?.pos ?? CONFIG.camera.position;
	const initialTarget: [number, number, number] = initialCamera?.target ?? [200, 80, 0];

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

	for (let i = 0; i < 10; i++) {
		const angle = (i / 10) * Math.PI * 2 + treeRng() * 0.5;
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

	// Generate pine trees (offset from fir trees)
	const pineRng = mulberry32(67890);
	const pines: Array<{
		position: [number, number, number];
		scale: number;
		seed: number;
		trunkHeight: number;
		trunkBaseRadius: number;
		trunkTopRadius: number;
		whorls: number;
		branchesPerWhorl: number;
		branchLength: number;
		branchSweep: number;
		fasciclesPerBranch: number;
		foliageStart: number;
	}> = [];

	for (let i = 0; i < 5; i++) {
		// Offset angle from fir trees
		const angle = ((i + 0.5) / 5) * Math.PI * 2 + pineRng() * 0.4;
		const dist = 250 + pineRng() * 250;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;

		if (isInsideLake(x, z)) continue;

		const height = 5 + pineRng() * 6;
		const heightRatio = height / 10; // Scale factor based on height
		pines.push({
			position: [x, 0, z],
			scale: 8 + pineRng() * 5,
			seed: i + 100,
			trunkHeight: height,
			trunkBaseRadius: (0.18 + pineRng() * 0.06) * heightRatio,
			trunkTopRadius: (0.03 + pineRng() * 0.02) * heightRatio,
			whorls: 16 + Math.floor(pineRng() * 4) - 2,
			branchesPerWhorl: 5,
			branchLength: (0.8 + pineRng() * 0.3) * heightRatio,
			branchSweep: 0.9 + pineRng() * 0.2 - 0.1,
			fasciclesPerBranch: 20 + Math.floor(pineRng() * 6) - 3,
			foliageStart: 0.35 + pineRng() * 0.1 - 0.05
		});
	}
</script>

<!-- Camera + Controls -->
<T.PerspectiveCamera
	makeDefault
	position={initialCamPos}
	fov={CONFIG.camera.fov}
	oncreate={(ref) => { cameraRef = ref }}
>
	<OrbitControls
		enableDamping
		maxPolarAngle={Math.PI / 2.1}
		minDistance={CONFIG.camera.minDist}
		maxDistance={CONFIG.camera.maxDist}
		target={initialTarget}
		oncreate={(ref) => { controlsRef = ref }}
		onend={saveCameraHash}
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

<!-- Pine trees around lake -->
{#each pines as pine (pine.seed)}
	<PineTree
		position={pine.position}
		scale={pine.scale}
		seed={pine.seed}
		trunkHeight={pine.trunkHeight}
		trunkBaseRadius={pine.trunkBaseRadius}
		trunkTopRadius={pine.trunkTopRadius}
		whorls={pine.whorls}
		branchesPerWhorl={pine.branchesPerWhorl}
		branchLength={pine.branchLength}
		branchSweep={pine.branchSweep}
		fasciclesPerBranch={pine.fasciclesPerBranch}
		foliageStart={pine.foliageStart}
	/>
{/each}
