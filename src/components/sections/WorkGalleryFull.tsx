"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  src: string;
  cat: "flooring" | "outdoor" | "craft";
  caption: string;
}

const allItems: GalleryItem[] = [
  { id: "pool-deck", src: "/images/design/pool-deck.jpg", cat: "outdoor", caption: "Poolside deck, Constantia, 300×300mm Batavian, 25mm joint" },
  { id: "courtyard", src: "/images/design/courtyard.jpg", cat: "outdoor", caption: "Courtyard, Cape Town, hand-laid terracotta with planted borders" },
  { id: "kitchen", src: "/images/design/kitchen.jpg", cat: "flooring", caption: "Kitchen floor, natural red terracotta, tight joint" },
  { id: "herringbone-install", src: "/images/design/herringbone-install.jpg", cat: "flooring", caption: "Herringbone installation, in progress" },
  { id: "stacked-tiles", src: "/images/design/stacked-tiles.jpg", cat: "craft", caption: "Freshly fired tiles, stacked and cooling at the factory" },
  { id: "dining-room", src: "/images/design/dining-room.jpg", cat: "flooring", caption: "Dining room floor, wide joint, reclaimed look" },
  { id: "terrace", src: "/images/design/terrace.jpg", cat: "outdoor", caption: "Garden terrace, hand-laid terracotta pavers" },
  { id: "tile-texture", src: "/images/design/tile-texture.jpg", cat: "craft", caption: "Close-up: natural clay texture and tone variation" },
  { id: "dining-room-2", src: "/images/design/dining-room-2.jpg", cat: "flooring", caption: "Dining room, detail, tone variation tile to tile" },
];

const catLabels: Record<GalleryItem["cat"], string> = {
  flooring: "Flooring",
  outdoor: "Outdoor & Pools",
  craft: "Craft & Process",
};

const filters = [
  { key: "all", label: "All Projects" },
  { key: "flooring", label: "Flooring" },
  { key: "outdoor", label: "Outdoor & Pools" },
  { key: "craft", label: "Craft & Process" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function WorkGalleryFull() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [lightboxPos, setLightboxPos] = useState<number | null>(null);

  const filtered = allItems.filter((item) => filter === "all" || item.cat === filter);
  const lightboxItem = lightboxPos !== null ? filtered[lightboxPos] : null;

  const closeLightbox = () => setLightboxPos(null);
  const prev = () =>
    setLightboxPos((pos) => (pos === null ? null : (pos - 1 + filtered.length) % filtered.length));
  const next = () =>
    setLightboxPos((pos) => (pos === null ? null : (pos + 1) % filtered.length));

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 pb-12">
        <div className="flex gap-2 flex-wrap border-b border-mortar-gray/25 pb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "label-caps px-7 py-3 transition-colors",
                filter === f.key
                  ? "bg-charcoal-ash text-warm-linen"
                  : "text-secondary hover:bg-sand-bone"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 pb-24 lg:pb-40 columns-1 sm:columns-2 lg:columns-3 gap-6">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setLightboxPos(idx)}
            className="group block w-full mb-6 break-inside-avoid cursor-zoom-in text-left"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal-ash/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="label-caps text-kiln-glow mb-1">{catLabels[item.cat]}</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 pt-3">
              <span className="label-caps text-clay-deep text-[10px] shrink-0">{catLabels[item.cat]}</span>
              <span className="text-secondary text-[14px] leading-snug">{item.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-12"
          style={{ background: "rgba(23,18,16,0.95)" }}
        >
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-7 right-9 text-warm-linen opacity-90 hover:opacity-100">
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-warm-linen opacity-70 hover:opacity-100 p-3"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-warm-linen opacity-70 hover:opacity-100 p-3"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-[1100px] max-h-[88vh] flex flex-col items-center gap-4">
            <div className="relative max-h-[78vh] max-w-full">
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.caption}
                width={1100}
                height={825}
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>
            <div className="text-warm-linen/80 text-[15px] text-center">{lightboxItem.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}
