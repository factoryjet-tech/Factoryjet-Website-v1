#!/usr/bin/env python3
"""Homepage redesign research (2026-09-23): US volumes + KD for the 4 service lines,
then live SERP (PAA, AI Overview, top-10 domains) for the head terms."""
import os, json, base64, urllib.request, sys
HERE=os.path.dirname(os.path.abspath(__file__))
for line in open(os.path.join(HERE,'.env')):
    if '=' in line and not line.startswith('#'):
        k,v=line.split('=',1); os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
AUTH='Basic '+base64.b64encode(f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
BASE='https://api.dataforseo.com/v3'
def call(path, payload=None):
    req=urllib.request.Request(BASE+path, data=json.dumps(payload).encode() if payload is not None else None, headers={'Authorization':AUTH,'Content-Type':'application/json'}, method='POST' if payload is not None else 'GET')
    return json.load(urllib.request.urlopen(req, timeout=300))
OUT=os.path.join(HERE,'data','homepage-redesign-2026-09-23.json')
SEEDS={
 'ecommerce':['ecommerce development agency','ecommerce development company','ecommerce development services','ecommerce agency','ecommerce website development','ecommerce web design','ecommerce website design','ecommerce website development company','ecommerce development','b2b ecommerce agency','b2b ecommerce development','b2b ecommerce platform','omnichannel commerce','unified commerce','shopify development agency','shopify plus agency','shopify development partner','shopify developers','magento development company','adobe commerce agency','bigcommerce agency','woocommerce development','headless commerce agency','ecommerce replatforming','ecommerce migration services','ecommerce consulting','agentic commerce','ai ecommerce agency','ai for ecommerce','ecommerce marketing agency'],
 'ai_development':['ai development company','ai development services','ai agent development','ai agent development company','ai agent development services','agentic ai development','ai agency','ai automation agency','custom ai development','ai integration services','ai consulting services','ai solutions company','ai software development company'],
 'ai_search_seo':['ai seo','ai seo agency','ai seo services','generative engine optimization','generative engine optimization services','geo agency','answer engine optimization','aeo agency','llm seo','ai search optimization','chatgpt seo','ecommerce seo agency','ecommerce seo services','seo agency','seo services','seo company'],
 'web_design':['web design company','web design agency','website design services','website development company','web development company','web development services','custom website design','web design and development company','website redesign services','b2b web design agency'],
}
SERP_TERMS=['ecommerce development agency','ecommerce development company','ecommerce agency','shopify development agency','b2b ecommerce agency','ai development company','ai agent development company','ai seo agency','generative engine optimization services','web design company','web development company','ecommerce website development']
res={}
bal=call('/appendix/user_data')['tasks'][0]['result'][0]['money']['balance']; print('balance',bal)
if bal<3: sys.exit('balance too low')
allkw=[k for v in SEEDS.values() for k in v]
sv=call('/keywords_data/google_ads/search_volume/live',[{'keywords':allkw,'location_code':2840,'language_code':'en'}])
res['volume']={r['keyword']:{'sv':r.get('search_volume'),'cpc':r.get('cpc'),'comp':r.get('competition')} for r in (sv['tasks'][0]['result'] or [])}
kd=call('/dataforseo_labs/google/bulk_keyword_difficulty/live',[{'keywords':allkw,'location_code':2840,'language_code':'en'}])
for it in (kd['tasks'][0]['result'][0]['items'] or []):
    res['volume'].setdefault(it['keyword'],{})['kd']=it.get('keyword_difficulty')
res['seeds']=SEEDS
res['serp']={}
for t in SERP_TERMS:
    r=call('/serp/google/organic/live/advanced',[{'keyword':t,'location_code':2840,'language_code':'en','device':'desktop','depth':10,'people_also_ask_click_depth':1,'load_async_ai_overview':True}])
    items=r['tasks'][0]['result'][0]['items'] or []
    s={'organic':[],'paa':[],'aio':None,'types':r['tasks'][0]['result'][0].get('item_types')}
    for i in items:
        if i['type']=='organic': s['organic'].append({'rank':i.get('rank_group'),'domain':i.get('domain'),'title':i.get('title'),'url':i.get('url')})
        elif i['type']=='people_also_ask':
            for q in i.get('items') or []:
                ans=None
                for e in q.get('expanded_element') or []: ans=(e.get('description') or '')[:300]
                s['paa'].append({'q':q.get('title'),'a':ans})
        elif i['type']=='ai_overview':
            refs=[x.get('domain') for x in (i.get('references') or [])]
            s['aio']={'refs':refs,'text':' '.join((x.get('text') or '') for x in (i.get('items') or []))[:1200]}
    res['serp'][t]=s; print(t, len(s['organic']), 'paa',len(s['paa']), 'aio', bool(s['aio']))
res['balance_after']=call('/appendix/user_data')['tasks'][0]['result'][0]['money']['balance']
json.dump(res,open(OUT,'w'),indent=1); print('saved',OUT,'balance after',res['balance_after'])
