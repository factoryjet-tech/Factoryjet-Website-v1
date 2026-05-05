# /src/components/v2/

This directory holds FactoryJet Design System v2.0 components.

**Read first:**
- `factoryjet.DESIGN.md` (canonical design system — rewritten May 5, 2026
  for the aesthetic pivot. The cream-Fraunces canon is gone; the live
  `factoryjet.com/uk` is now the visual reference.)
- `CLAUDE.md` (project anchor)

**New design language (post M1.d.1 pivot):**
- Display: **Clash Display 700** (Fontshare) — replaces Fraunces.
- Body: **Inter** (next/font) — replaces Geist Sans as v2 default.
- Mono: **Geist Mono** — kept.
- Surface: **navy `#0A0F1C` hero default**, white / off-white sections
  alternating, fj-cream now an **accent only** (not the dominant BG).
- Accents: Jet Blue primary `#0052CC`, Jet Blue Bright `#3B82F6` for
  hero CTAs, Jet Orange `#FF6B35` reinstated as secondary accent.
- Glassmorphism allowed on stat cards over dark surfaces.
- Gradient text (`.fj-gradient-heading`) allowed on H2 conviction
  headings over navy.

**Dropped patterns:**
- Italic-emphasis on conviction words (the pre-pivot signature). Headlines
  are now confident statements, not editorial flourishes.
- Fraunces-italic boring-stats parentheticals. If a parenthetical earns
  its place, it lives in plain Inter italic at body-small.
- Asymmetric-grid mandate. Symmetric 3-up grids are now valid (pricing,
  case studies, industry cards).

**18 components currently in this directory** (no list changes in M1.d.1
— reskins land in M1.d.2 → M1.d.5):

```
BigThreeTrustBlock     CityContextSection     CaseStudyCard
BoringStatsRow         ComparisonTable        FAQ
FinalCTA               Heading                Hero
ImageBlock             IndustriesGrid         LogoBar
PricingTiers           ServiceExplanation     ServiceJourneyRow
SiteFooter             SiteHeader             StrategicDarkSection
```

**M1.d roadmap:**

| Patch  | Scope                                                                              |
|--------|------------------------------------------------------------------------------------|
| M1.d.1 | **Foundation reset (this PR).** Fonts, fj-* tokens, .fj-display class, DESIGN.md, README. No component implementation touched. |
| M1.d.2 | Reskin Heading + Hero + FinalCTA (the navy-hero spine).                            |
| M1.d.3 | Reskin BoringStatsRow + StrategicDarkSection + BigThreeTrustBlock + CityContextSection (the proof + dark-rhythm components). |
| M1.d.4 | Reskin FAQ + PricingTiers + IndustriesGrid + ComparisonTable + ServiceJourneyRow + ServiceExplanation (the content body). |
| M1.d.5 | Reskin SiteHeader + SiteFooter + ImageBlock + LogoBar + CaseStudyCard (chrome + imagery). |
| M1.d.6 | **Add CountryPageHero (component #19)** + locale-data scaffolding.                 |

**Locale-agnosticism (mandatory by M1.d.5 close):**

Every component in this directory must accept locale-driving props (or
read them from a route-level locale context). Hard-coded UK-specific
strings (£, "ONS", "London", "Sheffield") in component defaults are bugs
starting M1.d.2.

Per-locale data each component must accept:

- `currencyCode` (`GBP` / `USD` / `AUD` / `AED` / `INR` / `BRL` / `MXN`)
- `currencySymbol` (`£` / `$` / `A$` / `د.إ` / `₹` / `R$` / `MX$`)
- `countryAdjective` (`UK` / `British` / `US` / `American` / etc.)
- `officialStatsBodyName` (ONS / U.S. Census Bureau / ABS / IBGE / INEGI / etc.)
- `officialStatsBodyUrl`
- `languageCode` (`en-GB` / `en-US` / `en-AU` / `ar-AE` / `en-IN` / `pt-BR` / `es-MX`)
- `agencyCompetitorCatalog` (per-country list of agency archetypes)
- `regulatoryAuthority` (FCA/ICO/MHRA / SEC/FDA/FTC / etc.)

The full per-locale data table lives in `factoryjet.DESIGN.md` §5.3.

**Forbidden in v2 going forward:**

- Inter substitutes (Roboto, Poppins, DM Sans, Open Sans, Montserrat,
  Manrope, Plus Jakarta Sans).
- Fraunces in v2 components (still loaded for v1 page parity, not consumed here).
- Italic-emphasis `<em>` patterns inside `<Heading>`.
- Fraunces-italic parentheticals (the pre-pivot "boring stats" voice).
- Glow effects, neon-on-dark combinations, gradient orbs, particles.
- Emoji as functional icons (use inline SVG).

**Build sequence (frozen):**

- M0 — Foundation tokens (cream + Fraunces, now superseded).
- M1.a — Foundation components (BoringStatsRow, StrategicDarkSection,
  BigThreeTrustBlock).
- M1.b — Hero + FinalCTA + italic-emphasis em-tag system (italic system
  is being dropped post-pivot; component shells stay).
- M1.c.1 — CityContextSection, FAQ, PricingTiers, IndustriesGrid.
- M1.c.2 — ComparisonTable, ServiceJourneyRow, ServiceExplanation.
- M1.c.2.5 — SiteHeader, SiteFooter, ImageBlock, LogoBar, CaseStudyCard;
  BoringStatsRow alignment fix.
- **M1.d.1 — Aesthetic-pivot foundation reset (this PR).**
- M1.d.2 → M1.d.6 — Component reskins + CountryPageHero.

Components from `feat/pipeline-m1.5-components-v2` (PR #34) are NOT
migrated here — that branch was built against a superseded spec.

Components from PR #32 (`HeroSection`, `BrowserMockup`, `HartwellMockSite`)
live at `src/components/programmatic/` and are treated as legacy v1 —
they are not deleted and not modified by any v2 patch.
