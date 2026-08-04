#!/usr/bin/env python3
"""BING WEBMASTER TOOLS client (2026-08-04).

Bing matters to us for a reason that is not "Bing traffic". Copilot is built on
the Bing index, and Bing is one of the retrieval layers several AI answer
engines lean on. We already pay DataForSEO to measure LLM citation indirectly;
this is Microsoft reporting on its own index for free. Treat it as a second,
independent read on the same question dfs_brand_rank_audit.py asks.

Auth is a single API key (Bing Webmaster > Settings > API Access), good for
every verified site on the account. It lives in .env as BING_WEBMASTER_API_KEY
and is git-ignored. Regenerating the key in the UI invalidates the old one, so
if every call starts returning 401, that is the first thing to check.

A note on the endpoint: Microsoft is retiring the legacy SOAP and POX APIs on
2026-08-31. The JSON surface used here (api.svc/json) still answers, but plan on
one migration before that date rather than discovering it via a silent outage.

Usage:
    python3 bing_webmaster.py status            # sites, quota, sitemaps, crawl, traffic
    python3 bing_webmaster.py queries           # top search queries
    python3 bing_webmaster.py pages             # top pages
    python3 bing_webmaster.py links             # inbound link counts
    python3 bing_webmaster.py submit-url URL... # push URLs for immediate crawl
    python3 bing_webmaster.py submit-sitemap URL
    python3 bing_webmaster.py remove-sitemap URL

Read commands write data/bing_<command>.json. Write commands (submit-*) change
state on Bing and print exactly what they sent.
"""
import os
import sys
import json
import re
import datetime
import urllib.parse
import urllib.request
import urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
BASE = "https://ssl.bing.com/webmaster/api.svc/json"

# Bing serialises dates as /Date(ms)/ or /Date(ms-0700)/. The value 1601-01-01
# (-11644473600000) is .NET's DateTime.MinValue and means "unset", not a real
# date — most commonly seen on Submitted for a sitemap Bing found on its own via
# robots.txt rather than one anybody submitted.
_DATE_RE = re.compile(r"/Date\((-?\d+)([+-]\d{4})?\)/")
_NEVER = -11644473600000


def load_env():
    p = os.path.join(HERE, ".env")
    if not os.path.exists(p):
        sys.exit(f"missing {p}")
    for line in open(p):
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip())


def parse_dates(obj):
    """Recursively turn Bing's /Date(...)/ strings into ISO dates (or None)."""
    if isinstance(obj, dict):
        return {k: parse_dates(v) for k, v in obj.items() if k != "__type"}
    if isinstance(obj, list):
        return [parse_dates(v) for v in obj]
    if isinstance(obj, str):
        m = _DATE_RE.fullmatch(obj)
        if m:
            ms = int(m.group(1))
            if ms == _NEVER:
                return None
            return datetime.datetime.fromtimestamp(
                ms / 1000, datetime.timezone.utc
            ).date().isoformat()
    return obj


def call(endpoint, params=None, body=None):
    key = os.environ.get("BING_WEBMASTER_API_KEY")
    if not key:
        sys.exit("BING_WEBMASTER_API_KEY not set in .env")
    q = {"apikey": key}
    q.update(params or {})
    url = f"{BASE}/{endpoint}?" + urllib.parse.urlencode(q)

    data = None
    headers = {}
    if body is not None:
        data = json.dumps(body).encode()
        headers["Content-Type"] = "application/json; charset=utf-8"

    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            raw = r.read().decode()
    except urllib.error.HTTPError as e:
        detail = e.read().decode()[:400]
        # Say what actually failed. A 401 here almost always means the key was
        # regenerated in the UI; a 400 usually means siteUrl does not exactly
        # match a verified site (trailing slash and scheme both matter).
        return {"_error": f"HTTP {e.code} on {endpoint}", "_detail": detail}
    except Exception as e:
        return {"_error": f"{type(e).__name__} on {endpoint}: {e}"}

    if not raw.strip():
        return {}
    payload = json.loads(raw)
    return parse_dates(payload.get("d", payload))


def site():
    s = os.environ.get("BING_SITE_URL")
    if not s:
        sys.exit("BING_SITE_URL not set in .env")
    return s


# GetUserSites returns ownership proofs for EVERY site on the key, including
# client domains that have nothing to do with this repo. data/ is committed, so
# these are stripped before writing — they are other people's verification
# tokens and there is no reason for them to live in our git history.
_SECRET_FIELDS = ("AuthenticationCode", "DnsVerificationCode")


def redact(obj):
    if isinstance(obj, dict):
        return {k: ("[redacted]" if k in _SECRET_FIELDS else redact(v))
                for k, v in obj.items()}
    if isinstance(obj, list):
        return [redact(v) for v in obj]
    return obj


