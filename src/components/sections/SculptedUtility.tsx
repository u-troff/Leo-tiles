import Image from "next/image";

export default function SculptedUtility() {
  return (
    <section className="py-section-gap bg-background reveal-up">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="font-mono text-[12px] font-medium tracking-[0.3em] uppercase text-architectural-gold mb-4">
            02 / Collections
          </div>
          <h2 className="font-serif text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] text-primary">
            Sculpted Utility.
          </h2>
        </div>
        <p className="font-serif text-base text-on-surface-variant max-w-md leading-relaxed">
          Our signature formats are designed to age with grace, developing a patina that
          mass-produced ceramics can never replicate.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 overflow-hidden group border border-ink-stroke relative aspect-[16/10]">
            <Image
              src="/images/design/stacked-tiles.jpg"
              alt="Artistic stacked terracotta tiles"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center gap-8 p-10 md:p-12 bg-surface-container-low border border-ink-stroke">
            <h3 className="font-serif text-[28px] md:text-[32px] leading-tight text-primary italic">
              The Artisan Archetype
            </h3>
            <p className="font-serif text-base text-on-surface-variant leading-relaxed">
              A curation of geometric forms where structural integrity meets the organic
              imperfections of handmade clay.
            </p>
            <div className="h-px w-24 bg-architectural-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
