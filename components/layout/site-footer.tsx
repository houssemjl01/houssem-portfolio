import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUp, Code2, Mail, MapPin } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

const sourceUrl = "https://github.com/houssemjl01/houssem-portfolio";

export async function SiteFooter() {
  "use cache";
  cacheLife("max");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="glass-soft flex h-9 w-9 items-center justify-center rounded-lg font-mono text-xs font-medium tracking-[-0.02em]">
                {site.monogram}
              </span>
              <span className="text-sm font-medium tracking-[-0.01em]">
                {site.name}
              </span>
              <span className="sr-only">— Home</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary">
              Full-stack developer focused on secure, maintainable systems.
              Currently looking for a PFE starting February 2027.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Available for PFE · Feb 2027
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              {site.socials.linkedin && (
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.7} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                >
                  <Code2 className="h-4 w-4" strokeWidth={1.7} />
                  Source
                </a>
              </li>
            </ul>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
              {site.location} · GMT+1
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <span>Built with Next.js, Tailwind CSS, and Motion.</span>
            <Link
              href="/#top"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
