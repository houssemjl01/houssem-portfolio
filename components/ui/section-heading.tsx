import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("border-t border-line pt-8", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
          {index}
        </span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.035em] sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
          {title}
        </h2>
        {description && (
          <p className="max-w-md text-sm leading-relaxed text-secondary md:text-right">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
