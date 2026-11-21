import {
  Briefcase,
  Clock,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

const factIcons = {
  location: MapPin,
  education: GraduationCap,
  experience: Briefcase,
  focus: Target,
  availability: Clock,
} as const;

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="About"
            title="Engineering with intent."
            description="The academic foundation, the internship, and the questions that keep me interested."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="space-y-5 text-sm leading-relaxed text-secondary md:text-base">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-accent/40 pl-5 font-display text-xl italic leading-snug text-foreground/90 md:text-2xl">
                {profile.pullQuote}
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-line bg-surface/40 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  At a glance
                </p>

                <ul className="mt-5 space-y-5">
                  {profile.facts.map((fact) => {
                    const Icon = factIcons[fact.icon];

                    return (
                      <li key={fact.label} className="flex gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-background/40 text-accent">
                          <Icon
                            className="h-3.5 w-3.5"
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                            {fact.label}
                          </p>
                          <p className="mt-1 text-[13px] leading-relaxed text-foreground/90">
                            {fact.value}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
          {profile.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.05}>
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-medium tracking-[-0.01em]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
