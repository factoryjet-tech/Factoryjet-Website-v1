#!/usr/bin/env python3
"""Per-page research for UK Wave 2 pages (2026-09-24): AI development, Shopify Plus, WooCommerce, Shopify development upgrade, ecommerce development upgrade.

Reuses dfs_market_research.py plumbing (spend cap, relevance filter). For each page:
Labs keyword_suggestions on its seeds (UK), then live SERPs (top 30 + AI Overview +
People Also Ask) for its top buyer terms. Writes data/market-uk-2026-09-24/brief_<page>.json.

Usage: python3 dfs_uk_wave2_briefs_2026_09_24.py --max-usd 1.5
"""
import json, os, re, sys
from concurrent.futures import ThreadPoolExecutor
import dfs_market_research as m

PAGES = {
    "ai_development": {"seeds": ["ai development", "ai development company", "ai integration", "ai implementation", "custom ai development"],
                       "must": r"\bai\b|artificial intelligence|machine learning",
                       "serp_extra": ["ai development company uk", "ai development services", "custom ai development company",
                                      "ai integration services uk", "ai implementation uk", "ai software development company uk"]},
    "shopify_plus": {"seeds": ["shopify plus", "shopify plus agency", "shopify plus partner", "shopify plus cost"],
                     "must": r"shopify plus|shopify\+",
                     "serp_extra": ["shopify plus agency uk", "shopify plus partner uk", "shopify plus agency london",
                                    "shopify plus migration", "shopify plus b2b"]},
    "woocommerce": {"seeds": ["woocommerce developer", "woocommerce agency", "woocommerce development", "woocommerce expert"],
                    "must": r"woocommerce|woo commerce",
                    "serp_extra": ["woocommerce developer uk", "woocommerce agency uk", "woocommerce development agency",
                                   "woocommerce support uk", "woocommerce to shopify migration uk"]},
    "shopify_development": {"seeds": ["shopify agency", "shopify developer", "shopify expert", "shopify website development", "shopify partner"],
                            "must": r"shopify",
                            "serp_extra": ["shopify agency uk", "shopify developer uk", "expert shopify", "uk shopify agency",
                                           "shopify agency london", "freelance shopify developer"]},
    "ecommerce_development": {"seeds": ["ecommerce agency", "ecommerce website designers", "ecommerce development", "ecommerce website development"],
                              "must": r"e-?commerce|online shop|online store",
                              "serp_extra": ["ecommerce agency uk", "ecommerce agency london", "ecommerce development service",
                                             "ecommerce website design uk", "ecommerce web design agency"]},
}


def main():
    m.MAX_USD = float(sys.argv[sys.argv.index("--max-usd") + 1]) if "--max-usd" in sys.argv else 0.6
    loc = m.MARKETS["uk"]["loc"]
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
        path = os.path.join(m.outdir("uk"), f"brief_{page}.json")
        json.dump({"page": page, "keywords": kws, "serps": serps}, open(path, "w"), indent=1)
        print(f"{page}: {len(kws)} keywords, {len(serps)} SERPs, spent ${m._spent:.3f}", file=sys.stderr)


if __name__ == "__main__":
    main()
