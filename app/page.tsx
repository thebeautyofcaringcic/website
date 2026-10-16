import type { Metadata } from "next";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import PartnersAndFunders from "@/components/PartnersAndFunders";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import Voices from "@/components/Voices";
import WhereWeGo from "@/components/WhereWeGo";
import { baseOpenGraph, siteConfig } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

// Every page sets its own canonical URL; new pages should do the same with their path.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...baseOpenGraph, url: "/" },
};

export default function Home() {
  return (
    <main id="top" className="page">
      <JsonLd
        data={webPageJsonLd({
          path: "/",
          title: `${siteConfig.name} — ${siteConfig.tagline}`,
          description: siteConfig.description,
          image: siteConfig.ogImage.url,
        })}
      />
      <Hero />
      <About />
      <Services />
      <WhereWeGo />
      <Voices />
      <Founder />
      <PartnersAndFunders />
      <SiteFooter />
    </main>
  );
}
