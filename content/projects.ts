import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "email-templates-platform",
    title: "Email Templates Management Platform",
    tagline:
      "One place to create, preview, send, and track reusable email templates — built end to end during my PFA internship at Vermeg.",
    summary:
      "The brief was to give teams a single workflow for reusable email templates: author and organize them, substitute dynamic values, preview the rendered message, send it through SMTP, and review delivery history. During my PFA at Vermeg, I built that workflow end to end with an Angular 20 client, a secured Spring Boot REST API, and PostgreSQL persistence. The work also meant hardening the rendering path against XSS and testing real SMTP delivery locally with MailHog before relying on an external inbox.",
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
          "Create, edit, categorize, and search reusable templates from one Angular workspace.",
        icon: "template",
      },
      {
        title: "Dynamic variables",
        description:
          "Substitute values such as ${nom} and ${prenom} into a template at send time.",
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
          "Send through Spring Mail, with MailHog capturing SMTP traffic locally so delivery can be tested safely.",
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
          "Review previously sent emails and the metadata attached to each delivery.",
        icon: "history",
      },
      {
        title: "Authentication & authorization",
        description:
          "Protect every route with Spring Security and stateless JWT authentication.",
        icon: "auth",
      },
      {
        title: "XSS remediation",
        description:
          "Identify a cross-site scripting risk in the template flow and fix it where the output is rendered.",
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
        body: "A stateless API keeps the Angular client and Spring Boot backend decoupled. Each request carries its own proof of identity, so authorization stays explicit at the API boundary instead of depending on server-side session state.",
      },
      {
        title: "MailHog for local delivery testing",
        body: "Capturing SMTP traffic locally made it possible to test real rendering and delivery behavior without sending to external inboxes or exposing credentials during development.",
      },
      {
        title: "Preview as a first-class feature",
        body: "Template authors need to see the final email, including substituted variables, before committing to a send. Preview is part of the core workflow, not an afterthought bolted onto the editor.",
      },
    ],
    takeaways: [
      "How to structure a Spring Boot API around clear domain boundaries.",
      "Why output encoding and sanitization belong in the rendering path, not only at input.",
      "How to keep an Angular client and a secured REST API in sync during development.",
      "How much of security depends on where data flows, not just what it contains.",
      "How local SMTP tooling can make delivery testing repeatable without real inboxes.",
    ],
    security: {
      title: "Treating template content as untrusted",
      body: "Email templates combine user-authored HTML with dynamic values, which makes the rendering path a natural target for cross-site scripting. During the internship I traced how template content and substituted values reached the rendered output, identified the XSS risk, and remediated it before the workflow was treated as complete.",
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
