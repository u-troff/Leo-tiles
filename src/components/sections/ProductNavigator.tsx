import Link from "next/link";
import Image from "next/image";

const surfaces = [
  {
    name: "Batavian Floor Tiles",
    href: "/products/batavian-collection",
    image: "/images/design/tile-texture.jpg",
    objectPosition: "center",
  },
  {
    name: "Dutch Klompie Pavers",
    href: "/products/dutch-klompie-pavers",
    image: "/images/design/herringbone-install.jpg",
    objectPosition: "center",
  },
  {
    name: "Hexagon Terracotta",
    href: "/products/hexagon-terracotta",
    image: "/images/design/courtyard.jpg",
    objectPosition: "center",
  },
  {
    name: "Project Accessories",
    href: "/products/project-accessories",
    image: "/images/design/stacked-tiles.jpg",
    objectPosition: "center",
  },
];

export default function ProductNavigator() {
  return (
    <section className="bg-charcoal-surface py-section-gap px-margin-mobile md:px-margin-desktop reveal-up">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-architectural-gold/20 pb-8 gap-6">
          <div>
            <p className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-architectural-gold mb-2">
              Portfolio
            </p>
            <h2 className="font-serif text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] text-primary">
              Select Your Surface
            </h2>
          </div>
          <Link
            href="/residential"
            className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-on-surface hover:text-architectural-gold transition-colors mb-2"
          >
            Browse All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {surfaces.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative bg-surface-container-low p-10 border border-architectural-gold/10 hover:border-architectural-gold transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 mb-8 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ objectPosition: item.objectPosition }}
                  sizes="128px"
                />
              </div>
              <h3 className="font-serif text-[28px] leading-tight text-primary group-hover:text-architectural-gold transition-colors">
                {item.name}
              </h3>
              <span className="mt-6 font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-architectural-gold">
                View Details
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
