# Camilo López — Portfolio

Personal portfolio of **Camilo Alejandro López**, Fullstack Developer (Next.js · React · .NET), built to showcase professional experience, featured projects and technical skills — in **Spanish and English**.

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
