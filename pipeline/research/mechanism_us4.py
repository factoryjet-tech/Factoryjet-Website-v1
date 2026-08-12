#!/usr/bin/env python3
"""
Page anatomy did NOT separate AI-cited pages from Google-ranked ones. So test the other
candidate mechanism: AI engines name the vendors that appear inside the third-party
LISTICLES and roundups ranking for the query -- i.e. citation is earned off-site, in other
people's "top N companies" posts, not on your own service page.

Method: for each AI-category query, fetch the listicle/blog/directory URLs ranking top 20,
extract every vendor brand mentioned in them, then measure how often the AI-cited vendors
appear in that corpus versus vendors that rank but are never cited.

If the hypothesis holds, AI-cited domains should show much higher third-party mention counts.
"""
import csv, os, re, gzip, urllib.request
from collections import defaultdict, Counter

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA, "Accept": "text/html", "Accept-Encoding": "gzip",
        "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read()
        if r.headers.get("Content-Encoding") == "gzip":
            raw = gzip.decompress(raw)
        return raw.decode("utf-8", errors="ignore")


def text_of(html):
    body = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", body)
    return re.sub(r"\s+", " ", re.sub(r"&[a-z]+;", " ", t))


def main():
    aio, rank = defaultdict(set), defaultdict(list)
    for r in csv.DictReader(open(os.path.join(DATA, "us4_serp.csv"))):
        for d in (r["aio_sources"] or "").split("|"):
            if d:
                aio[r["keyword"]].add(d)
    for r in csv.DictReader(open(os.path.join(DATA, "us4_serp_urls.csv"))):
        rank[r["keyword"]].append(r)

    QUERIES = [k for k, v in aio.items() if v]
    SKIP = {"youtube.com", "reddit.com", "linkedin.com", "medium.com", "fiverr.com",
            "wikipedia.org", "x.com", "google.com", "facebook.com", "twitter.com"}

    print("Building third-party corpus (listicles/blogs/directories ranking for each query)\n")
    corpus = defaultdict(str)
    for kw in QUERIES:
        srcs = [r for r in rank[kw]
                if r["page_type"] in ("listicle", "blog", "directory")
                and int(r["rank"] or 99) <= 20]
        got = 0
        for r in srcs[:7]:
            try:
                corpus[kw] += " " + text_of(fetch(r["url"]))
                got += 1
            except Exception:
                pass
        print(f"  {kw[:44]:46s} {got}/{len(srcs[:7])} roundup pages fetched "
              f"({len(corpus[kw]):,} chars)")

    print("\n=== HOW OFTEN IS EACH VENDOR NAMED IN THIRD-PARTY ROUNDUPS? ===")
    rows = []
    for kw in QUERIES:
        blob = corpus[kw].lower()
        if len(blob) < 3000:
            continue
        top10 = {r["domain"] for r in rank[kw] if int(r["rank"] or 99) <= 10}
        cited = {d for d in aio[kw] if d not in SKIP}
        notcited = {d for d in top10 if d not in aio[kw] and d not in SKIP}

        def mentions(dom):
            brand = dom.split(".")[0]
            if len(brand) < 4:
                return 0
            return blob.count(brand)

        cm = [(d, mentions(d)) for d in cited]
        nm = [(d, mentions(d)) for d in notcited]
        for d, n in cm:
            rows.append({"keyword": kw, "domain": d, "group": "AI-cited", "mentions": n})
        for d, n in nm:
            rows.append({"keyword": kw, "domain": d, "group": "ranks-not-cited", "mentions": n})
        cv = [n for _, n in cm] or [0]
        nv = [n for _, n in nm] or [0]
        print(f"\n  {kw.upper()}")
        print(f"     AI-cited        n={len(cm):2d}  median mentions={sorted(cv)[len(cv)//2]:3d}  "
              f"{', '.join(f'{d.split(chr(46))[0]}:{n}' for d, n in sorted(cm, key=lambda x:-x[1])[:6])}")
        print(f"     ranks-not-cited n={len(nm):2d}  median mentions={sorted(nv)[len(nv)//2]:3d}  "
              f"{', '.join(f'{d.split(chr(46))[0]}:{n}' for d, n in sorted(nm, key=lambda x:-x[1])[:6])}")

    out = os.path.join(DATA, "us4_mechanism.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "domain", "group", "mentions"])
        w.writeheader(); w.writerows(rows)

    print("\n\n=== OVERALL ===")
    for g in ("AI-cited", "ranks-not-cited"):
        v = sorted(r["mentions"] for r in rows if r["group"] == g)
        if not v:
            continue
        zero = sum(1 for x in v if x == 0)
        print(f"  {g:18s} n={len(v):3d}  median={v[len(v)//2]:3d}  mean={sum(v)/len(v):6.1f}  "
              f"never-mentioned={zero}/{len(v)} ({100*zero//len(v)}%)")
    print(f"\nwritten -> {out}")


if __name__ == "__main__":
    main()
