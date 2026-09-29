#!/usr/bin/env python3
"""Weekly lead-report data pull: GSC + GA4 + Bing + Clarity (2026-09-29).

Collects numbers only. It prints no conclusions on purpose: the Monday report
is written from this output, and every finding in it has to point at a number
here (see memory: factoryjet-analytics-dashboard-was-lying). ERPNext leads are
pulled separately at report time through the ERPNext MCP, because the ERPNext
API key only lives in Cloudflare secrets.

Window: the previous Monday to Sunday, compared with the week before. GSC data
lags 2 to 3 days, so the last days of the window may be incomplete; the output
says which dates GSC actually returned.

Bot handling: GA4 sessions from Singapore and China have been ~99% bots with
~0 leads (2026-09 audits). They are reported separately and excluded from the
"human" totals. That exclusion is a judgement; the raw totals are kept too.

Usage:
    python3 weekly_report_data.py                 # previous Mon-Sun
    python3 weekly_report_data.py 2026-09-21      # week starting that Monday
Writes data/weekly/weekly_<start>.json and data/weekly/weekly_<start>.md
"""
import datetime as dt
import glob
import json
import os
import subprocess
import sys

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'data', 'weekly')
KEY = '/Users/bhaveshbarot/FactoryJet/secrets/factoryjet-seo-7fa130b491b8.json'
GA4 = 'properties/516928458'
GSC_SITE = 'sc-domain:factoryjet.com'
BOT_COUNTRIES = ['Singapore', 'China']
LEAD_EVENTS = ['generate_lead', 'form_start', 'book_call_click', 'whatsapp_click', 'email_click', 'phone_click']


def session(scope):
    return AuthorizedSession(service_account.Credentials.from_service_account_file(KEY, scopes=[scope]))


def windows(arg):
    if arg:
        start = dt.date.fromisoformat(arg)
    else:
        today = dt.date.today()
        start = today - dt.timedelta(days=today.weekday() + 7)
    end = start + dt.timedelta(days=6)
    return start, end, start - dt.timedelta(days=7), start - dt.timedelta(days=1)


# ── GA4 ────────────────────────────────────────────────────────────────────
def ga4_report(s, start, end, dims, metrics, flt=None, limit=50, order=None):
    body = {'dateRanges': [{'startDate': str(start), 'endDate': str(end)}],
            'dimensions': [{'name': d} for d in dims], 'metrics': [{'name': m} for m in metrics], 'limit': limit}
    if flt:
        body['dimensionFilter'] = flt
    if order:
        body['orderBys'] = [{'metric': {'metricName': order}, 'desc': True}]
    r = s.post(f'https://analyticsdata.googleapis.com/v1beta/{GA4}:runReport', json=body).json()
    if 'error' in r:
        return {'error': r['error'].get('message')}
    return [dict(zip(dims + metrics, [v['value'] for v in row.get('dimensionValues', [])] + [v['value'] for v in row['metricValues']]))
            for row in r.get('rows', [])]


def not_bots():
    return {'notExpression': {'filter': {'fieldName': 'country', 'inListFilter': {'values': BOT_COUNTRIES}}}}


