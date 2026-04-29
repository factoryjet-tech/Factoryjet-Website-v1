# FactoryJet Programmatic SEO Pipeline — CHANGELOG

This file tracks every patch applied to the factoryjet.com website repository as part of the programmatic SEO pipeline rollout. The pipeline itself lives in `pipeline/` (this directory). Foundation patches that prepared the website to host pipeline-generated content are recorded here for traceability.

**Convention:** every entry is keyed by PR number, dated by merge date, and contains a one-paragraph description plus the exact problem it solved. Future maintainers (human or AI) reading this file should be able to answer "why does X exist?" without git archaeology.

---

## Foundation phase — Apr 28, 2026

The website was prepared to host programmatic SEO output through 5 PRs. Each shipped independently, was production-verified, and is now live.

### PR #8 — Foundation Patch #1: Firebase env-var migration
**Merge commit:** `50e7ce5` · **Date:** Apr 28, 2026

Migrated Firebase configuration from hardcoded literals in `src/firebase.ts` to `process.env` reads (`NEXT_PUBLIC_FIREBASE_*`). Added `.env.example` documenting all required and planned environment variables. Added dev-mode warning if any variable is missing at module load.

**Why this exists:** the programmatic SEO pipeline will use Firebase Admin SDK (server-side, service-account credentials) to write keyword research data, opportunity scores, city enrichment, and page state. The existing client SDK setup with hardcoded credentials made it unsafe to add admin SDK alongside. This patch establishes the environment-variable convention so client and admin SDK can coexist cleanly.

**Note:** the original hardcoded keys remain in git history and are considered compromised. Hygiene: HTTP referrer restrictions applied at Google Cloud Console level on Apr 28, 2026; full key rotation deferred.

### PR #9 — Foundation Patch #2: Bespoke UK city filter
**Merge commit:** `7664924` · **Date:** Apr 28, 2026

Added `BESPOKE_UK_CITY_SLUGS` constant in `src/data/uk/index.ts` listing the 5 UK cities (manchester, birmingham, leeds, liverpool, sheffield) with bespoke pages at `src/app/uk/{slug}/`. Added `dynamicCities` helper that filters `cities` by that constant. Switched `generateStaticParams` in `[city]`, `[city]/[service]`, and `[city]/[service]/[platform]` routes to use `dynamicCities`.

**Why this exists:** Next.js was generating duplicate page artifacts for the 5 bespoke cities — once via the static segment (correct) and once via the dynamic `[city]` route (wasteful). Static segments win at routing, but the dynamic builds were polluting the build output and would have caused programmatic SEO pipeline pages to silently overlap with bespoke routes. Build counts dropped from 20 → 15 dynamic cities, 120 → 90 city×service paths, 300 → 225 platform paths.

**To graduate a city to bespoke:** add the slug to `BESPOKE_UK_CITY_SLUGS` AND create `src/app/uk/{slug}/page.tsx`. To demote: reverse both.

### PR #10 — Foundation Patches #3 + #3.1: Native sitemap-index + robots
**Merge commit:** `e7f17d8` · **Date:** Apr 28, 2026

Replaced two parallel sitemap systems with a single native Next.js sitemap-index. Created `src/app/sitemap.xml/route.ts` (route handler, since `MetadataRoute.Sitemap` cannot emit `<sitemapindex>`) listing 5 sections: pages, uk, us, uae, blog. Each section is a `src/app/sitemap-{section}/sitemap.ts` that enumerates routes the build emits. Added `src/app/robots.ts` with explicit AI crawler allowlist. Added 301 redirects from old `/uk/sitemap-*.xml` URLs at both Next.js config and Cloudflare `_redirects` level.

Patch #3.1 (squashed in) filtered bespoke cities out of city×service and city×service×platform iterations to avoid 30 known-404 URLs in the sitemap. Removed orphan `scripts/generateSitemap.js`. Added 5 redirect rules mapping conventional `/sitemap-{section}.xml` paths to actual emission paths.

**Why this exists:** the previous sitemap system had two parallel implementations (a prebuild script that skipped dynamic routes, and three UK-specific route handlers). Together they left 120+ pages absent from search-engine submissions. The pipeline produces new pages frequently; the sitemap had to auto-discover them.

**Final URL coverage:** 35 pages + 336 UK + 17 US + 1 UAE + 38 blog = 427 URLs across 5 section sitemaps.

### PR #11 — Foundation Patches #3.5 + #3.6: Per-URL lastmod + robots consolidation
**Merge commit:** `5893a68` · **Date:** Apr 28, 2026

**Patch #3.5:** Created `src/lib/sitemap-helpers.ts` with `getFileLastMod()` and `getMaxLastMod()` functions that derive lastmod from git commit timestamps (filesystem mtime fallback). Updated all 5 per-section sitemaps to use per-URL lastmod instead of build-time uniform lastmod.

**Why this exists:** Google has stated it ignores `changefreq` and `priority` but uses `lastmod` as a crawl-priority signal — provided the value is trustworthy. Uniform lastmod is discounted; per-file git timestamps tell Google "this specific page was last meaningfully changed on date X."

