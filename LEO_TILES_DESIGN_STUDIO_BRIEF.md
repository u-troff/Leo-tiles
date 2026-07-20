# Leo Tiles — Complete Website Design Brief

**For:** Claude Design Studio (and any design/implementation agent)  
**Site:** https://leotiles.co.za (Next.js · Tailwind v4 · Sanity CMS for blog)  
**Business:** Leo Tiles — handmade terracotta tile manufacturer & installer, Kraaifontein, Cape Town, South Africa  
**Established:** 1975 · Family-owned · Owner: Mark Kelly (took over 2012 from founder Pat Kelly)  
**Live stack notes:** Next.js App Router, Libre Franklin, sharp corners (`rounded-none`), mailto forms (no backend), Pexels/design placeholder photography under `/public/images/design/`

This document describes **every page, subpage, section, graphic treatment, colour, type rule, and interaction** so Design Studio can understand what the website looks like and consists of — without opening the codebase.

---

## 1. Brand & business identity

| Field | Value |
|---|---|
| Business name | Leo Tiles |
| Tagline | South Africa's Original Handmade Terracotta Tile Makers — Crafted by Hand Since 1975 |
| Differentiator | Family-owned · handmade · kiln-fired in-house |
| Phone (primary) | +27 79 150 0160 |
| Office phone | +27 21 988 9491 |
| Email | mark@leotiles.co.za |
| Secondary email | admin@mktrust.co.za |
| Address | 30 Industrial Road, Kraaifontein Industria, Cape Town, 7570 |
| Map coords | −33.8417622, 18.7304505 |
| Ratings | Google 4.9★ · Facebook 4.7★ · 186+ verified reviews |
| Team | ~18 people on the factory floor |
| Region served | Cape Town & nationwide South Africa |
| Social | Instagram @leotiles · Facebook |
| Agency credit | Designed by U-Flow Solutions |

**Brand personality:** Warm, editorial, craft-led, architectural — not corporate plumbing, not purple-gradient SaaS. Feels like a kiln, clay, Cape Dutch heritage, and high-end residential interiors. Photography should show real terracotta installs, courtyards, kitchens, wine estates, and clay production — not abstract stock.

---

## 2. Design system (global)

### 2.1 Colour tokens

Use these exact values. The site is built on three families: **rust** (terracotta accent), **clay** (dark ink), **stone** (warm cream neutrals).

#### Rust / Terracotta (accent)
| Token | Hex | Role |
|---|---|---|
| rust-50 | `#fdf6ef` | Soft tint |
| rust-100 | `#f9e6d4` | Light wash |
| rust-200 | `#f1c9a9` | Soft peach |
| rust-300 | `#e7a97e` | Light terracotta on dark (eyebrows, phone links, italic hero accents) |
| rust-400 | `#d97f51` | Mid accent |
| **rust-500** | **`#b5502f`** | **Primary CTA, accents, stars, top borders, logo mark** |
| rust-600 | `#7a3a24` | Hover / darker fired tone |
| rust-700 | `#672d1b` | Deep |
| rust-800 | `#512113` | Deeper |
| rust-900 | `#3b160c` | Darkest |

#### Clay / Dark ink
| Token | Hex | Role |
|---|---|---|
| clay-50 | `#faf6f1` | Soft page hero gradients |
| clay-100–400 | mid warm browns | Supporting |
| clay-500 | `#8f6e44` | Mid clay |
| clay-700 | `#4f3c26` | |
| clay-800 | `#40301f` | Dark dividers, dropdown panels |
| **clay-900** | **`#241a12`** | **Nav, footer, dark sections, ink** |

#### Stone / Warm cream (page surfaces)
| Token | Hex | Role |
|---|---|---|
| **stone-50** | **`#f4e8d8`** | **Default page background, cream CTAs** |
| **stone-100** | **`#ead6bd`** | **Alternate section band (tan)** |
| stone-200 | `#dcc6a6` | Soft panels / carousel bg |
| stone-300 | `#cbb693` | Borders on light cards |
| stone-500 | `#8a7660` | Muted labels |
| **stone-700** | **`#5c4632`** | **Body text on light** |
| stone-800–900 | deep browns | Rare |

