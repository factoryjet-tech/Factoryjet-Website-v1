#!/usr/bin/env python3
"""Weekly lead-report data pull: GSC + GA4 + Bing + Clarity + Firestore + Cloudflare.

First written 2026-09-29. Reworked 2026-10-12 after the 5 to 11 Oct report was
checked by hand and six of its numbers turned out wrong or misleading.

Collects numbers only. It prints no conclusions on purpose: the Monday report
is written from this output, and every finding in it has to point at a number
here (see memory: factoryjet-analytics-dashboard-was-lying). ERPNext leads are
pulled separately at report time through the ERPNext MCP, because the ERPNext
API key only lives in Cloudflare secrets.

Window: the previous Monday to Sunday, compared with the week before.

Time zones (they differ, and the output says so):
  GA4        days follow the property time zone (read live, Asia/Calcutta = IST).
  Firestore  the week is cut at midnight IST (UTC+5:30), where the business is.
  GSC        days are Pacific time.
  Clarity    each snapshot is the 24 hours before it was fetched (23:30 local
             time when launchd runs it on schedule). A snapshot taken by hand
             at another hour overlaps the night before, and a failed night
             leaves a hole. The output lists the real windows, the hours not
             covered and the hours covered twice. A folder with no totals.json
             is not counted as a day of data.

GSC: every call sends dataState 'all'. Without it the API returns final data
only, which drops the last 2 days of the week (5 of 7 days on 2026-10-12). The
freshest days can still move a little as Google finalises them; the output
lists the dates returned. Query-level work (striking distance, position bands,
top queries by impressions) runs on the FULL query list, not the top 100 by
clicks. Query rows leave out anonymised queries, so they add up to less than
the property total; both numbers are printed.

Filters that are judgements. The raw total is always kept next to each one:
  1. BOT_COUNTRIES. GA4 sessions from Singapore and China have been ~99% bots
     with ~0 leads (2026-09 audits). They are excluded from "human" totals.
  2. DATACENTRE_CITIES. Six US towns known for large data centres. On
     2026-10-12 the pages the report had called problems were mostly direct,
     desktop, 0-second visits from these towns and from scattered one-off
     cities. Sessions from the list are COUNTED and labelled. They are not
     removed from any total, because Santa Clara and Des Moines also hold real
     businesses. Matching is on city AND region, since the names repeat.
  3. "Sourced" = sessionSource is not "(direct)" and not "(not set)". The bot
     visits found on 2026-10-12 were almost all direct, so sourced sessions
     are the closest thing to a buyer count GA4 gives. US sourced sessions is
     the number that has tracked leads over the 8 weeks to 2026-10-11 (see
     us_sourced_weekly). Direct sessions can still be real people, and a
     sourced session can still be a bot, which is why the 8-week table also
     counts sourced sessions from the data-centre towns.
  4. "Direct zero engagement" = source "(direct)" and not an engaged session
     (GA4: under 10 seconds, one page view, no key event). "Direct zero
     seconds" = source "(direct)" and 0 seconds of engagement time. The second
     is the stricter bot signal: GA4 calls a visit "engaged" when it records
     two page views in 0 seconds, and on 2026-10-12 two such visits sat on one
     page. It is a floor: GA4 gives no per-session rows, so sessions that share
     one landing page, place, device and day are counted only when their
     combined engagement time is 0.
  5. Firestore test_label = the word "test" in the name, company or message, or
     an email on our own domain. Only the yes/no flag is stored.

Firestore: lead docs for the week from `contactus` (hero and modal forms) and
`contactpage` (the /contact form). No names, emails, phones or message text
are written. A doc with honeypot 'filled' is a spam-trap lead: it is kept in
Firestore but sends no generate_lead by design (commit dfc4755, 2026-10-08), so
it must not be counted in a GA4 vs CRM gap.

Usage:
    python3 weekly_report_data.py                 # previous Mon-Sun
    python3 weekly_report_data.py 2026-09-21      # week starting that Monday
Writes data/weekly/weekly_<start>.json and data/weekly/weekly_<start>.md
"""
import datetime as dt
import glob
import json
import os
import re
import subprocess
import sys
import urllib.parse

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'data', 'weekly')
KEY = '/Users/bhaveshbarot/FactoryJet/secrets/factoryjet-seo-7fa130b491b8.json'
GA4 = 'properties/516928458'
GSC_SITE = 'sc-domain:factoryjet.com'
GSC_DATA_STATE = 'all'
GSC_FULL = 100000  # ask for every row; the API pages 25,000 at a time
FIRESTORE_PROJECT = 'factoryjet-c5f8a'
FIRESTORE_COLLECTIONS = ['contactus', 'contactpage']
IST = dt.timezone(dt.timedelta(hours=5, minutes=30))
OWN_EMAIL_DOMAINS = ('@factoryjet.com',)
US = 'United States'
BOT_COUNTRIES = ['Singapore', 'China']
# (city, region) pairs as GA4 names them. A judgement: see the docstring.
DATACENTRE_CITIES = [('The Dalles', 'Oregon'), ('Boardman', 'Oregon'), ('Ashburn', 'Virginia'),
                     ('Council Bluffs', 'Iowa'), ('Des Moines', 'Iowa'), ('Santa Clara', 'California')]
NO_SOURCE = ['(direct)', '(not set)']
LEAD_EVENTS = ['generate_lead', 'form_start', 'book_call_click', 'whatsapp_click', 'email_click', 'phone_click']
FUNNEL_EVENTS = ['form_start', 'form_submit_attempt', 'form_error', 'form_spam_trap', 'generate_lead']
WEEKS_BACK = 8
POSITION_BANDS = ['1-3', '4-10', '11-20', '21-50', '51+']


def session(scope):
    return AuthorizedSession(service_account.Credentials.from_service_account_file(KEY, scopes=[scope]))


def windows(arg):
    if arg:
        start = dt.date.fromisoformat(arg)
        if start.weekday() != 0:  # every table here says "Monday to Sunday"; refuse to mislabel another window
            sys.exit(f'{arg} is a {start.strftime("%A")}, not a Monday. Pass the Monday that starts the week.')
    else:
        today = dt.date.today()
        start = today - dt.timedelta(days=today.weekday() + 7)
    end = start + dt.timedelta(days=6)
    return start, end, start - dt.timedelta(days=7), start - dt.timedelta(days=1)


def lst(x):
    """A query that failed comes back as {'error': ...}. Treat it as no rows."""
    return x if isinstance(x, list) else []


def err(x):
    return x.get('error') if isinstance(x, dict) else None


def num(v):
    """GA4 sends every value as text. New keys store numbers."""
    try:
        f = float(v)
    except (TypeError, ValueError):
        return v
    return int(f) if f == int(f) else round(f, 2)


# ── GA4 ────────────────────────────────────────────────────────────────────
def ga4_report(s, start, end, dims, metrics, flt=None, limit=50, order=None, meta=None):
    body = {'dateRanges': [{'startDate': str(start), 'endDate': str(end)}],
            'dimensions': [{'name': d} for d in dims], 'metrics': [{'name': m} for m in metrics], 'limit': limit}
    if flt:
        body['dimensionFilter'] = flt
    if order:
        body['orderBys'] = [{'metric': {'metricName': order}, 'desc': True}]
    r = s.post(f'https://analyticsdata.googleapis.com/v1beta/{GA4}:runReport', json=body).json()
    if 'error' in r:
        return {'error': r['error'].get('message')}
    if meta is not None:
        meta['row_count'] = r.get('rowCount', 0)
        meta['rows_returned'] = len(r.get('rows', []))
    return [dict(zip(dims + metrics, [v['value'] for v in row.get('dimensionValues', [])] + [v['value'] for v in row['metricValues']]))
            for row in r.get('rows', [])]


def f_eq(field, value):
    return {'filter': {'fieldName': field, 'stringFilter': {'value': value, 'matchType': 'EXACT'}}}


def f_contains(field, value):
    return {'filter': {'fieldName': field, 'stringFilter': {'value': value, 'matchType': 'CONTAINS'}}}


def f_in(field, values):
    return {'filter': {'fieldName': field, 'inListFilter': {'values': list(values)}}}


def f_not(expr):
    return {'notExpression': expr}


def f_and(*exprs):
    return {'andGroup': {'expressions': list(exprs)}}


def f_or(*exprs):
    return {'orGroup': {'expressions': list(exprs)}}


def not_bots():
    return f_not(f_in('country', BOT_COUNTRIES))


def sourced():
    return f_not(f_in('sessionSource', NO_SOURCE))


def datacentre():
    return f_or(*[f_and(f_eq('city', c), f_eq('region', r)) for c, r in DATACENTRE_CITIES])


def is_datacentre(row):
    return (row.get('city'), row.get('region')) in DATACENTRE_CITIES


def datacentre_rows(rows):
    return rows if err(rows) else [dict(r, sessions=num(r['sessions']), engagedSessions=num(r['engagedSessions'])) for r in rows]


def source_split(rows):
    """Sessions by sessionSource -> all / direct / (not set) / sourced, with engaged counts."""
    if err(rows):
        return {'error': err(rows)}
    out = {'sessions': 0, 'engaged_sessions': 0, 'direct_sessions': 0, 'direct_engaged_sessions': 0,
           'direct_zero_engagement_sessions': 0, 'not_set_sessions': 0, 'sourced_sessions': 0, 'sourced_engaged_sessions': 0}
    for r in rows:
        n, e, src = num(r['sessions']), num(r['engagedSessions']), r['sessionSource']
        out['sessions'] += n
        out['engaged_sessions'] += e
        if src == '(direct)':
            out['direct_sessions'] += n
            out['direct_engaged_sessions'] += e
            out['direct_zero_engagement_sessions'] += n - e
        elif src == '(not set)':
            out['not_set_sessions'] += n
        else:
            out['sourced_sessions'] += n
            out['sourced_engaged_sessions'] += e
    return out


