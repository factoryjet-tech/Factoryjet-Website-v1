#!/usr/bin/env python3
"""
index_watch.py: keep every sitemap URL moving toward the index, every day.

What it does (built 2026-09-30):
  1. Reads every URL from https://factoryjet.com/sitemap.xml (all child sitemaps).
  2. Asks Google's URL Inspection API for each URL's coverage state
     (service account factoryjet-gsc-reader, Owner on sc-domain:factoryjet.com).
  3. Sends every URL that is NOT "Submitted and indexed", plus every URL whose
     sitemap <lastmod> is within the last 3 days (new or updated pages), to IndexNow
     and to Bing's own SubmitUrlBatch. IndexNow goes to the shared endpoint and
     then to each engine's own endpoint (Bing, Yandex, Seznam, Naver, Yep,
     Amazonbot), so one engine refusing the push shows up by name.
  4. Resubmits the sitemap index and every child sitemap to Bing Webmaster
     (SubmitFeed) and Google (sitemaps API), and records Bing's own sitemap
     report (status, URL count, last crawled) so a failing sitemap shows up.
  5. Writes data/index-watch/<date>.json with every unindexed URL in priority
     order under "request_by_hand_in_gsc". Those still need "Request indexing"
     clicked by hand in Search Console (Google has no API for that on normal
     pages). The daily scheduled task takes the first 10 it has not requested
     in the last 7 days, so the list must be complete: a 15-URL cap left that
     task with 1 fresh URL on 2026-10-06 while 82 pages were unindexed.
     URLs listed in data/index-watch/priority.txt (one per line, # for a
     comment) go to the top of that list while they are still unindexed. Use
     it for a page that has just gone live: the list is alphabetical inside
     each group, so /services/w... would otherwise wait days for its turn.

Engines with no push API (checked 2026-10-06): Brave has only a one-URL web
form at search.brave.com/submit-url and no sitemap intake. DuckDuckGo and Yahoo
read Bing's index. Naver took the 388-URL batch with a 200 but answered 422
to a one-URL test of the homepage the same day, cause not found.

Run:  python3 pipeline/research/index_watch.py            (full run)
      python3 pipeline/research/index_watch.py --dry-run  (inspect only)
      python3 pipeline/research/index_watch.py --all      (full run, and send
          EVERY sitemap URL to IndexNow, not only the unindexed and the new.
          For the day a sitewide change ships, such as a footer link. Not for
          daily use: IndexNow is meant for pages that changed.)
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
import time
import urllib.parse
import urllib.request

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = '/Users/bhaveshbarot/FactoryJet/secrets/factoryjet-seo-7fa130b491b8.json'
SITE = 'sc-domain:factoryjet.com'
HOST = 'factoryjet.com'
INDEXNOW_KEY = 'b4a2f89c67d14e359a72e8105c3d4f9b'  # same key as scripts/submit-indexnow.mjs
OUT_DIR = os.path.join(HERE, 'data', 'index-watch')
PIN_FILE = os.path.join(OUT_DIR, 'priority.txt')

# Order used for the "request by hand" list: money pages first.
PRIORITY = [r'^/services/', r'^/website-cost', r'^/case-studies/', r'^/blog/', r'^/au/', r'^/uk/', r'^/']


def fetch(url, timeout=30, tries=5, wait=20):
    """GET a URL as text, retrying network errors.

    launchd fires this job as the Mac wakes, sometimes before DNS is up. Two
    runs between 2026-09-30 and 2026-10-03 died right here with "nodename nor
    servname provided" (see data/index-watch/launchd.log) and wrote no snapshot.
    """
    req = urllib.request.Request(url, headers={'Cache-Control': 'no-cache', 'User-Agent': 'factoryjet-index-watch'})
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode('utf-8', 'ignore')
        except OSError:  # URLError (DNS, refused, HTTP status) and socket timeouts
            if attempt == tries - 1:
                raise
            time.sleep(wait)


def sitemap_files():
    """The sitemap index plus every child sitemap it lists."""
    children = [u.strip() for u in re.findall(r'<loc>([^<]+)</loc>', fetch(f'https://{HOST}/sitemap.xml'))
                if u.strip().endswith('.xml')]
    return [f'https://{HOST}/sitemap.xml'] + children


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
        # Google refuses calls (429) when they arrive too fast. Retrying at once
        # lost 187 of 553 URLs on 2026-10-12, so wait longer after each refusal.
        for attempt in range(5):
            try:
                r = s.post('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
                           json={'inspectionUrl': u, 'siteUrl': SITE}, timeout=60).json()
                if r.get('error', {}).get('code') == 429:
                    err = 'quota'
                    time.sleep(20 * (attempt + 1))
                    continue
                ir = r.get('inspectionResult', {}).get('indexStatusResult', {})
                return {'url': u, 'state': ir.get('coverageState') or 'ERROR',
                        'lastCrawl': ir.get('lastCrawlTime'), 'fetch': ir.get('pageFetchState')}
            except Exception as e:  # network blip: retry, then record
                err = str(e)[:80]
        return {'url': u, 'state': 'ERROR', 'error': locals().get('err', 'quota')}

    with cf.ThreadPoolExecutor(3) as ex:
        return list(ex.map(one, urls))


def carry_over_errors(res, today):
    """A URL Google would not answer for today keeps its state from the newest earlier
    snapshot, marked `carried_from`, so one bad run cannot drop it from the request list."""
    failed = [r for r in res if r['state'] == 'ERROR']
    if not failed or not os.path.isdir(OUT_DIR):
        return
    days = sorted((f for f in os.listdir(OUT_DIR) if re.fullmatch(r'\d{4}-\d{2}-\d{2}\.json', f) and f[:10] < today), reverse=True)
    wanted = {r['url'] for r in failed}
    found = {}
    for f in days[:7]:
        try:
            for old in json.load(open(os.path.join(OUT_DIR, f))).get('results', []):
                if old.get('url') in wanted and old['url'] not in found and old.get('state') not in (None, 'ERROR'):
                    found[old['url']] = (old['state'], f[:10])
        except (ValueError, OSError):
            continue
        if len(found) == len(wanted):
            break
    for r in failed:
        if r['url'] in found:
            r['state'], r['carried_from'] = found[r['url']]


# Every engine on https://www.indexnow.org/searchengines.json with a live
# endpoint on 2026-10-06 (Internet Archive is listed there but its host did not
# resolve). The protocol says one push is shared with all of them; we push to
# each anyway because the shared endpoint answers 200 either way and a direct
# push is the only way to see one engine say no.
INDEXNOW_ENDPOINTS = {
    'indexnow': 'https://api.indexnow.org/indexnow',
    'indexnow_bing': 'https://www.bing.com/indexnow',
    'indexnow_yandex': 'https://yandex.com/indexnow',
    'indexnow_seznam': 'https://search.seznam.cz/indexnow',
    'indexnow_naver': 'https://searchadvisor.naver.com/indexnow',
    'indexnow_yep': 'https://indexnow.yep.com/indexnow',
    'indexnow_amazonbot': 'https://indexnow.amazonbot.amazon/indexnow',
}


def indexnow(urls, endpoint=INDEXNOW_ENDPOINTS['indexnow']):
    body = json.dumps({'host': HOST, 'key': INDEXNOW_KEY,
                       'keyLocation': f'https://{HOST}/{INDEXNOW_KEY}.txt', 'urlList': urls}).encode()
    req = urllib.request.Request(endpoint, data=body,
                                 headers={'Content-Type': 'application/json; charset=utf-8',
                                          'User-Agent': 'factoryjet-index-watch'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.status


def bing_env():
    env = {}
    for line in open(os.path.join(HERE, '.env')):
        if '=' in line and not line.startswith('#'):
            k, v = line.split('=', 1)
            env[k.strip()] = v.strip().strip('"')
    return env['BING_WEBMASTER_API_KEY'], env.get('BING_SITE_URL', f'https://{HOST}/')


def bing_call(endpoint, body=None, params=None):
    key, site_url = bing_env()
    q = urllib.parse.urlencode({'apikey': key, **(params or {})})
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(f'https://ssl.bing.com/webmaster/api.svc/json/{endpoint}?{q}', data=data,
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read().decode()
    return json.loads(raw).get('d') if raw.strip() else None


def bing_submit(urls):
    _, site_url = bing_env()
    bing_call('SubmitUrlBatch', {'siteUrl': site_url, 'urlList': urls})
    return 200


def resubmit_sitemaps(files):
    """Resubmit every sitemap to Bing Webmaster (SubmitFeed) and Google (sitemaps PUT)."""
    out = {'bing': {}, 'google': {}}
    _, site_url = bing_env()
    for f in files:
        try:
            bing_call('SubmitFeed', {'siteUrl': site_url, 'feedUrl': f})
            out['bing'][f] = 'ok'
        except Exception as e:
            out['bing'][f] = f'failed: {str(e)[:60]}'
    creds = service_account.Credentials.from_service_account_file(
        KEY, scopes=['https://www.googleapis.com/auth/webmasters'])
    g = AuthorizedSession(creds)
    site = urllib.parse.quote(SITE, safe='')
    for f in files:
        try:
            r = g.put(f'https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps/'
                      f'{urllib.parse.quote(f, safe="")}', timeout=60)
            out['google'][f] = 'ok' if r.status_code in (200, 204) else f'HTTP {r.status_code}'
        except Exception as e:
            out['google'][f] = f'failed: {str(e)[:60]}'
    return out


def bing_sitemap_report():
    """What Bing says about each registered sitemap: last crawl, URL count, errors."""
    _, site_url = bing_env()
    try:
        feeds = bing_call('GetFeeds', params={'siteUrl': site_url}) or []
    except Exception as e:
        return [{'error': str(e)[:80]}]
    rows = []
    for f in feeds:
        crawled = str(f.get('LastCrawled') or '')
        m = re.search(r'/Date\((\d+)', crawled)
        if m:
            crawled = datetime.datetime.utcfromtimestamp(int(m.group(1)) / 1000).date().isoformat()
        rows.append({'url': f.get('Url'), 'status': f.get('Status'), 'urls': f.get('UrlCount'),
                     'lastCrawled': crawled})
    return rows


def pinned():
    """URLs to request first, in file order, from data/index-watch/priority.txt. Missing file = none."""
    try:
        lines = [l.strip() for l in open(PIN_FILE) if l.strip() and not l.lstrip().startswith('#')]
    except FileNotFoundError:
        return []
    return list(dict.fromkeys(lines))  # keep the first mention of each URL


def rank(url):
    path = url.replace(f'https://{HOST}', '') or '/'
    for i, p in enumerate(PRIORITY):
        if re.search(p, path):
            return i
    return len(PRIORITY)


def main():
    dry = '--dry-run' in sys.argv
    send_all = '--all' in sys.argv
    today = datetime.date.today().isoformat()
    lastmod = sitemap_urls()
    urls = sorted(lastmod)
    res = inspect_all(urls)
    carry_over_errors(res, today)
    pins = pinned()
    pin_pos = {u: i for i, u in enumerate(pins)}

    def order(u):  # pinned first in file order, then money pages, then A to Z
        return (0, pin_pos[u], u) if u in pin_pos else (1, rank(u), u)

    todo = sorted((r['url'] for r in res if r['state'] != 'Submitted and indexed' and r['state'] != 'ERROR'), key=order)
    # New or updated pages go to IndexNow + Bing even when Google already has
    # them: Bing only learns about a page from its sitemap or IndexNow, and a
    # page Google indexed on day one was otherwise never pushed to Bing.
    since = (datetime.date.today() - datetime.timedelta(days=3)).isoformat()
    recent = [u for u, lm in lastmod.items() if lm and lm >= since]
    # Unindexed first, then new or updated, then (with --all) everything else.
    # Bing's batch takes only the first 300, and an A to Z list cut there dropped
    # the pages late in the alphabet whenever more than 300 were waiting.
    push = todo + sorted(set(recent) - set(todo), key=order)
    if send_all:
        push += sorted(set(urls) - set(push), key=order)
    summary = {}
    for r in res:
        summary[r['state']] = summary.get(r['state'], 0) + 1

    sent = {}
    if push and not dry:
        # Bing's SubmitUrlBatch: GetUrlSubmissionQuota answered 10,000 a day and
        # 240,000 a month for this site on 2026-10-08. The daily run stays at 300;
        # --all sends the whole list. IndexNow has no practical cap at our volume.
        targets = [(name, (lambda u, ep=ep: indexnow(u, ep)), 5000) for name, ep in INDEXNOW_ENDPOINTS.items()]
        for name, fn, cap in targets + [('bing', bing_submit, len(push) if send_all else 300)]:
            try:
                sent[name] = fn(push[:cap])
            except Exception as e:
                sent[name] = f'failed: {str(e)[:80]}'

    sitemaps = {} if dry else resubmit_sitemaps(sitemap_files())
    feeds = bing_sitemap_report()

    os.makedirs(OUT_DIR, exist_ok=True)
    manual = todo  # already in request order: pinned in file order, then by rank, then A to Z
    json.dump({'date': today, 'total': len(urls), 'summary': summary, 'submitted': sent,
               'submitted_count': 0 if dry else len(push), 'sent_all': send_all, 'pinned': sorted(pins),
               'sitemaps_resubmitted': sitemaps, 'bing_sitemaps': feeds,
               'request_by_hand_in_gsc': manual, 'results': res},
              open(os.path.join(OUT_DIR, f'{today}.json'), 'w'), indent=1)

    print(f'{today}: {len(urls)} sitemap URLs')
    for k, v in sorted(summary.items(), key=lambda kv: -kv[1]):
        print(f'  {v:4}  {k}')
    print(f'  submitted {len(push)} URLs ({len(todo)} unindexed in Google, {len(recent)} new or updated in the last 3 days'
          f'{", plus every other sitemap URL (--all)" if send_all else ""}): {sent or "dry run"}')
    for engine, res_ in (sitemaps or {}).items():
        ok = sum(1 for v in res_.values() if v == 'ok')
        print(f'  sitemaps resubmitted to {engine}: {ok}/{len(res_)}')
    print('  Bing sitemap report:')
    for f in feeds:
        print(f"    {f.get('status')}  {f.get('urls')} URLs  last crawled {f.get('lastCrawled')}  {f.get('url') or f.get('error')}")
    print(f'  request by hand in GSC: {len(manual)} URLs in the JSON, first 15:')
    for u in manual[:15]:
        print('   ', u)


if __name__ == '__main__':
    main()
