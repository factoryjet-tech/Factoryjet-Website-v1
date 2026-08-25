#!/usr/bin/env python3
"""
Real search demand for the UK / US / AU AI-search clusters. India excluded.

WHY THIS EXISTS (2026-08-25)
GSC says the UK earns 31 clicks per 90 days at average position 37.6, while
India earns 567 clicks from near-identical impression volume at position 11.4.
Same impressions, 18x the clicks: the gap is position, not content.

Inside that UK data there is one repeatable win. After the 2026-08-03 doorway
consolidation, "ai seo cardiff" moved from position 10.6 to 5.2 and produced
the only healthy UK CTR on the property (6.9%). The pattern is narrow
"ai seo {city}" and "ai seo {qualifier}" terms, not head terms: we sit at 51.6
for "ai seo agency" and went backwards on "ai seo agency uk" (33.2 -> 39.3).

Before building anything on that pattern, the demand has to be real. The same
GSC export is full of rank-tracker noise ("1488: tracking for seo agency",
"10 best seo agencies in gillingham"), so impressions cannot be trusted as a
demand signal here. This resolves every candidate against Google Ads volume.

READ THE OUTPUT LIKE THIS
  vol >= 50            -> worth a page or a section
  vol 10-49            -> worth a section on an existing page, never its own page
  vol 0 / None         -> tool noise or nobody searches it. Build nothing.
  high CPC + low vol   -> small but commercially hot. Usually the best trade.

Usage:
  cd pipeline/research && set -a; . ./.env; set +a
  python3 dfs_priority_markets_demand.py [--json out.json]
"""
import os, json, base64, urllib.request, sys

LOGIN = os.environ["DATAFORSEO_LOGIN"]
PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()

# Bhavesh 2026-08-25: US, UK and AU are the priority markets. India is out.
MARKETS = {
    2826: ("United Kingdom", "en"),
    2840: ("United States", "en"),
    2036: ("Australia", "en"),
}

# The 15 UK cities that currently serve a live /uk/{city} page.
UK_CITIES = ["london", "manchester", "birmingham", "leeds", "liverpool", "sheffield",
             "bristol", "edinburgh", "glasgow", "cardiff", "leicester", "nottingham",
             "newcastle", "brighton", "coventry"]

AU_CITIES = ["sydney", "melbourne", "brisbane", "perth", "adelaide"]
# Second tier, only tested on the families where a city page could ever pay for itself.
AU_CITIES_EXT = ["canberra", "gold coast", "newcastle", "hobart", "wollongong",
                 "geelong", "sunshine coast", "darwin"]

def uk_terms():
    t = []
    # The Cardiff pattern, tested across every city we already have a page for.
    for c in UK_CITIES:
        t += [f"ai seo {c}", f"ai seo agency {c}", f"seo agency {c}"]
    # Qualifier terms where GSC already puts us on page 1.
    t += ["ai seo agency uk", "ai seo audit uk", "ai seo agency pricing uk",
          "ai seo services uk", "ai seo consultant uk", "ai seo company uk",
          # GEO/AEO naming, both spellings: UK users type both.
          "geo agency uk", "aeo agency uk", "generative engine optimisation uk",
          "generative engine optimization uk", "answer engine optimisation uk",
          "llm seo uk", "chatgpt seo uk", "ai search optimisation uk",
          # adjacent services we already have UK hubs for
          "local seo services uk", "ecommerce seo agency uk", "shopify seo agency uk",
          "seo audit service uk", "ai agency uk", "ai automation agency uk"]
    return t

def us_terms():
    return ["ai seo agency", "ai seo services", "ai seo company", "ai seo consultant",
            "geo agency", "generative engine optimization agency", "aeo agency",
            "answer engine optimization agency", "llm seo", "llm seo agency",
            "chatgpt seo", "chatgpt seo agency", "ai search optimization",
            "ai visibility agency", "brand visibility in ai search",
            "generative engine optimization services", "ai seo audit",
            "ai seo pricing", "ecommerce seo agency", "shopify seo agency"]

