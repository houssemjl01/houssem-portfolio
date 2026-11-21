import { ProjectCard } from "@/components/project/project-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";
import { getProjectScreenshots } from "@/lib/assets";

export function SelectedWork() {
  const project = projects[0];
  const screenshots = getProjectScreenshots(project.slug);

  return (
    <section id="work" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="One project, built end to end."
            description="A flagship project with the architecture, security work, and product decisions behind it."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ProjectCard project={project} screenshot={screenshots[0]} />
        </Reveal>
      </Container>
    </section>
  );
}
