#!/usr/bin/env python3
"""Clinical note-drafting agent page (film 2 landing), US research, 2026-10-18.
1) Google Ads search_volume for candidate terms. 2) Labs keyword_suggestions for 4 seeds.
3) US SERPs with People Also Ask. 4) backlinks/summary for every top-10 domain.
Raw in data/raw/clinical-notes-page-2026-10-18/."""
import os, json, re, sys
from urllib.parse import urlparse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from dfs_lib_2026_10_18 import cached, task, balance
HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, 'data', 'raw', 'clinical-notes-page-2026-10-18'); os.makedirs(RAW, exist_ok=True)
def fp(n): return os.path.join(RAW, re.sub(r'\W+', '_', n) + '.json')
KW = """ai medical scribe
ai scribe
ai medical scribe software
ai scribe for doctors
ai clinical documentation
clinical documentation ai
ambient clinical documentation
ambient ai scribe
ambient scribe
ambient listening ai healthcare
ai scribe for orthopedics
orthopedic ai scribe
orthopedic scribe
ai for orthopedics
ai scribe for specialists
ai medical note taking
ai clinical notes
ai note taker for doctors
ai soap notes
soap note generator
ai referral letter
referral letter template
medical referral letter
ai medical documentation
medical scribe
virtual medical scribe
medical scribe software
dragon ambient experience
dax copilot
abridge
nuance dax
freed ai
heidi health
suki ai
nabla
deepscribe
custom ai scribe
hipaa compliant ai scribe
best ai medical scribe
ai scribe cost
ai medical scribe cost
how much does an ai scribe cost
physician burnout documentation
pajama time doctors
ai charting
ai charting for doctors
ai for clinical notes
ehr ai integration
ai agent healthcare
healthcare ai agents""".strip().split('\n')
d, _ = cached(fp('ads_us'), 'keywords_data/google_ads/search_volume/live', {"keywords": KW, "location_code": 2840, "language_code": "en"})
print('ads', task(d).get('status_message'))
for seed in ['ai medical scribe', 'ai clinical documentation', 'ambient clinical documentation', 'ai scribe orthopedic']:
    d, _ = cached(fp('sug_' + seed), 'dataforseo_labs/google/keyword_suggestions/live', {"keyword": seed, "location_code": 2840, "language_code": "en", "limit": 150, "order_by": ["keyword_info.search_volume,desc"]})
    print('sug', seed, task(d).get('status_message'))
SERPS = ['ai medical scribe', 'ai clinical documentation', 'ambient clinical documentation', 'ai scribe for orthopedics', 'ai medical scribe for specialists', 'custom ai scribe for clinics']
for q in SERPS:
    d, _ = cached(fp('serp_' + q), 'serp/google/organic/live/advanced', {"keyword": q, "location_code": 2840, "language_code": "en", "depth": 10, "people_also_ask_click_depth": 1})
    print('serp', q, task(d).get('status_message'))
doms = set()
for q in SERPS:
    items = (task(json.load(open(fp('serp_' + q)))).get('result') or [{}])[0].get('items') or []
    for it in items:
        if it.get('type') == 'organic': doms.add(it['domain'].removeprefix('www.'))
for dom in sorted(doms):
    d, _ = cached(fp('bl_' + dom), 'backlinks/summary/live', {"target": dom, "internal_list_limit": 1, "backlinks_status_type": "live"})
print('domains', len(doms), 'balance', balance())