def au_terms():
    """Australia, six service lines (Bhavesh 2026-08-25).

    The first pass only tested 20 AU terms and 13 of them came back at zero. That
    told us the AI-search naming has no Australian audience yet; it did NOT tell us
    whether the six service lines we actually sell have demand here. This widens the
    net to every family in those six lines, national plus city, before anything is
    built. Both spellings are tested where AU users type both.
    """
    t = []

    # --- Line 1: AI agent design, development, implementation -----------------
    t += ["ai agent development", "ai agent development australia",
          "ai agent development company", "ai agent development services",
          "ai agents australia", "ai agent australia", "ai agency australia",
          "ai consulting australia", "ai consultant australia",
          "ai consulting services australia", "ai development company australia",
          "ai software development australia", "ai solutions australia",
          "ai implementation australia", "ai integration services australia",
          "custom ai development australia", "generative ai consulting australia",
          "llm development australia", "machine learning consulting australia",
          "ai automation australia", "ai automation agency australia",
          "ai automation agency", "business automation australia",
          "workflow automation australia", "process automation australia",
          "rpa australia", "chatbot development australia", "ai chatbot australia",
          "ai chatbot development australia", "conversational ai australia",
          "voice ai australia", "ai voice agent", "ai receptionist australia",
          "ai customer service australia", "ai sales agent"]
    for c in AU_CITIES:
        t += [f"ai agency {c}", f"ai consulting {c}", f"ai development {c}",
              f"ai automation {c}", f"chatbot development {c}",
              f"ai agent development {c}"]

    # --- Line 2: e-commerce design, development, implementation ---------------
    t += ["ecommerce development australia", "ecommerce website development australia",
          "ecommerce web design australia", "ecommerce website design australia",
          "ecommerce agency australia", "ecommerce development company australia",
          "ecommerce web development australia", "online store development australia",
          "ecommerce website builder australia", "ecommerce consultant australia",
          "shopify agency australia", "shopify experts australia",
          "shopify partner australia", "shopify plus agency australia",
          "shopify developer australia", "shopify developers australia",
          "shopify web design australia", "shopify designer australia",
          "shopify website design australia", "shopify development australia",
          "woocommerce developer australia", "woocommerce agency australia",
          "bigcommerce agency australia", "magento agency australia",
          "magento developer australia", "shopify migration australia",
          "headless commerce australia"]
    for c in AU_CITIES:
        t += [f"ecommerce web design {c}", f"ecommerce development {c}",
              f"shopify developer {c}", f"shopify agency {c}", f"ecommerce agency {c}"]

    # --- Line 3: agentic commerce --------------------------------------------
    t += ["agentic commerce", "agentic commerce australia", "agentic ai",
          "agentic ai australia", "agentic ai agency", "ai agents for ecommerce",
          "ai shopping agent", "conversational commerce australia",
          "ai commerce australia", "chatgpt shopping", "agentic checkout",
          "ai personal shopper", "autonomous ai agents"]

    # --- Line 4: B2B e-commerce ----------------------------------------------
    t += ["b2b ecommerce australia", "b2b ecommerce platform australia",
          "b2b ecommerce website", "b2b ecommerce agency", "b2b ecommerce platform",
          "b2b online ordering system", "wholesale ecommerce platform australia",
          "b2b portal development", "customer portal development australia",
          "trade portal australia", "wholesale ordering platform australia",
          "b2b website development australia", "erp ecommerce integration australia",
          "netsuite ecommerce australia", "b2b digital agency australia"]

    # --- Line 5: AI SEO, plus the baseline SEO demand it sits inside ----------
    t += ["ai seo agency australia", "ai seo services australia", "ai seo australia",
          "ai seo agency", "ai seo", "geo agency australia",
          "generative engine optimisation australia",
          "generative engine optimization australia", "geo seo australia",
          "ai search optimisation australia", "ai search optimization australia",
          "llm seo australia", "chatgpt seo australia", "aeo australia",
          "answer engine optimisation australia", "answer engine optimization australia",
          "ai visibility australia", "ai overview optimisation", "seo for ai",
          "seo agency australia", "seo services australia", "seo company australia",
          "seo consultant australia", "local seo australia",
          "ecommerce seo agency australia", "ecommerce seo australia",
          "technical seo australia", "seo audit australia",
          "best seo agency australia", "affordable seo australia",
          "shopify seo australia", "seo specialist australia"]
    for c in AU_CITIES:
        t += [f"ai seo {c}", f"seo agency {c}", f"seo services {c}", f"seo company {c}",
              f"seo consultant {c}", f"local seo {c}", f"best seo agency {c}",
              f"ecommerce seo {c}"]
    for c in AU_CITIES_EXT:
        t += [f"seo agency {c}", f"seo services {c}"]

    # --- Line 6: web design ---------------------------------------------------
    t += ["web design australia", "website design australia",
          "web design company australia", "web design services australia",
          "web design agency australia", "web development australia",
          "website development australia", "web designer australia",
          "website designer australia", "custom web design australia",
          "small business web design australia", "website redesign australia",
          "wordpress development australia", "wordpress agency australia",
          "web development company australia", "digital agency australia",
          "creative agency australia", "ux design australia"]
    for c in AU_CITIES:
        t += [f"web design {c}", f"web design company {c}", f"website design {c}",
              f"web development {c}", f"web designer {c}", f"web design agency {c}"]
    for c in AU_CITIES_EXT:
        t += [f"web design {c}", f"web design company {c}"]

    return t


