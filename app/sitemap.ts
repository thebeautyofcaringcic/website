import type { MetadataRoute } from "next";
import { getStaticRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * /sitemap.xml — built automatically from every page in the app directory.
 * New static pages (app/about/page.tsx, app/services/page.tsx …) are picked up
 * with no changes here. For dynamic pages such as blog posts, append their
 * entries to the returned array, e.g. by loading posts from your CMS.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return getStaticRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
