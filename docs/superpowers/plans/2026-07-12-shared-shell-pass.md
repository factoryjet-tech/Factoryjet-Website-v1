# Shared-Shell Performance + Accessibility Pass — Implementation Plan

> **For agentic workers:** this pass ships in verified increments. Verification is NOT a unit-test harness — this repo has none for these components. The gates are `npx tsc --noEmit` (0 errors) + `node scripts/validate-build.mjs` (pass) locally, then PageSpeed Insights on the LIVE Cloudflare URL after each deploy. NEVER run `next dev/build/preview` locally (OOMs the 16GB machine).

**Goal:** Lift blog pages from mobile Perf ~83 (LCP ~4.5s) to 90+, push A11y toward 100 site-wide, without regressing service pages/pillar (already 92-99) or breaking the 118 blog posts.

**Architecture:** Move the blog article out of a monolithic `'use client'` shell and server-render it, leaving only tiny interactive islands. Drop framer-motion from the blog bundle. Fix the three recurring a11y failures (aria-hidden-focus, heading-order, colour-contrast). The contrast fix is genuinely site-wide, so it is measured against PSI and scoped with an explicit brand decision rather than a blind sweep.

**Tech Stack:** Next.js 16 (App Router, `output: 'export'` static export), React 19, Tailwind, TypeScript, Cloudflare Pages.

## Global Constraints

- Background cream `#FAFAF7`; brand accent `#F05A28` (kept for borders/icons/tints).
- Accessible-orange token = `#B23E13` for text-bearing / white-on-orange elements (signed off 2026-07-12). white-on-`#B23E13` = 5.85:1, `#B23E13`-on-cream = 5.66:1, both pass AA.
- Zero em dashes anywhere, including code comments.
- Never run `next dev/build/preview` locally. Verify with tsc + validate-build, then PSI on the deployed URL.
- Deploy: Claude stages with explicit `git add <paths>` (never `-A`), verifies `--cached`, commits with `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`; Bhavesh pushes `origin NextJS`.
- Large text (>=24px, or >=18.66px bold) passes at 3:1, so big orange display stats are NOT contrast failures. Orange-on-dark passes (~5.4:1) and must stay `#F05A28`. Only small orange text on light and white-on-orange buttons fail.

---

## Phase A — Blog shell to server render (COMMIT 1 — DONE, verified tsc+validate-build)

**Files:**
- Create: `src/lib/legacy-pages/Blog/components/ShareButton.tsx` (client island — Web Share / clipboard)
- Create: `src/lib/legacy-pages/Blog/components/BlogHeroImage.tsx` (client island — LCP image + onError fallback + pre-hydration failure catch)
- Rewrite: `src/lib/legacy-pages/Blog/components/ReadingProgress.tsx` (drop framer-motion; rAF-throttled vanilla client component, direct DOM write, zero re-renders)
- Modify: `src/lib/legacy-pages/Blog/components/BlogPostPage.tsx` (remove `'use client'`; server-render hero/image/takeaways/prose/FAQ/author; render the islands; delete `onBack`, `window.scrollTo`, `handleShare`, `handleImageError`, unused `Share2`/`Facebook` imports)

**Why it works:** All 118 posts are static JSX (0 use client hooks), so `post.content` server-renders safely. framer-motion reached the blog bundle ONLY through `ReadingProgress` (verified: SiteHeader/SiteFooter/BlogLeadCapture do not import it), so the vanilla rewrite removes the whole dependency from the blog chunk. The FAQ is already native `<details>` (zero JS). `output: 'export'` pre-renders server components to static HTML at build time.

