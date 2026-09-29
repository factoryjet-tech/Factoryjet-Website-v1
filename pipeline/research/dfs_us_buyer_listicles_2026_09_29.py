"""US buyer-listicle research 2026-09-29.

Question: does the Impulse Branding pattern ("best X in {city}" listicles and
"{thing} price/cost" guides ranking 2-8 for buyer-intent queries) exist and look
winnable in the US for FactoryJet's 5 service lines?

Stages (each cached to data/us-buyer-2026-09-29/, rerun skips finished stages):
  1. volumes.json   Google Ads US search volume + CPC, Labs bulk keyword difficulty
  2. serps.json     live Google US organic top 10 + AI Overview (async) for top ~40
  3. rd.json        referring domains for every top-10 domain AND url (bulk endpoint)
  4. ours.json      factoryjet.com ranked_keywords in US (one call, top 1000)
Then writes summary.json + summary.csv.

Usage:  cd pipeline/research && python3 dfs_us_buyer_listicles_2026_09_29.py
"""
import json, base64, urllib.request, pathlib, re, csv, sys

HERE = pathlib.Path(__file__).parent
env = dict(l.strip().split('=', 1) for l in open(HERE / '.env') if '=' in l and not l.startswith('#'))
AUTH = base64.b64encode(f"{env['DATAFORSEO_LOGIN'].strip().strip(chr(34))}:{env['DATAFORSEO_PASSWORD'].strip().strip(chr(34))}".encode()).decode()
OUT = HERE / 'data' / 'us-buyer-2026-09-29'; OUT.mkdir(parents=True, exist_ok=True)
LOC = 2840
spent = {}


def post(path, body, stage):
    req = urllib.request.Request('https://api.dataforseo.com/v3' + path, data=json.dumps(body).encode(),
                                 headers={'Authorization': 'Basic ' + AUTH, 'Content-Type': 'application/json'})
    r = json.load(urllib.request.urlopen(req, timeout=300))
    spent[stage] = spent.get(stage, 0) + (r.get('cost') or 0)
    return r


# ---------------------------------------------------------------- keyword set
SERVICES = {
 'ai_agents': """best ai agent development companies|top ai agent development companies|best ai agent development company|ai agent development company|ai agent development companies|ai agent development services|ai agent development agency|ai agent development company usa|ai agent development cost|how much does it cost to build an ai agent|how much does an ai agent cost|ai agent pricing|hire ai agent developer|hire ai agent developers|ai agent developers|custom ai agent development|ai agent builders|ai agent agency|best ai agent agencies|ai agent development for small business|ai agents for small business|ai agent development for healthcare|ai agents for healthcare|ai agent development for ecommerce|ai agents for ecommerce|ai agents for real estate|ai agents for insurance|ai agents for law firms|ai agent consulting|agentic ai development company|agentic ai companies|best agentic ai companies|top agentic ai companies|ai chatbot development company|best ai chatbot development company|ai chatbot development services|ai chatbot development cost|ai chatbot cost|hire ai developer|ai development company|best ai development companies|top ai development companies|ai development companies in usa|ai development services|ai development cost|custom ai development|ai voice agent development|ai voice agent company""",
 'ai_automation': """ai automation agency|ai automation agencies|best ai automation agency|best ai automation agencies|top ai automation agencies|ai automation company|ai automation companies|ai automation services|ai automation for small business|ai automation agency pricing|ai automation cost|ai automation consultant|ai automation consulting|hire ai automation expert|ai automation expert|ai workflow automation services|business process automation services|business process automation companies|workflow automation agency|workflow automation services|n8n agency|n8n expert|hire n8n developer|zapier expert|zapier agency|make.com agency|ai consulting company|best ai consulting firms|top ai consulting firms|ai consulting firms|ai consulting services|ai consulting for small business|ai consultant cost|ai consulting pricing|ai integration services|ai implementation services|ai automation for real estate|ai automation for healthcare|ai automation for ecommerce|rpa companies|intelligent automation services""",
 'ecommerce': """best ecommerce development companies|top ecommerce development companies|ecommerce development company|ecommerce development agency|ecommerce development services|ecommerce website development company|ecommerce website development services|ecommerce website development cost|ecommerce website cost|how much does an ecommerce website cost|best ecommerce agencies|top ecommerce agencies|ecommerce agency|ecommerce agencies|best shopify agencies|top shopify agencies|best shopify development agency|shopify agency|shopify development agency|shopify development company|shopify development services|shopify developer|hire shopify developer|hire a shopify expert|shopify expert|shopify experts|shopify website cost|shopify store development cost|shopify website design cost|cost to build shopify store|shopify plus agency|shopify plus agencies|best shopify plus agencies|shopify plus partners|shopify plus developer|shopify plus cost|bigcommerce agency|bigcommerce agencies|bigcommerce development agency|bigcommerce developer|best bigcommerce agency|bigcommerce partners|woocommerce development company|woocommerce developer|woocommerce agency|magento development company|magento agency|adobe commerce agency|headless commerce agency|b2b ecommerce agency|b2b ecommerce development|shopify migration services|shopify migration agency|shopify agency for small business|ecommerce agency for small business|shopify store setup service""",
 'ai_seo': """ai seo agency|ai seo agencies|best ai seo agency|best ai seo agencies|top ai seo agencies|ai seo services|ai seo company|ai seo companies|ai seo cost|ai seo pricing|generative engine optimization agency|generative engine optimization services|generative engine optimization company|best generative engine optimization agencies|geo agency|geo agencies|best geo agencies|geo services|geo seo agency|answer engine optimization agency|answer engine optimization services|aeo agency|aeo services|best aeo agencies|llm seo agency|llm optimization services|ai search optimization agency|ai search optimization services|chatgpt seo agency|chatgpt seo services|ai visibility agency|ai seo consultant|geo consultant|seo agency|best seo agencies|top seo agencies|seo company|seo services|seo agency for small business|seo cost|how much does seo cost|seo pricing|seo services pricing|hire seo expert|ecommerce seo agency|shopify seo agency|ecommerce seo services""",
 'web_design': """best web design companies|top web design companies|best web design agencies|top web design agencies|web design company|web design companies|web design agency|web design agencies|website design company|website design services|web design services|website development company|website development companies|best website development companies|web development company|web development companies|best web development companies|top web development companies|web development agency|web development services|custom website development|website design cost|website design pricing|how much does a website cost|how much does a website cost for a small business|website cost|website development cost|web design pricing|web design cost|small business website design|web design for small business|website design for small business|best web design companies for small business|affordable web design|affordable website design|hire web designer|hire web developer|hire website developer|web design companies in usa|website redesign services|website redesign cost|b2b web design agency|b2b website design|saas web design agency|law firm website design|dental website design|medical website design|healthcare web design agency|construction website design|contractor website design|real estate website design|restaurant website design|webflow agency|best webflow agencies|wordpress web design company|wordpress development company"""
}
KW = []
SVC = {}
for svc, blob in SERVICES.items():
    for k in blob.split('|'):
        k = k.strip().lower()
        if k and k not in SVC:
            SVC[k] = svc; KW.append(k)


