<script lang="ts">
	import { T, extend, useTask } from '@threlte/core';
	import { Sky, OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';
	import { Water } from 'three/examples/jsm/objects/Water.js';
	import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import islandGeoJson from '$lib/data/island.json';
	import FirTree from '$lib/components/FirTree.svelte';
	import PineTree from '$lib/components/PineTree.svelte';
	import ForestSilhouette from '$lib/components/ForestSilhouette.svelte';
	import MountainSilhouette from '$lib/components/MountainSilhouette.svelte';
	import PostProcessing from '$lib/components/PostProcessing.svelte';
	import { mulberry32 } from '$lib/utils/random';
	import { browser } from '$app/environment';

	extend({ Water });

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

	const CONFIG = {
		sky: { elevation: 3, azimuth: 180, turbidity: 8, rayleigh: 3, mie: 0.01, scale: 10000 },
		terrain: { size: 6000, color: '#061008' },
		water: { textureSize: 512, distortionScale: 15, animSpeed: 0.3 },
		camera: { position: [180, 35, 180] as [number, number, number], fov: 60, minDist: 10, maxDist: 2000 },
		light: { color: '#ffcc44', ambient: '#403848', shadowSize: 2048, ambientIntensity: 0.15 },
		fog: { color: '#504858', near: 600, far: 3000 }
	} as const;

	const initialCamera = parseCameraHash();
	const initialCamPos: [number, number, number] = initialCamera?.pos ?? CONFIG.camera.position;
	const initialTarget: [number, number, number] = initialCamera?.target ?? [0, 8, 0];

	interface Props {
		ambientColor: string;
		ambientIntensity: number;
		directionalIntensity: number;
		waterColor: string;
		skyElevation: number;
		skyTurbidity: number;
		fogColor: string;
		fogDensity: number;
		godRaysEnabled?: boolean;
		godRaysIntensity?: number;
	}

	let props: Props = $props();

	let ambientLightRef: THREE.AmbientLight | undefined;
	let directionalLightRef: THREE.DirectionalLight | undefined;
	let fogRef: THREE.FogExp2 | undefined;

	$effect(() => {
		if (ambientLightRef) {
			ambientLightRef.color.set(props.ambientColor);
			ambientLightRef.intensity = props.ambientIntensity;
		}
	});

	$effect(() => {
		if (directionalLightRef) {
			directionalLightRef.intensity = props.directionalIntensity;
			// Update position based on sky elevation
			const phi = THREE.MathUtils.degToRad(90 - props.skyElevation);
			const theta = THREE.MathUtils.degToRad(CONFIG.sky.azimuth);
			const dist = 500;
			directionalLightRef.position.set(
				dist * Math.sin(phi) * Math.sin(theta),
				dist * Math.cos(phi),
				dist * Math.sin(phi) * Math.cos(theta)
			);
		}
	});

	$effect(() => {
		if (waterRef?.material?.uniforms) {
			const color = new THREE.Color(props.waterColor);
			waterRef.material.uniforms['waterColor'].value = color;
		}
	});

	$effect(() => {
		if (fogRef) {
			fogRef.color.set(props.fogColor);
			fogRef.density = props.fogDensity;
		}
	});

	const islandCoords = islandGeoJson.geometry.coordinates[0] as [number, number][];

	function distToIslandEdge(px: number, pz: number): number {
		let minDist = Infinity;
		const n = islandCoords.length - 1;

		for (let i = 0; i < n; i++) {
			const ax = islandCoords[i][0], az = islandCoords[i][1];
			const bx = islandCoords[(i + 1) % n][0], bz = islandCoords[(i + 1) % n][1];
			const dx = bx - ax, dz = bz - az;
			const len2 = dx * dx + dz * dz;
			if (len2 === 0) continue;
			const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / len2));
			const nearX = ax + t * dx, nearZ = az + t * dz;
			const dist = Math.sqrt((px - nearX) ** 2 + (pz - nearZ) ** 2);
			if (dist < minDist) minDist = dist;
		}
		return minDist;
	}

	function isOnIsland(px: number, pz: number): boolean {
		let inside = false;
		const n = islandCoords.length - 1;

		for (let i = 0, j = n - 1; i < n; j = i++) {
			const ix = islandCoords[i][0], iz = islandCoords[i][1];
			const jx = islandCoords[j][0], jz = islandCoords[j][1];

			const edgeCrossesRay = (iz > pz) !== (jz > pz);
			if (edgeCrossesRay) {
				const intersectX = (jx - ix) * (pz - iz) / (jz - iz) + ix;
				if (px < intersectX) {
					inside = !inside;
				}
			}
		}
		return inside;
	}

	function noise2D(x: number, z: number, seed: number): number {
		const n = Math.sin(x * 0.03 + seed) * Math.cos(z * 0.03 + seed * 1.3) +
		          Math.sin(x * 0.015 + z * 0.02 + seed * 0.7) * 0.6 +
		          Math.sin(x * 0.06 - z * 0.05 + seed * 2.1) * 0.4 +
		          Math.sin(x * 0.1 + z * 0.08 + seed * 3.2) * 0.2;
		return n / 2.2;
	}

	function getTerrainHeight(x: number, z: number): number {
		// Water at y=0.05. Vertical 1m cliff at exact GeoJSON boundary
		if (!isOnIsland(x, z)) return -10; // deep underwater, invisible

		const distFromEdge = distToIslandEdge(x, z);
		const edgeFactor = Math.min(1, distFromEdge / 60);
		// Shore edge at 0.55 (0.5m above water), rises inland
		const baseHeight = 0.55 + edgeFactor * 10;
		const variation = (noise2D(x, z, 42) * 0.5 + 0.5) * 10 * edgeFactor;
		return baseHeight + variation;
	}

	function createIslandGeometry(): THREE.BufferGeometry {
		// Create extruded shape from GeoJSON for true vertical walls
		const shape = new THREE.Shape();
		const coords = islandCoords;

		shape.moveTo(coords[0][0], coords[0][1]);
		for (let i = 1; i < coords.length - 1; i++) {
			shape.lineTo(coords[i][0], coords[i][1]);
		}
		shape.closePath();

		const extrudeSettings = {
			depth: 1, // 1 unit vertical cliff
			bevelEnabled: false
		};

		const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
		// Rotate to XZ plane and position so top is at 0.55, bottom at -0.45
		geometry.rotateX(-Math.PI / 2);
		geometry.translate(0, -0.45, 0);

		return geometry;
	}

	function createTerrainGeometry(): THREE.BufferGeometry {
		const size = CONFIG.terrain.size;
		const geometry = new THREE.PlaneGeometry(size, size, 300, 300);
		const positions = geometry.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getY(i);
			if (isOnIsland(x, z)) {
				const distFromEdge = distToIslandEdge(x, z);
				const edgeFactor = Math.min(1, distFromEdge / 60);
				// Shore at 0.6 (well above water at 0.05), rises inland
				const baseHeight = 0.6 + edgeFactor * 10;
				const variation = (noise2D(x, z, 42) * 0.5 + 0.5) * 10 * edgeFactor;
				positions.setZ(i, baseHeight + variation);
			} else {
				positions.setZ(i, -10);
			}
		}

		geometry.computeVertexNormals();
		return geometry;
	}

	const islandGeometry = createIslandGeometry();
	const terrainGeometry = createTerrainGeometry();

	const forestLayers = [
		{ radius: 1800, height: 100, seed: 0, detailLevel: 1 as const, y: 40, color: '#0a1a0f' },
		{ radius: 1500, height: 110, seed: 2.5, detailLevel: 2 as const, y: 35, color: '#0c2012' },
		{ radius: 1200, height: 120, seed: 5.1, detailLevel: 2 as const, y: 30, color: '#0e2515' },
		{ radius: 900, height: 80, seed: 8.3, detailLevel: 3 as const, y: 18, color: '#081408' }
	];

	const waterNormals = new THREE.TextureLoader().load(
		'https://threejs.org/examples/textures/waternormals.jpg',
		(tex) => {
			tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
		}
	);

	const waterGeometry = new THREE.PlaneGeometry(CONFIG.terrain.size, CONFIG.terrain.size, 1, 1);

	const sunDirection = new THREE.Vector3();
	const phi = THREE.MathUtils.degToRad(90 - CONFIG.sky.elevation);
	const theta = THREE.MathUtils.degToRad(CONFIG.sky.azimuth);
	sunDirection.setFromSphericalCoords(1, phi, theta);

	// Directional light position matches sun direction
	const lightDistance = 500;
	const sunLightPos: [number, number, number] = [
		lightDistance * Math.sin(phi) * Math.sin(theta),
		lightDistance * Math.cos(phi),
		lightDistance * Math.sin(phi) * Math.cos(theta)
	];

	const waterOptions = {
		textureWidth: CONFIG.water.textureSize,
		textureHeight: CONFIG.water.textureSize,
		waterNormals,
		sunDirection,
		sunColor: 0xffcc44,
		waterColor: 0x000a08,
		distortionScale: CONFIG.water.distortionScale,
		fog: true
	};

	let waterRef: InstanceType<typeof Water> | undefined;
	useTask((delta) => {
		if (waterRef?.material?.uniforms) {
			waterRef.material.uniforms['time'].value += delta * CONFIG.water.animSpeed;
		}
	});

	const treeRng = mulberry32(54321);
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
		const x = (treeRng() - 0.5) * 280;
		const z = (treeRng() - 0.5) * 140;
		const scale = 4 + treeRng() * 8;

		// Shape coords = (worldX, -worldZ)
		if (!isOnIsland(x, -z)) continue;
		if (distToIslandEdge(x, -z) < scale * 1.5) continue;

		trees.push({
			position: [x, getTerrainHeight(x, -z) - scale * 0.3, z],
			scale,
			seed: i + 1,
			trunkHeight: 3 + treeRng() * 6,
			branchLength: 0.6 + treeRng() * 1.2,
			trunkBaseRadius: 0.12 + treeRng() * 0.06,
			trunkTopRadius: 0.005 + treeRng() * 0.005,
			branchTiers: 25 + Math.floor(treeRng() * 12),
			branchesPerTier: 5 + Math.floor(treeRng() * 3),
			branchDroop: 0.5 + treeRng() * 0.3,
			needleDensity: 10 + Math.floor(treeRng() * 5),
			needleSize: 0.5 + treeRng() * 0.25,
			foliageStart: 0.1 + treeRng() * 0.1
		});

		if (trees.length >= 35) break;
	}

	const pineRng = mulberry32(98765);
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
		const x = (pineRng() - 0.5) * 280;
		const z = (pineRng() - 0.5) * 140;
		const scale = 3 + pineRng() * 7;

		if (!isOnIsland(x, -z)) continue;
		if (distToIslandEdge(x, -z) < scale * 1.2) continue;

		const height = 3 + pineRng() * 6;
		const heightRatio = height / 8;
		pines.push({
			position: [x, getTerrainHeight(x, -z) - scale * 0.3, z],
			scale,
			seed: i + 100,
			trunkHeight: height,
			trunkBaseRadius: (0.12 + pineRng() * 0.08) * heightRatio,
			trunkTopRadius: (0.02 + pineRng() * 0.02) * heightRatio,
			whorls: 10 + Math.floor(pineRng() * 6),
			branchesPerWhorl: 4 + Math.floor(pineRng() * 3),
			branchLength: (0.5 + pineRng() * 0.5) * heightRatio,
			branchSweep: 0.6 + pineRng() * 0.4,
			fasciclesPerBranch: 12 + Math.floor(pineRng() * 8),
			foliageStart: 0.2 + pineRng() * 0.15
		});

		if (pines.length >= 8) break;
	}

	function createRockGeometry(seed: number): THREE.BufferGeometry {
		const geometry = new THREE.IcosahedronGeometry(1, 1);
		const positions = geometry.attributes.position;
		const rockRng = mulberry32(seed);

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const y = positions.getY(i);
			const z = positions.getZ(i);
			const noise = (rockRng() - 0.5) * 0.35;
			positions.setX(i, x * (1 + noise) * (0.9 + rockRng() * 0.4));
			positions.setY(i, y * (0.5 + rockRng() * 0.3));
			positions.setZ(i, z * (1 + noise));
		}
		geometry.computeVertexNormals();
		return geometry;
	}

	// Generate rocks procedurally, concentrated near shoreline
	const rockRng = mulberry32(12345);
	const rocks: Array<{
		geo: THREE.BufferGeometry;
		pos: [number, number, number];
		scale: [number, number, number];
	}> = [];

	for (let i = 0; i < 500; i++) {
		const x = (rockRng() - 0.5) * 320;
		const z = (rockRng() - 0.5) * 200;

		if (!isOnIsland(x, -z)) continue;

		const distFromEdge = distToIslandEdge(x, -z);
		// Strongly favor rocks at shoreline (0-12 units from edge)
		if (distFromEdge > 12 && rockRng() > 0.08) continue;

		// Larger rocks near shore, smaller inland
		const shoreBonus = Math.max(0, 1 - distFromEdge / 15);
		const baseScale = 1.5 + rockRng() * 5 + shoreBonus * 4;
		const y = getTerrainHeight(x, -z) - baseScale * 0.4;

		rocks.push({
			geo: createRockGeometry(i * 7919),
			pos: [x, y, z],
			scale: [
				baseScale * (0.8 + rockRng() * 0.5),
				baseScale * (0.35 + rockRng() * 0.35),
				baseScale * (0.8 + rockRng() * 0.5)
			]
		});

		if (rocks.length >= 120) break;
	}