def direct_zero_seconds(s, start, end):
    """Direct sessions with 0 seconds of engagement time, human filter, plus the US part.
    Rows are as fine as GA4 allows (place + device + day + landing page), so a row is nearly always one session."""
    rows = ga4_report(s, start, end, ['country', 'region', 'city', 'deviceCategory', 'date', 'landingPage'], ['sessions', 'userEngagementDuration'],
                      f_and(not_bots(), f_eq('sessionSource', '(direct)')), limit=100000)
    if err(rows):
        return rows
    zero = [r for r in rows if num(r['userEngagementDuration']) == 0]
    return {'human': sum(num(r['sessions']) for r in zero), 'us': sum(num(r['sessions']) for r in zero if r['country'] == US),
            'direct_sessions_in_rows': sum(num(r['sessions']) for r in rows)}


def ga4_timezone(s):
    try:
        r = s.get(f'https://analyticsadmin.googleapis.com/v1beta/{GA4}').json()
        return r.get('timeZone') or {'error': r.get('error', {}).get('message')}
    except Exception as e:
        return {'error': f'{type(e).__name__}: {e}'}


def us_sourced_weekly(s, start, weeks=WEEKS_BACK):
    """One row per Monday-to-Sunday week, oldest first, ending with the report week."""
    us = f_eq('country', US)
    out = []
    for i in range(weeks - 1, -1, -1):
        a = start - dt.timedelta(days=7 * i)
        b = a + dt.timedelta(days=6)
        by_src = ga4_report(s, a, b, ['sessionSource'], ['sessions', 'engagedSessions'], us, limit=1000, order='sessions')
        leads = ga4_report(s, a, b, [], ['eventCount'], f_and(us, f_eq('eventName', 'generate_lead')))
        dc = ga4_report(s, a, b, [], ['sessions'], f_and(us, sourced(), datacentre()))
        row = {'week_start': str(a), 'week_end': str(b)}
        bad = err(by_src) or err(leads) or err(dc)
        if bad:
            row['error'] = bad
            out.append(row)
            continue
        split = source_split(by_src)
        src = [r for r in by_src if r['sessionSource'] not in NO_SOURCE]
        google = [r for r in src if r['sessionSource'] == 'google']
        chatgpt = [r for r in src if 'chatgpt' in r['sessionSource'].lower()]
        row.update({
            'us_sessions_all': split['sessions'],
            'us_direct_sessions': split['direct_sessions'],
            'us_not_set_sessions': split['not_set_sessions'],
            'sourced_sessions': split['sourced_sessions'],
            'sourced_engaged_sessions': split['sourced_engaged_sessions'],
            'google_sessions': sum(num(r['sessions']) for r in google),
            'google_engaged_sessions': sum(num(r['engagedSessions']) for r in google),
            'chatgpt_sessions': sum(num(r['sessions']) for r in chatgpt),
            'chatgpt_engaged_sessions': sum(num(r['engagedSessions']) for r in chatgpt),
            'sourced_datacentre_city_sessions': num(dc[0]['sessions']) if dc else 0,
            'generate_lead_events': num(leads[0]['eventCount']) if leads else 0,
            'sources': {r['sessionSource']: num(r['sessions']) for r in src},
        })
        row['other_sourced_sessions'] = row['sourced_sessions'] - row['google_sessions'] - row['chatgpt_sessions']
        out.append(row)
    return out


def add_landing_breakdown(s, start, end, pages):
    """Adds source, city and device facts to each row of landing_pages_human (in place)."""
    names = [p['landingPage'] for p in lst(pages) if p.get('landingPage')]
    if not names:
        return {'error': 'no landing pages to break down'}
    meta = {}
    group = ['sessionSource', 'country', 'region', 'city', 'deviceCategory']
    rows = ga4_report(s, start, end, ['landingPage'] + group + ['date'], ['sessions', 'engagedSessions', 'userEngagementDuration'],
                      f_and(not_bots(), f_in('landingPage', names)), limit=50000, order='sessions', meta=meta)
    if err(rows):
        return {'error': err(rows)}
    by_page = {}
    for r in rows:
        by_page.setdefault(r['landingPage'], []).append(r)
    for p in pages:
        p['sourced_sessions'] = p['direct_sessions'] = p['direct_zero_engagement_sessions'] = p['direct_zero_seconds_sessions'] = 0
        p['direct_zero_engagement_desktop_sessions'] = p['datacentre_city_sessions'] = p['breakdown_sessions_total'] = 0
        groups = {}
        for r in by_page.get(p['landingPage'], []):
            n, e, secs = num(r['sessions']), num(r['engagedSessions']), num(r['userEngagementDuration'])
            zero = n if secs == 0 else 0  # a row is one page + source + place + device + day, nearly always one session
            p['breakdown_sessions_total'] += n
            if r['sessionSource'] == '(direct)':
                p['direct_sessions'] += n
                p['direct_zero_engagement_sessions'] += n - e
                p['direct_zero_seconds_sessions'] += zero
                if r['deviceCategory'] == 'desktop':
                    p['direct_zero_engagement_desktop_sessions'] += n - e
            elif r['sessionSource'] != '(not set)':
                p['sourced_sessions'] += n
            if is_datacentre(r):
                p['datacentre_city_sessions'] += n
            g = groups.setdefault(tuple(r[k] for k in group), dict({k: r[k] for k in group}, sessions=0, engagedSessions=0,
                                                                  engagement_seconds=0, zero_second_sessions=0, datacentre_city=is_datacentre(r)))
            g['sessions'] += n
            g['engagedSessions'] += e
            g['engagement_seconds'] += secs
            g['zero_second_sessions'] += zero
        p['breakdown'] = sorted(groups.values(), key=lambda g: (-g['sessions'], g['sessionSource'], g['country'], g['city']))
    return {'rows_returned': meta.get('rows_returned'), 'row_count': meta.get('row_count'),
            'truncated': meta.get('row_count', 0) > meta.get('rows_returned', 0)}


def us_landing_pages(s, start, end):
    rows = ga4_report(s, start, end, ['landingPage', 'sessionSource', 'region', 'city', 'date'],
                      ['sessions', 'engagedSessions', 'keyEvents', 'userEngagementDuration'], f_eq('country', US), limit=50000, order='sessions')
    if err(rows):
        return rows
    pages = {}
    for r in rows:
        n, e = num(r['sessions']), num(r['engagedSessions'])
        p = pages.setdefault(r['landingPage'], {'landingPage': r['landingPage'], 'sessions': 0, 'engagedSessions': 0, 'keyEvents': 0,
                                                'sourced_sessions': 0, 'sourced_engaged_sessions': 0, 'direct_sessions': 0,
                                                'direct_zero_engagement_sessions': 0, 'direct_zero_seconds_sessions': 0,
                                                'datacentre_city_sessions': 0, 'sources': {}, 'cities': {}})
        p['sessions'] += n
        p['engagedSessions'] += e
        p['keyEvents'] += num(r['keyEvents'])
        if r['sessionSource'] == '(direct)':
            p['direct_sessions'] += n
            p['direct_zero_engagement_sessions'] += n - e
            p['direct_zero_seconds_sessions'] += n if num(r['userEngagementDuration']) == 0 else 0
        elif r['sessionSource'] != '(not set)':
            p['sourced_sessions'] += n
            p['sourced_engaged_sessions'] += e
        if is_datacentre(r):
            p['datacentre_city_sessions'] += n
        p['sources'][r['sessionSource']] = p['sources'].get(r['sessionSource'], 0) + n
        city = f"{r['city']}, {r['region']}"
        p['cities'][city] = p['cities'].get(city, 0) + n
    return sorted(pages.values(), key=lambda p: (-p['sourced_sessions'], -p['sessions'], p['landingPage']))[:40]


def form_funnel(s, start, end):
    rows = ga4_report(s, start, end, ['date', 'eventName', 'pagePath', 'country'], ['eventCount'], f_in('eventName', FUNNEL_EVENTS), limit=5000)
    if err(rows):
        return rows
    rows.sort(key=lambda r: (r['date'], FUNNEL_EVENTS.index(r['eventName']), r['pagePath'], r['country']))
    totals_all = {e: 0 for e in FUNNEL_EVENTS}
    totals_us = {e: 0 for e in FUNNEL_EVENTS}
    for r in rows:
        r['eventCount'] = num(r['eventCount'])
        totals_all[r['eventName']] += r['eventCount']
        if r['country'] == US:
            totals_us[r['eventName']] += r['eventCount']
    return {'totals_all_countries': totals_all, 'totals_us': totals_us, 'rows': rows,
            'note': 'form_submit_attempt, form_error and form_spam_trap only reach GA4 from 2026-10-08 (GTM versions 14 and 15). '
                    'form_start comes from GA4 enhanced measurement. A trapped lead sends form_spam_trap and no generate_lead. '
                    'On 2026-10-08 the new GTM tags were tested by hand from India, which left extra rows that day (form_name is not a '
                    'GA4 dimension, so they cannot be filtered out here).'}


