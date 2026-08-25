#!/usr/bin/env python3
"""
SERP WINNABILITY + AI Overview + People-Also-Ask for UK / US / AU.

Demand (dfs_priority_markets_demand.py) says which terms real people search.
This answers the different and harder question: could we ever place on them.

WHY BOTH ARE NEEDED (2026-08-25)
Google Ads reports "LOW competition" on every UK "seo agency {city}" term, up to
3,600/mo on seo agency london. LOW there means ADVERTISER competition, not organic
difficulty. The UK head SERPs are historically owned by directories (Clutch,
Sortlist, DesignRush, Yell), and a directory-owned SERP means the realistic play
is getting listed, not outranking them with a service page. Acting on the Ads
number alone is how we have been burned before.

PER TERM
  - AI Overview present? If yes the organic click is worth materially less.
  - How much of the top 10 is directories vs agencies.
  - Where we rank in the top 100, if at all.
  - People-Also-Ask questions, which are the real FAQ source for any page we build.

Usage:
  cd pipeline/research && set -a; . ./.env; set +a
  python3 dfs_priority_markets_winnability.py            # verified terms only
  python3 dfs_priority_markets_winnability.py --min-vol 200
"""
import os, json, base64, urllib.request, urllib.error, sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
DEMAND = os.path.join(HERE, "data", "priority-markets-demand-2026-08-25.json")
if "--src" in sys.argv:
    DEMAND = sys.argv[sys.argv.index("--src") + 1]


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

MARKETS = {2826: "United Kingdom", 2840: "United States", 2036: "Australia"}

# Global directories plus the UK/AU-specific ones that own local service SERPs.
DIRECTORIES = {
    "clutch.co", "g2.com", "designrush.com", "goodfirms.co", "capterra.com",
    "sortlist.com", "upcity.com", "expertise.com", "themanifest.com",
    "trustpilot.com", "yelp.com", "linkedin.com", "reddit.com", "medium.com",
    "semrush.com", "ahrefs.com", "hubspot.com", "forbes.com", "gartner.com",
    "techbehemoths.com", "agencyspotter.com",
    # UK
    "yell.com", "checkatrade.com", "bark.com", "freeindex.co.uk", "cylex-uk.co.uk",
    "thomsonlocal.com", "designrush.co.uk", "sortlist.co.uk", "theukwebdesigncompany.com",
    # AU
    "yellowpages.com.au", "truelocal.com.au", "oneflare.com.au", "productreview.com.au",
    "hipages.com.au", "startupdaily.net",
}

MIN_VOL = 50
if "--min-vol" in sys.argv:
    MIN_VOL = int(sys.argv[sys.argv.index("--min-vol") + 1])


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


def serp(job):
    loc, kw, vol, cpc = job
    body = [{"keyword": kw, "location_code": loc, "language_code": "en",
             "device": "desktop", "depth": 100}]
    r = post("serp/google/organic/live/advanced", body)
    out = {"market": MARKETS[loc], "loc": loc, "keyword": kw, "volume": vol, "cpc": cpc,
           "aio": False, "top10": [], "dir_count": 0, "fj_pos": None, "paa": [], "err": None}
    if "_err" in r:
        out["err"] = r["_err"]; return out
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["err"] = json.dumps(r)[:200]; return out

    rank = 0
    for it in items:
        t = it.get("type")
        if t == "ai_overview":
            out["aio"] = True
        elif t == "people_also_ask":
            for el in (it.get("items") or []):
                q = el.get("title")
                if q:
                    out["paa"].append(q)
        if t != "organic":
            continue
        rank += 1
        dom = (it.get("domain") or "").lower()
        if rank <= 10:
            out["top10"].append(dom)
            if dom in DIRECTORIES:
                out["dir_count"] += 1
        if "factoryjet" in dom and out["fj_pos"] is None:
            out["fj_pos"] = rank
    return out


def main():
    rows_in = json.load(open(DEMAND))["rows"]
    jobs = [(r["loc"], r["keyword"], r["vol"], r["cpc"] or 0)
            for r in rows_in if (r["vol"] or 0) >= MIN_VOL]
    print(f"=== {len(jobs)} SERPs at >= {MIN_VOL}/mo across {len(MARKETS)} markets ===",
          file=sys.stderr)

    with ThreadPoolExecutor(max_workers=6) as ex:
        rows = list(ex.map(serp, jobs))

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    out_path = os.path.join(HERE, "data", "priority-markets-winnability-2026-08-25.json")
    if "--out" in sys.argv:
        out_path = sys.argv[sys.argv.index("--out") + 1]
    with open(out_path, "w") as fh:
        json.dump(rows, fh, indent=1)

    for loc, label in MARKETS.items():
        mk = [r for r in rows if r["loc"] == loc and not r["err"]]
        if not mk:
            continue
        print("\n" + "=" * 116)
        print(f"{label}")
        print("=" * 116)
        print(f"{'KEYWORD':<36}{'VOL':>7}{'CPC':>8}{'AIO':>5}{'DIR':>5}{'US':>4}  VERDICT")
        print("-" * 116)
        for r in sorted(mk, key=lambda x: -(x["volume"] or 0)):
            d = r["dir_count"]
            if d >= 5:
                v = "DIRECTORY-LOCKED (get listed, do not build)"
            elif d >= 3:
                v = "MIXED (can place, directories take the top)"
            else:
                v = "OPEN (a service page can rank)"
            if r["aio"]:
                v += " +AIO"
            print(f"{r['keyword'][:35]:<36}{r['volume']:>7,}{(r['cpc'] or 0):>8.2f}"
                  f"{'Y' if r['aio'] else '-':>5}{d:>5}{str(r['fj_pos'] or '-'):>4}  {v}")

        open_ = [r for r in mk if r["dir_count"] < 3 and not r["fj_pos"]]
        if open_:
            print(f"\n  OPEN SERPS by commercial value (vol x cpc):")
            for r in sorted(open_, key=lambda x: -((x["volume"] or 0) * (x["cpc"] or 0)))[:6]:
                print(f"    {r['keyword'][:40]:<42}{r['volume']:>6,} x {r['cpc']:>7.2f}"
                      f" = {r['volume'] * (r['cpc'] or 0):>9,.0f}/mo equiv")
                print(f"        top10: {', '.join(r['top10'][:6])}")

    errs = [r for r in rows if r["err"]]
    if errs:
        print(f"\n{len(errs)} SERP error(s): {errs[0]['keyword']} -> {errs[0]['err'][:80]}")
    print(f"\nWrote {out_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
