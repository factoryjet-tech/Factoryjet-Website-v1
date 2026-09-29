#!/usr/bin/env python3
"""Daily Microsoft Clarity snapshot (2026-09-29).

Clarity's Data Export API only returns the last 1-3 days and allows about 10
requests per project per day, so a weekly report can't ask for "last week".
This script runs once a day (launchd, see ~/Library/LaunchAgents/
com.factoryjet.clarity-snapshot.plist) and saves the last 24 hours, so the
Monday report can add up seven daily files.

It makes 4 requests per run: totals, then split by URL, by traffic source, and
by device. Each is saved to data/clarity/<YYYY-MM-DD>/<split>.json. A day that
already has all four files is skipped, so running it twice costs nothing.

Auth: CLARITY_API_TOKEN in pipeline/research/.env (git-ignored). Generated in
Clarity > Settings > Data Export. If every call returns 401/403, regenerate it.

Usage:
    python3 clarity_snapshot.py          # save today's snapshot
    python3 clarity_snapshot.py --force  # overwrite today's files
"""
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_ROOT = os.path.join(HERE, 'data', 'clarity')
API = 'https://www.clarity.ms/export-data/api/v1/project-live-insights'
SPLITS = {'totals': None, 'url': 'URL', 'source': 'Source', 'device': 'Device'}


def token():
    env = open(os.path.join(HERE, '.env')).read()
    found = re.findall(r'^CLARITY_API_TOKEN=(.+)$', env, re.M)
    if not found:
        sys.exit('CLARITY_API_TOKEN missing from pipeline/research/.env')
    return found[-1].strip().strip('"').strip("'")


def fetch(tok, dimension):
    url = API + '?numOfDays=1' + (f'&dimension1={dimension}' if dimension else '')
    req = urllib.request.Request(url, headers={'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read())


def main():
    force = '--force' in sys.argv
    day = datetime.date.today().isoformat()
    out_dir = os.path.join(OUT_ROOT, day)
    os.makedirs(out_dir, exist_ok=True)
    tok = token()
    for name, dim in SPLITS.items():
        path = os.path.join(out_dir, f'{name}.json')
        if os.path.exists(path) and not force:
            print(f'skip {day}/{name} (exists)')
            continue
        try:
            data = fetch(tok, dim)
        except urllib.error.HTTPError as e:
            print(f'FAIL {name}: HTTP {e.code}', file=sys.stderr)
            continue
        with open(path, 'w') as f:
            json.dump({'fetched_at': datetime.datetime.now().isoformat(timespec='seconds'), 'split': name, 'data': data}, f, indent=1)
        print(f'saved {day}/{name}')


if __name__ == '__main__':
    main()
