<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { mulberry32 } from '$lib/utils/random';
	import { createBarkTexture, getBranchGeometry } from '$lib/utils/tree';

	// Pine-specific constants
	const CONFIG = {
		trunk: { segments: 8, barkRidgeFreq: 6, barkBumpFreq: 10 },
		branch: { baseRadius: 0.04, radialSegments: 5 },
		subBranch: { baseRadius: 0.02, radialSegments: 4 },
		needle: { length: 0.55, radius: 0.006, segments: 3, perFascicle: 5 },
		rootFlare: { radius: 0.30, height: 0.01 }
	} as const;

	// Redder trunk color
	const COLORS = {
		trunk: new THREE.Color(0.35, 0.18, 0.12),
		branch: new THREE.Color(0.30, 0.15, 0.10),
		needleBase: new THREE.Color(0.02, 0.06, 0.03),
		needleTip: new THREE.Color(0.04, 0.10, 0.05)
	};

	interface Props {
		position?: [number, number, number];
		scale?: number;
		seed?: number;
		trunkHeight?: number;
		trunkBaseRadius?: number;
		trunkTopRadius?: number;
		whorls?: number;
		branchesPerWhorl?: number;
		branchLength?: number;
		branchSweep?: number;
		fasciclesPerBranch?: number;
		foliageStart?: number;
		leaderHeight?: number;
		leaderSpread?: number;
	}

	let {
		position = [0, 0, 0],
		scale = 1,
		seed = 42,
		trunkHeight = 12,
		trunkBaseRadius = 0.25,
		trunkTopRadius = 0.04,
		whorls = 10,
		branchesPerWhorl = 6,
		branchLength = 2.5,
		branchSweep = 0.4,
		fasciclesPerBranch = 12,
		foliageStart = 0.35,
		leaderHeight = 0.08,
		leaderSpread = 0.4
	}: Props = $props();

	const random = mulberry32(seed);
	const barkTexture = createBarkTexture('pine');

	// Visible trunk height (up to crown)
	const VISIBLE_TRUNK = trunkHeight;

	// Create trunk geometry
	function createTrunkGeometry(): THREE.BufferGeometry {
		const geometry = new THREE.CylinderGeometry(
			trunkTopRadius,
			trunkBaseRadius,
			VISIBLE_TRUNK,
			CONFIG.trunk.segments,
			32,
			false
		);

		const positions = geometry.attributes.position;
		const halfHeight = VISIBLE_TRUNK / 2;
		const flareZone = VISIBLE_TRUNK * CONFIG.rootFlare.height;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const y = positions.getY(i);
			const z = positions.getZ(i);

			const radius = Math.sqrt(x * x + z * z);
			if (radius < 0.01) continue;

			// Root flare
			const distFromBottom = y + halfHeight;
			let flareMultiplier = 1;
			if (distFromBottom < flareZone) {
				const flareProgress = 1 - distFromBottom / flareZone;
				const flareAmount = Math.pow(flareProgress, 2.5);
				flareMultiplier = 1 + (CONFIG.rootFlare.radius / trunkBaseRadius - 1) * flareAmount;
			}

			// Bark texture displacement
			const angle = Math.atan2(z, x);
			const ridge = Math.sin(angle * CONFIG.trunk.barkRidgeFreq) * 0.015;
			const bump = Math.sin(y * CONFIG.trunk.barkBumpFreq + angle * 3) * 0.01;

			const factor = flareMultiplier * (1 + ridge + bump);
			positions.setX(i, x * factor);
			positions.setZ(i, z * factor);
		}

		geometry.computeVertexNormals();
		return geometry;
	}

	// Create needle geometry (single long needle)
	function createNeedleGeometry(): THREE.BufferGeometry {
		const geometry = new THREE.CylinderGeometry(
			CONFIG.needle.radius * 0.3,
			CONFIG.needle.radius,
			CONFIG.needle.length,
			CONFIG.needle.segments,
			1
		);
		// Point along +Z axis
		geometry.rotateX(Math.PI / 2);
		geometry.translate(0, 0, CONFIG.needle.length / 2);
		return geometry;
	}

	// Generate branches and needles
	interface NeedleData {
		position: THREE.Vector3;
		rotation: THREE.Euler;
		scale: number;
		color: THREE.Color;
	}

	const branchMatrices: THREE.Matrix4[] = [];
	const subBranchMatrices: THREE.Matrix4[] = [];
	const needles: NeedleData[] = [];

	// Generate whorled branches
	for (let whorl = 0; whorl < whorls; whorl++) {
		const whorlProgress = whorl / (whorls - 1);
		const whorlY = VISIBLE_TRUNK * foliageStart + whorlProgress * VISIBLE_TRUNK * (1 - foliageStart);
		const trunkRadiusAtWhorl = trunkBaseRadius + (trunkTopRadius - trunkBaseRadius) * (whorlY / VISIBLE_TRUNK);

		// Equal width or widest in middle (slight bulge at 40-60% height)
		const middleBulge = 1 + 0.3 * Math.sin(whorlProgress * Math.PI);
		const whorlBranchLength = branchLength * middleBulge * (0.5 + random() * 1.0);

		const branchCount = branchesPerWhorl;
		const whorlOffset = whorl * 0.6 + random() * 0.3;

		for (let b = 0; b < branchCount; b++) {
			const angle = (b / branchCount) * Math.PI * 2 + whorlOffset;
			const thisBranchLength = whorlBranchLength * (0.3 + random() * 1.4);

			// Branches curve: start horizontal/slight down, then curve UP at tips
			const initialAngle = -0.1 + random() * 0.1; // Start slightly downward
			const droopAmount = branchSweep * 0.15 * (0.5 + random() * 0.5); // Minimal droop

			const branchPos = new THREE.Vector3(
				Math.cos(angle) * trunkRadiusAtWhorl,
				whorlY,
				Math.sin(angle) * trunkRadiusAtWhorl
			);

			const outwardDir = new THREE.Vector3(
				Math.cos(angle),
				initialAngle - droopAmount,
				Math.sin(angle)
			).normalize();

			const quaternion = new THREE.Quaternion();
			quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), outwardDir);
			const branchRot = new THREE.Euler().setFromQuaternion(quaternion);

			const branchMatrix = new THREE.Matrix4();
			branchMatrix.makeRotationFromQuaternion(quaternion);
			const branchWidth = 0.4 + random() * 1.2;
			branchMatrix.scale(new THREE.Vector3(thisBranchLength, branchWidth, branchWidth));
			branchMatrix.setPosition(branchPos);
			branchMatrices.push(branchMatrix);

			// Generate sub-branches pointing in all directions
			const subBranchCount = 4 + Math.floor(random() * 3);
			for (let sb = 0; sb < subBranchCount; sb++) {
				const subProgress = (sb + 0.3) / subBranchCount;
				const subT = 0.2 + subProgress * 0.6;

				// Position along main branch
				const subLocalX = thisBranchLength * subT;
				const subLocalY = -thisBranchLength * subT * droopAmount * subT * 0.3;
				const subLocalPos = new THREE.Vector3(subLocalX, subLocalY, 0);
				subLocalPos.applyEuler(branchRot);
				const subBranchPos = branchPos.clone().add(subLocalPos);

				// Sub-branch direction: random angles in all directions
				const subAngleH = (random() - 0.5) * Math.PI * 1.5; // Horizontal spread
				const subAngleV = (random() - 0.5) * 0.8; // Vertical spread

				const subDir = new THREE.Vector3(
					Math.cos(angle + subAngleH),
					subAngleV - 0.2,
					Math.sin(angle + subAngleH)
				).normalize();

				const subQuat = new THREE.Quaternion();
				subQuat.setFromUnitVectors(new THREE.Vector3(1, 0, 0), subDir);
				const subBranchRot = new THREE.Euler().setFromQuaternion(subQuat);

				const subBranchLength = thisBranchLength * (0.2 + random() * 0.8);
				const subBranchWidth = 0.3 + random() * 1.0;

				const subMatrix = new THREE.Matrix4();
				subMatrix.makeRotationFromQuaternion(subQuat);
				subMatrix.scale(new THREE.Vector3(subBranchLength, subBranchWidth, subBranchWidth));
				subMatrix.setPosition(subBranchPos);
				subBranchMatrices.push(subMatrix);

				// Needles on sub-branches - concentrated at tips
				const subFascicles = Math.floor(fasciclesPerBranch * 0.4);
				for (let f = 0; f < subFascicles; f++) {
					const fascicleProgress = f / Math.max(1, subFascicles - 1);
					// Concentrate at tips: t ranges from 0.6 to 1.0
					const t = 0.6 + fascicleProgress * 0.4;

					// Sub-branches curve upward at tips
					const upCurve = Math.pow(t, 2) * 0.3;
					const needleLocalPos = new THREE.Vector3(subBranchLength * t, upCurve * subBranchLength, 0);
					needleLocalPos.applyEuler(subBranchRot);
					const fasciclePos = subBranchPos.clone().add(needleLocalPos);

					for (let n = 0; n < CONFIG.needle.perFascicle; n++) {
						const needleAngle = (n / CONFIG.needle.perFascicle) * Math.PI * 2 + random() * 0.5;
						const spreadAngle = 0.4 + random() * 0.3;

						const needleDir = new THREE.Vector3(
							Math.cos(angle + subAngleH) * Math.cos(spreadAngle),
							Math.sin(spreadAngle) * Math.cos(needleAngle),
							Math.sin(angle + subAngleH) * Math.cos(spreadAngle) + Math.sin(needleAngle) * 0.4
						).normalize();

						const needleQuat = new THREE.Quaternion();
						needleQuat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), needleDir);
						needleQuat.multiply(new THREE.Quaternion().setFromEuler(
							new THREE.Euler(random() * 0.3 - 0.15, random() * 0.3 - 0.15, 0)
						));
						const needleRot = new THREE.Euler().setFromQuaternion(needleQuat);

						const colorMix = fascicleProgress * 0.4 + random() * 0.4;
						const needleColor = COLORS.needleBase.clone().lerp(COLORS.needleTip, colorMix);
						const needleScale = (0.7 + random() * 0.5);

						needles.push({
							position: fasciclePos.clone(),
							rotation: needleRot,
							scale: needleScale,
							color: needleColor
						});
					}
				}
			}

			// Needles on main branch - concentrated at tips with upward curve
			const mainFascicleCount = Math.floor(fasciclesPerBranch * 0.6);
			for (let f = 0; f < mainFascicleCount; f++) {
				const fascicleProgress = f / Math.max(1, mainFascicleCount - 1);
				// Concentrate at tips: t ranges from 0.5 to 1.0
				const t = 0.5 + fascicleProgress * 0.5;

				const localX = thisBranchLength * t;
				// Branch curves UP at tip
				const upCurve = Math.pow(t, 2) * 0.25;
				const localY = upCurve * thisBranchLength;

				const localPos = new THREE.Vector3(localX, localY, 0);
				localPos.applyEuler(branchRot);
				const fasciclePos = branchPos.clone().add(localPos);

				for (let n = 0; n < CONFIG.needle.perFascicle; n++) {
					const needleAngle = (n / CONFIG.needle.perFascicle) * Math.PI * 2 + random() * 0.5;
					const spreadAngle = 0.35 + random() * 0.25;

					const needleDir = new THREE.Vector3(
						Math.cos(angle) * Math.cos(spreadAngle),
						Math.sin(spreadAngle) * Math.cos(needleAngle),
						Math.sin(angle) * Math.cos(spreadAngle) + Math.sin(needleAngle) * 0.35
					).normalize();

					const needleQuat = new THREE.Quaternion();
					needleQuat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), needleDir);
					needleQuat.multiply(new THREE.Quaternion().setFromEuler(
						new THREE.Euler(random() * 0.25 - 0.125, random() * 0.25 - 0.125, 0)
					));
					const needleRot = new THREE.Euler().setFromQuaternion(needleQuat);

					const colorMix = fascicleProgress * 0.5 + random() * 0.3;
					const needleColor = COLORS.needleBase.clone().lerp(COLORS.needleTip, colorMix);
					const needleScale = (0.8 + random() * 0.4);

					needles.push({
						position: fasciclePos.clone(),
						rotation: needleRot,
						scale: needleScale,
						color: needleColor
					});
				}
			}
		}
	}

	// Apical leader (subtle top growth point)
	const actualLeaderHeight = trunkHeight * leaderHeight * 0.5;
	const leaderTiers = 3;
	const leaderBranchesPerTier = 3;

	for (let tier = 0; tier < leaderTiers; tier++) {
		const tierProgress = tier / (leaderTiers - 1);
		const tierY = VISIBLE_TRUNK + tierProgress * actualLeaderHeight;
		const tierRadius = leaderSpread * (1 - tierProgress * 0.7) * branchLength * 0.3;
		const tierOffset = tier * 0.8 + random() * 0.4;

		// Leader branches point upward and outward
		for (let b = 0; b < leaderBranchesPerTier; b++) {
			const angle = (b / leaderBranchesPerTier) * Math.PI * 2 + tierOffset;
			const branchLen = tierRadius * (0.7 + random() * 0.6);

			// Direction: upward and outward
			const upAngle = 0.4 + tierProgress * 0.4; // More vertical at top
			const outDir = new THREE.Vector3(
				Math.cos(angle) * (1 - upAngle),
				upAngle,
				Math.sin(angle) * (1 - upAngle)
			).normalize();

			const branchPos = new THREE.Vector3(
				Math.cos(angle) * trunkTopRadius * 0.5,
				tierY,
				Math.sin(angle) * trunkTopRadius * 0.5
			);

			// Leader branch matrix
			const leaderQuat = new THREE.Quaternion();
			leaderQuat.setFromUnitVectors(new THREE.Vector3(1, 0, 0), outDir);
			const leaderMatrix = new THREE.Matrix4();
			leaderMatrix.makeRotationFromQuaternion(leaderQuat);
			leaderMatrix.scale(new THREE.Vector3(branchLen, 0.5, 0.5));
			leaderMatrix.setPosition(branchPos);
			subBranchMatrices.push(leaderMatrix);

			// Needles at leader branch tips
			const leaderRot = new THREE.Euler().setFromQuaternion(leaderQuat);
			const tipFascicles = 4;
			for (let f = 0; f < tipFascicles; f++) {
				const t = 0.5 + (f / tipFascicles) * 0.5;
				const needleLocalPos = new THREE.Vector3(branchLen * t, t * 0.1 * branchLen, 0);
				needleLocalPos.applyEuler(leaderRot);
				const fasciclePos = branchPos.clone().add(needleLocalPos);

				for (let n = 0; n < CONFIG.needle.perFascicle; n++) {
					const needleAngle = (n / CONFIG.needle.perFascicle) * Math.PI * 2 + random() * 0.5;
					const spreadAngle = 0.5 + random() * 0.3;

					const needleDir = new THREE.Vector3(
						outDir.x * 0.5 + Math.cos(needleAngle) * 0.3,
						0.6 + Math.sin(spreadAngle) * 0.3,
						outDir.z * 0.5 + Math.sin(needleAngle) * 0.3
					).normalize();

					const needleQuat = new THREE.Quaternion();
					needleQuat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), needleDir);
					const needleRot = new THREE.Euler().setFromQuaternion(needleQuat);

					needles.push({
						position: fasciclePos.clone(),
						rotation: needleRot,
						scale: 0.8 + random() * 0.4,
						color: COLORS.needleTip.clone()
					});
				}
			}
		}
	}

	// Very top spike (subtle)
	for (let i = 0; i < 4; i++) {
		const progress = i / 3;
		const y = VISIBLE_TRUNK + actualLeaderHeight + progress * actualLeaderHeight * 0.15;
		const spikeAngle = i * 2.4 + random() * 0.3;
		const radius = 0.015 * (1 - progress * 0.9);

		const needlePos = new THREE.Vector3(
			Math.cos(spikeAngle) * radius,
			y,
			Math.sin(spikeAngle) * radius
		);
		const needleRot = new THREE.Euler(-Math.PI / 2 + progress * 0.2, spikeAngle, 0);

		needles.push({
			position: needlePos,
			rotation: needleRot,
			scale: 0.6 - progress * 0.4,
			color: COLORS.needleTip.clone()
		});
	}

	// Create instanced meshes
	const needleGeometry = createNeedleGeometry();
	const needleMaterial = new THREE.MeshStandardMaterial({
		color: COLORS.needleBase,
		roughness: 0.85,
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

	// Branch instanced mesh
	const branchGeometry = getBranchGeometry(CONFIG.branch.baseRadius, CONFIG.branch.radialSegments);
	const branchMaterial = new THREE.MeshStandardMaterial({
		color: COLORS.branch,
		map: barkTexture,
		roughness: 0.9
	});
	const branchInstancedMesh = new THREE.InstancedMesh(branchGeometry, branchMaterial, branchMatrices.length);
	branchMatrices.forEach((mat, i) => branchInstancedMesh.setMatrixAt(i, mat));
	branchInstancedMesh.instanceMatrix.needsUpdate = true;

	// Sub-branch instanced mesh
	const subBranchGeometry = getBranchGeometry(CONFIG.subBranch.baseRadius, CONFIG.subBranch.radialSegments);
	const subBranchInstancedMesh = new THREE.InstancedMesh(subBranchGeometry, branchMaterial, subBranchMatrices.length);
	subBranchMatrices.forEach((mat, i) => subBranchInstancedMesh.setMatrixAt(i, mat));
	subBranchInstancedMesh.instanceMatrix.needsUpdate = true;

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
	<T.Mesh geometry={trunkGeometry} position.y={VISIBLE_TRUNK / 2} castShadow receiveShadow>
		<T.MeshStandardMaterial color={COLORS.trunk} map={barkTexture} roughness={0.9} />
	</T.Mesh>

	<!-- Instanced branches -->
	<T is={branchInstancedMesh} castShadow />

	<!-- Instanced sub-branches -->
	<T is={subBranchInstancedMesh} castShadow />

	<!-- Instanced needles -->
	<T is={instancedMesh} castShadow />
</T.Group>
