#!/usr/bin/env python3
"""Per-page research for the AU build (2026-09-25): 7 new AU pages + the /au hub.

Reuses dfs_market_research.py plumbing (spend cap, relevance filter). For each page:
Labs keyword_suggestions on its seeds (UK), then live SERPs (top 30 + AI Overview +
People Also Ask) for its top buyer terms. Writes data/market-uk-2026-09-24/brief_<page>.json.

Usage: python3 dfs_au_page_briefs_2026_09_25.py --max-usd 2.5
"""
import json, os, re, sys
from concurrent.futures import ThreadPoolExecutor
import dfs_market_research as m

PAGES = {
    "au_ai_agents": {"seeds": ["ai automation agency", "ai agents", "ai automation", "ai agent development", "business process automation"],
                     "must": r"\bai\b|automation|agent",
                     "serp_extra": ["ai automation agency australia", "ai automation agency sydney", "ai agent for business", "ai automation service", "ai agent developers", "ai automation melbourne"]},
    "au_ai_consulting": {"seeds": ["ai consulting", "ai consultant", "ai consultancy", "ai strategy consulting"],
                         "must": r"\bai\b",
                         "serp_extra": ["ai consulting australia", "ai consulting sydney", "ai consulting melbourne", "ai consultant for small business", "ai implementation consulting"]},
    "au_ai_development": {"seeds": ["ai development", "ai development company", "custom ai development", "ai integration", "ai implementation"],
                          "must": r"\bai\b|machine learning",
                          "serp_extra": ["ai development company in australia", "ai development company sydney", "custom ai development", "ai integration services australia", "ai software development australia"]},
    "au_shopify": {"seeds": ["shopify agency", "shopify developer", "shopify expert", "shopify development", "shopify partner"],
                   "must": r"shopify",
                   "serp_extra": ["shopify agency australia", "shopify developer sydney", "shopify developer melbourne", "shopify expert australia", "shopify seo agency", "shopify plus agency australia"]},
    "au_ecommerce": {"seeds": ["ecommerce agency", "ecommerce development", "ecommerce website design", "ecommerce developer"],
                     "must": r"e-?commerce|online store|online shop",
                     "serp_extra": ["ecommerce agency australia", "ecommerce agency sydney", "ecommerce agency melbourne", "ecommerce development company", "ecommerce website development australia"]},
    "au_ai_receptionist": {"seeds": ["ai receptionist", "ai phone answering", "ai call answering", "ai voice agent", "virtual receptionist"],
                           "must": r"\bai\b|receptionist|answering|voice",
                           "serp_extra": ["ai receptionist australia", "ai receptionist for small business", "ai phone answering service", "customer service ai agent", "ai receptionist for tradies"]},
    "au_ai_seo": {"seeds": ["ai seo", "generative engine optimisation", "generative engine optimization", "geo agency", "answer engine optimisation"],
                  "must": r"\bai\b|generative|geo\b|answer engine|aeo|llm|chatgpt",
                  "serp_extra": ["ai seo agency australia", "generative engine optimisation services", "geo agency australia", "ai visibility audit", "chatgpt seo"]},
    "au_hub_web_design": {"seeds": ["web design", "web designer", "website design", "web development company", "website designer"],
                          "must": r"web|website|site",
                          "serp_extra": ["web design australia", "web design agency australia", "website design sydney", "web designer melbourne", "how much does a website cost australia"]},
}


def main():
    m.MAX_USD = float(sys.argv[sys.argv.index("--max-usd") + 1]) if "--max-usd" in sys.argv else 0.6
    loc = m.MARKETS["au"]["loc"]
    for page, cfg in PAGES.items():
        rows = {}
        for seed in cfg["seeds"]:
            r = m.post("dataforseo_labs/google/keyword_suggestions/live", [{
                "keyword": seed, "location_code": loc, "language_code": "en", "limit": 300,
                "include_seed_keyword": True, "filters": ["keyword_info.search_volume", ">=", 10],
                "order_by": ["keyword_info.search_volume,desc"]}])
            res, err = m.task0(r)
            if err:
                print(seed, err, file=sys.stderr)
                continue
            items = list(res.get("items") or [])
            if res.get("seed_keyword_data"):
                items.append({**res["seed_keyword_data"], "keyword": seed})
            for it in items:
                k = (it.get("keyword") or "").lower()
                ki = it.get("keyword_info") or {}
                if not re.search(cfg["must"], k) or m.CONSUMER.search(k) or m.NOISE.search(k):
                    continue
                rows[k] = {"keyword": k, "vol": ki.get("search_volume"), "cpc": ki.get("cpc"),
                           "kd": (it.get("keyword_properties") or {}).get("keyword_difficulty"),
                           "intent": (it.get("search_intent_info") or {}).get("main_intent"),
                           "question": bool(m.QUESTION.search(k)),
                           "buyer": bool(m.BUY.search(k))}
        kws = sorted(rows.values(), key=lambda x: -(x["vol"] or 0))
        buyer = [r for r in kws if r["buyer"] and not r["question"]]
        serp_terms = [r["keyword"] for r in buyer[:14]] + cfg["serp_extra"]
        serp_terms = list(dict.fromkeys(serp_terms))

        def one(k):
            r = m.post("serp/google/organic/live/advanced", [{
                "keyword": k, "location_code": loc, "language_code": "en", "device": "desktop",
                "depth": 30, "load_async_ai_overview": True}])
            res, err = m.task0(r)
            out = {"keyword": k, "err": err, "top10": [], "titles": [], "aio": False, "aio_refs": [], "paa": []}
            if res:
                n = 0
                for it in res.get("items") or []:
                    t = it.get("type")
                    if t == "ai_overview":
                        out["aio"] = True
                        out["aio_refs"] = [m.root_domain(x.get("domain")) for x in (it.get("references") or [])]
                    elif t == "people_also_ask":
                        out["paa"] += [e.get("title") for e in (it.get("items") or []) if e.get("title")]
                    elif t == "organic":
                        n += 1
                        if n <= 10:
                            out["top10"].append(m.root_domain(it.get("domain")))
                            out["titles"].append(it.get("title"))
                        if "factoryjet" in (it.get("domain") or "") and "fj" not in out:
                            out["fj"] = n
            return out

        with ThreadPoolExecutor(max_workers=6) as ex:
            serps = list(ex.map(one, serp_terms))
        path = os.path.join(m.outdir("au"), f"brief_{page}.json")
        json.dump({"page": page, "keywords": kws, "serps": serps}, open(path, "w"), indent=1)
        print(f"{page}: {len(kws)} keywords, {len(serps)} SERPs, spent ${m._spent:.3f}", file=sys.stderr)


if __name__ == "__main__":
    main()
