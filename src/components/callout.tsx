export function Callout({ type = "info", children }: { type?: "info" | "warning"; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl border p-5 text-sm leading-7 ${type === "warning" ? "border-[var(--color-acento)]/30 bg-[color:var(--color-acento)]/10" : "border-black/10 bg-white/50"}`}>
      {children}
    </div>
  );
}