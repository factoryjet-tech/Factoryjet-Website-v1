#!/usr/bin/env python3
"""REPLATFORMING PHASE — full migration keyword space, all source->destination pairs.

Bhavesh (2026-08-02): "we want replatforming projects ... Salesforce Commerce to Shopify
Plus, WooCommerce to Shopify, Shopify to other platforms, covering all high, medium and
low volume keywords. These projects are of the highest value."

FactoryJet currently has ZERO dedicated migration pages. This sizes the space so the page
architecture is driven by measured demand rather than a guess at which pairs matter.

Pulls keyword_suggestions + related_keywords for every plausible migration phrasing across
US + UK (the two markets with meaningful migration CPC), buckets by source->destination
pair, and reports which pairs justify their own page vs. which belong in a hub section.

Writes data/replatform_demand.csv + data/replatform_pairs.json
"""
import os, json, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict
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
LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()

GEOS = {"us": 2840, "uk": 2826}

PLATFORMS = {
    "magento":     ["magento", "adobe commerce"],
    "woocommerce": ["woocommerce", "woo commerce"],
    "sfcc":        ["salesforce commerce", "demandware", "salesforce commerce cloud"],
    "bigcommerce": ["bigcommerce", "big commerce"],
    "shopify":     ["shopify"],
    "shopify_plus":["shopify plus"],
    "wix":         ["wix"],
    "squarespace": ["squarespace"],
    "wordpress":   ["wordpress"],
    "prestashop":  ["prestashop"],
    "opencart":    ["opencart"],
    "volusion":    ["volusion"],
    "shift4shop":  ["shift4shop", "3dcart"],
    "hybris":      ["hybris", "sap commerce"],
    "netsuite":    ["suitecommerce", "netsuite commerce"],
    "drupal":      ["drupal commerce"],
    "custom":      ["custom", "legacy"],
}

SEEDS = [
    # generic migration language
    "ecommerce migration services", "ecommerce replatforming", "replatforming agency",
    "ecommerce migration agency", "store migration services", "ecommerce platform migration",
    "shopify migration agency", "migration to shopify plus",
    # explicit source -> destination pairs worth seeding directly
    "magento to shopify migration", "adobe commerce to shopify migration",
    "woocommerce to shopify migration", "salesforce commerce cloud to shopify migration",
    "demandware to shopify migration", "bigcommerce to shopify migration",
    "wix to shopify migration", "squarespace to shopify migration",
    "prestashop to shopify migration", "opencart to shopify migration",
    "volusion to shopify migration", "hybris to shopify migration",
    "shopify to bigcommerce migration", "shopify to woocommerce migration",
    "shopify to magento migration", "wordpress to shopify migration",
    "magento 1 to magento 2 migration", "shopify to shopify plus upgrade",
    "netsuite to shopify migration", "drupal to shopify migration",
]

MIGRATE_PAT = re.compile(
    r"migrat|replatform|re-platform|move (from|to)|moving (from|to)|switch(ing)? (from|to)|"
    r"transfer (from|to)|export .* import|upgrade to|convert .* to")


def post(path, body, timeout=180):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}", data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:400]}
    except Exception as e:
        return {"error": str(e)}


def pull(job):
    seed, geo, loc, endpoint = job
    if endpoint == "keyword_suggestions":
        body = [{"keyword": seed, "location_code": loc, "language_code": "en", "limit": 400,
                 "filters": [["keyword_info.search_volume", ">", 0]],
                 "order_by": ["keyword_info.search_volume,desc"]}]
    else:
        body = [{"keyword": seed, "location_code": loc, "language_code": "en", "depth": 3,
                 "limit": 400,
                 "filters": [["keyword_data.keyword_info.search_volume", ">", 0]],
                 "order_by": ["keyword_data.keyword_info.search_volume,desc"]}]
    r = post(f"dataforseo_labs/google/{endpoint}/live", body)
    rows, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return rows, cost
    for it in items:
        kd = it.get("keyword_data") or it
        ki = kd.get("keyword_info") or {}
        kp = kd.get("keyword_properties") or {}
        rows.append({"geo": geo, "keyword": kd.get("keyword") or "",
                     "volume": ki.get("search_volume") or 0, "cpc": ki.get("cpc") or 0,
                     "kd": kp.get("keyword_difficulty")})
    return rows, cost


