# FactoryJet Design System v2.0 — Aesthetic Pivot Canon

> **Locked May 2026 → pivoted May 5, 2026.**
> The cream-Fraunces-restraint canon (Stripe / Linear / Mercury / Anthropic
> reference set) is **abandoned**. It served the wrong audience. v2 now
> matches the live `factoryjet.com/uk` aesthetic — the SMB-direct,
> conversion-focused lane.
>
> This file is the single source of truth. If anything in the codebase
> contradicts it, this file wins. Every Claude Code session must read
> this file first before writing or modifying any component.

---

## 0. Why the pivot

The May 3 cream-Fraunces direction was built against an editorial-publisher
reference set (Stripe / Linear / Mercury / Anthropic / Harvey). Those
brands serve developer + enterprise audiences who already know they want
the product; their pages are about depth and credibility.

FactoryJet's UK SMB audience is different:
- They are **time-poor founders and operators**, not technical evaluators.
- They make snap judgements on credibility from **bold confident
  statements**, not editorial restraint.
- They convert through **proof + price + comparable example**, not
  through whitespace and italics.
- They expect **dark navy hero + glassmorphic stat cards + stock photos**
  because every other agency they've considered shows them that.

The live `factoryjet.com/uk` already speaks this lane. v2 catches up.

---

## 1. Identity anchors

### 1.1 Positioning sentence

> FactoryJet is the AI-native digital agency for SMBs across the UK, US,
> UAE, India, and beyond. We build websites and AI agents at startup-
> friendly prices: enterprise-grade quality, transparent pricing, shipped
> to production in 60 days — not pilots that quietly die.

### 1.2 The canonical reference

