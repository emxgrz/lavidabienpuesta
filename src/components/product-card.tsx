import Image from "next/image";

import { AffiliateLink } from "@/components/affiliate-link";
import { buildAmazonAffiliateUrl } from "@/lib/amazon";

type ProductCardProps = {
  nombre: string;
  descripcionEditorial: string;
  motivo: string;
  imagen: string;
  alt: string;
  asin: string;
  etiqueta?: string;
};

export function ProductCard({ nombre, descripcionEditorial, motivo, imagen, alt, asin, etiqueta }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--color-superficie)]">
      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        <div className="relative aspect-square md:aspect-auto">
          <Image src={imagen} alt={alt} fill className="object-cover" />
        </div>
        <div className="p-5 md:p-6">
          {etiqueta ? <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-acento)]">{etiqueta}</p> : null}
          <h3 className="mt-2 text-xl font-semibold">{nombre}</h3>
          <p className="mt-3 text-sm leading-7 text-black/75">{descripcionEditorial}</p>
          <p className="mt-3 text-sm leading-7 text-black/65"><strong className="font-semibold text-black">Por qué lo recomendamos:</strong> {motivo}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <AffiliateLink href={buildAmazonAffiliateUrl(asin)}>Ver en Amazon</AffiliateLink>
            <span className="text-xs uppercase tracking-[0.16em] text-black/45">Enlace de afiliado</span>
          </div>
        </div>
      </div>
    </article>
  );
}