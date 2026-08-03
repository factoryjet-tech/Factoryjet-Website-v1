# UK doorway grid retirement (2026-08-03)

Retires the 90-page `/uk/{city}/{service}` grid into the city root pages, re-points the existing
platform-tier redirects so nothing becomes a 2-hop chain, and repairs the link and schema defects
that retirement would otherwise have exposed.

Source of the finding: `docs/AI-SEO-RULEBOOK.md` section 8 (rendered audit, n=447 live URLs).

**Nothing here is committed or pushed.**

---

## 1. Why retire

Measured, not assumed:

| Signal | Value |
|---|---|
| Pages in the grid | 15 dynamic cities x 6 services = 90 |
| Rendered words each | 620 |
| Words that differ between any two pages | 26 of 620, every one the city name |
| `<li>` per page | 3 |
| UK segment median rendered words (n=124) | 590, against a 2,813 benchmark |
| Clicks, whole `/uk/` tree, 2026-05-05 to 2026-08-02 | 15 |
| Clicks from these 90 pages in that window | 5 |
| `/uk/leicester/ai-seo` alone | 1,579 impressions, 0 clicks, position 24.7 |

Ninety near-identical pages that differ only by location is the shape Google's spam policy names
directly: scaled content abuse, doorway pages. They carry that risk for five clicks a quarter, on a
domain whose binding constraint is already authority (53 referring domains, rulebook section 6b).

---

## 2. The targeting decision, and why the obvious answer was wrong

The brief called for 301ing each page into its matching national hub: `/uk/{city}/seo` to `/uk/seo`,
and so on. That plan was built and then discarded. Three measurements killed it, all taken on live
rendered HTML on 2026-08-03 and all reproduced independently before the change was made.

**1. The hubs carry no local signal for two thirds of the retiring cities.** All 10 UK hubs
(`/uk/seo`, `/uk/web-design`, `/uk/ai-seo`, `/uk/ai-agents`, `/uk/ecommerce-development`,
`/uk/ecommerce-seo`, `/uk/shopify-development`, `/uk/shopify-seo`, `/uk/local-seo`, `/uk/seo-audit`)
were fetched and searched for each of the 15 city names. Every hub returns the same 5 cities and
only those 5: bristol, edinburgh, glasgow, newcastle, nottingham. The other 10 (brighton, cambridge,
cardiff, coventry, derby, hull, leicester, oxford, plymouth, southampton) appear **zero** times on
**every** hub. A visitor 301'd from `/uk/leicester/seo` would land on a page that never says
Leicester. Even the 5 that do appear are mostly footer chrome, not content.

**2. The kept city roots would have been orphaned the same day.** The 15 city root pages are being
kept. `/uk/brighton` was fetched: it contains exactly 7 outbound `/uk/` links, 6 of them its own
doorway pages and the seventh a 404. The doorway page `/uk/brighton/web-design` was fetched: it
links back to `/uk/brighton`. So for those 10 cities the doorway pages were the **only** in-content
inbound link the city root had. They are not in the UK footer's city list, and they are not on `/uk`
itself. Retiring the grid into hubs would have left 10 kept pages with no in-content inbound link at
all.

**3. `ai-websites` had no valid destination.** `/uk/ai-websites` returns 404. Across all 10 hubs the
terms `ai website`, `ai websites`, `ai-powered website` and `ai web design` each occur **0** times.
`/uk/web-design` is a conventional web design page. Pointing 15 redirects there would have been a
topic swap dressed up as a consolidation.

### Adopted: `/uk/{city}/{service}` to `/uk/{city}`

It preserves the location intent exactly, it makes the kept city roots the equity destination
instead of stripping their only inbound links, and it dissolves the `ai-websites` problem entirely
because there is no service-to-hub mapping left to get wrong.

**Recorded honestly as the cost:** all 15 city roots are roughly 970 words with zero FAQ questions.
This consolidates 90 thin pages into 15 less-thin pages, not into strong ones. It is the right
structural move today; it does not make the destinations good. Deepening the city roots, or
retiring them too, is a separate decision on separate evidence.

---

## 3. Redirect map

### 3a. Middle tier, 90 rules

| Source | Target |
|---|---|
| `/uk/{city}/web-design` | `/uk/{city}` |
| `/uk/{city}/ai-websites` | `/uk/{city}` |
| `/uk/{city}/ecommerce` | `/uk/{city}` |
| `/uk/{city}/seo` | `/uk/{city}` |
| `/uk/{city}/ai-seo` | `/uk/{city}` |
| `/uk/{city}/ai-agents` | `/uk/{city}` |

