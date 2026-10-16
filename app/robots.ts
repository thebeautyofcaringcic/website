import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/site";

/**
 * /robots.txt — blocks all crawlers until NEXT_PUBLIC_SITE_URL is set to the
 * live domain, so preview and staging deployments never end up in Google.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
