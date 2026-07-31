#!/usr/bin/env python3
"""PHASE A2 — fix related_keywords (different filter field path) and build the
per-vertical target shortlist.

DataForSEO returns Google-Ads-clustered volume, so dozens of phrasings share one
volume figure (all 12 'best seo company in india' variants = 3,600). Selecting
targets naively would pick 12 slots for one real query. We collapse each cluster
to its canonical phrasing before shortlisting.
"""
import os, json, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))
LOC = 2356

SEEDS = ["seo agency", "ai seo", "web design company", "web development company",
         "ecommerce development company", "shopify development", "ai agency",
         "ai agent development", "digital marketing agency",
         "generative engine optimization", "answer engine optimization"]

# map a keyword to the FactoryJet service page that should own it
VERTICALS = {
    "ai_seo":      [r"\bai seo\b", r"generative engine", r"\bgeo\b", r"answer engine", r"\baeo\b", r"ai search"],
    "seo":         [r"\bseo\b"],
    "web_design":  [r"web design", r"website design", r"web development", r"website develop"],
    "ecommerce":   [r"ecommerce", r"e-commerce", r"shopify", r"woocommerce", r"magento"],
    "ai_agents":   [r"ai agent", r"ai automation", r"\bai agency\b", r"ai development"],
    "digital_mkt": [r"digital marketing"],
}


def post(path, body, timeout=180):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:300]}
    except Exception as e:
        return {"error": str(e)}


def pull_related(seed):
    """related_keywords nests everything under keyword_data — filters must use that path."""
    body = [{"keyword": seed, "location_code": LOC, "language_code": "en", "limit": 1000,
             "depth": 2,
             "filters": [["keyword_data.keyword_info.search_volume", ">", 0]],
             "order_by": ["keyword_data.keyword_info.search_volume,desc"]}]
    r = post("dataforseo_labs/google/related_keywords/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost, json.dumps(r)[:200]
    for it in items:
        kd = it.get("keyword_data", {}) or {}
        ki = kd.get("keyword_info", {}) or {}
        kp = kd.get("keyword_properties", {}) or {}
        si = kd.get("search_intent_info", {}) or {}
        if not kd.get("keyword"):
            continue
        rows.append({"keyword": kd["keyword"], "seed": seed,
                     "search_volume": ki.get("search_volume") or 0,
                     "cpc": round(ki.get("cpc") or 0, 2),
                     "competition": ki.get("competition_level") or "",
                     "difficulty": kp.get("keyword_difficulty"),
                     "intent": si.get("main_intent") or "", "ai_search_volume": ""})
    return rows, cost, None


def vertical_of(kw):
    k = kw.lower()
    for v in ["ai_seo", "ecommerce", "ai_agents", "web_design", "digital_mkt", "seo"]:
        if any(re.search(p, k) for p in VERTICALS[v]):
            return v
    return "other"


def canonical(cluster):
    """Pick the phrasing a human would actually type from a same-volume cluster:
    prefer natural word order ('best X in india' over 'X best india')."""
    def score(k):
        s = 0
        if re.match(r"^(best|top|leading|affordable|good|cheapest)\b", k): s -= 3
        if " in india" in k: s -= 1
        if re.search(r"\b(best|top)\b$", k): s += 3          # trailing superlative = unnatural
        if re.search(r"^(seo|web|ecommerce)\s+(best|top)\b", k): s += 3
        return (s, len(k))
    return sorted(cluster, key=score)[0]


if __name__ == "__main__":
    rows, cost, errs = {}, 0.0, []
    # start from phase A output
    src = os.path.join(HERE, "data", "india_demand.csv")
    if os.path.exists(src):
        for r in csv.DictReader(open(src)):
            r["search_volume"] = int(r["search_volume"] or 0)
            rows[r["keyword"]] = r
    print(f"phase A rows: {len(rows)}")

    with ThreadPoolExecutor(max_workers=6) as ex:
        for rr, c, err in ex.map(pull_related, SEEDS):
            cost += c
            if err: errs.append(err)
            for r in rr:
                if r["keyword"] not in rows or r["search_volume"] > rows[r["keyword"]]["search_volume"]:
                    rows[r["keyword"]] = r
    print(f"after related_keywords: {len(rows)}  cost=${cost:.3f}  errors={len(errs)}")
    if errs: print("  err:", errs[0][:200])

    SUP = re.compile(r"\b(best|top|top 10|top 5|leading|affordable|good|cheapest|low cost|biggest|no\.?\s?1)\b")
    QST = ("how ", "what ", "which ", "who ", "why ", "where ", "is ", "are ", "can ", "should ", "does ")

    allr = list(rows.values())
    for r in allr:
        r["vertical"] = vertical_of(r["keyword"])
        r["superlative"] = bool(SUP.search(r["keyword"].lower()))
        r["is_question"] = r["keyword"].lower().startswith(QST)

    # collapse same-volume clusters within a vertical
    clusters = defaultdict(list)
    for r in allr:
        if r["superlative"] and r["search_volume"] >= 100:
            clusters[(r["vertical"], r["search_volume"], r["cpc"])].append(r["keyword"])

    shortlist = []
    for (vert, vol, cpc), kws in clusters.items():
        canon = canonical(kws)
        src_row = rows[canon]
        shortlist.append({"keyword": canon, "vertical": vert, "search_volume": vol,
                          "difficulty": src_row.get("difficulty"), "cpc": cpc,
                          "variants": len(kws)})
    shortlist.sort(key=lambda r: -r["search_volume"])

    print("\n=== DEDUPED SUPERLATIVE TARGETS BY VERTICAL (vol>=100) ===")
    for v in ["ai_seo", "ai_agents", "ecommerce", "web_design", "seo", "digital_mkt"]:
        sub = [s for s in shortlist if s["vertical"] == v][:12]
        tot = sum(s["search_volume"] for s in shortlist if s["vertical"] == v)
        print(f"\n-- {v.upper()}  ({len([s for s in shortlist if s['vertical']==v])} clusters, {tot:,} total vol)")
        for s in sub:
            print(f"   vol={s['search_volume']:>7,} kd={str(s['difficulty']):>4} cpc={s['cpc']:>5} "
                  f"x{s['variants']:<3} {s['keyword']}")

    out = os.path.join(HERE, "data", "india_targets.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "vertical", "search_volume", "difficulty", "cpc", "variants"])
        w.writeheader(); w.writerows(shortlist)

    full = os.path.join(HERE, "data", "india_demand_full.csv")
    allr.sort(key=lambda r: -r["search_volume"])
    with open(full, "w", newline="") as f:
        fn = ["keyword", "seed", "search_volume", "ai_search_volume", "cpc", "competition",
              "difficulty", "intent", "vertical", "superlative", "is_question"]
        w = csv.DictWriter(f, fieldnames=fn, extrasaction="ignore")
        w.writeheader(); w.writerows(allr)
    print(f"\ncost=${cost:.3f}  targets={out}  full={full}  ({len(allr)} keywords)")
