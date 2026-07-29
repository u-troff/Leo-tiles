import type { Metadata } from "next";
import Image from "next/image";
import ArchitecturalArchive from "@/components/sections/ArchitecturalArchive";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Past Projects — The Architectural Archive",
  description: `Selected floors, terraces and estates fired and laid by ${siteConfig.businessName} across Cape Town, wine country, and heritage restorations.`,
};

export default function WorkGalleryPage() {
  return (
    <>
      <header className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/design/terrace.jpg"
          alt="Luxury estate terrace with artisanal clay paving at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-surface/40 via-transparent to-charcoal-surface" />
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop mt-20 reveal-up">
          <p className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-architectural-gold mb-6">
            Past Projects
          </p>
          <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream uppercase">
            The Architectural Archive
          </h1>
        </div>
      </header>

      <ArchitecturalArchive />
    </>
  );
}
