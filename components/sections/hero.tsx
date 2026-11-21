import {
  ArrowDown,
  Clock,
  Download,
  Globe,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroGlow } from "@/components/ui/hero-glow";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { isCvAvailable } from "@/lib/assets";

const coreStack = ["Java", "Spring Boot", "Angular", "PostgreSQL", "TypeScript"];

export function Hero() {
  const cvAvailable = isCvAvailable();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40"
    >
      <HeroGlow />

      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 -z-20 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Badge tone="accent" pulse>
                Open to PFE · February 2027
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {profile.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-display mt-5 text-[clamp(3.1rem,8.2vw,6.4rem)]">
                <span className="block">Houssem Eddin</span>
                <span className="mt-1 block font-display font-normal italic tracking-[-0.02em] text-foreground/90">
                  Jlassi
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/#work" size="lg">
                  View selected work
                  <ArrowDown
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </ButtonLink>
                <ButtonLink href="/#contact" variant="secondary" size="lg">
                  Contact me
                </ButtonLink>
                {cvAvailable && (
                  <ButtonLink
                    href={site.cv.href}
                    variant="ghost"
                    size="lg"
                    download
                    className="px-4"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {site.cv.label}
                  </ButtonLink>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
                  {site.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5" strokeWidth={1.7} />
                  Open to remote
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.7} />
                  PFE · Feb 2027
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={24}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/5 blur-3xl"
                />

                <div className="overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-2xl shadow-black/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      profile.ts
                    </span>
                  </div>

                  <div className="p-5 font-mono text-[12px] leading-[1.9] md:p-6 md:text-[12.5px]">
                    <p>
                      <span className="text-muted">const</span>{" "}
                      <span className="text-foreground">engineer</span>{" "}
                      <span className="text-muted">=</span>{" "}
                      <span className="text-muted">{"{"}</span>
                    </p>
                    <div className="pl-4">
                      <p>
                        <span className="text-secondary">name</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-accent">
                          &quot;Houssem Eddin Jlassi&quot;
                        </span>
                        <span className="text-muted">,</span>
                      </p>
                      <p>
                        <span className="text-secondary">role</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-accent">
                          &quot;Full-Stack Developer&quot;
                        </span>
                        <span className="text-muted">,</span>
                      </p>
                      <p>
                        <span className="text-secondary">stack</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-muted">[</span>
                        <span className="text-accent">
                          &quot;Spring Boot&quot;
                        </span>
                        <span className="text-muted">, </span>
                        <span className="text-accent">&quot;Angular&quot;</span>
                        <span className="text-muted">, </span>
                        <span className="text-accent">
                          &quot;PostgreSQL&quot;
                        </span>
                        <span className="text-muted">]</span>
                        <span className="text-muted">,</span>
                      </p>
                      <p>
                        <span className="text-secondary">focus</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-accent">
                          &quot;secure, end-to-end systems&quot;
                        </span>
                        <span className="text-muted">,</span>
                      </p>
                      <p>
                        <span className="text-secondary">status</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-success">
                          &quot;open to PFE — Feb 2027&quot;
                        </span>
                        <span className="text-muted">,</span>
                      </p>
                    </div>
                    <p>
                      <span className="text-muted">{"}"}</span>
                      <span
                        aria-hidden="true"
                        className="caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 bg-accent"
                      />
                    </p>
                  </div>

                  <div className="border-t border-line p-5 md:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      Core stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {coreStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-background/40 px-2.5 py-1 font-mono text-[10px] text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:mt-24">
          <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
          Scroll to explore
        </div>
      </Container>
    </section>
  );
}
