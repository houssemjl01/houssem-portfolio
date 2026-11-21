"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) {
      menuButtonRef.current?.focus();
    }

    wasOpen.current = open;
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "glass-header"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="glass-soft flex h-9 w-9 items-center justify-center rounded-lg font-mono text-xs font-medium tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
            {site.monogram}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="whitespace-nowrap text-[13px] font-medium tracking-[-0.01em]">
              {site.name}
            </span>
            <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              {site.shortTitle}
            </span>
          </span>
          <span className="sr-only">— Home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[13px] text-secondary transition-colors duration-300 hover:bg-surface/50 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 text-[13px] font-medium text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors duration-300 hover:bg-accent/90 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/50 text-secondary transition-colors duration-300 hover:border-line-strong hover:text-foreground lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/70"
        aria-hidden="true"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-header border-t lg:hidden"
          >
            <div className="container-page flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto py-6">
              <nav aria-label="Mobile" className="flex flex-col">
                {site.nav.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-4 text-2xl font-medium tracking-[-0.02em] transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="h-4 w-4 text-muted"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-5">
                <Badge tone="accent" pulse>
                  Open to PFE · Feb 2027
                </Badge>

                <div className="flex items-center gap-3">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3 text-xs text-secondary transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  {site.socials.linkedin && (
                    <a
                      href={site.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3 text-xs text-secondary transition-colors hover:text-foreground"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
