import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { InterfaceSchematic } from "@/components/project/interface-schematic";
import { ScreenshotFrame } from "@/components/project/screenshot-frame";
import type { Project, ProjectScreenshot } from "@/types/content";

export function ProjectCard({
  project,
  screenshot,
}: {
  project: Project;
  screenshot?: ProjectScreenshot;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-line bg-surface/40 transition-colors duration-500 hover:border-line-strong"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-soft),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
            <span className="font-mono uppercase tracking-[0.16em]">
              {project.company}
            </span>
            <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
            <span>{project.status}</span>
            <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
            <span>{project.timeline}</span>
          </div>

          <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-secondary">
            {project.tagline}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature.title}
                className="flex items-center gap-2 text-xs text-secondary"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft">
                  <Check className="h-2.5 w-2.5 text-accent" strokeWidth={2.4} />
                </span>
                {feature.title}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-background/40 px-2.5 py-1 font-mono text-[10px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            Read the case study
            <ArrowUpRight
              className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>

        <div className="lg:col-span-7">
          {screenshot ? (
            <ScreenshotFrame screenshot={screenshot} />
          ) : (
            <InterfaceSchematic />
          )}
          <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            {screenshot
              ? "Platform interface"
              : "Interface schematic · based on the platform's feature set"}
          </p>
        </div>
      </div>
    </Link>
  );
}
