import Image from "next/image";
import Link from "next/link";

import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-[color:var(--color-superficie)]/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/logo-mark.png" alt="" width={353} height={256} sizes="48px" className="h-12 w-auto" />
          <p className="mt-3 font-serif text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-black/70">{siteConfig.descriptionShort}</p>
          <p className="mt-4 text-sm text-black/70">Como afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em]">Categorías</p>
          <ul className="mt-4 space-y-2 text-sm text-black/75">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/${category.slug}/`}>{category.nombre}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em]">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-black/75">
            <li><Link href="/sobre-nosotros/">Sobre nosotros</Link></li>
            <li><Link href="/contacto/">Contacto</Link></li>
            <li><Link href="/aviso-legal/">Aviso legal</Link></li>
            <li><Link href="/politica-de-privacidad/">Política de privacidad</Link></li>
            <li><Link href="/politica-de-cookies/">Política de cookies</Link></li>
            <li><Link href="/divulgacion-de-afiliados/">Divulgación de afiliados</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}