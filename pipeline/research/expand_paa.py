#!/usr/bin/env python3
"""
The per-page SERP pull only yielded 5-8 People-Also-Ask questions, but the publishing standard
needs 20-40 real ones. Google surfaces far more PAA on the GENERIC form of a query than on the
geo-modified form ("web design company" is rich, "web design company dallas" is thin), so this
expands each page's question bank from a set of related seeds and merges the results.

Merges into the existing briefs/<slug>.json under "paa_questions" (deduped, noise-filtered) and
records which seed each question came from so an agent can localise honestly.
"""
import os, sys, json, time, base64, urllib.request, re

HERE = os.path.dirname(os.path.abspath(__file__))
BRIEFS = os.path.join(HERE, "briefs")

for line in open(os.path.join(HERE, ".env")):
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
US, LANG = 2840, "en"
COST = 0.0

BAD = re.compile(r"\b(salary|salaries|job|jobs|hiring|career|intern|course|degree|certification|"
                 r"mlm|pyramid|scam|work from home|freelance rate|reddit)\b", re.I)

# Generic seed banks by page theme. These are where the real question volume lives.
SEEDS = {
    "web-design": [
        "web design company", "how much does a website cost for a small business",
        "what does a web design agency do", "how long does it take to build a website",
        "web design vs web development", "do i need a web designer or a website builder",
        "how to choose a web design company", "what should a small business website include",
    ],
    "seo": [
        "seo agency", "what does an seo agency do", "how much does seo cost for a small business",
        "how long does seo take to work", "is seo worth it for small business",
        "how to choose an seo agency", "what is local seo", "how do i know if seo is working",
    ],
    "b2b-website-design": [
        "b2b website design", "what makes a good b2b website",
        "b2b website vs b2c website", "how to design a b2b website",
    ],
    "manufacturing-website-design": [
        "manufacturing website design", "what should a manufacturing website include",
        "website for manufacturing company", "industrial website design",
    ],
    "saas-website-design": [
        "saas website design", "what makes a good saas website", "saas landing page design",
        "how to design a saas website",
    ],
    "restaurant-website-design": [
        "restaurant website design", "what should a restaurant website include",
        "do restaurants need a website", "restaurant website cost",
    ],
    "nonprofit-website-design": [
        "nonprofit website design", "what should a nonprofit website include",
        "best website platform for nonprofits", "nonprofit website cost",
    ],
    "ai-agents-for-real-estate": [
        "ai agents for real estate", "how is ai used in real estate",
        "ai for realtors", "will ai replace real estate agents",
    ],
    "ai-agents-for-healthcare": [
        "ai agents for healthcare", "how is ai used in healthcare",
        "ai in medical practice", "is ai safe in healthcare",
    ],
    "ecommerce-app-development": [
        "ecommerce app development", "how much does it cost to build an ecommerce app",
        "do i need an app for my online store", "ecommerce app vs mobile website",
    ],
}


def theme_for(brief):
    r = brief["route"]
    if r.startswith("/services/"):
        return r.split("/services/")[1]
    return "web-design" if r.endswith("/web-design") else "seo"


def post(body):
    global COST
    req = urllib.request.Request(
        "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        data=json.dumps([body]).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"})
    r = json.loads(urllib.request.urlopen(req, timeout=240).read().decode())
    COST += (r.get("cost") or 0)
    return r


def paa_of(kw):
    r = post({"keyword": kw, "location_code": US, "language_code": LANG, "device": "desktop",
              "os": "windows", "depth": 10, "people_also_ask_click_depth": 3})
    out = []
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return out
    for it in items:
        if it.get("type") != "people_also_ask":
            continue
        for sub in (it.get("items") or []):
            q = sub.get("title")
            if q and not BAD.search(q):
                out.append(q)
            for deep in (sub.get("items") or []):
                dq = deep.get("title")
                if dq and not BAD.search(dq):
                    out.append(dq)
    return out


def main():
    cache = {}
    files = sorted(f for f in os.listdir(BRIEFS) if f.endswith(".json") and not f.startswith("_"))
    for fn in files:
        p = os.path.join(BRIEFS, fn)
        b = json.load(open(p))
        theme = theme_for(b)
        seeds = SEEDS.get(theme, SEEDS["web-design"])
        bank = list(b.get("paa_questions") or [])
        src = {q: "page query" for q in bank}
        for s in seeds:
            if s not in cache:
                cache[s] = paa_of(s)
                time.sleep(0.25)
            for q in cache[s]:
                if q not in src:
                    src[q] = s
                    bank.append(q)
        b["paa_questions"] = bank
        b["paa_sources"] = src
        b["paa_note"] = ("Questions sourced from live Google People-Also-Ask on the page query "
                         "plus generic seeds. Geo-modified queries return few PAA, generic ones "
                         "return many. Localise the ANSWER honestly, do not fake a local question.")
        json.dump(b, open(p, "w"), indent=1)
        print(f"  {b['slug']:26s} {len(bank):>3d} questions  (${COST:.2f})")

    print(f"\nexpanded {len(files)} briefs, spend ${COST:.2f}")
    thin = []
    for fn in files:
        b = json.load(open(os.path.join(BRIEFS, fn)))
        if len(b["paa_questions"]) < 20:
            thin.append(f"{b['slug']}({len(b['paa_questions'])})")
    print("STILL THIN (<20): " + (", ".join(thin) if thin else "none"))


if __name__ == "__main__":
    main()
