import { categories } from "@/config/categories";

export const primaryNavigation = [
  { label: "Inicio", href: "/" },
  ...categories.map((category) => ({ label: category.nombre, href: `/${category.slug}/` })),
  { label: "Sobre nosotros", href: "/sobre-nosotros/" },
  { label: "Contacto", href: "/contacto/" },
] as const;