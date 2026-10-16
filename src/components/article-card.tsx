import Link from "next/link";

import type { Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white/50">
      <div className="aspect-[16/10] bg-[linear-gradient(160deg,rgba(125,143,120,0.18),rgba(185,105,75,0.1))]" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">{article.categoria}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug">
          <Link href={`/${article.categoria}/${article.slug}/`}>{article.titulo}</Link>
        </h3>
        <p className="mt-2 text-sm leading-7 text-black/70">{article.extracto}</p>
      </div>
    </article>
  );
}