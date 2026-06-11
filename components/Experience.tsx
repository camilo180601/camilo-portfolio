import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience({
  experience,
}: {
  experience: Dictionary["experience"];
}) {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />

      <div className="relative mt-16">
        <div className="timeline-rail absolute bottom-0 left-[7px] top-0 w-px sm:left-1/2" />

        <ol className="space-y-14">
          {experience.jobs.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink sm:left-1/2 sm:-translate-x-1/2" />
              <Reveal
                className={`pl-10 sm:w-[calc(50%-2.5rem)] sm:pl-0 ${
                  i % 2 === 0 ? "" : "sm:ml-auto"
                }`}
                delay={80}
              >
                <div className="glow-card rounded-2xl p-6">
                  <p className="font-[family-name:var(--font-mono-custom)] text-xs uppercase tracking-widest text-accent">
                    {job.period} · {job.location}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                  <p className="text-sm font-medium text-accent-2">{job.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-ink/60 px-3 py-1 font-[family-name:var(--font-mono-custom)] text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
