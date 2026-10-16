import Link from "next/link";

import type { Article } from "@/content/articles";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Artículos relacionados</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug} className="rounded-xl border border-black/10 bg-white/50 p-4">
            <Link href={`/${article.categoria}/${article.slug}/`} className="font-medium">
              {article.titulo}
            </Link>
            <p className="mt-2 text-sm leading-7 text-black/70">{article.extracto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}