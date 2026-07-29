export interface ProductSpec {
  label: string;
  value: string;
}

export interface SizeOption {
  size: string;
  label: string;
  price: string;
  cta: "quote" | "inquire";
  primary?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span?: "large" | "small";
  grayscale?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  /** Short display name without "Collection" for CTAs */
  shortName: string;
  eyebrow: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  craftTitle: string;
  craftLead: string;
  craftBody: string;
  craftImage: string;
  craftImageAlt: string;
  sizeOptions: SizeOption[];
  galleryIntro: string;
  galleryImages: GalleryImage[];
  technicalSpecs: ProductSpec[];
  maintenanceTitle: string;
  maintenanceBody: string;
  maintenanceGuideHref: string;
  relatedGuideSlug?: string;
}

export const products: Product[] = [
  {
    slug: "batavian-collection",
    name: "The Batavian Collection",
    shortName: "Batavian",
    eyebrow: "Pagoda Collection",
    tagline: "A Timeless Dialogue with the Earth.",
    heroImage: "/images/design/pool-deck.jpg",
    heroAlt: "Batavian tile floor on a luxury Cape Dutch estate patio at golden hour",
    craftTitle: "The Anatomy of Craft",
    craftLead:
      "Our materials are fired for permanence. Each Batavian tile is hand-pressed, embracing the imperfections of raw clay. The 36-hour kiln firing process ensures extreme durability while baking in deep, organic color variations that cannot be replicated synthetically.",
    craftBody:
      "Over time, the natural patina develops, telling the story of the space it inhabits. It is a material that ages with grace, inherently tied to the earth from which it was drawn.",
    craftImage: "/images/design/tile-texture.jpg",
    craftImageAlt: "Macro texture of rustic terracotta Batavian tile edge",
    sizeOptions: [
      { size: "200mm × 200mm", label: "Standard Format", price: "R 450 / m²", cta: "quote", primary: true },
      { size: "300mm × 300mm", label: "Grand Format", price: "R 520 / m²", cta: "quote" },
      { size: "Custom Format", label: "Bespoke Architectural Needs", price: "POA", cta: "inquire" },
    ],
    galleryIntro: "Explore the tonal range and structural applications of the Batavian collection.",
    galleryImages: [
      {
        src: "/images/design/stacked-tiles.jpg",
        alt: "Artistic stacked terracotta tile forms",
        caption: "Terracotta Forms",
        span: "large",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Deep brown Batavian tile with textured surface",
        caption: "Deep Brown Hue",
        span: "small",
      },
      {
        src: "/images/design/dining-room.jpg",
        alt: "Interior living space with Batavian floor tiles",
        caption: "Interior Application",
        span: "small",
        grayscale: true,
      },
    ],
    technicalSpecs: [
      { label: "Slip Rating", value: "P5 (High Resistance)" },
      { label: "Frost Resistance", value: "Class 3" },
      { label: "Thermal Mass", value: "Excellent Heat Retention" },
      { label: "Porosity", value: "Requires Sealing" },
    ],
    maintenanceTitle: "Batavian Sealant & Oils",
    maintenanceBody:
      "To preserve the natural beauty and ensure longevity, Batavian tiles require specific sealing. Our proprietary blend of natural oils enhances color while providing robust protection against moisture.",
    maintenanceGuideHref: "/guides",
    relatedGuideSlug: "joint-width-for-outdoor-terracotta",
  },
  {
    slug: "dutch-klompie-pavers",
    name: "Dutch Klompie Pavers",
    shortName: "Klompie",
    eyebrow: "Paver Collection",
    tagline: "Rugged Density for Thresholds and Paths.",
    heroImage: "/images/design/herringbone-install.jpg",
    heroAlt: "Dutch klompie pavers laid in a herringbone pattern",
    craftTitle: "The Anatomy of Craft",
    craftLead:
      "Klompies are small-format clay pavers inspired by traditional Dutch cobblestone. Dense, rugged, and kiln-fired for permanence, they excel wherever the interior meets the wild — courtyards, driveways, and garden thresholds.",
    craftBody:
      "Laid in herringbone or basketweave, they create visual rhythm that mass-produced pavers cannot match. Each piece carries the kiln’s tonal fingerprint, weathering into a richer surface over decades of use.",
    craftImage: "/images/design/tile-texture.jpg",
    craftImageAlt: "Close-up of handmade klompie paver texture",
    sizeOptions: [
      { size: "≈ 50 × 100 × 50mm", label: "Classic Klompie", price: "POA", cta: "quote", primary: true },
      { size: "Custom Thickness", label: "Driveway & Heavy Duty", price: "POA", cta: "quote" },
      { size: "Bespoke Format", label: "Heritage Matching", price: "POA", cta: "inquire" },
    ],
    galleryIntro: "Explore the structural applications and pattern play of Dutch klompie pavers.",
    galleryImages: [
      {
        src: "/images/design/herringbone-install.jpg",
        alt: "Klompie herringbone courtyard installation",
        caption: "Herringbone Pattern",
        span: "large",
      },
      {
        src: "/images/design/courtyard.jpg",
        alt: "Courtyard paved with terracotta klompies",
        caption: "Courtyard Threshold",
        span: "small",
      },
      {
        src: "/images/design/terrace.jpg",
        alt: "Exterior terrace with clay pavers",
        caption: "Exterior Path",
        span: "small",
        grayscale: true,
      },
    ],
    technicalSpecs: [
      { label: "Traffic Rating", value: "Pedestrian & Vehicle" },
      { label: "Frost Resistance", value: "Class 3" },
      { label: "Density", value: "High — Driveway Suitable" },
      { label: "Porosity", value: "Seal Recommended Outdoors" },
    ],
    maintenanceTitle: "Klompie Sealant & Oils",
    maintenanceBody:
      "For driveways and wet areas, sealing protects against staining and freeze–thaw stress. Interior dry installations can be left natural if you prefer a raw clay finish.",
    maintenanceGuideHref: "/guides",
  },
  {
    slug: "hexagon-terracotta",
    name: "Hexagon Terracotta",
    shortName: "Hexagon",
    eyebrow: "Geometric Collection",
    tagline: "A Geometric Departure from the Linear.",
    heroImage: "/images/design/courtyard.jpg",
    heroAlt: "Hexagon terracotta tiles forming a courtyard pattern",
    craftTitle: "The Anatomy of Craft",
    craftLead:
      "Our hexagon tiles bring a contemporary edge to a traditional material. Hand-pressed in the same kiln-fired terracotta as our floor tiles, each piece carries a subtle undulating surface that industrial pressing cannot replicate.",
    craftBody:
      "They work beautifully in kitchens, bathrooms, and entrance halls — anywhere a distinctive pattern should lead the eye without overwhelming the architecture.",
    craftImage: "/images/design/tile-texture.jpg",
    craftImageAlt: "Macro of hexagon terracotta clay surface",
    sizeOptions: [
      { size: "150mm point-to-point", label: "Standard Hexagon", price: "POA", cta: "quote", primary: true },
      { size: "Custom Point-to-Point", label: "Large Format Geometry", price: "POA", cta: "quote" },
      { size: "Mixed Formats", label: "Borders & Accents", price: "POA", cta: "inquire" },
    ],
    galleryIntro: "Explore the geometry and tonal play of hexagon terracotta.",
    galleryImages: [
      {
        src: "/images/design/courtyard.jpg",
        alt: "Hexagon terracotta courtyard floor",
        caption: "Geometric Field",
        span: "large",
      },
      {
        src: "/images/design/kitchen.jpg",
        alt: "Kitchen with terracotta feature flooring",
        caption: "Kitchen Statement",
        span: "small",
      },
      {
        src: "/images/design/dining-room-2.jpg",
        alt: "Interior dining space with terracotta tiles",
        caption: "Interior Application",
        span: "small",
        grayscale: true,
      },
    ],
    technicalSpecs: [
      { label: "Slip Rating", value: "P5 (When Sealed)" },
      { label: "Frost Resistance", value: "Class 3" },
      { label: "Application", value: "Wall & Floor" },
      { label: "Porosity", value: "Requires Sealing" },
    ],
    maintenanceTitle: "Hexagon Sealant & Oils",
    maintenanceBody:
      "Seal before and after grouting in wet areas. Our oils deepen the terracotta tone while locking out moisture — essential for kitchens, bathrooms, and pool surrounds.",
    maintenanceGuideHref: "/guides",
  },
  {
    slug: "project-accessories",
    name: "Project Accessories",
    shortName: "Accessories",
    eyebrow: "Atelier Range",
    tagline: "Trim, Specialty Cuts & Finishing Pieces.",
    heroImage: "/images/design/stacked-tiles.jpg",
    heroAlt: "Curated arrangement of specialty terracotta cuts and accessories",
    craftTitle: "The Anatomy of Craft",
    craftLead:
      "Every architectural surface needs its edges resolved. Our project accessories — trim, specialty cuts, and finishing pieces — are fired in the same kiln as the field tiles so colour and character match across the entire commission.",
    craftBody:
      "From stair nosings to custom returns, these pieces are made to order alongside your primary format, ensuring a continuous material language from floor to threshold.",
    craftImage: "/images/design/stacked-tiles.jpg",
    craftImageAlt: "Stacked specialty terracotta accessory pieces",
    sizeOptions: [
      { size: "Trim & Edge Pieces", label: "Matching Field Colour", price: "POA", cta: "quote", primary: true },
      { size: "Stair & Threshold", label: "Structural Finishes", price: "POA", cta: "quote" },
      { size: "Fully Custom", label: "Architect-Specified Cuts", price: "POA", cta: "inquire" },
    ],
    galleryIntro: "Explore specialty cuts and finishing pieces for complete installations.",
    galleryImages: [
      {
        src: "/images/design/stacked-tiles.jpg",
        alt: "Specialty terracotta accessory stack",
        caption: "Curated Cuts",
        span: "large",
      },
      {
        src: "/images/design/tile-texture.jpg",
        alt: "Detail of accessory clay texture",
        caption: "Matched Firing",
        span: "small",
      },
      {
        src: "/images/design/terrace.jpg",
        alt: "Completed terrace with trim details",
        caption: "Installed Detail",
        span: "small",
        grayscale: true,
      },
    ],
    technicalSpecs: [
      { label: "Material Match", value: "Same Kiln Batch" },
      { label: "Lead Time", value: "With Primary Order" },
      { label: "Custom Work", value: "Architect Drawings Welcome" },
      { label: "Finish", value: "Seal with Field Tiles" },
    ],
    maintenanceTitle: "Accessory Sealant & Oils",
    maintenanceBody:
      "Finish accessories with the same sealant as your field tiles so wear patterns remain consistent across edges, stairs, and thresholds.",
    maintenanceGuideHref: "/guides",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
