<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { mulberry32 } from '$lib/utils/random';
	import { createBarkTexture, getBranchGeometry, type NeedleData } from '$lib/utils/tree';

	const FIXED = {
		rootFlareMultiplier: 1.75,
		rootFlareHeight: 0.008,
		foliageEnd: 1
	};

	const CONFIG = {
		trunk: { segments: 8, barkRidgeFreq: 8, barkBumpFreq: 15 },
		branch: { baseRadius: 0.035, radialSegments: 5 },
		needle: { coneRadius: 0.04, coneHeight: 0.4, coneSides: 4, perCluster: 5, offset: 0.08 },
		colors: {
			trunk: new THREE.Color(0.18, 0.10, 0.05),
			branch: new THREE.Color(0.15, 0.08, 0.04),
			needleBase: new THREE.Color(0.005, 0.02, 0.005),
			needleTip: new THREE.Color(0.01, 0.04, 0.01)
		}
	} as const;

	const barkTexture = createBarkTexture('fir');

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

	const TREE = {
		trunkHeight,
		trunkBaseRadius,
		trunkTopRadius,
		rootFlareMultiplier: FIXED.rootFlareMultiplier,
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
	const VISIBLE_TRUNK_HEIGHT = TREE.trunkHeight * TREE.foliageEnd;

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

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const y = positions.getY(i);
			const z = positions.getZ(i);

			const radius = Math.sqrt(x * x + z * z);
			if (radius < 0.01) continue;

			const distFromBottom = y + halfHeight;
			let flareMultiplier = 1;
			if (distFromBottom < flareZone) {
				const flareProgress = 1 - distFromBottom / flareZone;
				const flareAmount = Math.pow(flareProgress, 2.5);
				flareMultiplier = 1 + (TREE.rootFlareMultiplier - 1) * flareAmount;
			}

			const angle = Math.atan2(z, x);
			const ridge = Math.sin(angle * CONFIG.trunk.barkRidgeFreq) * 0.02;
			const bump = Math.sin(y * CONFIG.trunk.barkBumpFreq + angle * 3) * Math.cos(angle * 7 + y * 2) * 0.015;
			const factor = flareMultiplier * (1 + ridge + bump);
			positions.setX(i, x * factor);
			positions.setZ(i, z * factor);
		}

		geometry.computeVertexNormals();
		return geometry;
	}

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

	const branchMatrices: THREE.Matrix4[] = [];
	const needles: NeedleData[] = [];

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

			const branchMatrix = new THREE.Matrix4();
			branchMatrix.makeRotationFromQuaternion(quaternion);
			branchMatrix.scale(new THREE.Vector3(branchLength, branchRadiusScale, branchRadiusScale));
			branchMatrix.setPosition(branchPos);
			branchMatrices.push(branchMatrix);

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

	const needleGeometry = createNeedleClusterGeometry();
	const needleMaterial = new THREE.MeshStandardMaterial({
		color: CONFIG.colors.needleBase,
		roughness: 0.9,
		metalness: 0.0
	});
	const instancedMesh = new THREE.InstancedMesh(needleGeometry, needleMaterial, needles.length);

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

	const branchGeometry = getBranchGeometry(CONFIG.branch.baseRadius, CONFIG.branch.radialSegments);
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
	<T.Mesh geometry={trunkGeometry} position.y={VISIBLE_TRUNK_HEIGHT / 2} castShadow receiveShadow>
		<T.MeshStandardMaterial color={CONFIG.colors.trunk} map={barkTexture} roughness={0.95} />
	</T.Mesh>
	<T is={branchInstancedMesh} castShadow />
	<T is={instancedMesh} castShadow />
</T.Group>
