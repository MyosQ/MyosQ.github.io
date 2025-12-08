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
		fog: { color: '#e8c8d8', near: 300, far: 1400 }
	} as const;

	const initialCamera = parseCameraHash();
	const initialCamPos: [number, number, number] = initialCamera?.pos ?? CONFIG.camera.position;
	const initialTarget: [number, number, number] = initialCamera?.target ?? [200, 80, 0];

	const lakeCoords = lakeGeoJson.geometry.coordinates[0] as [number, number][];

	// Distance to nearest lake edge segment
	// Note: lakeCoords is GeoJSON format where first/last points are identical
	function distToLakeEdge(px: number, pz: number): number {
		let minDist = Infinity;
		const n = lakeCoords.length - 1; // Exclude duplicate closing point

		for (let i = 0; i < n; i++) {
			const ax = lakeCoords[i][0], az = lakeCoords[i][1];
			const bx = lakeCoords[(i + 1) % n][0], bz = lakeCoords[(i + 1) % n][1];
			const dx = bx - ax, dz = bz - az;
			const len2 = dx * dx + dz * dz;
			if (len2 === 0) continue; // Skip degenerate edges
			const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / len2));
			const nearX = ax + t * dx, nearZ = az + t * dz;
			const dist = Math.sqrt((px - nearX) ** 2 + (pz - nearZ) ** 2);
			if (dist < minDist) minDist = dist;
		}
		return minDist;
	}

	// Point-in-polygon check (ray casting algorithm)
	// Note: lakeCoords is GeoJSON format where first/last points are identical (closed polygon)
	// We skip the duplicate closing point by using length - 1
	function isInsideLake(px: number, pz: number): boolean {
		let inside = false;
		const n = lakeCoords.length - 1; // Exclude duplicate closing point

		for (let i = 0, j = n - 1; i < n; j = i++) {
			const ix = lakeCoords[i][0], iz = lakeCoords[i][1]; // Current vertex
			const jx = lakeCoords[j][0], jz = lakeCoords[j][1]; // Previous vertex

			// Check if edge crosses the horizontal ray from point to +infinity
			const edgeCrossesRay = (iz > pz) !== (jz > pz);
			if (edgeCrossesRay) {
				// Calculate x-coordinate where edge intersects the ray
				const intersectX = (jx - ix) * (pz - iz) / (jz - iz) + ix;
				if (px < intersectX) {
					inside = !inside;
				}
			}
		}
		return inside;
	}

	// Check if position is too close to lake (inside or within buffer)
	function tooCloseToLake(x: number, z: number, buffer: number): boolean {
		if (isInsideLake(x, z)) return true;
		return distToLakeEdge(x, z) < buffer;
	}

	// Simple noise function for terrain
	function noise2D(x: number, z: number, seed: number): number {
		const n = Math.sin(x * 0.01 + seed) * Math.cos(z * 0.01 + seed * 1.3) +
		          Math.sin(x * 0.005 + z * 0.008 + seed * 0.7) * 0.5 +
		          Math.sin(x * 0.02 - z * 0.015 + seed * 2.1) * 0.25;
		return n / 1.75;
	}

	// Get terrain height at world position (x, z)
	function getTerrainHeight(x: number, z: number): number {
		const distFromEdge = distToLakeEdge(x, z);
		const distFactor = Math.min(1, distFromEdge / 300);
		const baseHeight = distFactor * 20;
		const variation = (noise2D(x, z, 42) * 0.5 + 0.5) * 30 * distFactor;
		return baseHeight + variation;
	}

	// Create terrain with dense vertex grid
	function createTerrainGeometry(): THREE.BufferGeometry {
		const size = CONFIG.terrain.size;
		const segments = 100; // Dense grid for accurate height sampling

		const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
		const positions = geometry.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getY(i); // PlaneGeometry is in XY, we rotate to XZ

			if (isInsideLake(x, z)) {
				// Sink lake vertices below water
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

	for (let i = 0; i < 80; i++) {
		const angle = treeRng() * Math.PI * 2;
		const dist = 120 + treeRng() * 600;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;
		const scale = 6 + treeRng() * 12;

		// Buffer based on tree size to keep foliage out of lake
		// Note: lake/terrain functions use shape coords where shapeY = -worldZ
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

	for (let i = 0; i < 40; i++) {
		const angle = pineRng() * Math.PI * 2;
		const dist = 150 + pineRng() * 550;
		const x = Math.cos(angle) * dist;
		const z = Math.sin(angle) * dist;
		const scale = 5 + pineRng() * 10;

		// Buffer based on tree size to keep foliage out of lake
		// Note: lake/terrain functions use shape coords where shapeY = -worldZ
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
