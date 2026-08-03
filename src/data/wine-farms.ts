export type WineRegion = "All" | "Stellenbosch" | "Franschhoek" | "Constantia" | "Paarl";
export type TileTypeFilter =
  | "All"
  | "Travertine"
  | "Marble"
  | "Granite"
  | "Terracotta"
  | "Slate";

export interface FeaturedWineEstate {
  slug: string;
  name: string;
  layout: "image-left" | "text-left";
  image: string;
  alt: string;
  description: string;
  rating?: number;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: { label: string; value: string }[];
}

export interface GuildEstate {
  slug: string;
  name: string;
  location: WineRegion;
  tileType: Exclude<TileTypeFilter, "All">;
  image: string;
  alt: string;
}

export interface WineFarmDetail {
  slug: string;
  name: string;
  fullTitle: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  architect: string;
  year: string;
  tileSeries: string;
  location: string;
  brief: string;
  solution: string;
  solutionThumbs: { src: string; alt: string }[];
  gallery: { src: string; alt: string }[];
}

export const featuredWineEstates: FeaturedWineEstate[] = [
  {
    slug: "la-colombe",
    name: "La Colombe",
    layout: "image-left",
    image: "/images/design/kitchen.jpg",
    alt: "La Colombe kitchen with large-format floor tiles",
    description:
      "Our collaboration with La Colombe focused on durability without sacrificing elegance. The selection features our Signature Graphite Slab, providing a non-slip, high-impact surface that mirrors the restaurant's commitment to precision.",
    rating: 5,
    primaryCta: { label: "Learn More", href: "/wine-farms/la-colombe" },
    secondaryCta: { label: "Request Info", href: "/contact-us" },
  },
  {
    slug: "delaire-graff",
    name: "Delaire Graff",
    layout: "text-left",
    image: "/images/design/pool-deck.jpg",
    alt: "Delaire Graff Estate infinity terrace overlooking the valley",
    description:
      "The 'Jewel of the Winelands' demanded a surface that could compete with the horizon. Our Imperial Marble range was chosen for its light-reflective properties and seamless jointing system.",
    meta: [
      { label: "Installation Type", value: "Infinity Terrace" },
      { label: "Material", value: "Imperial Carrara 1200×1200mm" },
    ],
    primaryCta: { label: "View Project", href: "/wine-farms/delaire-graff" },
  },
];

export const wineRegions: WineRegion[] = [
  "All",
  "Stellenbosch",
  "Franschhoek",
  "Constantia",
  "Paarl",
];

export const tileTypeFilters: TileTypeFilter[] = [
  "All",
  "Travertine",
  "Marble",
  "Granite",
  "Terracotta",
  "Slate",
];

