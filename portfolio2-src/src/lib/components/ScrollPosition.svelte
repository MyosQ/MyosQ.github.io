<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Position {
		x: string; // CSS value: '50%', '20px', etc.
		y: string;
		anchorX?: number; // transform origin 0-1 (0=left, 0.5=center, 1=right)
		anchorY?: number; // transform origin 0-1 (0=top, 0.5=center, 1=bottom)
	}

	interface Props {
		children: Snippet;
		progress: number; // 0 to 1
		from: Position;
		to: Position;
	}

	let { children, progress, from, to }: Props = $props();

	// Parse CSS value to number and unit
	function parseValue(val: string): { num: number; unit: string } {
		const match = val.match(/^(-?[\d.]+)(.*)$/);
		if (!match) return { num: 0, unit: 'px' };
		return { num: parseFloat(match[1]), unit: match[2] || 'px' };
	}

	// Interpolate between two CSS values
	function lerp(a: string, b: string, t: number): string {
		const av = parseValue(a);
		const bv = parseValue(b);
		if (av.unit !== bv.unit) return t < 0.5 ? a : b;
		return `${av.num + (bv.num - av.num) * t}${av.unit}`;
	}

	let x = $derived(lerp(from.x, to.x, progress));
	let y = $derived(lerp(from.y, to.y, progress));

	// Interpolate anchor for transform-origin
	let anchorX = $derived((from.anchorX ?? 0.5) + ((to.anchorX ?? 0.5) - (from.anchorX ?? 0.5)) * progress);
	let anchorY = $derived((from.anchorY ?? 0.5) + ((to.anchorY ?? 0.5) - (from.anchorY ?? 0.5)) * progress);
	let transformOrigin = $derived(`${anchorX * 100}% ${anchorY * 100}%`);
</script>

<div
	class="scroll-position"
	style:left={x}
	style:top={y}
	style:transform-origin={transformOrigin}
	style:transform="translate({-anchorX * 100}%, {-anchorY * 100}%)"
>
	{@render children()}
</div>

<style>
	.scroll-position {
		position: fixed;
		z-index: 100;
		pointer-events: none;
		will-change: left, top, transform;
	}
</style>
