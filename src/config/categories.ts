export type CategoryConfig = {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionSeo: string;
  imagen: string;
  orden: number;
};

export const categories: CategoryConfig[] = [
  {
    slug: "orden-y-organizacion",
    nombre: "Orden y organización",
    descripcion: "Sistemas simples para ganar claridad y espacio en casa.",
    descripcionSeo:
      "Ideas, rutinas y soluciones para ordenar armarios, cajones, despensas y espacios pequeños.",
    imagen: "/images/category-orden.jpg",
    orden: 1,
  },
  {
    slug: "decoracion",
    nombre: "Decoración",
    descripcion: "Ambientes cálidos, actuales y con más calma visual.",
    descripcionSeo:
      "Inspiración de decoración para crear casas acogedoras, funcionales y con criterio editorial.",
    imagen: "/images/category-decoracion.jpg",
    orden: 2,
  },
  {
    slug: "ideas-practicas",
    nombre: "Ideas prácticas",
    descripcion: "Soluciones útiles para el día a día del hogar.",
    descripcionSeo:
      "Guías prácticas, trucos y recomendaciones para resolver problemas cotidianos con buen gusto.",
    imagen: "/images/category-ideas.jpg",
    orden: 3,
  },
  {
    slug: "hallazgos",
    nombre: "Hallazgos",
    descripcion: "Productos bonitos y útiles que encajan de forma natural.",
    descripcionSeo:
      "Selecciones editoriales de productos útiles, bonitos y con una buena relación calidad-precio.",
    imagen: "/images/category-hallazgos.jpg",
    orden: 4,
  },
  {
    slug: "guias-de-compra",
    nombre: "Guías de compra",
    descripcion: "Comparativas serenas para elegir mejor sin ruido.",
    descripcionSeo:
      "Guías de compra pensadas para decidir con calma sobre productos del hogar y organización.",
    imagen: "/images/category-guias.jpg",
    orden: 5,
  },
];