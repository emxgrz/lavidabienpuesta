"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const asunto = String(data.get("asunto") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();
    const privacidad = data.get("privacidad");

    if (!nombre || !email || !mensaje) {
      setError("Completa el nombre, el correo y el mensaje.");
      setSent(false);
      return;
    }

    if (!privacidad) {
      setError("Acepta la política de privacidad para enviar el mensaje.");
      setSent(false);
      return;
    }

    const subject = encodeURIComponent(`Contacto web: ${asunto || "Consulta"}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${email}\n\n${mensaje}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setError(null);
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-black/10 bg-white/50 p-6 sm:p-8">
      {sent ? (
        <p
          role="status"
          className="rounded-xl border border-[var(--color-primario)]/30 bg-[color:var(--color-superficie)] px-4 py-3 text-sm leading-7 text-black/75"
        >
          Se ha abierto tu aplicación de correo con el mensaje preparado. Revisa el contenido y pulsa enviar para
          que llegue a {contactEmail}.
        </p>
      ) : null}

      {error ? (
        <p role="alert" className="rounded-xl border border-[var(--color-acento)]/40 bg-[#fbeee8] px-4 py-3 text-sm leading-7 text-black/75">
          {error}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-black/80">
          Nombre
          <input
            name="nombre"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-black/15 bg-white/80 px-4 py-3 text-base font-normal text-black outline-none transition focus:border-[var(--color-primario)] focus:ring-2 focus:ring-[var(--color-primario)]/20"
          />
        </label>

        <label className="block text-sm font-medium text-black/80">
          Correo electrónico
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-black/15 bg-white/80 px-4 py-3 text-base font-normal text-black outline-none transition focus:border-[var(--color-primario)] focus:ring-2 focus:ring-[var(--color-primario)]/20"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-black/80">
        Asunto
        <select
          name="asunto"
          className="mt-2 w-full rounded-xl border border-black/15 bg-white/80 px-4 py-3 text-base font-normal text-black outline-none transition focus:border-[var(--color-primario)] focus:ring-2 focus:ring-[var(--color-primario)]/20"
        >
          <option value="Consulta general">Consulta general</option>
          <option value="Corrección de contenido">Corrección de contenido</option>
          <option value="Propuesta de colaboración">Propuesta de colaboración</option>
          <option value="Prensa">Prensa</option>
          <option value="Otro">Otro</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-black/80">
        Mensaje
        <textarea
          name="mensaje"
          rows={6}
          required
          className="mt-2 w-full resize-y rounded-xl border border-black/15 bg-white/80 px-4 py-3 text-base font-normal text-black outline-none transition focus:border-[var(--color-primario)] focus:ring-2 focus:ring-[var(--color-primario)]/20"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-7 text-black/70">
        <input name="privacidad" type="checkbox" required className="mt-1.5 h-4 w-4 rounded border-black/20" />
        <span>
          He leído y acepto la{" "}
          <Link href="/politica-de-privacidad/" className="underline decoration-black/30 underline-offset-4">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-primario)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-primario-oscuro)]"
        >
          Enviar mensaje
        </button>
        <p className="text-sm leading-6 text-black/55">
          Se abrirá tu aplicación de correo. También puedes escribir a{" "}
          <a href={`mailto:${contactEmail}`} className="underline decoration-black/30 underline-offset-4">
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
