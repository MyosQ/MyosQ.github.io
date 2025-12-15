<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import LightingTuner from '$lib/components/LightingTuner.svelte';
	import LiquidGlass from '$lib/components/LiquidGlass.svelte';
	import ScrollPosition from '$lib/components/ScrollPosition.svelte';
	import { browser } from '$app/environment';
	import { KEYFRAMES, lerpSettings, type Viewpoint, type CameraState } from '$lib/config/scene';

	const initial = KEYFRAMES[0].settings;
	let ambientColor = $state(initial.ambientColor);
	let ambientIntensity = $state(initial.ambientIntensity);
	let directionalIntensity = $state(initial.directionalIntensity);
	let waterColor = $state(initial.waterColor);
	let skyElevation = $state(initial.skyElevation);
	let skyTurbidity = $state(initial.skyTurbidity);
	let fogColor = $state(initial.fogColor);
	let fogDensity = $state(initial.fogDensity);
	let godRaysEnabled = $state(initial.godRaysEnabled);
	let godRaysIntensity = $state(initial.godRaysIntensity);

	let cameraPathEnabled = $state(true);
	let cameraPathProgress = $state(0);
	let cameraPathValue = $derived(cameraPathEnabled ? cameraPathProgress : undefined);

	$effect(() => {
		if (cameraPathEnabled) {
			const s = lerpSettings(cameraPathProgress);
			ambientColor = s.ambientColor;
			ambientIntensity = s.ambientIntensity;
			directionalIntensity = s.directionalIntensity;
			waterColor = s.waterColor;
			skyElevation = s.skyElevation;
			skyTurbidity = s.skyTurbidity;
			fogColor = s.fogColor;
			fogDensity = s.fogDensity;
			godRaysIntensity = s.godRaysIntensity;
		}
	});

	let canvasContainer: HTMLDivElement;
	let targetProgress = $state(0);
	let animationFrame: number | undefined;

	function handleWheel(e: WheelEvent) {
		if (!cameraPathEnabled) return;
		e.preventDefault();
		const delta = e.deltaY * 0.0003;
		targetProgress = Math.max(0, Math.min(1, targetProgress + delta));
	}

	let touchStartY = 0;
	function handleTouchStart(e: TouchEvent) {
		touchStartY = e.touches[0].clientY;
	}
	function handleTouchMove(e: TouchEvent) {
		if (!cameraPathEnabled) return;
		e.preventDefault();
		const touchY = e.touches[0].clientY;
		const delta = (touchStartY - touchY) * 0.002;
		targetProgress = Math.max(0, Math.min(1, targetProgress + delta));
		touchStartY = touchY;
	}

	function animateProgress() {
		const diff = targetProgress - cameraPathProgress;
		if (Math.abs(diff) > 0.0001) {
			cameraPathProgress += diff * 0.18;
			animationFrame = requestAnimationFrame(animateProgress);
		} else {
			cameraPathProgress = targetProgress;
			animationFrame = undefined;
		}
	}

	$effect(() => {
		if (cameraPathEnabled && Math.abs(targetProgress - cameraPathProgress) > 0.0001 && !animationFrame) {
			animationFrame = requestAnimationFrame(animateProgress);
		}
	});

	$effect(() => {
		if (canvasContainer) {
			canvasContainer.addEventListener('wheel', handleWheel, { passive: false });
			canvasContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
			canvasContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
			return () => {
				canvasContainer.removeEventListener('wheel', handleWheel);
				canvasContainer.removeEventListener('touchstart', handleTouchStart);
				canvasContainer.removeEventListener('touchmove', handleTouchMove);
				if (animationFrame) cancelAnimationFrame(animationFrame);
			};
		}
	});

	let viewpoints = $state<Viewpoint[]>([]);
	let getCameraState: (() => CameraState) | undefined;
	let setCameraState = $state<CameraState | null>(null);

	$effect(() => {
		if (browser) {
			const saved = localStorage.getItem('portfolio-viewpoints');
			if (saved) try { viewpoints = JSON.parse(saved); } catch {}
		}
	});

	function saveViewpoints() {
		if (browser) localStorage.setItem('portfolio-viewpoints', JSON.stringify(viewpoints));
	}

	function saveViewpoint() {
		if (!getCameraState) return;
		viewpoints = [...viewpoints, {
			id: Date.now().toString(),
			name: `View ${viewpoints.length + 1}`,
			camera: getCameraState(),
			settings: { ambientColor, ambientIntensity, directionalIntensity, waterColor, skyElevation, skyTurbidity, fogColor, fogDensity, godRaysEnabled, godRaysIntensity }
		}];
		saveViewpoints();
	}

	function loadViewpoint(vp: Viewpoint) {
		ambientColor = vp.settings.ambientColor;
		ambientIntensity = vp.settings.ambientIntensity;
		directionalIntensity = vp.settings.directionalIntensity;
		waterColor = vp.settings.waterColor;
		skyElevation = vp.settings.skyElevation;
		skyTurbidity = vp.settings.skyTurbidity;
		fogColor = vp.settings.fogColor;
		fogDensity = vp.settings.fogDensity;
		godRaysEnabled = vp.settings.godRaysEnabled;
		godRaysIntensity = vp.settings.godRaysIntensity;
		setCameraState = { ...vp.camera };
		setTimeout(() => setCameraState = null, 100);
	}

	function deleteViewpoint(id: string) {
		viewpoints = viewpoints.filter(v => v.id !== id);
		saveViewpoints();
	}

	function copyViewpoint(vp: Viewpoint) {
		navigator.clipboard.writeText(JSON.stringify({ camera: vp.camera, settings: vp.settings }, null, 2));
	}

	function handleCameraReady(getter: () => CameraState) {
		getCameraState = getter;
	}