**Folded-in a11y (same commit, zero-risk):**
- Heading-order (blog shell): `KeyTakeaways` h3->h2, `FAQAccordion` h3->h2, author name h4->h3. Kills the H1->H3 skip. Result order: H1 -> H2 -> (content) -> H2 -> H2 -> H3 -> H3, no downward skips. Visual classes unchanged.
- aria-hidden-focus (`src/components/MobileStickyCTA.tsx`, mounted in ROOT layout so site-wide): `aria-hidden={!show}` -> `inert={!show}` (React 19 native). Removes the WhatsApp link + button from tab order and a11y tree while parked off-screen; interactive again when it slides in.

**Verification (done):** `npx tsc --noEmit` = 0 errors; `node scripts/validate-build.mjs` = passed (574 files, 0 warnings).

---

## Phase A verify-live gate (after Bhavesh pushes commit 1)

Run PSI (mobile + desktop) on: one blog (`/blog/agentic-ai-vs-generative-ai`), one service page (`/services/tiktok-shop-agency`), the pillar (`/agentic-commerce`), the homepage (`/`).

Expected after commit 1:
- Blog mobile Perf: 83 -> 90+ (server HTML + framer-motion gone).
- Blog A11y: heading-order and aria-hidden-focus cleared; colour-contrast STILL flagged (BlogLeadCapture button + "no-pitch" emphasis, blog sidebar/author CTA buttons, MobileStickyCTA button).
- Service/pillar/homepage: aria-hidden-focus cleared; no Perf/SEO/BestPractices/CLS regression.

The PSI accessibility block returns the EXACT remaining contrast selectors per page. That output drives commit 2 (no guessing which of 40+ components render where).

---

## Phase C-contrast — accessible orange (COMMIT 2 — PENDING PSI + brand-scope decision)

**Blast radius (from pre-flight audit):** `#F05A28` appears 1,478 times across 185 app files, 40 components, 14 lib files. The failure recurs in two modes: (A) white-on-orange in ~78 `bg-[#F05A28] text-white` buttons + ~77 inline `background:'#F05A28'` buttons + 9 page-scoped `.*-cta-btn{background:#F05A28;color:#fff}` CSS files; (B) orange-text-on-light in the small-text subset of ~654 `text-[#F05A28]` + ~135 inline `color:'#F05A28'`.

**Scope decision required from Bhavesh** (darkening every CTA to `#B23E13` is a visible brand shift):
- **Tier 1 (recommended first):** fix only the components/CSS that render on the 4 PSI-tested pages, driven by the actual PSI selectors. Gets all 4 test pages to A11y ~100.
- **Tier 2:** all shared components (HeroInlineForm, ComparisonTable, MobileStickyCTA button, ContactFormModal/ExitIntentLeadForm/LeadFormInline, FinalCTA/FinalCTAUS, the actual homepage set HeroOmnichannel/UsHomeSections/UsHomeInteractive, UsPricingTabs, PricingSection, PlanSelectionModal) + the 9 CSS files. Clears most pages.
- **Tier 3:** Tier 2 + the ~74 per-page inline copies + legacy pricing. Full site.

**Do-not-over-correct guardrails:** leave large orange display text (passes at 3:1); leave orange-on-dark eyebrows (`.fj-eyebrow` is already correct); leave borders/shadows/chart fills/SVG icons as `#F05A28`; hover-only orange states are not PSI-flagged (separate decision).

**Known separate bug (report, do not silently fix):** `bg-[#F05A28]-tint` is an INVALID Tailwind class (ComparisonTable.tsx:166/188, HomepageHero.tsx:58, ContactFormModal else-branch) — renders no background. The FactoryJet-column "tint" emphasis has been silently missing. Fixing it changes the comparison table's appearance, so it needs Bhavesh's eyes.

---

## Phase B — SiteHeader (DEFERRED — measure first, signed off 2026-07-12)

The 1,635-line `'use client'` SiteHeader ships on every page, but service pages already hit 92-99 WITH it, so it is not the blog blocker. Only revisit if, after commit 1, blogs still miss mobile Perf 90+. Options if needed: move static mega-menu markup to server + keep only open/close state client; code-split the mobile menu; extract nav data to a non-client module.
