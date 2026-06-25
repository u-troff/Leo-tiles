import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function TopBar() {
  return (
    <div className="bg-clay-900 text-white/80 text-xs py-2.5 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Left: tagline */}
        <div className="flex items-center gap-2">
          <span className="font-medium text-white/90 tracking-wide">
            50+ Years of Handmade Terracotta · Cape Town, South Africa
          </span>
        </div>

        {/* Right: contact */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-rust-400 transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-rust-400 transition-colors font-medium text-white/90"
          >
            <Phone className="w-3 h-3" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
