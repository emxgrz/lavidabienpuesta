import { z } from "zod";

export const articleFrontmatterSchema = z.object({
  titulo: z.string().min(1),
  slug: z.string().min(1),
  categoria: z.string().min(1),
  extracto: z.string().min(1),
  fechaPublicacion: z.string().min(1),
  fechaActualizacion: z.string().optional(),
  autor: z.string().min(1),
  imagenPrincipal: z.string().min(1),
  imagenPrincipalAlt: z.string().min(1),
  imagenPinterest: z.string().min(1),
  tituloPinterest: z.string().min(1),
  descripcionSeo: z.string().min(1),
  etiquetas: z.array(z.string()).min(1),
  destacado: z.boolean().optional(),
  borrador: z.boolean().optional(),
});