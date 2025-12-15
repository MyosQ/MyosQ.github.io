<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';

	interface Props {
		radius: number;
		baseHeight?: number;
		peakHeight?: number;
		peakAngle?: number;
		peakSpread?: number;
		yPosition?: number;
		color?: string;
	}

	let {
		radius,
		baseHeight = 40,
		peakHeight = 180,
		peakAngle = Math.PI * 0.75,
		peakSpread = 0.4,
		yPosition = 50,
		color = '#030506'
	}: Props = $props();

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
				// Multiple peaks with varying sizes
				const peak1Angle = peakAngle - 0.25;
				const peak2Angle = peakAngle + 0.35;
				const peak3Angle = peakAngle + 0.9;
				const peak4Angle = peakAngle - 0.7;

				const dist1 = Math.abs(Math.atan2(Math.sin(angle - peak1Angle), Math.cos(angle - peak1Angle)));
				const dist2 = Math.abs(Math.atan2(Math.sin(angle - peak2Angle), Math.cos(angle - peak2Angle)));
				const dist3 = Math.abs(Math.atan2(Math.sin(angle - peak3Angle), Math.cos(angle - peak3Angle)));
				const dist4 = Math.abs(Math.atan2(Math.sin(angle - peak4Angle), Math.cos(angle - peak4Angle)));

				const peak1 = Math.max(0, 1 - dist1 / peakSpread) * peakHeight;
				const peak2 = Math.max(0, 1 - dist2 / (peakSpread * 0.7)) * peakHeight * 0.75;
				const peak3 = Math.max(0, 1 - dist3 / (peakSpread * 0.5)) * peakHeight * 0.5;
				const peak4 = Math.max(0, 1 - dist4 / (peakSpread * 0.6)) * peakHeight * 0.6;

				// Multi-frequency noise for rugged ridgeline
				const ridge =
					Math.sin(angle * 5) * 15 +
					Math.sin(angle * 11 + 2.1) * 8 +
					Math.sin(angle * 23 + 0.7) * 4 +
					Math.sin(angle * 47 + 3.2) * 2;

				const maxPeak = Math.max(peak1, peak2, peak3, peak4);
				positions.setY(i, y + maxPeak + ridge);
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
