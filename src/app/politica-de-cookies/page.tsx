import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de La Vida Bien Puesta: qué cookies se utilizan, base legal y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Política de cookies</h1>
          <p className="text-sm text-black/55">Última actualización: 23 de octubre de 2026.</p>

          <h2 className="pt-4 text-2xl font-semibold text-black">1. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar una página web.
            También existen tecnologías similares, como el almacenamiento local o los píxeles, que pueden
            cumplir funciones parecidas. Esta política se refiere a todas ellas.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">2. Cookies que utiliza este sitio</h2>
          <p>
            <strong>Actualmente el Sitio no utiliza cookies propias de análisis, publicidad, personalización ni
            seguimiento.</strong> Tampoco incorpora herramientas de analítica web ni píxeles de redes sociales.
          </p>
          <p>
            Únicamente pueden generarse cookies o registros técnicos estrictamente necesarios para el
            funcionamiento y la seguridad del Sitio, como los que utiliza el proveedor de alojamiento para
            servir las páginas y proteger la infraestructura. Estas cookies no permiten identificar
            personalmente al usuario ni se usan con fines comerciales.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">3. Servicios de terceros</h2>
          <p>
            El Sitio no carga servicios de terceros que instalen cookies de forma automática. Si en el futuro se
            incorporan vídeos incrustados, mapas o boletines, esta política se actualizará antes de su activación
            y, cuando sea necesario, se solicitará el consentimiento correspondiente.
          </p>
          <p>
            Los enlaces a páginas externas (por ejemplo, tiendas o medios) solo se abren cuando el usuario hace
            clic. A partir de ese momento, se aplican las políticas de cookies y privacidad del sitio de
            destino.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">4. Base legal</h2>
          <p>
            Las cookies técnicas necesarias para la prestación del servicio están exentas del consentimiento
            previo conforme al artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y
            de Comercio Electrónico (LSSI). Cualquier cookie no esencial requeriría consentimiento previo,
            informado y granular, y no se activaría sin él.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">5. Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para bloquear, eliminar o recibir avisos sobre las cookies. Ten en
            cuenta que bloquear las cookies técnicas puede afectar al funcionamiento normal de algunos sitios.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
            <li><strong>Firefox:</strong> Ajustes → Privacidad y seguridad → Cookies y datos del sitio.</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.</li>
            <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos almacenados.</li>
          </ul>
          <p>
            También puedes borrar las cookies almacenadas en tu dispositivo desde la configuración de tu
            navegador en cualquier momento.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">6. Cambios en esta política</h2>
          <p>
            Si se incorporan nuevas cookies o servicios, actualizaremos esta página y, cuando sea preceptivo,
            habilitaremos un mecanismo de consentimiento antes de su activación. La fecha de última actualización
            figura al inicio del documento.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">7. Contacto</h2>
          <p>
            Para cualquier duda sobre esta política, escribe a{" "}
            <strong>hola@lavidabienpuesta.com</strong>. Puedes consultar también la{" "}
            <Link className="underline decoration-black/30 underline-offset-4" href="/politica-de-privacidad/">
              política de privacidad
            </Link>
            .
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