</script>

<T.PerspectiveCamera
	makeDefault
	position={initialCamPos}
	fov={CONFIG.camera.fov}
	far={10000}
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

<Sky
	elevation={props.skyElevation}
	azimuth={CONFIG.sky.azimuth}
	turbidity={props.skyTurbidity}
	rayleigh={CONFIG.sky.rayleigh}
	mieCoefficient={CONFIG.sky.mie}
	mieDirectionalG={0.8}
	scale={CONFIG.sky.scale}
/>

<T.FogExp2
	args={[props.fogColor, props.fogDensity]}
	oncreate={(ref) => { fogRef = ref }}
	attach="fog"
/>

<T.Mesh geometry={terrainGeometry} rotation.x={-Math.PI / 2} receiveShadow>
	<T.MeshStandardMaterial color={CONFIG.terrain.color} roughness={0.9} polygonOffset polygonOffsetFactor={-1} polygonOffsetUnits={-1} />
</T.Mesh>

<T.Mesh geometry={islandGeometry} receiveShadow>
	<T.MeshStandardMaterial color={CONFIG.terrain.color} roughness={0.9} />
</T.Mesh>

<T.Water
	args={[waterGeometry, waterOptions]}
	rotation.x={-Math.PI / 2}
	position.y={0.05}
	oncreate={(ref: InstanceType<typeof Water>) => { waterRef = ref }}
