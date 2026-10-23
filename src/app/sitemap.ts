import type { MetadataRoute } from "next";

import { articles } from "@/content/articles";
import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteConfig.url, lastModified: now },
    { url: `${siteConfig.url}/sobre-nosotros/`, lastModified: now },
    { url: `${siteConfig.url}/contacto/`, lastModified: now },
    { url: `${siteConfig.url}/aviso-legal/`, lastModified: now },
    { url: `${siteConfig.url}/politica-de-privacidad/`, lastModified: now },
    { url: `${siteConfig.url}/politica-de-cookies/`, lastModified: now },
    { url: `${siteConfig.url}/buscar/`, lastModified: now },
    ...categories.map((category) => ({ url: `${siteConfig.url}/${category.slug}/`, lastModified: now })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/${article.categoria}/${article.slug}/`, lastModified: new Date(article.fechaActualizacion ?? article.fechaPublicacion) })),
  ];
}