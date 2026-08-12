#!/usr/bin/env python3
"""
Build a full inventory of what FactoryJet already publishes, then diff the proposed
US targets against it so we never ship a duplicate.

Sources of truth on disk:
  - src/lib/legacy-pages/Blog/posts/*.tsx        file-per-post blog articles
  - src/lib/legacy-pages/Blog/posts.tsx          posts defined INLINE (the known trap)
  - content/blog/*.mdx                           mdx posts
  - src/app/services/*/page.tsx                  service money pages
  - src/app/<city>/<service>/page.tsx            US city pages
  - other root commerce pages

Prints: inventory counts, every published title, and a keyword-overlap report for a
candidate list passed on stdin (one keyword per line).
"""
import os, re, sys, json, csv, glob
from collections import defaultdict

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
STOP = set("a an the and or for of to in on with your you best top 2026 2025 how what why "
           "is are do does can will guide vs versus near me services service".split())


def toks(s):
    return {w for w in re.findall(r"[a-z]+", (s or "").lower()) if w not in STOP and len(w) > 2}


def read(p):
    try:
        with open(p, encoding="utf-8", errors="ignore") as f:
            return f.read()
    except OSError:
        return ""


def grab(txt, *keys):
    for k in keys:
        m = re.search(rf"{k}\s*:\s*[\"'`]([^\"'`]{{4,180}})", txt)
        if m:
            return m.group(1)
    return ""


def collect():
    items = []

    # 1. file-per-post blog articles
    for p in sorted(glob.glob(os.path.join(ROOT, "src/lib/legacy-pages/Blog/posts/*.ts*"))):
        slug = os.path.basename(p).rsplit(".", 1)[0]
        t = read(p)
        items.append({
            "kind": "blog", "slug": slug, "url": f"/blog/{slug}",
            "title": grab(t, "title", "h1", "metaTitle") or slug.replace("-", " "),
            "src": os.path.relpath(p, ROOT),
        })

    # 2. posts defined inline in posts.tsx
    t = read(os.path.join(ROOT, "src/lib/legacy-pages/Blog/posts.tsx"))
    known = {i["slug"] for i in items}
    for m in re.finditer(r"slug\s*:\s*[\"'`]([a-z0-9\-]+)[\"'`]", t):
        s = m.group(1)
        if s in known:
            continue
        seg = t[m.end():m.end() + 900]
        items.append({
            "kind": "blog-inline", "slug": s, "url": f"/blog/{s}",
            "title": grab(seg, "title") or s.replace("-", " "),
            "src": "src/lib/legacy-pages/Blog/posts.tsx",
        })
        known.add(s)

    # 3. mdx
    for p in sorted(glob.glob(os.path.join(ROOT, "content/blog/*.mdx"))):
        s = os.path.basename(p).rsplit(".", 1)[0]
        if s in known:
            continue
        t = read(p)
        items.append({
            "kind": "blog-mdx", "slug": s, "url": f"/blog/{s}",
            "title": grab(t, "title") or s.replace("-", " "), "src": os.path.relpath(p, ROOT),
        })
        known.add(s)

    # 4. app router pages
    for p in sorted(glob.glob(os.path.join(ROOT, "src/app/**/page.tsx"), recursive=True)):
        rel = os.path.relpath(p, os.path.join(ROOT, "src/app"))
        url = "/" + os.path.dirname(rel).replace(os.sep, "/")
        if url == "/.":
            url = "/"
        if "[" in url or url.startswith(("/dev", "/sitemap")):
            continue
        t = read(p)
        seg = url.strip("/").split("/")
        kind = ("service" if seg and seg[0] == "services"
                else "geo-uk" if seg and seg[0] == "uk"
                else "geo-other" if seg and seg[0] in ("uae", "au", "in")
                else "city" if len(seg) == 2 else "root")
        items.append({
            "kind": kind, "slug": url.strip("/") or "home", "url": url,
            "title": grab(t, "title", "metaTitle", "h1") or url, "src": os.path.relpath(p, ROOT),
        })
    return items


def main():
    items = collect()
    counts = defaultdict(int)
    for i in items:
        counts[i["kind"]] += 1
    print("=== PUBLISHED INVENTORY ===")
    for k, v in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"  {k:12s} {v:4d}")
    print(f"  {'TOTAL':12s} {len(items):4d}\n")

    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "us4_inventory.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["kind", "slug", "url", "title", "src"])
        w.writeheader(); w.writerows(items)
    print(f"written -> {out}\n")

    # diff candidates against inventory
    cands = [l.strip() for l in sys.stdin.read().splitlines() if l.strip()] if not sys.stdin.isatty() else []
    if not cands:
        return
    idx = [(i, toks(i["slug"]) | toks(i["title"])) for i in items]
    print("=== DUPLICATION CHECK ===")
    for c in cands:
        ct = toks(c)
        hits = []
        for i, it in idx:
            if not ct:
                continue
            ov = len(ct & it) / len(ct)
            if ov >= 0.6:
                hits.append((round(ov, 2), i["url"], i["kind"]))
        hits.sort(reverse=True)
        if hits:
            print(f"\n  ⚠ '{c}'")
            for ov, u, k in hits[:4]:
                print(f"      {int(ov*100):3d}% overlap  {u}  [{k}]")
        else:
            print(f"  ✓ '{c}' — no existing page")


if __name__ == "__main__":
    main()
