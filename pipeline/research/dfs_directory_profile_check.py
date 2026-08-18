#!/usr/bin/env python3
"""DIRECTORY PROFILE CHECK: do our claimed profiles exist, and do they link back?

Our sitewide Organization schema (src/app/layout.tsx) asserts sameAs profiles on
Clutch, GoodFirms, DesignRush, SoftwareSuggest and Crunchbase. Only Crunchbase
appears in our live referring domains. Two possibilities, with opposite fixes:

  a) the profile exists but carries no followed link  -> claim/complete it
  b) the sameAs URL is wrong or dead                  -> fix the schema, it is
     currently asserting a false identity claim, which is worse than omitting it

These sites 403 a plain curl, so this uses DataForSEO's on_page/instant_pages,
which fetches server-side with real crawler infrastructure, and reports the
status code plus every outbound link on the page.

NOTHING here submits or contacts anything. Verification only.
Writes data/directory_profile_check.json
"""
import os, json, base64, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))


def load_env():
    p = os.path.join(HERE, ".env")
    if os.path.exists(p):
        for line in open(p):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
AUTH = base64.b64encode(
    f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()


def post(path, payload):
    req = urllib.request.Request(
        "https://api.dataforseo.com/v3" + path,
        data=json.dumps(payload).encode(),
        headers={"Authorization": "Basic " + AUTH,
                 "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=240) as r:
        return json.loads(r.read().decode())


# Exactly the sameAs list asserted in src/app/layout.tsx, plus the Capterra
# listing found by dfs_unlinked_mentions.py, plus the two editorial roundups
# that name us without linking.
TARGETS = [
    ("schema sameAs", "https://clutch.co/profile/factoryjet-private"),
    ("schema sameAs", "https://www.goodfirms.co/company/factoryjet-private-limited"),
    ("schema sameAs", "https://www.designrush.com/agency/profile/factoryjet"),
    ("schema sameAs", "https://www.softwaresuggest.com/factoryjet"),
    ("schema sameAs", "https://www.crunchbase.com/organization/factoryjet"),
    ("unlinked mention", "https://www.capterra.com/p/1071448/FactoryJet/"),
    ("unlinked mention", "https://kerneltech.net/blog/best-e-commerce-development-agencies-usa/"),
    ("unlinked mention", "https://www.techmagnate.com/blog/best-aeo-agencies-for-bfsi-india/"),
    ("unlinked mention", "https://vipulpore.com/top-10-website-design-companies-in-mumbai/"),
]


def check(url):
    """Fetch server-side; return status, whether we are named, whether linked."""
    resp = post("/on_page/instant_pages", [{
        "url": url,
        "enable_javascript": True,
        "custom_user_agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                              "AppleWebKit/537.36 (KHTML, like Gecko) "
                              "Chrome/126.0.0.0 Safari/537.36"),
    }])
    out = {"url": url, "status": None, "named": None, "linked": None, "error": None}
    try:
        item = resp["tasks"][0]["result"][0]["items"][0]
    except Exception:
        out["error"] = (resp.get("tasks", [{}])[0].get("status_message")
                        or resp.get("status_message"))
        return out
    out["status"] = item.get("status_code")
    out["title"] = (item.get("meta") or {}).get("title")
    return out, resp


def main():
    results = []
    for source, url in TARGETS:
        print(f"\n--- {url}")
        try:
            r = check(url)
            if isinstance(r, tuple):
                r, raw = r
            else:
                raw = None
        except Exception as e:
            print(f"    ERROR {e}")
            results.append({"source": source, "url": url, "error": str(e)})
            continue
        r["source"] = source
        print(f"    http {r.get('status')}  {str(r.get('title'))[:70]}")
        if r.get("error"):
            print(f"    error: {r['error']}")
        # Keep the finding, not the crawler telemetry behind it.
        if raw:
            try:
                m = raw["tasks"][0]["result"][0]["items"][0].get("meta") or {}
                r["external_links_count"] = m.get("external_links_count")
                r["meta_description"] = (m.get("description") or "")[:200]
            except Exception:
                pass
        results.append(r)

    with open(os.path.join(HERE, "data", "directory_profile_check.json"), "w") as f:
        json.dump(results, f, indent=2)
    print("\nwrote data/directory_profile_check.json")


if __name__ == "__main__":
    main()
