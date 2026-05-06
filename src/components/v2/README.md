# /src/components/v2/

This directory holds FactoryJet Design System v2.0 components.

**Read first:**
- `factoryjet.DESIGN.md` (canonical design system — typography pivot
  May 5, canon corrected May 6. The cream-light v2 surface, restraint
  references, and never-dark hero rule all carry forward; only the
  type stack changed.)
- `CLAUDE.md` (project anchor)

**Design language summary (post M1.d.1.1 canon correction):**
- Display: **Clash Display 700** (Fontshare) — replaces Fraunces.
  Fraunces remains loaded via `next/font` for v1-page parity but no v2
  component consumes it after M1.d.1.
- Body: **Inter** (next/font) — replaces Geist Sans as v2 default.
  Geist Sans remains loaded; v2 components do not consume it.
- Mono: **Geist Mono** — kept (for `.fj-eyebrow`).
- Surface: **`fj-cream` `#FAFAF7` is the dominant page BG (~70%)**, white /
  off-white (`fj-neutral-50`) sections alternating for rhythm. `fj-navy`
  / `fj-navy-deep` are reserved for `StrategicDarkSection` mid-page
  rhythm breaks and `SiteFooter` only — **NOT** for hero, **NOT** for
  default surface (max 2 dark sections per page).
- Hero: **NEVER dark.** Light cream BG default with optional `rightSlot`
  for imagery. Hard rule across all page types.
- Accents: Jet Blue `#0052CC` primary (~10%), Jet Orange `#FF6B35`
  secondary, small-area only (FLAGSHIP tag, JetSDR variant).
- **Glassmorphism BANNED** everywhere except optionally on `FinalCTA`
  (the single-instance allowance from the original v2 spec).
- **Gradient text on headings BANNED.** Solid ink with optional Jet
  Blue accent words.

**Visual / layout / restraint references** (preserved from original v2):
Stripe, Linear, Vercel, Mercury, Anthropic, Harvey AI.

**Typography-only reference**: live `factoryjet.com/uk` for the Clash
Display + Inter + Geist Mono font choices. Its dark hero, glassmorphism,
gradient H2, and full-bleed stock-photo backgrounds are NOT adopted.

**Dropped patterns:**
- Italic-emphasis on conviction words. Display-font compatibility —
  Clash Display does not render inline italic emphasis at the scale
  Fraunces did. Headlines are confident statements, not editorial
  flourishes.
- Fraunces-italic boring-stats parentheticals. Same display-font reason.
  Stats render in plain Inter body text below the numeral.

**Preserved from original v2:**
- Asymmetric grids (60/40, 7/5) for narrative sections + symmetric 3-up
  grids for repeating cards — both lanes valid.
- 80–96px major-section vertical rhythm (set in M1.c.2.5 review).
- Editorial restraint, single accent colour per moment.
- All M1.a/M1.b/M1.c.* component layouts.

**18 components currently in this directory** (no list changes in M1.d.1
— per-component reskin patches strip italic-emphasis className
applications + Fraunces-italic boring-stats applications in M1.d.2 →
M1.d.5):

```
BigThreeTrustBlock     CityContextSection     CaseStudyCard
BoringStatsRow         ComparisonTable        FAQ
FinalCTA               Heading                Hero
ImageBlock             IndustriesGrid         LogoBar
PricingTiers           ServiceExplanation     ServiceJourneyRow
SiteFooter             SiteHeader             StrategicDarkSection
```

**M1.d roadmap:**

| Patch    | Scope                                                                                                                |
|----------|----------------------------------------------------------------------------------------------------------------------|
| M1.d.1   | **Foundation reset (this PR).** Fonts, fj-* tokens, `.fj-display` class, DESIGN.md, README. No component implementation touched. |
| M1.d.1.1 | **Canon correction (this PR, additional commit).** DESIGN.md + README narrowed to typography-only pivot. Gradient-heading utility class deleted from `src/index.css`. |
| M1.d.2   | Strip italic-emphasis em rules from Heading + Hero + FinalCTA.                                                       |
| M1.d.3   | Strip Fraunces-italic boring-stats parentheticals from BoringStatsRow + StrategicDarkSection + BigThreeTrustBlock + CityContextSection. |
| M1.d.4   | Touch-up FAQ + PricingTiers + IndustriesGrid + ComparisonTable + ServiceJourneyRow + ServiceExplanation for type stack changes. |
| M1.d.5   | Touch-up SiteHeader + SiteFooter + ImageBlock + LogoBar + CaseStudyCard.                                             |
| M1.d.6   | **Add CountryPageHero (component #19)** + locale-data scaffolding.                                                   |

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
- Fraunces / Source Serif 4 / Geist Sans in v2 components (loaded for
  v1-page parity, not consumed here).
- Italic-emphasis `<em>` patterns inside `<Heading>`.
- Fraunces-italic parentheticals (the pre-pivot "boring stats" voice).
- Dark hero on any page type.
- Glassmorphism anywhere except optionally on `FinalCTA`.
- Gradient text on headings.
- Glow effects, neon-on-dark combinations, gradient orbs, particles.
- Stock-photo hero backgrounds.
- Emoji as functional icons (use inline SVG).

**Build sequence (frozen):**

- M0 — Foundation tokens (cream + Fraunces). Cream surface preserved
  through every later milestone; Fraunces superseded by Clash in M1.d.1.
- M1.a — Foundation components (BoringStatsRow, StrategicDarkSection,
  BigThreeTrustBlock).
- M1.b — Hero + FinalCTA + italic-emphasis em-tag system (italic system
  is being dropped via M1.d.2 per-component reskin; component shells stay).
- M1.c.1 — CityContextSection, FAQ, PricingTiers, IndustriesGrid.
- M1.c.2 — ComparisonTable, ServiceJourneyRow, ServiceExplanation.
- M1.c.2.5 — SiteHeader, SiteFooter, ImageBlock, LogoBar, CaseStudyCard;
  BoringStatsRow alignment fix.
- **M1.d.1 — Typography pivot foundation reset (this PR).**
- **M1.d.1.1 — Canon correction (this PR, additional commit).**
- M1.d.2 → M1.d.6 — Per-component patches + CountryPageHero.

Components from `feat/pipeline-m1.5-components-v2` (PR #34) are NOT
migrated here — that branch was built against a superseded spec.

Components from PR #32 (`HeroSection`, `BrowserMockup`, `HartwellMockSite`)
live at `src/components/programmatic/` and are treated as legacy v1 —
they are not deleted and not modified by any v2 patch.
