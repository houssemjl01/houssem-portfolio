"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Lightweight pointer-reactive depth for glass surfaces.
 *
 * Transform data is written as CSS variables from a throttled pointer handler,
 * so React never re-renders on movement. The effect is skipped for touch input
 * and reduced-motion preferences.
 */
export function Tilt({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      if (frame) window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        element.dataset.tilting = "true";
        element.style.setProperty("--tilt-rx", `${(0.5 - y) * max}deg`);
        element.style.setProperty("--tilt-ry", `${(x - 0.5) * max}deg`);
        element.style.setProperty("--glass-mx", `${x * 100}%`);
        element.style.setProperty("--glass-my", `${y * 100}%`);
        frame = 0;
      });
    };

    const onPointerLeave = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      element.dataset.tilting = "false";
      element.style.setProperty("--tilt-rx", "0deg");
      element.style.setProperty("--tilt-ry", "0deg");
      element.style.setProperty("--glass-mx", "50%");
      element.style.setProperty("--glass-my", "0%");
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", onPointerLeave);
    element.addEventListener("pointercancel", onPointerLeave);

    return () => {
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", onPointerLeave);
      element.removeEventListener("pointercancel", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [max]);

  return (
    <div ref={ref} data-tilting="false" className={cn("tilt", className)}>
      {children}
    </div>
  );
}
