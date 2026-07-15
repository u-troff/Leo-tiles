import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Guide Hub",
  description: `Fifty years of handmade terracotta know-how from ${siteConfig.businessName}, inspiration for homeowners, technical guides for installers, and product reference sheets.`,
};

interface HubCard {
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeClass: string;
  href?: string;
}

const inspirationCards: HubCard[] = [
  {
    title: "Pairing terracotta with a Cape courtyard garden",
    description: "A homeowner's guide to choosing tone and pattern for an outdoor room.",
    image: "/images/design/courtyard.jpg",
    badge: "Homeowners",
    badgeClass: "bg-rust-500 text-stone-50",
  },
  {
    title: "Kitchen floors that only get better with age",
    description: "Why a lived-in patina is a feature of terracotta, not a flaw.",
    image: "/images/design/kitchen.jpg",
    badge: "Homeowners",
    badgeClass: "bg-rust-500 text-stone-50",
  },
  {
    title: "Poolside decks: tile for bare feet and wet edges",
    description: "What to look for when choosing a deck tile that stays comfortable underfoot.",
    image: "/images/design/pool-deck.jpg",
    badge: "Homeowners",
    badgeClass: "bg-rust-500 text-stone-50",
  },
  {
    title: "Living with natural tone variation",
    description: "Why no two handmade tiles fire exactly the same colour, and how to plan for it.",
    image: "/images/design/dining-room-2.jpg",
    badge: "Homeowners",
    badgeClass: "bg-rust-500 text-stone-50",
  },
];

const technicalCards: HubCard[] = [
  {
    title: "Choosing the right joint width for outdoor terracotta",
    description: "Why we recommend a 25mm joint on our 300×300mm tiles, and when to vary it.",
    image: "/images/design/herringbone-install.jpg",
    badge: "Installers",
    badgeClass: "bg-clay-900 text-stone-50",
    href: "/guides/joint-width-for-outdoor-terracotta",
  },
  {
    title: "Adhesive & bedding compatibility for terracotta",
    description: "Substrate prep and adhesive choice for a handmade, size-variable tile.",
    image: "/images/design/stacked-tiles.jpg",
    badge: "Installers",
    badgeClass: "bg-clay-900 text-stone-50",
  },
  {
    title: "Working out coverage: tiles per square metre",
    description: "Roughly 9 tiles per m² at 300×300mm with a 25mm joint, and why we sell by the tile, not the box.",
    image: "/images/design/tile-texture.jpg",
    badge: "Installers",
    badgeClass: "bg-clay-900 text-stone-50",
  },
  {
    title: "Sealing and maintaining a terracotta floor",
    description: "A maintenance schedule that keeps colour and finish consistent over years of use.",
    image: "/images/design/dining-room.jpg",
    badge: "Installers",
    badgeClass: "bg-clay-900 text-stone-50",
  },
];

const productCards: HubCard[] = [
  {
    title: "Batavian Collection",
    description: "Our signature hand-shaped range, sizes, tones and laying guide.",
    image: "/images/design/tile-texture.jpg",
    badge: "Product",
    badgeClass: "bg-stone-600 text-stone-50",
    href: "/products/batavian-collection",
  },
  {
    title: "Standard 300×300mm",
    description: "Our most-ordered format, indoors and out, full specification sheet.",
    image: "/images/design/terrace.jpg",
    badge: "Product",
    badgeClass: "bg-stone-600 text-stone-50",
  },
  {
    title: "Herringbone-cut",
    description: "Pre-cut for herringbone laying patterns, batten sizes and offcut ratio.",
    image: "/images/design/herringbone-install.jpg",
    badge: "Product",
    badgeClass: "bg-stone-600 text-stone-50",
  },
];

function HubCardItem({ card }: { card: HubCard }) {
  const inner = (
    <>
      <div className="relative h-[200px] overflow-hidden mb-4">
        <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
        <span className={`absolute top-3 left-3 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-sm ${card.badgeClass}`}>
          {card.badge}
        </span>
      </div>
      <div className="text-lg font-semibold leading-snug mb-2 text-clay-900">{card.title}</div>
      <div className="text-sm leading-relaxed text-stone-700">{card.description}</div>
    </>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="block">
        {inner}
      </Link>
    );
  }
  return <div>{inner}</div>;
}

export default function GuideHubPage() {
  return (
    <>
      <div className="px-4 max-w-7xl mx-auto pt-16 lg:pt-20 pb-8">
        <Eyebrow label="Resource Centre" />
        <h1 className="text-3xl lg:text-5xl font-bold text-clay-900 mb-5 max-w-2xl leading-tight">Guide hub</h1>
        <p className="text-stone-700 text-lg leading-relaxed max-w-2xl">
          Whether you&rsquo;re choosing a floor for your home or laying one on site, these are the
          questions we get asked most, answered plainly.
        </p>
      </div>

      <section className="px-4 max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-clay-900 mb-1.5">Inspiration &amp; application</h2>
        <p className="text-stone-500 text-sm mb-8">For homeowners planning a space</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirationCards.map((card) => (
            <HubCardItem key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="px-4 bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-clay-900 mb-1.5">Technical &amp; how-to guides</h2>
          <p className="text-stone-600 text-sm mb-8">For installers and site teams</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCards.map((card) => (
              <HubCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 max-w-7xl mx-auto py-12 pb-20">
        <h2 className="text-2xl font-bold text-clay-900 mb-1.5">Product reference</h2>
        <p className="text-stone-500 text-sm mb-8">Specs and details for each range</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCards.map((card) => (
            <HubCardItem key={card.title} card={card} />
          ))}
        </div>
      </section>
    </>
  );
}
