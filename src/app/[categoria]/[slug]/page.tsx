import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { AffiliateNotice } from "@/components/affiliate-notice";
import { ArticleCard } from "@/components/article-card";
import { AuthorBox } from "@/components/author-box";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Callout } from "@/components/callout";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { RelatedArticles } from "@/components/related-articles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles, getArticleBySlug, getCategoryBySlug } from "@/content/articles";
import { articleFrontmatterSchema } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ categoria: string; slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ categoria: article.categoria, slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { categoria, slug } = await params;
  const article = getArticleBySlug(slug);
  const category = getCategoryBySlug(categoria);

  if (!article || !category) {
    return {};
  }

  const articleUrl = `/${article.categoria}/${article.slug}/`;
  const ogImage = {
    url: article.imagenPrincipal,
    width: 1600,
    height: 900,
    alt: article.imagenPrincipalAlt,
  };

  return {
    title: article.titulo,
    description: article.descripcionSeo,
    keywords: article.etiquetas,
    alternates: { canonical: articleUrl },
    robots: article.borrador ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: article.titulo,
      description: article.descripcionSeo,
      url: articleUrl,
      siteName: siteConfig.name,
      locale: "es_ES",
      publishedTime: article.fechaPublicacion,
      modifiedTime: article.fechaActualizacion ?? article.fechaPublicacion,
      authors: [article.autor],
      section: category.nombre,
      tags: article.etiquetas,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.titulo,
      description: article.descripcionSeo,
      images: [article.imagenPrincipal],
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

  const articleUrl = absoluteUrl(`/${article.categoria}/${article.slug}/`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titulo,
    description: article.descripcionSeo,
    image: [absoluteUrl(article.imagenPrincipal)],
    datePublished: article.fechaPublicacion,
    dateModified: article.fechaActualizacion ?? article.fechaPublicacion,
    author: {
      "@type": "Organization",
      name: article.autor,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon-512.png"),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: category.nombre,
    keywords: article.etiquetas.join(", "),
    inLanguage: "es-ES",
    isAccessibleForFree: true,
    wordCount: article.contenido.trim().split(/\s+/).length,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.nombre,
        item: absoluteUrl(`/${category.slug}/`),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.titulo,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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