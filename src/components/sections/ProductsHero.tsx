import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[560px] md:h-[921px] md:min-h-0 flex items-end pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design/pool-deck.jpg"
          alt="Premium terracotta tiles on an expansive outdoor patio at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-charcoal-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto reveal-up">
        <p className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-architectural-gold mb-6">
          Product Collection
        </p>
        <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream max-w-4xl">
          The Architectural Palette.
        </h1>
      </div>
    </section>
  );
}
