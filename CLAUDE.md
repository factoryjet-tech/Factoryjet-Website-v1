# CLAUDE.md — FactoryJet Birmingham City Page
## Claude Code Build Specification
## factoryjet.com/uk/birmingham

> READ THIS FILE BEFORE EVERY PROMPT.
> Read content.md for all page copy. Every word in content.md is final — do not paraphrase, shorten, or substitute.
> Build one section per prompt. Verify in browser before moving to next.
> Project path: ~/FactoryJet/website/

---

## 1. ROLE

You are a senior frontend engineer and UI/UX designer building a production-ready Next.js 15 page for FactoryJet Technologies. You are cloning the Manchester city page template structure and swapping in Birmingham-specific content and imagery. You produce clean, deployable TypeScript/React code with Tailwind CSS 4 classes, GSAP animations, and Lighthouse 95+ performance.

---

## 2. TECH STACK

- **Framework:** Next.js 15, React 19, TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 (no custom CSS unless GSAP requires it)
- **Animations:** GSAP 3.13+ with ScrollTrigger and SplitText (dynamic import, client-only)
- **Smooth scroll:** Lenis (instantiated in useEffect, client component wrapper)
- **Fonts:** Clash Display (headings, from fontshare.com via `<link>` tag in layout.tsx) + Inter (body, Google Fonts) + JetBrains Mono (code ticker only)
- **Images:** next/image with explicit width/height, WebP, aspect-ratio, priority={true} for hero (LCP)
- **Deployment:** Vercel via Rishikesh

---

## 3. FILE LOCATIONS

```
src/app/uk/birmingham/page.tsx        ← main file you build
src/app/uk/birmingham/layout.tsx      ← metadata, fonts (if needed)
src/app/uk/layout.tsx                 ← shared UK layout (DO NOT TOUCH)
src/components/MeshGradient.tsx       ← reuse as-is from Manchester (DO NOT MODIFY)
src/lib/gsap.ts                       ← GSAP setup (DO NOT MODIFY)
public/images/uk/birmingham/          ← all Birmingham images go here
data/cities/birmingham.json           ← city data (create from content.md)
```

---

## 4. DESIGN SYSTEM — NON-NEGOTIABLE

### Colours (60-30-10 rule)
```
Jet Blue    #0052CC   — primary (60%) — CTAs, headings, links, rings
Jet Orange  #FF6B35   — secondary (10%) — section labels, badges, highlights
Jet Green   #10B981   — accent — success states, pricing savings column
Dark        #0A0F1C   — hero bg, dark sections, footer
Light       #F8FAFC   — body sections off-white
White       #FFFFFF   — body sections white
Mid-grey    #64748B   — body text on light backgrounds
```

### Typography
```
Clash Display   headings ONLY (H1–H4). 700 for H1/H2, 600 for H3/H4.
Inter           body, UI, captions. 400/500/600 weights only.
JetBrains Mono  code ticker ONLY. No other use.
```

### Font sizes (fluid, clamp())
```
H1: clamp(2.5rem, 6vw, 5rem)
H2: clamp(2rem, 4vw, 3.5rem)
H3: clamp(1.5rem, 3vw, 2.5rem)
Body: clamp(1rem, 1.5vw, 1.125rem)
```

### Layout rhythm
```
Hero (dark #0A0F1C) →
Section 2 (white #FFFFFF) →
Section 3 (dark #0A0F1C, services horizontal scroll) →
Section 4 (off-white #F8FAFC, cities grid) →
Section 5 (dark #0A0F1C, tech stack) →
Section 6 (off-white #F8FAFC, pricing) →
Section 7 (white #FFFFFF, FAQ) →
Section 8 (Jet Blue #0052CC full-bleed, CTA) →
Section 9 (dark #0A0F1C, footer)
```

---

## 5. ANTI-SLOP RULES — ENFORCED ON EVERY SECTION

