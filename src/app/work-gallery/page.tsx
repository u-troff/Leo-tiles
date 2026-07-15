import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import WorkGalleryFull from "@/components/sections/WorkGalleryFull";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "The Work, Selected Projects",
  description: `Floors, decks and courtyards fired and laid by ${siteConfig.businessName} across Cape Town and beyond, alongside a look at how each tile is made.`,
};

export default function WorkGalleryPage() {
  return (
    <>
      <section className="bg-warm-linen pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Eyebrow label="Selected Projects" />
              <h1 className="font-display text-5xl lg:text-7xl leading-[1.04] text-charcoal-ash mb-8">
                Mastery in <span className="text-clay-deep">masonry.</span>
              </h1>
              <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                A running record of floors, decks and courtyards we&rsquo;ve fired and laid across Cape Town
                and beyond, alongside a look at how each tile is made, from wet clay to kiln.
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex lg:justify-end">
              <div className="border-l border-clay-deep pl-6 py-2">
                <span className="label-caps text-clay-deep block mb-2">Currently Viewing</span>
                <span className="font-display text-2xl text-charcoal-ash">All Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkGalleryFull />
    </>
  );
}
