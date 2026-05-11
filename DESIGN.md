---
version: alpha
name: FactoryJet
description: >
  Design system for FactoryJet.com — a premium web development and e-commerce
  agency serving US small businesses. Engineering precision meets American
  approachability. Every token choice earns trust and drives conversion.

colors:
  # === Light Surface System ===
  surface: "#FAFAF7"
  surface-dim: "#F0F0EC"
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F8F8F5"
  surface-container: "#EFEFEA"
  surface-container-high: "#E5E7EB"
  surface-container-highest: "#D9D9D2"

  # === Text on Light ===
  on-surface: "#1A1A1A"
  on-surface-variant: "#64748B"
  inverse-surface: "#2A2A2A"
  inverse-on-surface: "#F5F5F2"
  outline: "#8A8A82"
  outline-variant: "#D9D9D2"

  # === Primary — Jet Blue ===
  primary: "#0052CC"
  on-primary: "#FFFFFF"
  primary-container: "#E6F0FF"
  on-primary-container: "#003D99"
  inverse-primary: "#4A8FFF"
  primary-fixed: "#4A8FFF"
  primary-fixed-dim: "#3B82F6"
  on-primary-fixed: "#FFFFFF"
  on-primary-fixed-variant: "#003D99"

  # === Secondary — Jet Orange (small-area accent only) ===
  secondary: "#FF6B35"
  on-secondary: "#FFFFFF"
  secondary-container: "#FEF3E8"
  on-secondary-container: "#7A2D00"
  secondary-fixed: "#FFD4C0"
  secondary-fixed-dim: "#FF6B35"
  on-secondary-fixed: "#FFFFFF"
  on-secondary-fixed-variant: "#CC4A15"

  # === Tertiary — Jet Green (success / delivery) ===
  tertiary: "#10B981"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#E8FAF1"
  on-tertiary-container: "#065F46"
  tertiary-fixed: "#A7F3D0"
  tertiary-fixed-dim: "#10B981"
  on-tertiary-fixed: "#FFFFFF"
  on-tertiary-fixed-variant: "#065F46"

  # === Error ===
  error: "#DC2626"
  on-error: "#FFFFFF"
  error-container: "#FEE2E2"
  on-error-container: "#991B1B"

  # === Dark Surface (navy — footer + mid-page rhythm break only) ===
  background: "#FAFAF7"
  on-background: "#1A1A1A"
  surface-variant: "#D9D9D2"
  surface-dark: "#0A0F1C"
  surface-dark-deep: "#070B14"
  on-surface-dark: "#F5F5F2"
  on-surface-dark-variant: "#A0AEC0"
  surface-tint: "#0052CC"

typography:
  # === Clash Display — Hero & Section Headlines ===
  display-xl:
    fontFamily: Clash Display
    fontSize: 96px
    fontWeight: "500"
    lineHeight: 100px
    letterSpacing: -0.02em

  display-lg:
    fontFamily: Clash Display
    fontSize: 64px
    fontWeight: "500"
    lineHeight: 72px
    letterSpacing: -0.02em

  display-md:
    fontFamily: Clash Display
    fontSize: 48px
    fontWeight: "500"
    lineHeight: 56px
    letterSpacing: -0.01em

  headline-lg:
    fontFamily: Clash Display
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 44px
    letterSpacing: -0.02em

  headline-md:
    fontFamily: Clash Display
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
    letterSpacing: -0.01em

  # === Inter — Body, UI, Navigation ===
  title-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: "500"
    lineHeight: 32px
    letterSpacing: 0em

  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "500"
    lineHeight: 28px
    letterSpacing: 0em

  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 30px
    letterSpacing: 0em

  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0em

  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
    letterSpacing: 0em

  # === Geist Mono — Labels, Tags, Data, Eyebrows ===
  label-lg:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.08em

  label-md:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.10em

  label-sm:
    fontFamily: Geist Mono
    fontSize: 10px
    fontWeight: "500"
    lineHeight: 14px
    letterSpacing: 0.12em

  # === Source Serif 4 — Editorial pull quotes only ===
  editorial:
    fontFamily: Source Serif 4
    fontSize: 22px
    fontWeight: "400"
    lineHeight: 34px
    letterSpacing: 0em

rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  full: 9999px

spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  section-sm: 40px
  section-md: 56px
  section-lg: 80px
  gutter: 24px
  container-max: 1280px
  card-padding: 24px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 24px

  button-primary-hover:
    backgroundColor: "{colors.on-primary-container}"

  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 11px 23px

  button-secondary-hover:
    backgroundColor: "{colors.surface-container-low}"

  button-ghost-dark:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.on-primary-fixed}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 24px

  button-ghost-dark-hover:
    backgroundColor: "rgba(255,255,255,0.14)"

  chip-eyebrow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  chip-eyebrow-on-dark:
    backgroundColor: "rgba(74,143,255,0.15)"
    textColor: "#7EB3FF"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  chip-success:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  chip-accent:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  card-light:
    backgroundColor: "linear-gradient(135deg, #FFFFFF 0%, #F8F8F5 100%)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"

  card-light-hover:
    backgroundColor: "{colors.surface-container-lowest}"

  card-dark:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"

  card-dark-hover:
    backgroundColor: "rgba(255,255,255,0.09)"

  input-field:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 16px

  input-field-focus:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"

  badge-delivery:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  badge-flagship:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  stat-display:
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"

  stat-display-on-dark:
    textColor: "{colors.primary-fixed}"
    typography: "{typography.display-md}"
