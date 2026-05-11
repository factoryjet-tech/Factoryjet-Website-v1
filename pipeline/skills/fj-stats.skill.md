# Skill: fj-stats
# Use when: generating BigThreeTrustBlock, BoringStatsRow, or any stat/metric display

## BigThreeTrustBlock — the primary stat component

Three-card row on `#F8F8F5` (neutral-50) or cream background. Cards use `#EFEFEA` (neutral-100) BG.
No glassmorphism. No glow. No count-up animation. Numbers are static.

### Stat numeral

- Font: Clash Display 700
- Size: 80–96px desktop / 56–64px mobile, letter-spacing -0.04em
- Color: `#0052CC` (fj-jet-blue) or `#1A1A1A` (fj-ink) — one consistent choice per page

### Stat label (below numeral)

- Font: Inter 400, 17–18px, color `#4A4A45` (fj-neutral-600)
- Keep short: "businesses served" / "days to delivery" / "years experience"
- No parenthetical asides (retired brand pattern)

### Stat source (optional caption)

- Font: Inter 500, 13px, color `#8A8A82` (fj-neutral-400), letter-spacing 0.005em
- Example: "Source: Companies House, 2024"

## The FactoryJet three core stats

Always available for city pages and service pages:
- **500+** businesses served
- **7 days** average delivery
- **25+** years combined expertise

Optionally add a city-specific stat when enriched data is available:
- "{city_business_count} businesses in {city}" (source: Companies House / Census Bureau)
- "{city_gdp} GDP region" (source: ONS / BEA)

## BoringStatsRow — inline variant

Smaller stats in a horizontal row: 3–4 stats side by side with hairline dividers.
Font: Clash Display 700 for numeral (40–48px), Inter for label (15px).
Use on hero or just-below-hero when BigThreeTrustBlock is not the right weight.

## Forbidden in stat displays

- ❌ Count-up-on-scroll animation (numbers are static, always)
- ❌ Glassmorphism cards
- ❌ Gradient fills on numerals
- ❌ Mouse-tracking spotlight on stat cards
- ❌ Percentages without a source (fabricating conversion rates, ROI claims, etc.)
- ❌ Fraunces for stat numerals (retired)
