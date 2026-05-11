# Skill: fj-design-inspiration
# Use when: designing any FactoryJet landing page section — typography, color, layout, animation, component choices

## Purpose

This skill encodes the design DNA extracted from 5 world-class digital agency sites:

| Site | Character | Key Signature |
|------|-----------|---------------|
| neurons-lab.com | Dark editorial, neuro-tech | NeueHaasGroteskDisplay + video hero + neon CTAs |
| galvanite.io | Bold startup energy | GSAP split-text + bento grid + #0F1A35 deep navy + yellow |
| theboathouse.agency | Swiss editorial precision | DIN Next + white-dominant + grid-line animations |
| madeinevolve.com | Premium eCommerce studio | GSAP + Lenis + Split-Type + forest green + neon lime #c3ff00 |
| digitalflagship.com | Minimalist motion-heavy | Judge + Saans fonts + #060616 + #EA0046 + 5-col parallax video |

**Design north star**: Every FactoryJet landing page must feel like a $100,000+ agency website — mature, intentional, technically impeccable, with motion that serves meaning, not decoration.

---

## 01 · Typography System

### Font Stack (FactoryJet canonical)

```css
/* Heading / Display — editorial weight */
font-family: 'Clash Display', 'DIN Next', 'NeueHaasGroteskDisplay', sans-serif;
/* font-weight: 600–700 for hero headings, 500 for section headings */

/* Body / Supporting — readable workhorse */
font-family: 'Inter', 'Roboto', system-ui, sans-serif;
/* font-weight: 400 regular, 500 medium for emphasis */

/* Mono / Code / Data — precision */
font-family: 'Geist Mono', 'JetBrains Mono', monospace;
/* Used for stats, phone numbers, technical specs */
```

### Type Scale

```css
/* Hero headline — full impact */
.heading-hero    { font-size: clamp(52px, 8vw, 104px); line-height: 1.0; letter-spacing: -0.03em; font-weight: 700; }

/* Section headline — authoritative */
.heading-section { font-size: clamp(36px, 5vw, 64px);  line-height: 1.1; letter-spacing: -0.02em; font-weight: 600; }

/* Sub-section — clear hierarchy */
.heading-sub     { font-size: clamp(24px, 3vw, 36px);  line-height: 1.2; letter-spacing: -0.01em; font-weight: 600; }

/* Card heading */
.heading-card    { font-size: clamp(18px, 2vw, 24px);  line-height: 1.3; letter-spacing: 0;       font-weight: 600; }

/* Body copy — ideal reading */
.body-large      { font-size: clamp(17px, 1.5vw, 20px); line-height: 1.65; letter-spacing: 0;    font-weight: 400; }
.body-base       { font-size: 16px;                     line-height: 1.6;  letter-spacing: 0;    font-weight: 400; }
.body-small      { font-size: 14px;                     line-height: 1.55; letter-spacing: 0.01em; font-weight: 400; }

/* Label / Caption — precision */
.label           { font-size: 12px;  line-height: 1.4; letter-spacing: 0.08em; font-weight: 500; text-transform: uppercase; }
```

### Typography Rules

- **Hero text NEVER wraps more than 2 lines on desktop** — reduce letter-spacing or font-size before wrapping
- **Tight tracking on display**: −0.03em hero, −0.02em section — matches neurons-lab, galvanite
- **Relaxed body**: line-height 1.6–1.7 for comfort — matches theboathouse reading experience
- **No placeholder fonts**: always load Clash Display via CDN or self-hosted WOFF2; fall back to DIN Next, then system sans
- **Mono for numbers**: stats, prices, timers always in Geist Mono for optical alignment

---

## 02 · Color System

### FactoryJet Color Palette

