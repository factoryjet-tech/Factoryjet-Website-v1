# Conductor kit — recreate the US commerce pages to the full landing standard

This kit drives a Conductor swarm (or any Claude Code agents in isolated worktrees) to rebuild the new US commerce/platform pages to the same depth and E-E-A-T as our deepest legacy pages.

## The standard every agent builds to
1. `CLAUDE.md` (repo root) — the FactoryJet anchor. Read first.
2. `PAGE-SPEC.md` — the page-quality standard: 3,000–5,000 words, 14 required sections, the schema stack, the E-E-A-T checklist.
3. `DESIGN.md` — the white/orange `.platpage` visual system.
4. `PRODUCT.md` — positioning + hard content rules (no pricing, no em dashes, no slop verbs, no geo-cheap, decade-plus, real clients only).
5. **Worked example:** `src/app/us/b2b-ecommerce/page.tsx` — built to the full standard. Mirror its structure, depth, schema, and visual system.
6. Keyword targets: `conductor/specs/<page>.md` (pulled from `../research/us-ecommerce-keyword-master-2026-06-27.csv`).

## Pages to recreate (one Conductor workspace / branch each)
| # | Page | Status | Lead keyword (vol) |
|---|------|--------|--------------------|
| ref | `/us/b2b-ecommerce` | DONE — the worked example | ecommerce platform b2b (1,900) |
| 1 | `/us/omnichannel-commerce` | rebuild | omnichannel ecommerce (320) |
| 2 | `/us/ecommerce-consulting` | rebuild | ecommerce consulting (720) |
| 3 | `/us/bigcommerce-development` | rebuild | bigcommerce dev cluster (1,000) |
| 4 | `/us/headless-commerce` | rebuild | headless e-commerce (720) |
| 5 | `/us/commerceflo` | rebuild | ecommerce business solutions (590) |
| 6 | `/us/salesforce-commerce-cloud-development` | NEW | commerce cloud salesforce (1,900) |
| 7 | `/us/marketplace-management` | NEW | amazon ecommerce platform (1,600) |
| 8 | `/us/best-ecommerce-platforms` | NEW (comparison hub) | ecommerce platform (18,100) |

## Swarm protocol
- One agent per page, each in its own Conductor worktree, branched off `NextJS`.
- Branch name: `page/<slug>` (e.g. `page/omnichannel-commerce`).
- NEW pages: also add the route to `sitemap.ts` and add/verify the mega-menu link in `SiteHeader.tsx`.
- Do **not** touch shared files beyond the page's own route, sitemap entry, and (for NEW pages) the single menu link, to keep merges clean.
- Verify the acceptance gate in the spec **before** opening the PR. The gate is non-negotiable; a page that misses word count, sourced stats, or the schema stack is not done.
- Merge order: rebuilds (1–5) first, then NEW pages (6–8). Resolve `sitemap.ts` conflicts by keeping all routes.

## Ready-to-paste task prompt (per workspace)
Paste this into each Conductor workspace, replacing `<SLUG>`:

```
Read CLAUDE.md, then PAGE-SPEC.md, DESIGN.md, PRODUCT.md, and conductor/specs/<SLUG>.md.
Study src/app/us/b2b-ecommerce/page.tsx — it is the worked example built to the full standard; mirror its structure, depth, schema stack, and the .platpage visual system (import '@/components/v2/PlatformPage.css').

Recreate src/app/us/<SLUG>/page.tsx to the full standard in conductor/specs/<SLUG>.md:
- 3,000–5,000 words, 15–20 target keywords woven naturally, single-viewport hero with HeroInlineForm and one distinctive CSS/SVG hero visual.
- All required sections incl. 3 sourced stats (VERIFY each figure with WebSearch and link the real source — never fabricate), 5–6 industry sections, an original comparison table, real proof (Bombay Petals / Belle Maison only), and 15–20 FAQs.
- Full schema: Service + FAQPage (mirrors visible FAQ) + HowTo (no day counts) + Organization/AggregateRating (4.9/150) + BreadcrumbList.
- Brand: white bg + orange #F05A28 only, brand fonts, no dark rooms, no pricing, no em dashes, no AI-slop verbs, no geo-cheap framing, decade-plus.
For NEW pages, also add the route to sitemap.ts and confirm the SiteHeader mega-menu link exists.

Before opening a PR, pass every checkbox in the spec's acceptance gate, including `node scripts/validate-build.mjs`. Then commit to branch page/<SLUG> and open a PR against NextJS.
```

## Global skills (run once on the Mac so every Conductor agent inherits the design skills)
```
mkdir -p ~/.claude/skills && cp -R ~/FactoryJet/website/.claude/skills/* ~/.claude/skills/ 2>/dev/null || \
cp -R ~/FactoryJet/.claude/skills/* ~/.claude/skills/
```
This puts impeccable, emil-design-eng, taste-skill, soft-skill, and imagegen-frontend-web on the user-global path (worktrees don't carry the repo's gitignored `.claude/`).
```