**[factoryjet.com/uk](https://factoryjet.com/uk)** is the visual canon.
Not Stripe. Not Linear. Not Mercury. Not Anthropic. Not Harvey.

When a new page or component is being designed, the question is:
*"Does this look and read like a section that belongs on factoryjet.com/uk?"*
If not, revise.

### 1.3 Anti-references (do NOT design like these)

- The pre-pivot v2 cream-Fraunces lane (any italic-emphasis pattern,
  Fraunces axes tuning, "boring stats" parenthetical, asymmetric whitespace
  hero with no imagery).
- Default Lovable / Bolt / v0 templates (dark hero + neon accent + glow).
- Generic SaaS templates with three symmetric pricing cards above the fold.

---

## 2. Color system

### 2.1 The new dominant palette

| Token                  | Hex       | Role                                                |
|------------------------|-----------|-----------------------------------------------------|
| `--fj-navy`            | `#0A0F1C` | **Hero default BG.** Dominant on page-top surfaces. |
| `--fj-navy-deep`       | `#070B14` | Footer, deeper rhythm-break sections.               |
| `#FFFFFF`              | white     | Body section BG (alternates with light off-white).  |
| `--fj-jet-blue`        | `#0052CC` | Primary brand colour, CTAs, accent.                 |
| `--fj-jet-blue-bright` | `#3B82F6` | Hero CTA buttons (live /uk match).                  |
| `--fj-jet-orange`      | `#FF6B35` | Secondary accent, FLAGSHIP tag, JetSDR variant.     |
| `--fj-jet-blue-on-dark`| `#4A8FFF` | Eyebrows, italics, links over navy/charcoal.        |

### 2.2 Tertiary tokens (component-level)

| Token                  | Hex       | Use                                                 |
|------------------------|-----------|-----------------------------------------------------|
| `--fj-jet-blue-tint`   | `#E6F0FF` | Comparison-table FactoryJet column highlight.       |
| `--fj-jet-orange-tint` | `#FEF3E8` | JetSDR card BG, FLAGSHIP-tagged surfaces.           |
| `--fj-jet-green`       | `#10B981` | "AVAILABLE" / "LIVE" status indicators.             |
| `--fj-jet-green-tint`  | `#E8FAF1` | JetAgent card BG.                                   |
| `--fj-cream`           | `#FAFAF7` | **Accent only** post-pivot (was dominant BG; now    |
|                        |           | reserved for case-study card surfaces, callout      |
|                        |           | banners, occasional content-section warmth break).  |

### 2.3 Neutrals

| Token              | Hex       | Use                                                |
|--------------------|-----------|----------------------------------------------------|
| `--fj-ink`         | `#1A1A1A` | Body text on light surfaces.                       |
| `--fj-neutral-600` | `#4A4A45` | Secondary body text.                               |
| `--fj-neutral-400` | `#8A8A82` | Muted labels, eyebrow on light surface (when not   |
|                    |           | using Jet Blue), footer copy.                      |
| `--fj-neutral-200` | `#D9D9D2` | Hairlines, card borders.                           |
| `--fj-neutral-100` | `#EFEFEA` | Subtle alternate panel BG.                         |
| `--fj-neutral-50`  | `#F8F8F5` | Light off-white section variant (to alternate with |
|                    |           | pure white).                                       |

### 2.4 What's allowed now (pivot deltas)

- **Gradient text** on H2 conviction headings — `.fj-gradient-heading`
  (white → light-blue) when the heading sits on a navy/dark surface.
- **Glassmorphism on stat cards** — frosted-glass surfaces (white/10
  background + backdrop-blur + white/20 border) over navy/dark are
  permitted. Live /uk uses this on the £80.8B / 54% / £265B+ pattern.
- **Jet Orange as surface** — small-area only (badges, FLAGSHIP tags,
  productised solution card BG). Not as section BG.
- **Stock photos** — Pexels/Unsplash hero/section backgrounds, AI 3D
  mockups (Aura-style holographic compositions) for ServiceExplanation
  right slots. Real client screenshots when available.

### 2.5 What's still forbidden

- Rainbow gradients on backgrounds, borders, or buttons.
- Glow effects (`box-shadow: 0 0 [n]px rgba(neon-colour)`).
- Neon-on-dark colour combinations.
- Background images behind text without 70%+ overlay if contrast drops
  below WCAG AA.

---

## 3. Typography

### 3.1 Font families

| Role                                        | Font          | Source                       |
|---------------------------------------------|---------------|------------------------------|
| Display (hero H1, section H2, large stats)  | **Clash Display 700** | Fontshare                    |
| Body (paragraphs, nav, buttons, microcopy)  | **Inter**     | next/font/google             |
| Eyebrow / mono microcopy / code             | **Geist Mono**| `geist/font/mono`            |

**No Fraunces.** No Source Serif 4. No italic-emphasis pattern. The
italic conviction-word treatment that defined the pre-pivot v2 is gone.

### 3.2 Type scale

| Token              | Size (desktop / mobile)        | Weight | Tracking | Font          | Use                                  |
|--------------------|--------------------------------|--------|----------|---------------|--------------------------------------|
| `--type-hero`      | 72–96px / 44–56px              | 700    | -0.025em | Clash Display | Hero H1.                             |
| `--type-h1`        | 56–72px / 40–48px              | 700    | -0.02em  | Clash Display | Page H1 (non-hero).                  |
| `--type-h2`        | 40–56px / 32–40px              | 700    | -0.02em  | Clash Display | Section H2.                          |
| `--type-h3`        | 28–32px / 24–28px              | 600    | -0.015em | Clash Display | Sub-section H3, card titles.         |
| `--type-h4`        | 22–24px                        | 600    | -0.01em  | Clash Display | Tier names, FAQ questions, sector    |
|                    |                                |        |          |               | card names.                          |
| `--type-stat`      | 80–96px / 56–64px              | 700    | -0.04em  | Clash Display | Big-Three stat numerals, hero        |
|                    |                                |        |          |               | metrics.                             |
| `--type-eyebrow`   | 13px                           | 500    | 0.12em   | Geist Mono    | UPPERCASE eyebrows. Jet Blue (light) |
|                    |                                |        |          |               | / Jet Blue on-dark (dark).           |
| `--type-lead`      | 20–22px / 18–19px              | 400    | 0        | Inter         | Hero sub-headline, section lead.     |
| `--type-body`      | 17–18px / 16–17px              | 400    | 0        | Inter         | Default body. Line-height 1.6.       |
| `--type-body-sm`   | 15px                           | 400    | 0        | Inter         | Card body, FAQ answer.               |
| `--type-caption`   | 13px                           | 500    | 0.005em  | Inter         | Captions, labels, footnotes.         |
| `--type-button`    | 14–15px                        | 600    | -0.005em | Inter         | Button label.                        |
| `--type-nav`       | 14–15px                        | 500    | 0        | Inter         | Top nav items.                       |

### 3.3 Forbidden typography

- ❌ Inter substitutes (Roboto, Poppins, DM Sans, Open Sans, Montserrat,
  Manrope, Plus Jakarta Sans).
- ❌ Three+ font families on a page. Display + body + (optional) mono = max three.
- ❌ Animated/gradient/textured fill on type **except** the explicit
  `.fj-gradient-heading` H2 treatment described in §2.4.
- ❌ All-caps blocks longer than 4 words (eyebrows max).
- ❌ Italic-emphasis on conviction words (the pre-pivot signature pattern).
  Headlines are confident statements, not editorial flourishes.
- ❌ Fraunces-italic boring-stats parentheticals (the second pre-pivot
  signature). If a parenthetical earns its place, it lives in straight
  Inter italic at body-small or caption size — no Fraunces axes, no
  per-stat ornamentation.

### 3.4 Voice

- **Confident statements, not editorial flourishes.**
  - YES: "Pricing on the first call."
  - YES: "Built for the world's most demanding business climate."
  - NO:  "Pricing on the *first* call." (italic word — pre-pivot pattern)
- **Concrete numbers, comparables, named outcomes.** SMB founders convert
  on specifics, not on tone.
- **Drop the self-deprecating parenthetical.** "(we keep score)" was a
  signature; it's now a tic. Earn the trust through the data, not the
  aside.

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

Tighter than the pre-pivot 96–128/80–96 because dense conversion-focused
pages need momentum, not breath.

### 4.3 Container widths

| Token                | Width   | Use                                           |
|----------------------|---------|-----------------------------------------------|
| `--container-narrow` | 720px   | Long-form prose, blog articles.               |
| `--container-default`| 1200px  | Most marketing sections.                      |
| `--container-wide`   | 1320px  | Hero, comparison table, case studies grid.    |
| `--container-full`   | 100vw   | Full-bleed dark sections, logo strips.        |

### 4.4 Grid philosophy

Asymmetric grids stay valid (60/40, 7/5) for narrative sections, but
symmetric grids are no longer forbidden — pricing tiers, case-study
cards, industry cards all use 3-up symmetric grids. The pre-pivot
"asymmetric over symmetric" rule is dropped.

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

| Country | Currency | Stats body                  | URL                                          |
|---------|----------|-----------------------------|----------------------------------------------|
| UK      | GBP      | Office for National Statistics | https://www.ons.gov.uk                    |
| US      | USD      | U.S. Census Bureau          | https://www.census.gov                       |
| AU      | AUD      | Australian Bureau of Statistics | https://www.abs.gov.au                  |
| AE      | AED      | UAE Federal Statistics      | https://fcsc.gov.ae                          |
| IN      | INR      | Ministry of Statistics & Programme Implementation | https://www.mospi.gov.in |
| BR      | BRL      | IBGE                        | https://www.ibge.gov.br                      |
| MX      | MXN      | INEGI                       | https://www.inegi.org.mx                     |

NO UK-specific defaults baked in. Every reference to ONS or £ in a v2
component is a bug starting M1.d.2.

---

## 6. Component library

The 18 components below are the post-pivot canon. Their architecture and
prop contracts stay (M1.d.1 changes only fonts/tokens/utilities). Reskins
land in M1.d.2 → M1.d.5. M1.d.6 adds component #19 (CountryPageHero).

| #  | Component               | New visual lane (post-pivot)                                  | Reskin patch |
|----|-------------------------|---------------------------------------------------------------|--------------|
| 1  | Heading                 | Clash Display 700, no italic-emphasis. Drop axis tuning.      | M1.d.2       |
| 2  | Hero                    | Navy BG default, gradient or solid white H1, photo right slot, glassmorphic stat overlay. | M1.d.2       |
| 3  | FinalCTA                | Navy BG, white H2, Jet Blue solid CTA, drop italic emphasis.  | M1.d.2       |
| 4  | BoringStatsRow          | Glassmorphic cards on dark, solid white on light. Drop the    | M1.d.3       |
|    |                         | Fraunces-italic parenthetical voice.                          |              |
| 5  | StrategicDarkSection    | Navy BG (was charcoal), Clash H2, drop italic-emphasis em rule.| M1.d.3      |
| 6  | BigThreeTrustBlock      | Glassmorphic 3-card row over navy, large Clash numerals.      | M1.d.3       |
| 7  | CityContextSection      | Navy or white BG, photo right slot, three sourced stat callouts. | M1.d.3   |
| 8  | FAQ                     | White BG, Clash H3 questions, Inter answers, hairline borders. | M1.d.4      |
| 9  | PricingTiers            | White BG, glassmorphic POPULAR card, Jet Blue CTA on Growth.  | M1.d.4       |
| 10 | IndustriesGrid          | White or off-white BG, photo on each card, hover Jet Blue border. | M1.d.4   |
| 11 | ComparisonTable         | White BG, Jet Blue tint FactoryJet column, sticky labels mobile. | M1.d.4    |
| 12 | ServiceJourneyRow       | Navy or white BG, large Clash numerals, 1px hairline timeline. | M1.d.4      |
| 13 | ServiceExplanation      | White BG, AI-3D mockup or stock photo right slot.             | M1.d.4       |
| 14 | SiteHeader              | Cream→white surface, Inter nav, Jet Blue CTA.                 | M1.d.5       |
| 15 | SiteFooter              | Navy-deep BG, white text, multi-column links.                 | M1.d.5       |
| 16 | ImageBlock              | Plain `<img>` with optional cream/white inset panel for elevated. | M1.d.5   |
| 17 | LogoBar                 | White or off-white BG, monochrome logos, opacity-60 default.  | M1.d.5       |
| 18 | CaseStudyCard           | Cream BG card, photo top, Clash H4 client name, ink body.     | M1.d.5       |
| 19 | CountryPageHero         | NEW. Country-level hero with locale-resolved props.           | M1.d.6       |

---

## 7. Motion & interaction

Motion stays subtle. Live /uk has light fade-up on stat-overlay cards
and a soft underline draw on nav links — both fine under v2.

### 7.1 Approved patterns

- Fade-up on first viewport entry: `translateY(16px) → 0`, opacity `0 → 1`,
  600ms ease-out-quint.
- Hover lift on cards: `translateY(0) → -2px`, shadow change, 200ms.
- Underline draw on link hover: pseudo-element width `0 → 100%`, 200ms.
- Smooth scroll via Lenis (already in stack).

### 7.2 Forbidden motion

- ❌ Spinning counters / count-up-on-scroll number animations. Numbers
  are static.
- ❌ Mouse-tracking spotlight/glow effects on cards.
- ❌ Video backgrounds.
- ❌ Infinite marquees (logo bar exception: a single 60s loop is fine
  if paused on hover, but most pages use a static logo strip).
- ❌ Particles, floating geometric shapes, abstract orbs.
- ❌ Load-screen / splash animations.

---

## 8. Imagery

### 8.1 What we use

- **Stock photos** (Pexels / Unsplash) — hero backgrounds, section
  backgrounds, anywhere a real photo earns its place. Filter for: matte
  finish, natural light, neutral colour grading. Avoid: glossy product
  shots, AI-generated faces, stock photos with people in suits in
  conference rooms.
- **AI 3D mockups** (Aura-style holographic compositions) — fine for
  ServiceExplanation right slots when no real client screenshot exists.
- **Real client screenshots** — preferred whenever available, especially
  on case-study cards.
- **Inline SVG icons** — for ✓/◐/✕ comparison glyphs and small UI affordances.

### 8.2 What we avoid

- ❌ AI-generated photorealistic people.
- ❌ Abstract "neural network" / "circuit board" stock illustrations.
- ❌ Gradient orbs or glowing globes.
- ❌ Emoji as functional icons (only allowed in body prose).

---

## 9. Performance budget

| Metric                       | Target          |
|------------------------------|-----------------|
| Lighthouse Performance       | ≥ 90            |
| Lighthouse SEO               | 100             |
| Lighthouse Accessibility     | ≥ 95            |
| Largest Contentful Paint     | < 2.0s          |
| Cumulative Layout Shift      | < 0.05          |
| Initial JS bundle            | < 200KB gzipped |

The pre-pivot ≥ 95 Performance target is relaxed to ≥ 90 because the new
imagery-liberal direction makes hitting 95 across navy-hero pages with
hero photos honestly difficult. The trade is intentional.

---

## 10. Accessibility floor

- WCAG 2.2 AA minimum. AAA where reasonable.
- All interactive elements keyboard-navigable with visible focus rings
  (`outline: 2px solid var(--fj-jet-blue); outline-offset: 2px`).
- Body text on navy meets 4.5:1 (AA) — use `--fj-charcoal-text` or
  white at minimum 80% opacity.
- Heading hierarchy sequential (no skipping H1 → H3).
- All images have alt text. Decorative images have `alt=""` and
  `aria-hidden="true"`.
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
- **`llms.txt` file at site root** declaring permitted crawl behaviour.

---

## 12. The pivot acceptance test

Open any FactoryJet page in incognito at 1280px and at 375px. Read for
five seconds.

The reader should think: **"This is the agency that's going to actually
ship my website in 60 days at a price they'll quote me on the first call."**

Not: "This is a fast web design agency."
Not: "This is a calm editorial publication."
Not: "This was generated by Claude Code in 30 minutes."

If a page doesn't pass that test, revise.

---

**Version:** 2.0 (post M1.d.1 pivot)
**Last updated:** May 5, 2026
**Next review:** Post-M1.d.6 (after CountryPageHero ships)
**Maintained by:** Bhavesh Bhatt, Founder & CEO
