import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { wineFarmCases, upcomingWineFarms } from "@/data/wine-farms";

export default function WineFarmsShowcase() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[70vh] min-h-[560px] md:h-[921px] md:min-h-0 flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design/terrace.jpg"
            alt="Vineyard estate terrace with artisanal terracotta paving at golden hour"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-surface" />
          <div className="absolute inset-0 bg-charcoal-surface/30" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-16 md:pb-section-gap max-w-4xl reveal-up">
          <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-4">
            Curated Collections
          </p>
          <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-6">
            The Vineyard Heritage
          </h1>
          <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-2xl">
            Where ancient terroir meets architectural precision. Explore our bespoke tile
            installations across the most prestigious wine estates of the Cape.
          </p>
        </div>
      </header>

      <div className="space-y-0 py-section-gap px-margin-mobile md:px-margin-desktop bg-charcoal-surface">
        {/* La Colombe — split left */}
        {wineFarmCases
          .filter((f) => f.layout === "split-left")
          .map((farm) => (
            <section
              key={farm.slug}
              className="grid grid-cols-12 gap-gutter group items-center mb-section-gap reveal-up"
            >
              <div className="col-span-12 md:col-span-7 overflow-hidden">
                <div className="aspect-[16/9] bg-surface-container relative overflow-hidden">
                  <Image
                    src={farm.image}
                    alt={farm.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-16 mt-8 md:mt-0">
                <div className="border-t border-architectural-gold w-24 mb-8" />
                {farm.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: farm.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-architectural-gold text-architectural-gold"
                      />
                    ))}
                  </div>
                )}
                <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream mb-6">
                  {farm.name}
                </h2>
                <p className="font-serif text-base text-on-surface-variant mb-8 leading-relaxed text-justify">
                  {farm.description}
                </p>
                {farm.tags && (
                  <div className="flex flex-wrap gap-4">
                    {farm.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={
                          i === 0
                            ? "font-mono text-[10px] tracking-widest uppercase bg-[#6B1E2B] text-bone-cream px-3 py-1"
                            : "font-mono text-[10px] tracking-widest uppercase bg-surface-container-highest text-architectural-gold px-3 py-1"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

        {/* Val d'Or — heritage wine banner */}
        {wineFarmCases
          .filter((f) => f.layout === "heritage-banner")
          .map((farm) => (
            <section
              key={farm.slug}
              className="grid grid-cols-12 gap-gutter bg-[#6B1E2B] p-8 md:p-16 lg:p-24 items-center mb-section-gap reveal-up"
            >
              <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-bone-cream/60 mb-4">
                  Heritage Project
                </p>
                <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream mb-6">
                  {farm.name}
                </h2>
                <div className="border-b border-bone-cream/20 w-full mb-8" />
                {farm.quote && (
                  <p className="font-serif text-[18px] leading-7 text-bone-cream/80 mb-10 italic">
                    &ldquo;{farm.quote}&rdquo;
                  </p>
                )}
                {farm.ctaHref && (
                  <Link
                    href={farm.ctaHref}
                    className="inline-block bg-bone-cream text-[#6B1E2B] px-10 py-4 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-architectural-gold hover:text-charcoal-surface transition-all"
                  >
                    {farm.ctaLabel ?? "View Project Details"}
                  </Link>
                )}
              </div>
              <div className="col-span-12 md:col-span-7 order-1 md:order-2">
                <div className="aspect-square relative overflow-hidden bg-black/20">
                  <Image
                    src={farm.image}
                    alt={farm.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </div>
            </section>
          ))}

        {/* Delaire Graff — split with meta */}
        {wineFarmCases
          .filter((f) => f.layout === "split-right")
          .map((farm) => (
            <section
              key={farm.slug}
              className="grid grid-cols-12 gap-gutter group items-center mb-section-gap reveal-up"
            >
              <div className="col-span-12 md:col-span-7 overflow-hidden">
                <div className="aspect-[16/9] bg-surface-container relative overflow-hidden">
                  <Image
                    src={farm.image}
                    alt={farm.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-16 mt-8 md:mt-0">
                <div className="border-t border-architectural-gold w-24 mb-8" />
                <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] text-bone-cream mb-6">
                  {farm.name}
                </h2>
                <p className="font-serif text-base text-on-surface-variant mb-8 leading-relaxed text-justify">
                  {farm.description}
                </p>
                {farm.meta && (
                  <div className="flex flex-col gap-4 border-l border-architectural-gold/30 pl-6 mb-8">
                    {farm.meta.map((item) => (
                      <div key={item.label}>
                        <p className="font-mono text-[10px] tracking-widest uppercase text-architectural-gold">
                          {item.label}
                        </p>
                        <p className="font-serif text-base text-bone-cream">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}
                {farm.ctaHref && (
                  <Link
                    href={farm.ctaHref}
                    className="inline-flex font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold hover:text-bone-cream transition-colors"
                  >
                    View Full Case Study →
                  </Link>
                )}
              </div>
            </section>
          ))}

        {/* Coming soon */}
        <section className="pt-8 md:pt-section-gap reveal-up">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-[28px] md:text-[32px] text-bone-cream mb-4">
              The Future of Heritage
            </h3>
            <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
              Upcoming Installations &amp; Collaborations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWineFarms.map((farm) => (
              <div key={farm.name} className="group">
                <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                  <Image
                    src={farm.image}
                    alt={farm.alt}
                    fill
                    className="object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-[50%] group-hover:brightness-90 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-charcoal-surface/40 backdrop-blur-sm">
                    <span className="font-mono text-[12px] font-medium tracking-[0.3em] uppercase text-bone-cream">
                      {farm.season}
                    </span>
                  </div>
                </div>
                <h4 className="font-serif text-[24px] text-bone-cream mb-2">{farm.name}</h4>
                <p className="font-mono text-[10px] tracking-widest uppercase text-architectural-gold">
                  {farm.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-section-gap text-center reveal-up">
          <h2 className="font-serif text-[32px] md:text-[48px] text-bone-cream mb-4 max-w-2xl mx-auto">
            Is your wine farm missing from this list?
          </h2>
          <p className="font-serif text-[18px] text-on-surface-variant mb-10 max-w-xl mx-auto">
            We&rsquo;d love to hear from you — whether it&rsquo;s a new cellar, tasting room, or
            courtyard project.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-block bg-architectural-gold text-charcoal-surface px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-bone-cream transition-colors"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </>
  );
}