#### Semantic text colours (design handoff aliases)
| Use | Hex |
|---|---|
| Headline on dark | `#f9f1e6` / `#f0dfc7` |
| Body on dark | `#d9c7ae` |
| Muted on dark | `#b39d80` |
| Eyebrow on dark | `#e7a97e` |
| Body on light | `#5c4632` |
| Selection highlight | bg `#b5502f`, text `#f4e8d8` |

**Section rhythm:** Alternate light bands (`stone-50` ↔ `stone-100`) with dark bands (`clay-900`). Never use purple, cool blue, or flat white-as-default.

### 2.2 Typography

| Role | Spec |
|---|---|
| Font family | **Libre Franklin** (Google Fonts), weights 300–800 + italic 400 |
| Body | 15–16px, line-height 1.6–1.75, colour `#5c4632` on light / `#d9c7ae` on dark |
| Hero H1 | 40px mobile → **58px** desktop, weight 700, line-height 1.08, letter-spacing −0.5px |
| Section H2 | 28–34px / 700 |
| Eyebrows | 12.5–13.5px, **uppercase**, letter-spacing ~2px (0.2em), weight 600–700 |
| Nav links | ~14–14.5px / 500, white @ ~92% opacity |
| Buttons | 14–15.5px / 600–700 |

No Inter, Roboto, Arial, or default system stacks as the brand face. Both `--font-sans` and `--font-serif` currently resolve to Libre Franklin (single-family system).

### 2.3 Spacing, radius, geometry

| Rule | Value |
|---|---|
| Section padding | ~96px vertical, 56px horizontal (desktop); tighter on mobile |
| Card padding | 32px |
| Form padding | 44px |
| Border radius | **2px on buttons only** — otherwise **sharp / square** (`rounded-none`). No pill-heavy UI except occasional hero category badges |
| Max content width | ~7xl / ~1280px for chrome; forms often max ~760–880px |
| Logo mark | 36×36px square, rust-500 fill, white Flame icon |

### 2.4 Motion & interaction

| Motion | Behaviour |
|---|---|
| Hero Ken Burns | Slow scale 1.0→1.09 + slight translate; two images crossfade ~16s cycle |
| Entrance | `fadeInUp` / `fadeIn` / `scaleIn` with 100–500ms stagger |
| Nav underline | Rust 1.5px underline expands on hover |
| FAQ accordion | Click toggles +/−; first item open by default on homepage |
| Gallery lightbox | Dark overlay; prev/next; filter pills |
| Hover lift | Primary CTAs may lift slightly on hover |

### 2.5 Graphics & imagery

**Current design assets** (under `/images/design/`):
- `pool-deck.jpg` — poolside terracotta deck (hero)
- `terrace.jpg` — garden terrace (hero crossfade)
- `courtyard.jpg` — courtyard klompies
- `kitchen.jpg` — kitchen floor
- `dining-room.jpg` / `dining-2`
- `herringbone-install.jpg` — herringbone install
- `stacked-tiles.jpg` — stacked clay tiles / craft
- `tile-texture.jpg` — close-up clay texture

**Image treatment rules:**
- Full-bleed heroes with dark bottom gradient overlays (`rgba(20,13,8,…)`)
- Gallery tiles: bottom-left caption (uppercase category + bold title) over dark gradient
- Placeholder blocks (where real photos missing): clay gradient + label text
- Prefer real Leo Tiles project photography over stock when available
- “Coming Soon” cards: grayscale image + badge

### 2.6 Shared UI chrome (every page)

