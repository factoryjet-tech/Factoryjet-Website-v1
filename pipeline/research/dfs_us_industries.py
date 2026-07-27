#!/usr/bin/env python3
"""
FactoryJet - US INDUSTRY/VERTICAL demand check (DataForSEO), 2026-07-26.
Question being answered: should we build industry landing pages
(manufacturing, automotive, real estate, healthcare, dental, roofing,
plumbers, electricians, restaurants, contractors, ...)?

For each vertical we pull US (2840) keyword_suggestions on the money patterns
a vertical landing page would target, then report volume / KD / intent so the
build decision is made on demand + winnability, not vibes.

Outputs: data/us_industry_keywords.csv  + raw JSON under data/raw/usind__*
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))

def load_env():
    with open(os.path.join(HERE, ".env")) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())
load_env()

AUTH = base64.b64encode(
    f'{os.environ["DATAFORSEO_LOGIN"]}:{os.environ["DATAFORSEO_PASSWORD"]}'.encode()
).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw"); os.makedirs(RAW, exist_ok=True)
DATA = os.path.join(HERE, "data")
US, LANG = 2840, "en"

# vertical -> seeds (the patterns an industry landing page would actually target)
VERTICALS = {
    "dental":        ["dental website design", "dental seo"],
    "healthcare":    ["medical website design", "healthcare seo"],
    "real-estate":   ["real estate website design", "real estate seo"],
    "law":           ["law firm website design", "law firm seo"],
    "roofing":       ["roofing website design", "roofing seo"],
    "plumbing":      ["plumber website design", "plumbing seo"],
    "electrician":   ["electrician website design", "electrician seo"],
    "hvac":          ["hvac website design", "hvac seo"],
    "contractor":    ["contractor website design", "construction website design"],
    "restaurant":    ["restaurant website design", "restaurant seo"],
    "manufacturing": ["manufacturing website design", "manufacturing seo"],
    "automotive":    ["automotive website design", "auto dealer seo"],
    "ecommerce-dtc": ["dtc brand website design", "fashion ecommerce website design"],
    "home-services": ["home services marketing agency", "home service seo"],
}

def post(path, body):
    req = urllib.request.Request(
        BASE + path, data=json.dumps([body]).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:300]}
    except Exception as e:
        return {"_error": str(e)}

def slug(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:48]
def items_of(r):
    try: return r["tasks"][0]["result"][0]["items"] or []
    except (KeyError, TypeError, IndexError): return []

cost = 0.0
rows = {}
for vert, seeds in VERTICALS.items():
    for seed in seeds:
        body = {"location_code": US, "language_code": LANG, "limit": 150,
                "keyword": seed,
                "order_by": ["keyword_info.search_volume,desc"],
                "filters": [["keyword_info.search_volume", ">", 10]]}
        resp = post("/dataforseo_labs/google/keyword_suggestions/live", body)
        cost += (resp.get("cost") or 0)
        with open(os.path.join(RAW, f"usind__{slug(seed)}.json"), "w") as f:
            json.dump(resp, f)
        if resp.get("_error"):
            print(f"  ! {seed}: {resp['_error']}", file=sys.stderr); time.sleep(0.4); continue
        for it in items_of(resp):
            kw = it.get("keyword")
            if not kw: continue
            ki = it.get("keyword_info") or {}
            kp = it.get("keyword_properties") or {}
            si = it.get("search_intent_info") or {}
            sv = ki.get("search_volume") or 0
            rec = {"keyword": kw, "vertical": vert, "seed": seed, "search_volume": sv,
                   "cpc": round(ki.get("cpc") or 0, 2),
                   "competition": ki.get("competition_level") or "",
                   "kd": kp.get("keyword_difficulty"),
                   "intent": si.get("main_intent") or ""}
            prev = rows.get(kw)
            if prev is None or sv > prev["search_volume"]:
                if prev: rec["vertical"] = prev["vertical"]; rec["seed"] = prev["seed"]
                rows[kw] = rec
        time.sleep(0.4)

recs = sorted(rows.values(), key=lambda r: -r["search_volume"])
with open(os.path.join(DATA, "us_industry_keywords.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["keyword","vertical","seed","search_volume","cpc","competition","kd","intent"])
    w.writeheader(); w.writerows(recs)

print(f"=== DONE  cost=${cost:.3f}  unique_keywords={len(recs)} ===\n")

# per-vertical winnability summary
agg = defaultdict(lambda: {"n":0,"vol":0,"win_n":0,"win_vol":0,"best":[]})
for r in recs:
    a = agg[r["vertical"]]
    a["n"] += 1; a["vol"] += r["search_volume"]
    if r["kd"] is not None and r["kd"] <= 20 and r["intent"] in ("commercial","transactional"):
        a["win_n"] += 1; a["win_vol"] += r["search_volume"]
        a["best"].append(r)

print(f"{'vertical':16s} {'kw':>5} {'tot vol':>9} {'KD<=20 comm':>12} {'win vol':>9}")
for v, a in sorted(agg.items(), key=lambda x: -x[1]["win_vol"]):
    print(f"  {v:16s} {a['n']:>5} {a['vol']:>9,} {a['win_n']:>12} {a['win_vol']:>9,}")

print("\n=== TOP WINNABLE (KD<=20, commercial) PER VERTICAL ===")
for v, a in sorted(agg.items(), key=lambda x: -x[1]["win_vol"]):
    if not a["best"]:
        print(f"\n[{v}]  none"); continue
    print(f"\n[{v}]")
    for r in sorted(a["best"], key=lambda x: -x["search_volume"])[:6]:
        print(f"   {r['search_volume']:>7,}  kd={str(r['kd']):>3}  cpc=${r['cpc']:>6.1f}  {r['keyword']}")
