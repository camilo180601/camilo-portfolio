import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills({ skills }: { skills: Dictionary["skills"] }) {
  const { education } = skills;
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.groups.map((group, i) => (
            <Reveal key={group.name} delay={(i % 2) * 90}>
              <div className="glow-card h-full rounded-2xl p-5">
                <h3 className="font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-widest text-accent">
                  {group.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ink/60 px-3 py-1.5 text-xs text-[#c5cae6] transition-colors hover:border-accent/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glow-card flex h-full flex-col gap-8 rounded-2xl p-6">
            <div>
              <h3 className="font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-widest text-accent-2">
                {education.title}
              </h3>
              <p className="mt-3 text-lg font-bold">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-[family-name:var(--font-mono-custom)] text-xs text-muted">
                {education.period}
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-widest text-accent-2">
                {education.certsTitle}
              </h3>
              <ul className="mt-3 space-y-2">
                {education.certs.map((cert) => (
                  <li key={cert} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-widest text-accent-2">
                {education.langsTitle}
              </h3>
              <ul className="mt-3 space-y-2">
                {education.langs.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{lang.name}</span>
                    <span className="font-[family-name:var(--font-mono-custom)] text-xs text-muted">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
