#!/usr/bin/env python3
"""E-COMMERCE LEAD-GEN PHASE A — which CONTENT TYPE actually has demand?

The 2026-08-01 audit (ECOMMERCE-SEO-GEO-PLAN.md) measured *superlative* demand
("best ecommerce agency") and found FactoryJet at zero everywhere. This pull answers
a different question Bhavesh asked on 2026-08-02: given we must pick, do we build
(a) industry/vertical landing pages, (b) platform comparison pages, or (c) blogs?

Buckets tested, each with its own seed set so volumes are directly comparable:
  compare   — "shopify vs woocommerce", platform-choice queries
  migrate   — "magento to shopify migration", replatform queries (highest $ intent)
  vertical  — "ecommerce website for <industry>", industry-specific build queries
  cost      — "ecommerce website cost", pricing queries (known top GSC asset)
  hire      — "hire shopify developer", direct service queries
  howto     — "how to build an ecommerce website", DIY//informational

Writes data/ecom_leadgen_demand_<geo>.csv + data/ecom_leadgen_summary.json
"""
import os, json, base64, urllib.request, urllib.error, csv
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))


def load_env():
    p = os.path.join(HERE, ".env")
    if os.path.exists(p):
        for line in open(p):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()

GEOS = {"us": 2840, "india": 2356, "uk": 2826, "uae": 2784}

BUCKETS = {
    "compare": [
        "shopify vs woocommerce", "shopify vs magento", "shopify vs bigcommerce",
        "woocommerce vs magento", "wix vs shopify", "squarespace vs shopify",
        "shopify vs custom website", "headless commerce vs traditional",
        "best ecommerce platform for small business", "which ecommerce platform is best",
        "shopify plus vs shopify", "bigcommerce vs woocommerce",
    ],
    "migrate": [
        "magento to shopify migration", "woocommerce to shopify migration",
        "shopify migration services", "replatform ecommerce", "magento 1 to magento 2 migration",
        "bigcommerce to shopify migration", "wix to shopify migration",
        "ecommerce migration agency", "shopify plus migration",
    ],
    "vertical": [
        "ecommerce website for fashion brand", "ecommerce website for furniture store",
        "ecommerce website for jewellery", "ecommerce website for food business",
        "b2b ecommerce website development", "shopify store for clothing brand",
        "ecommerce website for electronics", "ecommerce for manufacturers",
        "ecommerce website for pharmacy", "ecommerce website for auto parts",
        "d2c ecommerce website development", "multi vendor marketplace development",
    ],
    "cost": [
        "ecommerce website development cost", "shopify development cost",
        "how much does an ecommerce website cost", "magento development cost",
        "woocommerce website cost", "shopify plus cost", "cost to build online store",
    ],
    "hire": [
        "hire shopify developer", "hire ecommerce developer", "shopify development services",
        "ecommerce website development services", "shopify experts", "shopify partner agency",
        "custom ecommerce development services",
    ],
    "howto": [
        "how to build an ecommerce website", "how to start an online store",
        "how to migrate to shopify", "how to increase ecommerce sales",
        "how to optimize ecommerce website", "ecommerce website checklist",
    ],
}

COMMERCIAL_MARKERS = ("agency", "company", "developer", "development", "services",
                      "expert", "partner", "consultant", "freelancer", "hire", "firm")


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


def pull(job):
    bucket, seed, geo, loc, endpoint = job
    if endpoint == "keyword_suggestions":
        body = [{"keyword": seed, "location_code": loc, "language_code": "en",
                 "include_serp_info": False, "limit": 300,
                 "filters": [["keyword_info.search_volume", ">", 0]],
                 "order_by": ["keyword_info.search_volume,desc"]}]
    else:
        body = [{"keyword": seed, "location_code": loc, "language_code": "en",
                 "depth": 2, "limit": 300,
                 "filters": [["keyword_data.keyword_info.search_volume", ">", 0]],
                 "order_by": ["keyword_data.keyword_info.search_volume,desc"]}]
    r = post(f"dataforseo_labs/google/{endpoint}/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return bucket, seed, geo, rows, cost
    for it in items:
        kd = it.get("keyword_data") or it
        ki = (kd.get("keyword_info") or {})
        kp = (kd.get("keyword_properties") or {})
        rows.append({
            "bucket": bucket, "seed": seed, "geo": geo,
            "keyword": kd.get("keyword") or "",
            "volume": ki.get("search_volume") or 0,
            "cpc": ki.get("cpc") or 0,
            "competition": ki.get("competition") or 0,
            "kd": kp.get("keyword_difficulty"),
        })
    return bucket, seed, geo, rows, cost


if __name__ == "__main__":
    jobs = []
    for bucket, seeds in BUCKETS.items():
        for seed in seeds:
            for geo, loc in GEOS.items():
                # keyword_suggestions only for non-US to control cost; US gets both
                eps = ["keyword_suggestions", "related_keywords"] if geo == "us" else ["keyword_suggestions"]
                for ep in eps:
                    jobs.append((bucket, seed, geo, loc, ep))

    print(f"=== {len(jobs)} DataForSEO Labs calls ===")
    seen, cost = {}, 0.0
    with ThreadPoolExecutor(max_workers=10) as ex:
        for bucket, seed, geo, rows, c in ex.map(pull, jobs):
            cost += c
            for row in rows:
                key = (row["geo"], row["keyword"])
                # keep the richest record; first bucket to claim a keyword wins
                if key not in seen:
                    seen[key] = row

    per_geo = defaultdict(list)
    for row in seen.values():
        per_geo[row["geo"]].append(row)

    summary = {}
    for geo, rows in per_geo.items():
        rows.sort(key=lambda r: -r["volume"])
        with open(os.path.join(HERE, "data", f"ecom_leadgen_demand_{geo}.csv"), "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
            w.writeheader(); w.writerows(rows)

        b = defaultdict(lambda: {"kw": 0, "vol": 0, "comm_kw": 0, "comm_vol": 0,
                                 "cpc_sum": 0.0, "cpc_n": 0, "top": []})
        for r in rows:
            e = b[r["bucket"]]
            e["kw"] += 1; e["vol"] += r["volume"]
            if r["cpc"]:
                e["cpc_sum"] += r["cpc"]; e["cpc_n"] += 1
            if any(m in r["keyword"] for m in COMMERCIAL_MARKERS):
                e["comm_kw"] += 1; e["comm_vol"] += r["volume"]
                if len(e["top"]) < 25:
                    e["top"].append(r)
        for k, e in b.items():
            e["avg_cpc"] = round(e["cpc_sum"] / e["cpc_n"], 2) if e["cpc_n"] else 0
        summary[geo] = {k: dict(v) for k, v in b.items()}

        print(f"\n--- {geo.upper()} ---")
        print(f"{'bucket':10s} {'kws':>5s} {'total vol':>10s} {'comm kws':>9s} {'comm vol':>9s} {'avg CPC':>8s}")
        for k in BUCKETS:
            e = b.get(k)
            if not e:
                continue
            print(f"{k:10s} {e['kw']:>5,} {e['vol']:>10,} {e['comm_kw']:>9,} "
                  f"{e['comm_vol']:>9,} ${e['avg_cpc']:>7.2f}")

    json.dump(summary, open(os.path.join(HERE, "data", "ecom_leadgen_summary.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/ecom_leadgen_demand_*.csv + ecom_leadgen_summary.json")
