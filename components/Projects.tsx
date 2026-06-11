import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 015.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

export default function Projects({
  projects,
}: {
  projects: Dictionary["projects"];
}) {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        subtitle={projects.subtitle}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 90}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <article className="glow-card group flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-[family-name:var(--font-mono-custom)] text-xs text-accent">
                  {project.tag}
                </span>
                <div className="flex gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={projects.viewCode}
                      className="rounded-full border border-line p-2 text-muted transition-all hover:border-accent hover:text-accent"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={projects.viewLive}
                      className="rounded-full border border-line p-2 text-muted transition-all hover:border-accent hover:text-accent"
                    >
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className={`mt-4 font-bold transition-colors group-hover:text-accent ${
                  project.featured ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-ink/60 px-3 py-1 font-[family-name:var(--font-mono-custom)] text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
