# CLAUDE.md — FactoryJet Project Anchor

> **Read this file FIRST at the start of every Claude Code session, before reading or writing any other file.**
> If you find yourself drifting toward generic AI-design patterns mid-session, stop and re-read this file.
> If anything in this file conflicts with another instruction, this file wins unless Bhavesh explicitly overrides.

> **Design system update (05/10/2026):** The canonical design system file is now `DESIGN.md`
> (Google design.md spec format, 0 lint errors, 0 WCAG failures). The old `factoryjet.DESIGN.md`
> is retained for context but DESIGN.md is authoritative going forward. Also read
> `../DESIGN-OVERHAUL-PLAN.md` for the token bridge instructions and migration status tracker.

---

## What this project is

You are working on **factoryjet.com** — an AI Services Company website serving SMBs in the US, UK, UAE, and India.

The current site reads as a "fast B2B web design agency." Your job is to rebuild it so it reads as an **AI-native services company**. The positioning shift is the entire purpose of every change you make.

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, GSAP, Lenis (smooth scroll), Lucide (icons), Cloudflare Pages (deploy).

**Design system:** `DESIGN.md` in this same directory (Google design.md spec format, 0 lint errors). Read it before designing or coding any component. It is the single source of truth. The old `factoryjet.DESIGN.md` is preserved for reference only.

**Overhaul plan:** `../DESIGN-OVERHAUL-PLAN.md` — contains the Phase 0 token bridge code to add to `src/index.css` and `tailwind.config.js`, the component upgrade instructions, and the migration status tracker. Check it before starting any redesign work.

**Repository structure:**
```
/factoryjet
├── CLAUDE.md                    ← this file (read first)
├── factoryjet.DESIGN.md         ← design system v2.0 (read second)
├── /app                         ← Next.js app router
│   ├── /us                      ← US homepage + service pages + city pages
│   ├── /uk                      ← UK homepage + service pages + city pages
│   ├── /uae                     ← UAE homepage + service pages + city pages
│   └── /in                      ← India homepage + service pages + city pages
├── /components
│   ├── /v1                      ← legacy components (do not modify, do not delete)
│   └── /v2                      ← new components (build here)
├── /content                     ← markdown content for pages, glossary, FAQ
├── /public
│   └── /fonts                   ← self-hosted Fraunces + Geist + Geist Mono
└── /styles
    └── globals.css              ← design tokens + base styles
```

---

## The five non-negotiables

These five rules apply to every prompt, every component, every page. If a request would violate any of them, ask Bhavesh before proceeding.

### 1. Light backgrounds dominate. Hero is NEVER dark.
- Default page background: `#FAFAF7` (cream).
- Maximum 2 dark sections per page, both mid-page or near footer. Hero stays light.
- See `factoryjet.DESIGN.md` Section 2 for full colour rules.

### 2. Typography is Clash Display (display) + Inter (body) + Geist Mono (eyebrow/code). Period.
> ⚠️ Typography pivot locked May 5–6 2026. Fraunces and Geist Sans are retired from v2. If you see them in new code, that is a bug.
- No Roboto. No Poppins. No DM Sans. No Manrope. No Plus Jakarta Sans. No Open Sans. No Montserrat.
- Headings, hero, stats, section titles → **Clash Display 700** (Fontshare, weight 700 only).
- Body, navigation, buttons, microcopy → **Inter** (next/font/google).
- Eyebrows, mono labels, code blocks → **Geist Mono** (geist/font/mono).
- Fraunces and Geist Sans remain loaded for v1 page parity — do NOT use them in any v2 component.

### 3. Headlines are confident statements. Italic-emphasis pattern is DROPPED.
- The Fraunces-italic conviction-word pattern (e.g. "agents that *actually* ship") has been retired.
- Clash Display does not render inline italic gracefully — do not add `<em>` or italic class to heading words.
- Headlines are solid statements in Clash Display 700, no stylistic flourishes.

### 4. Asymmetric grids over symmetric. Left-aligned over centred.
- No symmetric three-column SaaS-template grids as primary layouts.
- Use 60/40, 55/45, 7/5 column splits.
- Hero, section headers, card grids: left-aligned. Centred reserved for footer CTA and modals.

