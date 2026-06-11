import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Camilo López · Desarrollador Fullstack | Next.js · React · .NET",
    description:
      "Desarrollador Fullstack con más de 3 años de experiencia construyendo productos web de alto rendimiento para marcas internacionales. Next.js, React, Angular, .NET, Laravel y AWS.",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Skills",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para nuevos retos",
    greeting: "Hola, soy",
    name: "Camilo López",
    roles: [
      "Desarrollador Fullstack",
      "Especialista Front-End",
      "Next.js · React · .NET",
    ],
    tagline:
      "Construyo experiencias web rápidas, escalables y pixel perfect para marcas internacionales. Del prototipo en Figma a producción en la nube.",
    location: "Bogotá D.C., Colombia",
    ctaProjects: "Ver proyectos",
    ctaContact: "Hablemos",
    ctaCV: "Descargar CV",
    stats: [
      { value: "3+", label: "Años de experiencia" },
      { value: "5", label: "Marcas globales en un solo producto" },
      { value: "40+", label: "Repositorios en GitHub" },
      { value: "10+", label: "Tecnologías en producción" },
    ],
  },
  about: {
    eyebrow: "01 — Sobre mí",
    title: "Código que convierte diseño en negocio",
    paragraphs: [
      "Soy Desarrollador Fullstack con más de 3 años de experiencia construyendo soluciones web robustas, escalables y de alto rendimiento. Mi especialidad es el Front-End con Next.js, React y Angular, integrando back-ends con Node.js, Laravel y .NET.",
      "He trabajado en proyectos de gran escala para marcas internacionales como Smirnoff, Don Julio, Old Parr, Baileys y Buchanan's, llevando prototipos de Figma a implementaciones pixel perfect con integraciones de APIs REST/SOAP, CMS headless y despliegues en AWS.",
      "Me apasiona el rendimiento web (Core Web Vitals) e incorporo herramientas de IA a mi flujo de desarrollo para acelerar entregas y elevar la calidad del código.",
    ],
    highlights: [
      {
        title: "Pixel Perfect",
        text: "De Figma a producción con fidelidad visual absoluta y consistencia de marca.",
      },
      {
        title: "Performance",
        text: "Optimización de Core Web Vitals: LCP, CLS y TBT en landing pages de alto tráfico.",
      },
      {
        title: "IA en el flujo",
        text: "Desarrollo acelerado con asistentes de código de IA: menos tiempo, más calidad.",
      },
      {
        title: "Cloud Ready",
        text: "Despliegues y administración en AWS EC2 y Lambda con CI/CD y Docker.",
      },
    ],
  },
  experience: {
    eyebrow: "02 — Trayectoria",
    title: "Experiencia profesional",
    jobs: [
      {
        role: "Ingeniero de Software Fullstack",
        company: "Espacio RH LATAM",
        period: "Oct 2022 — Presente",
        location: "Bogotá D.C.",
        points: [
          "Plataforma empresarial de Recursos Humanos en producción con Laravel (back-end) y Angular (front-end).",
          "Módulos críticos: Nómina Electrónica (cumplimiento DIAN), Gestión de Ausentismos con validación automática y Certificaciones Laborales con PDF y firma electrónica.",
          "Landing corporativa en Next.js enfocada en performance, SEO y conversión.",
          "Despliegue y administración en AWS EC2 (Linux) con MySQL y SQL Server; integraciones vía APIs REST y SOAP.",
        ],
        tech: ["Laravel", "Angular", "Next.js", "AWS EC2", "MySQL", "SQL Server"],
      },
      {
        role: "Desarrollador Front-End",
        company: "Havas Colombia",
        period: "Dic 2025 — May 2026",
        location: "Bogotá D.C.",
        points: [
          "Desarrollo y mantenimiento de co.thebar.com, plataforma multimarca que integra 5 marcas premium de spirits (Smirnoff, Don Julio, Old Parr, Baileys y Buchanan's) bajo una sola arquitectura Next.js (App Router) + TypeScript.",
          "Implementación del sitio de Buchanan's con .NET y CMS Umbraco: plantillas, document types y componentes para que marketing administre contenido de forma autónoma.",
          "Componentes reutilizables y pixel perfect desde prototipos Figma, con verificación de edad, personalización regional y rutas dinámicas por marca.",
          "Mejora de Core Web Vitals (LCP, CLS, TBT) en landing pages con apoyo de herramientas de IA.",
        ],
        tech: ["Next.js", "TypeScript", ".NET", "Umbraco", "Figma"],
      },
      {
        role: "Ingeniero de Desarrollo",
        company: "DataCRM",
        period: "Dic 2024 — Oct 2025",
        location: "Bogotá D.C.",
        points: [
          "Nuevas funcionalidades para el CRM con Vue.js, Laravel y Express.js.",
          "Integraciones con WhatsApp Business API (Baileys) y RD Station, automatizando procesos comerciales con arquitectura de colas en AWS Lambda.",
          "Refactorización de módulos, optimización de consultas MySQL, endpoints RESTful y autenticación con JWT.",
          "Migración de un CRM legado de PowerBuilder a un stack moderno Node.js + Angular.",
        ],
        tech: ["Vue.js", "Laravel", "Express.js", "AWS Lambda", "JWT"],
      },
      {
        role: "Desarrollador Web Freelance",
        company: "Dakiti Buzos & Camele Tienda",
        period: "Jun 2021 — Ago 2022",
        location: "Remoto",
        points: [
          "Soluciones e-commerce personalizadas con Laravel, PHP y jQuery, con flujos de pago seguros e interfaces interactivas.",
          "Sitio comercial en Next.js optimizando usabilidad, performance y SEO.",
        ],
        tech: ["Laravel", "PHP", "Next.js", "jQuery"],
      },
    ],
  },
  projects: {
    eyebrow: "03 — Trabajo seleccionado",
    title: "Proyectos destacados",
    subtitle:
      "Una selección de productos en producción y proyectos open source que muestran lo que sé hacer.",
    viewLive: "Ver en vivo",
    viewCode: "Ver código",
    items: [
      {
        title: "TheBar.com Colombia",
        tag: "Plataforma multimarca",
        description:
          "Plataforma e-commerce y de contenido que integra 5 marcas premium de spirits (Smirnoff, Don Julio, Old Parr, Baileys, Buchanan's) bajo una sola arquitectura Next.js App Router. Verificación de edad, lógica condicional por marca, rutas dinámicas y CMS headless.",
        tech: ["Next.js", "TypeScript", "App Router", "Headless CMS"],
        link: "https://co.thebar.com",
        featured: true,
      },
      {
        title: "Buchanan's Website",
        tag: "Sitio de marca global",
        description:
          "Sitio oficial de la marca construido con .NET y Umbraco CMS: plantillas, document types y componentes que permiten al equipo de marketing administrar contenido sin tocar código.",
        link: "https://co.buchananswhisky.com/",
        tech: [".NET", "Umbraco", "C#", "CMS"],
      },
      {
        title: "Plataforma RH — Espacio RH LATAM",
        tag: "SaaS empresarial",
        description:
          "Plataforma de Recursos Humanos en producción: Nómina Electrónica con cumplimiento DIAN, gestión de ausentismos y certificaciones laborales con PDF y firma electrónica.",
        tech: ["Laravel", "Angular", "MySQL", "AWS EC2"],
      },
      {
        title: "Automatización CRM + WhatsApp",
        tag: "Integraciones",
        description:
          "Integraciones de CRM con WhatsApp Business API (Baileys) y RD Station, automatizando procesos comerciales con arquitectura de colas serverless en AWS Lambda.",
        tech: ["Node.js", "AWS Lambda", "Vue.js", "WhatsApp API"],
      },
      {
        title: "Image to Code",
        tag: "IA · Open Source",
        description:
          "Herramienta que convierte imágenes y mockups en código funcional usando la API de visión de GPT-4. De screenshot a componente en segundos.",
        tech: ["TypeScript", "GPT-4 Vision", "React"],
        repo: "https://github.com/camilo180601/image-to-code",
      },
      {
        title: "Biblioteca Digital",
        tag: "Fullstack · Open Source",
        description:
          "Sistema de gestión de biblioteca digital: front-end moderno con Next.js 15, React 19 y Tailwind CSS 4, sobre una API RESTful en Laravel 11.",
        tech: ["Next.js 15", "React 19", "Tailwind 4", "Laravel 11"],
        repo: "https://github.com/camilo180601/frontbiblioteca",
      },
      {
        title: "MERN Chat App",
        tag: "Tiempo real · Open Source",
        description:
          "Aplicación de chat en tiempo real construida con el stack MERN: MongoDB, Express, React y Node.js con WebSockets.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        repo: "https://github.com/camilo180601/mern-chat-app",
      },
      {
        title: "JarvisAI",
        tag: "IA · Experimental",
        description:
          "Asistente personal de IA inspirado en Jarvis, construido en Python: comandos de voz, automatización y respuestas inteligentes.",
        tech: ["Python", "IA", "Automatización"],
        repo: "https://github.com/camilo180601/JarvisAI",
      },
    ],
  },
  skills: {
    eyebrow: "04 — Arsenal técnico",
    title: "Habilidades & formación",
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
          "APIs REST/SOAP",
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
        name: "Bases de datos",
        items: ["MySQL", "SQL Server", "MongoDB", "NoSQL"],
      },
      {
        name: "IA & Productividad",
        items: ["Asistentes de código IA", "Core Web Vitals", "Postman", "JIRA"],
      },
    ],
    education: {
      title: "Educación",
      degree: "Ingeniería Informática",
      school: "Universidad Militar Nueva Granada",
      period: "2019 — 2025 · Graduado",
      certsTitle: "Certificaciones",
      certs: [
        "Máster en React (Hooks, MERN, Node.js, JWT)",
        "Máster en PHP, Laravel, Symfony y WordPress",
      ],
      langsTitle: "Idiomas",
      langs: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" },
      ],
    },
  },
  contact: {
    eyebrow: "05 — Contacto",
    title: "Construyamos algo grande",
    subtitle:
      "¿Buscas un desarrollador que entregue calidad, velocidad y atención al detalle? Escríbeme y hablemos de tu próximo proyecto.",
    emailCta: "Escríbeme",
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    built: "Diseñado y construido con Next.js + Tailwind CSS",
    rights: "Todos los derechos reservados.",
  },
};
