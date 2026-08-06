#!/usr/bin/env python3
"""AI AGENT + AEO/GEO DEMAND PULL (2026-08-06).

The e-commerce space is measured (ECOMMERCE-LEADGEN-PLAN.md). The two other
pillars Bhavesh named are not:

  1. AI Agent Development — GSC shows 1,711 impressions / 9 clicks in 90 days
     across every agent page we own. Is that a demand problem or a page problem?
  2. AI SEO / GEO / AEO / AIO — GSC shows 20,300 impressions / 50 clicks. We rank
     position 3-14 on generic head terms and convert none of it. How big is the
     pool actually, and is AEO/GEO its own market or a synonym?

Buckets (each seeded separately so volumes are directly comparable):
  agent_hire     — "ai agent development company", buy-side agent terms
  agent_vertical — support/sales/ops/manufacturing/RFQ agents (Bhavesh's list)
  agent_build    — frameworks, MCP, orchestration (developer-side, low intent)
  aeo_geo        — answer/generative engine optimization, LLM visibility
  ai_seo_hire    — the terms we already rank 3-14 for, sized properly
  commerce_gap   — Shopify Plus / wholesale / distribution, the named gaps

Writes data/agent_geo_demand_<geo>.csv + data/agent_geo_summary.json
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

GEOS = {"us": 2840, "uk": 2826, "india": 2356}

# (bucket, seed, [geos]) — most seeds US-only to control spend
BUCKETS = {
    "agent_hire": [
        "ai agent development company",
        "ai agent development services",
        "hire ai agent developer",
        "enterprise ai agent development",
        "ai automation agency",
    ],
    "agent_vertical": [
        "ai agent for customer support",
        "ai sales agent software",
        "ai agent for manufacturing",
        "rfq automation software",
        "ai agent for procurement",
        "ai agent for operations",
        "ai voice agent for business",
        "ai agent for supply chain",
    ],
    "agent_build": [
        "build ai agent",
        "ai agent orchestration platform",
        "mcp server development",
    ],
    "aeo_geo": [
        "answer engine optimization",
        "generative engine optimization",
        "llm seo",
        "chatgpt seo",
        "ai search visibility",
        "brand visibility in ai search",
    ],
    "ai_seo_hire": [
        "ai seo agency",
        "ai seo services",
    ],
    "commerce_gap": [
        "shopify plus agency",
        "wholesale ecommerce platform",
        "distributor ecommerce software",
        "punchout catalog",
    ],
}

# seeds pulled in all three geos (the rest are US-only)
MULTI_GEO = {"ai seo agency", "ai seo services", "answer engine optimization",
             "generative engine optimization", "ai agent development company",
             "ai automation agency"}

COMMERCIAL = ("agency", "company", "companies", "services", "service", "consultant",
              "consulting", "hire", "developer", "developers", "firm", "vendor",
              "partner", "cost", "pricing", "price", "best", "top")


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
    bucket, seed, geo, loc = job
    body = [{"keyword": seed, "location_code": loc, "language_code": "en",
             "include_serp_info": False, "limit": 300,
             "filters": [["keyword_info.search_volume", ">", 0]],
             "order_by": ["keyword_info.search_volume,desc"]}]
    r = post("dataforseo_labs/google/keyword_suggestions/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost
    for it in items:
        ki = it.get("keyword_info") or {}
        kp = it.get("keyword_properties") or {}
        rows.append({
            "bucket": bucket, "seed": seed, "geo": geo,
            "keyword": it.get("keyword") or "",
            "volume": ki.get("search_volume") or 0,
            "cpc": ki.get("cpc") or 0,
            "kd": kp.get("keyword_difficulty"),
        })
    return rows, cost


if __name__ == "__main__":
    jobs = []
    for bucket, seeds in BUCKETS.items():
        for seed in seeds:
            geos = GEOS.items() if seed in MULTI_GEO else [("us", 2840)]
            for geo, loc in geos:
                jobs.append((bucket, seed, geo, loc))

    print(f"=== {len(jobs)} DataForSEO Labs calls ===")
    seen, cost = {}, 0.0
    with ThreadPoolExecutor(max_workers=10) as ex:
        for rows, c in ex.map(pull, jobs):
            cost += c
            for row in rows:
                key = (row["geo"], row["keyword"])
                if key not in seen:
                    seen[key] = row

    per_geo = defaultdict(list)
    for row in seen.values():
        per_geo[row["geo"]].append(row)

    summary = {"cost_usd": round(cost, 4), "geos": {}}
    for geo, rows in per_geo.items():
        rows.sort(key=lambda r: -r["volume"])
        with open(os.path.join(HERE, "data", f"agent_geo_demand_{geo}.csv"), "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
            w.writeheader(); w.writerows(rows)

        b = defaultdict(lambda: {"kw": 0, "vol": 0, "comm_kw": 0, "comm_vol": 0,
                                 "value": 0.0, "kds": [], "top": []})
        for r in rows:
            e = b[r["bucket"]]
            e["kw"] += 1; e["vol"] += r["volume"]
            if r["kd"] is not None:
                e["kds"].append(r["kd"])
            if any(m in r["keyword"] for m in COMMERCIAL):
                e["comm_kw"] += 1; e["comm_vol"] += r["volume"]
                e["value"] += r["volume"] * (r["cpc"] or 0)
                e["top"].append(r)
        for k, e in b.items():
            e["kds"].sort()
            e["median_kd"] = e["kds"][len(e["kds"]) // 2] if e["kds"] else None
            del e["kds"]
            e["top"] = sorted(e["top"], key=lambda r: -(r["volume"] * (r["cpc"] or 0)))[:30]
            e["value"] = round(e["value"], 0)
        summary["geos"][geo] = dict(b)

    with open(os.path.join(HERE, "data", "agent_geo_summary.json"), "w") as f:
        json.dump(summary, f, indent=2)

    print(f"\nspend ${cost:.3f}\n")
    for geo, buckets in summary["geos"].items():
        print(f"--- {geo.upper()} ---")
        print(f"{'bucket':<16}{'kw':>6}{'vol/mo':>10}{'commVol':>10}{'medKD':>7}{'value/mo':>12}")
        for k, e in sorted(buckets.items(), key=lambda x: -x[1]["value"]):
            print(f"{k:<16}{e['kw']:>6}{e['vol']:>10}{e['comm_vol']:>10}"
                  f"{str(e['median_kd']):>7}{'$' + format(int(e['value']), ','):>12}")
        print()
