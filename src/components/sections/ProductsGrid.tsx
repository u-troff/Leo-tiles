import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { residentialServices } from "@/data/services-residential";

// Editorial "showroom gallery" imagery paired to each product.
const productImages = [
  "/images/design/courtyard.jpg",
  "/images/design/kitchen.jpg",
  "/images/design/dining-room-2.jpg",
  "/images/design/terrace.jpg",
  "/images/design/dining-room.jpg",
  "/images/design/herringbone-install.jpg",
];

export default function ProductsGrid() {
  return (
    <section id="products" className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <Eyebrow label="Signature Collection" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash">
              Timeless geometries for modern architecture.
            </h2>
          </div>
          <Link
            href="/residential"
            className="group inline-flex items-center label-caps text-clay-deep shrink-0"
          >
            View Full Catalog
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {residentialServices.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
              <div className="aspect-[4/3] bg-sand-bone overflow-hidden relative mb-7">
                <Image
                  src={productImages[i % productImages.length]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal-ash/0 group-hover:bg-charcoal-ash/10 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl lg:text-[28px] text-charcoal-ash mb-2 group-hover:text-clay-deep transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary text-[15px] leading-relaxed max-w-md">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
