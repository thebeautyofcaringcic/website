import { readdirSync, statSync } from "node:fs";
import path from "node:path";

export type SiteRoute = {
  /** URL path, e.g. "/" or "/about" */
  path: string;
  /** Last time the page file changed */
  lastModified: Date;
};

const APP_DIR = path.join(process.cwd(), "app");
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/**
 * Finds every static page in the app directory, so new pages appear in the
 * sitemap automatically. Skips dynamic segments ([slug]), parallel routes
 * (@slot), private folders (_folder) and API routes; route groups ((group))
 * don't appear in the URL. Add dynamic pages (e.g. blog posts) in app/sitemap.ts.
 *
 * Runs at build time only (the sitemap is prerendered), so the turbopackIgnore
 * hints stop the source files being bundled into the deployed server code.
 */
export function getStaticRoutes(dir = APP_DIR, segments: string[] = []): SiteRoute[] {
  const routes: SiteRoute[] = [];

  for (const entry of readdirSync(/*turbopackIgnore: true*/ dir, { withFileTypes: true })) {
    const fullPath = path.join(/*turbopackIgnore: true*/ dir, entry.name);

    if (entry.isFile() && PAGE_FILE.test(entry.name)) {
      const urlSegments = segments.filter((s) => !(s.startsWith("(") && s.endsWith(")")));
      routes.push({
        path: `/${urlSegments.join("/")}`,
        lastModified: statSync(/*turbopackIgnore: true*/ fullPath).mtime,
      });
      continue;
    }

    if (!entry.isDirectory()) continue;
    const name = entry.name;
    const skip =
      name.startsWith("[") || name.startsWith("@") || name.startsWith("_") || name === "api" || name.startsWith(".");
    if (skip) continue;

    routes.push(...getStaticRoutes(fullPath, [...segments, name]));
  }

  return routes.sort((a, b) => a.path.localeCompare(b.path));
}
