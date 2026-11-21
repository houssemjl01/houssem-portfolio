"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const isLight = root.getAttribute("data-theme") === "light";
    const nextTheme = isLight ? "dark" : "light";

    root.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Storage can be unavailable in private or restricted contexts.
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", nextTheme === "light" ? "#FAFAF8" : "#08090B");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={cn(
        "glass-soft inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-accent",
        className,
      )}
    >
      <Sun className="h-4 w-4 light:hidden" strokeWidth={1.7} aria-hidden="true" />
      <Moon
        className="hidden h-4 w-4 light:block"
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </button>
  );
}
