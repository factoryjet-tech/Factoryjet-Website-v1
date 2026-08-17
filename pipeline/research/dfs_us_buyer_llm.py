#!/usr/bin/env python3
"""
WHO OWNS THE US BUYER ANSWER — LLM citation audit by ROLE (2026-08-17).

WHY THIS EXISTS
GA4 says AI assistants are FactoryJet's best-converting channel (14.3% per
session vs 8.5% organic). GSC says organic clicks are capped around 421/mo. So
the highest-leverage US surface is not Google, it is the answer an assistant
gives when a US buyer asks who to hire.

Prior LLM pulls (dfs_agent_geo_llm.py) used generic prompts. Bhavesh asked
specifically for how OWNERS, IT HEADS, OPS LEADS and MARKETING LEADS phrase it,
so every prompt below is written in a role's own voice with US framing, not as
a keyword.

MEASURED PER PROMPT
  1. Is factoryjet named at all?
  2. Which domains ARE named, and are they agencies (winnable) or tools/SaaS
     and directories (locked)? A tool-locked answer cannot be won with a
     service page, so those service lines should not be built as citation plays.

Writes data/us_buyer_llm.json
Usage: set -a; . ./.env; set +a; python3 dfs_us_buyer_llm.py
"""
import os, json, base64, urllib.request, urllib.error, re, sys
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

LLMS = [
    ("chat_gpt",   "gpt-5.5"),
    ("claude",     "claude-sonnet-4-5"),
    ("gemini",     "gemini-2.5-pro"),
    ("perplexity", "sonar-pro"),
]

# (service_line, role, prompt) — written the way that role actually types it
PROMPTS = [
    ("AI Agent Dev", "owner",
     "I run a 40-person company in the US and want to automate our customer support "
     "with an AI agent. Which companies can build this for me? Give names and websites."),
    ("AI Agent Dev", "IT head",
     "We are a mid-market US business evaluating vendors to build custom AI agents that "
     "integrate with our CRM and ERP. Who are the best development partners? List websites."),
    ("AI Agent Dev", "ops lead",
     "Which agencies build AI voice agents for customer service in the United States? "
     "Give me a ranked list with their websites."),
    ("AI Agent Dev", "owner/cost",
     "How much does it cost to hire someone to build a custom AI agent for my small "
     "business, and which companies should I talk to?"),
    ("AI Automation", "ops lead",
     "We want to automate manual back-office workflows using AI. Which US agencies "
     "actually implement AI workflow automation for mid-sized companies?"),
    ("GEO / AEO", "marketing lead",
     "Our brand never shows up when people ask ChatGPT for recommendations in our "
     "category. Which agencies fix this? I am looking for generative engine "
     "optimization or AI visibility specialists in the US."),
    ("GEO / AEO", "marketing lead",
     "Who are the best answer engine optimization agencies in the United States? "
     "Give names and websites."),
    ("AI SEO", "marketing lead",
     "Which US agencies offer AI SEO services that get you cited in AI search results?"),
    ("B2B Ecommerce", "owner",
     "Which agencies build B2B ecommerce websites for US manufacturers and "
     "distributors? Ranked list with websites."),
    ("Agentic Commerce", "ecom manager",
     "We sell on Shopify and want our catalog discoverable to AI shopping agents. "
     "Which agencies do agentic commerce readiness work?"),
    ("Ecommerce Dev", "ecom manager",
     "Best Shopify Plus development agencies in the United States? Give websites."),
    ("Web Design", "owner",
     "Best web design companies in the US for a small business that needs a new "
     "website quickly? Give names and websites."),
    ("Web Design", "marketing lead",
     "Which agencies do B2B website redesign for SaaS and technology companies "
     "in the United States?"),
    ("Marketplace", "ecom manager",
     "Which agencies manage Amazon and TikTok Shop for US consumer brands?"),
    ("Vertical agents", "practice manager",
     "Which companies build AI voice agents for healthcare practices in the US?"),
]

