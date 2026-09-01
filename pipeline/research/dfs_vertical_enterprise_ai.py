#!/usr/bin/env python3
"""
Vertical AI Agent & AI Automation Demand Research Script
Queries DataForSEO Labs API across US (location_code: 2840) to discover
search volumes, CPC, competition levels, intent, and questions across
high-value enterprise verticals.
"""

import os
import sys
import json
import base64
import urllib.request
import urllib.error
import csv
import time
from collections import defaultdict

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

# Define industry seed queries mapping to the user's focus verticals
VERTICAL_SEEDS = {
    "healthcare_medical": [
        "ai agent for healthcare",
        "ai automation in healthcare",
        "healthcare ai workflow automation",
        "hipaa compliant ai agent",
        "hospital ai voice agent",
        "ai medical receptionist",
        "ai agent for doctors",
        "dental ai receptionist",
        "ai voice agent for dentists",
        "chiropractor ai automation",
        "medical practice appointment scheduling ai"
    ],
    "manufacturing_industrial": [
        "ai agents for manufacturing",
        "ai automation for manufacturing",
        "manufacturing workflow automation ai",
        "ai rfq automation manufacturing",
        "ai agent predictive maintenance",
        "industrial ai automation services",
        "erp ai agent manufacturing"
    ],
    "wholesale_distribution": [
        "ai agent for supply chain",
        "ai agent wholesale distribution",
        "edi ai automation",
        "purchase order ai automation",
        "b2b order automation ai agent",
        "logistics ai workflow automation"
    ],
    "construction_trades": [
        "ai for general contractors",
        "construction ai voice agent",
        "roofing ai receptionist",
        "plumbing ai phone agent",
        "electrician ai answering service",
        "hvac ai voice agent",
        "contractor lead qualification ai agent",
        "field service ai automation"
    ],
    "automotive_spare_parts": [
        "automotive ai voice agent",
        "auto repair ai receptionist",
        "car dealership ai sdr",
        "auto parts catalog ai agent",
        "dealership service booking ai"
    ],
    "chemicals_pharma": [
        "ai agents for pharmaceuticals",
        "pharma compliance ai automation",
        "chemical manufacturing ai automation",
        "regulatory compliance ai agent"
    ],
    "food_beverage_hospitality": [
        "restaurant ai phone agent",
        "food manufacturing ai automation",
        "restaurant voice ordering ai",
        "hospitality ai concierge agent"
    ],
    "retail_fashion_lifestyle": [
        "retail ai customer service agent",
        "fashion ecommerce ai agent",
        "ai shopping assistant for retail",
        "ecommerce return automation ai"
    ],
    "agriculture_farming": [
        "ai in agriculture automation",
        "farming workflow automation ai",
        "agritech ai agent"
    ]
}

def post_dataforseo(endpoint, payload):
    req = urllib.request.Request(
        f"{BASE}{endpoint}",
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Basic {AUTH}",
            "Content-Type": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        print(f"HTTPError on {endpoint}: {e.code} - {e.read().decode()[:300]}")
        return None
    except Exception as e:
        print(f"Error on {endpoint}: {e}")
        return None

def fetch_keyword_suggestions(vertical_name, seeds):
    print(f"Fetching suggestions for vertical: {vertical_name} ({len(seeds)} seeds)...")
    results = []
    
    # Batch post keyword suggestions (up to 5 per request)
    for i in range(0, len(seeds), 5):
        batch = seeds[i:i+5]
        payload = [
            {
                "keyword": s,
                "location_code": 2840, # US
                "language_code": "en",
                "limit": 30,
                "include_seed_keyword": True
            }
            for s in batch
        ]
        resp = post_dataforseo("/dataforseo_labs/google/keyword_suggestions/live", payload)
        if resp and "tasks" in resp:
            for task in resp["tasks"]:
                if task.get("result"):
                    for res_item in task["result"]:
                        seed_kw = res_item.get("seed_keyword")
                        for item in (res_item.get("items") or []):
                            kw = item.get("keyword")
                            kinfo = item.get("keyword_info", {})
                            vol = kinfo.get("search_volume") or 0
                            cpc = kinfo.get("cpc") or 0.0
                            comp = kinfo.get("competition_level") or "UNKNOWN"
                            kd = item.get("keyword_properties", {}).get("keyword_difficulty") or 0
                            intent = item.get("search_intent_info", {}).get("main_intent") or "commercial"
                            
                            results.append({
                                "vertical": vertical_name,
                                "seed": seed_kw,
                                "keyword": kw,
                                "search_volume": vol,
                                "cpc": round(cpc, 2),
                                "competition": comp,
                                "keyword_difficulty": kd,
                                "intent": intent
                            })
        time.sleep(0.5)
    return results

def main():
    all_rows = []
    dedup = set()
    
    for vertical, seeds in VERTICAL_SEEDS.items():
        v_rows = fetch_keyword_suggestions(vertical, seeds)
        for r in v_rows:
            key = (r["vertical"], r["keyword"])
            if key not in dedup:
                dedup.add(key)
                all_rows.append(r)
                
    # Sort by search volume and CPC
    all_rows.sort(key=lambda x: (x["search_volume"], x["cpc"]), reverse=True)
    
    # Save CSV
    out_csv = os.path.join(DATA_DIR, "vertical_ai_enterprise_demand.csv")
    with open(out_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "vertical", "seed", "keyword", "search_volume", "cpc", "competition", "keyword_difficulty", "intent"
        ])
        writer.writeheader()
        for r in all_rows:
            writer.writerow(r)
            
    print(f"\nSaved {len(all_rows)} keywords to {out_csv}")
    
    # Group summary by vertical
    summary = {}
    for r in all_rows:
        v = r["vertical"]
        if v not in summary:
            summary[v] = {
                "total_keywords": 0,
                "total_volume": 0,
                "high_cpc_keywords": [],
                "top_volume_keywords": []
            }
        summary[v]["total_keywords"] += 1
        summary[v]["total_volume"] += r["search_volume"]
        if r["cpc"] >= 15.0 and r["search_volume"] >= 10:
            summary[v]["high_cpc_keywords"].append(r)
        if r["search_volume"] >= 50:
            summary[v]["top_volume_keywords"].append(r)
            
    out_json = os.path.join(DATA_DIR, "vertical_ai_enterprise_summary.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)
        
    print(f"Saved summary to {out_json}")

if __name__ == "__main__":
    main()
