import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site-config";

export default function LegacyCTA() {
  return (
    <section className="relative py-section-gap px-margin-mobile md:px-margin-desktop text-center bg-charcoal-surface overflow-hidden border-t border-ink-stroke reveal-up">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.06]">
        <div className="scrolling-text font-serif text-[20vw] text-ink-stroke italic select-none">
          LEO TILES · HANDMADE SINCE {siteConfig.establishedYear} · FORGED IN FIRE · LEO TILES ·
          HANDMADE SINCE {siteConfig.establishedYear} · FORGED IN FIRE ·&nbsp;
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at center, #C5A059 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="font-mono text-[12px] font-medium tracking-[0.4em] uppercase text-architectural-gold mb-8">
          03 / Collaborate
        </p>
        <h2 className="font-serif text-[36px] leading-[42px] md:text-[84px] md:leading-[92px] font-medium tracking-[-0.02em] text-primary mb-12 md:mb-16">
          Start Your Legacy.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <MagneticButton
            href="/get-a-quote"
            className="bg-architectural-gold text-charcoal-surface px-12 md:px-16 py-5 md:py-6 font-mono text-[12px] md:text-[14px] font-medium tracking-widest uppercase hover:bg-bone-cream transition-colors"
          >
            Request a Consultation
          </MagneticButton>
          <MagneticButton
            href="/contact-us"
            className="border border-bone-cream text-bone-cream px-12 md:px-16 py-5 md:py-6 font-mono text-[12px] md:text-[14px] font-medium tracking-widest uppercase hover:bg-bone-cream hover:text-charcoal-surface transition-all"
          >
            Order Samples
          </MagneticButton>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
            Or reach us directly
          </span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-serif text-[28px] md:text-[32px] text-primary hover:text-architectural-gold border-b border-ink-stroke hover:border-architectural-gold pb-1 transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
