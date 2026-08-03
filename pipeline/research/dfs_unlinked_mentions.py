#!/usr/bin/env python3
"""UNLINKED BRAND MENTIONS: sites that name FactoryJet but do not link to it.

The cheapest legitimate link there is. Someone already wrote about you; they
just did not hyperlink. A short, specific note asking for the link converts far
better than cold outreach because the editorial decision is already made.

Method: pull brand mentions from Content Analysis, pull our live referring
domains from Backlinks, subtract. What remains is the opportunity list.

NOTHING here contacts anyone. It produces a research list for a human.

Writes data/unlinked_mentions.csv + .json
"""
import os, json, base64, urllib.request, csv, re
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

# DO NOT add the space-separated "Factory Jet" variant. Content Analysis
# tokenises it and returns anything containing "factory" AND "jet": jet-ski
# factories, Vespa jet kits, LEGO Hero Factory. Verified 2026-08-03, it produced
# ~90% garbage. Only the closed-up brand token and the domain are reliable.
BRAND_TERMS = ["FactoryJet", "factoryjet.com"]
# Belt and braces: every result must literally contain the brand token.
MUST_CONTAIN = re.compile(r"factoryjet", re.I)
OURS = "factoryjet.com"
# Our own properties and profile pages we control or that are nofollow by design.
SELF = re.compile(r"factoryjet\.com|linkedin\.com|facebook\.com|twitter\.com|x\.com|instagram\.com")


def post(path, body, timeout=200):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"_err": str(e)}


def dom(u):
    m = re.match(r"https?://([^/]+)", u or "")
    return (m.group(1).replace("www.", "").lower() if m else "")


def mentions(term):
    r = post("content_analysis/search/live", [{
        "keyword": term, "search_mode": "as_is", "limit": 200}])
    out, cost = [], r.get("cost", 0) or 0
    try:
        t = r["tasks"][0]
        if t.get("status_code") != 20000:
            print(f"  !! '{term}': {t.get('status_code')} {t.get('status_message')}")
            return out, cost
        for it in (t["result"][0].get("items") or []):
            u = it.get("url")
            title = it.get("title") or ""
            snippet = json.dumps(it.get("content_info") or {})[:400]
            # Reject anything that does not literally contain the brand token.
            if u and MUST_CONTAIN.search(f"{u} {title} {snippet}"):
                out.append({"url": u, "domain": dom(u), "title": title[:90]})
    except Exception as e:
        print(f"  !! '{term}': {str(e)[:70]}")
    return out, cost


def our_referring_domains():
    r = post("backlinks/referring_domains/live", [{
        "target": OURS, "limit": 500, "backlinks_status_type": "live",
        "order_by": ["rank,desc"]}])
    try:
        t = r["tasks"][0]
        if t.get("status_code") != 20000:
            print(f"  !! referring domains: {t.get('status_message')}")
            return set(), r.get("cost", 0) or 0
        return ({(i.get("domain") or "").replace("www.", "").lower()
                 for i in (t["result"][0].get("items") or [])}, r.get("cost", 0) or 0)
    except Exception:
        return set(), 0


if __name__ == "__main__":
    cost = 0.0
    print("=== pulling brand mentions ===")
    found = {}
    with ThreadPoolExecutor(max_workers=3) as ex:
        for items, c in ex.map(mentions, BRAND_TERMS):
            cost += c
            for i in items:
                found.setdefault(i["url"], i)
    print(f"  {len(found)} mention URLs across {len({i['domain'] for i in found.values()})} domains")

    print("=== pulling our live referring domains ===")
    linked, c = our_referring_domains(); cost += c
    print(f"  {len(linked)} domains already link to us")

    gap = {}
    for u, i in found.items():
        d = i["domain"]
        if not d or SELF.search(d) or d in linked:
            continue
        gap.setdefault(d, i)

    print(f"\n=== UNLINKED MENTIONS: {len(gap)} domains name us but do not link ===")
    for d, i in sorted(gap.items()):
        print(f"  {d[:38]:38s} {i['url'][:76]}")

    with open(os.path.join(HERE, "data", "unlinked_mentions.csv"), "w", newline="") as f:
        w = csv.writer(f); w.writerow(["domain", "url", "title"])
        for d, i in sorted(gap.items()):
            w.writerow([d, i["url"], i["title"]])
    json.dump(list(gap.values()),
              open(os.path.join(HERE, "data", "unlinked_mentions.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/unlinked_mentions.csv")
    print("  NOTE: research list only. Nothing was contacted.")
