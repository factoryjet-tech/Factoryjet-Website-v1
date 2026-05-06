# FactoryJet Design System v2.0 — Typography Pivot Canon

> **Locked May 2026 → typography pivot May 5, 2026 → canon corrected May 6, 2026.**
>
> Only the type stack changed. Cream surface, light hero, restraint
> references (Stripe / Linear / Vercel / Mercury / Anthropic / Harvey AI)
> all preserved. The live `factoryjet.com/uk` page is a reference for
> **typography only** (Clash Display + Inter + Geist Mono) — its dark hero,
> glassmorphism, and gradient headings are NOT adopted.
>
> This file is the single source of truth. If anything in the codebase
> contradicts it, this file wins. Every Claude Code session must read
> this file first before writing or modifying any component.

---

## 0. Why the typography pivot

The original v2 typography (Fraunces display + Geist body, with italic
conviction-words and Fraunces-italic boring-stats parentheticals) was
locked May 3 against an editorial-publisher reference set. Two
display-font specifics didn't survive scrutiny:

1. **Italic-emphasis on conviction words** depended on Fraunces's variable
   italic axis to read as a confident signature rather than as a writing
   tic. Clash Display — the post-pivot display family — does not render
   inline italic emphasis gracefully at the same scale.
2. **Boring-stats Fraunces-italic parentheticals** had the same dependency.

The May 5 pivot replaces the type stack with **Clash Display 700 (display)
+ Inter (body) + Geist Mono (eyebrow)**, and drops both italic-driven
patterns. Every other v2 axiom — cream-light surfaces, restraint-led
layout, never-dark hero, glassmorphism banned — survives unchanged.

---

## 1. Identity anchors

### 1.1 Positioning sentence

> FactoryJet is the AI-native digital agency for SMBs across the UK, US,
> UAE, India, and beyond. We build websites and AI agents at startup-
> friendly prices: enterprise-grade quality, transparent pricing, shipped
> to production in 60 days — not pilots that quietly die.

### 1.2 Reference set

**Visual / layout / restraint references** (unchanged from original v2):

- **Stripe** (stripe.com) — disciplined whitespace, confident type, subtle motion.
- **Linear** (linear.app) — sharp grotesk body, surgical precision, dark used as accent only.
- **Vercel** (vercel.com) — editorial scale, asymmetric grids.
- **Mercury** (mercury.com) — warm light backgrounds with one strategic dark mid-page section.
- **Anthropic** (anthropic.com) — cream + ink + accent, calm authority.
- **Harvey AI** (harvey.ai) — calm light, professional weight, AI without theatrics.

**Typography-only reference**:

- **`factoryjet.com/uk`** — the post-pivot type stack canon. Reference for
  **font choices only** (Clash Display + Inter + Geist Mono). The live
  page's dark hero surface, glassmorphism on stat cards, gradient H2, and
  liberal stock-photo backgrounds are explicitly **NOT** adopted into v2.

### 1.3 Anti-references (do NOT design like these)

- Default Lovable / Bolt / v0 templates (dark hero + neon accent + glow).
- Generic SaaS templates with three symmetric pricing cards above the fold.
- HubSpot/template-builder aesthetic that signals "established but tired".
- Y Combinator AI-startup pages from the last 18 months that picked
  Inter + dark mode + gradient text as a default lane.

---

## 2. Color system

### 2.1 The 70-20-10 palette

The dominant palette is **warm-neutral**, not multi-brand. Jet Blue is the
only primary brand colour that appears on dominant surfaces. Jet Orange
is reserved for component-level secondary accents (status, FLAGSHIP tag,
JetSDR variant), not page surfaces.

| Token              | Hex       | Role                                                          | % of page |
|--------------------|-----------|---------------------------------------------------------------|-----------|
| `--fj-cream`       | `#FAFAF7` | Default page background — warmer than white, calmer than ivory. | ~70%    |
| `--fj-ink`         | `#1A1A1A` | Body text, default foreground.                                 | ~20%      |
| `--fj-jet-blue`    | `#0052CC` | Primary accent — links, eyebrows, primary CTA, key stats.      | ~10%      |
| `--fj-jet-orange`  | `#FF6B35` | Secondary accent — FLAGSHIP tag, JetSDR variant, small-area only. | <1%    |