Order top → bottom:
1. **TopBar** — `clay-900`, tiny text: “Handmade Terracotta Since 1975 · Cape Town, South Africa” | email + phone
2. **MainNav** — sticky `clay-900`, logo (Flame square + “Leo” / “HANDMADE TERRACOTTA TILES”), links, cream “Get a Quote”, rust phone
3. **Page content**
4. **FloatingCTABanner** — dark band: “Custom Orders Welcome” / “Ready to start your tile order?” / Call CTA
5. **Footer** — rust 1px top rule on `clay-900`, 4 columns, bottom legal bar
6. **MobileBottomBar** — fixed dual CTA (Call | Get a Quote), `lg:hidden`; body gets 56px bottom padding

---

## 3. Site map (all routes)

```
/                                  Homepage
/residential                       Products catalogue
/commercial                        Accessories & installation services
/services/[slug]                   Individual product/service detail (12 slugs)
/products/[slug]                   Product reference / spec sheet
/guides                            Guide hub
/guides/[slug]                     Guide article
/work-gallery                      Full work gallery + lightbox
/about-us                          Company story
/wine-farms                        Winelands showcase
/designer-collaborations           Designer partnership showcase
/[area-slug]                       Local SEO landing pages (8 cities)
/get-a-quote                       Quote estimator
/contact-us                        Contact form + map
/blog                              Blog index (Sanity)
/blog/[slug]                       Blog article
/privacy-policy                    Legal
/terms-of-service                  Legal
/studio                            Sanity Studio (internal — not public marketing)
```

### Navigation structure (desktop)

| Label | Destination |
|---|---|
| Products | `/residential` |
| Accessories | `/commercial` |
| Guides | `/guides` |
| Work Gallery | `/work-gallery` |
| Services ▾ | first 6 residential `/services/...` |
| Service Area ▾ | 8 city pages |
| About Us ▾ | About, Blog, Wine Farms, Designer Collaborations |
| Contact Us | `/contact-us` |
| Get a Quote (CTA) | `/get-a-quote` |
| Phone | `tel:+27791500160` |

---

## 4. Page-by-page specifications

---

### 4.1 Homepage `/`

**Purpose:** Brand immersion + conversion. Single long scroll. Highest visual priority.

#### Section order (top → bottom)

**1. Hero** — 820px tall, full-bleed  
- BG: Ken Burns crossfade `pool-deck.jpg` ↔ `terrace.jpg`  
- Overlay: dark gradient (top transparent → bottom `rgba(20,13,8,0.78)`)  
- Content pinned **bottom-left**  
- Eyebrow: `50+ Years of Craft · Family-Owned` (`#e7c9a5` / rust-300, uppercase)  
- H1: `Turn your house into a *picturesque home*.` — italic/accent phrase in rust-300  
  *(Design handoff alternate: “Handmade. *Kiln-Fired.* Yours.” — same treatment)*  
- Subhead: South Africa’s original handmade terracotta tile makers — since 1975  
- CTA row: cream “Get a Quote” + underlined “Call Now →” + 3 stats (4.9★ / 186+ reviews / Est. 1975)

**2. Authenticity strip** — bg `stone-100` (`#ead6bd`)  
- 2-col (≈1.3fr / 1fr): large statement “Handmade in Cape Town since 1975…” + photo (`stacked-tiles` or similar), ~320px tall image

**3. Products & Services** — bg `stone-50`  
- Eyebrow “Our Services”  
- H2 about handmade terracotta & installation  
- **3-col × 6 cards:**  
  1. Batavian Floor Tiles  
  2. Dutch Style Klompies  
  3. Hexagon Shaped Tiles *(filled card bg stone-100)*  
  4. Fired Clay Wine Coolers  
  5. Fired Clay Pellets  
  6. Professional Tile Installation *(outlined: cream bg + 1px stone-300 border)*  
- Each card: 44px circular accent dot (rust for products, muted clay for accessories), 19px/700 title, 15px body `#5c4632`