```css
:root {
  /* === BRAND CORE === */
  --fj-midnight:   #0A0F1E;   /* Hero/dark-section background — deeper than galvanite's #0F1A35 */
  --fj-slate:      #1C2333;   /* Secondary dark surface */
  --fj-electric:   #3B82F6;   /* Primary brand blue — CTAs, links, highlights */
  --fj-sky:        #60A5FA;   /* Lighter blue — hover states */
  --fj-neon:       #6EE7B7;   /* Accent — stat highlights, success, "live" indicators */

  /* === LIGHT SURFACE === */
  --fj-white:      #FFFFFF;
  --fj-off-white:  #F8F9FC;   /* Light section background — never pure white for sections */
  --fj-border:     #E5E7EB;   /* Dividers, card borders */

  /* === TEXT === */
  --fj-text-dark:  #0D1117;   /* Primary text on light bg */
  --fj-text-body:  #374151;   /* Body copy */
  --fj-text-muted: #6B7280;   /* Captions, labels */
  --fj-text-light: #F9FAFB;   /* Primary text on dark bg */
  --fj-text-dim:   #9CA3AF;   /* Muted text on dark bg */

  /* === FUNCTIONAL === */
  --fj-success:    #10B981;
  --fj-warning:    #F59E0B;
  --fj-error:      #EF4444;

  /* === GRADIENTS === */
  --fj-gradient-hero:   linear-gradient(135deg, #0A0F1E 0%, #1C2333 100%);
  --fj-gradient-cta:    linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  --fj-gradient-neon:   linear-gradient(135deg, #3B82F6 0%, #6EE7B7 100%);
  --fj-gradient-card:   linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}
```

### Dark/Light Section Rhythm

Alternate between dark and light sections for visual breathing room. Never 3+ consecutive light sections:

```
Section 01 · Hero              → DARK (#0A0F1E)
Section 02 · LogoBar           → DARK (slightly lighter: #111827)
Section 03 · ProblemStatement  → LIGHT (#F8F9FC)
Section 04 · BigThree          → DARK (#0A0F1E)
Section 05 · CityContext       → LIGHT (#F8F9FC)
Section 06 · ServiceExplanation → LIGHT (#FFFFFF)
Section 07 · HowItWorks        → DARK (#0A0F1E)
Section 08 · Portfolio         → LIGHT (#F8F9FC)
Section 09 · Testimonials      → DARK (#0A0F1E)
Section 10 · Pricing           → LIGHT (#FFFFFF)
Section 11 · FAQ               → LIGHT (#F8F9FC)
Section 12 · FinalCTA          → DARK (gradient: #0A0F1E → #1C2333)
```

### Color Rules

