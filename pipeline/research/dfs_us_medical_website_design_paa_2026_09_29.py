"""US /services/medical-website-design: live SERP top 10 + PAA pass (budget < US$0.15)."""
import json, base64, urllib.request, pathlib
HERE = pathlib.Path(__file__).parent
env = dict(l.strip().split('=',1) for l in open(HERE/'.env') if '=' in l and not l.startswith('#'))
AUTH = base64.b64encode(f"{env['DATAFORSEO_LOGIN'].strip().strip(chr(34))}:{env['DATAFORSEO_PASSWORD'].strip().strip(chr(34))}".encode()).decode()
OUT = HERE/'data'/'us-medical-website-design-2026-09-29'/'serp_paa.json'
spent = 0.0
def post(path, body):
    global spent
    for attempt in range(3):
        try:
            req = urllib.request.Request('https://api.dataforseo.com/v3'+path, data=json.dumps(body).encode(),
                headers={'Authorization':'Basic '+AUTH,'Content-Type':'application/json'})
            r = json.load(urllib.request.urlopen(req, timeout=150)); spent += r.get('cost') or 0; return r
        except Exception as e:
            print('retry', attempt, e, flush=True)
    raise SystemExit('DataForSEO unreachable')
KWS = ['medical website design','medical practice website design','healthcare website design',
       'website design for doctors','hipaa compliant website design','medical website cost']
res = json.load(open(OUT))['results'] if OUT.exists() else {}
for k in KWS:
    if spent > 0.12: break
    if k in res: continue
    r = post('/serp/google/organic/live/advanced', [{'keyword': k, 'location_code': 2840, 'language_code': 'en', 'depth': 10, 'people_also_ask_click_depth': 2}])
    items = ((r['tasks'][0].get('result') or [{}])[0].get('items')) or []
    org = [i for i in items if i['type']=='organic']
    paa = []
    for i in items:
        if i['type']=='people_also_ask':
            for q in (i.get('items') or []):
                ans = ''
                for e in (q.get('expanded_element') or []):
                    ans = (e.get('description') or '') or ans
                paa.append({'q': q.get('title'), 'a': ans[:400]})
    res[k] = {'paa': paa,
              'organic': [{'pos': o.get('rank_group'), 'domain': o.get('domain'), 'url': o.get('url'), 'title': o.get('title'), 'desc': (o.get('description') or '')[:250]} for o in org][:10],
              'features': sorted({i['type'] for i in items})}
    print('==', k, 'paa', len(paa), flush=True); print(' ', [p['q'] for p in paa], flush=True)
    json.dump({'results': res, 'spent_usd': round(spent,4)}, open(OUT,'w'), indent=1)
json.dump({'results': res, 'spent_usd': round(spent,4)}, open(OUT,'w'), indent=1)
print('SPENT', round(spent,4))
