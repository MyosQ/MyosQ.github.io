import type { Keyframe, SceneSettings } from './scene';

const DEFAULT_SETTINGS: SceneSettings = {
	ambientColor: '#403848',
	ambientIntensity: 0.18,
	directionalIntensity: 3,
	waterColor: '#3f1d1d',
	skyElevation: 0,
	skyTurbidity: 20,
	fogColor: '#403e41',
	fogDensity: 0.0019,
	godRaysEnabled: true,
	godRaysIntensity: 1
};

const DEFAULT_TARGET: [number, number, number] = [10.2, -18.6, 0.5];

type KeyframeInput = {
	pos: [number, number, number];
	target?: [number, number, number];
	settings?: Partial<SceneSettings>;
	hold?: number; // 0-1, fraction of segment duration to hold at this keyframe
};

function kf({ pos, target = DEFAULT_TARGET, settings = {}, hold = 0 }: KeyframeInput): Keyframe {
	return {
		camera: { position: pos, target },
		settings: { ...DEFAULT_SETTINGS, ...settings },
		hold
	};
}

export const KEYFRAMES: readonly Keyframe[] = [
	kf({
		pos: [141.37, 20.77, 509.17],
		settings: { skyElevation: 5 }
	}),
	kf({
		pos: [-164.67, 20.77, 495.85]
	}),
	kf({
		pos: [-514.67, 20.77, 21.93],
		settings: {
			directionalIntensity: 1.7,
			waterColor: '#3b2b2b',
			skyElevation: -2,
			fogDensity: 0.0021
		}
	}),
	kf({
		pos: [-157.69, 6.82, -185.44],
		target: [28.42, -11.36, -29.81],
		settings: {
			directionalIntensity: 1.2,
			waterColor: '#3b2b2b',
			skyElevation: -3,
			fogDensity: 0.0026
		}
	}),
	kf({
		pos: [-43.63, 41.28, -355.49],
		target: [32.07, -11.45, -32.49],
		settings: {
			directionalIntensity: 1.9,
			waterColor: '#3b2b2b',
			fogDensity: 0.001,
			godRaysIntensity: 3
		}
	})
];
