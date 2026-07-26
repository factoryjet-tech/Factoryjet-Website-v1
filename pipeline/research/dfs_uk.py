#!/usr/bin/env python3
"""
FactoryJet — UK market research harness (DataForSEO).
Created 2026-07-25 for the UK lead-gen page/blog plan.

Covers the 7 priority services across the UK (location 2826, en):
  E-Commerce, AI Commerce, Agentic Commerce, AI SEO, SEO, Website Design, AI Agent Dev.

Pulls, all UK-scoped:
  1. keyword_suggestions + keyword_ideas  -> volume / CPC / KD / intent  (uk_keywords.csv)
  2. SERP organic live advanced           -> competitors + People Also Ask (uk_serp_competitors.csv, uk_paa.csv)
  3. labs competitors_domain              -> organic SEO competitors      (uk_labs_competitors.csv)
  4. labs ranked_keywords (factoryjet)    -> what we already rank for UK   (uk_our_rankings.csv)
  5. backlinks summary (us + rivals)      -> authority gap                 (uk_backlinks.csv)

Reads DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from pipeline/research/.env
Raw responses saved under data/raw/uk__*.json
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))

# ---- load .env (KEY=VALUE lines) ----
def load_env():
    p = os.path.join(HERE, ".env")
    with open(p) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())
load_env()

LOGIN = os.environ["DATAFORSEO_LOGIN"]
PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw")
os.makedirs(RAW, exist_ok=True)
DATA = os.path.join(HERE, "data")

UK = 2826
LANG = "en"

# service -> list of (endpoint, seed)  endpoint: sug=suggestions, idea=ideas
SERVICES = {
    "ecommerce": [
        ("sug", "ecommerce development agency"),
        ("sug", "ecommerce agency"),
        ("sug", "shopify development"),
        ("sug", "shopify agency"),
        ("sug", "ecommerce website design"),
        ("sug", "woocommerce development"),
    ],
    "ai-commerce": [
        ("sug", "ai ecommerce"),
        ("sug", "ai for ecommerce"),
        ("idea", "ai ecommerce agency"),
    ],
    "agentic-commerce": [
        ("sug", "agentic commerce"),
        ("sug", "agentic ai"),
        ("idea", "agentic ai ecommerce"),
    ],
    "ai-seo": [
        ("sug", "ai seo"),
        ("sug", "ai seo agency"),
        ("sug", "generative engine optimization"),
        ("sug", "answer engine optimization"),
    ],
    "seo": [
        ("sug", "seo agency"),
        ("sug", "seo services"),
        ("sug", "ecommerce seo"),
        ("sug", "seo audit"),
        ("sug", "local seo"),
    ],
    "web-design": [
        ("sug", "web design agency"),
        ("sug", "web design company"),
        ("sug", "small business web design"),
        ("sug", "website design"),
    ],
    "ai-agent-dev": [
        ("sug", "ai agent development"),
        ("sug", "ai automation agency"),
        ("sug", "ai chatbot development"),
        ("sug", "ai agents for business"),
    ],
}

# money terms for SERP + PAA (kept tight for cost)
SERP_TERMS = [
    ("ecommerce", "ecommerce development agency uk"),
    ("ecommerce", "shopify agency uk"),
    ("ai-commerce", "ai for ecommerce"),
    ("agentic-commerce", "agentic commerce"),
    ("ai-seo", "ai seo agency uk"),
    ("ai-seo", "generative engine optimization"),
    ("seo", "seo agency uk"),
    ("seo", "ecommerce seo agency"),
    ("web-design", "web design agency uk"),
    ("web-design", "small business web design uk"),
    ("ai-agent-dev", "ai automation agency uk"),
    ("ai-agent-dev", "ai agent development company"),
]

EP = {
    "sug": "/dataforseo_labs/google/keyword_suggestions/live",
    "idea": "/dataforseo_labs/google/keyword_ideas/live",
    "serp": "/serp/google/organic/live/advanced",
    "comp": "/dataforseo_labs/google/competitors_domain/live",
    "ranked": "/dataforseo_labs/google/ranked_keywords/live",
    "bl": "/backlinks/summary/live",
}

def post(path, body):
    url = BASE + path
    data = json.dumps([body]).encode()
    req = urllib.request.Request(url, data=data, headers={
        "Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:400]}
    except Exception as e:
        return {"_error": str(e)}

def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:48]

def items_of(resp):
    try:
        return resp["tasks"][0]["result"][0]["items"] or []
    except (KeyError, TypeError, IndexError):
        return []

cost = 0.0
def add_cost(resp):
    global cost
    cost += (resp.get("cost") or 0)

# ---------------- 1. KEYWORDS ----------------
def run_keywords():
    rows = {}  # keyword -> record (richest)
    for service, tasks in SERVICES.items():
        for ep, seed in tasks:
            body = {
                "location_code": UK, "language_code": LANG, "limit": 200,
                "order_by": ["keyword_info.search_volume,desc"],
                "filters": [["keyword_info.search_volume", ">", 5]],
            }
            if ep == "sug":
                body["keyword"] = seed
            else:
                body["keywords"] = [seed]
            resp = post(EP[ep], body)
            add_cost(resp)
            with open(os.path.join(RAW, f"uk__{ep}__{slug(seed)}.json"), "w") as f:
                json.dump(resp, f)
            if resp.get("_error"):
                print(f"  ! {ep} '{seed}': {resp['_error']}", file=sys.stderr)
                time.sleep(0.4); continue
            for it in items_of(resp):
                kw = it.get("keyword")
                if not kw:
                    continue
                ki = it.get("keyword_info") or {}
                kp = it.get("keyword_properties") or {}
                si = it.get("search_intent_info") or {}
                sv = ki.get("search_volume") or 0
                rec = {
                    "keyword": kw, "service": service, "seed": seed,
                    "search_volume": sv, "cpc": round(ki.get("cpc") or 0, 2),
                    "competition": ki.get("competition_level") or "",
                    "kd": kp.get("keyword_difficulty"),
                    "intent": (si.get("main_intent") or ""),
                }
                prev = rows.get(kw)
                if prev is None or sv > prev["search_volume"]:
                    if prev:  # keep first-seen service tag
                        rec["service"] = prev["service"]; rec["seed"] = prev["seed"]
                    rows[kw] = rec
            time.sleep(0.4)
    recs = sorted(rows.values(), key=lambda r: r["search_volume"], reverse=True)
    with open(os.path.join(DATA, "uk_keywords.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword","service","seed","search_volume","cpc","competition","kd","intent"])
        w.writeheader(); w.writerows(recs)
    print(f"[keywords] {len(recs)} unique  -> uk_keywords.csv")
    return recs

# ---------------- 2. SERP competitors + PAA ----------------
def run_serp():
    comp_count = defaultdict(lambda: {"n":0,"pos_sum":0.0})
    paa_rows = []
    for service, term in SERP_TERMS:
        body = {"language_code": LANG, "location_code": UK, "keyword": term, "depth": 20}
        resp = post(EP["serp"], body)
        add_cost(resp)
        with open(os.path.join(RAW, f"uk__serp__{slug(term)}.json"), "w") as f:
            json.dump(resp, f)
        if resp.get("_error"):
            print(f"  ! serp '{term}': {resp['_error']}", file=sys.stderr)
            time.sleep(0.5); continue
        for it in items_of(resp):
            t = it.get("type")
            if t == "organic":
                dom = it.get("domain")
                rp = it.get("rank_group") or it.get("rank_absolute") or 0
                if dom:
                    comp_count[dom]["n"] += 1
                    comp_count[dom]["pos_sum"] += rp
            elif t == "people_also_ask":
                for el in (it.get("items") or []):
                    q = el.get("title")
                    if q:
                        paa_rows.append({"service": service, "seed_term": term, "question": q})
        time.sleep(0.5)
    comp = [{"domain":d, "appearances":v["n"], "avg_pos": round(v["pos_sum"]/v["n"],1)}
            for d,v in comp_count.items()]
    comp.sort(key=lambda r: (-r["appearances"], r["avg_pos"]))
    with open(os.path.join(DATA, "uk_serp_competitors.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["domain","appearances","avg_pos"]); w.writeheader(); w.writerows(comp)
    with open(os.path.join(DATA, "uk_paa.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["service","seed_term","question"]); w.writeheader(); w.writerows(paa_rows)
    print(f"[serp] {len(comp)} competitor domains, {len(paa_rows)} PAA questions")
    return comp

# ---------------- 3. Labs competitors_domain ----------------
def run_labs_competitors():
    body = {"target":"factoryjet.com","location_code":UK,"language_code":LANG,"limit":50,
            "order_by":["metrics.organic.count,desc"]}
    resp = post(EP["comp"], body); add_cost(resp)
    with open(os.path.join(RAW, "uk__labs_competitors.json"), "w") as f:
        json.dump(resp, f)
    rows = []
    for it in items_of(resp):
        m = ((it.get("metrics") or {}).get("organic") or {})
        rows.append({"domain": it.get("domain"),
                     "intersections": it.get("intersections"),
                     "their_organic_kw": m.get("count"),
                     "their_etv": round(m.get("etv") or 0, 1)})
    with open(os.path.join(DATA, "uk_labs_competitors.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["domain","intersections","their_organic_kw","their_etv"]); w.writeheader(); w.writerows(rows)
    print(f"[labs-competitors] {len(rows)} domains")

# ---------------- 4. Our UK rankings ----------------
def run_our_rankings():
    body = {"target":"factoryjet.com","location_code":UK,"language_code":LANG,"limit":300,
            "order_by":["ranked_serp_element.serp_item.rank_group,asc"],
            "filters":[["ranked_serp_element.serp_item.rank_group","<=",50]]}
    resp = post(EP["ranked"], body); add_cost(resp)
    with open(os.path.join(RAW, "uk__our_rankings.json"), "w") as f:
        json.dump(resp, f)
    rows = []
    for it in items_of(resp):
        kd = it.get("keyword_data") or {}
        ki = kd.get("keyword_info") or {}
        se = ((it.get("ranked_serp_element") or {}).get("serp_item") or {})
        rows.append({"keyword": kd.get("keyword"),
                     "position": se.get("rank_group"),
                     "search_volume": ki.get("search_volume") or 0,
                     "url": se.get("url")})
    rows.sort(key=lambda r: (r["position"] or 999, -(r["search_volume"] or 0)))
    with open(os.path.join(DATA, "uk_our_rankings.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword","position","search_volume","url"]); w.writeheader(); w.writerows(rows)
    print(f"[our-rankings] {len(rows)} UK keywords where factoryjet ranks <=50")

# ---------------- 5. Backlinks (authority gap) ----------------
def run_backlinks(competitor_domains):
    targets = ["factoryjet.com"] + competitor_domains[:6]
    rows = []
    for t in targets:
        body = {"target": t, "internal_list_limit": 10, "backlinks_status_type": "live",
                "include_subdomains": True}
        resp = post(EP["bl"], body); add_cost(resp)
        with open(os.path.join(RAW, f"uk__bl__{slug(t)}.json"), "w") as f:
            json.dump(resp, f)
        try:
            r = resp["tasks"][0]["result"][0]
            rows.append({"target": t, "rank": r.get("rank"),
                         "backlinks": r.get("backlinks"),
                         "referring_domains": r.get("referring_domains"),
                         "referring_main_domains": r.get("referring_main_domains"),
                         "referring_ips": r.get("referring_ips")})
        except (KeyError, TypeError, IndexError):
            rows.append({"target": t, "rank": None, "backlinks": None,
                         "referring_domains": None, "referring_main_domains": None, "referring_ips": None})
        time.sleep(0.6)
    with open(os.path.join(DATA, "uk_backlinks.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["target","rank","backlinks","referring_domains","referring_main_domains","referring_ips"])
        w.writeheader(); w.writerows(rows)
    print(f"[backlinks] {len(rows)} targets profiled")

def main():
    print("=== FactoryJet UK research run ===")
    run_keywords()
    comp = run_serp()
    run_labs_competitors()
    run_our_rankings()
    # backlink comparison on the most frequent UK SERP rivals (skip aggregators/marketplaces)
    skip = {"trustpilot.com","clutch.co","designrush.com","g2.com","reddit.com","linkedin.com",
            "facebook.com","youtube.com","glassdoor.com","upwork.com","yell.com","medium.com"}
    rivals = [c["domain"] for c in comp if c["domain"] not in skip][:6]
    run_backlinks(rivals)
    print(f"\n=== DONE  approx cost=${cost:.3f} ===")

if __name__ == "__main__":
    main()
