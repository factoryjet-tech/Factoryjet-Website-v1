#!/usr/bin/env python3
"""Real per-city research for the 15 dynamic /uk/{city} roots.

Pulls three things per city, so the page content is grounded rather than authored:
  1. Search volume + CPC + competition for city-level service terms (Keyword Data)
  2. People Also Ask, click depth 2 (SERP advanced)
  3. Live organic competitors, the agencies actually ranking (SERP advanced)

Writes data/uk_city_depth.json.

Nothing here is invented. If a term returns no volume it is recorded as null and
must not be presented as if it had demand.
"""
import os, json, time, base64, urllib.request, urllib.error, re
from collections import OrderedDict

HERE = os.path.dirname(os.path.abspath(__file__))
def load_env():
    for line in open(os.path.join(HERE, ".env")):
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1); os.environ.setdefault(k.strip(), v.strip())
load_env()
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()
).decode()
UK = 2826

CITIES = ["Brighton","Bristol","Cambridge","Cardiff","Coventry","Derby","Edinburgh",
          "Glasgow","Hull","Leicester","Newcastle","Nottingham","Oxford","Plymouth","Southampton"]

# Term shapes people actually use for this service in a named city.
TERM_TEMPLATES = [
    "web design {city}",
    "web design agency {city}",
    "website design {city}",
    "web designer {city}",
    "seo {city}",
    "seo agency {city}",
    "ecommerce website design {city}",
    "shopify developer {city}",
    "digital agency {city}",
    "web development {city}",
]

# The single query whose SERP we read for PAA + competitors. Highest-intent shape.
PAA_QUERY = "web design {city}"

OUT = os.path.join(HERE, "data", "uk_city_depth.json")

def post(path, body, timeout=120):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:400]}
    except Exception as e:
        return {"_error": str(e)}

def kw_volumes(keywords):
    """Search volume / CPC / competition. Batched, max 1000 per call."""
    body = [{"location_code": UK, "language_code": "en", "keywords": keywords}]
    resp = post("keywords_data/google_ads/search_volume/live", body)
    out = {}
    try:
        for it in resp["tasks"][0]["result"]:
            out[it["keyword"]] = {
                "volume": it.get("search_volume"),
                "cpc": it.get("cpc"),
                "competition": it.get("competition"),
            }
    except (KeyError, TypeError, IndexError):
        print("  ! volume pull failed:", json.dumps(resp)[:300])
    return out

SKIP_PAA = re.compile(r"salary|career|job vacan|course|certification|udemy|reddit|free download", re.I)

def serp(query):
    body = [{"language_code": "en", "location_code": UK, "keyword": query,
             "depth": 20, "people_also_ask_click_depth": 2}]
    return post("serp/google/organic/live/advanced", body)

def parse_serp(resp):
    paa, competitors, related = [], [], []
    try:
        items = resp["tasks"][0]["result"][0]["items"] or []
    except (KeyError, TypeError, IndexError):
        return paa, competitors, related
    for it in items:
        t = it.get("type")
        if t == "people_also_ask":
            for el in it.get("items") or []:
                q = (el.get("title") or "").strip()
                if not q or SKIP_PAA.search(q):
                    continue
                ans = ""
                for exp in el.get("expanded_element") or []:
                    ans = (exp.get("description") or "").strip()
                    if ans:
                        break
                paa.append({"q": q, "seed_answer": ans[:400]})
        elif t == "organic":
            dom = (it.get("domain") or "").lower()
            if not dom or "factoryjet" in dom:
                continue
            # directories and marketplaces are not local competitors
            if re.search(r"(google|facebook|linkedin|yell|checkatrade|clutch|trustpilot|indeed|glassdoor|wikipedia|reddit|youtube|designrush|sortlist|bark\.com)", dom):
                continue
            competitors.append({"domain": dom, "title": (it.get("title") or "")[:120],
                                "rank": it.get("rank_absolute")})
        elif t == "related_searches":
            related.extend([s for s in (it.get("items") or []) if s])
    return paa, competitors, related

def main():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    all_terms = [t.format(city=c) for c in CITIES for t in TERM_TEMPLATES]
    print(f"Pulling volumes for {len(all_terms)} terms...")
    vols = kw_volumes(all_terms)
    print(f"  got {len(vols)} back")

    result = {}
    for i, city in enumerate(CITIES, 1):
        print(f"[{i}/{len(CITIES)}] {city}")
        terms = []
        for t in TERM_TEMPLATES:
            k = t.format(city=city)
            v = vols.get(k, {})
            terms.append({"keyword": k, "volume": v.get("volume"),
                          "cpc": v.get("cpc"), "competition": v.get("competition")})
        terms.sort(key=lambda x: (x["volume"] or 0), reverse=True)

        paa, comps, related = parse_serp(serp(PAA_QUERY.format(city=city)))
        print(f"     {len([t for t in terms if t['volume']])} terms w/ volume, "
              f"{len(paa)} PAA, {len(comps)} competitors")
        result[city.lower()] = {"terms": terms, "paa": paa[:12],
                                "competitors": comps[:8], "related": related[:12]}
        time.sleep(1)

    json.dump(result, open(OUT, "w"), indent=1)
    print(f"\nWrote {OUT}")

if __name__ == "__main__":
    main()
