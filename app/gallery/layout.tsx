import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: PAGE_METADATA.gallery.title,
  description: PAGE_METADATA.gallery.description,
  alternates: {
    canonical: PAGE_METADATA.gallery.canonical,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
