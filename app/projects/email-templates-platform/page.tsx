import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CaseStudy } from "@/components/project/case-study";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getProjectScreenshots } from "@/lib/assets";
import type { Project } from "@/types/content";

function getFeaturedProject(): Project {
  const found = projects.find((item) => item.slug === "email-templates-platform");

  if (!found) {
    throw new Error("Email templates platform project is missing from content.");
  }

  return found;
}

const project = getFeaturedProject();

const url = `/projects/${project.slug}`;

export const metadata: Metadata = {
  title: project.title,
  description: project.tagline,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    title: `${project.title} — ${site.name}`,
    description: project.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${project.title} — ${site.name}`,
    description: project.tagline,
  },
};

export default function ProjectPage() {
  const screenshots = getProjectScreenshots(project.slug);

  return (
    <main id="main" className="flex-1">
      <div className="container-page pt-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
          Back to selected work
        </Link>
      </div>

      <CaseStudy project={project} screenshots={screenshots} />

      <section className="border-t border-line">
        <div className="container-page flex flex-col gap-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <p className="eyebrow">Next step</p>
            <p className="mt-3 max-w-lg text-xl font-medium tracking-[-0.02em] md:text-2xl">
              Looking for a PFE starting February 2027? Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#contact" size="lg">
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/#work" variant="secondary" size="lg">
              View selected work
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
