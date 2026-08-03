#!/usr/bin/env python3
"""AI CITATION BASELINE for the 9 commerce pages (2026-08-03).

Taken the day the replatforming pages went live, so the 7 new ones are expected
to score ~0: they have not been crawled, indexed, or seen by any retrieval layer
yet. The point is a clean zero-point for the re-test in ~2 weeks, not a verdict.

/b2b-ecommerce is the control. It scored 6/9 on ChatGPT for the ERP prompt on
2026-08-02 using the identical prompt and model, so any movement there is signal
about the deepening work rather than about the new pages.

Writes data/citation_baseline_2026-08-03.json
"""
import os, json, base64, urllib.request, re
from collections import defaultdict
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
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
BRAND = "factoryjet"
RUNS = 3

# One buyer-phrased prompt per shipped page.
PROMPTS = [
    ("/b2b-ecommerce  [CONTROL, was 6/9]",
     "Which companies build B2B ecommerce portals with ERP integration? Name specific agencies and their websites."),
    ("/ecommerce-for-manufacturers",
     "Which agencies build ecommerce and dealer portals for manufacturers and distributors? Name specific companies and websites."),
    ("/replatforming",
     "Which agencies handle ecommerce replatforming and platform migration? Name specific companies and their websites."),
    ("/replatforming/magento-to-shopify",
     "Which agencies handle Magento to Shopify Plus migration? Name specific companies and their websites."),
    ("/replatforming/woocommerce-to-shopify",
     "Which agencies do WooCommerce to Shopify migrations, including subscriptions? Name specific companies and websites."),
    ("/replatforming/squarespace-to-shopify",
     "Who can migrate a Squarespace store to Shopify including order history? Name specific agencies and websites."),
    ("/replatforming/wix-to-shopify",
     "Which agencies migrate Wix stores to Shopify? Name specific companies and their websites."),
    ("/replatforming/wordpress-to-shopify",
     "Which agencies migrate a WordPress site and blog archive to Shopify? Name specific companies and websites."),
    ("/replatforming/salesforce-commerce-cloud-to-shopify-plus",
     "Which agencies handle Salesforce Commerce Cloud to Shopify Plus replatforming? Name specific companies and websites."),
]

LLMS = [("chat_gpt", "gpt-5.5"), ("perplexity", "sonar-pro")]
NOISE = {"linkedin.com", "reddit.com", "youtube.com", "quora.com", "clutch.co",
         "designrush.com", "goodfirms.co", "sortlist.com", "medium.com", "x.com"}


def post(path, body, timeout=240):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except Exception as e:
        return {"error": str(e)}


def run(args):
    page, prompt, llm, model, i = args
    r = post(f"ai_optimization/{llm}/llm_responses/live", [{
        "user_prompt": prompt, "model_name": model,
        "web_search": True, "max_output_tokens": 1600}])
    o = {"page": page, "llm": llm, "run": i, "cost": r.get("cost", 0),
         "mentioned": False, "domains": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        o["error"] = json.dumps(r)[:160]; return o
    text = ""
    for it in items:
        for sec in (it.get("sections") or []):
            text += (sec.get("text") or "") + "\n"
            for ln in (sec.get("links") or []):
                d = (ln.get("domain") or "").lower()
                text += d + "\n"
                if d and d not in NOISE:
                    o["domains"].append(d)
    for d in re.findall(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|io|net|co|ai|co\.uk))\b", text.lower()):
        if d not in NOISE:
            o["domains"].append(d)
    o["mentioned"] = BRAND in text.lower()
    return o


if __name__ == "__main__":
    jobs = [(p, q, llm, m, i) for p, q in PROMPTS for llm, m in LLMS for i in range(RUNS)]
    print(f"=== {len(jobs)} LLM calls ({RUNS} runs x {len(LLMS)} models x {len(PROMPTS)} pages) ===")
    res, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=10) as ex:
        for o in ex.map(run, jobs):
            res.append(o); cost += o["cost"] or 0

    agg = defaultdict(lambda: defaultdict(list))
    for o in res:
        agg[o["page"]][o["llm"]].append(o)

    print(f"\n{'page':56s} {'chatgpt':>9s} {'perplexity':>11s}")
    for page, _ in PROMPTS:
        parts = []
        for llm, _m in LLMS:
            rs = [x for x in agg[page][llm] if not x["error"]]
            hit = sum(1 for x in rs if x["mentioned"])
            parts.append(f"{hit}/{len(rs)}")
        print(f"{page:56s} {parts[0]:>9s} {parts[1]:>11s}")

    from collections import Counter
    who = Counter()
    for o in res:
        for d in set(o["domains"]):
            if BRAND not in d:
                who[d] += 1
    print("\n=== who IS being cited across these prompts ===")
    for d, c in who.most_common(20):
        print(f"  {c:>3}  {d}")

    json.dump({"date": "2026-08-03", "runs": RUNS, "results": res,
               "cited": who.most_common(60)},
              open(os.path.join(HERE, "data", "citation_baseline_2026-08-03.json"), "w"), indent=1)
    print(f"\ncost=${cost:.3f}  -> data/citation_baseline_2026-08-03.json")
