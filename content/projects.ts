import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "email-templates-platform",
    title: "Email Templates Management Platform",
    tagline:
      "A full-stack platform for creating, previewing, and sending dynamic email templates.",
    summary:
      "Built during my PFA internship at Vermeg, this platform lets teams manage reusable email templates with dynamic variables, live previews, and SMTP delivery — secured end to end with Spring Security and JWT.",
    role: "Full-Stack Developer Intern",
    company: "Vermeg",
    timeline: "July 2026",
    year: "2026",
    status: "Internship project",
    stack: [
      "Angular 20",
      "TypeScript",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Spring Mail",
      "MailHog",
      "Maven",
    ],
    features: [
      {
        title: "Template management",
        description:
          "Create, edit, and organize reusable email templates from a single Angular interface.",
        icon: "template",
      },
      {
        title: "Dynamic variables",
        description:
          "Inject values such as ${nom} and ${prenom} into a template at send time.",
        icon: "variable",
      },
      {
        title: "Live preview",
        description:
          "See the rendered email, including variable substitution, before sending it.",
        icon: "preview",
      },
      {
        title: "SMTP delivery",
        description:
          "Send messages through Spring Mail, with MailHog capturing local SMTP traffic during development.",
        icon: "send",
      },
      {
        title: "Categorization & search",
        description:
          "Find templates quickly by category or keyword instead of scrolling through a flat list.",
        icon: "search",
      },
      {
        title: "Send history",
        description:
          "Review previously sent emails and the metadata associated with each delivery.",
        icon: "history",
      },
      {
        title: "Authentication & authorization",
        description:
          "Protect the platform with Spring Security and stateless JWT authentication.",
        icon: "auth",
      },
      {
        title: "XSS remediation",
        description:
          "Identify a cross-site scripting risk in the rendering flow and fix it at the right layer.",
        icon: "security",
      },
    ],
    architecture: [
      {
        title: "Angular 20",
        subtitle: "Editor, preview, search, and history UI",
        icon: "angular",
      },
      {
        title: "REST API + JWT",
        subtitle: "Stateless authentication and authorization",
        icon: "api",
      },
      {
        title: "Spring Boot",
        subtitle: "Template service, rendering, and mail delivery",
        icon: "spring",
        core: true,
      },
      {
        title: "PostgreSQL",
        subtitle: "Templates, categories, and send history",
        icon: "postgres",
      },
      {
        title: "Spring Mail + MailHog",
        subtitle: "SMTP delivery and local testing",
        icon: "mail",
      },
    ],
    decisions: [
      {
        title: "Stateless authentication with JWT",
        body: "A stateless API keeps the Angular client and Spring Boot backend decoupled. Every request carries its own proof of identity, and authorization stays explicit at the API boundary.",
      },
      {
        title: "MailHog for local delivery testing",
        body: "Capturing SMTP traffic locally made it possible to test real email rendering without sending to external inboxes or exposing credentials.",
      },
      {
        title: "Preview as a first-class feature",
        body: "Template authors need to see the final email, including variable substitution, before committing to a send. The preview is part of the core workflow, not an afterthought.",
      },
    ],
    takeaways: [
      "How to structure a Spring Boot API around clear domain boundaries.",
      "Why output encoding and sanitization belong in the rendering path, not only at input.",
      "How to keep an Angular client and a secured REST API in sync during development.",
      "How much of security is about where data flows, not just what it contains.",
    ],
    security: {
      title: "Treating template content as untrusted",
      body: "Email templates combine user-authored HTML with dynamic values. That makes the rendering path a natural target for cross-site scripting. During the internship I identified an XSS risk in the template flow and remediated it before it could reach production.",
      points: [
        "Constrained and validated user-controlled template input.",
        "Encoded dynamic values before injecting them into the rendered output.",
        "Sanitized rendered HTML and avoided unsafe DOM injection.",
        "Kept authentication and authorization enforced on every API route.",
      ],
    },
    confidentialNote:
      "This case study describes work completed during my PFA at Vermeg. It contains no client data, credentials, or proprietary source code. The exact payloads and internal details are intentionally omitted.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
