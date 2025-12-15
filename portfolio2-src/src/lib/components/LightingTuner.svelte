<script lang="ts">
	interface Props {
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
		onchange: () => void;
	}

	let {
		ambientColor = $bindable(),
		ambientIntensity = $bindable(),
		directionalIntensity = $bindable(),
		waterColor = $bindable(),
		skyElevation = $bindable(),
		skyAzimuth = $bindable(),
		skyTurbidity = $bindable(),
		fogColor = $bindable(),
		fogDensity = $bindable(),
		godRaysEnabled = $bindable(),
		godRaysIntensity = $bindable(),
		onchange
	}: Props = $props();

	let collapsed = $state(false);
	let copied = $state(false);

	function copyValues() {
		const config = `light: { ambient: '${ambientColor}', ambientIntensity: ${ambientIntensity.toFixed(2)} },
directionalIntensity: ${directionalIntensity.toFixed(1)},
water: { color: '${waterColor}' },
sky: { elevation: ${skyElevation}, turbidity: ${skyTurbidity} },
fog: { color: '${fogColor}', density: ${fogDensity.toFixed(4)} },
godRays: { enabled: ${godRaysEnabled}, intensity: ${godRaysIntensity.toFixed(1)} }`;
		navigator.clipboard.writeText(config);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function handleChange() {
		onchange?.();
	}
</script>

<div class="tuner" class:collapsed>
	<button class="toggle" onclick={() => collapsed = !collapsed}>
		{collapsed ? '>' : '<'} Light
	</button>

	{#if !collapsed}
		<div class="controls">
			<div class="group">
				<span class="lbl">Ambient</span>
				<input type="color" bind:value={ambientColor} onchange={handleChange} />
				<input type="range" min="0" max="0.5" step="0.01" bind:value={ambientIntensity} oninput={handleChange} />
				<span class="val">{ambientIntensity.toFixed(2)}</span>
			</div>

			<div class="group">
				<span class="lbl">Dir Light</span>
				<input type="range" min="0" max="3" step="0.1" bind:value={directionalIntensity} oninput={handleChange} />
				<span class="val">{directionalIntensity.toFixed(1)}</span>
			</div>

			<div class="group">
				<span class="lbl">Water</span>
				<input type="color" bind:value={waterColor} onchange={handleChange} />
			</div>

			<div class="group">
				<span class="lbl">Sun Height</span>
				<input type="range" min="-5" max="30" step="1" bind:value={skyElevation} oninput={handleChange} />
				<span class="val">{skyElevation}°</span>
			</div>

			<div class="group">
				<span class="lbl">Sky Haze</span>
				<input type="range" min="0" max="20" step="1" bind:value={skyTurbidity} oninput={handleChange} />
				<span class="val">{skyTurbidity}</span>
			</div>

			<div class="group">
				<span class="lbl">Fog</span>
				<input type="color" bind:value={fogColor} onchange={handleChange} />
				<input type="range" min="0" max="0.01" step="0.0001" bind:value={fogDensity} oninput={handleChange} />
				<span class="val">{fogDensity.toFixed(4)}</span>
			</div>

			<div class="group">
				<span class="lbl">God Rays</span>
				<input type="checkbox" bind:checked={godRaysEnabled} onchange={handleChange} />
				<input type="range" min="0" max="3" step="0.1" bind:value={godRaysIntensity} oninput={handleChange} disabled={!godRaysEnabled} />
				<span class="val">{godRaysIntensity.toFixed(1)}</span>
			</div>

			<button class="copy" onclick={copyValues}>
				{copied ? 'Copied!' : 'Copy Config'}
			</button>
		</div>
	{/if}
</div>

<style>
	.tuner {
		position: fixed;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
		padding: 8px;
		border-radius: 6px;
		font-family: monospace;
		font-size: 12px;
		z-index: 1000;
		min-width: 200px;
	}
	.tuner.collapsed {
		min-width: auto;
	}
	.toggle {
		background: #333;
		border: none;
		color: #fff;
		padding: 4px 8px;
		cursor: pointer;
		border-radius: 3px;
		font-family: inherit;
	}
	.controls {
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.group {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.lbl {
		width: 70px;
		flex-shrink: 0;
	}
	.group input[type="range"] {
		flex: 1;
		max-width: 100px;
	}
	.group input[type="color"] {
		width: 30px;
		height: 20px;
		border: none;
		cursor: pointer;
	}
	.val {
		width: 45px;
		text-align: right;
	}
	.copy {
		margin-top: 4px;
		background: #2a6;
		border: none;
		color: #fff;
		padding: 6px 12px;
		cursor: pointer;
		border-radius: 3px;
		font-family: inherit;
	}
	.copy:hover {
		background: #3b7;
	}
</style>