def ga4(start, end, pstart, pend):
    s = session('https://www.googleapis.com/auth/analytics.readonly')
    lead_filter = f_eq('eventName', 'generate_lead')
    out = {'property_timezone': ga4_timezone(s),
           'definitions': {
               'human': f"country is not {' or '.join(BOT_COUNTRIES)} (a judgement)",
               'sourced': 'sessionSource is not (direct) and not (not set)',
               'direct_zero_engagement': 'sessionSource is (direct) and the session was not engaged (under 10 s, one page view, no key event)',
               'direct_zero_seconds': 'sessionSource is (direct) and 0 seconds of engagement time. A floor: sessions sharing one landing page, '
                                      'place, device and day are counted only when their combined engagement time is 0',
               'datacentre_city': 'city and region in ' + '; '.join(f'{c}, {r}' for c, r in DATACENTRE_CITIES) + ' (a judgement; counted, never removed)',
               'google_sessions': 'sessionSource is exactly google (organic and paid together)',
               'chatgpt_sessions': 'sessionSource contains chatgpt'}}
    out['us_sourced_weekly'] = us_sourced_weekly(s, start)
    for label, (a, b) in {'this_week': (start, end), 'prior_week': (pstart, pend)}.items():
        out[label] = {
            'totals_all': ga4_report(s, a, b, [], ['sessions', 'totalUsers', 'engagedSessions', 'keyEvents']),
            'totals_human': ga4_report(s, a, b, [], ['sessions', 'totalUsers', 'engagedSessions', 'keyEvents'], not_bots()),
            'lead_events': ga4_report(s, a, b, ['eventName'], ['eventCount'], f_in('eventName', LEAD_EVENTS)),
            'human_source_split': source_split(ga4_report(s, a, b, ['sessionSource'], ['sessions', 'engagedSessions'], not_bots(), limit=1000)),
            'us_source_split': source_split(ga4_report(s, a, b, ['sessionSource'], ['sessions', 'engagedSessions'], f_eq('country', US), limit=1000)),
            'datacentre_cities': datacentre_rows(ga4_report(s, a, b, ['city', 'region'], ['sessions', 'engagedSessions'], datacentre(), limit=50, order='sessions')),
        }
        zero = direct_zero_seconds(s, a, b)
        for key, scope in (('human_source_split', 'human'), ('us_source_split', 'us')):
            if not err(zero) and not err(out[label][key]):  # left out on failure, so the markdown prints n/a and never a false 0
                out[label][key]['direct_zero_seconds_sessions'] = zero[scope]
        if not err(zero) and not err(out[label]['human_source_split']):
            out[label]['human_source_split']['direct_sessions_in_zero_seconds_query'] = zero['direct_sessions_in_rows']
    w = out['this_week']
    w['by_country'] = ga4_report(s, start, end, ['country'], ['sessions', 'engagedSessions', 'keyEvents'], order='sessions', limit=15)
    w['by_channel_human'] = ga4_report(s, start, end, ['sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents'], not_bots(), order='sessions')
    w['by_source_human'] = ga4_report(s, start, end, ['sessionSource'], ['sessions', 'keyEvents'], not_bots(), order='sessions', limit=20)
    w['landing_pages_human'] = ga4_report(s, start, end, ['landingPage'], ['sessions', 'engagementRate', 'averageSessionDuration', 'keyEvents'],
                                          not_bots(), order='sessions', limit=30)
    w['landing_pages_human_breakdown_meta'] = add_landing_breakdown(s, start, end, w['landing_pages_human'])
    w['device_human'] = ga4_report(s, start, end, ['deviceCategory'], ['sessions', 'engagementRate', 'keyEvents'], not_bots())
    w['leads_by_service'] = ga4_report(s, start, end, ['customEvent:service', 'customEvent:landing_page', 'customEvent:ai_assistant',
                                                       'customEvent:lead_source', 'sessionSource'], ['eventCount'], lead_filter)
    w['leads_by_country'] = ga4_report(s, start, end, ['country'], ['eventCount'], lead_filter, order='eventCount')
    w['sourced_by_country'] = ga4_report(s, start, end, ['country'], ['sessions', 'engagedSessions', 'keyEvents'],
                                         f_and(not_bots(), sourced()), order='sessions', limit=25)
    w['sourced_by_source_and_country'] = ga4_report(s, start, end, ['sessionSource', 'country'], ['sessions', 'engagedSessions', 'keyEvents'],
                                                    f_and(not_bots(), sourced()), order='sessions', limit=200)
    w['chatgpt_by_landing_page'] = ga4_report(s, start, end, ['landingPagePlusQueryString', 'country'],
                                              ['sessions', 'engagedSessions', 'averageSessionDuration', 'keyEvents'],
                                              f_contains('sessionSource', 'chatgpt'), order='sessions', limit=200)
    w['us_landing_pages'] = us_landing_pages(s, start, end)
    w['form_funnel'] = form_funnel(s, start, end)
    return out


# ── GSC ────────────────────────────────────────────────────────────────────
def gsc_query(s, start, end, dims, row_limit=250, country=None, meta=None):
    """Always asks for dataState 'all'. Pages through the API when row_limit is above 25,000."""
    url = f'https://www.googleapis.com/webmasters/v3/sites/{GSC_SITE.replace(":", "%3A")}/searchAnalytics/query'
    rows = []
    while True:
        want = min(row_limit - len(rows), 25000)
        body = {'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': want, 'startRow': len(rows),
                'dataState': GSC_DATA_STATE}
        if country:
            body['dimensionFilterGroups'] = [{'filters': [{'dimension': 'country', 'operator': 'equals', 'expression': country}]}]
        r = s.post(url, json=body).json()
        if 'error' in r:
            return {'error': r['error'].get('message')}
        if meta is not None and r.get('metadata'):
            meta.update(r['metadata'])
        batch = r.get('rows', [])
        rows += batch
        if len(batch) < want or len(rows) >= row_limit:
            break
    return [dict(zip(dims, row['keys']), clicks=row['clicks'], impressions=row['impressions'],
                 ctr=round(row['ctr'] * 100, 2), position=round(row['position'], 1)) for row in rows]


def totals(rows, meta=None):
    if isinstance(rows, dict):
        return rows
    c = sum(r['clicks'] for r in rows)
    i = sum(r['impressions'] for r in rows)
    out = {'clicks': c, 'impressions': i, 'days_returned': len(rows), 'dates': [r['date'] for r in rows], 'data_state': GSC_DATA_STATE}
    if meta:
        out['api_metadata'] = meta
    return out


def by_impressions(rows, key):
    return sorted(rows, key=lambda r: (-r['impressions'], r['position'], r[key]))


def band(position):
    return '1-3' if position <= 3 else '4-10' if position <= 10 else '11-20' if position <= 20 else '21-50' if position <= 50 else '51+'


def striking(rows):
    """Same rule as before (pos 4-15, 20+ impressions, CTR under 2%), now on the full list."""
    wide = [r for r in rows if 4 <= r['position'] <= 15 and r['impressions'] >= 20]
    return by_impressions([r for r in wide if r['ctr'] < 2], 'query'), {
        'query_rows_scanned': len(rows), 'pos_4_15_and_20plus_impressions': len(wide), 'of_those_ctr_under_2pct': len([r for r in wide if r['ctr'] < 2])}


def gsc(start, end, pstart, pend):
    s = session('https://www.googleapis.com/auth/webmasters.readonly')

    def day_totals(a, b, country=None):
        meta = {}
        return totals(gsc_query(s, a, b, ['date'], country=country, meta=meta), meta)
    out = {
        'data_state': GSC_DATA_STATE,
        'this_week_total': day_totals(start, end),
        'prior_week_total': day_totals(pstart, pend),
        'this_week_us': day_totals(start, end, 'usa'),
        'prior_week_us': day_totals(pstart, pend, 'usa'),
        'this_week_uk': day_totals(start, end, 'gbr'),
        'this_week_ind': day_totals(start, end, 'ind'),
        # page-only rows: page x country undercounts (see memory gsc-api-page-country-undercount)
        'top_pages': gsc_query(s, start, end, ['page'], 40),
    }
    q_all = gsc_query(s, start, end, ['query'], GSC_FULL)
    q_us = gsc_query(s, start, end, ['query'], GSC_FULL, country='usa')
    p_us = gsc_query(s, start, end, ['page'], GSC_FULL, country='usa')
    # A failed list stays an error dict in every key built from it. It must never read as "0 queries".
    out['query_rows'] = {'note': 'Query rows leave out anonymised queries, so they add up to less than the property totals above.'}
    out['striking_distance_counts'] = {}
    for scope, rows, top_key, top_n, sd_key in (('us', q_us, 'top_queries_us', 60, 'striking_distance_us'),
                                                 ('all', q_all, 'top_queries_all', 100, 'striking_distance')):
        if err(rows):
            out[top_key] = out[sd_key] = out['query_rows'][scope] = out['striking_distance_counts'][scope] = rows
            continue
        out[top_key] = by_impressions(rows, 'query')[:top_n]
        out['query_rows'][scope] = {'rows': len(rows), 'clicks': sum(r['clicks'] for r in rows), 'impressions': sum(r['impressions'] for r in rows)}
        out[sd_key], out['striking_distance_counts'][scope] = striking(rows)
    if err(q_us):
        out['us_impressions_by_position_band'] = q_us
    else:
        bands = {b: {'impressions': 0, 'clicks': 0, 'queries': 0} for b in POSITION_BANDS}
        for r in q_us:
            b = bands[band(r['position'])]
            b['impressions'] += r['impressions']
            b['clicks'] += r['clicks']
            b['queries'] += 1
        out['us_impressions_by_position_band'] = bands
    out['top_pages_us'] = p_us if err(p_us) else by_impressions(p_us, 'page')[:25]
    out['top_pages_us_note'] = ('Page rows with a country filter undercount clicks on a small site '
                                '(memory gsc-api-page-country-undercount). Read them as a relative split.')
    return out


