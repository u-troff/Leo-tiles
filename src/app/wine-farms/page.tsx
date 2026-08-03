import type { Metadata } from "next";
import WineFarmsShowcase from "@/components/sections/WineFarmsShowcase";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Wine Farms — The Vineyard Heritage Catalog",
  description: `Bespoke tile installations across Cape Winelands estates by ${siteConfig.businessName}. Explore La Colombe, Delaire Graff, and The Guild of Heritage.`,
};

export default function WineFarmsPage() {
  return <WineFarmsShowcase />;
}
