export type TechIconKey =
  | "java"
  | "spring"
  | "security"
  | "jwt"
  | "api"
  | "php"
  | "python"
  | "angular"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "material"
  | "postgres"
  | "sql"
  | "git"
  | "github"
  | "maven"
  | "vscode"
  | "mysql"
  | "c"
  | "chart"
  | "hedera"
  | "uml"
  | "intellij"
  | "mail";

export type Tech = {
  name: string;
  icon: TechIconKey;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: Tech[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  summary: string;
  focus: string[];
};

export type OtherWorkEntry = {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export type CertificationEntry = {
  short: string;
  name: string;
  issuer: string;
  date: string | null;
};

export type FeatureIconKey =
  | "template"
  | "variable"
  | "preview"
  | "send"
  | "search"
  | "history"
  | "auth"
  | "security";

export type ProjectFeature = {
  title: string;
  description: string;
  icon: FeatureIconKey;
};

export type ArchitectureNode = {
  title: string;
  subtitle: string;
  icon: "angular" | "api" | "spring" | "postgres" | "mail";
  core?: boolean;
};

export type ProjectDecision = {
  title: string;
  body: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  label?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  company: string;
  timeline: string;
  year: string;
  status: string;
  stack: string[];
  features: ProjectFeature[];
  architecture: ArchitectureNode[];
  decisions: ProjectDecision[];
  takeaways: string[];
  security: {
    title: string;
    body: string;
    points: string[];
  };
  confidentialNote: string;
};

export type SocialIconKey = "github" | "linkedin" | "mail";
