export const siteConfig = {
  name: "La Vida Bien Puesta",
  slogan: "Ideas bonitas para vivir mejor.",
  descriptionShort:
    "Inspiración, organización y buenos hallazgos para hacerte la vida más fácil.",
  locale: "es-ES",
  url: "https://lavidabienpuesta.com",
  amazonAffiliateId:
    process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_ID ??
    process.env.AMAZON_AFFILIATE_ID ??
    "lavidabienpue-21",
  amazonDomain: process.env.NEXT_PUBLIC_AMAZON_DOMAIN ?? "amazon.es",
} as const;