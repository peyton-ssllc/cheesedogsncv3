import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, schemaArea } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Cheesedogs NC | Triangle NC Hot Dog Cart and Event Catering",
    template: "%s | Cheesedogs NC"
  },
  description:
    "Book Cheesedogs NC for loaded hot dogs, cold drinks, and mobile hot dog cart catering across Raleigh, Durham, Cary, Apex, and the Triangle.",
  openGraph: {
    title: "Cheesedogs NC | Triangle NC Hot Dog Cart",
    description:
      "Loaded hot dogs and crowd-favorite cart catering for neighborhoods, schools, businesses, breweries, private parties, and local events.",
    url: business.url,
    siteName: "Cheesedogs NC",
    images: [{ url: "/images/cheesedogs-hero-real.jpg", width: 1200, height: 675, alt: "Cheesedogs NC cart and menu at a Triangle event" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheesedogs NC | Triangle NC Hot Dog Cart",
    description: "Book the hot dog cart for events across the Triangle.",
    images: ["/images/cheesedogs-hero-real.jpg"]
  },
  icons: {
    icon: [
      { url: "/images/brand/cheesedogs-logo.png", type: "image/png" }
    ],
    apple: [{ url: "/images/brand/cheesedogs-logo.png", type: "image/png" }]
  },
  alternates: {
    canonical: business.url
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment", "CateringService"],
  name: business.name,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  image: `${business.url}/images/cheesedogs-hero-real.jpg`,
  logo: `${business.url}/images/brand/cheesedogs-logo.png`,
  description:
    "Mobile hot dog cart and catering service serving loaded hot dogs, cheese dogs, chips, and drinks across the Triangle area of North Carolina.",
  areaServed: schemaArea,
  servesCuisine: ["Hot dogs", "American street food", "Event catering"],
  priceRange: "$$",
  sameAs: [business.instagram, business.facebook]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
