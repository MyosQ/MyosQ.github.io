<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<svelte:head>
	<title>Portfolio | Frej Sundqvist</title>
</svelte:head>

<div class="canvas-container">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	.canvas-container {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
