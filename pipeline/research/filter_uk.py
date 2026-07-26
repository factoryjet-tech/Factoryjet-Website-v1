#!/usr/bin/env python3
"""Re-bucket the UK keyword universe into the 7 priority services and rank by
winnability for a young domain. Reads data/uk_keywords.csv, writes shortlists."""
import csv, re, os
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")

# priority-ordered bucket rules (first match wins)
BUCKETS = [
    ("agentic-commerce", r"agentic"),
    ("ai-seo",           r"\bai seo\b|generative engine|answer engine|\bgeo\b|\baeo\b|ai search|chatgpt seo|ai overview|llm seo|llmo|ai visibilit"),
    ("ai-agent-dev",     r"ai agent|ai automation|automation agency|\bchatbot|ai voice|voice agent|conversational ai|ai assistant|workflow automation|ai receptionist|ai caller"),
    ("ai-commerce",      r"ai ecommerce|ai e-commerce|ai for ecommerce|ai commerce|ai product|ai shopping|ai for retail|ai merchandis|product recommendation ai|ai personaliz"),
    ("seo",              r"\bseo\b|search engine optim|link building|backlink|serp"),
    ("ecommerce",        r"ecommerce|e-commerce|shopify|woocommerce|magento|bigcommerce|online store|online shop|dropship|headless commerce|\bcart\b"),
    ("web-design",       r"web design|website design|web development|website development|webflow|wordpress|web designer|website builder|landing page|website redesign|\bux\b|\bui\b"),
]
def bucket(kw):
    for name, pat in BUCKETS:
        if re.search(pat, kw):
            return name
    return "other"

def norm(kw):
    # collapse near-duplicate phrasings: drop stopwords, sort tokens
    toks = re.sub(r"[^a-z0-9 ]", " ", kw.lower()).split()
    stop = {"a","an","the","for","of","in","to","and","near","me","best","top",
            "uk","u","k","united","kingdom","england","britain","british","company","companies"}
    core = sorted(t for t in toks if t not in stop)
    return " ".join(core)

def load():
    rows = []
    for r in csv.DictReader(open(os.path.join(DATA, "uk_keywords.csv"))):
        try:
            r["search_volume"] = int(r["search_volume"] or 0)
        except: r["search_volume"] = 0
        try:
            r["kd"] = int(r["kd"]) if r["kd"] not in ("", "None", None) else None
        except: r["kd"] = None
        try:
            r["cpc"] = float(r["cpc"] or 0)
        except: r["cpc"] = 0.0
        r["bucket"] = bucket(r["keyword"])
        rows.append(r)
    return rows

def is_uk_explicit(kw):
    return bool(re.search(r"\buk\b|london|manchester|birmingham|leeds|bristol|glasgow|"
                          r"edinburgh|liverpool|cardiff|england|britain|british|united kingdom", kw))

def commercial(r):
    return r["intent"] in ("commercial","transactional") or re.search(
        r"agency|agencies|company|companies|services|service|development|consultant|"
        r"consulting|freelancer|near me|pricing|cost|quote|hire|expert|specialist|partner", r["keyword"])

def dedupe(rows):
    best = {}
    for r in rows:
        k = norm(r["keyword"])
        if k not in best or r["search_volume"] > best[k]["search_volume"]:
            best[k] = r
    return sorted(best.values(), key=lambda r: -r["search_volume"])

def kd_ok(r, cap):
    return r["kd"] is not None and r["kd"] <= cap

def main():
    rows = load()
    by = defaultdict(list)
    for r in rows:
        by[r["bucket"]].append(r)

    order = ["ecommerce","ai-commerce","agentic-commerce","ai-seo","seo","web-design","ai-agent-dev","other"]
    print("=== UK keyword universe by service bucket ===")
    for b in order:
        tot = sum(r["search_volume"] for r in by[b])
        print(f"  {b:18s} n={len(by[b]):4d}  total_vol={tot:,}")

    out = open(os.path.join(DATA, "uk_shortlist.md"), "w")
    def emit(s=""):
        print(s); out.write(s+"\n")

    for b in order:
        if b == "other": continue
        emit(f"\n\n########## {b.upper()} ##########")
        comm = dedupe([r for r in by[b] if commercial(r)])
        # winnable commercial: KD<=30
        win = [r for r in comm if kd_ok(r, 30) and r["search_volume"] >= 30]
        emit(f"\n--- COMMERCIAL · winnable (KD<=30, vol>=30) · top 20 ---")
        emit(f"{'vol':>6} {'kd':>3} {'cpc':>5}  keyword")
        for r in win[:20]:
            tag = " [UK]" if is_uk_explicit(r["keyword"]) else ""
            emit(f"{r['search_volume']:>6} {r['kd']:>3} {r['cpc']:>5.1f}  {r['keyword']}{tag}")
        # stretch commercial: KD 31-45 but high volume
        stretch = [r for r in comm if r['kd'] is not None and 30 < r['kd'] <= 45 and r['search_volume'] >= 300]
        emit(f"\n--- COMMERCIAL · stretch (KD 31-45, vol>=300) · top 12 ---")
        for r in stretch[:12]:
            tag = " [UK]" if is_uk_explicit(r["keyword"]) else ""
            emit(f"{r['search_volume']:>6} {r['kd']:>3} {r['cpc']:>5.1f}  {r['keyword']}{tag}")
        # informational for blogs
        info = dedupe([r for r in by[b] if r["intent"]=="informational" or re.search(r"what is|how to|guide|vs |meaning|examples|cost|checklist|tools|statistics|trends", r["keyword"])])
        info_win = [r for r in info if kd_ok(r, 35) and r["search_volume"] >= 40]
        emit(f"\n--- INFORMATIONAL · blog topics (KD<=35, vol>=40) · top 15 ---")
        for r in info_win[:15]:
            emit(f"{r['search_volume']:>6} {r['kd']:>3}  {r['keyword']}")
    out.close()
    emit(f"\n\nWrote {os.path.join(DATA,'uk_shortlist.md')}")

if __name__ == "__main__":
    main()
