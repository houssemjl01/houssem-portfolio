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
    id: "data",
    title: "Data",
    description: "Relational modelling and queries that hold up as the product grows.",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The everyday workflow around the code, from version control to builds.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Maven", icon: "maven" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];
