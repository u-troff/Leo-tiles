import Link from "next/link";
import { MapPin } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { serviceAreas } from "@/data/service-areas";

export default function ServiceAreas() {
  return (
    <section className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow label="Service Areas" className="text-center" />
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-6">
            We supply across South Africa.
          </h2>
          <p className="text-secondary leading-relaxed">
            From our kiln in Cape Town to your project anywhere in the country, handmade tiles
            delivered with care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-mortar-gray/25 border border-mortar-gray/25">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="group bg-warm-linen p-8 text-center hover:bg-sand-bone transition-colors"
            >
              <MapPin className="w-5 h-5 text-clay-deep mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-display text-lg text-charcoal-ash group-hover:text-clay-deep transition-colors">
                {area.city}
              </p>
              <p className="label-caps text-[10px] text-mortar-gray mt-1">{area.state}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
