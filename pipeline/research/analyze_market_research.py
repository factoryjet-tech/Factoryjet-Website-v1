#!/usr/bin/env python3
"""Analyse dfs_market_research.py output for one market (2026-09-24).

Groups buyer demand into page-sized topics, maps each to an existing page on the
site (or marks a gap), scores SERP winnability by the weakest top-10 incumbent's
referring domains vs our EARNED ~28 (not the API headline, which is scraper-inflated),
builds the question bank (People Also Ask + Labs question terms) and summarises
AI assistant visibility. Writes analysis.json next to the inputs.

Usage: python3 analyze_market_research.py --market uk
"""
import argparse, collections, json, os, re, statistics

HERE = os.path.dirname(os.path.abspath(__file__))
OURS = 28

TOPICS = [  # (topic, line, regex, existing page per market)
    ("AI consulting / consultancy", "ai_agents", r"ai (consult\w*|strategy)", {"uk": None, "au": None}),
    ("AI automation agency", "ai_agents", r"automation|rpa|workflow", {"uk": None, "au": None}),
    ("AI customer service, chatbots, receptionists", "ai_agents", r"chat ?bot|customer service|receptionist|phone answering|voice|call", {"uk": None, "au": None}),
    ("AI agent development + integration", "ai_agents", r"ai agent|agentic|ai (development|developer|software|app)|custom ai|ai integration|ai implementation|ai solutions?|ai (agency|company|companies|firm|partner)|generative ai|llm|machine learning|ai for (small )?business", {"uk": "/uk/ai-agents", "au": None}),
    ("Shopify Plus", "ecommerce", r"shopify plus", {"uk": None, "au": None}),
    ("Platform migration / replatforming", "ecommerce", r"migrat\w*|replatform", {"uk": None, "au": None}),
    ("Shopify agency / developers", "ecommerce", r"shopify", {"uk": "/uk/shopify-development", "au": None}),
    ("Magento / Adobe Commerce", "ecommerce", r"magento|adobe commerce", {"uk": None, "au": None}),
    ("WooCommerce", "ecommerce", r"woo ?commerce", {"uk": None, "au": None}),
    ("BigCommerce", "ecommerce", r"bigcommerce", {"uk": None, "au": None}),
    ("B2B ecommerce", "ecommerce", r"b2b", {"uk": None, "au": None}),
    ("Headless commerce", "ecommerce", r"headless", {"uk": None, "au": None}),
    ("Agentic / AI commerce", "ecommerce", r"agentic|ai ecommerce|ai commerce", {"uk": None, "au": None}),
    ("Ecommerce marketing / PPC agency", "ecommerce", r"marketing|ppc|ads?\b|advertis|email|social", {"uk": None, "au": None}),
    ("Ecommerce agency / development (general)", "ecommerce", r".", {"uk": "/uk/ecommerce-development", "au": None}),
    ("WordPress developers", "web_design", r"wordpress", {"uk": None, "au": None}),
    ("Web development company", "web_design", r"web ?develop\w*|website develop\w*", {"uk": None, "au": None}),
    ("Website redesign", "web_design", r"redesign", {"uk": None, "au": None}),
    ("Web design agency (general)", "web_design", r".", {"uk": "/uk/web-design", "au": "/au"}),
    ("Ecommerce SEO", "seo", r"e-?commerce|shopify|online (store|shop)", {"uk": "/uk/ecommerce-seo", "au": None}),
    ("Local SEO", "seo", r"local|near me|maps?\b", {"uk": "/uk/local-seo", "au": None}),
    ("SEO audit", "seo", r"audit", {"uk": "/uk/seo-audit", "au": None}),
    ("Technical SEO", "seo", r"technical", {"uk": None, "au": None}),
    ("Sector SEO (dental, legal, B2B...)", "seo", r"dental|dentist|law|legal|solicitor|b2b|estate agen|accountant|medical|clinic|trade|plumb|builder|roof|recruit|hotel|restaurant|saas", {"uk": None, "au": None}),
    ("SEO agency / services (general)", "seo", r".", {"uk": "/uk/seo", "au": "/au/seo"}),
    ("AI SEO / GEO", "ai_seo", r".", {"uk": "/uk/ai-seo", "au": None}),
    ("Website cost", "cost", r"website|web design|wordpress|site", {"uk": None, "au": None}),
    ("Ecommerce / Shopify cost", "cost", r"e-?commerce|shopify|online store", {"uk": None, "au": None}),
    ("SEO cost", "cost", r"seo", {"uk": None, "au": None}),
    ("AI agent / chatbot cost", "cost", r"ai|chatbot|automation", {"uk": None, "au": None}),
]


