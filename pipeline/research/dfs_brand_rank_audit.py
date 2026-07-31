#!/usr/bin/env python3
"""Where does factoryjet.com actually rank for 'best/top <service> in India' head terms?

Checks three surfaces per keyword:
  1. Google organic (top 100)      -> DataForSEO SERP advanced
  2. Google AI Overview            -> same call, load_async_ai_overview=true
  3. LLM answers (ChatGPT/Claude/Gemini/Perplexity, web search on)
                                   -> DataForSEO AI Optimization llm_responses

Writes data/brand_rank_audit.json + prints a matrix.
"""
import os, json, base64, urllib.request, urllib.error, csv, time
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))
BRAND = "factoryjet"
LOCATION_CODE = 2356  # India
LOCATION_NAME = "India"

KEYWORDS = [
    "best ai seo agency in india",
    "best web design agency in india",
    "best ecommerce agency in india",
    "best seo services company in india",
    "top ai agency in india",
    "best ai agent development company in india",
    "top web development company in india",
    "best shopify development agency in india",
]

# one representative model per provider, web search enabled
LLMS = [
    ("chat_gpt",   "gpt-5.5"),
    ("claude",     "claude-sonnet-4-5"),
    ("gemini",     "gemini-2.5-pro"),
    ("perplexity", "sonar-pro"),
]


def post(path, body, timeout=180):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"},
    )
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:400]}
    except Exception as e:
        return {"error": str(e)}


def check_serp(kw):
    """Google organic position + AI Overview presence/citations."""
    body = [{
        "keyword": kw, "location_code": LOCATION_CODE, "language_code": "en",
        "device": "desktop", "os": "windows", "depth": 100,
        "load_async_ai_overview": True,
    }]
    r = post("serp/google/organic/live/advanced", body)
    out = {"keyword": kw, "cost": r.get("cost", 0), "organic_pos": None, "organic_url": None,
           "aio_present": False, "aio_cited": False, "aio_sources": [], "top3": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:300]
        return out

    for it in items:
        t = it.get("type")
        if t == "organic":
            url = it.get("url") or ""
            if len(out["top3"]) < 3:
                out["top3"].append(f"{it.get('rank_group')}. {(it.get('domain') or '')}")
            if BRAND in url.lower() and out["organic_pos"] is None:
                out["organic_pos"] = it.get("rank_group")
                out["organic_url"] = url
        elif t == "ai_overview":
            out["aio_present"] = True
            refs = it.get("references") or []
            # citations can also hang off nested items
            for sub in (it.get("items") or []):
                refs += (sub.get("references") or [])
            for ref in refs:
                dom = (ref.get("domain") or ref.get("url") or "")
                if dom and dom not in out["aio_sources"]:
                    out["aio_sources"].append(dom)
                if BRAND in dom.lower():
                    out["aio_cited"] = True
    return out


def check_llm(kw, llm, model):
    body = [{
        "user_prompt": f"{kw}? Give me a ranked list of specific companies with their websites.",
        "model_name": model,
        "web_search": True,
        "max_output_tokens": 1500,
    }]
    r = post(f"ai_optimization/{llm}/llm_responses/live", body)
    out = {"keyword": kw, "llm": llm, "model": model, "cost": r.get("cost", 0),
           "mentioned": False, "rank": None, "brands": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:300]
        return out

    text = ""
    for it in items:
        for sec in (it.get("sections") or []):
            text += (sec.get("text") or "") + "\n"
            for ln in (sec.get("links") or []):
                text += (ln.get("domain") or ln.get("url") or "") + "\n"
    out["text_len"] = len(text)
    low = text.lower()
    out["mentioned"] = BRAND in low
    if out["mentioned"]:
        # crude position: which numbered list entry contains the brand
        for i, line in enumerate(text.splitlines()):
            if BRAND in line.lower():
                out["rank"] = line.strip()[:120]
                break
    # capture the competitors the model actually named, for context
    for line in text.splitlines():
        s = line.strip()
        if s[:2].rstrip(".").isdigit() and 3 < len(s) < 160:
            out["brands"].append(s[:90])
    out["brands"] = out["brands"][:10]
    return out


if __name__ == "__main__":
    results = {"location": LOCATION_NAME, "serp": [], "llm": []}
    total_cost = 0.0

    print(f"=== GOOGLE SERP + AI OVERVIEW ({LOCATION_NAME}) ===")
    with ThreadPoolExecutor(max_workers=4) as ex:
        for res in ex.map(check_serp, KEYWORDS):
            results["serp"].append(res); total_cost += res["cost"] or 0
            aio = "AIO:yes" if res["aio_present"] else "AIO:no "
            cite = "CITED" if res["aio_cited"] else "-"
            pos = res["organic_pos"] or "not in top100"
            print(f"  {res['keyword']:46s} organic={str(pos):>13s}  {aio} {cite:5s}  err={bool(res['error'])}")

    print(f"\n=== LLM ANSWERS (web search on) ===")
    jobs = [(kw, llm, m) for kw in KEYWORDS for llm, m in LLMS]
    with ThreadPoolExecutor(max_workers=6) as ex:
        for res in ex.map(lambda a: check_llm(*a), jobs):
            results["llm"].append(res); total_cost += res["cost"] or 0
            flag = "MENTIONED" if res["mentioned"] else "-"
            print(f"  {res['llm']:11s} {res['keyword']:46s} {flag:10s} err={res['error'] or ''}")

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    out = os.path.join(HERE, "data", "brand_rank_audit.json")
    with open(out, "w") as f:
        json.dump(results, f, indent=1)
    print(f"\ncost=${total_cost:.4f}  json={out}")
