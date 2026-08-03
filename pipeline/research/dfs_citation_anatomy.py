#!/usr/bin/env python3
"""CITATION ANATOMY — what do the pages that ACTUALLY get cited look like?

Bhavesh (2026-08-02): verify GEO advice against primary evidence rather than
secondary reports. Google's own docs say there are "no additional requirements to
appear in AI Overviews... nor other special optimizations necessary" and "no special
schema.org structured data that you need to add." That is the official line. This
script measures what the cited pages actually do, so the rulebook is built on
observed structure rather than on either vendor guidance or GEO folklore.

Two phases:
  A. Capture cited URLs (not just domains) from Google AI Overview + ChatGPT/
     Perplexity answers across commercial e-commerce-agency queries.
  B. Fetch each cited page and measure structure: word count, headings, FAQ
     presence, JSON-LD schema types, comparison tables, ordered/unordered lists,
     dates, and whether the page is an agency page, a listicle, or a vendor doc.

Writes data/citation_anatomy_urls.json + data/citation_anatomy_pages.json
"""
import os, json, base64, urllib.request, urllib.error, re, gzip, io
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))


def load_env():
    p = os.path.join(HERE, ".env")
    if os.path.exists(p):
        for line in open(p):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
US = 2840

# Commercial queries where an agency could plausibly be the answer.
SERP_QUERIES = [
    "b2b ecommerce platform", "b2b website design", "ecommerce for manufacturers",
    "ecommerce development services", "shopify development cost",
    "magento to shopify migration", "best ecommerce platform for small business",
    "hire ecommerce developer", "wholesale ecommerce platform",
    "ecommerce agency", "shopify plus agency", "headless commerce agency",
]

LLM_PROMPTS = [
    "Which companies build B2B ecommerce portals with ERP integration? Name specific agencies and their websites.",
    "Which agencies handle Magento to Shopify Plus replatforming? Name specific companies and websites.",
    "Which ecommerce development agencies should a US manufacturer shortlist? Include websites.",
    "What does it cost to build a custom Shopify store in 2026, and which agencies should I get quotes from?",
]
LLMS = [("chat_gpt", "gpt-5.5"), ("perplexity", "sonar-pro")]


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"error": str(e)}


def grab_serp(kw):
    """Return AI Overview citation URLs + organic top-10 URLs for one query."""
    r = post("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": US, "language_code": "en",
        "device": "desktop", "depth": 20, "load_async_ai_overview": True}])
    out = {"keyword": kw, "aio_urls": [], "organic_urls": [], "cost": r.get("cost", 0)}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return out

    def harvest(refs):
        for ref in refs or []:
            u = ref.get("url")
            if u:
                out["aio_urls"].append(u)

    for it in items:
        if it.get("type") == "organic" and len(out["organic_urls"]) < 10:
            if it.get("url"):
                out["organic_urls"].append(it["url"])
        if it.get("type") == "ai_overview":
            harvest(it.get("references"))
            for sub in (it.get("items") or []):
                harvest(sub.get("references"))
    return out


def grab_llm(args):
    prompt, llm, model = args
    r = post(f"ai_optimization/{llm}/llm_responses/live", [{
        "user_prompt": prompt, "model_name": model,
        "web_search": True, "max_output_tokens": 1600}])
    urls, cost = [], r.get("cost", 0)
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return {"llm": llm, "prompt": prompt[:50], "urls": [], "cost": cost}
    for it in items:
        for sec in (it.get("sections") or []):
            for ln in (sec.get("links") or []):
                if ln.get("url"):
                    urls.append(ln["url"])
    return {"llm": llm, "prompt": prompt[:50], "urls": urls, "cost": cost}


UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def fetch_html(url, timeout=25):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA, "Accept": "text/html,application/xhtml+xml",
        "Accept-Encoding": "gzip", "Accept-Language": "en-US,en;q=0.9"})
    raw = urllib.request.urlopen(req, timeout=timeout).read()
    if raw[:2] == b"\x1f\x8b":
        raw = gzip.GzipFile(fileobj=io.BytesIO(raw)).read()
    return raw.decode("utf-8", "ignore")


