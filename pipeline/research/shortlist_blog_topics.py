#!/usr/bin/env python3
"""
Turn the raw 32k-keyword blog demand pull into a reviewable candidate pool.

TWO KNOWN TRAPS THIS FIXES (both previously shipped defects on this repo):
 1. CLUSTERED DUPLICATE VOLUMES. DataForSEO assigns one volume to a whole
    cluster of near-identical phrasings ("best seo tools" / "seo tools best" /
    "best tool for seo" all = 201,000). Counting those as separate topics
    inflates a line 10x. We collapse by (service line, volume, token multiset).
 2. B2C SHOPPING NOISE. "best online jewelry store" and "best buy store online"
    match the ecommerce seeds but our buyer is the business, not the shopper.
    Fixed with a per-line positive anchor plus a consumer-noun blocklist.

Reads data/blog_topics_all_markets.json, writes data/blog_topic_candidates.json
"""
import json, os, re, sys
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = json.load(open(os.path.join(HERE, "data", "blog_topics_all_markets.json")))

# A keyword only survives if it contains an anchor for its own service line.
# This is what kills "best online jewelry store" without a hand-written blocklist
# of every product category on earth.
ANCHORS = {
    "Web Design & Development": r"(web design|website design|web development|website development|website redesign|web designer|website cost|website builder|wordpress|webflow|web page design|website development cost|landing page)",
    "Ecommerce Development": r"(ecommerce|e-commerce|ecommerce website|shopify|woocommerce|magento|bigcommerce|online store|headless commerce|ecommerce platform)",
    "SEO": r"(seo|search engine optimi|serp|backlink|keyword research|link building|google ranking)",
    "AI SEO / GEO": r"(generative engine|answer engine|ai seo|ai search|chatgpt seo|llm seo|ai overview|ai visibility|geo|aeo|rank in chatgpt|cited by ai)",
    "AI Agents & Automation": r"(ai agent|ai automation|agentic|ai chatbot|chatbot|workflow automation|business process automation|n8n|automation tool)",
    "Digital Marketing": r"(digital marketing|content marketing|lead generation|google ads|ppc|email marketing|social media marketing|marketing agency|marketing strategy|marketing automation)",
    "Marketplace (Amazon/Walmart/TikTok)": r"(amazon|walmart|tiktok shop|marketplace|fba|seller central|etsy|ebay)",
}

# consumer-shopping product nouns: the query is a shopper, not a business
CONSUMER = re.compile(
    r"\b(jewelry|jewellery|eyewear|eyeglass|sunglass|clothing|clothes|shoes|"
    r"furniture|grocery|groceries|mattress|perfume|makeup|cosmetic|skincare|"
    r"toys?|books?|pet|flowers?|watches|handbags?|saree|kurti|lehenga|"
    r"best buy|walmart\.com|amazon prime|aliexpress|temu|shein|myntra|flipkart|"
    r"gift|dress|shirt|bag|phone|laptop|tv|car|bike|food|restaurant near)\b")

# "how to become / learn / study" = career seekers, never our buyer
CAREER = re.compile(r"\b(become|learn|study|syllabus|exam|degree|scope of|is a good career|beginners? guide to becoming)\b")

def canon(kw):
    """token multiset: collapses word-order and stopword variants of one cluster"""
    toks = re.findall(r"[a-z0-9]+", kw.lower())
    stop = {"a","an","the","of","for","to","in","is","are","do","does","you","your","and","on","with","what","that","it","i"}
    return tuple(sorted(t for t in toks if t not in stop))

def main():
    out = {}
    stats = []
    for mkt, lines in RAW.items():
        out[mkt] = {}
        for line, rows in lines.items():
            anchor = re.compile(ANCHORS[line])
            kept, seen_cluster = [], {}
            for r in rows:
                kw = r["keyword"].lower()
                if not anchor.search(kw):       continue
                if CONSUMER.search(kw):         continue
                if CAREER.search(kw):           continue
                key = (r["volume"], canon(kw))
                prev = seen_cluster.get(key)
                # within a duplicate-volume cluster keep the most natural phrasing:
                # the one whose word order reads like a real query (shortest wins ties)
                if prev is None or len(kw) < len(prev["keyword"]):
                    seen_cluster[key] = r
            kept = sorted(seen_cluster.values(), key=lambda x: -x["volume"])
            out[mkt][line] = kept
            stats.append((mkt, line, len(rows), len(kept), sum(x["volume"] for x in kept)))

    p = os.path.join(HERE, "data", "blog_topic_candidates.json")
    json.dump(out, open(p, "w"), indent=1)

    print(f"{'MARKET':<11}{'SERVICE LINE':<38}{'raw':>7}{'kept':>7}{'kept vol':>12}")
    print("-" * 76)
    for mkt in ["US","UK","India","UAE","Australia"]:
        for s in [x for x in stats if x[0]==mkt]:
            print(f"{s[0]:<11}{s[1]:<38}{s[2]:>7}{s[3]:>7}{s[4]:>12,}")
        print()
    print(f"wrote {p}", file=sys.stderr)

if __name__ == "__main__":
    main()