### 2.2 Strategic dark-section palette (rhythm-break only)

| Token              | Hex       | Role                                                       |
|--------------------|-----------|------------------------------------------------------------|
| `--fj-navy`        | `#0A0F1C` | Reserved for `StrategicDarkSection` mid-page rhythm break. |
| `--fj-navy-deep`   | `#070B14` | Reserved for `SiteFooter` (the second permitted dark surface). |
| `--fj-charcoal`    | `#0F0F12` | Legacy dark-section token (charcoal). Either navy or charcoal is acceptable; pick one per page and stay consistent. |
| `--fj-charcoal-text` | `#F5F5F2` | Body text inside dark sections.                          |
| `--fj-charcoal-muted` | `#8A8A8F` | Muted/secondary text inside dark sections.              |
| `--fj-jet-blue-on-dark` | `#4A8FFF` | Eyebrows + accent links inside dark sections (contrast-safe). |

**Rule:** A page may have a maximum of **2 dark sections**, both of which
must be `StrategicDarkSection` and/or `SiteFooter`. Hero is **NEVER**
dark — see §2.5.

### 2.3 Tertiary tints (component-level)

| Token                  | Hex       | Use                                                  |
|------------------------|-----------|------------------------------------------------------|
| `--fj-jet-blue-tint`   | `#E6F0FF` | Comparison-table FactoryJet column highlight.        |
| `--fj-jet-orange-tint` | `#FEF3E8` | JetSDR card BG, FLAGSHIP-tagged surfaces.            |
| `--fj-jet-green`       | `#10B981` | "AVAILABLE" / "LIVE" status indicators.              |
| `--fj-jet-green-tint`  | `#E8FAF1` | JetAgent card BG.                                    |
| `--fj-jet-blue-bright` | `#3B82F6` | Reserved (loaded for future hero-CTA accent variants); not in default v2 use. |

### 2.4 Neutrals

| Token              | Hex       | Use                                                |
|--------------------|-----------|----------------------------------------------------|
| `--fj-neutral-50`  | `#F8F8F5` | Subtle alternate section background.               |
| `--fj-neutral-100` | `#EFEFEA` | Card backgrounds inside cream sections.            |
| `--fj-neutral-200` | `#D9D9D2` | Hairlines, borders, dividers.                      |
| `--fj-neutral-400` | `#8A8A82` | Muted labels, eyebrow text on light surface (when not Jet Blue), footer copy. |
| `--fj-neutral-600` | `#4A4A45` | Secondary body text.                               |

### 2.5 Hero rule (hard)

**Hero is never dark.** Light cream BG default with optional `rightSlot`
for imagery / illustration / mockup. This rule applies to all page types
— global home, country page, service hub, country×city hub,
country×city×service, country×city×service×industry-niche.

If a designer or generated page produces a dark hero, that's a violation
of this canon and must be reverted before review.

### 2.6 Glassmorphism rule (hard)

**Glassmorphism is BANNED everywhere except optionally on `FinalCTA`.**
Frosted-glass surfaces (white/10 + backdrop-blur + white/20 border) are
**not** permitted on stat cards, city context blocks, hero overlays,
case-study cards, or anywhere else. The single-instance allowance on
`FinalCTA` exists in the original v2 spec and is preserved here.

### 2.7 Gradient text rule (hard)

**Gradient text on headings is BANNED.** Headings render in solid `fj-ink`
on light surfaces and solid `fj-charcoal-text` (or white) on dark
sections, with optional Jet Blue accent words. No background-clip text
fills, no white→light-blue gradients, no rainbow fills.

### 2.8 What's still forbidden

- ❌ Rainbow gradients on backgrounds, borders, or buttons.
- ❌ Glow effects (`box-shadow: 0 0 [n]px rgba(neon-colour)`).
- ❌ Neon-on-dark colour combinations.
- ❌ Background images behind text without 70%+ overlay if contrast drops below WCAG AA.
- ❌ Use of Jet Orange as section background or hero surface.

---

## 3. Typography

### 3.1 Font families (post-pivot)