</script>

<svelte:head>
	<title>Portfolio | Frej Sundqvist</title>
</svelte:head>

<div class="canvas-container" bind:this={canvasContainer}>
	<Canvas>
		<Scene
			{ambientColor} {ambientIntensity} {directionalIntensity} {waterColor}
			{skyElevation} {skyTurbidity} {fogColor} {fogDensity}
			{godRaysEnabled} {godRaysIntensity}
			cameraPathProgress={cameraPathValue}
			onCameraReady={handleCameraReady}
			{setCameraState}
		/>
	</Canvas>
</div>

<ScrollPosition
	progress={cameraPathProgress}
	from={{ x: '50%', y: '50%', anchorX: 0.5, anchorY: 0.5 }}
	to={{ x: '5%', y: '5%', anchorX: 0, anchorY: 0 }}
>
	<LiquidGlass roundness={24} paddingX={3} paddingY={2} blur={14} interactive={false}>
		<div class="glass-content">
			<h1>Frej Sundqvist</h1>
			<p>Software Developer</p>
		</div>
	</LiquidGlass>
</ScrollPosition>

<div class="desktop-only">
	<div class="camera-path">
		<label>
			<input type="checkbox" bind:checked={cameraPathEnabled} />
			Path
		</label>
		{#if cameraPathEnabled}
			<div class="slider-container">
				<input type="range" min="0" max="1" step="0.001" bind:value={cameraPathProgress} />
				<div class="keyframe-markers">
					{#each KEYFRAMES as _, i}
						<div class="marker" style="left: {(i / (KEYFRAMES.length - 1)) * 100}%"></div>
					{/each}
				</div>
			</div>
			<span>{(cameraPathProgress * 100).toFixed(0)}%</span>
		{/if}
	</div>

	<div class="viewpoints">
		<button class="save-btn" onclick={saveViewpoint}>+ Save View</button>
		{#each viewpoints as vp (vp.id)}
			<div class="viewpoint">
				<button class="load-btn" onclick={() => loadViewpoint(vp)}>{vp.name}</button>
				<button class="copy-btn" onclick={() => copyViewpoint(vp)}>⧉</button>
				<button class="delete-btn" onclick={() => deleteViewpoint(vp.id)}>×</button>
			</div>
		{/each}
	</div>

	<LightingTuner
		bind:ambientColor bind:ambientIntensity bind:directionalIntensity bind:waterColor
		bind:skyElevation bind:skyTurbidity bind:fogColor bind:fogDensity
		bind:godRaysEnabled bind:godRaysIntensity
		onchange={() => {}}
	/>
</div>

<style>
	.canvas-container {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
	}

	.glass-content {
		text-align: center;
		color: #fff;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		font-family: system-ui, -apple-system, sans-serif;

		h1 {
			margin: 0 0 0.25em;
			font-size: 2.5rem;
			font-weight: 300;
			letter-spacing: 0.05em;
		}

		p {
			margin: 0;
			font-size: 1rem;
			font-weight: 400;
			opacity: 0.85;
			letter-spacing: 0.1em;
			text-transform: uppercase;
		}
	}
	.desktop-only {
		display: contents;

		& .camera-path {
			position: fixed;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			background: rgba(0, 0, 0, 0.8);
			padding: 10px 20px;
			border-radius: 8px;
			display: flex;
			align-items: center;
			gap: 12px;
			color: #fff;
			font-family: monospace;
			font-size: 14px;
			z-index: 1000;

			label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
			span { width: 40px; text-align: right; }

			.slider-container {
				position: relative;
				width: 300px;
				input[type="range"] { width: 100%; }
			}
			.keyframe-markers {
				position: absolute;
				top: 50%;
				left: 8px;
				right: 8px;
				height: 0;
				pointer-events: none;
			}
			.marker {
				position: absolute;
				width: 2px;
				height: 12px;
				background: rgba(255, 255, 255, 0.6);
				transform: translate(-50%, -50%);
				border-radius: 1px;
			}
		}

		& .viewpoints {
			position: fixed;
			bottom: 20px;
			left: 20px;
			background: rgba(0, 0, 0, 0.8);
			padding: 8px;
			border-radius: 8px;
			display: flex;
			flex-direction: column;
			gap: 6px;
			color: #fff;
			font-family: monospace;
			font-size: 12px;
			z-index: 1000;
			max-height: 300px;
			overflow-y: auto;

			.save-btn {
				background: #2a6; border: none; color: #fff; padding: 6px 12px;
				cursor: pointer; border-radius: 4px; font-family: inherit;
				&:hover { background: #3b7; }
			}
			.viewpoint { display: flex; gap: 4px; }
			.load-btn {
				flex: 1; background: #444; border: none; color: #fff; padding: 4px 8px;
				cursor: pointer; border-radius: 3px; text-align: left; font-family: inherit;
				&:hover { background: #555; }
			}
			.copy-btn {
				background: #446; border: none; color: #fff; padding: 4px 8px;
				cursor: pointer; border-radius: 3px; font-family: inherit;
				&:hover { background: #558; }
			}
			.delete-btn {
				background: #633; border: none; color: #fff; padding: 4px 8px;
				cursor: pointer; border-radius: 3px; font-family: inherit;
				&:hover { background: #844; }
			}
		}
	}
	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}
	}
</style>
