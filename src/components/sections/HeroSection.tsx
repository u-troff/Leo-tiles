import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-charcoal-ash">
      {/* ── Crossfading Ken Burns background ──────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/design/pool-deck.jpg"
          alt="Poolside deck laid with handmade terracotta tiles"
          fill
          priority
          className="object-cover"
          style={{ animation: "kenburns 24s ease-in-out infinite alternate, heroFade1 18s ease-in-out infinite" }}
        />
        <Image
          src="/images/design/terrace.jpg"
          alt="Garden terrace laid with handmade terracotta tiles"
          fill
          className="object-cover"
          style={{ animation: "kenburns 24s ease-in-out infinite alternate-reverse, heroFade2 18s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,18,16,0.45) 0%, rgba(23,18,16,0.05) 35%, rgba(23,18,16,0.35) 65%, rgba(23,18,16,0.88) 100%)",
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 pb-16 lg:pb-24">
        <div className="max-w-4xl">
          <span className="label-caps text-kiln-glow mb-6 block animate-fade-in-up">
            50 Years of Craft · Turned by Hand
          </span>
          <h1 className="font-display text-warm-linen text-5xl md:text-7xl lg:text-[84px] leading-[1.04] mb-8 animate-fade-in-up delay-100">
            Architectural
            <br />
            Heritage in Clay.
          </h1>
          <p className="text-warm-linen/85 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
            {siteConfig.tagline}.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 lg:gap-10 animate-fade-in-up delay-300">
            <a
              href="/get-a-quote"
              className="group inline-flex items-center bg-clay-deep text-warm-linen label-caps px-10 py-5 hover:bg-primary transition-colors"
            >
              Explore the Collection
              <ArrowRight className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="label-caps text-warm-linen border-b border-warm-linen/60 pb-1.5 hover:border-kiln-glow hover:text-kiln-glow transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 lg:gap-14 mt-12 pt-10 border-t border-warm-linen/15 animate-fade-in-up delay-400">
            {[
              { value: `${siteConfig.ratings.google}★`, label: "Google Rating" },
              { value: `${siteConfig.ratings.reviewCount}+`, label: "Verified Reviews" },
              { value: `Est. ${siteConfig.establishedYear}`, label: "Years of Craft" },
              { value: `${siteConfig.staffCount}+`, label: "Expert Artisans" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-warm-linen text-3xl lg:text-4xl leading-none">{stat.value}</div>
                <div className="label-caps text-warm-linen/60 text-[10px] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
