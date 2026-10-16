import Link from "next/link";

import type { CategoryConfig } from "@/config/categories";

export function CategoryCard({ category }: { category: CategoryConfig }) {
  return (
    <Link href={`/${category.slug}/`} className="group overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--color-superficie)] transition hover:-translate-y-0.5">
      <div className="aspect-[4/3] bg-[linear-gradient(160deg,rgba(125,143,120,0.28),rgba(239,230,214,0.95))]" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-black/55">Categoría</p>
        <h3 className="mt-2 text-xl font-semibold">{category.nombre}</h3>
        <p className="mt-2 text-sm leading-7 text-black/70">{category.descripcion}</p>
      </div>
    </Link>
  );
}