---

## Overview

FactoryJet is a premium web development and e-commerce agency that delivers
production-quality websites to US small businesses in 7 days — at 60–70% of
the cost of a US agency. With 500+ businesses served and 25+ years of combined
expertise, the brand must project trustworthiness, precision, and speed.

The design personality is **Engineering-grade precision meets American
approachability.** The UI should feel like a premium SaaS product, not a
typical offshore agency website. Every section should communicate: "these
people know exactly what they're doing, and they won't waste your time."

The color and typography strategy borrows from premium tech brands (Stripe,
Linear, Vercel) — tight headlines, generous whitespace, purposeful dark/light
rhythm — but keeps a warmth and directness that works for US SMB buyers who
are busy, skeptical, and value clarity over cleverness.

Page rhythm follows the **30/65/5 rule:** 30% dark sections (hero or one
mid-page break, plus footer), 65% light sections, 5% tinted accent bands.
Never stack three light sections without a dark or tinted break.

## Colors

The palette is anchored by **Jet Blue** — a bold, WCAG-AA-passing primary that
signals trust and technology. Two small-area accents complete the system.

- **Primary / Jet Blue (#0052CC):** The brand's soul. All primary CTAs, active
  states, hover rings, and interactive highlights. On dark surfaces, use the
  contrast-safe `inverse-primary` (#4A8FFF) instead. Eyebrow chips on dark
  use #7EB3FF.

- **Primary Container (#E6F0FF):** Tinted blue background for chips, callouts,
  and secondary information blocks on light surfaces.

- **Secondary / Jet Orange (#FF6B35):** A vibrant accent reserved for single
  elements only — the FLAGSHIP service tag, highlight badges. Never for
  buttons, large backgrounds, or body text.

- **Tertiary / Jet Green (#10B981):** The delivery and success color. Used for
  the "7-Day Guarantee" badge, checkmarks, completion states, and positive
  metric highlights.

- **Surface (#FAFAF7):** The dominant light background (~70% of page area).
  Warmer than pure white — editorial and premium. Alternate with
  `surface-bright` (#FFFFFF) between adjacent light sections to create visual
  separation without borders.

- **Surface Dark (#0A0F1C):** Reserved exclusively for the site footer and a
  maximum of one mid-page rhythm break. Always use a multi-stop gradient
  (navy → charcoal with slight purple undertone), never flat.

- **On-surface (#1A1A1A):** Near-black for all primary body text. High
  contrast without the harshness of pure #000000.

- **On-surface-variant (#64748B):** Secondary text — meta, captions,
  timestamps. Clear without competing with primary content.

## Typography

FactoryJet uses a deliberate three-family hierarchy.

**Clash Display** gives headlines authority and distinction. Large headlines
use weight 500 (not 700) — at scale, size provides enough visual weight.
Negative letter-spacing (-0.01em to -0.02em) creates the "tight and confident"
quality of premium tech brands. Always apply `text-balance` to prevent
awkward line breaks.

**Inter** handles all body copy, navigation, buttons, and form labels. It is
neutral, highly legible, and unpretentious. Body copy uses 1.5–1.65 line
height. Never exceed two font weights on a single screen.

**Geist Mono** appears exclusively for short data labels, category chips, and
eyebrow text — always uppercase, 65% opacity, wide letter-spacing
(0.08–0.12em). The mono font signals precision and technical credibility.

**Source Serif 4** is reserved solely for pull quotes and testimonial
blockquotes, adding human warmth to technical content.

Section type hierarchy: **display/headline → subheadline → body → mono label.**
Use a maximum of three levels per section; never mix all four in one view.

## Layout & Spacing

FactoryJet uses a **Fluid Grid with Fixed-Max-Width Container** model. Maximum
content width is 1280px, centered with equal horizontal margins.

An 8px base unit governs all dimensions. Cards use 24px internal padding.
Buttons use 12px vertical / 24px horizontal padding. Gutters are 24px.

Section vertical padding: content-heavy sections use `section-sm` (40px) on
mobile and `section-md` (56px) on desktop. Stats and proof bands use
`section-md` (56px) on desktop. The dark hero and footer use `section-lg`
(80px+) for breathing room.

Column system: 1 column mobile → 2–3 columns at 768px → up to 4 at 1024px.

The **30/65/5 rhythm rule** is a layout law, not a suggestion: 30% dark
sections, 65% light, 5% tinted accent bands. Never three consecutive light
sections without a dark or tinted break.

## Elevation & Depth

Depth is conveyed through **Tonal Layers**, not heavy drop shadows.

**Light surfaces:** Cards use a gradient fill (`#FFFFFF → #F8F8F5`) rather
than flat white. A single 3px top-cap in `primary` (#0052CC) signals
premium quality and category. A 1px `outline-variant` (#D9D9D2) border
provides edge definition. Hover lifts the card 6px on Y axis.

**Dark surfaces:** Dark sections always use a multi-stop background gradient
(`surface-dark #0A0F1C → charcoal #0F0F12 → faint purple undertone`). Aurora
glow orbs (radial gradient, primary-blue/purple, 15–20% opacity) are placed
at the section level — one orb per section, uniquely positioned each time
to ensure each dark section feels distinct.

**Shadow vocabulary:**
- Micro (interactive focus): `0 0 0 3px rgba(0,82,204,0.20)`
- Card default: `0 2px 8px rgba(0,0,0,0.06)`
- Card hover: `0 8px 32px rgba(0,82,204,0.12), 0 2px 8px rgba(0,0,0,0.08)`
- Hover ring (outside overflow-hidden): `0 0 0 1px #0052CC, 0 0 20px rgba(0,82,204,0.25)`
- Dark card: `inset 0 1px 0 rgba(255,255,255,0.06)`

## Shapes

Shape language is **Clean-Cornered Modern** — rounded but restrained.

Buttons and inputs: `DEFAULT` (8px). Cards and panels: `lg` (16px). Large
image containers and feature blocks: `xl` (20px). Chips, tags, badges:
`full` (pill). Section-level containers: no radius (full-width).

The `sm` (4px) value is reserved only for micro elements like progress bars
and inline code snippets. Never mix sharp and rounded corners in the same
view. The pill shape on chips and badges creates a strong visual contrast
against the rectangular cards.

## Components

**Primary Button:** Jet Blue (#0052CC), white text, 8px radius, weight 600,
12/24px padding. Hover: `on-primary-container` (#003D99) at 150ms ease-out.
Label: short action phrase ("Get a Free Quote", "See Our Work").

**Secondary Button:** Transparent background, Jet Blue text and 1px border.
Hover: `surface-container-low` fill. Never the sole CTA on a section.

**Ghost Button (dark sections):** 8% white opacity background, white text.
Hover: 14% white opacity. Used as the secondary CTA in dark heroes.

**Eyebrow Chip (light section):** Jet Blue pill, white Geist Mono text,
uppercase, 11px, 0.10em tracking. Signals section category.

**Eyebrow Chip (dark section):** 15% opacity Jet Blue background, #7EB3FF
text. Never use `primary` (#0052CC) as text on dark surfaces — it fails
WCAG AA at 4.5:1.

**Cards (light):** Gradient fill (#FFFFFF → #F8F8F5), 3px Jet Blue top-cap,
`rounded-lg`, 24px padding, 1px `outline-variant` border. Hover: -6px Y
lift + blue hover ring outside the overflow-hidden container. One decorative
element per card maximum (shimmer line OR icon OR watermark, never all).

**Cards (dark):** 5% white opacity fill, 1px rgba(255,255,255,0.08) border,
3px `primary-fixed` (#4A8FFF) top-cap. Hover: 9% white opacity.

**Mono Labels:** Geist Mono, uppercase, 10–13px, 65% opacity, 0.08–0.12em
letter-spacing. Used for "WEB DESIGN", "DATA POINT 01", "7-DAY GUARANTEE",
"STEP 01". Always uppercase. Never full sentences.

## Do's and Don'ts

- Do use `primary` (#0052CC) as the single action color — one CTA per view
- Do apply Clash Display at weight 500 for all display-scale headlines
- Do use `text-balance` on all multi-line headlines
- Do follow the 30/65/5 dark/light/tinted rhythm on every page
- Do alternate `surface` (#FAFAF7) and `surface-bright` (#FFFFFF) between adjacent light sections
- Do use Geist Mono for all labels and tags (uppercase, 65% opacity)
- Do place social proof (logo bar) as section 2 immediately after the hero
- Do use `inverse-primary` (#4A8FFF) for links/interactive text on dark surfaces
- Do place hover rings on a wrapper div outside any overflow-hidden container
- Do ensure every section has exactly ONE dominant visual element
- Do keep aurora orbs at section-level scope (never per-card on light bg)
- Don't use flat `#0F0F12` for dark sections — aurora glows become invisible
- Don't use `secondary` (#FF6B35) for buttons, large areas, or body text
- Don't mix more than two font families in one section
- Don't use `font-display` (without `fj-` prefix) — resolves to Source Serif, not Clash
- Don't apply per-element glow discs on light backgrounds — creates blotchy smudges
- Don't stack 3+ light sections without a dark or tinted break
- Don't use more than 2 dark sections per page (excluding footer)
- Don't use purple gradients, neon, or trendy "vibecoded" color schemes
- Don't put hover rings inside overflow-hidden containers — they get clipped
- Don't mix `background:` shorthand with `backgroundImage:` in one style object