### 5. Anti-AI-slop doctrine, hard-enforced.
Forbidden, in every component, every page, every variant:
- ❌ Gradient text
- ❌ Rainbow gradients (background, border, button)
- ❌ Glowing borders / box-shadow neon glow
- ❌ Particles, floating geometric shapes, abstract orbs
- ❌ Dark hero on the homepage
- ❌ Fraunces or Geist Sans in any v2 component (retired post May 5 pivot)
- ❌ Roboto, Poppins, DM Sans, Manrope, Plus Jakarta Sans in any context
- ❌ Italic-emphasis on heading conviction words (Clash Display does not support this pattern)
- ❌ Spinning counters / count-up-on-scroll number animations
- ❌ Glassmorphism over busy backgrounds
- ❌ Full-bleed video hero backgrounds
- ⚠️ AI-generated photorealistic people in imagery — **BAN LIFTED 2026-08-03 by Bhavesh**, who
  explicitly overrode this after it was raised twice. Rationale: pages of empty rooms read as
  sterile; people make pages feel human. Stock photography was explicitly declined. AI-generated
  photoreal humans and teams ARE now permitted on commerce pages. Do NOT revert this or strip
  those images. Every generated person image must still be reviewed before shipping for hand/face
  artifacts and garbled text, and must not resemble an identifiable real individual.
- ❌ Stock "neural network" / "circuit board" illustrations

If a prompt asks you to add any of the above, push back. Ask Bhavesh to confirm the override before proceeding.

---

## Operating discipline (Bhavesh's documented Claude Code rules)

These rules come from the FactoryJet team's accumulated experience with Claude Code on the UK city pages build. Follow them.

### One task per prompt
- Every prompt builds or modifies exactly one section of one page, OR one isolated component.
- If a prompt contains 4+ tasks, decline and ask for it to be split.
- Multi-task prompts cause partial execution. Single-task prompts are reliable.

### Explicit file paths in every prompt
- Every prompt names the exact file path being created or modified.
- If a path is ambiguous, ask before guessing.

### "DO NOT TOUCH" guards on every refactor
- When modifying existing code, the prompt must list what is forbidden to change (layout, styling, animations, other files).
- If the prompt does not contain DO NOT TOUCH guards, ask Bhavesh whether the surrounding code should be preserved.

### Static components first, client components only when justified
- Default to static (no `"use client"`, no `useState`, no client-side GSAP).
- Add `"use client"` only when interactivity, state, or browser API access is required.
- Static components are far more reliable in Claude Code sessions and easier to debug.

### When to call /exit and restart
- If your output starts drifting toward generic patterns mid-session.
- If you find yourself adding Inter, gradient text, or other forbidden treatments without being asked to.
- If your responses are getting shorter, lazier, or hallucinating file paths.
- Restart with `claude --clear`, re-read this file and `factoryjet.DESIGN.md`, then continue.

---

## What to build, in what order

### Phase 2A — Component library (Weeks 1-2) ← CURRENT PHASE
Build the 15 components listed in `factoryjet.DESIGN.md` Section 12. Build them in `/components/v2/`. Test each in isolation before wiring into pages.

### Phase 2B — Homepage rebuild (Weeks 3-4)
Build Variant B homepage at `/app/us/page.tsx` using the locked copy and the Phase 2A component library. Old homepage moves to `/app/us-legacy/page.tsx`.

### Phase 2C — Service pages + sub-brands (Weeks 5-6)
Build the two flagship service pages (AI Agent Development, AI SEO), three core service pages, and three sub-brand pages (JetAgent, JetSDR, JetDocs).

### Phase 2D — Industries + geography rollout (Weeks 7-8)
Build six industry pages, then port the new homepage and service pages to `/uk`, `/uae`, `/in` with geography-specific overrides.

---

## Master Context block — paste this at the top of every Claude Code prompt

When Bhavesh writes a Claude Code prompt for any FactoryJet work, this block goes at the top:

