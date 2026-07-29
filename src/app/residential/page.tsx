import type { Metadata } from "next";
import ProductsHero from "@/components/sections/ProductsHero";
import CollectionGrid from "@/components/sections/CollectionGrid";
import ProductsTechnicalIntegrity from "@/components/sections/ProductsTechnicalIntegrity";
import ProductsSampleCTA from "@/components/sections/ProductsSampleCTA";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "The Architectural Palette — Products",
  description: `Explore handmade terracotta collections from ${siteConfig.businessName}: Batavian floor tiles, Dutch klompie pavers, hexagon terracotta, and project accessories. Call ${siteConfig.phone}.`,
};

export default function ResidentialPage() {
  return (
    <>
      <ProductsHero />
      <CollectionGrid />
      <ProductsTechnicalIntegrity />
      <ProductsSampleCTA />
    </>
  );
}
