#!/usr/bin/env python3
"""
Focused DataForSEO Labs pull for the Walmart Marketplace Agency landing page (US).
Seeds cover the commercial agency head terms + the sell-on-walmart blog cluster.
Reads DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from pipeline/research/.env.
Writes data/walmart_keywords.csv and prints a compact, decision-ready summary.
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re

HERE = os.path.dirname(os.path.abspath(__file__))

# load .env (simple parser, no deps)
envp = os.path.join(HERE, ".env")
if os.path.exists(envp):
    for line in open(envp):
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())

LOGIN = os.environ["DATAFORSEO_LOGIN"]
PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw")
os.makedirs(RAW, exist_ok=True)
US = 2840

ENDPOINT = {
    "sug": "/dataforseo_labs/google/keyword_suggestions/live",
    "idea": "/dataforseo_labs/google/keyword_ideas/live",
}

# (endpoint, seed)  — sug = contains seed; idea = semantically related
SEEDS = [
    ("sug", "walmart marketplace agency"),
    ("sug", "walmart advertising agency"),
    ("sug", "walmart marketing agency"),
    ("sug", "walmart ppc agency"),
    ("sug", "walmart seller consultant"),
    ("sug", "walmart marketplace management"),
    ("sug", "walmart account management"),
    ("sug", "walmart fulfillment services"),
    ("sug", "walmart connect agency"),
    ("sug", "walmart seller central"),
    ("idea", "walmart marketplace agency"),
    ("idea", "sell on walmart marketplace"),
    ("sug", "how to sell on walmart"),
]


def call(ep, seed):
    url = BASE + ENDPOINT[ep]
    body = {
        "location_code": US, "language_code": "en", "limit": 200,
        "order_by": ["keyword_info.search_volume,desc"],
        "filters": [["keyword_info.search_volume", ">", 10]],
    }
    if ep == "sug":
        body["keyword"] = seed
    else:
        body["keywords"] = [seed]
    req = urllib.request.Request(
        url, data=json.dumps([body]).encode(),
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
    rows = {}
    cost = 0.0
    for ep, seed in SEEDS:
        resp = call(ep, seed)
        with open(os.path.join(RAW, f"wm__{ep}__{slug(seed)}.json"), "w") as f:
            json.dump(resp, f)
        if resp.get("_error"):
            print(f"  ! {ep} '{seed}': {resp['_error']} {resp.get('_body','')}", file=sys.stderr)
            time.sleep(0.4); continue
        cost += resp.get("cost", 0) or 0
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
            rec = {
                "keyword": kw, "seed": seed, "search_volume": sv,
                "cpc": round(ki.get("cpc") or 0, 2),
                "competition": ki.get("competition_level") or "",
                "kd": kp.get("keyword_difficulty"),
                "intent": si.get("main_intent") or "",
            }
            prev = rows.get(kw)
            if prev is None or sv > prev["search_volume"]:
                rows[kw] = rec

    recs = sorted(rows.values(), key=lambda r: r["search_volume"], reverse=True)
    out = os.path.join(HERE, "data", "walmart_keywords.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "seed", "search_volume", "cpc", "competition", "kd", "intent"])
        w.writeheader(); w.writerows(recs)

    print(f"\n=== WALMART RUN COMPLETE  cost=${cost:.3f}  unique={len(recs)}  csv={out}")

    def show(title, pred, n=40):
        print(f"\n=== {title} ===")
        print(f"{'vol':>7}  {'kd':>4}  {'cpc':>7}  {'intent':<12} keyword")
        c = 0
        for r in recs:
            if not pred(r):
                continue
            kd = r["kd"] if r["kd"] is not None else "-"
            print(f"{r['search_volume']:>7,}  {str(kd):>4}  ${r['cpc']:>6}  {r['intent'][:12]:<12} {r['keyword']}")
            c += 1
            if c >= n:
                break

    def kd_ok(r):
        return r["kd"] is not None and r["kd"] <= 25

    # Commercial agency intent (the page's money terms)
    show("COMMERCIAL / AGENCY TERMS (agency|advertis|ppc|marketing|management|consultant|wfs|connect), any KD",
         lambda r: any(t in r["keyword"] for t in ["agency", "advertis", "ppc", "marketing", "management", "consultant", "wfs", "connect", "account manag"]))
    # Winnable long-tail (KD <= 25) commercial
    show("WINNABLE (KD<=25) — ALL terms",
         lambda r: kd_ok(r))
    # Blog cluster (informational 'how to sell' etc.)
    show("BLOG / INFORMATIONAL CLUSTER (how|what|without inventory|start|cost|fees)",
         lambda r: any(t in r["keyword"] for t in ["how ", "what ", "without inventory", "start sell", "cost to sell", "seller", "fees", "requirements"]))


if __name__ == "__main__":
    main()
