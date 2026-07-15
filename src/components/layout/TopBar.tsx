import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-charcoal-ash text-warm-linen/70">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-2.5 flex items-center justify-between gap-4">
        <span className="label-caps text-[10.5px] text-warm-linen/60">
          Handcrafted in Cape Town since {siteConfig.establishedYear}
        </span>

        <div className="flex items-center gap-7">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 label-caps text-[10.5px] hover:text-kiln-glow transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 label-caps text-[10.5px] text-warm-linen hover:text-kiln-glow transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
