import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section id="about" className="section page-width about-section">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />
      <div className="about-layout">
        <Reveal className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <div className="about-principles">
          {about.highlights.map((item) => (
            <Reveal key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
