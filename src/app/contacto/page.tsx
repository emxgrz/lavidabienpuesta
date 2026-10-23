import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con La Vida Bien Puesta para consultas editoriales, correcciones, propuestas de colaboración o prensa.",
  alternates: { canonical: "/contacto/" },
  openGraph: {
    title: "Contacto | La Vida Bien Puesta",
    description:
      "Contacta con La Vida Bien Puesta para consultas editoriales, correcciones, propuestas de colaboración o prensa.",
    url: "/contacto/",
    type: "website",
    images: ["/images/og-default.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-2xl space-y-5">
          <h1 className="text-5xl font-semibold">Contacto</h1>
          <p className="leading-8 text-black/72">Escríbenos para consultas editoriales, propuestas de colaboración o correcciones sobre contenidos.</p>
          <p className="leading-8 text-black/72">
            Correo: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}