# Camilo López: software, with a personal signature

## Sources and scope
- Taste Skill: design-taste-frontend and redesign-existing-projects, installed in Codex.
- Reference downloaded with `npx getdesign@latest add claude`: [original analysis](docs/design/getdesign-claude.md), https://getdesign.md/claude/design-md.
- This is an independent portfolio identity, not a reproduction of Claude or its branding.
- Keep Next.js App Router, Tailwind 4, bilingual dictionaries, all CV content, existing project links and both PDF downloads.

## Design read
An individual software engineer's portfolio for recruiters and technical clients. Typographic, warm, precise and personal. Native CSS and the existing Next.js components. DESIGN_VARIANCE 6, MOTION_INTENSITY 4, VISUAL_DENSITY 4.

## Audit of the previous design
- Cyan, purple and green compete for attention; gradient headings obscure the hierarchy.
- Aurora blobs, moving dots, typewriter and cursor spotlight distract from professional work.
- Repeated rounded cards make skills, experience and projects indistinguishable.
- The alternating timeline makes long job descriptions difficult to scan.
- Projects need a stronger visual identity and a clear distinction between selected work and the project archive.
- Navigation needs focus states, a labelled mobile disclosure, Escape support and an active section.

## Visual system
- Canvas #f7f6f2, text #292823, muted #66645d, accent #a44630, soft surface #eeece5, rules #d6d2c9.
- System dark mode: canvas #211f1c, text #f0eee8, muted #b9b4aa, accent #ed9b80, soft surface #2d2a25, rules #49443c.
- One accent everywhere. No glow, gradient type, fake terminal, stock portrait or animated technology ticker.
- Space Grotesk for identity and body; JetBrains Mono for dates, technical labels and project indices. Preserve the existing next/font setup.
- H1 uses an intentional two-line personal name, not a generic slogan. 72-144px responsive display; headings 36-64px, body 16-18px, metadata 12-14px.
- Main width 1240px, 24px mobile gutters / 48px desktop gutters. Asymmetric hero; paired selected projects, compact project archive; experience in a stable two-column chronology.
- Corners: 4px controls, 6px project artwork. Other content uses whitespace and sparse section rules, not elevated cards.
- Project covers are abstract typographic artwork based on real project names, not screenshots or fabricated product UIs.
- Z layers: base content 0, sticky navigation 20, skip link 30.

## Interactions and content
- First view offers project navigation and two explicit PDF downloads (Spanish and English) in both locales.
- Job details use native details/summary, preserving all CV bullets. First description stays visible.
- Keep existing email, WhatsApp, GitHub, LinkedIn and CRM chat behavior.
- Retain original document facts. No invented performance percentages, clients, credentials or testimonials.
- Motion: finite hero entry and reveal on scroll, 200ms link feedback. Reduced motion removes transforms, animations and smooth scrolling.
- No content hidden when JavaScript is unavailable. IntersectionObserver progressively enables reveal effects.
- Honor system color scheme. Same layout and hierarchy in both modes.

## Validation
`npm run build` and `npm run test:e2e`. Playwright checks ES/EN, desktop/mobile, overflow, keyboard navigation, mobile menu, expanded experience, color modes and real PDF downloads. Store generated screenshots and traces in ignored test-results/. Run Lighthouse against the production build.
