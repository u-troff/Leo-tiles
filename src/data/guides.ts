export interface GuideStep {
  number: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface GroutOption {
  label: string;
  name: string;
  description: string;
  image: string;
  accent: "gold" | "cream" | "muted";
}

export interface PatinaTip {
  icon: "calendar" | "mop" | "sun";
  title: string;
  body: string;
}

export interface MaintenanceItem {
  when: string;
  action: string;
}

export interface Guide {
  slug: string;
  audience: "For installers" | "For homeowners";
  title: string;
  /** Shorter hero display title when different from card title */
  heroTitle?: string;
  heroImage: string;
  intro: string;
  stepsLabel: string;
  stepsIntro: string;
  steps: GuideStep[];
  showTonalHarmony: boolean;
  groutOptions?: GroutOption[];
  showPatina: boolean;
  patinaTips?: PatinaTip[];
  maintenanceSchedule?: MaintenanceItem[];
  relatedProductSlugs: string[];
  relatedGuideSlugs: string[];
}

export const guides: Guide[] = [
  {
    slug: "cape-courtyard-garden",
    audience: "For homeowners",
    title: "Pairing terracotta with a Cape courtyard garden",
    heroTitle: "Cape Courtyard Terracotta",
    heroImage: "/images/design/courtyard.jpg",
    intro:
      "A homeowner's guide to choosing tone and pattern for an outdoor room — so clay, planting, and light work as one composition.",
    stepsLabel: "Planning Guide",
    stepsIntro:
      "Start with how you use the courtyard, then choose format, joint, and tone so the floor supports planting rather than competing with it.",
    steps: [
      {
        number: "1",
        title: "Read the light",
        body: "Cape courtyards often get harsh midday sun and deep afternoon shade. Warmer kiln tones hold up better in bright light; cooler mid-tones suit shaded cloisters.",
        image: "/images/design/courtyard.jpg",
        imageAlt: "Cape courtyard with terracotta paving",
      },
      {
        number: "2",
        title: "Choose a format for the room",
        body: "Larger Batavian squares calm a busy garden edge. Klompies in herringbone add movement along paths and thresholds without overwhelming planting beds.",
        image: "/images/design/herringbone-install.jpg",
        imageAlt: "Herringbone path pattern",
      },
      {
        number: "3",
        title: "Plan joints with planting",
        body: "Wider outdoor joints (around 25mm on 300×300mm) forgive handmade size variation and leave room for moss or fine gravel where you want a softer edge.",
        image: "/images/design/terrace.jpg",
        imageAlt: "Terrace joints and planting edge",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description:
          "Tone-on-tone with terracotta so the courtyard reads as a continuous field — ideal beside lush planting.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description:
          "A lighter joint that draws a clean graphic grid — useful when architecture is white and modernist.",
        image: "/images/design/courtyard.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description:
          "Dark joints that hide weathering and leaf litter — practical for high-use outdoor rooms.",
        image: "/images/design/terrace.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Seasonal sealing",
        body: "Reseal high-exposure courtyard floors yearly so water sheds cleanly after winter rains.",
      },
      {
        icon: "mop",
        title: "pH-neutral care",
        body: "Skip acid cleaners. A mild pH-neutral soap keeps minerals in the clay intact.",
      },
      {
        icon: "sun",
        title: "Expect deepening tone",
        body: "Sun-facing terracotta matures over years — plan furniture and pots for that richer finish.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Texture inspection & spot re-seal" },
      { when: "After storms", action: "Rinse grit from joints" },
    ],
    relatedProductSlugs: ["batavian-collection", "dutch-klompie-pavers"],
    relatedGuideSlugs: ["natural-tone-variation", "joint-width-for-outdoor-terracotta"],
  },
  {
    slug: "kitchen-floors-patina",
    audience: "For homeowners",
    title: "Kitchen floors that only get better with age",
    heroTitle: "Kitchen Floors & Patina",
    heroImage: "/images/design/kitchen.jpg",
    intro:
      "Why a lived-in patina is a feature of terracotta, not a flaw — and how to choose, seal, and live with a kitchen floor that improves with use.",
    stepsLabel: "Living Guide",
    stepsIntro:
      "Kitchens are the hardest rooms we floor. Plan for oil, water, and foot traffic from day one so the clay ages with character, not damage.",
    steps: [
      {
        number: "1",
        title: "Accept natural variation",
        body: "No two handmade tiles fire the same. Mix tiles from multiple crates when laying so tone variation reads as intentional across the kitchen.",
        image: "/images/design/kitchen.jpg",
        imageAlt: "Kitchen terracotta floor",
      },
      {
        number: "2",
        title: "Seal before you cook",
        body: "Apply a breathable sealer before and after grouting. Wet zones around sinks need particular care — ask us for a kitchen-grade schedule.",
        image: "/images/design/tile-texture.jpg",
        imageAlt: "Tile texture detail",
      },
      {
        number: "3",
        title: "Clean for longevity",
        body: "Daily sweep, occasional mop with pH-neutral soap. Avoid steam mops and harsh degreasers that strip sealer.",
        image: "/images/design/dining-room.jpg",
        imageAlt: "Dining adjacent to kitchen floor",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description: "Minimises the grid so the kitchen feels calm and continuous underfoot.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description: "Defines every tile edge — graphic and practical for spotting spills early.",
        image: "/images/design/kitchen.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description: "Hides everyday grit and adds weight beside timber cabinetry.",
        image: "/images/design/dining-room-2.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Quarterly check",
        body: "Inspect high-traffic lanes between fridge, sink, and stove — re-seal early if water darkens the clay.",
      },
      {
        icon: "mop",
        title: "pH-neutral care",
        body: "Preserve the matte finish with gentle soap only — never acid-based tile cleaners.",
      },
      {
        icon: "sun",
        title: "Patina as feature",
        body: "Slight darkening at thresholds is expected. It records how the kitchen is lived in.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Texture inspection & spot re-seal" },
      { when: "Bi-annual", action: "Professional deep buffing (optional)" },
    ],
    relatedProductSlugs: ["batavian-collection", "hexagon-terracotta"],
    relatedGuideSlugs: ["sealing-and-maintaining", "natural-tone-variation"],
  },
  {
    slug: "poolside-decks",
    audience: "For homeowners",
    title: "Poolside decks: tile for bare feet and wet edges",
    heroTitle: "Poolside Terracotta",
    heroImage: "/images/design/pool-deck.jpg",
    intro:
      "What to look for when choosing a deck tile that stays comfortable underfoot around water — slip, heat, seal, and joint.",
    stepsLabel: "Poolside Guide",
    stepsIntro:
      "Pool surrounds demand grip, coolness underfoot, and a seal that shrugs off splash without looking plastic.",
    steps: [
      {
        number: "1",
        title: "Prioritise slip resistance",
        body: "Our outdoor terracotta, properly sealed, delivers a high slip rating. Keep joints clean so algae cannot build a slick film.",
        image: "/images/design/pool-deck.jpg",
        imageAlt: "Pool deck terracotta",
      },
      {
        number: "2",
        title: "Manage heat",
        body: "Terracotta stays more comfortable than dark stone in Cape sun, but always dry-lay a sample in your own exposure before locking a tone.",
        image: "/images/design/terrace.jpg",
        imageAlt: "Sunlit terrace paving",
      },
      {
        number: "3",
        title: "Detail the wet edge",
        body: "Falls to drains, sealed joints, and a maintenance plan for splash zones keep the deck looking intentional for decades.",
        image: "/images/design/courtyard.jpg",
        imageAlt: "Wet edge detailing",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description: "A continuous clay field that reads as architecture, not a tiled grid.",
        image: "/images/design/pool-deck.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description: "Bright joints that catch light off the water — crisp and resort-like.",
        image: "/images/design/tile-texture.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description: "Dark joints that disguise splash marks and pool chemicals over time.",
        image: "/images/design/terrace.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Seasonal sealing",
        body: "Refresh sealant before summer swim season when UV and splash peak.",
      },
      {
        icon: "mop",
        title: "Rinse regularly",
        body: "Hose off chlorine splash and rinse with fresh water — avoid harsh pool-acid cleaners on clay.",
      },
      {
        icon: "sun",
        title: "UV adaptation",
        body: "Expect a gentle deepening of tone on sun-facing decks over several years.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Seasonal", action: "Seal refresh before peak sun" },
      { when: "Monthly", action: "Rinse splash zones & clear joints" },
    ],
    relatedProductSlugs: ["batavian-collection"],
    relatedGuideSlugs: ["joint-width-for-outdoor-terracotta", "sealing-and-maintaining"],
  },
  {
    slug: "natural-tone-variation",
    audience: "For homeowners",
    title: "Living with natural tone variation",
    heroTitle: "Natural Tone Variation",
    heroImage: "/images/design/dining-room-2.jpg",
    intro:
      "Why no two handmade tiles fire exactly the same colour — and how to plan layouts so variation feels deliberate.",
    stepsLabel: "Design Guide",
    stepsIntro:
      "Kiln position, clay batch, and firing atmosphere create tone range. Treat it as part of the material language.",
    steps: [
      {
        number: "1",
        title: "Blend crates on site",
        body: "Draw tiles from several crates at once when laying. Homogeneous patches of one crate can look like a manufacturing fault — blending does not.",
        image: "/images/design/stacked-tiles.jpg",
        imageAlt: "Stacked tiles from kiln",
      },
      {
        number: "2",
        title: "Dry-lay a sample field",
        body: "Lay a 2×2m dry patch in the room's light before fixing. Approve the blend with your architect or homeowner present.",
        image: "/images/design/dining-room-2.jpg",
        imageAlt: "Interior tone variation",
      },
      {
        number: "3",
        title: "Match grout to the story",
        body: "Tone-on-tone grout softens variation; contrasting grout frames each tile. Choose deliberately — both are valid.",
        image: "/images/design/tile-texture.jpg",
        imageAlt: "Close-up tone variation",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description: "Lets tone variation wash across the floor as one field.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description: "Frames each handmade edge so variation reads as a mosaic.",
        image: "/images/design/dining-room.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description: "Anchors warmer clay tones with a dark grid.",
        image: "/images/design/kitchen.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Seal evenly",
        body: "Even seal coats keep lighter and darker tiles aging at a similar rate.",
      },
      {
        icon: "mop",
        title: "Gentle cleaning",
        body: "Harsh cleaners can bleach lighter tiles faster than darker ones.",
      },
      {
        icon: "sun",
        title: "Light shifts tone",
        body: "North-facing rooms deepen faster — plan rugs and furniture with that in mind.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Even re-seal across the field" },
      { when: "As needed", action: "Spot clean without bleaching agents" },
    ],
    relatedProductSlugs: ["batavian-collection", "hexagon-terracotta"],
    relatedGuideSlugs: ["kitchen-floors-patina", "cape-courtyard-garden"],
  },
  {
    slug: "joint-width-for-outdoor-terracotta",
    audience: "For installers",
    title: "Choosing the right joint width for outdoor terracotta",
    heroTitle: "Outdoor Joint Width",
    heroImage: "/images/design/herringbone-install.jpg",
    intro:
      "A technical guide for installers and site teams working with our standard 300×300mm terracotta outdoors — from size variation to the final dry-lay check.",
    stepsLabel: "Installation Guide",
    stepsIntro:
      "The foundation of longevity lies in the joint. Handmade terracotta needs a sympathetic spacing that absorbs size variation outdoors.",
    steps: [
      {
        number: "1",
        title: "Understand the size variation",
        body: "Because every tile is hand pressed and shaped, expect a natural size variation of approximately 6–8% across a batch. This isn't a defect to sort out — it's the reason the joint needs to be wide enough to absorb it.",
        image: "/images/design/stacked-tiles.jpg",
        imageAlt: "Handmade tile size variation",
      },
      {
        number: "2",
        title: "Use a 25mm joint outdoors",
        body: "For our standard 300×300mm tile laid outdoors, we recommend a 25mm joint as the average. At this spacing, coverage works out to roughly 9 tiles per m² — which is also why we sell by the tile rather than by the box.",
        image: "/images/design/herringbone-install.jpg",
        imageAlt: "Outdoor joint spacing",
      },
      {
        number: "3",
        title: "Narrower joints, indoors only",
        body: "A tighter 10–15mm joint can work indoors, but only if tiles are pre-sorted for size at the factory before dispatch. Ask us to grade a batch tighter if you're planning a narrow joint.",
        image: "/images/design/dining-room.jpg",
        imageAlt: "Indoor narrower joints",
      },
      {
        number: "4",
        title: "Match your grout to the joint",
        body: "Wider joints call for a sand-cement or flexible grout rather than a rigid, fine-line product — rigid grout is more likely to crack under the natural movement of a wide outdoor joint.",
        image: "/images/design/tile-texture.jpg",
        imageAlt: "Grout and joint detail",
      },
      {
        number: "5",
        title: "Dry-lay before you fix",
        body: "Always lay out a small section dry first. It lets you see the real tone and size variation in that batch and adjust spacing before anything is set permanently.",
        image: "/images/design/courtyard.jpg",
        imageAlt: "Dry lay check",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description:
          "A tone-on-tone approach that minimizes the grid and creates a continuous field of color. Ideal for high-end residential living areas.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description:
          "Defining every edge. This selection emphasizes the geometry of the tile and brings a modern, graphic energy to the installation.",
        image: "/images/design/courtyard.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description:
          "A sophisticated, dark pairing that adds weight and permanence. Best suited for high-traffic commercial spaces and outdoor patios.",
        image: "/images/design/terrace.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Quarterly sealing",
        body: "Apply a water-based breathable sealer to maintain the hydrophobic barrier without losing the natural matte finish.",
      },
      {
        icon: "mop",
        title: "pH-neutral care",
        body: "Avoid acid-based cleaners. A simple pH-neutral soap preserves the natural minerals in the clay.",
      },
      {
        icon: "sun",
        title: "UV adaptation",
        body: "Our terracotta matures beautifully. Expect a deepening of tone over 5 years in direct sunlight areas.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Texture inspection & spot re-seal" },
      { when: "Bi-annual", action: "Professional deep buffing" },
    ],
    relatedProductSlugs: ["batavian-collection"],
    relatedGuideSlugs: ["adhesive-bedding-compatibility", "coverage-tiles-per-metre"],
  },
  {
    slug: "adhesive-bedding-compatibility",
    audience: "For installers",
    title: "Adhesive & bedding compatibility for terracotta",
    heroTitle: "Adhesive & Bedding",
    heroImage: "/images/design/stacked-tiles.jpg",
    intro:
      "Substrate prep and adhesive choice for a handmade, size-variable tile — so hollow spots and lippage do not appear under load.",
    stepsLabel: "Installation Guide",
    stepsIntro:
      "The foundation of longevity lies in the preparation. Our terracotta requires a sympathetic approach to substrate and adhesion.",
    steps: [
      {
        number: "1",
        title: "Substrate preparation",
        body: "Ensure the substrate is fully cured, structurally sound, and free of contaminants. For terracotta, a reinforced cement screed with a moisture content of < 3% is mandatory. Leveling must be within 3mm over a 3m span to prevent lippage in large format layouts.",
        image: "/images/design/terrace.jpg",
        imageAlt: "Substrate preparation",
      },
      {
        number: "2",
        title: "Adhesive selection",
        body: "Apply a high-flexibility (S1 or S2 rated) cementitious adhesive. Due to the natural porosity of terracotta, we recommend the back-buttering technique to ensure 100% coverage and prevent hollow spots that can lead to cracking under point-loads.",
        image: "/images/design/stacked-tiles.jpg",
        imageAlt: "Adhesive application",
      },
      {
        number: "3",
        title: "Spacing & alignment",
        body: "Artisan tiles feature organic edge variances. Use an appropriate grout joint to accommodate these shifts. Utilize a laser guide for grid-perfect alignment while celebrating the subtle, natural movement of the hand-crafted clay.",
        image: "/images/design/herringbone-install.jpg",
        imageAlt: "Spacing and alignment",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description: "Tone-on-tone for a continuous field once bedding is perfect.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description: "Graphic joints that reveal any alignment issues early in the dry-lay.",
        image: "/images/design/courtyard.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description: "Dark joints for commercial traffic and outdoor durability.",
        image: "/images/design/terrace.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Cure before seal",
        body: "Allow adhesive and grout full cure before sealing — rushing traps moisture.",
      },
      {
        icon: "mop",
        title: "Protect during works",
        body: "Cover finished areas during remaining trades to avoid point-load damage.",
      },
      {
        icon: "sun",
        title: "Watch hollow spots",
        body: "Tap-test after set. Hollow tiles must be lifted and re-bedded, not left.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Texture inspection & spot re-seal" },
      { when: "Bi-annual", action: "Professional deep buffing" },
    ],
    relatedProductSlugs: ["batavian-collection", "dutch-klompie-pavers"],
    relatedGuideSlugs: ["joint-width-for-outdoor-terracotta", "coverage-tiles-per-metre"],
  },
  {
    slug: "coverage-tiles-per-metre",
    audience: "For installers",
    title: "Working out coverage: tiles per square metre",
    heroTitle: "Coverage & Ordering",
    heroImage: "/images/design/tile-texture.jpg",
    intro:
      "Roughly 9 tiles per m² at 300×300mm with a 25mm joint — and why we sell by the tile, not the box.",
    stepsLabel: "Ordering Guide",
    stepsIntro:
      "Handmade formats and wide outdoor joints change coverage maths. Order with wastage built in.",
    steps: [
      {
        number: "1",
        title: "Start from joint width",
        body: "At 300×300mm with a 25mm outdoor joint, plan on approximately 9 tiles per m². Narrower indoor joints increase tiles per m² — recalculate before ordering.",
        image: "/images/design/tile-texture.jpg",
        imageAlt: "Tile format reference",
      },
      {
        number: "2",
        title: "Add wastage",
        body: "Allow 8–12% for cuts, breakage, and future repairs. Complex herringbone and borders need the higher end.",
        image: "/images/design/herringbone-install.jpg",
        imageAlt: "Pattern wastage",
      },
      {
        number: "3",
        title: "Order by the tile",
        body: "We sell by the tile so you can match exact counts to drawings. Tell us your m² and pattern and we will confirm counts.",
        image: "/images/design/stacked-tiles.jpg",
        imageAlt: "Tiles stacked for dispatch",
      },
    ],
    showTonalHarmony: false,
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Hold attic stock",
        body: "Keep a small sealed crate of the same batch for future repairs — kiln batches are never identical.",
      },
      {
        icon: "mop",
        title: "Confirm on site",
        body: "Measure net area after screed, not from early drawings alone.",
      },
      {
        icon: "sun",
        title: "Lead times",
        body: "Handmade production runs 4–8 weeks typically — order coverage early.",
      },
    ],
    maintenanceSchedule: [
      { when: "Quote stage", action: "Confirm format, joint & pattern" },
      { when: "Order", action: "Lock count + wastage %" },
      { when: "Dispatch", action: "Verify crate labels vs drawing" },
    ],
    relatedProductSlugs: ["batavian-collection", "project-accessories"],
    relatedGuideSlugs: ["joint-width-for-outdoor-terracotta", "adhesive-bedding-compatibility"],
  },
  {
    slug: "sealing-and-maintaining",
    audience: "For installers",
    title: "Sealing and maintaining a terracotta floor",
    heroTitle: "Seal & Maintain",
    heroImage: "/images/design/dining-room.jpg",
    intro:
      "A maintenance schedule that keeps colour and finish consistent over years of use — for installers handing over to clients.",
    stepsLabel: "Maintenance Guide",
    stepsIntro:
      "Seal at the right moments, clean gently, and brief the owner so the floor ages with grace.",
    steps: [
      {
        number: "1",
        title: "Initial seal",
        body: "Seal before and after grouting on porous terracotta. Use a breathable, water-based system suited to clay — not a plasticising film that traps moisture.",
        image: "/images/design/dining-room.jpg",
        imageAlt: "Sealed terracotta floor",
      },
      {
        number: "2",
        title: "Handover care kit",
        body: "Leave the owner with pH-neutral cleaner guidance and a re-seal interval. Most failures start with the wrong household cleaner.",
        image: "/images/design/tile-texture.jpg",
        imageAlt: "Surface care",
      },
      {
        number: "3",
        title: "Scheduled refresh",
        body: "High-traffic and wet zones need earlier re-seal. Inspect annually; refresh before water darkens the clay permanently.",
        image: "/images/design/kitchen.jpg",
        imageAlt: "High traffic kitchen floor",
      },
    ],
    showTonalHarmony: true,
    groutOptions: [
      {
        label: "Monolithic",
        name: "Burnt Umber",
        description: "Sealed tone-on-tone fields age evenly when maintenance is consistent.",
        image: "/images/design/tile-texture.jpg",
        accent: "gold",
      },
      {
        label: "Contrast",
        name: "Bone Silt",
        description: "Light joints show soiling sooner — plan more frequent cleaning.",
        image: "/images/design/courtyard.jpg",
        accent: "cream",
      },
      {
        label: "Grounded",
        name: "Anthracite",
        description: "Dark joints forgive outdoor weathering between maintenance cycles.",
        image: "/images/design/terrace.jpg",
        accent: "muted",
      },
    ],
    showPatina: true,
    patinaTips: [
      {
        icon: "calendar",
        title: "Quarterly sealing",
        body: "Apply a water-based breathable sealer to maintain the hydrophobic barrier without losing the natural matte finish.",
      },
      {
        icon: "mop",
        title: "pH-neutral care",
        body: "Avoid acid-based cleaners. A simple pH-neutral soap preserves the natural minerals in the clay.",
      },
      {
        icon: "sun",
        title: "UV adaptation",
        body: "Our terracotta matures beautifully. Expect a deepening of tone over 5 years in direct sunlight areas.",
      },
    ],
    maintenanceSchedule: [
      { when: "Post-installation", action: "Deep clean & initial seal" },
      { when: "Yearly", action: "Texture inspection & spot re-seal" },
      { when: "Bi-annual", action: "Professional deep buffing" },
    ],
    relatedProductSlugs: ["batavian-collection"],
    relatedGuideSlugs: ["kitchen-floors-patina", "joint-width-for-outdoor-terracotta"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