**4. Our Process** — dark `clay-900`  
- Eyebrow rust-300 “Our Process”  
- 4-col steps: **01 Enquire → 02 Sample & Specify → 03 Production → 04 Delivery & Installation**  
- Numbers rust-500; titles white; descriptions muted warm

**5. Our Work gallery** — bg `stone-50`  
- H2 “Our work speaks for itself”  
- Asymmetric masonry (6-col track, ~220px row ×2): large 3×2 + mid tiles + small tiles  
- Caption overlays: category (Residential / Restoration / Outdoor / Commercial / Craft) + title  
- Link through to `/work-gallery`

**6. About / Story** — dark `clay-900`, 2-col  
- Left: full-bleed photo (min-height ~620px)  
- Right: eyebrow “Our story”, H2 “A family-owned kiln, rooted in craft”, 3 paragraphs (Pat Kelly / Mark Kelly / Kraaifontein), 4 bullet highlights

**7. Problems We Solve** — bg `stone-100`  
- H2 “Tile problems solved with care and craft”  
- 3-col × 6 items — **no card chrome**, bold heading + body only  
- Topics: factory uniformity, lead times, finding a terracotta installer, sealing, custom quotes, grout mismatch

**8. Why Choose Us** — bg `stone-50`  
- 3-col × 6 items with **2px rust top border**, heading + body

**9. Reviews** — dark `clay-900`  
- Header: “Customer Reviews” + Google 4.9★ / Facebook 4.7★ callouts  
- 3-col × 6 testimonials with ★★★★★ in rust, italic quote, name, platform  
- Names: Anita van der Berg, James Oosterbroek, Sarah Mitchell, Rudi Swanepoel, Charlene Fortuin, Thomas Hendricks

**10. FAQ** — bg `stone-50`  
- Accordion max-width ~880px; 7 Q&As; +/− toggle in rust; first open by default

**11. Contact form (“We’re here to help”)** — bg `stone-100`  
- Centered form card max ~760px on cream: Full Name, Email, Phone, Product of Interest (select), Message, rust “Send Message” button  
- Product select options: Batavian / Klompies / Hexagon / Wine Coolers / Clay Pellets / Custom Order

**12. Get in Touch panel** — bg `stone-50`  
- 2-col: address / phone / email | embedded Google Map

*(Plus global FloatingCTABanner + Footer after page content.)*

---

### 4.2 Products catalogue `/residential`

**Nav label:** Products  
**Purpose:** Showcase the six core tile/product offerings.

| Section | Treatment |
|---|---|
| Hero | Soft clay-50→white gradient; pill badge “Our Products”; H1 “Our Terracotta Tile Products”; line “Handmade. Kiln-Fired. Built to Last.”; Get a Quote + Call |
| Product grid | 6 `ServiceCard`s (icon + title + short desc + link to `/services/[slug]`) |
| Benefits | “Why Handmade Terracotta Is Different” + 4 checkmarks + photo placeholder |
| Why Choose Us teaser | 3 cards (Kiln / Rating / Custom) + Start Your Order |
| Reviews carousel | Horizontal scroll on stone-200 |
| Service areas | City link grid |
| FAQs | Residential FAQ set + sticky photo column |

---

### 4.3 Accessories & services `/commercial`

Same skeleton as Products, rethemed for materials & services.

| Section | Content |
|---|---|
| Hero | Building icon pill; H1 “Accessories, Materials & Installation Services” |
| Grid | Tile Adhesive, Terracotta Sealant, Terracotta-Compatible Grout, Cleaning Products, Bespoke & Custom Orders, Nationwide Delivery |
| Benefits | “Why Matching Materials Matters” |
| Trust | Why architects choose (Heritage / Trade / Delivery) |
| Reviews → Areas → FAQs | Same patterns as residential |

---

### 4.4 Service detail `/services/[slug]`

**12 pages** — one per residential + commercial service.

