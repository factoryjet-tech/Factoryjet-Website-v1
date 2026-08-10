#!/usr/bin/env python3
"""AI/LLM VISIBILITY MATRIX for factoryjet.com  (2026-08-10)

Answers one question: across every AI answer surface we can actually measure,
where are we cited, and where are we invisible?

Surfaces measured per keyword:
  1. Google organic (top 100)   -> serp/google/organic/live/advanced
  2. Google AI Overview         -> same call, load_async_ai_overview=true
  3. LLM answers with web search on -> ai_optimization/{provider}/llm_responses/live
     providers discovered at run time from ai_optimization/{p}/llm_responses/models

Successor to dfs_brand_rank_audit.py (which was India-only, 8 keywords).
That script is NOT modified. Prior output: data/brand_rank_audit.json.

Stages (argv), so spend is incremental and interruptible:
  python3 dfs_ai_visibility_matrix.py providers   # free, lists what we can test
  python3 dfs_ai_visibility_matrix.py probe       # ~$0.10, measures real per-call cost
  python3 dfs_ai_visibility_matrix.py serp        # Google organic + AI Overview, all keywords
  python3 dfs_ai_visibility_matrix.py llm         # the big one, prints an estimate + asks
  python3 dfs_ai_visibility_matrix.py report      # re-print the matrix from saved JSON

Env: pipeline/research/.env (DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD). Never printed.
Writes data/ai_visibility_matrix.json (stages merge into the same file).
"""
import os, sys, json, base64, re, urllib.request, urllib.error
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "data", "ai_visibility_matrix.json")
BRAND = "factoryjet"


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
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()
).decode()

LOCATIONS = {"us": (2840, "United States"), "in": (2356, "India")}

# 28 keywords. Chosen from US-LEAD-GEN-PLAN.md §2 winnable pockets (real volume +
# real commercial intent) and the India superlative set. Three India terms overlap
# with dfs_brand_rank_audit.py on purpose so we can see movement since 2026-07-31.
KEYWORDS = [
    # --- AI SEO / GEO / AEO (core service, highest-value citation target) ---
    ("ai seo services",                          "us", "ai_seo"),
    ("ai seo company",                           "us", "ai_seo"),
    ("best ai seo agency",                       "us", "ai_seo"),
    ("generative engine optimization services",  "us", "ai_seo"),
    ("answer engine optimization services",      "us", "ai_seo"),
    ("geo agency for ai search visibility",      "us", "ai_seo"),
    # --- AI agents / AI automation ---
    ("ai agent development companies",           "us", "ai_agent"),
    ("ai agent development services",            "us", "ai_agent"),
    ("ai automation agency",                     "us", "ai_agent"),
    ("ai automation services",                   "us", "ai_agent"),
    ("ai chatbot development company",           "us", "ai_agent"),
    ("best ai agency for small business",        "us", "ai_agent"),
    # --- Ecommerce development / Shopify ---
    ("ecommerce development company",            "us", "ecommerce"),
    ("ecommerce agency",                         "us", "ecommerce"),
    ("shopify development services",             "us", "ecommerce"),
    ("shopify seo agency",                       "us", "ecommerce"),
    ("ecommerce seo agency",                     "us", "ecommerce"),
    ("b2b ecommerce development company",        "us", "ecommerce"),
    # --- Web design ---
    ("web design services for small business",   "us", "web_design"),
    ("web design agency",                        "us", "web_design"),
    ("wordpress web design agency",              "us", "web_design"),
    # --- India (3 overlap with the 2026-07-31 audit: marked * below) ---
    ("best ai seo agency in india",              "in", "ai_seo"),        # * our one known win
    ("best ai automation agency in india",       "in", "ai_agent"),
    ("ai agent development company in india",    "in", "ai_agent"),
    ("best web design agency in india",          "in", "web_design"),    # *
    ("best ecommerce agency in india",           "in", "ecommerce"),     # *
    ("shopify development company in india",     "in", "ecommerce"),
    ("best digital marketing agency in india",   "in", "other"),
]

