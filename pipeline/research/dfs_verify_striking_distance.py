#!/usr/bin/env python3
"""
Verify the GSC "striking distance" queries against real Google search volume.

WHY THIS EXISTS (2026-08-04)
The 2026-08-03 GSC mining report recommended rewriting titles for a block of
queries sitting at positions 4-10 with ~3,600 impressions and essentially zero
clicks. Position 5 normally returns 5-6% CTR and position 8 around 2%, so that
block "should" have produced 70-150 clicks. It produced about two.

There are only three explanations: the snippet is bad, the SERP buries organic
position 5 under AI Overviews / ads / a local pack, or the impressions are not
human at all. We already know the third one happens here: the same report found
~2,780 impressions of literal "rankstr io" rank-tracker queries, every one of
them landing on /blog/best-ai-seo-agencies-india, which is the exact page whose
"clean" sibling queries the report then recommends optimising.

A rank tracker polling a keyword list produces precisely this signature: many
near-identical long-tail variants, healthy-looking average positions, and no
clicks. Rewriting a title to win traffic that has no human behind it is wasted
work, so this script checks demand BEFORE anyone spends a cycle on copy.

READ THE OUTPUT LIKE THIS
  - real volume, low CTR   -> genuine snippet/SERP problem. Worth a rewrite.
  - zero volume, high impr -> tool noise. Ignore it. Do not rewrite. Do not
                              build a page for it.
Volume is monthly Google search volume from the Google Ads keyword planner via
DataForSEO, resolved per country because these clusters are country-specific.

Usage:  set -a; . ./.env; set +a; python3 dfs_verify_striking_distance.py
"""
import os, json, base64, urllib.request, urllib.error, sys

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()

# location_code -> (label, language_code)
MARKETS = {2356: ("India", "en"), 2840: ("United States", "en"), 2826: ("United Kingdom", "en")}

# (query, gsc_impressions, gsc_position, market_location_code, cluster)
QUERIES = [
    # ── India AI-SEO listicle: the block the report wants retitled ──────────
    ("ai seo expert in india",            259, 7.9,  2356, "India AI-SEO"),
    ("ai seo services india",             241, 6.2,  2356, "India AI-SEO"),
    ("ai seo company india",              176, 4.05, 2356, "India AI-SEO"),
    ("best geo agency in india",          175, 9.5,  2356, "India AI-SEO"),
    ("ai seo agency in india",            157, 5.3,  2356, "India AI-SEO"),
    ("ai seo company in india",           144, 5.0,  2356, "India AI-SEO"),
    ("ai seo services in india",          100, 4.6,  2356, "India AI-SEO"),
    ("ai seo and aeo agency in india",     81, 4.6,  2356, "India AI-SEO"),
    ("best ai seo agency in mumbai",       54, 5.2,  2356, "India AI-SEO"),
    ("best ai seo agency",                261, 16.6, 2356, "India AI-SEO"),
    ("ai seo agency for ecommerce",       764, 8.0,  2356, "India AI-SEO (rankstr-suffixed)"),
    # ── Fargo: report's #1 recommendation ──────────────────────────────────
    ("seo company fargo",                 204, 7.6,  2840, "Fargo"),
    ("fargo seo",                         158, 6.3,  2840, "Fargo"),
    ("seo fargo",                         170, 9.7,  2840, "Fargo"),
    ("fargo seo company",                 135, 9.2,  2840, "Fargo"),
    ("seo company fargo nd",              122, 8.0,  2840, "Fargo"),
    ("seo fargo nd",                      103, 7.7,  2840, "Fargo"),
    ("fargo moorhead seo strategy company",39, 4.6,  2840, "Fargo"),
    # ── UK AI-SEO: report wants a Newcastle page built ─────────────────────
    ("ai search agency newcastle",        579, 14.7, 2826, "UK AI-SEO"),
    ("ai search agency leicester",        573, 25.1, 2826, "UK AI-SEO"),
    ("ai seo agency london",              214, 19.9, 2826, "UK AI-SEO"),
    ("aeo agencies leicester",            131, 5.9,  2826, "UK AI-SEO"),
    ("aeo agency leicester",               93, 18.0, 2826, "UK AI-SEO"),
    ("ai seo glasgow",                     75, 17.0, 2826, "UK AI-SEO"),
    ("ai seo services london",             71, 14.1, 2826, "UK AI-SEO"),
    ("ai seo agencies in uk",              54, 11.9, 2826, "UK AI-SEO"),
    ("ai search agency derby",             49, 20.0, 2826, "UK AI-SEO"),
    ("ai seo cardiff",                     47, 4.7,  2826, "UK AI-SEO"),
    # ── Austin: report calls this a page-2 goldmine ────────────────────────
    ("austin seo",                       1242, 17.5, 2840, "Austin"),
    ("austin seo expert",                 478, 16.8, 2840, "Austin"),
    ("austin seo consultant",             416, 13.8, 2840, "Austin"),
    ("austin seo company",                261, 11.5, 2840, "Austin"),
    ("capital of techs pflugerville seo", 239, 8.3,  2840, "Austin"),
    # ── Blog clusters flagged as new traction ──────────────────────────────
    ("do i need extra budget for geo",    413, 11.7, 2840, "Blog: GEO cost"),
    ("how long does seo take",              0, 0.0,  2840, "Blog: SEO timeline (head, control)"),
    ("ai adoption rates dutch smbs by size",133, 9.9, 2840, "Blog: AI adoption"),
    # ── Controls: known-real head terms, to prove the API is answering ─────
    ("seo agency",                          0, 0.0,  2840, "CONTROL (should be high)"),
    ("seo services india",                  0, 0.0,  2356, "CONTROL (should be high)"),
]


