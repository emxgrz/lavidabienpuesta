import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: `La filosofía editorial de ${siteConfig.name} y cómo se eligen los productos.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-semibold">Sobre nosotros</h1>
          <p className="text-lg leading-8 text-black/72">{siteConfig.name} nace como una revista digital para quienes quieren vivir con más calma visual, mejores sistemas y objetos que realmente aporten algo.</p>
          <p className="leading-8 text-black/72">Elegimos productos por utilidad, calidad, diseño, relación calidad-precio y reseñas contrastadas. La prioridad es siempre editorial: primero el problema o la idea, después el producto si encaja de forma natural. Cuando una pieza no aporta, no se publica.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}