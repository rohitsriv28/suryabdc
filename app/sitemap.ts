import type { MetadataRoute } from "next";
import { SITE_METADATA, PAGE_METADATA } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(PAGE_METADATA).map((page) => ({
    url: `${SITE_METADATA.baseUrl}${page.canonical === "/" ? "" : page.canonical}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
