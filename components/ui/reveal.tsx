"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Hydration-safe entrance reveal.
 *
 * Content is visible in the server-rendered HTML. Only elements that are below
 * the fold when the component mounts are hidden, then revealed on intersection.
 * This avoids the common "invisible until hydration" failure mode and respects
 * `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92;

    if (alreadyInView) return;

    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.style.setProperty("--reveal-y", `${y}px`);
    element.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          element.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
