export function distToPolygonEdge(
	px: number,
	pz: number,
	coords: [number, number][]
): number {
	let minDist = Infinity;
	const n = coords.length - 1; // Exclude duplicate closing point (GeoJSON standard)

	for (let i = 0; i < n; i++) {
		const ax = coords[i][0], az = coords[i][1];
		const bx = coords[(i + 1) % n][0], bz = coords[(i + 1) % n][1];
		const dx = bx - ax, dz = bz - az;
		const len2 = dx * dx + dz * dz;
		if (len2 === 0) continue;
		const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / len2));
		const nearX = ax + t * dx, nearZ = az + t * dz;
		const dist = Math.sqrt((px - nearX) ** 2 + (pz - nearZ) ** 2);
		if (dist < minDist) minDist = dist;
	}
	return minDist;
}

export function isInsidePolygon(
	px: number,
	pz: number,
	coords: [number, number][]
): boolean {
	let inside = false;
	const n = coords.length - 1; // Exclude duplicate closing point (GeoJSON standard)

	for (let i = 0, j = n - 1; i < n; j = i++) {
		const ix = coords[i][0], iz = coords[i][1];
		const jx = coords[j][0], jz = coords[j][1];

		const edgeCrossesRay = (iz > pz) !== (jz > pz);
		if (edgeCrossesRay) {
			const intersectX = (jx - ix) * (pz - iz) / (jz - iz) + ix;
			if (px < intersectX) {
				inside = !inside;
			}
		}
	}
	return inside;
}
