import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de La Vida Bien Puesta: titularidad, condiciones de uso, propiedad intelectual, responsabilidad y enlaces de afiliado.",
};

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Aviso legal</h1>
          <p className="text-sm text-black/55">Última actualización: 23 de octubre de 2026.</p>

          <h2 className="pt-4 text-2xl font-semibold text-black">1. Datos identificativos del titular</h2>
          <p>
            El sitio web <strong>lavidabienpuesta.com</strong> (en adelante, «el Sitio») es una publicación
            editorial digital titularidad de <strong>La Vida Bien Puesta</strong>.
          </p>
          <p>
            Correo electrónico de contacto: <strong>hola@lavidabienpuesta.com</strong>.
          </p>
          <p>
            Los datos identificativos completos del titular (nombre o denominación social, NIF y domicilio a
            efectos de notificaciones) se facilitarán a cualquier interesado que los solicite por correo
            electrónico.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">2. Objeto</h2>
          <p>
            El Sitio tiene una finalidad informativa y editorial: publicar contenidos sobre hogar, orden,
            decoración, ideas prácticas y guías de compra. El acceso es gratuito y no requiere registro.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">3. Condiciones de uso</h2>
          <p>
            El acceso al Sitio atribuye la condición de usuario e implica la aceptación de este aviso legal.
            El usuario se compromete a utilizar el Sitio de forma diligente, conforme a la ley, la moral y el
            orden público, y a no realizar actuaciones que puedan dañar el Sitio, impedir su normal
            funcionamiento o vulnerar derechos de terceros.
          </p>
          <p>
            Queda prohibida la utilización de los contenidos para fines ilícitos, así como la introducción de
            virus, la realización de ataques informáticos o cualquier uso que pueda comprometer la seguridad
            del Sitio o de sus usuarios.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">4. Propiedad intelectual e industrial</h2>
          <p>
            Los textos, el diseño, la estructura, el logotipo y los elementos gráficos propios del Sitio están
            protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción,
            distribución, comunicación pública o transformación sin autorización expresa del titular, salvo en
            los supuestos de cita o reseña permitidos por la ley.
          </p>
          <p>
            Las fotografías de archivo proceden de bancos de imágenes con licencia de uso y se identifican en
            la carpeta de créditos del proyecto. Los derechos de las obras citadas pertenecen a sus
            respectivos autores.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">5. Contenidos y responsabilidad</h2>
          <p>
            La información publicada tiene carácter orientativo y no constituye asesoramiento profesional,
            jurídico, médico, financiero o de otro tipo. El titular procura que los contenidos sean exactos y
            estén actualizados, pero no garantiza la ausencia de errores ni la vigencia permanente de la
            información.
          </p>
          <p>
            El titular no se responsabiliza de los daños o perjuicios derivados del uso que el usuario haga de
            los contenidos, ni del contenido de páginas externas enlazadas. Los enlaces a terceros se ofrecen
            únicamente como referencia.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">6. Enlaces de afiliado</h2>
          <p>
            Algunos artículos del Sitio incluyen enlaces de afiliado del Programa de Afiliados de Amazon. Si
            compras a través de ellos, podemos recibir una comisión sin que el precio cambie para ti.
          </p>
          <p>
            Los artículos que contienen estos enlaces muestran un aviso de afiliación visible antes del
            contenido. La selección, el análisis y la valoración de los productos son editoriales e
            independientes; la posible comisión no condiciona la recomendación.
          </p>
          <p>
            Los precios, la disponibilidad y las condiciones de compra se muestran en Amazon y pueden cambiar
            en cualquier momento. La información publicada es orientativa: consulta siempre la ficha del
            vendedor antes de comprar.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">7. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se rige por la{" "}
            <Link className="underline decoration-black/30 underline-offset-4" href="/politica-de-privacidad/">
              política de privacidad
            </Link>
            , elaborada conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">8. Cookies</h2>
          <p>
            El uso de cookies y tecnologías similares se describe en la{" "}
            <Link className="underline decoration-black/30 underline-offset-4" href="/politica-de-cookies/">
              política de cookies
            </Link>
            . El Sitio no utiliza cookies de análisis, publicidad o seguimiento.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">9. Legislación aplicable y resolución de conflictos</h2>
          <p>
            Este aviso legal se rige por la legislación española y, en lo que corresponda, por la normativa de
            la Unión Europea. Para la resolución de cualquier controversia, las partes se someten a los
            juzgados y tribunales que resulten competentes conforme a la ley.
          </p>
          <p>
            Si el usuario actúa como consumidor, puede acudir a las autoridades de consumo competentes y a la
            plataforma europea de resolución de litigios en línea. Para cuestiones relacionadas con datos
            personales, puede presentar una reclamación ante la Agencia Española de Protección de Datos
            (www.aepd.es).
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">10. Contacto</h2>
          <p>
            Para cualquier duda sobre este aviso legal, puede escribir a{" "}
            <strong>hola@lavidabienpuesta.com</strong>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
