# Camilo López — Portfolio

Personal portfolio of **Camilo Alejandro López**, Software Engineer (Angular · .NET · Java · Spring Boot), built to showcase professional experience, featured projects and technical skills — in **Spanish and English**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, SSG)
- React 19 + TypeScript
- Tailwind CSS 4
- Custom i18n with locale routing (`/es`, `/en`) and `Accept-Language` detection via middleware
- Zero animation libraries — pure CSS keyframes + IntersectionObserver reveals

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to your preferred language.

## Structure

```
app/[locale]/        Locale-aware layout & page (es | en)
components/          UI sections (Hero, Experience, Projects, Skills, ...)
lib/dictionaries/    Full ES/EN content dictionaries
middleware.ts        Locale detection & redirect
public/cv/           Downloadable CV (PDF)
product-finder/      Legacy project preserved (vanilla JS product listing tool)
```

## Deploy

Deployed on [Vercel](https://vercel.com). [Go to Link](https://camilo-portfolio-dev.vercel.app/).


## Design and browser QA

The visual direction and maintenance rules live in [DESIGN.md](DESIGN.md). The original getdesign.md reference is preserved in `docs/design/getdesign-claude.md`. Taste Skill and its redesign skill were installed in the local Codex skill directory.

The portfolio follows the system light/dark preference and reduced-motion setting. Both CV languages are downloadable from either locale. Long job descriptions remain available through native disclosures.

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

Playwright starts a production server on port 3100 if needed and tests Spanish and English on desktop, mobile and dark mode. Checks include actual PDF downloads, responsive overflow, keyboard navigation, language switching and job disclosures. Screenshots and failure traces are written to `test-results/`; the report is in `playwright-report/`.

Production output uses `.next-production/`, while `npm run dev` keeps `.next/`, so browser QA does not conflict with an open development server. Vercel Analytics is enabled on Vercel deployments.
