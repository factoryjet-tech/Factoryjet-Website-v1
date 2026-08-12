#!/usr/bin/env python3
"""
Turn the raw us4_keywords.csv universe into a defensible commercial shortlist.

The raw high-KD head is dominated by three kinds of junk that would wreck a content plan:
  1. navigational brand terms   (temu website, character ai, wordle website, snapchat web)
  2. generic one-word concepts  (ai, web, seo, geo, wordpress)
  3. tool/product demand        (ai image generator, website builder, wix, surfer seo)
None of those are "someone wants to hire an agency". This keeps only keywords that carry a
buyer token AND survive a brand/tool blocklist, then bands them by difficulty.

Writes: data/us4_shortlist.csv  and prints the per-service head-on target list.
"""
import csv, re, os, sys, json
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")

# A keyword only counts if it names the transaction, the cost, or the shortlist.
BUYER = re.compile(
    r"\b(agency|agencies|company|companies|firm|firms|consultant|consultants|consulting|"
    r"consultancy|services|service provider|provider|providers|developer|developers|"
    r"development|design|partner|partners|vendor|vendors|studio|studios|specialist|"
    r"specialists|expert|experts|freelancer|freelance|outsourcing|"
    r"cost|costs|pricing|price|prices|rates|quote|hire|hiring|"
    r"best|top|leading|compare|comparison|vs|alternatives|reviews)\b",
    re.I,
)

# Brands, tools and platforms we are not trying to rank against or be confused with.
BLOCK = re.compile(
    r"\b(wix|squarespace|godaddy|weebly|webflow|framer|canva|figma|"
    r"temu|etsy|amazon|walmart|ebay|shein|alibaba|snapchat|tiktok|instagram|facebook|"
    r"character|polybuzz|wordle|sudoku|fanfiction|genius|okcupid|dating|girlfriend|"
    r"chatgpt|gemini|claude|copilot|perplexity|midjourney|"
    r"surfer|semrush|ahrefs|moz|yoast|screaming frog|jasper|"
    r"humanize|humanizer|image generator|photo generator|image editor|video generator|"
    r"logo maker|resume|essay|paraphras|detector|"
    r"webmaster tools|search console|analytics|"
    r"hosting|domain name|website builder|builder|template|theme|plugin|"
    r"government|federal|state of|county|dmv|irs|texas|webfile|"
    r"salary|course|certification|bootcamp|degree|"
    r"stock|crypto|casino|porn|adult)\b",
    re.I,
)

# Must actually be about one of our four service lines.
TOPIC = re.compile(
    r"\b(ecommerce|e-commerce|ecom|online store|shopify|woocommerce|magento|bigcommerce|"
    r"headless|commerce|"
    r"ai agent|ai agents|agentic|ai automation|ai chatbot|chatbot|ai consulting|"
    r"ai development|ai integration|automation|workflow|"
    r"seo|geo|generative engine|answer engine|aeo|llm|ai search|ai visibility|"
    r"web design|web development|website design|website development|webdesign|"
    r"web app|website redesign|wordpress|ux|ui)\b",
    re.I,
)

GENERIC = {"ai", "web", "seo", "geo", "wordpress", "commerce", "ecommerce", "automation",
           "chatbot", "website", "design", "development", "ui", "ux", "llm"}


def band(kd):
    if kd is None:
        return "na"
    if kd <= 14:
        return "easy 0-14"
    if kd <= 29:
        return "mid 15-29"
    if kd <= 49:
        return "hard 30-49"
    if kd <= 69:
        return "v.hard 50-69"
    return "brutal 70+"


def main():
    rows = list(csv.DictReader(open(os.path.join(DATA, "us4_keywords.csv"))))
    keep, seen = [], set()
    for r in rows:
        kw = (r["keyword"] or "").strip().lower()
        if not kw or kw in GENERIC or kw in seen:
            continue
        if len(kw.split()) < 2:
            continue
        if BLOCK.search(kw) or not TOPIC.search(kw) or not BUYER.search(kw):
            continue
        if (r.get("intent") or "") == "navigational":
            continue
        try:
            kd = float(r["kd"])
        except (TypeError, ValueError):
            kd = None
        vol = int(float(r["search_volume"] or 0))
        if vol < 30:
            continue
        seen.add(kw)
        keep.append({
            "keyword": kw, "service": r["service"], "search_volume": vol,
            "kd": int(kd) if kd is not None else "", "band": band(kd),
            "cpc": r["cpc"], "intent": r["intent"],
            "value": round(vol * float(r["cpc"] or 0)),
        })

    keep.sort(key=lambda x: -x["value"])
    out = os.path.join(DATA, "us4_shortlist.csv")
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(keep[0].keys()))
        w.writeheader(); w.writerows(keep)
    print(f"shortlist: {len(keep)} keywords -> {out}\n")

    # summary grid
    grid = defaultdict(lambda: [0, 0])
    for k in keep:
        grid[(k["service"], k["band"])][0] += 1
        grid[(k["service"], k["band"])][1] += k["search_volume"]
    bands = ["easy 0-14", "mid 15-29", "hard 30-49", "v.hard 50-69", "brutal 70+", "na"]
    print(f"{'service':16s}" + "".join(f"{b:>16s}" for b in bands))
    for s in ["ecommerce-dev", "ai-agent-dev", "ai-seo", "web-design-dev"]:
        print(f"{s:16s}" + "".join(
            f"{grid[(s,b)][0]:>6d}/{grid[(s,b)][1]:>8,d}" for b in bands))

    # the head-on list per service
    for s in ["ecommerce-dev", "ai-agent-dev", "ai-seo", "web-design-dev"]:
        hard = [k for k in keep if k["service"] == s and k["band"] in
                ("hard 30-49", "v.hard 50-69", "brutal 70+")]
        hard.sort(key=lambda x: -x["value"])
        print(f"\n===== {s.upper()} - HEAD-ON TARGETS (KD 30+) =====")
        print(f"{'keyword':46s}{'vol':>8s}{'kd':>5s}{'cpc':>9s}{'$value/mo':>11s}")
        for k in hard[:18]:
            print(f"{k['keyword'][:44]:46s}{k['search_volume']:>8,d}{k['kd']:>5}"
                  f"{k['cpc']:>9}{k['value']:>11,d}")

    # winnable-now list for contrast
    print("\n\n===== EASY/MID (KD<30) BEST BY VALUE - all services =====")
    easy = [k for k in keep if k["band"] in ("easy 0-14", "mid 15-29")]
    easy.sort(key=lambda x: -x["value"])
    print(f"{'keyword':46s}{'svc':16s}{'vol':>8s}{'kd':>5s}{'$value/mo':>11s}")
    for k in easy[:25]:
        print(f"{k['keyword'][:44]:46s}{k['service']:16s}{k['search_volume']:>8,d}"
              f"{k['kd']:>5}{k['value']:>11,d}")


if __name__ == "__main__":
    main()
