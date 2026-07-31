#!/usr/bin/env python3
"""Harvest REAL People-Also-Ask questions for the /digital-marketing hub.

PAA comes back inside serp/google/organic/live/advanced as item type
'people_also_ask', each with nested expanded elements that carry the answer
snippet and its source URL. We keep the source so every FAQ we add is traceable.

Dedupes against the 24 questions already on the page.
Writes data/dm_paa.csv
"""
import os, json, base64, urllib.request, urllib.error, csv, re
from concurrent.futures import ThreadPoolExecutor

LOGIN = os.environ["DATAFORSEO_LOGIN"]; PW = os.environ["DATAFORSEO_PASSWORD"]
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
HERE = os.path.dirname(os.path.abspath(__file__))
LOC = 2356

SEEDS = [
    "best digital marketing agency in india",
    "digital marketing agency in india",
    "top 10 digital marketing agency in india",
    "how to choose a digital marketing agency in india",
    "what is a digital marketing agency",
    "digital marketing agency cost in india",
    "best digital marketing agency near me",
    "digital marketing services for small business india",
]


def post(path, body, timeout=180):
    req = urllib.request.Request(f"https://api.dataforseo.com/v3/{path}",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"})
    try:
        return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())
    except urllib.error.HTTPError as e:
        return {"error": e.code, "body": e.read().decode()[:300]}
    except Exception as e:
        return {"error": str(e)}


def pull(seed):
    r = post("serp/google/organic/live/advanced", [{
        "keyword": seed, "location_code": LOC, "language_code": "en",
        "device": "desktop", "os": "windows", "depth": 20}])
    out, cost = [], r.get("cost", 0) or 0
    try:
        items = r["tasks"][0]["result"][0]["items"] or []
    except Exception:
        return out, cost
    for it in items:
        if it.get("type") != "people_also_ask":
            continue
        for q in (it.get("items") or []):
            title = q.get("title")
            if not title:
                continue
            ans, src = "", ""
            for ex in (q.get("expanded_element") or []):
                ans = ex.get("description") or ex.get("text") or ""
                src = ex.get("url") or ""
                if ans:
                    break
            out.append({"seed": seed, "question": title.strip(),
                        "serp_answer": (ans or "").strip()[:600], "source": src})
    return out, cost


if __name__ == "__main__":
    rows, cost = [], 0.0
    with ThreadPoolExecutor(max_workers=4) as ex:
        for r, c in ex.map(pull, SEEDS):
            rows += r; cost += c

    # dedupe
    seen, uniq = set(), []
    for r in rows:
        k = re.sub(r"[^a-z0-9 ]", "", r["question"].lower()).strip()
        if k in seen:
            continue
        seen.add(k); uniq.append(r)

    # what is already on the page?
    page = open(os.path.join(HERE, "..", "..", "src", "app", "digital-marketing", "page.tsx")).read()
    existing = set(re.sub(r"[^a-z0-9 ]", "", q.lower()).strip()
                   for q in re.findall(r"question:\s*'([^']+)'", page))
    for r in uniq:
        k = re.sub(r"[^a-z0-9 ]", "", r["question"].lower()).strip()
        r["is_new"] = not any(k == e or k in e or e in k for e in existing)

    out = os.path.join(HERE, "data", "dm_paa.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["seed", "question", "serp_answer", "source", "is_new"])
        w.writeheader(); w.writerows(uniq)

    new = [r for r in uniq if r["is_new"]]
    print(f"cost=${cost:.3f}  {len(uniq)} unique PAA questions, {len(new)} NOT already on the page\n")
    print("=== NEW PAA QUESTIONS (real, from live Google India SERPs) ===")
    for r in new:
        has = "ans" if r["serp_answer"] else "   "
        print(f"  [{has}] {r['question']}")
    print(f"\ncsv={out}")
