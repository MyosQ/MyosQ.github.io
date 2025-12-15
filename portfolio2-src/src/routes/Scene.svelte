<script lang="ts">
	import { T, extend, useTask } from '@threlte/core';
	import { Sky, OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';
	import { Water } from 'three/examples/jsm/objects/Water.js';
	import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import islandGeoJson from '$lib/data/island.json';
	import FirTree from '$lib/components/FirTree.svelte';
	import ForestSilhouette from '$lib/components/ForestSilhouette.svelte';
	import MountainSilhouette from '$lib/components/MountainSilhouette.svelte';
	import PostProcessing from '$lib/components/PostProcessing.svelte';
	import { mulberry32 } from '$lib/utils/random';
	import { browser } from '$app/environment';
	import { KEYFRAMES, lerpSettings, getPathProgress, type CameraState } from '$lib/config/scene';

	extend({ Water });

	const isMobile = browser && window.matchMedia('(max-width: 768px)').matches;

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
		cameraPathProgress?: number;
		onCameraReady?: (getter: () => CameraState) => void;
		setCameraState?: CameraState | null;
	}

	let props: Props = $props();

	function generateArcPath(start: readonly number[], end: readonly number[], segments: number): THREE.Vector3[] {
		const startAngle = Math.atan2(start[0], start[2]);
		const endAngle = Math.atan2(end[0], end[2]);
		const startRadius = Math.sqrt(start[0] ** 2 + start[2] ** 2);
		const endRadius = Math.sqrt(end[0] ** 2 + end[2] ** 2);
		const startY = start[1], endY = end[1];

		const points: THREE.Vector3[] = [];
		for (let i = 0; i <= segments; i++) {
			const t = i / segments;
			const angle = startAngle + (endAngle - startAngle) * t;
			const radius = startRadius + (endRadius - startRadius) * t;
			const y = startY + (endY - startY) * t;
			points.push(new THREE.Vector3(
				Math.sin(angle) * radius,
				y,
				Math.cos(angle) * radius
			));
		}
		return points;
	}

	const cameraPath = new THREE.CatmullRomCurve3(
		KEYFRAMES.slice(0, -1).flatMap((kf, i) => {
			const pts = generateArcPath(kf.camera.position, KEYFRAMES[i + 1].camera.position, 20);
			return i === 0 ? pts : pts.slice(1); // avoid duplicate points at segment boundaries
		}),
		false,
		'chordal' // reduces overshoot at sharp direction changes
	);

	const targetPath = new THREE.CatmullRomCurve3(
		KEYFRAMES.map(kf => new THREE.Vector3(...kf.camera.target)),
		false,
		'chordal'
	);

	let pathModeActive = $derived((props.cameraPathProgress ?? -1) >= 0);
	let interpolatedSettings = $derived(pathModeActive ? lerpSettings(props.cameraPathProgress ?? 0) : null);

	let ambientLightRef: THREE.AmbientLight | undefined;
	let directionalLightRef: THREE.DirectionalLight | undefined;
	let fogRef: THREE.FogExp2 | undefined;

	$effect(() => {
		if (pathModeActive && cameraRef && controlsRef && interpolatedSettings) {
			const pathT = getPathProgress(props.cameraPathProgress ?? 0);
			cameraRef.position.copy(cameraPath.getPointAt(pathT));
			controlsRef.target.copy(targetPath.getPointAt(pathT));
			controlsRef.update();

			const s = interpolatedSettings;
			if (ambientLightRef) {
				ambientLightRef.color.set(s.ambientColor);
				ambientLightRef.intensity = s.ambientIntensity;
			}
			if (directionalLightRef) {
				directionalLightRef.intensity = s.directionalIntensity;
				const phi = THREE.MathUtils.degToRad(90 - s.skyElevation);
				const theta = THREE.MathUtils.degToRad(CONFIG.sky.azimuth);
				directionalLightRef.position.set(
					500 * Math.sin(phi) * Math.sin(theta),
					500 * Math.cos(phi),
					500 * Math.sin(phi) * Math.cos(theta)
				);
			}
			if (waterRef?.material?.uniforms) {
				waterRef.material.uniforms['waterColor'].value = new THREE.Color(s.waterColor);
			}
			if (fogRef) {
				fogRef.color.set(s.fogColor);
				fogRef.density = s.fogDensity;
			}
		}
	});

	// Expose camera state getter to parent
	$effect(() => {
		if (cameraRef && controlsRef && props.onCameraReady) {
			props.onCameraReady(() => ({
				position: [cameraRef!.position.x, cameraRef!.position.y, cameraRef!.position.z],
				target: [controlsRef!.target.x, controlsRef!.target.y, controlsRef!.target.z]
			}));
		}
	});

	// Set camera state from parent (for loading viewpoints)
	$effect(() => {
		if (props.setCameraState && cameraRef && controlsRef) {
			const { position, target } = props.setCameraState;
			cameraRef.position.set(...position);
			controlsRef.target.set(...target);
			controlsRef.update();
		}
	});

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

	const maxTrees = isMobile ? 18 : 35;
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
			branchTiers: isMobile ? 18 + Math.floor(treeRng() * 8) : 25 + Math.floor(treeRng() * 12),
			branchesPerTier: 5 + Math.floor(treeRng() * 3),
			branchDroop: 0.5 + treeRng() * 0.3,
			needleDensity: isMobile ? 6 + Math.floor(treeRng() * 3) : 10 + Math.floor(treeRng() * 5),
			needleSize: 0.5 + treeRng() * 0.25,
			foliageStart: 0.1 + treeRng() * 0.1
		});

		if (trees.length >= maxTrees) break;
	}

	// Create grass blade geometry (desktop only)
	let grassMesh: THREE.InstancedMesh | null = null;

	if (!isMobile) {
		function createGrassBladeGeometry(): THREE.BufferGeometry {
			const geometry = new THREE.BufferGeometry();
			const vertices = new Float32Array([
				-0.08, 0, 0,
				0.08, 0, 0,
				0, 1.2, 0
			]);
			geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
			geometry.computeVertexNormals();
			return geometry;
		}

		const grassRng = mulberry32(77777);
		const grassCount = 40000;
		const grassGeometry = createGrassBladeGeometry();
		const grassMaterial = new THREE.MeshBasicMaterial({
			color: '#020a05',
			side: THREE.DoubleSide
		});
		grassMesh = new THREE.InstancedMesh(grassGeometry, grassMaterial, grassCount);

		const grassMatrix = new THREE.Matrix4();
		const grassColors = new Float32Array(grassCount * 3);
		let grassIndex = 0;

		for (let i = 0; i < 250000 && grassIndex < grassCount; i++) {
			const x = (grassRng() - 0.5) * 280;
			const z = (grassRng() - 0.5) * 160;

			if (!isOnIsland(x, -z)) continue;
			const distFromEdge = distToIslandEdge(x, -z);
			if (distFromEdge < 3) continue;

			const y = getTerrainHeight(x, -z);
			const scale = 1.1 + grassRng() * 0.6;
			const rotY = grassRng() * Math.PI * 2;
			const tilt = (grassRng() - 0.5) * 0.2;

			grassMatrix.makeRotationY(rotY);
			grassMatrix.multiply(new THREE.Matrix4().makeRotationX(tilt));
			grassMatrix.scale(new THREE.Vector3(scale, scale * (0.6 + grassRng() * 0.4), scale));
			grassMatrix.setPosition(x, y, z);
			grassMesh.setMatrixAt(grassIndex, grassMatrix);

			const colorVar = grassRng() * 0.1;
			grassColors[grassIndex * 3] = 0.008 + colorVar * 0.008;
			grassColors[grassIndex * 3 + 1] = 0.03 + colorVar * 0.02;
			grassColors[grassIndex * 3 + 2] = 0.015 + colorVar * 0.008;

			grassIndex++;
		}

		grassMesh.instanceMatrix.needsUpdate = true;
		grassMesh.geometry.setAttribute('color', new THREE.InstancedBufferAttribute(grassColors, 3));
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
		enableZoom={!pathModeActive}
		enableRotate={!pathModeActive}
		enablePan={!pathModeActive}
		maxPolarAngle={Math.PI / 2.1}
		minDistance={CONFIG.camera.minDist}
		maxDistance={CONFIG.camera.maxDist}
		target={initialTarget}
		oncreate={(ref) => { controlsRef = ref }}
		onend={saveCameraHash}
	/>
</T.PerspectiveCamera>

<Sky
	elevation={interpolatedSettings?.skyElevation ?? props.skyElevation}
	azimuth={CONFIG.sky.azimuth}
	turbidity={interpolatedSettings?.skyTurbidity ?? props.skyTurbidity}
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
	radius={5500}
	baseHeight={60}
	peakHeight={250}
	peakAngle={Math.PI * 1.0}
	peakSpread={0.5}
	yPosition={40}
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

{#if grassMesh}
	<T is={grassMesh} />
{/if}

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

<PostProcessing
	skyElevation={props.skyElevation}
	skyAzimuth={CONFIG.sky.azimuth}
	godRaysIntensity={props.godRaysIntensity ?? 1.0}
	enabled={props.godRaysEnabled ?? true}
/>
