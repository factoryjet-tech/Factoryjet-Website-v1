#!/usr/bin/env python3
"""REFERRING DOMAIN AUDIT: what we actually have, and what is junk.

Context (2026-08-18): referring domains are the binding constraint on US organic
growth. Our three largest commercial pools (web design 148k/mo, ecommerce dev
7.3k/mo, chatbot 2k/mo) are all GATED because the weakest page-1 incumbent
outranks us on referring domains. See factoryjet-winnability-is-incumbent-authority.

Before building links you have to know what you already hold. The raw count (63)
is misleading: an unknown share is automated scraper-directory spam that hit the
whole niche in 2026-08. This script separates earned from noise, so the real
baseline is known.

Also checks the profile sites we are ALREADY listed on (Clutch, Capterra, etc.)
to see whether each one actually links back. A live profile with no link is the
cheapest referring domain available: the editorial decision is already made.

NOTHING here submits, posts, or contacts anything. Research only.
Writes data/referring_domains_audit.json + .csv
"""
import os, json, base64, urllib.request, csv, sys
from collections import Counter

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

TARGET = "factoryjet.com"


def post(path, payload):
    req = urllib.request.Request(
        "https://api.dataforseo.com/v3" + path,
        data=json.dumps(payload).encode(),
        headers={"Authorization": "Basic " + AUTH,
                 "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=180) as r:
        return json.loads(r.read().decode())


def items(resp):
    try:
        return resp["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return []


# Signatures of the automated scraper-directory networks that hit this niche in
# 2026-08. Verified by hand: jadasquad.com picked up the identical domains in the
# same month, which is the tell that it is a network spraying the category and
# not anything we earned.
SPAM_TOKENS = ("directory", "listing", "backlink", "seodirect", "rankdirect",
               "linkboost", "trafficdirect", "submit", "bookmark", "webdir")
SPAM_TLDS = (".xyz", ".site", ".mom", ".top", ".click", ".shop", ".buzz")


def classify(d):
    """earned | junk — deliberately conservative, junk only when confident.

    Three independent signals, any one of which condemns a domain:
      1. DataForSEO's own backlinks_spam_score (>=30 is their junk threshold).
      2. Name matches a scraper-directory token, or a throwaway TLD.
      3. rank 0 AND nobody links to IT. A domain no one links to, which links to
         us once, is a generated page. Real sites have at least one referrer.
    """
    name = d["domain"].lower()
    rank = d.get("rank") or 0
    spam = d.get("spam_score") or 0
    if spam >= 30:
        return "junk"
    if any(t in name for t in SPAM_TOKENS) or name.endswith(SPAM_TLDS):
        return "junk"
    if rank == 0 and (d.get("ref_domains_to_it") or 0) == 0:
        return "junk"
    return "earned"


def main():
    print(f"Pulling live referring domains for {TARGET} ...")
    resp = post("/backlinks/referring_domains/live", [{
        "target": TARGET,
        "limit": 1000,
        "order_by": ["rank,desc"],
    }])
    rows = []
    for it in items(resp):
        if it.get("lost_date"):
            continue
        rows.append({
            "domain": it.get("domain"),
            "rank": it.get("rank"),
            "backlinks": it.get("backlinks"),
            "spam_score": it.get("backlinks_spam_score"),
            "ref_domains_to_it": it.get("referring_domains"),
            "first_seen": it.get("first_seen"),
            "nofollow": it.get("referring_pages_nofollow"),
        })
    for r in rows:
        r["verdict"] = classify(r)

    print(f"\n  live referring domains: {len(rows)}")
    c = Counter(r["verdict"] for r in rows)
    for k, v in c.most_common():
        print(f"    {k:8s} {v}")

    earned = [r for r in rows if r["verdict"] == "earned"]
    print(f"\n  EARNED referring domains ({len(earned)}) — the real baseline:")
    for r in sorted(earned, key=lambda x: -(x["rank"] or 0)):
        nf = " NOFOLLOW" if (r["backlinks"] and r["nofollow"] == r["backlinks"]) else ""
        print(f"    rank {str(r['rank'] or 0):>4} spam {str(r['spam_score'] or 0):>3}  "
              f"{r['domain']:<40} {r['backlinks']} bl  first {str(r['first_seen'])[:10]}{nf}")

    junk = [r for r in rows if r["verdict"] == "junk"]
    print(f"\n  JUNK / scraper-network ({len(junk)}), first-seen histogram:")
    hist = Counter(str(r["first_seen"])[:7] for r in junk)
    for m, n in sorted(hist.items()):
        print(f"    {m}  {'#' * min(n, 60)} {n}")

    out = {"target": TARGET, "total_live": len(rows),
           "earned": len(earned), "junk": len(junk), "rows": rows}
    with open(os.path.join(HERE, "data", "referring_domains_audit.json"), "w") as f:
        json.dump(out, f, indent=2)
    with open(os.path.join(HERE, "data", "referring_domains_audit.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    print("\n  wrote data/referring_domains_audit.{json,csv}")
    return rows


if __name__ == "__main__":
    main()
