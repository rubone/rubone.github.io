import type { SiteContent } from "./types";

// Content from the updated resume (public/cv/Ruben_Saavedra_Resume.pdf).
// [Bracketed] values are still missing — see "Contenido que falta reunir" in docs/PLAN.md.
export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "Rubén Saavedra — Full-stack Software Engineer",
    description:
      "Full-stack engineer shipping .NET backends, React frontends and mobile apps.",
  },
  ui: {
    skipToContent: "Skip to content",
    navLabel: "Main",
    languageSwitch: { label: "ES", ariaLabel: "ES — Ver el sitio en español" },
    opensInNewTab: "opens in a new tab",
  },
  name: "Rubén Saavedra",
  initials: "RS",
  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experience" },
      { label: "Certifications", href: "#certifications" },
    ],
    cta: { label: "Let’s talk", href: "#contact" },
  },
  hero: {
    badge: "Open to new projects",
    title: "I build reliable software, end to end.",
    lead: "Full-stack engineer shipping .NET backends, React frontends and mobile apps that are fast, reliable and easy to maintain.",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: { label: "Download CV", href: "/cv/Ruben_Saavedra_Resume.pdf" },
    photo: { src: "/img/ruben-saavedra.jpg", alt: "Rubén Saavedra", placeholder: "[Your photo]" },
  },
  stack: {
    title: "What I work with",
    lead: "One engineer across the whole product, so nothing gets lost between layers.",
    groups: [
      {
        title: "Backend",
        items: [".NET 8 & 10", "ASP.NET Core", "REST APIs", "Node.js + TypeScript"],
      },
      { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Angular", "Vue"] },
      { title: "Mobile", items: ["Android (Kotlin, Java)", "Flutter"] },
      { title: "Data & Cloud", items: ["PostgreSQL", "SQL Server", "Azure", "Docker"] },
    ],
  },
  work: {
    title: "Selected work",
    projects: [
      {
        name: "[Project name]",
        summary: "[One line description]",
        stack: ["[stack]"],
        href: "#project-1",
        image: null,
        tint: { bg: "#E9EEFB", fg: "#4B5A85" },
      },
      {
        name: "[Project name]",
        summary: "[One line description]",
        stack: ["[stack]"],
        href: "#project-2",
        image: null,
        tint: { bg: "#E8F4EE", fg: "#3F6B55" },
      },
      {
        name: "[Project name]",
        summary: "[One line description]",
        stack: ["[stack]"],
        href: "#project-3",
        image: null,
        tint: { bg: "#F3EEE6", fg: "#6E5E45" },
      },
    ],
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        period: "Oct 2025 — Jun 2026",
        role: "Software Engineer",
        company: "Taxfyle",
        highlight:
          "Shipped features and fixes across frontend, backend and database — React and TypeScript on the frontend, .NET and Node.js + TypeScript services on the backend.",
      },
      {
        period: "Jul 2022 — Oct 2025",
        role: "Software Engineer",
        company: "Nicasource",
        highlight:
          "Backend development with .NET Core and C#, performance improvements and integrations with Microsoft Azure services, working in Scrum.",
      },
      {
        period: "Apr 2020 — Mar 2022",
        role: "Software Engineer & Team Lead",
        company: "Ahinko",
        highlight:
          "Led the team’s work in Scrum, improved software performance, built mobile apps in Flutter and backends in C# with .NET Framework and .NET Core.",
      },
      {
        period: "Sep 2013 — Apr 2020",
        role: "Software Engineer",
        company: "Ahinko",
        highlight:
          "Built and maintained the Casa Pellas CRM (ASP.NET Web Forms, Web API, C#, SQL Server), AngularJS frontends and Flutter mobile apps.",
      },
      {
        period: "Jan 2013 — Jul 2014",
        role: "Freelance Web Developer",
        company: "El Nuevo Diario",
        highlight:
          "Developed web solutions for the newspaper’s official site with PHP, JavaScript and PostgreSQL.",
      },
      {
        period: "May 2010 — Jul 2013",
        role: "Software Engineer",
        company: "Versatec",
        highlight:
          "Built transaction-processing services and POS software in ANSI C, and maintained a fleet control system in ASP.NET Web Forms and SQL Server.",
      },
      {
        period: "Mar 2009 — Mar 2010",
        role: "Junior Developer",
        company: "Pan American Health Organization",
        highlight:
          "Built administrative information systems and an epidemiological records application with Visual Basic, SQL Server and Crystal Reports.",
      },
      {
        period: "Jun 2008 — Feb 2009",
        role: "Junior Developer",
        company: "Telmark",
        highlight:
          "Developed applications with ASP.NET Web Forms, Visual Basic and C#, and modeled SQL Server databases.",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    allLink: {
      label: "View all credentials →",
      href: "https://www.credly.com/users/ruben-saavedra-prado/badges/credly",
    },
    verifyLabel: "Verify credential ↗",
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
    title: "Have a project in mind?",
    lead: "English or Spanish — let’s talk.",
    email: "rubone02@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/rubone" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rubone/" },
    ],
  },
  footer: { location: "Nicaragua · Remote worldwide" },
};
