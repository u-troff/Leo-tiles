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
  { id: "pool-deck", src: "/images/design/pool-deck.jpg", cat: "outdoor", caption: "Poolside deck, Constantia — 300×300mm Batavian, 25mm joint" },
  { id: "courtyard", src: "/images/design/courtyard.jpg", cat: "outdoor", caption: "Courtyard, Cape Town — hand-laid terracotta with planted borders" },
  { id: "kitchen", src: "/images/design/kitchen.jpg", cat: "flooring", caption: "Kitchen floor — natural red terracotta, tight joint" },
  { id: "herringbone-install", src: "/images/design/herringbone-install.jpg", cat: "flooring", caption: "Herringbone installation, in progress" },
  { id: "stacked-tiles", src: "/images/design/stacked-tiles.jpg", cat: "craft", caption: "Freshly fired tiles, stacked and cooling at the factory" },
  { id: "dining-room", src: "/images/design/dining-room.jpg", cat: "flooring", caption: "Dining room floor — wide joint, reclaimed look" },
  { id: "terrace", src: "/images/design/terrace.jpg", cat: "outdoor", caption: "Garden terrace — hand-laid terracotta pavers" },
  { id: "tile-texture", src: "/images/design/tile-texture.jpg", cat: "craft", caption: "Close-up: natural clay texture and tone variation" },
  { id: "dining-room-2", src: "/images/design/dining-room-2.jpg", cat: "flooring", caption: "Dining room, detail — tone variation tile to tile" },
];

const filters = [
  { key: "all", label: "All" },
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
      <div className="flex gap-3 flex-wrap px-4 max-w-7xl mx-auto pb-11">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "font-semibold text-sm px-5 py-2.5 rounded-full transition-colors",
              filter === f.key
                ? "bg-rust-500 text-stone-50"
                : "bg-transparent text-stone-700 border border-stone-300 hover:border-rust-300"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="px-4 max-w-7xl mx-auto pb-24 columns-1 sm:columns-2 lg:columns-3 gap-3.5">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setLightboxPos(idx)}
            className="block w-full mb-3.5 break-inside-avoid cursor-zoom-in text-left"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image src={item.src} alt={item.caption} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="text-stone-700 text-[13px] leading-snug pt-2.5">{item.caption}</div>
          </button>
        ))}
      </div>

      {lightboxItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-12"
          style={{ background: "rgba(20,13,8,0.94)" }}
        >
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-7 right-9 text-stone-50 opacity-90 hover:opacity-100">
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-50 opacity-75 hover:opacity-100 p-3"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-50 opacity-75 hover:opacity-100 p-3"
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
            <div className="text-rust-200 text-[15px] text-center">{lightboxItem.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}
