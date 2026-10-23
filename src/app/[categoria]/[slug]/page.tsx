import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { AffiliateNotice } from "@/components/affiliate-notice";
import { ArticleCard } from "@/components/article-card";
import { AuthorBox } from "@/components/author-box";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Callout } from "@/components/callout";
import { ProductCard } from "@/components/product-card";
import { RelatedArticles } from "@/components/related-articles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TableOfContents } from "@/components/toc";
import { articles, getArticleBySlug, getCategoryBySlug } from "@/content/articles";
import { articleFrontmatterSchema } from "@/lib/content";
import { siteConfig } from "@/config/site";

type ArticlePageProps = {
  params: Promise<{ categoria: string; slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ categoria: article.categoria, slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.titulo,
    description: article.descripcionSeo,
    alternates: { canonical: `/${article.categoria}/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.titulo,
      description: article.descripcionSeo,
      url: `/${article.categoria}/${article.slug}/`,
      siteName: siteConfig.name,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { categoria, slug } = await params;
  const article = getArticleBySlug(slug);
  const category = getCategoryBySlug(categoria);

  if (!article || !category || article.categoria !== category.slug) {
    notFound();
  }

  const relatedArticles = articles.filter((item) => item.slug !== article.slug && item.categoria === article.categoria).slice(0, 2);
  articleFrontmatterSchema.parse({
    titulo: article.titulo,
    slug: article.slug,
    categoria: article.categoria,
    extracto: article.extracto,
    fechaPublicacion: article.fechaPublicacion,
    fechaActualizacion: article.fechaActualizacion,
    autor: article.autor,
    imagenPrincipal: article.imagenPrincipal,
    imagenPrincipalAlt: article.imagenPrincipalAlt,
    imagenPinterest: article.imagenPinterest,
    tituloPinterest: article.tituloPinterest,
    descripcionSeo: article.descripcionSeo,
    etiquetas: article.etiquetas,
    destacado: article.destacado,
    borrador: article.borrador,
    afiliado: article.afiliado,
  });

  const { content } = await compileMDX({
    source: article.contenido,
    options: {
      parseFrontmatter: false,
    },
    components: {
      Callout,
      ProductCard,
    },
  });

  const headings = article.contenido
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => ({ id: line.replace(/^##\s+/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-"), label: line.replace(/^##\s+/, "") }));

  return (
    <>
      <SiteHeader />
      <main className="container-page py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="space-y-8">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: category.nombre, href: `/${category.slug}/` }, { label: article.titulo }]} />
            <header>
              <p className="text-sm uppercase tracking-[0.18em] text-black/50">{category.nombre}</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">{article.titulo}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-black/72">{article.extracto}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-black/60">
                <span>Por {article.autor}</span>
                <span>Publicado el {article.fechaPublicacion}</span>
                {article.fechaActualizacion ? <span>Actualizado el {article.fechaActualizacion}</span> : null}
              </div>
            </header>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--color-superficie)]">
              <div className="relative aspect-[16/9] bg-[linear-gradient(135deg,rgba(125,143,120,0.2),rgba(239,230,214,0.8))]">
                <Image src={article.imagenPrincipal} alt={article.imagenPrincipalAlt} fill className="object-cover" />
              </div>
            </div>

            {article.afiliado ? <AffiliateNotice /> : null}

            <section className="prose-editorial max-w-none text-[1.02rem] leading-8">
              {content}
            </section>

            {headings.length > 0 ? <TableOfContents headings={headings} /> : null}

            <AuthorBox />

            <RelatedArticles articles={relatedArticles} />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-black/10 bg-white/50 p-5 text-sm leading-7">
              <h2 className="text-xl font-semibold">Lecturas de la categoría</h2>
              <div className="mt-4 space-y-4">
                {articles.filter((item) => item.categoria === article.categoria).map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}