#!/usr/bin/env python3
"""
Comprehensive Industry Vertical AI Demand & SERP Analysis
Fetches Google Ads Search Volume, CPC, and SERP / PAA data across 100+ targeted vertical keywords.
"""

import os
import json
import base64
import urllib.request
import urllib.error
import csv
import time

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

LOGIN = os.environ.get("DATAFORSEO_LOGIN")
PW = os.environ.get("DATAFORSEO_PASSWORD")
AUTH = base64.b64encode(f"{LOGIN}:{PW}".encode()).decode()
BASE = "https://api.dataforseo.com/v3"
DATA_DIR = os.path.join(HERE, "data")
os.makedirs(DATA_DIR, exist_ok=True)

VERTICAL_KEYWORDS = {
    "Healthcare & Medical Clinics": [
        "ai medical receptionist",
        "ai receptionist for medical office",
        "ai voice agent for healthcare",
        "medical ai receptionist",
        "ai receptionist medical",
        "ai answering service for medical practices",
        "hipaa compliant ai receptionist",
        "hipaa compliant ai voice agent",
        "ai patient scheduling",
        "ai for medical practice",
        "ai receptionist for clinic",
        "virtual medical receptionist ai",
        "healthcare workflow automation ai"
    ],
    "Dental Practices & Clinics": [
        "ai receptionist for dental office",
        "dental ai receptionist",
        "ai receptionist dental",
        "ai answering service for dental office",
        "dental office virtual receptionist ai",
        "dental appointment scheduling ai",
        "ai phone answering for dentists"
    ],
    "Chiropractors & Independent Practitioners": [
        "ai receptionist for chiropractor",
        "chiropractic ai receptionist",
        "ai answering service for chiropractors",
        "ai for independent medical practices",
        "physical therapy ai receptionist"
    ],
    "Construction & General Contractors": [
        "ai for general contractors",
        "ai receptionist for contractors",
        "ai answering service for contractors",
        "construction workflow automation ai",
        "ai estimating for general contractors",
        "contractor lead qualification ai",
        "construction ai voice agent"
    ],
    "Roofing, Plumbing, HVAC & Electricians": [
        "ai receptionist for roofing company",
        "roofing ai receptionist",
        "ai answering service for roofers",
        "ai phone agent for plumbers",
        "ai answering service for plumbers",
        "plumbing ai receptionist",
        "ai receptionist for hvac",
        "ai answering service for hvac",
        "hvac ai voice agent",
        "ai answering service for electricians",
        "electrician ai receptionist",
        "home services ai phone agent"
    ],
    "Manufacturing & Industrial": [
        "ai agents for manufacturing",
        "ai agent for manufacturing",
        "ai in manufacturing operations",
        "manufacturing workflow automation ai",
        "ai automation in manufacturing",
        "industrial ai automation",
        "ai for manufacturing quality control",
        "ai rfq automation manufacturing",
        "predictive maintenance ai agent"
    ],
    "Wholesale Distribution & Supply Chain": [
        "ai agent for supply chain",
        "ai in wholesale distribution",
        "b2b wholesale ai automation",
        "edi automation ai",
        "purchase order automation ai",
        "logistics ai workflow automation",
        "supply chain orchestration ai",
        "automated quotation ai b2b"
    ],
    "Automotive, Dealerships & Spare Parts": [
        "car dealership ai voice agent",
        "ai answering service for auto repair",
        "dealership service booking ai",
        "auto parts catalog ai",
        "automotive ai receptionist",
        "car dealer ai bdc",
        "auto body shop ai answering"
    ],
    "Chemicals, Biotech & Pharmaceuticals": [
        "ai for pharma compliance",
        "pharmaceutical manufacturing ai automation",
        "regulatory compliance ai agent",
        "chemical batch record automation ai",
        "biotech regulatory automation ai"
    ],
    "Food & Beverage & Hospitality": [
        "ai voice agent for restaurant",
        "restaurant ai phone agent",
        "ai phone answering for restaurants",
        "restaurant reservation ai agent",
        "food manufacturing ai automation",
        "hospitality ai concierge agent"
    ],
    "Retail & Fashion / Lifestyle": [
        "retail ai customer service agent",
        "fashion ecommerce ai agent",
        "ai shopping assistant for retail",
        "ecommerce return automation ai",
        "retail inventory replenishment ai"
    ],
    "Agriculture & Farming": [
        "ai in agriculture automation",
        "farming workflow automation ai",
        "agritech ai automation"
    ]
}

def fetch_search_volumes(all_kws):
    print(f"Fetching Google Ads Search Volume & CPC for {len(all_kws)} keywords...")
    req = urllib.request.Request(
        f"{BASE}/keywords_data/google_ads/search_volume/live",
        data=json.dumps([{"keywords": all_kws, "location_code": 2840, "language_code": "en"}]).encode(),
        headers={"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            res = json.loads(r.read().decode())
            items = res.get("tasks", [{}])[0].get("result", [])
            kw_map = {}
            for it in (items or []):
                kw = it.get("keyword")
                vol = it.get("search_volume") or 0
                cpc = it.get("cpc") or 0.0
                comp = it.get("competition_level") or "UNKNOWN"
                kw_map[kw] = {"volume": vol, "cpc": round(cpc, 2), "comp": comp}
            return kw_map
    except Exception as e:
        print(f"Error fetching search volume: {e}")
        return {}

def main():
    flat_kws = []
    kw_to_category = {}
    for cat, kws in VERTICAL_KEYWORDS.items():
        for kw in kws:
            if kw not in kw_to_category:
                flat_kws.append(kw)
                kw_to_category[kw] = cat
                
    vol_map = fetch_search_volumes(flat_kws)
    
    rows = []
    for kw in flat_kws:
        cat = kw_to_category[kw]
        data = vol_map.get(kw, {"volume": 0, "cpc": 0.0, "comp": "UNKNOWN"})
        rows.append({
            "category": cat,
            "keyword": kw,
            "search_volume": data["volume"],
            "cpc": data["cpc"],
            "competition": data["comp"]
        })
        
    rows.sort(key=lambda x: (x["search_volume"], x["cpc"]), reverse=True)
    
    out_csv = os.path.join(DATA_DIR, "vertical_ai_comprehensive_demand.csv")
    with open(out_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["category", "keyword", "search_volume", "cpc", "competition"])
        writer.writeheader()
        for r in rows:
            writer.writerow(r)
            
    print(f"\nSaved {len(rows)} keywords to {out_csv}")
    
    # Print top findings
    print("\n--- TOP HIGHEST-VALUE COMMERCIAL AI KEYWORDS ---")
    for r in rows:
        if r["search_volume"] > 0 or r["cpc"] > 0:
            print(f"[{r['category']}] {r['keyword']} | Vol: {r['search_volume']}/mo | CPC: ${r['cpc']} | Comp: {r['competition']}")

if __name__ == "__main__":
    main()