| Role                                        | Font                  | Source                |
|---------------------------------------------|-----------------------|-----------------------|
| Display (hero H1, section H2, large stats)  | **Clash Display 700** | Fontshare             |
| Body (paragraphs, nav, buttons, microcopy)  | **Inter**             | next/font/google      |
| Eyebrow / mono microcopy / code             | **Geist Mono**        | `geist/font/mono`     |

**Removed from active v2 use:** Fraunces, Source Serif 4, Geist Sans.
All three remain loaded via `next/font` for v1 page parity, but no v2
component should consume them after M1.d.1.

### 3.2 Type scale

| Token            | Size (desktop / mobile)         | Weight | Tracking | Font          | Use                                           |
|------------------|---------------------------------|--------|----------|---------------|-----------------------------------------------|
| `--type-hero`    | 72–96px / 44–56px               | 700    | -0.025em | Clash Display | Hero H1.                                      |
| `--type-h1`      | 56–72px / 40–48px               | 700    | -0.02em  | Clash Display | Page H1 (non-hero).                           |
| `--type-h2`      | 40–56px / 32–40px               | 700    | -0.02em  | Clash Display | Section H2.                                   |
| `--type-h3`      | 28–32px / 24–28px               | 600    | -0.015em | Clash Display | Sub-section H3, card titles.                  |
| `--type-h4`      | 22–24px                         | 600    | -0.01em  | Clash Display | Tier names, FAQ questions, sector card names. |
| `--type-stat`    | 80–96px / 56–64px               | 700    | -0.04em  | Clash Display | Big-Three stat numerals.                      |
| `--type-eyebrow` | 13px                            | 500    | 0.12em   | Geist Mono    | UPPERCASE eyebrows. Jet Blue (light) / Jet Blue on-dark (dark). |
| `--type-lead`    | 20–22px / 18–19px               | 400    | 0        | Inter         | Hero sub-headline, section lead.              |
| `--type-body`    | 17–18px / 16–17px               | 400    | 0        | Inter         | Default body. Line-height 1.6.                |
| `--type-body-sm` | 15px                            | 400    | 0        | Inter         | Card body, FAQ answer.                        |
| `--type-caption` | 13px                            | 500    | 0.005em  | Inter         | Captions, labels, footnotes.                  |
| `--type-button`  | 14–15px                         | 600    | -0.005em | Inter         | Button label.                                 |
| `--type-nav`     | 14–15px                         | 500    | 0        | Inter         | Top nav items.                                |

### 3.3 Forbidden typography

- ❌ Inter substitutes (Roboto, Poppins, DM Sans, Open Sans, Montserrat, Manrope, Plus Jakarta Sans).
- ❌ Three+ font families on a page. Display + body + (optional) mono = max three.
- ❌ Animated / gradient / textured fill on type. Headlines are solid colour, period.
- ❌ All-caps blocks longer than 4 words (eyebrows max).
- ❌ Italic-conviction-word emphasis pattern. Clash Display does not render
  inline italic emphasis at the scale Fraunces did; the pattern is dropped
  entirely. Headlines are confident statements, not editorial flourishes.
- ❌ Fraunces-italic boring-stats parentheticals. Same display-font reason.
  Stats render in plain Inter body text below the numeral.

### 3.4 Voice

- **SMB-direct, conversion-focused, concrete numbers.**
  - YES: "Pricing on the first call."
  - YES: "Built for the world's most demanding business climate."
  - YES: "60 days from kickoff to production."
- **Drop italic conviction words.** Pre-pivot pattern; dropped for display-font compatibility.
- **Drop the self-deprecating parenthetical.** "(we keep score)" was a
  signature; it's now a tic. Earn the trust through the data, not the aside.
- **No buzzwords, no hype superlatives, no "delve", no "leverage", no "robust", no "synergies", no "paradigm".** Banned word list per the original v2 voice rules.
- **Editorial restraint preserved.** Whitespace, asymmetric grids, single accent colour per moment — all kept.

---

## 4. Spacing & layout

### 4.1 Spacing scale (8-point grid)

```
--space-1: 4px      --space-7: 48px
--space-2: 8px      --space-8: 64px
--space-3: 12px     --space-9: 96px
--space-4: 16px     --space-10: 128px
--space-5: 24px     --space-11: 160px
--space-6: 32px     --space-12: 192px
```

### 4.2 Section padding

