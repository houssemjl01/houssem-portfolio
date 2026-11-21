import type { CertificationEntry, OtherWorkEntry } from "@/types/content";

export const otherWork: OtherWorkEntry[] = [
  {
    title: "Restaurant Management System",
    kind: "Academic project · CRUD web app",
    description:
      "A restaurant management web application built in PHP with an MVC architecture and a relational MySQL backend.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Implemented CRUD operations for menus, orders, customers, and tables.",
      "Modeled the data in a relational MySQL schema and secured SQL queries and session handling.",
      "Built a responsive HTML5/CSS3 interface with JavaScript interactions.",
    ],
  },
  {
    title: "Bank Fraud Detection",
    kind: "Academic project · Data analysis",
    description:
      "An exploratory analysis of a Kaggle banking transactions dataset to identify fraud patterns and discriminative features.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Cleaned and preprocessed data with Pandas, including missing values, normalization, and encoding.",
      "Computed statistical indicators with NumPy.",
      "Visualized fraud patterns with Matplotlib and Seaborn and identified features useful for anomaly detection.",
    ],
  },
];

export const certifications: CertificationEntry[] = [
  {
    short: "HCDA",
    name: "Hedera Certified Developer Associate",
    issuer: "The Hashgraph Association",
    date: "Aug 2026",
  },
  {
    short: "HBF",
    name: "Hedera Business Foundation",
    issuer: "The Hashgraph Association",
    date: "Aug 2026",
  },
  {
    short: "HCF",
    name: "Hedera Certified Foundation",
    issuer: "The Hashgraph Association",
    date: null,
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Intermediate" },
  { name: "English", level: "Intermediate" },
];
