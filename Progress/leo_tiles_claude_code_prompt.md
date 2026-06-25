# Claude Code Prompt — Leo Tiles Website Build

## Context

You are adapting an existing Next.js plumbing company website template into a brand-new site for **Leo Tiles** — a 50+ year old handmade terracotta tile manufacturer and installer based in Kraaifontein, Cape Town, South Africa. The owner is Mark Kelly. His contact details: mark@leotiles.co.za | +27 79 150 0160 | +27 21 988 9491 | 30 Industrial Road, Kraaifontein Industria, Cape Town.

The existing codebase is a Next.js 14 + Tailwind CSS site with a `siteConfig.ts` data file, modular section components, and Sanity CMS for blog posts. The full file structure and source code has been shared with you. Your job is to retheme, reconfigure, and extend it for Leo Tiles — not rebuild from scratch.

---

## Brand & Design Direction

**Colour palette — Terracotta & Warm Rust** (all tokens defined in the `@theme inline` block below):

**Critical — Tailwind v4 token registration:**

This project uses Tailwind v4 with the `@theme inline` block in `globals.css`. All new colour tokens MUST be added inside the existing `@theme inline { ... }` block — NOT as regular CSS custom properties on `:root`. If you add them outside `@theme inline`, the utility classes (`rust-500`, `clay-800`, etc.) will not resolve and the entire site will be unstyled.

The updated `@theme inline` block in `globals.css` should look like this (replace the existing orange/navy/cream entries and add the new tokens):

```css
@theme inline {
  /* ── Rust / Terracotta (replaces orange) ─────────────────── */
  --color-rust-50:  #fdf4ef;
  --color-rust-100: #fce4d2;
  --color-rust-200: #f8c8a5;
  --color-rust-300: #f2a472;
  --color-rust-400: #e97d42;
  --color-rust-500: #c9571e;
  --color-rust-600: #a84318;
  --color-rust-700: #8a3312;
  --color-rust-800: #6b230c;
  --color-rust-900: #4d1508;

  /* ── Clay / Deep Warm (replaces navy) ────────────────────── */
  --color-clay-50:  #faf6f1;
  --color-clay-100: #f2e9dc;
  --color-clay-200: #e3d0b8;
  --color-clay-300: #ccb28e;
  --color-clay-400: #b08f65;
  --color-clay-500: #8f6e44;
  --color-clay-600: #705233;
  --color-clay-700: #553d26;
  --color-clay-800: #3a291a;
  --color-clay-900: #22180f;

  /* ── Stone / Warm Neutral (replaces cream) ───────────────── */
  --color-stone-50:  #f8f7f5;
  --color-stone-100: #eeebe5;
  --color-stone-200: #dcd6cc;
  --color-stone-300: #c4bdb0;
  --color-stone-400: #a89e8e;
  --color-stone-500: #897e6e;
  --color-stone-600: #6e6358;
  --color-stone-700: #554d44;
  --color-stone-800: #3c3730;
  --color-stone-900: #24201c;

  /* ── Typography ──────────────────────────────────────────── */
  --font-sans:   'DM Sans', system-ui, -apple-system, sans-serif;
  --font-serif:  'Playfair Display', Georgia, serif;
}
```

After updating `globals.css`, do a project-wide find and replace:
- All `orange-*` Tailwind classes → `rust-*`
- All `navy-*` Tailwind classes → `clay-*`
- All `cream-*` Tailwind classes → `stone-*`

This applies to every `.tsx` and `.css` file in the project.

**Typography:**
- Display / headings: `Playfair Display` (serif, from Google Fonts) — replace `Cormorant Garamond`
- Body: `DM Sans` (clean, modern) — replace `Outfit`
- Import both in globals.css

**Design notes:**
- Zero border-radius everywhere — keep the sharp, architectural feel already in the template
- The signature element is the hero: use a full-bleed dark terracotta overlay on a photo of handmade clay tiles being laid by hand, with a large serif headline: *"Handmade. Kiln-Fired. Yours."*
- Keep all the structural components (TopBar, MainNav, Footer, etc.) — just retheme them

---

## Step 1 — Update `src/data/site-config.ts`

Replace the entire file contents with:

```typescript
export const siteConfig = {
  businessName: "Leo Tiles",
  trade: "tiling",
  tradePlural: "tiling",
  tradeProfessional: "tile specialist",
  tradeProfessionalPlural: "tile specialists",
  tagline: "South Africa's Original Handmade Terracotta Tile Makers — Crafted by Hand Since the 1970s",
  phone: "+27 79 150 0160",
  phoneRaw: "+27791500160",
  email: "mark@leotiles.co.za",
  url: "https://leotiles.co.za",
  address: {
    street: "30 Industrial Road",
    city: "Kraaifontein",
    state: "Cape Town",
    zip: "7570",
    full: "30 Industrial Road, Kraaifontein Industria, Cape Town, 7570",
  },
  founder: {
    name: "Mark Kelly",
    title: "Founder & Owner",
    bio: "Mark Kelly has spent over 50 years perfecting the art of handmade terracotta tile manufacturing. What started as a passion for authentic clay craft has grown into South Africa's most trusted source for bespoke, kiln-fired terracotta tiles — used in homes, heritage restorations, and architectural projects across the country and abroad.",
  },
  license: "",
  ratings: {
    google: 4.8,
    facebook: 4.7,
    reviewCount: 40,
  },
  differentiator: "family-owned",
  differentiatorLabel: "Family-Owned",
  region: "Cape Town & South Africa",
  serviceAreas: [
    "Cape Town",
    "Johannesburg",
    "Pretoria",
    "Durban",
    "Stellenbosch",
    "Franschhoek",
    "Hermanus",
    "George",
    "Knysna",
    "Nationwide Delivery",
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/leotiles/",
    google: "",
  },
  agencyName: "U-Flow Solutions",
};
```