```
✗ NO gradient text (no bg-clip: text, no -webkit-background-clip)
✗ NO rainbow or multi-colour gradients
✗ NO particle effects, sparkles, or floating dots
✗ NO spinning counters on page load (ScrollTrigger ONLY)
✗ NO glassmorphism outside Section 8 FinalCTA (one instance max, entire page)
✗ NO symmetric 3-column feature grids (use asymmetric layouts, bento)
✗ NO accordions with display:none (use CSS max-height:0/overflow:hidden — AI crawlers)
✗ NO loading all GSAP on server (dynamic import ssr:false always)
✗ NO inline style overrides of Tailwind unless unavoidable
✗ NO lorem ipsum — read content.md for every word
✗ NO placeholder copy — every stat, name, and heading must come from content.md
✗ NO confetti, emoji, or decorative icon overuse
```

### Maximum 3–5 signature visual moments per page total:
1. Hero: WebGL mesh gradient + SVG Birmingham skyline silhouette rise
2. Section 3: GSAP horizontal pinned scroll
3. Section 2: SVG circular progress rings
4. Section 8: Glassmorphism lead form
5. (Optional) Section 5: GSAP floating badge parallax

Everything else: clean typographic layout.

---

## 6. RESPONSIVE STANDARDS

```
Breakpoints: 320px, 375px, 390px, 430px, 480px, 640px, 768px, 1024px, 1280px, 1440px, 1920px
Touch targets: min 44×44px (WCAG 2.2), min 48×48px for primary CTAs
aspect-ratio on all images
overflow-x: hidden on page root
3D tilt: @media (hover: hover) and (pointer: fine) only — disabled on touch
clamp() for all font sizes and spacing
```

---

## 7. SEO / AI CRAWLER RULES

```
1. All primary content expanded and visible at all times — never conditionally rendered
2. FAQ: CSS max-height:0/overflow:hidden for collapsed state — NEVER display:none
3. All FAQ answers in static HTML DOM (AI crawlers don't execute JS)
4. robots.txt must allow: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended
5. Every page needs in <head>: FAQPage JSON-LD, LocalBusiness, Service, BreadcrumbList, WebPage
6. Canonical: https://factoryjet.com/uk/birmingham
7. generateMetadata function in page.tsx or layout.tsx
```

---

## 8. BIRMINGHAM-SPECIFIC TEMPLATE DELTA

These are the ONLY things that change vs. Manchester. Everything else clones Manchester exactly.

| Element | Manchester | Birmingham |
|---|---|---|
| Route | /uk/manchester | /uk/birmingham |
| H1 | Manchester's AI-Native... | Birmingham's AI-Native... |
| Hero image | hero-manchester.webp | hero-birmingham.webp |
| SVG silhouette | Beetham Tower + Wheel | Rotunda building + Bullring Selfridges dome |
| City name in all copy | Manchester | Birmingham |
| Region | Greater Manchester | West Midlands |
| Industries in copy | Tech, media, professional services | Manufacturing, retail, finance, professional services |
| Key employers in copy | Read from content.md | Read from content.md |
| Local districts | Northern Quarter, Spinningfields | Digbeth, Jewellery Quarter, Brindleyplace, Grand Central |
| Code ticker | const manchester = ... | const birmingham = { stack: 'next15', ai: 'claude-api', deploy: 'vercel', seo: 'lighthouse-100', city: 'birmingham', region: 'west-midlands', hs2: true } |
| Pricing sub-copy | Manchester agencies | Birmingham agencies (read from content.md) |
| Active city card | Manchester ring | Birmingham ring |
| JSON-LD areaServed | Manchester | Birmingham / West Midlands |
| data/cities/ file | manchester.json | birmingham.json |
| Breadcrumb | Home > UK > Manchester | Home > UK > Birmingham |
| Canonical | /uk/manchester | /uk/birmingham |

---

## 9. IMAGE SOURCING INSTRUCTIONS

### Hero image (hero-birmingham.webp):
AI-generated via NanoBanana. See DESIGN_PROMPTS.md for the exact prompt.
Target: 2400×1080px, max 150KB, WebP.

### Service images (4 files):
AI-generated via NanoBanana. See DESIGN_PROMPTS.md for the exact prompt per service.
Target: 1200×900px, max 80KB, WebP each.

### City grid photo (birmingham-city.webp):
Source from Pexels MCP or Unsplash MCP.
Pexels query: "Birmingham city centre" or "Bullring Birmingham"
Unsplash query: "Birmingham UK skyline"
Target: 1200×800px, max 40KB, WebP.
Compression: sips -s format webp -s formatOptions 80 input.jpg --out output.webp

