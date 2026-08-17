#!/usr/bin/env python3
"""
SUPERLATIVE DEMAND + SERP SHAPE, US (2026-08-17).

Bhavesh wants "best/top <service> agency/company" language added across pages,
starting with web design. Before writing that copy we need to know which of two
worlds we are in, because the answer changes what we build:

  A) The SERP is VENDOR-OWNED  -> a service page claiming the superlative can rank.
  B) The SERP is LISTICLE/DIRECTORY-OWNED -> a vendor page will never rank. The
     only asset that places is a listicle that names real competitors, which is
     the pattern already used for /services/seo "affordable seo services".

Getting this wrong is expensive: superlative copy on a service page that can
never rank is pure filler, and it makes the page read as self-promotional to
both readers and AI assistants.

Writes data/us_superlatives.json
Usage: set -a; . ./.env; set +a; python3 dfs_us_superlatives.py
"""
import os, json, base64, urllib.request, urllib.error, sys
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

SEEDS = [
    "best web design company", "best web design agency",
    "best website design company", "best website design agency",
    "best web development company", "best web development agency",
    "top web design company", "top web development company",
    "best website redesign company", "best ecommerce development company",
    "best ai automation agency", "best ai agent development company",
]

# SERP-shape sample: the highest-volume superlatives, checked in full
SERP_TERMS = [
    "best web design company", "best web design agency",
    "best website design company", "best web development company",
    "top web design company", "best website redesign company",
    "best ai automation agency", "best ecommerce development company",
]

LISTICLE_HOSTS = {
    "clutch.co", "g2.com", "designrush.com", "goodfirms.co", "sortlist.com",
    "upcity.com", "expertise.com", "themanifest.com", "techbehemoths.com",
    "agencyspotter.com", "capterra.com", "trustpilot.com", "yelp.com",
    "forbes.com", "semrush.com", "hubspot.com", "wix.com", "webflow.com",
    "squarespace.com", "hostinger.com", "wordpress.com", "reddit.com",
    "medium.com", "linkedin.com", "youtube.com", "quora.com", "elementor.com",
    "shopify.com", "godaddy.com", "businessofapps.com", "influencermarketinghub.com",
}


def post(path, body, timeout=300):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"},
        method="POST",
    )
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"_err": f"HTTP {e.code}: {e.read().decode()[:300]}"}
    except Exception as e:
        return {"_err": str(e)}


def suggestions(seed):
    body = [{"keyword": seed, "location_code": 2840, "language_code": "en",
             "include_serp_info": False, "include_seed_keyword": True, "limit": 300,
             "filters": [["keyword_info.search_volume", ">", 0]],
             "order_by": ["keyword_info.search_volume,desc"]}]
    r = post("dataforseo_labs/google/keyword_suggestions/live", body)
    if "_err" in r or r.get("status_code") != 20000:
        return []
    out = []
    for t in r.get("tasks") or []:
        for res in t.get("result") or []:
            for it in res.get("items") or []:
                ki = it.get("keyword_info") or {}
                if not (ki.get("search_volume") or 0):
                    continue
                out.append({"keyword": it.get("keyword"), "volume": ki["search_volume"],
                            "cpc": ki.get("cpc"),
                            "kd": (it.get("keyword_properties") or {}).get("keyword_difficulty")})
    return out


def serp(kw):
    body = [{"keyword": kw, "location_code": 2840, "language_code": "en",
             "device": "desktop", "depth": 20}]
    r = post("serp/google/organic/live/advanced", body)
    out = {"keyword": kw, "aio": False, "top10": [], "listicle": 0, "vendor": 0, "err": None}
    if "_err" in r:
        out["err"] = r["_err"]; return out
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["err"] = "parse"; return out
    rank = 0
    for it in items:
        if it.get("type") == "ai_overview":
            out["aio"] = True
        if it.get("type") != "organic":
            continue
        rank += 1
        if rank > 10:
            continue
        dom = (it.get("domain") or "").lower().replace("www.", "")
        title = (it.get("title") or "").lower()
        out["top10"].append(dom)
        # a result is a listicle if it's a known aggregator OR its title is a ranking post
        is_list = dom in LISTICLE_HOSTS or any(
            s in title for s in ("best ", "top ", " agencies", " companies", "ranked"))
        if is_list:
            out["listicle"] += 1
        else:
            out["vendor"] += 1
    return out


def main():
    print("=== superlative demand ===", file=sys.stderr)
    seen = {}
    with ThreadPoolExecutor(max_workers=6) as ex:
        for rows in ex.map(suggestions, SEEDS):
            for r in rows:
                seen[r["keyword"]] = r
    kws = sorted(seen.values(), key=lambda x: -x["volume"])

    print("\n" + "=" * 96)
    print("US SUPERLATIVE DEMAND (deduped by volume bucket)")
    print("=" * 96)
    bucket = set(); shown = 0
    for r in kws:
        k = (r["volume"], round(r["cpc"] or 0, 2))
        if k in bucket:
            continue
        bucket.add(k); shown += 1
        if shown > 28:
            break
        print(f"  {r['keyword'][:56]:<58}{r['volume']:>8,}  ${r['cpc'] or 0:>7.2f}  "
              f"KD{r['kd'] if r['kd'] is not None else '-':>4}")
    tot = sum(r["volume"] for r in kws)
    ded = sum(v for v, _ in bucket)
    print(f"\n  {len(kws)} superlative keywords   raw {tot:,}/mo   deduped {ded:,}/mo")

    print("\n=== SERP shape ===", file=sys.stderr)
    with ThreadPoolExecutor(max_workers=4) as ex:
        serps = list(ex.map(serp, SERP_TERMS))

    print("\n" + "=" * 96)
    print(f"{'TERM':<40}{'AIO':>5}{'LIST':>6}{'VEND':>6}  VERDICT")
    print("=" * 96)
    for s in serps:
        if s["err"]:
            print(f"{s['keyword'][:39]:<40}  ERROR {s['err'][:40]}"); continue
        v = ("LISTICLE-OWNED -> build a listicle, not service copy"
             if s["listicle"] >= 7 else
             "MIXED -> listicle safer" if s["listicle"] >= 5 else
             "VENDOR-OWNED -> service page can claim it")
        print(f"{s['keyword'][:39]:<40}{'Y' if s['aio'] else '-':>5}{s['listicle']:>6}"
              f"{s['vendor']:>6}  {v}")
        print(f"    {', '.join(s['top10'][:7])}")

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    with open(os.path.join(HERE, "data", "us_superlatives.json"), "w") as fh:
        json.dump({"keywords": kws, "serps": serps}, fh, indent=1)


if __name__ == "__main__":
    main()
