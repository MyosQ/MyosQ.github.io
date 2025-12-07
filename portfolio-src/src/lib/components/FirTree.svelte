<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { mulberry32 } from '$lib/utils/random';

	// Fixed tree parameters (not configurable)
	const FIXED = {
		rootFlareRadius: 0.35,
		rootFlareHeight: 0.008,
		foliageEnd: 1
	};

	// Geometry/rendering constants
	const CONFIG = {
		trunk: { segments: 8, taperFactor: 0.7, barkRidgeFreq: 8, barkBumpFreq: 15 },
		branch: { baseRadius: 0.035, radialSegments: 5 },
		needle: { coneRadius: 0.04, coneHeight: 0.4, coneSides: 4, perCluster: 5, offset: 0.08 },
		colors: {
			trunk: new THREE.Color(0.18, 0.10, 0.05),
			branch: new THREE.Color(0.15, 0.08, 0.04),
			needleBase: new THREE.Color(0.005, 0.02, 0.005),
			needleTip: new THREE.Color(0.01, 0.04, 0.01)
		}
	} as const;

	// === CACHED RESOURCES (shared across all tree instances) ===
	let cachedBarkTexture: THREE.CanvasTexture | null = null;
	let cachedBranchGeometry: THREE.CylinderGeometry | null = null;

	function getBarkTexture(): THREE.CanvasTexture {
		if (!cachedBarkTexture) cachedBarkTexture = createBarkTexture();
		return cachedBarkTexture;
	}

	function getBranchGeometry(): THREE.CylinderGeometry {
		if (!cachedBranchGeometry) {
			// Unit-length cylinder along Y axis, will be rotated/scaled per instance
			cachedBranchGeometry = new THREE.CylinderGeometry(
				CONFIG.branch.baseRadius * 0.3, // top (tapered)
				CONFIG.branch.baseRadius,        // bottom
				1,                               // unit length
				CONFIG.branch.radialSegments,
				1,
				false
			);
			// Rotate so cylinder points along +X (branch direction)
			cachedBranchGeometry.rotateZ(-Math.PI / 2);
			// Move pivot to base
			cachedBranchGeometry.translate(0.5, 0, 0);
		}
		return cachedBranchGeometry;
	}

	// Create highly detailed bark texture procedurally
	function createBarkTexture(): THREE.CanvasTexture {
		const canvas = document.createElement('canvas');
		canvas.width = 512;
		canvas.height = 1024;
		const ctx = canvas.getContext('2d')!;
		const W = canvas.width;
		const H = canvas.height;

		// Seeded random for texture
		let texSeed = 12345;
		const texRand = () => {
			texSeed = (texSeed * 1103515245 + 12345) & 0x7fffffff;
			return texSeed / 0x7fffffff;
		};

		// Dark base
		ctx.fillStyle = '#1a0f08';
		ctx.fillRect(0, 0, W, H);

		// Layer 1: Deep fissures (the darkest cracks)
		for (let i = 0; i < 25; i++) {
			const x = texRand() * W;
			const width = 1 + texRand() * 3;
			ctx.strokeStyle = `rgba(0, 0, 0, ${0.6 + texRand() * 0.4})`;
			ctx.lineWidth = width;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			let cx = x;
			for (let y = 0; y < H; y += 8) {
				cx += (texRand() - 0.5) * 4;
				ctx.lineTo(cx, y);
			}
			ctx.stroke();
		}

		// Layer 2: Bark plates (raised sections between fissures)
		for (let i = 0; i < 80; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const plateW = 15 + texRand() * 40;
			const plateH = 30 + texRand() * 120;
			const brightness = 25 + texRand() * 35;

			// Plate base
			ctx.fillStyle = `rgb(${brightness}, ${brightness * 0.6}, ${brightness * 0.35})`;
			ctx.fillRect(x, y, plateW, plateH);

			// Highlight on top edge (simulates 3D)
			ctx.fillStyle = `rgba(${brightness + 30}, ${brightness * 0.7 + 20}, ${brightness * 0.4 + 10}, 0.5)`;
			ctx.fillRect(x, y, plateW, 3 + texRand() * 4);

			// Shadow on bottom edge
			ctx.fillStyle = `rgba(0, 0, 0, ${0.3 + texRand() * 0.3})`;
			ctx.fillRect(x, y + plateH - 4, plateW, 4);
		}

		// Layer 3: Vertical fibrous texture
		for (let i = 0; i < 300; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const length = 20 + texRand() * 80;
			const width = 0.5 + texRand() * 2;
			const dark = texRand() > 0.5;

			ctx.strokeStyle = dark
				? `rgba(0, 0, 0, ${0.1 + texRand() * 0.3})`
				: `rgba(60, 40, 25, ${0.1 + texRand() * 0.2})`;
			ctx.lineWidth = width;
			ctx.beginPath();
			ctx.moveTo(x, y);
			let cx = x;
			for (let dy = 0; dy < length; dy += 5) {
				cx += (texRand() - 0.5) * 2;
				ctx.lineTo(cx, y + dy);
			}
			ctx.stroke();
		}

		// Layer 4: Rough texture noise
		const imageData = ctx.getImageData(0, 0, W, H);
		const data = imageData.data;
		for (let i = 0; i < data.length; i += 4) {
			const noise = (texRand() - 0.5) * 30;
			data[i] = Math.max(0, Math.min(255, data[i] + noise));
			data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.7));
			data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.5));
		}
		ctx.putImageData(imageData, 0, 0);

		// Layer 5: Deep crevices and shadow lines
		for (let i = 0; i < 60; i++) {
			const x = texRand() * W;
			ctx.strokeStyle = `rgba(0, 0, 0, ${0.4 + texRand() * 0.4})`;
			ctx.lineWidth = 0.5 + texRand() * 1.5;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			let cx = x;
			for (let y = 0; y < H; y += 3) {
				cx += (texRand() - 0.5) * 2;
				ctx.lineTo(cx, y);
			}
			ctx.stroke();
		}

		// Layer 6: Horizontal cracks (less frequent)
		for (let i = 0; i < 20; i++) {
			const y = texRand() * H;
			const startX = texRand() * W * 0.5;
			const length = 30 + texRand() * 80;
			ctx.strokeStyle = `rgba(0, 0, 0, ${0.3 + texRand() * 0.3})`;
			ctx.lineWidth = 0.5 + texRand();
			ctx.beginPath();
			ctx.moveTo(startX, y);
			let cy = y;
			for (let dx = 0; dx < length; dx += 5) {
				cy += (texRand() - 0.5) * 3;
				ctx.lineTo(startX + dx, cy);
			}
			ctx.stroke();
		}

		// Layer 7: Moss/lichen spots (subtle green/gray patches)
		for (let i = 0; i < 15; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const r = 3 + texRand() * 12;
			const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
			gradient.addColorStop(0, `rgba(30, 35, 25, ${0.2 + texRand() * 0.3})`);
			gradient.addColorStop(1, 'rgba(30, 35, 25, 0)');
			ctx.fillStyle = gradient;
			ctx.fillRect(x - r, y - r, r * 2, r * 2);
		}

		// Layer 8: Final detail - tiny pores and dots
		for (let i = 0; i < 500; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const r = 0.5 + texRand() * 1.5;
			ctx.fillStyle = texRand() > 0.5
				? `rgba(0, 0, 0, ${0.2 + texRand() * 0.4})`
				: `rgba(50, 35, 20, ${0.2 + texRand() * 0.3})`;
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2);
			ctx.fill();
		}

		const texture = new THREE.CanvasTexture(canvas);
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(1, 3);
		texture.anisotropy = 16;
		return texture;
	}

	const barkTexture = getBarkTexture();

	interface Props {
		position?: [number, number, number];
		scale?: number;
		seed?: number;
		trunkHeight?: number;
		trunkBaseRadius?: number;
		trunkTopRadius?: number;
		branchTiers?: number;
		branchesPerTier?: number;
		branchDroop?: number;
		branchLength?: number;
		needleDensity?: number;
		needleSize?: number;
		foliageStart?: number;
	}

	let {
		position = [0, 0, 0],
		scale = 1,
		seed = 42,
		trunkHeight = 8,
		trunkBaseRadius = 0.2,
		trunkTopRadius = 0.01,
		branchTiers = 40,
		branchesPerTier = 7,
		branchDroop = 0.65,
		branchLength = 1.7,
		needleDensity = 16,
		needleSize = 0.8,
		foliageStart = 0.12
	}: Props = $props();

	// Combine props into TREE object for internal use
	const TREE = {
		trunkHeight,
		trunkBaseRadius,
		trunkTopRadius,
		rootFlareRadius: FIXED.rootFlareRadius,
		rootFlareHeight: FIXED.rootFlareHeight,
		branchTiers,
		branchesPerTier,
		branchDroop,
		branchLength,
		needleDensity,
		needleSize,
		foliageStart,
		foliageEnd: FIXED.foliageEnd
	};

	const random = mulberry32(seed);

	// Derived values from params
	const VISIBLE_TRUNK_HEIGHT = TREE.trunkHeight * TREE.foliageEnd;

	// Create trunk with bark detail and root flare - only up to foliage height
	function createTrunkGeometry(): THREE.BufferGeometry {
		const geometry = new THREE.CylinderGeometry(
			TREE.trunkTopRadius,
			TREE.trunkBaseRadius,
			VISIBLE_TRUNK_HEIGHT,
			CONFIG.trunk.segments,
			32,
			false
		);

		const positions = geometry.attributes.position;
		const halfHeight = VISIBLE_TRUNK_HEIGHT / 2;
		const flareZone = VISIBLE_TRUNK_HEIGHT * TREE.rootFlareHeight;

		// Add bark displacement and root flare
		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const y = positions.getY(i);
			const z = positions.getZ(i);

			// Skip top and bottom caps (center vertices)
			const radius = Math.sqrt(x * x + z * z);
			if (radius < 0.01) continue;

			// Root flare - exponential expansion at the base
			const distFromBottom = y + halfHeight; // 0 at bottom, VISIBLE_TRUNK_HEIGHT at top
			let flareMultiplier = 1;
			if (distFromBottom < flareZone) {
				// How far into the flare zone (1 at bottom, 0 at flare boundary)
				const flareProgress = 1 - distFromBottom / flareZone;
				// Exponential curve for natural root flare shape
				const flareAmount = Math.pow(flareProgress, 2.5);
				// Scale from base radius to flare radius
				flareMultiplier = 1 + (TREE.rootFlareRadius / TREE.trunkBaseRadius - 1) * flareAmount;
			}

			// Bark ridges - vertical grooves
			const angle = Math.atan2(z, x);
			const ridge = Math.sin(angle * CONFIG.trunk.barkRidgeFreq) * 0.02;

			// Bark texture - irregular bumps
			const bump =
				Math.sin(y * CONFIG.trunk.barkBumpFreq + angle * 3) * Math.cos(angle * 7 + y * 2) * 0.015;

			// Apply displacement radially with flare
			const factor = flareMultiplier * (1 + ridge + bump);
			positions.setX(i, x * factor);
			positions.setZ(i, z * factor);
		}

		geometry.computeVertexNormals();
		return geometry;
	}

	// Create needle cluster geometry (cone-like shape pointing outward)
	function createNeedleClusterGeometry(): THREE.BufferGeometry {
		const geometry = new THREE.ConeGeometry(
			CONFIG.needle.coneRadius,
			CONFIG.needle.coneHeight,
			CONFIG.needle.coneSides,
			1
		);
		geometry.rotateX(Math.PI / 2);
		geometry.translate(0, 0, CONFIG.needle.coneHeight / 2);
		return geometry;
	}

	// Generate all branch data
	interface NeedleData {
		position: THREE.Vector3;
		rotation: THREE.Euler;
		scale: number;
		color: THREE.Color;
	}

	const branchMatrices: THREE.Matrix4[] = [];
	const needles: NeedleData[] = [];

	// Generate branches tier by tier (fir tree shape - conical)
	for (let tier = 0; tier < TREE.branchTiers; tier++) {
		const tierProgress = tier / (TREE.branchTiers - 1);
		const tierY = VISIBLE_TRUNK_HEIGHT * TREE.foliageStart + tierProgress * VISIBLE_TRUNK_HEIGHT * (1 - TREE.foliageStart);
		const trunkRadiusAtTier = TREE.trunkBaseRadius + (TREE.trunkTopRadius - TREE.trunkBaseRadius) * tierProgress;

		const baseBranchLength = (1 - Math.pow(tierProgress, 1.8)) * TREE.branchLength * (1 - tierProgress * 0.4) + 0.08;
		const branchRadiusScale = 1 - tierProgress * 0.7;
		const branchCount = tier >= TREE.branchTiers - 3
			? Math.max(4, TREE.branchesPerTier - (tier - TREE.branchTiers + 4))
			: TREE.branchesPerTier;
		const angleOffset = tier * 0.5 + random() * 0.5;

		for (let b = 0; b < branchCount; b++) {
			const angle = (b / branchCount) * Math.PI * 2 + angleOffset + (random() - 0.5) * 0.6;
			const branchLength = baseBranchLength * (0.6 + random() * 0.6);
			const droop = TREE.branchDroop * (0.4 + tierProgress * 0.6) * (0.6 + random() * 0.8);

			const branchPos = new THREE.Vector3(
				Math.cos(angle) * trunkRadiusAtTier,
				tierY,
				Math.sin(angle) * trunkRadiusAtTier
			);

			const outwardDir = new THREE.Vector3(Math.cos(angle), -droop, Math.sin(angle)).normalize();
			const quaternion = new THREE.Quaternion();
			quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), outwardDir);
			const branchRot = new THREE.Euler().setFromQuaternion(quaternion);

			// Create transform matrix for instanced branch
			const branchMatrix = new THREE.Matrix4();
			branchMatrix.makeRotationFromQuaternion(quaternion);
			branchMatrix.scale(new THREE.Vector3(branchLength, branchRadiusScale, branchRadiusScale));
			branchMatrix.setPosition(branchPos);
			branchMatrices.push(branchMatrix);

			// Generate needles along branch
			for (let n = 0; n < TREE.needleDensity; n++) {
				const clusterProgress = n / (TREE.needleDensity - 1);
				const t = 0.1 + clusterProgress * 0.85;
				const localX = branchLength * t;
				const localY = -branchLength * t * 0.2 * t;

				const localPos = new THREE.Vector3(localX, localY, 0);
				localPos.applyEuler(branchRot);
				const clusterPos = branchPos.clone().add(localPos);

				for (let needle = 0; needle < CONFIG.needle.perCluster; needle++) {
					const needleAngle = (needle / CONFIG.needle.perCluster) * Math.PI * 2 + random() * 0.5;
					const perpOffset = (CONFIG.needle.offset + random() * 0.06) * (1 - tierProgress * 0.7);
					const offsetVec = new THREE.Vector3(0, Math.cos(needleAngle) * perpOffset, Math.sin(needleAngle) * perpOffset);
					offsetVec.applyEuler(branchRot);

					const needlePos = clusterPos.clone().add(offsetVec);
					const needleDir = new THREE.Vector3(Math.cos(angle), -droop * 0.3, Math.sin(angle)).normalize();
					const needleQuat = new THREE.Quaternion();
					needleQuat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), needleDir);
					needleQuat.multiply(new THREE.Quaternion().setFromEuler(
						new THREE.Euler(random() * 0.3, random() * 0.3, random() * 0.3)
					));
					const needleRot = new THREE.Euler().setFromQuaternion(needleQuat);

					const colorMix = clusterProgress * 0.6 + random() * 0.4;
					const needleColor = CONFIG.colors.needleBase.clone().lerp(CONFIG.colors.needleTip, colorMix);
					const needleScale = TREE.needleSize * (1.0 - tierProgress * 0.85) * (0.8 + random() * 0.3);

					needles.push({ position: needlePos, rotation: needleRot, scale: needleScale, color: needleColor });
				}
			}
		}
	}

	// Apical leader (top growth)
	const leaderHeight = TREE.trunkHeight * 0.02;
	const leaderY = VISIBLE_TRUNK_HEIGHT;
	const leaderNeedles = 10;

	for (let i = 0; i < leaderNeedles; i++) {
		const progress = i / (leaderNeedles - 1);
		const y = leaderY + progress * leaderHeight;
		const leaderAngle = i * 2.4 + random() * 0.3;
		const radius = 0.015 * (1 - progress * 0.9);

		const needlePos = new THREE.Vector3(Math.cos(leaderAngle) * radius, y, Math.sin(leaderAngle) * radius);
		const needleRot = new THREE.Euler(-Math.PI / 2 + progress * 0.2 + random() * 0.1, leaderAngle, 0);
		const needleScale = TREE.needleSize * (0.3 - progress * 0.15);

		needles.push({ position: needlePos, rotation: needleRot, scale: needleScale, color: CONFIG.colors.needleTip.clone() });
	}

	// Create instanced mesh for needles
	const needleGeometry = createNeedleClusterGeometry();
	const needleMaterial = new THREE.MeshStandardMaterial({
		color: CONFIG.colors.needleBase,
		roughness: 0.9,
		metalness: 0.0
	});
	const instancedMesh = new THREE.InstancedMesh(needleGeometry, needleMaterial, needles.length);

	// Set instance matrices and colors
	const matrix = new THREE.Matrix4();
	const instanceColors = new Float32Array(needles.length * 3);

	needles.forEach((needle, i) => {
		matrix.makeRotationFromEuler(needle.rotation);
		matrix.scale(new THREE.Vector3(needle.scale, needle.scale, needle.scale));
		matrix.setPosition(needle.position);
		instancedMesh.setMatrixAt(i, matrix);
		instanceColors[i * 3] = needle.color.r;
		instanceColors[i * 3 + 1] = needle.color.g;
		instanceColors[i * 3 + 2] = needle.color.b;
	});

	instancedMesh.instanceMatrix.needsUpdate = true;
	instancedMesh.geometry.setAttribute('color', new THREE.InstancedBufferAttribute(instanceColors, 3));

	// Create instanced mesh for branches
	const branchGeometry = getBranchGeometry();
	const branchMaterial = new THREE.MeshStandardMaterial({
		color: CONFIG.colors.branch,
		map: barkTexture,
		roughness: 0.9
	});
	const branchInstancedMesh = new THREE.InstancedMesh(branchGeometry, branchMaterial, branchMatrices.length);
	branchMatrices.forEach((mat, i) => branchInstancedMesh.setMatrixAt(i, mat));
	branchInstancedMesh.instanceMatrix.needsUpdate = true;

	const trunkGeometry = createTrunkGeometry();
</script>

<T.Group
	position.x={position[0]}
	position.y={position[1]}
	position.z={position[2]}
	scale.x={scale}
	scale.y={scale}
	scale.z={scale}
>
	<!-- Trunk -->
	<T.Mesh geometry={trunkGeometry} position.y={VISIBLE_TRUNK_HEIGHT / 2} castShadow receiveShadow>
		<T.MeshStandardMaterial color={CONFIG.colors.trunk} map={barkTexture} roughness={0.95} />
	</T.Mesh>

	<!-- Instanced branches -->
	<T is={branchInstancedMesh} castShadow />

	<!-- Instanced needles -->
	<T is={instancedMesh} castShadow />
</T.Group>
