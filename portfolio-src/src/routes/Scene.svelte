<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';

	let rotation = $state(0);

	useTask((delta) => {
		rotation += delta * 0.5;
	});
</script>

<T.PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 10, 5]} intensity={1.5} castShadow />
<T.AmbientLight intensity={0.3} />

<T.Mesh position.y={1} rotation.y={rotation} castShadow>
	<T.BoxGeometry args={[1.5, 1.5, 1.5]} />
	<T.MeshStandardMaterial color="#4a9eff" />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.PlaneGeometry args={[10, 10]} />
	<T.MeshStandardMaterial color="#1a1a2e" />
</T.Mesh>

<T.GridHelper args={[10, 10, '#333', '#222']} />
