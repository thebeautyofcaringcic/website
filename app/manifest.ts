import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBD5E1",
    theme_color: "#3A1B3A",
    icons: [{ src: "/icon.png", sizes: "268x266", type: "image/png" }],
  };
}
