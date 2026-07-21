import type { Metadata, Viewport } from "next";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import StickyCallBar from "@/components/StickyCallBar";
import { business } from "@/lib/business";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d4657",
};

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Pressure Washing in ${business.city}, ${business.state}`,
    template: `%s | ${business.name}`,
  },
  description: `Licensed and insured pressure washing for homes and businesses across North Carolina and Virginia. Surface cleaning, soft washing, roof washing, gutter cleaning, and more. Based in ${business.city}, ${business.state}.`,
  keywords: [
    "pressure washing",
    "power washing",
    "soft washing",
    "house washing",
    "roof cleaning",
    "Zebulon NC pressure washing",
    "North Carolina pressure washing",
    "Virginia pressure washing",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: `${business.name} | Pressure Washing in ${business.city}, ${business.state}`,
    description:
      "Licensed and insured pressure washing for homes and businesses across North Carolina and Virginia.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Pressure Washing`,
    description:
      "Licensed and insured pressure washing for homes and businesses across North Carolina and Virginia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased pb-14 lg:pb-0"
      >
        <RevealInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