| Context       | Desktop padding-y | Mobile padding-y |
|---------------|-------------------|------------------|
| Hero          | 96–128px          | 64–80px          |
| Major section | 80–96px           | 56–72px          |
| Sub-section   | 64–80px           | 48–64px          |
| Card stack    | 48–64px           | 40–48px          |

The 80–96px major-section rhythm was set in M1.c.2.5 review and is
preserved. Whitespace is part of the brand.

### 4.3 Container widths

| Token                | Width   | Use                                             |
|----------------------|---------|-------------------------------------------------|
| `--container-narrow` | 720px   | Long-form prose, blog articles.                 |
| `--container-default`| 1200px  | Most marketing sections.                        |
| `--container-wide`   | 1320px  | Hero, comparison table, case studies grid.      |
| `--container-full`   | 100vw   | Full-bleed dark sections, logo strips.          |

### 4.4 Grid philosophy

Asymmetric grids (60/40, 7/5) for narrative sections (hero, city context,
service explanation, FAQ). Symmetric 3-up grids for repeating cards
(pricing tiers, case-study cards, industry cards). Both lanes are valid;
pick whichever serves the section's information shape.

Left-aligned over centred for hero headlines, section headers, and card
grids. Centred reserved for footer CTAs, individual card content within
asymmetric outer grids, and modal dialogs.

---

## 5. Page taxonomy (locale-agnostic)

The ProgSEO pipeline is global from day one. Every component must accept
locale-driving props; no UK-specific defaults are baked in.

### 5.1 Page levels

```
Global home          factoryjet.com/
  ↓
Country page         factoryjet.com/{country}                   /uk, /us, /au, /ae, /in, /br, /mx, ...
  ↓
Service hub          factoryjet.com/services/{service}          (cross-country canonical)
  ↓
Country×City hub     factoryjet.com/{country}/{city}            /uk/london, /us/austin, ...
  ↓
City×Service         factoryjet.com/{country}/{city}/{service}  /uk/london/web-design
  ↓
City×Service×Niche   factoryjet.com/{country}/{city}/{service}/{niche}
                                                                /uk/london/web-design/financial-services
```

### 5.2 Per-locale data each component must accept (via props or context)

| Field                       | UK example                                      | US example                                        |
|-----------------------------|-------------------------------------------------|---------------------------------------------------|
| `currencyCode`              | `GBP`                                           | `USD`                                             |
| `currencySymbol`            | `£`                                             | `$`                                               |
| `countryAdjective`          | `UK` / `British`                                | `US` / `American`                                 |
| `officialStatsBodyName`     | Office for National Statistics                  | U.S. Census Bureau                                |
| `officialStatsBodyUrl`      | https://www.ons.gov.uk                          | https://www.census.gov                            |
| `languageCode`              | `en-GB`                                         | `en-US`                                           |
| `agencyCompetitorCatalog`   | List of UK agency archetypes                    | List of US agency archetypes                      |
| `regulatoryAuthority`       | FCA / ICO / MHRA                                | SEC / FDA / FTC                                   |

### 5.3 Per-locale data sources (M1.d.6+ wiring)

| Country | Currency | Stats body                                        | URL                       |
|---------|----------|---------------------------------------------------|---------------------------|
| UK      | GBP      | Office for National Statistics                    | https://www.ons.gov.uk    |
| US      | USD      | U.S. Census Bureau                                | https://www.census.gov    |
| AU      | AUD      | Australian Bureau of Statistics                   | https://www.abs.gov.au    |
| AE      | AED      | UAE Federal Statistics                            | https://fcsc.gov.ae       |
| IN      | INR      | Ministry of Statistics & Programme Implementation | https://www.mospi.gov.in  |
| BR      | BRL      | IBGE                                              | https://www.ibge.gov.br   |
| MX      | MXN      | INEGI                                             | https://www.inegi.org.mx  |

NO UK-specific defaults baked in. Every reference to ONS or £ in a v2
component is a bug starting M1.d.2.

---

## 6. Component library

The 18 components below are the post-pivot canon. M1.d.1 changed only
fonts/tokens/utilities; component implementations were not touched.
M1.d.2 → M1.d.5 strip italic-emphasis className applications and the
Fraunces-italic boring-stats parentheticals from each component.
M1.d.6 adds component #19 (`CountryPageHero`).

