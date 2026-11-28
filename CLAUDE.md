# rubensaavedra.net — Redesign

Personal portfolio of Rubén Saavedra (full-stack software engineer). The legacy static site was replaced by this Next.js site at launch (tag `v1-legacy` keeps the old one).

- **Plan:** `docs/PLAN.md` — work through it step by step and tick the checkboxes as tasks are done.
- **Design reference:** `docs/design/option-a.html` (Option A · Clean Light). Open it in a browser; match its layout, spacing, type and colors.
- **Branches:** `main` is production (every push deploys via GitHub Actions). Work on feature branches and merge to `main` to publish.

## Stack & decisions

- Next.js (App Router) + TypeScript + Tailwind CSS.
- Static export only: `output: 'export'`, `images: { unoptimized: true }`, output in `out/`. No server features (no API routes, no SSR, no middleware).
- Hosted on GitHub Pages from repo `rubone/rubone.github.io` at `rubensaavedra.net`. No `basePath` needed.
- `public/CNAME` must contain `rubensaavedra.net`; `public/.nojekyll` must exist (so `_next/` is served).
- Fonts via `next/font/google`: Space Grotesk (headings), Inter (body).
- Content lives in typed data files (e.g. `content/en.ts`, `content/es.ts`), not hard-coded in components.
- i18n: English at `/`, Spanish at `/es`.
- Contact: `mailto:` link or Formspree/Web3Forms. PHP does not run on GitHub Pages.
- Deploy: GitHub Actions workflow (`actions/upload-pages-artifact` + `actions/deploy-pages`) on push to `main`.

## Design tokens (Option A)

| Token | Value |
|---|---|
| Background | `#FBFBFA` |
| Surface / cards | `#FFFFFF`, border `#E6E8EC`, radius 20px |
| Text | `#16181D` |
| Muted text | `#4A4F5A`, `#6B7080` |
| Accent | `#1F4FD8` (hover `#163BA6`) |
| Dark block (contact) | `#16181D` |
| Success badge | bg `#EAF7EF`, text `#17663A`, dot `#1F9D55` |
| Container | max-width 1160px, side padding 32px |
| Buttons | pill (radius 999px), 15px × 26px padding |

## Legacy site

Removed at launch; the old site is preserved under the git tag `v1-legacy`. `public/index-en.html` redirects the old English URL to `/`.

## Conventions

- Keep components small: Header, Hero, Stack, Work, Experience, Certifications, Contact, Footer.
- Responsive check at 375px, 768px and 1440px.
- `npm run build` must pass before any commit.
