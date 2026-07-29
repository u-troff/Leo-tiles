import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ProductsSampleCTA() {
  return (
    <section className="py-[100px] md:py-[160px] px-margin-mobile md:px-margin-desktop text-center bg-charcoal-surface reveal-up">
      <h2 className="font-serif text-[40px] leading-[1.1] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-12 max-w-4xl mx-auto">
        Experience the texture firsthand.
      </h2>
      <MagneticButton
        href="/get-a-quote"
        className="bg-bone-cream text-charcoal-surface px-12 py-6 font-mono text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-architectural-gold transition-colors"
      >
        Request a Bespoke Sample Kit
      </MagneticButton>
      <p className="mt-8 font-mono text-[10px] tracking-widest uppercase text-on-surface-variant">
        Or{" "}
        <Link href="/contact-us" className="text-architectural-gold hover:text-bone-cream transition-colors">
          talk to the makers
        </Link>
      </p>
    </section>
  );
}
