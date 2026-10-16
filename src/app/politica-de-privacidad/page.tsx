import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de La Vida Bien Puesta.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Política de privacidad</h1>
          <p>Texto base pendiente de adaptación jurídica antes del lanzamiento.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}