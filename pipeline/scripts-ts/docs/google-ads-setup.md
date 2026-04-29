# Google Ads API — OAuth & credentials setup

Step-by-step setup for the Google Ads provider implementation
(`pipeline/scripts-ts/lib/keyword-research/providers/google-ads.ts`).
Run through these steps **after** Google Ads Basic Access is approved
(application submitted 29 Apr 2026; expected response window 4–8 May
2026; decision email goes to bhavesh@factoryjet.com).

## Prerequisites

- [x] MCC `348-191-0891` created and linked to advertiser `339-170-2199`.
- [x] Explorer-tier developer token issued: `m_pv5zpRRvs_90CCiS5CEQ` (in
      `~/.factoryjet/google-ads.env`).
- [ ] Basic Access approval received (in flight).

## Step 1 — Confirm or create the Google Cloud project

The Firebase project `factoryjet-pipeline` is also a Google Cloud
project; we can reuse it for the Ads API client to keep credentials
in one place.

1. Browser → https://console.cloud.google.com/
2. Project picker (top bar) → confirm `factoryjet-pipeline` is selected.
3. Save the project number (visible in the project picker) — we don't
   need it for code, but keep it for future audits.

## Step 2 — Enable the Google Ads API

1. Browser → https://console.cloud.google.com/apis/library
2. Search "Google Ads API" → click the result.
3. Click **Enable**. Wait ~30 seconds.
4. Verify on the API library page that "Google Ads API" now shows
   **Manage** instead of **Enable**.

## Step 3 — Configure the OAuth consent screen

If the OAuth consent screen is already configured for the
`factoryjet-pipeline` project (because the Firebase Admin SDK setup
required it), skip to Step 4.

1. Browser → https://console.cloud.google.com/apis/credentials/consent
2. User Type: **Internal** (only available if `factoryjet.com` is a
   Google Workspace; otherwise pick **External** and add bhavesh's
   email as a test user in the Test Users section below).
3. App name: `FactoryJet Programmatic SEO Pipeline`
4. User support email: `bhavesh@factoryjet.com`
5. Developer contact email: `bhavesh@factoryjet.com`
6. Scopes screen → **Add or remove scopes**. Add manually if not in the
   suggested list:
   - `https://www.googleapis.com/auth/adwords`
7. (External only) Test users → add `bhavesh@factoryjet.com`.
8. Save and continue.

## Step 4 — Create OAuth 2.0 desktop credentials

1. Browser → https://console.cloud.google.com/apis/credentials
2. **+ Create credentials → OAuth client ID**.
3. Application type: **Desktop app**.
4. Name: `FactoryJet Pipeline — Desktop Client`
5. **Create**. The dialog shows your Client ID and Client Secret —
   click **Download JSON**.
6. Save the JSON file as
   `~/.factoryjet/google-ads-oauth-client.json` (mode `0600`).

       chmod 600 ~/.factoryjet/google-ads-oauth-client.json

7. Append the client ID and secret to the existing env file:

       # Reads values from the JSON; replace the cat with the actual
       # values if you prefer not to leave the JSON on disk.
       node -e '
         const c = require(require("os").homedir() + "/.factoryjet/google-ads-oauth-client.json").installed;
         console.log("GOOGLE_ADS_CLIENT_ID=" + c.client_id);
         console.log("GOOGLE_ADS_CLIENT_SECRET=" + c.client_secret);
       ' >> ~/.factoryjet/google-ads.env

## Step 5 — Run the one-time consent flow to obtain a refresh token

A short helper script (lands as part of Patch #11) opens a browser,
captures the auth code, exchanges it for a refresh token, and appends
to the env file.

```bash
cd pipeline/scripts-ts
pnpm tsx scripts/google-ads-bootstrap.ts
```

The script will:
1. Open the consent URL in your default browser.
2. Wait for you to grant the `adwords` scope as
   `bhavesh@factoryjet.com`.
3. Receive the redirect, exchange the code for a refresh token.
4. Append `GOOGLE_ADS_REFRESH_TOKEN=...` to
   `~/.factoryjet/google-ads.env`.
5. Print "Bootstrap complete" and exit.

Refresh tokens are long-lived (valid until revoked or unused for 6
months). Re-run the bootstrap if Google ever invalidates the token.

## Step 6 — Verify

```bash
cd pipeline/scripts-ts
pnpm tsx scripts/google-ads-smoke.ts
```

Expected (Patch #11):
- Lists accessible customer IDs (should include `339-170-2199`).
- Calls `KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics` for
  one test keyword (e.g. "web design london") and prints the response
  shape.
- Cleans up nothing — read-only call.

## Step 7 — Promote the developer token to Basic Access

When the approval email arrives:

1. Browser → MCC `348-191-0891` → Tools → API Center.
2. The "Access level" row should now read **Basic Access** (Google
   updates this automatically on approval — no action needed from you).
3. The token value in `~/.factoryjet/google-ads.env`
   (`GOOGLE_ADS_DEVELOPER_TOKEN_EXPLORER`) **does not change** when
   the tier is upgraded. Same token, expanded permissions.
4. Rename the env var to `GOOGLE_ADS_DEVELOPER_TOKEN` (drop the
   `_EXPLORER` suffix) so the production code path uses it. One-line
   sed in `~/.factoryjet/google-ads.env`.

## Files involved (final state)

| Path | Mode | Contents |
| --- | --- | --- |
| `~/.factoryjet/google-ads.env` | 0600 | Developer token, OAuth client ID/secret, refresh token |
| `~/.factoryjet/google-ads-oauth-client.json` | 0600 | OAuth client JSON (raw download) |
| `~/.factoryjet/firebase-admin-pipeline.json` | 0600 | (existing — unchanged) |
