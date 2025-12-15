<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';

	interface Props {
		radius: number;
		height: number;
		seed: number;
		detailLevel?: 1 | 2 | 3;
		yPosition?: number;
		color?: string;
	}

	let {
		radius,
		height,
		seed,
		detailLevel = 1,
		yPosition = 0,
		color = '#050a06'
	}: Props = $props();

	function createGeometry(): THREE.BufferGeometry {
		const segments = 192;
		const geometry = new THREE.CylinderGeometry(radius, radius, height, segments, 1, true);
		const positions = geometry.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getZ(i);
			const angle = Math.atan2(z, x);
			const y = positions.getY(i);

			if (y > 0) {
				let treeline =
					Math.sin(angle * 2 + seed) * 8 +
					Math.sin(angle * 4.5 + seed * 1.3) * 5 +
					Math.sin(angle * 9 + seed * 2.1) * 3;

				if (detailLevel > 1) {
					treeline +=
						Math.sin(angle * 17 + seed * 3.7) * 2 +
						Math.sin(angle * 31 + seed * 5.2) * 1;
				}
				if (detailLevel > 2) {
					treeline +=
						Math.sin(angle * 53 + seed * 7.1) * 0.8 +
						Math.sin(angle * 97 + seed * 11.3) * 0.4;
				}

				positions.setY(i, y + treeline);
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
