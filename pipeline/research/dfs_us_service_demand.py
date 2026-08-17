#!/usr/bin/env python3
"""
DEEP US DEMAND MAP across every FactoryJet service line (2026-08-17).

WHY THIS EXISTS
Every prior demand pull on this repo has been either city-scoped (Austin, Fargo)
or single-vertical (dfs_agent_geo.py for agents, dfs_ecommerce_demand.py for
commerce). Bhavesh asked for the whole US picture at once, and explicitly asked
NOT to stop at head terms like "ai agent development company" but to find what
owners, IT heads, ops leads and marketing leads actually type.

So this uses keyword_suggestions (full long-tail containing the seed) rather
than keyword_ideas (semantic neighbours). Suggestions is the endpoint that
surfaces "ai agent for customer service small business" and "how much does it
cost to build an ai agent", which is the layer the head-term pulls miss.

READ THE OUTPUT LIKE THIS
  - volume is real US monthly Google volume. Zero means zero. See
    dfs_verify_striking_distance.py for why that matters on this property.
  - CPC is the honest difficulty proxy. High CPC + low KD is the buy signal.
  - intent tags let you separate "wants to hire someone" from "wants to learn".
    Only COMMERCIAL and ROLE convert to leads. QUESTION terms are GEO/citation
    plays, not lead pages.

Writes data/us_service_demand.json
Usage: set -a; . ./.env; set +a; python3 dfs_us_service_demand.py
"""
import os, json, base64, urllib.request, urllib.error, re, sys, time
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

US = 2840
LANG = "en"

# service_line -> seed phrases. Seeds are deliberately mid-length: too short
# ("ai") returns noise, too long ("ai agent development company usa") returns
# almost nothing because suggestions only matches keywords CONTAINING the seed.
SEEDS = {
    "AI Agent Development": [
        "ai agent development", "ai agents for business", "custom ai agent",
        "ai agent company", "build ai agent", "ai agent for customer service",
        "ai sales agent", "ai voice agent", "autonomous ai agent",
    ],
    "AI Automation / Workflow": [
        "ai automation agency", "ai workflow automation", "business process automation ai",
        "ai automation for small business", "n8n automation", "ai integration services",
    ],
    "AI Chatbot": [
        "ai chatbot development", "custom chatbot for business", "chatbot agency",
    ],
    "Ecommerce Development": [
        "ecommerce development company", "shopify development agency",
        "ecommerce website development", "shopify plus agency", "headless commerce agency",
    ],
    "Agentic Commerce": [
        "agentic commerce", "agentic ai commerce", "ai shopping agent",
    ],
    "B2B Ecommerce": [
        "b2b ecommerce platform", "b2b ecommerce agency", "b2b ecommerce website",
    ],
    "Omnichannel Commerce": [
        "omnichannel commerce", "omnichannel retail solution", "unified commerce",
    ],
    "Marketplace": [
        "amazon agency", "walmart marketplace agency", "tiktok shop agency",
    ],
    "AI Search / GEO / AEO / AIO": [
        "generative engine optimization", "answer engine optimization",
        "ai search optimization", "llm seo", "ai visibility", "chatgpt seo",
        "rank in chatgpt", "ai overview optimization",
    ],
    "AI SEO": [
        "ai seo services", "ai seo agency", "ai seo company", "ai powered seo",
    ],
    "Web Design & Development": [
        "web design company", "website development company", "website redesign services",
        "b2b website design", "custom web application development",
    ],
}

# intent classification -----------------------------------------------------
COMMERCIAL = re.compile(
    r"\b(company|companies|agency|agencies|service|services|consultant|consultants|"
    r"consulting|firm|firms|vendor|vendors|partner|partners|developer|developers|"
    r"provider|providers|hire|outsource|freelance|near me|cost|costs|pricing|price|"
    r"quote|rates|packages)\b")
QUESTION = re.compile(r"^(how|what|why|which|who|when|where|can|does|do|is|are|should|will)\b")
COMPARISON = re.compile(r"\b(vs|versus|alternative|alternatives|compare|comparison|best|top|review|reviews)\b")
ROLE = re.compile(
    r"\b(small business|smb|enterprise|startup|startups|mid-?market|mid-?size[d]?|"
    r"for cto|for cio|for it|for operations|for ops|for marketing|for sales|"
    r"for manufacturers?|for retailers?|for healthcare|for saas|for b2b|"
    r"for ecommerce|for e-?commerce|for law firms?|for real estate)\b")


