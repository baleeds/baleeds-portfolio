# Photography Portfolio

Minimal single-page photography portfolio built with [Astro](https://astro.build). Ships zero framework JS — just static HTML/CSS with a small vanilla JS script for filter chips and lightbox.

## Adding Photos

1. Drop images into `src/assets/photos/<category>/` (landscapes, people, or events)
2. Add an entry to `src/data/photos.ts` with the import and metadata
3. Rebuild — Astro generates optimized WebP at responsive sizes automatically

## Development

```sh
npm install
npm run dev        # Dev server at http://localhost:4321
```

## Build

```sh
npm run build      # Static output in dist/
npm run preview    # Preview the build locally
```

## Deploy

The `dist/` directory can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).
