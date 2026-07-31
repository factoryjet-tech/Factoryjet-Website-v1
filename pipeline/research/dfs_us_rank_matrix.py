#!/usr/bin/env python3
"""PHASE B (US) — do we rank / get cited, on the terms that ACTUALLY have US volume?

Three surfaces per keyword:
  1. Google organic top-100          (DataForSEO SERP advanced)
  2. Google AI Overview + citations  (same call, load_async_ai_overview)
  3. ChatGPT / Claude / Gemini / Perplexity, web search on, N runs each
     -> reported as a MENTION RATE, because LLM answers are non-deterministic

Also captures WHO wins each surface — the competitor set we need for the rewrite.
Writes data/rank_matrix.json
"""
import os, json, base64, urllib.request, urllib.error, re
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))
BRAND, LOC = "factoryjet", 2840  # United States
RUNS = 3  # repeats per LLM, to turn a coin-flip into a rate

TARGETS = [
    ("best seo agency",                    6600, "seo"),
    ("best company for seo",               6600, "seo"),
    ("best digital marketing agency",      4400, "digital_mkt"),
    ("top digital marketing agency",       4400, "digital_mkt"),
    ("best ai agency",                     1900, "ai_agents"),
    ("affordable seo services",            1000, "seo"),
    ("best seo agency usa",                1000, "seo"),
    ("best seo company in usa",            1000, "seo"),
    ("top web design company",             1000, "web_design"),
    ("best company for web design",        1000, "web_design"),
    ("best law firm seo company",           880, "seo_niche"),
    ("best ai seo tool",                    880, "ai_seo"),
    ("best ecommerce seo company",          320, "ecommerce"),
    ("top-rated web design company",        320, "web_design"),
]

LLMS = [("chat_gpt", "gpt-5.5"), ("claude", "claude-sonnet-4-5"),
        ("gemini", "gemini-2.5-pro"), ("perplexity", "sonar-pro")]

NOISE = {"linkedin.com", "www.linkedin.com", "reddit.com", "www.reddit.com", "youtube.com",
         "www.youtube.com", "quora.com", "www.quora.com", "clutch.co", "www.clutch.co",
         "designrush.com", "www.designrush.com", "goodfirms.co", "www.goodfirms.co",
         "sortlist.com", "medium.com", "facebook.com", "instagram.com", "x.com", "twitter.com"}


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:300]}
    except Exception as e:
        return {"error": str(e)}


def check_serp(t):
    kw, vol, vert = t
    r = post("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": LOC, "language_code": "en",
        "device": "desktop", "os": "windows", "depth": 100, "load_async_ai_overview": True}])
    o = {"keyword": kw, "volume": vol, "vertical": vert, "cost": r.get("cost", 0),
         "organic_pos": None, "organic_url": None, "aio_present": False, "aio_cited": False,
         "aio_sources": [], "top10": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        o["error"] = json.dumps(r)[:250]; return o
    for it in items:
        if it.get("type") == "organic":
            url, dom = (it.get("url") or ""), (it.get("domain") or "")
            if len(o["top10"]) < 10:
                o["top10"].append(dom)
            if BRAND in url.lower() and o["organic_pos"] is None:
                o["organic_pos"], o["organic_url"] = it.get("rank_group"), url
        elif it.get("type") == "ai_overview":
            o["aio_present"] = True
            refs = list(it.get("references") or [])
            for sub in (it.get("items") or []):
                refs += list(sub.get("references") or [])
            for ref in refs:
                d = ref.get("domain") or ref.get("url") or ""
                if d and d not in o["aio_sources"]:
                    o["aio_sources"].append(d)
                if BRAND in d.lower():
                    o["aio_cited"] = True
    return o


def one_llm_run(args):
    kw, llm, model, run = args
    r = post(f"ai_optimization/{llm}/llm_responses/live", [{
        "user_prompt": f"{kw}? Recommend specific companies and include their websites.",
        "model_name": model, "web_search": True, "max_output_tokens": 1500}])
    out = {"keyword": kw, "llm": llm, "run": run, "cost": r.get("cost", 0),
           "mentioned": False, "domains": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:200]; return out
    text = ""
    for it in items:
        for sec in (it.get("sections") or []):
            text += (sec.get("text") or "") + "\n"
            for ln in (sec.get("links") or []):
                d = (ln.get("domain") or "").lower()
                text += d + "\n"
                if d and d not in NOISE:
                    out["domains"].append(d)
    for d in re.findall(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|in|co\.in|io|net|org|ai))\b", text.lower()):
        if d not in NOISE:
            out["domains"].append(d)
    out["mentioned"] = BRAND in text.lower()
    out["chars"] = len(text)
    return out