export const guildEstates: GuildEstate[] = [
  {
    slug: "kanonkop",
    name: "Kanonkop",
    location: "Stellenbosch",
    tileType: "Terracotta",
    image: "/images/design/terrace.jpg",
    alt: "Kanonkop estate terrace paving",
  },
  {
    slug: "meerlust",
    name: "Meerlust",
    location: "Stellenbosch",
    tileType: "Travertine",
    image: "/images/design/courtyard.jpg",
    alt: "Meerlust courtyard installation",
  },
  {
    slug: "groot-constantia",
    name: "Groot Constantia",
    location: "Constantia",
    tileType: "Marble",
    image: "/images/design/pool-deck.jpg",
    alt: "Groot Constantia outdoor terrace",
  },
  {
    slug: "spier",
    name: "Spier",
    location: "Stellenbosch",
    tileType: "Slate",
    image: "/images/design/dining-room.jpg",
    alt: "Spier tasting pavilion flooring",
  },
  {
    slug: "boschendal",
    name: "Boschendal",
    location: "Franschhoek",
    tileType: "Terracotta",
    image: "/images/design/herringbone-install.jpg",
    alt: "Boschendal manor walkway",
  },
  {
    slug: "tokara",
    name: "Tokara",
    location: "Stellenbosch",
    tileType: "Granite",
    image: "/images/design/kitchen.jpg",
    alt: "Tokara gallery walkway",
  },
  {
    slug: "jordan",
    name: "Jordan Estate",
    location: "Stellenbosch",
    tileType: "Marble",
    image: "/images/design/dining-room-2.jpg",
    alt: "Jordan Estate exterior decking",
  },
  {
    slug: "vergelegen",
    name: "Vergelegen",
    location: "Stellenbosch",
    tileType: "Travertine",
    image: "/images/design/stacked-tiles.jpg",
    alt: "Vergelegen heritage courtyard",
  },
  {
    slug: "la-motte",
    name: "La Motte",
    location: "Franschhoek",
    tileType: "Terracotta",
    image: "/images/design/tile-texture.jpg",
    alt: "La Motte cellar approach",
  },
  {
    slug: "buitenverwachting",
    name: "Buitenverwachting",
    location: "Constantia",
    tileType: "Slate",
    image: "/images/design/terrace.jpg",
    alt: "Buitenverwachting restaurant terrace",
  },
  {
    slug: "rust-en-vrede",
    name: "Rust en Vrede",
    location: "Stellenbosch",
    tileType: "Marble",
    image: "/images/design/courtyard.jpg",
    alt: "Rust en Vrede tasting room",
  },
  {
    slug: "fairview",
    name: "Fairview",
    location: "Paarl",
    tileType: "Granite",
    image: "/images/design/pool-deck.jpg",
    alt: "Fairview estate courtyard",
  },
];

