import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { CategoryCard } from "@/components/category-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles } from "@/content/articles";
import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const featuredArticle = articles.find((article) => article.destacado) ?? articles[0];

  return (
    <>
      <SiteHeader />
      <main className="container-page py-10 md:py-16">
        <section className="grid gap-10 border-b border-black/10 pb-14 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-primario-oscuro)]">Revista digital de hogar y estilo de vida</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.02] text-balance md:text-7xl">{siteConfig.slogan}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/72">{siteConfig.descriptionShort}</p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-[color:var(--color-superficie)] p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-black/55">Destacado</p>
            <h2 className="mt-3 text-2xl font-semibold">{featuredArticle.titulo}</h2>
            <p className="mt-3 text-sm leading-7 text-black/72">{featuredArticle.extracto}</p>
            <Link href={`/${featuredArticle.categoria}/${featuredArticle.slug}/`} className="mt-6 inline-flex rounded-full bg-[var(--color-primario)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-primario-oscuro)]">
              Leer artículo
            </Link>
          </div>
        </section>

        <section className="py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-black/50">Categorías</p>
            <h2 className="mt-2 text-3xl font-semibold">Temas de la revista</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.sort((left, right) => left.orden - right.orden).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-black/50">Artículos recientes</p>
              <h2 className="mt-2 text-3xl font-semibold">Lecturas útiles y bonitas</h2>
            </div>
            <Link href="/buscar/" className="text-sm text-[var(--color-primario-oscuro)]">Buscar contenido</Link>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="rounded-3xl border border-black/10 bg-[color:var(--color-superficie)] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-black/55">Buenos hallazgos</p>
            <h2 className="mt-3 text-3xl font-semibold">Recomendaciones editoriales</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/72">Selección cuidada de productos útiles y bonitos, siempre después del contenido editorial y solo cuando aportan una solución clara.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/hallazgos/" className="rounded-full bg-[var(--color-primario)] px-5 py-2.5 text-white">Ver hallazgos</Link>
              <Link href="/aviso-legal/" className="rounded-full border border-black/10 px-5 py-2.5">Información legal</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
