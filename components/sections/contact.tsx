import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { CopyEmail } from "@/components/contact/copy-email";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            title="Let's build something that holds up."
            description="I'm looking for a PFE starting in February 2027. If you're working on something where correctness and security matter, I'd like to hear about it."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <p className="text-sm leading-relaxed text-secondary md:text-base">
                The fastest way to reach me is email. I read every message and
                reply as soon as I can.
              </p>

              <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
                {site.location} · GMT+1
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              <Reveal delay={0.08}>
                <div className="glass glass-interactive rounded-xl p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="glass-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                        <Mail
                          className="h-4 w-4"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          Email
                        </p>
                        <a
                          href={`mailto:${site.email}`}
                          className="mt-0.5 block truncate text-sm text-foreground/90 transition-colors hover:text-accent"
                        >
                          {site.email}
                        </a>
                      </div>
                    </div>
                    <CopyEmail email={site.email} />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.095}>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="group flex items-center justify-between glass glass-interactive rounded-xl p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="glass-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                      <Phone
                        className="h-4 w-4"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                        Phone
                      </p>
                      <p className="mt-0.5 truncate text-sm text-foreground/90">
                        {site.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>

              <Reveal delay={0.11}>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between glass glass-interactive rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="glass-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                      <GithubIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                        GitHub
                      </p>
                      <p className="mt-0.5 text-sm text-foreground/90">
                        @houssemjl01
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>

              {site.socials.linkedin && (
                <Reveal delay={0.14}>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between glass glass-interactive rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="glass-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                        <LinkedinIcon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          LinkedIn
                        </p>
                        <p className="mt-0.5 text-sm text-foreground/90">
                          Houssem Eddin Jlassi
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              )}

              <Reveal delay={0.17}>
                <div className="flex items-center gap-3 glass glass-interactive rounded-xl p-4">
                  <span className="glass-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                    <Clock
                      className="h-4 w-4"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      Availability
                    </p>
                    <p className="mt-0.5 text-sm text-foreground/90">
                      PFE · February 2027 · Tunis or remote
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <Link
                href="/#work"
                className="mt-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-300 hover:text-foreground"
              >
                Prefer to see the work first?
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