---

## Step 2 — Update All Data Files

### `src/data/services-residential.ts` → rename concept to "Products & Services"

Replace the residential services array with these Leo Tiles products. Keep the same `Service` interface:

```typescript
export const residentialServices: Service[] = [
  {
    slug: "batavian-floor-tiles",
    title: "Batavian Floor Tiles",
    shortDescription: "Classic Dutch-heritage terracotta floor tiles, handmade to order.",
    description: "Our signature product. Batavian floor tiles are shaped by hand from raw clay, dried slowly, and kiln-fired to produce a warm, characterful tile that only improves with age. Each tile is unique — no two are identical. Available in standard and custom sizes.",
    icon: "Grid3x3",
    signs: ["Looking for authentic terracotta flooring", "Restoring a heritage property", "Want a truly unique handmade product", "Need bespoke sizing not available elsewhere"],
    benefits: ["Every tile is unique — no factory uniformity", "Improves with age and use", "Available in custom sizes to order", "Suitable for indoor and outdoor use"],
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
    benefits: ["Extremely durable — suitable for vehicle traffic", "Natural clay colouring that weathers beautifully", "Classic patterns create visual interest", "Low maintenance once sealed"],
    faqs: [
      { question: "Can klompies be used for driveways?", answer: "Yes — their density makes them suitable for pedestrian and vehicle traffic. Proper bedding and edge restraints are required. We can advise on installation requirements." },
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
      { question: "What size hexagons do you make?", answer: "Our standard hexagon is 150mm point-to-point. Custom sizes available on request — contact us to discuss your project." },
      { question: "Can they be used outdoors?", answer: "Yes, when properly sealed. They work particularly well around pool areas and on patios." },
    ],
  },
  {
    slug: "wine-coolers",
    title: "Fired Clay Wine Coolers",
    shortDescription: "Handcrafted terracotta wine coolers — a unique artisan product.",
    description: "A unique product from the Leo Tiles kiln — handcrafted terracotta wine coolers that use the natural insulating properties of fired clay to keep your bottle cool. A beautiful gift and functional object.",
    icon: "Wine",
    signs: ["Looking for a unique artisan gift", "Want a functional decorative piece", "Interested in the natural cooling properties of terracotta"],
    benefits: ["Natural terracotta keeps wine at cellar temperature", "Handmade — each one unique", "Makes a distinctive gift", "Beautifully complements terracotta tile interiors"],
    faqs: [
      { question: "How do the coolers work?", answer: "Soak the cooler in water for 20 minutes before use. The porous terracotta absorbs water and as it evaporates, it keeps the bottle cool — no electricity required." },
      { question: "Can I order custom quantities?", answer: "Yes, we can produce wine coolers in bulk for corporate gifts or retail. Contact us for wholesale pricing." },
    ],
  },
  {
    slug: "fired-clay-pellets",
    title: "Fired Clay Pellets",
    shortDescription: "Kiln-fired clay aggregate for drainage, horticulture, and construction.",
    description: "A by-product of our tile production — fired clay pellets are used in horticulture as drainage media, in construction as lightweight aggregate, and in aquaponics systems. Natural, inert, and long-lasting.",
    icon: "Layers",
    signs: ["Need drainage media for potted plants or raised beds", "Looking for a natural lightweight aggregate", "Aquaponics or hydroponics growing medium"],
    benefits: ["Natural and chemically inert", "Excellent drainage properties", "Reusable and long-lasting", "Locally produced in Cape Town"],
    faqs: [
      { question: "What sizes are available?", answer: "We produce pellets in 5–10mm and 10–20mm grades. Available in bags or bulk quantities." },
      { question: "Are they suitable for aquaponics?", answer: "Yes — the fired clay is inert and pH-neutral, making it an excellent growing medium for aquaponics and hydroponics systems." },
    ],
  },
  {
    slug: "tile-installation",
    title: "Professional Tile Installation",
    shortDescription: "Expert installation by our own team — we know our tiles better than anyone.",
    description: "Because our tiles are non-standard sizes and require specialist grouting techniques, we offer installation by our own team. We are the only installers in South Africa who fully understand how to work with handmade terracotta — including managing the irregular sizing, correct adhesive selection, and sealant application for long-term durability.",
    icon: "Hammer",
    signs: ["Purchasing Leo Tiles and need professional installation", "Previous installers struggled with non-standard sizing", "Want a complete supply-and-install package"],
    benefits: ["Installers who built the tiles install them", "Correct adhesive and grout selection every time", "Full sealant application included", "Separate quotes always provided for tiles and installation"],
    faqs: [
      { question: "Do I have to use your installation team?", answer: "No — we can supply tiles only. However, because of the non-standard sizing and specialist grouting required, we strongly recommend either our team or an experienced terracotta installer." },
      { question: "How far do you travel for installation?", answer: "Our team primarily covers the Western Cape. For projects in other provinces, we can recommend experienced installers or work with your preferred contractor remotely." },
    ],
  },
];
```

