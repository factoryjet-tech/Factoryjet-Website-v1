#!/usr/bin/env python3
"""
Generate one research brief per page for the 2026-08-12 US build.

The publishing standard requires FAQs grounded in REAL People-Also-Ask data and competitor
sections naming REAL ranking rivals. Agents must not invent either. So the orchestrator pulls
it once, centrally, and hands each agent a JSON brief it can trust.

Per page it captures: target keyword + volume + KD + CPC, live PAA questions (depth 2),
top 10 organic with page type, whether Google renders an AI Overview and who it cites,
and related searches for secondary keyword coverage.

Writes pipeline/research/briefs/<slug>.json  and a combined index.
"""
import os, sys, json, time, base64, urllib.request, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "briefs")
os.makedirs(OUT, exist_ok=True)

for line in open(os.path.join(HERE, ".env")):
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
US, LANG = 2840, "en"
COST = 0.0

# slug -> (route, target keyword, volume, kd, cpc, kind, note)
PAGES = [
    # ---- WAVE 1: city pages (verified volume, no existing page) ----
    ("dallas-web-design",      "/dallas/web-design",      "web design company dallas",   2900, 24, "city", ""),
    ("dallas-seo",             "/dallas/seo",             "seo agency dallas",           1000, 22, "city", ""),
    ("chicago-seo",            "/chicago/seo",            "seo agency chicago",           880,  1, "city", "lowest KD in the whole US set"),
    ("chicago-web-design",     "/chicago/web-design",     "web design company chicago",  1900, 90, "city", "HEAD-ON high KD"),
    ("phoenix-web-design",     "/phoenix/web-design",     "web design company phoenix",  1900, 31, "city", ""),
    ("phoenix-seo",            "/phoenix/seo",            "seo agency phoenix",          1300, 24, "city", ""),
    ("san-diego-web-design",   "/san-diego/web-design",   "web design company san diego",1600, 30, "city", ""),
    ("san-diego-seo",          "/san-diego/seo",          "seo agency san diego",        2400, 39, "city", ""),
    ("boston-seo",             "/boston/seo",             "seo agency boston",            880,  5, "city", ""),
    ("detroit-web-design",     "/detroit/web-design",     "web design company detroit",   590,  0, "city", ""),
    ("las-vegas-seo",          "/las-vegas/seo",          "seo agency las vegas",         590, 13, "city", ""),
    ("los-angeles-seo",        "/los-angeles/seo",        "seo agency los angeles",      2400, 35, "city", ""),
    # ---- WAVE 2: industry + service + head-on ----
    ("b2b-website-design",     "/services/b2b-website-design",          "b2b website design",            480,  1, "service", "B2B is our only AI-cited theme"),
    ("manufacturing-web-design","/services/manufacturing-website-design","manufacturing website design",  720,  2, "service", ""),
    ("saas-website-design",    "/services/saas-website-design",         "saas website design",           390, 15, "service", ""),
    ("restaurant-web-design",  "/services/restaurant-website-design",   "restaurant website design",     720, 14, "service", ""),
    ("nonprofit-web-design",   "/services/nonprofit-website-design",    "nonprofit website design",     1000, 40, "service", "HEAD-ON high KD"),
    ("ai-agents-real-estate",  "/services/ai-agents-for-real-estate",   "ai agents for real estate",     390,  8, "service", "AI Overview live on this category"),
    ("ai-agents-healthcare",   "/services/ai-agents-for-healthcare",    "ai agents for healthcare",      170, 28, "service", "AI Overview live on this category"),
    ("ecommerce-app-dev",      "/services/ecommerce-app-development",   "ecommerce app development company",720,12,"service","AI Overview live"),
    ("atlanta-web-design",     "/atlanta/web-design",     "web design company atlanta",  1000, 75, "city", "HEAD-ON high KD"),
    ("seattle-web-design",     "/seattle/web-design",     "web design company seattle",  1000, 79, "city", "HEAD-ON high KD"),
    ("houston-web-design",     "/houston/web-design",     "web design company houston",   720, 50, "city", "HEAD-ON high KD"),
    ("st-louis-web-design",    "/st-louis/web-design",    "web design company st louis", 1300, 72, "city", "HEAD-ON high KD"),
]