# ── Bing ───────────────────────────────────────────────────────────────────
def bing(start, end, pstart, pend):
    for cmd in ('status', 'queries', 'pages'):
        subprocess.run([sys.executable, os.path.join(HERE, 'bing_webmaster.py'), cmd], capture_output=True, timeout=180)
    out = {}
    try:
        traffic = json.load(open(os.path.join(HERE, 'data', 'bing_status.json'))).get('traffic', [])

        def week(a, b):
            rows = [t for t in traffic if str(a) <= t.get('Date', '')[:10] <= str(b)]
            return {'clicks': sum(t['Clicks'] for t in rows), 'impressions': sum(t['Impressions'] for t in rows), 'days_returned': len(rows)}
        out['this_week'] = week(start, end)
        out['prior_week'] = week(pstart, pend)
    except Exception as e:
        out['traffic_error'] = str(e)
    for name in ('queries', 'pages'):
        try:
            rows = json.load(open(os.path.join(HERE, 'data', f'bing_{name}.json')))
            out[f'top_{name}_bing_window'] = sorted(rows, key=lambda r: (-r.get('Clicks', 0), -r.get('Impressions', 0)))[:25]
        except Exception as e:
            out[f'{name}_error'] = str(e)
    out['note'] = "Bing top queries/pages cover Bing's own lookback window, not just this week."
    return out


# ── Clarity (sum of daily snapshots) ───────────────────────────────────────
def norm_path(url):
    """Path only: no host, no query string, no trailing slash (the home page stays '/')."""
    path = urllib.parse.urlsplit(url).path or '/'
    return path.rstrip('/') or '/'


def clarity_coverage(fetched, start, end):
    """Each snapshot holds the 24 hours before its fetch time (clarity_snapshot.py asks for numOfDays=1).
    A snapshot taken off schedule overlaps its neighbour, and Clarity sessions in the overlap are counted twice."""
    wk_lo = dt.datetime.combine(start, dt.time.min)
    wk_hi = dt.datetime.combine(end + dt.timedelta(days=1), dt.time.min)
    wins = []
    for day, stamp in fetched.items():
        try:
            hi = dt.datetime.fromisoformat(stamp)
        except (TypeError, ValueError):
            return {'error': f'no usable fetched_at in the {day} snapshot'}
        wins.append((hi - dt.timedelta(hours=24), hi, day))
    wins.sort()
    overlap = covered = 0.0
    cursor, prev_end, snaps = wk_lo, None, []
    for lo, hi, day in wins:
        over = max(0.0, (min(prev_end, hi) - lo).total_seconds() / 3600) if prev_end else 0.0
        overlap += over
        prev_end = max(prev_end, hi) if prev_end else hi
        a, b = max(lo, cursor), min(hi, wk_hi)
        if b > a:
            covered += (b - a).total_seconds() / 3600
            cursor = b
        snaps.append({'day': day, 'window_start': lo.strftime('%Y-%m-%d %H:%M'), 'window_end': hi.strftime('%Y-%m-%d %H:%M'),
                      'overlap_with_earlier_snapshots_hours': round(over, 1)})
    week_hours = (wk_hi - wk_lo).total_seconds() / 3600
    return {'snapshots': snaps, 'week_hours': round(week_hours), 'covered_hours': round(covered, 1), 'uncovered_hours': round(week_hours - covered, 1),
            'overlap_hours': round(overlap, 1), 'clock': 'local time of the machine that took the snapshots',
            'note': 'Sessions inside an overlap are in two snapshots, so the weekly sums count them twice. Hours not covered are missing from the sums.'}


def clarity(start, end):
    days = [d for d in sorted(glob.glob(os.path.join(HERE, 'data', 'clarity', '20*')))
            if str(start) <= os.path.basename(d) <= str(end)]
    out = {'days_available': [], 'totals': {}, 'pages': {}, 'sources': {}, 'devices': {}}
    t = out['totals']
    scroll = []
    fetched = {}
    for d in days:
        try:
            snap = json.load(open(os.path.join(d, 'totals.json')))
            data = snap['data']
        except Exception:
            continue  # a folder with no totals.json is a failed snapshot, not a day of data
        out['days_available'].append(os.path.basename(d))
        fetched[os.path.basename(d)] = snap.get('fetched_at')
        for m in data:
            info = (m.get('information') or [{}])[0]
            name = m['metricName']
            if name == 'Traffic':
                t['sessions'] = t.get('sessions', 0) + int(info.get('totalSessionCount', 0))
                t['bot_sessions'] = t.get('bot_sessions', 0) + int(info.get('totalBotSessionCount', 0))
            elif name == 'ScrollDepth':
                scroll.append(float(info.get('averageScrollDepth') or 0))
            elif name in ('DeadClickCount', 'RageClickCount', 'QuickbackClick', 'ExcessiveScroll', 'ScriptErrorCount', 'ErrorClickCount'):
                t[name] = t.get(name, 0) + int(info.get('subTotal') or 0)
                t[name + '_sessions'] = t.get(name + '_sessions', 0) + round(float(info.get('sessionsWithMetricPercentage') or 0) * int(info.get('sessionsCount') or 0) / 100)
            elif name == 'EngagementTime':
                t['active_time_s'] = t.get('active_time_s', 0) + int(info.get('activeTime') or 0)
        for split, key in (('url', 'pages'), ('source', 'sources'), ('device', 'devices')):
            try:
                sdata = json.load(open(os.path.join(d, f'{split}.json')))['data']
            except Exception:
                continue
            for m in sdata:
                for row in m.get('information') or []:
                    label = row.get('Url') or row.get('URL') or row.get('Source') or row.get('Device') or row.get('name')
                    if not label:
                        continue
                    agg = out[key].setdefault(label, {})
                    name = m['metricName']
                    if name == 'Traffic':
                        agg['sessions'] = agg.get('sessions', 0) + int(row.get('totalSessionCount') or 0)
                        agg['bot_sessions'] = agg.get('bot_sessions', 0) + int(row.get('totalBotSessionCount') or 0)
                    elif name in ('DeadClickCount', 'RageClickCount', 'QuickbackClick', 'ScriptErrorCount'):
                        agg[name] = agg.get(name, 0) + int(row.get('subTotal') or 0)
                    elif name == 'ScrollDepth':
                        agg.setdefault('scroll', []).append(float(row.get('averageScrollDepth') or 0))
    if scroll:
        t['avg_scroll_depth_pct'] = round(sum(scroll) / len(scroll), 1)
    # Clarity keeps the query string, so one page can sit under several URLs. Add them up per path
    # BEFORE the top-30 cut, so each URL can be compared with GA4, which has no query string.
    same_path = {}
    for url, v in out['pages'].items():
        same_path[norm_path(url)] = same_path.get(norm_path(url), 0) + v.get('sessions', 0)
    for url, v in out['pages'].items():
        v['path'] = norm_path(url)
        v['clarity_sessions_same_path'] = same_path[v['path']]
    for key in ('pages', 'sources', 'devices'):
        for v in out[key].values():
            if 'scroll' in v:
                v['avg_scroll'] = round(sum(v['scroll']) / len(v['scroll']), 1)
                del v['scroll']
        out[key] = dict(sorted(out[key].items(), key=lambda kv: -kv[1].get('sessions', 0))[:30])
    week = [str(start + dt.timedelta(days=i)) for i in range((end - start).days + 1)]
    out['days_without_data'] = [d for d in week if d not in out['days_available']]
    out['coverage'] = clarity_coverage(fetched, start, end)
    return out


def clarity_vs_ga4(report, start, end):
    """Puts the GA4 session count (all countries, no filter) next to each Clarity URL."""
    c = report.get('clarity')
    if not isinstance(c, dict) or 'pages' not in c:
        return
    s = session('https://www.googleapis.com/auth/analytics.readonly')
    any_page = ga4_report(s, start, end, ['pagePath'], ['sessions'], limit=100000)
    landing = ga4_report(s, start, end, ['landingPage'], ['sessions'], limit=100000)
    daily = ga4_report(s, start, end, ['date', 'pagePath'], ['sessions'], limit=250000)
    day_totals = ga4_report(s, start, end, ['date'], ['sessions'], limit=50)
    week_total = ga4_report(s, start, end, [], ['sessions'])
    bad = err(any_page) or err(landing) or err(daily) or err(day_totals) or err(week_total)
    if bad:
        c['ga4_compare'] = {'error': bad}
        return
    days = {d.replace('-', '') for d in c.get('days_available', [])}

    def add_up(rows, key, only_days=None):
        got = {}
        for r in rows:
            if only_days is not None and r['date'] not in only_days:
                continue
            got[norm_path(r[key])] = got.get(norm_path(r[key]), 0) + num(r['sessions'])
        return got
    g_any, g_land, g_days = add_up(any_page, 'pagePath'), add_up(landing, 'landingPage'), add_up(daily, 'pagePath', days)
    for v in c['pages'].values():
        v['ga4_sessions_any_page'] = g_any.get(v['path'], 0)
        v['ga4_sessions_any_page_clarity_days'] = g_days.get(v['path'], 0)
        v['ga4_sessions_landing'] = g_land.get(v['path'], 0)
    c['ga4_compare'] = {
        'clarity_days': len(days), 'ga4_days': (end - start).days + 1,
        'clarity_sessions': c['totals'].get('sessions'), 'clarity_bot_sessions': c['totals'].get('bot_sessions'),
        'ga4_sessions_all_week': num(week_total[0]['sessions']) if week_total else 0,
        'ga4_sessions_all_clarity_days': sum(num(r['sessions']) for r in day_totals if r['date'] in days),
        'note': 'Per URL: clarity sessions is that exact URL (query string kept). clarity_sessions_same_path adds every URL with the same path. '
                'ga4_sessions_any_page counts GA4 sessions with a view of that path, all countries, whole week. '
                'ga4_sessions_any_page_clarity_days is the same on the Clarity snapshot dates only. ga4_sessions_landing counts sessions that started there.'}


