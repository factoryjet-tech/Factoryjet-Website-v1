#!/usr/bin/env python3
"""PHASE A (US) — what do Americans ACTUALLY type/ask when shopping for our services?

Pulls real long-tail from DataForSEO Labs (keyword_suggestions + related_keywords),
US location, then classifies:
  - superlative queries ("best", "top 10", "leading", "no 1", "cheapest", ...)
  - question queries ("which is the best...", "how much does...", "who is...")
Superlative vocabulary is discovered EMPIRICALLY, not assumed — we scan a wide
candidate list and report which ones actually carry US search volume.

Also pulls AI search volume (ai_optimization/ai_keyword_data) for the question set,
which is the closest proxy for what people ask ChatGPT-style assistants.

Writes data/india_demand.csv + data/india_demand_summary.json
"""
import os, json, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))
LOC = 2840  # United States

# the services FactoryJet actually sells
SEEDS = [
    "seo agency", "seo company", "seo services", "ai seo", "generative engine optimization",
    "answer engine optimization", "web design company", "web design agency",
    "website development company", "ecommerce agency", "ecommerce development company",
    "shopify agency", "shopify development", "ai agency", "ai agent development",
    "ai automation agency", "digital marketing agency", "ecommerce marketing agency",
    "amazon agency", "b2b ecommerce agency",
]

# candidate superlative vocabulary — includes Indian-English forms.
# We do NOT assume these are used; we measure which ones carry volume.
SUPERLATIVE_CANDIDATES = [
    "best", "top", "top 10", "top 5", "leading", "no 1", "no.1", "number 1",
    "cheapest", "affordable", "low cost", "budget", "good", "famous", "reputed",
    "trusted", "biggest", "largest", "award winning", "fastest growing",
    "most popular", "well known", "premier", "greatest", "finest", "reliable",
]
QUESTION_STEMS = (
    "how ", "what ", "which ", "who ", "why ", "where ", "when ",
    "is ", "are ", "can ", "should ", "does ", "do ", "will ",
)


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


