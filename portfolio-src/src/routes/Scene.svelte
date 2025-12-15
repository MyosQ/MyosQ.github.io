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
	import { parseCameraHash, createCameraHashSaver } from '$lib/utils/camera';
	import { distToPolygonEdge, isInsidePolygon } from '$lib/utils/polygon';

	extend({ Water });

	let controlsRef: ThreeOrbitControls | undefined;
	let cameraRef: THREE.PerspectiveCamera | undefined;
	const saveCameraHash = createCameraHashSaver(() => cameraRef, () => controlsRef);

	const CONFIG = {
		sky: { elevation: 2, azimuth: 90, turbidity: 10, rayleigh: 0.5, mie: 0.1 },
		terrain: { size: 2000, color: '#1a2e1a' },
		water: { textureSize: 512, distortionScale: 20, animSpeed: 0.5 },
		camera: { position: [0, 80, 0] as [number, number, number], fov: 60, minDist: 10, maxDist: 1500 },
		light: { color: '#ffccaa', ambient: '#d4a5b5', shadowSize: 2048 },
		fog: { color: '#e8c8d8', near: 300, far: 1400 }
	} as const;

	const initialCamera = parseCameraHash();
	const initialCamPos: [number, number, number] = initialCamera?.pos ?? CONFIG.camera.position;
	const initialTarget: [number, number, number] = initialCamera?.target ?? [200, 80, 0];

	const lakeCoords = lakeGeoJson.geometry.coordinates[0] as [number, number][];
	const distToLakeEdge = (px: number, pz: number) => distToPolygonEdge(px, pz, lakeCoords);
	const isInsideLake = (px: number, pz: number) => isInsidePolygon(px, pz, lakeCoords);

	function tooCloseToLake(x: number, z: number, buffer: number): boolean {
		return isInsideLake(x, z) || distToLakeEdge(x, z) < buffer;
	}

	function noise2D(x: number, z: number, seed: number): number {
		const n = Math.sin(x * 0.01 + seed) * Math.cos(z * 0.01 + seed * 1.3) +
		          Math.sin(x * 0.005 + z * 0.008 + seed * 0.7) * 0.5 +
		          Math.sin(x * 0.02 - z * 0.015 + seed * 2.1) * 0.25;
		return n / 1.75;
	}

	function getTerrainHeight(x: number, z: number): number {
		const distFromEdge = distToLakeEdge(x, z);
		const distFactor = Math.min(1, distFromEdge / 300);
		const baseHeight = distFactor * 20;
		const variation = (noise2D(x, z, 42) * 0.5 + 0.5) * 30 * distFactor;
		return baseHeight + variation;
	}

	function createTerrainGeometry(): THREE.BufferGeometry {
		const size = CONFIG.terrain.size;
		const segments = 100;

		const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
		const positions = geometry.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getY(i);

			if (isInsideLake(x, z)) {
				positions.setZ(i, -5);
			} else {
				positions.setZ(i, getTerrainHeight(x, z));
			}
		}

		geometry.computeVertexNormals();
		return geometry;
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

	for (let i = 0; i < 80; i++) {
		const angle = treeRng() * Math.PI * 2;
		const dist = 120 + treeRng() * 600;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;
		const scale = 6 + treeRng() * 12;

		if (tooCloseToLake(x, -z, scale * 3)) continue;

		trees.push({
			position: [x, getTerrainHeight(x, -z), z],
			scale,
			seed: i + 1,
			trunkHeight: 4 + treeRng() * 10,
			branchLength: 0.8 + treeRng() * 1.8,
			trunkBaseRadius: 0.15 + treeRng() * 0.08,
			trunkTopRadius: 0.006 + treeRng() * 0.006,
			branchTiers: 30 + Math.floor(treeRng() * 15),
			branchesPerTier: 5 + Math.floor(treeRng() * 3),
			branchDroop: 0.5 + treeRng() * 0.3,
			needleDensity: 12 + Math.floor(treeRng() * 6),
			needleSize: 0.6 + treeRng() * 0.3,
			foliageStart: 0.08 + treeRng() * 0.08
		});
	}

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

	for (let i = 0; i < 40; i++) {
		const angle = pineRng() * Math.PI * 2;
		const dist = 150 + pineRng() * 550;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;
		const scale = 5 + pineRng() * 10;

		if (tooCloseToLake(x, -z, scale * 2.5)) continue;

		const height = 4 + pineRng() * 8;
		const heightRatio = height / 10;
		pines.push({
			position: [x, getTerrainHeight(x, -z), z],
			scale,
			seed: i + 100,
			trunkHeight: height,
			trunkBaseRadius: (0.15 + pineRng() * 0.1) * heightRatio,
			trunkTopRadius: (0.02 + pineRng() * 0.03) * heightRatio,
			whorls: 12 + Math.floor(pineRng() * 8),
			branchesPerWhorl: 4 + Math.floor(pineRng() * 3),
			branchLength: (0.6 + pineRng() * 0.6) * heightRatio,
			branchSweep: 0.7 + pineRng() * 0.5,
			fasciclesPerBranch: 15 + Math.floor(pineRng() * 10),
			foliageStart: 0.25 + pineRng() * 0.2
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
