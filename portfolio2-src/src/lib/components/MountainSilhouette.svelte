<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { mulberry32 } from '$lib/utils/random';

	interface Props {
		radius: number;
		baseHeight?: number;
		peakHeight?: number;
		peakAngle?: number;
		peakSpread?: number;
		yPosition?: number;
		color?: string;
		seed?: number;
	}

	let {
		radius,
		baseHeight = 40,
		peakHeight = 180,
		peakAngle = Math.PI * 0.75,
		peakSpread = 0.4,
		yPosition = 50,
		color = '#030506',
		seed = 12345
	}: Props = $props();

	// Generate random peaks around the entire mountain range
	const rng = mulberry32(seed);
	const numPeaks = 20 + Math.floor(rng() * 10);
	const peaks: Array<{ angle: number; height: number; spread: number }> = [];

	for (let i = 0; i < numPeaks; i++) {
		const angle = rng() * Math.PI * 2; // Random position around circle
		const height = (0.3 + rng() * 0.7) * peakHeight; // 30-100% of max height
		const spread = (0.2 + rng() * 0.5) * peakSpread; // Varying widths
		peaks.push({ angle, height, spread });
	}

	// Add a few prominent peaks near the specified peakAngle
	for (let i = 0; i < 4; i++) {
		const offset = (rng() - 0.5) * 1.2;
		peaks.push({
			angle: peakAngle + offset,
			height: (0.7 + rng() * 0.3) * peakHeight,
			spread: (0.3 + rng() * 0.4) * peakSpread
		});
	}

	function createGeometry(): THREE.BufferGeometry {
		const segments = 256;
		const geometry = new THREE.CylinderGeometry(radius, radius, baseHeight, segments, 1, true);
		const positions = geometry.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getZ(i);
			const angle = Math.atan2(z, x);
			const y = positions.getY(i);

			if (y > 0) {
				// Calculate contribution from all peaks
				let maxPeakHeight = 0;
				for (const peak of peaks) {
					const dist = Math.abs(Math.atan2(Math.sin(angle - peak.angle), Math.cos(angle - peak.angle)));
					const contribution = Math.max(0, 1 - dist / peak.spread) * peak.height;
					maxPeakHeight = Math.max(maxPeakHeight, contribution);
				}

				// Multi-frequency noise for rugged ridgeline
				const ridge =
					Math.sin(angle * 5 + seed * 0.1) * 15 +
					Math.sin(angle * 11 + 2.1 + seed * 0.2) * 8 +
					Math.sin(angle * 23 + 0.7 + seed * 0.3) * 5 +
					Math.sin(angle * 47 + 3.2 + seed * 0.4) * 3;

				positions.setY(i, y + maxPeakHeight + ridge);
			}
		}
		geometry.computeVertexNormals();
		return geometry;
	}

	const geometry = createGeometry();
</script>

<T.Mesh {geometry} position.y={yPosition}>
	<T.MeshBasicMaterial {color} side={THREE.BackSide} fog />
</T.Mesh>
