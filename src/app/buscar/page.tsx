import type { Metadata } from "next";

import { SearchClient } from "@/components/search-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Búsqueda instantánea por título, extracto y categoría.",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <section className="max-w-2xl space-y-5">
          <h1 className="text-5xl font-semibold">Buscar</h1>
          <p className="leading-8 text-black/72">Encuentra artículos por título, extracto y categoría.</p>
          <SearchClient />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}