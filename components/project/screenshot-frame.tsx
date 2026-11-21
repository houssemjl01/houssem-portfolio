import Image from "next/image";

import type { ProjectScreenshot } from "@/types/content";
import { cn } from "@/lib/cn";

export function ScreenshotFrame({
  screenshot,
  priority = false,
  className,
}: {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-xl",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-elevated/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="mx-auto font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          Email Templates Platform
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </div>
  );
}

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  if (screenshots.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((screenshot, index) => (
        <ScreenshotFrame
          key={screenshot.src}
          screenshot={screenshot}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
