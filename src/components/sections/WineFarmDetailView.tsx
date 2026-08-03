import Image from "next/image";
import Link from "next/link";
import type { WineFarmDetail } from "@/data/wine-farms";

export default function WineFarmDetailView({
  farm,
  nextFarm,
}: {
  farm: WineFarmDetail;
  nextFarm?: WineFarmDetail;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={farm.heroImage}
            alt={farm.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B1E2B] via-charcoal-surface/50 to-charcoal-surface/20" />
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 pt-32">
          <Link
            href="/wine-farms"
            className="inline-block font-mono text-[11px] tracking-widest uppercase text-architectural-gold mb-8 hover:text-bone-cream transition-colors"
          >
            ← Wine Farms Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 reveal-up">
              <h1 className="font-serif text-[40px] leading-[1.05] md:text-[64px] lg:text-[72px] font-medium tracking-[-0.03em] text-architectural-gold mb-4">
                {farm.fullTitle}
              </h1>
              <p className="font-serif text-[18px] md:text-[22px] text-bone-cream">
                {farm.tagline}
              </p>
            </div>

            <div className="lg:col-span-5 reveal-up">
              <div className="bg-charcoal-surface/80 backdrop-blur-md border border-architectural-gold/20 p-6 md:p-8 space-y-6">
                {[
                  { label: "Architect", value: farm.architect },
                  { label: "Year", value: farm.year },
                  { label: "Tile Series", value: farm.tileSeries },
                  { label: "Location", value: farm.location },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-architectural-gold mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-serif text-base md:text-lg text-bone-cream leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story + gallery */}
      <section className="bg-[#6B1E2B] px-margin-mobile md:px-margin-desktop py-section-gap reveal-up">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left story */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-5">
                The Brief
              </h2>
              <p className="font-serif text-[17px] md:text-[18px] leading-relaxed text-bone-cream/90">
                {farm.brief}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-5">
                The Solution
              </h2>
              <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="col-span-5 sm:col-span-4 grid grid-cols-1 gap-3">
                  {farm.solutionThumbs.map((thumb) => (
                    <div key={thumb.alt} className="relative aspect-square overflow-hidden bg-charcoal-surface/30">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  ))}
                </div>
                <div className="col-span-7 sm:col-span-8">
                  <p className="font-serif text-[16px] md:text-[17px] leading-relaxed text-bone-cream/85">
                    {farm.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right technical gallery */}
          <div className="lg:col-span-6">
            <h2 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-5">
              Technical Gallery
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {farm.gallery.map((img) => (
                <div key={img.alt} className="relative aspect-square overflow-hidden bg-charcoal-surface/30">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next project ribbon */}
      {nextFarm && (
        <div className="bg-[#6B1E2B] px-margin-mobile md:px-margin-desktop pb-16 flex justify-end reveal-up">
          <Link
            href={`/wine-farms/${nextFarm.slug}`}
            className="inline-flex items-center bg-architectural-gold text-charcoal-surface px-8 py-4 font-mono text-[12px] font-medium tracking-widest uppercase -skew-x-6 hover:bg-bone-cream transition-colors shadow-lg"
          >
            <span className="skew-x-6">
              Next Project: {nextFarm.name} →
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
