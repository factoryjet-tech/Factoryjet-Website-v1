# Skill: fj-dark-section
# Use when: generating a StrategicDarkSection mid-page rhythm break or SiteFooter

## The two dark slots rule

A page may have a MAXIMUM of 2 dark sections:
1. One `StrategicDarkSection` (mid-page rhythm break) — navy or charcoal
2. One `SiteFooter` — always fj-navy-deep

Hero is NEVER dark. If any generated page has a dark hero, that is a violation and must be reverted.

## StrategicDarkSection tokens

| Token | Hex | Use |
|-------|-----|-----|
| `--fj-navy` | `#0A0F1C` | Primary dark section background (preferred) |
| `--fj-charcoal` | `#0F0F12` | Alternative dark section background |
| `--fj-charcoal-text` | `#F5F5F2` | Body text on dark surfaces |
| `--fj-charcoal-muted` | `#8A8A8F` | Muted/secondary text on dark surfaces |
| `--fj-jet-blue-on-dark` | `#4A8FFF` | Eyebrows + accent links on dark (contrast-safe) |

Pick ONE dark background per page and stay consistent (don't mix navy and charcoal).

## Typography inside dark sections

- Eyebrow: Geist Mono, 13px, 500, 0.12em tracking, ALL CAPS, color `#4A8FFF` (fj-jet-blue-on-dark)
- H2: Clash Display 700, 40–56px desktop / 32–40px mobile, color white or `#F5F5F2`
- Body: Inter 400, 17–18px, color `#F5F5F2` (fj-charcoal-text)
- Muted: Inter 400, `#8A8A8F` (fj-charcoal-muted)

## Accessibility requirement

Body text on dark surface MUST meet WCAG 2.2 AA 4.5:1 minimum.
`#F5F5F2` on `#0A0F1C` = passes. `#8A8A8F` on `#0A0F1C` = use for supporting text only, not primary content.

## What belongs in a StrategicDarkSection

Good candidates: social proof quote wall, "Why FactoryJet" differentiator block, technology stack strip,
client logo bar on dark, a bold single-stat callout, a comparison summary.

## What does NOT belong in a StrategicDarkSection

- ❌ Pricing (keep on cream — pricing needs trust, not drama)
- ❌ Contact forms
- ❌ The hero
- ❌ Glassmorphism (glass panels inside dark sections are banned — only FinalCTA gets this allowance)
- ❌ Neon glow effects or box-shadow colour halos

## SiteFooter (second dark slot)

Background: `#070B14` (fj-navy-deep). Text: white, opacity-80 for secondary links.
Multi-column links. Copyright Inter 13px neutral-400 equivalent.
