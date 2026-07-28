#!/usr/bin/env python3
"""
FactoryJet - competitive research for the "Best SEO Agencies in the USA (2026)" roundup.
Created 2026-07-28.

Everything here is a LIVE DataForSEO pull. No estimates, no memory, no filler.
Raw JSON for every call is written to data/raw/agr__*.json so any number in the
post can be traced back to a real API response.

Steps (US, location_code 2840, language en):
  1. SERP google/organic/live/advanced for the 5 roundup head terms, depth 20.
     Captures organic top-20 + AI Overview + featured snippet + PAA + item-type census.
  2. Aggregate recurring domains, split "real agency" vs "directory/aggregator layer".
  3. For the top real agency domains:
       - dataforseo_labs/google/domain_rank_overview/live  -> organic etv / kw count / pos buckets
       - dataforseo_labs/google/ranked_keywords/live       -> their strongest ranking keywords
       - backlinks/summary/live                            -> rank + referring domains
  4. PAA harvest across the SEO-agency cluster (extra question-shaped queries),
     careers/jobs/salary/MLM questions filtered out.

Outputs:
  data/agency_roundup_serp.csv          one row per organic result
  data/agency_roundup_features.csv      AI Overview / featured snippet / item-type census per keyword
  data/agency_roundup_domains.csv       recurring domains + directory flag
  data/agency_roundup_profiles.csv      per-agency real metrics (labeled by source endpoint)
  data/agency_roundup_paa.csv           deduped PAA questions
  data/agency_roundup_brief.json        everything, for the writer agent
  data/agency_roundup_run.log           per-call cost ledger
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
US, LANG = 2840, "en"

EP = {
    "serp":   "/serp/google/organic/live/advanced",
    "ranked": "/dataforseo_labs/google/ranked_keywords/live",
    "rank_overview": "/dataforseo_labs/google/domain_rank_overview/live",
    "bl":     "/backlinks/summary/live",
}

# --- Task 1: the 5 head terms the roundup has to win ---------------------------
HEAD_TERMS = [
    "best seo agency usa",
    "top seo agency usa",
    "best seo agency",
    "best seo company for small business",
    "seo agency for small business",
]

# --- Task 4: extra question-shaped queries purely to harvest PAA ---------------
PAA_TERMS = [
    "how to choose an seo agency",
    "how much does an seo agency cost",
    "is hiring an seo agency worth it",
    "what does an seo agency do",
    "seo agency vs freelancer",
    "how to tell if an seo agency is good",
    "how long does seo take to work",
    "do small businesses need seo",
    # second pass 2026-07-28 - the first 8 only yielded 22 questions
    "how much should i pay for seo per month",
    "what should an seo agency deliver",
    "seo agency red flags",
    "in house seo vs agency",
    "is seo still worth it in 2026",
    "how do i know if seo is working",
]

# careers / jobs / salary / MLM noise to drop from PAA.
# Deliberately narrow: an earlier, looser version ate legitimate buyer questions like
# "Is it worth hiring an SEO agency?" (matched "hiring") and "How much should I expect
# to pay for SEO?" (matched "pay"). Only block genuine employment/MLM intent.
PAA_BLOCK = re.compile(
    r"\b(salary|salaries|"
    r"seo jobs?|jobs? in seo|a (good |stressful )?(job|career)|careers?|"
    r"how much do seo (specialists?|experts?|consultants?|analysts?) (make|earn)|"
    r"resume|intern|internship|entry.?level|"
    r"mlm|multi.?level marketing|pyramid scheme|"
    r"work from home|remote job)\b", re.I)

# Layer 1: directories / marketplaces / review sites / UGC forums / social.
# These are the "aggregator layer" the roundup has to compete with, not agencies.
DIRECTORY = {
    "clutch.co", "designrush.com", "goodfirms.co", "themanifest.com", "expertise.com",
    "upcity.com", "agencyspotter.com", "sortlist.com", "topseos.com", "10seos.com",
    "topseobrands.com", "g2.com", "capterra.com", "trustpilot.com", "yelp.com", "bbb.org",
    "reddit.com", "quora.com", "youtube.com", "linkedin.com", "facebook.com",
    "x.com", "twitter.com", "instagram.com", "tiktok.com", "sitejabber.com",
    "upwork.com", "fiverr.com", "glassdoor.com", "indeed.com", "wikipedia.org",
    "techbehemoths.com", "superbcompanies.com", "expertmarket.com", "outsourceaccelerator.com",
    "builtin.com", "builtinnyc.com", "builtinla.com", "builtinsf.com", "builtinchicago.org",
    "builtinaustin.com", "builtincolorado.com", "producthunt.com",
    "semrush.com",  # agencies.semrush.com is a partner directory
}

# Layer 2: media publishers, SaaS vendors and SEO-tool blogs. Not agencies either,
# but a different competitive animal from a directory - they rank on brand authority.
PUBLISHER = {
    "forbes.com", "inc.com", "entrepreneur.com", "businessinsider.com", "usnews.com",
    "investopedia.com", "nytimes.com", "wsj.com", "usatoday.com", "yahoo.com", "msn.com",
    "adweek.com", "cnet.com", "pcmag.com", "medium.com", "substack.com",
    "searchengineland.com", "searchenginejournal.com", "backlinko.com", "wordstream.com",
    "influencermarketinghub.com", "businessofapps.com",
    "ahrefs.com", "moz.com", "seranking.com", "hubspot.com", "shopify.com", "wix.com",
    "squarespace.com", "wordpress.com", "google.com", "support.google.com",
    "gartner.com", "github.com", "openai.com", "podium.com", "thryv.com",
}


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


def task_status(r):
    """Return (status_code, status_message) of the first task, for failure reporting."""
    try:
        t = r["tasks"][0]
        return t.get("status_code"), t.get("status_message")
    except (KeyError, TypeError, IndexError):
        return None, r.get("_error")


COST = 0.0
LEDGER = []

# AGR_USE_CACHE=1 replays a previously-saved raw response instead of paying for the
# call again. Used for the 2026-07-28 second pass (extra agencies + extra PAA) so the
# already-paid-for head-term SERPs were not re-billed.
USE_CACHE = os.environ.get("AGR_USE_CACHE") == "1"


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
    """POST unless a cached raw response exists and AGR_USE_CACHE=1."""
    p = os.path.join(RAW, raw_name)
    if USE_CACHE and os.path.exists(p):
        try:
            with open(p) as f:
                r = json.load(f)
            sc, _ = task_status(r)
            if not r.get("_error") and sc == 20000:
                return track(label, r, cached=True)
        except Exception:
            pass
    r = post(path, body)
    track(label, r)
    with open(p, "w") as f:
        json.dump(r, f)
    return r


def norm_domain(d):
    """DataForSEO returns domains inconsistently (with/without www). Normalise."""
    d = (d or "").lower().strip()
    if d.startswith("www."):
        d = d[4:]
    return d


def _in(d, bag):
    return any(d == x or d.endswith("." + x) for x in bag)


def layer_of(d):
    """agency | directory/aggregator | publisher/tool"""
    d = norm_domain(d)
    if not d:
        return "unknown"
    if _in(d, DIRECTORY):
        return "directory/aggregator"
    if _in(d, PUBLISHER):
        return "publisher/tool"
    return "agency"


def is_directory(d):
    return layer_of(d) != "agency"


def flatten_text(node, out, depth=0):
    """Pull readable text out of an ai_overview / featured_snippet item tree."""
    if depth > 6 or node is None:
        return
    if isinstance(node, dict):
        for k in ("text", "description", "snippet", "title"):
            v = node.get(k)
            if isinstance(v, str) and len(v.strip()) > 2:
                out.append(v.strip())
        for k in ("items", "expanded_element", "references", "table", "rows"):
            flatten_text(node.get(k), out, depth + 1)
    elif isinstance(node, list):
        for n in node[:40]:
            flatten_text(n, out, depth + 1)


# =============================================================================
# STEP 1 - head-term SERPs
# =============================================================================
serp_rows = []
feature_rows = []
domain_agg = defaultdict(lambda: {"n": 0, "pos": 0.0, "kws": set(), "titles": [], "urls": []})
paa_raw = []
ai_overview_capture = {}

print("=== STEP 1: head-term SERPs (US 2840) ===")
for term in HEAD_TERMS:
    body = {"language_code": LANG, "location_code": US, "keyword": term, "depth": 20,
            "load_async_ai_overview": True, "people_also_ask_click_depth": 1}
    r = call(f"serp:{term}", EP["serp"], body, f"agr__serp__{slug(term)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        # retry without the newer optional params in case the account/plan rejects them
        print(f"  ! '{term}' first attempt failed ({r.get('_error') or sm}); retrying plain",
              file=sys.stderr)
        r = call(f"serp-retry:{term}", EP["serp"],
                 {"language_code": LANG, "location_code": US, "keyword": term, "depth": 20},
                 f"agr__serpretry__{slug(term)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        print(f"  !! '{term}' FAILED: {r.get('_error') or sm}", file=sys.stderr)
        feature_rows.append({"keyword": term, "ai_overview": "API_CALL_FAILED",
                             "featured_snippet": "API_CALL_FAILED", "item_types": "",
                             "ai_overview_text": "", "ai_overview_sources": ""})
        time.sleep(0.6)
        continue

    res = result0(r)
    types_present = res.get("item_types") or []
    n_org = 0
    has_aio = False
    has_fs = False
    aio_text = ""
    aio_sources = []
    aio_refs = []
    aio_async = None
    fs_text = ""

    for it in items_of(r):
        t = it.get("type")
        if t == "organic":
            n_org += 1
            d = norm_domain(it.get("domain"))
            pos = it.get("rank_group") or it.get("rank_absolute") or 0
            serp_rows.append({"keyword": term, "position": pos, "domain": d,
                              "url": it.get("url") or "", "title": (it.get("title") or "")[:200],
                              "is_directory": is_directory(d)})
            if d:
                a = domain_agg[d]
                a["n"] += 1; a["pos"] += pos; a["kws"].add(term)
                if it.get("title") and len(a["titles"]) < 3:
                    a["titles"].append(it["title"][:160])
                if it.get("url") and len(a["urls"]) < 3:
                    a["urls"].append(it["url"])
        elif t == "people_also_ask":
            for el in (it.get("items") or []):
                q = (el.get("title") or "").strip()
                if not q:
                    continue
                ans = ""
                for e in (el.get("expanded_element") or []):
                    if e.get("description"):
                        ans = e["description"][:700]; break
                paa_raw.append({"seed_term": term, "question": q, "serp_answer": ans})
        elif t in ("ai_overview", "ai_overview_item"):
            has_aio = True
            # the top-level `markdown` field is the cleanest full rendering; fall back
            # to concatenating the sub-element text if it is missing.
            aio_text = (it.get("markdown") or "").strip()
            if not aio_text:
                buf = []
                flatten_text(it, buf)
                aio_text = " | ".join(dict.fromkeys(buf))
            aio_text = aio_text[:6000]
            aio_async = it.get("asynchronous_ai_overview")
            for ref in (it.get("references") or []):
                dom = norm_domain(ref.get("domain"))
                if dom:
                    aio_sources.append(dom)
                    aio_refs.append({"domain": dom, "source": ref.get("source"),
                                     "url": ref.get("url"), "title": ref.get("title")})
            for sub in (it.get("items") or []):
                for ref in (sub.get("references") or []):
                    dom = norm_domain(ref.get("domain"))
                    if dom:
                        aio_sources.append(dom)
                        aio_refs.append({"domain": dom, "source": ref.get("source"),
                                         "url": ref.get("url"), "title": ref.get("title")})
        elif t == "featured_snippet":
            has_fs = True
            buf = []
            flatten_text(it, buf)
            fs_text = f"[{it.get('domain','')}] " + " | ".join(dict.fromkeys(buf))[:1200]

    aio_sources = list(dict.fromkeys(aio_sources))
    if has_aio:
        seen_ref = set(); refs_u = []
        for rf in aio_refs:
            if rf["url"] in seen_ref:
                continue
            seen_ref.add(rf["url"]); refs_u.append(rf)
        ai_overview_capture[term] = {"text": aio_text, "sources": aio_sources,
                                     "references": refs_u,
                                     "asynchronous_ai_overview": aio_async}
    feature_rows.append({
        "keyword": term,
        "organic_captured": n_org,
        "ai_overview": "YES" if has_aio else "no",
        "featured_snippet": "YES" if has_fs else "no",
        "item_types": "|".join(types_present),
        "ai_overview_text": aio_text,
        "ai_overview_sources": "|".join(aio_sources),
        "featured_snippet_text": fs_text,
    })
    print(f"  {term:<42} organic={n_org:<3} AIO={'Y' if has_aio else '-'} "
          f"FS={'Y' if has_fs else '-'}  types={len(types_present)}")
    time.sleep(0.6)

# =============================================================================
# STEP 2 - recurring domains, split agency vs directory
# =============================================================================
print("\n=== STEP 2: recurring domains ===")
dom_rows = []
for d, v in domain_agg.items():
    dom_rows.append({
        "domain": d, "appearances": v["n"], "avg_pos": round(v["pos"] / v["n"], 1),
        "keywords": "|".join(sorted(v["kws"])),
        "layer": layer_of(d),
        "sample_title": v["titles"][0] if v["titles"] else "",
        "sample_url": v["urls"][0] if v["urls"] else "",
    })
dom_rows.sort(key=lambda r: (-r["appearances"], r["avg_pos"]))

agencies = [r for r in dom_rows if r["layer"] == "agency"]
directories = [r for r in dom_rows if r["layer"] == "directory/aggregator"]
publishers = [r for r in dom_rows if r["layer"] == "publisher/tool"]
print(f"  {len(agencies)} agency, {len(directories)} directory/aggregator, "
      f"{len(publishers)} publisher/tool")
for label, bag in (("Top recurring agencies", agencies),
                   ("Directory/aggregator layer", directories),
                   ("Publisher/tool layer", publishers)):
    print(f"  {label}:")
    for r in bag[:14]:
        print(f"    {r['domain']:<34} x{r['appearances']}  avg_pos {r['avg_pos']}")

TOP_N_AGENCIES = int(os.environ.get("AGR_TOP_N", "6"))
targets = [r["domain"] for r in agencies][:TOP_N_AGENCIES]
# AGR_EXTRA_TARGETS lets us also profile agencies that Google's own AI Overview names
# but that did not make the organic top-6 (e.g. WebFX, SmartSites, Searchbloom).
for extra in [x.strip().lower() for x in os.environ.get("AGR_EXTRA_TARGETS", "").split(",") if x.strip()]:
    if extra not in targets:
        targets.append(extra)

# =============================================================================
# STEP 3 - real, citable metrics per agency
# =============================================================================
print(f"\n=== STEP 3: profiling {len(targets)} agency domains ===")
profiles = []
for d in targets:
    prof = {"domain": d, "serp_appearances": next(
        (r["appearances"] for r in agencies if r["domain"] == d), None)}

    # 3a. domain_rank_overview -> organic traffic estimate + ranking kw count
    r = call(f"rank_overview:{d}", EP["rank_overview"],
             {"target": d, "location_code": US, "language_code": LANG},
             f"agr__rankov__{slug(d)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        prof["rank_overview_error"] = r.get("_error") or sm
    else:
        m = ((items_of(r)[0] if items_of(r) else {}).get("metrics") or {})
        org = m.get("organic") or {}
        paid = m.get("paid") or {}
        prof.update({
            "labs_organic_keywords": org.get("count"),
            "labs_organic_etv_monthly": round(org.get("etv") or 0, 1),
            "labs_organic_traffic_cost": round(org.get("estimated_paid_traffic_cost") or 0, 1),
            "labs_pos_1": org.get("pos_1"),
            "labs_pos_2_3": org.get("pos_2_3"),
            "labs_pos_4_10": org.get("pos_4_10"),
            "labs_paid_keywords": paid.get("count"),
        })
    time.sleep(0.5)

    # 3b. ranked_keywords -> their strongest terms (page-1 only)
    r = call(f"ranked:{d}", EP["ranked"], {
        "target": d, "location_code": US, "language_code": LANG, "limit": 25,
        "order_by": ["keyword_data.keyword_info.search_volume,desc"],
        "filters": [["ranked_serp_element.serp_item.rank_group", "<=", 10]]},
        f"agr__ranked__{slug(d)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        prof["ranked_keywords_error"] = r.get("_error") or sm
        prof["top_keywords"] = "[]"
    else:
        tops = []
        for it in items_of(r):
            kd_ = it.get("keyword_data") or {}
            se = ((it.get("ranked_serp_element") or {}).get("serp_item") or {})
            tops.append({"keyword": kd_.get("keyword"),
                         "pos": se.get("rank_group"),
                         "volume": (kd_.get("keyword_info") or {}).get("search_volume") or 0,
                         "url": se.get("url")})
        tops.sort(key=lambda x: -(x["volume"] or 0))
        prof["top_keywords"] = json.dumps(tops[:12])
        prof["top_keywords_returned"] = len(tops)
    time.sleep(0.5)

    # 3c. backlinks summary -> authority
    r = call(f"backlinks:{d}", EP["bl"], {
        "target": d, "internal_list_limit": 5, "backlinks_status_type": "live",
        "include_subdomains": True}, f"agr__bl__{slug(d)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        prof["backlinks_error"] = r.get("_error") or sm
    else:
        res = result0(r)
        prof.update({
            "bl_rank": res.get("rank"),
            "bl_backlinks": res.get("backlinks"),
            "bl_referring_domains": res.get("referring_domains"),
            "bl_referring_main_domains": res.get("referring_main_domains"),
            "bl_first_seen": res.get("first_seen"),
            "bl_broken_backlinks": res.get("broken_backlinks"),
        })
    time.sleep(0.5)

    profiles.append(prof)
    print(f"  profiled {d}: etv={prof.get('labs_organic_etv_monthly')} "
          f"kw={prof.get('labs_organic_keywords')} refdom={prof.get('bl_referring_domains')} "
          f"rank={prof.get('bl_rank')}")

# also profile factoryjet.com as the baseline for the post's transparency note
r = call("backlinks:factoryjet.com", EP["bl"], {
    "target": "factoryjet.com", "internal_list_limit": 5,
    "backlinks_status_type": "live", "include_subdomains": True},
    "agr__bl__factoryjet-com.json")
res = result0(r)
baseline = {"domain": "factoryjet.com", "bl_rank": res.get("rank"),
            "bl_backlinks": res.get("backlinks"),
            "bl_referring_domains": res.get("referring_domains"),
            "bl_referring_main_domains": res.get("referring_main_domains")}

# =============================================================================
# STEP 4 - PAA harvest
# =============================================================================
print("\n=== STEP 4: PAA harvest ===")
for term in PAA_TERMS:
    r = call(f"paa:{term}", EP["serp"],
             {"language_code": LANG, "location_code": US, "keyword": term, "depth": 20},
             f"agr__paa__{slug(term)}.json")
    sc, sm = task_status(r)
    if r.get("_error") or (sc and sc != 20000):
        print(f"  ! paa '{term}' FAILED: {r.get('_error') or sm}", file=sys.stderr)
        time.sleep(0.5); continue
    n = 0
    for it in items_of(r):
        if it.get("type") != "people_also_ask":
            continue
        for el in (it.get("items") or []):
            q = (el.get("title") or "").strip()
            if not q:
                continue
            ans = ""
            for e in (el.get("expanded_element") or []):
                if e.get("description"):
                    ans = e["description"][:700]; break
            paa_raw.append({"seed_term": term, "question": q, "serp_answer": ans})
            n += 1
    print(f"  +{n:>2}  {term}")
    time.sleep(0.5)

# dedupe + filter PAA
seen = set(); paa_rows = []; dropped = []
for p in paa_raw:
    key = p["question"].strip().lower()
    if key in seen:
        continue
    seen.add(key)
    if PAA_BLOCK.search(p["question"]):
        dropped.append(p["question"]); continue
    paa_rows.append(p)
print(f"  {len(paa_rows)} unique PAA kept, {len(dropped)} dropped (careers/jobs/salary/MLM)")

# =============================================================================
# WRITE
# =============================================================================
def write_csv(name, rows, fields):
    with open(os.path.join(DATA, name), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader(); w.writerows(rows)
    print(f"  wrote {name} ({len(rows)} rows)")


print("\n=== WRITING ===")
write_csv("agency_roundup_serp.csv", serp_rows,
          ["keyword", "position", "domain", "url", "title", "is_directory"])
write_csv("agency_roundup_features.csv", feature_rows,
          ["keyword", "organic_captured", "ai_overview", "featured_snippet", "item_types",
           "ai_overview_sources", "ai_overview_text", "featured_snippet_text"])
write_csv("agency_roundup_domains.csv", dom_rows,
          ["domain", "layer", "appearances", "avg_pos", "keywords", "sample_title", "sample_url"])

prof_fields = ["domain", "serp_appearances", "labs_organic_keywords", "labs_organic_etv_monthly",
               "labs_organic_traffic_cost", "labs_pos_1", "labs_pos_2_3", "labs_pos_4_10",
               "labs_paid_keywords", "bl_rank", "bl_backlinks", "bl_referring_domains",
               "bl_referring_main_domains", "bl_first_seen", "top_keywords_returned",
               "top_keywords", "rank_overview_error", "ranked_keywords_error", "backlinks_error"]
write_csv("agency_roundup_profiles.csv", profiles, prof_fields)
write_csv("agency_roundup_paa.csv", paa_rows, ["seed_term", "question", "serp_answer"])

brief = {
    "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
    "location_code": US, "language_code": LANG,
    "head_terms": HEAD_TERMS,
    "paa_seed_terms": PAA_TERMS,
    "serp_features": feature_rows,
    "ai_overviews": ai_overview_capture,
    "agency_layer": agencies,
    "directory_layer": directories,
    "publisher_layer": publishers,
    "profiles": profiles,
    "factoryjet_baseline": baseline,
    "paa": paa_rows,
    "paa_dropped": dropped,
    "serp_rows": serp_rows,
    "cost_ledger": LEDGER,
    "total_cost_usd": round(COST, 4),
}
with open(os.path.join(DATA, "agency_roundup_brief.json"), "w") as f:
    json.dump(brief, f, indent=1)
print("  wrote agency_roundup_brief.json")

with open(os.path.join(DATA, "agency_roundup_run.log"), "a") as f:
    f.write(f"\n===== RUN {time.strftime('%Y-%m-%d %H:%M:%S')} "
            f"(cache={'on' if USE_CACHE else 'off'}) =====\n")
    for L in LEDGER:
        f.write(f"{L['call']}\tcost=${L['cost']}\tcached={L['cached']}\t"
                f"status={L['status_code']} {L['status_message']}\t{L['error']}\n")
    f.write(f"BILLED THIS RUN\t${round(COST,4)}\n")

fails = [L for L in LEDGER if L["error"] or (L["status_code"] and L["status_code"] != 20000)]
n_cached = sum(1 for L in LEDGER if L["cached"])
print(f"\n=== DONE  billed this run = ${COST:.4f}  "
      f"({len(LEDGER)} calls, {n_cached} replayed from cache, {len(fails)} failed) ===")
for L in fails:
    print(f"  FAILED {L['call']}: {L['error'] or L['status_message']}")
