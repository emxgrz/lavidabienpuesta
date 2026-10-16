import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de La Vida Bien Puesta.",
};

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Aviso legal</h1>
          <p>Este texto debe revisarse antes de publicar el proyecto en producción para ajustarlo a la normativa vigente aplicable en España y la Unión Europea.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}