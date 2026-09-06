import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";
import Reveal from "./Reveal";

export default function Hero({
  hero,
  locale,
}: {
  hero: Dictionary["hero"];
  locale: Locale;
}) {
  const es = locale === "es";
  return (
    <section id="top" className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="eyebrow">{hero.roles[0]}</p>
        <p className="availability">
          <span />
          {hero.badge}
        </p>
      </div>
      <div className="hero-grid">
        <div className="hero-identity">
          <h1 id="hero-title" className="hero-name">
            <span>Camilo</span>
            <span>
              López<span className="name-period">.</span>
            </span>
          </h1>
          <a href="#projects" className="primary-link">
            {hero.ctaProjects}
            <ArrowDownRight size={23} weight="regular" />
          </a>
        </div>
        <div className="hero-profile">
          <p className="hero-statement">
            {es
              ? "Software que resuelve. Código que perdura."
              : "Software that solves. Code that lasts."}
          </p>
          <p className="hero-description">{hero.tagline}</p>
          <div
            className="hero-stack"
            aria-label={es ? "Especialidades" : "Specialties"}
          >
            <span>Angular</span>
            <span>.NET / C#</span>
            <span>Java / Spring Boot</span>
          </div>
          <div className="cv-downloads">
            <p className="eyebrow">
              {es ? "Mi experiencia, en PDF" : "My experience, in PDF"}
            </p>
            <div>
              <a
                href={profile.cvPath.es}
                download="CamiloLopez_CV_ES.pdf"
                hrefLang="es"
                aria-label={
                  es
                    ? "CV Español: Descargar CV en español"
                    : "CV Español: Download CV in Spanish"
                }
              >
                CV Español <ArrowDown size={17} />
              </a>
              <a
                href={profile.cvPath.en}
                download="CamiloLopez_CV_EN.pdf"
                hrefLang="en"
                aria-label={
                  es
                    ? "CV English: Descargar CV en inglés"
                    : "CV English: Download CV in English"
                }
              >
                CV English <ArrowDown size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Reveal className="hero-footnote">
        <p>{hero.location}</p>
        <p>
          <strong>3+</strong> {hero.stats[0].label.toLowerCase()}
        </p>
        <a href={`mailto:${profile.email}`}>
          {hero.ctaContact}
          <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}
