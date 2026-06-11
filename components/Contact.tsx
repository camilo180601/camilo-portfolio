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
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-6 py-28"
    >
      <div className="aurora aurora-2 left-[20%] top-[20%] opacity-30" />
      <div className="relative z-10 text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-[0.25em] text-accent">
            {contact.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">{contact.title}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {contact.subtitle}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-10 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
          >
            {contact.emailCta} →
          </a>
          <p className="mt-4 font-[family-name:var(--font-mono-custom)] text-sm text-muted">
            {profile.email}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 flex items-center justify-center gap-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