| #  | Component               | v2 visual lane                                                                  | Reskin patch |
|----|-------------------------|---------------------------------------------------------------------------------|--------------|
| 1  | Heading                 | Clash Display 700, no italic-emphasis em rule.                                  | M1.d.2       |
| 2  | Hero                    | Cream BG (light, never dark). Optional `rightSlot` for imagery.                 | M1.d.2       |
| 3  | FinalCTA                | Light variant default (cream surface), optional dark variant. Glassmorphism allowed only here. Drop italic emphasis. | M1.d.2 |
| 4  | BoringStatsRow          | Cream/white BG, ink Fraunces stat numerals (replaced by Clash). Drop the Fraunces-italic parenthetical voice. | M1.d.3 |
| 5  | StrategicDarkSection    | Charcoal or navy mid-page rhythm break (one of two dark slots per page).        | M1.d.3       |
| 6  | BigThreeTrustBlock      | Solid 3-card row on cream/neutral-50, large Clash numerals. No glassmorphism.   | M1.d.3       |
| 7  | CityContextSection      | Cream BG, optional `rightSlot`, three sourced stat callouts.                    | M1.d.3       |
| 8  | FAQ                     | Cream BG, Clash H3 questions, Inter answers, hairline borders.                  | M1.d.4       |
| 9  | PricingTiers            | Neutral-50 BG section, cream cards, popular tier 2px Jet Blue ring + solid CTA. | M1.d.4       |
| 10 | IndustriesGrid          | Cream BG, neutral-50 cards, hover Jet Blue border.                              | M1.d.4       |
| 11 | ComparisonTable         | Cream BG, Jet Blue tint FactoryJet column, sticky labels mobile.                | M1.d.4       |
| 12 | ServiceJourneyRow       | Cream BG, large Clash numerals, 1px hairline timeline.                          | M1.d.4       |
| 13 | ServiceExplanation      | Cream BG, optional `rightSlot` (AI 3D mockup or real client screenshot).        | M1.d.4       |
| 14 | SiteHeader              | Cream surface, Inter nav, Jet Blue solid CTA.                                   | M1.d.5       |
| 15 | SiteFooter              | `fj-navy-deep` BG (the second permitted dark slot), white text, multi-column links. | M1.d.5   |
| 16 | ImageBlock              | Plain `<img>` with optional cream/white inset panel for elevated.               | M1.d.5       |
| 17 | LogoBar                 | Cream-warm BG, monochrome wordmarks, opacity-60 default.                        | M1.d.5       |
| 18 | CaseStudyCard           | Cream BG card, photo top, Clash H4 client name, ink body.                      | M1.d.5       |
| 19 | CountryPageHero         | NEW. Country-level hero with locale-resolved props. Cream BG (light, never dark). | M1.d.6     |

---

## 7. Motion & interaction

Motion stays subtle. Inertia + ease, never linear. All transitions use
`cubic-bezier(0.22, 1, 0.36, 1)` (custom ease-out-quint) by default.

### 7.1 Approved patterns

- Fade-up on first viewport entry: `translateY(16px) → 0`, opacity `0 → 1`,
  600ms ease-out-quint.
- Hover lift on cards: `translateY(0) → -2px`, shadow change, 200ms.
- Underline draw on link hover: pseudo-element width `0 → 100%`, 200ms.
- Smooth scroll via Lenis (already in stack).

### 7.2 Forbidden motion

- ❌ Spinning counters / count-up-on-scroll number animations. Numbers are static.
- ❌ Mouse-tracking spotlight/glow effects on cards.
- ❌ Video backgrounds.
- ❌ Infinite marquees (logo bar exception: a single 60s loop is fine if
  paused on hover, but most pages use a static logo strip).
- ❌ Particles, floating geometric shapes, abstract orbs.
- ❌ Load-screen / splash animations.
- ❌ Parallax backgrounds (performance + accessibility cost).
- ❌ "Reveal on scroll" animation longer than 600ms or staggered across more than 6 elements.

---

## 8. Imagery

### 8.1 What we use

- **Stock photos in moderation** (Pexels / Unsplash) — used where they
  earn their place (case-study covers, occasional ServiceExplanation
  right slot), not as default. Filter for: matte finish, natural light,
  neutral colour grading. Avoid: glossy product shots, AI-generated faces,
  stock photos with people in suits in conference rooms.
