import { Star, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-white/80 text-xs py-2.5 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Left: trust badge */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
            ))}
          </div>
          <span className="font-medium text-white/90 tracking-wide">
            {siteConfig.ratings.reviewCount}+ Five-Star Reviews
          </span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span className="hidden sm:inline text-white/60">License #{siteConfig.license}</span>
        </div>

        {/* Right: contact */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors font-medium text-white/90"
          >
            <Phone className="w-3 h-3" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
