import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";
import Typewriter from "./Typewriter";
import Reveal from "./Reveal";

export default function Hero({
  hero,
  locale,
}: {
  hero: Dictionary["hero"];
  locale: Locale;
}) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="aurora aurora-1 left-[-10%] top-[-10%]" />
      <div className="aurora aurora-2 right-[-15%] top-[20%]" />
      <div className="aurora aurora-3 bottom-[-10%] left-[30%]" />
      <div className="dot-grid absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-36">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/60 px-4 py-1.5 text-xs font-medium text-accent-3 backdrop-blur">
            <span className="pulse-dot relative h-2 w-2 rounded-full bg-accent-3" />
            {hero.badge}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 font-[family-name:var(--font-mono-custom)] text-sm text-muted">
            {hero.greeting}
          </p>
          <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-gradient">{hero.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 min-h-8 text-xl sm:text-2xl">
            <Typewriter phrases={hero.roles} />
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.tagline}
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {hero.location}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              {hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold transition-all hover:border-accent hover:text-accent"
            >
              {hero.ctaContact}
            </a>
            <a
              href={profile.cvPath[locale]}
              download
              className="link-underline inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {hero.ctaCV}
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="bg-surface/80 p-6 backdrop-blur">
                <dt className="order-last mt-1 text-xs text-muted">{stat.label}</dt>
                <dd className="text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
