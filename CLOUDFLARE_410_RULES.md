# Cloudflare 410 Rules Configuration for Legacy URL Cleanup

## Overview
This document provides step-by-step instructions to implement 410 (Gone) responses for 4,710+ legacy URLs identified in the SEO audit. These URLs are from a previous e-commerce platform and provide no user or SEO value.

## Why 410 Instead of 404?
- **410 Gone** = Permanent removal signal to Google
- **404 Not Found** = Temporary, Google may keep recrawling
- 410 tells Google: "Stop crawling these URLs permanently"

---

## Step 1: Access Cloudflare Dashboard

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select the **factoryjet.com** domain
3. Navigate to **Rules** → **Redirect Rules** (or **Transform Rules**)

---

## Step 2: Create 410 Response Rules

### Method A: Using Redirect Rules (Recommended)

Go to **Rules** → **Redirect Rules** → **Create Rule**

#### Rule 1: Block /shopdetail/ URLs
```
Rule name: Block Legacy Shopdetail URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /shopdetail/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 2: Block /shop/ URLs
```
Rule name: Block Legacy Shop URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /shop/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 3: Block /store/ URLs
```
Rule name: Block Legacy Store URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /store/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 4: Block /product/ URLs
```
Rule name: Block Legacy Product URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /product/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 5: Block /pcmypage URLs
```
Rule name: Block Legacy PCMyPage URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /pcmypage

Then:
  Type: Static
  Status Code: 410
```

#### Rule 6: Block /safe_search/ URLs
```
Rule name: Block Legacy Safe Search URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /safe_search/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 7: Block /index.php URLs
```
Rule name: Block Legacy PHP URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /index.php

Then:
  Type: Static
  Status Code: 410
```

#### Rule 8: Block /zhHant/ URLs (Chinese Traditional)
```
Rule name: Block Legacy Chinese URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /zhHant/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 9: Block /zhHans/ URLs (Chinese Simplified)
```
Rule name: Block Legacy Chinese Simplified URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /zhHans/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 10: Block /surugaya/ URLs
```
Rule name: Block Legacy Surugaya URLs
When incoming requests match:
  Field: URI Path
  Operator: contains
  Value: /surugaya/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 11: Block /demo/ URLs
```
Rule name: Block Legacy Demo URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /demo/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 12: Block /old/ URLs
```
Rule name: Block Legacy Old URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /old/

Then:
  Type: Static
  Status Code: 410
```

#### Rule 13: Block /backup/ URLs
```
Rule name: Block Legacy Backup URLs
When incoming requests match:
  Field: URI Path
  Operator: starts with
  Value: /backup/

Then:
  Type: Static
  Status Code: 410
```

---

### Method B: Using Bulk Redirect (Alternative)

If you have a list of specific URLs, you can use Cloudflare's Bulk Redirect feature:

1. Go to **Rules** → **Bulk Redirects**
2. Create a new Bulk Redirect List
3. Upload CSV with URLs and set status to 410

---

## Step 3: Create a Custom 410 Error Page (Optional but Recommended)

1. Go to **Custom Pages** in Cloudflare
2. Create a custom 410 page with a user-friendly message:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Removed | FactoryJet</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f8fafc;
            color: #1e293b;
        }
        .container {
            text-align: center;
            padding: 40px;
        }
        h1 {
            font-size: 48px;
            margin-bottom: 16px;
            color: #0052CC;
        }
        p {
            font-size: 18px;
            color: #64748b;
            margin-bottom: 24px;
        }
        a {
            color: #0052CC;
            text-decoration: none;
            font-weight: 600;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>410</h1>
        <p>This page has been permanently removed.</p>
        <a href="https://factoryjet.com">← Return to Homepage</a>
    </div>
</body>
</html>
```

---

## Step 4: Verify Implementation

### Test URLs manually:
```bash
curl -I https://factoryjet.com/shopdetail/115684059
# Expected: HTTP/2 410

curl -I https://factoryjet.com/product/detail/68168424
# Expected: HTTP/2 410
```

### Online tools:
- https://httpstatus.io/
- https://www.redirect-checker.org/

---

## Step 5: Google Search Console Actions

### Immediate Actions:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Removals** → **Temporary Removals**
3. Add these URL prefixes for faster removal:
   - `https://factoryjet.com/shopdetail/`
   - `https://factoryjet.com/product/`
   - `https://factoryjet.com/shop/`
   - `https://factoryjet.com/store/`

### Validation (After 24-48 hours):
1. Go to **URL Inspection**
2. Test a legacy URL (e.g., `/shopdetail/115684059`)
3. Click **Test Live URL**
4. Confirm it shows **410 Gone**
5. Click **Request Indexing** (optional - confirms the 410)

---

## Expected Timeline

| Action | Timeframe |
|--------|-----------|
| Cloudflare rules active | Immediate |
| robots.txt recognized | 24-48 hours |
| GSC temporary removals | 24-48 hours |
| Soft 404 count decline | 1-2 weeks |
| Crawled-not-indexed decline | 2-4 weeks |
| Full cleanup from index | 4-8 weeks |

---

## URL Patterns Summary

| Pattern | Example | Action |
|---------|---------|--------|
| `/shopdetail/` | `/shopdetail/115684059` | 410 |
| `/shop/` | `/shop/category/` | 410 |
| `/store/` | `/store/products/` | 410 |
| `/product/` | `/product/detail/68168424` | 410 |
| `/pcmypage` | `/pcmypage?callback=...` | 410 |
| `/safe_search/` | `/safe_search/config?...` | 410 |
| `/index.php` | `/index.php?shopdetail/...` | 410 |
| `/zhHant/` | `/zhHant/product/...` | 410 |
| `/zhHans/` | `/zhHans/product/...` | 410 |
| `/surugaya/` | `/zhHant/product/surugaya/...` | 410 |
| `/demo/` | `/demo/old-page` | 410 |
| `/old/` | `/old/archive/` | 410 |
| `/backup/` | `/backup/files/` | 410 |

---

## Cloudflare Workers Alternative (Advanced)

If you need more complex logic, use a Cloudflare Worker:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  // Legacy URL patterns to block with 410
  const legacyPatterns = [
    '/shopdetail/',
    '/shop/',
    '/store/',
    '/product/',
    '/pcmypage',
    '/safe_search/',
    '/index.php',
    '/zhHant/',
    '/zhHans/',
    '/surugaya/',
    '/demo/',
    '/old/',
    '/backup/'
  ]

  // Check if URL matches any legacy pattern
  for (const pattern of legacyPatterns) {
    if (path.includes(pattern)) {
      return new Response('This page has been permanently removed.', {
        status: 410,
        headers: {
          'Content-Type': 'text/html',
          'X-Robots-Tag': 'noindex'
        }
      })
    }
  }

  // Pass through to origin for valid URLs
  return fetch(request)
}
```

To deploy:
1. Go to **Workers & Pages** in Cloudflare
2. Create a new Worker
3. Paste the code above
4. Add a route: `factoryjet.com/*`

---

## Monitoring Checklist

Weekly monitoring after implementation:

- [ ] Check GSC "Soft 404" count (should decrease)
- [ ] Check GSC "Crawled - currently not indexed" (should decrease)
- [ ] Verify 410 responses with HTTP status checker
- [ ] Review crawl stats in GSC for efficiency improvement

---

## Contact for Issues

If you encounter issues with implementation:
1. Verify Cloudflare rules are active and in correct order
2. Check that no caching is interfering (purge cache if needed)
3. Ensure rules apply to both www and non-www versions
