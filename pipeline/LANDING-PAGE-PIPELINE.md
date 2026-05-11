# FactoryJet — Landing Page Design Automation Pipeline
**Version:** 2.0  
**Location:** `FactoryJet/website/pipeline/LANDING-PAGE-PIPELINE.md`  
**Created:** May 8 2026  
**Purpose:** Wire `factoryjet.DESIGN.md` + HTML reference + skills into every AI-generated landing page prompt  
**Scale target:** 10–12 pages/day · Global markets: US → GB → EU → AU → IN → LATAM → ME/Gulf  
**Image generation:** Runware API (FLUX Dev `runware:97@1`) — 6 image slots per page

---

## How this pipeline works (Meng To framework)

Three layers — attach all three to every page generation prompt:

| Layer | File | Role |
|-------|------|------|
| **Recipe** | `factoryjet.DESIGN.md` | Typography, colours, spacing, component rules, anti-patterns |
| **Finished dish** | `pipeline/brand-references/factoryjet-canonical.html` | How the recipe renders — a complete v2 page agents can see and pattern-match |
| **Ingredients** | `pipeline/skills/fj-*.skill.md` | Focused, per-workflow prompt fragments — attach only the relevant ones |

**Key rule from Meng's workflow:** Skills are *per-workflow*, not global. Attach only the skills relevant to what you're building in this specific prompt. Attaching all 8 to every prompt costs more tokens and makes the AI too literal.

---

## Skill selection guide — which skills to attach per page type

| Page type | Always attach | Add if relevant |
|-----------|--------------|-----------------|
| **City × service** (`/us/austin/web-design`) | `fj-hero` + `fj-locale` + `fj-seo-schema` + `fj-cta` + `fj-images` | `fj-stats` · `fj-comparison` · `fj-dark-section` |
| **City landing page** (`/us/austin`) | `fj-hero` + `fj-locale` + `fj-seo-schema` + `fj-images` | `fj-stats` · `fj-comparison` · `fj-cta` |
| **Service page** (`/us/services/web-design`) | `fj-hero` + `fj-seo-schema` + `fj-cta` + `fj-images` | `fj-stats` · `fj-comparison` · `fj-dark-section` |
| **Home page** | `fj-hero` + `fj-stats` + `fj-dark-section` + `fj-cta` + `fj-seo-schema` + `fj-images` | `fj-comparison` |
| **Any page with animation** | Add `fj-motion` | — |
| **Any page with dark section** | Add `fj-dark-section` | — |
| **Any page with AI images** | Add `fj-images` | Required for all city × service pages |

---

## The master prompt template

Copy this block verbatim. Replace all `{PLACEHOLDER}` values. Remove sections marked [optional] if not needed.

```
PROJECT: FactoryJet — AI Services Company website
REPO: factoryjet-tech/Factoryjet-Website-v1 → Cloudflare Pages
CURRENT BRANCH: {git_branch}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM [READ FIRST]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<attach: factoryjet.DESIGN.md>

VISUAL REFERENCE [READ SECOND]
<attach: pipeline/brand-references/factoryjet-canonical.html>

ACTIVE SKILLS FOR THIS PROMPT [READ THIRD]
<attach: pipeline/skills/fj-hero.skill.md>
<attach: pipeline/skills/fj-locale.skill.md>
<attach: pipeline/skills/fj-seo-schema.skill.md>
[optional: attach pipeline/skills/fj-stats.skill.md]
[optional: attach pipeline/skills/fj-comparison.skill.md]
[optional: attach pipeline/skills/fj-dark-section.skill.md]
[optional: attach pipeline/skills/fj-motion.skill.md]
[optional: attach pipeline/skills/fj-cta.skill.md]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOCALE CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Country: {country_name} ({country_code})
City: {city_display_name}
Currency: {currency_symbol} ({currency_code})
Stats body: {official_stats_body_name} ({official_stats_body_url})
Regulatory authority: {regulatory_authority_name}
Agency archetype label: "{city} web design agency"

City data (from pipeline/scripts-ts/data/enriched/{country_code}/{city_slug}.json):
- Population: {population.value} ({population.asOfYear}) — {population.sources[0].url}
- Business count: {businessCount.value} ({businessCount.asOfYear}) — {businessCount.sources[0].url}
- Top industries: {industries[0].name}, {industries[1].name}, {industries[2].name}
- Competitors: {competitors[0].name} ({competitors[0].websiteUrl}), {competitors[1].name}, {competitors[2].name}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NON-NEGOTIABLES (read before writing a single line)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Hero is NEVER dark. bg-[#FAFAF7] always.
- Typography: Clash Display 700 (headings) + Inter (body) + Geist Mono (eyebrows/code). No exceptions.
- No italic-emphasis on headline words. No gradient text. No glow. No particles. No dark hero.
- Max 2 dark sections per page (StrategicDarkSection + SiteFooter). Count before adding.
- All content server-rendered. No client-side-only text. AI crawlers can't execute JS.
- FAQ answers in static <p> or <details>/<summary> — never hidden in JS accordion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THIS PROMPT'S TASK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{ONE clear, surgical task description}

Example: "Generate the page component for /us/austin using the v2 component library.
Compose: Hero → LogoBar → BigThreeTrustBlock → ServiceExplanation → StrategicDarkSection
→ ComparisonTable → CityContextSection → FAQ → FinalCTA → SiteFooter."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE PATH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create/modify: {exact file path, e.g. src/app/us/austin/page.tsx}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT TOUCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Do not modify: src/components/v2/* (components are built; compose them, don't rewrite them)
- Do not modify: factoryjet.DESIGN.md
- Do not modify: tailwind.config.js
- Do not modify: {list any other files that must stay untouched}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT EXPECTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Server component (no "use client" unless justified)
- Imports from src/components/v2/* only (no inline styles, no new Tailwind classes outside the design system)
- Lighthouse ≥ 95 performance, 100 SEO, ≥ 95 accessibility
- Passes the 5-second test: reader thinks "AI services company that ships in 60 days" — not "fast web agency"
```

