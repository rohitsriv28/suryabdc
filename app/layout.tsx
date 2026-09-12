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
    "Surya Business Development Center (SBDC) | Empowering Businesses. Building Futures.",
  description:
    "Official corporate portal of Surya Business Development Center Pvt. Ltd. (SBDC). Supporting entrepreneurs, enterprises, institutions, and development organizations through practical business solutions, research, training, and enterprise development.",
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
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Surya Business Development Center (SBDC)",
    description:
      "Empowering Businesses. Building Futures. Practical solutions for entrepreneurs, enterprises, institutions and development organizations.",
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
