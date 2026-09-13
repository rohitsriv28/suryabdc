import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: PAGE_METADATA.submitRequirement.title,
  description: PAGE_METADATA.submitRequirement.description,
  alternates: {
    canonical: PAGE_METADATA.submitRequirement.canonical,
  },
};

export default function SubmitRequirementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
