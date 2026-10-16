import { absoluteUrl, siteConfig } from "./site";

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  founder: absoluteUrl("/#founder"),
};

/** Site-wide graph: the charity, its founder and the website. Rendered in the root layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": ids.organization,
        name: siteConfig.name,
        legalName: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        slogan: siteConfig.tagline,
        description: siteConfig.description,
        url: absoluteUrl("/"),
        email: siteConfig.email,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
          width: 268,
          height: 266,
        },
        image: absoluteUrl(siteConfig.ogImage.url),
        foundingDate: siteConfig.foundingDate,
        foundingLocation: { "@type": "Place", name: `${siteConfig.locality}, ${siteConfig.region}` },
        founder: { "@id": ids.founder },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.locality,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
        areaServed: { "@type": "City", name: siteConfig.locality },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Partnerships, funding and volunteering enquiries",
          email: siteConfig.email,
          availableLanguage: ["English", "French"],
        },
        knowsAbout: [
          "Socio-aesthetics",
          "Social beauty therapy",
          "Therapeutic massage",
          "Therapeutic makeup",
          "Beauty care for vulnerable people",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Socio-aesthetic treatments",
          itemListElement: siteConfig.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              serviceType: "Socio-aesthetics",
              areaServed: { "@type": "City", name: siteConfig.locality },
              provider: { "@id": ids.organization },
            },
          })),
        },
        subjectOf: siteConfig.press.map((article) => ({
          "@type": "NewsArticle",
          headline: article.headline,
          url: article.url,
          publisher: { "@type": "Organization", name: article.publisher },
        })),
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "Person",
        "@id": ids.founder,
        name: siteConfig.founder.name,
        jobTitle: siteConfig.founder.jobTitle,
        image: absoluteUrl(siteConfig.founder.image),
        worksFor: { "@id": ids.organization },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Université Pierre et Marie Curie (Paris VI)" },
        knowsLanguage: ["English", "French"],
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: absoluteUrl("/"),
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": ids.organization },
      },
    ],
  };
}

/** Per-page WebPage node. Use one on every page, with that page's own path, title and description. */
export function webPageJsonLd({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) } } : {}),
  };
}