---

## Pre-filled templates by page type

### City × Service page (`/us/{city}/{service}/page.tsx`) — PRIMARY TEMPLATE

This is the primary programmatic SEO page type. 10–12 of these per day at scale.

```
<attach: factoryjet.DESIGN.md>
<attach: pipeline/brand-references/factoryjet-canonical.html>
<attach: pipeline/skills/fj-hero.skill.md>
<attach: pipeline/skills/fj-locale.skill.md>
<attach: pipeline/skills/fj-stats.skill.md>
<attach: pipeline/skills/fj-comparison.skill.md>
<attach: pipeline/skills/fj-dark-section.skill.md>
<attach: pipeline/skills/fj-seo-schema.skill.md>
<attach: pipeline/skills/fj-cta.skill.md>
<attach: pipeline/skills/fj-images.skill.md>

TASK: Generate src/app/{country}/{city_slug}/{service_slug}/page.tsx
NOTE: This file is auto-generated by pipeline/scripts-ts/src/step7/assembler.ts
      Do not hand-write it. Run: pnpm assemble --city {city_slug} --service {service_slug} --country {country}

Page composition — 15 sections in order (matches factoryjet-canonical.html v3.0):
01. SiteHeader     — sticky, cream, Inter nav, Jet Blue CTA
02. Hero           — ALWAYS light (cream BG). 7/5 grid. Runware image: /images/{country}/{city}/{svc}/hero.webp
03. LogoBar        — "Trusted by 500+ businesses" · 6 client wordmarks, opacity 0.55
04. BigThreeTrust  — 500+ | 7 days | 60% cheaper | + city business count from enriched data
05. CityContext    — city population, GDP, landmark stat. Cite {official_stats_body}. Runware: city-context.webp
06. ServiceExplanation — 60/40 grid. What we build + 5 feature checkmarks. Runware: service-mockup.webp
07. StrategicDark  — Dark slot 1/2. Navy BG. "AI-native / Transparent / Guaranteed" pillars. NO pricing.
08. ProcessJourney — 5 numbered steps: Discovery → Brief → Build → Review → Live on day 7
09. Portfolio      — 3 case study cards matched to city top industries. Runware: portfolio-1/2/3.webp
10. ComparisonTable— FactoryJet vs "{city} agency" vs Freelancer. USD pricing. fj-jet-blue-tint on FJ column.
11. PricingTiers   — 3 tiers: Starter $599 | Growth $1,499 (featured) | Scale $2,999. USD locale.
12. IndustriesGrid — city-specific industry pills from enriched data (min 12 industries)
13. Testimonials   — 3 curated testimonials. 5-star rating. Static — no carousel.
14. FAQ            — 8 questions. Static HTML (dl/dt/dd). No JS accordion. FAQPage schema.
15. FinalCTA       — light variant. City name in headline. Glassmorphism allowed here only.
16. SiteFooter     — Dark slot 2/2. fj-navy-deep. 5 columns. City links for country.

IMAGE SLOTS (6 total — Runware generates after assembly):
- hero.webp           → 800×600 · FLUX Dev · device + office environment
- city-context.webp   → 600×400 · FLUX Dev · city landmark photography
- service-mockup.webp → 800×600 · FLUX Dev · website-on-device product photography
- portfolio-1.webp    → 600×400 · FLUX Dev · industry-matched website screenshot
- portfolio-2.webp    → 600×400 · FLUX Dev · industry-matched website screenshot
- portfolio-3.webp    → 600×400 · FLUX Dev · industry-matched website screenshot

FILE: src/app/{country}/{city_slug}/{service_slug}/page.tsx
DO NOT TOUCH: src/components/v2/*, tailwind.config.js, factoryjet.DESIGN.md
```

