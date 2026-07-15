import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

const galleryItems = [
  {
    id: 1,
    label: "Batavian Floor Installation",
    category: "Residential",
    image: "/images/design/courtyard.jpg",
    alt: "Sunlit courtyard laid with handmade Batavian floor tiles",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    id: 2,
    label: "Kitchen Floor Detail",
    category: "Residential",
    image: "/images/design/kitchen.jpg",
    alt: "Modern kitchen with handmade terracotta floor tiles",
    span: "lg:col-span-3",
  },
  {
    id: 3,
    label: "Heritage Restoration",
    category: "Restoration",
    image: "/images/design/dining-room-2.jpg",
    alt: "Heritage dining room restored with terracotta flooring",
    span: "lg:col-span-3",
  },
  {
    id: 4,
    label: "Courtyard Klompies Paving",
    category: "Outdoor",
    image: "/images/design/terrace.jpg",
    alt: "Courtyard paved with handmade Klompies terracotta",
    span: "lg:col-span-2",
  },
  {
    id: 5,
    label: "Wine Estate Entrance",
    category: "Commercial",
    image: "/images/design/dining-room.jpg",
    alt: "Wine estate entrance with terracotta accents",
    span: "lg:col-span-2",
  },
  {
    id: 6,
    label: "Herringbone Detail",
    category: "Craft",
    image: "/images/design/herringbone-install.jpg",
    alt: "Herringbone terracotta tiles being hand-laid on site",
    span: "lg:col-span-2",
  },
];

export default function WorkGallery() {
  return (
    <section id="gallery" className="py-24 lg:py-40 bg-warm-linen overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <Eyebrow label="Work Gallery" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash">
              Our work speaks for itself.
            </h2>
          </div>
          <Link href="/work-gallery" className="group inline-flex items-center label-caps text-clay-deep shrink-0">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-4 lg:auto-rows-[300px]">
          {galleryItems.map((item) => (
            <div key={item.id} className={`group relative overflow-hidden h-[240px] lg:h-full ${item.span}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-ash/70 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 text-warm-linen">
                <div className="label-caps text-[10px] text-warm-linen/75">{item.category}</div>
                <div className="font-display text-xl mt-1">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
