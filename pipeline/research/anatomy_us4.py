#!/usr/bin/env python3
"""
Controlled comparison: what do pages CITED by AI have that pages RANKING in Google do not?

Group A = domains named by ChatGPT/Perplexity/AIO that do NOT rank in Google top 10.
Group B = domains ranking in Google top 10 that NO AI engine named.
If the citation mechanism is real, the two groups should differ measurably on page anatomy,
not on authority (Group A is by definition the lower-authority set for that query).

Measures per page: words, headings, list items, tables, FAQ blocks, JSON-LD types,
named-capability density (concrete tech/system nouns per 1k words), numeric-claim density,
and first-200-word answer directness.
"""
import csv, os, re, sys, json, gzip, io
import urllib.request
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

# Concrete, checkable capability nouns -- the opposite of "we deliver results".
CAPABILITY = re.compile(
    r"\b(api|apis|webhook|webhooks|sdk|graphql|rest|oauth|sso|saml|"
    r"shopify|shopify plus|woocommerce|magento|bigcommerce|salesforce|hubspot|netsuite|sap|"
    r"stripe|paypal|klarna|adyen|braintree|"
    r"langchain|langgraph|llamaindex|crewai|autogen|rag|vector database|pinecone|weaviate|"
    r"pgvector|embedding|embeddings|fine-tun|prompt engineering|function calling|mcp|"
    r"openai|anthropic|claude|gpt-4|gpt-5|gemini|llama|mistral|"
    r"kubernetes|docker|terraform|aws|azure|gcp|lambda|s3|postgres|mysql|mongodb|redis|"
    r"next\.js|react|node\.js|python|typescript|headless|jamstack|"
    r"schema markup|json-ld|structured data|core web vitals|lighthouse|"
    r"zapier|n8n|make\.com|twilio|slack|snowflake|databricks|airflow|"
    r"segment|ga4|google analytics|tag manager|"
    r"soc 2|hipaa|gdpr|pci dss|iso 27001|"
    r"crm|erp|pim|oms|wms|cdp|etl|ci/cd|sla|rfp|rfq)\b", re.I)

NUMERIC = re.compile(r"\b\d{1,3}(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|x|hours?|days?|weeks?|"
                     r"months?|ms|seconds?|users?|orders?|skus?|leads?)\b", re.I)
HEDGE = re.compile(r"\b(may|might|could|perhaps|possibly|generally|typically|often|"
                   r"in some cases|it depends|varies)\b", re.I)


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA, "Accept": "text/html,application/xhtml+xml",
        "Accept-Encoding": "gzip", "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read()
        if r.headers.get("Content-Encoding") == "gzip":
            raw = gzip.decompress(raw)
        return raw.decode("utf-8", errors="ignore")