`{city}` over 15 slugs: brighton, bristol, cambridge, cardiff, coventry, derby, edinburgh, glasgow,
hull, leicester, newcastle, nottingham, oxford, plymouth, southampton. 15 x 6 = 90 rules, written
out explicitly in `public/_redirects`. Sample:

```
/uk/brighton/web-design      /uk/brighton     301
/uk/brighton/ai-websites     /uk/brighton     301
/uk/brighton/ecommerce       /uk/brighton     301
/uk/brighton/seo             /uk/brighton     301
/uk/brighton/ai-seo          /uk/brighton     301
/uk/brighton/ai-agents       /uk/brighton     301
```

### 3b. Platform tier, 3 rules

```
/uk/london/web-design/:platform    /uk/london/web-design   301
/uk/london/seo/:platform           /uk/london/seo          301
/uk/:city/:service/:platform       /uk/:city               301
```

### 3c. Not redirected, verified live at 200

`/uk`, the 21 city roots, `/uk/london/web-design`, `/uk/london/seo`, and all 10 national hubs
(`/uk/seo`, `/uk/web-design`, `/uk/ecommerce-development`, `/uk/ai-agents`, `/uk/ai-seo`,
`/uk/shopify-development`, `/uk/ecommerce-seo`, `/uk/local-seo`, `/uk/seo-audit`, plus
`/uk/shopify-seo`). Each checked with
`curl -s -o /dev/null -w '%{http_code}' -H 'Cache-Control: no-cache' "https://factoryjet.com<PATH>?cb=$RANDOM"`.

### 3d. Why 90 explicit rules and not one placeholder

A single `/uk/:city/:service` rule would have been one line, and it would have broken the site.

`/uk/london/web-design` and `/uk/london/seo` are not grid output. They are hand-built static
segments at `src/app/uk/london/web-design/page.tsx` and `src/app/uk/london/seo/page.tsx`, both
verified 200 live, both listed in the sitemap via `BESPOKE_CITY_SERVICE_PAGES`. Cloudflare's
documentation states that redirects are always followed regardless of whether an asset matches the
request, so a placeholder rule would have 301'd two real, working pages away with no error to
notice.

Cost of doing it explicitly: 90 static rules against Cloudflare Pages' 2,100 static-rule limit. The
file now carries 184 static and 18 dynamic rules, both well inside their limits (2,100 and 100).

---

## 4. Single-hop analysis

**Before.** Since 2026-05-27 one rule handled the third tier: `/uk/:city/:service/:platform` to
`/uk/:city/:service`. Verified live before the change:

| Request | Response |
|---|---|
| `/uk/oxford/ecommerce/shopify` | 301 to `/uk/oxford/ecommerce` |
| `/uk/leicester/ai-seo/shopify` | 301 to `/uk/leicester/ai-seo` |
| `/uk/london/web-design/shopify` | 301 to `/uk/london/web-design` |

Retiring the middle tier without touching that rule would have turned roughly 450 platform URLs into
`platform -> city/service -> city root`: a 2-hop chain. Retrieval bots abandon chains more readily
than browsers do, and it wastes crawl budget on a tree already earning 15 clicks a quarter.

**After.** Because the middle tier now lands on `/uk/{city}`, the platform tier collapses to the
same place in one step. The general rule `/uk/:city/:service/:platform -> /uk/:city` is exactly the
old rule with one segment less in the target, so it needs no per-service table. The two london rules
sit above it because Cloudflare applies the topmost matching rule and london's middle tier is a live
page that must keep its city intent.

**Verified by simulation.** A script parsed every rule in `public/_redirects`, applied
first-match-wins the way Cloudflare does, and followed each result until it stopped resolving:

| Check | Result |
|---|---|
| 90 middle-tier URLs | all resolve in exactly **1** hop |
| 90 platform-tier URLs (one platform each) | all resolve in exactly **1** hop |
| `/uk/london/web-design`, `/uk/london/seo` | **0** hops, matched by no rule, still served |
| `/uk/london/web-design/shopify` | 1 hop to `/uk/london/web-design` |
| `/uk/oxford` and the other city roots | **0** hops, matched by no rule |
| Chains anywhere in `/uk/` (any rule's target matched as another rule's source) | **0** |

**Side benefit.** For the five bespoke cities with no service pages on disk (manchester, birmingham,
leeds, liverpool, sheffield), the old rule produced a redirect into a 404:
`/uk/manchester/web-design/shopify -> /uk/manchester/web-design -> 404`, verified live. The new
general rule sends those to `/uk/manchester`, a live page.

