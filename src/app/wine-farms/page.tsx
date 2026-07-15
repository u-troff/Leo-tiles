import type { Metadata } from "next";
import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { wineFarms } from "@/data/wine-farms";

export const metadata: Metadata = {
  title: "Wine Farms",
  description: `${siteConfig.businessName} has supplied handmade terracotta to Cape Winelands wine farms since ${siteConfig.establishedYear}. See the estates we've worked with, and get in touch if yours isn't on the list yet.`,
};

export default function WineFarmsPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-clay-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionLogo label="Wine Farms" />
          <h1 className="text-3xl lg:text-5xl font-bold text-stone-50 mb-6 max-w-2xl leading-tight">
            50+ Years Supplying the Cape Winelands
          </h1>
          <p className="text-stone-200 text-lg leading-relaxed max-w-2xl mb-4">
            Since {siteConfig.establishedYear}, {siteConfig.businessName} has supplied handmade
            terracotta to wine farms, cellars and tasting rooms across the Cape Winelands, some of
            our oldest relationships go back decades. This page is a growing record of that work, and
            an open invitation to the wine farms we haven&rsquo;t worked with yet.
          </p>
          <div className="flex gap-4 mt-8">
            <Button href="/get-a-quote" variant="primary" size="lg">
              Get a Quote
            </Button>
            <Button href={`tel:${siteConfig.phoneRaw}`} variant="secondary" size="lg">
              Call Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wineFarms.map((farm) => (
              <div
                key={farm.slug}
                className={`overflow-hidden ${farm.comingSoon ? "opacity-80" : ""}`}
              >
                <div className="relative h-[220px] mb-4">
                  <Image
                    src={farm.image}
                    alt={farm.name}
                    fill
                    className={`object-cover ${farm.comingSoon ? "grayscale-[35%]" : ""}`}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {farm.comingSoon && (
                    <span className="absolute top-3 left-3 bg-clay-900 text-stone-50 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="text-clay-900 font-bold text-lg mb-1">{farm.name}</div>
                <div className="text-rust-500 text-sm font-semibold mb-2">
                  {farm.location}
                  {farm.supplyingSince && ` · Supplying since ${farm.supplyingSince}`}
                </div>
                <p className="text-stone-700 text-[15px] leading-relaxed">{farm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100 text-center px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-clay-900 mb-3.5">
          Is your wine farm missing from this list?
        </h2>
        <p className="text-stone-700 mb-7 max-w-xl mx-auto">
          We&rsquo;d love to hear from you, whether it&rsquo;s a new cellar, tasting room, or
          courtyard project.
        </p>
        <Button href="/get-a-quote" variant="primary" size="lg">
          Start a Conversation
        </Button>
      </section>
    </>
  );
}
