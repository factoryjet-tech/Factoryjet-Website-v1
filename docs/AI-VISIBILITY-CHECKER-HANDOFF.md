# AI Visibility Checker — deploy & handoff (2026-07-23)

Everything is built and verified. This is what remains to take it live: **you deploy
SIS to Hetzner (with the partner-API files I added), I push the FactoryJet side.**

Verification already green on the FactoryJet side: `tsc --noEmit` 0 errors,
`validate-build` passed (582 files), geo-redirect test passed.

---

## Part 1 — SIS (you deploy to Hetzner, Plan 4)

### Files I authored in `seen-in-search-app` (review, then include in your deploy)
```
app/layout.tsx                              NEW  (placeholder root layout — replace w/ Plan 2a shell later)
app/page.tsx                                NEW  (placeholder landing for the health check)
app/api/health/route.ts                     NEW  ({ ok:true } liveness probe)
app/api/partner/scans/route.ts              NEW  POST — create scan + lead + enqueue
app/api/partner/scans/[slug]/route.ts       NEW  GET  — status/progress + full result
lib/partner-auth.ts                         NEW  x-partner-key constant-time check (fails closed)
lib/scan/store.ts                           EDIT getScanResult() + id in findRecentDoneScan()
lib/env.ts                                  EDIT PARTNER_API_KEY added to schema
```
Type-checks clean (`tsc --noEmit` in `app/` → 0 errors). Reuses the existing scan
pipeline untouched (honors the "one grader" rule). The two `app/layout.tsx` +
`app/page.tsx` are placeholders so `next build` succeeds now — replace with the
Plan 2a "Signal on Ink" shell when it lands; the partner routes don't depend on them.

### Env vars to set on the box (docker-compose / Hetzner env)
```
DATABASE_URL=postgres://…            # SIS's own Postgres (Plan 4)
DATAFORSEO_LOGIN=…                   # SIS's OWN DataForSEO creds (separate from Rigel)
DATAFORSEO_PASSWORD=…
ANTHROPIC_API_KEY=…                  # Claude reasoning (defaults already use Haiku for the cheap pass)
PARTNER_API_KEY=<generate>           # see below — MUST match Cloudflare's SIS_PARTNER_KEY
SCAN_DAILY_CAP=25                    # hard money ceiling
NODE_ENV=production
```
Generate the shared partner key (run once, use the same value both places):
```bash
openssl rand -hex 32
```

### Endpoints once live (behind `app.seeninsearch.com`)
- `GET  /api/health` → `{ ok: true }`
- `POST /api/partner/scans` (header `x-partner-key`) → `{ slug, status, cached }`
- `GET  /api/partner/scans/:slug` (header `x-partner-key`) → status, then full result when done

---

## Part 2 — FactoryJet (built; you set env + push)

### Cloudflare Pages → Settings → Environment Variables (Production + Preview)
```
SIS_PARTNER_KEY=<same value as SIS PARTNER_API_KEY>
SIS_API_BASE=https://app.seeninsearch.com
```
**Also confirm `RESEND_API_KEY` is still set** — that's what emails lead alerts to you
(`functions/api/notify-lead.js`). If it's ever unset, leads save to Firestore but no
email arrives (this was on the suspect list in the original "no leads" diagnosis).

### Commit + push (explicit adds, per your workflow)
```bash
cd /Users/bhaveshbarot/FactoryJet/website
git add \
  functions/api/ai-scan/index.js \
  functions/api/ai-scan/status.js \
  src/app/ai-visibility-checker/page.tsx \
  src/app/ai-visibility-checker/ai-visibility-checker.css \
  src/components/ai-visibility/types.ts \
  src/components/ai-visibility/CheckerTool.tsx \
  src/components/ai-visibility/ScoreReport.tsx \
  src/components/ai-visibility/AiVisibilityCtaBand.tsx \
  src/app/services/ai-seo/page.tsx \
  src/data/usFooterColumns.ts \
  src/app/sitemap-pages/sitemap.ts \
  scripts/validate-build.mjs \
  src/app/page.tsx \
  src/app/agentic-commerce/page.tsx \
  src/components/v2/SiteHeader.tsx \
  docs/superpowers/specs/2026-07-23-ai-visibility-lead-magnet-design.md \
  docs/AI-VISIBILITY-CHECKER-HANDOFF.md
git diff --cached --name-only    # verify exactly these 17 paths, nothing else
git commit -m "$(cat <<'EOF'
Add AI Visibility Checker lead magnet (/ai-visibility-checker)

Free gated tool: 4-field capture -> lead (via notify-lead) -> Seen-in-Search
partner scan across ChatGPT/Perplexity/Google AI Overviews -> inline branded
report. Footer + AI-SEO page CTAs, sitemap, FAQ/schema. SIS partner API and
deploy handled separately (docs/AI-VISIBILITY-CHECKER-HANDOFF.md).

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
git push origin NextJS
```
Cloudflare auto-builds (~90s). The tool degrades gracefully until SIS is live:
without `SIS_PARTNER_KEY` the gate still captures the lead and shows "report on its
way", so pushing before SIS is up is safe.

---

## Part 3 — DNS
Cloudflare DNS: `app.seeninsearch.com` → `95.216.140.168`, **DNS-only (grey cloud)**
so there's no 100s proxy cap on the scan calls (matches how `app.factoryjet.com` is set).

## Part 4 — Post-deploy verification (do in order)
1. `curl https://app.seeninsearch.com/api/health` → `{"ok":true}`
2. Set the two Cloudflare env vars, redeploy FactoryJet (or it picks up on next push).
3. On `factoryjet.com/ai-visibility-checker`, run a real check (use a real domain).
   Confirm: (a) the lead email hits you, (b) live progress shows, (c) the report renders.
4. Read the DataForSEO `cost` field for that scan (DFS dashboard) → confirms real
   per-scan cost vs the ~$0.25-0.40 estimate. Budget ~$300/mo at 25/day.

## Part 5 — Optional next (not blocking launch)
- More CTA placements: homepage, `/agentic-commerce`, GEO blog posts (drop in
  `<AiVisibilityCtaBand/>` — already reusable).
- Header nav entry under "AI Services" (footer link is already site-wide).
- Custom domain `seeninsearch.com` for the report's "track over time" cross-sell link.
- Email the finished report as a PDF/link (v2).
