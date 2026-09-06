import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills({ skills }: { skills: Dictionary["skills"] }) {
  const { education } = skills;
  return (
    <section id="skills" className="section page-width">
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />
      <div className="skills-layout">
        <div className="skill-groups">
          {skills.groups.map((group) => (
            <Reveal key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.items.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="education-panel">
          <div>
            <p className="eyebrow">{education.title}</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="education-period">{education.period}</p>
          </div>
          <div>
            <h4 className="eyebrow">{education.certsTitle}</h4>
            <ul>
              {education.certs.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow">{education.langsTitle}</h4>
            <dl>
              {education.langs.map((lang) => (
                <div key={lang.name}>
                  <dt>{lang.name}</dt>
                  <dd>{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
