import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Experience"
            title="Where I've built."
            description="One internship, one complete product, and a lot of lessons about shipping software that has to hold up."
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          {experience.map((entry) => (
            <Reveal key={`${entry.company}-${entry.period}`}>
              <article className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {entry.period}
                  </p>
                  <p className="mt-3 text-sm font-medium">{entry.company}</p>
                  <p className="mt-1 text-xs text-muted">{entry.location}</p>
                  <span className="mt-3 inline-flex rounded-full border border-line bg-surface/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-secondary">
                    {entry.type}
                  </span>
                </div>

                <div className="relative md:col-span-9 md:border-l md:border-line md:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-background bg-accent md:block"
                  />

                  <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                    {entry.role}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary">
                    {entry.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {entry.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[13px] leading-relaxed text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {entry.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-background/40 px-2.5 py-1 font-mono text-[10px] text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
