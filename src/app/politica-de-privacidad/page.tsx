import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de La Vida Bien Puesta conforme al RGPD y a la LOPDGDD: responsable, datos, finalidades, derechos y conservación.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-12">
        <article className="max-w-3xl space-y-5 leading-8 text-black/72">
          <h1 className="text-5xl font-semibold text-black">Política de privacidad</h1>
          <p className="text-sm text-black/55">Última actualización: 23 de octubre de 2026.</p>

          <p>
            Esta política explica qué datos personales trata La Vida Bien Puesta, con qué finalidad, durante
            cuánto tiempo y qué derechos puedes ejercer. Se ha redactado conforme al Reglamento (UE) 2016/679,
            General de Protección de Datos (RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">1. Responsable del tratamiento</h2>
          <p>
            <strong>Responsable:</strong> La Vida Bien Puesta.
            <br />
            <strong>Correo electrónico:</strong> hola@lavidabienpuesta.com
          </p>
          <p>
            Los datos identificativos completos del responsable (nombre o denominación social, NIF y domicilio)
            se facilitarán a cualquier interesado que los solicite por correo electrónico.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">2. Qué datos tratamos</h2>
          <p>
            El Sitio es una publicación editorial informativa. No requiere registro, no tiene área de usuario,
            no vende productos y no elabora perfiles comerciales.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Datos que nos facilitas por correo electrónico:</strong> tu dirección de correo, el nombre
              que indiques y el contenido del mensaje, cuando escribes para una consulta, una corrección o una
              propuesta.
            </li>
            <li>
              <strong>Datos técnicos necesarios:</strong> la dirección IP y los registros de acceso que el
              proveedor de alojamiento pueda generar para mantener el Sitio operativo y seguro.
            </li>
          </ul>
          <p>
            No utilizamos herramientas de analítica web, publicidad, píxeles de seguimiento ni cookies no
            esenciales. Tampoco recogemos datos de menores de edad de forma consciente.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">3. Finalidades y bases jurídicas</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Atender tus consultas y responder a tu mensaje:</strong> base jurídica del consentimiento
              y del interés legítimo en atender las comunicaciones recibidas (art. 6.1.a y 6.1.f RGPD).
            </li>
            <li>
              <strong>Mantener la seguridad y el funcionamiento del Sitio:</strong> interés legítimo en
              proteger la infraestructura y prevenir abusos (art. 6.1.f RGPD).
            </li>
            <li>
              <strong>Cumplir obligaciones legales aplicables:</strong> base jurídica del cumplimiento de una
              obligación legal (art. 6.1.c RGPD).
            </li>
          </ul>
          <p>
            No utilizamos tus datos para enviarte comunicaciones comerciales ni los cedemos a terceros con fines
            publicitarios.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">4. Plazos de conservación</h2>
          <p>
            Los datos de contacto se conservan durante el tiempo necesario para atender la consulta y, después,
            durante el plazo máximo de un año, salvo que exista una obligación legal de conservarlos más tiempo
            o que sea necesario para atender una reclamación.
          </p>
          <p>
            Los registros técnicos del proveedor de alojamiento se conservan durante el tiempo estrictamente
            necesario para garantizar la seguridad y, como máximo, el plazo que establezca dicho proveedor en su
            política de conservación.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">5. Destinatarios y encargados del tratamiento</h2>
          <p>
            Para prestar el servicio, el Sitio utiliza proveedores tecnológicos que actúan como encargados del
            tratamiento y solo acceden a los datos en la medida necesaria:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Proveedor de alojamiento y despliegue web:</strong> Vercel Inc., que aloja el Sitio y
              puede generar registros técnicos de acceso.
            </li>
            <li>
              <strong>Proveedor de correo electrónico:</strong> el servicio utilizado para recibir y responder
              los mensajes dirigidos a la dirección de contacto.
            </li>
          </ul>
          <p>
            No se ceden datos a otros terceros, salvo obligación legal o requerimiento de una autoridad
            competente.
          </p>
          <p>
            Cuando haces clic en un enlace de afiliado de Amazon, abandonas el Sitio y accedes a una web
            gestionada por Amazon, que actúa como responsable independiente del tratamiento. El Sitio no
            comparte tus datos personales con Amazon; la compra y el uso posterior de sus servicios se rigen
            por su propia política de privacidad.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">6. Transferencias internacionales</h2>
          <p>
            Algunos de los proveedores tecnológicos pueden estar ubicados en Estados Unidos o tratar datos fuera
            del Espacio Económico Europeo. En esos casos, las transferencias se amparan en las garantías
            adecuadas previstas en el RGPD, como las Cláusulas Contractuales Tipo aprobadas por la Comisión
            Europea o el Marco de Privacidad de Datos UE-EE. UU., cuando resulte aplicable.
          </p>
          <p>
            Puedes solicitar información adicional sobre estas garantías escribiendo a la dirección de contacto.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">7. Tus derechos</h2>
          <p>
            Puedes ejercer en cualquier momento los siguientes derechos:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Acceso:</strong> saber qué datos tratamos sobre ti.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar que eliminemos tus datos cuando ya no sean necesarios.</li>
            <li><strong>Limitación:</strong> pedir que conservemos los datos sin usarlos en determinados supuestos.</li>
            <li><strong>Oposición:</strong> oponerte a un tratamiento basado en interés legítimo.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
            <li><strong>Retirar el consentimiento:</strong> cuando el tratamiento se base en tu consentimiento.</li>
          </ul>
          <p>
            Para ejercerlos, escribe a <strong>hola@lavidabienpuesta.com</strong> indicando el derecho que
            deseas ejercer y adjuntando la información necesaria para identificar tu solicitud. Responderemos en
            el plazo máximo de un mes, ampliable otros dos meses si la solicitud es compleja.
          </p>
          <p>
            Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante
            la Agencia Española de Protección de Datos (www.aepd.es), autoridad de control competente en España.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">8. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a accesos no
            autorizados, pérdida o alteración. El Sitio se sirve mediante conexión cifrada HTTPS y limita el
            acceso a la información al personal o proveedores que lo necesitan para prestar el servicio.
          </p>
          <p>
            Ningún sistema es completamente infalible. Si se produjera una brecha de seguridad que afectara a
            tus derechos, lo comunicaríamos a las autoridades y, cuando corresponda, a las personas afectadas.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">9. Menores de edad</h2>
          <p>
            El Sitio no está dirigido a menores de 14 años y no recoge conscientemente datos de menores. Si
            detectas que un menor nos ha facilitado datos personales, escríbenos y los eliminaremos.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">10. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política para adaptarla a cambios normativos o de servicio. La versión
            vigente será siempre la publicada en esta página, con su fecha de última actualización. Si el cambio
            es relevante, lo indicaremos de forma destacada.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-black">11. Contacto</h2>
          <p>
            Para cualquier duda sobre el tratamiento de tus datos personales, escribe a{" "}
            <strong>hola@lavidabienpuesta.com</strong>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