**Layout:**
1. Hero — “{Service} in Cape Town & South Africa”; short + long description; CTAs  
2. “Signs You Need…” — alert list + photo placeholder  
3. Benefits — 2-col white cards with green checks on gray-50  
4. Process — 4 numbered rust circles (Contact → Sample → Production → Install)  
5. Service-specific FAQ accordion  
6. Reviews carousel  
7. Final CTA “Ready to Order…?”

**Residential slugs:**  
`batavian-floor-tiles` · `dutch-klompies` · `hexagon-tiles` · `wine-coolers` · `fired-clay-pellets` · `tile-installation`

**Commercial slugs:**  
`tile-adhesive` · `terracotta-sealant` · `tile-grout` · `cleaning-materials` · `bespoke-orders` · `nationwide-delivery`

---

### 4.5 Product reference `/products/[slug]`

**Currently:** `/products/batavian-collection` only.

**Design-studio layout (from Product – Batavian reference):**
1. Dark nav strip with cream “Enquire”  
2. Full-bleed hero image + bottom gradient; caption; H1 “Batavian Collection” (~50px white)  
3. 3-image gallery row  
4. Specs table + **tone swatches** (circles: `#b5502f` Natural red, `#7a3a24` Dark fired, `#96603f` Mid tone, `#c98a5e` Light sand-fired) + texture close-up  
5. Dark related-guide bar → “Read the guide →”  
6. Tan CTA band: “Get a quote for the Batavian Collection” + rust button  
7. Dark footer

**Copy focus:** Hand-shaped, kiln-fired, ~300×300mm, ≈25mm thick, outdoor joint 25mm, indoor 10–15mm pre-sorted, sand-cement or flexible grout, ≈9 tiles/m².

---

### 4.6 Guide hub `/guides`

**Design feel:** Clean editorial index on cream.

1. Eyebrow “Resource Centre” · H1 “Guide hub” (~48px ink)  
2. **Inspiration & application** — 4 cards, rust “Homeowners” badges (many placeholder / not linked yet)  
3. **Technical & how-to** — stone-100 band; 4 cards, clay badges; live link: joint-width guide  
4. **Product reference** — 3 cards; Batavian → `/products/batavian-collection`

---

### 4.7 Guide article `/guides/[slug]`

**Live slug:** `joint-width-for-outdoor-terracotta`  
**Audience badge:** “For installers” (dark clay pill)  
**Title:** Choosing the right joint width for outdoor terracotta  
**Hero:** full-width install photo  
**Intro:** large 20px warm body  
**Body:** 5 numbered steps (01–05) with stone borders:  
1. Understand size variation (~6–8%)  
2. Use 25mm joint outdoors  
3. Narrower joints indoors only  
4. Match grout to joint  
5. Dry-lay before you fix  
**Related:** products + guides blocks

---

### 4.8 Work gallery `/work-gallery`

1. Eyebrow “Selected Projects” · H1 “The work” (~48px)  
2. Filter pills: **All / Flooring / Outdoor & Pools / Craft & Process**  
   - Active: dark filled · Inactive: outline  
3. Masonry columns of project photos with captions  
4. **Lightbox:** full dark overlay, caption, prev/next  

**Typical captions / categories:** pool deck Constantia, courtyard, kitchen, herringbone, stacked clay, dining rooms, terrace, texture detail.

---

### 4.9 About Us `/about-us`

1. Hero — “About Leo Tiles” / “Handmade, Local, Family-Owned”  
2. Reviews carousel  
3. Founder story — 3:4 portrait + “Meet Mark Kelly” + quote  
4. Mission / Vision cards + **5 Core Values:** Craft, Authenticity, Patience, Quality, Legacy  
5. Meet the Team — founder card  
6. Brand credibility strip (text labels: Handmade Clay, Kiln-Fired, Since 1970s, Cape Town Made, Bespoke Orders, Nationwide Delivery, Heritage Restoration)  
7. Why Choose Us (icon grid + portrait)

---

### 4.10 Wine Farms `/wine-farms`

