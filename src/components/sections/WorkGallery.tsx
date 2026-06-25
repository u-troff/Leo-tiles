import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

const galleryItems = [
  {
    id: 1,
    label: "Batavian Floor Installation",
    category: "Residential",
    image: "https://images.pexels.com/photos/36100704/pexels-photo-36100704.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Terracotta pots on a handmade hexagonal tiled floor",
  },
  {
    id: 2,
    label: "Courtyard Klompies Paving",
    category: "Outdoor",
    image: "https://images.pexels.com/photos/15850464/pexels-photo-15850464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Red stucco courtyard with terracotta paving and arches",
  },
  {
    id: 3,
    label: "Hexagon Bathroom Feature",
    category: "Residential",
    image: "https://images.pexels.com/photos/34000185/pexels-photo-34000185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Modern bathroom with handmade hexagonal terracotta tiles",
  },
  {
    id: 4,
    label: "Heritage Restoration",
    category: "Restoration",
    image: "https://images.pexels.com/photos/35070273/pexels-photo-35070273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Colonial corridor with heritage terracotta brick flooring",
  },
  {
    id: 5,
    label: "Wine Estate Entrance",
    category: "Commercial",
    image: "https://images.pexels.com/photos/3873815/pexels-photo-3873815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Cape Town wine estate entrance with terracotta accents",
  },
  {
    id: 6,
    label: "Clay Production Process",
    category: "Craft",
    image: "https://images.pexels.com/photos/37827253/pexels-photo-37827253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Potter handling a ceramic kiln in the production studio",
  },
  {
    id: 7,
    label: "Kitchen Floor Detail",
    category: "Residential",
    image: "https://images.pexels.com/photos/19574327/pexels-photo-19574327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Modern kitchen with patterned terracotta floor tiles",
  },
  {
    id: 8,
    label: "Outdoor Seating Area",
    category: "Outdoor",
    image: "https://images.pexels.com/photos/13369906/pexels-photo-13369906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Terracotta urns and tiles on an outdoor patio seating area",
  },
];

const categoryColors: Record<string, string> = {
  Residential: "bg-rust-500",
  Commercial: "bg-clay-700",
  Outdoor: "bg-rust-700",
  Restoration: "bg-clay-500",
  Craft: "bg-rust-900",
};

export default function WorkGallery() {
  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Our Work" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-3 leading-tight">
            Our Work Speaks for Itself
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Browse real-world examples of our handmade terracotta — every tile reflects our
            commitment to authentic craft and lasting quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-300">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-clay-100 aspect-square cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-clay-900/0 group-hover:bg-clay-900/75 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className={`inline-block text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 mb-2 ${
                      categoryColors[item.category] ?? "bg-rust-500"
                    }`}
                  >
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
