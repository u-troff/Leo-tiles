export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  signs: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const residentialServices: Service[] = [
  {
    slug: "batavian-floor-tiles",
    title: "Batavian Floor Tiles",
    shortDescription: "Classic Dutch-heritage terracotta floor tiles, handmade to order.",
    description: "Our signature product. Batavian floor tiles are shaped by hand from raw clay, dried slowly, and kiln-fired to produce a warm, characterful tile that only improves with age. Each tile is unique, no two are identical. Available in standard and custom sizes.",
    icon: "Grid3x3",
    signs: ["Looking for authentic terracotta flooring", "Restoring a heritage property", "Want a truly unique handmade product", "Need bespoke sizing not available elsewhere"],
    benefits: ["Every tile is unique, no factory uniformity", "Improves with age and use", "Available in custom sizes to order", "Suitable for indoor and outdoor use"],
    faqs: [
      { question: "What sizes are available?", answer: "We manufacture to order, so virtually any size is possible. Common sizes include 150x150mm, 200x200mm, and 250x250mm. Contact us to discuss your project requirements." },
      { question: "How long does production take?", answer: "Production typically takes 4–8 weeks depending on order size and current demand. Winter months may take longer due to slower clay drying times. We recommend contacting us well ahead of your installation date." },
      { question: "Are the tiles suitable for wet areas?", answer: "Yes, when properly sealed. We recommend our terracotta sealant applied before and after grouting for wet areas like bathrooms and kitchens." },
    ],
  },
  {
    slug: "dutch-klompies",
    title: "Dutch Style Klompies",
    shortDescription: "Traditional small-format clay pavers, perfect for courtyards and pathways.",
    description: "Klompies are small, dense clay pavers inspired by traditional Dutch cobblestone. Incredibly durable and visually striking when laid in herringbone or basketweave patterns. Popular for driveways, courtyards, garden paths, and feature flooring.",
    icon: "LayoutGrid",
    signs: ["Need durable outdoor paving", "Restoring a period property courtyard", "Want a natural alternative to concrete pavers"],
    benefits: ["Extremely durable, suitable for vehicle traffic", "Natural clay colouring that weathers beautifully", "Classic patterns create visual interest", "Low maintenance once sealed"],
    faqs: [
      { question: "Can klompies be used for driveways?", answer: "Yes, their density makes them suitable for pedestrian and vehicle traffic. Proper bedding and edge restraints are required. We can advise on installation requirements." },
      { question: "Do they need sealing?", answer: "We recommend sealing for driveways and wet areas. For interior use in dry areas, some clients prefer the natural unsealed look." },
    ],
  },
  {
    slug: "hexagon-tiles",
    title: "Hexagon Shaped Tiles",
    shortDescription: "Handmade hexagonal terracotta tiles for statement floors and feature walls.",
    description: "Our hexagon tiles bring a contemporary edge to a traditional material. Handmade in the same kiln-fired terracotta as our floor tiles, hexagons work beautifully in kitchens, bathrooms, and entrance halls where you want a distinctive pattern.",
    icon: "Hexagon",
    signs: ["Want a statement floor in a kitchen or bathroom", "Looking for something distinctive and handmade", "Designing a feature wall or splashback"],
    benefits: ["Unique pattern creates visual impact", "Same handmade quality as all Leo Tiles products", "Works well mixed with standard tiles for borders", "Available in custom sizes"],
    faqs: [
      { question: "What size hexagons do you make?", answer: "Our standard hexagon is 150mm point-to-point. Custom sizes available on request, contact us to discuss your project." },
      { question: "Can they be used outdoors?", answer: "Yes, when properly sealed. They work particularly well around pool areas and on patios." },
    ],
  },
  {
    slug: "wine-coolers",
    title: "Fired Clay Wine Coolers",
    shortDescription: "Handcrafted terracotta wine coolers, a unique artisan product.",
    description: "A unique product from the Leo Tiles kiln, handcrafted terracotta wine coolers that use the natural insulating properties of fired clay to keep your bottle cool. A beautiful gift and functional object.",
    icon: "Wine",
    signs: ["Looking for a unique artisan gift", "Want a functional decorative piece", "Interested in the natural cooling properties of terracotta"],
    benefits: ["Natural terracotta keeps wine at cellar temperature", "Handmade, each one unique", "Makes a distinctive gift", "Beautifully complements terracotta tile interiors"],
    faqs: [
      { question: "How do the coolers work?", answer: "Soak the cooler in water for 20 minutes before use. The porous terracotta absorbs water and as it evaporates, it keeps the bottle cool, no electricity required." },
      { question: "Can I order custom quantities?", answer: "Yes, we can produce wine coolers in bulk for corporate gifts or retail. Contact us for wholesale pricing." },
    ],
  },
  {
    slug: "fired-clay-pellets",
    title: "Fired Clay Pellets",
    shortDescription: "Kiln-fired clay aggregate for drainage, horticulture, and construction.",
    description: "A by-product of our tile production, fired clay pellets are used in horticulture as drainage media, in construction as lightweight aggregate, and in aquaponics systems. Natural, inert, and long-lasting.",
    icon: "Layers",
    signs: ["Need drainage media for potted plants or raised beds", "Looking for a natural lightweight aggregate", "Aquaponics or hydroponics growing medium"],
    benefits: ["Natural and chemically inert", "Excellent drainage properties", "Reusable and long-lasting", "Locally produced in Cape Town"],
    faqs: [
      { question: "What sizes are available?", answer: "We produce pellets in 5–10mm and 10–20mm grades. Available in bags or bulk quantities." },
      { question: "Are they suitable for aquaponics?", answer: "Yes, the fired clay is inert and pH-neutral, making it an excellent growing medium for aquaponics and hydroponics systems." },
    ],
  },
  {
    slug: "tile-installation",
    title: "Professional Tile Installation",
    shortDescription: "Expert installation by our own team, we know our tiles better than anyone.",
    description: "Because our tiles are non-standard sizes and require specialist grouting techniques, we offer installation by our own team. We are the only installers in South Africa who fully understand how to work with handmade terracotta, including managing the irregular sizing, correct adhesive selection, and sealant application for long-term durability.",
    icon: "Hammer",
    signs: ["Purchasing Leo Tiles and need professional installation", "Previous installers struggled with non-standard sizing", "Want a complete supply-and-install package"],
    benefits: ["Installers who built the tiles install them", "Correct adhesive and grout selection every time", "Full sealant application included", "Separate quotes always provided for tiles and installation"],
    faqs: [
      { question: "Do I have to use your installation team?", answer: "No, we can supply tiles only. However, because of the non-standard sizing and specialist grouting required, we strongly recommend either our team or an experienced terracotta installer." },
      { question: "How far do you travel for installation?", answer: "Our team primarily covers the Western Cape. For projects in other provinces, we can recommend experienced installers or work with your preferred contractor remotely." },
    ],
  },
];