- **Electric blue (#3B82F6) is the ONLY CTA button color** — never use green, orange, or yellow for primary CTAs
- **Neon green (#6EE7B7) for success states and "live" indicators only** — not for CTAs
- **On dark sections**: text is var(--fj-text-light), muted is var(--fj-text-dim)
- **On light sections**: text is var(--fj-text-dark), body is var(--fj-text-body)
- **Borders on dark**: 1px solid rgba(255,255,255,0.08) — subtle frosted glass feel
- **Borders on light**: 1px solid var(--fj-border)

---

## 03 · Animation & Motion System

### The Approved Stack

```html
<!-- GSAP 3 + ScrollTrigger — all scroll animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis — smooth scroll (matches madeinevolve feel) -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"></script>

<!-- Split-Type — text reveal animations (matches madeinevolve) -->
<script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js"></script>
```

### The Four Canonical Easing Curves

Extracted and cross-validated across 5 agency sites — use THESE, not random cubic-bezier values:

```css
/* Premium entrance (600ms+) — hero text, section headings */
--ease-entrance:  cubic-bezier(0.625, 0.05, 0, 1);  /* madeinevolve */

/* Snappy toggle (300ms) — accordion, dropdowns, tab switches */
--ease-toggle:    cubic-bezier(0.87, 0, 0.13, 1);   /* madeinevolve + papertiger --ui-transition-fast */

/* Organic hover (250ms) — button hover, card hover, underline reveals */
--ease-hover:     cubic-bezier(0.65, 0, 0.35, 1);   /* madeinevolve */

/* Galvanite card flip (400ms) */
--ease-flip:      cubic-bezier(0.34, 1.56, 0.64, 1); /* slight spring overshoot */

/* Editorial smoothness (1000–1200ms) — papertiger fade reveals, scroll transitions */
--ease-editorial: cubic-bezier(0.76, 0, 0.24, 1);   /* papertiger --ui-transition */
```

### Animation Rules

**On scroll (GSAP ScrollTrigger defaults):**
```javascript
// Standard scroll reveal — apply to ALL section content
gsap.from(el, {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'cubic-bezier(0.625, 0.05, 0, 1)',
  scrollTrigger: {
    trigger: el,
    start: 'top 85%',
    toggleActions: 'play none none none'
  }
});

// Stagger for lists, cards, grid items
gsap.from(items, {
  y: 30, opacity: 0,
  duration: 0.6,
  stagger: 0.08,   // 80ms between items — matches madeinevolve rhythm
  ease: 'cubic-bezier(0.625, 0.05, 0, 1)',
  scrollTrigger: { trigger: container, start: 'top 80%' }
});
```

**Text reveal (Split-Type + GSAP):**
```javascript
// Use for: hero headline, section headings H2
const split = new SplitType(heading, { types: 'lines' });
gsap.from(split.lines, {
  y: '110%',      // emerge from below clip
  opacity: 0,
  duration: 0.9,
  stagger: 0.12,
  ease: 'cubic-bezier(0.625, 0.05, 0, 1)',
  scrollTrigger: { trigger: heading, start: 'top 85%' }
});
// Wrap parent in: overflow: hidden; to create clipping mask
```

**Hover states (CSS — no GSAP needed):**
```css
/* Card hover — lift + shadow */
.card { transition: transform 0.25s cubic-bezier(0.65,0,0.35,1), box-shadow 0.25s; }
.card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }

/* Button hover — scale + brightness */
.btn-primary { transition: transform 0.2s, brightness 0.2s; }
.btn-primary:hover { transform: scale(1.03); filter: brightness(1.08); }

/* Link underline reveal (theboathouse pattern) */
.nav-link { position: relative; }
.nav-link::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 100%; height: 1.5px; background: currentColor;
  transform: scaleX(0); transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.65,0,0.35,1);
}
.nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
```

**Timing limits (HARD RULES):**
- Micro-interactions (hover, focus): 150–300ms
- Scroll reveals: 600–900ms
- Page transitions: ≤ 400ms
- NEVER animate width, height, or top/left — use transform only
- Always add `will-change: transform` to animated elements before animation starts; remove after
- Respect `prefers-reduced-motion` — disable all GSAP animations when set

```javascript
// Always wrap GSAP init with this check
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // init all GSAP animations here
}
```

---

## 04 · Layout Architecture

### The Grid System

```css
/* Root container — consistent across all sections */
.fj-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px)  { .fj-container { padding: 0 40px; } }
@media (min-width: 1024px) { .fj-container { padding: 0 64px; } }
@media (min-width: 1280px) { .fj-container { padding: 0 80px; } }

/* Section vertical rhythm */
.fj-section {
  padding: 80px 0;
}
@media (min-width: 768px) { .fj-section { padding: 100px 0; } }
@media (min-width: 1024px) { .fj-section { padding: 120px 0; } }

/* 12-column grid (use for most layouts) */
.fj-grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
@media (min-width: 768px) { .fj-grid-12 { gap: 32px; } }

/* Common column spans */
.col-span-5  { grid-column: span 5; }  /* 5/12 — content half of asymmetric layout */
.col-span-7  { grid-column: span 7; }  /* 7/12 — image/media half */
.col-span-6  { grid-column: span 6; }  /* 6/12 — equal split */
.col-span-4  { grid-column: span 4; }  /* 4/12 — third width (3-up cards) */
.col-span-8  { grid-column: span 8; }  /* 8/12 — centered content */
.col-span-12 { grid-column: span 12; } /* full width */
```

### The Bento Grid (portfolio, features)

Inspired by galvanite.io's 6-column bento:

```css
/* Bento grid for portfolio showcase */
.fj-bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 16px;
}

/* Card size variants */
.bento-wide   { grid-column: span 4; grid-row: span 1; }  /* hero card */
.bento-tall   { grid-column: span 2; grid-row: span 2; }  /* tall card */
.bento-square { grid-column: span 2; grid-row: span 1; }  /* standard card */
.bento-full   { grid-column: span 6; grid-row: span 1; }  /* banner card */

/* Mobile: stack all */
@media (max-width: 767px) {
  .fj-bento { grid-template-columns: 1fr; }
  .bento-wide, .bento-tall, .bento-square, .bento-full { grid-column: span 1; grid-row: span 1; }
}
```

### Spacing Scale (8pt system)

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;
--space-9:  80px;
--space-10: 96px;
--space-11: 128px;
--space-12: 160px;
```

---

## 05 · Section-by-Section Design Specs

### Section 01 · HeroSection

**Layout**: Full viewport height (100dvh), asymmetric 7/5 grid on desktop, stacked on mobile.

**Background**: Dark gradient `--fj-gradient-hero`. Optional: subtle noise texture overlay at 3% opacity.

**Content structure**:
```html
<section class="fj-hero" style="min-height: 100dvh; background: var(--fj-gradient-hero);">
  <div class="fj-container">
    <div class="fj-grid-12 align-center" style="min-height: 100dvh;">
      <!-- Left: 7 cols on desktop, full on mobile -->
      <div class="col-span-7">
        <!-- Badge pill -->
        <div class="hero-badge">🏙️ Austin TX · Web Design</div>
        <!-- Hero headline — SPLIT-TYPE animated -->
        <h1 class="heading-hero" style="overflow: hidden;">
          <!-- 2 lines MAX. Lead with the city/outcome, not the service -->
          Austin Websites Built<br>in 7 Days
        </h1>
        <!-- Supporting subtext -->
        <p class="body-large" style="color: var(--fj-text-dim); max-width: 520px;">
          <!-- 1–2 sentences. Problem-aware. Not feature listing. -->
        </p>
        <!-- CTA group -->
        <div class="hero-ctas">
          <a class="btn-primary">Get a Free Quote</a>
          <a class="btn-ghost">See Our Work ↓</a>
        </div>
        <!-- Social proof micro-bar -->
        <div class="hero-social-proof">500+ businesses · ★ 4.9 avg · 7-day delivery</div>
      </div>
      <!-- Right: 5 cols — Runware image slot -->
      <div class="col-span-5">
        <div class="runware-slot hero-image-frame" ...></div>
      </div>
    </div>
  </div>
</section>
```

**Badge pill spec**:
```css
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07);
  color: var(--fj-text-dim); font-size: 13px; font-weight: 500;
  backdrop-filter: blur(8px);
  margin-bottom: 24px;
}
```

**CTA button spec**:
```css
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 8px;
  background: var(--fj-gradient-cta);
  color: #fff; font-weight: 600; font-size: 15px;
  border: none; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(59,130,246,0.35);
}
.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(59,130,246,0.45);
}

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 24px; border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--fj-text-light); font-weight: 500; font-size: 15px;
  transition: border-color 0.2s, background 0.2s;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.06); }