### City landing page (`/us/{city}/page.tsx`)

```
<attach: factoryjet.DESIGN.md>
<attach: pipeline/brand-references/factoryjet-canonical.html>
<attach: pipeline/skills/fj-hero.skill.md>
<attach: pipeline/skills/fj-locale.skill.md>
<attach: pipeline/skills/fj-stats.skill.md>
<attach: pipeline/skills/fj-comparison.skill.md>
<attach: pipeline/skills/fj-seo-schema.skill.md>
<attach: pipeline/skills/fj-cta.skill.md>

TASK: Generate src/app/us/{city_slug}/page.tsx (city hub, links to service sub-pages)

Page composition (in order — 15 sections):
01. Hero           — eyebrow: "WEB DESIGN · {CITY}", headline formula from fj-hero.skill.md. Runware: hero.webp
02. LogoBar        — 6 client wordmarks
03. BigThreeTrust  — 500+ | 7 days | 60% cheaper | + city business count
04. CityContext    — population, GDP, top industries, primary-source citations
05. ServiceExplanation — what FactoryJet builds + 5 checkmarks. Runware: service-mockup.webp
06. StrategicDark  — Navy BG. AI-native / Transparent / Guaranteed
07. ProcessJourney — 5-step: Discovery → Brief → Build → Review → Live day 7
08. Portfolio      — 3 case study cards matched to city industries. Runware: portfolio-*.webp
09. ComparisonTable— FactoryJet vs local agency vs Freelancer
10. PricingTiers   — 3 tiers, USD
11. IndustriesGrid — 12+ city industry pills from enriched data
12. Testimonials   — 3 curated testimonials, static
13. FAQ            — 8 questions, static HTML, FAQPage schema
14. FinalCTA       — city name in headline
15. SiteFooter     — dark, fj-navy-deep

FILE: src/app/us/{city_slug}/page.tsx
DO NOT TOUCH: src/components/v2/*, tailwind.config.js, factoryjet.DESIGN.md
```

### Service page (`/us/services/{service}/page.tsx`)

```
<attach: factoryjet.DESIGN.md>
<attach: pipeline/brand-references/factoryjet-canonical.html>
<attach: pipeline/skills/fj-hero.skill.md>
<attach: pipeline/skills/fj-stats.skill.md>
<attach: pipeline/skills/fj-dark-section.skill.md>
<attach: pipeline/skills/fj-seo-schema.skill.md>
<attach: pipeline/skills/fj-cta.skill.md>

TASK: Generate src/app/us/services/{service_slug}/page.tsx

Page composition:
1. Hero — service-focused headline, lead paragraph explaining the service USP
2. BoringStatsRow — 3 service-specific metrics (delivery, price, results)
3. ServiceExplanation — 60/40 grid, what we build + feature list, rightSlot: mockup
4. BigThreeTrustBlock — service-specific stats
5. StrategicDarkSection — technical credibility block (stack, process, guarantee)
6. PricingTiers — 3 tiers for this service (USD pricing)
7. IndustriesGrid — industries we serve with this service
8. FAQ — 4 questions specific to this service
9. FinalCTA — service-focused headline + CTA

FILE: src/app/us/services/{service_slug}/page.tsx
```

### Country page (`/us/page.tsx`)

```
<attach: factoryjet.DESIGN.md>
<attach: pipeline/brand-references/factoryjet-canonical.html>
<attach: pipeline/skills/fj-hero.skill.md>
<attach: pipeline/skills/fj-locale.skill.md>
<attach: pipeline/skills/fj-stats.skill.md>
<attach: pipeline/skills/fj-comparison.skill.md>
<attach: pipeline/skills/fj-dark-section.skill.md>
<attach: pipeline/skills/fj-seo-schema.skill.md>
<attach: pipeline/skills/fj-cta.skill.md>

LOCALE: us / USD / $ / U.S. Census Bureau (census.gov) / SEC

TASK: Generate src/app/us/page.tsx (US country homepage)
Page is the entry point for all US traffic — headline targets US SMBs broadly.
```

---