def platform_of(text, exclude=None):
    """Return the platform key whose alias appears in text (longest alias wins)."""
    best, blen = None, 0
    for key, aliases in PLATFORMS.items():
        if key == exclude:
            continue
        for a in aliases:
            if a in text and len(a) > blen:
                best, blen = key, len(a)
    return best


def pair_of(kw):
    """Infer (source, destination) from a migration keyword."""
    k = kw.lower()
    m = re.search(r"(.*?)\b(?:to|into|from)\b(.*)", k)
    if not m:
        p = platform_of(k)
        return (p, None) if p else (None, None)
    left, right = m.group(1), m.group(2)
    if re.search(r"\bfrom\b", k):
        # "migrate from X to Y"
        fm = re.search(r"from(.*?)(?:\bto\b(.*))?$", k)
        if fm:
            src = platform_of(fm.group(1) or "")
            dst = platform_of(fm.group(2) or "", exclude=src)
            return src, dst
    src = platform_of(left)
    dst = platform_of(right, exclude=src)
    return src, dst


if __name__ == "__main__":
    jobs = [(s, g, loc, ep) for s in SEEDS for g, loc in GEOS.items()
            for ep in (["keyword_suggestions", "related_keywords"] if g == "us" else ["keyword_suggestions"])]
    print(f"=== {len(jobs)} Labs calls ===")
    seen, cost = {}, 0.0
    with ThreadPoolExecutor(max_workers=10) as ex:
        for rows, c in ex.map(pull, jobs):
            cost += c
            for r in rows:
                seen.setdefault((r["geo"], r["keyword"]), r)

    mig = [r for r in seen.values() if MIGRATE_PAT.search(r["keyword"].lower())]
    for r in mig:
        s, d = pair_of(r["keyword"])
        r["source"], r["dest"] = s or "", d or ""
    mig.sort(key=lambda r: -r["volume"])

    with open(os.path.join(HERE, "data", "replatform_demand.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["geo", "keyword", "volume", "cpc", "kd", "source", "dest"])
        w.writeheader(); w.writerows(mig)

    print(f"\n{len(mig)} migration keywords "
          f"(US {sum(1 for r in mig if r['geo']=='us')}, UK {sum(1 for r in mig if r['geo']=='uk')})")
    print(f"total volume {sum(r['volume'] for r in mig):,}/mo  "
          f"market value ${sum(r['volume']*(r['cpc'] or 0) for r in mig):,.0f}/mo\n")

    pairs = defaultdict(lambda: {"kws": 0, "vol": 0, "val": 0.0, "kds": [], "top": []})
    for r in mig:
        key = f"{r['source'] or '?'}->{r['dest'] or '?'}"
        e = pairs[key]
        e["kws"] += 1; e["vol"] += r["volume"]; e["val"] += r["volume"] * (r["cpc"] or 0)
        if r["kd"] is not None:
            e["kds"].append(r["kd"])
        if len(e["top"]) < 6:
            e["top"].append(f"{r['keyword']} ({r['volume']}/mo KD{r['kd']} ${r['cpc']:.0f})")

    print(f"{'pair':34s} {'kws':>4s} {'vol/mo':>7s} {'medKD':>6s} {'value/mo':>10s}")
    ranked = sorted(pairs.items(), key=lambda x: -x[1]["vol"])
    for k, e in ranked:
        kds = sorted(e["kds"]); med = kds[len(kds)//2] if kds else 0
        print(f"{k:34s} {e['kws']:>4} {e['vol']:>7,} {med:>6.0f} ${e['val']:>9,.0f}")

    print("\n=== PAIRS THAT JUSTIFY THEIR OWN PAGE (vol >= 100/mo) ===")
    for k, e in ranked:
        if e["vol"] >= 100 and "?" not in k:
            print(f"\n  {k}  ({e['vol']:,}/mo, ${e['val']:,.0f}/mo)")
            for t in e["top"]:
                print(f"     - {t}")

    json.dump({k: {kk: vv for kk, vv in v.items() if kk != "kds"} for k, v in pairs.items()},
              open(os.path.join(HERE, "data", "replatform_pairs.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/replatform_demand.csv + replatform_pairs.json")