PLAN = {2826: uk_terms(), 2840: us_terms(), 2036: au_terms()}


def post(path, body, timeout=180):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"},
        method="POST",
    )
    return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())


def volumes_for(loc, kws):
    """Exact monthly Google volume per market. Ads API caps at 1000 keywords."""
    out = {}
    for i in range(0, len(kws), 700):
        chunk = kws[i:i + 700]
        body = [{"location_code": loc, "language_code": MARKETS[loc][1], "keywords": chunk}]
        r = post("keywords_data/google_ads/search_volume/live", body)
        if r.get("status_code") != 20000:
            print(f"  API error {MARKETS[loc][0]}: {r.get('status_message')}", file=sys.stderr)
            continue
        for task in r.get("tasks") or []:
            for item in task.get("result") or []:
                out[item.get("keyword")] = {
                    "vol": item.get("search_volume"),
                    "cpc": item.get("cpc"),
                    "comp": item.get("competition"),
                }
    return out


def main():
    all_rows = []
    plan = PLAN
    if "--loc" in sys.argv:
        want = int(sys.argv[sys.argv.index("--loc") + 1])
        plan = {k: v for k, v in PLAN.items() if k == want}
    for loc, kws in plan.items():
        label = MARKETS[loc][0]
        print(f"querying {label}: {len(kws)} keywords...", file=sys.stderr)
        res = volumes_for(loc, sorted(set(kws)))
        for kw in sorted(set(kws)):
            d = res.get(kw) or {}
            all_rows.append({
                "market": label, "loc": loc, "keyword": kw,
                "vol": d.get("vol"), "cpc": d.get("cpc"), "comp": d.get("comp"),
            })

    for loc in plan:
        label = MARKETS[loc][0]
        rows = [r for r in all_rows if r["loc"] == loc]
        live = sorted([r for r in rows if (r["vol"] or 0) > 0], key=lambda r: -(r["vol"] or 0))
        dead = [r for r in rows if not (r["vol"] or 0)]

        print("\n" + "=" * 82)
        print(f"{label}  —  {len(live)} terms with real volume, {len(dead)} with none")
        print("=" * 82)
        print(f"{'KEYWORD':<46}{'VOL/mo':>9}{'CPC':>9}{'COMP':>10}")
        print("-" * 82)
        for r in live:
            cpc = f"{r['cpc']:.2f}" if r["cpc"] else "-"
            print(f"{r['keyword'][:45]:<46}{r['vol']:>9}{cpc:>9}{str(r['comp'] or '-'):>10}")
        if live:
            print("-" * 82)
            print(f"{'TOTAL addressable volume':<46}{sum(r['vol'] for r in live):>9}")
        if dead:
            print(f"\n  zero / no data ({len(dead)}): " + ", ".join(r["keyword"] for r in dead[:14]))
            if len(dead) > 14:
                print(f"  ...and {len(dead) - 14} more")

    if "--json" in sys.argv:
        path = sys.argv[sys.argv.index("--json") + 1]
        with open(path, "w") as f:
            json.dump({"rows": all_rows}, f, indent=2)
        print(f"\nWrote {path}", file=sys.stderr)


if __name__ == "__main__":
    main()
