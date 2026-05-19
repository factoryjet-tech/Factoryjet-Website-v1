# FactoryJet Scripts

## seo-audit.ts — Deep SEO Audit Tool

Crawls the live factoryjet.com site, checks every page for SEO health, and
generates a full markdown report + raw JSON data file.

### Run

```bash
# From the website/ root:
npx tsx scripts/seo-audit.ts

# Against a staging URL:
SITE_URL=https://staging.factoryjet.com npx tsx scripts/seo-audit.ts
```

### Outputs

| File | Purpose |
|------|---------|
| `seo-audit-report-YYYY-MM-DD.md` | Human-readable report (open in VS Code preview) |
| `seo-audit-data-YYYY-MM-DD.json` | Raw JSON — paste into Claude for automated fixes |

### What it checks

**Infrastructure**
- `robots.txt` — presence, Googlebot/GPTBot/ClaudeBot/PerplexityBot access, Sitemap directive
- `llms.txt` — presence and AI bot coverage for GEO/AEO
- Sitemaps — all configured sitemap paths, URL count, `<lastmod>` tags

**Per-page (every URL in sitemap)**
- HTTP status (200 / 301 / 404 / 5xx)
- Title tag — present, 30–65 chars, unique
- Meta description — present, 100–165 chars, unique
- H1 — exactly one, not empty
- Canonical tag — present, matches page URL
- JSON-LD schema — present, valid JSON, LocalBusiness on city pages
- Open Graph — og:title, og:description, og:image
- Hreflang — present on international pages (/us/ and India city pages)
- Image alt text — no missing alt attributes
- next/image usage — raw `<img>` tags flagged

**Cross-page**
- Duplicate title tags
- Duplicate meta descriptions
- Orphaned pages (in sitemap but not linked internally)

### Severity levels

| | Level | Action |
|-|-------|--------|
| 🔴 | Critical | Fix immediately — direct ranking/indexing impact |
| 🟡 | Warning | Fix this sprint — ranking signals being left behind |
| 🔵 | Info | Opportunities — GEO, performance, best-practice polish |

### Fixing issues with Claude

After running the audit:

1. Open `seo-audit-report-YYYY-MM-DD.md` to review all issues
2. Paste the contents of `seo-audit-data-YYYY-MM-DD.json` into Claude with:

```
Here is my FactoryJet SEO audit data. Please fix all Critical and Warning issues
across the codebase. The repo is at /Users/bhaveshbarot/FactoryJet/website/.
Work through each issue systematically, one file at a time.
[paste JSON here]
```

### Schedule

Re-run after:
- Every new page added
- Every batch of content updates
- Monthly as a routine health check
- Before and after any major deployment
