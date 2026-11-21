import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Coffee,
  Code2,
  Component,
  Database,
  FileCode,
  FileCode2,
  FileJson2,
  FileType2,
  GitBranch,
  KeyRound,
  Leaf,
  Palette,
  Shield,
  ShieldCheck,
  Table2,
  Terminal,
  Webhook,
} from "lucide-react";

import type { TechIconKey } from "@/types/content";
import { cn } from "@/lib/cn";

const techIcons: Record<TechIconKey, LucideIcon> = {
  java: Coffee,
  spring: Leaf,
  security: ShieldCheck,
  jwt: KeyRound,
  api: Webhook,
  php: FileCode2,
  python: Terminal,
  angular: Shield,
  typescript: FileType2,
  javascript: FileJson2,
  html: FileCode,
  css: Palette,
  material: Component,
  postgres: Database,
  sql: Table2,
  git: GitBranch,
  github: Code2,
  maven: Boxes,
  vscode: Code2,
};

export function TechIcon({
  name,
  className,
}: {
  name: TechIconKey;
  className?: string;
}) {
  const Icon = techIcons[name];

  return (
    <Icon
      className={cn("h-4 w-4", className)}
      strokeWidth={1.7}
      aria-hidden="true"
    />
  );
}