# One representative, web-search-capable model per provider. Verified against the
# live /models endpoint before use; if a name goes stale the script says so.
PREFERRED = {
    "chat_gpt":   ["gpt-5.5", "gpt-5.1", "gpt-4o"],
    "claude":     ["claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5"],
    "gemini":     ["gemini-2.5-pro", "gemini-3.1-pro-preview", "gemini-2.5-flash"],
    "perplexity": ["sonar-pro", "sonar"],
}
# probed for availability every run so we never assume a vendor is missing
CANDIDATE_PROVIDERS = ["chat_gpt", "claude", "gemini", "perplexity", "deepseek",
                       "grok", "xai", "llama", "mistral", "copilot", "bing_copilot",
                       "qwen", "kimi", "mmistral", "meta_ai", "you"]

# Output tokens drive LLM cost. 700 still fits an 8-10 item ranked list.
# chat_gpt REJECTS max_output_tokens below ~1000 ("Invalid Field: 'max_output_tokens'"),
# which makes it ~8x the price of the others ($0.116 vs $0.015-0.053 per call).
MAX_TOKENS = {"chat_gpt": 1500, "claude": 700, "gemini": 700, "perplexity": 700}
DEFAULT_TOKENS = 700

# COST CONTROL: chat_gpt is sampled, not run on the full set. These 14 span every
# service bucket and both markets. Everything else runs the full 28.
CHATGPT_SAMPLE = {
    "ai seo services", "best ai seo agency", "generative engine optimization services",
    "answer engine optimization services", "ai agent development companies",
    "ai automation agency", "ai automation services", "best ai agency for small business",
    "ecommerce development company", "shopify seo agency", "b2b ecommerce development company",
    "web design services for small business",
    "best ai seo agency in india", "ai agent development company in india",
}

DOMAIN_RE = re.compile(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|io|ai|co|net|org|in|dev|agency))\b")
NOISE = {"openai.com", "anthropic.com", "google.com", "wikipedia.org", "reddit.com",
         "youtube.com", "linkedin.com", "github.com", "medium.com", "forbes.com",
         "gartner.com", "example.com", "perplexity.ai", "shopify.com", "microsoft.com",
         "salesforce.com", "hubspot.com", "wordpress.com", "wix.com", "squarespace.com",
         "adobe.com", "bigcommerce.com", "magento.com", "woocommerce.com", "quora.com",
         "trustpilot.com", "glassdoor.com", "crunchbase.com", "x.com", "facebook.com"}


def req(path, body=None, timeout=240):
    r = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode() if body is not None else None,
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"},
    )
    try:
        return json.loads(urllib.request.urlopen(r, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"_http": e.code, "_body": e.read().decode()[:400]}
    except Exception as e:
        return {"_err": str(e)}


# ---------------------------------------------------------------- providers ---
def discover_providers(verbose=True):
    avail, unavail = {}, {}
    for p in CANDIDATE_PROVIDERS:
        r = req(f"ai_optimization/{p}/llm_responses/models")
        t = (r.get("tasks") or [{}])[0]
        if t.get("status_code") == 20000:
            models = [m for m in (t.get("result") or []) if m.get("web_search_supported")]
            avail[p] = [m["model_name"] for m in models]
        else:
            unavail[p] = f'{t.get("status_code", r.get("_http"))} {t.get("status_message", r.get("_body", ""))}'.strip()
    if verbose:
        print("=== AI OPTIMIZATION PROVIDERS ON DATAFORSEO (probed live) ===")
        for p, ms in avail.items():
            print(f"  AVAILABLE   {p:<14} {len(ms):>3} web-search models  e.g. {', '.join(ms[:4])}")
        for p, why in unavail.items():
            print(f"  UNAVAILABLE {p:<14} {why}")
    return avail, unavail


def pick_models(avail):
    chosen = []
    for p, prefs in PREFERRED.items():
        if p not in avail:
            continue
        m = next((x for x in prefs if x in avail[p]), None) or (avail[p][0] if avail[p] else None)
        if m:
            chosen.append((p, m))
    return chosen


# --------------------------------------------------------------------- SERP ---
def check_serp(job):
    kw, market, bucket = job
    loc, loc_name = LOCATIONS[market]
    r = req("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": loc, "language_code": "en",
        "device": "desktop", "os": "windows", "depth": 100,
        "load_async_ai_overview": True,
    }])
    out = {"keyword": kw, "market": market, "bucket": bucket, "location": loc_name,
           "cost": r.get("cost", 0) or 0, "organic_pos": None, "organic_url": None,
           "aio_present": False, "aio_cited": False, "aio_our_url": None,
           "aio_sources": [], "top10": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:300]
        return out

    for it in items:
        t = it.get("type")
        if t == "organic":
            url = (it.get("url") or "")
            dom = (it.get("domain") or "")
            if len(out["top10"]) < 10:
                out["top10"].append(dom)
            if BRAND in url.lower() and out["organic_pos"] is None:
                out["organic_pos"] = it.get("rank_group")
                out["organic_url"] = url
        elif t == "ai_overview":
            out["aio_present"] = True
            refs = list(it.get("references") or [])
            for sub in (it.get("items") or []):
                refs += list(sub.get("references") or [])
            for ref in refs:
                dom = (ref.get("domain") or "").lower()
                url = ref.get("url") or ""
                if not dom and url:
                    dom = url.split("/")[2].lower() if "://" in url else url
                if dom and dom not in out["aio_sources"]:
                    out["aio_sources"].append(dom)
                if BRAND in (dom + url).lower():
                    out["aio_cited"] = True
                    out["aio_our_url"] = out["aio_our_url"] or url
    return out


