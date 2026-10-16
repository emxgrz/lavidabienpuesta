export function TableOfContents({ headings }: { headings: Array<{ id: string; label: string }> }) {
  return (
    <aside className="rounded-2xl border border-black/10 bg-[color:var(--color-superficie)] p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/55">Índice</p>
      <ul className="mt-3 space-y-2 text-sm leading-7">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="hover:text-[var(--color-primario-oscuro)]">{heading.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}