def save(name, obj):
    obj = redact(obj)
    os.makedirs(DATA, exist_ok=True)
    p = os.path.join(DATA, f"bing_{name}.json")
    with open(p, "w") as f:
        json.dump(obj, f, indent=2)
    print(f"\n  -> {os.path.relpath(p, HERE)}")


def _err(label, res):
    if isinstance(res, dict) and "_error" in res:
        print(f"  {label}: {res['_error']}")
        return True
    return False


def cmd_status():
    s = site()
    out = {"site": s}

    print(f"BING WEBMASTER STATUS — {s}\n" + "=" * 60)

    sites = call("GetUserSites")
    if not _err("sites", sites):
        out["sites"] = sites
        print(f"\nVERIFIED SITES ON THIS KEY ({len(sites)})")
        for x in sites:
            mark = "verified" if x.get("IsVerified") else "NOT VERIFIED"
            print(f"  {x['Url']:<40} {mark}")

    quota = call("GetUrlSubmissionQuota", {"siteUrl": s})
    if not _err("quota", quota):
        out["quota"] = quota
        print(f"\nURL SUBMISSION QUOTA")
        print(f"  daily   {quota.get('DailyQuota')}")
        print(f"  monthly {quota.get('MonthlyQuota')}")

    feeds = call("GetFeeds", {"siteUrl": s})
    if not _err("feeds", feeds):
        out["feeds"] = feeds
        print(f"\nSITEMAPS KNOWN TO BING ({len(feeds)})")
        for f in feeds:
            sub = f.get("Submitted") or "auto-discovered"
            print(f"  {f['Url']}")
            print(f"      {f.get('UrlCount')} urls | {f.get('Status')} | "
                  f"last crawled {f.get('LastCrawled')} | submitted {sub}")

    crawl = call("GetCrawlStats", {"siteUrl": s})
    if not _err("crawl", crawl) and crawl:
        out["crawl"] = crawl
        # Bing returns these oldest-first, so the recent window is the TAIL.
        # Slicing from the head silently reports whatever month the history
        # happens to start in, which reads as a live problem when it is not.
        recent = crawl[-30:]
        tot = lambda k: sum(r.get(k, 0) or 0 for r in recent)
        span = f"{recent[0].get('Date')} to {recent[-1].get('Date')}"
        print(f"\nCRAWL — {span}")
        print(f"  pages crawled     {tot('CrawledPages')}")
        # InIndex and InLinks are gauges — each row restates the CURRENT total,
        # so summing them multiplies one number by the number of days.
        print(f"  in index (latest) {recent[-1].get('InIndex')}")
        print(f"  inlinks  (latest) {recent[-1].get('InLinks')}")
        print(f"  2xx               {tot('Code2xx')}")
        print(f"  301               {tot('Code301')}")
        print(f"  4xx               {tot('Code4xx')}")
        print(f"  5xx               {tot('Code5xx')}")
        print(f"  blocked by robots {tot('BlockedByRobotsTxt')}")
        print(f"  crawl errors      {tot('CrawlErrors')}")

    traffic = call("GetRankAndTrafficStats", {"siteUrl": s})
    if not _err("traffic", traffic) and traffic:
        out["traffic"] = traffic
        clicks = sum(r.get("Clicks", 0) or 0 for r in traffic)
        impr = sum(r.get("Impressions", 0) or 0 for r in traffic)
        days = [r["Date"] for r in traffic if r.get("Date")]
        span = f"{min(days)} to {max(days)}" if days else "unknown"
        print(f"\nSEARCH PERFORMANCE — {span}")
        print(f"  impressions {impr}")
        print(f"  clicks      {clicks}")
        if impr:
            print(f"  ctr         {clicks / impr * 100:.2f}%")

    issues = call("GetCrawlIssues", {"siteUrl": s})
    if not _err("issues", issues):
        out["issues"] = issues
        print(f"\nCRAWL ISSUES ({len(issues)})")
        for i in issues[:25]:
            print(f"  {i}")
        if not issues:
            print("  none reported")

    save("status", out)


def _rollup(rows, key):
    """Bing returns one row per query/url PER PERIOD, so the same string shows
    up many times. Reporting the raw rows makes one strong term look like six
    weak ones. Sum impressions and clicks, keep the best position seen."""
    agg = {}
    for r in rows:
        k = r.get(key, "")
        a = agg.setdefault(k, {key: k, "Impressions": 0, "Clicks": 0, "BestPos": None})
        a["Impressions"] += r.get("Impressions", 0) or 0
        a["Clicks"] += r.get("Clicks", 0) or 0
        pos = r.get("AvgImpressionPosition")
        if pos and (a["BestPos"] is None or pos < a["BestPos"]):
            a["BestPos"] = pos
    return sorted(agg.values(), key=lambda r: r["Impressions"], reverse=True)