# ---------------------------------------------------------------------- LLM ---
def check_llm(job):
    kw, market, bucket, provider, model = job
    _, loc_name = LOCATIONS[market]
    prompt = (f"{kw} — I'm a buyer in {loc_name} looking to hire. "
              f"Give me a ranked list of specific companies with their websites.")
    r = req(f"ai_optimization/{provider}/llm_responses/live", [{
        "user_prompt": prompt, "model_name": model,
        "web_search": True, "max_output_tokens": MAX_TOKENS.get(provider, DEFAULT_TOKENS),
    }])
    out = {"keyword": kw, "market": market, "bucket": bucket, "provider": provider,
           "model": model, "cost": r.get("cost", 0) or 0,
           "mentioned": False, "link_cited": False, "our_urls": [], "rank_line": None,
           "domains": [], "linked_domains": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:250]
        return out

    text, links = "", []
    for it in items:
        for sec in (it.get("sections") or []):
            text += (sec.get("text") or "") + "\n"
            for ln in (sec.get("links") or []):
                links.append((((ln.get("domain") or "").lower()), ln.get("url") or ""))
    low = text.lower()
    out["text_len"] = len(text)
    out["mentioned"] = BRAND in low

    for dom, url in links:
        d = dom or (url.split("/")[2].lower() if "://" in url else "")
        if d and d not in out["linked_domains"]:
            out["linked_domains"].append(d)
        if BRAND in (d + url).lower():
            out["link_cited"] = True
            if url and url not in out["our_urls"]:
                out["our_urls"].append(url)

    # any factoryjet.com URL written inline in the answer body also counts as "our page"
    for m in re.finditer(r"https?://[^\s\)\]]+", text):
        u = m.group(0)
        if BRAND in u.lower() and u not in out["our_urls"]:
            out["our_urls"].append(u)

    if out["mentioned"]:
        for line in text.splitlines():
            if BRAND in line.lower():
                out["rank_line"] = line.strip()[:160]
                break

    seen = []
    for d in DOMAIN_RE.findall(low):
        if d not in NOISE and d not in seen:
            seen.append(d)
    for d in out["linked_domains"]:
        if d not in NOISE and d not in seen:
            seen.append(d)
    out["domains"] = seen[:25]
    return out


# --------------------------------------------------------------------- disk ---
def load_state():
    if os.path.exists(OUT):
        return json.load(open(OUT))
    return {"generated": None, "brand": BRAND, "keywords": [list(k) for k in KEYWORDS],
            "providers": {}, "serp": [], "llm": [], "cost": {}}


def save_state(st):
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    json.dump(st, open(OUT, "w"), indent=1)
    print(f"\nsaved -> {OUT}")


def balance():
    r = req("appendix/user_data")
    try:
        return r["tasks"][0]["result"][0]["money"]["balance"]
    except Exception:
        return None