def stage_volumes():
    f = OUT / 'volumes.json'
    if f.exists():
        return json.load(open(f))
    print('keywords', len(KW))
    r = post('/keywords_data/google_ads/search_volume/live', [{'keywords': KW, 'location_code': LOC, 'language_code': 'en'}], 'volumes')
    vol = {}
    for i in (r['tasks'][0].get('result') or []):
        vol[i['keyword']] = {'vol': i.get('search_volume'), 'cpc': i.get('cpc'), 'comp': i.get('competition'),
                             'hi_bid': i.get('high_top_of_page_bid')}
    print('ads status', r['tasks'][0]['status_message'], len(vol))
    r2 = post('/dataforseo_labs/google/bulk_keyword_difficulty/live', [{'keywords': KW, 'location_code': LOC, 'language_code': 'en'}], 'kd')
    for i in ((r2['tasks'][0].get('result') or [{}])[0].get('items') or []):
        vol.setdefault(i['keyword'], {})['kd'] = i.get('keyword_difficulty')
    for k in vol:
        vol[k]['svc'] = SVC.get(k)
    json.dump(vol, open(f, 'w'), indent=1)
    return vol


def dedupe(vol):
    """Google Ads returns one clustered volume for close variants (e.g. 'web design company' and
    'website design company' both 14,800 at $29.74). Keep one row per (service, vol, cpc, top bid)
    cluster: prefer a best/top variant, then the lowest KD. Returns {kept_kw: [cluster members]}."""
    groups = {}
    for k, v in vol.items():
        if (v.get('vol') or 0) < 20:
            continue
        groups.setdefault((v['svc'], v.get('vol'), v.get('cpc'), v.get('hi_bid')), []).append(k)
    out = {}
    for key, ks in groups.items():
        ks.sort(key=lambda k: (0 if re.match(r'(best|top) ', k) else 1, vol[k].get('kd') if vol[k].get('kd') is not None else 99, len(k)))
        out[ks[0]] = ks
    return out


