export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
}

export interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    roles: string[];
    tagline: string;
    location: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCV: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    eyebrow: string;
    paragraphs: string[];
    highlights: { title: string; text: string }[];
  };
  experience: {
    title: string;
    eyebrow: string;
    jobs: Job[];
  };
  projects: {
    title: string;
    eyebrow: string;
    subtitle: string;
    viewLive: string;
    viewCode: string;
    items: Project[];
  };
  skills: {
    title: string;
    eyebrow: string;
    groups: SkillGroup[];
    education: {
      title: string;
      degree: string;
      school: string;
      period: string;
      certsTitle: string;
      certs: string[];
      langsTitle: string;
      langs: { name: string; level: string }[];
    };
  };
  contact: {
    title: string;
    eyebrow: string;
    subtitle: string;
    emailCta: string;
    socials: { github: string; linkedin: string; whatsapp: string };
  };
  footer: {
    built: string;
    rights: string;
  };
}
