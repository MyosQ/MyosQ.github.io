import * as THREE from 'three';

export interface NeedleData {
	position: THREE.Vector3;
	rotation: THREE.Euler;
	scale: number;
	color: THREE.Color;
}

const branchGeometryCache = new Map<string, THREE.CylinderGeometry>();

export function getBranchGeometry(baseRadius = 0.035, radialSegments = 5): THREE.CylinderGeometry {
	const key = `${baseRadius}-${radialSegments}`;
	let geometry = branchGeometryCache.get(key);
	if (!geometry) {
		geometry = new THREE.CylinderGeometry(baseRadius * 0.3, baseRadius, 1, radialSegments, 1, false);
		geometry.rotateZ(-Math.PI / 2);
		geometry.translate(0.5, 0, 0);
		branchGeometryCache.set(key, geometry);
	}
	return geometry;
}

// Bark texture caches
const barkTextureCache = new Map<string, THREE.CanvasTexture>();

export function createBarkTexture(style: 'fir' | 'pine' = 'fir'): THREE.CanvasTexture {
	const cached = barkTextureCache.get(style);
	if (cached) return cached;

	const canvas = document.createElement('canvas');
	canvas.width = 512;
	canvas.height = 1024;
	const ctx = canvas.getContext('2d')!;
	const W = canvas.width;
	const H = canvas.height;

	let texSeed = style === 'fir' ? 12345 : 54321;
	const texRand = () => {
		texSeed = (texSeed * 1103515245 + 12345) & 0x7fffffff;
		return texSeed / 0x7fffffff;
	};

	if (style === 'fir') {
		// Dark furrowed bark
		ctx.fillStyle = '#1a0f08';
		ctx.fillRect(0, 0, W, H);

		// Deep fissures
		for (let i = 0; i < 25; i++) {
			const x = texRand() * W;
			ctx.strokeStyle = `rgba(0, 0, 0, ${0.6 + texRand() * 0.4})`;
			ctx.lineWidth = 1 + texRand() * 3;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			let cx = x;
			for (let y = 0; y < H; y += 8) {
				cx += (texRand() - 0.5) * 4;
				ctx.lineTo(cx, y);
			}
			ctx.stroke();
		}

		// Bark plates
		for (let i = 0; i < 80; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const plateW = 15 + texRand() * 40;
			const plateH = 30 + texRand() * 120;
			const brightness = 25 + texRand() * 35;
			ctx.fillStyle = `rgb(${brightness}, ${brightness * 0.6}, ${brightness * 0.35})`;
			ctx.fillRect(x, y, plateW, plateH);
			ctx.fillStyle = `rgba(${brightness + 30}, ${brightness * 0.7 + 20}, ${brightness * 0.4 + 10}, 0.5)`;
			ctx.fillRect(x, y, plateW, 3 + texRand() * 4);
			ctx.fillStyle = `rgba(0, 0, 0, ${0.3 + texRand() * 0.3})`;
			ctx.fillRect(x, y + plateH - 4, plateW, 4);
		}
	} else {
		// Pine: Gray-brown plated/scaly bark
		ctx.fillStyle = '#3d3530';
		ctx.fillRect(0, 0, W, H);

		// Larger, more irregular plates (scaly appearance)
		for (let i = 0; i < 60; i++) {
			const x = texRand() * W;
			const y = texRand() * H;
			const plateW = 25 + texRand() * 60;
			const plateH = 40 + texRand() * 80;
			const brightness = 50 + texRand() * 40;

			// Plate base - grayer tone
			ctx.fillStyle = `rgb(${brightness}, ${brightness * 0.9}, ${brightness * 0.85})`;
			ctx.fillRect(x, y, plateW, plateH);

			// Highlight
			ctx.fillStyle = `rgba(${brightness + 20}, ${brightness + 15}, ${brightness + 10}, 0.4)`;
			ctx.fillRect(x, y, plateW, 4 + texRand() * 5);

			// Shadow
			ctx.fillStyle = `rgba(20, 15, 10, ${0.4 + texRand() * 0.3})`;
			ctx.fillRect(x, y + plateH - 5, plateW, 5);
		}

		// Vertical cracks (less deep than fir)
		for (let i = 0; i < 40; i++) {
			const x = texRand() * W;
			ctx.strokeStyle = `rgba(30, 25, 20, ${0.5 + texRand() * 0.4})`;
			ctx.lineWidth = 1 + texRand() * 2;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			let cx = x;
			for (let y = 0; y < H; y += 10) {
				cx += (texRand() - 0.5) * 3;
				ctx.lineTo(cx, y);
			}
			ctx.stroke();
		}
	}

	// Common: texture noise
	const imageData = ctx.getImageData(0, 0, W, H);
	const data = imageData.data;
	for (let i = 0; i < data.length; i += 4) {
		const noise = (texRand() - 0.5) * 20;
		data[i] = Math.max(0, Math.min(255, data[i] + noise));
		data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.8));
		data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.6));
	}
	ctx.putImageData(imageData, 0, 0);

	const texture = new THREE.CanvasTexture(canvas);
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(1, 3);
	texture.anisotropy = 16;

	barkTextureCache.set(style, texture);
	return texture;
}
