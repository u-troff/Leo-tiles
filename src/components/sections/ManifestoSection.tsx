import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export default function ManifestoSection() {
  const years = new Date().getFullYear() - siteConfig.establishedYear;

  return (
    <section className="py-section-gap bg-background border-y border-ink-stroke reveal-up">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-surface">
            <Image
              src="/images/design/stacked-tiles.jpg"
              alt="Craftsman's hands shaping clay tiles"
              fill
              className="object-cover contrast-125 grayscale hover:scale-110 transition-transform duration-1000"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 border border-ink-stroke m-4 md:m-6 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-8">
            01 / The Manifesto
          </div>
          <h2 className="font-serif text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] text-primary mb-10 italic">
            A family-owned kiln, rooted in craft.
          </h2>
          <div className="space-y-6 font-serif text-[18px] md:text-[20px] leading-relaxed text-on-surface-variant">
            <p>
              Leo Tiles began in Kraaifontein in {siteConfig.establishedYear} with little more than a
              kiln, a passion for clay, and founder {siteConfig.founder.founderName}&rsquo;s
              determination to do things the hard, honest way. What started as a small workshop has
              grown into South Africa&rsquo;s most trusted source for handmade terracotta.
            </p>
            <p>
              Today, {siteConfig.founder.name} carries the torch, bridging architectural precision
              with raw geological craft. Every tile is a testament to the fifty-year dialogue between
              human hands and the Cape&rsquo;s ancient earth.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-ink-stroke flex gap-12">
            <div>
              <div className="font-serif text-[32px] md:text-[48px] leading-none text-architectural-gold">
                {years}+
              </div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-2">
                Years of Kiln Fire
              </div>
            </div>
            <div>
              <div className="font-serif text-[32px] md:text-[48px] leading-none text-architectural-gold">
                {siteConfig.staffCount}
              </div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-2">
                Master Artisans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
