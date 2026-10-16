import Link from "next/link";

export function AffiliateLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="sponsored nofollow noopener" className="inline-flex items-center rounded-full bg-[var(--color-primario)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-primario-oscuro)]">
      {children}
    </Link>
  );
}