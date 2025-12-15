<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Position {
		x: string;
		y: string;
		anchorX?: number;
		anchorY?: number;
	}

	interface Props {
		children: Snippet;
		progress: number;
		from: Position;
		to: Position;
		endAt?: number;
		revealOffset?: number;
		revealDuration?: number;
		revealDelay?: number;
	}

	let {
		children,
		progress,
		from,
		to,
		endAt = 1,
		revealOffset = 0,
		revealDuration = 800,
		revealDelay = 0
	}: Props = $props();

	let t = $derived(Math.min(1, progress / endAt));

	function parseValue(val: string): { num: number; unit: string } {
		const match = val.match(/^(-?[\d.]+)(.*)$/);
		if (!match) return { num: 0, unit: 'px' };
		return { num: parseFloat(match[1]), unit: match[2] || 'px' };
	}

	function lerp(a: string, b: string, t: number): string {
		const av = parseValue(a);
		const bv = parseValue(b);
		if (av.unit !== bv.unit) return t < 0.5 ? a : b;
		return `${av.num + (bv.num - av.num) * t}${av.unit}`;
	}

	let x = $derived(lerp(from.x, to.x, t));
	let y = $derived(lerp(from.y, to.y, t));
	let anchorX = $derived((from.anchorX ?? 0.5) + ((to.anchorX ?? 0.5) - (from.anchorX ?? 0.5)) * t);
	let anchorY = $derived((from.anchorY ?? 0.5) + ((to.anchorY ?? 0.5) - (from.anchorY ?? 0.5)) * t);
</script>

<div
	class="scroll-position"
	class:reveal={revealOffset > 0}
	style:left={x}
	style:top={y}
	style:--anchor-x="{-anchorX * 100}%"
	style:--anchor-y="{-anchorY * 100}%"
	style:--reveal-offset="{revealOffset}px"
	style:--reveal-duration="{revealDuration}ms"
	style:--reveal-delay="{revealDelay}ms"
>
	{@render children()}
</div>

<style>
	.scroll-position {
		position: fixed;
		z-index: 100;
		will-change: left, top, transform;
		transform: translate(var(--anchor-x), var(--anchor-y));
	}

	.scroll-position.reveal {
		animation: reveal-up var(--reveal-duration) cubic-bezier(0.16, 1, 0.3, 1) var(--reveal-delay) both;
	}

	@keyframes reveal-up {
		from {
			transform: translate(var(--anchor-x), calc(var(--anchor-y) + var(--reveal-offset)));
		}
		to {
			transform: translate(var(--anchor-x), var(--anchor-y));
		}
	}
</style>
