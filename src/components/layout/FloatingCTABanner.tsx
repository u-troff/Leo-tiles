import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function FloatingCTABanner() {
  return (
    <section className="relative bg-clay-900 py-14 lg:py-20 overflow-hidden">
      {/* Decorative diagonal accent */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-rust-500/10 pointer-events-none"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-rust-500" />
          <span className="text-rust-400 text-[11px] font-semibold uppercase tracking-[0.22em]">
            Custom Orders Welcome
          </span>
          <div className="h-px w-8 bg-rust-500" />
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
          Ready to start your tile order?
        </h2>
        <p className="text-white/60 text-base mb-10 max-w-lg mx-auto">
          Give us a call and we will be more than happy to talk through your project.
        </p>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-2.5 bg-rust-500 text-white px-10 py-4 font-semibold text-base hover:bg-rust-600 transition-all duration-200 shadow-xl hover:shadow-rust-900/30 hover:-translate-y-0.5"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
