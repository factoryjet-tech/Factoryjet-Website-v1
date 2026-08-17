#!/usr/bin/env python3
"""
SERP WINNABILITY for the US commercial terms that survived demand verification.

Demand (dfs_us_service_demand.py) says which terms have real US volume.
This says whether we could ever place on them, which is a different question.

PER TERM
  - does an AI Overview fire? (if yes, the organic click is worth much less)
  - is the top 10 owned by DIRECTORIES (clutch, g2, designrush, semrush blog)
    or by AGENCIES? A directory-owned SERP means the realistic play is getting
    listed in the directory, not outranking it with a service page.
  - do we appear anywhere in the top 100?

Writes data/us_serp_winnability.json
Usage: set -a; . ./.env; set +a; python3 dfs_us_serp_winnability.py
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

# (keyword, us_volume, cpc, kd) — chosen for real volume AND low KD
TERMS = [
    ("ai agent development company",            590,  58.21,  9),
    ("ai agent development services",           480,  34.70,  2),
    ("ai agents for small business",            210,  21.66,  2),
    ("ai agent for customer service",           720, 208.28, 12),
    ("custom ai agent development company",      50, 282.50,  0),
    ("ai voice agent for healthcare",           110,  96.29,  0),
    ("ai voice agent agency",                   140,  31.14, 34),
    ("ai automation agency",                   4400,  17.80, 19),
    ("ai integration services",                 590,  65.65,  1),
    ("generative engine optimization services", 590,  39.88, 19),
    ("generative engine optimization agency",   320,  45.30,  0),
    ("answer engine optimization services",     480,  36.37,  6),
    ("ai search optimization services",         260, 108.69,  0),
    ("ai chatbot development services",         880,  38.50,  0),
    ("tiktok shop agency",                      590,  71.07,  0),
    ("shopify plus agency",                     480,  14.10,  0),
    ("b2b ecommerce agency",                    170,  29.12,  1),
    ("ecommerce app development company",       720,  29.50, 12),
    ("website redesign services",              8100,  36.69, 29),
    ("ecommerce development company",           880,  54.45, 28),
]

DIRECTORIES = {
    "clutch.co", "g2.com", "designrush.com", "goodfirms.co", "capterra.com",
    "sortlist.com", "upcity.com", "expertise.com", "themanifest.com",
    "trustpilot.com", "yelp.com", "linkedin.com", "reddit.com", "medium.com",
    "semrush.com", "ahrefs.com", "hubspot.com", "forbes.com", "gartner.com",
    "techbehemoths.com", "agencyspotter.com",
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


def serp(job):
    kw, vol, cpc, kd = job
    body = [{"keyword": kw, "location_code": 2840, "language_code": "en",
             "device": "desktop", "depth": 100}]
    r = post("serp/google/organic/live/advanced", body)
    out = {"keyword": kw, "volume": vol, "cpc": cpc, "kd": kd,
           "aio": False, "top10": [], "dir_count": 0, "fj_pos": None, "err": None}
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
    print(f"=== {len(TERMS)} US SERPs ===", file=sys.stderr)
    with ThreadPoolExecutor(max_workers=6) as ex:
        rows = list(ex.map(serp, TERMS))

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    with open(os.path.join(HERE, "data", "us_serp_winnability.json"), "w") as fh:
        json.dump(rows, fh, indent=1)

    print("\n" + "=" * 118)
    print(f"{'KEYWORD':<40}{'VOL':>7}{'CPC':>8}{'KD':>4}{'AIO':>5}{'DIR':>5}{'US':>4}  VERDICT")
    print("=" * 118)
    for r in sorted(rows, key=lambda x: -x["volume"]):
        if r["err"]:
            print(f"{r['keyword'][:39]:<40}  ERROR {r['err'][:50]}"); continue
        d = r["dir_count"]
        if d >= 5:
            v = "DIRECTORY-LOCKED (get listed, do not build)"
        elif d >= 3:
            v = "MIXED (page can place but directories take the top)"
        else:
            v = "OPEN (a service page can rank)"
        if r["aio"]:
            v += " + AIO steals clicks"
        print(f"{r['keyword'][:39]:<40}{r['volume']:>7,}{r['cpc']:>8.2f}{r['kd']:>4}"
              f"{'Y' if r['aio'] else '-':>5}{d:>5}{str(r['fj_pos'] or '-'):>4}  {v}")

    print("\n" + "=" * 118)
    print("OPEN SERPS RANKED BY VALUE (volume x cpc, directories < 3, we are absent)")
    print("=" * 118)
    open_ = [r for r in rows if not r["err"] and r["dir_count"] < 3 and not r["fj_pos"]]
    for r in sorted(open_, key=lambda x: -(x["volume"] * (x["cpc"] or 0))):
        print(f"  {r['keyword'][:44]:<46}{r['volume']:>7,} x ${r['cpc']:>7.2f} = "
              f"${r['volume'] * r['cpc']:>10,.0f}/mo equivalent   KD{r['kd']}")
        print(f"      top10: {', '.join(r['top10'][:6])}")


if __name__ == "__main__":
    main()
