import type { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    company: "Vermeg",
    role: "Full-Stack Developer Intern (PFA)",
    location: "Tunis, Tunisia",
    period: "July 2026",
    type: "Internship",
    summary:
      "Built an email templates management platform end to end — Angular 20 on the frontend, Spring Boot on the backend, and PostgreSQL for persistence.",
    responsibilities: [
      "Built the Angular 20 interface for creating, editing, categorizing, and searching email templates.",
      "Developed REST endpoints with Spring Boot and persisted templates and send history in PostgreSQL.",
      "Implemented dynamic variables such as ${nom} and ${prenom} with a real-time preview of the rendered email.",
      "Integrated Spring Mail with MailHog to test SMTP delivery in a local environment.",
      "Secured the API with Spring Security and JWT authentication and authorization.",
      "Identified an XSS vulnerability in the template rendering flow and implemented the remediation.",
    ],
    tech: [
      "Angular 20",
      "TypeScript",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Spring Mail",
      "MailHog",
      "Maven",
      "Git",
    ],
  },
];
