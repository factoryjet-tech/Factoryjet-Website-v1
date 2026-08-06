#!/usr/bin/env python3
"""Is "ai automation agency" (4,400/mo) a BUYER term or an aspiring-agency-owner term?

GSC shows /services/ai-automation at position 4-6 for the "+usa" modifiers but position
57.7 for the bare head term. Before investing in closing that gap, check what the SERP
actually serves. The demand pull on 2026-08-06 surfaced a suspicious cluster around the
head term: "how to start an ai automation agency", "ai automation agency course",
"ai automation agency business model", "white label ai automation agency". That is the
creator/course niche, not a buyer.

Same trap the comparison-page analysis caught: high volume, low KD, zero commercial intent.
"""
import os, json, base64, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
for line in open(os.path.join(HERE, ".env")):
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
AUTH = base64.b64encode(f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()

KEYWORDS = [
    "ai automation agency",
    "ai automation agency usa",
    "ai automation services",
    "ai automation agency for small businesses",
]


def post(path, body, timeout=180):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}", data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"error": str(e)}


def check(kw):
    r = post("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": 2840, "language_code": "en",
        "device": "desktop", "os": "windows", "depth": 20, "load_async_ai_overview": True}])
    out = {"kw": kw, "cost": r.get("cost", 0), "top10": [], "aio": False, "aio_sources": [],
           "us_pos": None, "types": {}}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:200]; return out
    for it in items:
        t = it.get("type"); out["types"][t] = out["types"].get(t, 0) + 1
        if t == "organic":
            dom = it.get("domain") or ""
            if len(out["top10"]) < 10:
                out["top10"].append(f"{it.get('rank_group')}. {dom} :: {(it.get('title') or '')[:70]}")
            if "factoryjet" in dom and out["us_pos"] is None:
                out["us_pos"] = it.get("rank_group")
        elif t == "ai_overview":
            out["aio"] = True
            refs = it.get("references") or []
            for sub in (it.get("items") or []):
                refs += (sub.get("references") or [])
            out["aio_sources"] = [x.get("domain") for x in refs if x.get("domain")][:10]
    return out


if __name__ == "__main__":
    cost = 0
    with ThreadPoolExecutor(max_workers=4) as ex:
        for o in ex.map(check, KEYWORDS):
            cost += o.get("cost", 0)
            print("\n" + "=" * 78)
            print(f"KEYWORD: {o['kw']}   | factoryjet organic pos: {o['us_pos']}")
            print(f"SERP features: {o['types']}")
            if o["aio"]:
                print(f"AI Overview sources: {', '.join(o['aio_sources'])}")
            for l in o["top10"]:
                print("  " + l)
    print(f"\nspend ${cost:.3f}")
