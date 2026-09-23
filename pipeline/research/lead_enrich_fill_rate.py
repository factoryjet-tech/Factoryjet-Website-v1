#!/usr/bin/env python3
"""Share of inline-form leads that added step-2 details (phone/company/message).

Reads ERPNext with ERPNEXT_API_KEY / ERPNEXT_API_SECRET from the environment.
Usage: ERPNEXT_API_KEY=... ERPNEXT_API_SECRET=... python3 lead_enrich_fill_rate.py [days=21]
"""
import json, os, sys, urllib.parse, urllib.request, datetime

URL = os.environ.get("ERPNEXT_URL", "https://erp.factoryjet.com")
AUTH = f"token {os.environ['ERPNEXT_API_KEY']}:{os.environ['ERPNEXT_API_SECRET']}"
DAYS = int(sys.argv[1]) if len(sys.argv) > 1 else 21
since = (datetime.date.today() - datetime.timedelta(days=DAYS)).isoformat()

def get(path, **params):
    q = urllib.parse.urlencode({k: json.dumps(v) if not isinstance(v, (str, int)) else v for k, v in params.items()})
    req = urllib.request.Request(f"{URL}{path}?{q}", headers={"Authorization": AUTH, "Accept": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=30))["data"]

leads = get("/api/resource/Lead", filters=[["creation", ">=", since], ["source", "=", "Website"]],
            fields=["name", "custom_firebase_doc_id"], limit_page_length=1000)
comments = get("/api/resource/Comment", filters=[["reference_doctype", "=", "Lead"], ["creation", ">=", since],
               ["content", "like", "%Details added on the website%"]], fields=["reference_name"], limit_page_length=1000)
enriched = {c["reference_name"] for c in comments}
total = len(leads)
filled = sum(1 for l in leads if l["name"] in enriched)
print(f"Last {DAYS} days: {total} website leads, {filled} added details"
      + (f" ({filled / total:.0%})" if total else ""))
