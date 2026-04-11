import Link from "next/link";
import { MapPin } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";
import { serviceAreas } from "@/data/service-areas";

export default function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Service Areas" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            Proudly Serving{" "}
            <em className="not-italic text-orange-500">{siteConfig.region}</em> Communities
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From {serviceAreas[0]?.city} to {serviceAreas[serviceAreas.length - 1]?.city}, our
            team provides reliable plumbing services across the entire {siteConfig.region} area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-cream-300">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="group bg-cream-100 p-5 text-center hover:bg-white transition-colors"
            >
              <MapPin className="w-5 h-5 text-orange-500 mx-auto mb-2.5 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-navy-800 text-sm group-hover:text-orange-500 transition-colors">
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
