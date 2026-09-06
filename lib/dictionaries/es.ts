import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Camilo López · Ingeniero de Software | Angular · .NET · Java",
    description:
      "Ingeniero de Software en Bogotá con más de 3 años de experiencia en aplicaciones empresariales. Angular, .NET (C#), Java y Spring Boot; APIs REST, modernización de sistemas, bases de datos y AWS.",
    keywords: [
      "ingeniero de software",
      "desarrollador Angular",
      "desarrollador .NET",
      "desarrollador Java",
      "Spring Boot",
      "integración de sistemas",
      "desarrollo de software Bogotá",
      "Camilo López",
      "PostgreSQL",
      "AWS",
    ],
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para nuevos retos",
    greeting: "Hola, soy",
    name: "Camilo López",
    roles: [
      "Ingeniero de Software",
      "Angular · .NET (C#)",
      "Java · Spring Boot",
    ],
    tagline:
      "Desarrollo y evoluciono aplicaciones empresariales con Angular, .NET y Java con Spring Boot. Integro sistemas, modernizo plataformas y construyo soluciones robustas y escalables.",
    location: "Bogotá D.C., Colombia",
    ctaProjects: "Ver proyectos",
    ctaContact: "Hablemos",
    ctaCV: "Descargar CV en español",
    stats: [
      {
        value: "3+",
        label: "Años de experiencia",
      },
      {
        value: "5",
        label: "Marcas en una plataforma",
      },
      {
        value: "5",
        label: "Experiencias profesionales",
      },
      {
        value: "2",
        label: "Idiomas",
      },
    ],
  },
  about: {
    eyebrow: "02 / Sobre mí",
    title: "Ingeniería para aplicaciones empresariales",
    paragraphs: [
      "Soy Ingeniero de Software con más de 3 años de experiencia construyendo y evolucionando aplicaciones empresariales en producción. Trabajo con Angular en el front-end, .NET (C#) y Java con Spring Boot en el back-end, diseñando APIs REST e integrando sistemas.",
      "Mi experiencia abarca aplicaciones empresariales en Audisoft, una plataforma de Recursos Humanos en Espacio RH LATAM, soluciones .NET y front-end para Havas Colombia y la modernización de un CRM legado en DataCRM.",
      "Complemento mi stack con Laravel, Node.js y Next.js. Aplico programación orientada a objetos, arquitectura MVC, Git y prácticas de código mantenible, con experiencia en optimización de bases de datos y despliegues sobre AWS y Linux.",
    ],
    highlights: [
      {
        title: "Aplicaciones empresariales",
        text: "Angular, .NET (C#), Java y Spring Boot para módulos y procesos de negocio en producción.",
      },
      {
        title: "Integración de sistemas",
        text: "APIs REST/SOAP, autenticación segura y conexión con servicios de terceros.",
      },
      {
        title: "Modernización y calidad",
        text: "Refactorización de código legado, POO, MVC, revisión de código y pruebas técnicas.",
      },
      {
        title: "Datos y despliegues",
        text: "Optimización de PostgreSQL y MySQL; administración de servicios en AWS EC2 y Linux.",
      },
    ],
  },
  experience: {
    details: "Responsabilidades y aportes",
    eyebrow: "03 / Trayectoria",
    title: "Experiencia profesional",
    jobs: [
      {
        role: "Ingeniero de Software .NET",
        company: "Audisoft",
        period: "Jun 2026 - Presente",
        location: "Bogotá D.C.",
        tech: [".NET (C#)", "PHP", "PostgreSQL", "APIs REST", "MVC", "Git"],
        points: [
          "Desarrollo y mantenimiento de aplicaciones empresariales con .NET (C#) y PHP, implementando funcionalidades y mejoras en módulos en producción.",
          "Diseño y consumo de APIs REST e integraciones con terceros, con autenticación segura y manejo centralizado de errores.",
          "Modelado y optimización de consultas PostgreSQL para mejorar los tiempos de respuesta de los módulos de mayor uso.",
          "Refactorización de código legado aplicando POO, MVC, separación de responsabilidades y Git.",
          "Revisión de código, pruebas técnicas y corrección de incidencias para asegurar entregas estables.",
        ],
      },
      {
        role: "Ingeniero de Software Fullstack",
        company: "Espacio RH LATAM",
        period: "Oct 2022 - Presente",
        location: "Bogotá D.C.",
        points: [
          "Desarrollo y mantenimiento de una plataforma empresarial de Recursos Humanos con Angular, servicios back-end en Java y Spring Boot y Laravel para módulos existentes.",
          "Diseño e implementación de APIs REST con Spring Boot para integrar nómina, ausentismos, certificaciones y servicios de terceros.",
          "Componentes, formularios y flujos de aprobación en Angular con TypeScript, validaciones y consumo de APIs.",
          "Nómina Electrónica con cumplimiento DIAN, Gestión de Ausentismos y Certificaciones Laborales con generación de PDF y firma electrónica.",
          "Despliegue y administración en AWS EC2 (Linux) con MySQL y SQL Server; integraciones REST/SOAP y Git.",
          "Soporte técnico e integración con software liquidador de nómina desarrollado en Java sobre Windows Server.",
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
        role: "Desarrollador .NET / Front-End",
        company: "Havas Colombia",
        period: "Dic 2025 - May 2026",
        location: "Bogotá D.C.",
        points: [
          "Soluciones web con .NET (C#) y Umbraco CMS para Buchanan's: plantillas, document types y componentes administrables.",
          "Desarrollo y mantenimiento de co.thebar.com, plataforma multimarca con Next.js (App Router) y TypeScript para cinco marcas internacionales.",
          "Componentes reutilizables y pixel perfect desde Figma, con fidelidad visual y consistencia de marca.",
          "Lógica por marca, verificación de edad, personalización regional, rutas dinámicas e integraciones con APIs y CMS headless.",
          "Optimización del rendimiento y de métricas web (LCP, CLS y TBT) en landing pages de alto tráfico.",
          "Coordinación con diseño y marketing para entregar campañas y soluciones alineadas con objetivos de negocio.",
        ],
        tech: [".NET (C#)", "Umbraco", "Next.js", "TypeScript", "Figma"],
      },
      {
        role: "Ingeniero de Desarrollo Angular",
        company: "DataCRM",
        period: "Dic 2024 - Oct 2025",
        location: "Bogotá D.C.",
        points: [
          "Migración de un CRM legado de PowerBuilder a Angular con servicios back-end en Node.js.",
          "Desarrollo de módulos y flujos de negocio con Angular, Vue.js, Laravel y Express.js.",
          "Diseño de endpoints RESTful y autenticación segura con JWT para integrar interfaces y servicios internos.",
          "Integraciones con WhatsApp Business API (Baileys) y RD Station, automatizando procesos comerciales mediante colas en AWS Lambda.",
          "Refactorización de módulos y optimización de consultas MySQL para mejorar mantenibilidad y rendimiento.",
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
        role: "Desarrollador de Software Freelance",
        company: "Dakiti Buzos & Camele Tienda",
        period: "Jun 2021 - Ago 2022",
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
    eyebrow: "01 / Trabajo seleccionado",
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
        title: "Plataforma RH - Espacio RH LATAM",
        tag: "SaaS empresarial",
        description:
          "Plataforma empresarial con Angular, servicios Java y Spring Boot y módulos Laravel. Nómina Electrónica con cumplimiento DIAN, ausentismos, flujos de aprobación y certificaciones con PDF y firma electrónica.",
        tech: ["Angular", "Java", "Spring Boot", "Laravel", "MySQL", "AWS EC2"],
      },
      {
        title: "Modernización de CRM",
        tag: "Migración de sistemas",
        description:
          "Migración de PowerBuilder a Angular y Node.js en DataCRM, con módulos de negocio, endpoints RESTful, autenticación JWT y optimización de consultas MySQL.",
        tech: ["Angular", "Node.js", "MySQL", "JWT"],
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
    eyebrow: "04 / Conocimientos",
    title: "Habilidades & formación",
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
          "APIs REST/SOAP",
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
        name: "Bases de datos",
        items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "NoSQL"],
      },
      {
        name: "Arquitectura y herramientas",
        items: ["POO", "MVC", "Integración de sistemas", "Postman", "JIRA"],
      },
    ],
    education: {
      title: "Educación",
      degree: "Ingeniería Informática",
      school: "Universidad Militar Nueva Granada",
      period: "2019 - 2025 · Graduado · Bogotá D.C.",
      certsTitle: "Certificaciones",
      certs: [
        "Máster en React (Hooks, MERN, Node.js, JWT)",
        "Máster en PHP, Laravel, Symfony y WordPress",
      ],
      langsTitle: "Idiomas",
      langs: [
        {
          name: "Español",
          level: "Nativo",
        },
        {
          name: "Inglés",
          level: "Avanzado",
        },
      ],
    },
  },
  contact: {
    eyebrow: "05 / Contacto",
    title: "Hablemos de tu próximo proyecto.",
    subtitle:
      "¿Buscas un ingeniero de software para desarrollar aplicaciones empresariales, integrar sistemas o modernizar tu plataforma? Hablemos de tu próximo proyecto.",
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
