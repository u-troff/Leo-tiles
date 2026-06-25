import { Phone, CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-clay-900 border-t border-white/10 shadow-[0_-4px_16px_rgba(0,0,0,0.25)]">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 text-white hover:bg-clay-800 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium text-sm">Phone</span>
        </a>
        <a
          href="/get-a-quote"
          className="flex items-center justify-center gap-2 py-3 text-white hover:bg-clay-800 transition-colors"
        >
          <CalendarDays className="w-5 h-5" />
          <span className="font-medium text-sm">Get a Quote</span>
        </a>
      </div>
    </div>
  );
}
