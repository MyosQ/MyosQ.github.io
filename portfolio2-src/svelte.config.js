import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: '../portfolio2',
			assets: '../portfolio2',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: '/portfolio2'
		},
		appDir: 'app'
	}
};

export default config;
