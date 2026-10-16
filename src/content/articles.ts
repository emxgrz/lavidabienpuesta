import { categories } from "@/config/categories";

export type Article = {
  titulo: string;
  slug: string;
  categoria: string;
  extracto: string;
  fechaPublicacion: string;
  fechaActualizacion?: string;
  autor: string;
  imagenPrincipal: string;
  imagenPrincipalAlt: string;
  imagenPinterest: string;
  tituloPinterest: string;
  descripcionSeo: string;
  etiquetas: string[];
  destacado?: boolean;
  borrador?: boolean;
  contenido: string;
};

export const articles: Article[] = [
  {
    titulo: "Cómo organizar un armario pequeño sin obras",
    slug: "organizar-armario-pequeno",
    categoria: "orden-y-organizacion",
    extracto: "Ocho ideas para ganar espacio real sin convertir el armario en un proyecto infinito.",
    fechaPublicacion: "2026-10-16",
    fechaActualizacion: "2026-10-20",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-armario.jpg",
    imagenPrincipalAlt: "Armario organizado con cestas de lino",
    imagenPinterest: "/images/article-armario-pin.jpg",
    tituloPinterest: "8 ideas para organizar un armario pequeño",
    descripcionSeo:
      "Guía práctica para organizar un armario pequeño con criterios editoriales y soluciones realistas.",
    etiquetas: ["armarios", "espacios pequeños"],
    destacado: true,
    contenido: `
## Empieza por vaciar y medir

Antes de comprar nada, saca todo y mide los huecos útiles. La clave no es meter más cosas, sino decidir qué se queda a la vista y qué se guarda fuera de temporada.

## Divide por uso, no por categoría ideal

Agrupa por frecuencia de uso: diario, semanal y ocasional. Ese criterio reduce el desorden de forma inmediata.

## Añade una solución visualmente ligera

Una buena cesta de lino o una caja baja puede resolver el 80 % del problema sin añadir ruido visual.

## Qué productos sí encajan

Para este tipo de armario, una selección útil puede incluir separadores, cajas apilables y perchas uniformes. Cada pieza debe resolver un problema concreto, no decorar por decorar.
`,
  },
  {
    titulo: "5 ideas para una despensa más ordenada y fácil de mantener",
    slug: "despensa-ordenada-facil",
    categoria: "ideas-practicas",
    extracto: "Pequeños cambios para ver de un vistazo lo que tienes y evitar duplicados.",
    fechaPublicacion: "2026-10-12",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-despensa.jpg",
    imagenPrincipalAlt: "Despensa con tarros de cristal y cestas",
    imagenPinterest: "/images/article-despensa-pin.jpg",
    tituloPinterest: "5 ideas para una despensa más ordenada",
    descripcionSeo:
      "Consejos editoriales para ordenar la despensa con sistemas simples, visuales y fáciles de mantener.",
    etiquetas: ["despensa", "cocina"],
    contenido: `
## Usa recipientes coherentes

Cuando todos los botes hablan el mismo lenguaje visual, la despensa parece más tranquila y es más fácil comprobar existencias.

## Reserva un frente para lo que caduca antes

Lo más útil es colocar delante lo que debe gastarse primero.

## Apuesta por etiquetas legibles

No hace falta etiquetar todo. Basta con hacer visibles las categorías que se confunden entre sí.
`,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}