- **AI 3D mockups** (Aura-style holographic compositions) — fine for
  ServiceExplanation right slots when no real client screenshot exists.
- **Real client screenshots** — preferred whenever available, especially
  on case-study cards.
- **Inline SVG icons** — for ✓ / ◐ / ✕ comparison glyphs and small UI affordances.

### 8.2 What we avoid

- ❌ **Stock-photo hero backgrounds.** Hero stays light cream with optional
  `rightSlot` for imagery — never a full-bleed photo behind the headline.
- ❌ AI-generated photorealistic people.
- ❌ Abstract "neural network" / "circuit board" stock illustrations.
- ❌ Gradient orbs or glowing globes.
- ❌ Floating geometric shapes as decorative elements.
- ❌ Emoji as functional icons (only allowed in body prose).

---

## 9. Performance budget

| Metric                       | Target          |
|------------------------------|-----------------|
| Lighthouse Performance       | ≥ 95            |
| Lighthouse SEO               | 100             |
| Lighthouse Accessibility     | ≥ 95            |
| Lighthouse Best Practices    | 100             |
| Largest Contentful Paint     | < 1.8s          |
| First Contentful Paint       | < 1.0s          |
| Cumulative Layout Shift      | < 0.05          |
| Total Blocking Time          | < 200ms         |
| Initial JS bundle            | < 180KB gzipped |
| Initial CSS                  | < 30KB gzipped  |
| Web font total weight        | < 80KB (subset Latin Extended) |

The original v2 budget is preserved. Cream-light pages with restrained
imagery hit ≥ 95 reliably; lazy-load any ServiceExplanation right slot
that risks regressing LCP.

---

## 10. Accessibility floor

- WCAG 2.2 AA minimum. AAA where reasonable.
- All interactive elements keyboard-navigable with visible focus rings
  (`outline: 2px solid var(--fj-jet-blue); outline-offset: 2px`).
- Body text on cream meets 7:1 (AAA), heading text on cream meets 4.5:1 (AA).
- Body text inside dark sections (`StrategicDarkSection`, `SiteFooter`)
  meets 4.5:1 (AA) — use `--fj-charcoal-text` or white at minimum 80% opacity.
- All images have alt text. Decorative images have `alt=""` and `aria-hidden="true"`.
- Heading hierarchy sequential (no skipping H1 → H3).
- `prefers-reduced-motion` respected for all motion patterns.

---

## 11. AI SEO / GEO requirements

Every page on the site must be optimised for AI engine citation in
addition to traditional Google ranking.

- **Server-side rendered content.** AI crawlers don't execute JavaScript.
  All primary content must be in initial HTML.
- **Semantic HTML.** Use `<article>`, `<section>`, `<nav>`, `<aside>`,
  `<dl>`/`<dt>`/`<dd>` for definitions.
- **Schema markup mandatory:** Organization, Service (per service page),
  FAQPage (per FAQ block), DefinedTerm (per glossary entry),
  BreadcrumbList (sitewide).
- **No accordion-hidden primary content.** Per SearchPilot, expanded
  content delivers 12–14% ranking uplift. FAQ answers stay in static HTML.
- **Cloudflare WAF allowlist for AI crawlers:** GPTBot, ClaudeBot,
  PerplexityBot, anthropic-ai, Google-Extended, CCBot.
- **`llms.txt` file at site root** declaring permitted crawl behaviour
  for LLM training and indexing.

---

## 12. Acceptance test

Open any FactoryJet page in incognito at 1280px and at 375px. Read for
five seconds.

The reader should think: **"This is an AI services company that obviously
knows what it's doing — and it's going to actually ship my website in
60 days at a price they'll quote me on the first call."**

Not: "This is a fast web design agency."
Not: "This is another AI startup with a dark hero and a glowing gradient."
Not: "This was generated by Claude Code in 30 minutes."

If a page doesn't pass that test, revise.

---

**Version:** 2.0 (post M1.d.1.1 typography pivot canon correction)
**Last updated:** May 6, 2026
**Next review:** Post-M1.d.6 (after CountryPageHero ships)
**Maintained by:** Bhavesh Bhatt, Founder & CEO
