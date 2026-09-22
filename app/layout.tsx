import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { SITE_METADATA, SCHEMA_ORGANIZATION } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.baseUrl),
  title: {
    default: SITE_METADATA.defaultTitle,
    template: SITE_METADATA.titleTemplate,
  },
  description: SITE_METADATA.defaultDescription,
  keywords: [
    "SBDC",
    "Surya Business Development Center",
    "Business Development Nepal",
    "Research and Surveys Nepal",
    "Enterprise Development",
    "Training and Consulting",
    "Birgunj Parsa Madhesh Province Nepal",
    "Nepal",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    url: SITE_METADATA.baseUrl,
    siteName: SITE_METADATA.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_METADATA.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    images: [SITE_METADATA.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA_ORGANIZATION),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-brand-warm-white text-brand-text-primary antialiased selection:bg-brand-orange-tint selection:text-brand-orange-deep">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
