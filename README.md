# La Vida Bien Puesta

**Ideas bonitas para vivir mejor.**

Revista digital de hogar y estilo de vida: orden, decoración, ideas prácticas,
hallazgos y guías de compra. Contenido editorial en español (es-ES) con una
monetización discreta mediante el Programa de Afiliados de Amazon.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.3-087ea4?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

---

## Índice

- [Qué es este proyecto](#qué-es-este-proyecto)
- [Stack](#stack)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo publicar un artículo](#cómo-publicar-un-artículo)
- [Categorías](#categorías)
- [Rutas](#rutas)
- [SEO](#seo)
- [Afiliación de Amazon](#afiliación-de-amazon)
- [Búsqueda](#búsqueda)
- [Identidad visual](#identidad-visual)
- [Despliegue](#despliegue)
- [Pendientes conocidos](#pendientes-conocidos)
- [Licencia y aviso legal](#licencia-y-aviso-legal)

---

## Qué es este proyecto

Una revista digital estática y rápida, pensada para publicar contenido editorial
de calidad con una experiencia de lectura serena. La prioridad es siempre el
contenido: los productos solo aparecen cuando resuelven un problema real y
encajan de forma natural.

**Público:** personas que quieren vivir con más calma visual, mejores sistemas y
objetos que aporten algo.

**Tono:** cálido, sensato y con criterio. Sin urgencia ni ruido.

**Pilares de contenido:**

1. Orden y organización
2. Decoración
3. Ideas prácticas
4. Hallazgos
5. Guías de compra

---

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, RSC) |
| UI | [React 19](https://react.dev) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com) vía `@tailwindcss/turbopack` |
| Lenguaje | TypeScript 5 (`strict`) |
| Contenido | Datos tipados en `src/content/articles.ts` + MDX compilado con `next-mdx-remote` |
| Validación | [Zod 4](https://zod.dev) para el esquema del artículo |
| Búsqueda | [Fuse.js 7](https://www.fusejs.io) en cliente |
| Tipografías | `next/font`: **Fraunces** (serif) e **Inter** (sans) |

Notas de configuración en `next.config.ts`: `cacheComponents`, `partialPrefetching`
y la regla de Turbopack para procesar CSS con Tailwind.

---

## Requisitos

- **Node.js 20.9 o superior**
- **npm** (hay `package-lock.json`; evita mezclar gestores)
- Git

---

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de entorno local (opcional, ver más abajo)
#    Crea .env.local en la raíz con las variables indicadas

# 3. Arrancar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Las variables de entorno son opcionales para desarrollo: sin ellas la web
> funciona y los enlaces a Amazon se generan sin etiqueta de afiliado.

---

## Variables de entorno

Crea `.env.local` en la raíz:

```dotenv
# Etiqueta de afiliado de Amazon (ej. lavidabienpuesta-21)
NEXT_PUBLIC_AMAZON_AFFILIATE_ID=

# Dominio de la tienda
NEXT_PUBLIC_AMAZON_DOMAIN=amazon.es
```

| Variable | Obligatoria | Por defecto | Descripción |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_AMAZON_AFFILIATE_ID` | No | `""` | Tag de afiliado. Si está vacía, se enlaza a Amazon sin tag. |
| `NEXT_PUBLIC_AMAZON_DOMAIN` | No | `amazon.es` | Dominio de Amazon usado al construir los enlaces. |

Las variables se leen en `src/config/site.ts`.

---

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Ejecuta ESLint (`eslint-config-next`) |

---

## Estructura del proyecto

```text
.
├─ src/
│  ├─ app/                          # App Router
│  │  ├─ layout.tsx                 # Layout raíz, fuentes y metadatos globales
│  │  ├─ page.tsx                   # Portada
│  │  ├─ globals.css                # Tokens de color + Tailwind + utilidades
│  │  ├─ manifest.ts                # Manifest PWA
│  │  ├─ robots.ts                  # robots.txt
│  │  ├─ sitemap.ts                 # sitemap.xml
│  │  ├─ not-found.tsx              # 404
│  │  ├─ buscar/                    # Búsqueda instantánea (noindex)
│  │  ├─ sobre-nosotros/
│  │  ├─ contacto/
│  │  ├─ aviso-legal/
│  │  ├─ politica-de-privacidad/
│  │  ├─ politica-de-cookies/
│  │  ├─ divulgacion-de-afiliados/
│  │  ├─ [categoria]/page.tsx       # Listado de categoría
│  │  └─ [categoria]/[slug]/page.tsx # Artículo
│  ├─ components/                   # Componentes de UI reutilizables
│  │  ├─ site-header.tsx            # Cabecera y navegación
│  │  ├─ site-footer.tsx            # Pie con categorías y legales
│  │  ├─ article-card.tsx
│  │  ├─ category-card.tsx
│  │  ├─ product-card.tsx           # Tarjeta de producto con enlace afiliado
│  │  ├─ affiliate-link.tsx         # Enlace con rel="sponsored nofollow"
│  │  ├─ affiliate-notice.tsx       # Aviso dentro del artículo
│  │  ├─ affiliate-disclosure.tsx   # Divulgación completa
│  │  ├─ author-box.tsx
│  │  ├─ breadcrumbs.tsx
│  │  ├─ callout.tsx                # Bloque MDX <Callout type="info|warning">
│  │  ├─ toc.tsx                    # Índice generado desde los H2
│  │  ├─ related-articles.tsx
│  │  ├─ pinterest-save-button.tsx
│  │  └─ search-client.tsx          # Búsqueda Fuse.js (client component)
│  ├─ config/
│  │  ├─ site.ts                    # Nombre, slogan, URL, afiliación
│  │  ├─ categories.ts              # Definición y orden de categorías
│  │  └─ navigation.ts              # Navegación principal
│  ├─ content/
│  │  └─ articles.ts                # Artículos + helpers de consulta
│  └─ lib/
│     ├─ amazon.ts                  # Constructor de URLs de afiliado
│     └─ content.ts                 # Esquema Zod del frontmatter
├─ public/                          # Assets estáticos
│  ├─ logo-mark.png                 # Monograma LVP (cabecera y pie)
│  ├─ icon-192.png / icon-512.png   # Iconos PWA
│  └─ ...                           # Imágenes de artículos (pendientes)
├─ assets/
│  └─ brand/                        # PNG originales del logo y el favicon
├─ next.config.ts
├─ package.json
└─ AGENTS.md                        # Reglas para agentes (generado por Next)
```

Alias de importación: `@/*` → `./src/*`.

---

## Cómo publicar un artículo

Todo el contenido vive en `src/content/articles.ts` como un array tipado. No hay
CMS ni carpeta de Markdown: el cuerpo del artículo se escribe en MDX dentro del
campo `contenido`.

### 1. Añade un objeto al array `articles`

```ts
{
  titulo: "Cómo ordenar un baño pequeño sin obras",
  slug: "ordenar-bano-pequeno",
  categoria: "orden-y-organizacion", // debe existir en src/config/categories.ts
  extracto: "Cinco cambios sencillos para ganar espacio y mantener el orden.",
  fechaPublicacion: "2026-10-24",
  fechaActualizacion: "2026-10-24",   // opcional
  autor: "La Vida Bien Puesta",
  imagenPrincipal: "/images/article-bano.jpg",
  imagenPrincipalAlt: "Baño pequeño con cestas y estantes de madera",
  imagenPinterest: "/images/article-bano-pin.jpg",
  tituloPinterest: "5 ideas para ordenar un baño pequeño",
  descripcionSeo: "Guía práctica para ordenar un baño pequeño con soluciones realistas.",
  etiquetas: ["baño", "espacios pequeños"],
  destacado: false,                    // opcional
  borrador: false,                     // opcional
  contenido: `
## Empieza por lo que usas a diario

Texto del artículo…

## Añade una solución ligera

<Callout type="warning">Ojo con la humedad en cestas de fibra natural.</Callout>
`,
}
```

### 2. Sube las imágenes a `public/images/`

Las rutas de imagen son absolutas desde `public/`, por ejemplo
`public/images/article-bano.jpg` → `/images/article-bano.jpg`. Se necesitan
**dos** por artículo: la principal (horizontal) y la vertical de Pinterest.

### 3. Validación

Al renderizar el artículo, `articleFrontmatterSchema` (Zod, en
`src/lib/content.ts`) valida todos los campos y **lanza un error si falta alguno**.
Es la red de seguridad para no publicar metadatos incompletos.

### Convenciones de contenido

- El **primer `##`** de cada artículo alimenta el índice automático (`TableOfContents`).
- Usa `##` y `###`, nunca `#` (el H1 lo pone la plantilla).
- Los enlaces a productos deben ir por `ProductCard` o `buildAmazonAffiliateUrl()`,
  nunca a mano, para no perder el tag de afiliado ni el `rel` correcto.
- Si el artículo promociona productos, incluye el aviso de afiliación (ya se
  muestra automáticamente con `AffiliateNotice`).
- `borrador: true` está previsto en el esquema, pero **todavía no se filtra** en
  los listados (ver [Pendientes conocidos](#pendientes-conocidos)).

---

## Categorías

Se definen en `src/config/categories.ts` y alimentan la navegación, el pie, la
portada y el `sitemap`.

| Slug | Nombre | Orden |
| --- | --- | --- |
| `orden-y-organizacion` | Orden y organización | 1 |
| `decoracion` | Decoración | 2 |
| `ideas-practicas` | Ideas prácticas | 3 |
| `hallazgos` | Hallazgos | 4 |
| `guias-de-compra` | Guías de compra | 5 |

Para añadir una categoría: agrega el objeto con un `slug` único (se usa en la URL
y en `article.categoria`), una descripción editorial y otra SEO, y el orden.

---

## Rutas

| Ruta | Página | Indexable |
| --- | --- | --- |
| `/` | Portada | Sí |
| `/[categoria]/` | Listado de categoría | Sí |
| `/[categoria]/[slug]/` | Artículo | Sí |
| `/buscar/` | Buscador | No (`noindex`) |
| `/sobre-nosotros/` | Filosofía editorial | Sí |
| `/contacto/` | Contacto | Sí |
| `/aviso-legal/` | Aviso legal | Sí |
| `/politica-de-privacidad/` | Privacidad | Sí |
| `/politica-de-cookies/` | Cookies | Sí |
| `/divulgacion-de-afiliados/` | Divulgación | Sí |
| `/sitemap.xml` | Sitemap generado | — |
| `/robots.txt` | Robots generado | — |
| `/manifest.webmanifest` | Manifest PWA | — |

Los parámetros de categoría y artículo se generan en build con
`generateStaticParams()`.

---

## SEO

- Metadatos globales en `src/app/layout.tsx` (título con plantilla `%s | La Vida Bien Puesta`, Open Graph y Twitter Card).
- `generateMetadata()` por categoría y por artículo, con `canonical` y Open Graph propios.
- `sitemap.ts` incluye estáticas, categorías y artículos (usando `fechaActualizacion` si existe).
- `robots.ts` permite todo salvo `/buscar/`.
- HTML semántico: un solo `h1` por página, `article`, `header`, `nav`, `aside`.

---

## Afiliación de Amazon

- `src/lib/amazon.ts` → `buildAmazonAffiliateUrl(asin)` construye
  `https://{dominio}/dp/{asin}?tag={id}`. Si no hay ID, devuelve la URL limpia.
- `AffiliateLink` añade `target="_blank"` y `rel="sponsored nofollow noopener"`.
- Avisos legales: `AffiliateNotice` (dentro del artículo) y `AffiliateDisclosure`
  (barra lateral y página de divulgación).
- El texto de divulgación requerido por Amazon aparece también en el pie.

Pendiente de configurar en producción: `NEXT_PUBLIC_AMAZON_AFFILIATE_ID`.

---

## Búsqueda

`src/components/search-client.tsx` es un client component que indexa en memoria
los artículos con Fuse.js:

- Campos indexados: `titulo`, `extracto`, `categoria`
- Umbral de coincidencia: `0.35`
- Sin resultados → mensaje vacío
- La página es `noindex` y está excluida en `robots.txt`

Al crecer el catálogo (cientos de artículos) conviene mover el índice a build
time o a un servicio externo.

---

## Identidad visual

### Color

Tokens definidos en `src/app/globals.css`:

| Token | HEX | Uso |
| --- | --- | --- |
| `--color-fondo` | `#FAF6EE` | Fondo principal (crema) |
| `--color-superficie` | `#EFE6D6` | Tarjetas y bloques (arena) |
| `--color-primario` | `#7D8F78` | Botones y `theme-color` (salvia) |
| `--color-primario-oscuro` | `#5E6E5A` | Hover, enlaces (salvia profunda) |
| `--color-texto` | `#2F2D2A` | Texto principal (carbón cálido) |
| `--color-acento` | `#B9694B` | Detalles (terracota) |

Proporción de uso recomendada: 60 % crema/arena, 25 % salvia, 10 % carbón, 5 % terracota.
Para texto pequeño usa `--color-primario-oscuro` o `--color-texto`; la salvia clara
y el terracota no alcanzan contraste AA sobre el fondo.

### Tipografía

- **Fraunces** → titulares y `h1`–`h4` (clase `font-serif`), vía `--font-serif`.
- **Inter** → cuerpo y UI, vía `--font-sans`.

### Logotipo

- `public/logo-mark.png` — monograma **LVP** con transparencia, usado en la cabecera y el pie.
- `src/app/favicon.ico` — favicon con 16, 32 y 48 px.
- `src/app/icon.png` y `src/app/apple-icon.png` — iconos de app (convención de archivos de Next: se inyectan solos en el `<head>`).
- `public/icon-192.png` y `public/icon-512.png` — iconos PWA con fondo crema (el de 512 sirve como `maskable`).
- `assets/brand/` — PNG originales de 1254×1254 para reexportar si hace falta.

El archivo de logo es **solo el monograma**. En la cabecera se compone con el nombre en
Fraunces y el slogan en Inter; no hay wordmark horizontal independiente.

### Layout

`container-page` limita el ancho a `1120px` con márgenes laterales de `1rem`.
Los textos largos usan `prose-editorial` para ritmo y espaciado.

---

## Despliegue

Recomendado: **Vercel** (soporte nativo de Next.js 16).

1. Importa el repositorio en Vercel.
2. Framework detectado automáticamente: Next.js.
3. Configura las variables de entorno (`NEXT_PUBLIC_AMAZON_AFFILIATE_ID`,
   `NEXT_PUBLIC_AMAZON_DOMAIN`) en *Settings → Environment Variables*.
4. Despliega. `sitemap.xml`, `robots.txt` y `manifest.webmanifest` se generan solos.

`siteConfig.url` (`src/config/site.ts`) debe coincidir con el dominio final
(`https://lavidabienpuesta.com`) para que canonical, Open Graph y sitemap sean
correctos.

También funciona en cualquier hosting Node o como export estático si se ajusta
la configuración.

---

## Pendientes conocidos

- [ ] **Imágenes de artículos**: las rutas `/images/...` referenciadas en
      `articles.ts` y `categories.ts` aún no existen en `public/`. Hay que subir
      los archivos o las páginas mostrarán imágenes rotas.
- [ ] **Borradores**: implementar el filtrado de `borrador: true` en portada,
      categorías, búsqueda y sitemap.
- [ ] **Contacto**: la página muestra el correo; valorar formulario con validación.
- [ ] **Imágenes OG**: añadir `openGraph.images` por artículo y una imagen social
      por defecto (1200×630).
- [ ] **Analítica**: sin integración de métricas todavía.
- [ ] **Tests**: no hay suite de pruebas configurada.

---

## Licencia y aviso legal

Proyecto privado. Todos los derechos reservados.

Como afiliado de Amazon, este sitio obtiene ingresos por las compras adscritas
que cumplen los requisitos aplicables. Los enlaces de afiliado se identifican y
nunca condicionan la selección editorial.

Contacto: **hola@lavidabienpuesta.com**

---

## Nota sobre agentes de IA

`AGENTS.md` contiene las reglas para asistentes que trabajen en este repositorio.
Incluye un bloque que `next dev` escribe automáticamente; no lo elimines, porque
se regenerará y ensuciará el diff. Consulta la documentación incluida en
`node_modules/next/dist/docs/` antes de programar: esta versión de Next.js puede
diferir de la documentación de referencia habitual.

---

Hecho con calma, como todo lo demás.