### `src/data/services-commercial.ts`

Replace with these add-on/accessory products:

```typescript
export const commercialServices: Service[] = [
  {
    slug: "tile-adhesive",
    title: "Tile Adhesive",
    shortDescription: "Professional-grade adhesive recommended for terracotta tile installation.",
    description: "We stock and supply the tile adhesive we use in our own installations — a flexible, polymer-modified adhesive suitable for terracotta tiles on both floors and walls.",
    icon: "Pipette",
    signs: ["Installing Leo Tiles yourself", "Need adhesive matched to terracotta", "Want the same product our installation team uses"],
    benefits: ["Specifically selected for terracotta compatibility", "Flexible — handles minor substrate movement", "Available to purchase with your tile order"],
    faqs: [{ question: "How much adhesive do I need?", answer: "As a guide, allow 4–5kg of adhesive per m² for floor tiles. We can advise based on your project dimensions." }],
  },
  {
    slug: "terracotta-sealant",
    title: "Terracotta Sealant",
    shortDescription: "Penetrating sealant to protect and enhance your terracotta tiles.",
    description: "All terracotta tiles require sealing before and after grouting. Our recommended penetrating sealant protects against staining, enhances the natural colour, and is suitable for both indoor and outdoor use.",
    icon: "Shield",
    signs: ["New terracotta tiles need sealing", "Existing unsealed tiles starting to stain", "Outdoor installation requiring extra protection"],
    benefits: ["Penetrating formula — doesn't peel or flake", "Enhances natural terracotta colour", "Suitable for wet areas, kitchens, and outdoor use", "Easy to apply — brush or roller"],
    faqs: [{ question: "How often do I need to reseal?", answer: "High-traffic areas typically need resealing every 3–5 years. Low-traffic areas can go longer. We recommend an annual inspection." }],
  },
  {
    slug: "tile-grout",
    title: "Terracotta-Compatible Grout",
    shortDescription: "Grout selected to complement handmade terracotta tile tones.",
    description: "Standard white grout looks wrong with terracotta. We supply grout in tones that complement the warm, earthy palette of our tiles — from natural sand to deep charcoal.",
    icon: "PaintBucket",
    signs: ["Tiling with Leo Tiles and need matching grout", "Want a cohesive warm-toned finish", "Previous grout clashed visually with terracotta"],
    benefits: ["Colour-matched to terracotta tones", "Available in multiple shades", "Stain-resistant formulation", "Compatible with all our tile products"],
    faqs: [{ question: "What grout colours do you stock?", answer: "We stock sand, buff, charcoal, and antique white. Contact us for current availability and to discuss which tone suits your project." }],
  },
  {
    slug: "cleaning-materials",
    title: "Terracotta Cleaning Products",
    shortDescription: "Specialist cleaners for maintaining handmade terracotta floors.",
    description: "Standard floor cleaners can damage terracotta sealant and strip the natural patina that makes these tiles beautiful. We stock and recommend pH-neutral cleaners and efflorescence removers specifically suited to terracotta.",
    icon: "Sparkles",
    signs: ["White mineral deposits appearing on tiles", "Existing cleaner stripping the sealant", "Need a maintenance cleaner safe for terracotta"],
    benefits: ["pH-neutral — safe for sealed terracotta", "Efflorescence remover clears mineral deposits", "Preserves the sealant and natural finish", "Suitable for regular mopping"],
    faqs: [{ question: "Can I use standard floor cleaner on terracotta?", answer: "We don't recommend it. Many standard cleaners are too alkaline and can degrade the sealant over time. Our recommended cleaners are pH-neutral and safe for regular use." }],
  },
  {
    slug: "bespoke-orders",
    title: "Bespoke & Custom Orders",
    shortDescription: "Custom tile sizes, shapes, and bulk orders for architectural projects.",
    description: "One of our biggest advantages over competitors: we can manufacture to any size or shape. Architects, interior designers, and property developers work with us to specify custom formats for unique projects — including large-format tiles, special profiles, and heritage replacement tiles.",
    icon: "Ruler",
    signs: ["Standard sizes don't fit your project", "Heritage restoration requiring matched tiles", "Architect or designer specifying a unique format", "Large volume project requiring consistent supply"],
    benefits: ["Any size manufactured to your specification", "Heritage and restoration matching available", "Consistent supply from a single kiln source", "Direct relationship with the manufacturer"],
    faqs: [
      { question: "What's the minimum order for custom sizes?", answer: "Custom size minimum orders depend on the format. Contact us with your project details and we'll advise on feasibility and lead times." },
      { question: "Can you match existing tiles for restoration?", answer: "Yes — this is one of our specialties. Bring us a sample tile and we'll work to match the size, colour, and texture as closely as possible." },
    ],
  },
  {
    slug: "nationwide-delivery",
    title: "Nationwide Delivery",
    shortDescription: "Careful delivery of your handmade tiles to anywhere in South Africa.",
    description: "We deliver nationwide via specialist ceramic freight. Because our tiles are handmade and therefore more fragile than factory tiles, we pack with care and work with couriers experienced in handling ceramic goods.",
    icon: "Truck",
    signs: ["Project is outside Cape Town", "Need tiles delivered to site", "Large order requiring freight coordination"],
    benefits: ["Nationwide delivery available", "Specialist ceramic packing to prevent breakage", "Delivery costs quoted per order based on volume and destination", "Tracking provided for all shipments"],
    faqs: [{ question: "How long does delivery take?", answer: "Delivery to major centres typically takes 3–5 business days after production is complete. Remote areas may take longer. We'll confirm estimated delivery when your order is confirmed." }],
  },
];
```

