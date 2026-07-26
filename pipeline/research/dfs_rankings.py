#!/usr/bin/env python3
"""Pull factoryjet.com current organic rankings (DataForSEO Labs ranked_keywords)
across US/IN/UK. Writes data/rankings.csv and prints striking-distance opportunities."""
import os, json, base64, urllib.request, csv

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
URL = "https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live"
HERE = os.path.dirname(os.path.abspath(__file__))
LOC = {"us": 2840, "in": 2356, "uk": 2826}

rows = []; cost = 0.0
for loc, code in LOC.items():
    body = [{"target": "factoryjet.com", "location_code": code, "language_code": "en",
             "limit": 1000, "order_by": ["ranked_serp_element.serp_item.rank_absolute,asc"]}]
    req = urllib.request.Request(URL, data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    resp = json.loads(urllib.request.urlopen(req, timeout=90).read().decode())
    with open(os.path.join(HERE, "data", "raw", f"ranked__{loc}.json"), "w") as f:
        json.dump(resp, f)
    cost += resp.get("cost", 0) or 0
    try:
        items = resp["tasks"][0]["result"][0]["items"] or []
    except Exception:
        items = []
    for it in items:
        kd = it.get("keyword_data", {}); ki = kd.get("keyword_info", {}) or {}
        kp = kd.get("keyword_properties", {}) or {}; si = kd.get("search_intent_info", {}) or {}
        se = (it.get("ranked_serp_element", {}) or {}).get("serp_item", {}) or {}
        rows.append({
            "keyword": kd.get("keyword"), "location": loc,
            "position": se.get("rank_absolute"), "url": se.get("relative_url") or se.get("url"),
            "search_volume": ki.get("search_volume") or 0, "cpc": ki.get("cpc") or 0,
            "difficulty": kp.get("keyword_difficulty"), "intent": si.get("main_intent") or "",
        })

rows.sort(key=lambda r: (r["position"] or 999))
out = os.path.join(HERE, "data", "rankings.csv")
with open(out, "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["keyword","location","position","url","search_volume","cpc","difficulty","intent"])
    w.writeheader(); w.writerows(rows)

print(f"cost=${cost:.3f}  total_ranked={len(rows)}  csv={out}")
for loc in LOC:
    sub = [r for r in rows if r["location"] == loc]
    print(f"  {loc}: {len(sub)} keywords ranked")
print("\n=== STRIKING DISTANCE (pos 4-20, volume>=50) — fastest wins ===")
sd = [r for r in rows if r["position"] and 4 <= r["position"] <= 20 and r["search_volume"] >= 50]
sd.sort(key=lambda r: -r["search_volume"])
for r in sd[:40]:
    print(f"  vol={r['search_volume']:>6,}  pos={r['position']:>3}  kd={str(r['difficulty']):>3}  {r['location']}  {r['keyword']:45s} {r['url']}")
print(f"\n(striking-distance count: {len(sd)})")
