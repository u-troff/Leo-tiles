# Handoff: Leo Tiles Homepage Redesign

## Overview
A new homepage design for leotiles.co.za (currently live at leo-tiles.vercel.app, a Next.js site). Replaces the current homepage layout with a warmer, editorial, immersive-hero treatment while keeping all real business content (products, reviews, process, FAQ, contact info).

## About the Design Files
The bundled file `Leo Tiles Homepage - Final.dc.html` is a **design reference built in HTML** — it shows the intended layout, spacing, colors, typography and copy. It is NOT production code to copy verbatim. The task is to **recreate this design inside the existing Next.js codebase**, using its existing component structure, CSS approach (Tailwind/CSS Modules/styled-components — whatever the repo already uses), image pipeline (next/image), and routing — replacing only the homepage's visual layout, not the framework.

## Fidelity
**High-fidelity.** Colors, typography, spacing and copy below are final; recreate pixel-close using the codebase's existing styling system rather than inlining raw CSS.

## Screens / Views

### Homepage (single page, section order top to bottom)

1. **Sticky nav** — dark bar (#241a12), 20px/56px padding. Left: "Leo Tiles" wordmark, 20px/700 white. Right, in order: Products, Our Work, About Us, FAQs, Contact (14.5px/500, white @92% opacity), phone number "+27 79 150 0160" (14px/600, #e7a97e), "Get a Quote" button (cream bg #f4e8d8, dark text #241a12, 14px/600, 10px×18px padding, 2px radius).

2. **Hero** — 820px tall, full-bleed background image with a slow zoom/pan (Ken Burns) crossfading between two project photos (14–16s cycle), dark gradient overlay (top transparent → bottom rgba(20,13,8,0.78)). Content pinned bottom-left over the image:
   - Eyebrow: "50+ Years of Craft · Family-Owned" (13.5px, uppercase, letter-spacing 2px, #e7c9a5)
   - H1: "Handmade. *Kiln-Fired.* Yours." — 58px/700, white #f9f1e6, the italic middle phrase in #e7a97e
   - Subhead: "South Africa's original handmade terracotta tile makers — crafted by hand since the 1970s." (18px/500, #f0dfc7 @88%)
   - CTA row: "Get a Quote" solid button (cream bg, dark text) + "Call Now →" text link (white, underline) + three stat callouts: 4.8★ Google Rating / 40+ Verified Reviews / 50+ Years of Craft (each: 22px/700 number over 12.5px label, #d9c7ae)

3. **Authenticity strip** — background #ead6bd, 2-col grid (1.3fr / 1fr): left is a large statement line "Family-owned and craft-certified — handmade in Cape Town since the 1970s." (29px/500, #241a12); right is a 320px-tall photo.

4. **Products & Services** — background #f4e8d8. Eyebrow "Our Services", H2 "Handmade terracotta tiles & everything you need to install them", intro line. 3-col grid of 6 cards (32px padding each): Batavian Floor Tiles, Dutch Style Klompies, Hexagon Shaped Tiles (filled card bg #ead6bd), Fired Clay Wine Coolers, Fired Clay Pellets, Professional Tile Installation (outlined card, bg #f4e8d8, 1px #cbb693 border). Each card: a 44px circular accent dot (#b5502f for products, #7a6a4e for accessories), 19px/700 title, 15px body in #5c4632.

5. **Our Process** — dark section (#241a12). Eyebrow "Our Process" (#e7a97e), H2 white. 4-col grid, steps 01–04 (Enquire, Sample & Specify, Production, Delivery & Installation), number in #b5502f 15px/700, title 19px/700 white, description 15px #b39d80.

6. **Our Work gallery** — background #f4e8d8. Eyebrow + H2 "Our work speaks for itself". Asymmetric photo grid (6-col track, 220px row height ×2): one large 3×2 tile, two 3×1 tiles, three 2×1 tiles. Each image has a bottom-left caption overlay (category label 11.5–12px uppercase + title 15.5–17px/700, white) over a dark bottom gradient. Categories/titles used: Residential/Batavian Floor Installation, Residential/Kitchen Floor Detail, Restoration/Heritage Restoration, Outdoor/Courtyard Klompies Paving, Commercial/Wine Estate Entrance, Craft/Clay Production Process.

7. **About/Story** — dark section (#241a12), 2-col grid: left full-bleed photo (min-height 620px), right padded copy block (72px/60px): eyebrow "Our story" (#e7a97e), H2 "A family-owned kiln, rooted in craft" (30px/700 white), 3 body paragraphs (16px/1.75, #d9c7ae) telling the Mark Kelly / Kraaifontein story, then a 4-item bullet list (15px, #d9c7ae).

8. **Problems We Solve** — background #ead6bd. Eyebrow "Common Problems", H2 "Tile problems solved with care and craft". 3-col grid, 6 items, each just a bold 18px/700 heading + 15px body (#5c4632), no card chrome.

9. **Why Choose Us** — background #f4e8d8. Eyebrow "Why Choose Us", H2. 3-col grid, 6 items, each with a 2px top border in #b5502f, then 18px/700 heading + 15px body.

10. **Reviews** — dark section (#241a12). Eyebrow "Customer Reviews" (#e7a97e), H2 white, plus a Google 4.8★ and Facebook 4.7★ rating callout top-right. 3-col grid, 6 real testimonials (Anita van der Berg, James Oosterbroek, Sarah Mitchell, Rudi Swanepoel, Charlene Fortuin, Thomas Hendricks), each: ★★★★★ in #b5502f, italic quote 15.5px in #f0dfc7, name (600/#e7c9a5) + platform/rating in #b39d80, top border 1px #40301f.

11. **FAQ** — background #f4e8d8. Eyebrow "FAQs", H2. Accordion list (max-width 880px), 7 real Q&As, each row: question 18px/600 + a +/− toggle icon (24px, #b5502f) right-aligned; clicking toggles that row open (only relevant interaction/state on the page) and reveals a 15.5px/1.7 answer in #5c4632. One row open by default (first FAQ).

12. **Contact form ("We're here to help")** — background #ead6bd. Centered heading + subline, then a centered form card (max 760px, bg #f4e8d8, 44px padding, 2-col grid): Full Name, Email, Phone, Product of Interest (select: Batavian Floor Tiles / Dutch Klompies / Hexagon Tiles / Wine Coolers / Clay Pellets / Custom Order), full-width Message textarea, full-width "Send Message" button (bg #b5502f, white text).

13. **Get in Touch panel** — background #f4e8d8, 2-col grid: left address/phone/email block; right a map placeholder (should become a real embedded Google Map at -33.8417622, 18.7304505).

14. **Footer** — dark (#241a12). 4-col grid: brand blurb + social links, Quick Links, Products list, Contact (address/phone/email). Bottom bar: © 2026 Leo Tiles + Privacy Policy / Terms links.

## Interactions & Behavior
- Hero: two background images cross-fade + slow scale/pan continuously (looping, ~16–22s cycle), no user interaction required.
- Nav is sticky to top on scroll.
- FAQ rows: click toggles open/closed, icon swaps between "+" and "−". Only one open at a time is fine but not required — current build allows any single row open via independent state.
- All internal nav links are in-page anchor scrolls (#products, #work, #about, #faq, #quote, #contact).
- No other client-side state.

## Design Tokens
**Colors**
- Ink/dark: #241a12 (also #40301f for dark section dividers)
- Cream (page bg): #f4e8d8
- Tan (section bg): #ead6bd
- Terracotta accent: #b5502f (hover/darker: #7a3a24)
- Light terracotta accent (on dark): #e7a97e
- Warm text on light: #5c4632 (muted: #8a7660), border on light: #cbb693
- Warm text on dark: #d9c7ae (muted: #b39d80), headline on dark: #f9f1e6 / #f0dfc7

**Typography**
- Font: Libre Franklin (Google Fonts), weights 300–800, italic 400
- H1 hero: 58px/700, line-height 1.08, letter-spacing -0.5px
- Section H2: 28–34px/700
- Body: 15–16px/1.6–1.75
- Eyebrows: 12.5–13.5px, uppercase, letter-spacing 2px, 600–700 weight

**Spacing/Radius**
- Section padding: 96px vertical, 56px horizontal (consistent throughout)
- Card padding: 32px; form padding: 44px
- Border radius: 2px on buttons only (sharp, not rounded) — this design intentionally avoids rounded corners

## Assets
Photos currently used in the reference file are placeholder/stock (pool deck, terrace, courtyard, kitchen, dining rooms, herringbone install, stacked tiles) — swap these for the site's real photography (the live site currently sources images from Pexels; ideally replace with real Leo Tiles project photos). Keep next/image usage and existing image optimization pipeline.

## Files
- `Leo Tiles Homepage - Final.dc.html` — full HTML/CSS design reference (open in a browser to view). Layout, colors, and copy in this file are the source of truth alongside this README.