def post(path, body, timeout=180):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"},
        method="POST",
    )
    return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())


def volumes_for(loc, kws):
    """Exact monthly Google search volume for a keyword list in one market."""
    body = [{"location_code": loc, "language_code": MARKETS[loc][1], "keywords": kws}]
    r = post("keywords_data/google_ads/search_volume/live", body)
    if r.get("status_code") != 20000:
        print(f"  API error for {MARKETS[loc][0]}: {r.get('status_message')}", file=sys.stderr)
        return {}
    out = {}
    for task in r.get("tasks") or []:
        for item in task.get("result") or []:
            out[item.get("keyword")] = {
                "vol": item.get("search_volume"),
                "cpc": item.get("cpc"),
                "comp": item.get("competition"),
            }
    return out


def main():
    by_market = {}
    for q, _, _, loc, _ in QUERIES:
        by_market.setdefault(loc, set()).add(q)

    results = {}
    for loc, kws in by_market.items():
        print(f"querying {MARKETS[loc][0]} ({len(kws)} keywords)...", file=sys.stderr)
        results[loc] = volumes_for(loc, sorted(kws))

    rows = []
    for q, impr, pos, loc, cluster in QUERIES:
        d = results.get(loc, {}).get(q) or {}
        vol = d.get("vol")
        rows.append((cluster, q, MARKETS[loc][0], impr, pos, vol, d.get("cpc")))

    print("\n" + "=" * 108)
    print(f"{'CLUSTER':<26}{'QUERY':<38}{'GSC impr':>9}{'pos':>7}{'VOLUME':>9}{'CPC':>8}  VERDICT")
    print("=" * 108)
    last = None
    for cluster, q, mkt, impr, pos, vol, cpc in rows:
        if cluster != last:
            print("-" * 108); last = cluster
        if vol is None:
            verdict = "NO DATA (keyword unknown to Google Ads = effectively zero demand)"
        elif vol == 0:
            verdict = "ZERO VOLUME -> impressions are not human. Do not optimise."
        elif impr and vol * 3 < impr:
            verdict = f"SUSPECT: {impr} impr vs {vol}/mo volume"
        else:
            verdict = "REAL DEMAND"
        print(f"{cluster:<26}{q[:37]:<38}{impr:>9}{pos:>7}{str(vol if vol is not None else '-'):>9}"
              f"{str(cpc if cpc is not None else '-'):>8}  {verdict}")

    print("\n" + "=" * 108)
    print("SUMMARY BY CLUSTER (impressions vs real monthly demand)")
    print("=" * 108)
    agg = {}
    for cluster, q, mkt, impr, pos, vol, cpc in rows:
        if cluster.startswith("CONTROL"):
            continue
        a = agg.setdefault(cluster, {"impr": 0, "vol": 0, "n": 0, "zero": 0})
        a["impr"] += impr; a["vol"] += (vol or 0); a["n"] += 1
        if not vol:
            a["zero"] += 1
    for cluster, a in sorted(agg.items(), key=lambda x: -x[1]["impr"]):
        share = (a["zero"] / a["n"] * 100) if a["n"] else 0
        flag = "  <-- MOSTLY SYNTHETIC" if share >= 60 else ""
        print(f"{cluster:<38} impr={a['impr']:>6}  real monthly volume={a['vol']:>6}  "
              f"{a['zero']}/{a['n']} queries have zero demand ({share:.0f}%){flag}")


if __name__ == "__main__":
    main()