export const wineFarmDetails: WineFarmDetail[] = [
  {
    slug: "delaire-graff",
    name: "Delaire Graff",
    fullTitle: "Delaire Graff Estate",
    tagline: "The Jewel of the Winelands",
    heroImage: "/images/design/pool-deck.jpg",
    heroAlt: "Delaire Graff Estate terrace at sunset overlooking the Stellenbosch mountains",
    architect: "Stefan Antoni Olmesdahl Truen Architects",
    year: "2015",
    tileSeries: "Imperial Marble, Carrara",
    location: "Stellenbosch, South Africa",
    brief:
      "The estate demanded a floorscape that could hold its own against one of the Cape's most dramatic horizons. Light, permanence, and gallery-grade finish were non-negotiable — a surface that would frame art, wine, and landscape without competing with any of them.",
    solution:
      "Imperial Carrara tiles were specified for their light-reflective body and calm veining. Large-format modules with a tight, seamless jointing system create an infinity terrace that reads as architecture rather than paving — cool underfoot, luminous at golden hour.",
    solutionThumbs: [
      { src: "/images/design/tile-texture.jpg", alt: "Imperial Carrara tile surface detail" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Carrara tile edge and corner detail" },
    ],
    gallery: [
      { src: "/images/design/tile-texture.jpg", alt: "Marble tile texture close-up" },
      { src: "/images/design/courtyard.jpg", alt: "Courtyard joint precision" },
      { src: "/images/design/dining-room.jpg", alt: "Interior transition flooring" },
      { src: "/images/design/terrace.jpg", alt: "Terrace field under sunlight" },
    ],
  },
  {
    slug: "la-colombe",
    name: "La Colombe",
    fullTitle: "La Colombe",
    tagline: "Precision Under Fire",
    heroImage: "/images/design/kitchen.jpg",
    heroAlt: "La Colombe professional kitchen with graphite floor tiles",
    architect: "Studio Design Partnership",
    year: "2018",
    tileSeries: "Signature Graphite Slab",
    location: "Constantia, South Africa",
    brief:
      "A world-class kitchen needed a floor that could survive service pressure — heat, spill, traffic — while projecting the same exacting calm as the plated food above it.",
    solution:
      "Signature Graphite Slab delivers a non-slip, high-impact surface with a subtle metallic sheen. Dense body and sealed joints keep the field looking clinical and composed through service after service.",
    solutionThumbs: [
      { src: "/images/design/tile-texture.jpg", alt: "Graphite slab surface" },
      { src: "/images/design/kitchen.jpg", alt: "Kitchen installation detail" },
    ],
    gallery: [
      { src: "/images/design/kitchen.jpg", alt: "Kitchen field overview" },
      { src: "/images/design/tile-texture.jpg", alt: "Graphite texture" },
      { src: "/images/design/dining-room-2.jpg", alt: "Adjacent dining transition" },
      { src: "/images/design/herringbone-install.jpg", alt: "Service corridor detail" },
    ],
  },
  {
    slug: "kanonkop",
    name: "Kanonkop",
    fullTitle: "Kanonkop Estate",
    tagline: "Icon of Stellenbosch Clay",
    heroImage: "/images/design/terrace.jpg",
    heroAlt: "Kanonkop estate terrace with terracotta paving",
    architect: "Heritage Practice Cape",
    year: "2012",
    tileSeries: "Batavian Collection",
    location: "Stellenbosch, South Africa",
    brief:
      "Kanonkop needed outdoor paving that felt as rooted as its vineyards — handmade terracotta with the warmth of Cape soil and the toughness of a working estate.",
    solution:
      "Batavian tiles in a wide outdoor joint absorb handmade size variation and weather beautifully. The field ages into a deeper kiln red that matches the estate's heritage character.",
    solutionThumbs: [
      { src: "/images/design/tile-texture.jpg", alt: "Batavian tone detail" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Fired terracotta stack" },
    ],
    gallery: [
      { src: "/images/design/terrace.jpg", alt: "Terrace overview" },
      { src: "/images/design/courtyard.jpg", alt: "Courtyard approach" },
      { src: "/images/design/tile-texture.jpg", alt: "Clay surface" },
      { src: "/images/design/herringbone-install.jpg", alt: "Path pattern" },
    ],
  },
  {
    slug: "meerlust",
    name: "Meerlust",
    fullTitle: "Meerlust Estate",
    tagline: "Courtyard Continuity",
    heroImage: "/images/design/courtyard.jpg",
    heroAlt: "Meerlust courtyard installation",
    architect: "Winelands Atelier",
    year: "2016",
    tileSeries: "Travertine Field",
    location: "Stellenbosch, South Africa",
    brief:
      "A historic courtyard needed a quiet floorscape that would not fight centuries of plaster and oak — soft underfoot, precise in joint, lasting under Cape weather.",
    solution:
      "Travertine field tiles create a pale, continuous court that reflects soft light into the surrounding arcades while remaining durable for guest traffic between cellar and tasting.",
    solutionThumbs: [
      { src: "/images/design/courtyard.jpg", alt: "Courtyard field" },
      { src: "/images/design/tile-texture.jpg", alt: "Travertine texture" },
    ],
    gallery: [
      { src: "/images/design/courtyard.jpg", alt: "Full courtyard" },
      { src: "/images/design/terrace.jpg", alt: "Edge to garden" },
      { src: "/images/design/dining-room.jpg", alt: "Interior link" },
      { src: "/images/design/tile-texture.jpg", alt: "Surface close-up" },
    ],
  },
  {
    slug: "groot-constantia",
    name: "Groot Constantia",
    fullTitle: "Groot Constantia",
    tagline: "Heritage Underfoot",
    heroImage: "/images/design/pool-deck.jpg",
    heroAlt: "Groot Constantia outdoor terrace",
    architect: "Constantia Conservation Studio",
    year: "2014",
    tileSeries: "Imperial Marble",
    location: "Constantia, South Africa",
    brief:
      "South Africa's oldest wine estate required surfaces that honour Dutch colonial fabric while meeting modern visitor loads and accessibility.",
    solution:
      "Imperial Marble in carefully graded formats ties outdoor terraces to interior halls. Jointing and falls were resolved for drainage without breaking the heritage plane.",
    solutionThumbs: [
      { src: "/images/design/pool-deck.jpg", alt: "Terrace marble field" },
      { src: "/images/design/tile-texture.jpg", alt: "Marble veining" },
    ],
    gallery: [
      { src: "/images/design/pool-deck.jpg", alt: "Terrace panorama" },
      { src: "/images/design/courtyard.jpg", alt: "Heritage court" },
      { src: "/images/design/dining-room.jpg", alt: "Hall flooring" },
      { src: "/images/design/terrace.jpg", alt: "Garden edge" },
    ],
  },
  {
    slug: "spier",
    name: "Spier",
    fullTitle: "Spier Wine Farm",
    tagline: "Pavilion & Path",
    heroImage: "/images/design/dining-room.jpg",
    heroAlt: "Spier tasting pavilion flooring",
    architect: "Spier Architecture Unit",
    year: "2019",
    tileSeries: "Artisan Slate",
    location: "Stellenbosch, South Africa",
    brief:
      "A contemporary tasting pavilion needed dark, grounded paving that could move guests from lawn to lounge without visual fracture.",
    solution:
      "Artisan Slate modules create a matte, high-grip field suited to wet Cape winters. Indoor and outdoor lines share the same kiln character for continuity.",
    solutionThumbs: [
      { src: "/images/design/dining-room.jpg", alt: "Pavilion floor" },
      { src: "/images/design/tile-texture.jpg", alt: "Slate texture" },
    ],
    gallery: [
      { src: "/images/design/dining-room.jpg", alt: "Pavilion interior" },
      { src: "/images/design/terrace.jpg", alt: "Outdoor path" },
      { src: "/images/design/courtyard.jpg", alt: "Arrival court" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Material stack" },
    ],
  },
  {
    slug: "boschendal",
    name: "Boschendal",
    fullTitle: "Boschendal Manor",
    tagline: "Manor Walk & Cellar",
    heroImage: "/images/design/herringbone-install.jpg",
    heroAlt: "Boschendal manor walkway in herringbone",
    architect: "Franschhoek Heritage Group",
    year: "2017",
    tileSeries: "Dutch Klompie Pavers",
    location: "Franschhoek, South Africa",
    brief:
      "Manor approaches and cellar thresholds needed a small-format clay that could take coach and foot traffic while reading as historic paving.",
    solution:
      "Klompies in herringbone deliver density and pattern. Wide outdoor joints forgive handmade variation and echo the estate's agricultural craft.",
    solutionThumbs: [
      { src: "/images/design/herringbone-install.jpg", alt: "Herringbone klompies" },
      { src: "/images/design/tile-texture.jpg", alt: "Klompie surface" },
    ],
    gallery: [
      { src: "/images/design/herringbone-install.jpg", alt: "Walkway pattern" },
      { src: "/images/design/courtyard.jpg", alt: "Manor court" },
      { src: "/images/design/terrace.jpg", alt: "Garden path" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Pavers ready for lay" },
    ],
  },
  {
    slug: "tokara",
    name: "Tokara",
    fullTitle: "Tokara Winery",
    tagline: "Gallery Walkway",
    heroImage: "/images/design/kitchen.jpg",
    heroAlt: "Tokara gallery walkway",
    architect: "Mountain Edge Architects",
    year: "2020",
    tileSeries: "Granite Precision",
    location: "Stellenbosch, South Africa",
    brief:
      "An art gallery walkway between tasting spaces required a cool, precise floor that would not distract from the works on the wall.",
    solution:
      "Large-format granite with hairline joints creates a quiet grey plane. Lighting grazes the surface to reveal craft without glare.",
    solutionThumbs: [
      { src: "/images/design/kitchen.jpg", alt: "Walkway field" },
      { src: "/images/design/tile-texture.jpg", alt: "Granite finish" },
    ],
    gallery: [
      { src: "/images/design/kitchen.jpg", alt: "Gallery corridor" },
      { src: "/images/design/dining-room-2.jpg", alt: "Tasting link" },
      { src: "/images/design/tile-texture.jpg", alt: "Surface detail" },
      { src: "/images/design/courtyard.jpg", alt: "Exterior transition" },
    ],
  },
  {
    slug: "jordan",
    name: "Jordan Estate",
    fullTitle: "Jordan Estate",
    tagline: "Exterior Decking",
    heroImage: "/images/design/dining-room-2.jpg",
    heroAlt: "Jordan Estate exterior decking",
    architect: "Stellenbosch Landscape Lab",
    year: "2021",
    tileSeries: "Imperial Marble",
    location: "Stellenbosch, South Africa",
    brief:
      "Deck and reflecting-pool surrounds needed absolute geometry — dark, textured edges against still water and sharp architecture.",
    solution:
      "Imperial Marble in a darker fired tone frames the waterline. Slip-rated finish and sealed joints keep the deck safe and luminous after rain.",
    solutionThumbs: [
      { src: "/images/design/dining-room-2.jpg", alt: "Deck field" },
      { src: "/images/design/pool-deck.jpg", alt: "Pool edge" },
    ],
    gallery: [
      { src: "/images/design/dining-room-2.jpg", alt: "Deck overview" },
      { src: "/images/design/pool-deck.jpg", alt: "Water edge" },
      { src: "/images/design/terrace.jpg", alt: "Valley view terrace" },
      { src: "/images/design/tile-texture.jpg", alt: "Finish detail" },
    ],
  },
  {
    slug: "vergelegen",
    name: "Vergelegen",
    fullTitle: "Vergelegen",
    tagline: "Heritage Courtyard",
    heroImage: "/images/design/stacked-tiles.jpg",
    heroAlt: "Vergelegen heritage courtyard materials",
    architect: "Somerset West Conservation",
    year: "2013",
    tileSeries: "Travertine Heritage",
    location: "Stellenbosch, South Africa",
    brief:
      "One of the Cape's great historic gardens required paving that felt centuries settled — pale, weathered, and exact in its craft.",
    solution:
      "Travertine heritage grades were laid with traditional joint widths. Tone variation was blended across crates so the court reads as one long conversation with the oaks.",
    solutionThumbs: [
      { src: "/images/design/stacked-tiles.jpg", alt: "Material selection" },
      { src: "/images/design/courtyard.jpg", alt: "Courtyard lay" },
    ],
    gallery: [
      { src: "/images/design/courtyard.jpg", alt: "Heritage court" },
      { src: "/images/design/terrace.jpg", alt: "Garden path" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Tile stack" },
      { src: "/images/design/tile-texture.jpg", alt: "Surface patina" },
    ],
  },
  {
    slug: "la-motte",
    name: "La Motte",
    fullTitle: "La Motte",
    tagline: "Cellar Approach",
    heroImage: "/images/design/tile-texture.jpg",
    heroAlt: "La Motte cellar approach terracotta",
    architect: "Franschhoek Design Studio",
    year: "2018",
    tileSeries: "Batavian Collection",
    location: "Franschhoek, South Africa",
    brief:
      "The approach to the cellar door needed clay underfoot that felt agricultural and elevated at once — warm, dense, and lasting.",
    solution:
      "Batavian terracotta in a calibrated outdoor joint creates a welcoming plane from parking to tasting, deepening in tone as guests return season after season.",
    solutionThumbs: [
      { src: "/images/design/tile-texture.jpg", alt: "Batavian surface" },
      { src: "/images/design/herringbone-install.jpg", alt: "Approach pattern" },
    ],
    gallery: [
      { src: "/images/design/tile-texture.jpg", alt: "Clay close-up" },
      { src: "/images/design/terrace.jpg", alt: "Approach path" },
      { src: "/images/design/courtyard.jpg", alt: "Arrival court" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Kiln batch" },
    ],
  },
  {
    slug: "buitenverwachting",
    name: "Buitenverwachting",
    fullTitle: "Buitenverwachting",
    tagline: "Restaurant Terrace",
    heroImage: "/images/design/terrace.jpg",
    heroAlt: "Buitenverwachting restaurant terrace",
    architect: "Constantia Dining Architects",
    year: "2019",
    tileSeries: "Artisan Slate",
    location: "Constantia, South Africa",
    brief:
      "A restaurant terrace in Constantia needed dark, forgiving paving that hides leaf litter and wine spills while staying elegant at night.",
    solution:
      "Artisan Slate with charcoal joints delivers grip and gravitas. Evening lighting grazes the field so texture reads without glare on glassware.",
    solutionThumbs: [
      { src: "/images/design/terrace.jpg", alt: "Terrace slate" },
      { src: "/images/design/dining-room.jpg", alt: "Dining edge" },
    ],
    gallery: [
      { src: "/images/design/terrace.jpg", alt: "Night terrace" },
      { src: "/images/design/dining-room.jpg", alt: "Restaurant link" },
      { src: "/images/design/courtyard.jpg", alt: "Garden edge" },
      { src: "/images/design/tile-texture.jpg", alt: "Slate texture" },
    ],
  },
  {
    slug: "rust-en-vrede",
    name: "Rust en Vrede",
    fullTitle: "Rust en Vrede",
    tagline: "Tasting Room Calm",
    heroImage: "/images/design/courtyard.jpg",
    heroAlt: "Rust en Vrede tasting room flooring",
    architect: "Stellenbosch Interiors Collective",
    year: "2016",
    tileSeries: "Imperial Marble",
    location: "Stellenbosch, South Africa",
    brief:
      "The tasting room called for a cool, quiet floor that would let wine, timber, and mountain light lead — without visual noise.",
    solution:
      "Imperial Marble in a soft grey grade creates a calm plane. Tight indoor joints and a matte seal keep reflections controlled under pendant lighting.",
    solutionThumbs: [
      { src: "/images/design/courtyard.jpg", alt: "Tasting floor" },
      { src: "/images/design/tile-texture.jpg", alt: "Marble finish" },
    ],
    gallery: [
      { src: "/images/design/courtyard.jpg", alt: "Tasting room" },
      { src: "/images/design/dining-room-2.jpg", alt: "Lounge link" },
      { src: "/images/design/kitchen.jpg", alt: "Service zone" },
      { src: "/images/design/tile-texture.jpg", alt: "Surface detail" },
    ],
  },
  {
    slug: "fairview",
    name: "Fairview",
    fullTitle: "Fairview Estate",
    tagline: "Courtyard Energy",
    heroImage: "/images/design/pool-deck.jpg",
    heroAlt: "Fairview estate courtyard",
    architect: "Paarl Commercial Studio",
    year: "2022",
    tileSeries: "Granite Precision",
    location: "Paarl, South Africa",
    brief:
      "A high-traffic visitor courtyard needed industrial toughness wrapped in wineland hospitality — durable, cleanable, unmistakably crafted.",
    solution:
      "Granite precision modules handle coach traffic at edges and guest crowds at the core. Colour-matched accessories finish stairs and thresholds in the same kiln language.",
    solutionThumbs: [
      { src: "/images/design/pool-deck.jpg", alt: "Courtyard granite" },
      { src: "/images/design/stacked-tiles.jpg", alt: "Accessory cuts" },
    ],
    gallery: [
      { src: "/images/design/pool-deck.jpg", alt: "Visitor court" },
      { src: "/images/design/terrace.jpg", alt: "Estate edge" },
      { src: "/images/design/courtyard.jpg", alt: "Secondary court" },
      { src: "/images/design/tile-texture.jpg", alt: "Granite detail" },
    ],
  },
];

export function getWineFarmDetail(slug: string): WineFarmDetail | undefined {
  return wineFarmDetails.find((f) => f.slug === slug);
}

export function getNextWineFarm(slug: string): WineFarmDetail | undefined {
  const index = wineFarmDetails.findIndex((f) => f.slug === slug);
  if (index === -1) return undefined;
  return wineFarmDetails[(index + 1) % wineFarmDetails.length];
}
