import Image from "next/image";
import Link from "next/link";

import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-[color:var(--color-fondo)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-fondo)]/75">
      <div className="container-page flex flex-wrap items-center gap-4 py-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — ${siteConfig.slogan}`}
          className="mr-auto flex items-center gap-3"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={353}
            height={256}
            priority
            sizes="(max-width: 768px) 40px, 44px"
            className="h-10 w-auto md:h-11"
          />
          <span className="leading-none">
            <span className="block font-serif text-[0.95rem] font-semibold uppercase tracking-[0.12em]">
              {siteConfig.name}
            </span>
            <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.18em] text-black/60">
              {siteConfig.slogan}
            </span>
          </span>
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
