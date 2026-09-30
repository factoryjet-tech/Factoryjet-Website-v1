#!/usr/bin/env python3
"""
index_watch.py: keep every sitemap URL moving toward the index, every day.

What it does (built 2026-09-30):
  1. Reads every URL from https://factoryjet.com/sitemap.xml (all child sitemaps).
  2. Asks Google's URL Inspection API for each URL's coverage state
     (service account factoryjet-gsc-reader, Owner on sc-domain:factoryjet.com).
  3. Sends every URL that is NOT "Submitted and indexed", plus every URL whose
     sitemap <lastmod> is within the last 3 days (new or updated pages), to IndexNow
     (Bing, Yandex, Seznam, Naver share it) and to Bing's own SubmitUrlBatch.
  4. Writes data/index-watch/<date>.json and prints a short list of the
     highest-priority unindexed URLs, which still need "Request indexing"
     clicked by hand in Search Console (Google has no API for that on
     normal pages).

Run:  python3 pipeline/research/index_watch.py            (full run)
      python3 pipeline/research/index_watch.py --dry-run  (inspect only)
Scheduled daily by ~/Library/LaunchAgents/com.factoryjet.index-watch.plist.

Quotas: URL Inspection 2,000/day per property (we use ~510), Bing URL
submission 10,000/day, IndexNow has no hard daily cap for our volume.
"""

import concurrent.futures as cf
import datetime
import json
import os
import re
import sys
import urllib.request

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = '/Users/bhaveshbarot/FactoryJet/secrets/factoryjet-seo-7fa130b491b8.json'
SITE = 'sc-domain:factoryjet.com'
HOST = 'factoryjet.com'
INDEXNOW_KEY = 'b4a2f89c67d14e359a72e8105c3d4f9b'  # same key as scripts/submit-indexnow.mjs
OUT_DIR = os.path.join(HERE, 'data', 'index-watch')

# Order used for the "request by hand" list: money pages first.
PRIORITY = [r'^/services/', r'^/website-cost', r'^/case-studies/', r'^/blog/', r'^/au/', r'^/uk/', r'^/']


def fetch(url, timeout=30):
    req = urllib.request.Request(url, headers={'Cache-Control': 'no-cache', 'User-Agent': 'factoryjet-index-watch'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', 'ignore')


def sitemap_urls():
    """Every sitemap URL, plus its <lastmod> date (YYYY-MM-DD or '')."""
    locs = re.findall(r'<loc>([^<]+)</loc>', fetch(f'https://{HOST}/sitemap.xml'))
    lastmod = {}
    for sm in locs:
        if not sm.endswith('.xml'):
            lastmod.setdefault(sm.strip(), '')
            continue
        for block in re.findall(r'<url>(.*?)</url>', fetch(sm), re.S):
            loc = re.search(r'<loc>([^<]+)</loc>', block)
            lm = re.search(r'<lastmod>([^<]+)</lastmod>', block)
            if loc:
                lastmod[loc.group(1).strip()] = lm.group(1)[:10] if lm else ''
    return lastmod


def inspect_all(urls):
    creds = service_account.Credentials.from_service_account_file(
        KEY, scopes=['https://www.googleapis.com/auth/webmasters'])
    s = AuthorizedSession(creds)

    def one(u):
        for _ in range(3):
            try:
                r = s.post('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
                           json={'inspectionUrl': u, 'siteUrl': SITE}, timeout=60).json()
                if r.get('error', {}).get('code') == 429:
                    continue
                ir = r.get('inspectionResult', {}).get('indexStatusResult', {})
                return {'url': u, 'state': ir.get('coverageState') or 'ERROR',
                        'lastCrawl': ir.get('lastCrawlTime'), 'fetch': ir.get('pageFetchState')}
            except Exception as e:  # network blip: retry, then record
                err = str(e)[:80]
        return {'url': u, 'state': 'ERROR', 'error': locals().get('err', 'quota')}

    with cf.ThreadPoolExecutor(6) as ex:
        return list(ex.map(one, urls))


def indexnow(urls):
    body = json.dumps({'host': HOST, 'key': INDEXNOW_KEY,
                       'keyLocation': f'https://{HOST}/{INDEXNOW_KEY}.txt', 'urlList': urls}).encode()
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body,
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.status


def bing_submit(urls):
    env = {}
    for line in open(os.path.join(HERE, '.env')):
        if '=' in line and not line.startswith('#'):
            k, v = line.split('=', 1)
            env[k.strip()] = v.strip().strip('"')
    key = env['BING_WEBMASTER_API_KEY']
    site_url = env.get('BING_SITE_URL', f'https://{HOST}/')
    body = json.dumps({'siteUrl': site_url, 'urlList': urls}).encode()
    req = urllib.request.Request(
        f'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey={key}', data=body,
        headers={'Content-Type': 'application/json; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.status


def rank(url):
    path = url.replace(f'https://{HOST}', '') or '/'
    for i, p in enumerate(PRIORITY):
        if re.search(p, path):
            return i
    return len(PRIORITY)


def main():
    dry = '--dry-run' in sys.argv
    today = datetime.date.today().isoformat()
    lastmod = sitemap_urls()
    urls = sorted(lastmod)
    res = inspect_all(urls)
    todo = [r['url'] for r in res if r['state'] != 'Submitted and indexed' and r['state'] != 'ERROR']
    # New or updated pages go to IndexNow + Bing even when Google already has
    # them: Bing only learns about a page from its sitemap or IndexNow, and a
    # page Google indexed on day one was otherwise never pushed to Bing.
    since = (datetime.date.today() - datetime.timedelta(days=3)).isoformat()
    recent = [u for u, lm in lastmod.items() if lm and lm >= since]
    push = sorted(set(todo) | set(recent))
    summary = {}
    for r in res:
        summary[r['state']] = summary.get(r['state'], 0) + 1

    sent = {}
    if push and not dry:
        # Bing's SubmitUrlBatch allows ~20,000 URLs a month; cap it at 300 a day.
        # IndexNow has no practical cap at our volume.
        for name, fn, cap in (('indexnow', indexnow, 5000), ('bing', bing_submit, 300)):
            try:
                sent[name] = fn(push[:cap])
            except Exception as e:
                sent[name] = f'failed: {str(e)[:80]}'

    os.makedirs(OUT_DIR, exist_ok=True)
    manual = sorted(todo, key=rank)[:15]
    json.dump({'date': today, 'total': len(urls), 'summary': summary, 'submitted': sent,
               'request_by_hand_in_gsc': manual, 'results': res},
              open(os.path.join(OUT_DIR, f'{today}.json'), 'w'), indent=1)

    print(f'{today}: {len(urls)} sitemap URLs')
    for k, v in sorted(summary.items(), key=lambda kv: -kv[1]):
        print(f'  {v:4}  {k}')
    print(f'  submitted {len(push)} URLs ({len(todo)} unindexed in Google, {len(recent)} new or updated in the last 3 days): {sent or "dry run"}')
    print('  request by hand in GSC (top 15):')
    for u in manual:
        print('   ', u)


if __name__ == '__main__':
    main()
