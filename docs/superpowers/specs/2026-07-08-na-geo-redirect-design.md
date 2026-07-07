# NA geo-redirect — design & runbook (2026-07-08)

**Goal:** US + Canada **human** visitors must never see India-positioned pages — they get the
US equivalent. Search/AI crawlers and every non-NA visitor keep seeing the real India page, so
India rankings and AI citations are preserved (India is the best-converting cluster).

## Decision

Implemented as a **Cloudflare Pages Function** (`functions/_middleware.js`), not dashboard
Redirect Rules.

Why the Function won over dashboard rules:
- **Crawler safety is auditable and in-repo.** GPTBot/PerplexityBot/ClaudeBot/OAI-SearchBot/
  Googlebot crawl from US IPs. The Function pins an explicit crawler allowlist (mirrors
  `public/robots.txt`), guaranteeing crawlers are never redirected. The dashboard's
  `cf.client.bot` is opaque and its coverage of AI crawlers is unverifiable — an unacceptable
  risk to the "get cited by AI / win AI Overviews" goal.
- **Precise US targets** per India cluster (better UX → more US leads), vs. dashboard rules
  forcing target consolidation to stay under the free-plan ~5-rule headroom.
- **Version-controlled + unit-tested** (`scripts/test-geo-redirect.mjs`), matching the repo's
  validate-build discipline.

The existing dashboard Redirect Rules (`GEO: GB → /uk`, `GEO: Gulf → /uae`, both homepage-only)
are **untouched** and compose fine — the Function only acts on India-cluster paths.

## Behavior

For each request the Function reads `cf-ipcountry` + `user-agent` and decides (pure function
`decideNaRedirect`):

1. Country not in {US, CA} (or unknown) → **serve normally** (fail open).
2. User-agent is a known crawler → **serve normally** (protects indexing + AI citation).
3. Path is an India-cluster page → **302** to the mapped US target (query string preserved).
4. Otherwise → serve normally.

Any thrown error also fails open — geo logic must never 500 a page.

**Caching (critical):** India-cluster responses are country/UA-dependent, so the Function marks
them `Cache-Control: private, no-store` (adds `x-fj-geo-redirect: india-served`). Without this, an
exempt crawler's 200 from a US IP would populate the US edge cache and be served to the next US
human *without the Function running* — silently defeating the redirect. Non-India paths are
untouched and keep normal edge caching. Free-plan-compatible (no custom cache-key needed).

## India → US redirect map

| India path (source) | US target |
|---|---|
| `/web-design`, `/web-design/*` (hub + 22 cities) | `/services/web-design` |
| `/services/ecommerce-development/*` (13 cities; **not** the bare hub) | `/services/ecommerce-development` |
| `/seo`, `/seo/*` (hub + cities + disciplines) | `/services/seo` |
| `/services/ai-agent-development`, `/services/ai-agent-development/*` | `/services/ai-agents` |
| `/ai-seo` | `/services/ai-seo` |
| `/shopify-development` | `/services/shopify-development` |
| `/wordpress-development` | `/services/wordpress-development` |
| `/n8n-automation` | `/services/ai-workflow-automation` |
| `/whatsapp-chatbot` | `/services/ai-chatbot-development` |

Scope derived from the 66 `locale="in"` pages in `src/app`. **When a new India page is added,
add it here + to `INDIA_TO_US_RULES` in `functions/_middleware.js` + a case in the test.**

## Verification

- **Pre-deploy (done):** `npm run test:geo` — 33 cases across geo × crawler × path, incl.
  no-loop (US twins/hub not matched) and `/api` passthrough. Also wired into `prebuild` and
  `pages:build`, so a broken map fails the build.
- **Post-deploy** (Cloudflare sets `cf-ipcountry`, which can't be spoofed via curl header):
  - From **anywhere incl. India — proves the Function is deployed + running**:
    `curl -sI "https://factoryjet.com/web-design/mumbai?cb=$RANDOM"` → **200** with headers
    `x-fj-geo-redirect: india-served` and `cache-control: private, no-store` (and
    `cf-cache-status: DYNAMIC/BYPASS`, not HIT). If those headers are ABSENT, the Function is
    not live (not pushed/not deployed) — do not trust any other result.
  - From a **genuine US exit node** (confirm the VPN is US first: the `cf-ray` suffix should be a
    US airport code like `SJC`/`IAD`/`DFW`/`LAX`, NOT `BLR`) — proves the redirect:
    `curl -sI "https://factoryjet.com/web-design/mumbai"` → **302**, `Location: …/services/web-design`,
    `x-fj-geo-redirect: na-to-us`.
  - From a **US exit node as a crawler** (proves the exemption — the critical check):
    `curl -sI -A "Googlebot" "https://factoryjet.com/web-design/mumbai"` → **200**, header
    `x-fj-geo-redirect: india-served` (served, not redirected).

  Note: an unspoofable `cf-ipcountry` means the redirect path can only be exercised from a real
  US/CA IP. The decision logic itself is fully covered by `npm run test:geo`.

## Rollback

Delete `functions/_middleware.js` and redeploy. No other file depends on it at runtime
(the test + package scripts are inert without it, but remove the `prebuild`/`pages:build`
`test:geo` chain if the file is gone).

## Future / notes

- **Invocation cost:** the root `_middleware` runs on every request. At current traffic
  (~16 sessions/day) this is negligible (free tier: 100k/day). If traffic grows ~1000×, scope
  it with a `_routes.json` include-list of India paths to cut invocations.
- **Residual gaps (accepted):** VPN users geolocate to their exit node; a human spoofing a
  crawler UA sees India content. Both unavoidable and low-impact.
- `302` (not 301) is deliberate — temporary, transfers no ranking signal, keeps the India URL
  canonical for crawlers.
