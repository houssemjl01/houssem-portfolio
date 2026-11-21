import { cn } from "@/lib/cn";

const templates = [
  {
    name: "Welcome email",
    category: "Onboarding",
    subject: "Bienvenue chez Vermeg",
  },
  {
    name: "Password reset",
    category: "Security",
    subject: "Réinitialisez votre mot de passe",
  },
  {
    name: "Invoice ready",
    category: "Billing",
    subject: "Votre facture est disponible",
  },
];

export function InterfaceSchematic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0b0d10] shadow-2xl shadow-black/30",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex h-5 w-40 items-center justify-center rounded-md border border-white/10 bg-black/20 font-mono text-[8px] text-white/60">
          templates.vermeg.local
        </div>
        <span className="w-6" />
      </div>

      <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[96px_1fr]">
        <aside className="border-r border-white/10 bg-white/[0.02] p-2">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#5b8cff]/20 font-mono text-[7px] text-[#8fb0ff]">
              V
            </span>
            <span className="font-mono text-[8px] text-white/65">Templates</span>
          </div>

          {["All templates", "Onboarding", "Notifications", "History"].map(
            (item, index) => (
              <div
                key={item}
                className={cn(
                  "mb-0.5 rounded px-1.5 py-1 text-[8px]",
                  index === 0
                    ? "bg-white/[0.07] text-white/80"
                    : "text-white/60",
                )}
              >
                {item}
              </div>
            ),
          )}

          <div className="mt-3 rounded border border-white/10 p-1.5">
            <div className="text-[7px] text-white/60">Categories</div>
            <div className="mt-1 space-y-0.5 text-[7px] text-white/65">
              <div>Welcome</div>
              <div>Security</div>
              <div>Billing</div>
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-[1fr_1.08fr]">
          <div className="border-r border-white/10 p-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[8px] font-medium text-white/80">
                All templates
              </span>
              <span className="rounded bg-[#5b8cff] px-1.5 py-0.5 text-[6px] font-medium text-[#08090b]">
                New
              </span>
            </div>

            <div className="mb-1.5 flex h-5 items-center rounded border border-white/10 bg-black/20 px-1.5 text-[7px] text-white/60">
              Search templates...
            </div>

            {templates.map((template, index) => (
              <div
                key={template.name}
                className={cn(
                  "mb-1 rounded border p-1.5",
                  index === 0
                    ? "border-[#5b8cff]/30 bg-[#5b8cff]/[0.06]"
                    : "border-white/[0.06]",
                )}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[7.5px] text-white/80">
                    {template.name}
                  </span>
                  <span className="rounded bg-white/[0.06] px-1 py-0.5 text-[5.5px] text-white/60">
                    {template.category}
                  </span>
                </div>
                <div className="mt-0.5 text-[6.5px] text-white/60">
                  {template.subject}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[8px] font-medium text-white/80">
                Preview
              </span>
              <span className="rounded border border-white/10 px-1.5 py-0.5 text-[6px] text-white/60">
                Send
              </span>
            </div>

            <div className="rounded border border-white/10 bg-white p-2 text-[#111315]">
              <div className="flex items-center gap-1">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2f5fe0] text-[6px] font-bold text-white">
                  V
                </div>
                <div>
                  <div className="text-[6.5px] font-semibold">Vermeg Team</div>
                  <div className="text-[5.5px] text-black/70">
                    no-reply@vermeg.com
                  </div>
                </div>
              </div>

              <div className="mt-2 border-t border-black/10 pt-1.5">
                <div className="text-[7px] font-semibold">
                  Welcome,{" "}
                  <span className="rounded bg-[#5b8cff]/15 px-0.5 text-[#2f5fe0]">
                    {"${prenom}"}
                  </span>
                </div>
                <div className="mt-1 text-[6px] leading-relaxed text-black/70">
                  Bonjour{" "}
                  <span className="rounded bg-[#5b8cff]/15 px-0.5 text-[#2f5fe0]">
                    {"${nom}"}
                  </span>
                  , votre compte est prêt. Vous pouvez maintenant gérer vos
                  modèles d&apos;e-mail.
                </div>
                <div className="mt-1.5 inline-block rounded bg-[#2f5fe0] px-1.5 py-0.5 text-[6px] font-medium text-white">
                  Open dashboard
                </div>
              </div>
            </div>

            <div className="mt-1.5 flex flex-wrap gap-1">
              {["${nom}", "${prenom}", "${date}"].map((variable) => (
                <span
                  key={variable}
                  className="rounded border border-white/10 bg-white/[0.03] px-1 py-0.5 font-mono text-[6px] text-[#8fb0ff]"
                >
                  {variable}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
