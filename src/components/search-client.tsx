"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";

import { articles } from "@/content/articles";

export function SearchClient() {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(articles, {
        keys: ["titulo", "extracto", "categoria"],
        threshold: 0.35,
      }),
    [],
  );

  const results = query.trim() ? fuse.search(query).map((result) => result.item) : articles;

  return (
    <div className="space-y-4">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar por título, extracto o categoría"
        className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-black/40 focus:border-[var(--color-primario)]"
      />
      <div className="space-y-3">
        {results.length > 0 ? results.map((article) => (
          <Link key={article.slug} href={`/${article.categoria}/${article.slug}/`} className="block rounded-2xl border border-black/10 bg-white/50 p-4 transition hover:bg-white">
            <p className="text-xs uppercase tracking-[0.18em] text-black/50">{article.categoria}</p>
            <h2 className="mt-2 text-lg font-semibold">{article.titulo}</h2>
            <p className="mt-2 text-sm leading-7 text-black/70">{article.extracto}</p>
          </Link>
        )) : <p className="text-sm text-black/60">No hay resultados para esta búsqueda.</p>}
      </div>
    </div>
  );
}