#!/usr/bin/env python3
"""
submit-google-indexing.py

Submits all factoryjet.com URLs (or specific priority URLs) to the Google Indexing API
using the service account credentials in credentials/factoryjet-gsc.json.
"""

import json
import os
import sys
import time
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import Request

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CREDS_CANDIDATES = [
    os.path.join(ROOT_DIR, 'credentials', 'factoryjet-gsc.json'),
    os.path.join(os.path.dirname(ROOT_DIR), 'credentials', 'factoryjet-gsc.json'),
    '/Users/bhaveshbarot/FactoryJet/credentials/factoryjet-gsc.json',
]

CREDS_FILE = next((p for p in CREDS_CANDIDATES if os.path.exists(p)), None)

if not CREDS_FILE:
    print(f"❌ Credentials file not found in candidates: {CREDS_CANDIDATES}")
    sys.exit(1)

SCOPES = ['https://www.googleapis.com/auth/indexing']
creds = service_account.Credentials.from_service_account_file(CREDS_FILE, scopes=SCOPES)
creds.refresh(Request())

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {creds.token}'
}

DEFAULT_PRIORITY_URLS = [
    'https://factoryjet.com/marketplace-management',
    'https://factoryjet.com/best-ecommerce-platforms',
    'https://factoryjet.com/services/shopify-development',
    'https://factoryjet.com/b2b-ecommerce',
    'https://factoryjet.com/replatforming',
    'https://factoryjet.com/services/ai-agent-development',
    'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
    'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
    'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    'https://factoryjet.com/blog/ai-customer-support-agent-architecture-guide',
    'https://factoryjet.com/blog/how-to-build-custom-ai-sdr-b2b-sales-2026',
    'https://factoryjet.com/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026',
    'https://factoryjet.com/blog/agentic-commerce-autonomous-ai-agents-ecommerce-2026',
    'https://factoryjet.com/omnichannel-commerce',
    'https://factoryjet.com/headless-commerce',
    'https://factoryjet.com/agentic-commerce',
]

urls_to_submit = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_PRIORITY_URLS

print(f"🚀 Submitting {len(urls_to_submit)} URLs to Google Indexing API...")

success_count = 0
for u in urls_to_submit:
    try:
        res = requests.post(
            'https://indexing.googleapis.com/v3/urlNotifications:publish',
            headers=headers,
            json={'url': u, 'type': 'URL_UPDATED'},
            timeout=10
        )
        if res.status_code == 200:
            print(f"✅ [200 OK] {u}")
            success_count += 1
        else:
            print(f"⚠️ [{res.status_code}] {u} -> {res.text}")
    except Exception as e:
        print(f"❌ Error submitting {u}: {e}")
    time.sleep(0.15)

print(f"\n✨ Completed: {success_count}/{len(urls_to_submit)} URLs successfully submitted to Google Indexing API.")
