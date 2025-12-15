import { browser } from '$app/environment';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { PerspectiveCamera } from 'three';

export function parseCameraHash(): { pos: [number, number, number]; target: [number, number, number] } | null {
	if (!browser) return null;
	const hash = window.location.hash;
	if (!hash.startsWith('#cam=')) return null;
	const parts = hash.slice(5).split(',').map(Number);
	if (parts.length !== 6 || parts.some(isNaN)) return null;
	return {
		pos: [parts[0], parts[1], parts[2]],
		target: [parts[3], parts[4], parts[5]]
	};
}

export function createCameraHashSaver(
	getCamera: () => PerspectiveCamera | undefined,
	getControls: () => OrbitControls | undefined
) {
	return function saveCameraHash() {
		const camera = getCamera();
		const controls = getControls();
		if (!controls || !camera) return;
		const p = camera.position;
		const t = controls.target;
		const round = (n: number) => Math.round(n * 10) / 10;
		const hash = `#cam=${round(p.x)},${round(p.y)},${round(p.z)},${round(t.x)},${round(t.y)},${round(t.z)}`;
		history.replaceState(null, '', hash);
	};
}
