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
    default: `${siteConfig.businessName} | Trusted Plumbing Services in ${siteConfig.region}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides trusted residential & commercial plumbing services across ${siteConfig.region}. Licensed, insured, and ${siteConfig.differentiator}. Call ${siteConfig.phone} for a free quote.`,
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
              "@type": "LocalBusiness",
              name: siteConfig.businessName,
              description: `Plumbing services in ${siteConfig.region}`,
              url: siteConfig.url,
              telephone: siteConfig.phoneRaw,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: "US",
              },
              areaServed: siteConfig.serviceAreas,
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
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