1. **Dark hero** — “50+ Years Supplying the Cape Winelands”  
2. 3-col farm cards (image, name, location, description)  
   - Live: Boschkloof Wine Farm  
   - Coming Soon (grayscale + badge): Heritage Winelands Estate, Franschhoek Valley Estate, Your Wine Farm Here  
3. Tan CTA — “Is your wine farm missing…?”

---

### 4.11 Designer Collaborations `/designer-collaborations`

Same structure as Wine Farms:

1. Dark hero — “Celebrating the Designers We Build With”  
2. Partner cards:  
   - Erasmus & Co (4 projects) — live  
   - Fox & Partners · Gorgeous George Hotel — live  
   - Boschkloof (design partner tbc) — coming soon  
   - Your Studio Here — coming soon  
3. Trade / samples CTA on stone-100

---

### 4.12 Service area pages `/[area-slug]`

**8 SEO landers:**

| Slug | City |
|---|---|
| `terracotta-tiles-cape-town` | Cape Town, WC |
| `terracotta-tiles-stellenbosch` | Stellenbosch, WC |
| `terracotta-tiles-franschhoek` | Franschhoek, WC |
| `terracotta-tiles-johannesburg` | Johannesburg, GP |
| `terracotta-tiles-pretoria` | Pretoria, GP |
| `terracotta-tiles-durban` | Durban, KZN |
| `terracotta-tiles-george` | George, WC |
| `terracotta-tiles-knysna` | Knysna, WC |

**Layout:**
1. Hero 2-col — MapPin pill, city H1, description, Google/Facebook rating chips, CTAs + image  
2. Why architects/homeowners choose (city-personalized)  
3. Production & Delivery lead-time list (stone-100)  
4. Trust / highlight pills  
5. Products grid (6 residential)  
6. Accessories grid (6 commercial)  
7. Why Choose Us 3 cards  
8. How It Works — 4 StepCards + CTA

---

### 4.13 Get a Quote `/get-a-quote`

1. Soft hero — “Get a Quote”  
2. **QuoteEstimator** split panel:  
   - **Left (white):** product select, m² or L×W, checkboxes (installation / sealant / grout), optional photo upload (filename only)  
   - **Right (dark):** live estimate readout  
     - Tiles ≈ R800–1200/m² + 10% wastage  
     - Install ≈ R150–250/m²  
     - Sealant ≈ R85 · Grout ≈ R45  
   - Submit → mailto  

---

### 4.14 Contact `/contact-us`

1. Hero — “Contact Us”  
2. Split: contact info + Google Map | white form on stone-200 band (mailto)

---

### 4.15 Blog `/blog` & `/blog/[slug]`

- Index: clay-tinted hero “Blog”; 3-col cards (image, date, title, excerpt, Read More) or empty state  
- Article: back link, date, title, aspect-video image, PortableText body (`max-w-3xl`), bottom CTA “Need Help with Your Tile Project?”  
- Content sourced from **Sanity CMS** (`/studio`)

---

### 4.16 Legal

- `/privacy-policy` and `/terms-of-service`  
- Narrow prose on cream (`max-w-3xl`), H1 + dated sections, rust contact links

---

## 5. Content catalogues (what exists on the site)

### Products (tile ranges)
| Name | Notes |
|---|---|
| Batavian Floor Tiles / Batavian Collection | Signature hand-shaped floor tile |
| Dutch Style Klompies | Small-format pavers, herringbone/basketweave |
| Hexagon Shaped Tiles | Contemporary hex pattern |
| Fired Clay Wine Coolers | Artisan gift / evaporative cooler |
| Fired Clay Pellets | Drainage / horticulture aggregate |
| Professional Tile Installation | Western Cape install team |

### Accessories & services
Tile Adhesive · Terracotta Sealant · Terracotta-Compatible Grout · Cleaning Products · Bespoke & Custom Orders · Nationwide Delivery