# ------------------------------------------------------------------- report ---
def report(st):
    serp = st.get("serp", [])
    llm = st.get("llm", [])
    provs = sorted({r["provider"] for r in llm})
    kws = [k[0] for k in KEYWORDS]

    print("\n" + "=" * 100)
    print("MATRIX — . = not cited, X = CITED, n = google organic rank, ? = error/not run")
    print("=" * 100)
    header = f"{'keyword':<42}{'mkt':<5}{'organic':>8}{'AIO':>5}" + "".join(f"{p[:9]:>11}" for p in provs)
    print(header)
    print("-" * len(header))
    s_by = {r["keyword"]: r for r in serp}
    l_by = {(r["keyword"], r["provider"]): r for r in llm}
    for kw, mkt, bucket in KEYWORDS:
        s = s_by.get(kw)
        org = "?" if not s else (str(s["organic_pos"]) if s["organic_pos"] else ".")
        aio = "?" if not s else ("X" if s["aio_cited"] else ("." if s["aio_present"] else "-"))
        cells = ""
        for p in provs:
            r = l_by.get((kw, p))
            cells += f"{('?' if not r else ('X' if (r['mentioned'] or r['link_cited']) else ('E' if r['error'] else '.'))):>11}"
        print(f"{kw:<42}{mkt:<5}{org:>8}{aio:>5}{cells}")

    print("\n=== CITATION RATE BY SURFACE ===")
    n = len(kws)
    org_hits = [r["keyword"] for r in serp if r["organic_pos"]]
    aio_run = [r for r in serp if r["aio_present"]]
    aio_hits = [r["keyword"] for r in serp if r["aio_cited"]]
    if serp:
        print(f"  google organic top100   {len(org_hits)}/{len(serp)}   {org_hits}")
        print(f"  google AI Overview      {len(aio_hits)}/{len(aio_run)} (AIO shown on {len(aio_run)}/{len(serp)})   {aio_hits}")
    for p in provs:
        rs = [r for r in llm if r["provider"] == p and not r["error"]]
        hits = [r["keyword"] for r in rs if r["mentioned"] or r["link_cited"]]
        errs = len([r for r in llm if r["provider"] == p and r["error"]])
        print(f"  {p:<22}  {len(hits)}/{len(rs)}   errors={errs}   {hits}")

    print("\n=== WHERE WE ARE INVISIBLE (zero citation on any measured surface) ===")
    for kw, mkt, bucket in KEYWORDS:
        s = s_by.get(kw)
        any_hit = bool(s and (s["organic_pos"] or s["aio_cited"]))
        for p in provs:
            r = l_by.get((kw, p))
            if r and (r["mentioned"] or r["link_cited"]):
                any_hit = True
        if not any_hit:
            print(f"  {mkt}  {bucket:<11} {kw}")

    print("\n=== COMPETITOR DOMAINS DOMINATING LLM ANSWERS ===")
    c = Counter()
    per_bucket = defaultdict(Counter)
    for r in llm:
        for d in r["domains"]:
            if BRAND in d:
                continue
            c[d] += 1
            per_bucket[r["bucket"]][d] += 1
    for d, k in c.most_common(30):
        print(f"  {k:>4}x  {d}")
    print("\n  --- by service bucket (top 8) ---")
    for b, cc in per_bucket.items():
        print(f"  {b:<11} " + ", ".join(f"{d}({k})" for d, k in cc.most_common(8)))

    print("\n=== OUR PAGES THAT EARN CITATIONS ===")
    pages = Counter()
    for r in llm:
        for u in r["our_urls"]:
            pages[u.split("?")[0].rstrip("/")] += 1
    for r in serp:
        if r["aio_our_url"]:
            pages[r["aio_our_url"].split("?")[0].rstrip("/")] += 1
        if r["organic_url"]:
            pages[r["organic_url"].split("?")[0].rstrip("/")] += 0  # organic listed separately
    if pages:
        for u, k in pages.most_common(20):
            print(f"  {k:>3}x  {u}")
    else:
        print("  (no explicit factoryjet URL returned in any AI answer)")
    print("\n  organic-ranking URLs:")
    for r in serp:
        if r["organic_url"]:
            print(f"   #{r['organic_pos']:<4} {r['keyword']:<42} {r['organic_url']}")

    tot = sum(r["cost"] for r in serp) + sum(r["cost"] for r in llm)
    print(f"\n=== API COST ===  serp ${sum(r['cost'] for r in serp):.4f} + "
          f"llm ${sum(r['cost'] for r in llm):.4f} = ${tot:.4f}")


