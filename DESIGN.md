# DESIGN.md — FactoryJet US design system

The visual contract for every US page. Conductor agents and impeccable must follow this. The goal is "designed, not templated": atmosphere and depth, one memorable moment per page, restraint everywhere else.

> Note: this replaces a May-2026 token file that used a blue primary ("Jet Blue #0052CC") and old web-design-agency positioning. The current brand is white + orange, commerce-positioned. The old version is in git history if needed.

## Brand tokens (locked)
- **Background:** white `#FFFFFF` site-wide. No dark "rooms" in body sections.
- **Single accent:** orange `#F05A28` (hover `#D8441A`, dark-orange text `#C94A1A`). Orange owns the numbers, the accents, the one signature visual. Do not introduce a second brand color (no blue, no purple, no navy rooms).
- **Tints/lines:** section tint `#FFF8F5`, hairline `#E7DED6`, body text `#46403B`, muted `#6E635A`, ink `#14110F`.
- **Fonts (never swap):** display = Plus Jakarta Sans (`--font-plus-jakarta`), body = Inter (`--font-inter`), mono = Geist Mono (`--font-geist-mono`). Mono is used for `//` eyebrow labels and small stat captions.
- **Gradient accent (sparingly):** `linear-gradient(115deg,#FF8A4C,#F05A28 55%,#C94A1A)` clipped to text, on ONE phrase in an H1.

## Established components / patterns (reuse, do not reinvent)
- `src/components/v2/HeroOmnichannel.*` — homepage hero with the channel→engine constellation.
- `src/components/v2/UsHomeSections.*` and `UsHomeInteractive.tsx` — homepage section system (problem, solution, pillars, animated console, growth, comparison, proof).
- `src/components/v2/PlatformPage.css` — the platform-page visual system (`.platpage`): dot-grid atmosphere, gradient-text accent, maxi stat band, hover-lift bento cards (`.pp-card`), styled comparison table (`.pp-table`), mono `//` labels (`.pp-mlabel`), white/tint section rhythm (`.pp-sec` / `.pp-sec.tint`), and three hero visuals (`.pp-store`, `.pp-arch`, `.pp-core`).
- `src/components/v2/FAQ.tsx` — Linear-minimal FAQ (sticky topic sidebar + native accordion). Always use for FAQs.
- `HeroInlineForm` (lead capture) and `ModalCTAButton` (region="us") for CTAs. Calendly = https://calendly.com/bhavesh-factoryjet/30min.
- `SiteHeader` (renders the US commerce mega menu) and `SiteFooter linkColumns={US_FOOTER_COLUMNS}`.

## Page anatomy (commerce / platform page)
1. **Hero** on a dot-grid: mono eyebrow, H1 with one gradient-accent phrase, lead, **inline lead form**, plus ONE distinctive hero visual (the memorable moment) built in CSS/SVG, not stock imagery.
2. **Maxi stat band** (`.pp-stats`): 4 tabular-figure stats, honest (no fabricated metrics).
3. **Answer-first concept section** ("What is X?") for AI/AEO citation; 2 short paragraphs.
4. **Bento** of capabilities (`.pp-bento` + `.pp-card`), ~6 tiles, hover-lift.
5. **Original comparison table** (`.pp-table`), keyword-rich, our row highlighted (`tr.me`).
6. **Process** — 4 numbered steps.
7. **FAQ** — 10+ answer-first Q&A targeting real search queries, with FAQPage schema.
8. **Final CTA** on tint, Calendly + audit modal, plus internal links UP to the pillar and across to siblings.

## Motion rules
- One orchestrated moment per page (the hero visual: subtle float/pulse/spin). Avoid scattered micro-interactions.
- Everything must be `@media (prefers-reduced-motion: reduce)` safe (animations off, content fully visible).
- Content is visible by default; never gate visibility on animation/JS.

## Schema (every page)
Service + FAQPage + BreadcrumbList JSON-LD via `next/script`. FAQPage must mirror the visible FAQ exactly.

## Performance / a11y
Mobile-first; target Lighthouse 100/100 mobile. AA contrast. No horizontal overflow. Hero fits ~one viewport on desktop and mobile. Tables wrap in `overflow-x:auto`.

## Anti-slop guardrails (also enforced by impeccable)
- No generic AI aesthetics: no purple/blue-on-white gradients, no evenly-distributed timid palettes, no cookie-cutter three-cards-in-a-row as the ONLY device, no stock-photo heroes.
- No AI-slop verbs (seamless, streamline, empower, unlock, elevate, robust, transform, leverage, world-class, supercharge). No em dashes. No pricing numbers. No fabricated stats. No geo-cheap framing.
- Every hero gets the inline lead form. Every page links up to the omnichannel-commerce pillar and across to relevant siblings.
