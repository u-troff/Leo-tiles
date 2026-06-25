import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import MainNav from "@/components/layout/MainNav";
import FloatingCTABanner from "@/components/layout/FloatingCTABanner";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Handmade Terracotta Tiles in ${siteConfig.region}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} manufactures handmade, kiln-fired terracotta tiles across ${siteConfig.region}. ${siteConfig.differentiatorLabel}, 50+ years of craft. Call ${siteConfig.phone} for a quote.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.businessName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopBar />
        <MainNav />
        <main>{children}</main>
        <FloatingCTABanner />
        <Footer />
        <MobileBottomBar />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: siteConfig.businessName,
              description: `Handmade, kiln-fired terracotta tile manufacturer in ${siteConfig.region}`,
              url: siteConfig.url,
              telephone: siteConfig.phoneRaw,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: "ZA",
              },
              areaServed: siteConfig.serviceAreas,
              priceRange: "R800–R3,500/m²",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: siteConfig.ratings.google.toString(),
                reviewCount: siteConfig.ratings.reviewCount.toString(),
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
