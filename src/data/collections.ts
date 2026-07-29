export interface CollectionCard {
  name: string;
  href: string;
  image: string;
  alt: string;
  offset?: boolean;
}

export const productCollections: CollectionCard[] = [
  {
    name: "Batavian Floor Tiles",
    href: "/products/batavian-collection",
    image: "/images/design/tile-texture.jpg",
    alt: "Close-up of handmade Batavian terracotta floor tiles",
  },
  {
    name: "Dutch Klompie Pavers",
    href: "/products/dutch-klompie-pavers",
    image: "/images/design/herringbone-install.jpg",
    alt: "Dutch klompie pavers laid in a geometric pattern",
    offset: true,
  },
  {
    name: "Hexagon Terracotta",
    href: "/products/hexagon-terracotta",
    image: "/images/design/courtyard.jpg",
    alt: "Hexagon terracotta tiles fitted in a courtyard",
  },
  {
    name: "Project Accessories",
    href: "/products/project-accessories",
    image: "/images/design/stacked-tiles.jpg",
    alt: "Curated project accessories and custom tile cuts",
    offset: true,
  },
];
