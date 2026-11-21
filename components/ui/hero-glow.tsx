"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const element = ref.current;
    const parent = element?.parentElement;

    if (!element || !parent) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        parent.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        parent.style.setProperty("--my", `${event.clientY - rect.top}px`);
        frame = 0;
      });
    };

    parent.addEventListener("pointermove", onPointerMove);

    return () => {
      parent.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      style={{
        background:
          "radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), var(--accent-soft), transparent 66%), radial-gradient(900px ellipse at 82% 8%, var(--orb-two), transparent 72%)",
      }}
    />
  );
}