### Homepage FAQs (7)
What makes Leo Tiles different · Production lead times · Nationwide delivery · Sealing · Custom sizes · Installation · Minimum order

### Process steps (sitewide)
Enquire → Sample & Specify → Production → Delivery & Installation

---

## 6. Component pattern library (how things look)

| Pattern | Appearance |
|---|---|
| **Eyebrow** | Uppercase tracking, rust on dark / stone-600 on light |
| **SectionLogo** | Rust hairline rules flanking uppercase label |
| **Primary button** | rust-500 bg, cream/white text, sharp corners, hover rust-600 |
| **Secondary / cream button** | stone-50 bg, clay-900 text |
| **Outline card** | cream fill + 1px `#cbb693` border |
| **Filled card** | stone-100 fill |
| **Why-us item** | 2px rust top rule, no shadow |
| **Review card (dark)** | Top border `#40301f`, stars rust, italic quote |
| **ServiceCard** | Icon + title + blurb; hover rust left rule |
| **StepCard** | Large number + title + description |
| **Accordion** | Question 18px/600 + rust +/− ; answer 15.5px `#5c4632` |
| **Filter pill** | Square-ish; active clay-900 filled |
| **Coming Soon badge** | Over grayscale image |
| **Rating chip** | Google / Facebook star callouts |

---

## 7. Design principles for Design Studio

When generating or extending screens, obey these:

1. **Warm terracotta editorial** — cream, tan, ink brown, rust. Never cool purple, neon, or generic SaaS blue.  
2. **Sharp architecture** — almost zero radius; buttons at most 2px.  
3. **One composition per hero** — full-bleed photo + bottom-left type; no floating badges/stickers on the hero media.  
4. **Alternate dark and light bands** for rhythm.  
5. **Photography is the product** — clay, floors, courtyards, kilns, wine estates.  
6. **Brand first** — “Leo Tiles” / craft heritage should read as the hero signal, not a tiny nav wordmark alone.  
7. **Copy voice** — South African craft, honest lead times, kiln language, heritage + contemporary interiors.  
8. **Mobile** — sticky dual CTA bar; stack 2-col → 1-col; hero H1 scales 40→58px.  
9. **Fidelity source** — HTML references in `Leo Tiles Homepage Design/` (Homepage Final, Work Gallery, Guide Hub, Guide Article, Product Batavian) are visual truth for those templates; the Next.js app is the live implementation.

---

## 8. Design reference files (bundled)

| File | Covers |
|---|---|
| `Leo Tiles Homepage Design/design_handoff_homepage/Leo Tiles Homepage - Final.dc.html` | Homepage high-fidelity reference |
| `Leo Tiles Homepage Design/design_handoff_homepage/README.md` | Homepage section + token notes |
| `Leo Tiles Homepage Design/Work Gallery.dc.html` | Gallery + filters + lightbox |
| `Leo Tiles Homepage Design/Guide Hub.dc.html` | Resource centre index |
| `Leo Tiles Homepage Design/Guide Article.dc.html` | Technical article template |
| `Leo Tiles Homepage Design/Product - Batavian.dc.html` | Product reference / spec sheet |

---

## 9. Quick page checklist for Design Studio

Use this when generating a new screen so nothing is missed:

- [ ] TopBar + sticky dark MainNav + cream Get a Quote + rust phone  
- [ ] Correct page hero (full-bleed OR soft clay gradient OR dark statement)  
- [ ] Libre Franklin, warm tokens only  
- [ ] Section eyebrow + H2 + one supporting sentence  
- [ ] Light/dark band alternation  
- [ ] Rust accents (borders, stars, CTAs, numbers)  
- [ ] Sharp corners  
- [ ] FloatingCTABanner before footer  
- [ ] Footer 4-col + legal bar  
- [ ] Mobile bottom Call | Quote bar  

---

*Document generated for Claude Design Studio from the Leo Tiles Next.js codebase and design handoff HTML. Update this brief when routes, products, or the visual system change.*
