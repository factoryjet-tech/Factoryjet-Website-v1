#!/usr/bin/env python3
"""
PAA expansion for the 3 US builds (2026-07-26).
The first pass returned only 28 People-Also-Ask questions, which is short of the
20+ real questions each page needs. Google returns a different PAA set per query,
so the reliable way to harvest more is to run many query variants per cluster.

Appends to data/build3_paa.csv (deduped) and rewrites data/build3_paa_full.csv.
"""
import os, sys, json, time, base64, urllib.request, urllib.error, csv, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
def load_env():
    with open(os.path.join(HERE, ".env")) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1); os.environ.setdefault(k.strip(), v.strip())
load_env()
AUTH = base64.b64encode(f'{os.environ["DATAFORSEO_LOGIN"]}:{os.environ["DATAFORSEO_PASSWORD"]}'.encode()).decode()
BASE = "https://api.dataforseo.com/v3"
RAW = os.path.join(HERE, "data", "raw"); DATA = os.path.join(HERE, "data")
US, LANG = 2840, "en"

TERMS = [
  # ---------- AI SEO (needs the most) ----------
  ("ai-seo", "what is ai seo"),
  ("ai-seo", "how to rank on chatgpt"),
  ("ai-seo", "how to appear in google ai overviews"),
  ("ai-seo", "does ai seo work"),
  ("ai-seo", "ai seo vs traditional seo"),
  ("ai-seo", "how much does ai seo cost"),
  ("ai-seo", "what is generative engine optimization"),
  ("ai-seo", "what is answer engine optimization"),
  ("ai-seo", "how to optimize for ai search"),
  ("ai-seo", "will ai replace seo"),
  ("ai-seo", "how do ai search engines choose sources"),
  ("ai-seo", "how to get cited by perplexity"),
  ("ai-seo", "is geo the new seo"),
  ("ai-seo", "how to measure ai search visibility"),
  # ---------- Roofing ----------
  ("roofing", "how to get roofing leads"),
  ("roofing", "how much does roofing seo cost"),
  ("roofing", "is seo worth it for roofers"),
  ("roofing", "how do roofing companies get customers"),
  ("roofing", "best marketing for roofing company"),
  ("roofing", "how long does roofing seo take"),
  ("roofing", "roofing google ads vs seo"),
  ("roofing", "how to rank a roofing website"),
  ("roofing", "local seo for roofers"),
  # ---------- Cities / local SEO ----------
  ("city-austin", "how much does seo cost in austin"),
  ("city-austin", "best seo company in austin"),
  ("city-austin", "how to choose an seo agency"),
  ("city-huntington-beach", "seo company huntington beach"),
  ("city-sioux-falls", "sioux falls seo company"),
  ("city", "how much does local seo cost"),
  ("city", "is seo worth it for small business"),
  ("city", "how long does local seo take"),
  ("city", "what does an seo company do"),
  ("city", "how to rank in google maps"),
  ("city", "do i need an seo agency"),
]

def post(path, body):
    req = urllib.request.Request(BASE+path, data=json.dumps([body]).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type":"application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r: return json.loads(r.read().decode())
    except urllib.error.HTTPError as e: return {"_error": f"HTTP {e.code}"}
    except Exception as e: return {"_error": str(e)}
def slug(s): return re.sub(r"[^a-z0-9]+","-",s.lower()).strip("-")[:48]
def items_of(r):
    try: return r["tasks"][0]["result"][0]["items"] or []
    except (KeyError,TypeError,IndexError): return []

# load existing
rows=[]
p=os.path.join(DATA,"build3_paa.csv")
if os.path.exists(p):
    rows=[r for r in csv.DictReader(open(p))]
seen={(r["cluster"], r["question"].strip().lower()) for r in rows}

cost=0.0
for cluster, term in TERMS:
    r = post("/serp/google/organic/live/advanced",
             {"language_code":LANG,"location_code":US,"keyword":term,"depth":20})
    cost += (r.get("cost") or 0)
    with open(os.path.join(RAW, f"b3paa__{slug(term)}.json"),"w") as f: json.dump(r,f)
    if r.get("_error"):
        print(f" ! {term}: {r['_error']}", file=sys.stderr); time.sleep(.5); continue
    n=0
    for it in items_of(r):
        if it.get("type")!="people_also_ask": continue
        for el in (it.get("items") or []):
            q=(el.get("title") or "").strip()
            if not q: continue
            k=(cluster,q.lower())
            if k in seen: continue
            ans=""
            for e in (el.get("expanded_element") or []):
                if e.get("description"): ans=e["description"][:700]; break
            seen.add(k); n+=1
            rows.append({"cluster":cluster,"seed_term":term,"question":q,"serp_answer":ans})
    print(f"  +{n:>2}  {term}")
    time.sleep(.5)

with open(p,"w",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["cluster","seed_term","question","serp_answer"])
    w.writeheader(); w.writerows(rows)

agg=defaultdict(int)
for r in rows:
    c=r["cluster"]
    agg["ai-seo" if c=="ai-seo" else ("roofing" if c=="roofing" else "city")]+=1
print(f"\n=== DONE cost=${cost:.3f}  total PAA={len(rows)} ===")
for k,v in agg.items(): print(f"   {k}: {v}")