### `src/data/service-areas.ts`

Replace with South African areas:

```typescript
export const serviceAreas: ServiceArea[] = [
  { city: "Cape Town", state: "WC", slug: "terracotta-tiles-cape-town", description: "Leo Tiles is based in Cape Town, serving the Western Cape with direct supply and installation.", highlights: ["Direct from the kiln", "Installation team available", "Same-day collection possible"] },
  { city: "Stellenbosch", state: "WC", slug: "terracotta-tiles-stellenbosch", description: "Terracotta tiles for Stellenbosch wine estates, heritage homes, and new builds.", highlights: ["Perfect for wine estate aesthetics", "Heritage restoration experience", "Western Cape delivery"] },
  { city: "Franschhoek", state: "WC", slug: "terracotta-tiles-franschhoek", description: "Handmade terracotta for Franschhoek's distinctive Cape Dutch and French heritage properties.", highlights: ["Heritage property specialists", "Cape Dutch restoration matching", "Design consultation available"] },
  { city: "Johannesburg", state: "GP", slug: "terracotta-tiles-johannesburg", description: "Nationwide delivery of handmade terracotta tiles to Johannesburg and Gauteng.", highlights: ["Nationwide freight available", "Architect and designer accounts", "Bulk order pricing"] },
  { city: "Pretoria", state: "GP", slug: "terracotta-tiles-pretoria", description: "Supplying Pretoria architects and homeowners with authentic handmade terracotta.", highlights: ["Nationwide delivery", "Custom sizes available", "Direct from manufacturer"] },
  { city: "Durban", state: "KZN", slug: "terracotta-tiles-durban", description: "Terracotta tiles delivered to KwaZulu-Natal for coastal and heritage projects.", highlights: ["Coastal installation experience", "KZN freight available", "Custom orders welcome"] },
  { city: "George", state: "WC", slug: "terracotta-tiles-george", description: "Garden Route deliveries of handmade terracotta floor tiles.", highlights: ["Garden Route delivery", "Specialist packing", "Western Cape regional supply"] },
  { city: "Knysna", state: "WC", slug: "terracotta-tiles-knysna", description: "Natural terracotta tiles for Knysna's coastal homes and holiday properties.", highlights: ["Coastal property specialists", "Natural material aesthetic", "Supply and install options"] },
];
```

### `src/data/reviews.ts`

Replace with tile-appropriate reviews:

```typescript
export const reviews: Review[] = [
  { id: 1, name: "Anita van der Berg", initial: "A", rating: 5, platform: "google", platformRating: "4.8", text: "We used Leo Tiles for a full kitchen and courtyard renovation. The quality of the handmade tiles is unlike anything available in the big tile stores. Mark was incredibly helpful in guiding us on sizing and sealant. The finished result is stunning." },
  { id: 2, name: "James Oosterbroek", initial: "J", rating: 5, platform: "google", platformRating: "4.8", text: "Restoring a 1930s Cape Dutch home and needed tiles that matched the original terracotta. Leo Tiles produced custom-sized tiles that were indistinguishable from the originals. Exceptional craftsmanship and a pleasure to work with." },
  { id: 3, name: "Sarah Mitchell", initial: "S", rating: 5, platform: "facebook", platformRating: "4.7", text: "Ordered hexagon tiles for our bathroom and they are absolutely beautiful. The handmade quality gives them a warmth that no factory tile can replicate. Delivery was well packaged, not a single tile broken." },
  { id: 4, name: "Rudi Swanepoel", initial: "R", rating: 5, platform: "google", platformRating: "4.8", text: "As an architect I've specified Leo Tiles on three projects now. The ability to order any size to specification is invaluable for bespoke work. Lead times are honest and the product is consistent in quality." },
  { id: 5, name: "Charlene Fortuin", initial: "C", rating: 5, platform: "facebook", platformRating: "4.7", text: "Mark and his team installed our Batavian floor tiles and the standard of workmanship was excellent. They clearly know these tiles better than anyone else — perfect alignment, correct grout, and proper sealing." },
  { id: 6, name: "Thomas Hendricks", initial: "T", rating: 5, platform: "google", platformRating: "4.8", text: "Bought Klompies for our driveway and garden path. A year later they look even better — beautiful weathering on the clay surface. The advice we got on bedding and installation was spot on." },
];
```

### `src/data/brands.ts`

Replace with materials/accreditations Leo Tiles can reference:

```typescript
export const brands: Brand[] = [
  { name: "Handmade Clay", slug: "handmade-clay" },
  { name: "Kiln-Fired", slug: "kiln-fired" },
  { name: "Since 1970s", slug: "since-1970s" },
  { name: "Cape Town Made", slug: "cape-town-made" },
  { name: "Bespoke Orders", slug: "bespoke-orders" },
  { name: "Nationwide Delivery", slug: "nationwide-delivery" },
  { name: "Heritage Restoration", slug: "heritage-restoration" },
];
```

### `src/data/faqs.ts`

Replace with tile-specific FAQs:

