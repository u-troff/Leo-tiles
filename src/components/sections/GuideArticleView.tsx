import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sun, Droplets } from "lucide-react";
import type { Guide } from "@/data/guides";
import { products } from "@/data/products";
import { guides } from "@/data/guides";
import { cn } from "@/lib/utils";

const tipIcons = {
  calendar: Calendar,
  mop: Droplets,
  sun: Sun,
} as const;

const accentBorder = {
  gold: "border-architectural-gold",
  cream: "border-bone-cream",
  muted: "border-on-surface-variant/30",
} as const;

const accentLabel = {
  gold: "text-architectural-gold",
  cream: "text-bone-cream",
  muted: "text-on-surface-variant",
} as const;

export default function GuideArticleView({ guide }: { guide: Guide }) {
  const relatedProducts = products.filter((p) => guide.relatedProductSlugs.includes(p.slug));
  const relatedGuides = guides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] md:h-[819px] flex items-end px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={guide.heroImage}
            alt={guide.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-charcoal-surface/40 to-transparent" />
        </div>
        <div className="relative z-20 max-w-4xl reveal-up">
          <Link
            href="/guides"
            className="inline-block font-mono text-[11px] tracking-widest uppercase text-architectural-gold mb-6 hover:text-bone-cream transition-colors"
          >
            ← Technical Archive
          </Link>
          <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-4">
            The Technical Hub · {guide.audience.replace("For ", "")}
          </p>
          <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-8">
            {guide.heroTitle ?? guide.title}
          </h1>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-2xl">
            {guide.intro}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-[1920px] mx-auto">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream mb-6">
              {guide.stepsLabel}
            </h2>
            <div className="w-16 h-1 bg-architectural-gold mb-8" />
            <p className="font-serif text-base text-on-surface-variant mb-12 leading-relaxed">
              {guide.stepsIntro}
            </p>
            <div className="p-6 border border-ink-stroke bg-surface-container-low">
              <p className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-2">
                Architectural Spec
              </p>
              <p className="font-serif text-sm text-on-surface-variant/70 mb-4">
                Need a full technical pack for a commercial project? Talk to us and we&rsquo;ll issue
                the relevant sheets for this range.
              </p>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-bone-cream hover:text-architectural-gold transition-colors"
              >
                Request Spec Pack <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-0">
              {guide.steps.map((step, i) => (
                <div
                  key={step.number}
                  className={cn(
                    "group relative pl-14 md:pl-16 border-l border-ink-stroke",
                    i < guide.steps.length - 1 ? "pb-12" : ""
                  )}
                >
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-architectural-gold text-charcoal-surface flex items-center justify-center font-serif font-medium text-lg">
                    {step.number.replace(/^0/, "")}
                  </div>
                  <h3 className="font-serif text-[28px] md:text-[32px] leading-tight text-bone-cream mb-4">
                    {step.title}
                  </h3>
                  <p className="font-serif text-base text-on-surface-variant mb-8 leading-relaxed">
                    {step.body}
                  </p>
                  {step.image && (
                    <div className="aspect-video relative overflow-hidden border border-ink-stroke bg-surface-container-high">
                      <Image
                        src={step.image}
                        alt={step.imageAlt ?? step.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tonal harmony */}
      {guide.showTonalHarmony && guide.groutOptions && (
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-ink-stroke reveal-up">
          <div className="text-center mb-16 md:mb-20 max-w-[1920px] mx-auto">
            <h2 className="font-serif text-[36px] md:text-[48px] text-bone-cream mb-4">
              Tonal Harmony
            </h2>
            <p className="font-serif text-base text-on-surface-variant max-w-xl mx-auto">
              Selecting the correct grout is an architectural decision. It defines the rhythm of the
              space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-[1920px] mx-auto">
            {guide.groutOptions.map((option) => (
              <div
                key={option.name}
                className={cn(
                  "group bg-surface-container p-8 border-t-2 transition-all duration-500 hover:bg-surface-container-high",
                  accentBorder[option.accent]
                )}
              >
                <div className="mb-8 aspect-square overflow-hidden relative">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4
                  className={cn(
                    "font-mono text-[12px] font-medium tracking-widest uppercase mb-2",
                    accentLabel[option.accent]
                  )}
                >
                  {option.label}
                </h4>
                <h3 className="font-serif text-[28px] md:text-[32px] text-bone-cream mb-4">
                  {option.name}
                </h3>
                <p className="font-serif text-base text-on-surface-variant leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Patina + schedule */}
      {guide.showPatina && (
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop reveal-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-section-gap items-center max-w-[1920px] mx-auto">
            <div className="relative">
              <div className="p-8 md:p-12 bg-[#6B1E2B] text-bone-cream border border-architectural-gold/20 relative z-10">
                <h2 className="font-serif text-[36px] md:text-[48px] mb-8">Preserving the Patina</h2>
                <div className="space-y-10">
                  {(guide.patinaTips ?? []).map((tip) => {
                    const Icon = tipIcons[tip.icon];
                    return (
                      <div key={tip.title} className="flex gap-6">
                        <Icon className="w-8 h-8 text-architectural-gold shrink-0" />
                        <div>
                          <h4 className="font-mono text-[12px] font-medium tracking-widest uppercase mb-2">
                            {tip.title}
                          </h4>
                          <p className="font-serif text-base opacity-80 leading-relaxed">{tip.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {guide.maintenanceSchedule && (
              <div className="space-y-8">
                <h3 className="font-serif text-[28px] md:text-[32px] text-bone-cream">
                  Maintenance Schedule
                </h3>
                {guide.maintenanceSchedule.map((item) => (
                  <div
                    key={item.when}
                    className="border-t border-architectural-gold/30 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 group"
                  >
                    <span className="font-mono text-[12px] font-medium tracking-widest uppercase text-on-surface-variant">
                      {item.when}
                    </span>
                    <span className="font-serif text-base text-bone-cream">{item.action}</span>
                    <ArrowRight className="w-5 h-5 text-architectural-gold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related */}
      {(relatedProducts.length > 0 || relatedGuides.length > 0) && (
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-ink-stroke reveal-up">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="font-serif text-[28px] text-bone-cream mb-8">Related products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedProducts.map((product) => (
                    <Link key={product.slug} href={`/products/${product.slug}`} className="group block">
                      <div className="relative h-[160px] overflow-hidden mb-3">
                        <Image
                          src={product.heroImage}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="33vw"
                        />
                      </div>
                      <div className="font-serif text-lg text-bone-cream group-hover:text-architectural-gold transition-colors">
                        {product.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedGuides.length > 0 && (
              <div>
                <h2 className="font-serif text-[28px] text-bone-cream mb-8">Related guides</h2>
                <div className="space-y-4">
                  {relatedGuides.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/guides/${related.slug}`}
                      className="flex justify-between items-center border-b border-ink-stroke py-4 group"
                    >
                      <div>
                        <div className="font-mono text-[10px] tracking-widest uppercase text-architectural-gold mb-1">
                          {related.audience}
                        </div>
                        <div className="font-serif text-lg text-bone-cream group-hover:text-architectural-gold transition-colors">
                          {related.title}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-architectural-gold shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center border-t border-ink-stroke reveal-up">
        <h2 className="font-serif text-[36px] md:text-[48px] text-bone-cream mb-8 max-w-3xl mx-auto">
          Technical support for your next vision.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/get-a-quote"
            className="bg-bone-cream text-charcoal-surface px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-architectural-gold transition-colors"
          >
            Request Sample Kit
          </Link>
          <Link
            href="/contact-us"
            className="border border-bone-cream text-bone-cream px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-bone-cream hover:text-charcoal-surface transition-all"
          >
            Talk to a Consultant
          </Link>
        </div>
      </section>
    </>
  );
}
