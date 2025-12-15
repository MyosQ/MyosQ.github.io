import * as THREE from 'three';

export interface CameraState {
	position: [number, number, number];
	target: [number, number, number];
}

export interface SceneSettings {
	ambientColor: string;
	ambientIntensity: number;
	directionalIntensity: number;
	waterColor: string;
	skyElevation: number;
	skyAzimuth: number;
	skyTurbidity: number;
	fogColor: string;
	fogDensity: number;
	godRaysEnabled: boolean;
	godRaysIntensity: number;
}

export interface Keyframe {
	camera: CameraState;
	settings: SceneSettings;
	hold: number; // 0-1, fraction of segment to hold at this keyframe before transitioning
}

export interface Viewpoint {
	id: string;
	name: string;
	camera: CameraState;
	settings: SceneSettings;
}

export { KEYFRAMES } from './keyframes';
import { KEYFRAMES } from './keyframes';

export function lerpColor(c1: string, c2: string, t: number): string {
	const ca = new THREE.Color(c1),
		cb = new THREE.Color(c2);
	ca.lerp(cb, t);
	return '#' + ca.getHexString();
}

function lerp(a: number, b: number, t: number): number {
	return a + (b - a) * t;
}

function smoothstep(t: number): number {
	return t * t * (3 - 2 * t);
}

/** Returns segment index and local t (0-1) accounting for hold times */
export function getSegmentProgress(t: number): { segmentIndex: number; localT: number } {
	const numSegments = KEYFRAMES.length - 1;
	const scaledT = t * numSegments;
	const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
	const rawLocalT = scaledT - segmentIndex;

	// Apply hold: first portion of segment stays at start keyframe
	const hold = KEYFRAMES[segmentIndex].hold;
	const linearT = rawLocalT <= hold ? 0 : (rawLocalT - hold) / (1 - hold);
	const localT = smoothstep(linearT); // ease in/out for smooth direction changes

	return { segmentIndex, localT };
}

/** Convert global progress (0-1) to path progress accounting for holds */
export function getPathProgress(t: number): number {
	const { segmentIndex, localT } = getSegmentProgress(t);
	const numSegments = KEYFRAMES.length - 1;
	return (segmentIndex + localT) / numSegments;
}

export function lerpSettings(t: number): SceneSettings {
	const { segmentIndex, localT } = getSegmentProgress(t);
	const a = KEYFRAMES[segmentIndex].settings,
		b = KEYFRAMES[segmentIndex + 1].settings;
	return {
		ambientColor: lerpColor(a.ambientColor, b.ambientColor, localT),
		ambientIntensity: lerp(a.ambientIntensity, b.ambientIntensity, localT),
		directionalIntensity: lerp(a.directionalIntensity, b.directionalIntensity, localT),
		waterColor: lerpColor(a.waterColor, b.waterColor, localT),
		skyElevation: lerp(a.skyElevation, b.skyElevation, localT),
		skyTurbidity: lerp(a.skyTurbidity, b.skyTurbidity, localT),
		fogColor: lerpColor(a.fogColor, b.fogColor, localT),
		fogDensity: lerp(a.fogDensity, b.fogDensity, localT),
		godRaysEnabled: a.godRaysEnabled,
		godRaysIntensity: lerp(a.godRaysIntensity, b.godRaysIntensity, localT)
	};
}
