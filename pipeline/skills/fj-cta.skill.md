# Skill: fj-cta
# Use when: generating FinalCTA section, inline CTAs, or any conversion-focused block

## FinalCTA component

The FinalCTA is the page-closing conversion block — placed just before the footer.
Default: light variant (cream surface). Optional: dark variant.
Glassmorphism is ALLOWED on FinalCTA only (white/10 + backdrop-blur + white/20 border) — nowhere else.

## Light variant (default)

Background: `#FAFAF7` (cream) or `#F8F8F5` (neutral-50)
Headline: Clash Display 700, 40–56px, color `#1A1A1A` (fj-ink)
Sub-copy: Inter 400, 20–22px, color `#4A4A45` (fj-neutral-600)
Primary CTA: solid `#0052CC` (fj-jet-blue), white text
Secondary CTA: outlined ink border, transparent bg

## Dark variant (optional)

Background: `#0A0F1C` (fj-navy)
Headline: Clash Display 700, white
Sub-copy: Inter 400, `#F5F5F2` (fj-charcoal-text)
Primary CTA: solid `#0052CC`, white text (or white bg with jet-blue text if reversed)
Optional glassmorphism: `background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2)`

## CTA copy patterns (SMB-direct, conversion-focused)

Primary CTAs — use one of these or close variants:
- "Get a free quote" (most direct, highest conversion)
- "Book a 30-min call" (good for considered purchase)
- "See pricing" (transparent, trust-building)
- "Start your project" (action-oriented)
- "Get your website in 7 days" (USP-forward)

Do NOT use:
- ❌ "Learn more" (too vague, no commitment signal)
- ❌ "Click here" (generic)
- ❌ "Get started today" (cliché in AI-startup space)
- ❌ "Transform your business" (buzzword)
- ❌ "Leverage our expertise" (banned word list)

## FinalCTA headline formulas

City pages: "Ready to get your {City} business online? We deliver in 7 days."
Service pages: "Start your {service} project. Pricing on the first call."
General: "500+ businesses shipped. Yours is next."

## Trust reinforcement under CTA

Add 2–3 trust signals below the primary CTA button:
- "No contracts. Cancel anytime."
- "Pricing on the first call — no surprises."
- "7-day delivery guarantee or we work for free."
- "Serving {City} businesses since {year}."

Format: Inter 500, 13px, `#8A8A82`, dot-separated (same as hero trust strip).

## Inline CTAs (within sections)

For inline text CTAs (within body copy, service descriptions): Inter 600, fj-jet-blue, underline on hover.
For standalone mid-section CTA buttons: same styles as hero primary/secondary but slightly smaller — px-5 py-3.

## Padding

FinalCTA section: py-24 md:py-32 inside a max-w-[1120px] container.
Text block capped at max-w-[640px], centred within section.
