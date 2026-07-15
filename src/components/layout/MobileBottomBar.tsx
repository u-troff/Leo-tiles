import { Phone, PenLine } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-charcoal-ash border-t border-warm-linen/10">
      <div className="grid grid-cols-2 divide-x divide-warm-linen/10">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 text-warm-linen hover:bg-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="label-caps text-[11px]">Call</span>
        </a>
        <a
          href="/get-a-quote"
          className="flex items-center justify-center gap-2 py-4 text-warm-linen bg-clay-deep hover:bg-primary transition-colors"
        >
          <PenLine className="w-4 h-4" />
          <span className="label-caps text-[11px]">Request Quote</span>
        </a>
      </div>
    </div>
  );
}
