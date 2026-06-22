# FactoryJet Modern Agency Design Spec — v1

**Status:** Draft for Bhavesh's review. No code starts until this is locked.
**Date:** 2 May 2026.
**Author:** Claude (web chat) for Bhavesh.
**Replaces:** `option_c_build_spec_v1.md` (1 May 2026, Apple/Anthropic restraint lane — abandoned 2 May after full-page M1 gallery review showed restraint became under-design).
**Repo target:** `github.com/factoryjet-tech/Factoryjet-Website-v1`, default branch `NextJS`.
**Scope:** Customer-facing factoryjet.com pages — programmatic landing (UK/US/AU/CA/UAE × service), homepage, comparison, services, blog. Marketing Platform internal `/app/*` UI keeps its dark theme — out of scope.

---

## 1. Why this spec exists

The May 1 Option C spec locked an "Apple/Anthropic restraint lane" — white background, typography-driven, banned all motion, banned all imagery except illustrated industries. M1 of that spec shipped 11 React components plus a gallery preview. Full-page review on May 2 showed the result was technically clean but visually under-designed. The restraint discipline was correct as an anti-slop defense; what got lost was the imagery and motion that modern landing pages use to build trust and earn the click.

This spec corrects course. It keeps the anti-slop guardrails (the May 1 bans on gradient text, particles, infinite anything, and the like still hold) but removes the over-correction. Imagery becomes a first-class slot on every section. Disciplined motion comes back. Real proof artifacts (client logos, named testimonials, case studies) are treated as canonical data, not decoration.

The references that informed this spec, scouted on May 2:
- **Superside** — closest analog to FactoryJet's audience. Hero asset mosaic of 14+ thumbnails. Mixed serif/sans typography with italic emphasis. Real client work as imagery.
- **Paper Tiger** — small premium agency lane. Vimeo background video on hero. Halftone illustration as section anchors. Aggressive scroll choreography that stays the right side of slop because typography gives it room.
- **Neurons Lab** — enterprise AI consultancy lane. Case study cards with named real clients (Visa, Global Asset Management Firm, Global Insurance Company). Industry-tag + outcome description per card.
- **EnterBridge** — B2B services pattern. Stakes-vs-rewards comparison block. Stock photography of buyer personas in context (call center worker, delivery driver, warehouse worker). 15 named enterprise client logos.
- **Coherent Solutions** — enterprise IT consultancy. Case study tiles with real client logos + one-sentence outcome. Testimonials with named people, companies, and quantified metrics.

The single biggest insight from the scout: **on every reference, the strongest trust signal is real proof**. Real logos, named clients, photographed testimonials with metrics, case studies with before/after numbers. Decorative imagery is always secondary. The May 1 spec's "AI-generated illustration on Industries section only" approach was the inverse of how the references actually build trust. This spec corrects that.

A second insight: **imagery must rotate by section job**. Hero gets product mockups or asset mosaics. Stakes gets icons-on-color-blocks. Services get buyer-persona photography. Industries get illustration. Case studies get logos + outcomes. Testimonials get headshots + names. The May 1 spec used one imagery type (text-only typography) across nine sections, which is why scrolling the gallery felt monotonous.

A third insight: **motion is editorial when it supports hierarchy and decorative when it doesn't**. Paper Tiger's scroll choreography works because every motion reveals a hierarchy moment. Coherent Solutions' animated number counters fail because the animation distracts from the stat itself. Banning all motion was a defense against the second; this spec brings back motion in the first form only.

---

## 2. Design lane: "Modern Agency"

The new lane sits between two extremes that don't fit FactoryJet:

- **Restraint-forward** (Apple, Anthropic, the May 1 lock) — too sparse, doesn't earn trust on a programmatic SEO page where the visitor has zero prior context about the agency.
- **Brand-forward** (Stripe, Linear) — wrong for an agency selling services to SMBs; works for product SaaS where the brand color *is* the product.

The "Modern Agency" lane is what Superside, Paper Tiger, Neurons Lab, EnterBridge, and Coherent Solutions all sit in, despite their different visual languages. The shared traits:

- **White background dominant**, with break sections in off-white (`bg-soft`) or warm cream (`bg-warm`) for editorial rhythm. Rare full-bleed brand-color sections (Final CTA only).
- **Typography is mixed sans/serif** — Inter for body, Source Serif 4 for display H1s and editorial moments (pull quotes, hero headlines). One word italicized in serif inside an otherwise sans headline is a pattern Superside uses repeatedly and it's adoptable.
- **Imagery is per-section-appropriate** — never the same imagery type twice in a row.
- **Motion is editorial** — scroll-triggered fade-up on section entry, stagger reveal on grids, hover-lift on cards, oblique tilts on mockups. Always supports hierarchy. Never decorative for its own sake.
- **Real proof is the primary trust signal** — logos, testimonials, case studies, photographed customers. Decorative imagery (illustration, stock photography of context) is secondary.
- **Brand color (Jet Blue `#0052CC`) is reserved** for primary CTAs, FactoryJet column highlight in comparison matrix, "most popular" tier accent, in-card link arrows, and the full-bleed Final CTA section. Estimated 8-12 instances per page, never as a field color across whole sections except Final CTA.

