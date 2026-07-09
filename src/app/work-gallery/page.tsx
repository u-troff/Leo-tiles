import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import WorkGalleryFull from "@/components/sections/WorkGalleryFull";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "The Work",
  description: `Floors, decks and courtyards fired and laid by ${siteConfig.businessName} across Cape Town and beyond, alongside a look at how each tile is made.`,
};

export default function WorkGalleryPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-20 pb-11">
        <Eyebrow label="Selected Projects" />
        <h1 className="text-3xl lg:text-5xl font-bold text-clay-900 mb-5 max-w-2xl leading-tight">The work</h1>
        <p className="text-stone-700 text-lg leading-relaxed max-w-2xl">
          A running record of floors, decks and courtyards we&rsquo;ve fired and laid across Cape Town
          and beyond — alongside a look at how each tile is made, from wet clay to kiln.
        </p>
      </div>
      <WorkGalleryFull />
    </>
  );
}
