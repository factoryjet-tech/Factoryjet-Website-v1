#!/usr/bin/env python3
"""BACKLINK PROFILE vs the competitors we actually compete with (2026-08-03).

Authority (referring domains) is the standing constraint on FactoryJet's US
rankings: prior research put us at ~44 referring domains and concluded that
on-page work would not move high-KD terms until that number grows. This is the
first time we have measured it against the SPECIFIC rivals surfaced by
dfs_commerce_competitors.py, rather than against a guessed list.

Note: DataForSEO Backlinks is a separate product from Labs/SERP. If the account
lacks it, every call returns an auth/permission error and the script says so
plainly rather than printing zeros that look like real data.

Writes data/backlinks_profile.json
"""
import os, json, base64, urllib.request
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

TARGETS = [
    ("factoryjet.com",            "US (us)"),
    # migration tools + agencies that own the replatforming SERPs
    ("litextension.com",          "migration tool"),
    ("cart2cart.com",             "migration tool"),
    ("meetanshi.com",             "migration agency"),
    ("magefan.com",               "migration agency"),
    ("digitalsuits.co",           "migration agency"),
    ("heycarson.com",             "migration agency"),
    # B2B / manufacturer rivals
    ("coalitiontechnologies.com", "b2b agency"),
    ("oroinc.com",                "b2b platform"),
    ("magnetoitsolutions.com",    "b2b agency"),
    ("coredna.com",               "manufacturer platform"),
    ("virtocommerce.com",         "manufacturer platform"),
    # the agencies LLMs name most often (from ecom_leadgen_serp.json)
    ("outerboxdesign.com",        "llm-named"),
    ("absoluteweb.com",           "llm-named"),
    ("wemakewebsites.com",        "llm-named"),
    ("netalico.com",              "llm-named"),
]


def post(path, body, timeout=180):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"_http": e.code, "_body": e.read().decode()[:300]}
    except Exception as e:
        return {"_err": str(e)}


def summary(args):
    dom, label = args
    r = post("backlinks/summary/live", [{"target": dom, "internal_list_limit": 1,
                                         "backlinks_status_type": "live"}])
    if "_http" in r or "_err" in r:
        return {"domain": dom, "label": label, "error": r.get("_body") or r.get("_err")}
    try:
        t = r["tasks"][0]
        if t.get("status_code") != 20000:
            return {"domain": dom, "label": label,
                    "error": f"{t.get('status_code')} {t.get('status_message')}"}
        d = t["result"][0]
    except Exception:
        return {"domain": dom, "label": label, "error": json.dumps(r)[:200]}
    return {"domain": dom, "label": label, "cost": r.get("cost", 0),
            "rank": d.get("rank"),
            "referring_domains": d.get("referring_domains"),
            "referring_main_domains": d.get("referring_main_domains"),
            "backlinks": d.get("backlinks"),
            "referring_pages": d.get("referring_pages"),
            "broken_backlinks": d.get("broken_backlinks"),
            "dofollow": (d.get("referring_links_types") or {}).get("anchor")}


if __name__ == "__main__":
    print(f"=== backlinks/summary for {len(TARGETS)} domains ===")
    rows, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=6) as ex:
        for o in ex.map(summary, TARGETS):
            rows.append(o); cost += o.get("cost", 0) or 0

    errs = [r for r in rows if r.get("error")]
    if len(errs) == len(rows):
        print("\n  ALL CALLS FAILED. Most likely this account has no Backlinks API")
        print("  subscription (it is separate from Labs/SERP).")
        print("  First error:", errs[0]["error"][:220])
        json.dump(rows, open(os.path.join(HERE, "data", "backlinks_profile.json"), "w"), indent=1)
        raise SystemExit(0)

    ok = [r for r in rows if not r.get("error")]
    ok.sort(key=lambda r: -(r.get("referring_main_domains") or 0))
    print(f"\n{'domain':30s} {'label':24s} {'ref.domains':>11s} {'backlinks':>11s} {'rank':>5s}")
    fj = None
    for r in ok:
        mark = "  <-- US" if r["domain"] == "factoryjet.com" else ""
        if r["domain"] == "factoryjet.com":
            fj = r
        print(f"{r['domain']:30s} {r['label']:24s} "
              f"{(r.get('referring_main_domains') or 0):>11,} "
              f"{(r.get('backlinks') or 0):>11,} {str(r.get('rank')):>5s}{mark}")
    for r in rows:
        if r.get("error"):
            print(f"  ERR {r['domain']}: {str(r['error'])[:90]}")

    if fj:
        mine = fj.get("referring_main_domains") or 0
        others = [r.get("referring_main_domains") or 0 for r in ok if r["domain"] != "factoryjet.com"]
        others.sort()
        med = others[len(others)//2] if others else 0
        print(f"\n  FactoryJet referring domains : {mine:,}")
        print(f"  Competitor median            : {med:,}")
        print(f"  Gap                          : {med - mine:+,} "
              f"({(med / mine) if mine else float('inf'):.1f}x)" if mine else "")

    json.dump(rows, open(os.path.join(HERE, "data", "backlinks_profile.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/backlinks_profile.json")
