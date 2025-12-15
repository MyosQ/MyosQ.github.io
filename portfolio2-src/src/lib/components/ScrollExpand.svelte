<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		progress: number;
		startAt?: number;
		endAt?: number;
		direction?: 'down' | 'up' | 'left' | 'right';
		maxSize?: string;
	}

	let { children, progress, startAt = 0.8, endAt = 1, direction = 'down', maxSize = '500px' }: Props = $props();

	let t = $derived.by(() => {
		if (progress <= startAt) return 0;
		if (progress >= endAt) return 1;
		return (progress - startAt) / (endAt - startAt);
	});

	let isVertical = $derived(direction === 'down' || direction === 'up');
	let isReverse = $derived(direction === 'up' || direction === 'left');
</script>

<div
	class="scroll-expand"
	class:vertical={isVertical}
	class:horizontal={!isVertical}
	class:reverse={isReverse}
	style:--size="calc({maxSize} * {t})"
	style:--opacity={Math.min(1, t * 2)}
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
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: var(--max-size);
	}

	.scroll-expand.horizontal {
		max-width: var(--size);
	}

	.scroll-expand.horizontal.reverse .expand-content {
		display: flex;
		justify-content: flex-end;
		min-width: var(--max-size);
	}

	.expand-content {
		opacity: var(--opacity);
	}
</style>
