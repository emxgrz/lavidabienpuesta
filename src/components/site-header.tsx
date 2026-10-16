import Link from "next/link";

import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-[color:var(--color-fondo)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-fondo)]/75">
      <div className="container-page flex flex-wrap items-center gap-4 py-5">
        <Link href="/" className="mr-auto leading-none tracking-[0.18em] uppercase">
          <span className="block text-[0.72rem] font-medium">{siteConfig.name}</span>
          <span className="text-[0.58rem] text-black/60">{siteConfig.slogan}</span>
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {primaryNavigation.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-primario-oscuro)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/buscar/" className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-[var(--color-primario)] hover:text-[var(--color-primario-oscuro)]">
          Buscar
        </Link>
      </div>
    </header>
  );
}