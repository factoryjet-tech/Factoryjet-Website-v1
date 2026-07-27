#!/usr/bin/env python3
"""
FactoryJet - data pull for the 3 US builds (2026-07-26):
  1. AI SEO cluster  (fix the routing leak to /services/ai-seo)
  2. City SEO pages  (Austin, Charlotte, Huntington Beach, Lakewood Ranch, Fargo, Sioux Falls)
  4. Roofing SEO     (single vertical test page)

Pulls per cluster, US (2840) / en:
  - keyword_suggestions  -> volume / CPC / KD / intent
  - SERP organic live advanced -> named competitors + People Also Ask
  - ranked_keywords on the top real competitors -> credible, citable competitor facts

Outputs (consumed by the build agents):
  data/build3_keywords.csv
  data/build3_paa.csv
  data/build3_competitors.csv
  data/build3_competitor_profile.csv
  data/build3_brief.json     <- per-cluster digest the agents actually read
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
    f'{os.environ["DATAFORSEO_LOGIN"]}:{os.environ["DATAFORSEO_PASSWORD"]}'.encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw"); os.makedirs(RAW, exist_ok=True)
DATA = os.path.join(HERE, "data")
US, LANG = 2840, "en"

KEYWORD_SEEDS = {
    "ai-seo":  ["ai seo agency", "ai seo services", "generative engine optimization",
                "answer engine optimization", "chatgpt seo"],
    "roofing": ["roofing seo", "roofing marketing", "roofing website design",
                "seo for roofers", "roofing leads"],
    "city":    ["austin seo", "charlotte seo", "fargo seo", "sioux falls seo",
                "huntington beach seo", "seo company near me"],
}

SERP_TERMS = [
    # AI SEO cluster (the exact queries currently leaking to the India blog)
    ("ai-seo", "ai seo agency"),
    ("ai-seo", "ai seo services"),
    ("ai-seo", "ai seo company"),
    ("ai-seo", "best ai seo agency"),
    ("ai-seo", "generative engine optimization services"),
    ("ai-seo", "answer engine optimization services"),
    # Roofing vertical
    ("roofing", "roofing seo"),
    ("roofing", "roofing seo company"),
    ("roofing", "seo for roofers"),
    ("roofing", "roofing marketing agency"),
    # Cities (local competitor sets + local PAA)
    ("city-austin", "austin seo"),
    ("city-austin", "austin seo agency"),
    ("city-charlotte", "charlotte seo company"),
    ("city-charlotte", "seo charlotte nc"),
    ("city-huntington-beach", "huntington beach seo"),
    ("city-lakewood-ranch", "lakewood ranch seo company"),
    ("city-fargo", "fargo seo"),
    ("city-sioux-falls", "sioux falls seo"),
]

EP = {
    "sug":  "/dataforseo_labs/google/keyword_suggestions/live",
    "serp": "/serp/google/organic/live/advanced",
    "ranked": "/dataforseo_labs/google/ranked_keywords/live",
}

def post(path, body):
    req = urllib.request.Request(BASE + path, data=json.dumps([body]).encode(),
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
def track(r):
    global cost; cost += (r.get("cost") or 0); return r

# ---------- 1. keywords ----------
kw = {}
for cluster, seeds in KEYWORD_SEEDS.items():
    for seed in seeds:
        r = track(post(EP["sug"], {"location_code": US, "language_code": LANG, "limit": 200,
            "keyword": seed, "order_by": ["keyword_info.search_volume,desc"],
            "filters": [["keyword_info.search_volume", ">", 10]]}))
        with open(os.path.join(RAW, f"b3__sug__{slug(seed)}.json"), "w") as f: json.dump(r, f)
        if r.get("_error"):
            print(f" ! sug {seed}: {r['_error']}", file=sys.stderr); time.sleep(.4); continue
        for it in items_of(r):
            k = it.get("keyword")
            if not k: continue
            ki = it.get("keyword_info") or {}; kp = it.get("keyword_properties") or {}
            si = it.get("search_intent_info") or {}
            sv = ki.get("search_volume") or 0
            rec = {"keyword": k, "cluster": cluster, "seed": seed, "search_volume": sv,
                   "cpc": round(ki.get("cpc") or 0, 2),
                   "competition": ki.get("competition_level") or "",
                   "kd": kp.get("keyword_difficulty"), "intent": si.get("main_intent") or ""}
            p = kw.get(k)
            if p is None or sv > p["search_volume"]:
                if p: rec["cluster"] = p["cluster"]; rec["seed"] = p["seed"]
                kw[k] = rec
        time.sleep(.4)

recs = sorted(kw.values(), key=lambda r: -r["search_volume"])
with open(os.path.join(DATA, "build3_keywords.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["keyword","cluster","seed","search_volume","cpc","competition","kd","intent"])
    w.writeheader(); w.writerows(recs)
print(f"[keywords] {len(recs)} unique")

# ---------- 2. SERP -> competitors + PAA ----------
comp = defaultdict(lambda: {"n":0,"pos":0.0,"clusters":set(),"titles":[]})
paa = []
for cluster, term in SERP_TERMS:
    r = track(post(EP["serp"], {"language_code": LANG, "location_code": US,
                                "keyword": term, "depth": 20}))
    with open(os.path.join(RAW, f"b3__serp__{slug(term)}.json"), "w") as f: json.dump(r, f)
    if r.get("_error"):
        print(f" ! serp {term}: {r['_error']}", file=sys.stderr); time.sleep(.5); continue
    for it in items_of(r):
        t = it.get("type")
        if t == "organic":
            d = it.get("domain")
            if not d: continue
            rank = it.get("rank_group") or it.get("rank_absolute") or 0
            comp[d]["n"] += 1; comp[d]["pos"] += rank; comp[d]["clusters"].add(cluster)
            if it.get("title") and len(comp[d]["titles"]) < 3:
                comp[d]["titles"].append(it["title"][:120])
        elif t == "people_also_ask":
            for el in (it.get("items") or []):
                q = el.get("title")
                if not q: continue
                # grab the expanded answer snippet where present, it grounds the FAQ copy
                ans = ""
                for e in (el.get("expanded_element") or []):
                    if e.get("description"): ans = e["description"][:600]; break
                paa.append({"cluster": cluster, "seed_term": term, "question": q, "serp_answer": ans})
    time.sleep(.5)

comp_rows = [{"domain": d, "appearances": v["n"], "avg_pos": round(v["pos"]/v["n"], 1),
              "clusters": "|".join(sorted(v["clusters"])), "sample_title": v["titles"][0] if v["titles"] else ""}
             for d, v in comp.items()]
comp_rows.sort(key=lambda r: (-r["appearances"], r["avg_pos"]))
with open(os.path.join(DATA, "build3_competitors.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["domain","appearances","avg_pos","clusters","sample_title"])
    w.writeheader(); w.writerows(comp_rows)

# dedupe PAA
seen = set(); paa_u = []
for p in paa:
    k = (p["cluster"], p["question"].lower())
    if k in seen: continue
    seen.add(k); paa_u.append(p)
with open(os.path.join(DATA, "build3_paa.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["cluster","seed_term","question","serp_answer"])
    w.writeheader(); w.writerows(paa_u)
print(f"[serp] {len(comp_rows)} competitor domains, {len(paa_u)} unique PAA")

# ---------- 3. profile the real agency competitors (so we can name them with facts) ----------
SKIP = {"reddit.com","youtube.com","linkedin.com","facebook.com","x.com","twitter.com",
        "clutch.co","designrush.com","g2.com","semrush.com","ahrefs.com","upwork.com",
        "wikipedia.org","medium.com","quora.com","yelp.com","expertise.com","themanifest.com",
        "goodfirms.co","trustpilot.com","glassdoor.com","indeed.com","hubspot.com",
        "google.com","forbes.com","shopify.com","wix.com","squarespace.com","gartner.com",
        "capterra.com","producthunt.com","github.com","openai.com"}
def is_agency(d): return not any(s in d for s in SKIP)
rivals = [c["domain"] for c in comp_rows if is_agency(c["domain"])][:10]

prof = []
for d in rivals:
    r = track(post(EP["ranked"], {"target": d, "location_code": US, "language_code": LANG,
        "limit": 12, "order_by": ["ranked_serp_element.serp_item.rank_group,asc"],
        "filters": [["ranked_serp_element.serp_item.rank_group", "<=", 10]]}))
    with open(os.path.join(RAW, f"b3__ranked__{slug(d)}.json"), "w") as f: json.dump(r, f)
    if r.get("_error"): time.sleep(.5); continue
    tops = []
    for it in items_of(r):
        kd_ = it.get("keyword_data") or {}
        se = ((it.get("ranked_serp_element") or {}).get("serp_item") or {})
        tops.append({"keyword": kd_.get("keyword"),
                     "pos": se.get("rank_group"),
                     "volume": (kd_.get("keyword_info") or {}).get("search_volume") or 0})
    tops.sort(key=lambda x: -(x["volume"] or 0))
    prof.append({"domain": d, "top_keywords": json.dumps(tops[:8])})
    time.sleep(.5)
with open(os.path.join(DATA, "build3_competitor_profile.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["domain","top_keywords"]); w.writeheader(); w.writerows(prof)
print(f"[competitor-profile] {len(prof)} agencies profiled")

# ---------- 4. per-cluster brief the agents read ----------
def top_kw(pred, n=45):
    out = [r for r in recs if pred(r)]
    return out[:n]

brief = {}
for cl, pred in {
    "ai-seo":  lambda r: r["cluster"] == "ai-seo",
    "roofing": lambda r: r["cluster"] == "roofing",
    "city":    lambda r: r["cluster"] == "city",
}.items():
    brief[cl] = {
        "keywords": top_kw(pred),
        "paa": [p for p in paa_u if p["cluster"] == cl or p["cluster"].startswith("city-")] if cl == "city"
               else [p for p in paa_u if p["cluster"] == cl],
        "competitors": [c for c in comp_rows if cl in c["clusters"] or
                        (cl == "city" and c["clusters"].startswith("city"))][:20],
    }
brief["_competitor_profiles"] = prof
brief["_all_paa"] = paa_u
brief["_all_competitors"] = comp_rows[:60]
with open(os.path.join(DATA, "build3_brief.json"), "w") as f:
    json.dump(brief, f, indent=1)

print(f"\n=== DONE  cost=${cost:.3f} ===")
print("PAA per cluster:", {k: len(v['paa']) for k, v in brief.items() if isinstance(v, dict) and 'paa' in v})
print("\nTop agency competitors (non-directory):")
for d in rivals[:10]: print("   ", d)