```typescript
export const homepageFAQs: FAQ[] = [
  { question: "What makes Leo Tiles different from other tile suppliers?", answer: "Every tile we produce is handmade from raw clay and kiln-fired in our own facility in Kraaifontein. Unlike factory tiles, no two Leo Tiles are identical — the variation in tone and texture is what gives them their character and warmth. We have been doing this for over 50 years." },
  { question: "How long does it take to produce a custom order?", answer: "Standard production takes 4–8 weeks depending on order size. In winter, the clay drying process takes longer, which can extend lead times. We always confirm estimated production time when you place your order. We strongly recommend contacting us as early as possible in your project timeline." },
  { question: "Do you deliver outside of Cape Town?", answer: "Yes, we deliver nationwide across South Africa via specialist ceramic freight. We pack tiles carefully to minimise breakage during transit. Delivery cost is quoted per order based on volume and destination." },
  { question: "Do the tiles need to be sealed?", answer: "Yes — all terracotta tiles must be sealed before and after grouting to prevent staining and to enhance the natural colour. We supply our recommended penetrating sealant and can advise on the correct process for your application." },
  { question: "Can you manufacture tiles to a custom size?", answer: "Yes, this is one of our most-requested services. We can produce tiles in virtually any size to order. This makes us especially popular with architects, interior designers, and heritage restoration projects. Contact us with your specifications." },
  { question: "Do you offer installation?", answer: "Yes, our own installation team is available primarily in the Western Cape. Because our tiles have non-standard sizing and require specialist grouting technique, we always recommend using experienced installers familiar with handmade terracotta. We always quote tiles and installation separately so you can make the decision that works for your project." },
  { question: "What is your minimum order quantity?", answer: "There is no strict minimum for standard products — we can supply from a small quantity upward. For custom sizes, minimum quantities depend on the format. Contact us to discuss your specific project." },
];

export const residentialFAQs: FAQ[] = [
  { question: "Which tile is best for kitchen floors?", answer: "Our Batavian Floor Tiles or Hexagon tiles work beautifully in kitchens. Both must be sealed with our penetrating sealant to protect against cooking oils and spills. The sealed surface is easy to clean and develops a lovely patina over time." },
  { question: "Can terracotta tiles be used in bathrooms?", answer: "Yes, when properly sealed. We recommend two coats of sealant before grouting and one coat after. Choose a grout that complements the warm terracotta tones — we supply colour-matched options." },
  { question: "How do I maintain terracotta floors?", answer: "Use a pH-neutral cleaner — not standard household floor cleaners, which can damage the sealant. Reseal high-traffic areas every 3–5 years. We supply recommended maintenance products." },
  { question: "Can I use terracotta tiles outdoors?", answer: "Yes — our tiles are kiln-fired to a temperature that makes them suitable for outdoor use. Proper sealing is essential for outdoor applications. Klompies are particularly popular for courtyards and pathways." },
];

export const commercialFAQs: FAQ[] = [
  { question: "Do you work with architects and interior designers?", answer: "Yes, we regularly work with design professionals on bespoke specifications. We can supply samples, technical data sheets, and material samples for project documentation. Contact us to set up a trade account." },
  { question: "Can you supply large volumes for a development project?", answer: "Yes, we can accommodate larger orders. Lead times for large volume orders are discussed at the time of enquiry. We recommend engaging us early in the project timeline to ensure production aligns with your construction schedule." },
  { question: "Do you provide tiles for heritage restoration projects?", answer: "Yes, heritage restoration is a specialty. Bring us a sample tile and we will work to match the size, colour, and surface texture as closely as possible. We have matched original terracotta tiles for several Cape Dutch and Victorian-era restoration projects." },
  { question: "Can you produce tiles for a commercial hospitality project?", answer: "Absolutely. Wine estates, boutique hotels, and restaurants are among our most frequent commercial clients. We are comfortable working to tight project timelines and can coordinate directly with your contractor or project manager." },
];
```

---

## Step 3 — Update Text Content in Components

### `src/components/sections/HeroSection.tsx`

Update the hero headline to:
```
"Handmade.\nKiln-Fired.\nYours."
```

**Hero background image — use Firecrawl MCP to source this:**

You have Firecrawl MCP connected. Use it to scrape Pexels for a suitable hero image. Run a Firecrawl scrape on the following URL and extract a direct image URL of a high-resolution terracotta tile or clay crafting photo:

```
https://www.pexels.com/search/terracotta%20tiles%20handmade/
```

From the results, pick a landscape-orientation photo that shows either:
- Handmade clay tiles being laid by hand, OR
- A warm terracotta floor in a residential or heritage interior

Once you have the direct image URL (format: `https://images.pexels.com/photos/[id]/pexels-photo-[id].jpeg`), replace the `<Image src="/hero-bg.png" ...>` in HeroSection.tsx with a Next.js `<Image>` using that URL. Add `images.pexels.com` to the `remotePatterns` array in `next.config.ts` if it is not already there.

Replace the inline quote form labels:
- "Your Name" → "Your Name"
- "Phone Number" → "Phone Number"  
- "Email Address" → "Email Address"
- "Service Area" dropdown → "Tile Product" dropdown, with options: Batavian Floor Tiles, Dutch Klompies, Hexagon Tiles, Wine Coolers, Clay Pellets, Custom Order
- Button: "Get a Quote"

### `src/components/sections/AboutBrief.tsx`

Replace highlights array with:
```typescript
const highlights = [
  "Handmade from raw clay since the 1970s",
  "Kiln-fired in our own Cape Town facility",
  "Custom sizes manufactured to specification",
  "Supply and installation available nationwide",
];
```