```

**Hero image frame**:
```css
.hero-image-frame {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  /* Subtle floating animation */
  animation: heroFloat 6s ease-in-out infinite;
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
```

**Animations (GSAP on DOMContentLoaded)**:
- Badge: fadeIn + translateY(10px), delay 0.1s
- H1 lines: Split-Type reveal, stagger 0.12s, delay 0.2s
- Subtext: fadeIn + translateY(20px), delay 0.6s
- CTAs: fadeIn + translateY(20px), delay 0.8s
- Image: fadeIn + translateX(30px), delay 0.4s

---

### Section 02 · LogoBar

**Layout**: Full-width dark strip. Single row of client logos, auto-scrolling.

```css
.logo-bar {
  background: #111827; /* slightly lighter than hero */
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 28px 0;
  overflow: hidden;
}

.logo-track {
  display: flex; gap: 48px; align-items: center;
  animation: logoScroll 20s linear infinite;
  width: max-content;
}

@keyframes logoScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); } /* duplicate logos for seamless loop */
}

.logo-item {
  opacity: 0.4; filter: grayscale(1) brightness(3);
  transition: opacity 0.3s;
  height: 28px; width: auto;
}
.logo-item:hover { opacity: 0.8; }
```

**Content**: 8–10 recognizable business logos. Auto-scroll left. Pause on hover.
**Label**: Small text above: "TRUSTED BY 500+ BUSINESSES" in --label style.

**Marquee speed variants** (papertiger pattern):
```css
/* Speed options — pick based on how many logos */
.logo-track--very-slow { animation-duration: 140s; } /* 8+ logos, very relaxed */
.logo-track--slow      { animation-duration: 70s; }  /* 6–8 logos */
.logo-track--fast      { animation-duration: 10s; }  /* 3–4 logos, tight loop */
/* Default for 8 logos: 40s */
```

---

### Section 03 · ProblemStatement (Pain Agitation)

**Background**: Light (#F8F9FC). **Layout**: Centered, max-width 800px.

**Design pattern** (theboathouse editorial style):
```css
.problem-section {
  background: var(--fj-off-white);
  text-align: center;
}

