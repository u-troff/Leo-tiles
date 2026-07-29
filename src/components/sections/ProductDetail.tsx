import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[640px] md:min-h-[800px] flex items-end pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={product.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-charcoal-surface/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full md:w-8/12 grid grid-cols-1 gap-6 reveal-up">
          <p className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold">
            {product.eyebrow}
          </p>
          <h1 className="font-serif text-[36px] leading-[40px] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream">
            {product.name.split(" ").length > 2 ? (
              <>
                {product.name.split(" ").slice(0, -1).join(" ")}
                <br />
                {product.name.split(" ").slice(-1)}
              </>
            ) : (
              product.name
            )}
          </h1>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-2xl">
            {product.tagline}
          </p>
        </div>
      </section>

      {/* Editorial / Anatomy of Craft */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center max-w-[1920px] mx-auto">
          <div className="md:col-span-5 md:col-start-2 flex flex-col gap-8">
            <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-architectural-gold border-b border-architectural-gold/30 pb-4">
              {product.craftTitle}
            </h2>
            <p className="font-serif text-[18px] leading-7 text-on-surface-variant">
              {product.craftLead}
            </p>
            <p className="font-serif text-base leading-6 text-on-surface-variant/70">
              {product.craftBody}
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative aspect-[4/5]">
            <Image
              src={product.craftImage}
              alt={product.craftImageAlt}
              fill
              className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Size & Ordering */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-charcoal-surface border-t border-architectural-gold/20 reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-[1920px] mx-auto">
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="font-serif text-[28px] md:text-[32px] leading-tight text-bone-cream mb-8">
              Architectural Specifications
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            {product.sizeOptions.map((option) => (
              <div
                key={option.size}
                className="group border-b border-architectural-gold/30 pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 hover:border-architectural-gold transition-colors duration-300"
              >
                <div>
                  <h3 className="font-serif text-[24px] text-bone-cream mb-2 group-hover:text-architectural-gold transition-colors">
                    {option.size}
                  </h3>
                  <p className="font-serif text-base text-on-surface-variant">{option.label}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-3">
                    {option.price}
                  </p>
                  <Link
                    href={`/get-a-quote?product=${product.slug}&size=${encodeURIComponent(option.size)}`}
                    className={cn(
                      "inline-block px-6 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors",
                      option.primary
                        ? "bg-bone-cream text-charcoal-surface hover:bg-architectural-gold"
                        : "bg-transparent border border-bone-cream text-bone-cream hover:bg-architectural-gold hover:border-architectural-gold hover:text-charcoal-surface"
                    )}
                  >
                    {option.cta === "inquire" ? "Inquire" : "Add to Quote"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-gap bg-background px-margin-mobile md:px-margin-desktop reveal-up">
        <div className="mb-16 md:mb-24 text-center max-w-[1920px] mx-auto">
          <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream">
            Materiality &amp; Form
          </h2>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant mt-4 max-w-2xl mx-auto">
            {product.galleryIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(280px,auto)] max-w-[1920px] mx-auto">
          {product.galleryImages.map((img) => (
            <div
              key={img.caption}
              className={cn(
                "relative group overflow-hidden min-h-[280px]",
                img.span === "large" ? "md:col-span-8 md:row-span-2 md:min-h-[600px]" : "md:col-span-4"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={cn(
                  "object-cover transition-all duration-1000 group-hover:scale-105",
                  img.grayscale && "grayscale group-hover:grayscale-0"
                )}
                sizes={img.span === "large" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-colors duration-700",
                  img.grayscale ? "bg-charcoal-surface/40 group-hover:bg-transparent" : "bg-charcoal-surface/20 group-hover:bg-transparent"
                )}
              />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-bone-cream bg-charcoal-surface/80 px-3 py-1 backdrop-blur-sm">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical + Maintenance */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-charcoal-surface border-t border-architectural-gold/20 reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-section-gap max-w-[1920px] mx-auto">
          <div>
            <h2 className="font-serif text-[28px] md:text-[32px] text-architectural-gold mb-8 border-b border-architectural-gold/30 pb-4">
              Technical Integrity
            </h2>
            <ul className="flex flex-col gap-4">
              {product.technicalSpecs.map((spec) => (
                <li
                  key={spec.label}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-on-surface-variant/20 pb-4"
                >
                  <span className="font-serif text-base text-bone-cream">{spec.label}</span>
                  <span className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-low p-8 border border-architectural-gold/10">
            <h2 className="font-serif text-[24px] text-bone-cream mb-6">Essential Maintenance</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/3 shrink-0 bg-charcoal-surface p-4 relative aspect-square">
                <Image
                  src="/images/design/tile-texture.jpg"
                  alt="Tile sealing oil and maintenance"
                  fill
                  className="object-cover opacity-80"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold">
                  {product.maintenanceTitle}
                </h3>
                <p className="font-serif text-sm text-on-surface-variant/80 leading-relaxed">
                  {product.maintenanceBody}
                </p>
                <Link
                  href={product.maintenanceGuideHref}
                  className="inline-block border-b border-bone-cream text-bone-cream font-mono text-[10px] uppercase tracking-wider pb-1 w-max hover:text-architectural-gold hover:border-architectural-gold transition-colors"
                >
                  View Maintenance Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop text-center bg-background border-t border-ink-stroke reveal-up">
        <h2 className="font-serif text-[36px] md:text-[48px] leading-tight text-bone-cream mb-6 max-w-3xl mx-auto">
          Get a quote for {product.shortName} tiles.
        </h2>
        <p className="font-serif text-[18px] text-on-surface-variant mb-10 max-w-xl mx-auto">
          Tell us your square meterage and we&rsquo;ll return with pricing and lead time for this range.
        </p>
        <Link
          href={`/get-a-quote?product=${product.slug}`}
          className="inline-block bg-architectural-gold text-charcoal-surface px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-bone-cream transition-colors"
        >
          Request a Quote — {product.shortName}
        </Link>
      </section>
    </>
  );
}