DIRECTORY = {"clutch.co","designrush.com","themanifest.com","goodfirms.co","upcity.com","expertise.com",
             "g2.com","capterra.com","trustpilot.com","yelp.com","sortlist.com","linkedin.com",
             "indeed.com","reddit.com","quora.com","youtube.com","medium.com","wikipedia.org"}
# PAA we never want turning into an FAQ
BAD_PAA = re.compile(r"\b(salary|salaries|job|jobs|hiring|career|intern|course|degree|"
                     r"mlm|pyramid|scam|work from home|freelance rate)\b", re.I)


def post(path, body, timeout=240):
    global COST
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps([body]).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"})
    r = json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    COST += (r.get("cost") or 0)
    return r


def page_type(url, dom, title):
    d = (dom or "").lower().replace("www.", "")
    u, t = (url or "").lower(), (title or "").lower()
    if d in DIRECTORY: return "directory"
    if re.search(r"/(blog|article|insights|resources|guide|learn)/", u): return "blog"
    if re.match(r"^\s*(top|best)\s*\d*", t): return "listicle"
    if u.rstrip("/").count("/") <= 3: return "service-page"
    return "other"


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    index = []
    for slug, route, kw, vol, kd, kind, note in PAGES:
        if only and only not in slug:
            continue
        r = post("serp/google/organic/live/advanced", {
            "keyword": kw, "location_code": US, "language_code": LANG,
            "device": "desktop", "os": "windows", "depth": 20,
            "load_async_ai_overview": True, "people_also_ask_click_depth": 2,
        })
        try:
            items = r["tasks"][0]["result"][0]["items"] or []
        except Exception:
            print(f"  ! {slug}: {json.dumps(r)[:160]}")
            continue

        paa, organic, aio, related = [], [], [], []
        for it in items:
            t = it.get("type")
            if t == "organic" and len(organic) < 12:
                dom = (it.get("domain") or "").replace("www.", "")
                organic.append({"rank": it.get("rank_group"), "domain": dom,
                                "title": (it.get("title") or "")[:140],
                                "page_type": page_type(it.get("url"), dom, it.get("title"))})
            elif t == "people_also_ask":
                for sub in (it.get("items") or []):
                    q = sub.get("title")
                    if q and not BAD_PAA.search(q) and q not in paa:
                        paa.append(q)
            elif t == "ai_overview":
                refs = list(it.get("references") or [])
                for sub in (it.get("items") or []):
                    refs += list(sub.get("references") or [])
                for ref in refs:
                    d = (ref.get("domain") or "").replace("www.", "")
                    if d and d not in aio:
                        aio.append(d)
            elif t == "related_searches":
                related += [x for x in (it.get("items") or []) if isinstance(x, str)]

        rivals = [o for o in organic if o["page_type"] == "service-page"][:6]
        brief = {
            "slug": slug, "route": route, "kind": kind, "note": note,
            "target_keyword": kw, "search_volume": vol, "keyword_difficulty": kd,
            "winning_page_type": (max(((o["page_type"], sum(1 for x in organic if x["page_type"] == o["page_type"])) for o in organic), key=lambda x: x[1])[0] if organic else ""),
            "ai_overview_present": bool(aio),
            "ai_overview_cites": aio[:10],
            "paa_questions": paa[:40],
            "organic_top12": organic,
            "named_rivals_for_comparison_table": [o["domain"] for o in rivals],
            "related_searches": related[:25],
            "generated": "2026-08-12",
        }
        with open(os.path.join(OUT, f"{slug}.json"), "w") as f:
            json.dump(brief, f, indent=1)
        index.append({"slug": slug, "route": route, "kw": kw, "vol": vol, "kd": kd,
                      "paa": len(paa), "aio": bool(aio), "rivals": len(rivals)})
        print(f"  {slug:26s} paa={len(paa):>2d}  aio={'Y' if aio else 'n'}  "
              f"rivals={len(rivals)}  win={brief['winning_page_type']:13s} (${COST:.2f})")
        time.sleep(0.3)

    with open(os.path.join(OUT, "_index.json"), "w") as f:
        json.dump(index, f, indent=1)
    thin = [i for i in index if i["paa"] < 12]
    print(f"\n{len(index)} briefs -> {OUT}   spend ${COST:.2f}")
    if thin:
        print(f"THIN PAA (<12 questions), agent must supplement from related_searches + "
              f"sibling city briefs: {', '.join(i['slug'] for i in thin)}")


if __name__ == "__main__":
    main()