# ── Firestore (ground truth for captured leads) ────────────────────────────
def parse_utc(stamp):
    """Firestore createTime: '2026-10-08T07:41:54.764901Z', with 0 to 9 digits after the dot."""
    m = re.match(r'(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d)(?:\.(\d+))?Z$', stamp)
    whole = dt.datetime.strptime(m.group(1), '%Y-%m-%dT%H:%M:%S').replace(tzinfo=dt.timezone.utc)
    return whole + dt.timedelta(microseconds=int((m.group(2) or '0')[:6].ljust(6, '0')))


def fs_value(v):
    for k in ('stringValue', 'timestampValue', 'booleanValue', 'integerValue', 'doubleValue'):
        if k in v:
            return v[k]
    return ''


def firestore_leads(start, end):
    s = session('https://www.googleapis.com/auth/datastore')
    base = f'https://firestore.googleapis.com/v1/projects/{FIRESTORE_PROJECT}/databases/(default)/documents'
    lo = dt.datetime.combine(start, dt.time.min, IST)
    hi = dt.datetime.combine(end + dt.timedelta(days=1), dt.time.min, IST)
    keep = ['source', 'serviceCategory', 'landingPage', 'channel', 'aiAssistant', 'turnstileVerdict', 'honeypot', 'region', 'page']
    label_from = ['name', 'company', 'message', 'email']  # read to set test_label, never written out
    test_word = re.compile(r'\btest(ing)?\b', re.I)
    docs, fetched = [], {}
    for coll in FIRESTORE_COLLECTIONS:
        token, fetched[coll] = None, 0
        while True:
            params = [('pageSize', 300)] + [('mask.fieldPaths', f) for f in keep + label_from]
            if token:
                params.append(('pageToken', token))
            r = s.get(f'{base}/{coll}', params=params).json()
            if 'error' in r:
                return {'error': f"{coll}: {r['error'].get('message')}"}
            for d in r.get('documents', []):
                fetched[coll] += 1
                created = parse_utc(d['createTime'])
                if not lo <= created < hi:
                    continue
                f = {k: fs_value(v) for k, v in d.get('fields', {}).items()}
                basis = [k for k in ('name', 'company', 'message') if test_word.search(str(f.get(k, '')))]
                if str(f.get('email', '')).lower().endswith(OWN_EMAIL_DOMAINS):
                    basis.append('own_domain_email')
                row = {'created_ist': created.astimezone(IST).strftime('%Y-%m-%d %H:%M'),
                       'created_utc': created.astimezone(dt.timezone.utc).strftime('%Y-%m-%d %H:%M'), 'collection': coll}
                row.update({k: f.get(k, '') for k in keep})
                row['test_label'] = bool(basis)
                row['test_label_basis'] = basis
                docs.append(row)
            token = r.get('nextPageToken')
            if not token:
                break
    docs.sort(key=lambda d: d['created_utc'])
    trapped = [d for d in docs if d['honeypot'] == 'filled']
    tests = [d for d in docs if d['test_label']]
    return {
        'timezone': 'IST (UTC+5:30). The week runs Monday 00:00 IST to the next Monday 00:00 IST.',
        'window_ist': [lo.strftime('%Y-%m-%d %H:%M'), hi.strftime('%Y-%m-%d %H:%M')],
        'window_utc': [lo.astimezone(dt.timezone.utc).strftime('%Y-%m-%d %H:%M'), hi.astimezone(dt.timezone.utc).strftime('%Y-%m-%d %H:%M')],
        'docs_scanned': fetched,
        'counts': {
            'docs': len(docs),
            'by_collection': {c: len([d for d in docs if d['collection'] == c]) for c in FIRESTORE_COLLECTIONS},
            'honeypot_filled': len(trapped),
            'test_label': len(tests),
            'honeypot_filled_and_test_label': len([d for d in trapped if d['test_label']]),
            'not_trapped': len(docs) - len(trapped),
            'neither_trapped_nor_test': len([d for d in docs if d['honeypot'] != 'filled' and not d['test_label']]),
        },
        'docs': docs,
        'note': "honeypot 'filled' = spam-trap lead: kept in Firestore, sends no generate_lead by design. test_label is a word match (a judgement); "
                'a labelled test lead that is not trapped does send generate_lead. Names, emails, phones and messages are not stored here.'}


def firestore_vs_ga4(report):
    """GA4 generate_lead (all countries, same IST week) next to the Firestore doc counts."""
    fs = report.get('firestore_leads')
    if not isinstance(fs, dict) or 'counts' not in fs:
        return
    events = report.get('ga4', {}).get('this_week', {}).get('lead_events')
    if not isinstance(events, list):  # GA4 failed: leave the comparison out instead of printing a false 0
        return
    got =sum(num(r['eventCount']) for r in events if r['eventName'] == 'generate_lead')
    fs['counts']['ga4_generate_lead_events'] = got
    fs['counts']['not_trapped_minus_ga4_generate_lead'] = fs['counts']['not_trapped'] - got


# ── Cloudflare (verified crawlers, secret-file probes, edge totals) ─────────
# Added 2026-10-21. AI and Google user agents are heavily spoofed by scanners (1,699 'Perplexity-User'
# requests in one pull, 12 got a 200), so crawler counts use only requests Cloudflare itself verified
# (verifiedBotCategory != ''). Perplexity is never verified by Cloudflare: it cannot be counted here.
# Google-Firebase (~1,160 a day) is a verified Firebase Hosting SSL retry from a project we do not own: excluded.
CF_FAMILIES = [('Googlebot', r'Googlebot(?!-Image)|Google-InspectionTool'), ('bingbot', r'bingbot|BingPreview'),
               ('OAI-SearchBot', r'OAI-SearchBot'), ('ChatGPT-User', r'ChatGPT-User'), ('GPTBot', r'GPTBot'),
               ('ClaudeBot', r'ClaudeBot'), ('Claude-User', r'Claude-User'), ('Claude-SearchBot', r'Claude-SearchBot'),
               ('Applebot', r'Applebot'), ('Amazonbot', r'Amazonbot'), ('DuckAssist/DuckDuckBot', r'DuckDuckBot|DuckAssistBot'),
               ('Meta', r'meta-externalagent|facebookexternalhit|meta-externalfetcher'), ('Brave', r'Brave')]
CF_EXCLUDED = r'Google-Firebase'
CF_ASSISTANTS = ('ChatGPT-User', 'Claude-User')
CF_PROBES = ['.env', 'credentials', 'serviceAccount', 'service-account', '.git/', '.git', 'secrets', 'config.json', 'firebase.json',
             'docker-compose', '/proc/', '.aws', 'wp-config', 'id_rsa']


def cf_family(ua):
    for name, pat in CF_FAMILIES:
        if re.search(pat, ua or ''):
            return name
    return 'others'


def cf_env():
    out = {}
    for line in open(os.path.join(HERE, '.env')):
        if '=' in line and not line.startswith('#'):
            k, v = line.strip().split('=', 1)
            out[k] = v
    return out