## Pipeline execution order

Canonical order for generating a city × service page end-to-end.
Single page: ~25 minutes total. Batch of 10 pages: ~2 hours (steps 1–3 parallelisable).

```
Step 1: Enrich city data
  cd pipeline/scripts-ts
  pnpm enrich --country us --city austin
  # Writes: data/enriched/us/austin.json
  # Sources: Google Search Console API + Tavily + U.S. Census Bureau

Step 2: Confirm enriched data looks correct
  cat pipeline/scripts-ts/data/enriched/us/austin.json | jq '.businessCount, .industries'

Step 3: Generate copy (Anthropic API → structured JSON)
  pnpm generate --country us --city austin --service web-design
  # Calls claude-sonnet-4-6 with system.ts brand voice rules
  # Writes: data/generated/us/austin/web-design.copy.json

Step 4: Assemble page TSX (pure template → no LLM)
  pnpm assemble --country us --city austin --service web-design
  # Reads: data/generated/us/austin/web-design.copy.json
  # Writes: src/app/us/austin/web-design/page.tsx (15 sections, all v2 components)

Step 5: Generate Runware images (6 slots per page)
  pnpm generate-images --country us --city austin --service web-design
  # Reads data-runware-* attributes from assembled page
  # Calls Runware API with FLUX Dev (runware:97@1)
  # Writes: public/images/us/austin/web-design/{hero,city-context,service-mockup,portfolio-1/2/3}.webp
  # Time: ~60 seconds for 6 images

Step 6: Run Lighthouse audit
  pnpm build && pnpm lighthouse http://localhost:3000/us/austin/web-design
  # Target: ≥95 performance, 100 SEO, ≥95 accessibility
  # Fail gates: LCP > 2.5s, missing canonical, FAQPage schema absent

Step 7: Run 5-second test
  Open in incognito at 1280px and 375px. Read for 5 seconds.
  Question: "Does this read as an AI-native agency for Austin SMBs?"
  Check: city name visible above the fold, price visible in hero/trust strip

Step 8: Commit and push
  git add src/app/us/austin/web-design/ public/images/us/austin/
  git commit -m "feat: /us/austin/web-design city × service page (v2)"
  git push origin {branch}
  → Cloudflare Pages auto-deploys preview URL within 90 seconds
```

### Batch execution (10 pages/day target)

```bash
# Example: generate all US priority city pages for web-design service
CITIES="austin miami denver nashville portland charlotte raleigh"
SERVICE="web-design"
COUNTRY="us"

for CITY in $CITIES; do
  echo "=== Processing $CITY ==="
  pnpm enrich   --country $COUNTRY --city $CITY
  pnpm generate --country $COUNTRY --city $CITY --service $SERVICE
  pnpm assemble --country $COUNTRY --city $CITY --service $SERVICE
  pnpm generate-images --country $COUNTRY --city $CITY --service $SERVICE
done

# Then bulk Lighthouse + commit
pnpm build
git add src/app/us/ public/images/us/
git commit -m "feat: US city × web-design pages, batch May 2026"
git push origin main
```

---

## Iteration discipline (from Meng's workflow)

- Do not one-shot the final page. Build section by section.
- Each prompt = one component or one section. Prompt → review → next.
- After every 3–4 sections, do the 5-second test on what's built so far.
- When you're happy with a section's design, say "remember this" in your next prompt
  so the agent maintains the established pattern for subsequent sections.
- Remix (not iterate) when you need a substantially different layout — e.g. trying an
  alternate hero with a full-width image rather than 7/5 grid. Keep both, compare, choose.

---

## Troubleshooting — common design drift failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| Hero has dark background | Agent didn't read design.md first | Restart session, re-attach design.md |
| Headline uses Inter instead of Clash Display | CLAUDE.md not read / old cached session | Check CLAUDE.md is up to date (May 8 2026 version), restart |
| Italic words in headline | Old CLAUDE.md (pre-May 2026) in session | Re-read CLAUDE.md, confirm pivot section at top |
| Glassmorphism on stat cards | Agent hallucinated allowed usage | Only FinalCTA allows glassmorphism — explicitly call out in prompt |
| Currency shows £ on /us/ pages | GBP hardcoding bug in pipeline | Use fj-locale.skill.md, confirm `resolveLocale('us')` returns `$` |
| Count-up animation on stats | Agent assumed "stat = animation" | Attach fj-stats.skill.md, explicitly state "static numbers, no count-up" |
| FAQ answers hidden in JS accordion | Agent added React state | Use `<details>`/`<summary>` or static `<p>` — call out in fj-seo-schema.skill.md |
| Page fails Lighthouse SEO < 100 | Missing canonical, schema, or alt text | Attach fj-seo-schema.skill.md before generating |

