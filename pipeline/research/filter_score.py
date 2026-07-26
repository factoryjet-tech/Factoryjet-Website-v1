#!/usr/bin/env python3
"""Filter the raw keyword universe (keywords.csv) to on-brand, winnable opportunities
for a WEAK/young domain. Splits commercial (service/city pages) vs content (blog).
Scores by winnability (KD-penalized volume). Writes shortlists + prints top per cluster."""
import os, csv
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "data", "keywords.csv")

# Tokens that make a keyword on-brand for FactoryJet's services.
SERVICE = ["web design","web development","website design","website development","web app",
    "webapp","seo","geo","generative engine","answer engine","aeo","ai agent","ai automation",
    "automation agency","chatbot","ecommerce","e-commerce","shopify","woocommerce","bigcommerce",
    "magento","wordpress","webflow","landing page","conversion rate","cro","development company",
    "development agency","development services","development partner","developer","development cost",
    "marketing agency","digital agency","design company","design agency","website cost","site audit",
    "seo audit","seo company","seo services","seo agency","llm seo","ai search","website redesign"]

# Junk / off-topic tokens -> drop outright.
JUNK = ["character","humaniz","image generator","video generator","art generator","photo",
    "meme","girlfriend","waifu","nsfw","porn","undress","essay","homework","assignment","jobs",
    "salary","course","certification","tutorial","free ai","crack","download","mod apk","login",
    "sign in","meaning","definition","wikipedia","reddit","quotes","lyrics","movie","song","novel",
    "poly ai","janitor","chai","detector","checker","stock","price prediction","voice","music",
    "resume","cover letter","chatbot online","girlfriend","boyfriend","name generator","logo maker",
    "google ai","ai mode","gemini","copilot","grok","perplexity","claude","midjourney","dall",
    "notebooklm","ai studio","openai","ai overview","what is ai","how to use ai","ai tools list",
    " app "," apps","translate","summarizer","paraphras","grammar","plagiarism","staples","canva",
    "wix ","squarespace tutorial","fiverr","upwork","internship","freelance job","near me open"]

CONTENT_INTENT = {"informational"}
COMMERCIAL_INTENT = {"commercial","transactional","navigational"}


def winnable(kd):
    if kd is None: return 0.5
    kd = float(kd)
    if kd <= 15: return 1.0
    if kd <= 25: return 0.75
    if kd <= 35: return 0.45
    if kd <= 45: return 0.2
    return 0.05


def load():
    with open(SRC) as f:
        return list(csv.DictReader(f))


def keep(r):
    kw = r["keyword"].lower()
    if any(j in kw for j in JUNK): return False
    if not any(s in kw for s in SERVICE): return False
    if len(kw) < 5: return False
    return True


def main():
    rows = [r for r in load() if keep(r)]
    for r in rows:
        r["sv"] = int(r["search_volume"] or 0)
        r["kd"] = float(r["difficulty"]) if r["difficulty"] not in (None,"","None") else None
        # winnable meaningful volume; cap volume influence so 100k fat-head doesn't dominate
        vol = min(r["sv"], 8000)
        r["score"] = round(vol * winnable(r["kd"]), 1)
    comm = [r for r in rows if r["intent"] in COMMERCIAL_INTENT and r["sv"] >= 30]
    cont = [r for r in rows if r["intent"] in CONTENT_INTENT and r["sv"] >= 30]

    def dump(name, data):
        data.sort(key=lambda r: -r["score"])
        out = os.path.join(HERE, "data", name)
        with open(out, "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=["keyword","location","cluster","sv","kd","intent","score"],
                               extrasaction="ignore")
            w.writeheader(); w.writerows(data)
        return out

    o1 = dump("shortlist_commercial.csv", comm)
    o2 = dump("shortlist_content.csv", cont)
    print(f"kept={len(rows)} of universe | commercial={len(comm)} | content={len(cont)}")
    print(f"{o1}\n{o2}")

    def top_per_cluster(data, label, n=12):
        print(f"\n================ {label} ================")
        per = defaultdict(list)
        for r in data:
            per[(r["cluster"], r["location"])].append(r)
        # order clusters by total score
        order = sorted(per.items(), key=lambda kv: -sum(x["score"] for x in kv[1]))
        for (cl, loc), lst in order:
            tot = sum(x["score"] for x in lst)
            print(f"\n[{cl} / {loc}]  opportunities={len(lst)}  cluster_score={tot:,.0f}")
            for r in lst[:n]:
                kd = int(r["kd"]) if r["kd"] is not None else "-"
                print(f"   vol={r['sv']:>6,}  kd={str(kd):>3}  {r['intent'][:4]:>4}  {r['keyword']}")

    top_per_cluster(comm, "COMMERCIAL (service / city / landing pages)")
    top_per_cluster(cont, "CONTENT (blog topics — the proven click engine)")


if __name__ == "__main__":
    main()
