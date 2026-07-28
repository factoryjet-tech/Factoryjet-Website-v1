# AI Visibility Checker — lead magnet design (2026-07-23)

**Owner:** Bhavesh Barot. **Built by:** Claude (co-founder mode).
**Goal:** turn factoryjet.com traffic into qualified leads with a free, gated
"AI Visibility Check" tool, powered by the existing Seen in Search (SIS) scan
engine.

## 1. Why

Diagnosis (2026-07-23): factoryjet.com's conversion path works fine; the
"form abandonment" alarm is a tracking artifact (`form_start` fires on field
focus). The real gap is qualified traffic and a reason to convert. A free
AI-visibility checker (a) gives the not-ready majority a yes-able action,
(b) captures a *hard-qualified* lead (Full Name + Business Email + Phone +
Company) before spending a cent, and (c) is itself an SEO asset that ranks for
"AI visibility checker / does ChatGPT recommend my business / free AI SEO audit".

## 2. Positioning of the flow

1. Visitor lands on `factoryjet.com/ai-visibility-checker`.
2. Enters **Website URL + Full Name + Business Email + Phone + Company**.
3. On submit, FactoryJet **captures the lead first** (Firestore `contactus` +
   Resend alert to Bhavesh + GA4/Ads `lead_converted`, source
   `ai_visibility_checker`). No lead, no scan, no spend.
4. Only then does FactoryJet call SIS to run the scan (6 buyer questions × 3
   engines: ChatGPT, Perplexity, Google AI Overviews).
5. Browser shows live per-engine progress (~60-85s), polling by slug through a
   same-origin proxy.
6. Report renders **inline, FactoryJet-branded**, ending in a "we'll fix this
   for you" quote CTA + a soft "run the full scan on Seen in Search" cross-sell.
7. The report link is also emailed to the lead (follow-up hook).

## 3. Architecture (Path A — the real SIS service runs the scan)

```
Browser (factoryjet.com/ai-visibility-checker, 'use client')
   │  POST /api/ai-scan  { name,email,mobile,company,website }
   ▼
FactoryJet Cloudflare Pages Function  functions/api/ai-scan.js
   │  1. captureLead()  → Firestore contactus + Resend (shared _lib)
   │  2. POST https://app.seeninsearch.com/api/partner/scans
   │       headers: x-partner-key: <SIS_PARTNER_KEY>
   │       body: { brand: company, domain: website, name,email,mobile,company,
   │               source:"ai_visibility_checker" }
   │  3. returns { slug }
   ▼
SIS (app.seeninsearch.com, Next 16 on Hetzner, DNS-only / no CF 100s cap)
   POST /api/partner/scans → createScan + Lead + enqueueScan → { slug, status }
   worker → runScan(slug) → 6Q × 3 engines → score → findings → status "done"
   GET  /api/partner/scans/[slug] → status/progress, and full result when done
   ▲
FactoryJet poll proxy  functions/api/ai-scan/status.js  (GET ?slug=)
   forwards to SIS with the partner key (browser never sees SIS or the key)
```

Why the proxy: keeps `SIS_PARTNER_KEY` server-side, keeps the browser
same-origin (no CORS), and lets us shape/trim the JSON the browser receives.

## 4. SIS partner API contract (the interface both sides build to)

New, in `seen-in-search-app`. Node runtime, force-dynamic. Auth by a shared
secret header `x-partner-key` compared to `process.env.PARTNER_API_KEY`.

### `POST /api/partner/scans`
Request:
```json
{ "brand": "Acme Payroll", "domain": "acme.com",
  "name": "Jane Doe", "email": "jane@acme.com", "mobile": "+1 555 0100",
  "company": "Acme Payroll", "source": "ai_visibility_checker" }
```
Behavior:
- 401 if `x-partner-key` missing/wrong.
- 400 if `brand`/`domain`/`name`/`email`/`mobile`/`company` missing, or domain
  unparseable. `domain` is normalized to a bare host (strip scheme/path/`www.`).
- 429 if `underDailyCap()` is false (SCAN_DAILY_CAP=25).
- 6h per-domain dedupe via `findRecentDoneScan(domain, 6h)`: if a fresh done
  scan exists, still record the `Lead` (attached to that scan) and return it as
  `cached:true` (no new spend).
- Else `createScan` → create `Lead{name,email,mobile,company,source,scanId}` →
  `enqueueScan(slug)`.
Response `200`:
```json
{ "slug": "acme", "status": "pending", "cached": false }
```

