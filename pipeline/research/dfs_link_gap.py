#!/usr/bin/env python3
"""LINK GAP: sites that link to our competitors but not to us (2026-08-03).

We sit at 53 referring domains vs a competitor median of 1,799 (dfs_backlinks.py).
That gap is not closable by content alone, but it IS attackable with targeted
outreach IF you know which sites already link to agencies in this category.

This finds them: pull referring domains for each competitor, drop anything that
already links to factoryjet.com, and rank what is left by how many competitors
it links to. A site linking to 4 of our rivals is pre-qualified; a site linking
to 1 may be incidental.

NOTHING here posts, submits, or contacts anything. It produces a research list
for a human to work. Automated link placement is a Google link-scheme violation
and is deliberately out of scope.

Writes data/link_gap.json + data/link_gap.csv
"""
import os, json, base64, urllib.request, csv
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

US = "factoryjet.com"
# Deliberately mid-size rivals. outerboxdesign (4,718 RDs) is too far ahead for
# its link profile to be a realistic near-term template.
COMPETITORS = [
    "netalico.com", "swankyagency.com", "elogic.co", "iwdagency.com",
    "absoluteweb.com", "heycarson.com", "magefan.com", "digitalsuits.co",
    "optimum7.com", "sherocommerce.com",
]
LIMIT = 400

# Domains that are noise for outreach: aggregators, socials, and link farms.
SKIP = {"facebook.com", "twitter.com", "x.com", "linkedin.com", "instagram.com",
        "youtube.com", "pinterest.com", "reddit.com", "t.co", "medium.com",
        "wordpress.com", "blogspot.com", "wixsite.com", "google.com", "bing.com",
        "amazonaws.com", "cloudfront.net", "gravatar.com", "w3.org", "archive.org"}


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"_err": str(e)}


def refdomains(target):
    # NOTE: backlinks/referring_domains/live rejects a `filters` field outright
    # ("Invalid Field: 'filters'", status 40501). Task-level errors return HTTP
    # 200 with status_code 20000 at the top level, so they MUST be checked on
    # the task object or the script silently reports zero results as if the
    # profile were empty. That exact bug produced a false "0 referring domains"
    # for every target on the first run.
    r = post("backlinks/referring_domains/live", [{
        "target": target, "limit": LIMIT, "backlinks_status_type": "live",
        "order_by": ["rank,desc"]}])
    out, cost = [], r.get("cost", 0) or 0
    try:
        task = r["tasks"][0]
        if task.get("status_code") != 20000:
            print(f"  !! {target}: {task.get('status_code')} {task.get('status_message')}")
            return target, out, cost
        items = task["result"][0]["items"] or []
    except Exception as e:
        print(f"  !! {target}: {str(e)[:80]} {json.dumps(r)[:120]}")
        return target, out, cost
    for it in items:
        d = (it.get("domain") or "").lower().replace("www.", "")
        if not d or d in SKIP or d.endswith(".gov"):
            continue
        out.append({"domain": d, "rank": it.get("rank"),
                    "backlinks": it.get("backlinks"),
                    "dofollow": it.get("referring_links_types", {}).get("anchor")
                                if isinstance(it.get("referring_links_types"), dict) else None})
    return target, out, cost


if __name__ == "__main__":
    print(f"=== pulling referring domains for {US} + {len(COMPETITORS)} competitors ===")
    cost = 0.0
    ours, comp = set(), defaultdict(dict)
    with ThreadPoolExecutor(max_workers=6) as ex:
        for target, items, c in ex.map(refdomains, [US] + COMPETITORS):
            cost += c
            if target == US:
                ours = {i["domain"] for i in items}
                print(f"  {US}: {len(items)} referring domains")
            else:
                for i in items:
                    comp[i["domain"]][target] = i
                print(f"  {target}: {len(items)}")

    gap = []
    for dom, hits in comp.items():
        if dom in ours or dom == US:
            continue
        ranks = [h.get("rank") or 0 for h in hits.values()]
        gap.append({"domain": dom, "links_to": sorted(hits.keys()),
                    "n_competitors": len(hits), "best_rank": max(ranks) if ranks else 0})
    gap.sort(key=lambda g: (-g["n_competitors"], -g["best_rank"]))

    print(f"\n=== LINK GAP: {len(gap)} domains link to competitors but NOT to us ===")
    tiers = Counter(g["n_competitors"] for g in gap)
    for n in sorted(tiers, reverse=True):
        print(f"  links to {n} competitor(s): {tiers[n]} domains")

    print(f"\n=== TOP PRE-QUALIFIED TARGETS (links to 3+ rivals, by domain rank) ===")
    shown = [g for g in gap if g["n_competitors"] >= 3][:30]
    for g in shown:
        print(f"  [{g['n_competitors']}x rank {g['best_rank']:>3}] {g['domain'][:44]:44s} "
              f"{', '.join(x.replace('.com','').replace('.co','') for x in g['links_to'][:4])}")
    if not shown:
        print("  none at 3+; check the 2x tier in the CSV")

    with open(os.path.join(HERE, "data", "link_gap.csv"), "w", newline="") as f:
        w = csv.writer(f); w.writerow(["domain", "n_competitors", "best_rank", "links_to"])
        for g in gap:
            w.writerow([g["domain"], g["n_competitors"], g["best_rank"], "|".join(g["links_to"])])
    json.dump(gap, open(os.path.join(HERE, "data", "link_gap.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/link_gap.csv ({len(gap)} rows) + link_gap.json")
    print("  NOTE: this is a research list for human outreach. Nothing was posted or contacted.")
