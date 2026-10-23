import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles, getCategoryBySlug } from "@/content/articles";
import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ categoria: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    return {};
  }

  return {
    title: category.nombre,
    description: category.descripcionSeo,
    keywords: [category.nombre, "hogar", "revista", "La Vida Bien Puesta"],
    alternates: { canonical: `/${category.slug}/` },
    openGraph: {
      title: `${category.nombre} | ${siteConfig.name}`,
      description: category.descripcionSeo,
      url: `/${category.slug}/`,
      type: "website",
      locale: "es_ES",
      siteName: siteConfig.name,
      images: [
        {
          url: category.imagen,
          width: 1400,
          height: 1050,
          alt: category.imagenAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.nombre} | ${siteConfig.name}`,
      description: category.descripcionSeo,
      images: [category.imagen],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter((article) => article.categoria === categoria);
  const relatedCategories = categories.filter((item) => item.slug !== categoria).slice(0, 3);
  const categoryUrl = absoluteUrl(`/${category.slug}/`);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.nombre,
    description: category.descripcionSeo,
    url: categoryUrl,
    inLanguage: "es-ES",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.titulo,
        url: absoluteUrl(`/${article.categoria}/${article.slug}/`),
      })),
    },
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
        item: categoryUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader />
      <main className="container-page py-12">
        <header className="max-w-3xl border-b border-black/10 pb-10">
          <p className="text-sm uppercase tracking-[0.18em] text-black/50">Categoría</p>
          <h1 className="mt-4 text-5xl font-semibold">{category.nombre}</h1>
          <p className="mt-4 text-lg leading-8 text-black/72">{category.descripcionSeo}</p>
        </header>

        <section className="py-10">
          <div className="grid gap-5 lg:grid-cols-2">
            {categoryArticles.length > 0 ? categoryArticles.map((article) => <ArticleCard key={article.slug} article={article} />) : <p>No hay artículos todavía.</p>}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">Categorías relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {relatedCategories.map((related) => (
              <Link key={related.slug} href={`/${related.slug}/`} className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5">
                {related.nombre}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}