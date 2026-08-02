#!/usr/bin/env python3
"""E-COMMERCE LEAD-GEN PHASE B — for each content-type hypothesis, WHO actually owns
the surface, and can an agency win it at all?

The demand pull (dfs_ecom_leadgen.py) showed comparison + migration keywords sit at
KD 0-12 while "hire an agency" keywords sit at KD 20+. Low KD is meaningless if the
SERP is owned by the platform vendors themselves (shopify.com) or by publishers
(Forbes/NerdWallet) that an agency can never displace. This measures that directly.

Surfaces per keyword:
  1. Google organic top-20 — and whether the ranking domain is an AGENCY, a VENDOR
     (platform's own site), a PUBLISHER (review/media), or a TOOL.
  2. Google AI Overview presence + cited domains.
  3. LLM buyer prompts (ChatGPT/Claude/Gemini/Perplexity) phrased the way a real
     buyer asks — comparison/migration/vertical framing, not "best agency" framing,
     which the 2026-08-01 audit already tested (result: 0/120 mentions).

Writes data/ecom_leadgen_serp.json
"""
import os, json, base64, urllib.request, urllib.error, re
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))


def load_env():
    p = os.path.join(HERE, ".env")
    if os.path.exists(p):
        for line in open(p):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BRAND = "factoryjet"
RUNS = 3
US = 2840

# (keyword, bucket) — low-KD picks from the cleaned demand data
TARGETS = [
    ("woocommerce vs shopify",                    "compare"),
    ("bigcommerce vs shopify",                    "compare"),
    ("best ecommerce platform for small business","compare"),
    ("shopify vs bigcommerce",                    "compare"),
    ("magento to shopify migration",              "migrate"),
    ("shopify migration services",                "migrate"),
    ("migration from magento to shopify",         "migrate"),
    ("b2b ecommerce platform",                    "vertical"),
    ("b2b website design",                        "vertical"),
    ("ecommerce for manufacturers",               "vertical"),
    ("how much does an ecommerce website cost",   "cost"),
    ("shopify development cost",                  "cost"),
    ("hire ecommerce developer",                  "hire"),
    ("ecommerce development services",            "hire"),
    ("shopify expert",                            "hire"),
]

# how a real buyer actually asks an LLM — deliberately NOT "best X agency"
LLM_PROMPTS = [
    ("We're on Magento 2 and want to move to Shopify Plus. Which agencies do this well? "
     "Name specific companies and their websites.", "migrate"),
    ("Shopify vs WooCommerce for a B2B wholesale business doing $5M/year — which should we pick, "
     "and who can build it for us? Name specific agencies and websites.", "compare"),
    ("I run a furniture brand and need a custom ecommerce website. Which development companies "
     "should I shortlist? Include their websites.", "vertical"),
    ("How much does it cost to build a custom Shopify store in 2026, and which agencies should "
     "I get quotes from? Include websites.", "cost"),
    ("Which companies build B2B ecommerce portals with ERP integration? Name specific agencies "
     "and their websites.", "vertical"),
    ("We need to hire an ecommerce development agency for a headless commerce build. Who are the "
     "strongest options? Include their websites.", "hire"),
]

LLMS = [("chat_gpt", "gpt-5.5"), ("claude", "claude-sonnet-4-5"),
        ("gemini", "gemini-2.5-pro"), ("perplexity", "sonar-pro")]

VENDOR = {"shopify.com", "woocommerce.com", "bigcommerce.com", "magento.com", "adobe.com",
          "wix.com", "squarespace.com", "wordpress.org", "wordpress.com", "salesforce.com",
          "business.adobe.com", "help.shopify.com", "apps.shopify.com", "experienceleague.adobe.com",
          "shopify.in", "shopify.co.uk", "godaddy.com", "square.com", "ecwid.com", "bigcartel.com"}
PUBLISHER = {"forbes.com", "nerdwallet.com", "techradar.com", "pcmag.com", "cnet.com",
             "businessnewsdaily.com", "usnews.com", "entrepreneur.com", "hostinger.com",
             "wpbeginner.com", "kinsta.com", "wpengine.com", "hubspot.com", "shipbob.com",
             "websitebuilderexpert.com", "tooltester.com", "ecommerce-platforms.com",
             "themeisle.com", "elegantthemes.com", "cloudways.com", "hostgator.com",
             "bluehost.com", "siteground.com", "zapier.com", "g2.com", "capterra.com",
             "trustradius.com", "gartner.com", "statista.com", "bigcommerce.co.uk"}
TOOL = {"cart2cart.com", "litextension.com", "matrixify.app", "shopify-migration.com",
        "next-cart.com", "api2cart.com"}
NOISE = {"linkedin.com", "www.linkedin.com", "reddit.com", "www.reddit.com", "youtube.com",
         "www.youtube.com", "quora.com", "www.quora.com", "clutch.co", "www.clutch.co",
         "designrush.com", "www.designrush.com", "goodfirms.co", "www.goodfirms.co",
         "sortlist.com", "medium.com", "facebook.com", "instagram.com", "x.com", "twitter.com",
         "upwork.com", "fiverr.com", "toptal.com"}


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:400]}
    except Exception as e:
        return {"error": str(e)}


def classify(dom):
    d = dom.lower().replace("www.", "")
    if d in NOISE:      return "marketplace/social"
    if d in VENDOR:     return "VENDOR"
    if d in PUBLISHER:  return "PUBLISHER"
    if d in TOOL:       return "TOOL"
    return "agency?"


