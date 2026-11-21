"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { ProjectScreenshot } from "@/types/content";
import { cn } from "@/lib/cn";

export function ScreenshotFrame({
  screenshot,
  priority = false,
  className,
  index,
  onOpen,
}: {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  className?: string;
  index?: number;
  onOpen?: () => void;
}) {
  const frame = (
    <div
      className={cn(
        "glass glass-interactive group relative overflow-hidden rounded-xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-elevated/70 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="mx-auto truncate font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          {screenshot.label ?? "Platform interface"}
        </span>
        {typeof index === "number" && (
          <span className="font-mono text-[9px] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="relative aspect-[2.08/1] bg-[#0b0d10]">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          priority={priority}
          className="screenshot-image object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.015]"
          sizes="(min-width: 1280px) 60vw, (min-width: 640px) 45vw, 100vw"
        />
      </div>

      {onOpen && (
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.14em] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          Enlarge {screenshot.label ?? "platform"}
        </span>
      )}
    </div>
  );

  if (!onOpen) return frame;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="block w-full rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {frame}
    </button>
  );
}

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setActive(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const go = useCallback(
    (direction: number) => {
      setActive((current) =>
        current === null
          ? null
          : (current + direction + screenshots.length) % screenshots.length,
      );
    },
    [screenshots.length],
  );

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, go]);

  function open(index: number) {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setActive(index);
  }

  if (screenshots.length === 0) return null;

  const current = active === null ? null : screenshots[active];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot.src}
            className={cn(
              screenshots.length > 1 && index === 0 && "sm:col-span-2",
            )}
          >
            <ScreenshotFrame
              screenshot={screenshot}
              priority={index === 0}
              index={index}
              onOpen={() => open(index)}
            />
            <figcaption className="mt-2.5 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>{screenshot.label ?? "Platform interface"}</span>
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(screenshots.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050608]/90 p-4 backdrop-blur-xl"
          onClick={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${current.label ?? "Platform"} screenshot viewer`}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-6xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <div>
                <p className="eyebrow text-white/60">
                  Screenshot {String((active ?? 0) + 1).padStart(2, "0")} of{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {current.label ?? "Platform interface"}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close screenshot viewer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-accent/50 hover:text-accent"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="glass mt-4 overflow-hidden rounded-2xl">
              <div className="relative aspect-[2.08/1] bg-[#0b0d10]">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs text-white/80 transition-colors hover:border-accent/50 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs text-white/80 transition-colors hover:border-accent/50 hover:text-white"
              >
                Next
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
