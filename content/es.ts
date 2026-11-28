import type { SiteContent } from "./types";

// Spanish version of content/en.ts — keep both files in sync.
export const es: SiteContent = {
  locale: "es",
  meta: {
    title: "Rubén Saavedra — Ingeniero de software full-stack",
    description:
      "Ingeniero full-stack que entrega backends en .NET, frontends en React y apps móviles.",
  },
  ui: {
    skipToContent: "Saltar al contenido",
    navLabel: "Principal",
    languageSwitch: { label: "EN", ariaLabel: "EN — View the site in English" },
    opensInNewTab: "se abre en una pestaña nueva",
  },
  name: "Rubén Saavedra",
  initials: "RS",
  nav: {
    links: [
      { label: "Proyectos", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Experiencia", href: "#experience" },
      { label: "Certificaciones", href: "#certifications" },
    ],
    cta: { label: "Hablemos", href: "#contact" },
  },
  hero: {
    badge: "Disponible para nuevos proyectos",
    title: "Construyo software confiable, de principio a fin.",
    lead: "Ingeniero full-stack que entrega backends en .NET, frontends en React y apps móviles rápidos, confiables y fáciles de mantener.",
    primaryCta: { label: "Ver mis proyectos", href: "#work" },
    secondaryCta: { label: "Descargar CV", href: "/cv/Ruben_Saavedra_Resume.pdf" },
    photo: { src: "/img/ruben-saavedra.jpg", alt: "Rubén Saavedra", placeholder: "[Tu foto]" },
  },
  stack: {
    title: "Con qué trabajo",
    lead: "Un solo ingeniero en todo el producto, para que nada se pierda entre capas.",
    groups: [
      {
        title: "Backend",
        items: [".NET 8 y 10", "ASP.NET Core", "APIs REST", "Node.js + TypeScript"],
      },
      { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Angular", "Vue"] },
      { title: "Móvil", items: ["Android (Kotlin, Java)", "Flutter"] },
      { title: "Datos y nube", items: ["PostgreSQL", "SQL Server", "Azure", "Docker"] },
    ],
  },
  work: {
    title: "Proyectos destacados",
    projects: [
      {
        name: "[Nombre del proyecto]",
        summary: "[Descripción en una línea]",
        stack: ["[stack]"],
        href: "#project-1",
        image: null,
        tint: { bg: "#E9EEFB", fg: "#4B5A85" },
      },
      {
        name: "[Nombre del proyecto]",
        summary: "[Descripción en una línea]",
        stack: ["[stack]"],
        href: "#project-2",
        image: null,
        tint: { bg: "#E8F4EE", fg: "#3F6B55" },
      },
      {
        name: "[Nombre del proyecto]",
        summary: "[Descripción en una línea]",
        stack: ["[stack]"],
        href: "#project-3",
        image: null,
        tint: { bg: "#F3EEE6", fg: "#6E5E45" },
      },
    ],
  },
  experience: {
    title: "Experiencia",
    jobs: [
      {
        period: "oct 2025 — jun 2026",
        role: "Ingeniero de software",
        company: "Taxfyle",
        highlight:
          "Nuevas funcionalidades y correcciones en frontend, backend y base de datos — React y TypeScript en el frontend; servicios en .NET y Node.js + TypeScript en el backend.",
      },
      {
        period: "jul 2022 — oct 2025",
        role: "Ingeniero de software",
        company: "Nicasource",
        highlight:
          "Desarrollo backend con .NET Core y C#, mejoras de rendimiento e integraciones con servicios de Microsoft Azure, trabajando con Scrum.",
      },
      {
        period: "abr 2020 — mar 2022",
        role: "Ingeniero de software y líder de equipo",
        company: "Ahinko",
        highlight:
          "Lideré el trabajo del equipo con Scrum, mejoré el rendimiento del software y desarrollé apps móviles en Flutter y backends en C# con .NET Framework y .NET Core.",
      },
      {
        period: "sep 2013 — abr 2020",
        role: "Ingeniero de software",
        company: "Ahinko",
        highlight:
          "Desarrollé y mantuve el CRM de Casa Pellas (ASP.NET Web Forms, Web API, C#, SQL Server), frontends en AngularJS y apps móviles en Flutter.",
      },
      {
        period: "ene 2013 — jul 2014",
        role: "Desarrollador web freelance",
        company: "El Nuevo Diario",
        highlight:
          "Desarrollé soluciones web para el sitio oficial del periódico con PHP, JavaScript y PostgreSQL.",
      },
      {
        period: "may 2010 — jul 2013",
        role: "Ingeniero de software",
        company: "Versatec",
        highlight:
          "Desarrollé servicios de procesamiento de transacciones y software para POS en ANSI C, y mantuve un sistema de control de flota en ASP.NET Web Forms y SQL Server.",
      },
      {
        period: "mar 2009 — mar 2010",
        role: "Desarrollador junior",
        company: "Organización Panamericana de la Salud",
        highlight:
          "Desarrollé sistemas de información administrativa y una aplicación de fichas epidemiológicas con Visual Basic, SQL Server y Crystal Reports.",
      },
      {
        period: "jun 2008 — feb 2009",
        role: "Desarrollador junior",
        company: "Telmark",
        highlight:
          "Desarrollé aplicaciones con ASP.NET Web Forms, Visual Basic y C#, y modelé bases de datos en SQL Server.",
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    allLink: {
      label: "Ver todas las credenciales →",
      href: "https://www.credly.com/users/ruben-saavedra-prado/badges/credly",
    },
    verifyLabel: "Verificar credencial ↗",
    logoPlaceholder: "[Logo]",
    items: [
      {
        name: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2021",
        logo: "/img/certifications/azure-ai-fundamentals.png",
        verifyUrl: "https://www.credly.com/badges/f5d01652-20e6-4867-b28b-b4b7b1f7f43d",
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        year: "2021",
        logo: "/img/certifications/azure-fundamentals.png",
        verifyUrl: "https://www.credly.com/badges/b31a2307-d07a-4f05-8e43-677dfdf465b7",
      },
    ],
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    lead: "En español o en inglés — hablemos.",
    email: "rubone02@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/rubone" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rubone/" },
    ],
  },
  footer: { location: "Nicaragua · Remoto, para todo el mundo" },
};
