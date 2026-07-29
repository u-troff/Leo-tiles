export type WineFarmLayout = "split-left" | "heritage-banner" | "split-right";

export interface WineFarmCase {
  slug: string;
  name: string;
  layout: WineFarmLayout;
  image: string;
  alt: string;
  description: string;
  quote?: string;
  tags?: string[];
  rating?: number;
  meta?: { label: string; value: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}

export interface UpcomingWineFarm {
  name: string;
  subtitle: string;
  season: string;
  image: string;
  alt: string;
}

export const wineFarmCases: WineFarmCase[] = [
  {
    slug: "la-colombe",
    name: "La Colombe",
    layout: "split-left",
    image: "/images/design/kitchen.jpg",
    alt: "La Colombe kitchen floor in handmade terracotta",
    description:
      "Our collaboration with La Colombe focused on durability without sacrificing elegance. The selection features our Signature Graphite Slab, providing a non-slip, high-impact surface that mirrors the restaurant's commitment to precision.",
    rating: 5,
    tags: ["TRAVERTINE", "BESPOKE CUT"],
  },
  {
    slug: "val-dor-estate",
    name: "Val d'Or Estate",
    layout: "heritage-banner",
    image: "/images/design/herringbone-install.jpg",
    alt: "Val d'Or cellar with herringbone terracotta",
    description: "",
    quote:
      "The tiles brought a sense of grounded luxury to our cellar door that we didn't know was possible.",
    ctaHref: "/get-a-quote",
    ctaLabel: "View Project Details",
  },
  {
    slug: "delaire-graff",
    name: "Delaire Graff",
    layout: "split-right",
    image: "/images/design/pool-deck.jpg",
    alt: "Delaire Graff Estate terrace overlooking the mountains",
    description:
      "The 'Jewel of the Winelands' demanded a surface that could compete with the horizon. Our Batavian Collection was chosen for its light-reflective warmth and seamless jointing system across the infinity terrace.",
    meta: [
      { label: "Installation Type", value: "Infinity Terrace" },
      { label: "Material", value: "Batavian Collection" },
    ],
    ctaHref: "/work-gallery/delaire-graff",
  },
];

export const upcomingWineFarms: UpcomingWineFarm[] = [
  {
    name: "Boschendal Manor",
    subtitle: "Kitchen & Cellar Renovation",
    season: "Autumn 2025",
    image: "/images/design/terrace.jpg",
    alt: "Upcoming Boschendal Manor installation",
  },
  {
    name: "Tokara Winery",
    subtitle: "Gallery Walkway",
    season: "Winter 2025",
    image: "/images/design/dining-room.jpg",
    alt: "Upcoming Tokara Winery installation",
  },
  {
    name: "Jordan Estate",
    subtitle: "Exterior Decking",
    season: "Spring 2026",
    image: "/images/design/courtyard.jpg",
    alt: "Upcoming Jordan Estate installation",
  },
];
