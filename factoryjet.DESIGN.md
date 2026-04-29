---
name: FactoryJet
description: AI-native digital agency for SMBs across US, UK, UAE, India
version: alpha
colors:
  # Brand primaries — locked by the FactoryJet brand system, non-negotiable
  primary: "#0052CC"             # Jet Blue — interactive only (CTAs, links, focus)
  primary-hover: "#003D99"       # darker shade for hover/active states
  primary-on: "#FFFFFF"          # text/icons on primary
  secondary: "#FF6B35"           # Jet Orange — accents, badges, illustrative emphasis
  success: "#10B981"             # Jet Green — success states only (never decorative)
  # Neutral spine — the page belongs to neutrals, not brand colors
  ink: "#0A0F1C"                 # primary text; near-black with a slight cool tint
  ink-muted: "#475569"           # secondary text, captions, supporting copy
  ink-subtle: "#7081A1"           # tertiary metadata, supporting captions (WCAG AA-large compliant on white)
  ink-disabled: "#94A3B8"         # disabled controls and placeholder text only (WCAG 1.4.3 exempt)
  surface: "#FFFFFF"             # canvas — every page's primary background
  surface-alt: "#F8FAFC"         # alternating section background, cards, code blocks
  surface-2: "#EEF2F7"           # input fields, callout backgrounds, subtle separators
  border: "#E2E8F0"              # default borders, dividers, hairlines
  border-strong: "#CBD5E1"       # emphasis borders, input focus boundaries
typography:
  # Single editorial family: Inter. Most-shared editorial font in the audit (4/20 sites).
  # JetBrains Mono is the only secondary family, permitted for code samples only.
  display:   { fontFamily: "Inter", fontSize: "6rem",     fontWeight: 700, lineHeight: 1.0,  letterSpacing: "-0.03em" }
  h1:        { fontFamily: "Inter", fontSize: "3.75rem",  fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }
  h2:        { fontFamily: "Inter", fontSize: "2.5rem",   fontWeight: 700, lineHeight: 1.1,  letterSpacing: "-0.01em" }
  h3:        { fontFamily: "Inter", fontSize: "1.75rem",  fontWeight: 600, lineHeight: 1.2 }
  h4:        { fontFamily: "Inter", fontSize: "1.25rem",  fontWeight: 600, lineHeight: 1.3 }
  body-lg:   { fontFamily: "Inter", fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.6 }
  body:      { fontFamily: "Inter", fontSize: "1rem",     fontWeight: 400, lineHeight: 1.6 }
  body-sm:   { fontFamily: "Inter", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 }
  caption:   { fontFamily: "Inter", fontSize: "0.75rem",  fontWeight: 500, lineHeight: 1.4, letterSpacing: "0.04em" }
  mono:      { fontFamily: "JetBrains Mono, Consolas, monospace", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 }
rounded:
  none: 0
  sm: 4px        # subtle inputs, micro-tags
  md: 6px        # DEFAULT for buttons, cards, inputs (audit consensus: 796 occurrences)
  lg: 8px        # elevated cards, modals
  xl: 12px       # hero callout blocks, large feature cards
  "2xl": 16px    # decorative containers (rare)
  pill: 9999px   # badges, pills, avatars
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  "2xl": 48px
  "3xl": 64px
  "4xl": 96px
  "5xl": 128px
shadows:
  # Multi-stop ambient + contact pattern (Stripe reference). Avoid single-drop "AI" shadows.
  sm: "0 1px 2px 0 rgba(10, 15, 28, 0.05)"
  md: "0 4px 6px -1px rgba(10, 15, 28, 0.06), 0 2px 4px -2px rgba(10, 15, 28, 0.04)"
  lg: "0 12px 24px -6px rgba(10, 15, 28, 0.08), 0 4px 8px -4px rgba(10, 15, 28, 0.04)"
  xl: "0 30px 60px -12px rgba(50, 50, 93, 0.18), 0 18px 36px -18px rgba(0, 0, 0, 0.12)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-on}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    fontWeight: 600
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    fontWeight: 500
  card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    shadow: "{shadows.sm}"
  card-elevated:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    shadow: "{shadows.md}"
  input:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    focusRing: "2px solid {colors.primary}"
  badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    fontSize: "0.75rem"
    fontWeight: 600
  badge-success:
    backgroundColor: "rgba(16, 185, 129, 0.10)"
    textColor: "{colors.success}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    fontSize: "0.75rem"
    fontWeight: 600
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
---

## Overview

FactoryJet is the AI-native digital agency for SMBs in the US, UK, UAE, and India. The visual system targets enterprise-grade quality at startup-friendly perception.

**Aesthetic anchors — explicit, audited references:**

- **Stripe** — typographic precision on white, multi-stop shadows, restrained color discipline
- **Linear** — ultra-minimal interface, single accent color used sparingly
- **Vercel** — black-and-white precision, gradient restraint (9 gradient instances across 5 pages)
- **Resend** — Inter on white, generous whitespace, decorative accents confined to FinalCTA blocks
- **Mintlify** — documentation-grade typographic clarity, calm neutrals

