import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={100}>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {about.highlights.map((item, i) => (
            <Reveal key={item.title} delay={150 + i * 80}>
              <div className="glow-card h-full rounded-2xl p-5">
                <h3 className="font-semibold text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