/>

<T.DirectionalLight
	position={sunLightPos}
	color={CONFIG.light.color}
	intensity={props.directionalIntensity}
	castShadow
	shadow.mapSize.width={CONFIG.light.shadowSize}
	shadow.mapSize.height={CONFIG.light.shadowSize}
	shadow.camera.far={600}
	shadow.camera.left={-200}
	shadow.camera.right={200}
	shadow.camera.top={200}
	shadow.camera.bottom={-200}
	oncreate={(ref) => { directionalLightRef = ref }}
/>
<T.AmbientLight
	color={props.ambientColor}
	intensity={props.ambientIntensity}
	oncreate={(ref) => { ambientLightRef = ref }}
/>

<MountainSilhouette
	radius={2800}
	baseHeight={80}
	peakHeight={400}
	peakAngle={Math.PI * 1.25}
	peakSpread={0.5}
	yPosition={60}
	color="#020304"
/>

{#each forestLayers as layer, i (i)}
	<ForestSilhouette
		radius={layer.radius}
		height={layer.height}
		seed={layer.seed}
		detailLevel={layer.detailLevel}
		yPosition={layer.y}
		color={layer.color}
	/>
{/each}

{#each rocks as rock, i (i)}
	<T.Mesh geometry={rock.geo} position={rock.pos} scale={rock.scale} castShadow receiveShadow>
		<T.MeshStandardMaterial color="#1a1815" roughness={0.95} />
	</T.Mesh>
{/each}

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

<PostProcessing
	skyElevation={props.skyElevation}
	skyAzimuth={CONFIG.sky.azimuth}
	godRaysIntensity={props.godRaysIntensity ?? 1.0}
	enabled={props.godRaysEnabled ?? true}
/>
