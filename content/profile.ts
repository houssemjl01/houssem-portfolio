export const profile = {
  eyebrow: "Software Engineering Student · Full-Stack Developer",
  intro:
    "I build secure, end-to-end web systems with Spring Boot, Angular, and PostgreSQL. Most recently, I designed and shipped an email templates platform during my PFA at Vermeg.",
  about: [
    "I'm a third-year Software Engineering and Information Systems student at ISLAIb Béja. I care about how systems hold together: how a PostgreSQL schema, a secured REST API, and an Angular interface become one product that people can trust.",
    "During my PFA at Vermeg, I built an email templates management platform from the Angular editor down to the Spring Boot API and PostgreSQL persistence. The part that changed how I work was security — identifying an XSS vulnerability in the rendering flow and fixing it at the right layer.",
    "I'm now looking for a PFE starting in February 2027, where I can contribute to real systems alongside engineers who care about correctness, performance, and maintainability.",
  ],
  pullQuote:
    "I care about the parts users don't see: authorization boundaries, data integrity, and the rendering path.",
  facts: [
    {
      label: "Based in",
      value: "Tunis, Tunisia",
      icon: "location" as const,
    },
    {
      label: "Education",
      value: "3rd-year Software Engineering & Information Systems",
      icon: "education" as const,
    },
    {
      label: "Experience",
      value: "Full-Stack Developer Intern at Vermeg · July 2026",
      icon: "experience" as const,
    },
    {
      label: "Focus",
      value: "Full-stack development & application security",
      icon: "focus" as const,
    },
    {
      label: "Availability",
      value: "PFE · February 2027 · Tunis or remote",
      icon: "availability" as const,
    },
  ],
  principles: [
    {
      title: "Security is a feature",
      body: "Authentication, authorization, and output encoding belong in the design, not in a final checklist.",
    },
    {
      title: "Clear boundaries",
      body: "A typed API, a predictable data model, and a UI that knows exactly what it owns.",
    },
    {
      title: "Small, reversible steps",
      body: "Ship a working slice, verify it, then improve it. Fewer surprises, better software.",
    },
  ],
} as const;
