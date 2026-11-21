import { GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/content/education";

export function Education() {
  const entry = education[0];

  return (
    <section id="education" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Education"
            title="Foundations."
            description="The academic side of the same goal: understanding how software systems are designed, built, and maintained."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="h-full rounded-2xl border border-line bg-surface/40 p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-background/40 text-accent">
                    <GraduationCap
                      className="h-4 w-4"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{entry.institution}</p>
                    <p className="mt-0.5 text-xs text-muted">{entry.location}</p>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {entry.period}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-[-0.02em] md:text-2xl">
                {entry.degree}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">
                {entry.summary}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-5">
            <div className="h-full rounded-2xl border border-line bg-surface/40 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Focus areas
              </p>

              <ul className="mt-5 space-y-4">
                {entry.focus.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
