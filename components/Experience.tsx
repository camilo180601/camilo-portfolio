import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience({
  experience,
}: {
  experience: Dictionary["experience"];
}) {
  return (
    <section id="experience" className="section page-width">
      <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />
      <ol className="experience-list">
        {experience.jobs.map((job) => (
          <li key={job.company}>
            <Reveal className="job-row">
              <div className="job-meta">
                <p className="eyebrow">{job.period}</p>
                <h3>{job.company}</h3>
                <p>{job.location}</p>
              </div>
              <div className="job-content">
                <h4>{job.role}</h4>
                <p>{job.points[0]}</p>
                <details className="job-details">
                  <summary>
                    {experience.details}
                    <Plus size={18} />
                  </summary>
                  <ul>
                    {job.points.slice(1).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </details>
                <p className="tech-line">{job.tech.join(" / ")}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
