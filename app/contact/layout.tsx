import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  alternates: {
    canonical: PAGE_METADATA.contact.canonical,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
