# Skill: fj-comparison
# Use when: generating ComparisonTable or any FactoryJet-vs-local-agency comparison

## ComparisonTable layout

Background: cream (`#FAFAF7`). Container: max-w-[1320px] (wide).
Sticky column headers on mobile.
Three columns: Local {city} Agency | FactoryJet | Freelancer (or 2-column variant: Local Agency | FactoryJet)

## FactoryJet column highlight

Background: `#E6F0FF` (fj-jet-blue-tint) on the FactoryJet column cells.
Column header: Inter 600, Jet Blue `#0052CC`, optionally small "RECOMMENDED" badge in Geist Mono.

## Row content

| Row | Local Agency | FactoryJet | Freelancer |
|-----|-------------|------------|------------|
| Delivery time | 8–16 weeks | **7 days** | 4–12 weeks |
| Pricing | £5,000–£25,000+ | **From £499** | £1,500–£8,000 |
| AI-native | ✗ | **✓** | ◐ |
| Ongoing support | ◐ | **✓** | ✗ |
| SEO built-in | ◐ | **✓** | ✗ |

Adapt pricing to locale: GBP for UK, USD for US, AED for UAE. Use `locale.currencySymbol`.
Use the locale's `agencyArchetypeLabel` for the "Local Agency" column header.

## Glyphs

- ✓ (check) = included / available — color `#10B981` (fj-jet-green)
- ✗ (cross) = not included — color `#8A8A82` (fj-neutral-400)
- ◐ (half) = partial / varies — color `#8A8A82`

Use inline SVG icons, not emoji, for ✓ and ✗ in production.

## Typography

Column headers: Inter 600, 15px, `#1A1A1A`
Row labels: Inter 500, 15px, `#1A1A1A`
Cell values: Inter 400, 15px, `#4A4A45` (muted) or `#0052CC` bold for FactoryJet's winning entries
Section eyebrow: Geist Mono 13px, Jet Blue, ALL CAPS — e.g. "HOW WE COMPARE"
Section H2: Clash Display 700, 40–56px

## Forbidden

- ❌ Making up pricing that isn't defensible (use ranges, not exact competitor prices)
- ❌ Dark background for the comparison section
- ❌ Glassmorphism on table cells
- ❌ Animations on cell content