---

## Global market taxonomy

Priority order for page generation. North America first, then GB, then remaining markets.

| Priority | Country code | Country | Currency | Stats body | Locale base path |
|----------|-------------|---------|----------|------------|-----------------|
| 1 | `us` | United States | USD / $ | U.S. Census Bureau (census.gov) | `/us` |
| 2 | `gb` | United Kingdom | GBP / £ | Companies House / ONS | `/uk` |
| 3 | `au` | Australia | AUD / A$ | ABS (abs.gov.au) | `/au` |
| 4 | `ae` | UAE | AED | Dubai Chamber of Commerce | `/ae` |
| 5 | `in` | India | INR / ₹ | MCA (Ministry of Corporate Affairs) | `/in` |
| 6 | `de` | Germany | EUR / € | Destatis (destatis.de) | `/de` |
| 7 | `fr` | France | EUR / € | INSEE (insee.fr) | `/fr` |
| 8 | `br` | Brazil | BRL / R$ | IBGE (ibge.gov.br) | `/br` |
| 9 | `mx` | Mexico | MXN / $ | INEGI (inegi.org.mx) | `/mx` |
| 10 | `sg` | Singapore | SGD / S$ | DOS (singstat.gov.sg) | `/sg` |
| 11 | `za` | South Africa | ZAR / R | Stats SA (statssa.gov.za) | `/za` |
| 12 | `ng` | Nigeria | NGN / ₦ | NBS (nigerianstat.gov.ng) | `/ng` |

### US priority cities (Phase 1 — launch)

| City | Slug | State | Target service |
|------|------|-------|----------------|
| Austin | `austin` | TX | web-design, ecommerce, ai-agents |
| Miami | `miami` | FL | web-design, shopify, ai-seo |
| Denver | `denver` | CO | web-design, ecommerce, ai-agents |
| Nashville | `nashville` | TN | web-design, shopify |
| Portland | `portland` | OR | web-design, ecommerce |
| Charlotte | `charlotte` | NC | web-design, ai-seo |
| Raleigh | `raleigh` | NC | web-design, ai-agents |
| Tampa | `tampa` | FL | web-design, shopify |
| New York | `new-york` | NY | web-design, ecommerce |
| Chicago | `chicago` | IL | web-design, ecommerce |
| Seattle | `seattle` | WA | web-design, ai-agents |
| Atlanta | `atlanta` | GA | web-design, shopify |

### UK priority cities (Phase 2)

London, Manchester, Birmingham, Leeds, Sheffield, Bristol, Edinburgh, Glasgow, Liverpool, Newcastle

### UAE priority cities (Phase 3)

Dubai, Abu Dhabi

### India priority cities (Phase 4)

Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai, Ahmedabad, Surat

---

## Files in this pipeline

```
FactoryJet/website/pipeline/
├── LANDING-PAGE-PIPELINE.md         ← this file (master prompt template + execution order)
├── brand-references/
│   ├── factoryjet-canonical.html    ← HTML reference — 15-section "finished dish" v3.0
│   ├── _synthesis.md                ← competitor brand audit (20 sites)
│   └── {competitor}/                ← extracted tokens + screenshots per competitor
└── skills/
    ├── fj-hero.skill.md             ← Hero rules (always light, 7/5 grid, Clash Display)
    ├── fj-dark-section.skill.md     ← StrategicDarkSection + SiteFooter rules (max 2/page)
    ├── fj-stats.skill.md            ← BigThreeTrustBlock + BoringStatsRow rules
    ├── fj-comparison.skill.md       ← ComparisonTable rules
    ├── fj-motion.skill.md           ← Motion + animation rules (fade-up, GSAP)
    ├── fj-locale.skill.md           ← Currency, stats body, locale injection per country
    ├── fj-seo-schema.skill.md       ← Schema.org, SSR, canonical, Lighthouse gates
    ├── fj-cta.skill.md              ← FinalCTA + CTA copy patterns
    └── fj-images.skill.md           ← Runware image generation: models, prompts, paths, batching

FactoryJet/website/pipeline/scripts-ts/
└── src/step7/
    ├── assembler.ts                 ← Page TSX generator (15 sections, 5 new emitters v2)
    ├── types.ts                     ← PageCopyOutput type
    └── prompts/
        └── system.ts                ← Brand voice rules + banned words (sync with marketing)

FactoryJet/website/pipeline/scripts-ts/scripts/
└── generate-images.ts               ← Runware image generator (reads data-runware-* attrs)
```
