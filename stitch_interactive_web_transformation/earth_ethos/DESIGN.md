---
name: Earth & Ethos
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#54433e'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#86736d'
  outline-variant: '#d9c2ba'
  surface-tint: '#904b33'
  primary: '#88452d'
  on-primary: '#ffffff'
  primary-container: '#a65d43'
  on-primary-container: '#fff4f0'
  inverse-primary: '#ffb59c'
  secondary: '#645d56'
  on-secondary: '#ffffff'
  secondary-container: '#ebe1d8'
  on-secondary-container: '#6a635c'
  tertiary: '#585858'
  on-tertiary: '#ffffff'
  tertiary-container: '#717070'
  on-tertiary-container: '#f8f5f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#73351e'
  secondary-fixed: '#ebe1d8'
  secondary-fixed-dim: '#cec5bc'
  on-secondary-fixed: '#1f1b16'
  on-secondary-fixed-variant: '#4c463f'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
  clay-deep: '#A65D43'
  sand-bone: '#F2E8DF'
  charcoal-ash: '#2D2D2D'
  warm-linen: '#FAF9F6'
  mortar-gray: '#8C847E'
  kiln-glow: '#D98E73'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 72px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 44px
    fontWeight: '500'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.1em
  quote:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-mobile: 20px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
---

## Brand & Style

This design system is built upon the concept of **Quiet Luxury**—a sophisticated intersection of raw, earthy craftsmanship and high-end architectural precision. It celebrates the "imperfection" of handmade terracotta by framing it within a world-class digital experience that feels editorial, permanent, and authoritative.

The style is a blend of **Minimalism** and **Architectural Heritage**. It prioritizes generous negative space, allowing the textures and natural patinas of the product to breathe. The visual narrative moves away from traditional retail toward a "Showroom Gallery" aesthetic, evoking feelings of timelessness, warmth, and structural integrity.

Key brand pillars include:
- **Artisanal Authority:** Deep respect for the 1975 heritage and the physical kiln process.
- **Architectural Intent:** Precise alignment and structural grids that mirror masonry and tile layouts.
- **Organic Modernism:** A clean digital interface that complements, rather than competes with, natural clay textures.

## Colors

The palette is derived from the raw materials of tile production: fired clay, sieved sand, and cooled charcoal. 

- **Clay Deep (#A65D43):** Used as the primary brand anchor for high-impact CTAs, brand marks, and active states.
- **Sand Bone (#F2E8DF):** A sophisticated alternative to pure white for large surface areas and section backgrounds. It mimics the texture of unpolished grout.
- **Charcoal Ash (#2D2D2D):** The primary color for typography and structural borders. It provides the "architectural" weight necessary for high-end legibility.
- **Warm Linen (#FAF9F6):** A near-white neutral used to maintain airiness and editorial whitespace without the clinical feel of pure `#FFFFFF`.

Avoid high-vibrancy "digital" colors. Every hue must feel as though it could be found in a Cape Town kiln or a coastal architectural site.

## Typography

The typography system pairs a classic, high-contrast serif with a utilitarian, modern sans-serif to bridge the gap between heritage and architectural precision.

- **EB Garamond (Headlines):** Used for all storytelling and high-level headings. It should be typeset with tight tracking in display sizes to create an editorial, high-fashion feel.
- **Inter (Body & UI):** Provides a neutral, functional counterpoint. Its clarity is essential for technical specifications, dimensions, and navigation.

**Key Rules:**
- Use `label-caps` for eyebrows and overlines to establish hierarchy.
- Product names should always use the serif font to emphasize the "handmade" value.
- Ensure body copy line length is restricted to 65-75 characters to maintain a readable, premium editorial flow.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered with significant side margins to create the feeling of an expensive art catalog.

- **The Grid:** A 12-column grid with generous 32px gutters. Elements should often "break" the grid or span large portions (6, 8, or 12 columns) to avoid a cluttered, "app-like" appearance.
- **Section Rhythm:** Use a vertical rhythm of 160px between major sections. This "insane" amount of whitespace forces the user to slow down and appreciate the craftsmanship of each image.
- **Imagery:** Large, full-bleed or 10-column images are preferred over small thumbnails. Use asymmetrical layouts where text blocks are offset from image blocks to mimic modern architectural plans.

## Elevation & Depth

This system avoids traditional "digital" drop shadows. Depth is achieved through **Tonal Layering** and **Materiality**.

- **Stacked Surfaces:** Use `Sand Bone` surfaces on top of `Warm Linen` backgrounds to define card areas or interactive modules.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in a slightly darker tone of the background (e.g., `mortar-gray` at 20% opacity) to define boundaries.
- **Subtle Micro-interactions:** Depth is felt through motion rather than visuals—subtle scale-up effects on images or "lifted" states on buttons that use color shifts rather than shadow expansion.
- **Image Depth:** High-quality photography with shallow depth-of-field should be used to provide the physical "texture" that the UI lacks.

## Shapes

The shape language is strictly **Sharp (0px)**. 

The decision to use 0px roundedness reflects the precision of architectural masonry and the raw edges of terracotta tiles. Circles should only be used for functional UI elements (like play buttons or specific tile shape icons), but all containers, buttons, and inputs must maintain 90-degree corners to evoke a sense of structural permanence and high-end design.

## Components

### Buttons
- **Primary:** Solid `Clay Deep` background with `Warm Linen` text. Sharp corners. No shadows.
- **Secondary:** Transparent background with a 1px `Charcoal Ash` border.
- **Hover States:** Subtle background color darkening. Include a directional arrow (→) that shifts 4px to the right on hover.

### Inputs & Forms
- **Fields:** Bottom-border only (1px `Charcoal Ash`) for a minimal, architectural look. 
- **Labels:** Use `label-caps` typography positioned above the line.
- **Focus State:** Border weight increases to 2px; no "glow" effects.

### Cards
- **Product Cards:** Minimalist. Large image at the top, `headline-md` serif text below, followed by `label-caps` for dimensions.
- **Testimonial Cards:** `Sand Bone` background, centered `quote` typography, sharp edges.

### Navigation
- **Desktop:** Ultra-thin top bar. Links in `label-caps`. The "Request Quote" CTA should be a primary button style but with reduced padding to maintain elegance.

### Technical Tables
- For tile specifications (weight, dimensions, firing temperature), use a clean, minimalist table with `Charcoal Ash` horizontal dividers and `Inter` typography. No vertical dividers.