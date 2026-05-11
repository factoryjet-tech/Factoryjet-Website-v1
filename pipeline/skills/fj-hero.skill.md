# Skill: fj-hero
# Use when: generating any Hero section for a FactoryJet page (city, service, country, home)

## Hero rules (hard)

The Hero component is ALWAYS light. `bg-[#FAFAF7]` (cream). Never dark, never navy, never charcoal.
No gradient backgrounds, no video, no particles, no glow.

## Structure

When a `rightSlot` (image/mockup) is provided → 7/5 asymmetric grid (lg:col-span-7 content, lg:col-span-5 asset).
When no `rightSlot` → single column, content capped at max-w-[820px].

## Eyebrow

- Font: Geist Mono, 13px, weight 500, letter-spacing 0.12em, ALL CAPS
- Color: `#0052CC` (fj-jet-blue) on light surfaces
- Renders above H1 with mt-0, H1 gets mt-4 lg:mt-5 when eyebrow present
- Max 4 words. Example: `WEB DESIGN · AUSTIN TX`

## Headline (H1)

- Font: Clash Display 700
- Size: 72–96px desktop / 44–56px mobile, letter-spacing -0.025em
- Color: `#1A1A1A` (fj-ink). Solid. NO gradient fill, NO italic-emphasis words.
- Max ~28ch for comfortable read line
- Must pass 5-second test: reader thinks "AI services company that ships in 60 days"

## Lead paragraph

- Font: Inter, 20–22px desktop / 18–19px mobile, weight 400, line-height 1.5
- Color: `#4A4A45` (fj-neutral-600)
- Max-width: 560px
- 1-2 sentences, concrete, no buzzwords. Include city name and service if city page.

## CTAs

Primary: solid `#0052CC` bg, white text, rounded-lg, px-6 py-3.5, Inter 600 14–15px. Hover: `#003D99`.
Secondary: `border border-[#D9D9D2]` transparent bg, `#1A1A1A` text. Hover: `border-[#1A1A1A]`.
CTA copy patterns: "Get a free quote", "See our work", "Book a 30-min call", "View pricing"

## Trust strip

Below CTAs: Inter 500 13px, `#8A8A82` (neutral-400), dot-separated.
Example items: "500+ businesses served" · "7-day delivery" · "Pricing on the first call"

## Padding

Desktop: pt-24 lg:pt-28 pb-24 md:pb-40
Container: max-w-[1120px] px-6 md:px-8

## City page headline formula

"{City} businesses deserve a website that actually converts."
"Web design for {City} businesses. Delivered in 7 days."
"Your {City} competitors already have a better website."

## Forbidden in Hero

- ❌ Dark background (any shade)
- ❌ Gradient text on headline
- ❌ Glow / shadow on CTA buttons beyond standard box-shadow
- ❌ Particles or floating shapes
- ❌ Video background
- ❌ Centred layout (hero is always left-aligned)
- ❌ Italic-emphasis words in headline
- ❌ Inter or Fraunces for the H1