# --------------------------------------------------------------------- main ---
if __name__ == "__main__":
    stage = sys.argv[1] if len(sys.argv) > 1 else "report"
    st = load_state()

    if stage == "providers":
        avail, unavail = discover_providers()
        st["providers"] = {"available": avail, "unavailable": unavail,
                           "chosen": pick_models(avail)}
        print("\nchosen models:", st["providers"]["chosen"])
        save_state(st)

    elif stage == "probe":
        avail, _ = discover_providers(verbose=False)
        chosen = pick_models(avail)
        print("probing real per-call cost on 1 keyword x", len(chosen), "providers + 1 SERP")
        s = check_serp(KEYWORDS[0])
        print(f"  serp cost ${s['cost']:.4f}")
        jobs = [(KEYWORDS[0][0], KEYWORDS[0][1], KEYWORDS[0][2], p, m) for p, m in chosen]
        per = {}
        with ThreadPoolExecutor(max_workers=4) as ex:
            for r in ex.map(check_llm, jobs):
                per[r["provider"]] = r["cost"]
                print(f"  {r['provider']:<12} ${r['cost']:.4f}  len={r.get('text_len')} err={r['error'] or ''}")
        est = len(KEYWORDS) * s["cost"] + len(KEYWORDS) * sum(per.values())
        print(f"\nESTIMATED FULL RUN: {len(KEYWORDS)} kw x (1 serp + {len(chosen)} llm) = ${est:.2f}")
        print(f"account balance: ${balance()}")
        st["cost"]["probe"] = {"serp_per_call": s["cost"], "llm_per_call": per,
                               "estimated_full_run": round(est, 2)}
        save_state(st)

    elif stage == "serp":
        print(f"=== GOOGLE ORGANIC + AI OVERVIEW — {len(KEYWORDS)} keywords ===")
        st["serp"] = []
        with ThreadPoolExecutor(max_workers=6) as ex:
            for r in ex.map(check_serp, KEYWORDS):
                st["serp"].append(r)
                print(f"  {r['market']} {r['keyword']:<42} organic={str(r['organic_pos'] or '-'):>5}"
                      f"  aio={'Y' if r['aio_present'] else 'n'}{'/CITED' if r['aio_cited'] else ''}"
                      f"  {('ERR ' + r['error'][:80]) if r['error'] else ''}")
        print(f"\nserp cost ${sum(r['cost'] for r in st['serp']):.4f}")
        save_state(st)

    elif stage == "llm":
        avail, unavail = discover_providers(verbose=False)
        chosen = pick_models(avail)
        st["providers"] = {"available": avail, "unavailable": unavail, "chosen": chosen}
        per = (st.get("cost", {}).get("probe") or {}).get("llm_per_call", {})
        per["chat_gpt"] = per.get("chat_gpt") or 0.1157  # measured at 1500 tokens
        jobs = [(kw, mkt, b, p, m) for kw, mkt, b in KEYWORDS for p, m in chosen
                if not (p == "chat_gpt" and kw not in CHATGPT_SAMPLE)]
        est = sum(per.get(j[3], 0.06) for j in jobs)
        bal = balance()
        print(f"providers: {[p for p, _ in chosen]}")
        for p, _ in chosen:
            n = len([j for j in jobs if j[3] == p])
            print(f"  {p:<12} {n:>3} calls x ${per.get(p, 0.06):.4f} = ${n * per.get(p, 0.06):.2f}"
                  + ("   (SAMPLED — cost control)" if p == "chat_gpt" else ""))
        print(f"TOTAL {len(jobs)} calls   ESTIMATE ${est:.2f}   balance ${bal}")
        if "--yes" not in sys.argv:
            print("re-run with --yes to spend.")
            sys.exit(0)
        st["llm"] = []
        spent = 0.0
        with ThreadPoolExecutor(max_workers=8) as ex:
            for r in ex.map(check_llm, jobs):
                st["llm"].append(r); spent += r["cost"]
                flag = "CITED" if (r["mentioned"] or r["link_cited"]) else ("ERR" if r["error"] else "  .  ")
                print(f"  {flag:<6} {r['provider']:<11} {r['keyword']:<42} ${spent:.2f}")
        print(f"\nllm cost ${spent:.4f}")
        st["cost"]["llm_actual"] = round(spent, 4)
        st["generated"] = "2026-08-10"
        save_state(st)
        report(st)

    elif stage == "report":
        report(st)

    else:
        print(__doc__)
