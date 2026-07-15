---
name: Cinematic Architectural Identity
colors:
  surface: '#171210'
  surface-dim: '#171210'
  surface-bright: '#3e3835'
  surface-container-lowest: '#120d0b'
  surface-container-low: '#201a18'
  surface-container: '#241e1c'
  surface-container-high: '#2f2926'
  surface-container-highest: '#3a3331'
  on-surface: '#ece0dc'
  on-surface-variant: '#d1c4bf'
  inverse-surface: '#ece0dc'
  inverse-on-surface: '#352f2d'
  outline: '#9a8e8a'
  outline-variant: '#4e4542'
  surface-tint: '#cfc4c1'
  primary: '#cfc4c1'
  on-primary: '#352f2d'
  primary-container: '#171210'
  on-primary-container: '#857c79'
  inverse-primary: '#655d5a'
  secondary: '#cdc6ba'
  on-secondary: '#343028'
  secondary-container: '#4d4940'
  on-secondary-container: '#beb8ac'
  tertiary: '#ffb59d'
  on-tertiary: '#5d1800'
  tertiary-container: '#2b0700'
  on-tertiary-container: '#d95222'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ece0dc'
  primary-fixed-dim: '#cfc4c1'
  on-primary-fixed: '#201a18'
  on-primary-fixed-variant: '#4c4543'
  secondary-fixed: '#e9e1d6'
  secondary-fixed-dim: '#cdc6ba'
  on-secondary-fixed: '#1e1b14'
  on-secondary-fixed-variant: '#4a463e'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390b00'
  on-tertiary-fixed-variant: '#842500'
  background: '#171210'
  on-background: '#ece0dc'
  surface-variant: '#3a3331'
  heritage-wine: '#6B1E2B'
  architectural-gold: '#D9A441'
  charcoal-ink: '#171210'
  bone-cream: '#F7EFE3'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  grid-columns: '12'
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is a high-contrast, editorial framework inspired by luxury architectural journals and premium masonry. It targets high-end developers, interior designers, and homeowners who value artisanal craftsmanship over mass production. 

The visual language is **Cinematic Minimalism**. It relies on aggressive scale, "heroic" photography, and a stark interplay between light and shadow. The UI evokes a sense of permanence and prestige, utilizing sharp geometric precision and generous negative space to allow product textures—stone, tile, and wood—to command the viewer's attention. Transitions should be slow and intentional, mimicking the pace of a gallery walkthrough.

## Colors

The palette is anchored by **Charcoal Ink**, used as the primary canvas for most "dark mode" editorial sections. **Bone Cream** serves as the high-contrast surface for informational blocks, creating a tactile, parchment-like feel.

- **Hero Accent (Vermillion):** Reserved for primary calls to action and critical branding moments. It represents the "kiln" and the heat of creation.
- **Secondary Accent (Wine-Red):** Used exclusively for lifestyle narratives, specifically wine farm and heritage collection segments.
- **Metallic Highlights (Gold):** Applied with surgical precision for structural dividers, star ratings, and thin borders. Use sparingly to maintain a premium, non-gaudy aesthetic.

## Typography

Typography follows an editorial hierarchy. **Playfair Display** is the primary voice—it should be set with tight tracking (letter-spacing) for a modern, confident look. Large display sizes should utilize the boldest weights to emphasize architectural strength.

**Inter** provides a functional counterpoint. It handles all body copy and technical specifications. Use **Label-Caps** for category headers and navigation items to maintain a structured, blueprint-like organization.

## Layout & Spacing

The system uses a **Fixed Grid** model for content containers, but emphasizes **Fluid Bleed** for background imagery and gradients. 

- **Desktop:** 12-column grid with wide margins (64px) to create an "art book" feel.
- **Section Gaps:** Aggressive vertical spacing (120px+) is required between major content blocks to signify a change in narrative or collection.
- **Image Treatment:** Photography must be full-bleed or occupy at least 8 columns. Use a Charcoal-to-Transparent gradient overlay on hero images to ensure readability of light serif typography placed directly over the visual.

## Elevation & Depth

This design system rejects soft shadows in favor of **Tonal Layers** and hard geometric boundaries.

1.  **Direct Contrast:** Depth is created by placing light Bone-Cream surfaces directly against Charcoal-Ink backgrounds.
2.  **Structural Dividers:** Use 1px solid lines in **Architectural Gold** or low-opacity Bone-Cream to separate content sections. These act as architectural "joints."
3.  **Glassmorphism:** Reserved only for floating navigation bars or technical overlays on top of product photography, using a dark blur (Charcoal Ink at 70% opacity with 20px blur).
4.  **No Soft Shadows:** Avoid ambient drop shadows. If an element needs to feel elevated, use a high-contrast 1px border.

## Shapes

The shape language is strictly **Sharp (0px)**. This reflects the precision of tile cutting and architectural drafting. 

- **Buttons & Inputs:** Must have 90-degree corners. 
- **Image Masks:** Always rectangular.
- **Decorative Elements:** Use thin, vertical or horizontal lines to create a "grid" effect across the page, reminiscent of grout lines or structural beams.

## Components

- **Primary Buttons:** High-contrast blocks. On dark backgrounds, use Bone-Cream with Charcoal-Ink text. On light backgrounds, use Vermillion with white text. No rounded corners.
- **Hero Cards:** Large-scale components with background imagery and a subtle "Gold" top-border. Typography is always justified-left.
- **Product Chips:** Sharp-edged tags using Charcoal-Ink backgrounds and Gold text/borders.
- **Input Fields:** Bottom-border only (1px Gold or Bone) to mimic a signature line, maintaining a minimal profile.
- **Dividers:** Use horizontal lines in Gold at 0.5px or 1px thickness to separate metadata within lists.
- **Wine Farm Specialized Card:** Uses the **Heritage Wine-Red** as a background tile with Bone-Cream serif typography for an aged, sophisticated look.