def analyze(url):
    """Measure structural features of one cited page."""
    o = {"url": url, "ok": False}
    try:
        html = fetch_html(url)
    except Exception as e:
        o["error"] = str(e)[:80]
        return o
    o["ok"] = True
    o["bytes"] = len(html)

    body = re.sub(r"(?is)<(script|style|noscript|svg)[^>]*>.*?</\1>", " ", html)
    text = re.sub(r"(?s)<[^>]+>", " ", body)
    text = re.sub(r"\s+", " ", text)
    o["words"] = len(text.split())

    for lvl in (1, 2, 3):
        o[f"h{lvl}"] = len(re.findall(rf"(?i)<h{lvl}[\s>]", html))
    o["tables"] = len(re.findall(r"(?i)<table[\s>]", html))
    o["ol"] = len(re.findall(r"(?i)<ol[\s>]", html))
    o["ul"] = len(re.findall(r"(?i)<ul[\s>]", html))
    o["li"] = len(re.findall(r"(?i)<li[\s>]", html))

    # JSON-LD schema types actually present
    types = set()
    for m in re.finditer(r'(?is)<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html):
        for t in re.findall(r'"@type"\s*:\s*"([^"]+)"', m.group(1)):
            types.add(t)
    o["schema_types"] = sorted(types)
    o["has_faq_schema"] = "FAQPage" in types

    low = text.lower()
    # visible FAQ heading, independent of schema
    o["has_visible_faq"] = bool(re.search(r"frequently asked question|\bfaqs?\b", low))
    # listicle signal: numbered heading pattern in the title/headings
    heads = " ".join(re.findall(r"(?is)<h[1-3][^>]*>(.*?)</h[1-3]>", html))
    heads = re.sub(r"<[^>]+>", " ", heads)
    o["listicle"] = bool(re.search(r"\b(top|best)\s+\d+\b|\b\d+\s+(best|top|ways|things|reasons|steps|tips)\b",
                                   heads, re.I))
    o["comparison"] = bool(re.search(r"\bvs\.?\b|\bversus\b|comparison", heads, re.I)) or o["tables"] > 0
    o["dateModified"] = bool(re.search(r'"dateModified"', html))
    o["title"] = (re.search(r"(?is)<title[^>]*>(.*?)</title>", html) or [None, ""])[1].strip()[:90]
    return o


AGENCY_HINT = re.compile(r"(?i)(agency|studio|labs|digital|commerce|solutions|technologies|infotech|softwares?)")
PUBLISHER = {"forbes.com", "shopify.com", "bigcommerce.com", "salesforce.com", "adobe.com",
             "hubspot.com", "zapier.com", "g2.com", "gartner.com", "wikipedia.org",
             "nerdwallet.com", "techradar.com", "reddit.com", "youtube.com", "clutch.co",
             "designrush.com", "goodfirms.co", "upwork.com", "wix.com", "squarespace.com"}


def dom(u):
    m = re.match(r"https?://([^/]+)", u or "")
    return (m.group(1).replace("www.", "").lower() if m else "")


if __name__ == "__main__":
    cost = 0.0
    print(f"=== PHASE A: capture cited URLs ({len(SERP_QUERIES)} SERPs + "
          f"{len(LLM_PROMPTS)*len(LLMS)} LLM calls) ===")
    serps = []
    with ThreadPoolExecutor(max_workers=6) as ex:
        for s in ex.map(grab_serp, SERP_QUERIES):
            serps.append(s); cost += s["cost"] or 0
            print(f"  {s['keyword'][:40]:40s} AIO citations={len(s['aio_urls']):>3}")

    jobs = [(p, llm, m) for p in LLM_PROMPTS for llm, m in LLMS]
    llms = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for r in ex.map(grab_llm, jobs):
            llms.append(r); cost += r["cost"] or 0

    aio_urls = [u for s in serps for u in s["aio_urls"]]
    llm_urls = [u for r in llms for u in r["urls"]]
    print(f"\n  AIO citation URLs: {len(aio_urls)} ({len(set(aio_urls))} unique)")
    print(f"  LLM citation URLs: {len(llm_urls)} ({len(set(llm_urls))} unique)")

    json.dump({"serps": serps, "llms": llms},
              open(os.path.join(HERE, "data", "citation_anatomy_urls.json"), "w"), indent=1)

    # Fetch a bounded sample, weighted to most-cited, excluding known noise
    counts = Counter(u for u in aio_urls + llm_urls if dom(u) not in PUBLISHER)
    sample = [u for u, _ in counts.most_common(60)]
    print(f"\n=== PHASE B: fetching {len(sample)} most-cited non-publisher pages ===")
    print("  (NOTE: capped at 60. Pages excluded from this sample are NOT analysed.)")

    pages = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for p in ex.map(analyze, sample):
            pages.append(p)
    ok = [p for p in pages if p.get("ok")]
    print(f"  fetched OK: {len(ok)}/{len(pages)}")

    def med(vals):
        v = sorted(x for x in vals if x is not None)
        return v[len(v)//2] if v else 0

    print(f"\n=== STRUCTURE OF PAGES THAT GET CITED (n={len(ok)}) ===")
    print(f"  median words        : {med([p['words'] for p in ok]):,}")
    print(f"  median H2 count     : {med([p['h2'] for p in ok])}")
    print(f"  median list items   : {med([p['li'] for p in ok])}")
    print(f"  has FAQPage schema  : {sum(1 for p in ok if p['has_faq_schema'])}/{len(ok)} "
          f"({100*sum(1 for p in ok if p['has_faq_schema'])//max(len(ok),1)}%)")
    print(f"  has visible FAQ     : {sum(1 for p in ok if p['has_visible_faq'])}/{len(ok)} "
          f"({100*sum(1 for p in ok if p['has_visible_faq'])//max(len(ok),1)}%)")
    print(f"  has a <table>       : {sum(1 for p in ok if p['tables'])}/{len(ok)} "
          f"({100*sum(1 for p in ok if p['tables'])//max(len(ok),1)}%)")
    print(f"  listicle headline   : {sum(1 for p in ok if p['listicle'])}/{len(ok)} "
          f"({100*sum(1 for p in ok if p['listicle'])//max(len(ok),1)}%)")
    print(f"  comparison signal   : {sum(1 for p in ok if p['comparison'])}/{len(ok)}")
    print(f"  dateModified present: {sum(1 for p in ok if p['dateModified'])}/{len(ok)} "
          f"({100*sum(1 for p in ok if p['dateModified'])//max(len(ok),1)}%)")
    print(f"  exactly one <h1>    : {sum(1 for p in ok if p['h1']==1)}/{len(ok)}")
    print(f"  zero <h1>           : {sum(1 for p in ok if p['h1']==0)}/{len(ok)}")

    st = Counter(t for p in ok for t in p["schema_types"])
    print("\n  schema types present across cited pages:")
    for t, c in st.most_common(18):
        print(f"    {c:>3}  {t}")

    print("\n  word-count distribution:")
    buckets = [(0, 500), (500, 1000), (1000, 2000), (2000, 3500), (3500, 6000), (6000, 10**9)]
    for lo, hi in buckets:
        n = sum(1 for p in ok if lo <= p["words"] < hi)
        label = f"{lo:,}-{hi:,}" if hi < 10**9 else f"{lo:,}+"
        print(f"    {label:>14s}  {'#'*n} {n}")

    json.dump(pages, open(os.path.join(HERE, "data", "citation_anatomy_pages.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/citation_anatomy_urls.json + citation_anatomy_pages.json")
