import type { Metadata } from "next";

import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Divulgación de afiliados",
  description: "Cómo funcionan los enlaces de afiliado en La Vida Bien Puesta.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-semibold">Divulgación de afiliados</h1>
          <AffiliateDisclosure />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}