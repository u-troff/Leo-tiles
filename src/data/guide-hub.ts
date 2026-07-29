export type GuideHubSection = "inspiration" | "technical" | "reference";

export interface GuideHubCard {
  title: string;
  description: string;
  image: string;
  badge: string;
  href?: string;
  section: GuideHubSection;
}

export const guideHubCards: GuideHubCard[] = [
  {
    section: "inspiration",
    title: "Pairing terracotta with a Cape courtyard garden",
    description: "A homeowner's guide to choosing tone and pattern for an outdoor room.",
    image: "/images/design/courtyard.jpg",
    badge: "Homeowners",
    href: "/guides/cape-courtyard-garden",
  },
  {
    section: "inspiration",
    title: "Kitchen floors that only get better with age",
    description: "Why a lived-in patina is a feature of terracotta, not a flaw.",
    image: "/images/design/kitchen.jpg",
    badge: "Homeowners",
    href: "/guides/kitchen-floors-patina",
  },
  {
    section: "inspiration",
    title: "Poolside decks: tile for bare feet and wet edges",
    description: "What to look for when choosing a deck tile that stays comfortable underfoot.",
    image: "/images/design/pool-deck.jpg",
    badge: "Homeowners",
    href: "/guides/poolside-decks",
  },
  {
    section: "inspiration",
    title: "Living with natural tone variation",
    description: "Why no two handmade tiles fire exactly the same colour, and how to plan for it.",
    image: "/images/design/dining-room-2.jpg",
    badge: "Homeowners",
    href: "/guides/natural-tone-variation",
  },
  {
    section: "technical",
    title: "Choosing the right joint width for outdoor terracotta",
    description: "Why we recommend a 25mm joint on our 300×300mm tiles, and when to vary it.",
    image: "/images/design/herringbone-install.jpg",
    badge: "Installers",
    href: "/guides/joint-width-for-outdoor-terracotta",
  },
  {
    section: "technical",
    title: "Adhesive & bedding compatibility for terracotta",
    description: "Substrate prep and adhesive choice for a handmade, size-variable tile.",
    image: "/images/design/stacked-tiles.jpg",
    badge: "Installers",
    href: "/guides/adhesive-bedding-compatibility",
  },
  {
    section: "technical",
    title: "Working out coverage: tiles per square metre",
    description:
      "Roughly 9 tiles per m² at 300×300mm with a 25mm joint, and why we sell by the tile, not the box.",
    image: "/images/design/tile-texture.jpg",
    badge: "Installers",
    href: "/guides/coverage-tiles-per-metre",
  },
  {
    section: "technical",
    title: "Sealing and maintaining a terracotta floor",
    description: "A maintenance schedule that keeps colour and finish consistent over years of use.",
    image: "/images/design/dining-room.jpg",
    badge: "Installers",
    href: "/guides/sealing-and-maintaining",
  },
  {
    section: "reference",
    title: "Batavian Collection",
    description: "Our signature hand-shaped range, sizes, tones and laying guide.",
    image: "/images/design/tile-texture.jpg",
    badge: "Product",
    href: "/products/batavian-collection",
  },
  {
    section: "reference",
    title: "Dutch Klompie Pavers",
    description: "Dense small-format pavers for courtyards, paths and thresholds.",
    image: "/images/design/herringbone-install.jpg",
    badge: "Product",
    href: "/products/dutch-klompie-pavers",
  },
  {
    section: "reference",
    title: "Hexagon Terracotta",
    description: "Geometric handmade hexagons for statement floors and feature walls.",
    image: "/images/design/courtyard.jpg",
    badge: "Product",
    href: "/products/hexagon-terracotta",
  },
];

export const guideHubIndex = [
  {
    id: "inspiration",
    label: "Inspiration & Application",
    subtitle: "For homeowners planning a space",
  },
  {
    id: "technical",
    label: "Technical & How-To",
    subtitle: "For installers and site teams",
  },
  {
    id: "reference",
    label: "Product Reference",
    subtitle: "Specs and details for each range",
  },
] as const;
