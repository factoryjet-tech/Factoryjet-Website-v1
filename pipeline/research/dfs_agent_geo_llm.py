#!/usr/bin/env python3
"""WHO OWNS THE ANSWER — LLM citation check for AI agent + GEO/AEO buyer prompts (2026-08-06).

Companion to dfs_agent_geo.py (demand). Demand tells us what people type into
Google. This tells us what ChatGPT/Claude/Gemini/Perplexity say back when someone
asks a buying question, which is the surface we can actually win on at 53
referring domains (see docs/AI-SEO-RULEBOOK.md 6b).

Two things measured per prompt:
  1. Is factoryjet.com named at all?
  2. WHICH domains are named — agencies (winnable) or tools/SaaS (locked)?

The tool-vs-agency split is the decision-relevant output. The replatforming pull
found tool-locked AI Overviews (LitExtension, Matrixify) where no agency page
could ever place. If the agent and GEO answers are tool-locked the same way,
those pages should not be built as citation plays either.

Writes data/agent_geo_llm.json
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

PROMPTS = [
    # --- AI agent development, buy-side ---
    ("agent", "Which companies build custom AI agents for mid-sized businesses? "
              "Give a ranked list with their websites."),
    ("agent", "I run a manufacturing company. Which agencies build AI agents that automate "
              "RFQ handling and quoting? List specific companies with websites."),
    ("agent", "Which agencies build AI customer support agents that integrate with an existing "
              "helpdesk and ERP? Ranked list with websites."),
    ("agent", "Who are the best AI automation agencies in the USA for small and mid-sized "
              "businesses? Give a ranked list with websites."),
    # --- GEO / AEO / AI SEO, buy-side ---
    ("geo", "Which agencies offer generative engine optimization (GEO) services? "
            "Give a ranked list with their websites."),
    ("geo", "Which companies do answer engine optimization (AEO) so my brand gets cited by "
            "ChatGPT and Perplexity? Ranked list with websites."),
    ("geo", "Who are the best AI SEO agencies right now? Give a ranked list with websites."),
    ("geo", "My ecommerce brand is invisible in ChatGPT and AI Overviews. Which agencies fix "
            "that? List specific companies with websites."),
    # --- commerce control prompts (one known-cited, one gap) ---
    ("commerce", "Which companies build B2B ecommerce portals with ERP integration? "
                 "Give a ranked list with their websites."),
    ("commerce", "Which agencies are the best Shopify Plus partners for a wholesale brand? "
                 "Ranked list with websites."),
]

LLMS = [
    ("chat_gpt",   "gpt-5.5"),
    ("claude",     "claude-sonnet-4-5"),
    ("gemini",     "gemini-2.5-pro"),
    ("perplexity", "sonar-pro"),
]

DOMAIN_RE = re.compile(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|io|ai|co|net|org|co\.uk|in|dev))\b")

# domains that are never a competing agency
NOISE = {"openai.com", "anthropic.com", "google.com", "wikipedia.org", "reddit.com",
         "youtube.com", "linkedin.com", "github.com", "medium.com", "forbes.com",
         "gartner.com", "g2.com", "clutch.co", "shopify.com", "microsoft.com",
         "salesforce.com", "hubspot.com", "example.com", "perplexity.ai"}


def post(path, body, timeout=240):
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


def run(job):
    bucket, prompt, llm, model = job
    body = [{"user_prompt": prompt, "model_name": model,
             "web_search": True, "max_output_tokens": 1600}]
    r = post(f"ai_optimization/{llm}/llm_responses/live", body)
    out = {"bucket": bucket, "prompt": prompt, "llm": llm,
           "cost": r.get("cost", 0) or 0, "mentioned": False, "domains": [], "error": None}
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        out["error"] = json.dumps(r)[:250]
        return out

    text = ""
    for it in items:
        for sec in (it.get("sections") or []):
            text += (sec.get("text") or "") + "\n"
            for ln in (sec.get("links") or []):
                text += " " + (ln.get("domain") or ln.get("url") or "")
    low = text.lower()
    out["mentioned"] = BRAND in low
    doms = [d for d in DOMAIN_RE.findall(low) if d not in NOISE]
    seen = []
    for d in doms:
        if d not in seen:
            seen.append(d)
    out["domains"] = seen[:20]
    out["text_len"] = len(text)
    return out


if __name__ == "__main__":
    jobs = [(b, p, llm, m) for b, p in PROMPTS for llm, m in LLMS]
    print(f"=== {len(jobs)} LLM calls ===")
    results, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=8) as ex:
        for out in ex.map(run, jobs):
            cost += out["cost"]
            results.append(out)
            flag = "HIT" if out["mentioned"] else ("ERR" if out["error"] else "   ")
            print(f"{flag} {out['llm']:<11} {out['bucket']:<9} {out['prompt'][:52]}")

    json.dump({"cost_usd": round(cost, 4), "results": results},
              open(os.path.join(HERE, "data", "agent_geo_llm.json"), "w"), indent=2)

    print(f"\nspend ${cost:.3f}")
    by_bucket = defaultdict(Counter)
    hits = defaultdict(lambda: [0, 0])
    for r in results:
        hits[r["bucket"]][1] += 1
        if r["mentioned"]:
            hits[r["bucket"]][0] += 1
        for d in r["domains"]:
            by_bucket[r["bucket"]][d] += 1

    print("\n=== factoryjet mention rate ===")
    for b, (h, n) in hits.items():
        print(f"{b:<10} {h}/{n}")

    print("\n=== who owns each answer space ===")
    for b, c in by_bucket.items():
        print(f"\n--- {b} ---")
        for d, n in c.most_common(18):
            print(f"{n:>3}x  {d}")