DOMAIN_RE = re.compile(r"\b([a-z0-9][a-z0-9\-]{1,40}\.(?:com|io|ai|co|net|org|dev))\b")
NOISE = {
    "example.com", "google.com", "youtube.com", "wikipedia.org", "linkedin.com",
    "reddit.com", "medium.com", "github.com", "twitter.com", "facebook.com",
    "openai.com", "anthropic.com", "gartner.com", "g2.com", "capterra.com",
    "clutch.co", "upwork.com", "forbes.com", "techcrunch.com", "x.com",
}
# domains that are products/platforms, not agencies you compete with for a lead
TOOLS = {
    "salesforce.com", "hubspot.com", "zapier.com", "make.com", "n8n.io",
    "shopify.com", "bigcommerce.com", "adobe.com", "magento.com", "sap.com",
    "semrush.com", "ahrefs.com", "moz.com", "profound.ai", "peec.ai",
    "writesonic.com", "surferseo.com", "otterly.ai", "athenahq.ai",
    "microsoft.com", "aws.amazon.com", "amazon.com", "retool.com",
    "voiceflow.com", "vapi.ai", "retellai.com", "bland.ai", "elevenlabs.io",
    "intercom.com", "zendesk.com", "sierra.ai", "decagon.ai", "crescendo.ai",
}


def post(path, body, timeout=300):
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
    line, role, prompt, llm, model = job
    body = [{"user_prompt": prompt, "model_name": model,
             "web_search": True, "max_output_tokens": 1600}]
    r = post(f"ai_optimization/{llm}/llm_responses/live", body)
    out = {"line": line, "role": role, "prompt": prompt, "llm": llm,
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
    seen = []
    for dm in DOMAIN_RE.findall(low):
        if dm in NOISE or dm in seen:
            continue
        seen.append(dm)
    out["domains"] = seen[:25]
    out["text_len"] = len(text)
    return out


def main():
    jobs = [(l, ro, p, llm, m) for l, ro, p in PROMPTS for llm, m in LLMS]
    print(f"=== {len(jobs)} LLM calls ({len(PROMPTS)} prompts x {len(LLMS)} assistants) ===",
          file=sys.stderr)
    results, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=8) as ex:
        for res in ex.map(run, jobs):
            results.append(res); cost += res.get("cost", 0) or 0
            flag = "MENTIONED" if res["mentioned"] else ("ERR" if res["error"] else "-")
            print(f"  {res['line']:<18}{res['role']:<17}{res['llm']:<12}{flag}", file=sys.stderr)

    os.makedirs(os.path.join(HERE, "data"), exist_ok=True)
    with open(os.path.join(HERE, "data", "us_buyer_llm.json"), "w") as fh:
        json.dump(results, fh, indent=1)

    ok = [r for r in results if not r["error"]]
    print("\n" + "=" * 96)
    print(f"FACTORYJET MENTIONED: {sum(1 for r in ok if r['mentioned'])} / {len(ok)} answers"
          f"   (API cost ${cost:.2f})")
    print("=" * 96)

    print("\nPER SERVICE LINE — who owns the answer")
    print("-" * 96)
    byline = defaultdict(list)
    for r in ok:
        byline[r["line"]].append(r)
    for line, rs in byline.items():
        doms = Counter()
        for r in rs:
            for d in r["domains"]:
                doms[d] += 1
        tool_hits = sum(c for d, c in doms.items() if d in TOOLS)
        all_hits = sum(doms.values()) or 1
        share = tool_hits / all_hits * 100
        verdict = "TOOL-LOCKED (do not build a service page for citation)" if share >= 55 \
                  else "AGENCY-WINNABLE"
        print(f"\n{line}  ({sum(1 for r in rs if r['mentioned'])}/{len(rs)} mention us)  "
              f"tool-share {share:.0f}%  -> {verdict}")
        for d, c in doms.most_common(8):
            kind = "tool" if d in TOOLS else "agency"
            print(f"    {d:<34}{c:>3} answers   {kind}")

    print("\n" + "=" * 96)
    print("PER ASSISTANT")
    print("-" * 96)
    byllm = defaultdict(list)
    for r in ok:
        byllm[r["llm"]].append(r)
    for llm, rs in byllm.items():
        print(f"  {llm:<14}{sum(1 for r in rs if r['mentioned'])}/{len(rs)} mention factoryjet")


if __name__ == "__main__":
    main()
