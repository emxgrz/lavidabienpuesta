import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de La Vida Bien Puesta.",
};

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Política de cookies</h1>
          <p>Este sitio no activa un banner de cookies por defecto. Si en el futuro se añaden analítica o píxeles, esta política deberá actualizarse.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}