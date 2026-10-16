import { siteConfig } from "@/config/site";

export function buildAmazonAffiliateUrl(asin: string) {
  if (!siteConfig.amazonAffiliateId) {
    return `https://${siteConfig.amazonDomain}/dp/${asin}`;
  }

  const url = new URL(`https://${siteConfig.amazonDomain}/dp/${asin}`);
  url.searchParams.set("tag", siteConfig.amazonAffiliateId);
  return url.toString();
}