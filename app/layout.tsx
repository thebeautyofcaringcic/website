import type { Metadata, Viewport } from "next";
import { DM_Sans, Josefin_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import WebMcpTools from "@/components/WebMcpTools";
import { baseOpenGraph, isIndexable, siteConfig, siteUrl } from "@/lib/site";
import { siteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "socio-aesthetics",
    "social beauty therapist",
    "Bristol charity",
    "community interest company",
    "beauty care for vulnerable people",
    "therapeutic massage",
    "therapeutic makeup",
    "care homes",
    "homeless outreach",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: isIndexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },
  // Paste the Google Search Console HTML-tag code here once the domain is verified
  // verification: { google: "..." },
};

export const viewport: Viewport = {
  themeColor: "#3A1B3A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html> before React loads
    <html lang="en-GB" className={`${josefin.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={siteJsonLd()} />
        {children}
        <WebMcpTools />
      </body>
    </html>
  );
}
