UPDATE THIS FILE when making architectural changes, adding patterns, or changing conventions.

# Personal Portfolio - myosq.github.io

Jekyll 4.3 + minima theme. Personal website with blog, interactive CV, and printable CV.

## Commands

- `bundle exec jekyll serve` - Local dev (port 4000)
- `docker compose up` - Jekyll containerized (port 4001)
- `docker compose -f docker-compose-portfolio.yml up` - Portfolio dev (port 5173)
- `docker compose -f docker-compose-portfolio2.yml up` - Portfolio2 dev (port 5174)
- `docker compose -f docker-compose-pdf.yml up` - Generate CV PDF from LaTeX

## Structure

```
portfolio-src/   → 3D Portfolio source (SvelteKit + Threlte/Three.js)
portfolio/       → 3D Portfolio build output (static, committed to repo)
portfolio2-src/  → 3D Portfolio2 source (island scene)
portfolio2/      → 3D Portfolio2 build output (static, committed to repo)
cv/              → Interactive CV (standalone HTML/CSS/JS, NOT Jekyll-processed)
cv_for_print/    → LaTeX CVs (base/ is canonical, copy to subdirs for variants)
_posts/          → Blog posts (underscore prefix = draft)
```

## 3D Portfolio (portfolio-src/ → portfolio/)

SvelteKit 2 + Svelte 5 + Threlte 8 (Three.js wrapper). Deployed at `/portfolio`.

- `src/routes/+page.svelte` - Main page with Canvas
- `src/routes/Scene.svelte` - 3D scene (camera, lights, meshes, tree generation)
- `src/lib/components/` - FirTree.svelte, PineTree.svelte (procedural trees)
- `src/lib/utils/tree.ts` - Shared bark textures, branch geometry (cached)
- `src/lib/data/lake.json` - GeoJSON polygon for lake shape

Commands:
- Dev: `npm run dev --prefix portfolio-src`
- Build: `npm run build --prefix portfolio-src` (outputs to `portfolio/`)

### Coordinate System (CRITICAL)
PlaneGeometry + `rotation.x={-Math.PI/2}` transforms: local Y → world -Z.
- Lake/terrain functions (`isInsideLake`, `getTerrainHeight`, `distToLakeEdge`) use shape coords
- World objects (trees) use world coords
- ALWAYS negate z when querying: `getTerrainHeight(x, -z)`, `tooCloseToLake(x, -z, buffer)`

### GeoJSON Lake Polygon
`lake.json` has duplicate closing point (GeoJSON standard). In loops: use `length - 1` to exclude duplicate.

## 3D Portfolio2 (portfolio2-src/ → portfolio2/)

Island in a foggy lake scene. Same tech stack as portfolio. Deployed at `/portfolio2`.

- `src/routes/Scene.svelte` - Island scene (inverted logic from portfolio)
- `src/lib/data/island.json` - GeoJSON polygon for island shape
- Reuses FirTree.svelte, PineTree.svelte, tree.ts from portfolio-src

Key differences from portfolio:
- `isOnIsland()` instead of `isInsideLake()` - trees placed ON island
- Dense fog (near: 80, far: 350) for atmospheric effect
- Low sun (elevation: 3) with warm golden hour lighting
- Camera starts from water looking at island

Commands:
- Dev: `npm run dev --prefix portfolio2-src`
- Build: `npm run build --prefix portfolio2-src` (outputs to `portfolio2/`)

## Interactive CV (cv/)

- `index.html` - Single-page CV with AOS animations, Leaflet map
- `styles/` - LESS source + compiled CSS (base.css, main.css, sections.css, animations.css)
- `scripts/base.js` - Mouse tracking CSS vars
- `scripts/main.js` - IntersectionObserver animations, Leaflet map init, skill tabs (commented out)
- CDNs: AOS, jQuery, Leaflet, Font Awesome

Map location: Edit `data-current-location-lat/lon` on `#map` div.

## Printable CV (cv_for_print/)

LaTeX source in `base/cv.tex`. Requires texlive/texlive Docker image.

Generate PDF: `docker compose -f docker-compose-pdf.yml up`

Profile image: `assets/profile_pic_small.jpg`

## Blog Posts

Front matter:
```yaml
layout: post
title: "Full title"
shorttitle: "Short title"
date: YYYY-MM-DD HH:MM:SS -0000
categories:
    - Books I have recently read
image: filename.jpg
```

Images in `/images/`. Reference: `{{ site.baseurl }}/images/{{ page.image }}`

NEVER publish drafts (underscore-prefixed files).

## Config

`_config.yml`:
- `style: custom` - CV style variant
- `name`, `email`, `github_username` - Site metadata