---

## 5. Files changed

| File | Change |
|---|---|
| `public/_redirects` | Replaced the 2026-05-27 UK platform block with a documented UK block: 90 explicit static rules plus 3 platform rules. |
| `src/app/sitemap-uk/sitemap.ts` | Removed the `cityService` block (the 90 URLs), the now-unused `dynamicCities` local, the `DYNAMIC_CITY_SERVICE_PAGE` const and the `services` import. `bespokeCityService` (london web-design, london seo), the city roots and the national hubs are untouched. |
| `src/app/uk/[city]/[service]/page.tsx` | **Deleted.** See section 6. |
| `src/lib/uk-pages/city-service.tsx` | **Deleted.** The template the deleted route rendered; no other importer. |
| `src/lib/uk-pages/city-hub.tsx` | The service card grid linked to `/uk/{city}/{service}`, which now 301s straight back to the page the card is on: a self-referential redirect and a crawler dead end. Cards now point at the national service hubs via a `SERVICE_HUB_HREF` map, which also gives every city root six outbound in-content links to pages we want ranking. Separately fixed a pre-existing broken link in the same component: `/uk/services` has never existed and 404s live, now `/uk`. |
| `src/app/uk/sections/Footer.tsx` | Two fixes. (a) The services list emitted `/uk/ecommerce`, which 404s; the real slug is `ecommerce-development`. This is the sitewide UK footer, so that link 404'd from every UK hub page. (b) The city list went from 10 to all 21 city roots, adding london plus the 10 cities that had no inbound link anywhere once the doorways were gone. |
| `src/app/uk/schema.ts` | The E-Commerce `Service` node's `url` was `https://factoryjet.com/uk/ecommerce`, the same dead URL, asserted in JSON-LD. Now `/uk/ecommerce-development`. |
| `src/app/uk/page.tsx` | Added `dateModified` (and `inLanguage`) to the `WebPage` node. `/uk` was one of the 293 URLs shipping without it. The date is honest: the footer city list and the service-schema URL both changed on it. Uses the `UPDATED` const convention already used by the UK hub pages. |

Not changed, deliberately: the 21 city root pages themselves, `src/app/uk/[city]/page.tsx`,
`src/data/countries/gb/`, `SiteHeader.tsx`, `src/components/v2/SiteFooter.tsx`, `public/llms.txt`,
`public/robots.txt`.

### Link surface check

- `GB_LOCATIONS` in `src/components/v2/SiteHeader.tsx` links only to city roots, never to the grid.
  Note it lists Cardiff, but `cardiff` does not appear anywhere in the rendered HTML of a UK page,
  so that array is not reaching these pages. Left alone; it is not load-bearing here.
- `src/components/v2/SiteFooter.tsx` carries no `/uk/{city}/{service}` link. The footer that renders
  on UK pages is `src/app/uk/sections/Footer.tsx`, which is the one fixed above.
- The only internal link into the grid anywhere in `src/` was the template literal in
  `city-hub.tsx`. Verified by sweeping for both literal paths and template-literal forms, which is
  the trap noted in the internal-linking memory.
- No tracked file under `public/` references a retired URL except `_redirects` itself.
- `public/llms.txt` names only `/uk/london/web-design` and `/uk/london/seo` at the city-service
  level, both of which survive. No edit needed.

---

## 6. Delete or keep the route file

**Decision: deleted.**

The question was whether Cloudflare `_redirects` fires before the static asset is served. It does.
Cloudflare's Pages redirects documentation states that redirects are always followed regardless of
whether an asset matches the incoming request. So keeping the route would have been functionally
harmless: the 90 URLs would 301 before their HTML was ever reached.

Deleted anyway, for three reasons:

1. Keeping it ships 90 dead HTML files into every deploy.
2. It is a silent trap. If `_redirects` is ever truncated, reordered or hits a rule limit, 90
   doorway pages come back with no error to notice. Deleting the route makes the retirement
   structural rather than dependent on one config file.
3. A dynamic route whose every output is a redirect is confusing to the next reader.

`generateStaticParams` on `/uk/[city]/page.tsx` is unaffected; it enumerates cities, not services.
`getAllCombinations()` in `src/data/countries/gb/index.ts` now has no caller. Left in place as a
harmless exported helper rather than expanding the diff into the shared data layer.

---

## 7. Verification run

