import Image from "next/image";

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
    label: "Clay Production Process",
    category: "Craft",
    image: "/images/design/herringbone-install.jpg",
    alt: "Herringbone terracotta tiles being hand-laid on site",
    span: "lg:col-span-2",
  },
];

export default function WorkGallery() {
  return (
    <section className="pt-16 lg:pt-24 pb-0 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-clay-900">Our work speaks for itself</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-3">
          {galleryItems.map((item) => (
            <div key={item.id} className={`relative overflow-hidden h-[220px] lg:h-auto ${item.span}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 text-stone-50">
                <div className="text-[11.5px] uppercase tracking-wider opacity-85">{item.category}</div>
                <div className="text-[15.5px] font-bold">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
