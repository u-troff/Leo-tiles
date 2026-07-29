import type { Metadata } from "next";
import GuidesHub from "@/components/sections/GuidesHub";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Technical Archive — Guides",
  description: `Architectural specifications, installation protocols, and design reference from ${siteConfig.businessName} — for homeowners and installers.`,
};

export default function GuideHubPage() {
  return <GuidesHub />;
}
