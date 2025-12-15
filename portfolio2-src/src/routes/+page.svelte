<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import LightingTuner from '$lib/components/LightingTuner.svelte';
	import { browser } from '$app/environment';

	interface Viewpoint {
		id: string;
		name: string;
		camera: { position: [number, number, number]; target: [number, number, number] };
		settings: {
			ambientColor: string; ambientIntensity: number; directionalIntensity: number;
			waterColor: string; skyElevation: number; skyTurbidity: number;
			fogColor: string; fogDensity: number; godRaysEnabled: boolean; godRaysIntensity: number;
		};
	}

	// Animation keyframes (must match Scene.svelte)
	const KEYFRAMES = [
		{ settings: { ambientColor: "#403848", ambientIntensity: 0.18, directionalIntensity: 3, waterColor: "#3f1d1d", skyElevation: 5, skyTurbidity: 20, fogColor: "#403e41", fogDensity: 0.0019, godRaysEnabled: true, godRaysIntensity: 1 } },
		{ settings: { ambientColor: "#403848", ambientIntensity: 0.18, directionalIntensity: 3, waterColor: "#3f1d1d", skyElevation: 0, skyTurbidity: 20, fogColor: "#403e41", fogDensity: 0.0019, godRaysEnabled: true, godRaysIntensity: 1 } }
	];

	function lerpColor(c1: string, c2: string, t: number): string {
		const parse = (c: string) => [parseInt(c.slice(1,3),16), parseInt(c.slice(3,5),16), parseInt(c.slice(5,7),16)];
		const [r1,g1,b1] = parse(c1), [r2,g2,b2] = parse(c2);
		const r = Math.round(r1 + (r2-r1)*t), g = Math.round(g1 + (g2-g1)*t), bl = Math.round(b1 + (b2-b1)*t);
		return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${bl.toString(16).padStart(2,'0')}`;
	}

	let ambientColor = $state(KEYFRAMES[0].settings.ambientColor);
	let ambientIntensity = $state(KEYFRAMES[0].settings.ambientIntensity);
	let directionalIntensity = $state(KEYFRAMES[0].settings.directionalIntensity);
	let waterColor = $state(KEYFRAMES[0].settings.waterColor);
	let skyElevation = $state(KEYFRAMES[0].settings.skyElevation);
	let skyTurbidity = $state(KEYFRAMES[0].settings.skyTurbidity);
	let fogColor = $state(KEYFRAMES[0].settings.fogColor);
	let fogDensity = $state(KEYFRAMES[0].settings.fogDensity);
	let godRaysEnabled = $state(KEYFRAMES[0].settings.godRaysEnabled);
	let godRaysIntensity = $state(KEYFRAMES[0].settings.godRaysIntensity);

	let cameraPathEnabled = $state(true);
	let cameraPathProgress = $state(0);
	let cameraPathValue = $derived(cameraPathEnabled ? cameraPathProgress : undefined);

	// Update settings when scrolling on path
	$effect(() => {
		if (cameraPathEnabled) {
			const t = cameraPathProgress;
			const a = KEYFRAMES[0].settings, b = KEYFRAMES[1].settings;
			ambientColor = lerpColor(a.ambientColor, b.ambientColor, t);
			ambientIntensity = a.ambientIntensity + (b.ambientIntensity - a.ambientIntensity) * t;
			directionalIntensity = a.directionalIntensity + (b.directionalIntensity - a.directionalIntensity) * t;
			waterColor = lerpColor(a.waterColor, b.waterColor, t);
			skyElevation = a.skyElevation + (b.skyElevation - a.skyElevation) * t;
			skyTurbidity = a.skyTurbidity + (b.skyTurbidity - a.skyTurbidity) * t;
			fogColor = lerpColor(a.fogColor, b.fogColor, t);
			fogDensity = a.fogDensity + (b.fogDensity - a.fogDensity) * t;
			godRaysIntensity = a.godRaysIntensity + (b.godRaysIntensity - a.godRaysIntensity) * t;
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
			return () => {
				canvasContainer.removeEventListener('wheel', handleWheel);
				if (animationFrame) cancelAnimationFrame(animationFrame);
			};
		}
	});

	// Viewpoints
	let viewpoints = $state<Viewpoint[]>([]);
	let getCameraState: (() => { position: [number, number, number]; target: [number, number, number] }) | undefined;
	let setCameraState = $state<{ position: [number, number, number]; target: [number, number, number] } | null>(null);

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

	function handleCameraReady(getter: () => { position: [number, number, number]; target: [number, number, number] }) {
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

<div class="desktop-only">
	<div class="camera-path">
		<label>
			<input type="checkbox" bind:checked={cameraPathEnabled} />
			Path
		</label>
		{#if cameraPathEnabled}
			<input type="range" min="0" max="1" step="0.001" bind:value={cameraPathProgress} />
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
	.desktop-only {
		display: contents;
	}
	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}
	}
	.camera-path {
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
	}
	.camera-path input[type="range"] { width: 300px; }
	.camera-path label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
	.camera-path span { width: 40px; text-align: right; }
	.viewpoints {
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
	}
	.viewpoints .save-btn {
		background: #2a6; border: none; color: #fff; padding: 6px 12px;
		cursor: pointer; border-radius: 4px; font-family: inherit;
	}
	.viewpoints .save-btn:hover { background: #3b7; }
	.viewpoints .viewpoint { display: flex; gap: 4px; }
	.viewpoints .load-btn {
		flex: 1; background: #444; border: none; color: #fff; padding: 4px 8px;
		cursor: pointer; border-radius: 3px; text-align: left; font-family: inherit;
	}
	.viewpoints .load-btn:hover { background: #555; }
	.viewpoints .copy-btn {
		background: #446; border: none; color: #fff; padding: 4px 8px;
		cursor: pointer; border-radius: 3px; font-family: inherit;
	}
	.viewpoints .copy-btn:hover { background: #558; }
	.viewpoints .delete-btn {
		background: #633; border: none; color: #fff; padding: 4px 8px;
		cursor: pointer; border-radius: 3px; font-family: inherit;
	}
	.viewpoints .delete-btn:hover { background: #844; }
</style>
