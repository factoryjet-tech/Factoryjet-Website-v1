#!/usr/bin/env python3
"""
FactoryJet keyword research harness (DataForSEO Labs).
Seeds are derived from the GSC 90-day scan clusters (2026-04-11 -> 2026-07-09).
Discovers on-topic keyword universe + volume/CPC/difficulty/intent across US, India, UK.

Outputs:
  data/raw/<endpoint>__<loc>__<seed>.json   (raw API responses)
  data/keywords.csv                          (deduped, tagged, ranked)
Prints a compact per-cluster summary; full detail lives in the CSV.

Reads DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from environment.
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

LOGIN = os.environ["DATAFORSEO_LOGIN"]
PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "data", "raw")
os.makedirs(RAW, exist_ok=True)

LOC = {"us": 2840, "in": 2356, "uk": 2826}

# cluster -> list of (endpoint, seed, [locations])
# endpoint: "sug" = keyword_suggestions (contains seed), "idea" = keyword_ideas (semantic)
PLAN = {
    "ai-seo-geo-aeo": [
        ("sug", "ai seo", ["us", "uk", "in"]),
        ("sug", "ai seo agency", ["us", "uk", "in"]),
        ("sug", "generative engine optimization", ["us", "uk"]),
        ("sug", "answer engine optimization", ["us", "uk"]),
        ("sug", "geo agency", ["us"]),
        ("idea", "ai seo agency", ["us"]),
    ],
    "ai-agent-automation": [
        ("sug", "ai automation agency", ["us", "uk", "in"]),
        ("sug", "ai agent development", ["us", "in"]),
        ("sug", "ai agents for business", ["us"]),
        ("sug", "ai automation", ["us", "in"]),
        ("idea", "ai automation agency", ["us"]),
    ],
    "ecommerce-shopify": [
        ("sug", "shopify development", ["us", "in"]),
        ("sug", "shopify development cost", ["us"]),
        ("sug", "ecommerce development", ["us", "in"]),
        ("sug", "ecommerce agency", ["us", "uk"]),
        ("sug", "headless commerce", ["us"]),
    ],
    "web-design": [
        ("sug", "web design cost", ["us"]),
        ("sug", "small business web design", ["us", "uk"]),
        ("sug", "web design agency", ["us", "uk"]),
        ("sug", "web design company", ["in"]),
    ],
    "seo-cost-audit": [
        ("sug", "seo audit", ["us", "uk"]),
        ("sug", "seo cost", ["us"]),
        ("sug", "seo pricing", ["us"]),
        ("sug", "technical seo audit", ["us"]),
    ],
    "india-local": [
        ("sug", "seo company", ["in"]),
        ("sug", "seo agency", ["in"]),
        ("sug", "digital marketing agency", ["in"]),
        ("sug", "web design cost", ["in"]),
    ],
}

ENDPOINT = {
    "sug": "/dataforseo_labs/google/keyword_suggestions/live",
    "idea": "/dataforseo_labs/google/keyword_ideas/live",
}


def call(endpoint_key, seed, loc):
    url = BASE + ENDPOINT[endpoint_key]
    body = {
        "location_code": LOC[loc],
        "language_code": "en",
        "limit": 150,
        "order_by": ["keyword_info.search_volume,desc"],
        "filters": [["keyword_info.search_volume", ">", 10]],
    }
    if endpoint_key == "sug":
        body["keyword"] = seed
    else:
        body["keywords"] = [seed]
    data = json.dumps([body]).encode()
    req = urllib.request.Request(url, data=data, headers={
        "Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:300]}
    except Exception as e:
        return {"_error": str(e)}


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:40]


def main():
    rows = {}  # keyword|loc -> record (keep richest)
    total_cost = 0.0
    calls = 0
    for cluster, tasks in PLAN.items():
        for ep, seed, locs in tasks:
            for loc in locs:
                resp = call(ep, seed, loc)
                calls += 1
                fname = os.path.join(RAW, f"{ep}__{loc}__{slug(seed)}.json")
                with open(fname, "w") as f:
                    json.dump(resp, f)
                if resp.get("_error"):
                    print(f"  ! {ep} {loc} '{seed}': {resp['_error']}", file=sys.stderr)
                    time.sleep(0.4); continue
                total_cost += resp.get("cost", 0) or 0
                try:
                    items = resp["tasks"][0]["result"][0]["items"] or []
                except (KeyError, TypeError, IndexError):
                    items = []
                for it in items:
                    kw = it.get("keyword")
                    if not kw:
                        continue
                    ki = it.get("keyword_info") or {}
                    kp = it.get("keyword_properties") or {}
                    si = it.get("search_intent_info") or {}
                    sv = ki.get("search_volume") or 0
                    key = f"{kw}|{loc}"
                    prev = rows.get(key)
                    rec = {
                        "keyword": kw, "location": loc, "cluster": cluster, "seed": seed,
                        "search_volume": sv, "cpc": ki.get("cpc") or 0,
                        "competition_level": ki.get("competition_level") or "",
                        "difficulty": kp.get("keyword_difficulty"),
                        "intent": si.get("main_intent") or "",
                    }
                    # keep the record with the highest search volume; first cluster wins tag
                    if prev is None or sv > prev["search_volume"]:
                        if prev:
                            rec["cluster"] = prev["cluster"]; rec["seed"] = prev["seed"]
                        rows[key] = rec
                time.sleep(0.4)

    # write CSV
    out = os.path.join(HERE, "data", "keywords.csv")
    fields = ["keyword", "location", "cluster", "seed", "search_volume", "cpc",
              "competition_level", "difficulty", "intent"]
    recs = sorted(rows.values(), key=lambda r: r["search_volume"], reverse=True)
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(recs)

    # compact summary
    print(f"\n=== RUN COMPLETE ===")
    print(f"calls={calls}  cost=${total_cost:.3f}  unique_keywords={len(recs)}  csv={out}")
    by_cluster = defaultdict(lambda: {"n": 0, "vol": 0})
    for r in recs:
        by_cluster[(r["cluster"], r["location"])]["n"] += 1
        by_cluster[(r["cluster"], r["location"])]["vol"] += r["search_volume"]
    print("\n=== keywords + total monthly volume by cluster x market ===")
    for (cl, loc), v in sorted(by_cluster.items(), key=lambda x: -x[1]["vol"]):
        print(f"  {cl:22s} {loc}  n={v['n']:4d}  vol={v['vol']:,}")
    print("\n=== TOP 8 keywords per cluster (by volume) ===")
    per = defaultdict(list)
    for r in recs:
        per[r["cluster"]].append(r)
    for cl, lst in per.items():
        print(f"\n[{cl}]")
        for r in lst[:8]:
            d = r["difficulty"] if r["difficulty"] is not None else "-"
            print(f"  {r['search_volume']:>7,}  kd={str(d):>3}  {r['intent'][:4]:>4}  {r['location']}  {r['keyword']}")


if __name__ == "__main__":
    main()
