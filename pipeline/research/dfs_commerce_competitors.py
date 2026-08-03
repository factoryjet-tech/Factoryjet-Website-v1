#!/usr/bin/env python3
"""COMPETITOR + PAA PULL for the 2026-08 commerce pages.

Bhavesh (2026-08-03): "name competitors, platforms etc. so we rank even when
someone is searching competitors with their names. Use live DataForSEO for
People Also Ask, competitors, keywords, and weave them naturally into the copy."

Three pulls per target keyword set:
  1. SERP competitors — who actually ranks top-10, so we name real rivals
     rather than a guessed list.
  2. People Also Ask — real question phrasing to fold into FAQs.
  3. Related "alternatives / vs / competitors" keyword demand — the terms people
     use when searching a rival by name.

Writes data/commerce_competitors.json
"""
import os, json, base64, urllib.request, re
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

# One representative commercial query per page we just shipped.
PAGE_QUERIES = {
    "replatforming": ["ecommerce replatforming", "shopify migration services"],
    "magento-to-shopify": ["magento to shopify migration", "magento migration agency"],
    "woocommerce-to-shopify": ["woocommerce to shopify migration"],
    "squarespace-to-shopify": ["squarespace to shopify migration"],
    "wix-to-shopify": ["wix to shopify migration"],
    "wordpress-to-shopify": ["wordpress to shopify migration"],
    "salesforce-commerce-cloud-to-shopify-plus": ["salesforce commerce cloud alternatives"],
    "b2b-ecommerce": ["b2b ecommerce agency", "b2b ecommerce platform"],
    "ecommerce-for-manufacturers": ["ecommerce for manufacturers", "b2b website design"],
}

# Seeds for "searching a rival or platform by name" demand.
ALT_SEEDS = [
    "shopify plus alternatives", "magento alternatives", "bigcommerce alternatives",
    "salesforce commerce cloud alternatives", "woocommerce alternatives",
    "shopify vs salesforce commerce cloud", "adobe commerce alternatives",
    "shopify plus competitors", "best shopify plus agencies",
]

NOISE = {"reddit.com", "youtube.com", "quora.com", "linkedin.com", "facebook.com",
         "clutch.co", "designrush.com", "goodfirms.co", "sortlist.com", "upwork.com",
         "fiverr.com", "trustpilot.com", "g2.com", "capterra.com", "medium.com",
         "wikipedia.org", "x.com", "twitter.com", "instagram.com"}
VENDOR = {"shopify.com", "bigcommerce.com", "magento.com", "adobe.com", "salesforce.com",
          "woocommerce.com", "wix.com", "squarespace.com", "wordpress.org", "wordpress.com",
          "help.shopify.com", "apps.shopify.com", "community.shopify.com",
          "business.adobe.com", "experienceleague.adobe.com", "developer.salesforce.com"}


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"error": str(e)}


def dom(u):
    m = re.match(r"https?://([^/]+)", u or "")
    return (m.group(1).replace("www.", "").lower() if m else "")


def serp(args):
    page, kw = args
    r = post("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": US, "language_code": "en",
        "device": "desktop", "depth": 20, "people_also_ask_click_depth": 2}])
    out = {"page": page, "keyword": kw, "competitors": [], "paa": [], "cost": r.get("cost", 0)}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return out
    for it in items:
        if it.get("type") == "organic":
            d = dom(it.get("url"))
            if d and d not in NOISE:
                out["competitors"].append({"domain": d, "pos": it.get("rank_group"),
                                           "title": (it.get("title") or "")[:80],
                                           "vendor": d in VENDOR})
        if it.get("type") in ("people_also_ask", "people_also_ask_element"):
            for e in (it.get("items") or [it]):
                t = e.get("title")
                if t:
                    out["paa"].append(t)
    return out


def alts(seed):
    r = post("dataforseo_labs/google/keyword_suggestions/live", [{
        "keyword": seed, "location_code": US, "language_code": "en", "limit": 120,
        "filters": [["keyword_info.search_volume", ">", 0]],
        "order_by": ["keyword_info.search_volume,desc"]}])
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost
    for it in items:
        ki = it.get("keyword_info") or {}
        kp = it.get("keyword_properties") or {}
        k = it.get("keyword") or ""
        if re.search(r"alternative|competitor|\bvs\b|versus|compare", k):
            rows.append({"keyword": k, "volume": ki.get("search_volume") or 0,
                         "cpc": ki.get("cpc") or 0, "kd": kp.get("keyword_difficulty")})
    return rows, cost


if __name__ == "__main__":
    jobs = [(p, kw) for p, kws in PAGE_QUERIES.items() for kw in kws]
    cost = 0.0
    results = []
    print(f"=== SERP + PAA for {len(jobs)} queries ===")
    with ThreadPoolExecutor(max_workers=6) as ex:
        for o in ex.map(serp, jobs):
            results.append(o); cost += o["cost"] or 0

    by_page = defaultdict(lambda: {"competitors": Counter(), "vendors": Counter(), "paa": []})
    for o in results:
        e = by_page[o["page"]]
        for c in o["competitors"]:
            (e["vendors"] if c["vendor"] else e["competitors"])[c["domain"]] += 1
        e["paa"].extend(o["paa"])

    print("\n=== REAL COMPETITORS TO NAME, BY PAGE ===")
    for page in PAGE_QUERIES:
        e = by_page[page]
        comp = [d for d, _ in e["competitors"].most_common(8)]
        vend = [d for d, _ in e["vendors"].most_common(4)]
        paa = list(dict.fromkeys(e["paa"]))
        print(f"\n  /{page}")
        print(f"    agencies : {', '.join(comp) or 'none'}")
        print(f"    platforms: {', '.join(vend) or 'none'}")
        print(f"    PAA ({len(paa)}): " + (" | ".join(paa[:5]) if paa else "none"))

    print("\n=== 'ALTERNATIVES / VS / COMPETITORS' DEMAND ===")
    alt_rows = []
    with ThreadPoolExecutor(max_workers=6) as ex:
        for rows, c in ex.map(alts, ALT_SEEDS):
            cost += c; alt_rows.extend(rows)
    seen = {}
    for r in alt_rows:
        seen.setdefault(r["keyword"], r)
    top = sorted(seen.values(), key=lambda r: -r["volume"])[:30]
    for r in top:
        kd = r["kd"] if r["kd"] is not None else "-"
        print(f"  {r['volume']:>6,}/mo KD={str(kd):>5} ${r['cpc']:>6.2f}  {r['keyword']}")

    json.dump({"per_page": {p: {"competitors": by_page[p]["competitors"].most_common(12),
                                "vendors": by_page[p]["vendors"].most_common(6),
                                "paa": list(dict.fromkeys(by_page[p]["paa"]))}
                            for p in PAGE_QUERIES},
               "alternatives": top},
              open(os.path.join(HERE, "data", "commerce_competitors.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/commerce_competitors.json")