/* Large editorial quote style — make the pain visceral */
.problem-headline {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--fj-text-dark);
  max-width: 760px; margin: 0 auto;
}

/* Pain points: 3-column icon + text */
.pain-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
}

.pain-card {
  text-align: left;
  padding: 28px;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid var(--fj-border);
  transition: box-shadow 0.25s;
}
.pain-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
```

---

### Section 04 · BigThreeTrustBlock

**Background**: Dark (#0A0F1E). **Layout**: 3 massive stats side-by-side.

**Design pattern** (neurons-lab stat display):
```css
.big-three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px; /* gap IS the border — elegant */
  background: rgba(255,255,255,0.08); /* the gap color */
}

.big-three-item {
  background: var(--fj-midnight);
  padding: 56px 48px;
  text-align: center;
}

.stat-number {
  font-family: 'Geist Mono', monospace;
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 700;
  letter-spacing: -0.04em;
  /* Gradient text — the "electric" signature */
  background: var(--fj-gradient-neon);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 16px;
  color: var(--fj-text-dim);
  margin-top: 8px;
  font-weight: 400;
}
```

**Stats content**: "500+ Clients", "7-Day Delivery", "60% Less Cost" — always anchor with numbers.

**Animation**: Count-up animation on scroll using GSAP's `gsap.to({ val: 0 }, { val: 500 })`.

---

### Section 05 · CityContextSection

**Background**: Light (#F8F9FC). **Layout**: 60/40 split — text left, city image right.

```css
.city-context {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 64px;
  align-items: center;
}

.city-image-wrap {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

/* Subtle gradient overlay on image bottom for text legibility if needed */
.city-image-wrap::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%);
}
```

**Image**: Runware city-context slot (landmark, 600×400, FLUX Schnell).
**Content**: Local business count + GDP stat + 1–2 paragraph local context. Industry sectors as pills.

---

### Section 06 · ServiceExplanation

**Background**: White (#FFFFFF). **Layout**: 40/60 — text left, mockup right.

**Visual**: Runware service-mockup slot (800×600) inside a browser chrome frame:
```css
.browser-frame {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.12);
  border: 1px solid #E5E7EB;
}

.browser-toolbar {
  background: #F3F4F6;
  padding: 10px 16px;
  display: flex; align-items: center; gap: 6px;
}

.browser-dot { width: 12px; height: 12px; border-radius: 50%; }
.browser-dot:nth-child(1) { background: #FF5F57; }
.browser-dot:nth-child(2) { background: #FFBD2E; }
.browser-dot:nth-child(3) { background: #28C840; }
```

**Feature list**: 4–5 bullet points with blue checkmarks. Short, outcome-focused.

---

### Section 07 · HowItWorks

**Background**: Dark (#0A0F1E). **Layout**: 3 or 4 steps — numbered, horizontal timeline on desktop.

```css
.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  gap: 0;
}

/* Connecting line between steps */
.process-steps::before {
  content: '';
  position: absolute;
  top: 28px; /* aligns with step number circle */
  left: 16.67%; right: 16.67%; /* spans between first and last step center */
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent);
}

.process-step {
  padding: 0 32px;
  text-align: center;
}

.step-number {
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(59,130,246,0.4);
  background: rgba(59,130,246,0.1);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Geist Mono', monospace;
  font-size: 20px; font-weight: 700;
  color: #60A5FA;
  margin: 0 auto 24px;
}
```

**Steps for web-design**: Brief → Design → Build → Launch. 7-day timeline badge.

---

### Section 08 · PortfolioShowcase

**Background**: Light (#F8F9FC). **Layout**: Bento grid (3 cards — wide + 2 stack).

```css
/* Portfolio bento — 3 cards asymmetric */
.portfolio-bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}