### `GET /api/partner/scans/[slug]`
- 401 if `x-partner-key` missing/wrong.
- 404 if no such slug.
- Returns status always; the full result only when `status === "done"`:
```json
{ "slug":"acme", "status":"done", "progress":{"chatgpt":"done", ...},
  "score":72, "grade":"Contender", "subScores":{...}, "engineScores":{...},
  "competitors":[...], "citations":[...], "meta":{...},
  "questions":[{ "text":"...", "answer":"...", "mentioned":true, "rank":2,
                 "sentiment":"positive", "engine":"chatgpt" }...],
  "findings":[{ "title":"...", "detail":"...", "impact":"high", "effort":"low" }...] }
```
Statuses: `pending` → `running` → `done` | `failed` (with `error`).

Supporting change: add `getScanResult(slug)` to `lib/scan/store.ts` returning the
Scan row plus its `questions` (ordered) and `findings` (ordered) relations.

Minimal shell so `next build` succeeds (SIS has no routes yet): a placeholder
root `app/layout.tsx` + `app/api/health/route.ts` (`{ ok: true }` for the deploy
probe). Both are clearly marked to be replaced by the Plan 2a "Signal on Ink"
shell when it lands.

## 5. FactoryJet components (in `website`, static-export + CF Functions)

- `functions/_lib/captureLead.js` — shared: Firestore REST write + Resend email,
  factored out of the existing `functions/api/notify-lead.js` (which keeps
  working, now importing the shared lib). No behavior change to notify-lead.
- `functions/api/ai-scan.js` — POST: `captureLead()` then call SIS partner API.
- `functions/api/ai-scan/status.js` — GET `?slug=`: proxy to SIS result endpoint.
- `src/app/ai-visibility-checker/page.tsx` — server component: metadata, schema,
  E-E-A-T, FAQ, answer-first block; renders the client tool island.
- `src/components/ai-visibility/CheckerTool.tsx` — `'use client'`: the gate form,
  submit → `/api/ai-scan` → slug → poll `/api/ai-scan/status` → progress → report.
- `src/components/ai-visibility/ScoreReport.tsx` — FactoryJet-branded report.
- Conversion: on successful capture fire once
  `pushToDataLayer({event:'lead_converted', region:'us',
  lead_source:'ai_visibility_checker', lead_id:<slug>})`, sessionStorage-guarded.
  No `/thank-you` redirect (we stay on page); GTM's existing `CE - lead_converted`
  trigger fires GA4 `generate_lead` + the US Ads conversion.

## 6. Cost + abuse controls

- Per report ≈ $0.25-0.40 (18 DataForSEO calls + 3 Claude passes on Haiku).
- Daily cap 25 (`SCAN_DAILY_CAP=25`) = hard ceiling ≈ $6-10/day, budget ~$300/mo.
- Gate-before-scan (no spend without a lead), 6h per-domain dedupe, SIS IP
  rate-limit, honeypot on the form. Confirm exact cost from DataForSEO's returned
  `cost` field on the first live scan.

## 7. Security

- `SIS_PARTNER_KEY` lives only in Cloudflare Pages env (FactoryJet) and Hetzner
  env (SIS); never in the repo, never shipped to the browser. Browser talks only
  to same-origin `/api/ai-scan*`.
- SIS partner endpoints reject any request without the key.
- No PII in URLs (slug is domain-derived, not PII). Report link uses the slug.
- Honeypot + server-side validation; SIS daily cap is the money backstop.

## 8. Rollout

1. **[Bhavesh] Deploy SIS to Hetzner** (Plan 4) incl. the partner-API files, with
   env `PARTNER_API_KEY`, `DATAFORSEO_LOGIN/PASSWORD` (SIS's own), `ANTHROPIC_API_KEY`,
   `ANTHROPIC_FAST_MODEL`, `SCAN_DAILY_CAP=25`, `DATABASE_URL`. DNS `app.seeninsearch.com`.
2. **[Claude] FactoryJet build** (all of §5), committed on `NextJS`. Cloudflare
   env `SIS_PARTNER_KEY`, `SIS_API_BASE=https://app.seeninsearch.com`. Behind a
   flag until SIS is live.
3. **[Bhavesh] push `NextJS`** → Cloudflare auto-builds.
4. Verify one real scan end-to-end; read the DataForSEO `cost` field; flip the flag.
5. Distribution CTAs + nav + GA4.

## 9. Out of scope (v1)

Full SIS magic-link app UI (Plan 2a), public SIS scorecard/exports (2b/2c),
multi-region locale, PDF export, more than 25/day. All deferred, not refused.
