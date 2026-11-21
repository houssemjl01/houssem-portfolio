import { Award, Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, languages, otherWork } from "@/content/other-work";

export function OtherWork() {
  return (
    <section id="other-work" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="More work"
            title="Built beyond the brief."
            description="Academic projects and certifications that broaden the full-stack picture."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {otherWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="glass glass-interactive h-full rounded-2xl p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {item.kind}
                    </p>
                    <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-[13px] leading-relaxed text-secondary"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft">
                        <Check
                          className="h-2.5 w-2.5 text-accent"
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="glass-soft rounded-full px-2.5 py-1 font-mono text-[10px] text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="glass mt-4 rounded-2xl p-6 md:p-7">
            <div className="flex items-start gap-3">
              <span className="glass-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-accent">
                <Award className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">Certifications</p>
                <p className="mt-1 text-sm text-secondary">
                  Hedera training through The Hashgraph Association.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {certifications.map((certification) => (
                <div
                  key={certification.short}
                  className="rounded-xl border border-line bg-background/40 p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                      {certification.short}
                    </span>
                    {certification.date && (
                      <span className="font-mono text-[9px] text-muted">
                        {certification.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[13px] font-medium leading-snug">
                    {certification.name}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                    {certification.issuer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs text-secondary">
              <span className="font-mono uppercase tracking-[0.16em] text-muted">
                Languages
              </span>
              {languages.map((language) => (
                <span key={language.name}>
                  <span className="text-foreground/90">{language.name}</span>
                  {" · "}
                  {language.level}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
