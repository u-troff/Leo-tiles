import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCollections } from "@/data/collections";
import { cn } from "@/lib/utils";

export default function CollectionGrid() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {productCollections.map((card, index) => (
          <div
            key={card.name}
            className={cn(
              "group relative overflow-hidden bg-surface-container-low border-t border-architectural-gold/30 reveal-up",
              card.offset && "md:mt-24"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-[28px] md:text-[32px] leading-tight text-bone-cream mb-4">
                {card.name}
              </h3>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold hover:text-bone-cream transition-colors"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