def pull(seed, endpoint):
    body = [{
        "keyword": seed, "location_code": LOC, "language_code": "en",
        "limit": 1000, "include_serp_info": False,
        "filters": [["keyword_info.search_volume", ">", 0]],
        "order_by": ["keyword_info.search_volume,desc"],
    }]
    r = post(f"dataforseo_labs/google/{endpoint}/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost, json.dumps(r)[:200]
    for it in items:
        kd = it.get("keyword_data", it)
        ki = kd.get("keyword_info", {}) or {}
        kp = kd.get("keyword_properties", {}) or {}
        si = kd.get("search_intent_info", {}) or {}
        kw = kd.get("keyword")
        if not kw:
            continue
        rows.append({
            "keyword": kw, "seed": seed,
            "search_volume": ki.get("search_volume") or 0,
            "cpc": round(ki.get("cpc") or 0, 2),
            "competition": ki.get("competition_level") or "",
            "difficulty": kp.get("keyword_difficulty"),
            "intent": si.get("main_intent") or "",
        })
    return rows, cost, None


def classify(kw):
    k = " " + kw.lower().strip() + " "
    sups = [s for s in SUPERLATIVE_CANDIDATES if f" {s} " in k or k.startswith(f" {s} ")]
    # prefer the longest match ("top 10" over "top")
    sup = max(sups, key=len) if sups else None
    is_q = kw.lower().strip().startswith(QUESTION_STEMS) or "?" in kw
    return sup, is_q


def ai_volume(keywords):
    """AI/LLM-surface search volume — proxy for what people ask assistants."""
    out, cost = {}, 0.0
    for i in range(0, len(keywords), 1000):
        body = [{"keywords": keywords[i:i + 1000], "location_code": LOC, "language_code": "en"}]
        r = post("ai_optimization/ai_keyword_data/keywords_search_volume/live", body)
        cost += r.get("cost", 0) or 0
        try:
            items = r["tasks"][0]["result"][0]["items"] or []
        except Exception:
            continue
        for it in items:
            out[it.get("keyword")] = (it.get("ai_search_volume")
                                      or (it.get("keyword_info") or {}).get("ai_search_volume") or 0)
    return out, cost


if __name__ == "__main__":
    jobs = [(s, "keyword_suggestions") for s in SEEDS] + \
           [(s, "related_keywords") for s in SEEDS[:8]]
    all_rows, cost, errs = {}, 0.0, []
    with ThreadPoolExecutor(max_workers=6) as ex:
        for rows, c, err in ex.map(lambda a: pull(*a), jobs):
            cost += c
            if err: errs.append(err)
            for r in rows:
                prev = all_rows.get(r["keyword"])
                if not prev or r["search_volume"] > prev["search_volume"]:
                    all_rows[r["keyword"]] = r

    rows = list(all_rows.values())
    for r in rows:
        r["superlative"], r["is_question"] = classify(r["keyword"])
    print(f"pulled {len(rows)} unique US keywords  cost=${cost:.3f}  errors={len(errs)}")
    if errs: print("  first error:", errs[0])

    sup_rows = [r for r in rows if r["superlative"]]
    q_rows = [r for r in rows if r["is_question"]]

    # --- which superlatives do Indians actually use? (by total volume) ---
    tally = defaultdict(lambda: {"vol": 0, "n": 0})
    for r in sup_rows:
        t = tally[r["superlative"]]; t["vol"] += r["search_volume"]; t["n"] += 1
    print("\n=== SUPERLATIVES ACTUALLY USED (US, by total monthly volume) ===")
    for s, t in sorted(tally.items(), key=lambda x: -x[1]["vol"]):
        print(f"  {s:16s} vol={t['vol']:>8,}  across {t['n']:>4} keywords")

    print(f"\n=== TOP 45 SUPERLATIVE KEYWORDS ===")
    sup_rows.sort(key=lambda r: -r["search_volume"])
    for r in sup_rows[:45]:
        print(f"  vol={r['search_volume']:>7,} kd={str(r['difficulty']):>4} cpc={r['cpc']:>6} "
              f"{r['intent'][:12]:12s} {r['keyword']}")

    print(f"\n=== TOP 35 QUESTION KEYWORDS ===")
    q_rows.sort(key=lambda r: -r["search_volume"])
    for r in q_rows[:35]:
        print(f"  vol={r['search_volume']:>7,} kd={str(r['difficulty']):>4} {r['keyword']}")

    # AI-surface volume for the shortlist
    shortlist = [r["keyword"] for r in sup_rows[:120]] + [r["keyword"] for r in q_rows[:80]]
    aiv, ac = ai_volume(shortlist); cost += ac
    for r in rows:
        r["ai_search_volume"] = aiv.get(r["keyword"], "")

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    out = os.path.join(HERE, "data", "us_demand.csv")
    rows.sort(key=lambda r: -r["search_volume"])
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "seed", "search_volume", "ai_search_volume",
                                          "cpc", "competition", "difficulty", "intent",
                                          "superlative", "is_question"])
        w.writeheader(); w.writerows(rows)

    top_ai = sorted([r for r in rows if isinstance(r.get("ai_search_volume"), (int, float))
                     and r["ai_search_volume"]], key=lambda r: -r["ai_search_volume"])[:30]
    print(f"\n=== TOP 30 BY *AI-SURFACE* VOLUME (what gets asked to assistants) ===")
    for r in top_ai:
        print(f"  ai_vol={r['ai_search_volume']:>7,}  google_vol={r['search_volume']:>7,}  {r['keyword']}")

    json.dump({"superlative_tally": {k: v for k, v in tally.items()},
               "n_total": len(rows), "n_superlative": len(sup_rows), "n_question": len(q_rows)},
              open(os.path.join(HERE, "data", "us_demand_summary.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  csv={out}")