Update the copy to reference Leo Tiles, terracotta manufacturing, and 50+ years in business.

**Image — use Firecrawl MCP:** Scrape `https://www.pexels.com/search/clay%20tiles%20hands%20handmade/` and extract a direct Pexels image URL showing hands working with clay or terracotta tiles. Use that URL in the `<Image>` component replacing the existing Pexels plumber photo.

### `src/components/sections/FounderStory.tsx`

Update copy to reference Mark Kelly and the Leo Tiles founding story. The tone should be warm and authentic — not corporate. Reference the kiln, the handmade process, and the 50+ year legacy.

**Founder photo — use Firecrawl MCP:** Scrape `https://www.pexels.com/search/craftsman%20pottery%20clay/` and extract a direct Pexels image URL of a craftsman or artisan working with clay. Use that URL as the founder photo placeholder until Mark provides a real photo.

### `src/components/sections/PainPoints.tsx`

Replace the plumbing pain points with tile buyer pain points:

```typescript
const painPoints = [
  { icon: AlertTriangle, title: "Factory Tiles Lack Character", description: "Mass-produced tiles look identical. Handmade terracotta develops warmth, variation, and patina that no factory can replicate." },
  { icon: Clock, title: "Long Lead Times Catch People Off Guard", description: "Handmade tiles take time. We're upfront about production schedules — contact us early in your project so we can deliver on time." },
  { icon: Layers, title: "Wrong Installer Ruins the Result", description: "Non-standard sizing requires specialist installation. Our own team has installed thousands of square metres of our tiles — nobody knows them better." },
  { icon: Droplets, title: "Unsealed Tiles Stain Permanently", description: "Terracotta must be sealed correctly before and after grouting. We supply the right sealant and advise on the correct process." },
  { icon: Wrench, title: "Getting a Custom Size Quote Takes Weeks", description: "We respond to custom enquiries fast. Tell us your project dimensions and we'll confirm feasibility and pricing quickly." },
  { icon: DollarSign, title: "Grout That Clashes Visually", description: "White grout kills the warmth of terracotta. We supply colour-matched grout in natural tones that complement the tile, not fight it." },
];
```

### `src/components/layout/TopBar.tsx`

Remove the "License #" reference entirely. Replace with:
```
"50+ Years of Handmade Terracotta · Cape Town, South Africa"
```

Remove the star ratings from the top bar — keep just the tagline and contact links.

### `src/components/layout/Footer.tsx`

- Change "Plumbing Services" sub-label under logo to "Handmade Terracotta Tiles"
- Change the first column copy to reflect Leo Tiles positioning
- Change "Residential" column header to "Products"
- Change "Commercial" column header to "Accessories & Services"
- Add Instagram link alongside Facebook using `siteConfig.socialLinks.instagram`
- **Important:** Import the `Instagram` icon from `lucide-react` at the top of the file — it is not currently imported and the build will fail without it. Add it to the existing import line: `import { Droplets, Phone, Mail, Facebook, Instagram } from "lucide-react";`
- Render the Instagram icon the same way as the Facebook icon, linking to `siteConfig.socialLinks.instagram`
- Remove License # reference from anywhere in footer

### `src/components/sections/WhyChooseUs.tsx`

Replace differentiators with:

```typescript
const differentiators = [
  { icon: Flame, title: "Made in Our Own Kiln", description: "Every tile is produced in our Kraaifontein facility. We control the entire process from raw clay to finished product." },
  { icon: Ruler, title: "Custom Sizes to Specification", description: "We manufacture to order. Any size, any shape — specify what your project needs and we'll produce it." },
  { icon: Clock, title: "50+ Years of Craft", description: "More than five decades of refining the art of handmade terracotta. Our experience shows in every tile we produce." },
  { icon: Shield, title: "Heritage Restoration Specialists", description: "We've matched original terracotta for Cape Dutch, Victorian, and mid-century restorations across South Africa." },
  { icon: Truck, title: "Nationwide Delivery", description: "We deliver carefully packed tiles to any province. Ceramic freight specialists handle every shipment." },
  { icon: Users, title: "Direct from the Maker", description: "No middlemen. When you call Leo Tiles, you speak to the people who made your tiles." },
];
```

**WhyChooseUs sticky image — use Firecrawl MCP:** Scrape `https://www.pexels.com/search/terracotta%20floor%20interior/` and extract a portrait-orientation Pexels image URL showing a warm terracotta interior. Replace the existing plumber photo in the sticky right column.

### `src/components/sections/WorkGallery.tsx`

**Gallery images — use Firecrawl MCP to source all 8 images:**

For each gallery slot below, scrape the suggested Pexels search URL, extract a suitable square-crop image URL, and use it. Append `?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800` to each URL for consistent cropping.

| Slot | Label | Category | Pexels search URL |
|------|-------|----------|-------------------|
| 1 | Batavian Floor Installation | Residential | `https://www.pexels.com/search/terracotta%20floor%20tiles/` |
| 2 | Courtyard Klompies Paving | Outdoor | `https://www.pexels.com/search/clay%20paving%20courtyard/` |
| 3 | Hexagon Bathroom Feature | Residential | `https://www.pexels.com/search/hexagon%20tiles%20bathroom/` |
| 4 | Heritage Restoration | Restoration | `https://www.pexels.com/search/old%20terracotta%20floor%20heritage/` |
| 5 | Wine Estate Entrance | Commercial | `https://www.pexels.com/search/terracotta%20wine%20estate/` |
| 6 | Clay Production Process | Craft | `https://www.pexels.com/search/craftsman%20clay%20kiln/` |
| 7 | Kitchen Floor Detail | Residential | `https://www.pexels.com/search/terracotta%20kitchen%20floor/` |
| 8 | Outdoor Seating Area | Outdoor | `https://www.pexels.com/search/terracotta%20outdoor%20patio/` |