def analyse(html):
    ld = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S | re.I)
    ld_types = set()
    for blob in ld:
        for t in re.findall(r'"@type"\s*:\s*"([^"]+)"', blob):
            ld_types.add(t)
    h = {n: len(re.findall(rf"<h{n}[\s>]", html, re.I)) for n in (1, 2, 3)}
    li = len(re.findall(r"<li[\s>]", html, re.I))
    tbl = len(re.findall(r"<table[\s>]", html, re.I))
    body = re.sub(r"<(script|style|nav|footer|header)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " ", body)
    text = re.sub(r"&[a-z]+;", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    words = len(text.split())
    per1k = (lambda n: round(n * 1000 / max(words, 1), 1))
    caps = CAPABILITY.findall(text)
    return {
        "words": words,
        "h2h3": h[2] + h[3],
        "list_items": li,
        "li_per_1k": per1k(li),
        "tables": tbl,
        "faq_schema": "yes" if "FAQPage" in ld_types else "no",
        "ld_types": "|".join(sorted(ld_types))[:70],
        "capability_terms": len(caps),
        "cap_per_1k": per1k(len(caps)),
        "unique_caps": len(set(c.lower() for c in caps)),
        "numeric_claims": len(NUMERIC.findall(text)),
        "num_per_1k": per1k(len(NUMERIC.findall(text))),
        "hedges_per_1k": per1k(len(HEDGE.findall(text[:6000]))),
    }


def main():
    # build groups from the SERP + LLM data
    rank10 = defaultdict(set)
    urls = {}
    for r in csv.DictReader(open(os.path.join(DATA, "us4_serp_urls.csv"))):
        if r["rank"] and int(r["rank"]) <= 10:
            rank10[r["keyword"]].add(r["domain"])
            urls.setdefault(r["domain"], r["url"])
    aio = defaultdict(set)
    for r in csv.DictReader(open(os.path.join(DATA, "us4_serp.csv"))):
        for d in (r["aio_sources"] or "").split("|"):
            if d:
                aio[r["keyword"]].add(d)
    llm = defaultdict(set)
    for r in csv.DictReader(open(os.path.join(DATA, "us4_llm.csv"))):
        for d in (r["domains_cited"] or "").split("|"):
            d = d.strip()
            if d:
                llm[r["keyword"]].add(d)

    SKIP = {"youtube.com", "reddit.com", "linkedin.com", "medium.com", "fiverr.com",
            "goodfirms.co", "clutch.co", "designrush.com", "themanifest.com", "g2.com",
            "wikipedia.org", "businessofapps.com", "prweb.com", "upcity.com", "x.com",
            "openai.com", "google.com", "trustpilot.com", "yelp.com", "capterra.com"}

    # Only use queries where Google actually rendered an AI Overview, and only trust
    # AIO sources as "cited" -- LLM-extracted domains include obvious hallucinations
    # (the "web design company" answer named 34 vendors incl. dead/parked domains).
    AIO_QUERIES = [k for k, v in aio.items() if v]

    cited_not_rank, rank_not_cited = {}, {}
    for kw in AIO_QUERIES:
        cited = aio[kw]
        for d in cited - rank10.get(kw, set()):
            if d not in SKIP and d not in cited_not_rank:
                cited_not_rank[d] = kw
        for d in rank10.get(kw, set()) - cited:
            if d not in SKIP and d not in rank_not_cited:
                rank_not_cited[d] = (kw, urls.get(d))

    A = list(cited_not_rank.items())[:14]
    B = [(d, v) for d, v in rank_not_cited.items()][:14]
    print(f"Group A (cited by AI, NOT in Google top 10): {len(A)} domains")
    print(f"Group B (in Google top 10, NOT cited by AI): {len(B)} domains\n")

    rows = []
    for grp, items in (("A_cited_not_ranked", A), ("B_ranked_not_cited", B)):
        for d, meta in items:
            url = meta[1] if isinstance(meta, tuple) and meta[1] else f"https://{d}/"
            try:
                m = analyse(fetch(url))
            except Exception as e:
                print(f"  x {d}: {str(e)[:60]}")
                continue
            m.update({"group": grp, "domain": d, "url": url[:90]})
            rows.append(m)
            print(f"  {grp[0]} {d:30s} w={m['words']:>6d} cap/1k={m['cap_per_1k']:>5} "
                  f"li/1k={m['li_per_1k']:>5} num/1k={m['num_per_1k']:>4} faq={m['faq_schema']}")

    out = os.path.join(DATA, "us4_anatomy.csv")
    cols = ["group", "domain", "url", "words", "h2h3", "list_items", "li_per_1k", "tables",
            "faq_schema", "ld_types", "capability_terms", "cap_per_1k", "unique_caps",
            "numeric_claims", "num_per_1k", "hedges_per_1k"]
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)

    print(f"\n=== MEDIANS ===")
    def med(g, k):
        v = sorted(float(r[k]) for r in rows if r["group"] == g)
        return round(v[len(v)//2], 1) if v else 0
    print(f"{'metric':18s}{'A cited':>12s}{'B ranked':>12s}")
    for k in ["words", "h2h3", "li_per_1k", "cap_per_1k", "unique_caps", "num_per_1k",
              "hedges_per_1k"]:
        print(f"{k:18s}{med('A_cited_not_ranked',k):>12}{med('B_ranked_not_cited',k):>12}")
    for g in ("A_cited_not_ranked", "B_ranked_not_cited"):
        n = [r for r in rows if r["group"] == g]
        fq = sum(1 for r in n if r["faq_schema"] == "yes")
        print(f"{g:26s} FAQPage schema on {fq}/{len(n)}")
    print(f"\nwritten -> {out}")


if __name__ == "__main__":
    main()
