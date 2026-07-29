export type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "heritage"
  | "wine-farm";

export interface ProjectCollaborator {
  role: string;
  name: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption: string;
  layout: "hero" | "half" | "wide";
}

export interface GalleryProject {
  slug: string;
  title: string;
  /** Full title for detail hero, e.g. "Delaire Graff Estate" */
  fullTitle: string;
  tagline: string;
  collection: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  alt: string;
  featured?: boolean;
  intentTitle: string;
  intentLead: string;
  intentBody: string;
  collaborators: ProjectCollaborator[];
  gallery: ProjectGalleryImage[];
}

export const projectFilters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "heritage", label: "Heritage Restoration" },
  { key: "wine-farm", label: "The Wine Farm Guild" },
];

export const galleryProjects: GalleryProject[] = [
  {
    slug: "delaire-graff",
    title: "Delaire Graff",
    fullTitle: "Delaire Graff Estate",
    tagline: "A Dialogue of Light & Earth",
    collection: "Batavian Collection",
    category: "wine-farm",
    image: "/images/design/pool-deck.jpg",
    alt: "Delaire Graff Estate terrace with Batavian terracotta paving",
    featured: true,
    intentTitle: "The Architectural Intent",
    intentLead:
      "Nestled within the rugged contours of the Stellenbosch valley, the Delaire Graff Estate demanded a material language that could converse with both the dramatic landscape and its heritage. The design philosophy centered on permanence—anchoring the sweeping pavilions to the earth while maintaining an elevated, gallery-like sophistication.",
    intentBody:
      "Our approach required a floorscape that could absorb the aggressive South African sun and mature gracefully. The resulting installation acts as a foundational canvas, allowing the bold architectural lines and curated art collections to breathe, united by the subtle, rhythmic texture of artisanal masonry.",
    collaborators: [
      { role: "Architect", name: "SAOTA" },
      { role: "Interior Design", name: "David Collins Studio" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/pool-deck.jpg",
        alt: "Main terrace at Delaire Graff",
        caption: "Main Terrace — Batavian Mix",
        layout: "hero",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Artisan detail of Batavian tile",
        caption: "Artisan Detail",
        layout: "half",
      },
      {
        src: "/images/design/courtyard.jpg",
        alt: "Pool deck panorama",
        caption: "Pool Deck Panorama",
        layout: "half",
      },
      {
        src: "/images/design/stacked-tiles.jpg",
        alt: "Stacked terracotta materiality",
        caption: "Materiality — Stacked Terracotta",
        layout: "wide",
      },
    ],
  },
  {
    slug: "constantia-villa",
    title: "Constantia Villa",
    fullTitle: "Constantia Villa",
    tagline: "Threshold Between Garden & Home",
    collection: "Klompies",
    category: "residential",
    image: "/images/design/courtyard.jpg",
    alt: "Constantia Villa courtyard with klompie brick pathway",
    intentTitle: "The Architectural Intent",
    intentLead:
      "A private Constantia residence called for a courtyard path that felt as considered as the house itself. Dense Dutch-style klompies were laid to create a warm, irregular rhythm against stark white modernist walls.",
    intentBody:
      "The pathway leads toward a quiet water feature, its handmade irregularities catching soft, diffused light. Over time the clay will deepen in tone, recording every season of Cape weather.",
    collaborators: [
      { role: "Architect", name: "Private Commission" },
      { role: "Landscape", name: "Cape Garden Studio" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/courtyard.jpg",
        alt: "Courtyard pathway",
        caption: "Courtyard Path — Klompies",
        layout: "hero",
      },
      {
        src: "/images/design/herringbone-install.jpg",
        alt: "Herringbone detail",
        caption: "Pattern Detail",
        layout: "half",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Clay surface close-up",
        caption: "Clay Surface",
        layout: "half",
      },
      {
        src: "/images/design/terrace.jpg",
        alt: "Garden threshold",
        caption: "Garden Threshold",
        layout: "wide",
      },
    ],
  },
  {
    slug: "stellenbosch-manor",
    title: "Stellenbosch Manor",
    fullTitle: "Stellenbosch Manor",
    tagline: "Heritage Restored in Fired Clay",
    collection: "Heritage Red",
    category: "heritage",
    image: "/images/design/terrace.jpg",
    alt: "Stellenbosch Manor heritage brickwork and archway",
    intentTitle: "The Architectural Intent",
    intentLead:
      "Restoring a Stellenbosch manor required masonry that could honour centuries of craft without museum stiffness. Heritage Red terracotta was matched to surviving fragments and re-fired for the same deep crimson character.",
    intentBody:
      "Around the grand archway and aged timber doors, raking light pulls out historical texture. The new work sits quietly beside the old — permanence without pastiche.",
    collaborators: [
      { role: "Heritage Architect", name: "Heritage Associates" },
      { role: "Conservation", name: "Cape Dutch Trust" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/terrace.jpg",
        alt: "Manor archway",
        caption: "Archway — Heritage Red",
        layout: "hero",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Heritage clay detail",
        caption: "Fired Crimson Detail",
        layout: "half",
      },
      {
        src: "/images/design/dining-room.jpg",
        alt: "Interior heritage floor",
        caption: "Interior Continuity",
        layout: "half",
      },
      {
        src: "/images/design/stacked-tiles.jpg",
        alt: "Matched kiln batch",
        caption: "Matched Kiln Batch",
        layout: "wide",
      },
    ],
  },
  {
    slug: "waterford-estate",
    title: "Waterford Estate",
    fullTitle: "Waterford Estate",
    tagline: "Cellar Weight & Warmth",
    collection: "Artisan Slate",
    category: "wine-farm",
    image: "/images/design/dining-room.jpg",
    alt: "Waterford Estate cellar entrance with dark artisan cladding",
    featured: true,
    intentTitle: "The Architectural Intent",
    intentLead:
      "The Waterford Estate cellar entrance needed structural weight — dark artisan surfaces that frame the warm glow of the tasting spaces beyond, with geometric precision and heavy shadow.",
    intentBody:
      "Pillars and thresholds were resolved in kiln-fired pieces matched for tone across the commission, conveying architectural gravity without industrial coldness.",
    collaborators: [
      { role: "Architect", name: "Estate Architects" },
      { role: "Interior Design", name: "Wine Country Atelier" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/dining-room.jpg",
        alt: "Cellar entrance",
        caption: "Cellar Entrance — Artisan Finish",
        layout: "hero",
      },
      {
        src: "/images/design/dining-room-2.jpg",
        alt: "Interior dining",
        caption: "Tasting Interior",
        layout: "half",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Dark clay detail",
        caption: "Dark Fired Detail",
        layout: "half",
      },
      {
        src: "/images/design/pool-deck.jpg",
        alt: "Estate terrace",
        caption: "Estate Terrace",
        layout: "wide",
      },
    ],
  },
  {
    slug: "cape-town-kitchen",
    title: "Camps Bay Kitchen",
    fullTitle: "Camps Bay Kitchen",
    tagline: "Coastal Light on Handmade Clay",
    collection: "Batavian Collection",
    category: "residential",
    image: "/images/design/kitchen.jpg",
    alt: "Camps Bay kitchen floor in handmade Batavian terracotta",
    intentTitle: "The Architectural Intent",
    intentLead:
      "A Camps Bay kitchen facing the Atlantic needed a floor that could hold bright coastal light without glare — warm Batavian terracotta underfoot, sealed for wet-zone performance.",
    intentBody:
      "Natural tone variation between tiles keeps the surface alive as sun moves through the day. Joints and sealant were specified for kitchens that cook hard and entertain often.",
    collaborators: [
      { role: "Architect", name: "Coastal Practice" },
      { role: "Interior Design", name: "Homeowner Atelier" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/kitchen.jpg",
        alt: "Kitchen floor overview",
        caption: "Kitchen Field — Batavian",
        layout: "hero",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Tile close-up",
        caption: "Tone Variation",
        layout: "half",
      },
      {
        src: "/images/design/dining-room-2.jpg",
        alt: "Adjacent dining",
        caption: "Adjacent Dining",
        layout: "half",
      },
      {
        src: "/images/design/courtyard.jpg",
        alt: "Outdoor link",
        caption: "Indoor–Outdoor Link",
        layout: "wide",
      },
    ],
  },
  {
    slug: "herringbone-lodge",
    title: "Franschhoek Lodge",
    fullTitle: "Franschhoek Lodge",
    tagline: "Hospitality Underfoot",
    collection: "Klompies",
    category: "commercial",
    image: "/images/design/herringbone-install.jpg",
    alt: "Franschhoek lodge herringbone klompie installation",
    intentTitle: "The Architectural Intent",
    intentLead:
      "A Franschhoek lodge reception needed a floor that signalled welcome and craft the moment guests arrive. Herringbone klompies deliver pattern and durability for high foot traffic.",
    intentBody:
      "Laid by our internal team, the installation balances visual rhythm with commercial performance — sealed, edged, and ready for seasons of arrivals.",
    collaborators: [
      { role: "Architect", name: "Valley Lodges Group" },
      { role: "Interior Design", name: "Hospitality Studio" },
      { role: "Tiling Artisans", name: "Leo Tiles Internal" },
    ],
    gallery: [
      {
        src: "/images/design/herringbone-install.jpg",
        alt: "Herringbone field",
        caption: "Reception — Herringbone Klompies",
        layout: "hero",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Pavers detail",
        caption: "Paver Detail",
        layout: "half",
      },
      {
        src: "/images/design/courtyard.jpg",
        alt: "Lodge courtyard",
        caption: "Lodge Courtyard",
        layout: "half",
      },
      {
        src: "/images/design/terrace.jpg",
        alt: "Exterior link",
        caption: "Exterior Continuity",
        layout: "wide",
      },
    ],
  },
];

export function getProject(slug: string): GalleryProject | undefined {
  return galleryProjects.find((p) => p.slug === slug);
}
