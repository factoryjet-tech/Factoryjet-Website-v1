#!/usr/bin/env python3
"""
SERP + PAA + AI Overview enrichment for the blog-topic shortlist (2026-08-20).

Reads data/blog_topic_candidates.json, picks a SHAPE-DIVERSE shortlist per
market x service line (not just top-by-volume, which returns 12 flavours of the
same cost query), then runs one SERP call per keyword to capture in one hit:
  - whether an AI Overview fires (item_types contains ai_overview)
  - the People Also Ask questions (the actual blog outline)
  - who owns the top 5 organic results (the incumbent we would have to beat)
  - whether factoryjet.com already appears

Writes data/blog_serp_enriched.json
"""
import os, json, base64, urllib.request, urllib.error, sys
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))

def load_env():
    p = os.path.join(HERE, ".env")
    for line in open(p):
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

load_env()
AUTH = base64.b64encode(f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()

LOC = {"US": 2840, "UK": 2826, "India": 2356, "UAE": 2784, "Australia": 2036}
PER_SHAPE = 3          # per shape bucket per market x line
SHAPES = ["QUESTION", "COST", "COMPARISON", "GUIDE"]

def post(path, body, timeout=300):
    req = urllib.request.Request(
        f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": "Basic " + AUTH, "Content-Type": "application/json"},
        method="POST")
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"_err": f"HTTP {e.code}: {e.read().decode()[:200]}"}
    except Exception as e:
        return {"_err": str(e)}

def serp(kw, mkt):
    body = [{"keyword": kw, "location_code": LOC[mkt], "language_code": "en",
             "device": "desktop", "depth": 20,
             "people_also_ask_click_depth": 1}]
    r = post("serp/google/organic/live/advanced", body)
    if "_err" in r or r.get("status_code") != 20000:
        return {"_err": r.get("_err") or r.get("status_message")}
    aio, paa, organic, ours = False, [], [], False
    for task in r.get("tasks") or []:
        for res in task.get("result") or []:
            for it in res.get("items") or []:
                t = it.get("type")
                if t == "ai_overview":
                    aio = True
                elif t == "people_also_ask":
                    for q in it.get("items") or []:
                        if q.get("title"):
                            paa.append(q["title"])
                elif t == "organic":
                    d = it.get("domain")
                    if d:
                        if len(organic) < 5:
                            organic.append(d)
                        if "factoryjet" in d:
                            ours = True
    return {"ai_overview": aio, "paa": paa[:8], "top5": organic, "we_rank": ours}

def main():
    cand = json.load(open(os.path.join(HERE, "data", "blog_topic_candidates.json")))
    jobs = []
    for mkt, lines in cand.items():
        for line, rows in lines.items():
            picked, seen = [], set()
            for shape in SHAPES:
                n = 0
                for r in rows:
                    if n >= PER_SHAPE: break
                    if shape not in r["tags"] or r["keyword"] in seen: continue
                    seen.add(r["keyword"]); picked.append(r); n += 1
            for r in picked:
                jobs.append((mkt, line, r))

    print(f"=== {len(jobs)} SERP calls (shape-diverse shortlist) ===", file=sys.stderr)
    out = defaultdict(lambda: defaultdict(list))
    with ThreadPoolExecutor(max_workers=10) as ex:
        futs = {ex.submit(serp, r["keyword"], mkt): (mkt, line, r) for mkt, line, r in jobs}
        done = 0
        for f in futs:
            mkt, line, r = futs[f]
            try:
                s = f.result()
            except Exception as e:
                s = {"_err": str(e)}
            row = dict(r); row.update(s)
            out[mkt][line].append(row)
            done += 1
            if done % 25 == 0:
                print(f"  {done}/{len(jobs)}", file=sys.stderr)

    p = os.path.join(HERE, "data", "blog_serp_enriched.json")
    json.dump({m: dict(v) for m, v in out.items()}, open(p, "w"), indent=1)
    print(f"wrote {p}", file=sys.stderr)

    # summary: where do AI Overviews fire?
    print(f"\n{'MARKET':<11}{'SERVICE LINE':<38}{'kws':>5}{'AIO fires':>11}{'PAA qs':>8}")
    print("-" * 74)
    for mkt in ["US","UK","India","UAE","Australia"]:
        for line, rows in out.get(mkt, {}).items():
            aio = sum(1 for r in rows if r.get("ai_overview"))
            paa = sum(len(r.get("paa") or []) for r in rows)
            print(f"{mkt:<11}{line:<38}{len(rows):>5}{aio:>11}{paa:>8}")

if __name__ == "__main__":
    main()
