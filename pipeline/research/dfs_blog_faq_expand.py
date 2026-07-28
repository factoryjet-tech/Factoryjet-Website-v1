#!/usr/bin/env python3
"""
FactoryJet - People Also Ask + demand check for the 8 highest-impression blog posts.
Created 2026-07-29.

Purpose: those posts already rank and pull impressions in GSC, but their FAQ blocks
are thin. This pulls the REAL People-Also-Ask questions Google shows for each post's
seed keywords so the FAQ sections can be expanded with genuine search demand instead
of invented questions.

Everything here is a LIVE DataForSEO pull. Raw JSON for every call is written to
data/raw/bfaq__*.json so any question or number can be traced back to a real response.

Steps:
  1. SERP google/organic/live/advanced per seed keyword, depth 20,
     people_also_ask_click_depth=1 so the PAA answers come back expanded.
     Correct location per post: US = 2840, AU = 2036. Language en.
  2. dataforseo_labs/google/keyword_overview/live per market -> real search volume,
     keyword difficulty, CPC, competition and search intent for every seed keyword,
     so each post can be checked against actual demand.
  3. Dedupe PAA per post. Drop careers / jobs / salary / course / MLM questions
     (all drops are logged, nothing is silently discarded).

Outputs:
  data/blog_faq_paa.csv          one row per kept PAA question (post_slug, seed, Q, SERP answer)
  data/blog_faq_paa_dropped.csv  every question the noise filter removed, with the reason
  data/blog_faq_keywords.csv     seed keyword volume / KD / CPC / competition / intent
  data/blog_faq_brief.json       everything, grouped per post, for the writer agent
  data/blog_faq_run.log          per-call cost ledger

Env:
  BFQ_USE_CACHE=1   replay saved raw responses instead of re-billing the calls
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))


def load_env():
    with open(os.path.join(HERE, ".env")) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())


load_env()

AUTH = base64.b64encode(
    f'{os.environ["DATAFORSEO_LOGIN"]}:{os.environ["DATAFORSEO_PASSWORD"]}'.encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw"); os.makedirs(RAW, exist_ok=True)
DATA = os.path.join(HERE, "data")
LANG = "en"
LOC = {"US": 2840, "AU": 2036}

EP = {
    "serp": "/serp/google/organic/live/advanced",
    "kw_overview": "/dataforseo_labs/google/keyword_overview/live",
    # fallbacks for seed keywords that Labs has no record of
    "ads_volume": "/keywords_data/google_ads/search_volume/live",
    "bulk_kd": "/dataforseo_labs/google/bulk_keyword_difficulty/live",
}

# -----------------------------------------------------------------------------
# The 8 GSC-ranking posts that need deeper FAQ blocks.
#
# "seeds"  = the post's real ranking keywords. These get both a PAA pull AND a
#            volume/difficulty pull, so the post can be checked against real demand.
# "extras" = extra question-shaped queries, PAA harvest only. Google returns a
#            different PAA set per query, so this is the only reliable way to get
#            past ~6 questions per post. Added 2026-07-29 second pass after the
#            first pass left 3 posts under 8 questions and one on zero.
#
# gsc_impressions = 28-day figure supplied with the brief. It is NOT an API number
# and is labelled as such everywhere it appears in the output.
# -----------------------------------------------------------------------------
POSTS = [
    {"slug": "shopify-development-cost-2026", "market": "US", "gsc_impressions": 6244,
     "seeds": ["shopify development cost",
               "how much does shopify development cost",
               "shopify developer cost"],
     "extras": ["how much does it cost to build a shopify store",
                "shopify store setup cost",
                "how much do shopify developers charge per hour",
                "is shopify expensive to run",
                "shopify plus cost"]},
    {"slug": "website-cost-small-business-usa-2026", "market": "US", "gsc_impressions": 4710,
     "seeds": ["small business website cost",
               "how much does a website cost for a small business",
               "website cost"],
     "extras": ["how much does it cost to build a website",
                "how much does a website cost per month",
                "how much should i pay for a website",
                "website maintenance cost",
                "how much does a website cost to maintain"]},
    {"slug": "best-web-design-companies-small-business-australia", "market": "AU",
     "gsc_impressions": 4052,
     "seeds": ["web design companies australia",
               "best web design company australia",
               "web design cost australia"],
     "extras": ["how much does a website cost in australia",
                "how much do web designers charge in australia",
                "how to choose a web design company",
                "web designer australia",
                "small business website australia"]},
    {"slug": "best-ecommerce-agency-small-business-australia-2026", "market": "AU",
     "gsc_impressions": 941,
     "seeds": ["ecommerce agency australia",
               "best ecommerce agency australia"],
     # this post is the hardest to harvest: 5 of its AU queries return a SERP with no
     # PAA element at all (see seeds_with_no_paa_element in the brief), so it needs
     # more variants than the others to clear 20 questions.
     "extras": ["how much does an ecommerce website cost australia",
                "ecommerce website design australia",
                "how to start an online store in australia",
                "best ecommerce platform australia",
                "shopify agency australia",
                "how to choose an ecommerce agency",
                "how much does it cost to build an online store australia",
                "is shopify worth it in australia",
                "how much does shopify cost australia",
                "do i need an ecommerce agency"]},
    {"slug": "best-web-design-agency-us-small-business-2026", "market": "US",
     "gsc_impressions": 865,
     "seeds": ["best web design agency for small business",
               "web design agency small business"],
     "extras": ["how to choose a web design agency",
                "how much does a web design agency cost",
                "what does a web design agency do",
                "is it worth hiring a web designer",
                "how much do web designers charge"]},
    {"slug": "shopify-vs-custom-website-us-small-business-2026", "market": "US",
     "gsc_impressions": 754,
     "seeds": ["shopify vs custom website",
               "shopify or custom website"],
     "extras": ["is shopify better than a custom website",
                "should i use shopify or build my own website",
                "custom ecommerce website cost",
                "shopify limitations",
                "when to move off shopify"]},
    {"slug": "best-web-design-agencies-small-business-2026", "market": "US",
     "gsc_impressions": 711,
     "seeds": ["best web design agencies small business"],
     "extras": ["how to find a good web designer",
                "what to look for in a web design company",
                "do i need a web designer for my small business",
                "web design company vs freelancer",
                "how long does it take to build a website"]},
    {"slug": "webflow-vs-wordpress-us-small-business-2026", "market": "US",
     "gsc_impressions": 531,
     "seeds": ["webflow vs wordpress",
               "webflow or wordpress"],
     "extras": ["is webflow better than wordpress",
                "webflow vs wordpress for seo",
                "is webflow cheaper than wordpress",
                "should i switch from wordpress to webflow",
                "what are the disadvantages of webflow"]},
]

# -----------------------------------------------------------------------------
# E-E-A-T citation sources. EVERY url below was fetched on 2026-07-29 and returned
# 200 with the stated fact present in the response body. Nothing here is from memory.
# URLs that could not be verified were deliberately left out - see UNVERIFIED below.
# -----------------------------------------------------------------------------
CITATIONS = {
    "shopify-development-cost-2026": [
        {"url": "https://www.shopify.com/pricing",
         "supports": "Shopify's own plan ladder and the third-party payment provider "
                     "transaction fee tiers (2% Basic, 1% Grow, 0.6% Advanced, 0.2% Plus) "
                     "- the recurring platform cost that sits underneath any dev quote.",
         "verified": "2026-07-29 200; note the page localises currency by visitor geo"},
        {"url": "https://shopify.dev/docs/storefronts/themes/architecture",
         "supports": "What custom Shopify work actually consists of: the required theme "
                     "directory structure (assets, blocks, config, layout, locales, sections, "
                     "snippets, templates) and that only layout/theme.liquid is mandatory.",
         "verified": "2026-07-29 200"},
        {"url": "https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features",
         "supports": "Shopify's official current plan list (Starter, Lite, Retail, Basic, Grow, "
                     "Advanced, Plus, enterprise, Agentic) - stops the post naming stale plans.",
         "verified": "2026-07-29 200"},
    ],
    "website-cost-small-business-usa-2026": [
        {"url": "https://www.census.gov/retail/ecommerce.html",
         "supports": "US Census Bureau: Q1 2026 e-commerce retail sales were $326.7 billion, "
                     "16.9% of total retail sales - the demand-side case for the spend.",
         "verified": "2026-07-29 200"},
        {"url": "https://web.dev/articles/vitals",
         "supports": "Google's own Core Web Vitals 'good' thresholds (LCP within 2.5s, "
                     "INP 200ms or less, CLS 0.1 or less, at the 75th percentile) - the "
                     "objective bar a cheap build usually fails.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
         "supports": "US Small Business Administration on budgeting marketing spend and on "
                     "paying fees to accept payments online - a neutral government anchor "
                     "for the 'what am I really paying for' section.",
         "verified": "2026-07-29 200"},
    ],
    "best-web-design-companies-small-business-australia": [
        {"url": "https://business.gov.au/online-and-digital/business-website",
         "supports": "Official Australian government guidance on setting up, designing and "
                     "maintaining a business website, incl. registering a domain and SEO.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.abs.gov.au/statistics/economy/business-indicators/"
                 "counts-australian-businesses-including-entries-and-exits/latest-release",
         "supports": "ABS: 2,729,648 actively trading businesses in Australia at 30 June 2025, "
                     "of which 1,735,313 are non-employing - sizes the small-business market "
                     "the post is written for.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.auda.org.au/policy/au-domain-administration-rules-licensing",
         "supports": "auDA licensing rules: a .com.au domain requires an Australian Presence "
                     "(an ABN qualifies), Commercial Entity status, and a name that matches "
                     "the applicant - a real constraint on an AU web project.",
         "verified": "2026-07-29 200"},
    ],
    "best-ecommerce-agency-small-business-australia-2026": [
        {"url": "https://www.abs.gov.au/statistics/industry/retail-and-wholesale-trade/"
                "retail-trade-australia/latest-release",
         "supports": "ABS Retail Trade, June 2025: online sales as a proportion of total "
                     "retailing rose from 11.9% to 12.7%; turnover $37,906.6m seasonally "
                     "adjusted - the real size of the AU online channel.",
         "verified": "2026-07-29 200"},
        {"url": "https://business.gov.au/online-and-digital/ecommerce",
         "supports": "Official AU government guidance on selling online: platform options "
                     "(own site, marketplaces, social), secure payment methods, and the duty "
                     "to tell customers about applicable consumer guarantees.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.auda.org.au/policy/au-domain-administration-rules-licensing",
         "supports": "The .com.au Australian Presence / Commercial Entity eligibility rules "
                     "an AU store has to satisfy before launch.",
         "verified": "2026-07-29 200"},
    ],
    "best-web-design-agency-us-small-business-2026": [
        {"url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
         "supports": "Google's own words on timelines and on whether you need to hire anyone: "
                     "'Some changes might take effect in a few hours, others could take several "
                     "months' and 'Short on time or not feeling adventurous? You might consider "
                     "hiring a professional.'",
         "verified": "2026-07-29 200"},
        {"url": "https://web.dev/articles/vitals",
         "supports": "Core Web Vitals 'good' thresholds (LCP 2.5s, INP 200ms, CLS 0.1) as the "
                     "measurable standard to hold an agency to.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.census.gov/retail/ecommerce.html",
         "supports": "US Census Bureau Q1 2026: e-commerce was 16.9% of total US retail sales "
                     "($326.7bn) - the commercial stake in getting the site right.",
         "verified": "2026-07-29 200"},
    ],
    "shopify-vs-custom-website-us-small-business-2026": [
        {"url": "https://shopify.dev/docs/storefronts/headless",
         "supports": "Shopify's official position that 'custom' on Shopify means headless - "
                     "Hydrogen framework plus Oxygen hosting, or bring-your-own-stack against "
                     "the composable APIs. Reframes the vs-question accurately.",
         "verified": "2026-07-29 200"},
        {"url": "https://shopify.dev/docs/storefronts/themes/architecture",
         "supports": "The Liquid theme architecture a stock Shopify build is constrained by, "
                     "which is the actual boundary the 'custom' question is about.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.shopify.com/pricing",
         "supports": "The third-party payment provider fee tiers (2% / 1% / 0.6% / 0.2%) that "
                     "make up the ongoing cost side of the comparison.",
         "verified": "2026-07-29 200; page localises currency by visitor geo"},
    ],
    "best-web-design-agencies-small-business-2026": [
        {"url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
         "supports": "Google on realistic timelines ('a few hours' to 'several months') and on "
                     "hiring a professional being optional, not mandatory.",
         "verified": "2026-07-29 200"},
        {"url": "https://web.dev/articles/vitals",
         "supports": "Core Web Vitals thresholds as the objective yardstick for judging an "
                     "agency's output rather than taking its word.",
         "verified": "2026-07-29 200"},
        {"url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
         "supports": "SBA guidance on costing a marketing plan and tracking ROI - the neutral "
                     "frame for 'is an agency worth it'.",
         "verified": "2026-07-29 200"},
    ],
    "webflow-vs-wordpress-us-small-business-2026": [
        {"url": "https://w3techs.com/technologies/details/cm-wordpress",
         "supports": "W3Techs survey dated 28 July 2026: WordPress is used by 59.1% of all "
                     "sites whose CMS is known, which is 41.2% of all websites. Settles the "
                     "'is WordPress dying' question with a dated number.",
         "verified": "2026-07-29 200"},
        {"url": "https://wordpress.org/documentation/article/requirements/",
         "supports": "WordPress.org's own hosting requirements - PHP 8.3+, MariaDB 10.11+ or "
                     "MySQL 8.0+, HTTPS required on every install. Shows the 'free' CMS still "
                     "carries an infrastructure bill.",
         "verified": "2026-07-29 200"},
        {"url": "https://developers.webflow.com/",
         "supports": "Webflow's official developer platform: Data/CMS API, Site Management API, "
                     "custom code, webhooks, DevLink, Code Components and Webflow Cloud - the "
                     "real answer to 'what can and cannot be extended in Webflow'.",
         "verified": "2026-07-29 200"},
        {"url": "https://wordpress.org/about/",
         "supports": "WordPress is open source, licensed under GPLv2 - the licensing half of "
                     "the lock-in comparison against Webflow's hosted model.",
         "verified": "2026-07-29 200"},
    ],
}

# Applies to every post in this set: relevant because the whole job is expanding FAQ blocks.
GLOBAL_CITATION = {
    "url": "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
    "supports": "Google's own docs now state the FAQ rich result 'is no longer shown in Google "
                "Search results, as announced in the changelog entry in May 2026'. Expanding "
                "these FAQ blocks is therefore an on-page UX and AI-citation play, NOT a "
                "rich-snippet play - do not promise FAQ rich results in the copy.",
    "verified": "2026-07-29 200",
}

# Fetched and NOT usable, recorded so nobody re-tries them blind:
UNVERIFIED = [
    {"url": "https://www.bls.gov/oes/current/oes151254.htm", "result": "HTTP 403"},
    {"url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
     "result": "HTTP 403"},
    {"url": "https://webflow.com/pricing", "result": "fetch failed: header overflow"},
    {"url": "https://help.webflow.com/hc/en-us/articles/33961232582419", "result": "HTTP 403"},
    {"url": "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/"
            "gst/registering-for-gst", "result": "HTTP 403"},
    {"url": "https://business.gov.au/online-and-digital/website-essentials", "result": "HTTP 404"},
    {"url": "https://auspost.com.au/business/marketing-and-communications/"
            "access-data-and-insights/ecommerce-report", "result": "HTTP 404"},
    {"url": "https://www.accc.gov.au/business/selling-products-and-services/online-selling",
     "result": "HTTP 404"},
    {"url": "https://www.abs.gov.au/statistics/industry/technology-and-innovation/"
            "business-use-information-technology",
     "result": "HTTP 200 but latest reference period is 2015-16 - too stale to cite"},
]

# careers / jobs / salary / courses / MLM noise.
# Deliberately narrow. An earlier looser pattern on the agency roundup ate legitimate
# buyer questions, so anything that could be a pricing question ("how much do Shopify
# developers charge") must survive. Every drop is written to blog_faq_paa_dropped.csv.
PAA_BLOCK = [
    ("salary", re.compile(r"\b(salary|salaries|hourly wage|how much (do|does) .{0,40}(make|earn)\b)", re.I)),
    # NOTE: bare "hiring" and "recruit" were in this pattern on the first pass and ate
    # "What are red flags when hiring a designer?" and "Is it worth hiring a web
    # designer?" - both prime buyer questions. Employment intent is caught by the
    # jobs/career/salary words instead, so "hiring" is deliberately NOT blocked.
    ("jobs/careers", re.compile(
        r"\b(jobs?|careers?|now hiring|hiring manager|resume|intern|internship|entry.?level|"
        r"freelance career|good career|stressful job|work from home|remote job|"
        r"employab\w+|in demand as a career)\b", re.I)),
    ("courses/training", re.compile(
        r"\b(course|courses|bootcamp|boot camp|certification|certifications|diploma|degree|"
        r"syllabus|curriculum|tutorial for beginners|learn to code|"
        r"how (do i|to) become an? (web designer|web developer|shopify developer|developer))\b", re.I)),
    ("mlm", re.compile(r"\b(mlm|multi.?level marketing|pyramid scheme|network marketing)\b", re.I)),
]


def post(path, body):
    req = urllib.request.Request(BASE + path, data=json.dumps([body]).encode(),
                                 headers={"Authorization": f"Basic {AUTH}",
                                          "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return {"_error": f"HTTP {e.code}", "_body": e.read().decode()[:400]}
    except Exception as e:
        return {"_error": str(e)}


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:56]


def items_of(r):
    try:
        return r["tasks"][0]["result"][0]["items"] or []
    except (KeyError, TypeError, IndexError):
        return []


def result0(r):
    try:
        return r["tasks"][0]["result"][0]
    except (KeyError, TypeError, IndexError):
        return {}


def results_all(r):
    try:
        return r["tasks"][0]["result"] or []
    except (KeyError, TypeError, IndexError):
        return []


def task_status(r):
    try:
        t = r["tasks"][0]
        return t.get("status_code"), t.get("status_message")
    except (KeyError, TypeError, IndexError):
        return None, r.get("_error")


def failed(r):
    sc, _ = task_status(r)
    return bool(r.get("_error")) or (sc is not None and sc != 20000)


COST = 0.0
LEDGER = []
USE_CACHE = os.environ.get("BFQ_USE_CACHE") == "1"


def track(label, r, cached=False):
    global COST
    c = 0.0 if cached else (r.get("cost") or 0)
    COST += c
    sc, sm = task_status(r)
    LEDGER.append({"call": label, "cost": c, "cached": cached,
                   "status_code": sc, "status_message": sm,
                   "error": r.get("_error", "")})
    return r


def call(label, path, body, raw_name):
    """POST unless a cached raw response exists and BFQ_USE_CACHE=1."""
    p = os.path.join(RAW, raw_name)
    if USE_CACHE and os.path.exists(p):
        try:
            with open(p) as f:
                r = json.load(f)
            if not failed(r):
                return track(label, r, cached=True)
        except Exception:
            pass
    r = post(path, body)
    track(label, r)
    with open(p, "w") as f:
        json.dump(r, f)
    return r


def block_reason(q):
    for name, rx in PAA_BLOCK:
        if rx.search(q):
            return name
    return None


def harvest_paa(resp):
    """Pull every question out of a SERP response, including nested PAA follow-ups."""
    out = []

    def walk(el, depth=0):
        if depth > 4 or not isinstance(el, dict):
            return
        q = (el.get("title") or "").strip()
        ans, ans_src = "", ""
        for e in (el.get("expanded_element") or []):
            if not isinstance(e, dict):
                continue
            if e.get("description") and not ans:
                ans = e["description"][:900]
                ans_src = e.get("url") or e.get("domain") or ""
            # some expanded elements carry their own nested PAA items
            for sub in (e.get("items") or []):
                walk(sub, depth + 1)
        if q:
            out.append({"question": q, "serp_answer": ans, "answer_source": ans_src})
        for sub in (el.get("items") or []):
            walk(sub, depth + 1)

    for it in items_of(resp):
        if it.get("type") != "people_also_ask":
            continue
        for el in (it.get("items") or []):
            walk(el)
    return out


# =============================================================================
# STEP 1 - PAA harvest per post
# =============================================================================
print("=== STEP 1: SERP + PAA harvest ===")
paa_rows = []
dropped_rows = []
per_post = {}
serp_failures = []
seeds_no_paa = []
SERP_MEMO = {}   # (market, query) -> response, so a query shared by two posts bills once


def fetch_serp(market, loc, query):
    memo_key = (market, query)
    if memo_key in SERP_MEMO:
        return SERP_MEMO[memo_key]
    body = {"language_code": LANG, "location_code": loc, "keyword": query,
            "depth": 20, "people_also_ask_click_depth": 1}
    raw_name = f"bfaq__serp__{market.lower()}__{slug(query)}.json"
    r = call(f"serp:{market}:{query}", EP["serp"], body, raw_name)
    if failed(r):
        sc, sm = task_status(r)
        print(f"    ! '{query}' first attempt failed ({r.get('_error') or sm}); retrying plain",
              file=sys.stderr)
        r = call(f"serp-retry:{market}:{query}", EP["serp"],
                 {"language_code": LANG, "location_code": loc, "keyword": query, "depth": 20},
                 f"bfaq__serpretry__{market.lower()}__{slug(query)}.json")
    SERP_MEMO[memo_key] = r
    return r


for pdef in POSTS:
    loc = LOC[pdef["market"]]
    kept, dropped, seen = [], [], set()
    seed_report = []
    print(f"\n  {pdef['slug']}  ({pdef['market']} loc={loc})")
    queries = [(s, "seed") for s in pdef["seeds"]] + \
              [(s, "extra") for s in pdef.get("extras", [])]
    for seed, kind in queries:
        r = fetch_serp(pdef["market"], loc, seed)

        if failed(r):
            sc, sm = task_status(r)
            msg = r.get("_error") or sm
            print(f"    !! '{seed}' FAILED: {msg}", file=sys.stderr)
            serp_failures.append({"post": pdef["slug"], "query": seed, "kind": kind,
                                  "error": msg})
            seed_report.append({"query": seed, "kind": kind, "status": "API_CALL_FAILED",
                                "paa_returned": 0, "error": msg, "item_types": []})
            time.sleep(0.6)
            continue

        res = result0(r)
        types_present = res.get("item_types") or []
        found = harvest_paa(r)
        n_new = 0
        for f_ in found:
            key = f_["question"].strip().lower()
            if key in seen:
                continue
            seen.add(key)
            why = block_reason(f_["question"])
            if why:
                dropped.append({"post_slug": pdef["slug"], "market": pdef["market"],
                                "seed_term": seed, "question": f_["question"], "reason": why})
                continue
            kept.append({"post_slug": pdef["slug"], "market": pdef["market"], "seed_term": seed,
                         "seed_kind": kind,
                         "question": f_["question"], "serp_answer": f_["serp_answer"],
                         "answer_source": f_["answer_source"]})
            n_new += 1
        if not found:
            seeds_no_paa.append({"post": pdef["slug"], "query": seed, "kind": kind,
                                 "item_types": "|".join(types_present)})
        seed_report.append({"query": seed, "kind": kind,
                            "status": "ok" if found else "NO_PAA_ON_SERP",
                            "paa_returned": len(found), "paa_new_kept": n_new,
                            "item_types": types_present})
        print(f"    [{kind:<5}] {seed:<52} PAA={len(found):<3} new={n_new:<3} "
              f"{'(no PAA element on this SERP)' if not found else ''}")
        time.sleep(0.6)

    paa_rows.extend(kept)
    dropped_rows.extend(dropped)
    per_post[pdef["slug"]] = {
        "market": pdef["market"], "location_code": loc,
        "gsc_impressions_supplied_not_api": pdef["gsc_impressions"],
        "seeds": pdef["seeds"], "paa_only_extra_queries": pdef.get("extras", []),
        "seed_report": seed_report,
        "paa_kept": kept, "paa_dropped": dropped,
    }
    print(f"    -> {len(kept)} unique PAA kept, {len(dropped)} dropped")

# =============================================================================
# STEP 2 - real volume / difficulty for the seed keywords
# =============================================================================
print("\n=== STEP 2: keyword_overview (volume + difficulty) ===")
by_market = defaultdict(list)
for pdef in POSTS:
    for s in pdef["seeds"]:
        if s not in by_market[pdef["market"]]:
            by_market[pdef["market"]].append(s)

kw_data = {}          # (market, keyword) -> metrics
kw_failures = []
for market, seeds in by_market.items():
    loc = LOC[market]
    r = call(f"kw_overview:{market}", EP["kw_overview"],
             {"keywords": seeds, "location_code": loc, "language_code": LANG},
             f"bfaq__kwoverview__{market.lower()}.json")
    if failed(r):
        sc, sm = task_status(r)
        msg = r.get("_error") or sm
        print(f"  !! keyword_overview {market} FAILED: {msg}", file=sys.stderr)
        kw_failures.append({"market": market, "error": msg})
        continue
    n = 0
    for res in results_all(r):
        for it in (res.get("items") or []):
            k = it.get("keyword")
            if not k:
                continue
            ki = it.get("keyword_info") or {}
            kp = it.get("keyword_properties") or {}
            si = it.get("search_intent_info") or {}
            kw_data[(market, k.lower())] = {
                "keyword": k, "market": market, "location_code": loc,
                "search_volume": ki.get("search_volume"),
                "cpc": ki.get("cpc"),
                "competition": ki.get("competition"),
                "competition_level": ki.get("competition_level"),
                "low_top_of_page_bid": ki.get("low_top_of_page_bid"),
                "high_top_of_page_bid": ki.get("high_top_of_page_bid"),
                "keyword_difficulty": kp.get("keyword_difficulty"),
                "search_intent": si.get("main_intent"),
                "monthly_searches_last": (ki.get("monthly_searches") or [{}])[0],
            }
            n += 1
    print(f"  {market}: {n}/{len(seeds)} seed keywords returned metrics "
          f"(dataforseo_labs keyword_overview)")
    missing = [s for s in seeds if (market, s.lower()) not in kw_data]
    time.sleep(0.5)

    # --- fallback for keywords Labs has no record of -------------------------
    # keyword_overview only covers keywords already in the Labs database. Long-tail
    # terms like "best web design agencies small business" fall out of it. Google Ads
    # search_volume + bulk_keyword_difficulty cover them, so pull those rather than
    # reporting a blank.
    if missing:
        print(f"    {len(missing)} keyword(s) not in Labs; falling back to Google Ads "
              f"search_volume + bulk_keyword_difficulty")
        ads = call(f"ads_volume:{market}", EP["ads_volume"],
                   {"keywords": missing, "location_code": loc, "language_code": LANG},
                   f"bfaq__adsvol__{market.lower()}.json")
        ads_map = {}
        if failed(ads):
            sc, sm = task_status(ads)
            kw_failures.append({"market": market, "endpoint": "ads_volume",
                                "error": ads.get("_error") or sm, "keywords": missing})
            print(f"    !! ads_volume {market} FAILED: {ads.get('_error') or sm}",
                  file=sys.stderr)
        else:
            for res in results_all(ads):
                block = res.get("items") if isinstance(res, dict) and res.get("items") else [res]
                for it in (block or []):
                    if isinstance(it, dict) and it.get("keyword"):
                        ads_map[it["keyword"].lower()] = it
        time.sleep(0.5)

        kd = call(f"bulk_kd:{market}", EP["bulk_kd"],
                  {"keywords": missing, "location_code": loc, "language_code": LANG},
                  f"bfaq__bulkkd__{market.lower()}.json")
        kd_map = {}
        if failed(kd):
            sc, sm = task_status(kd)
            kw_failures.append({"market": market, "endpoint": "bulk_keyword_difficulty",
                                "error": kd.get("_error") or sm, "keywords": missing})
            print(f"    !! bulk_kd {market} FAILED: {kd.get('_error') or sm}", file=sys.stderr)
        else:
            for res in results_all(kd):
                for it in (res.get("items") or []):
                    if it.get("keyword"):
                        kd_map[it["keyword"].lower()] = it.get("keyword_difficulty")
        time.sleep(0.5)

        for s in missing:
            a = ads_map.get(s.lower())
            k = kd_map.get(s.lower())
            if a is None and k is None:
                kw_failures.append({"market": market, "keyword": s,
                                    "error": "NO_DATA_FROM_ANY_ENDPOINT"})
                continue
            kw_data[(market, s.lower())] = {
                "keyword": s, "market": market, "location_code": loc,
                "search_volume": (a or {}).get("search_volume"),
                "cpc": (a or {}).get("cpc"),
                "competition": (a or {}).get("competition_index"),
                "competition_level": (a or {}).get("competition"),
                "low_top_of_page_bid": (a or {}).get("low_top_of_page_bid"),
                "high_top_of_page_bid": (a or {}).get("high_top_of_page_bid"),
                "keyword_difficulty": k,
                "search_intent": None,
                "monthly_searches_last": ((a or {}).get("monthly_searches") or [{}])[0],
                "_source": "google_ads/search_volume + labs/bulk_keyword_difficulty",
            }
        still_missing = [s for s in missing if (market, s.lower()) not in kw_data]
        print(f"    fallback recovered {len(missing) - len(still_missing)}/{len(missing)}"
              + (f"; STILL NO DATA: {still_missing}" if still_missing else ""))

kw_rows = []
for pdef in POSTS:
    for s in pdef["seeds"]:
        m = kw_data.get((pdef["market"], s.lower()))
        if not m:
            kw_rows.append({"post_slug": pdef["slug"], "market": pdef["market"], "keyword": s,
                            "search_volume": "NO_DATA_RETURNED", "keyword_difficulty": "",
                            "cpc": "", "competition": "", "competition_level": "",
                            "search_intent": "", "source": "none"})
            continue
        if m.get("search_volume") is None:
            # Google Ads returned an explicit null: the term is below Google's own
            # reporting threshold. That is a real finding, not a missing value.
            m = dict(m, search_volume="NO_MEASURABLE_VOLUME")
        kw_rows.append({"post_slug": pdef["slug"], "market": pdef["market"], "keyword": s,
                        "search_volume": m["search_volume"],
                        "keyword_difficulty": m["keyword_difficulty"],
                        "cpc": m["cpc"], "competition": m["competition"],
                        "competition_level": m["competition_level"],
                        "search_intent": m["search_intent"],
                        "source": m.get("_source", "dataforseo_labs/keyword_overview")})
    per_post[pdef["slug"]]["citations_verified_by_fetch"] = CITATIONS.get(pdef["slug"], [])
    per_post[pdef["slug"]]["keyword_metrics"] = [
        kw_data.get((pdef["market"], s.lower()), {"keyword": s, "market": pdef["market"],
                                                  "_status": "NO_DATA_RETURNED"})
        for s in pdef["seeds"]]

# =============================================================================
# WRITE
# =============================================================================
def write_csv(name, rows, fields):
    with open(os.path.join(DATA, name), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader(); w.writerows(rows)
    print(f"  wrote {name} ({len(rows)} rows)")


print("\n=== WRITING ===")
write_csv("blog_faq_paa.csv", paa_rows,
          ["post_slug", "market", "seed_term", "seed_kind", "question", "serp_answer",
           "answer_source"])
write_csv("blog_faq_paa_dropped.csv", dropped_rows,
          ["post_slug", "market", "seed_term", "question", "reason"])
write_csv("blog_faq_keywords.csv", kw_rows,
          ["post_slug", "market", "keyword", "search_volume", "keyword_difficulty",
           "cpc", "competition", "competition_level", "search_intent", "source"])

cite_rows = []
for pdef in POSTS:
    for c in CITATIONS.get(pdef["slug"], []):
        cite_rows.append(dict(c, post_slug=pdef["slug"]))
    cite_rows.append(dict(GLOBAL_CITATION, post_slug=pdef["slug"]))
write_csv("blog_faq_citations.csv", cite_rows,
          ["post_slug", "url", "supports", "verified"])

brief = {
    "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
    "language_code": LANG,
    "location_codes": LOC,
    "endpoints_used": EP,
    "posts": per_post,
    "citation_applies_to_all_posts": GLOBAL_CITATION,
    "citation_urls_checked_and_rejected": UNVERIFIED,
    "serp_failures": serp_failures,
    "seeds_with_no_paa_element": seeds_no_paa,
    "keyword_overview_failures": kw_failures,
    "cost_ledger": LEDGER,
    "total_cost_usd": round(COST, 4),
}
with open(os.path.join(DATA, "blog_faq_brief.json"), "w") as f:
    json.dump(brief, f, indent=1)
print("  wrote blog_faq_brief.json")

with open(os.path.join(DATA, "blog_faq_run.log"), "a") as f:
    f.write(f"\n===== RUN {time.strftime('%Y-%m-%d %H:%M:%S')} "
            f"(cache={'on' if USE_CACHE else 'off'}) =====\n")
    for L in LEDGER:
        f.write(f"{L['call']}\tcost=${L['cost']}\tcached={L['cached']}\t"
                f"status={L['status_code']} {L['status_message']}\t{L['error']}\n")
    f.write(f"BILLED THIS RUN\t${round(COST,4)}\n")

fails = [L for L in LEDGER if L["error"] or (L["status_code"] and L["status_code"] != 20000)]
n_cached = sum(1 for L in LEDGER if L["cached"])
print(f"\n=== SUMMARY ===")
for pdef in POSTS:
    d = per_post[pdef["slug"]]
    print(f"  {len(d['paa_kept']):>3} PAA  {pdef['slug']}")
print(f"\n=== DONE  billed this run = ${COST:.4f}  "
      f"({len(LEDGER)} calls, {n_cached} replayed from cache, {len(fails)} failed) ===")
for L in fails:
    print(f"  FAILED {L['call']}: {L['error'] or L['status_message']}")
if seeds_no_paa:
    print(f"  {len(seeds_no_paa)} query(s) returned NO PAA element:")
    for s in seeds_no_paa:
        print(f"    {s['post']} :: [{s['kind']}] {s['query']}")
