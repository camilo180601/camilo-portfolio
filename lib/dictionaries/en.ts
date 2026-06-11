import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Camilo López · Fullstack Developer | Next.js · React · .NET",
    description:
      "Fullstack Developer with 3+ years of experience building high-performance web products for international brands. Next.js, React, Angular, .NET, Laravel and AWS.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Open to new challenges",
    greeting: "Hi, I'm",
    name: "Camilo López",
    roles: [
      "Fullstack Developer",
      "Front-End Specialist",
      "Next.js · React · .NET",
    ],
    tagline:
      "I build fast, scalable, pixel-perfect web experiences for international brands. From Figma prototype to cloud production.",
    location: "Bogotá D.C., Colombia",
    ctaProjects: "View projects",
    ctaContact: "Let's talk",
    ctaCV: "Download CV",
    stats: [
      { value: "3+", label: "Years of experience" },
      { value: "5", label: "Global brands in one product" },
      { value: "40+", label: "GitHub repositories" },
      { value: "10+", label: "Technologies in production" },
    ],
  },
  about: {
    eyebrow: "01 — About me",
    title: "Code that turns design into business",
    paragraphs: [
      "I'm a Fullstack Developer with 3+ years of experience building robust, scalable, high-performance web solutions. I specialize in Front-End with Next.js, React and Angular, integrating back-ends with Node.js, Laravel and .NET.",
      "I've worked on large-scale projects for international brands like Smirnoff, Don Julio, Old Parr, Baileys and Buchanan's, taking Figma prototypes to pixel-perfect implementations with REST/SOAP API integrations, headless CMS and AWS deployments.",
      "I'm passionate about web performance (Core Web Vitals) and I embed AI tooling into my development workflow to ship faster and raise code quality.",
    ],
    highlights: [
      {
        title: "Pixel Perfect",
        text: "From Figma to production with absolute visual fidelity and brand consistency.",
      },
      {
        title: "Performance",
        text: "Core Web Vitals optimization: LCP, CLS and TBT on high-traffic landing pages.",
      },
      {
        title: "AI-powered flow",
        text: "Accelerated development with AI code assistants: less time, more quality.",
      },
      {
        title: "Cloud Ready",
        text: "Deployments and operations on AWS EC2 and Lambda with CI/CD and Docker.",
      },
    ],
  },
  experience: {
    eyebrow: "02 — Career",
    title: "Professional experience",
    jobs: [
      {
        role: "Front-End Developer",
        company: "Havas Colombia",
        period: "Dec 2025 — May 2026",
        location: "Bogotá D.C.",
        points: [
          "Built and maintained co.thebar.com, a multi-brand platform integrating 5 premium spirits brands (Smirnoff, Don Julio, Old Parr, Baileys and Buchanan's) under a single Next.js (App Router) + TypeScript architecture.",
          "Implemented the Buchanan's website with .NET and Umbraco CMS: templates, document types and components so the marketing team manages content autonomously.",
          "Reusable, pixel-perfect components from Figma prototypes, with age gating, regional personalization and per-brand dynamic routing.",
          "Improved Core Web Vitals (LCP, CLS, TBT) on landing pages with AI-assisted tooling.",
        ],
        tech: ["Next.js", "TypeScript", ".NET", "Umbraco", "Figma"],
      },
      {
        role: "Fullstack Software Engineer",
        company: "Espacio RH LATAM",
        period: "Oct 2022 — Present",
        location: "Bogotá D.C.",
        points: [
          "Enterprise Human Resources platform in production with Laravel (back-end) and Angular (front-end).",
          "Critical modules: Electronic Payroll (DIAN compliance), Absence Management with automatic validation, and Labor Certificates with PDF generation and e-signature.",
          "Corporate landing page in Next.js focused on performance, SEO and conversion.",
          "Deployment and operations on AWS EC2 (Linux) with MySQL and SQL Server; REST and SOAP API integrations.",
        ],
        tech: ["Laravel", "Angular", "Next.js", "AWS EC2", "MySQL", "SQL Server"],
      },
      {
        role: "Development Engineer",
        company: "DataCRM",
        period: "Dec 2024 — Oct 2025",
        location: "Bogotá D.C.",
        points: [
          "New CRM features with Vue.js, Laravel and Express.js.",
          "Integrations with WhatsApp Business API (Baileys) and RD Station, automating sales processes with a queue-based architecture on AWS Lambda.",
          "Module refactoring, MySQL query optimization, RESTful endpoints and JWT authentication.",
          "Migrated a legacy PowerBuilder CRM to a modern Node.js + Angular stack.",
        ],
        tech: ["Vue.js", "Laravel", "Express.js", "AWS Lambda", "JWT"],
      },
      {
        role: "Freelance Web Developer",
        company: "Dakiti Buzos & Camele Tienda",
        period: "Jun 2021 — Aug 2022",
        location: "Remote",
        points: [
          "Custom e-commerce solutions with Laravel, PHP and jQuery, with secure payment flows and interactive interfaces.",
          "Commercial site in Next.js optimizing usability, performance and SEO.",
        ],
        tech: ["Laravel", "PHP", "Next.js", "jQuery"],
      },
    ],
  },
  projects: {
    eyebrow: "03 — Selected work",
    title: "Featured projects",
    subtitle:
      "A selection of production products and open-source projects that show what I can do.",
    viewLive: "View live",
    viewCode: "View code",
    items: [
      {
        title: "TheBar.com Colombia",
        tag: "Multi-brand platform",
        description:
          "E-commerce and content platform integrating 5 premium spirits brands (Smirnoff, Don Julio, Old Parr, Baileys, Buchanan's) under a single Next.js App Router architecture. Age verification, per-brand conditional logic, dynamic routing and headless CMS.",
        tech: ["Next.js", "TypeScript", "App Router", "Headless CMS"],
        link: "https://co.thebar.com",
        featured: true,
      },
      {
        title: "Buchanan's Website",
        tag: "Global brand site",
        description:
          "Official brand website built with .NET and Umbraco CMS: templates, document types and components that let the marketing team manage content without touching code.",
        tech: [".NET", "Umbraco", "C#", "CMS"],
      },
      {
        title: "HR Platform — Espacio RH LATAM",
        tag: "Enterprise SaaS",
        description:
          "Human Resources platform in production: Electronic Payroll with DIAN compliance, absence management and labor certificates with PDF and e-signature.",
        tech: ["Laravel", "Angular", "MySQL", "AWS EC2"],
      },
      {
        title: "CRM + WhatsApp Automation",
        tag: "Integrations",
        description:
          "CRM integrations with WhatsApp Business API (Baileys) and RD Station, automating sales processes with a serverless queue architecture on AWS Lambda.",
        tech: ["Node.js", "AWS Lambda", "Vue.js", "WhatsApp API"],
      },
      {
        title: "Image to Code",
        tag: "AI · Open Source",
        description:
          "Tool that converts images and mockups into working code using the GPT-4 vision API. From screenshot to component in seconds.",
        tech: ["TypeScript", "GPT-4 Vision", "React"],
        repo: "https://github.com/camilo180601/image-to-code",
      },
      {
        title: "Digital Library",
        tag: "Fullstack · Open Source",
        description:
          "Digital library management system: modern front-end with Next.js 15, React 19 and Tailwind CSS 4, on top of a Laravel 11 RESTful API.",
        tech: ["Next.js 15", "React 19", "Tailwind 4", "Laravel 11"],
        repo: "https://github.com/camilo180601/frontbiblioteca",
      },
      {
        title: "MERN Chat App",
        tag: "Real-time · Open Source",
        description:
          "Real-time chat application built with the MERN stack: MongoDB, Express, React and Node.js with WebSockets.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        repo: "https://github.com/camilo180601/mern-chat-app",
      },
      {
        title: "JarvisAI",
        tag: "AI · Experimental",
        description:
          "Jarvis-inspired personal AI assistant built in Python: voice commands, automation and smart responses.",
        tech: ["Python", "AI", "Automation"],
        repo: "https://github.com/camilo180601/JarvisAI",
      },
    ],
  },
  skills: {
    eyebrow: "04 — Technical arsenal",
    title: "Skills & education",
    groups: [
      {
        name: "Front-End",
        items: [
          "Next.js",
          "React",
          "Angular",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "HTML5/CSS3",
          "Tailwind CSS",
          "Figma → Pixel Perfect",
        ],
      },
      {
        name: "Back-End",
        items: [
          ".NET",
          "Node.js",
          "Express.js",
          "NestJS",
          "Laravel",
          "PHP",
          "JWT",
          "REST/SOAP APIs",
        ],
      },
      {
        name: "CMS",
        items: ["Umbraco", "WordPress", "Headless CMS"],
      },
      {
        name: "Cloud & DevOps",
        items: ["AWS EC2", "AWS Lambda", "Docker", "CI/CD", "Git", "Linux", "Windows Server"],
      },
      {
        name: "Databases",
        items: ["MySQL", "SQL Server", "MongoDB", "NoSQL"],
      },
      {
        name: "AI & Productivity",
        items: ["AI code assistants", "Core Web Vitals", "Postman", "JIRA"],
      },
    ],
    education: {
      title: "Education",
      degree: "Computer Engineering",
      school: "Universidad Militar Nueva Granada",
      period: "2019 — 2025 · Graduated",
      certsTitle: "Certifications",
      certs: [
        "Master in React (Hooks, MERN, Node.js, JWT)",
        "Master in PHP, Laravel, Symfony & WordPress",
      ],
      langsTitle: "Languages",
      langs: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Advanced" },
      ],
    },
  },
  contact: {
    eyebrow: "05 — Contact",
    title: "Let's build something great",
    subtitle:
      "Looking for a developer who delivers quality, speed and attention to detail? Drop me a line and let's talk about your next project.",
    emailCta: "Email me",
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    built: "Designed & built with Next.js + Tailwind CSS",
    rights: "All rights reserved.",
  },
};
