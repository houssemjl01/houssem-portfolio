import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <Container className="py-32 md:py-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          404
        </p>

        <h1 className="mt-6 max-w-2xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary md:text-base">
          The link may be outdated, or the page may have moved. The work and the
          contact details are still one click away.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/#work" variant="secondary" size="lg">
            View selected work
          </ButtonLink>
        </div>

        <p className="mt-10 text-xs text-muted">
          Or email{" "}
          <Link
            href={`mailto:${site.email}`}
            className="link-underline text-secondary hover:text-foreground"
          >
            {site.email}
          </Link>
          .
        </p>
      </Container>
    </main>
  );
}
