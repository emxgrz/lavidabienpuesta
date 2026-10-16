import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-16">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-5xl font-semibold">Página no encontrada</h1>
          <p className="leading-8 text-black/72">La ruta solicitada no existe o se ha movido.</p>
          <Link href="/" className="inline-flex rounded-full bg-[var(--color-primario)] px-5 py-2.5 text-white">Volver al inicio</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}