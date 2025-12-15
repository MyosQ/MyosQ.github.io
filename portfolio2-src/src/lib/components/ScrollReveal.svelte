<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		offsetY?: number;
		duration?: number;
		delay?: number;
	}

	let { children, offsetY = 100, duration = 800, delay = 100 }: Props = $props();
</script>

<div
	class="scroll-reveal"
	style:--offset="{offsetY}px"
	style:--duration="{duration}ms"
	style:--delay="{delay}ms"
>
	{@render children()}
</div>

<style>
	.scroll-reveal {
		animation: reveal-up var(--duration) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
	}

	@keyframes reveal-up {
		from {
			transform: translateY(var(--offset));
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
