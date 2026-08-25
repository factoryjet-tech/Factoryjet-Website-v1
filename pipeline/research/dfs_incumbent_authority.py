#!/usr/bin/env python3
"""
INCUMBENT AUTHORITY: can we actually outrank the agencies holding these SERPs?

WHY THIS EXISTS (2026-08-25)
dfs_priority_markets_winnability.py returns "OPEN (a service page can rank)" for
all 37 UK/US/AU terms, because directories hold at most 2 of each top 10. That is
a real and useful finding, but it is NOT a winnability verdict. The standing rule
here is that winnability is INCUMBENT AUTHORITY, and that directory count, KD and
volume are all insufficient on their own. An open SERP held by six agencies with
2,000 referring domains each is just as unwinnable as a directory-locked one.

So this measures the thing that actually decides it: referring domains for every
domain in each top 10, against ours.

READ THE OUTPUT LIKE THIS
  weakest incumbent RD < ours        -> genuinely winnable now
  weakest incumbent RD 1-3x ours     -> winnable within a link-building cycle
  weakest incumbent RD > 5x ours     -> not this year, regardless of page quality
The weakest page-1 incumbent is the bar, not the median: we only need to displace
one of them to reach page 1.

Usage:
  cd pipeline/research && set -a; . ./.env; set +a
  python3 dfs_incumbent_authority.py
"""
import os, json, base64, urllib.request, urllib.error, sys, statistics
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "data", "priority-markets-winnability-2026-08-25.json")
if "--src" in sys.argv:
    SRC = sys.argv[sys.argv.index("--src") + 1]
OURS = "factoryjet.com"


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
        return {"_err": f"HTTP {e.code}: {e.read().decode()[:200]}"}
    except Exception as e:
        return {"_err": str(e)}


def summary(dom):
    r = post("backlinks/summary/live",
             [{"target": dom, "internal_list_limit": 1, "backlinks_status_type": "live"}])
    if "_err" in r:
        return dom, None, r["_err"]
    try:
        d = r["tasks"][0]["result"][0]
        return dom, {"rd": d.get("referring_domains"),
                     "backlinks": d.get("backlinks"),
                     "rank": d.get("rank")}, None
    except Exception:
        return dom, None, json.dumps(r)[:150]


def main():
    rows = json.load(open(SRC))
    rows = [r for r in rows if not r.get("err")]

    domains = {OURS}
    for r in rows:
        domains.update(r["top10"])
    domains = sorted(domains)
    print(f"=== referring domains for {len(domains)} domains ===", file=sys.stderr)

    rd = {}
    with ThreadPoolExecutor(max_workers=6) as ex:
        for dom, data, err in ex.map(summary, domains):
            rd[dom] = data
            if err:
                print(f"  {dom}: {err[:70]}", file=sys.stderr)

    ours = (rd.get(OURS) or {}).get("rd") or 0
    if "--ours" in sys.argv:
        ours = int(sys.argv[sys.argv.index("--ours") + 1])
        print(f"comparing against EARNED referring domains: {ours} "
              f"(headline API figure ignored)")
    print(f"\nfactoryjet.com referring domains: {ours}")
    print("(note: a large share of these are known scraper spam, so the honest")
    print(" comparison is against the LOW end of this number, not the headline)")

    out = []
    for r in rows:
        vals = [(d, (rd.get(d) or {}).get("rd")) for d in r["top10"]]
        vals = [(d, v) for d, v in vals if v is not None]
        if not vals:
            continue
        weakest_dom, weakest = min(vals, key=lambda x: x[1])
        med = statistics.median([v for _, v in vals])
        ratio = (weakest / ours) if ours else float("inf")
        if ratio <= 1:
            verdict = "WINNABLE NOW"
        elif ratio <= 3:
            verdict = "WINNABLE (one link cycle)"
        elif ratio <= 8:
            verdict = "HARD (sustained link building)"
        else:
            verdict = "GATED (not this year)"
        out.append({**r, "weakest_rd": weakest, "weakest_dom": weakest_dom,
                    "median_rd": med, "ratio": ratio, "verdict": verdict})

    for mkt in ["United Kingdom", "Australia", "United States"]:
        mk = [o for o in out if o["market"] == mkt]
        if not mk:
            continue
        print("\n" + "=" * 112)
        print(f"{mkt}   (ours = {ours} RD)")
        print("=" * 112)
        print(f"{'KEYWORD':<34}{'VOL':>7}{'CPC':>8}{'WEAKEST':>9}{'MEDIAN':>8}{'x OURS':>8}  VERDICT")
        print("-" * 112)
        for o in sorted(mk, key=lambda x: x["ratio"]):
            print(f"{o['keyword'][:33]:<34}{o['volume']:>7,}{(o['cpc'] or 0):>8.2f}"
                  f"{o['weakest_rd']:>9,}{int(o['median_rd']):>8,}{o['ratio']:>8.1f}  {o['verdict']}")
            print(f"      weakest page-1 incumbent: {o['weakest_dom']}")

    path = os.path.join(HERE, "data", "incumbent-authority-2026-08-25.json")
    if "--out" in sys.argv:
        path = sys.argv[sys.argv.index("--out") + 1]
    with open(path, "w") as fh:
        json.dump({"ours": ours, "rd": rd, "terms": out}, fh, indent=1)
    print(f"\nWrote {path}", file=sys.stderr)


if __name__ == "__main__":
    main()
