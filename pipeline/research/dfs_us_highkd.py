#!/usr/bin/env python3
"""
FactoryJet - US high-KD opportunity + AI-citation research (DataForSEO).
Created 2026-08-12.

Strategy context: Bhavesh picked "AI-citation first" for hard keywords. Google rank on
KD 30+ terms is gated by authority (53 referring domains vs rivals' 2,800-29,000), but the
AI answer layer is not. So this harness answers two questions at once:

  1. Where is the untapped demand across the four US service lines, at EVERY difficulty band
     (prior plans only ever mined KD 0-12)?
  2. On the hard head terms, who actually owns the answer -- Google organic, Google AI
     Overview citations, and what ChatGPT/Perplexity name when asked to recommend a vendor?

Parts (run individually via argv):
  A keywords  -> us4_keywords.csv          labs keyword_suggestions + keyword_ideas
  B cities    -> us4_city_demand.csv       city x service volume, to prioritise city pages
  C serp      -> us4_serp.csv / us4_serp_urls.csv
                 SERP anatomy for the high-KD head terms: who ranks, what PAGE TYPE wins
                 (listicle vs service page vs directory), AIO present, who AIO cites
  D llm       -> us4_llm.csv               ChatGPT + Perplexity vendor-recommendation runs

Reads DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from pipeline/research/.env
Raw responses under data/raw/us4__*.json
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
RAW = os.path.join(DATA, "raw")
os.makedirs(RAW, exist_ok=True)


def load_env():
    with open(os.path.join(HERE, ".env")) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()
).decode()
BASE = "https://api.dataforseo.com/v3"
US = 2840
LANG = "en"
BRAND = "factoryjet"

COST = 0.0
CAP = float(os.environ.get("DFS_CAP", "22"))


def post(path, body, timeout=240):
    global COST
    req = urllib.request.Request(
        f"{BASE}/{path}",
        data=json.dumps(body if isinstance(body, list) else [body]).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"},
    )
    try:
        r = json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:400]}
    except Exception as e:
        return {"_error": str(e)}
    COST += (r.get("cost") or 0)
    return r


def guard():
    if COST >= CAP:
        print(f"\n!! COST CAP ${CAP} reached (spent ${COST:.2f}). Stopping.", file=sys.stderr)
        sys.exit(2)


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:56]


def items_of(r):
    try:
        return r["tasks"][0]["result"][0]["items"] or []
    except (KeyError, TypeError, IndexError):
        return []


def save_raw(name, r):
    with open(os.path.join(RAW, f"us4__{name}.json"), "w") as f:
        json.dump(r, f)


# ---------------------------------------------------------------- config

# The four service lines Bhavesh named, seeded wide enough to surface head terms.
SERVICES = {
    "ecommerce-dev": [
        ("sug", "ecommerce development company"),
        ("sug", "ecommerce website design"),
        ("sug", "ecommerce web development"),
        ("sug", "shopify development company"),
        ("sug", "custom ecommerce development"),
        ("sug", "b2b ecommerce development"),
        ("idea", "ecommerce design and development"),
        ("idea", "ecommerce website development services"),
    ],
    "ai-agent-dev": [
        ("sug", "ai agent development"),
        ("sug", "ai agent development company"),
        ("sug", "ai agents for business"),
        ("sug", "ai automation agency"),
        ("sug", "custom ai agents"),
        ("sug", "ai workflow automation"),
        ("idea", "ai agent development services"),
        ("idea", "enterprise ai agents"),
    ],
    "ai-seo": [
        ("sug", "ai seo"),
        ("sug", "ai seo agency"),
        ("sug", "generative engine optimization"),
        ("sug", "answer engine optimization"),
        ("sug", "llm seo"),
        ("sug", "ai search optimization"),
        ("idea", "ai seo services"),
        ("idea", "geo agency"),
    ],
    "web-design-dev": [
        ("sug", "web design company"),
        ("sug", "web design agency"),
        ("sug", "website development company"),
        ("sug", "custom web development"),
        ("sug", "web design and development"),
        ("sug", "website design services"),
        ("idea", "web development services"),
        ("idea", "web design and development company"),
    ],
}

EP = {
    "sug": "dataforseo_labs/google/keyword_suggestions/live",
    "idea": "dataforseo_labs/google/keyword_ideas/live",
    "serp": "serp/google/organic/live/advanced",
}

# Noise we never want to see in a commercial shortlist.
NOISE = re.compile(
    r"\b(job|jobs|salary|salaries|intern|internship|course|courses|tutorial|tutorials|"
    r"certification|certificate|training|class|classes|degree|resume|hiring|career|careers|"
    r"free|crack|torrent|login|sign in|reddit|quora|udemy|coursera|github|"
    r"template|templates|wallpaper|clipart|meaning|definition wikipedia)\b",
    re.I,
)

# Directory / marketplace domains -- ranking here is a listing play, not a content play.
DIRECTORY = {
    "clutch.co", "designrush.com", "themanifest.com", "goodfirms.co", "upcity.com",
    "expertise.com", "g2.com", "capterra.com", "trustpilot.com", "yelp.com",
    "sortlist.com", "agencyspotter.com", "topdevelopers.co", "businessofapps.com",
    "softwaresuggest.com", "getapp.com", "trustradius.com", "gartner.com",
    "linkedin.com", "glassdoor.com", "indeed.com", "reddit.com", "quora.com",
    "youtube.com", "medium.com", "wikipedia.org", "producthunt.com",
}


def page_type(url, domain, title):
    """Classify a ranking URL so we can answer 'landing page or blog?' from evidence."""
    d = (domain or "").lower().replace("www.", "")
    u = (url or "").lower()
    t = (title or "").lower()
    if d in DIRECTORY:
        return "directory"
    if re.search(r"/(blog|article|articles|insights|resources|guide|guides|learn|post)/", u):
        return "blog"
    if re.match(r"^\s*(top|best)\s*\d*", t) or re.search(r"\b\d+\s+(best|top|leading)\b", t):
        return "listicle"
    if re.search(r"\b(best|top)\b", t) and re.search(r"\b(companies|agencies|firms|tools|platforms)\b", t):
        return "listicle"
    if re.search(r"/(services|service|solutions|what-we-do|expertise|capabilities)/", u):
        return "service-page"
    if u.rstrip("/").count("/") <= 3:
        return "service-page"
    return "other"


# ---------------------------------------------------------------- A: keywords

def run_keywords():
    rows = {}
    for service, seeds in SERVICES.items():
        for ep, seed in seeds:
            guard()
            body = {
                "location_code": US,
                "language_code": LANG,
                "limit": 300,
                "order_by": ["keyword_info.search_volume,desc"],
                "filters": [["keyword_info.search_volume", ">", 10]],
            }
            if ep == "sug":
                body["keyword"] = seed
            else:
                body["keywords"] = [seed]
            r = post(EP[ep], body)
            save_raw(f"{ep}__{slug(seed)}", r)
            if r.get("_error"):
                print(f"  ! {ep} '{seed}': {r['_error']}", file=sys.stderr)
                continue
            n = 0
            for it in items_of(r):
                kw = it.get("keyword")
                if not kw or NOISE.search(kw):
                    continue
                ki = it.get("keyword_info") or {}
                kp = it.get("keyword_properties") or {}
                si = it.get("search_intent_info") or {}
                vol = ki.get("search_volume") or 0
                if vol < 10:
                    continue
                prev = rows.get(kw)
                if prev and prev["search_volume"] >= vol:
                    continue
                rows[kw] = {
                    "keyword": kw,
                    "service": service,
                    "seed": seed,
                    "search_volume": vol,
                    "cpc": round(ki.get("cpc") or 0, 2),
                    "competition": ki.get("competition_level") or "",
                    "kd": kp.get("keyword_difficulty"),
                    "intent": (si.get("main_intent") or ""),
                }
                n += 1
            print(f"  {service:15s} {ep:4s} {seed[:42]:44s} +{n:4d}  (${COST:.2f})")
            time.sleep(0.3)

    out = os.path.join(DATA, "us4_keywords.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(next(iter(rows.values())).keys()))
        w.writeheader()
        for k in sorted(rows.values(), key=lambda x: -x["search_volume"]):
            w.writerow(k)
    print(f"\nA/keywords -> {out}  ({len(rows)} rows, ${COST:.2f})")


# ---------------------------------------------------------------- B: city demand

# Cities we already have pages for, plus the biggest US metros we do not.
HAVE = {
    "austin", "denver", "charlotte", "miami", "nashville", "tampa", "raleigh",
    "portland", "cleveland", "boise", "fargo", "sioux falls", "lincoln",
    "chattanooga", "providence", "arlington", "colorado springs", "corpus christi",
    "huntington beach", "lakewood ranch", "new york",
}
CITIES = sorted(HAVE | {
    "los angeles", "chicago", "houston", "phoenix", "philadelphia", "san antonio",
    "san diego", "dallas", "san jose", "jacksonville", "fort worth", "columbus",
    "san francisco", "seattle", "washington dc", "boston", "atlanta", "las vegas",
    "detroit", "minneapolis", "orlando", "sacramento", "kansas city", "salt lake city",
    "pittsburgh", "st louis", "indianapolis", "st petersburg", "scottsdale", "irvine",
})
CITY_PATTERNS = [
    ("web-design-dev", "web design company {c}"),
    ("web-design-dev", "web design agency {c}"),
    ("ecommerce-dev", "ecommerce development company {c}"),
    ("ecommerce-dev", "shopify developer {c}"),
    ("ai-agent-dev", "ai automation agency {c}"),
    ("ai-agent-dev", "ai consulting {c}"),
    ("ai-seo", "ai seo agency {c}"),
    ("seo", "seo agency {c}"),
]


def run_cities():
    """One bulk keyword_info call per chunk -- far cheaper than per-city SERPs."""
    kws = []
    meta = {}
    for city in CITIES:
        for service, pat in CITY_PATTERNS:
            kw = pat.format(c=city)
            kws.append(kw)
            meta[kw] = (city, service)
    rows = []
    CH = 700
    for i in range(0, len(kws), CH):
        guard()
        chunk = kws[i:i + CH]
        r = post(
            "dataforseo_labs/google/bulk_keyword_difficulty/live",
            {"location_code": US, "language_code": LANG, "keywords": chunk},
        )
        save_raw(f"citykd__{i}", r)
        kdmap = {}
        for it in items_of(r):
            kdmap[it.get("keyword")] = it.get("keyword_difficulty")

        r2 = post(
            "dataforseo_labs/google/historical_search_volume/live",
            {"location_code": US, "language_code": LANG, "keywords": chunk},
        )
        save_raw(f"cityvol__{i}", r2)
        for it in items_of(r2):
            kw = it.get("keyword")
            ki = it.get("keyword_info") or {}
            city, service = meta.get(kw, ("", ""))
            rows.append({
                "keyword": kw,
                "city": city,
                "service": service,
                "have_page": "yes" if city in HAVE else "no",
                "search_volume": ki.get("search_volume") or 0,
                "cpc": round(ki.get("cpc") or 0, 2),
                "kd": kdmap.get(kw),
            })
        print(f"  cities chunk {i}-{i+len(chunk)}  (${COST:.2f})")
        time.sleep(0.3)

    out = os.path.join(DATA, "us4_city_demand.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "city", "service", "have_page",
                                          "search_volume", "cpc", "kd"])
        w.writeheader()
        for x in sorted(rows, key=lambda x: -x["search_volume"]):
            w.writerow(x)
    print(f"\nB/cities -> {out}  ({len(rows)} rows, ${COST:.2f})")


# ---------------------------------------------------------------- C: SERP anatomy

def run_serp(terms):
    srows, urows = [], []
    for service, kw in terms:
        guard()
        r = post(EP["serp"], {
            "keyword": kw, "location_code": US, "language_code": LANG,
            "device": "desktop", "os": "windows", "depth": 20,
            "load_async_ai_overview": True,
            "people_also_ask_click_depth": 1,
        })
        save_raw(f"serp__{slug(kw)}", r)
        if r.get("_error"):
            print(f"  ! serp '{kw}': {r['_error']}", file=sys.stderr)
            continue
        items = items_of(r)
        types = defaultdict(int)
        aio_present, aio_sources, our_pos = False, [], None
        ptypes = defaultdict(int)
        rank = 0
        paa = []
        for it in items:
            t = it.get("type")
            types[t] += 1
            if t == "organic":
                rank += 1
                dom = (it.get("domain") or "").lower().replace("www.", "")
                pt = page_type(it.get("url"), dom, it.get("title"))
                if rank <= 10:
                    ptypes[pt] += 1
                if BRAND in (it.get("url") or "").lower() and our_pos is None:
                    our_pos = it.get("rank_group")
                urows.append({
                    "keyword": kw, "service": service, "rank": it.get("rank_group"),
                    "domain": dom, "page_type": pt,
                    "title": (it.get("title") or "")[:150],
                    "url": (it.get("url") or "")[:200],
                })
            elif t == "ai_overview":
                aio_present = True
                refs = list(it.get("references") or [])
                for sub in (it.get("items") or []):
                    refs += list(sub.get("references") or [])
                for ref in refs:
                    d = (ref.get("domain") or "").lower().replace("www.", "")
                    if d and d not in aio_sources:
                        aio_sources.append(d)
            elif t == "people_also_ask":
                for sub in (it.get("items") or []):
                    q = sub.get("title")
                    if q:
                        paa.append(q)
        top = sorted(ptypes.items(), key=lambda x: -x[1])
        srows.append({
            "keyword": kw, "service": service,
            "aio_present": "yes" if aio_present else "no",
            "aio_cited_us": "yes" if any(BRAND in d for d in aio_sources) else "no",
            "aio_sources": "|".join(aio_sources[:10]),
            "our_organic_pos": our_pos or "",
            "winning_page_type": top[0][0] if top else "",
            "top10_mix": "|".join(f"{k}:{v}" for k, v in top),
            "serp_features": "|".join(f"{k}:{v}" for k, v in sorted(types.items(), key=lambda x: -x[1])),
            "paa": "|".join(paa[:8]),
        })
        print(f"  serp {kw[:46]:48s} aio={'Y' if aio_present else 'n'} "
              f"win={top[0][0] if top else '?':13s} (${COST:.2f})")
        time.sleep(0.3)

    o1 = os.path.join(DATA, "us4_serp.csv")
    with open(o1, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(srows[0].keys()))
        w.writeheader(); w.writerows(srows)
    o2 = os.path.join(DATA, "us4_serp_urls.csv")
    with open(o2, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(urows[0].keys()))
        w.writeheader(); w.writerows(urows)
    print(f"\nC/serp -> {o1} ({len(srows)}) + {o2} ({len(urows)})  ${COST:.2f}")


# ---------------------------------------------------------------- D: LLM citations

LLMS = [("chat_gpt", "gpt-4o-mini"), ("perplexity", "sonar")]


def run_llm(terms):
    rows = []
    for service, kw in terms:
        for llm, model in LLMS:
            guard()
            r = post(f"ai_optimization/{llm}/llm_responses/live", {
                "user_prompt": f"{kw} - give me a ranked list of specific companies "
                               f"with their websites.",
                "model_name": model,
                "web_search": True,
                "max_output_tokens": 1200,
            })
            save_raw(f"llm__{llm}__{slug(kw)}", r)
            text = ""
            for it in items_of(r):
                for sec in (it.get("sections") or []):
                    text += (sec.get("text") or "") + "\n"
                    for ln in (sec.get("links") or []):
                        text += " " + (ln.get("domain") or ln.get("url") or "")
            low = text.lower()
            named = []
            for m in re.finditer(r"(?:^|\n)\s*\d+[.)]\s*\*{0,2}([A-Z][^\n*:(]{2,60})", text):
                nm = m.group(1).strip().rstrip("*").strip()
                if nm and nm not in named:
                    named.append(nm)
            doms = sorted(set(re.findall(r"\b([a-z0-9-]+\.(?:com|io|ai|co|net|org))\b", low)))
            rows.append({
                "keyword": kw, "service": service, "llm": llm,
                "we_mentioned": "yes" if BRAND in low else "no",
                "resp_chars": len(text),
                "named_vendors": " | ".join(named[:12]),
                "domains_cited": " | ".join(d for d in doms if d not in
                                            {"example.com", "google.com"})[:600],
                "error": (r.get("_error") or "")[:120],
            })
            print(f"  llm {llm:11s} {kw[:40]:42s} vendors={len(named):2d} "
                  f"us={'Y' if BRAND in low else 'n'} (${COST:.2f})")
            time.sleep(0.4)

    out = os.path.join(DATA, "us4_llm.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader(); w.writerows(rows)
    print(f"\nD/llm -> {out}  ({len(rows)} rows, ${COST:.2f})")


# ---------------------------------------------------------------- main

if __name__ == "__main__":
    what = sys.argv[1] if len(sys.argv) > 1 else "A"
    t0 = time.time()
    if what == "A":
        run_keywords()
    elif what == "B":
        run_cities()
    elif what in ("C", "D"):
        # terms file written by the analysis step between B and C
        tf = os.path.join(DATA, "us4_headterms.json")
        terms = [tuple(x) for x in json.load(open(tf))]
        (run_serp if what == "C" else run_llm)(terms)
    print(f"\n=== part {what} done in {time.time()-t0:.0f}s, spend ${COST:.2f} ===")
