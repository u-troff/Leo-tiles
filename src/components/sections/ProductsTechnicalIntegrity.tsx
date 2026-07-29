import Image from "next/image";

const craftPoints = [
  {
    title: "High-Density Composition",
    description: "Resistant to severe weather variations.",
  },
  {
    title: "Artisanal Firing Process",
    description: "Ensuring deep, lasting coloration.",
  },
];

export default function ProductsTechnicalIntegrity() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-architectural-gold/20 reveal-up">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 mb-12 md:mb-0">
          <p className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-architectural-gold mb-6">
            Craftsmanship
          </p>
          <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] tracking-[-0.02em] text-bone-cream mb-8">
            Technical Integrity.
          </h2>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant mb-12 max-w-lg">
            Our materials are fired for permanence. Engineered to withstand the rigors of time while
            maintaining their artisanal character. Every piece is a testament to unyielding
            structural quality.
          </p>
          <div className="space-y-6">
            {craftPoints.map((point) => (
              <div key={point.title} className="border-b border-architectural-gold/30 pb-4">
                <h4 className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-bone-cream mb-2">
                  {point.title}
                </h4>
                <p className="font-serif text-base text-on-surface-variant">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 h-[400px] md:h-[600px] relative">
          <Image
            src="/images/design/stacked-tiles.jpg"
            alt="Artisan hands working with raw clay in the kiln studio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}