If a search returns no relevant results, fall back to `https://www.pexels.com/search/terracotta/` and pick the most suitable image for that slot.

Update `categoryColors` to include `Outdoor`, `Restoration`, and `Craft` entries alongside the existing ones.

### `src/components/sections/ServiceAreas.tsx`

Update header copy:
- Title: "We Supply Across South Africa"
- Subtext: "From our kiln in Cape Town to your project anywhere in the country — handmade tiles delivered with care."

---

## Step 4 — Remove / Rename Plumbing-Specific References

Search the entire codebase for the following and update all instances:

- "plumber" / "plumbing" → "tile specialist" / "tiling" (context-dependent — use judgment)
- "Licensed & Insured" → "Family-Owned & Craft-Certified"
- "24/7 Emergency Service" → "Custom Orders Welcome"
- "Free Quote" → "Get a Quote" (keep the CTA but adjust the framing)
- "Schedule Service" → "Start Your Order"
- "License #" → remove entirely
- `siteConfig.license` references → remove from TopBar, HeroSection, ResidentialPage
- Emergency plumbing sections in `[area-slug]/page.tsx` → replace with a "Long Lead Times" honest section explaining production schedules
- The Siren / AlertTriangle emergency section in area pages → replace with a "Why Handmade?" trust section

---

## Step 5 — Build the Quote Estimator Feature

Create a new page at `src/app/get-a-quote/page.tsx` and a new component at `src/components/sections/QuoteEstimator.tsx`.

### Pricing Logic

```
Tile price: R800–R1,200 per m² (midpoint default: R1,000/m²)
Installation price: R150–R250 per m² (midpoint default: R200/m²)
Wastage buffer: add 10% to all m² calculations automatically
Sealant: flat R85 per m² (optional add-on)
Grout: flat R45 per m² (optional add-on)
```

### Component: `QuoteEstimator.tsx`

Build an interactive React client component (`"use client"`) with the following:

**Input Section:**
1. **Product selector** — dropdown: Batavian Floor Tiles / Dutch Klompies / Hexagon Tiles / Custom Size
2. **Area input method** — toggle between:
   - "Enter m² directly" → number input for square metres
   - "Enter room dimensions" → two number inputs (length × width in metres), auto-calculates m²
3. **Installation toggle** — checkbox: "Include installation quote" (adds installation line)
4. **Accessories** — checkboxes: "Include sealant" / "Include grout"
5. **Photo upload** — optional file input: "Upload a photo of your space (optional — helps us give a more accurate quote)"

**Output Section (updates live as user changes inputs):**

Display a clean quote card with:
- Calculated area (with 10% wastage buffer shown)
- Line item: Tiles — R[low] to R[high] (range based on R800–R1,200/m²)
- Line item (if selected): Installation — R[low] to R[high] (range based on R150–R250/m²)
- Line item (if selected): Sealant — R[amount]
- Line item (if selected): Grout — R[amount]
- **Total range: R[low total] to R[high total]**
- Disclaimer text: "This is an estimated guide price. Final pricing is confirmed when you contact us — custom sizes, site conditions, and project complexity may affect the final quote."

**Submit Section:**
Below the quote card, render a form to send the enquiry:
- Name (required)
- Email (required)
- Phone (required)
- Message (pre-filled with: "I'd like a quote for approximately [X]m² of [Product]. Estimated range: R[low]–R[high].")
- Submit button: "Send My Quote Request"

On submit, use a `mailto:` link fallback (no backend needed) OR a Formspree endpoint if the client has one. For now, use `mailto:mark@leotiles.co.za` with subject "Quote Request from leotiles.co.za" and body pre-filled from the form fields.

**Photo upload handling:**
The photo does not need to be submitted programmatically — add a note below the photo input: "Attach your photo to the email after clicking 'Send My Quote Request', or WhatsApp it to +27 79 150 0160."

### Page: `src/app/get-a-quote/page.tsx`

```typescript
import QuoteEstimator from "@/components/sections/QuoteEstimator";

export const metadata = {
  title: "Get a Quote | Leo Tiles",
  description: "Estimate the cost of your handmade terracotta tile project and send a quote request to Leo Tiles.",
};

export default function GetAQuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-stone-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-4">Get a Quote</h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            Use the estimator below to get a guide price for your project, then send us your details and we'll confirm exact pricing.
          </p>
        </div>
      </section>
      <QuoteEstimator />
    </>
  );
}
```

### Add "Get a Quote" to the navigation

In `MainNav.tsx` and mobile menu, add a link to `/get-a-quote` as a highlighted CTA item (style it differently — use a rust-coloured background button rather than a plain link).

---

## Step 6 — Update Contact Section

In `src/components/sections/ContactSection.tsx`:

