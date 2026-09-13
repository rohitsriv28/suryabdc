import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_METADATA.baseUrl}/sitemap.xml`,
  };
}
