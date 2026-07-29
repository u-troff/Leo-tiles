import type { Metadata } from "next";
import WineFarmsShowcase from "@/components/sections/WineFarmsShowcase";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Wine Farms — The Vineyard Heritage",
  description: `Bespoke terracotta installations across Cape Winelands estates by ${siteConfig.businessName}. Explore La Colombe, Val d'Or, Delaire Graff, and upcoming collaborations.`,
};

export default function WineFarmsPage() {
  return <WineFarmsShowcase />;
}
