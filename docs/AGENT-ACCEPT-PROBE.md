# AI-agent Accept-header probe

**Started:** 2026-09-09
**Read it:** from ~2026-09-23 (give it two full weeks)
**Owner:** Bhavesh
**Code:** `functions/_middleware.js` (search "AI-agent Accept-header probe"), `scripts/test-agent-probe.mjs`

## The one question this answers

Cloudflare's **Markdown for Agents** converts our HTML to markdown at the edge, but
**only when the client sends `Accept: text/markdown`**. It needs the Pro plan
(~$20/mo billed annually, per domain; we are on Free).

No public source says whether OAI-SearchBot, PerplexityBot or ClaudeBot actually send
that header today. Cloudflare's own April 2026 scan found only 3.9% of the top 200k
domains even answer it, so adoption is early on both sides.

So: **if nothing asks, the feature is inert and the money is wasted.** This probe
records who asks for what, on our own traffic, for free, before we decide.

The size prize if it turns out bots do ask (both measured 2026-09-09):

| | HTML | Markdown |
|---|---|---|
| Cloudflare's own blog (feature on) | 535,269 B | 19,057 B (**96% smaller**) |
| factoryjet.com homepage (feature off) | 261,368 B | only 18,308 B of it is real text (**7%**) |

## What gets recorded

Written to the Analytics Engine dataset `fj_agent_accept` (binding `AGENT_ACCEPT_LOG`
in `wrangler.toml`). The dataset is created implicitly on first write, so there is
nothing to provision in the dashboard.

| Field | Meaning |
|---|---|
| `blob1` | `reason` — either `markdown-requested` or `ai-agent` |
| `blob2` | user-agent (truncated to 256 chars) |
| `blob3` | the `Accept` header (truncated to 256 chars) |
| `blob4` | path |
| `blob5` | `cf-ipcountry` |

Two trigger rules, and the order matters:

1. **Anyone** sending an `Accept` containing `markdown` → `markdown-requested`.
   Checked first and with no user-agent filter, because a *new* agent nobody has heard
   of asking for markdown is the single most valuable thing this probe can catch.
2. Otherwise, a user-agent on the narrow `AI_AGENT_UA` list → `ai-agent`.
   This gives the denominator: how many AI-bot hits we got in total.

Googlebot and Bingbot are deliberately **not** on that list. They are search crawlers,
not AI agents, and their volume would bury the signal.

Free tier covers 10M writes/month. We write only for AI user-agents, so this will not
come near it. Retention is 3 months.

## How to read the results

Account ID `9504d8596b80321b924fe98187a919a4`. You need an API token with
**Account Analytics: Read**.

```bash
curl -s "https://api.cloudflare.com/client/v4/accounts/9504d8596b80321b924fe98187a919a4/analytics_engine/sql" \
  -H "Authorization: Bearer $CF_ANALYTICS_TOKEN" \
  -d "SELECT blob1 AS reason, blob2 AS user_agent, blob3 AS accept, count() AS hits FROM fj_agent_accept WHERE timestamp > NOW() - INTERVAL '14' DAY GROUP BY reason, user_agent, accept ORDER BY hits DESC FORMAT JSON"
```

The headline number, on its own:

```bash
curl -s "https://api.cloudflare.com/client/v4/accounts/9504d8596b80321b924fe98187a919a4/analytics_engine/sql" \
  -H "Authorization: Bearer $CF_ANALYTICS_TOKEN" \
  -d "SELECT blob1 AS reason, count() AS hits FROM fj_agent_accept WHERE timestamp > NOW() - INTERVAL '14' DAY GROUP BY reason FORMAT JSON"
```

## How to decide

| Result after 2 weeks | Do this |
|---|---|
| Any meaningful count of `markdown-requested` | Upgrade to Pro and switch Markdown for Agents on. It pays for itself immediately. |
| `ai-agent` hits but zero `markdown-requested` | **Do not pay.** Bots are reading us but not asking for markdown. Spend the effort on making `llms-full.txt` carry real content instead, which is free and under our control. |
| Almost no `ai-agent` hits at all | Bigger problem than file formats. AI crawlers are not fetching us, so go look at why before optimising what we serve them. |

## Failure modes, on purpose

- The probe **never throws**. Every path is wrapped and swallowed. A telemetry failure
  may not cost us a page render.
- If the Analytics Engine binding is missing (not yet deployed, or the plan does not
  carry it) the probe falls back to `console.log`, visible via
  `wrangler pages deployment tail`. It must never go completely silent, or we would
  misread "no data" as "no bot asked".
- `writeDataPoint` is non-blocking, so it adds no latency to any response.

## When you are done with it

Delete the probe block in `functions/_middleware.js`, the binding in `wrangler.toml`,
`scripts/test-agent-probe.mjs`, and this file. Or keep it as standing telemetry if the
answer turns out to be interesting enough to keep watching.
