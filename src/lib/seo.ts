import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const defaultOgImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Salón en tonos neutros de La Vida Bien Puesta",
};
