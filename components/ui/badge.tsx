import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  tone = "neutral",
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]",
        tone === "accent"
          ? "border-accent/30 bg-accent-soft text-accent"
          : "border-line bg-surface/60 text-secondary",
        className,
      )}
    >
      {tone === "accent" && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
          )}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
