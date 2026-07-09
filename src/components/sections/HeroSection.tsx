import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative h-[820px] overflow-hidden bg-clay-900">
      {/* ── Crossfading Ken Burns background ──────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/design/pool-deck.jpg"
          alt="Poolside deck laid with handmade terracotta tiles"
          fill
          priority
          className="object-cover"
          style={{ animation: "kenburns 22s ease-in-out infinite alternate, heroFade1 16s ease-in-out infinite" }}
        />
        <Image
          src="/images/design/terrace.jpg"
          alt="Garden terrace laid with handmade terracotta tiles"
          fill
          className="object-cover"
          style={{ animation: "kenburns 22s ease-in-out infinite alternate-reverse, heroFade2 16s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,13,8,0.35) 0%, rgba(20,13,8,0) 30%, rgba(20,13,8,0.15) 55%, rgba(20,13,8,0.78) 100%)",
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="absolute left-4 right-4 lg:left-14 lg:right-14 bottom-10 lg:bottom-16">
        <div className="text-stone-100 text-[13.5px] uppercase tracking-[0.2em] font-semibold mb-4">
          50+ Years of Craft · Family-Owned
        </div>
        <h1 className="text-stone-50 text-[40px] lg:text-[58px] font-bold leading-[1.08] tracking-[-0.5px] max-w-[760px]">
          Turn your house into a <span className="text-rust-300">picturesque home</span>.
        </h1>
        <p className="text-stone-100/90 text-base lg:text-lg font-medium leading-snug mt-4 mb-8 max-w-[620px]">
          South Africa&rsquo;s original handmade terracotta tile makers — crafted by hand since 1975.
        </p>
        <div className="flex flex-wrap items-center gap-6 lg:gap-10">
          <Button href="/get-a-quote" variant="secondary" size="lg" className="!bg-stone-50 !text-clay-900 hover:!bg-stone-100">
            Get a Quote
          </Button>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-bold text-[15.5px] text-stone-50 border-b-2 border-stone-50 pb-1"
          >
            Call Now →
          </a>
          <div className="flex gap-8 ml-1">
            {[
              { value: `${siteConfig.ratings.google}★`, label: "Google Rating" },
              { value: `${siteConfig.ratings.reviewCount}+`, label: "Verified Reviews" },
              { value: "Est. 1975", label: "Years of Craft" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-stone-50 text-[22px] font-bold leading-none">{stat.value}</div>
                <div className="text-stone-200 text-[12.5px] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
