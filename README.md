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
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**;
the legacy branch source runs Jekyll and cannot build this Astro project.

## Content

- Personal details: `src/content/bio.md`
- Homepage: `src/pages/index.astro`
- Projects: `src/content/projects/`
- Publications: `src/content/publications/` (grouped by publication status)
- CV: `src/content/cv.md`
- Downloadable CV: `public/files/Songyu_Shen_CV.pdf`
- Useful links: `src/pages/useful-links.astro`

The gallery route and gallery data from the source theme are intentionally not
included.

The website biography and academic records are based on the CV project's
`resume.tex` and `info.md`. When the CV is updated, copy its final
`output/pdf/Songyu_Shen_CV.pdf` to `public/files/Songyu_Shen_CV.pdf` and update
the corresponding website content. The public download URL is
`/files/Songyu_Shen_CV.pdf`.
