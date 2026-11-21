import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description: "APIs, authentication, and the business logic behind the interface.",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Spring Security", icon: "security" },
      { name: "JWT Authentication", icon: "jwt" },
      { name: "REST APIs", icon: "api" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Typed interfaces that stay close to the design and predictable to use.",
    items: [
      { name: "Angular 20", icon: "angular" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Angular Material", icon: "material" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational models and queries that hold up as the product grows.",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    id: "data-analysis",
    title: "Data analysis",
    description: "Cleaning, exploring, and visualizing data with Python libraries.",
    items: [
      { name: "Python", icon: "python" },
      { name: "Pandas", icon: "chart" },
      { name: "NumPy", icon: "chart" },
      { name: "Matplotlib", icon: "chart" },
      { name: "Seaborn", icon: "chart" },
    ],
  },
  {
    id: "tools",
    title: "Tools & methods",
    description: "The workflow around the code, from version control to delivery testing.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Maven", icon: "maven" },
      { name: "IntelliJ IDEA", icon: "intellij" },
      { name: "VS Code", icon: "vscode" },
      { name: "UML", icon: "uml" },
      { name: "Agile / Scrum", icon: "uml" },
      { name: "SMTP / MailHog", icon: "mail" },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Hedera fundamentals and developer training through The Hashgraph Association.",
    items: [
      { name: "Hedera Hashgraph", icon: "hedera" },
      { name: "HCDA", icon: "hedera" },
      { name: "HBF", icon: "hedera" },
      { name: "HCF", icon: "hedera" },
    ],
  },
];