def tag(kw):
    t = []
    if COMMERCIAL.search(kw): t.append("COMMERCIAL")
    if QUESTION.match(kw):    t.append("QUESTION")
    if COMPARISON.search(kw): t.append("COMPARISON")
    if ROLE.search(kw):       t.append("ROLE")
    return t or ["GENERIC"]


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
    """Full long-tail containing `seed`, US, volume>0, ordered by volume."""
    body = [{
        "keyword": seed,
        "location_code": US,
        "language_code": LANG,
        "include_serp_info": False,
        "include_seed_keyword": True,
        "limit": 1000,
        "filters": [["keyword_info.search_volume", ">", 0]],
        "order_by": ["keyword_info.search_volume,desc"],
    }]
    r = post("dataforseo_labs/google/keyword_suggestions/live", body)
    if "_err" in r:
        print(f"  ! {seed}: {r['_err']}", file=sys.stderr)
        return []
    if r.get("status_code") != 20000:
        print(f"  ! {seed}: {r.get('status_message')}", file=sys.stderr)
        return []
    out = []
    for task in r.get("tasks") or []:
        for res in task.get("result") or []:
            for it in res.get("items") or []:
                ki = it.get("keyword_info") or {}
                vol = ki.get("search_volume") or 0
                if not vol:
                    continue
                kd = (it.get("keyword_properties") or {}).get("keyword_difficulty")
                out.append({
                    "keyword": it.get("keyword"),
                    "volume": vol,
                    "cpc": ki.get("cpc"),
                    "competition": ki.get("competition"),
                    "kd": kd,
                })
    return out


def main():
    jobs = [(line, s) for line, seeds in SEEDS.items() for s in seeds]
    print(f"=== {len(jobs)} seed pulls across {len(SEEDS)} service lines (US) ===", file=sys.stderr)

    by_line = defaultdict(dict)   # line -> keyword -> row (dedup)
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(suggestions, s): (line, s) for line, s in jobs}
        for f in futs:
            line, seed = futs[f]
            try:
                rows = f.result()
            except Exception as e:
                print(f"  ! {seed}: {e}", file=sys.stderr)
                continue
            for r in rows:
                by_line[line][r["keyword"]] = r
            print(f"  {line:<32} {seed:<38} {len(rows):>5} kws", file=sys.stderr)

    # assemble
    report = {}
    for line, kws in by_line.items():
        rows = []
        for kw, r in kws.items():
            r = dict(r)
            r["tags"] = tag(kw)
            rows.append(r)
        rows.sort(key=lambda x: -x["volume"])
        report[line] = rows

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    outp = os.path.join(HERE, "data", "us_service_demand.json")
    with open(outp, "w") as fh:
        json.dump(report, fh, indent=1)

    # ---- console summary -------------------------------------------------
    print("\n" + "=" * 100)
    print("US DEMAND BY SERVICE LINE")
    print("=" * 100)
    print(f"{'SERVICE LINE':<34}{'kws':>6}{'total vol':>11}{'commercial vol':>15}{'top CPC':>9}")
    print("-" * 100)
    order = sorted(report.items(), key=lambda x: -sum(r["volume"] for r in x[1]))
    for line, rows in order:
        tot = sum(r["volume"] for r in rows)
        com = sum(r["volume"] for r in rows if "COMMERCIAL" in r["tags"])
        cpcs = [r["cpc"] for r in rows if r.get("cpc")]
        print(f"{line:<34}{len(rows):>6}{tot:>11,}{com:>15,}{max(cpcs) if cpcs else 0:>9.2f}")

    for line, rows in order:
        print("\n" + "=" * 100)
        print(f"{line}  —  top commercial (buyer wants to hire)")
        print("-" * 100)
        com = [r for r in rows if "COMMERCIAL" in r["tags"] or "ROLE" in r["tags"]][:18]
        for r in com:
            print(f"  {r['keyword'][:58]:<60}{r['volume']:>8,}  ${r['cpc'] or 0:>7.2f}  "
                  f"KD{r['kd'] if r['kd'] is not None else '-':>4}  {','.join(r['tags'])}")
        q = [r for r in rows if "QUESTION" in r["tags"]][:10]
        if q:
            print(f"  -- questions (GEO/citation plays, not lead pages) --")
            for r in q:
                print(f"  {r['keyword'][:58]:<60}{r['volume']:>8,}  ${r['cpc'] or 0:>7.2f}")

    print(f"\nwrote {outp}", file=sys.stderr)


if __name__ == "__main__":
    main()