.portfolio-card-wide   { grid-column: 1 / 8;  grid-row: 1 / 3; } /* spans 7 cols, 2 rows */
.portfolio-card-top    { grid-column: 8 / 13; grid-row: 1; }      /* 5 cols, 1 row */
.portfolio-card-bottom { grid-column: 8 / 13; grid-row: 2; }      /* 5 cols, 1 row */

.portfolio-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #fff;
  border: 1px solid var(--fj-border);
  transition: transform 0.3s cubic-bezier(0.65,0,0.35,1), box-shadow 0.3s;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.12);
}

/* Case study overlay (theboathouse 3D flip / digitalflagship hover-reveal) */
.portfolio-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex; flex-direction: column;
  justify-content: flex-end; padding: 28px;
}

.portfolio-card:hover .portfolio-overlay { opacity: 1; }
```

**Card content**: Industry label, website screenshot (Runware), client type tag, "View Project →" CTA.

---

### Section 09 · Testimonials

**Background**: Dark (#0A0F1E). **Layout**: 2–3 testimonial cards or auto-scrolling strip.

```css
.testimonial-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 36px;
  backdrop-filter: blur(8px);
  transition: border-color 0.3s;
}

.testimonial-card:hover {
  border-color: rgba(59,130,246,0.4);
}

.testimonial-quote {
  font-size: 18px; line-height: 1.65;
  color: var(--fj-text-light);
  font-style: italic;
}

.testimonial-star-row {
  color: #FBBF24; /* gold stars */
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.testimonial-author {
  display: flex; align-items: center; gap: 12px;
  margin-top: 24px;
}

.author-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--fj-gradient-cta);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; color: white; font-size: 16px;
}
```

---

### Section 10 · Pricing

**Background**: White (#FFFFFF). **Layout**: 2 or 3 card tiers, center card highlighted.

```css
.pricing-card-featured {
  background: var(--fj-gradient-hero);
  border: 1px solid rgba(59,130,246,0.3);
  box-shadow: 0 24px 64px rgba(59,130,246,0.2);
  transform: scale(1.04); /* slightly larger — draws the eye */
}

/* Price number */
.price-amount {
  font-family: 'Geist Mono', monospace;
  font-size: 48px; font-weight: 700;
  letter-spacing: -0.03em;
}
```

---

### Section 11 · FAQ

**Background**: Light (#F8F9FC). **Layout**: Single column accordion, max-width 760px centered.

```css
.faq-item {
  border-bottom: 1px solid var(--fj-border);
}

.faq-trigger {
  display: flex; justify-content: space-between; align-items: center;
  padding: 24px 0;
  cursor: pointer;
  font-weight: 600; font-size: 17px;
}

/* Chevron rotation — eased toggle (matches madeinevolve pattern) */
.faq-chevron {
  transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1);
}
.faq-item[open] .faq-chevron { transform: rotate(180deg); }

