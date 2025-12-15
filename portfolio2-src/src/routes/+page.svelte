<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import LightingTuner from '$lib/components/LightingTuner.svelte';

	const CONFIG = {
		light: { ambient: '#403848', ambientIntensity: 0.18 },
		water: { color: '#3f1d1d' },
		sky: { elevation: 5, turbidity: 20 },
		fog: { color: '#403e41', density: 0.0019 },
		godRays: { enabled: true, intensity: 1.0 }
	};

	let ambientColor = $state(CONFIG.light.ambient);
	let ambientIntensity = $state(CONFIG.light.ambientIntensity);
	let directionalIntensity = $state(3.0);
	let waterColor = $state(CONFIG.water.color);
	let skyElevation = $state(CONFIG.sky.elevation);
	let skyTurbidity = $state(CONFIG.sky.turbidity);
	let fogColor = $state(CONFIG.fog.color);
	let fogDensity = $state(CONFIG.fog.density);
	let godRaysEnabled = $state(CONFIG.godRays.enabled);
	let godRaysIntensity = $state(CONFIG.godRays.intensity);
</script>

<svelte:head>
	<title>Portfolio | Frej Sundqvist</title>
</svelte:head>

<div class="canvas-container">
	<Canvas>
		<Scene
			{ambientColor}
			{ambientIntensity}
			{directionalIntensity}
			{waterColor}
			{skyElevation}
			{skyTurbidity}
			{fogColor}
			{fogDensity}
			{godRaysEnabled}
			{godRaysIntensity}
		/>
	</Canvas>
</div>

<LightingTuner
	bind:ambientColor
	bind:ambientIntensity
	bind:directionalIntensity
	bind:waterColor
	bind:skyElevation
	bind:skyTurbidity
	bind:fogColor
	bind:fogDensity
	bind:godRaysEnabled
	bind:godRaysIntensity
	onchange={() => {}}
/>

<style>
	.canvas-container {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
