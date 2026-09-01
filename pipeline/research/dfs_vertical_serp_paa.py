#!/usr/bin/env python3
"""
Fetch SERP and People Also Ask (PAA) questions for top vertical AI queries.
"""

import os
import json
import base64
import urllib.request
import urllib.error

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

LOGIN = os.environ.get("DATAFORSEO_LOGIN")
PW = os.environ.get("DATAFORSEO_PASSWORD")
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"

TOP_QUERIES = [
    "ai medical receptionist",
    "dental ai receptionist",
    "ai voice agent for healthcare",
    "ai agents for manufacturing",
    "ai voice agent for restaurant"
]

def fetch_serp_paa():
    payload = [
        {
            "keyword": q,
            "location_code": 2840,
            "language_code": "en",
            "device": "desktop",
            "os": "windows",
            "depth": 10
        }
        for q in TOP_QUERIES
    ]
    req = urllib.request.Request(
        f"{BASE}/serp/google/organic/live/advanced",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            res = json.loads(r.read().decode())
            results = {}
            for task in res.get("tasks", []):
                q = task.get("data", {}).get("keyword")
                results[q] = {
                    "organic_competitors": [],
                    "people_also_ask": [],
                    "ai_overview_present": False
                }
                for res_item in (task.get("result") or []):
                    for it in (res_item.get("items") or []):
                        itype = it.get("type")
                        if itype == "organic":
                            results[q]["organic_competitors"].append({
                                "domain": it.get("domain"),
                                "url": it.get("url"),
                                "title": it.get("title")
                            })
                        elif itype == "people_also_ask":
                            for paa_it in (it.get("items") or []):
                                results[q]["people_also_ask"].append(paa_it.get("title"))
                        elif itype == "ai_overview":
                            results[q]["ai_overview_present"] = True
            return results
    except Exception as e:
        print(f"Error fetching SERP: {e}")
        return {}

def main():
    res = fetch_serp_paa()
    out_file = os.path.join(HERE, "data", "vertical_serp_paa_results.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(res, f, indent=2)
    print(f"Saved SERP & PAA data to {out_file}")
    
    for q, d in res.items():
        print(f"\n==========================================")
        print(f"QUERY: {q}")
        print(f"AI Overview: {d['ai_overview_present']}")
        print(f"Top 3 Organic Competitors:")
        for c in d["organic_competitors"][:3]:
            print(f"  - {c['domain']}: {c['title']} ({c['url']})")
        print(f"People Also Ask ({len(d['people_also_ask'])}):")
        for p in d["people_also_ask"][:5]:
            print(f"  ? {p}")

if __name__ == "__main__":
    main()
