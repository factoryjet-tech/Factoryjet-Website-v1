#!/usr/bin/env python3
"""
BLOG TOPIC DEMAND MAP — every service line x every market (2026-08-20).

WHY THIS EXISTS
Bhavesh wants 2-3 blogs per service per market. Every prior pull on this repo
was single-market (dfs_us_service_demand, dfs_uk, dfs_india_demand). This is the
first pull that puts all five markets on one axis so the topic list can be
compared market-to-market instead of five separate reports.

BLOG-SHAPED, NOT PAGE-SHAPED
Landing pages own "<service> agency <city>". Blogs own the informational layer:
questions, comparisons, cost, how-to, best-of. So this pulls the same broad
suggestion set, then keeps ONLY informational shapes. Commercial "near me"
terms are dropped on purpose — they are landing-page terms, not blog terms.

Writes data/blog_topics_all_markets.json
Usage: cd pipeline/research && set -a; . ./.env; set +a; python3 dfs_blog_topics_all_markets.py
"""
import os, json, base64, urllib.request, urllib.error, re, sys
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

# location_code -> (label, language)
MARKETS = {
    2840: ("US", "en"),
    2826: ("UK", "en"),
    2356: ("India", "en"),
    2784: ("UAE", "en"),
    2036: ("Australia", "en"),
}

# Service lines mapped to real site hubs. Seeds are mid-length on purpose:
# keyword_suggestions only returns keywords CONTAINING the seed.
SEEDS = {
    "Web Design & Development": [
        "web design", "website development", "website redesign",
        "website cost", "wordpress website",
    ],
    "Ecommerce Development": [
        "ecommerce website", "shopify store", "online store",
        "ecommerce platform", "woocommerce",
    ],
    "SEO": [
        "seo", "local seo", "seo audit", "seo cost", "keyword ranking",
    ],
    "AI SEO / GEO": [
        "generative engine optimization", "ai seo", "chatgpt seo",
        "ai overview", "ai search optimization",
    ],
    "AI Agents & Automation": [
        "ai agent", "ai automation", "ai chatbot",
        "workflow automation", "agentic ai",
    ],
    "Digital Marketing": [
        "digital marketing", "ecommerce marketing", "lead generation",
        "content marketing", "google ads",
    ],
    "Marketplace (Amazon/Walmart/TikTok)": [
        "sell on amazon", "amazon seller", "walmart marketplace",
        "tiktok shop", "marketplace seller",
    ],
}

# ── blog-shaped filters ────────────────────────────────────────────────────
QUESTION   = re.compile(r"^(how|what|why|which|who|when|where|can|does|do|is|are|should|will|hoe)\b")
COMPARISON = re.compile(r"\b(vs|versus|alternative|alternatives|compare|comparison|best|top|review|reviews|difference)\b")
COST       = re.compile(r"\b(cost|costs|price|prices|pricing|cheap|affordable|budget|fee|fees|rates|much)\b")
GUIDE      = re.compile(r"\b(guide|tutorial|tips|checklist|steps|examples|template|strategy|ideas|trends|statistics|stats|benchmark)\b")
# hard drops: navigational / job / login / brand-tool noise that never converts
DROP = re.compile(
    r"\b(job|jobs|salary|salaries|career|careers|intern|internship|course|courses|"
    r"certification|training|class|classes|login|log in|sign in|download|crack|"
    r"free download|apk|pdf download|resume|cv|freelancer|upwork|fiverr|reddit)\b")

def shape(kw):
    t = []
    if QUESTION.match(kw):   t.append("QUESTION")
    if COMPARISON.search(kw):t.append("COMPARISON")
    if COST.search(kw):      t.append("COST")
    if GUIDE.search(kw):     t.append("GUIDE")
    return t

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

def suggestions(seed, loc, lang):
    body = [{
        "keyword": seed,
        "location_code": loc,
        "language_code": lang,
        "include_serp_info": False,
        "include_seed_keyword": False,
        "limit": 1000,
        "filters": [["keyword_info.search_volume", ">", 0]],
        "order_by": ["keyword_info.search_volume,desc"],
    }]
    r = post("dataforseo_labs/google/keyword_suggestions/live", body)
    if "_err" in r or r.get("status_code") != 20000:
        print(f"  ! {MARKETS[loc][0]}/{seed}: {r.get('_err') or r.get('status_message')}", file=sys.stderr)
        return []
    out = []
    for task in r.get("tasks") or []:
        for res in task.get("result") or []:
            for it in res.get("items") or []:
                kw = it.get("keyword") or ""
                ki = it.get("keyword_info") or {}
                vol = ki.get("search_volume") or 0
                if not vol or DROP.search(kw):
                    continue
                tags = shape(kw)
                if not tags:          # not blog-shaped -> landing page territory
                    continue
                out.append({
                    "keyword": kw,
                    "volume": vol,
                    "cpc": ki.get("cpc"),
                    "kd": (it.get("keyword_properties") or {}).get("keyword_difficulty"),
                    "tags": tags,
                })
    return out

def main():
    jobs = [(loc, line, s) for loc in MARKETS for line, seeds in SEEDS.items() for s in seeds]
    print(f"=== {len(jobs)} pulls: {len(SEEDS)} service lines x {len(MARKETS)} markets ===", file=sys.stderr)

    # market -> line -> keyword -> row
    acc = defaultdict(lambda: defaultdict(dict))
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = {ex.submit(suggestions, s, loc, MARKETS[loc][1]): (loc, line, s) for loc, line, s in jobs}
        done = 0
        for f in futs:
            loc, line, seed = futs[f]
            try:
                rows = f.result()
            except Exception as e:
                print(f"  ! {seed}: {e}", file=sys.stderr); continue
            for r in rows:
                acc[MARKETS[loc][0]][line][r["keyword"]] = r
            done += 1
            print(f"  [{done:>3}/{len(jobs)}] {MARKETS[loc][0]:<10}{line:<38}{seed:<28}{len(rows):>5}", file=sys.stderr)

    report = {}
    for mkt, lines in acc.items():
        report[mkt] = {}
        for line, kws in lines.items():
            rows = sorted(kws.values(), key=lambda x: -x["volume"])
            report[mkt][line] = rows

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    outp = os.path.join(HERE, "data", "blog_topics_all_markets.json")
    with open(outp, "w") as fh:
        json.dump(report, fh, indent=1)

    print("\n" + "=" * 96)
    print("BLOG-SHAPED DEMAND: total monthly volume by service line x market")
    print("=" * 96)
    hdr = f"{'SERVICE LINE':<40}" + "".join(f"{v[0]:>11}" for v in MARKETS.values())
    print(hdr)
    print("-" * 96)
    for line in SEEDS:
        cells = ""
        for loc, (mkt, _) in MARKETS.items():
            rows = report.get(mkt, {}).get(line, [])
            cells += f"{sum(r['volume'] for r in rows):>11,}"
        print(f"{line:<40}{cells}")
    print(f"\nwrote {outp}", file=sys.stderr)

if __name__ == "__main__":
    main()
