import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function FloatingCTABanner() {
  return (
    <section className="relative bg-primary text-warm-linen overflow-hidden">
      {/* Paper-grain texture, tonal not shadowed */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-5 py-24 lg:py-32 text-center">
        <span className="label-caps text-warm-linen/70 mb-6 block">Custom Orders Welcome</span>
        <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-[1.1]">
          Ready to start your tile order?
        </h2>
        <p className="text-warm-linen/85 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Our artisans are ready to bring handcrafted warmth to your next project. Request a custom quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/get-a-quote"
            className="bg-warm-linen text-primary label-caps px-10 py-5 hover:bg-sand-bone transition-colors"
          >
            Request a Quote
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="border border-warm-linen text-warm-linen label-caps px-10 py-5 hover:bg-warm-linen hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