def check_serp(t):
    kw, bucket = t
    r = post("serp/google/organic/live/advanced", [{
        "keyword": kw, "location_code": US, "language_code": "en",
        "device": "desktop", "depth": 20, "load_async_ai_overview": True}])
    o = {"keyword": kw, "bucket": bucket, "cost": r.get("cost", 0),
         "organic_pos": None, "aio_present": False, "aio_cited": False,
         "top10": [], "aio_sources": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        o["error"] = json.dumps(r)[:200]; return o
    for it in items:
        if it.get("type") == "organic":
            url, dom = (it.get("url") or ""), (it.get("domain") or "")
            if len(o["top10"]) < 10 and dom:
                o["top10"].append(dom)
            if BRAND in url.lower() and o["organic_pos"] is None:
                o["organic_pos"] = it.get("rank_group")
        if it.get("type") == "ai_overview":
            o["aio_present"] = True
            for ref in (it.get("references") or []):
                d = ref.get("domain") or ""
                if d:
                    o["aio_sources"].append(d)
                if BRAND in (ref.get("url") or "").lower():
                    o["aio_cited"] = True
            for sub in (it.get("items") or []):
                for ref in (sub.get("references") or []):
                    d = ref.get("domain") or ""
                    if d:
                        o["aio_sources"].append(d)
    return o


def one_llm_run(args):
    prompt, bucket, llm, model, run = args
    r = post(f"ai_optimization/{llm}/llm_responses/live", [{
        "user_prompt": prompt, "model_name": model,
        "web_search": True, "max_output_tokens": 1600}])
    out = {"bucket": bucket, "prompt": prompt[:60], "llm": llm, "run": run,
           "cost": r.get("cost", 0), "mentioned": False, "domains": [], "error": None}
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
    for d in re.findall(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|in|co\.in|io|net|org|ai|co\.uk))\b", text.lower()):
        if d not in NOISE:
            out["domains"].append(d)
    out["mentioned"] = BRAND in text.lower()
    return out


if __name__ == "__main__":
    print(f"=== SURFACE 1+2: GOOGLE ORGANIC + AIO ({len(TARGETS)} keywords, US) ===")
    serp, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=6) as ex:
        for o in ex.map(check_serp, TARGETS):
            serp.append(o); cost += o["cost"] or 0
    for o in sorted(serp, key=lambda x: x["bucket"]):
        mix = Counter(classify(d) for d in o["top10"])
        mixs = " ".join(f"{k}={v}" for k, v in mix.most_common())
        print(f"  [{o['bucket']:8s}] {o['keyword'][:42]:42s} AIO={'Y' if o['aio_present'] else 'n'} "
              f"fj={o['organic_pos'] or '-'}  top10: {mixs}")
        print(f"             {', '.join(o['top10'][:8])}")

    print(f"\n=== SURFACE 3: LLM BUYER PROMPTS ({RUNS}x{len(LLMS)}x{len(LLM_PROMPTS)}) ===")
    jobs = [(p, b, llm, m, i) for p, b in LLM_PROMPTS for llm, m in LLMS for i in range(RUNS)]
    llm_res = []
    with ThreadPoolExecutor(max_workers=10) as ex:
        for res in ex.map(one_llm_run, jobs):
            llm_res.append(res); cost += res["cost"] or 0

    agg = defaultdict(lambda: defaultdict(list))
    for r in llm_res:
        agg[r["prompt"]][r["llm"]].append(r)
    for p, b in LLM_PROMPTS:
        k = p[:60]
        parts = []
        for llm, _ in LLMS:
            rs = [x for x in agg[k][llm] if not x["error"]]
            parts.append(f"{llm}={sum(1 for x in rs if x['mentioned'])}/{len(rs)}")
        print(f"  [{b:8s}] {k[:52]:52s} " + " ".join(parts))

    print("\n=== WHO OWNS EACH SURFACE, BY BUCKET ===")
    by_bucket_org = defaultdict(Counter); by_bucket_aio = defaultdict(Counter)
    for o in serp:
        for d in o["top10"]:
            by_bucket_org[o["bucket"]][d.lower().replace("www.", "")] += 1
        for d in o["aio_sources"]:
            by_bucket_aio[o["bucket"]][d.lower().replace("www.", "")] += 1
    for b in ["compare", "migrate", "vertical", "cost", "hire"]:
        print(f"\n  --- {b} ---")
        print("   organic:", ", ".join(f"{d}({c})[{classify(d)}]" for d, c in by_bucket_org[b].most_common(8)))
        print("   AIO    :", ", ".join(f"{d}({c})[{classify(d)}]" for d, c in by_bucket_aio[b].most_common(8)) or "none")

    llmd = defaultdict(Counter)
    for r in llm_res:
        for d in set(r["domains"]):
            llmd[r["bucket"]][d] += 1
    print("\n=== NAMED BY LLMs, BY BUCKET ===")
    for b in ["migrate", "compare", "vertical", "cost", "hire"]:
        if llmd[b]:
            print(f"  {b:9s}: " + ", ".join(f"{d}({c})" for d, c in llmd[b].most_common(12)))

    json.dump({"serp": serp, "llm": llm_res, "runs": RUNS},
              open(os.path.join(HERE, "data", "ecom_leadgen_serp.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/ecom_leadgen_serp.json")