```
PROJECT: FactoryJet — AI Services Company website rebuild
CURRENT PHASE: [2A | 2B | 2C | 2D]
DESIGN SYSTEM: Read /factoryjet/factoryjet.DESIGN.md before writing any code
BRAND ANCHOR: Light backgrounds, Clash Display + Inter + Geist Mono typography, confident plain headlines, asymmetric grids, no AI slop

NON-NEGOTIABLES:
- Background: #FAFAF7 (cream). Hero is NEVER dark.
- Typography: Clash Display 700 (display/headings) + Inter (body) + Geist Mono (eyebrows/code). NO Fraunces, Geist Sans, Roboto, Poppins, DM Sans, Manrope.
- Headlines are solid statements in Clash Display. NO italic-emphasis pattern (retired May 2026).
- Asymmetric grids, left-aligned content
- No gradient text, no glow, no particles, no spinning counters

THIS PROMPT'S TASK:
[single, surgical task description]

FILE PATH:
[exact path to create or modify]

DO NOT TOUCH:
[explicit list of files / classes / animations that are forbidden to modify]

OUTPUT EXPECTATION:
[what success looks like — usually "render cleanly with Lighthouse 95+"]
```

---

## When you're stuck or uncertain

- Re-read `factoryjet.DESIGN.md`. Most decisions are spec'd there.
- If the spec doesn't cover the case, ask Bhavesh. Do NOT guess and ship.
- Reference sites for inspiration: stripe.com, linear.app, vercel.com, mercury.com, anthropic.com, harvey.ai, pentagram.com.
- Anti-references (do NOT pattern-match to these): default Lovable / Bolt / v0 templates, generic SaaS landing pages, dark-mode-with-neon AI startup sites.

---

## Skills available in this Claude Code environment

The following skills are installed and should be used when relevant:

- **frontend-design** — for component-level design execution and visual polish
- **gsap-router** — for GSAP scroll-triggered animations (use sparingly, per motion section of design system)
- **ui-ux-pro-max** — for layout, accessibility, and interaction patterns
- **doc-coauthoring** — for content/copy work on glossary, FAQ, blog articles

### Stitch Skills (`.agents/skills/stitch-*/`)

These four skills connect to Google Stitch (AI UI generation via Gemini 2.5).
Requires the Stitch MCP to be connected — see `../STITCH-SETUP.md`.

- **stitch-react-components** — Converts Stitch-generated HTML → modular Next.js TSX.
  Use this after every `generate_screen` call. Extracts Tailwind config, maps to FactoryJet
  tokens, outputs TypeScript interfaces + custom hooks. **This is the primary output skill.**

- **stitch-design-md** — Analyzes a Stitch project and synthesizes a DESIGN.md from it.
  Use when capturing a client's design back into a machine-readable spec.

- **stitch-enhance-prompt** — Rewrites a rough page description into a Stitch-optimized
  prompt. Run before `generate_screen_from_text` for better first-shot results.

- **stitch-remotion** — Converts Stitch screens into Remotion video compositions.
  Use for social media ads, promo videos, and animated brand content.

### Page generation workflow (Stitch + Claude Code)

```
1. stitch-enhance-prompt  → refine the page brief into a precise Stitch prompt
2. generate_screen_from_text (via Stitch MCP) → Gemini 2.5 generates HTML
3. create_design_system + apply (Stitch MCP) → enforce FactoryJet brand tokens
4. generate_variants (3 options) → pick the strongest layout
5. stitch-react-components skill → convert to Next.js TSX
6. npx @google/design.md lint DESIGN.md → verify token compliance
```

When using a skill, follow its instructions but defer to `DESIGN.md` and this file when there is conflict.

---

## The five-second test (the only test that matters)

Open the page you just built in incognito. Read for 5 seconds.

The reader should think: **"This is an AI services company that obviously knows what it's doing."**

Not: "This is a fast web design agency."
Not: "This is another AI startup with a dark hero and a glowing gradient."
Not: "This was generated by Claude Code in 30 minutes."

If your work doesn't pass this test, revise before committing.

---

**Project:** FactoryJet Technologies
**Lead:** Bhavesh Bhatt, Founder & CEO
**Design system version:** 2.0
**This file last updated:** May 8 2026 — typography pivot (Clash Display + Inter + Geist Mono) backported from factoryjet.DESIGN.md v2.0