| Check | Result |
|---|---|
| `npx tsc --noEmit` | pass, exit 0 |
| `node scripts/validate-build.mjs` | pass, 616 source files, 0 warnings |
| `node scripts/check-tracked-imports.mjs` | pass, 596 tracked files |
| `node scripts/test-geo-redirect.mjs` | pass, all decision tests |
| `node scripts/audit-rulebook.mjs` | pass; `/uk/[city]/[service]` no longer listed as a dynamic template, 0 silent-schema defects |
| Redirect resolution simulation, 180 UK URLs | 100% single-hop, 0 chains |
| Rule counts | 184 static (limit 2,100), 18 dynamic (limit 100) |

The app was deliberately not rendered locally. `next dev/build/preview` on this machine OOMs.

---

## 8. What could not be verified, and open risks

1. **No redirect here has been exercised by Cloudflare.** Nothing is committed or pushed, so every
   claim in section 4 rests on the rule table plus a simulation of first-match-wins, not on
   production behaviour. After deploy, spot-check with
   `curl -s -o /dev/null -w '%{http_code} -> %{redirect_url}' -H 'Cache-Control: no-cache' "<URL>?cb=$RANDOM"`:
   - `/uk/oxford/ecommerce` should be a single 301 to `/uk/oxford`
   - `/uk/oxford/ecommerce/shopify` should be a single 301 to `/uk/oxford`, not to
     `/uk/oxford/ecommerce`
   - `/uk/london/web-design` must still return **200**. This is the one most worth checking; it is
     what a mistake here would break.
   - `/uk/london/web-design/shopify` should 301 to `/uk/london/web-design`
   - `/uk/oxford` must still return 200
   - `/uk/ecommerce-development` should return 200 from the footer link on any UK page
   Use the cache-buster. Cloudflare has served stale UK HTML for up to 20 hours after a deploy.

2. **Trailing-slash requests may take two hops.** A static rule for `/uk/oxford/ecommerce` is not
   guaranteed to match `/uk/oxford/ecommerce/`. If Cloudflare does not normalise it, the asset
   server 308s the slashed form to the unslashed one and the 301 then fires, giving two hops. This
   affects only inbound links carrying a trailing slash; `trailingSlash` is `false` in
   `next.config`, and neither the sitemap nor any internal link emits the slashed form. Worth one
   curl after deploy rather than pre-emptive rules.

3. **The destinations are thin.** All 15 city roots are roughly 970 words with 0 FAQ questions, and
   they are template output from a single component, so they share the same near-duplicate shape the
   doorway grid was retired for, just at 15 pages instead of 90. This change reduces the exposure; it
   does not eliminate it. Whether the city roots earn their place is a separate decision that needs
   its own evidence.

4. **Thirteen pre-existing 2-hop chains in the US tree, unrelated to this change.** The
   `/us/services/ecommerce-development/{city}/*` rules point at `/us/{city}/ecommerce-development`,
   which is itself matched by the catch-all `/us/*  /:splat`. Verified live:
   `/us/services/ecommerce-development/austin/` 301s to `/us/austin/ecommerce-development`, which
   301s to `/austin/ecommerce-development`. This is the redirect-chain item already flagged as open
   in the landing-page GEO audit. Left alone to keep this change to one subject. The fix is
   mechanical: repoint those 13 rules straight at `/{city}/ecommerce-development`.

5. **`/uk/london/ecommerce-development` is a broken internal link.** `src/app/uk/london/page.tsx`
   links to it; the page does not exist and it 404s live. Pre-existing, in a file outside this
   change, so not touched. One-line fix: point it at `/uk/ecommerce-development`.

6. **Five bespoke cities have no service pages at all.** manchester, birmingham, leeds, liverpool
   and sheffield have city roots but no `/uk/{city}/{service}` pages, so those URLs 404 today and
   still will. No middle-tier rules were added for them: they are not indexed and earn nothing.
   Their platform-tier URLs are now covered by the general `:city` rule, a strict improvement over
   the previous redirect-into-404.

7. **GSC recrawl is manual.** These 90 URLs will keep appearing in Search Console as indexed until
   Google recrawls them. Do not read that as the change failing. Conversely, do not link to any of
   them again from anywhere: a nav link to a URL Google has cached a verdict on is the stale-404
   trap that only a manual GSC recrawl clears.

8. **The footer city list is now 21 entries.** That is a deliberate orphan fix, not a design
   decision that was reviewed. If 21 city links in the UK footer reads as too heavy, the right
   response is to link the 10 previously-orphaned cities from somewhere else in content, not to
   silently drop them back out.

9. **Untracked `.fuse_hidden*` remnants in `public/`.** Six editor leftovers containing old copies
   of `llms.txt` that still list retired URLs. They are untracked, so they never reach the deploy.
   Safe to delete locally; not touched here.
