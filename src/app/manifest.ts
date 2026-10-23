import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "La Vida Bien Puesta",
    description: siteConfig.descriptionShort,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ee",
    theme_color: "#7d8f78",
    lang: "es-ES",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}