- Change "Service Area" dropdown to "Product of Interest" with tile product options
- Change "How can we help?" placeholder to "Tell us about your project — dimensions, tile type, installation needs..."
- Update form submit to `mailto:mark@leotiles.co.za` with pre-filled subject line
- Embed Google Maps for 30 Industrial Road, Kraaifontein (replace the placeholder div with an actual `<iframe>` embed of the Google Maps location: coordinates -33.8417622, 18.7304505)

---

## Step 7 — Update Area Pages `[area-slug]/page.tsx`

The area pages should be adapted for Leo Tiles' geographic model (supply, not service-area coverage). Make these changes:

- Change page title format from "Plumber in [City]" to "Terracotta Tiles in [City]"
- Remove the 24/7 Emergency section entirely
- Replace it with a "Production & Delivery" section explaining lead times and freight
- Replace the "Why You Need a Professional Plumber" section with "Why Architects & Homeowners in [City] Choose Leo Tiles"
- Keep the product grid (use `residentialServices` as the product list)
- Keep the process steps but relabel them: 1. Enquire, 2. Sample & Specify, 3. Production, 4. Delivery & Installation

---

## Step 8 — Update Page Copy Across All Static Pages

### `src/app/residential/page.tsx` → rename to Products page conceptually

- Title: "Our Terracotta Tile Products"
- Subheading: "Handmade. Kiln-Fired. Built to Last."
- Remove all plumbing-specific copy

### `src/app/commercial/page.tsx` → rename to Accessories & Services conceptually

- Title: "Accessories, Materials & Installation Services"
- Subheading: "Everything You Need for a Complete Terracotta Project"
- Remove all plumbing-specific copy

### `src/app/about-us/page.tsx`

- Update bio copy to reflect Mark Kelly's story, 50+ years of tile-making, Kraaifontein facility
- **Founder photo — use Firecrawl MCP:** Scrape `https://www.pexels.com/search/artisan%20craftsman%20workshop/` and extract a suitable portrait Pexels image URL. Use it as the founder photo placeholder.
- Update core values to: Craft, Authenticity, Patience, Quality, Legacy
- Update mission: "To produce the finest handmade terracotta tiles in South Africa, preserving a craft that has been lost everywhere else."
- Update vision: "To remain the name architects and homeowners trust when only a genuine handmade tile will do."

---

## Step 9 — Blog Posts

**Important:** The blog in this codebase is powered entirely by **Sanity CMS** — the `blog/[slug]/page.tsx` and `blog/page.tsx` files fetch posts from Sanity, not from `src/data/blog-posts.ts`. That file is never imported anywhere in the live codebase and updating it will have no visible effect on the site.

Do the following instead:

1. Leave `src/data/blog-posts.ts` as-is or delete it — it is dead code.
2. Do NOT attempt to wire blog-posts.ts into the Sanity blog pages.
3. For the mockup/audit purposes, the blog listing page will simply show "No posts yet. Add your first post in the Studio." — this is the existing empty-state behaviour and is acceptable for a mockup.
4. Add a `// TODO: Add blog posts via Sanity Studio at /studio before going live` comment at the top of `src/app/blog/page.tsx` so it's clear for handoff.

If you want to show populated blog cards for the mockup demo, the only correct way is to add posts directly in the Sanity Studio at `/studio`. Create 2–3 posts with the following titles and content stubs:
- "How to Seal Terracotta Tiles: The Complete Guide"
- "Handmade vs Factory Terracotta: What's the Actual Difference?"
- "Restoring Cape Dutch Heritage Floors: Why the Tile Matters"

---

## Step 10 — Final Checks

After all changes are made:

1. Run `npm run build` and fix any TypeScript errors
2. Ensure all `siteConfig.license` references are removed — if any component crashes without it, add a guard `{siteConfig.license && <span>License #{siteConfig.license}</span>}`
3. Check mobile layout on all main pages
4. Verify the QuoteEstimator calculates correctly with edge cases (0 m², very large areas)
5. Confirm the mailto link on the quote form pre-fills correctly in the browser
6. Check that the area pages don't reference any emergency/24hr plumbing content
7. Update `src/app/layout.tsx` JSON-LD schema: change `@type` from `LocalBusiness` to `Store`, update `description`, remove `openingHours: "Mo-Su 00:00-23:59"` (not appropriate for a tile manufacturer), remove `priceRange: "$$"` and replace with `"priceRange": "R800–R3,500/m²"`

---

## Notes for Claude Code

- Do not rebuild from scratch — adapt the existing files
- Keep all component file names the same — only change content
- Preserve the Sanity CMS blog integration exactly as-is
- The `siteConfig.ts` is the single source of truth — if a value needs to be different, add it to siteConfig first, then reference it
- All currency is ZAR (South African Rand, R) — no USD references should remain anywhere
- The site is for a South African audience — use South African English spelling (e.g., "colour", "sealant", "programme")
- Do not add any AI badge, "Built with Claude" label, or similar — the footer already credits U-Flow Solutions
- **Firecrawl MCP:** You have Firecrawl MCP connected. Use it to scrape Pexels search result pages and extract direct image URLs (format: `https://images.pexels.com/photos/[id]/pexels-photo-[id].jpeg`). All images in this project should be sourced this way — do not invent or guess image URLs.
- **next.config.ts remotePatterns:** After sourcing images via Firecrawl, ensure `images.pexels.com` is listed in the `remotePatterns` array in `next.config.ts`. If it is not already present, add it:
```typescript
remotePatterns: [
  { protocol: 'https', hostname: 'images.pexels.com' },
],
```