def cf_gql(token, query):
    import urllib.request
    req = urllib.request.Request('https://api.cloudflare.com/client/v4/graphql', data=json.dumps({'query': query}).encode(),
                                 headers={'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    d = json.load(urllib.request.urlopen(req, timeout=60))
    if d.get('errors'):
        raise RuntimeError(d['errors'][0]['message'])
    return d['data']['viewer']['zones'][0]


def cf_adaptive(token, zone, day, flt, dims, limit):
    q = ('{viewer{zones(filter:{zoneTag:"%s"}){httpRequestsAdaptiveGroups(limit:%d,filter:{datetime_geq:"%sT00:00:00Z",datetime_lt:"%sT00:00:00Z",%s},'
         'orderBy:[count_DESC]){count dimensions{%s}}}}}') % (zone, limit, day, day + dt.timedelta(days=1), flt, dims)
    return cf_gql(token, q)['httpRequestsAdaptiveGroups']


def cf_day(token, zone, day):
    """One UTC day. Returns family counts, assistant pages (status 200) and probe counts."""
    rows = cf_adaptive(token, zone, day, 'edgeResponseContentTypeName:"html",verifiedBotCategory_neq:""', 'userAgent', 10000)
    fams, excluded = {}, 0
    for r in rows:
        ua = r['dimensions']['userAgent']
        if re.search(CF_EXCLUDED, ua or ''):
            excluded += r['count']
            continue
        f = cf_family(ua)
        fams[f] = fams.get(f, 0) + r['count']
    pages = {}
    for name in CF_ASSISTANTS:
        pat = dict(CF_FAMILIES)[name]
        got = cf_adaptive(token, zone, day, 'edgeResponseContentTypeName:"html",verifiedBotCategory_neq:"",edgeResponseStatus:200,userAgent_like:"%%%s%%"' % name,
                          'userAgent clientRequestPath', 10000)
        c = {}
        for r in got:
            if re.search(pat, r['dimensions']['userAgent'] or ''):
                c[r['dimensions']['clientRequestPath']] = c.get(r['dimensions']['clientRequestPath'], 0) + r['count']
        pages[name] = c
    flt = 'OR:[' + ','.join('{clientRequestPath_like:"%%%s%%"}' % p for p in CF_PROBES) + ']'
    probe = cf_adaptive(token, zone, day, flt, 'clientRequestPath edgeResponseStatus', 10000)
    return {'families': fams, 'excluded_google_firebase': excluded, 'pages': pages, 'probe': probe}


def cloudflare(start, end, pstart, pend):
    env = cf_env()
    token, zone = env['CLOUDFLARE_API_TOKEN'], env['CLOUDFLARE_ZONE_ID']
    days = [pstart + dt.timedelta(days=i) for i in range((end - pstart).days + 1)]
    daily, day_errors = {}, {}
    for d in days:
        try:
            daily[d] = cf_day(token, zone, d)
        except Exception as e:
            day_errors[str(d)] = f'{type(e).__name__}: {e}'

    def in_week(d, a, b):
        return a <= d <= b
    out = {'day_errors': day_errors, 'days_returned': {'this_week': sum(1 for d in daily if in_week(d, start, end)),
                                                       'prior_week': sum(1 for d in daily if in_week(d, pstart, pend))}}
    fam_names = [n for n, _ in CF_FAMILIES] + ['others']
    for label, a, b in (('this_week', start, end), ('prior_week', pstart, pend)):
        sel = [v for d, v in daily.items() if in_week(d, a, b)]
        out.setdefault('crawler_html_requests', {})[label] = {f: sum(v['families'].get(f, 0) for v in sel) for f in fam_names}
        out.setdefault('google_firebase_excluded', {})[label] = sum(v['excluded_google_firebase'] for v in sel)
    out['daily'] = {str(d): {'Googlebot': v['families'].get('Googlebot', 0), 'bingbot': v['families'].get('bingbot', 0)} for d, v in sorted(daily.items())}
    for name in CF_ASSISTANTS:
        for label, a, b in (('this_week', start, end), ('prior_week', pstart, pend)):
            c = {}
            for d, v in daily.items():
                if in_week(d, a, b):
                    for path, n in v['pages'][name].items():
                        c[path] = c.get(path, 0) + n
            out.setdefault('assistant_pages_200', {}).setdefault(name, {})[label] = {
                'total_200': sum(c.values()), 'unique_pages': len(c), 'top15': sorted(c.items(), key=lambda kv: (-kv[1], kv[0]))[:15]}
    for label, a, b in (('this_week', start, end), ('prior_week', pstart, pend)):
        by_status, ok = {}, {}
        for d, v in daily.items():
            if in_week(d, a, b):
                for r in v['probe']:
                    st = r['dimensions']['edgeResponseStatus']
                    by_status[st] = by_status.get(st, 0) + r['count']
                    if st == 200:
                        ok[r['dimensions']['clientRequestPath']] = ok.get(r['dimensions']['clientRequestPath'], 0) + r['count']
        out.setdefault('secret_probes', {})[label] = {'requests': sum(by_status.values()), 'status_200': by_status.get(200, 0),
                                                       'by_status': dict(sorted(by_status.items())), 'paths_with_200': sorted(ok.items(), key=lambda kv: -kv[1])[:20]}
    out['probe_patterns'] = CF_PROBES
    # Edge totals. httpRequests1dGroups, whole days UTC, all traffic.
    q = ('{viewer{zones(filter:{zoneTag:"%s"}){httpRequests1dGroups(limit:100,filter:{date_geq:"%s",date_leq:"%s"},orderBy:[date_ASC])'
         '{dimensions{date} sum{requests pageViews threats} uniq{uniques}}}}}') % (zone, pstart, end)
    try:
        rows = cf_gql(token, q)['httpRequests1dGroups']
        for label, a, b in (('this_week', start, end), ('prior_week', pstart, pend)):
            sel = [r for r in rows if str(a) <= r['dimensions']['date'] <= str(b)]
            out.setdefault('edge_totals', {})[label] = {
                'requests': sum(r['sum']['requests'] for r in sel), 'pageViews': sum(r['sum']['pageViews'] for r in sel),
                'threats': sum(r['sum']['threats'] for r in sel), 'uniques_sum_of_daily': sum(r['uniq']['uniques'] for r in sel), 'days_returned': len(sel)}
    except Exception as e:
        out['edge_totals_error'] = f'{type(e).__name__}: {e}'
    return out



# ── Markdown (numbers only) ────────────────────────────────────────────────
def cell(v):
    return str(v).replace('|', '\\|').replace('\n', ' ')


def table(head, rows):
    out = ['| ' + ' | '.join(head) + ' |', '|' + '|'.join(['---'] * len(head)) + '|']
    out += ['| ' + ' | '.join(cell(c) for c in r) + ' |' for r in rows]
    return out + ['']


def table_from(head, source, make_row, limit=None):
    """A table from a list of rows. When the query behind it failed or never ran, one plain line says so:
    an empty table or a 0 must never stand in for a failed query."""
    if not isinstance(source, list):
        return [f"Not available: {err(source) or 'not pulled'}.", '']
    if not source:
        return ['No rows.', '']
    return table(head, [make_row(r) for r in source[:limit]])


def short(url):
    return url.replace('https://factoryjet.com', '') or '/'


def top_groups(breakdown, keys, limit=4):
    """'(direct) / United States / Ashburn 3 (0 eng)' for the biggest groups of a page."""
    groups = {}
    for r in breakdown:
        g = groups.setdefault(tuple(r[k] or '(blank)' for k in keys), [0, 0])
        g[0] += r['sessions']
        g[1] += r['engagedSessions']
    ranked = sorted(groups.items(), key=lambda kv: (-kv[1][0], kv[0]))
    text = '; '.join(f"{' / '.join(k)} {v[0]} ({v[1]} eng)" for k, v in ranked[:limit])
    return text + (f'; +{len(ranked) - limit} more groups' if len(ranked) > limit else '')


def md(report):
    win = report['window']
    g = report.get('ga4', {})
    towns = '; '.join(f'{c}, {r}' for c, r in DATACENTRE_CITIES)
    L = [f"# Weekly data pull: {win['start']} to {win['end']}",
         f"Compared with {win['prior_start']} to {win['prior_end']}. Numbers only; no conclusions. Pulled {report.get('generated_at')} local time.",
         f"Time zones: GA4 days follow the property time zone, read live as {g.get('property_timezone', 'not read')} (Asia/Calcutta is IST, UTC+5:30). "
         'The Firestore week is cut at midnight IST. GSC days are Pacific time.', '']
    for name in ('ga4', 'gsc', 'bing', 'clarity', 'firestore_leads', 'cloudflare'):
        if err(report.get(name)):
            L.append(f"**{name} failed:** {err(report.get(name))}\n")
    for name, msg in report.get('cross_check_errors', {}).items():
        L.append(f"**{name} failed:** {msg}\n")

    # 1. US sourced sessions, 8 weeks
    def week_row(r):
        if 'error' in r:
            return [r['week_start'], 'query failed: ' + str(r['error'])] + [''] * 9
        return [r['week_start'], r['us_sessions_all'], r['us_direct_sessions'], r['us_not_set_sessions'], r['sourced_sessions'],
                r['sourced_engaged_sessions'], r['google_sessions'], r['chatgpt_sessions'], r['other_sourced_sessions'],
                r['sourced_datacentre_city_sessions'], r['generate_lead_events']]
    L += [f'## 1. US sessions with a known source, last {WEEKS_BACK} weeks (GA4)',
          'Known source ("sourced") = sessionSource is not (direct) and not (not set). Weeks run Monday to Sunday. '
          f'google = source exactly "google", organic and paid together. Data-centre towns = {towns} (a judgement; counted, not removed).', '']
    L += table_from(['Week of', 'US sessions, all', 'Direct', '(not set)', 'Sourced', 'Sourced, engaged', 'google', 'chatgpt', 'Other sourced',
                     'Sourced from data-centre towns', 'generate_lead events (US)'], g.get('us_sourced_weekly'), week_row)

    # 2. GA4 week totals
    tw, pw = g.get('this_week', {}), g.get('prior_week', {})

    def tot(w, key, field):
        return (lst(w.get(key)) or [{}])[0].get(field, 'n/a')

    def split(w, key, field):
        return w.get(key, {}).get(field, 'n/a')

    def dc(w):
        rows = w.get('datacentre_cities')
        return sum(r['sessions'] for r in rows) if isinstance(rows, list) else 'n/a'

    def both(label, fn, *args):
        return [label, fn(tw, *args), fn(pw, *args)]
    L += ['## 2. GA4 sessions, this week against the prior week',
          f"Human = country is not {' or '.join(BOT_COUNTRIES)} (a judgement). "
          'Direct zero engagement = source (direct) and not an engaged session (GA4: under 10 s, one page view, no key event). '
          'Direct, 0 seconds = source (direct) and 0 seconds of engagement time. It is a floor: sessions that share one landing page, place, '
          'device and day count only when their combined engagement time is 0. n/a = the query failed.', '']
    L += table(['Measure', 'This week', 'Prior week'], [
        both('Sessions, all countries', tot, 'totals_all', 'sessions'),
        both('Engaged sessions, all countries', tot, 'totals_all', 'engagedSessions'),
        both('Key events, all countries', tot, 'totals_all', 'keyEvents'),
        both('Sessions, human', tot, 'totals_human', 'sessions'),
        both('Engaged sessions, human', tot, 'totals_human', 'engagedSessions'),
        both('Human, direct', split, 'human_source_split', 'direct_sessions'),
        both('Human, direct zero engagement', split, 'human_source_split', 'direct_zero_engagement_sessions'),
        both('Human, direct, 0 seconds (floor)', split, 'human_source_split', 'direct_zero_seconds_sessions'),
        both('Human, source (not set)', split, 'human_source_split', 'not_set_sessions'),
        both('Human, sourced', split, 'human_source_split', 'sourced_sessions'),
        both('Human, sourced and engaged', split, 'human_source_split', 'sourced_engaged_sessions'),
        both('US, all sessions', split, 'us_source_split', 'sessions'),
        both('US, direct', split, 'us_source_split', 'direct_sessions'),
        both('US, direct zero engagement', split, 'us_source_split', 'direct_zero_engagement_sessions'),
        both('US, direct, 0 seconds (floor)', split, 'us_source_split', 'direct_zero_seconds_sessions'),
        both('US, sourced', split, 'us_source_split', 'sourced_sessions'),
        both('Sessions from data-centre towns, all sources', dc),
    ])
    L += ['Data-centre towns this week:']
    L += table_from(['City', 'Region', 'Sessions', 'Engaged'], tw.get('datacentre_cities'), lambda r: [r['city'], r['region'], r['sessions'], r['engagedSessions']])
    L += ['Sourced sessions by country, human, this week (top 15):']
    L += table_from(['Country', 'Sourced sessions', 'Engaged', 'Key events'], tw.get('sourced_by_country'),
                    lambda r: [r['country'], r['sessions'], r['engagedSessions'], r['keyEvents']], 15)
    L += ['Sourced sessions by source and country, human, this week (top 40). Every referrer, directories included, is split by country here:']
    L += table_from(['Source', 'Country', 'Sessions', 'Engaged', 'Key events'], tw.get('sourced_by_source_and_country'),
                    lambda r: [r['sessionSource'], r['country'], r['sessions'], r['engagedSessions'], r['keyEvents']], 40)

    # 3. Leads
    def ev(w, name):
        rows = w.get('lead_events')
        if not isinstance(rows, list):
            return 'n/a'
        return next((r['eventCount'] for r in rows if r['eventName'] == name), 0)
    L += ['## 3. Leads: GA4 events, Firestore docs, form funnel']
    L += table(['GA4 event, all countries', 'This week', 'Prior week'], [[e, ev(tw, e), ev(pw, e)] for e in LEAD_EVENTS])
    L += ['GA4 generate_lead by country, this week:']
    L += table_from(['Country', 'Events'], tw.get('leads_by_country'), lambda r: [r['country'], r['eventCount']])
    L += ['GA4 generate_lead by service, landing page and source, this week:']
    L += table_from(['Service', 'Landing page', 'AI assistant', 'Form', 'Session source', 'Events'], tw.get('leads_by_service'),
                    lambda r: [r['customEvent:service'], r['customEvent:landing_page'], r['customEvent:ai_assistant'], r['customEvent:lead_source'],
                               r['sessionSource'], r['eventCount']])
    fs = report.get('firestore_leads')
    if isinstance(fs, dict) and 'counts' in fs:
        c = fs['counts']
        L += [f"Firestore lead docs, {fs['window_ist'][0]} to {fs['window_ist'][1]} IST (UTC+5:30), collections {' + '.join(FIRESTORE_COLLECTIONS)}:",
              f"docs {c['docs']} ({', '.join(f'{k} {v}' for k, v in c['by_collection'].items())}) | spam-trap (honeypot filled) {c['honeypot_filled']} | "
              f"labelled test {c['test_label']} | both trap and test {c['honeypot_filled_and_test_label']} | not trapped {c['not_trapped']} | "
              f"neither trap nor test {c['neither_trapped_nor_test']} | GA4 generate_lead events {c.get('ga4_generate_lead_events', 'n/a')} | "
              f"not trapped minus GA4 events {c.get('not_trapped_minus_ga4_generate_lead', 'n/a')}",
              'A trapped lead sends no generate_lead by design. A labelled test lead that is not trapped does. Test label is a word match (a judgement). '
              'No names, emails, phones or message text are written to this file.', '']
        L += table_from(['Created (IST)', 'Collection', 'Form', 'Service category', 'Landing page', 'Channel', 'AI assistant', 'Turnstile', 'Honeypot', 'Test label'],
                        fs['docs'], lambda d: [d['created_ist'], d['collection'], d['source'], d['serviceCategory'], d['landingPage'], d['channel'], d['aiAssistant'] or '-',
                                               d['turnstileVerdict'], d['honeypot'] or '-', 'yes' if d['test_label'] else 'no'])
    else:
        L += [f"Firestore lead docs: not available ({err(fs) or 'not pulled'}).", '']
    ff = tw.get('form_funnel')
    if isinstance(ff, dict) and 'rows' in ff:
        L += ['Form funnel events (GA4). ' + ff['note']]
        L += table(['Event', 'All countries', 'US'], [[e, ff['totals_all_countries'][e], ff['totals_us'][e]] for e in FUNNEL_EVENTS])
        L += table_from(['Day', 'Event', 'Page', 'Country', 'Events'], ff['rows'],
                        lambda r: [f"{r['date'][:4]}-{r['date'][4:6]}-{r['date'][6:]}", r['eventName'], r['pagePath'], r['country'], r['eventCount']], 60)
    else:
        L += [f"Form funnel events: not available ({err(ff) or 'not pulled'}).", '']

    # 4. US view
    L += ['## 4. US only, this week (GA4)', 'US landing pages, most sourced sessions first (top 20 of up to 40 in the JSON):']
    L += table_from(['Landing page', 'US sessions', 'Engaged', 'Sourced', 'Sourced, engaged', 'Direct, not engaged', 'Direct, 0 seconds', 'Data-centre towns', 'Key events', 'Sources'],
                    tw.get('us_landing_pages'),
                    lambda p: [p['landingPage'], p['sessions'], p['engagedSessions'], p['sourced_sessions'], p['sourced_engaged_sessions'], p['direct_zero_engagement_sessions'],
                               p['direct_zero_seconds_sessions'], p['datacentre_city_sessions'], p['keyEvents'],
                               ', '.join(f'{k} {v}' for k, v in sorted(p['sources'].items(), key=lambda kv: -kv[1]))], 20)
    L += ['ChatGPT sessions (sessionSource contains chatgpt) by landing page and country, all countries (top 40). '
          'GA4 drops utm tags from this dimension, so /page?utm_source=chatgpt.com shows as /page:']
    L += table_from(['Landing page', 'Country', 'Sessions', 'Engaged', 'Avg seconds', 'Key events'], tw.get('chatgpt_by_landing_page'),
                    lambda r: [r['landingPagePlusQueryString'], r['country'], r['sessions'], r['engagedSessions'], round(float(r['averageSessionDuration'])), r['keyEvents']], 40)

    # 5. Landing pages with their source and city split
    meta = tw.get('landing_pages_human_breakdown_meta', {})
    L += ['## 5. Top 30 landing pages (human filter) with source, country and city',
          'Sessions is the page total. The split columns come from one extra query by source, country, region, city, device and day'
          + (f" ({meta.get('rows_returned')} rows{', TRUNCATED' if meta.get('truncated') else ''})." if 'rows_returned' in meta
             else f" (not available: {meta.get('error', 'not pulled')}; split columns show n/a)."),
          'Its parts can add up to a session or two more than Sessions; the JSON keeps breakdown_sessions_total and the device split.',
          'Direct, not engaged = GA4 did not count the session as engaged. Direct, 0 seconds = 0 seconds of engagement time (a floor, see section 2). '
          'Biggest groups read: source / country / city sessions (engaged).', '']
    L += table_from(['Landing page', 'Sessions', 'Key events', 'Sourced', 'Direct', 'Direct, not engaged', 'Direct, 0 seconds', 'Data-centre towns', 'Biggest groups'],
                    tw.get('landing_pages_human'),
                    lambda p: [p['landingPage'], p['sessions'], p['keyEvents'], p.get('sourced_sessions', 'n/a'), p.get('direct_sessions', 'n/a'),
                               p.get('direct_zero_engagement_sessions', 'n/a'), p.get('direct_zero_seconds_sessions', 'n/a'), p.get('datacentre_city_sessions', 'n/a'),
                               top_groups(p.get('breakdown', []), ('sessionSource', 'country', 'city'))])

    # 6. GSC
    s = report.get('gsc', {})

    def gline(label, this, prior=None):
        t = s.get(this)
        if not isinstance(t, dict) or 'clicks' not in t:
            return f"**GSC {label}:** not available ({err(t) or 'not pulled'})"
        text = f"**GSC {label}:** this {t['clicks']} clicks / {t['impressions']} impr, {t['days_returned']} days returned ({', '.join(t['dates'])})"
        if t.get('api_metadata', {}).get('firstIncompleteDate'):
            text += f", Google marks {t['api_metadata']['firstIncompleteDate']} onward as incomplete"
        if prior:
            p = s.get(prior)
            text += (f"; prior {p['clicks']} / {p['impressions']}, {p['days_returned']} days" if isinstance(p, dict) and 'clicks' in p
                     else f"; prior not available ({err(p) or 'not pulled'})")
        return text

    def qrows(scope):
        q = s.get('query_rows', {}).get(scope)
        return f"{q['rows']} rows, {q['clicks']} clicks, {q['impressions']} impr" if isinstance(q, dict) and 'rows' in q else f"not available ({err(q) or 'not pulled'})"
    L += [f"## 6. Google Search Console (dataState {s.get('data_state', 'not recorded')}; the last days can still move)",
          gline('total', 'this_week_total', 'prior_week_total'), gline('US', 'this_week_us', 'prior_week_us'), gline('UK', 'this_week_uk'), gline('India', 'this_week_ind'),
          f"Query rows (anonymised queries left out, so less than the totals above): all countries {qrows('all')}; US {qrows('us')}.", '',
          'US impressions by position band (from US query rows; 1-3 means position 3.0 or better, 4-10 means above 3.0 up to 10.0, and so on):']
    bands = s.get('us_impressions_by_position_band')
    if isinstance(bands, dict) and not err(bands):
        L += table(['Position band', 'Impressions', 'Clicks', 'Queries'], [[b, bands[b]['impressions'], bands[b]['clicks'], bands[b]['queries']] for b in POSITION_BANDS])
    else:
        L += [f"Not available: {err(bands) or 'not pulled'}.", '']
    for label, key, scope in (('all countries', 'striking_distance', 'all'), ('US', 'striking_distance_us', 'us')):
        cnt = s.get('striking_distance_counts', {}).get(scope)
        sd = s.get(key)
        if not isinstance(sd, list) or not isinstance(cnt, dict) or 'query_rows_scanned' not in cnt:
            L += [f"**GSC striking distance, {label} (pos 4-15, 20+ impr, CTR<2%):** not available ({err(sd) or err(cnt) or 'full query list not pulled'}).", '']
            continue
        L += [f"**GSC striking distance, {label} (pos 4-15, 20+ impr, CTR<2%):** {len(sd)} queries. Scanned {cnt['query_rows_scanned']} query rows; "
              f"{cnt['pos_4_15_and_20plus_impressions']} sit at pos 4-15 with 20+ impr before the CTR rule." + (' Top 25 by impressions:' if len(sd) > 25 else '')]
        L += table_from(['Query', 'Impressions', 'Clicks', 'CTR %', 'Position'], sd, lambda r: [r['query'], r['impressions'], r['clicks'], r['ctr'], r['position']], 25)
    L += ['Top 25 US pages by impressions. ' + str(s.get('top_pages_us_note', ''))]
    L += table_from(['Page', 'Impressions', 'Clicks', 'Position'], s.get('top_pages_us'), lambda r: [short(r['page']), r['impressions'], r['clicks'], r['position']])

    # 7. Bing
    b = report.get('bing', {})
    L += ['## 7. Bing', f"this {b.get('this_week')} prior {b.get('prior_week')}", '']

    # 8. Clarity
    c = report.get('clarity', {})
    cmp_ = c.get('ga4_compare', {})
    L += ['## 8. Clarity, with GA4 next to each URL',
          f"Clarity days with a snapshot: {len(c.get('days_available') or [])} of {(dt.date.fromisoformat(win['end']) - dt.date.fromisoformat(win['start'])).days + 1} "
          f"{c.get('days_available')}. Days with no data: {c.get('days_without_data', 'not recorded')}."]
    cov = c.get('coverage', {})
    if 'snapshots' in cov:
        L += [f"Each snapshot holds the 24 hours before it was taken. Hours of the week covered: {cov['covered_hours']} of {cov['week_hours']}. "
              f"Hours not covered: {cov['uncovered_hours']}. Hours covered twice (snapshots overlap, sessions there are counted twice): {cov['overlap_hours']}.",
              'Snapshot windows (' + cov['clock'] + '): ' + '; '.join(
                  f"{x['window_start']} to {x['window_end']}" + (f" (overlaps the one before by {x['overlap_with_earlier_snapshots_hours']} h)" if x['overlap_with_earlier_snapshots_hours'] else '')
                  for x in cov['snapshots'])]
    else:
        L += [f"Snapshot coverage not available ({cov.get('error', 'not pulled')})."]
    L += [f"Clarity totals {c.get('totals')}"]
    if 'clarity_sessions' in cmp_:
        L += [f"Clarity {cmp_['clarity_sessions']} sessions + {cmp_['clarity_bot_sessions']} bot sessions over {cmp_['clarity_days']} snapshot days. "
              f"GA4, all countries: {cmp_['ga4_sessions_all_clarity_days']} sessions on those calendar days, {cmp_['ga4_sessions_all_week']} over all {cmp_['ga4_days']} days."]
    else:
        L += [f"GA4 comparison not available ({cmp_.get('error', 'not pulled')}); GA4 columns show n/a."]
    L += ['Clarity keeps the query string; GA4 does not. "Same path" adds every Clarity URL with that path. GA4 columns are all countries, unfiltered. Top 20 URLs:', '']
    L += table_from(['Clarity URL', 'Clarity sessions', 'Clarity bot sessions', 'Clarity, same path', 'GA4 sessions with a view of the path, week', 'GA4, Clarity days only',
                     'GA4 sessions that landed there, week', 'Dead clicks', 'Avg scroll %'],
                    list(c['pages'].items()) if isinstance(c.get('pages'), dict) else c.get('pages'),
                    lambda kv: [short(kv[0]), kv[1].get('sessions', 0), kv[1].get('bot_sessions', 'n/a'), kv[1].get('clarity_sessions_same_path', 'n/a'),
                                kv[1].get('ga4_sessions_any_page', 'n/a'), kv[1].get('ga4_sessions_any_page_clarity_days', 'n/a'),
                                kv[1].get('ga4_sessions_landing', 'n/a'), kv[1].get('DeadClickCount', 0), kv[1].get('avg_scroll', 'n/a')], 20)
    # 9. Cloudflare
    cf = report.get('cloudflare', {})
    L += ['', '## 9. Cloudflare (verified crawlers only; days are UTC)']
    if err(cf):
        L += [f"Not available: {err(cf)}.", '']
    else:
        L += ['HTML responses from requests Cloudflare itself verified as a known bot (verifiedBotCategory is not empty). Scanners spoof AI and Google user agents, so unverified lookalikes are not counted. '
              'Perplexity is never verified by Cloudflare, so it cannot be counted here. Google-Firebase is excluded: it is a verified Firebase Hosting SSL retry from a project we do not own '
              f"({cf.get('google_firebase_excluded', {}).get('this_week', 'n/a')} this week, {cf.get('google_firebase_excluded', {}).get('prior_week', 'n/a')} prior).",
              f"Days returned: this week {cf.get('days_returned', {}).get('this_week')} of 7, prior week {cf.get('days_returned', {}).get('prior_week')} of 7. "
              + (f"Days that failed: {cf['day_errors']}." if cf.get('day_errors') else 'No day failed.'), '']
        cr = cf.get('crawler_html_requests', {})
        L += table(['Crawler family', 'This week', 'Prior week'],
                   [[f, cr.get('this_week', {}).get(f, 'n/a'), cr.get('prior_week', {}).get(f, 'n/a')] for f in cr.get('this_week', {})])
        for name in CF_ASSISTANTS:
            ap = cf.get('assistant_pages_200', {}).get(name, {})
            tw_, pw_ = ap.get('this_week', {}), ap.get('prior_week', {})
            L += [f"**{name}, pages answered 200 (opened for a real user).** This week {tw_.get('total_200', 'n/a')} requests on {tw_.get('unique_pages', 'n/a')} pages; "
                  f"prior week {pw_.get('total_200', 'n/a')} on {pw_.get('unique_pages', 'n/a')}. Top 15 this week:"]
            prior = dict(pw_.get('top15', []))
            L += table_from(['Page', 'This week', 'Prior week (if in its top 15)'], tw_.get('top15'), lambda r: [r[0], r[1], prior.get(r[0], 'not in prior top 15')])
        L += ['bingbot and Googlebot HTML requests per day (a bingbot crawl drop began 9 Oct 2026):']
        L += table(['Day (UTC)', 'bingbot', 'Googlebot'], [[d, v['bingbot'], v['Googlebot']] for d, v in cf.get('daily', {}).items()])
        sp = cf.get('secret_probes', {})
        for label in ('this_week', 'prior_week'):
            x = sp.get(label, {})
            L += [f"**Secret-file probes, {label.replace('_', ' ')}** (path contains {', '.join(cf.get('probe_patterns', []))}): {x.get('requests', 'n/a')} requests, "
                  f"**{x.get('status_200', 'n/a')} returned 200** (expected 0). By status: {x.get('by_status')}."]
            if x.get('status_200'):
                L += [f"**!!! {x['status_200']} SECRET-FILE PROBES RETURNED 200 in {label.replace('_', ' ')}. Check these paths now: {x.get('paths_with_200')}**"]
        L += ['']
        et = cf.get('edge_totals', {})
        if et:
            L += table(['Edge totals (all traffic)', 'Requests', 'Page views', 'Uniques (sum of daily)', 'Threats'],
                       [[label.replace('_', ' '), et[label]['requests'], et[label]['pageViews'], et[label]['uniques_sum_of_daily'], et[label]['threats']] for label in ('this_week', 'prior_week') if label in et])
        else:
            L += [f"Edge totals not available ({cf.get('edge_totals_error', 'not pulled')}).", '']
        L += ['These totals are mostly bots. Cloudflare uniques are not visitors.']

    return '\n'.join(str(x) for x in L) + '\n'


def main():
    start, end, pstart, pend = windows(sys.argv[1] if len(sys.argv) > 1 else None)
    report = {'generated_at': dt.datetime.now().isoformat(timespec='seconds'),
              'window': {'start': str(start), 'end': str(end), 'prior_start': str(pstart), 'prior_end': str(pend)}}
    for name, fn in (('ga4', lambda: ga4(start, end, pstart, pend)), ('gsc', lambda: gsc(start, end, pstart, pend)),
                     ('bing', lambda: bing(start, end, pstart, pend)), ('clarity', lambda: clarity(start, end)),
                     ('firestore_leads', lambda: firestore_leads(start, end)), ('cloudflare', lambda: cloudflare(start, end, pstart, pend))):
        try:
            report[name] = fn()
        except Exception as e:
            report[name] = {'error': f'{type(e).__name__}: {e}'}
    # Cross-checks between sources. A failure here must not lose the sections above.
    for name, fn in (('clarity_vs_ga4', lambda: clarity_vs_ga4(report, start, end)), ('firestore_vs_ga4', lambda: firestore_vs_ga4(report))):
        try:
            fn()
        except Exception as e:
            report.setdefault('cross_check_errors', {})[name] = f'{type(e).__name__}: {e}'
    os.makedirs(OUT, exist_ok=True)
    base = os.path.join(OUT, f'weekly_{start}')
    json.dump(report, open(base + '.json', 'w'), indent=1)
    open(base + '.md', 'w').write(md(report))
    print(base + '.json')
    print(md(report))


if __name__ == '__main__':
    main()
