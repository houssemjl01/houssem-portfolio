"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={copied ? "Email address copied" : "Copy email address"}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 text-[11px] text-secondary transition-colors duration-300 hover:border-line-strong hover:text-foreground",
        className,
      )}
    >
      {copied ? (
        <Check className="h-3 w-3 text-success" strokeWidth={2} />
      ) : (
        <Copy className="h-3 w-3" strokeWidth={1.7} />
      )}
      {copied ? "Copied" : "Copy"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