def pick(vol, n=55):
    """~55 SERPs: every best/top listicle query with vol>=50 (the pattern under test), then the rest by
    vol x CPC with KD<=40 preferred, at least 5 per service line."""
    reps = dedupe(vol)

    def score(k):
        v = vol[k]
        s = (v.get('vol') or 0) * (v.get('cpc') or 0)
        kd = v.get('kd')
        return s * (0.25 if kd is not None and kd > 40 else 1)
    chosen = [k for k in reps if re.match(r'(best|top) ', k) and (vol[k].get('vol') or 0) >= 50]
    ranked = sorted(reps, key=score, reverse=True)
    per = {}
    for k in chosen:
        per[vol[k]['svc']] = per.get(vol[k]['svc'], 0) + 1
    for k in ranked:
        if k not in chosen and per.get(vol[k]['svc'], 0) < 5:
            chosen.append(k); per[vol[k]['svc']] = per.get(vol[k]['svc'], 0) + 1
    for k in ranked:
        if len(chosen) >= n:
            break
        if k not in chosen:
            chosen.append(k)
    # core service-term and cost/price shapes the value sort under-weights (low CPC or clustered)
    for k in MUST:
        if k in vol and (vol[k].get('vol') or 0) >= 20 and k not in chosen:
            chosen.append(k)
    return chosen


MUST = ['ai agent development company', 'ai agent development services', 'custom ai agent development',
        'ai agents for ecommerce', 'ai automation services', 'ai automation consultant', 'ai automation company',
        'shopify plus agency', 'shopify development company', 'b2b ecommerce agency', 'bigcommerce partners',
        'how much does a website cost', 'website design cost', 'ecommerce website cost', 'shopify website cost',
        'generative engine optimization services', 'geo agency', 'answer engine optimization services', 'aeo agency',
        'ai search optimization services', 'ai agent development cost', 'website redesign cost']


DIRS = ('clutch.co', 'designrush.com', 'goodfirms.co', 'upcity.com', 'expertise.com', 'themanifest.com',
        'sortlist.com', 'agencyspotter.com', 'topdevelopers.co', 'g2.com', 'upwork.com', 'fiverr.com',
        'yelp.com', 'thumbtack.com', 'shopify.com/partners', 'partners.shopify.com', 'bark.com',
        'agencyvista.com', 'semrush.com/agencies', 'techreviewer.co', 'selectedfirms.co', 'itfirms.co',
        'topseos.com', 'bestseocompanies', 'clutch', 'toptal.com', 'agencies.semrush.com', 'partners.bigcommerce.com',
        'webflow.com/certified-partners', 'dribbble.com', 'awwwards.com', 'contra.com', 'freelancer.com')
UGC = ('reddit.com', 'quora.com', 'linkedin.com', 'youtube.com', 'community.', 'forum.', 'substack.com', 'medium.com')
LIST_RE = re.compile(r'\b(best|top)\b|\b\d{1,3}\s+(best|top|leading)\b|\b\d{1,3}\+?\s+\w*\s*(agencies|companies|firms|developers|partners|experts)\b', re.I)


def classify(dom, url, title):
    d = (dom or '').replace('www.', '')
    u = (url or '').lower()
    for x in DIRS:
        if x in d or x in u:
            return 'directory'
    for x in UGC:
        if x in d:
            return 'ugc'
    if LIST_RE.search(title or ''):
        return 'listicle'
    if re.search(r'/(blog|resources|insights|articles|guides?|learn|news)/', u) or re.search(r'\b(cost|price|pricing|how much)\b', (title or ''), re.I):
        return 'guide'
    return 'agency/service'


def stage_serps(keys):
    f = OUT / 'serps.json'
    res = json.load(open(f)) if f.exists() else {}
    for k in keys:
        if k in res:
            continue
        r = post('/serp/google/organic/live/advanced', [{'keyword': k, 'location_code': LOC, 'language_code': 'en',
                 'device': 'desktop', 'depth': 10, 'load_async_ai_overview': True}], 'serps')
        items = ((r['tasks'][0].get('result') or [{}])[0].get('items')) or []
        org = [i for i in items if i['type'] == 'organic'][:10]
        aio = [i for i in items if i['type'] == 'ai_overview']
        refs, text = [], []
        for a in aio:
            for ref in (a.get('references') or []):
                refs.append(ref.get('domain'))
            if a.get('markdown'):
                text.append(a['markdown'])
            for sub in (a.get('items') or []):
                refs += [x.get('domain') for x in (sub.get('references') or [])]
                if sub.get('markdown') or sub.get('text'):
                    text.append(sub.get('markdown') or sub.get('text'))
        res[k] = {
            'organic': [{'pos': o.get('rank_group'), 'domain': (o.get('domain') or '').replace('www.', ''), 'url': o.get('url'),
                         'title': o.get('title'), 'type': classify(o.get('domain'), o.get('url'), o.get('title'))} for o in org],
            'aio': bool(aio), 'aio_refs': sorted(set(x for x in refs if x)), 'aio_text': '\n'.join(text)[:6000],
            'local_pack': any(i['type'] in ('local_pack', 'map') for i in items),
            'features': sorted(set(i['type'] for i in items)),
        }
        print(k, 'AIO' if aio else '-', [o['type'][0] for o in res[k]['organic']], round(sum(spent.values()), 3))
        json.dump(res, open(f, 'w'), indent=1)
    return res


