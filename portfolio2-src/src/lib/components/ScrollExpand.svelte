<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		progress: number; // 0 to 1
		startAt?: number; // progress threshold to start expanding (default 0.8)
		endAt?: number; // progress threshold to fully expand (default 1)
		direction?: 'down' | 'up' | 'left' | 'right';
		maxSize?: string; // CSS value for max height/width
	}

	let {
		children,
		progress,
		startAt = 0.8,
		endAt = 1,
		direction = 'down',
		maxSize = '500px'
	}: Props = $props();

	// Normalize progress within the start/end range
	let expandProgress = $derived.by(() => {
		if (progress <= startAt) return 0;
		if (progress >= endAt) return 1;
		return (progress - startAt) / (endAt - startAt);
	});

	let isVertical = $derived(direction === 'down' || direction === 'up');
	let size = $derived(`calc(${maxSize} * ${expandProgress})`);
	let opacity = $derived(Math.min(1, expandProgress * 2)); // fade in faster than size
</script>

<div
	class="scroll-expand"
	class:vertical={isVertical}
	class:horizontal={!isVertical}
	class:reverse={direction === 'up' || direction === 'left'}
	style:--size={size}
	style:--opacity={opacity}
	style:--max-size={maxSize}
>
	<div class="expand-content">
		{@render children()}
	</div>
</div>

<style>
	.scroll-expand {
		overflow: hidden;
		will-change: max-height, max-width, opacity;
	}

	.scroll-expand.vertical {
		max-height: var(--size);
	}

	.scroll-expand.vertical:not(.reverse) .expand-content {
		padding-top: 0.5em;
	}

	.scroll-expand.vertical.reverse .expand-content {
		padding-bottom: 0.5em;
	}

	.scroll-expand.horizontal {
		max-width: var(--size);
	}

	.expand-content {
		opacity: var(--opacity);
	}

	/* Reverse directions: content anchored to bottom/right */
	.scroll-expand.reverse.vertical .expand-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: var(--max-size);
	}

	.scroll-expand.reverse.horizontal .expand-content {
		display: flex;
		justify-content: flex-end;
		min-width: var(--max-size);
	}
</style>