---

## 10. BUILD PROMPT SEQUENCE

Use these 6 prompts in order. One prompt at a time. Verify in browser. Screenshot confirmation before next prompt.

---

### PROMPT 0 — Project Setup

```
Read CLAUDE.md at ~/FactoryJet/website/CLAUDE.md.
Read content.md at ~/FactoryJet/website/content.md.

Create the Birmingham city page scaffolding:
1. Create src/app/uk/birmingham/ directory
2. Create src/app/uk/birmingham/page.tsx with generateMetadata using title and description from content.md META section, canonical https://factoryjet.com/uk/birmingham
3. Create data/cities/birmingham.json using the CITY DATA block from content.md
4. Run: ls -la src/app/uk/birmingham/ && cat data/cities/birmingham.json to confirm both files exist

DO NOT build any sections yet. DO NOT touch any other city files.
```

---

### PROMPT 1 — Hero Section

```
Read CLAUDE.md. Read content.md Section 1.

Build the Hero section in src/app/uk/birmingham/page.tsx:
- Clone Manchester's HeroSection component exactly (same WebGL MeshGradient, same SplitText word-stagger, same timing, same overlay technique)
- Swap in Birmingham content from content.md: H1, sub-headline, trust bar, stat watermarks, CTA buttons
- Hero image: /images/uk/birmingham/hero-birmingham.webp — if not present, use bg-[#0A0F1C] placeholder div
- Inline SVG silhouette: replace Manchester's Beetham Tower with a simple geometric Birmingham Rotunda + Selfridges dome silhouette (SVG path, GSAP rise on load, same technique and timing)
- Scroll cue chevron: aria-hidden="true", CSS bounce keyframe
- Apply all anti-slop rules from CLAUDE.md

DO NOT change MeshGradient.tsx. DO NOT change animation config. Only content and SVG paths change.
Verify in browser. Screenshot confirmation before next prompt.
```

---

### PROMPT 2 — Birmingham Digital Landscape

```
Read CLAUDE.md. Read content.md Section 2.

Add Section 2 after Hero in src/app/uk/birmingham/page.tsx:
- Clone Manchester's Digital Landscape section exactly (two-column 55/45, bento stat cards, SVG circular progress rings, pull quote)
- Swap in Birmingham content from content.md: section label, headline, body paragraphs, pull quote, 4 stat cards with numbers/labels/ring colours/fill percentages
- ScrollTrigger-activated counter animation on stat cards
- Pull quote: left border 4px solid #0052CC, Clash Display

DO NOT touch Hero section. DO NOT change ring animation timing.
Verify stat cards animate on scroll. Screenshot confirmation.
```

---

### PROMPT 3 — Services Horizontal Scroll

```
Read CLAUDE.md. Read content.md Section 3.

Add Section 3 (Services) after Section 2 in src/app/uk/birmingham/page.tsx:
- Clone Manchester's GSAP horizontal pinned scroll exactly
- Config: ScrollTrigger pin:true scrub:1 end:"+=500%" — DO NOT change
- 4 panels, progress dots, mobile vertical stack — same as Manchester
- Swap in Birmingham content from content.md Section 3: badge, headline, body, image path per panel
- Panel 3 (AI Agents): FEATURED badge, Jet Orange #FF6B35 background
- Service images: use placeholder bg-[#1a2236] divs if images not yet generated
- Hidden keyword spans: aria-hidden="true" style={{fontSize:0}}

DO NOT change ScrollTrigger config. Only content and image paths change.
Verify horizontal scroll fires. Screenshot confirmation.
```

---

### PROMPT 4 — Cities Grid + Tech Stack

