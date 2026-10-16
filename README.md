# The Beauty of Caring CIC — website

Next.js 16 (App Router, TypeScript) site for The Beauty of Caring CIC, a socio-aesthetics social enterprise in Bristol.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Going live: the one setting to change

All SEO output depends on one environment variable:

```
NEXT_PUBLIC_SITE_URL=https://www.your-domain.org.uk
```

Set it in the hosting provider's environment variables (and in `.env.local` locally if needed; see `.env.example`). No trailing slash.

| | Without it (previews, staging) | With it (live) |
|---|---|---|
| `robots.txt` | blocks all crawlers | allows all, points to the sitemap |
| `<meta name="robots">` | `noindex, nofollow` | `index, follow` |
| Canonical, Open Graph and JSON-LD URLs | `http://localhost:3000` | the live domain |

This means a preview deployment can never be indexed by accident.

## Launch checklist

1. Buy the domain and point it at the host.
2. Set `NEXT_PUBLIC_SITE_URL` in the host's **production** environment only, then redeploy.
3. Check `https://<domain>/robots.txt` and `https://<domain>/sitemap.xml`.
4. Check the structured data with the [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/).
5. Add the domain to [Google Search Console](https://search.google.com/search-console). Use the DNS method, or paste the HTML-tag code into `verification` in `app/layout.tsx`.
6. Submit `https://<domain>/sitemap.xml` in Search Console (and Bing Webmaster Tools, which can import from Search Console).
7. Create or claim the Google Business Profile, and use the same name, email and website URL as `lib/site.ts`.

## SEO and structured data

| File | What it does |
|---|---|
| `lib/site.ts` | **Single source of truth**: name, description, email, socials, services, press. Edit details here and they update everywhere. |
| `app/sitemap.ts` + `lib/routes.ts` | `/sitemap.xml`, generated automatically from every `page.tsx` in `app/`. |
| `app/robots.ts` | `/robots.txt`, switches automatically on `NEXT_PUBLIC_SITE_URL`. |
| `app/layout.tsx` | Site-wide metadata (title template, description, Open Graph, Twitter) and the site JSON-LD. |
| `lib/structured-data.ts` | JSON-LD: the charity (`NGO`), founder (`Person`), `WebSite`, services and BBC press coverage; plus `webPageJsonLd()` for each page. |
| `app/manifest.ts`, `app/icon.png`, `app/apple-icon.png` | Web app manifest and icons. |
| `public/images/og-image.jpg` | 1200×630 social sharing image. |

### Adding a new page

1. Create `app/<name>/page.tsx`. It appears in the sitemap automatically on the next build.
2. Give it its own metadata, spreading the shared Open Graph defaults:

```tsx
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { baseOpenGraph } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About", // becomes "About | The Beauty of Caring CIC"
  description: "…",
  alternates: { canonical: "/about" },
  openGraph: { ...baseOpenGraph, title: "About", url: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={webPageJsonLd({ path: "/about", title: "About", description: "…" })} />
      {/* … */}
    </main>
  );
}
```

Dynamic pages such as blog posts (`app/blog/[slug]/page.tsx`) are skipped by the scanner. Append their URLs in `app/sitemap.ts` where noted.

## WebMCP (AI agent tools)

The site exposes a few typed tools to AI agents in browsers that support [WebMCP](https://github.com/webmachinelearning/webmcp) (Chrome and Edge via origin trial, ChatGPT desktop's "Site tools", Gemini in Chrome). Agents can answer questions about the charity and help a visitor get in touch without scraping the page. It is progressive enhancement: in other browsers nothing changes.

| Tool | Type | What it does |
|---|---|---|
| `get_charity_overview` | read | Mission, location, founder, contact email |
| `list_services` | read | Treatments, settings, format and how pricing works |
| `get_press_coverage` | read | BBC News, BBC Radio Bristol and Pride of Britain links |
| `show_page_section` | read | Scrolls the page to a section for the visitor |
| `start_email_enquiry` | write | Opens a drafted email to the charity; the visitor reviews and sends it |

Code: `components/WebMcpTools.tsx` (tools, mounted in `app/layout.tsx`) and `types/webmcp.d.ts`. Content comes from `lib/site.ts`, so tool answers stay in step with the page.

### Switching it on for visitors (after the domain is live)

1. Register the live domain for the origin trials (one token per browser):
   - Chrome: https://developer.chrome.com/origintrials/#/register_trial/4163014905550602241
   - Edge: https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/trials/0b76fe60-b266-458e-a285-04e375c0c31a
2. Set `CHROME_ORIGIN_TRIAL_TOKEN` and `EDGE_ORIGIN_TRIAL_TOKEN` in the host's production environment and redeploy. `next.config.ts` sends them as an `Origin-Trial` header; with no tokens, no header is sent.
3. Put each token's expiry date in a calendar. An expired token makes the tools silently disappear.

### Testing locally

Enable the WebMCP flag in `chrome://flags`, restart Chrome, open the site, and use the Model Context Tool Inspector extension or the DevTools WebMCP panel to list and call the tools. The API needs a secure context: `localhost` and `https://` both work.

## Project structure

- `app/page.tsx`: the homepage; lists the sections in order.
- `components/`: one file per homepage section (`Hero`, `About`, `Services`, `WhereWeGo`, `Voices`, `Founder`, `PartnersAndFunders`, `SiteFooter`), plus `RadioPlayer`, `VideoModal` and `JsonLd`.
- `app/globals.css`: brand colours and the few shared styles (ring animation, hero disc, radio seek bar, video modal).
- `public/images/`: photos and partner and funder logos.
- `public/media/`: the BBC Radio Bristol interview (MP3) and the Carol Vorderman *Hometown Heroes* film (MP4).

Brand: Josefin Sans (headings, matching the logo lettering) and DM Sans (body). Colours: pink `#FBD5E1`, hot pink `#EC4B8A`, aubergine `#3A1B3A`, teal `#2A7B93`.

## Still to do

- Pages beyond the homepage (About, Services, Portfolio, Media, Contact). The nav links currently jump to homepage sections.
- Confirm photo consent for identifiable participants before launch.
- Styles are inline on each element (converted directly from the approved design). Worth moving to CSS modules as the site grows.
- Images are served as plain files; switching to `next/image` would add automatic resizing.
