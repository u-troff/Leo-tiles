"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import {
  featuredWineEstates,
  guildEstates,
  wineRegions,
  tileTypeFilters,
  type WineRegion,
  type TileTypeFilter,
} from "@/data/wine-farms";
import { cn } from "@/lib/utils";

export default function WineFarmsShowcase() {
  const [region, setRegion] = useState<WineRegion>("All");
  const [tileType, setTileType] = useState<TileTypeFilter>("All");

  const filteredGuild = useMemo(() => {
    return guildEstates.filter((estate) => {
      const regionOk = region === "All" || estate.location === region;
      const tileOk = tileType === "All" || estate.tileType === tileType;
      return regionOk && tileOk;
    });
  }, [region, tileType]);

  return (
    <>
      {/* Hero */}
      <header className="relative h-[70vh] min-h-[560px] md:h-[85vh] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design/terrace.jpg"
            alt="Vineyard estate terrace at sunset overlooking Cape mountains"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-surface/20 via-transparent to-charcoal-surface" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 max-w-4xl reveal-up">
          <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-4">
            Curated Collections
          </p>
          <h1 className="font-serif text-[40px] leading-[1.05] md:text-[72px] lg:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-6">
            The Vineyard Heritage Catalog
          </h1>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-2xl">
            Where ancient terroir meets architectural precision. Explore our bespoke tile
            installations across the most prestigious wine estates of the Cape.
          </p>
        </div>
      </header>

      {/* Featured case studies */}
      <div className="py-section-gap px-margin-mobile md:px-margin-desktop bg-charcoal-surface space-y-section-gap">
        {featuredWineEstates.map((farm) => {
          const imageBlock = (
            <div className="col-span-12 md:col-span-7 overflow-hidden">
              <div className="aspect-[16/9] bg-surface-container relative overflow-hidden rounded-sm">
                <Image
                  src={farm.image}
                  alt={farm.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </div>
          );

          const textBlock = (
            <div
              className={cn(
                "col-span-12 md:col-span-5 mt-8 md:mt-0",
                farm.layout === "image-left" ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"
              )}
            >
              <div className="border-t border-architectural-gold w-24 mb-8" />
              {farm.rating && (
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: farm.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-architectural-gold text-architectural-gold"
                    />
                  ))}
                </div>
              )}
              <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream mb-6">
                {farm.name}
              </h2>
              <p className="font-serif text-base text-on-surface-variant mb-8 leading-relaxed">
                {farm.description}
              </p>

              {farm.meta && (
                <div className="flex flex-col gap-4 border-l border-architectural-gold/30 pl-6 mb-8">
                  {farm.meta.map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-architectural-gold">
                        {item.label}
                      </p>
                      <p className="font-serif text-base text-bone-cream">{item.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {farm.primaryCta && (
                  <Link
                    href={farm.primaryCta.href}
                    className="inline-block bg-[#6B1E2B] text-bone-cream px-8 py-3.5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-architectural-gold hover:text-charcoal-surface transition-colors"
                  >
                    {farm.primaryCta.label}
                  </Link>
                )}
                {farm.secondaryCta && (
                  <Link
                    href={farm.secondaryCta.href}
                    className="inline-block border border-architectural-gold text-architectural-gold px-8 py-3.5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-architectural-gold hover:text-charcoal-surface transition-colors"
                  >
                    {farm.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          );

          return (
            <section
              key={farm.slug}
              className="grid grid-cols-12 gap-gutter group items-center reveal-up"
            >
              {farm.layout === "image-left" ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              )}
            </section>
          );
        })}
      </div>

      {/* Guild of Heritage */}
      <section className="bg-[#6B1E2B] px-margin-mobile md:px-margin-desktop py-section-gap reveal-up">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-3">
              Heritage Project
            </p>
            <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream">
              The Guild of Heritage
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 p-4 md:p-5 bg-charcoal-surface/40 border border-architectural-gold/20">
            <label className="flex-1 relative">
              <span className="sr-only">Region</span>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as WineRegion)}
                className="w-full appearance-none bg-charcoal-surface border border-architectural-gold/40 text-bone-cream font-mono text-[12px] tracking-widest uppercase px-5 py-4 pr-12 focus:outline-none focus:border-architectural-gold cursor-pointer"
              >
                {wineRegions.map((r) => (
                  <option key={r} value={r}>
                    {r === "All" ? "Region — All" : r}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-architectural-gold" />
            </label>

            <label className="flex-1 relative">
              <span className="sr-only">Tile Type</span>
              <select
                value={tileType}
                onChange={(e) => setTileType(e.target.value as TileTypeFilter)}
                className="w-full appearance-none bg-charcoal-surface border border-architectural-gold/40 text-bone-cream font-mono text-[12px] tracking-widest uppercase px-5 py-4 pr-12 focus:outline-none focus:border-architectural-gold cursor-pointer"
              >
                {tileTypeFilters.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "Tile Type — All" : t}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-architectural-gold" />
            </label>
          </div>

          {/* Grid */}
          {filteredGuild.length === 0 ? (
            <p className="font-serif text-bone-cream/70 text-center py-20">
              No estates match these filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredGuild.map((estate) => (
                <Link
                  key={estate.slug}
                  href={`/wine-farms/${estate.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-sm bg-charcoal-surface/30">
                    <Image
                      src={estate.image}
                      alt={estate.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-serif text-[22px] md:text-[24px] text-bone-cream group-hover:text-architectural-gold transition-colors">
                    {estate.name}
                  </h3>
                  <p className="font-serif text-sm text-bone-cream/60 mt-1">{estate.location}</p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-14 md:mt-16 text-center">
            <Link
              href="/work-gallery"
              className="inline-block bg-[#5a1820] border border-architectural-gold text-bone-cream px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-architectural-gold hover:text-charcoal-surface transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