```
Read CLAUDE.md. Read content.md Sections 4 and 5.

Add Section 4 and Section 5:

SECTION 4 — Cities Grid:
- Clone Manchester's cities grid exactly (bento layout, 3D tilt, overlay)
- Birmingham card: active state (Jet Blue border ring, "You are here" label)
- Use existing city photos from public/images/uk/[city]/ for all other cities
- Birmingham card image: /images/uk/birmingham/birmingham-city.webp (placeholder if not sourced)
- 3D tilt: @media (hover: hover) and (pointer: fine) only
- Section headline and body from content.md Section 4

SECTION 5 — Technology Stack:
- Clone Manchester's tech stack section exactly
- Swap Birmingham body copy from content.md Section 5
- Code ticker: const birmingham = { stack: 'next15', ai: 'claude-api', deploy: 'vercel', seo: 'lighthouse-100', city: 'birmingham', region: 'west-midlands', hs2: true }
- 5 floating badges with GSAP parallax — same badges, same animation

DO NOT change grid layout, tilt config, or GSAP badge parallax timing.
Verify and screenshot.
```

---

### PROMPT 5 — Pricing + FAQ

```
Read CLAUDE.md. Read content.md Sections 6 and 7.

Add Section 6 and Section 7:

SECTION 6 — Pricing Table:
- Clone Manchester's pricing section (off-white bg, 4-column table, mobile horizontal scroll + fade gradient)
- Table data: exact rows from content.md Section 6
- Headline and sub-copy from content.md Section 6
- Table styling: header #0A0F1C/white, FactoryJet column Jet Green #10B981, Savings Jet Orange #FF6B35

SECTION 7 — FAQ:
- Clone Manchester's FAQ (sticky sidebar 35% + right column 65%)
- Filter buttons from content.md
- All Q&A pairs: exact questions and answers from content.md Section 7
- CRITICAL: CSS max-height:0/overflow:hidden — NEVER display:none
- CRITICAL: All answers in static HTML DOM always
- FAQPage JSON-LD: inject all Q&As from content.md JSON-LD block

Verify: FAQ answers in page source. Screenshot confirmation.
```

---

### PROMPT 6 — Final CTA + Schema + QA + Zip

```
Read CLAUDE.md. Read content.md Section 8 and JSON-LD block.

SECTION 8 — Final CTA:
- Clone Manchester's FinalCTA (Jet Blue full-bleed, glassmorphism form — ONE instance only)
- Headline and body from content.md Section 8
- 3-step lead form: exact field labels and dropdowns from content.md
- Google Ads conversion: gtag('event', 'conversion', { send_to: 'AW-11127037244/aqsvCJCk8ZQcELy65Lkp' })
- WhatsApp: href="https://wa.me/919699977699" target="_blank" — NOT modal trigger
- Stat watermarks from content.md (opacity-8, decorative)
- City links and service links from content.md

JSON-LD: inject full @graph from content.md into <head>

SECTION 9 — Footer: import shared FactoryJet UK footer component

QUALITY AUDIT:
1. Lighthouse: Performance 80+, SEO 100, Accessibility 90+, Best Practices 100
2. Page source: H1 contains "Birmingham", all FAQ answers in HTML
3. Schema validator: all 5 types pass
4. Console: zero errors
5. Mobile 390px: no overflow, touch targets 44×44px min
6. Anti-slop: no gradient text, no display:none in FAQ, glassmorphism only Section 8

DEPLOYMENT ZIP:
cd ~/FactoryJet/website/src/app/uk/metadata.ts -x "*.DS_Store" "*/node_modules/*" && ls -lh birmingham-deployment.zip
```

---

## 11. QUALITY CHECKLIST

- [ ] H1 contains "Birmingham" — verified in HTML source
- [ ] Meta title ≤60 chars, contains "Birmingham"
- [ ] Meta description ≤155 chars
- [ ] Canonical: https://factoryjet.com/uk/birmingham
- [ ] All 5 JSON-LD schemas pass schema.org validator
- [ ] All FAQ answers in static HTML DOM
- [ ] robots.txt allows AI crawlers
- [ ] sitemap.xml updated to include /uk/birmingham
- [ ] Lighthouse SEO 100
- [ ] No gradient text anywhere
- [ ] No glassmorphism outside Section 8
- [ ] FAQ uses CSS max-height (not display:none)
- [ ] 5+ Birmingham location references in body copy
- [ ] Local competitors named in pricing section copy
- [ ] All Birmingham images in public/images/uk/birmingham/

---

*End of CLAUDE.md — Birmingham City Page*
