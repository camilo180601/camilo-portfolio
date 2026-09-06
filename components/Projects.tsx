import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/lib/dictionaries";
import type { Project } from "@/lib/dictionaries/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ProjectLinks({
  project,
  projects,
}: {
  project: Project;
  projects: Dictionary["projects"];
}) {
  return (
    <div className="project-links">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projects.viewLive}: ${project.title}`}
        >
          {projects.viewLive}
          <ArrowUpRight size={18} />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projects.viewCode}: ${project.title}`}
        >
          {projects.viewCode}
          <GithubLogo size={18} />
        </a>
      )}
    </div>
  );
}

export default function Projects({
  projects,
}: {
  projects: Dictionary["projects"];
}) {
  const selected = projects.items.slice(0, 2);
  return (
    <section id="projects" className="section page-width">
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        subtitle={projects.subtitle}
      />
      <div className="selected-projects">
        {selected.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <article className="selected-project">
              <div
                className={`project-art project-art-${index}`}
                aria-hidden="true"
              >
                {index === 0 ? (
                  <>
                    <span className="art-small">COLOMBIA</span>
                    <span className="bar-wordmark">
                      the<span>bar</span>
                      <i>®</i>
                    </span>
                    <div className="brand-names">
                      <span>Smirnoff</span>
                      <span>Don Julio</span>
                      <span>Old Parr</span>
                      <span>Baileys</span>
                      <span>Buchanan&apos;s</span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="art-small">BUCHANAN&apos;S</span>
                    <div className="buchanan-monogram">
                      B<span>&</span>
                    </div>
                    <span className="art-small">.NET / UMBRACO</span>
                  </>
                )}
              </div>
              <div className="project-caption">
                <span className="eyebrow">{project.tag}</span>
                <span className="project-index">0{index + 1}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="tech-line">{project.tech.join(" / ")}</p>
              <ProjectLinks project={project} projects={projects} />
            </article>
          </Reveal>
        ))}
      </div>
      <div className="project-archive">
        {projects.items.slice(2).map((project, index) => (
          <Reveal key={project.title}>
            <article className="archive-project">
              <span className="project-index">
                {String(index + 3).padStart(2, "0")}
              </span>
              <div>
                <p className="eyebrow">{project.tag}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="tech-line">{project.tech.join(" / ")}</p>
                <ProjectLinks project={project} projects={projects} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
