import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: PAGE_METADATA.projects.title,
  description: PAGE_METADATA.projects.description,
  alternates: {
    canonical: PAGE_METADATA.projects.canonical,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
