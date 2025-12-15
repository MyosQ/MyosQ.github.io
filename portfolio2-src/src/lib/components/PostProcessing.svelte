<script lang="ts">
	import { useThrelte, useTask, T } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import {
		EffectComposer,
		EffectPass,
		RenderPass,
		GodRaysEffect,
		KernelSize,
		BlendFunction
	} from 'postprocessing';

	interface Props {
		skyElevation: number;
		skyAzimuth: number;
		godRaysIntensity?: number;
		godRaysDensity?: number;
		godRaysDecay?: number;
		godRaysWeight?: number;
		enabled?: boolean;
	}

	let {
		skyElevation,
		skyAzimuth,
		godRaysIntensity = 1.0,
		godRaysDensity = 0.96,
		godRaysDecay = 0.92,
		godRaysWeight = 0.3,
		enabled = true
	}: Props = $props();

	const { scene, renderer, camera, size, renderStage, autoRender } = useThrelte();

	let composer: EffectComposer;
	let sunMesh: THREE.Mesh | undefined;
	let godRaysEffect: GodRaysEffect | undefined;

	// Calculate sun position from sky params (distance must be > mountain radius of 2800)
	function getSunPosition(elevation: number, azimuth: number, distance: number = 4000): THREE.Vector3 {
		const phi = THREE.MathUtils.degToRad(90 - elevation);
		const theta = THREE.MathUtils.degToRad(azimuth);
		return new THREE.Vector3(
			distance * Math.sin(phi) * Math.sin(theta),
			distance * Math.cos(phi),
			distance * Math.sin(phi) * Math.cos(theta)
		);
	}

	// Update sun position when sky params change
	$effect(() => {
		if (sunMesh) {
			const pos = getSunPosition(skyElevation, skyAzimuth);
			sunMesh.position.copy(pos);
		}
	});

	function setupEffectComposer(cam: THREE.Camera) {
		if (!sunMesh || !enabled) return;

		composer.removeAllPasses();
		composer.addPass(new RenderPass(scene, cam));

		godRaysEffect = new GodRaysEffect(cam, sunMesh, {
			blendFunction: BlendFunction.ADD,
			samples: 60,
			density: godRaysDensity,
			decay: godRaysDecay,
			weight: godRaysWeight,
			exposure: godRaysIntensity,
			clampMax: 1.0,
			kernelSize: KernelSize.SMALL
		});

		composer.addPass(new EffectPass(cam, godRaysEffect));
	}

	onMount(() => {
		composer = new EffectComposer(renderer);

		// Wait for sun mesh to be created
		const checkSun = setInterval(() => {
			if (sunMesh) {
				clearInterval(checkSun);
				setupEffectComposer($camera);
			}
		}, 50);

		const before = autoRender.current;
		autoRender.set(false);

		return () => {
			clearInterval(checkSun);
			autoRender.set(before);
			composer?.dispose();
		};
	});

	$effect(() => {
		if (composer && sunMesh && $camera) {
			setupEffectComposer($camera);
		}
	});

	$effect(() => {
		if (composer) {
			composer.setSize($size.width, $size.height);
		}
	});

	// Update god rays params
	$effect(() => {
		if (godRaysEffect) {
			godRaysEffect.godRaysMaterial.density = godRaysDensity;
			godRaysEffect.godRaysMaterial.decay = godRaysDecay;
			godRaysEffect.godRaysMaterial.weight = godRaysWeight;
			godRaysEffect.godRaysMaterial.exposure = godRaysIntensity;
		}
	});

	useTask(
		(delta) => {
			if (composer && enabled) {
				composer.render(delta);
			} else if (renderer && $camera) {
				renderer.render(scene, $camera);
			}
		},
		{ stage: renderStage, autoInvalidate: false }
	);

	const initialSunPos = getSunPosition(skyElevation, skyAzimuth);
</script>

<!-- Sun light source mesh (visible as bright disc, behind silhouettes) -->
<T.Mesh
	position={[initialSunPos.x, initialSunPos.y, initialSunPos.z]}
	oncreate={(ref) => { sunMesh = ref }}
>
	<T.SphereGeometry args={[150, 16, 16]} />
	<T.MeshBasicMaterial color="#ffdd88" transparent opacity={0.9} />
</T.Mesh>