if __name__ == "__main__":
    print("=== SURFACE 1+2: GOOGLE ORGANIC + AI OVERVIEW (India) ===")
    serp, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=5) as ex:
        for o in ex.map(check_serp, TARGETS):
            serp.append(o); cost += o["cost"] or 0
            pos = o["organic_pos"] or "—"
            print(f"  vol={o['volume']:>6,} {o['keyword']:52s} organic={str(pos):>4}  "
                  f"AIO={'Y' if o['aio_present'] else 'n'} cited={'YES' if o['aio_cited'] else '-'}"
                  f"{'  ERR' if o['error'] else ''}")

    print(f"\n=== SURFACE 3: LLM ANSWERS ({RUNS} runs x 4 models) ===")
    LLM_TARGETS = TARGETS[:10]  # cost control: web_search adds ~$0.058/call
    jobs = [(kw, llm, m, i) for kw, _, _ in LLM_TARGETS for llm, m in LLMS for i in range(RUNS)]
    print(f"  {len(jobs)} requests, running...")
    llm_res = []
    with ThreadPoolExecutor(max_workers=10) as ex:
        for res in ex.map(one_llm_run, jobs):
            llm_res.append(res); cost += res["cost"] or 0

    agg = defaultdict(lambda: defaultdict(list))
    for r in llm_res:
        agg[r["keyword"]][r["llm"]].append(r)
    for kw, _, _ in LLM_TARGETS:
        parts, errs = [], 0
        for llm, _m in LLMS:
            rs = agg[kw][llm]
            errs += sum(1 for x in rs if x["error"])
            ok = [x for x in rs if not x["error"]]
            hit = sum(1 for x in ok if x["mentioned"])
            parts.append(f"{llm}={hit}/{len(ok)}")
        print(f"  {kw:52s} " + "  ".join(parts) + (f"  (errs {errs})" if errs else ""))

    # who owns each surface
    print("\n=== WHO OWNS THESE SURFACES (competitor set for the rewrite) ===")
    org, aio, llmd = Counter(), Counter(), Counter()
    for o in serp:
        for d in o["top10"][:10]:
            if d.lower() not in NOISE: org[d.lower()] += 1
        for d in o["aio_sources"]:
            if d.lower() not in NOISE: aio[d.lower()] += 1
    for r in llm_res:
        for d in set(r["domains"]): llmd[d] += 1
    print("\n  Google organic top-10 (appearances across targets):")
    for d, c in org.most_common(15): print(f"    {c:>3}  {d}")
    print("\n  Google AI Overview citations:")
    for d, c in aio.most_common(15): print(f"    {c:>3}  {d}")
    print("\n  Named by LLMs:")
    for d, c in llmd.most_common(20): print(f"    {c:>3}  {d}")

    json.dump({"serp": serp, "llm": llm_res, "runs": RUNS,
               "owners": {"organic": org.most_common(40), "aio": aio.most_common(40),
                          "llm": llmd.most_common(60)}},
              open(os.path.join(HERE, "data", "us_rank_matrix.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  json=data/us_rank_matrix.json")
