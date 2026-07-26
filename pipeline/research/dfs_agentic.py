#!/usr/bin/env python3
"""DataForSEO Labs pull for the Agentic Commerce / AI Commerce pillar (US).
Emerging-category, first-mover AI-citation play: find winnable definitional + commercial terms.
Writes data/agentic_keywords.csv and prints decision-ready splits."""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re

HERE = os.path.dirname(os.path.abspath(__file__))
for line in open(os.path.join(HERE, ".env")):
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip())

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw"); os.makedirs(RAW, exist_ok=True)
US = 2840
ENDPOINT = {"sug": "/dataforseo_labs/google/keyword_suggestions/live",
            "idea": "/dataforseo_labs/google/keyword_ideas/live"}

SEEDS = [
    ("sug", "agentic commerce"),
    ("sug", "ai commerce"),
    ("sug", "agentic ai"),
    ("sug", "what is agentic ai"),
    ("sug", "agentic ai ecommerce"),
    ("sug", "ai agents for ecommerce"),
    ("sug", "ai shopping agent"),
    ("sug", "conversational commerce"),
    ("sug", "agentic ai use cases"),
    ("sug", "ai agent for business"),
    ("idea", "agentic commerce"),
    ("idea", "agentic ai for ecommerce"),
    ("idea", "ai commerce"),
]


def call(ep, seed):
    url = BASE + ENDPOINT[ep]
    body = {"location_code": US, "language_code": "en", "limit": 200,
            "order_by": ["keyword_info.search_volume,desc"],
            "filters": [["keyword_info.search_volume", ">", 10]]}
    body["keyword" if ep == "sug" else "keywords"] = seed if ep == "sug" else [seed]
    req = urllib.request.Request(url, data=json.dumps([body]).encode(),
                                 headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
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
    rows = {}; cost = 0.0
    for ep, seed in SEEDS:
        resp = call(ep, seed)
        with open(os.path.join(RAW, f"ag__{ep}__{slug(seed)}.json"), "w") as f:
            json.dump(resp, f)
        if resp.get("_error"):
            print(f"  ! {ep} '{seed}': {resp['_error']} {resp.get('_body','')}", file=sys.stderr); time.sleep(0.4); continue
        cost += resp.get("cost", 0) or 0
        try:
            items = resp["tasks"][0]["result"][0]["items"] or []
        except (KeyError, TypeError, IndexError):
            items = []
        for it in items:
            kw = it.get("keyword")
            if not kw:
                continue
            ki = it.get("keyword_info") or {}; kp = it.get("keyword_properties") or {}; si = it.get("search_intent_info") or {}
            sv = ki.get("search_volume") or 0
            rec = {"keyword": kw, "seed": seed, "search_volume": sv, "cpc": round(ki.get("cpc") or 0, 2),
                   "competition": ki.get("competition_level") or "", "kd": kp.get("keyword_difficulty"),
                   "intent": si.get("main_intent") or ""}
            prev = rows.get(kw)
            if prev is None or sv > prev["search_volume"]:
                rows[kw] = rec

    recs = sorted(rows.values(), key=lambda r: r["search_volume"], reverse=True)
    out = os.path.join(HERE, "data", "agentic_keywords.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "seed", "search_volume", "cpc", "competition", "kd", "intent"])
        w.writeheader(); w.writerows(recs)
    print(f"\n=== AGENTIC RUN COMPLETE  cost=${cost:.3f}  unique={len(recs)}  csv={out}")

    def show(title, pred, n=34):
        print(f"\n=== {title} ===")
        print(f"{'vol':>8}  {'kd':>4}  {'cpc':>7}  {'intent':<12} keyword")
        c = 0
        for r in recs:
            if not pred(r):
                continue
            kd = r["kd"] if r["kd"] is not None else "-"
            print(f"{r['search_volume']:>8,}  {str(kd):>4}  ${r['cpc']:>6}  {r['intent'][:12]:<12} {r['keyword']}")
            c += 1
            if c >= n:
                break

    show("DEFINITIONAL / AI-CITATION (what is / how / vs / meaning / examples / use cases)",
         lambda r: any(t in r["keyword"] for t in ["what is", "what are", "how is", "how does", "how do", "meaning", "definition", "examples", "example of", "use cases", " vs ", "explained", "difference"]))
    show("AGENTIC COMMERCE / AI COMMERCE core terms",
         lambda r: any(t in r["keyword"] for t in ["agentic commerce", "ai commerce", "agentic ecommerce", "agentic ai commerce", "ai shopping", "shopping agent", "commerce agent", "autonomous commerce"]))
    show("COMMERCIAL / SERVICE intent (agency|platform|company|services|solutions|software|for business|for ecommerce)",
         lambda r: r["cpc"] and r["cpc"] > 2 and any(t in r["keyword"] for t in ["agency", "platform", "company", "services", "solution", "software", "for business", "for ecommerce", "for retail", "tools", "consulting", "development"]))
    show("WINNABLE (KD<=25) with volume>=200",
         lambda r: r["kd"] is not None and r["kd"] <= 25 and r["search_volume"] >= 200)


if __name__ == "__main__":
    main()