def cmd_queries():
    s = site()
    res = call("GetQueryStats", {"siteUrl": s})
    if _err("queries", res):
        return
    rows = _rollup(res, "Query")
    print(f"TOP QUERIES — {s} ({len(rows)} unique of {len(res)} rows)\n" + "=" * 60)
    print(f"{'impr':>7} {'clicks':>7} {'best pos':>9}  query")
    for r in rows[:60]:
        print(f"{r['Impressions']:>7} {r['Clicks']:>7} {str(r['BestPos']):>9}  {r['Query']}")
    save("queries", rows)


def cmd_pages():
    s = site()
    res = call("GetPageStats", {"siteUrl": s})
    if _err("pages", res):
        return
    # GetPageStats returns the URL in the Query field, not a Url field.
    rows = _rollup(res, "Query")
    print(f"TOP PAGES — {s} ({len(rows)} unique of {len(res)} rows)\n" + "=" * 60)
    print(f"{'impr':>7} {'clicks':>7}  url")
    for r in rows[:60]:
        print(f"{r['Impressions']:>7} {r['Clicks']:>7}  {r['Query']}")
    save("pages", rows)


def cmd_links():
    s = site()
    res = call("GetLinkCounts", {"siteUrl": s, "page": 0})
    if _err("links", res):
        return
    rows = sorted(res, key=lambda r: r.get("Count", 0) or 0, reverse=True)
    print(f"INBOUND LINKS — {s} ({len(rows)})\n" + "=" * 60)
    for r in rows[:60]:
        print(f"{r.get('Count', 0):>8}  {r.get('Url', '')}")
    save("links", rows)


def cmd_submit_url(urls):
    """Push URLs for immediate crawl. This CHANGES state on Bing."""
    if not urls:
        sys.exit("usage: bing_webmaster.py submit-url URL [URL...]")
    s = site()
    print(f"submitting {len(urls)} url(s) to {s}:")
    for u in urls:
        print(f"  {u}")
    res = call("SubmitUrlBatch", {}, {"siteUrl": s, "urlList": list(urls)})
    if _err("submit", res):
        return
    print("\naccepted. quota after submit:")
    q = call("GetUrlSubmissionQuota", {"siteUrl": s})
    if not _err("quota", q):
        print(f"  daily remaining   {q.get('DailyQuota')}")
        print(f"  monthly remaining {q.get('MonthlyQuota')}")


def cmd_submit_sitemap(url):
    """Register a sitemap. This CHANGES state on Bing."""
    if not url:
        sys.exit("usage: bing_webmaster.py submit-sitemap URL")
    s = site()
    print(f"submitting sitemap {url} for {s}")
    res = call("SubmitFeed", {}, {"siteUrl": s, "feedUrl": url})
    if _err("submit-sitemap", res):
        return
    print("accepted.")


def cmd_remove_sitemap(url):
    """Deregister a sitemap. This CHANGES state on Bing.

    Only useful for duplicates (e.g. a www variant of a non-www canonical).
    Note Bing can re-discover a sitemap from robots.txt, so removal sticks only
    if nothing still advertises that URL.
    """
    if not url:
        sys.exit("usage: bing_webmaster.py remove-sitemap URL")
    s = site()
    before = call("GetFeeds", {"siteUrl": s})
    if _err("feeds", before):
        return
    known = [f["Url"] for f in before]
    if url not in known:
        print(f"not registered: {url}")
        print("currently registered:")
        for k in known:
            print(f"  {k}")
        return

    print(f"removing sitemap {url} from {s}")
    res = call("RemoveFeed", {}, {"siteUrl": s, "feedUrl": url})
    if _err("remove-sitemap", res):
        return

    after = call("GetFeeds", {"siteUrl": s})
    if not _err("feeds", after):
        print("\nsitemaps now registered:")
        for f in after:
            print(f"  {f['Url']}  ({f.get('UrlCount')} urls, {f.get('Status')})")


def main():
    load_env()
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    cmd, rest = sys.argv[1], sys.argv[2:]
    if cmd == "status":
        cmd_status()
    elif cmd == "queries":
        cmd_queries()
    elif cmd == "pages":
        cmd_pages()
    elif cmd == "links":
        cmd_links()
    elif cmd == "submit-url":
        cmd_submit_url(rest)
    elif cmd == "submit-sitemap":
        cmd_submit_sitemap(rest[0] if rest else None)
    elif cmd == "remove-sitemap":
        cmd_remove_sitemap(rest[0] if rest else None)
    else:
        sys.exit(f"unknown command: {cmd}\n{__doc__}")


if __name__ == "__main__":
    main()
