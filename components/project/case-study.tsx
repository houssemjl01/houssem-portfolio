import {
  Check,
  ChevronDown,
  Eye,
  History,
  KeyRound,
  LayoutTemplate,
  Leaf,
  Mail,
  Search,
  Send,
  ShieldCheck,
  Variable,
  Webhook,
  Database,
  Component,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type {
  ArchitectureNode,
  FeatureIconKey,
  Project,
  ProjectScreenshot,
} from "@/types/content";
import { InterfaceSchematic } from "@/components/project/interface-schematic";
import { ScreenshotGallery } from "@/components/project/screenshot-frame";
import { cn } from "@/lib/cn";

const featureIcons: Record<FeatureIconKey, LucideIcon> = {
  template: LayoutTemplate,
  variable: Variable,
  preview: Eye,
  send: Send,
  search: Search,
  history: History,
  auth: KeyRound,
  security: ShieldCheck,
};

const architectureIcons: Record<ArchitectureNode["icon"], LucideIcon> = {
  angular: Component,
  api: Webhook,
  spring: Leaf,
  postgres: Database,
  mail: Mail,
};

export function CaseStudy({
  project,
  screenshots,
}: {
  project: Project;
  screenshots: ProjectScreenshot[];
}) {
  return (
    <article className="flex-1">
      <header className="relative overflow-hidden border-b border-line pb-14 pt-10 md:pb-20 md:pt-14">
        <div
          aria-hidden="true"
          className="grid-lines absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_top,var(--accent-soft),transparent_70%)]"
        />

        <div className="container-page">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span>{project.company}</span>
            <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
            <span>{project.status}</span>
            <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
            <span>{project.timeline}</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
            {project.tagline}
          </p>

          <dl className="glass mt-10 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Role", value: project.role },
              { label: "Company", value: project.company },
              { label: "Timeline", value: project.timeline },
              { label: "Status", value: project.status },
            ].map((item) => (
              <div key={item.label} className="bg-background p-4 md:p-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="container-page section space-y-20 md:space-y-28">
        <section aria-labelledby="overview-heading" className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Overview</p>
            <h2
              id="overview-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              The problem and the build.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="glass-soft rounded-full px-3 py-1.5 font-mono text-[10px] text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              {screenshots[0] ? (
                <>
                  <ScreenshotGallery screenshots={screenshots.slice(0, 1)} />
                  <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Featured screenshot · no client data shown
                  </p>
                </>
              ) : (
                <InterfaceSchematic />
              )}
              {screenshots.length === 0 && (
                <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Interface schematic · based on the platform&apos;s feature set
                </p>
              )}
            </div>
          </div>
        </section>

        <section aria-labelledby="architecture-heading" className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Architecture</p>
            <h2
              id="architecture-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              How the system fits together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary">
              A decoupled client and API, a stateless authentication boundary, and
              a delivery path that can be tested locally before touching a real
              inbox.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="glass relative rounded-2xl p-4 md:p-6">
              {project.architecture.map((node, index) => {
                const Icon = architectureIcons[node.icon];

                return (
                  <li key={node.title}>
                    <div
                      className={cn(
                        "flex items-center gap-4 rounded-xl border p-4 transition-colors",
                        node.core
                          ? "border-accent/30 bg-accent-soft"
                          : "border-line bg-background/40",
                      )}
                    >
                      <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                          node.core
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-line bg-surface text-accent/80",
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{node.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted">
                          {node.subtitle}
                        </p>
                      </div>
                      {node.core && (
                        <span className="ml-auto hidden rounded-full border border-accent/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent sm:inline-flex">
                          Core
                        </span>
                      )}
                    </div>

                    {index < project.architecture.length - 1 && (
                      <div className="flex justify-center py-1.5" aria-hidden="true">
                        <ChevronDown className="h-3.5 w-3.5 text-muted/60" strokeWidth={1.7} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section aria-labelledby="features-heading">
          <div className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2
              id="features-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              What the platform does.
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.features.map((feature) => {
              const Icon = featureIcons[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="glass glass-interactive rounded-xl p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-background/40 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-medium tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="security-heading" className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Security</p>
            <h2
              id="security-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              {project.security.title}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-accent/25 bg-accent-soft/40 p-6 md:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-background/40 text-accent">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm leading-relaxed text-secondary md:text-base">
                {project.security.body}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.security.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="decisions-heading">
          <div className="max-w-2xl">
            <p className="eyebrow">Engineering decisions</p>
            <h2
              id="decisions-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              Trade-offs worth explaining.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.decisions.map((decision, index) => (
              <div
                key={decision.title}
                className="glass glass-interactive rounded-xl p-6"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-medium tracking-[-0.01em]">
                  {decision.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  {decision.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {screenshots.length > 1 && (
          <section aria-labelledby="screenshots-heading">
            <div className="max-w-2xl">
              <p className="eyebrow">Interface</p>
              <h2
                id="screenshots-heading"
                className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
              >
                The platform in use.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                All {screenshots.length} screens, from login to send history.
                Select any image to enlarge it.
              </p>
            </div>
            <div className="mt-8">
              <ScreenshotGallery screenshots={screenshots} />
              <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                Platform screenshots · no client data shown
              </p>
            </div>
          </section>
        )}

        <section aria-labelledby="takeaways-heading" className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Takeaways</p>
            <h2
              id="takeaways-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl"
            >
              What I took from it.
            </h2>
          </div>

          <ul className="space-y-4 lg:col-span-8">
            {project.takeaways.map((takeaway, index) => (
              <li
                key={takeaway}
                className="flex gap-4 border-b border-line pb-4 text-sm leading-relaxed text-secondary last:border-0 last:pb-0 md:text-base"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {takeaway}
              </li>
            ))}
          </ul>
        </section>

        <aside className="glass rounded-2xl p-6 text-[13px] leading-relaxed text-muted md:p-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-secondary">
            A note on confidentiality
          </p>
          <p className="mt-3 max-w-3xl">{project.confidentialNote}</p>
        </aside>
      </div>
    </article>
  );
}
