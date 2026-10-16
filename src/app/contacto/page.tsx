import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto editorial de La Vida Bien Puesta.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-2xl space-y-5">
          <h1 className="text-5xl font-semibold">Contacto</h1>
          <p className="leading-8 text-black/72">Escríbenos para consultas editoriales, propuestas de colaboración o correcciones sobre contenidos.</p>
          <p className="leading-8 text-black/72">Correo: hola@lavidabienpuesta.com</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}