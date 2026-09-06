import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Camilo López · Software Engineer | Angular · .NET · Java",
    description:
      "Software Engineer in Bogotá with 3+ years of experience building enterprise applications. Angular, .NET (C#), Java and Spring Boot; REST APIs, legacy modernization, databases and AWS.",
    keywords: [
      "software engineer",
      "Angular developer",
      ".NET developer",
      "Java developer",
      "Spring Boot",
      "system integration",
      "software development Bogotá",
      "Camilo López",
      "PostgreSQL",
      "AWS",
    ],
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
    roles: ["Software Engineer", "Angular · .NET (C#)", "Java · Spring Boot"],
    tagline:
      "I build and evolve enterprise applications with Angular, .NET and Java with Spring Boot. I integrate systems, modernize platforms and deliver robust, scalable solutions.",
    location: "Bogotá D.C., Colombia",
    ctaProjects: "View projects",
    ctaContact: "Let's talk",
    ctaCV: "Download CV in English",
    stats: [
      {
        value: "3+",
        label: "Years of experience",
      },
      {
        value: "5",
        label: "Brands on one platform",
      },
      {
        value: "5",
        label: "Professional roles",
      },
      {
        value: "2",
        label: "Languages",
      },
    ],
  },
  about: {
    eyebrow: "02 / About me",
    title: "Engineering for enterprise applications",
    paragraphs: [
      "I'm a Software Engineer with 3+ years of experience building and evolving production-grade enterprise systems. I work with Angular on the front end, .NET (C#) and Java with Spring Boot on the back end, designing REST APIs and integrating systems.",
      "My experience spans enterprise applications at Audisoft, an HR platform at Espacio RH LATAM, .NET and front-end solutions for Havas Colombia, and legacy CRM modernization at DataCRM.",
      "I complement my stack with Laravel, Node.js and Next.js. I apply object-oriented programming, MVC architecture, Git and maintainable-code practices, with experience in database optimization and deployments on AWS and Linux.",
    ],
    highlights: [
      {
        title: "Enterprise applications",
        text: "Angular, .NET (C#), Java and Spring Boot for production business modules and workflows.",
      },
      {
        title: "System integration",
        text: "REST/SOAP APIs, secure authentication and connections to third-party services.",
      },
      {
        title: "Modernization & quality",
        text: "Legacy refactoring, OOP, MVC, code reviews and technical testing.",
      },
      {
        title: "Data & deployments",
        text: "PostgreSQL and MySQL optimization; service administration on AWS EC2 and Linux.",
      },
    ],
  },
  experience: {
    details: "Responsibilities & contributions",
    eyebrow: "03 / Career",
    title: "Professional experience",
    jobs: [
      {
        role: "Software Engineer (.NET)",
        company: "Audisoft",
        period: "Jun 2026 - Present",
        location: "Bogotá D.C.",
        tech: [".NET (C#)", "PHP", "PostgreSQL", "APIs REST", "MVC", "Git"],
        points: [
          "Developed and maintained enterprise applications with .NET (C#) and PHP, delivering features and improvements to production modules.",
          "Designed and consumed REST APIs and third-party integrations with secure authentication and centralized error handling.",
          "Modeled data and optimized PostgreSQL queries to improve response times across high-usage modules.",
          "Refactored legacy code applying OOP, MVC, separation of concerns and Git version control.",
          "Performed code reviews, technical testing and incident resolution to ensure stable production releases.",
        ],
      },
      {
        role: "Fullstack Software Engineer",
        company: "Espacio RH LATAM",
        period: "Oct 2022 - Present",
        location: "Bogotá D.C.",
        points: [
          "Developed and maintained an enterprise HR platform with Angular, Java and Spring Boot back-end services, and Laravel for existing modules.",
          "Designed and implemented REST APIs with Spring Boot to integrate payroll, absence, certification and third-party services.",
          "Built Angular components, forms and approval workflows using TypeScript, validation and API consumption.",
          "Implemented Electronic Payroll with DIAN compliance, Absence Management and Labor Certifications with PDF generation and electronic signature.",
          "Deployed and administered services on AWS EC2 (Linux) with MySQL and SQL Server; managed REST/SOAP integrations and Git source control.",
          "Provided technical support and integration for Java-based payroll software deployed on Windows Server.",
        ],
        tech: [
          "Angular",
          "TypeScript",
          "Java",
          "Spring Boot",
          "Laravel",
          "AWS EC2",
          "MySQL",
          "SQL Server",
        ],
      },
      {
        role: "Front-End / .NET Developer",
        company: "Havas Colombia",
        period: "Dec 2025 - May 2026",
        location: "Bogotá D.C.",
        points: [
          "Developed .NET (C#) and Umbraco CMS solutions for Buchanan's, creating templates, document types and manageable components.",
          "Developed and maintained co.thebar.com, a multi-brand platform built with Next.js (App Router) and TypeScript for five international brands.",
          "Built reusable, pixel-perfect components from Figma prototypes, ensuring visual fidelity and brand consistency.",
          "Implemented brand-specific logic, age verification, regional personalization, dynamic routes, and API and headless CMS integrations.",
          "Optimized performance and web metrics (LCP, CLS and TBT) across high-traffic landing pages.",
          "Collaborated with design and marketing teams to deliver campaigns and solutions aligned with business goals.",
        ],
        tech: [".NET (C#)", "Umbraco", "Next.js", "TypeScript", "Figma"],
      },
      {
        role: "Angular Development Engineer",
        company: "DataCRM",
        period: "Dec 2024 - Oct 2025",
        location: "Bogotá D.C.",
        points: [
          "Migrated a legacy CRM from PowerBuilder to Angular with Node.js back-end services.",
          "Developed CRM modules and business workflows using Angular, Vue.js, Laravel and Express.js.",
          "Designed RESTful endpoints and secure JWT authentication to integrate interfaces and internal services.",
          "Integrated WhatsApp Business API (Baileys) and RD Station, automating commercial processes through queues on AWS Lambda.",
          "Refactored modules and optimized MySQL queries to improve maintainability and performance.",
        ],
        tech: [
          "Angular",
          "Node.js",
          "Vue.js",
          "Laravel",
          "Express.js",
          "AWS Lambda",
          "MySQL",
          "JWT",
        ],
      },
      {
        role: "Freelance Software Developer",
        company: "Dakiti Buzos & Camele Tienda",
        period: "Jun 2021 - Aug 2022",
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
    eyebrow: "01 / Selected work",
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
        title: "HR Platform - Espacio RH LATAM",
        tag: "Enterprise SaaS",
        description:
          "Enterprise platform with Angular, Java and Spring Boot services, and Laravel modules. Electronic Payroll with DIAN compliance, absence management, approval workflows and certificates with PDF generation and electronic signature.",
        tech: ["Angular", "Java", "Spring Boot", "Laravel", "MySQL", "AWS EC2"],
      },
      {
        title: "CRM modernization",
        tag: "System migration",
        description:
          "Migration from PowerBuilder to Angular and Node.js at DataCRM, including business modules, RESTful endpoints, JWT authentication and MySQL query optimization.",
        tech: ["Angular", "Node.js", "MySQL", "JWT"],
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
    eyebrow: "04 / Expertise",
    title: "Skills & education",
    groups: [
      {
        name: "Frontend",
        items: [
          "Angular",
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React",
          "Vue.js",
          "HTML5/CSS3",
        ],
      },
      {
        name: "Backend",
        items: [
          "Java",
          "Spring Boot",
          ".NET (C#)",
          "Laravel",
          "PHP",
          "Node.js",
          "Express.js",
          "REST/SOAP APIs",
          "JWT",
        ],
      },
      {
        name: "CMS",
        items: ["Umbraco", "WordPress", "Headless CMS"],
      },
      {
        name: "Cloud & DevOps",
        items: [
          "AWS EC2",
          "AWS Lambda",
          "Docker",
          "CI/CD",
          "Git",
          "Linux",
          "Windows Server",
        ],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "NoSQL"],
      },
      {
        name: "Architecture & tools",
        items: ["OOP", "MVC", "System integration", "Postman", "JIRA"],
      },
    ],
    education: {
      title: "Education",
      degree: "B.Sc. in Computer Engineering",
      school: "Universidad Militar Nueva Granada",
      period: "2019 - 2025 · Graduate · Bogotá D.C.",
      certsTitle: "Certifications",
      certs: [
        "Master in React (Hooks, MERN, Node.js, JWT)",
        "Master in PHP, Laravel, Symfony & WordPress",
      ],
      langsTitle: "Languages",
      langs: [
        {
          name: "Spanish",
          level: "Native",
        },
        {
          name: "English",
          level: "Advanced",
        },
      ],
    },
  },
  contact: {
    eyebrow: "05 / Contact",
    title: "Let’s build your next project.",
    subtitle:
      "Looking for a software engineer to build enterprise applications, integrate systems or modernize your platform? Let’s talk about your next project.",
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
