# pipeline/scripts/

Pipeline workspace tooling. Self-contained Python — does not interact with the Next.js website build.

## Brand audit (Patch #5)

Captures 20 reference sites × 5 pages each (homepage, service, pricing, feature, blog) for white-background `factoryjet.DESIGN.md` synthesis.

### One-time setup

```bash
cd pipeline/scripts
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/playwright install chromium
```

### Run

```bash
cd pipeline/scripts
.venv/bin/python brand_audit.py
```

Sequential execution. Expect ~3 hours for 100 page captures (20 sites × 5 pages, with politeness delays).

### Inputs

- `sites.json` — 20-site reference list with optional URL overrides per category.

### Outputs (under `pipeline/brand-references/`)

- `{slug}/screenshots/{category}.png` — full-page PNGs (gitignored, not committed)
- `{slug}/extracted-tokens.json` — per-page computed CSS tokens (committed)
- `_audit-run.json` — run summary with success/failure counts (committed)

### Notes

- Light mode forced via `prefers-color-scheme: light`. Sites that default to dark (Linear, Vercel, Resend) render in their light variant.
- Cookie banners suppressed via injected CSS before screenshot. Best-effort — exotic banner implementations may survive.
- Inner-page URLs discovered by parsing the homepage nav. Sites without obvious pricing pages will log "pricing" as missing — that's expected and graceful.
