<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		roundness?: number;
		paddingX?: number;
		paddingY?: number;
		blur?: number;
		thickness?: number;
		tint?: string;
		tintOpacity?: number;
		interactive?: boolean;
	}

	let {
		children,
		roundness = 999,
		paddingX = 1.5,
		paddingY = 0.875,
		blur = 12,
		thickness = 1,
		tint = '#B4F0E6',
		tintOpacity = 0.08,
		interactive = true
	}: Props = $props();

	function hexToRgb(hex: string): { r: number; g: number; b: number } {
		hex = hex.replace('#', '');
		if (hex.length === 3) hex = hex.split('').map((x) => x + x).join('');
		const bigint = parseInt(hex, 16);
		return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
	}

	let rgb = $derived(hexToRgb(tint));
</script>

<div
	class="glass-wrap"
	class:interactive
	style:--roundness="{roundness}px"
	style:--px="{paddingX}em"
	style:--py="{paddingY}em"
	style:--blur="{blur}px"
	style:--thickness="{thickness}"
	style:--tint-r={rgb.r}
	style:--tint-g={rgb.g}
	style:--tint-b={rgb.b}
	style:--tint-opacity={tintOpacity}
>
	<div class="shadow"></div>
	<div class="glass">
		<div class="edge-light"></div>
		<div class="content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.glass-wrap {
		--ease: cubic-bezier(0.25, 1, 0.5, 1);
		--duration: 350ms;
		--border: calc(1px * var(--thickness));
		position: relative;
		display: inline-block;
	}

	.shadow {
		position: absolute;
		inset: 0;
		border-radius: var(--roundness);
		background: rgba(0, 0, 0, 0.1);
		filter: blur(calc(16px * var(--thickness)));
		transform: translateY(calc(8px * var(--thickness)));
		opacity: 0.4;
		pointer-events: none;
		z-index: 0;
		transition: all var(--duration) var(--ease);
	}

	.glass {
		position: relative;
		z-index: 1;
		border-radius: var(--roundness);
		overflow: hidden;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.06) 0%,
			rgba(255, 255, 255, 0.03) 50%,
			rgba(255, 255, 255, 0.01) 100%
		);
		backdrop-filter: blur(var(--blur)) saturate(1.1);
		-webkit-backdrop-filter: blur(var(--blur)) saturate(1.1);
		box-shadow:
			0 0 calc(40px * var(--thickness)) rgba(255, 255, 255, 0.03),
			0 calc(4px * var(--thickness)) calc(24px * var(--thickness)) rgba(0, 0, 0, 0.08),
			inset 0 calc(1px * var(--thickness)) calc(1px * var(--thickness)) rgba(255, 255, 255, 0.25),
			inset 0 calc(-1px * var(--thickness)) calc(2px * var(--thickness)) rgba(0, 0, 0, 0.08),
			inset 0 0 calc(20px * var(--thickness)) rgba(255, 255, 255, 0.02);
		border: var(--border) solid rgba(255, 255, 255, 0.12);
		border-top-color: rgba(255, 255, 255, 0.22);
		border-left-color: rgba(255, 255, 255, 0.16);
		transition: all var(--duration) var(--ease);
	}

	.glass::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: linear-gradient(
			105deg,
			rgba(255, 255, 255, 0.15) 0%,
			rgba(255, 255, 255, 0.05) 20%,
			transparent 50%
		);
		pointer-events: none;
		opacity: 0.6;
		transition: opacity var(--duration) var(--ease);
	}

	.glass::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(
			ellipse at 30% 20%,
			rgba(var(--tint-r), var(--tint-g), var(--tint-b), var(--tint-opacity)) 0%,
			transparent 70%
		);
		pointer-events: none;
		mix-blend-mode: overlay;
	}

	.edge-light {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		z-index: 2;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, transparent 3%);
	}

	.edge-light::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: linear-gradient(to right, rgba(255, 255, 255, 0.15) 0%, transparent 3%);
	}

	.edge-light::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.08) 0%, transparent 4%);
	}

	.content {
		position: relative;
		z-index: 3;
		padding-inline: var(--px);
		padding-block: var(--py);
	}

	.interactive .glass {
		cursor: pointer;
	}

	.interactive:hover .shadow {
		opacity: 0.4;
		transform: translateY(calc(4px * var(--thickness)));
		filter: blur(calc(12px * var(--thickness)));
	}

	.interactive:hover .glass {
		transform: translateY(calc(-2px * var(--thickness))) scale(1.01);
		border-top-color: rgba(255, 255, 255, 0.5);
		box-shadow:
			0 0 calc(50px * var(--thickness)) rgba(255, 255, 255, 0.08),
			0 calc(8px * var(--thickness)) calc(32px * var(--thickness)) rgba(0, 0, 0, 0.15),
			inset 0 calc(1px * var(--thickness)) calc(2px * var(--thickness)) rgba(255, 255, 255, 0.5),
			inset 0 calc(-1px * var(--thickness)) calc(2px * var(--thickness)) rgba(0, 0, 0, 0.1),
			inset 0 0 calc(30px * var(--thickness)) rgba(255, 255, 255, 0.08);
	}

	.interactive:hover .glass::before {
		opacity: 1;
	}

	.interactive:active .glass {
		transform: translateY(0) scale(0.99);
	}

	.interactive:active .shadow {
		opacity: 0.5;
		transform: translateY(calc(6px * var(--thickness)));
	}
</style>
