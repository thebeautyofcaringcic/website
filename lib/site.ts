/**
 * Single source of truth for site-wide details used by metadata, the sitemap,
 * robots.txt and the JSON-LD structured data.
 *
 * Which URL the site uses, and whether search engines may index it:
 * - NEXT_PUBLIC_SITE_URL, if set, always wins.
 * - Vercel production deployments use PRODUCTION_URL.
 * - Everything else (Vercel previews, local dev) uses localhost and is noindex.
 */
export const PRODUCTION_URL = "https://www.thebeautyofcaringcic.com";

// NEXT_PUBLIC_VERCEL_ENV is exposed to the browser by Vercel; VERCEL_ENV covers the server.
const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.VERCEL_ENV;

const configuredUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelEnv === "production" ? PRODUCTION_URL : "")
)
  .trim()
  .replace(/\/+$/, "");

export const siteUrl = configuredUrl || "http://localhost:3000";

/** True only when a real public domain has been configured. */
export const isIndexable = Boolean(configuredUrl) && !configuredUrl!.includes("localhost");

export const siteConfig = {
  name: "The Beauty of Caring CIC",
  shortName: "The Beauty of Caring",
  alternateNames: ["TBOC", "The Beauty of Caring"],
  tagline: "Beauty is for everyone",
  description:
    "Socio-aesthetics in Bristol: professional beauty and well-being care for people living through illness, isolation and exclusion, in hospitals, care homes, homeless centres, prisons and community settings.",
  email: "thebeautyofcaring@gmail.com",
  locality: "Bristol",
  region: "England",
  country: "GB",
  foundingDate: "2023",
  locale: "en_GB",
  language: "en-GB",
  founder: {
    name: "Natacha",
    jobTitle: "Founder and Socio-Aesthetician",
    image: "/images/natacha.jpg",
  },
  logo: "/images/logo.png",
  ogImage: { url: "/images/og-image.jpg", width: 1200, height: 630 },
  social: {
    linkedin: "https://www.linkedin.com/in/thebeautyofcaringcic/",
    instagram: "https://www.instagram.com/thebeautyofcaring_cic/",
    facebook: "https://www.facebook.com/Thebeautyofcaring_uk-107572908561606/",
  },
  services: [
    { name: "Therapeutic massage", description: "Relaxing touch to restore comfort." },
    { name: "Facial treatments", description: "Gentle care adapted to fragile skin." },
    { name: "Therapeutic makeup", description: "Helping people recognise themselves in the mirror." },
    { name: "Manicure", description: "Hand care for women and for men." },
    { name: "Hygiene and care tips", description: "Practical routines to carry on at home." },
  ],
  settings: [
    "Hospitals and clinics",
    "Care homes",
    "Disabled homes",
    "Homeless centres",
    "Prisons",
    "Charities",
    "Skills agencies",
  ],
  press: [
    {
      headline: "Bristol beautician offers workshops for vulnerable women",
      url: "https://www.bbc.co.uk/news/uk-england-bristol-67308673",
      publisher: "BBC News",
    },
  ],
} as const;

/**
 * Default Open Graph tags. Next.js replaces (rather than merges) openGraph when a
 * page sets it, so pages should spread this: openGraph: { ...baseOpenGraph, url: "/about" }.
 */
export const baseOpenGraph = {
  type: "website" as const,
  locale: siteConfig.locale,
  siteName: siteConfig.name,
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  images: [{ ...siteConfig.ogImage, alt: "Hands with freshly painted nails laid in a circle on a pink tablecloth" }],
};

/** Turns a site path into an absolute URL on the configured domain. */
export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