**Reference set for gradient discipline (sites using zero gradients across all pages audited):** olyablack.com, qvery.ai, spade.com, theboathouse.agency, tillerdigital.com.

The system optimizes for SMB founders who recognize quality but cannot afford agency-tier prices. Every visual choice answers: "Does this look like the SaaS tools the buyer already trusts?" When in doubt, do less.

## Colors

The palette is rooted in three brand primaries against a comprehensive neutral spine. Brand colors are scarce by design; neutrals carry 90% of the visual weight.

**Jet Blue (`#0052CC`) is the only interactive color.** CTAs, links, focus rings, primary buttons. Never decorative. Never as a section background. This single-color discipline is the structural separator between the FactoryJet system and generic SaaS templates.

**Jet Orange (`#FF6B35`) is the accent.** Reserve for highlights, badges, and rare illustrative emphasis. Never on body text. Never as a content-section background.

**Jet Green (`#10B981`) is reserved for success states only.** Confirmations, positive metric deltas, "online" indicators. Never decorative. Never as a brand emphasis.

**The neutral spine carries the page.** `{colors.ink}` for primary text, `{colors.ink-muted}` for supporting copy, `{colors.surface}` (pure white #FFFFFF) as the canvas — confirmed by 20/20 reference sites in the brand audit. `{colors.surface-alt}` (#F8FAFC) for alternating sections without harsh dividers. `{colors.border}` for hairlines.

**WCAG AA contrast verified:** every text-on-background combination in the token set achieves ≥ 4.5:1 for body text and ≥ 3:1 for large text. The lint command (`npx @google/design.md lint`) enforces this on every commit.

## Typography

**One editorial family: Inter.** Headings use Inter at heavier weights (700 for display/H1/H2, 600 for H3/H4). Body uses Inter Regular (400) — the dominant weight across the audit at 74,000+ occurrences. Captions use Inter Medium with a touch of letter-spacing for a "label" feel. Code uses JetBrains Mono — the only secondary family permitted, and only for code samples.

**Inter is the most-shared editorial choice across the reference set** (4/20 sites). The remaining anchor sites publish custom typefaces (sohne-var/Stripe, Geist/Vercel) — choosing Inter aligns FactoryJet with the same typographic clarity those custom faces achieve, without the licensing complexity.

**The size scale is derived from audit consensus:**

- `display` (96px / 6rem) — hero treatment only, anchors the page when no dark hero carries weight
- `h1` (60px) — primary page heading
- `h2` (40px) — section headings
- `h3` / `h4` (28px / 20px) — subsections
- `body` (16px, mode in audit) — default reading size
- `caption` (12px) — metadata, labels

Headings carry negative letter-spacing to feel sharper at large sizes. Body text uses default tracking with 1.6 line-height for sustained reading. Display and H1 use line-height ≤ 1.05 — tight, confident, intentional.

**Forbidden typographic effects:** gradient text, rainbow text, drop-shadow on body text, animated counters that spin into place, glassmorphic backgrounds behind type, mixed font families on a single page, "Clash Display" or any second display face. All read as AI-generated to the FactoryJet target buyer and erode the premium positioning.

## Layout

**Standard page rhythm: white hero, alternating white and off-white sections.** This is the new white-background mandate, defended by 20/20 audit sites using #FFFFFF as their primary background. The hero earns its visual weight from typography, generous whitespace, and asymmetric composition — not from a dark background.

**Section sequence:** white hero (`{colors.surface}`) → off-white feature section (`{colors.surface-alt}`) → white section → off-white section. Alternation gives visual rhythm without harsh dividers. Section padding follows `{spacing.4xl}` (96px) vertical, `{spacing.xl}` horizontal.

**Maximum 5 signature design moments per page.** A signature moment is something that earns a screenshot — a striking typographic hero, a creative comparison block, a custom illustration, a unique data visualization, a distinctive testimonial layout. Anything more and the page reads as a portfolio reel rather than a product page.

**Asymmetric layouts beat centered-everything.** Reference Stripe, Linear, Vercel — none center every section. Mix left-aligned hero with right-aligned testimonial; mix two-column features with full-bleed callouts. Never sacrifice mobile clarity for desktop creativity — every asymmetric desktop layout collapses cleanly to a single column under 768px.

**Bento grids permitted, sparingly.** Use them for feature showcases on homepage and pricing comparison; do not use them on every section. Three to six tiles maximum per bento block.

**Glassmorphism: maximum one instance per page, only on FinalCTA.** Never on hero, never on cards, never on testimonials. The single FinalCTA block uses `backdrop-blur` with subtle border to create a "premium close" before the page footer.

## Motion

**Restrained.** Framer Motion is permitted; complex GSAP timelines are not the default. GSAP ScrollTrigger reserved for hero-only treatments where the visual is genuinely distinctive.

**Acceptable motions:**

- Fade-up reveals on scroll (200–400ms duration, ease-out)
- Subtle hover state transitions (color change + 1–2px translate, 150ms)
- Page transitions between sections (300ms, ease-in-out)
- Lenis-driven smooth scrolling on the page itself

**Forbidden motions:** particles, parallax-anything-everywhere, infinite-scrolling marquees, cursor-follow effects, mouse-trail effects, animated number counters that spin into place, animated background gradients, anything labeled "wow factor" in a brief.

**Motion budget:** any single animation over 600ms requires explicit justification. Defaults to under 400ms. Hero reveals are the one permitted exception, capped at 800ms.

## Imagery

**Photography: real, human, contextual.** Pexels and Unsplash with FactoryJet's commercial-use vetting are the default sources. Avoid the generic "diverse business team smiling at laptop" stock cliché — find a sharper visual angle. Real product screenshots beat staged mockups every time.

**Illustrations:** generated via Flux Schnell (Apache 2.0) constrained to the FactoryJet palette. Style: clean line work, flat color blocks, occasional subtle gradient on a single accent element only. Never: rainbow gradients, neon glows, AI-generated faces of fake people, photorealistic AI-generated humans (legal risk and uncanny effect).

**Product mockups:** real screenshots of the actual tool when possible. Generated mockups only for concept work, always labeled.

**Image generation models for pipeline content:** NanoBanana PRO for white-background brand imagery (matches the new white-bg aesthetic). Runware + Kie for variant generation.

## Do's and Don'ts

**DO**

- Use Jet Blue exclusively for interactive elements
- Maintain ≥ 4.5:1 contrast on text; the lint command enforces this
- Apply the spacing scale strictly — `{spacing.md}` not `15px`, `{spacing.lg}` not `25px`
- Default to 6px border-radius for buttons and cards (audit consensus)
- Use multi-stop shadows (Stripe pattern), never single drop-shadows
- Server-render all primary content (AI crawlers do not run JavaScript)
- Include JSON-LD schema on every page (LocalBusiness + Service + FAQPage + BreadcrumbList minimum for landing pages)
- Allow GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended, Applebot-Extended in robots.txt
- Publish CSS custom properties at `:root` so the design system is machine-readable

**DON'T**

- Introduce colors outside the eight named neutrals + three brand primaries
- Use multiple font families — Inter only (and JetBrains Mono for code)
- Apply gradients to text — ever
- Use gradients on content-surface backgrounds (5 reference sites confirm this is the discipline)
- Use glassmorphism beyond a single FinalCTA treatment
- Hide primary content behind JS-only reveals or "Show more" without server fallback
- Use stock photos of "team in modern office" — find a sharper visual angle
- Default to 8px border-radius (audit shows 6px wins, 8px is secondary)
- Apply animations longer than 600ms to non-hero elements
- Mix font families on a single page
- Use `{colors.ink-disabled}` for any content text — it is reserved for disabled controls and placeholder text only (WCAG 1.4.3 exemption); content metadata uses `{colors.ink-subtle}`

## Agent Prompt Guide

When generating UI for any FactoryJet property:

1. **Read this DESIGN.md before writing any CSS or component styles.** Token names, not literal values.
2. **Reference tokens by name** — `{colors.primary}` not `#0052CC`, `{spacing.lg}` not `24px`, `{rounded.md}` not `6px`. The pipeline anti-slop validator will fail any hex literal in JSX outside the token set.
3. **Validate every text-on-background pairing against WCAG AA** — run `npx @google/design.md lint factoryjet.DESIGN.md` before commit. Build fails on lint errors.
4. **Apply the spacing scale strictly** — `{spacing.md}` not `15px`. The 4/8/16/24/32/48/64/96/128 scale is the only permitted vertical and horizontal rhythm.
5. **Default border-radius is `{rounded.md}` (6px)** for buttons, cards, and inputs. Anchor reference: Stripe, Vercel, and 14 other audit sites converged here.
6. **Maximum 5 signature design moments per page.** The rest is restraint. Five is a ceiling, not a target — three is often better.
7. **No dark hero.** White hero + alternating white/off-white sections. Visual weight comes from typography, asymmetric layout, real photography. The current page rhythm overrides any prior dark-hero references in legacy documentation.
8. **One glassmorphism instance per page, FinalCTA only.** Reject any other glassmorphic treatment in the brief.
9. **If a brief asks for "make it pop with a gradient"** — politely redirect to the secondary color, the hover state, or a typographic emphasis. The brand does not pop; the brand convinces.
10. **For pipeline-generated landing pages, the anti-slop validator runs after page build** — see `pipeline/scripts/anti_slop_validator` for the F1/F2/F3 checks. Pages that fail validation route back to the page builder with specific findings before publishing.
