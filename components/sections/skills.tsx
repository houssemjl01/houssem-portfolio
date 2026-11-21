import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Skills"
            title="A focused stack, used end to end."
            description="The tools I reach for when building and securing full-stack applications."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <div className="glass glass-interactive h-full rounded-2xl p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium tracking-[-0.01em]">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-secondary">
                      {group.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li key={tech.name}>
                      <span className="glass-soft inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-secondary transition-colors duration-300 hover:border-accent/30 hover:text-foreground">
                        <TechIcon
                          name={tech.icon}
                          className="h-3.5 w-3.5 text-accent/80"
                        />
                        {tech.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
