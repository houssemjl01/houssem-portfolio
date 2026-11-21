"use client";

import { ChevronDown, CircleCheck, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClasses =
  "w-full rounded-lg border border-line bg-background/50 px-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

const labelClasses =
  "text-[11px] font-medium uppercase tracking-[0.14em] text-muted";

const errorClasses = "mt-1.5 text-[11px] text-red-400 light:text-red-600";

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "draft">("idle");

  function clearError(field: keyof FieldErrors) {
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "PFE opportunity");
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};

    if (name.length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (message.length < 10) {
      nextErrors.message = "Please write at least 10 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstField = Object.keys(nextErrors)[0];
      const field = event.currentTarget.elements.namedItem(firstField);

      if (field instanceof HTMLElement) {
        field.focus();
      }

      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const subjectLine = `${subject} — ${name}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subjectLine,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("draft");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface/40 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={cn(inputClasses, "mt-2 h-11")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => clearError("name")}
          />
          {errors.name && (
            <p id="name-error" className={errorClasses}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={cn(inputClasses, "mt-2 h-11")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={() => clearError("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className={labelClasses}>
          Subject
        </label>
        <div className="relative mt-2">
          <select
            id="subject"
            name="subject"
            defaultValue="PFE opportunity"
            className={cn(inputClasses, "h-11 appearance-none pr-9")}
          >
            <option>PFE opportunity</option>
            <option>Freelance or collaboration</option>
            <option>Technical question</option>
            <option>Something else</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={1200}
          placeholder="Tell me about the opportunity, the team, or the problem you're working on."
          className={cn(
            inputClasses,
            "mt-2 h-auto min-h-32 resize-y py-3",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          onChange={() => clearError("message")}
        />
        {errors.message ? (
          <p id="message-error" className={errorClasses}>
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-[11px] text-muted">
            Keep it concise — a few sentences are enough.
          </p>
        )}
      </div>

      {status === "draft" && (
        <div
          role="status"
          className="mt-5 flex gap-3 rounded-xl border border-success/25 bg-success/10 p-4"
        >
          <CircleCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-success"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <p className="text-[13px] leading-relaxed text-secondary">
            Your email draft should be open in your mail app. If nothing
            happened, copy the address from the contact card and send it
            manually.
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[16rem] text-[11px] leading-relaxed text-muted">
          This form opens a pre-filled email. No data is sent to a server.
        </p>
        <Button type="submit" size="md" className="shrink-0">
          <Send className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          Open email draft
        </Button>
      </div>
    </form>
  );
}