What's banned (carrying over from May 1, with one addition):
- Gradient text (every form)
- Rainbow gradients
- Particle effects, mouse-follow effects
- Infinite anything (marquees that loop, animations that don't end, typewriters)
- Spinning counters / animated number counters (Coherent Solutions' pattern — distracts from the stat)
- Hero carousels (Coherent Solutions' pattern — proven to hurt conversion)
- Services grid with no descriptions (Coherent Solutions' pattern — makes visitor work too hard)
- Generic stock photography that's contextually wrong ("guy in suit eating salad")
- Logos arranged in a sad single sparse row
- More than one font family per page beyond the locked Inter + Source Serif 4 pair
- More than 5 signature visual moments per page
- Animations longer than 600ms (hero entry only) or 300ms (everything else)
- Icon fonts (use Lucide React inline SVG only)
- Client-side rendering for primary content (server components only — AEO/SEO requirement holds)

---

## 3. Imagery hierarchy (locked)

Best-to-worst for trust building, in order:

1. **Real client artifacts** — logos with display permission, photographed testimonials with named people + roles + companies + quantified outcomes, case studies with before/after metrics. **This is the default for every section that can carry one.** Path A is locked: trust artifacts are real, not invented.

2. **Fictional-but-credible product mockups** in the Hartwell pattern — fictional London Mayfair financial advisory site, etc. Used when the section is about demonstrating capability rather than proving it (hero on city × service pages, service explanation showing a deliverable artifact). Each service variant gets its own mockup template. Each city × service combination can vary the fictional business name to feel locally relevant.

3. **Stock photography of buyer personas in context** — Pexels / Unsplash. Used for industry sections (a real photo of a London restaurant manager with a tablet > AI illustration of an abstract restaurant), about-us moments, atmospheric breathing room. Photo selection rule: must show the *buyer persona doing the actual job the deliverable supports*. Generic business stock is banned.

4. **AI-generated editorial illustration** — Runware (default), Kie (alternate), ChatGPT Image 2 (3D-style). Used for moments where literal proof can't exist: abstract concepts ("AI-native", "automation"), industries when stock photography won't carry consistency across six tiles, atmospheric backgrounds for Final CTA section. Locked prompt template per category to maintain visual consistency across pages.

5. **Stock illustration / Lucide icons** — only as small reinforcement (a checkmark next to a feature, an arrow on an in-card link). Never as a section's primary visual.

The proportion across a typical city × service page should land at roughly: 40% real artifacts, 30% product mockups, 20% buyer-persona photography, 10% AI illustration. Icons everywhere as small reinforcement. This is the inverse of the May 1 spec, which was 100% typography + 1 mockup + (planned) 6 illustrations.

---

## 4. Motion budget (locked)

Disciplined micro-motion is back. Five permitted treatments, each with a specific job and a specific implementation:

1. **Scroll-triggered section fade-up.** When a section enters the viewport, it fades from `opacity-0 translate-y-4` to `opacity-100 translate-y-0` over 400ms with a 50ms stagger if multiple children are revealing. Triggered by IntersectionObserver at 20% visibility threshold. Implemented via Framer Motion's `whileInView` or a single shared `useReveal()` hook on a wrapper component. Server-rendered first paint shows the *finished* state; the animation only runs after hydration. Anyone with `prefers-reduced-motion` gets no animation, just the finished state.

2. **Grid stagger reveal.** When a grid (industries, case studies, services, logos) enters the viewport, children stagger in left-to-right top-to-bottom at 50ms intervals. Same fade-up motion per child. Only on grids of 4+ items.

3. **Card hover-lift.** Cards (industry tiles, case study cards, service cards) translate up 4px and gain a softer, larger shadow on `:hover`. 200ms ease-out. Cursor changes to pointer. Implemented in Tailwind: `hover:-translate-y-1 hover:shadow-lg transition-all duration-200`.

4. **Mockup oblique tilt on hover.** Browser mockups (Hartwell-style) rotate 1deg and scale 1.02 on hover. 300ms ease-out. Implemented: `hover:rotate-1 hover:scale-[1.02] transition-transform duration-300`. Ban: never apply to more than one element per section, and never to text or images (only mockup containers).

5. **Hero entry choreography.** On first paint after hydration, hero elements stagger in: eyebrow fades up at 0ms, headline at 150ms, body at 300ms, primary CTA at 450ms, secondary CTA at 500ms, mockup at 600ms. Total run: 1000ms with the last element finishing animation at 1200ms. Anyone with `prefers-reduced-motion` sees the finished state. Hero is the only place animations can run beyond 300ms total, capped at 1200ms.

What's banned in motion specifically (additions to Section 2 ban list):
- Auto-playing video that loops indefinitely (Paper Tiger does this — flirts with the line; we don't)
- Parallax scrolling at different speeds for different elements
- Scroll-driven scrubbing animations (text reveals one word at a time as you scroll)
- Mouse-position-following elements (Brainpool does this — banned)
- Marquee-style horizontal logo scrolling that never stops
- 3D rotation on text or imagery
- Anything that locks the scroll position to play out an animation

The Lighthouse Performance score must still be ≥90 with motion enabled. Motion runs on the GPU (transform + opacity only — never animate `width`, `height`, `top`, `left`, `box-shadow` directly). Total JS for motion library + reveal logic must stay under 15 KB gzipped.

---

## 5. Section playbook — 9 sections, 9 treatment recipes

Each section has a recipe: imagery type, motion treatment, layout pattern, slot schema, what trust artifact (if any) it surfaces. These replace the 12-treatment taxonomy from the May 1 spec.

### 5.1 Hero — `hero_v2_asset_mosaic`

**Job:** earn the next 5 seconds of attention. Communicate "FactoryJet builds high-quality websites" in one glance.

**Layout:** Asymmetric split, 7/12 left + 5/12 right on desktop, stacked on mobile. Left column = eyebrow + headline + lead + dual CTAs + trust strip. Right column = a *staggered mosaic of 4-6 product mockup thumbnails* showing fictional businesses across the agency's services — not just one Hartwell. Each thumbnail is a real BrowserMockup component sized down to ~280×210px, arranged in a layered grid with subtle rotation (-1deg, 0deg, +2deg, -1deg) to feel hand-arranged. Background: white with soft `bg-soft` corner gradient (CSS, not image — this is the only permitted CSS gradient on the page).

**Imagery:** 4-6 product mockups (extends the Hartwell pattern). Each fictional business tied to one of FactoryJet's services: web design (Hartwell financial advisory), e-commerce (a fictional London hospitality brand), AI websites (a fictional B2B SaaS), and so on. Mockup names vary by city (Hartwell becomes "Quayside & Co." in Liverpool, "Old Mill Capital" in Manchester) — feels locally relevant.

**Motion:** Hero entry choreography (the staggered fade-up from Section 4). On hover: each thumbnail can do the oblique tilt independently.

**Typography:** Eyebrow uppercase tracking-wider text-meta. Headline in Source Serif 4 (`font-display`) with one word italicized — pattern from Superside. 6-9 words. Lead in Inter `body-lg` text-slate, 30-40 words. Trust strip in `body-sm` text-meta with separators.

**Slot schema:**
```ts
{
  eyebrow: string;                    // e.g. "WEB DESIGN · LONDON"
  headline: string;                    // 6-9 words, with `*emphasis*` markers for italic word
  lead: string;                        // 30-40 word body paragraph
  trustItems: string[];               // 3-4 short proof statements, e.g. ["31-day delivery", "From £1,200", "You own the code"]
  primaryCta: { label, href };
  secondaryCta: { label, href };
  mockups: Array<{                    // 4-6 fictional businesses
    serviceVariant: string;          // 'web-design' | 'ai-websites' | 'ecommerce' | etc.
    businessName: string;             // varies by city
    businessTagline: string;
    mockSiteData: object;             // shape varies per serviceVariant
  }>;
  cityName: string;                   // for mockup name variation
}
```

**Trust artifact:** None directly — hero is positioning, not proof. Proof comes immediately after.

### 5.2 Logo Strip + Stat Strip — `proof_strip_logos_and_stats`

**Job:** instant credibility before the visitor scrolls past hero. Two-row pattern: real client logos above, hard stats below.

**Layout:** Full-width section, `bg-soft` background. Top row: 8-12 client logo lockups in a dense grid (3 rows × 4 cols on desktop, 2 cols on mobile). Logos are SVG, monochrome at rest (filter `grayscale opacity-60`), full color on hover. Bottom row: 4 stat columns separated by thin vertical lines. Each stat is `display-md` Source Serif 4 number + `body-sm` text-meta caption.

**Imagery:** Real client logos with display permission. This is the highest-trust visual on the page — no substitutions. Permission status tracked in `clients.json`.

**Motion:** Scroll-triggered section fade-up. Logos fade in with stagger when section enters viewport. No carousel, no horizontal scroll, no animation on the logos themselves at rest.

**Slot schema:**
```ts
{
  eyebrow?: string;                   // optional, e.g. "TRUSTED BY"
  headline?: string;                   // optional, e.g. "500+ businesses across the UK and beyond"
  clientLogos: Array<{
    name: string;
    logoSvgPath: string;             // relative to /public/clients/
    altText: string;
    displayPermission: 'granted' | 'pending';
  }>;                                  // length 8-12; only render entries with permission='granted'
  stats: Array<{
    value: string;                    // e.g. "500+"
    label: string;                    // e.g. "Projects shipped"
    sourceLabel?: string;            // optional citation
  }>;                                  // length exactly 4
}
```

**Trust artifact:** This entire section IS the trust artifact. It's the most important section on the page after hero, and it must contain real client logos. If `clientLogos.filter(l => l.displayPermission === 'granted').length < 6`, the section falls back to a stats-only treatment with a note in the build log — but the goal is always 8-12 logos.

### 5.3 City Context — `city_context_v2_editorial_with_inset_visual`

**Job:** demonstrate FactoryJet understands the local market. Establish that this is a city-specific page, not a template.

**Layout:** 12-col grid on desktop. 5/12 left = eyebrow + Source Serif 4 headline (display-md) + 2-3 paragraph lead. 7/12 right = either a poster-block stat treatment (Paper Tiger pattern: one big stat in halftone-style illustration with 2 supporting stats) OR three stat cards inline (current `CityContextStatStrip` treatment, kept as alternate). Stage 1 picks based on data quality — if ONS/Companies House data has 3 strong distinct numbers, use the 3-up; if data has 1 anchor stat with weaker supporting numbers, use the poster-block.

**Imagery:** Either a halftone-style illustrated poster anchored on the dominant stat (AI-generated via Runware with a locked prompt template per city), OR three stat cards with embedded source-link icons. No photography — this section is about local data, not local lifestyle.

**Motion:** Section fade-up. Stat numbers do NOT animate on entry (banned: spinning counters).

**Slot schema:**
```ts
{
  eyebrow: string;                    // e.g. "LONDON IN NUMBERS"
  headline: string;
  leadParagraphs: string[];           // 2-3 paragraphs
  treatment: 'poster_block' | 'three_cards';
  stats: Array<{
    value: string;
    label: string;
    sourceUrl: string;                // ONS, Companies House, etc — must be primary source
    sourceLabel: string;
  }>;                                  // length 3
  posterIllustrationPath?: string;   // only when treatment='poster_block'
}
```

**Trust artifact:** None directly — this is local data, sourced via `ons.gov.uk` / `census.gov` direct citations.

### 5.4 Stakes vs Rewards — `stakes_vs_rewards_split`

**Job:** EnterBridge's strongest move, adapted. Frame the worldview: keeping your current website costs you, rebuilding with FactoryJet rewards you. Visitor reads in 3 seconds and emotionally signs up.

**Layout:** 50/50 split section, full-width container. Left half: red-tinted (`bg-red-50/40` or `bg-rose-50` — keep subtle, never harsh) with X icons (Lucide `X` size-5 in `text-red-600`) on 3 stakes statements. Right half: green-tinted (`bg-emerald-50/40`) with Check icons (Lucide `Check` size-5 in `text-emerald-600`) on 3 rewards. Each side has a small headline ("Without FactoryJet" / "With FactoryJet") and 3 short statements (5-9 words each).

**Imagery:** Just icons. The color contrast carries the emotion.

**Motion:** Section fade-up. Stakes side fades in 100ms before rewards side (subtle staging — failure first, success after).

**Slot schema:**
```ts
{
  eyebrow: string;                    // e.g. "THE STAKES"
  stakesHeadline: string;             // e.g. "Without a fast, modern website"
  stakes: string[];                    // 3 short statements, 5-9 words each
  rewardsHeadline: string;             // e.g. "With FactoryJet"
  rewards: string[];                   // 3 short statements
}
```

**Trust artifact:** None directly — this is positioning. The proof has already been established in section 5.2 logos.

### 5.5 Service Explanation with Deliverable Mockup — `service_with_deliverable_mockup`

**Job:** show the visitor what they're going to get, not just describe it. Combines the editorial pull-quote pattern from May 1 (which was visually fine in isolation) with a real product UI mockup.

**Layout:** 12-col grid. 5/12 left sticky column on lg+: eyebrow + headline + sub-CTA. 7/12 right: 2 paragraph intro → product mockup → pull quote → 1 closing paragraph. Product mockup is a fictional CMS dashboard / Lighthouse score screenshot / Figma file thumbnail / analytics dashboard depending on the service. Hand-coded SVG or HTML, never an image — it can be styled with the brand.

**Imagery:** Product UI mockup (extends Hartwell pattern). One per service variant.

**Motion:** Section fade-up. Mockup gets the oblique tilt on hover.

**Slot schema:**
```ts
{
  eyebrow: string;
  headline: string;
  sidebarCta: { label, href };
  introParagraphs: string[];           // length 2
  pullquoteText: string;
  closingParagraph: string;
  deliverableType: 'cms_dashboard' | 'lighthouse_score' | 'figma_artifact' | 'analytics_dashboard' | 'github_handover';
  deliverableData: object;             // shape varies by type
}
```

**Trust artifact:** The mockup is the artifact. The pull-quote can be a real client quote if available (`testimonials.json` lookup) or remain editorial if not.

### 5.6 Why FactoryJet Comparison — `why_comparison_matrix_v2`

**Job:** Neurons Lab's case-study-card pattern + comparison matrix. Replace the M1 generic comparison with one that includes named-client outcomes alongside the matrix.

**Layout:** Two-stage section. Top stage: case study tile row — 3 real client cards with real logos, industry tag, one-sentence outcome with quantified metric, and a "Read the story" link. Bottom stage: comparison matrix (kept from M1, extended with column header naming a real comparison agency now that we have permission to name competitors). FactoryJet column highlighted with `border-l-4 border-jetBlue`.

**Imagery:** Real client logos in case study tiles + Lucide `ArrowRight` link icons.

**Motion:** Section fade-up. Case study tiles stagger reveal. Hover-lift on each tile.

**Slot schema:**
```ts
{
  eyebrow: string;
  headline: string;
  lead: string;
  caseStudyTiles: Array<{
    clientLogoPath: string;
    clientName: string;
    industryTag: string;
    outcomeStatement: string;          // one sentence with a metric
    storyHref: string;
  }>;                                  // length 3
  comparison: {
    competitorColumnHeaders: string[];  // 1-3 named competitors with public info
    rows: Array<{
      dimensionLabel: string;
      factoryjetOffering: string;
      competitorOfferings: string[];
    }>;                                  // 4-6 rows
  };
  advantageTiles?: Array<{               // optional, 3 tiles below the matrix
    title: string;
    body: string;
    lucideIconName: string;
  }>;
}
```

**Trust artifact:** Three named clients with real logos and quantified outcomes. Direct hit — this is the strongest section on the page after hero + logo strip.

### 5.7 Process — `process_v2_visual_timeline`

**Job:** show the engagement model is structured and short. Replace the M1 5-stacked-text-blocks with a horizontal visual timeline that reads in 8 seconds.

**Layout:** 5 step columns in a row on desktop (2-col on tablet, single on mobile). Each column: numbered illustrated icon (Lucide icon at size-8 in `text-jetBlue` inside a soft `bg-soft` rounded container), day-range tag in `text-mono-sm uppercase tracking-wider text-jetBlue`, step title in `text-title font-medium text-navy`, 1-sentence body in `body text-slate`. Connecting line between steps on desktop only.

**Imagery:** Lucide icons inside containers — illustrations matched to step semantics (Search for Discovery, PenTool for Design, Hammer for Build, Rocket for Launch, RefreshCw for Iterate). NO custom illustration here — Lucide is the right level of weight for process visualization.

**Motion:** Section fade-up. Steps stagger reveal. Connecting line draws in (single CSS transform, 600ms total) when the section enters the viewport — this is the one place a draw animation is permitted because the line is functional (showing flow), not decorative.

**Slot schema:**
```ts
{
  eyebrow: string;
  headline: string;
  lead: string;
  steps: Array<{
    numeral: string;                  // "01" through "05"
    dayRange: string;                  // e.g. "DAY 1-3"
    title: string;
    body: string;                      // one sentence
    lucideIconName: string;
  }>;                                  // length 5
}
```

**Trust artifact:** None directly — process. Trust comes from the day-ranges being credible (matches FactoryJet's actual delivery cadence).

### 5.8 Industries Served — `industries_v2_buyer_persona_grid`

**Job:** show FactoryJet builds for the specific business types in this city. Replace the M1 illustration grid with one that uses buyer-persona stock photography from Pexels — far more trust-building than abstract illustration.

**Layout:** 3×2 grid of 6 industry tiles (3 cols × 2 rows desktop, 2 cols tablet, 1 col mobile). Each tile: Pexels photo of buyer persona doing the job (a London restaurant manager with a tablet, a financial advisor at a desk, a property estate agent showing a flat, etc.) at 16:10 aspect ratio, rounded-lg, subtle dark overlay (`bg-gradient-to-t from-black/40 to-transparent` — this is the one permitted dark gradient on the page, used for text readability over photo). Industry name overlaid in `text-display-sm font-display text-white`. Below the photo: industry tag + 60-word description + in-card link with arrow.

**Imagery:** Real Pexels photography. Photo selection rule from EnterBridge: must show buyer persona doing the *actual job the deliverable supports*. Stock photo of "person in suit" without context is banned. Photo selection prompt template encoded in `pipeline/scripts-ts/src/step7/asset-selection.ts`.

**Motion:** Section fade-up. Tiles stagger reveal on entry. Hover-lift + subtle photo zoom on hover (`hover:scale-105` on inner image with `overflow-hidden` on container).

**Slot schema:**
```ts
{
  eyebrow: string;
  headline: string;
  lead: string;
  sectors: Array<{
    slug: string;
    name: string;                      // e.g. "Hospitality"
    description: string;                // ~60 words
    photoUrl: string;                   // Pexels CDN URL
    photoCredit: string;                // attribution per Pexels TOS
    photoAlt: string;
    linkText: string;
    linkHref: string;
  }>;                                  // length 6
}
```

**Trust artifact:** Real photography of real buyer personas. Every photo gets attribution per Pexels Free License terms (`<small>Photo by [photographer] on Pexels</small>` in tile footer or page footer).

### 5.9 Pricing — `pricing_3tier_v2`

**Job:** kept from M1 — no major changes. Three tier cards with transparent pricing. Middle tier highlighted with black ring + "Most Popular" badge (banned: Jet Blue ring, animated counters).

**Layout:** Same as M1 `PricingThreeTier` — 3 cards in a row. Minor refinement: each tier card gets a small "What's included" expandable list using `<details>` semantic HTML (no JS), and a small Lucide `ArrowRight` next to the CTA.

**Imagery:** None.

**Motion:** Section fade-up only. No animation on price numbers, no stagger between cards.

**Slot schema:** Same as M1 `PricingThreeTierProps`. Locked.

**Trust artifact:** Transparent pricing IS the trust artifact. EnterBridge and Coherent Solutions don't publish pricing; FactoryJet does. This is a deliberate differentiation move.

### 5.10 Testimonials — `testimonials_v2_named_with_metrics` *(new section, replaces nothing)*

**Job:** add a section that didn't exist in M1 but is universal across all 5 references. Real photographed testimonials with names, roles, companies, and quantified outcomes.

**Layout:** 3 testimonial cards in a row on desktop, single column mobile. Each card: 80×80 circular headshot, quote in `body-lg` Source Serif 4 italic (editorial weight), name in `body font-medium text-navy`, role + company in `body-sm text-meta`. Highlighted metric in the quote shown in `text-jetBlue font-semibold`.

**Imagery:** Real photographed headshots. If headshot not available, use initials in a circle with `bg-jetBlue text-white` (still trust-building if name + company is real, just visually weaker).

**Motion:** Section fade-up. Cards stagger reveal. Hover-lift on each card.

**Slot schema:**
```ts
{
  eyebrow: string;                    // e.g. "WHAT CLIENTS SAY"
  headline: string;
  testimonials: Array<{
    headshotPath: string;              // or empty string for initials fallback
    name: string;
    role: string;
    company: string;
    companyLogoPath?: string;          // optional
    quote: string;                      // 25-50 words, with `**metric**` markers for bold-blue emphasis
    permissionStatus: 'granted' | 'pending';
  }>;                                  // length exactly 3, only render entries with permission='granted'
}
```

**Trust artifact:** Three named photographed testimonials with metrics. Critical section — if this section ships with placeholder testimonials, the page loses credibility immediately. Pulled from `testimonials.json` canonical source.

### 5.11 FAQ — `faq_v2_static_editorial`

**Job:** kept from M1 with one refinement. Static HTML (no JS accordions) for AEO. Editorial single-column max-w-3xl.

**Layout:** Same as M1 `FAQEditorialColumn` — single column, generous spacing, Q in `font-medium text-headline text-navy`, A in `body text-slate max-w-prose`. Refinement: each Q gets a small `<sup>` linking to a permanent anchor (`#faq-1`, `#faq-2`) so AI search can deep-link.

**Imagery:** None.

**Motion:** Section fade-up only.

**Slot schema:** Same as M1 `FAQEditorialColumnProps` plus `anchorIds: string[]` for deep-linking.

**Trust artifact:** None directly — but each FAQ that includes a quantified answer ("31 days kickoff to launch", "From £1,200", "You own the GitHub repo") reinforces transparency.

### 5.12 Final CTA — `final_cta_v2_full_bleed_with_atmospheric`

**Job:** kept from M1 with one upgrade. Full-bleed Jet Blue solid section with the single permitted glassmorphism card. Add: subtle atmospheric AI-generated background imagery layered behind the solid color at very low opacity (8-12%).

**Layout:** Same as M1 `FinalCTAAnchor` — full-bleed `bg-jetBlue`, internal max-w-4xl glass card with `backdrop-blur-md border border-white/20 bg-white/10`. Refinement: behind the solid Jet Blue, an absolutely-positioned AI-generated atmospheric image (abstract architectural / network / flow visualization rendered via Runware or ChatGPT Image 2 with a locked prompt) at 10% opacity. Adds depth without breaking the brand-color discipline.

**Imagery:** AI-generated atmospheric background. One image, used across all pages (cached on Cloudflare CDN). Generated once per service variant.

**Motion:** Section fade-up. Card stays static — no animation on the glass card itself (banned: floating glass).

**Slot schema:** Same as M1 `FinalCTAAnchorProps` plus optional `atmosphericImagePath`.

**Trust artifact:** Final reassurance. If trust hasn't been built by section 5.10, the visitor isn't going to fill the form here either.

---

## 6. Section order on a page

Locked order, top to bottom:

1. Hero (5.1)
2. Logo strip + Stat strip (5.2) — **always immediately after hero**
3. City context (5.3)
4. Stakes vs Rewards (5.4)
5. Service explanation with deliverable (5.5)
6. Why FactoryJet comparison (5.6)
7. Process (5.7)
8. Industries (5.8)
9. Pricing (5.9)
10. Testimonials (5.10)
11. FAQ (5.11)
12. Final CTA (5.12)

12 sections (up from 9 in May 1 spec — added Logo strip and Testimonials as separate sections because both proved necessary in the scout). Total scroll length on desktop ~6-7 viewport heights. Average page ~2200-2800 words of body copy + slot fields.

---

## 7. Trust artifacts data architecture

Three new canonical JSON files, all in `pipeline/scripts-ts/config/trust/`:

### 7.1 `clients.json`

```ts
interface Client {
  slug: string;                        // url-safe id, e.g. "hartwell-co"
  name: string;
  industry: string;                    // canonical taxonomy
  logoSvgPath: string;                 // /public/clients/{slug}.svg
  websiteUrl: string;
  caseStudySlug?: string;              // links to case-studies.json
  displayPermission: 'granted' | 'pending' | 'declined';
  citiesServed: string[];              // for city-relevance filtering
  featuredOnHomepage: boolean;
}
```

Schema rule: every client used in a logo strip, comparison matrix, or testimonial must have `displayPermission === 'granted'`. Stage 5 (VALIDATE) hard-fails the build if any rendered client has `permission !== 'granted'`.

### 7.2 `testimonials.json`

```ts
interface Testimonial {
  slug: string;
  clientSlug: string;                   // FK to clients.json
  name: string;
  role: string;
  headshotPath: string;                 // /public/testimonials/{slug}.webp or "" for initials fallback
  quote: string;                        // markdown, 25-50 words, with **metric** markers for bold-blue
  outcomeMetric: string;                 // structured form of the metric, e.g. "47% increase in qualified leads"
  permissionStatus: 'granted' | 'pending' | 'declined';
  serviceVariants: string[];             // which service pages can surface this testimonial
}
```

Schema rule: every testimonial rendered must have `permissionStatus === 'granted'` AND `quote` must contain at least one `**metric**` markup (Stage 5 grep check).

### 7.3 `case-studies.json`

```ts
interface CaseStudy {
  slug: string;
  clientSlug: string;
  industry: string;
  oneLineOutcome: string;                // for case study tiles, e.g. "Rebuilt site drove 47% lift in qualified leads in Q1"
  challenge: string;                     // for full case study page (not in this spec — tracked separately)
  solution: string;
  before: { metric: string; value: string }[];
  after: { metric: string; value: string }[];
  primaryMetric: string;                 // the headline outcome for tile display
  servicesPerformed: string[];
  duration: string;                       // e.g. "31 days"
  permissionStatus: 'granted' | 'pending';
}
```

Schema rule: case study tiles in section 5.6 must reference `case-studies.json` entries with `permissionStatus === 'granted'` AND `primaryMetric` non-empty.

### 7.4 Data discipline

The three JSONs are the canonical source. The pipeline reads from them, never invents. If a section needs more entries than the JSONs contain (e.g. logo strip wants 12 logos but `clients.json` has 6 with permission), the section either falls back to a smaller treatment or the build emits a `TRUST_GAP` warning. Stage 5 VALIDATE counts all `TRUST_GAP` warnings and fails the build if total > 5 across the whole page.

This keeps the pipeline honest. We never silently render a placeholder where a real artifact should be.

---

## 8. Asset pipeline — model routing per imagery type

When a section needs imagery generation (only 5.3 poster-block illustration, 5.8 buyer-persona photography lookup, 5.12 atmospheric background), the pipeline routes to the right provider:

| Imagery type | Provider | Model | Cost per image | Cache strategy |
|---|---|---|---|---|
| Halftone poster illustration (5.3) | Runware | flux-1-schnell with locked editorial-illustration prompt template | ~$0.003 | Per-city + per-service, ~270 images total = ~$0.81 |
| Buyer persona stock photo (5.8) | Pexels API (search) | n/a — search for existing photos | $0 (free tier) | Per-industry × per-city lookup; cache photo URL + attribution in `industries.json` |
| AI editorial illustration (alternative for 5.8 if Pexels search fails) | Kie | claude-haiku-image-1 (cheaper, faster than Runware for editorial illustration) | ~$0.001 | Per-industry × per-city, ~270 × 6 = 1620 images = ~$1.62 |
| Atmospheric background (5.12) | ChatGPT Image 2 (3D render) | gpt-image-2 | ~$0.04 | Single image per service variant, cached on CDN, ~6 total = ~$0.24 |
| Product UI mockups (5.1, 5.5) | Hand-coded HTML/SVG via Stitch + DESIGN.md | n/a | $0 | Per-service-variant component, no per-page cost |
| Headshots (5.10) | n/a — real testimonial headshots only | n/a | $0 | Stored in `/public/testimonials/{slug}.webp` |
| Client logos (5.2, 5.6) | n/a — real client SVGs only | n/a | $0 | Stored in `/public/clients/{slug}.svg` |

Total imagery cost per page: ~$0.01-0.02 (mostly Runware halftone + cached atmospheric). Total imagery cost across 270 ProgSEO pages: ~$5. Negligible.

Fallback chain: Runware → Kie → ChatGPT Image 2 → manual placeholder with `TRUST_GAP` warning.

---

## 9. Pipeline integration — where this fits in the 5-stage architecture

The May 1 Option C 5-stage pipeline (PLAN → COPY → ASSETS → RENDER → VALIDATE) stays. The treatments and data sources change.

**Stage 1 — PLAN.** Sonnet 4.6 with `tool_use` + forced `tool_choice`. Input: city.json, service.json, brand_profile.json, trust_artifacts (clients/testimonials/case-studies merged). Output: page_plan.json picking treatments per section from this spec's 12-treatment v2 vocabulary. Schema enforces: hero is always `hero_v2_asset_mosaic`, logo strip is always `proof_strip_logos_and_stats`, etc. — most sections have only one treatment in v2, so PLAN's job is mainly populating slot data not picking layout.

**Stage 2 — COPY.** Sonnet 4.6 with `tool_use`. Per-slot generation. Each slot has a max-token budget and a strict schema. Slot generation is deterministic given the input — the same city + service should produce the same copy on a re-run.

**Stage 3 — ASSETS.** Routes per Section 8 above. Pulls real client artifacts from JSONs, looks up Pexels photos, generates Runware/Kie/ChatGPT illustrations as needed, hand-codes mockups.

**Stage 4 — RENDER.** Treatment registry maps slug → React component. Each section component is a server component (still). Mockup components render server-side, no JS needed for the chrome. Motion components are client components (`'use client'`) but only the motion wrapper, not the content — content stays server-rendered for AEO.

**Stage 5 — VALIDATE.** Deterministic checks expanded:
- All banned patterns from Section 2 (grep-based: gradient text, particles, infinite, marquee, etc.)
- Trust artifact gates: every rendered logo/testimonial/case study has `permission === 'granted'`
- Trust gap counter ≤ 5 per page
- Lighthouse Performance ≥ 90, SEO = 100, Accessibility ≥ 95
- WCAG AA contrast on every text-on-color combination
- Motion budget: all animations transform/opacity only, no layout-triggering properties
- File size budgets: JS ≤ 100 KB gzipped per route, total page weight ≤ 1.5 MB

If validation fails, page is moved to `quarantine/` directory and not deployed. Build emits a structured failure report.

---

## 10. M1 redesign plan — what to do with the existing components

PR #33 shipped 11 React components + a gallery. They're not wasted — they're the foundation. Migration plan:

| Existing component | Status in v2 | Action |
|---|---|---|
| `<HeroSection>` (PR #32) | Extends to `hero_v2_asset_mosaic` | M1.5 — extend props to support `mockups: Mockup[]` array, add hero entry choreography motion wrapper |
| `<BrowserMockup>` (PR #32) | Reused as-is | M1.5 — add hover oblique tilt utility class |
| `<HartwellMockSite>` (PR #32) | Becomes one of N service variant mock sites | M1.5 — extract pattern, add 3-5 more variants (e-commerce, AI websites, etc.) |
| `<CityContextStatStrip>` (M1) | Becomes the `three_cards` treatment of section 5.3 | Keep as-is |
| `<CityContextProseInline>` (M1) | DEPRECATED in v2 — replaced by `poster_block` treatment in 5.3 | Delete in M1.5 cleanup |
| `<ServiceEditorialPullquote>` (M1) | Extends to `service_with_deliverable_mockup` (5.5) | M1.5 — replace inline SVG diagram with full deliverable mockup component |
| `<ServiceStepsHorizontal>` (M1) | DEPRECATED — process gets a single visual treatment in v2 | Delete in M1.5 cleanup |
| `<WhyComparisonMatrix>` (M1) | Extends to `why_comparison_matrix_v2` (5.6) | M1.5 — add case study tile row above the matrix |
| `<WhyCompactAdvantageList>` (M1) | DEPRECATED in v2 — comparison is universal now (we have permission to name competitors) | Delete in M1.5 cleanup |
| `<ProcessVerticalTimeline>` (M1) | DEPRECATED — replaced by horizontal visual timeline in 5.7 | Delete, build new `<ProcessVisualTimeline>` |
| `<IndustriesGridIllustrated>` (M1) | Extends to `industries_v2_buyer_persona_grid` (5.8) | M1.5 — replace `illustrationPath` slot with `photoUrl`, add overlay treatment |
| `<PricingThreeTier>` (M1) | Reused as-is | Keep |
| `<FAQEditorialColumn>` (M1) | Reused with anchor refinement | M1.5 — add `anchorIds` slot |
| `<FinalCTAAnchor>` (M1) | Extends with atmospheric background | M1.5 — add `atmosphericImagePath` slot |

New components for v2 (build in M1.5):
- `<ProofStripLogosAndStats>` (5.2) — never existed
- `<StakesVsRewardsSplit>` (5.4) — never existed
- `<ServiceDeliverableMockup>` (5.5) — extends old ServiceEditorial with new mockup component
- `<ProcessVisualTimeline>` (5.7) — new, replaces vertical timeline
- `<TestimonialsNamedWithMetrics>` (5.10) — never existed

Total new components: 5. Total existing components extended: 6. Total deprecated: 4. Net component count increase: +1 vs current 11 = 12 total.

---

## 11. Build plan — milestones

### M1.5 — Component library v2 (the redesign pass)

**Branch:** `feat/pipeline-m1.5-components-v2`. Single PR.

**Scope:**
- Build 5 new components per Section 10
- Extend 6 existing components per Section 10
- Delete 4 deprecated components
- Update gallery page (`/dev/component-gallery`) to render the v2 layout
- Add `clients.json`, `testimonials.json`, `case-studies.json` schema files (TypeScript types only — Bhavesh populates with real data in parallel)
- Add motion wrapper utility (`<RevealOnScroll>` server-rendered initial state, `'use client'` for the IntersectionObserver hook only)
- Add `prefers-reduced-motion` handling globally
- Verify Lighthouse scores stay ≥ 90 with motion enabled

**Verification:**
- `pnpm tsc --noEmit` clean
- `pnpm build` clean
- Visual review on Cloudflare preview at `/dev/component-gallery`
- Lighthouse Performance ≥ 90 on the gallery page

**Halt gate before M2:** Bhavesh approves the v2 gallery. Side-by-side comparison with the May 2 screenshots. If any treatment looks wrong, fix in M1.5, not M2.

**Estimated duration:** 1-2 days of Claude Code time, depending on how much real artifact data is available for the gallery.

### M2 — Stage 1 + Stage 4 + mock data on real artifacts (replaces the abandoned M2)

Same shape as the May 1 M2 plan but against the v2 component library. Generate London + one more city (Manchester) through PLAN + RENDER. Deploy both to Cloudflare preview.

**The big halt gate stays:** if M2 output isn't structurally production-quality side-by-side with the references, abort the pipeline and hand-code instead — M1.5 component library survives as a usable asset.

### M3 — Stage 2 + Stage 3 (real LLM copy, real assets)

Sonnet 4.6 generates real copy per slot. Runware/Kie generate real imagery. Build full London page through the pipeline.

### M4 — Stage 5 + ship

Validate gates active. Replace current /uk/london/web-design page with pipeline output. Deploy to production.

### Realistic timeline

- M1.5: 2 days (today + tomorrow if we move quickly)
- M2: 2-3 days
- M3: 2-3 days
- M4: 1-2 days

**End-to-end: ~10 days from spec lock to first production page.** Assumes we don't hit a major M2 abort. With trust artifacts (`clients.json` populated), the redesign genuinely earns the trust we need to convert.

---

## 12. Open implementation questions

These are decisions Claude Code will need before/during M1.5. Bhavesh can answer any time before that PR starts:

1. **Motion library.** Framer Motion (~30 KB gzipped) vs custom IntersectionObserver wrapper (~2 KB). Recommendation: custom wrapper — Framer is overkill for what we need and pushes us over the 100 KB JS budget. Decide before M1.5.

2. **Pexels API integration.** API key needed. Free tier: unlimited downloads, attribution required. Sign up at https://www.pexels.com/api/. Decide who owns the key (FactoryJet env file) and add to `.env.example`.

3. **Real client data location.** You mentioned having permission for all artifacts. Where does the data live currently? (Notion DB / Drive folder / spreadsheet / nowhere yet?) Spec assumes it'll be migrated into the three JSONs in `pipeline/scripts-ts/config/trust/`.

4. **Headshot photography.** If headshots aren't already produced, Path A says we wait — but a `pending` state in `testimonials.json` with the initials fallback works as a soft launch state. Decide whether soft launch is acceptable or whether we wait for headshots.

5. **Competitor names in comparison matrix (5.6).** "Local London agency" generic was the May 1 fallback. Do you want to name 1-3 specific London digital agencies for public comparison? Names + their public pricing would be ideal. Defamation risk is low if claims are accurate and sourced — but worth getting your call on which agencies to name.

6. **Atmospheric background image (5.12).** ChatGPT Image 2 generation needs a prompt. Suggest: "abstract architectural network of fine lines and nodes, monochromatic deep navy on Jet Blue background, editorial flow visualization, no text, no faces, soft layered depth, 16:9". Decide whether to lock this prompt or iterate.

---

## 13. What this spec is NOT

- Not a homepage redesign — focused on programmatic landing pages first. Homepage gets its own treatment in a follow-up spec, but most components are reusable.
- Not a brand identity refresh — Inter + Source Serif 4 + Jet Blue stay locked.
- Not a content strategy overhaul — copy patterns inherit from May 1 spec (sentence-case headlines, italic word for emphasis, sub-50-word leads).
- Not a wholesale rebuild — most M1 components extend, only 4 get deleted.
- Not Marketing Platform internal UI — that stays dark theme.

---

## 14. Approval requested

Once Bhavesh reviews this spec, three possible responses:

1. **Lock the spec, start M1.5.** Default path.
2. **Lock with revisions.** Bhavesh sends specific changes inline; spec gets a v1.1 patch.
3. **Reject.** We rethink (unlikely given we just did the scout, but it's a real option).

After lock, this file gets committed to the repo at `factoryjet_modern_agency_design_spec_v1.md` so it survives chat boundaries — fixing the gap that lost the May 1 spec.

— End of spec —