def ga4(start, end, pstart, pend):
    s = session('https://www.googleapis.com/auth/analytics.readonly')
    lead_filter = {'filter': {'fieldName': 'eventName', 'stringFilter': {'value': 'generate_lead'}}}
    out = {}
    for label, (a, b) in {'this_week': (start, end), 'prior_week': (pstart, pend)}.items():
        out[label] = {
            'totals_all': ga4_report(s, a, b, [], ['sessions', 'totalUsers', 'engagedSessions', 'keyEvents']),
            'totals_human': ga4_report(s, a, b, [], ['sessions', 'totalUsers', 'engagedSessions', 'keyEvents'], not_bots()),
            'lead_events': ga4_report(s, a, b, ['eventName'], ['eventCount'],
                                      {'filter': {'fieldName': 'eventName', 'inListFilter': {'values': LEAD_EVENTS}}}),
        }
    w = out['this_week']
    w['by_country'] = ga4_report(s, start, end, ['country'], ['sessions', 'engagedSessions', 'keyEvents'], order='sessions', limit=15)
    w['by_channel_human'] = ga4_report(s, start, end, ['sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents'], not_bots(), order='sessions')
    w['by_source_human'] = ga4_report(s, start, end, ['sessionSource'], ['sessions', 'keyEvents'], not_bots(), order='sessions', limit=20)
    w['landing_pages_human'] = ga4_report(s, start, end, ['landingPage'], ['sessions', 'engagementRate', 'averageSessionDuration', 'keyEvents'],
                                          not_bots(), order='sessions', limit=30)
    w['device_human'] = ga4_report(s, start, end, ['deviceCategory'], ['sessions', 'engagementRate', 'keyEvents'], not_bots())
    w['leads_by_service'] = ga4_report(s, start, end, ['customEvent:service', 'customEvent:landing_page', 'customEvent:ai_assistant',
                                                       'customEvent:lead_source', 'sessionSource'], ['eventCount'], lead_filter)
    return out


# ── GSC ────────────────────────────────────────────────────────────────────
def gsc_query(s, start, end, dims, row_limit=250, country=None):
    body = {'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': row_limit}
    if country:
        body['dimensionFilterGroups'] = [{'filters': [{'dimension': 'country', 'operator': 'equals', 'expression': country}]}]
    r = s.post(f'https://www.googleapis.com/webmasters/v3/sites/{GSC_SITE.replace(":", "%3A")}/searchAnalytics/query', json=body).json()
    if 'error' in r:
        return {'error': r['error'].get('message')}
    return [dict(zip(dims, row['keys']), clicks=row['clicks'], impressions=row['impressions'],
                 ctr=round(row['ctr'] * 100, 2), position=round(row['position'], 1)) for row in r.get('rows', [])]


def totals(rows):
    if isinstance(rows, dict):
        return rows
    c = sum(r['clicks'] for r in rows)
    i = sum(r['impressions'] for r in rows)
    return {'clicks': c, 'impressions': i, 'days_returned': len(rows), 'dates': [r['date'] for r in rows]}


def gsc(start, end, pstart, pend):
    s = session('https://www.googleapis.com/auth/webmasters.readonly')
    out = {
        'this_week_total': totals(gsc_query(s, start, end, ['date'])),
        'prior_week_total': totals(gsc_query(s, pstart, pend, ['date'])),
        'this_week_us': totals(gsc_query(s, start, end, ['date'], country='usa')),
        'prior_week_us': totals(gsc_query(s, pstart, pend, ['date'], country='usa')),
        'this_week_uk': totals(gsc_query(s, start, end, ['date'], country='gbr')),
        'this_week_ind': totals(gsc_query(s, start, end, ['date'], country='ind')),
        # page-only rows: page x country undercounts (see memory gsc-api-page-country-undercount)
        'top_pages': gsc_query(s, start, end, ['page'], 40),
        'top_queries_us': gsc_query(s, start, end, ['query'], 60, country='usa'),
        'top_queries_all': gsc_query(s, start, end, ['query'], 100),
    }
    q = out['top_queries_all'] if isinstance(out['top_queries_all'], list) else []
    out['striking_distance'] = [r for r in q if 4 <= r['position'] <= 15 and r['impressions'] >= 20 and r['ctr'] < 2]
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
def clarity(start, end):
    days = [d for d in sorted(glob.glob(os.path.join(HERE, 'data', 'clarity', '20*')))
            if str(start) <= os.path.basename(d) <= str(end)]
    out = {'days_available': [os.path.basename(d) for d in days], 'totals': {}, 'pages': {}, 'sources': {}, 'devices': {}}
    t = out['totals']
    scroll = []
    for d in days:
        try:
            data = json.load(open(os.path.join(d, 'totals.json')))['data']
        except Exception:
            continue
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
                    elif name in ('DeadClickCount', 'RageClickCount', 'QuickbackClick', 'ScriptErrorCount'):
                        agg[name] = agg.get(name, 0) + int(row.get('subTotal') or 0)
                    elif name == 'ScrollDepth':
                        agg.setdefault('scroll', []).append(float(row.get('averageScrollDepth') or 0))
    if scroll:
        t['avg_scroll_depth_pct'] = round(sum(scroll) / len(scroll), 1)
    for key in ('pages', 'sources', 'devices'):
        for v in out[key].values():
            if 'scroll' in v:
                v['avg_scroll'] = round(sum(v['scroll']) / len(v['scroll']), 1)
                del v['scroll']
        out[key] = dict(sorted(out[key].items(), key=lambda kv: -kv[1].get('sessions', 0))[:30])
    return out


