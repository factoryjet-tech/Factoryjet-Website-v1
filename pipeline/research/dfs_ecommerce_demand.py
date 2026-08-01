#!/usr/bin/env python3
"""E-COMMERCE PHASE — live DataForSEO demand for e-commerce superlative + platform terms
across all 4 FactoryJet markets (US, UK, India, UAE).

Services in scope: E-Commerce Development (general), Shopify Development, WooCommerce
Development, Magento Development, BigCommerce Development, Headless Commerce,
B2B E-Commerce, E-Commerce SEO, E-Commerce Marketing/Growth Agency, E-Commerce
Consulting, AI Commerce (Commerceflo angle).

Pulls keyword_suggestions + related_keywords per seed per geo, classifies superlative +
question queries (vocabulary discovered empirically, not assumed — same method as
dfs_us_demand.py / dfs_india_demand.py), and writes one CSV per geo + a combined summary.

Writes data/ecommerce_demand_<geo>.csv + data/ecommerce_demand_summary.json
"""
import os, json, base64, urllib.request, urllib.error, csv
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))

GEOS = {
    "us": 2840,
    "uk": 2826,
    "india": 2356,
    "uae": 2784,
}

# every ecommerce-adjacent service FactoryJet actually sells / has a live page for
SEEDS = [
    "ecommerce agency", "ecommerce development company", "ecommerce web design",
    "ecommerce website development", "shopify agency", "shopify development company",
    "shopify plus agency", "shopify development partner", "woocommerce development company",
    "woocommerce agency", "woocommerce developer", "magento development company",
    "magento agency", "magento development services", "bigcommerce development company",
    "bigcommerce agency", "headless commerce agency", "b2b ecommerce agency",
    "b2b ecommerce development", "ecommerce marketing agency", "ecommerce growth agency",
    "ecommerce seo agency", "ecommerce seo company", "ecommerce consulting company",
    "ai commerce platform", "amazon marketplace agency", "ecommerce website design company",
]

SUPERLATIVE_CANDIDATES = [
    "best", "top", "top 10", "top 5", "leading", "no 1", "no.1", "number 1",
    "cheapest", "affordable", "low cost", "budget", "good", "famous", "reputed",
    "trusted", "biggest", "largest", "award winning", "fastest growing",
    "most popular", "well known", "premier", "greatest", "finest", "reliable",
]
QUESTION_STEMS = (
    "how ", "what ", "which ", "who ", "why ", "where ", "when ",
    "is ", "are ", "can ", "should ", "does ", "do ", "will ",
)


def post(path, body, timeout=180):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"},
    )
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:400]}
    except Exception as e:
        return {"error": str(e)}


def pull(seed, endpoint, loc):
    body = [{
        "keyword": seed, "location_code": loc, "language_code": "en",
        "limit": 1000, "include_serp_info": False,
        "filters": [["keyword_info.search_volume", ">", 0]],
        "order_by": ["keyword_info.search_volume,desc"],
    }]
    r = post(f"dataforseo_labs/google/{endpoint}/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost, json.dumps(r)[:200]
    for it in items:
        kd = it.get("keyword_data", it)
        ki = kd.get("keyword_info", {}) or {}
        kp = kd.get("keyword_properties", {}) or {}
        si = kd.get("search_intent_info", {}) or {}
        kw = kd.get("keyword")
        if not kw:
            continue
        rows.append({
            "keyword": kw, "seed": seed,
            "search_volume": ki.get("search_volume") or 0,
            "cpc": round(ki.get("cpc") or 0, 2),
            "competition": ki.get("competition_level") or "",
            "difficulty": kp.get("keyword_difficulty"),
            "intent": si.get("main_intent") or "",
        })
    return rows, cost, None


def classify(kw):
    k = " " + kw.lower().strip() + " "
    sups = [s for s in SUPERLATIVE_CANDIDATES if f" {s} " in k or k.startswith(f" {s} ")]
    sup = max(sups, key=len) if sups else None
    is_q = kw.lower().strip().startswith(QUESTION_STEMS) or "?" in kw
    return sup, is_q


def run_geo(geo, loc):
    jobs = [(s, "keyword_suggestions", loc) for s in SEEDS] + \
           [(s, "related_keywords", loc) for s in SEEDS]
    all_rows, cost, errs = {}, 0.0, []
    with ThreadPoolExecutor(max_workers=6) as ex:
        for rows, c, err in ex.map(lambda a: pull(*a), jobs):
            cost += c
            if err: errs.append(err)
            for r in rows:
                prev = all_rows.get(r["keyword"])
                if not prev or r["search_volume"] > prev["search_volume"]:
                    all_rows[r["keyword"]] = r

    rows = list(all_rows.values())
    for r in rows:
        r["superlative"], r["is_question"] = classify(r["keyword"])
    print(f"\n########## {geo.upper()} (location_code={loc}) ##########")
    print(f"pulled {len(rows)} unique keywords  cost=${cost:.3f}  errors={len(errs)}")
    if errs: print("  first error:", errs[0])

    sup_rows = [r for r in rows if r["superlative"]]
    q_rows = [r for r in rows if r["is_question"]]

    tally = defaultdict(lambda: {"vol": 0, "n": 0})
    for r in sup_rows:
        t = tally[r["superlative"]]; t["vol"] += r["search_volume"]; t["n"] += 1
    print(f"\n=== {geo.upper()} SUPERLATIVES ACTUALLY USED (by total monthly volume) ===")
    for s, t in sorted(tally.items(), key=lambda x: -x[1]["vol"]):
        print(f"  {s:16s} vol={t['vol']:>8,}  across {t['n']:>4} keywords")

    print(f"\n=== {geo.upper()} TOP 40 SUPERLATIVE ECOMMERCE KEYWORDS ===")
    sup_rows.sort(key=lambda r: -r["search_volume"])
    for r in sup_rows[:40]:
        print(f"  vol={r['search_volume']:>7,} kd={str(r['difficulty']):>4} cpc={r['cpc']:>6} "
              f"{r['intent'][:12]:12s} {r['keyword']}")

    print(f"\n=== {geo.upper()} TOP 25 QUESTION KEYWORDS ===")
    q_rows.sort(key=lambda r: -r["search_volume"])
    for r in q_rows[:25]:
        print(f"  vol={r['search_volume']:>7,} kd={str(r['difficulty']):>4} {r['keyword']}")

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    out = os.path.join(HERE, "data", f"ecommerce_demand_{geo}.csv")
    rows.sort(key=lambda r: -r["search_volume"])
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "seed", "search_volume",
                                          "cpc", "competition", "difficulty", "intent",
                                          "superlative", "is_question"])
        w.writeheader(); w.writerows(rows)
    print(f"  -> {out}")
    return {"geo": geo, "n_total": len(rows), "n_superlative": len(sup_rows),
            "n_question": len(q_rows), "cost": cost,
            "superlative_tally": {k: v for k, v in tally.items()},
            "top_superlative": sup_rows[:15]}


if __name__ == "__main__":
    summary = {}
    total_cost = 0.0
    for geo, loc in GEOS.items():
        s = run_geo(geo, loc)
        total_cost += s["cost"]
        summary[geo] = s
    json.dump(summary, open(os.path.join(HERE, "data", "ecommerce_demand_summary.json"), "w"),
              indent=1, default=str)
    print(f"\n\nTOTAL COST=${total_cost:.3f}")