def stage_rd(serps):
    f = OUT / 'rd.json'
    cache = json.load(open(f)) if f.exists() else {'domain': {}, 'url': {}}
    doms = sorted({o['domain'] for v in serps.values() for o in v['organic']} - set(cache['domain']))
    urls = sorted({o['url'] for v in serps.values() for o in v['organic']} - set(cache['url']))
    for kind, targets in (('domain', doms), ('url', urls)):
        for i in range(0, len(targets), 900):
            r = post('/backlinks/bulk_referring_domains/live', [{'targets': targets[i:i + 900]}], 'rd')
            for it in (r['tasks'][0].get('result') or [{}])[0].get('items', []) or []:
                cache[kind][it['target']] = it.get('referring_domains')
    json.dump(cache, open(f, 'w'), indent=1)
    return cache


def stage_ours():
    f = OUT / 'ours.json'
    if f.exists():
        return json.load(open(f))
    r = post('/dataforseo_labs/google/ranked_keywords/live', [{'target': 'factoryjet.com', 'location_code': LOC,
             'language_code': 'en', 'limit': 1000}], 'ours')
    items = ((r['tasks'][0].get('result') or [{}])[0].get('items')) or []
    out = {}
    for it in items:
        kw = it['keyword_data']['keyword']
        se = it['ranked_serp_element']['serp_item']
        out[kw] = {'pos': se.get('rank_group'), 'url': se.get('url'), 'vol': it['keyword_data']['keyword_info'].get('search_volume')}
    json.dump(out, open(f, 'w'), indent=1)
    return out


def main():
    vol = stage_volumes()
    keep = {k: v for k, v in vol.items() if (v.get('vol') or 0) >= 20}
    print('kept (vol>=20):', len(keep), 'of', len(vol))
    keys = pick(vol, 55)
    if '--volumes-only' in sys.argv:
        for k in keys: print(vol[k]['svc'][:6], vol[k].get('vol'), vol[k].get('cpc'), vol[k].get('kd'), k)
        print(len(keys)); json.dump(dedupe(vol), open(OUT / 'clusters.json', 'w'), indent=1)
        return
    serps = stage_serps(keys)
    rd = stage_rd(serps)
    ours = stage_ours()
    rows = []
    for k in keys:
        s = serps[k]; v = vol[k]
        for o in s['organic']:
            o['type'] = classify(o['domain'], o['url'], o['title'])
        types = [o['type'] for o in s['organic']]
        c = {t: types.count(t) for t in ('listicle', 'agency/service', 'directory', 'guide', 'ugc')}
        shape = max(c, key=c.get) + '-led'
        weakest = None
        for o in s['organic']:
            if o['type'] in ('directory', 'ugc'):
                continue  # can't be displaced by a normal site in the usual sense; bar = weakest ordinary site
            d = rd['domain'].get(o['domain'])
            if d is not None and (weakest is None or d < weakest[1]):
                weakest = (o['domain'], d, rd['url'].get(o['url']), o['pos'])
        fj = next((o['pos'] for o in s['organic'] if 'factoryjet.com' in o['domain']), None)
        rows.append({'keyword': k, 'svc': v['svc'], 'vol': v.get('vol'), 'cpc': v.get('cpc'), 'kd': v.get('kd'),
                     'value': round((v.get('vol') or 0) * (v.get('cpc') or 0)), **c, 'shape': shape,
                     'weakest_domain': weakest[0] if weakest else None, 'weakest_rd': weakest[1] if weakest else None,
                     'weakest_url_rd': weakest[2] if weakest else None, 'weakest_pos': weakest[3] if weakest else None,
                     'aio': s['aio'], 'aio_refs': len(s['aio_refs']), 'local_pack': s['local_pack'],
                     'fj_top10': fj, 'fj_labs': (ours.get(k) or {}).get('pos'), 'fj_labs_url': (ours.get(k) or {}).get('url')})
    json.dump(rows, open(OUT / 'summary.json', 'w'), indent=1)
    with open(OUT / 'summary.csv', 'w', newline='') as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
    prev = json.load(open(OUT / 'spend.json')) if (OUT / 'spend.json').exists() else {}
    for k2, v2 in spent.items():
        prev[k2] = round(prev.get(k2, 0) + v2, 4)
    json.dump(prev, open(OUT / 'spend.json', 'w'), indent=1)
    print('SPENT this run', {k: round(v, 4) for k, v in spent.items()}, 'cumulative', prev)


if __name__ == '__main__':
    main()