# ── Markdown (numbers only) ────────────────────────────────────────────────
def md(report):
    L = [f"# Weekly data pull: {report['window']['start']} to {report['window']['end']}",
         f"Compared with {report['window']['prior_start']} to {report['window']['prior_end']}. Numbers only; no conclusions.\n"]
    g = report.get('ga4', {})
    for wk in ('this_week', 'prior_week'):
        w = g.get(wk, {})
        L.append(f"**GA4 {wk.replace('_', ' ')}:** all {w.get('totals_all')} | human (no {'/'.join(BOT_COUNTRIES)}) {w.get('totals_human')}")
        L.append(f"  lead events: {w.get('lead_events')}")
    L.append(f"\n**GA4 leads by service/page/source:** {g.get('this_week', {}).get('leads_by_service')}")
    s = report.get('gsc', {})
    L.append(f"\n**GSC total:** this {s.get('this_week_total', {}).get('clicks')} clicks / {s.get('this_week_total', {}).get('impressions')} impr "
             f"(days returned {s.get('this_week_total', {}).get('days_returned')}); prior {s.get('prior_week_total', {}).get('clicks')} / {s.get('prior_week_total', {}).get('impressions')}")
    L.append(f"**GSC US:** this {s.get('this_week_us', {}).get('clicks')} / {s.get('this_week_us', {}).get('impressions')}; prior {s.get('prior_week_us', {}).get('clicks')} / {s.get('prior_week_us', {}).get('impressions')}")
    L.append(f"**GSC striking distance (pos 4-15, 20+ impr, CTR<2%):** {len(s.get('striking_distance', []))} queries")
    b = report.get('bing', {})
    L.append(f"\n**Bing:** this {b.get('this_week')} prior {b.get('prior_week')}")
    c = report.get('clarity', {})
    L.append(f"\n**Clarity:** days {c.get('days_available')} totals {c.get('totals')}")
    return '\n'.join(L) + '\n'


def main():
    start, end, pstart, pend = windows(sys.argv[1] if len(sys.argv) > 1 else None)
    report = {'generated_at': dt.datetime.now().isoformat(timespec='seconds'),
              'window': {'start': str(start), 'end': str(end), 'prior_start': str(pstart), 'prior_end': str(pend)}}
    for name, fn in (('ga4', lambda: ga4(start, end, pstart, pend)), ('gsc', lambda: gsc(start, end, pstart, pend)),
                     ('bing', lambda: bing(start, end, pstart, pend)), ('clarity', lambda: clarity(start, end))):
        try:
            report[name] = fn()
        except Exception as e:
            report[name] = {'error': f'{type(e).__name__}: {e}'}
    os.makedirs(OUT, exist_ok=True)
    base = os.path.join(OUT, f'weekly_{start}')
    json.dump(report, open(base + '.json', 'w'), indent=1)
    open(base + '.md', 'w').write(md(report))
    print(base + '.json')
    print(md(report))


if __name__ == '__main__':
    main()
