import Link from "next/link";
import { MapPin } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";
import { serviceAreas } from "@/data/service-areas";

export default function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Service Areas" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-4 leading-tight">
            We Supply{" "}
            <em className="not-italic text-rust-500">Across South Africa</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From our kiln in Cape Town to your project anywhere in the country — handmade tiles
            delivered with care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-stone-300">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="group bg-stone-100 p-5 text-center hover:bg-white transition-colors"
            >
              <MapPin className="w-5 h-5 text-rust-500 mx-auto mb-2.5 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-clay-800 text-sm group-hover:text-rust-500 transition-colors">
                {area.city}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">{area.state}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