def growth(trend):
    """Latest 6 months vs the 5 before. Labs lists months newest first, and the
    oldest (12th) month carried a 3-4x spike on every UK term on 2026-09-24, a
    data artefact, so it is dropped."""
    t = [x for x in (trend or [])[:11] if x is not None]
    if len(t) < 11:
        return None
    recent, old = sum(t[:6]) / 6, sum(t[6:11]) / 5
    return round(recent / old, 2) if old else None


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--market", required=True)
    mk = ap.parse_args().market
    D = os.path.join(HERE, "data", f"market-{mk}-2026-09-24")
    K = json.load(open(os.path.join(D, "keywords.json")))["rows"]
    S = json.load(open(os.path.join(D, "serps.json")))
    A = json.load(open(os.path.join(D, "authority.json")))
    L = json.load(open(os.path.join(D, "llm_calls.json")))

    heads = [r for r in K if r.get("rel") == "buyer" and r["vol"] and r.get("cluster_head") == r["keyword"]]
    # ---- topic grouping (national/generic vs city)
    topic_rows = collections.defaultdict(list)
    for r in heads:
        for name, line, rx, pages in TOPICS:
            if r["line"] == line and re.search(rx, r["keyword"]):
                topic_rows[name].append(r)
                break
    topics = []
    for name, line, rx, pages in TOPICS:
        rs = topic_rows.get(name, [])
        nat = [r for r in rs if not r["city"]]
        city = [r for r in rs if r["city"]]
        tv = [r for r in rs if growth(r.get("trend"))]
        g = None
        if tv:
            tot_recent = sum(sum(x for x in r["trend"][:6] if x) / 6 for r in tv)
            tot_old = sum(sum(x for x in r["trend"][6:11] if x) / 5 for r in tv)
            g = round(tot_recent / tot_old, 2) if tot_old else None
        cpcs = [r["cpc"] for r in rs if r["cpc"]]
        topics.append({
            "topic": name, "line": line, "page": pages.get(mk),
            "national_vol": sum(r["vol"] for r in nat), "city_vol": sum(r["vol"] for r in city),
            "clusters": len(rs), "median_cpc": round(statistics.median(cpcs), 2) if cpcs else None,
            "growth_recent_vs_year_ago": g,
            "top_terms": [(r["keyword"], r["vol"], r["cpc"]) for r in sorted(nat, key=lambda x: -x["vol"])[:12]],
        })

    # ---- city demand
    cities = collections.defaultdict(lambda: collections.Counter())
    for r in heads:
        if r["city"]:
            cities[r["city"]][r["line"]] += r["vol"]
    city_tbl = sorted(({"city": c, "total": sum(v.values()), **v} for c, v in cities.items()),
                      key=lambda x: -x["total"])

    # ---- SERP scoring
    for s in S:
        v = [(d, A.get(d)) for d in s["top10"] if A.get(d) is not None]
        if v:
            wd, wr = min(v, key=lambda x: x[1])
            s["weak_dom"], s["weak_rd"] = wd, wr
            s["median_rd"] = statistics.median([x[1] for x in v])
            s["agencies_under_150"] = sum(1 for _, x in v if x <= 150)
        else:
            s["weak_dom"] = s["weak_rd"] = s["median_rd"] = None
            s["agencies_under_150"] = 0
        wr = s["weak_rd"]
        s["verdict"] = ("n/a" if wr is None else "WINNABLE NOW" if wr <= OURS else
                        "ONE LINK CYCLE" if wr <= 3 * OURS else "HARD" if wr <= 8 * OURS else "GATED")
    aio_refs = collections.Counter(d for s in S for d in set(s["aio_refs"]))
    top10_freq = collections.Counter(d for s in S for d in s["top10"])

    # ---- questions
    paa = collections.Counter()
    paa_line = collections.defaultdict(collections.Counter)
    for s in S:
        for q in s["paa"]:
            paa[q] += 1
            paa_line[s.get("line") or "extra"][q] += 1
    qterms = sorted([r for r in K if r.get("rel") != "off" and r["vol"] and r["question"]
                     and r.get("cluster_head") == r["keyword"]], key=lambda r: -r["vol"])

    # ---- LLM
    ok = [c for c in L if not c.get("err")]
    cited = collections.Counter(d for c in ok for d in set(c["cited_domains"]))
    llm = {"calls": len(ok), "fj_named": sum(c["fj_named"] for c in ok),
           "fj_cited": sum(c["fj_cited"] for c in ok),
           "fj_named_in": [(c["id"], c["engine"]) for c in ok if c["fj_named"]],
           "by_engine": {e: {"calls": len([c for c in ok if c["engine"] == e]),
                             "fj_named": sum(c["fj_named"] for c in ok if c["engine"] == e)}
                         for e in sorted({c["engine"] for c in ok})},
           "top_cited_domains": [(d, n, A.get(d)) for d, n in cited.most_common(60)]}
    lst = collections.Counter()
    for c in ok:
        for u in set(c["citations"]):
            if re.search(r"best|top-|/top|agencies|companies|leading", u, re.I):
                lst[u.split("?")[0].split("#")[0]] += 1
    llm["listicles_cited"] = lst.most_common(60)

    out = {"market": mk, "ours_rd_earned": OURS, "ours_rd_api": A.get("factoryjet.com"),
           "topics": topics, "cities": city_tbl, "serps": S,
           "aio_rate": round(sum(s["aio"] for s in S) / max(1, len(S)), 3),
           "local_pack_rate": round(sum(s["local_pack"] for s in S) / max(1, len(S)), 3),
           "fj_ranked": [(s["keyword"], s["fj_pos"]) for s in S if s["fj_pos"]],
           "aio_cited_domains": aio_refs.most_common(60),
           "top10_domains": [(d, n, A.get(d)) for d, n in top10_freq.most_common(60)],
           "paa_top": paa.most_common(150),
           "paa_by_line": {k: v.most_common(40) for k, v in paa_line.items()},
           "question_terms": [(r["keyword"], r["vol"], r["line"]) for r in qterms[:200]],
           "llm": llm}
    json.dump(out, open(os.path.join(D, "analysis.json"), "w"), indent=1)

    print(f"TOPICS ({mk})  national vol | city vol | median CPC | growth | page")
    for t in sorted(topics, key=lambda x: -(x["national_vol"])):
        print(f"  {t['topic'][:44]:<45}{t['national_vol']:>7}{t['city_vol']:>8}  "
              f"{t['median_cpc'] or 0:>6.1f}  {t['growth_recent_vs_year_ago'] or '-':>5}  {t['page'] or 'GAP'}")
    print("\nCITIES (buyer vol):")
    for c in city_tbl[:25]:
        print(f"  {c['city']:<16}{c['total']:>7}  " + " ".join(f"{k}:{v}" for k, v in c.items() if k not in ('city', 'total')))
    print(f"\nAIO rate {out['aio_rate']}, local pack rate {out['local_pack_rate']}, FJ ranked {out['fj_ranked']}")
    print("verdicts:", collections.Counter(s["verdict"] for s in S))
    print("\nAIO cited domains:", ", ".join(f"{d}({n})" for d, n in aio_refs.most_common(30)))
    print("\nTop PAA:")
    for q, n in paa.most_common(40):
        print(f"  {n}  {q}")
    print("\nQuestion terms:")
    print(" | ".join(f"{k}:{v}" for k, v, _ in out["question_terms"][:60]))


if __name__ == "__main__":
    main()
