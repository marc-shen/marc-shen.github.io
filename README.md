# Songyu Shen's Academic Portfolio

Songyu Shen's personal academic website, built with Astro using the visual
theme from Academic Portfolio Astro.

## Development

Node.js 22 or later is required.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Pushes to the `master` branch
are deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Content

- Personal details: `src/content/bio.md`
- Homepage: `src/pages/index.astro`
- Projects: `src/content/projects/`
- Publications: `src/pages/publications/index.astro`
- CV: `src/content/cv.md`
- Useful links: `src/pages/useful-links.astro`

The gallery route and gallery data from the source theme are intentionally not
included.
