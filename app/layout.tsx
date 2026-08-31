import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Surya Business Development Centre (SBDC) | Empowering Businesses. Building Futures.",
  description:
    "Official corporate portal of Surya Business Development Centre Pvt. Ltd. (SBDC). Facilitating connections between aspiring entrepreneurs, businesses, and external funding, training, and institutional support programs.",
  keywords: [
    "SBDC",
    "Surya Business Development Centre",
    "Business Facilitation Nepal",
    "Entrepreneurship Support",
    "Funding Facilitation",
    "SME Capacity Building",
    "Birgunj Parsa Nepal",
    "Nepal",
  ],
  openGraph: {
    title: "Surya Business Development Centre (SBDC)",
    description:
      "Empowering Businesses. Building Futures. Facilitating connections with opportunities for sustainable growth.",
    type: "website",
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
      <body className="min-h-screen flex flex-col font-sans bg-brand-warm-white text-brand-text-primary antialiased selection:bg-brand-orange-tint selection:text-brand-orange-deep">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
