import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/lib/dictionaries";
import { profile } from "@/lib/profile";
import Reveal from "./Reveal";

export default function Contact({
  contact,
}: {
  contact: Dictionary["contact"];
}) {
  const socials = [
    { label: contact.socials.github, href: profile.github },
    { label: contact.socials.linkedin, href: profile.linkedin },
    { label: contact.socials.whatsapp, href: profile.whatsapp },
  ];
  return (
    <section id="contact" className="section page-width contact-section">
      <Reveal>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
      </Reveal>
      <Reveal className="contact-layout">
        <p>{contact.subtitle}</p>
        <div>
          <a
            className="contact-email"
            href={`mailto:${profile.email}`}
            aria-label={`${contact.emailCta}: ${profile.email}`}
          >
            {profile.email}
            <ArrowUpRight size={26} />
          </a>
          <div className="social-links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
