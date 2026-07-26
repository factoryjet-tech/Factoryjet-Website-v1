#!/usr/bin/env python3
"""Per-page UK PAA + related-searches + live organic competitors for the Tier-1/2
build. SERP advanced with people_also_ask_click_depth=2 (expands nested PAA).
Writes data/uk_paa_by_page.md + data/uk_paa_by_page.json."""
import os, json, time, base64, urllib.request, urllib.error, re
from collections import OrderedDict

HERE = os.path.dirname(os.path.abspath(__file__))
def load_env():
    for line in open(os.path.join(HERE, ".env")):
        line=line.strip()
        if line and not line.startswith("#") and "=" in line:
            k,v=line.split("=",1); os.environ.setdefault(k.strip(), v.strip())
load_env()
AUTH = base64.b64encode(f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
UK=2826

# page -> list of query strings to pull SERP+PAA for
PAGES = OrderedDict([
    ("/uk/seo",                    ["seo agency uk", "seo services uk", "best seo agency uk", "small business seo uk"]),
    ("/uk/ai-seo",                 ["ai seo agency", "ai seo services", "generative engine optimization", "answer engine optimization"]),
    ("/uk/ecommerce-development",  ["ecommerce development agency uk", "shopify development agency", "ecommerce web design agency", "ecommerce agency uk"]),
    ("/uk/ai-agents",              ["ai automation agency uk", "ai agents for business", "ai automation agency", "ai agent development company"]),
    ("/uk/local-seo",              ["local seo services", "local seo agency uk"]),
    ("/uk/seo-audit",              ["seo audit services", "seo audit uk"]),
    ("blog:agentic-commerce",      ["agentic commerce", "what is agentic commerce"]),
    ("blog:seo-cost-uk",           ["how much does seo cost uk", "seo pricing uk"]),
])

def post(keyword):
    body=[{"language_code":"en","location_code":UK,"keyword":keyword,"depth":20,
           "people_also_ask_click_depth":2}]
    req=urllib.request.Request("https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        data=json.dumps(body).encode(),
        headers={"Authorization":f"Basic {AUTH}","Content-Type":"application/json"})
    try:
        with urllib.request.urlopen(req,timeout=90) as r: return json.loads(r.read().decode())
    except urllib.error.HTTPError as e: return {"_error":f"HTTP {e.code}","_body":e.read().decode()[:300]}
    except Exception as e: return {"_error":str(e)}

def items(resp):
    try: return resp["tasks"][0]["result"][0]["items"] or []
    except (KeyError,TypeError,IndexError): return []

SKIP_PAA = re.compile(r"salary|career|job|course|certification|free download|udemy|reddit", re.I)
out={}
cost=0.0
for page, queries in PAGES.items():
    paa=OrderedDict(); related=OrderedDict(); comps=OrderedDict()
    for q in queries:
        resp=post(q); cost+=resp.get("cost",0) or 0
        if resp.get("_error"):
            print(f"! {page} '{q}': {resp['_error']}"); time.sleep(0.6); continue
        for it in items(resp):
            t=it.get("type")
            if t=="people_also_ask":
                for el in (it.get("items") or []):
                    title=el.get("title")
                    if title and not SKIP_PAA.search(title): paa[title]=True
            elif t=="related_searches":
                for el in (it.get("items") or []):
                    if el: related[el]=True
            elif t=="organic":
                d=it.get("domain")
                if d: comps[d]=comps.get(d,0)+1
        time.sleep(0.6)
    out[page]={"queries":queries,
               "paa":list(paa.keys()),
               "related":list(related.keys())[:20],
               "top_competitors":[d for d,_ in sorted(comps.items(),key=lambda x:-x[1])[:12]]}

with open(os.path.join(HERE,"data","uk_paa_by_page.json"),"w") as f: json.dump(out,f,indent=2)
with open(os.path.join(HERE,"data","uk_paa_by_page.md"),"w") as f:
    for page,d in out.items():
        f.write(f"\n\n## {page}\nqueries: {', '.join(d['queries'])}\n")
        f.write(f"\n### People Also Ask ({len(d['paa'])})\n")
        for q in d["paa"]: f.write(f"- {q}\n")
        f.write(f"\n### Related searches\n")
        for r in d["related"]: f.write(f"- {r}\n")
        f.write(f"\n### Top organic competitors\n{', '.join(d['top_competitors'])}\n")
print(f"DONE pages={len(out)} approx_cost=${cost:.3f} -> data/uk_paa_by_page.md")
