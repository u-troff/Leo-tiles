export interface ProductSpec {
  label: string;
  value: string;
}

export interface ToneOption {
  hex: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  heroCaption: string;
  heroImage: string;
  galleryImages: { src: string; alt: string }[];
  textureImage: string;
  description: string;
  specs: ProductSpec[];
  toneOptions: ToneOption[];
  relatedGuideSlug?: string;
}

export const products: Product[] = [
  {
    slug: "batavian-collection",
    name: "Batavian Collection",
    heroCaption: "Poolside deck, Constantia, laid in the Batavian Collection",
    heroImage: "/images/design/pool-deck.jpg",
    galleryImages: [
      {
        src: "/images/design/courtyard.jpg",
        alt: "Courtyard installation in the Batavian Collection",
      },
      {
        src: "/images/design/dining-room.jpg",
        alt: "Dining room installation in the Batavian Collection",
      },
      {
        src: "/images/design/kitchen.jpg",
        alt: "Kitchen installation in the Batavian Collection",
      },
    ],
    textureImage: "/images/design/tile-texture.jpg",
    description:
      "Our signature hand-shaped tile, mixed, pressed and edged by hand, then fired to a natural terracotta red with the tonal variation you'd expect from real clay. Suited to floors, decks and pool surrounds, indoors and out.",
    specs: [
      { label: "Sizes", value: "300×300mm standard · custom sizes on request" },
      { label: "Thickness", value: "≈ 25mm" },
      { label: "Recommended joint", value: "25mm outdoors · 10–15mm indoors (pre-sorted)" },
      { label: "Grout", value: "Sand-cement or flexible grout for wide joints" },
      { label: "Coverage", value: "≈ 9 tiles per m² at 300×300mm, 25mm joint" },
    ],
    toneOptions: [
      { hex: "#b5502f", label: "Natural red" },
      { hex: "#7a3a24", label: "Dark fired" },
      { hex: "#96603f", label: "Mid tone" },
      { hex: "#c98a5e", label: "Light sand-fired" },
    ],
    relatedGuideSlug: "joint-width-for-outdoor-terracotta",
  },
];