/* Answer panel height animation */
.faq-panel {
  height: 0; overflow: hidden;
  transition: height 0.3s cubic-bezier(0.87, 0, 0.13, 1);
}
```

---

### Section 12 · FinalCTA

**Background**: Dark gradient. **Layout**: Centered, full-width, high contrast.

```css
.final-cta {
  background: linear-gradient(135deg, #0A0F1E 0%, #1E3A5F 50%, #0A0F1E 100%);
  text-align: center;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

/* Ambient glow blob — galvanite-inspired */
.final-cta::before {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
```

**Content**: Urgency headline → sub-line → primary CTA button → phone number.
No navigation links. Single conversion focus.

---

## 06 · Navigation

```css
/* Sticky header — matches all 5 reference sites */
.fj-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(10, 15, 30, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 0 64px;
  height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.3s;
}

/* Add to body: padding-top: 64px to offset sticky nav */

.nav-logo {
  font-family: 'Clash Display', sans-serif;
  font-size: 20px; font-weight: 700;
  color: white;
}

.nav-links {
  display: flex; gap: 36px; list-style: none;
}

.nav-link {
  color: var(--fj-text-dim); font-size: 15px; font-weight: 500;
  position: relative;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover { color: var(--fj-text-light); }

/* Underline reveal on hover — theboathouse signature */
.nav-link::after {
  content: ''; position: absolute;
  bottom: -4px; left: 0;
  width: 100%; height: 1px;
  background: var(--fj-electric);
  transform: scaleX(0); transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.65,0,0.35,1);
}
.nav-link:hover::after { transform: scaleX(1); transform-origin: left; }

.nav-cta {
  padding: 9px 20px; border-radius: 7px;
  background: var(--fj-electric);
  color: white; font-weight: 600; font-size: 14px;
  border: none; cursor: pointer;
  transition: opacity 0.2s;
}
.nav-cta:hover { opacity: 0.85; }
```

---

## 07 · Card Component Library

### Standard Content Card (light sections)
```css
.card {
  background: #fff;
  border: 1px solid var(--fj-border);
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.25s cubic-bezier(0.65,0,0.35,1), box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}
```

### Glass Card (dark sections)
```css
.card-glass {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(8px);
  transition: border-color 0.3s;
}
.card-glass:hover { border-color: rgba(59,130,246,0.35); }
```

### Feature Icon Card
```css
.feature-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
}
```

---

## 08 · Image Treatment

### All images: WebP format, 85% quality
### Browser frame wrapper (for device mockups)
```html
<div class="device-frame">
  <div class="device-notch"></div>
  <img src="..." alt="..." loading="lazy" decoding="async" />
</div>
```
```css
.device-frame {
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,0.12);
  box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
}
```

### Lazy loading: all below-fold images
```html
<img src="..." loading="lazy" decoding="async" width="800" height="600" />
```
**ALWAYS declare width and height** — prevents CLS (Core Web Vitals).

---

## 09 · Runware Model Guidance

| Quality tier | Model | Use for |
|---|---|---|
| Standard commercial | `runware:100@1` (FLUX Schnell) | All 6 page image slots — required |
| High quality (future) | `runware:101@1` (FLUX Pro) | Hero image when budget allows |
| **BANNED** | `runware:97@1` (FLUX Dev) | NON-COMMERCIAL — never use in production |

Runware also hosts video generation models. Future pipeline step: generate a 5–10s looping hero video using video models for premium pages.

---

## 10 · Quality Gate Checklist

Before any page assembly passes to Step 5 (Lighthouse audit), check ALL:

### Typography
- [ ] Heading font (Clash Display) loads via CDN or self-hosted WOFF2
- [ ] Hero headline ≤ 2 lines on 1280px viewport
- [ ] Body text ≥ 16px — no smaller on mobile (prevents iOS zoom)
- [ ] All contrast ratios ≥ 4.5:1 (AA) — use dark text on light, light on dark

### Animation
- [ ] `prefers-reduced-motion` guard wraps ALL GSAP initialisation
- [ ] No animation duration exceeds 900ms
- [ ] Only `transform` and `opacity` are animated (no layout properties)
- [ ] `will-change: transform` set before animation, removed after

### Layout
- [ ] No horizontal scroll at 375px viewport width
- [ ] `width` and `height` declared on all `<img>` tags
- [ ] Sticky nav height (64px) accounted for in `padding-top` on `<body>`
- [ ] Section alternates dark/light correctly per rhythm spec

### Performance
- [ ] All images are `.webp` with `loading="lazy"` (except hero — eager)
- [ ] GSAP loaded from CDN (not bundled) to leverage caching
- [ ] Lenis smooth scroll initialized AFTER `DOMContentLoaded`
- [ ] No unused CSS from copied design patterns

### Content
- [ ] Hero headline contains city name + service outcome
- [ ] ≥ 1 stat with source (population, business count, etc.)
- [ ] Primary CTA appears at: hero, post-portfolio, final section (3× per page)
- [ ] Phone number or calendar booking link in final CTA

---

## 11 · Anti-Patterns — Never Do

These are the most common failures that make pages look generic/cheap:

| Anti-pattern | Instead |
|---|---|
| Generic stock photo (smiling team, handshake) | Runware city landmark or device mockup |
| Gradients using orange/purple (Canva-look) | Only blue gradients per the palette |
| Center-aligned walls of body text | Left-aligned, max-width 680px |
| Bouncing or spinning loading animations | Fade-in with transform only |
| Buttons with border-radius > 12px (pill CTAs) | 8px radius for primary, 100px only for badge pills |
| Font sizes below 16px on mobile | 16px minimum body |
| More than 3 fonts | Clash Display + Inter + Geist Mono only |
| Hero without a number/stat | Always: "500+ businesses", "7-day delivery", "60% less" |
| Accordion with `display: none` toggle | Animated height via GSAP or CSS |
| Multiple competing CTA styles | One primary (blue), one ghost (outline), that's it |
| Neon green as CTA color (cheap) | Blue only for CTAs; neon only for indicators |
| `box-shadow: 0 0 20px #00ff00` glow | Subtle blue-tinted shadows per spec |

---

## 12 · Implementation Order for New Pages

```
1. Set up CSS variables (colors, typography, spacing) — copy from this doc
2. Build nav (sticky, frosted glass)
3. Build Hero section — test Split-Type text reveal
4. Build LogoBar — test auto-scroll
5. Build remaining sections in dark/light rhythm
6. Add GSAP ScrollTrigger reveals to each section
7. Insert Runware image slots with correct dimensions/prompts
8. Run quality gate checklist
9. Run Lighthouse — target: Performance ≥ 90, Accessibility ≥ 95, Best Practices 100, SEO 100
```

---

## 13 · Papertiger Signature Patterns

Source: papertiger.com (Webflow-native, 24-column grid, RightGrotesk font, editorial luxury)

### Rotated card stack (testimonials / client logos)
```css
/* Stack cards with progressive rotation — creates dynamic visual interest */
/* papertiger applies -4deg to -16deg to client card stacks on hover */
.card-stack { position: relative; }
.card-stack .card:nth-child(1) { transform: rotate(-4deg);  z-index: 4; }
.card-stack .card:nth-child(2) { transform: rotate(-8deg);  z-index: 3; }
.card-stack .card:nth-child(3) { transform: rotate(-12deg); z-index: 2; }
.card-stack .card:nth-child(4) { transform: rotate(-16deg); z-index: 1; }

/* On hover, top card elevates */
.card-stack:hover .card:nth-child(1) {
  transform: rotate(0deg) translateY(-16px) scale(1.04);
  z-index: 10;
  transition: transform 0.35s cubic-bezier(0.76, 0, 0.24, 1);
}
```

### Scroll-triggered fade + lift (papertiger [fade] pattern)
```css
/* Applied as data attribute — toggles .revealed class on scroll */
[fade] {
  opacity: 0;
  transform: translateY(5em); /* 5em = ~80px — more dramatic than typical 20–40px */
  transition: opacity 1.2s cubic-bezier(0.76, 0, 0.24, 1),
              transform 1.2s cubic-bezier(0.76, 0, 0.24, 1);
}
[fade].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### Vertical marquee (for sidebar stats or feature lists)
```css
.marquee-vertical {
  height: 300px;
  overflow: hidden;
}
.marquee-vertical-track {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideY 40s linear infinite;
}
@keyframes slideY {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
```

### Named accent color tokens (adapt to FactoryJet brand)
```css
/* papertiger uses 6 named pastel accents — FJ adapts this pattern for industry tags */
:root {
  --accent-tech:        #DBEAFE; /* light blue — technology industry */
  --accent-health:      #D1FAE5; /* light green — health/wellness */
  --accent-food:        #FEF3C7; /* light amber — food & beverage */
  --accent-retail:      #FCE7F3; /* light pink — retail/ecommerce */
  --accent-realestate:  #EDE9FE; /* light purple — real estate */
  --accent-finance:     #E0F2FE; /* sky blue — finance/professional */
}

/* Industry tag pill using named accent */
.industry-tag {
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px; font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.industry-tag--tech        { background: var(--accent-tech);       color: #1D4ED8; }
.industry-tag--health      { background: var(--accent-health);     color: #065F46; }
.industry-tag--food        { background: var(--accent-food);       color: #92400E; }
.industry-tag--retail      { background: var(--accent-retail);     color: #9D174D; }
.industry-tag--realestate  { background: var(--accent-realestate); color: #4C1D95; }
.industry-tag--finance     { background: var(--accent-finance);    color: #0369A1; }
```

---

*Last updated: 2026-05-08 | Sources: neurons-lab.com, galvanite.io, theboathouse.agency, madeinevolve.com, digitalflagship.com, papertiger.com*