**Patch #3.6:** Consolidated robots.txt into a single dynamic source. Production verification surfaced that `/public/robots.txt` was shadowing `src/app/robots.ts`. The static file had useful legacy content (path disallows, AI training bot blocks) but was missing the AI retrieval allowlist Patch #3 intended. Merged: legacy ecommerce/CMS path hygiene preserved, AI training bot blocks preserved (CCBot, Cohere-ai, Bytespider, Amazonbot, Diffbot, Omgilibot, Timpibot, ImagesiftBot, img2dataset), AI retrieval allowlist added (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent). Static `/public/robots.txt` deleted.

### PR #12 — Foundation Patch #3.7: Remove Pages Function shadowing dynamic robots
**Merge commit:** `e02adf0` · **Date:** Apr 28, 2026

Deleted `functions/robots.txt.ts` — a pre-existing Cloudflare Pages Function (88 lines, original commit `9ec51f6` "seo updated") that intercepted `/robots.txt` at the Cloudflare edge before the static asset emitted by `src/app/robots.ts` could be served.

**Why this exists:** Cloudflare Pages Functions take edge precedence over static assets. The Function was invisible to all foundation recon because nobody inspected `functions/`. Production was serving the Function's older payload (no GPTBot/ClaudeBot/anthropic-ai/PerplexityBot allows) instead of Patch #3.6's full ruleset. Cache purge had no effect — the Function executed fresh on every miss.

With this Function removed, Cloudflare Pages falls through to `out/robots.txt` for the route, restoring `src/app/robots.ts` as the single source of truth.

**Lesson recorded:** future recon prompts should check `functions/`, `_workers/`, `wrangler.toml` routing, and `_routes.json` as standard.

---

## Working pattern (established Apr 28, 2026)

Every patch in this pipeline follows this discipline:

1. **Step 0 — Pre-flight:** clean tree, sync to `origin/NextJS`, peek upstream commits for conflicts on target files. STOP if anything dirty or unexpected.
2. **Recon before edit:** print contents of every file to be modified, every data source consumed, every config that affects the change. STOP if the recon surfaces something that contradicts the plan.
3. **Atomic edits:** one logical change per commit, focused scope.
4. **Verification gates:** typecheck + build pass; math-checked URL/output counts where applicable; production-equivalent build artifact inspected.
5. **Honest anomaly section:** every report flags surprises. No silent compromises.
6. **No push until reviewed locally.** PR ceremony only after the local diff is sane.

This pattern is what made 5 production-grade patches ship in one afternoon with zero rollbacks. Future patches must maintain this rigor — automated PRs are only safe to merge when the verification gates are real.

---

## Open follow-ups (parked, will be addressed in future patches)

1. **Firebase key full rotation + Firestore Security Rules audit.** HTTP referrer restrictions applied Apr 28, 2026; full rotation deferred to a future session. Firestore rules audit pending.
2. **`BESPOKE_UK_CITY_SLUGS` duplication.** Constant exists in both `src/data/uk/index.ts` (Patch #2 export) and `src/app/sitemap-uk/sitemap.ts` (local helper from Patch #3 days). 3-line cleanup, batched into next foundation-touching patch.
3. **`.env.local.example` (older, partial doc) consolidation with `.env.example`.** Cosmetic.
4. **Geo-clarity backlog:** add `/in` alias mirroring root, Cloudflare Worker geo-redirect for first-time visitors with cookie persistence, audit `hreflang` declarations across all 4 country pages. Deferred to ~week 2.
5. **Image sitemap.** ~600+ images across the site; `<image:image>` extension would help Google Images discovery. Low priority.

---

*Foundation phase complete. Pipeline build phase begins with brand reference audit (Apr 28, 2026 evening).*

---

## Patch #5 — Brand reference audit (foundation for DESIGN.md authoring)

Adds `pipeline/scripts/brand_audit.py`, a Playwright + BeautifulSoup audit that visits 20 reference sites (15 taste-driven + 5 white-bg gold standards: Stripe, Linear, Vercel, Resend, Mintlify) and captures up to 5 pages each (homepage, service, pricing, feature/case-study, blog). Per-page output: full-page PNG screenshot + computed-CSS token extraction (colors, typography, spacing, radii, shadows, gradients, CSS variables).

Inputs: `pipeline/scripts/sites.json` (20 sites with optional per-category URL overrides). Inner-page URL discovery via `<nav>/<header>/<footer>/<main>` link parsing, scored against per-category keyword lists with same-domain enforcement. Light mode forced (`color_scheme="light"`); cookie/consent overlays suppressed via injected CSS pre-screenshot.

Outputs (under `pipeline/brand-references/`):
- `{slug}/extracted-tokens.json` — per-page distilled tokens, committed
- `{slug}/screenshots/{category}.png` — full-page captures, gitignored
- `_audit-run.json` — run summary with success/failure counts, committed
- `_run.log` — forensic stdout trail, gitignored

First run (Apr 29, 2026): 70/100 captures in 18m44s, zero `[ERR]` events. 5 sites with all 5 captures (Stripe, Vercel, Resend, Mintlify, mygomseo); 15 with partial captures (graceful skips on missing pricing/portfolio pages); 0 site-level failures. Output feeds white-background `factoryjet.DESIGN.md` synthesis (Step 1 of the 8-step pipeline build path).

Why this exists: the prior `factoryjet.DESIGN.md` was written before the white-bg visual mandate and lacks reference-grounded defense for color, typography, and spacing decisions. Pipeline-generated landing pages need a brand contract whose decisions are defensible by reference rather than opinion.
