# Troubleshooting Guide

## Common Issues & Fixes

### 1. "Module not found" errors

If you see errors like `Cannot find module 'next'` or `Cannot find module 'react'`:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 2. React version conflicts

If you see warnings about React version mismatches:

```bash
# Install exact versions
npm install next@14.2.18 react@18.3.1 react-dom@18.3.1 --save-exact
```

### 3. TypeScript errors with `useParams`

The `useParams` hook in Next.js App Router works differently:
- ✅ **Fixed**: ServiceLocation component now accepts params as props
- The params are passed from the page component

### 4. Port already in use

If port 3000 is taken:

```bash
# Kill the process
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

### 5. Build fails with "export" errors

If the build fails due to static export issues:

```bash
# Check next.config.js has:
output: 'export'
images: { unoptimized: true }
```

### 6. CSS not loading

If Tailwind CSS doesn't work:

```bash
# Check tailwind.config.js content paths include:
'./src/pages/**/*.{js,ts,jsx,tsx,mdx}'
'./src/components/**/*.{js,ts,jsx,tsx,mdx}'
'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
```

### 7. "use client" errors

Components using hooks need `'use client';` directive:
- Header.tsx ✅
- Footer.tsx ✅
- ScrollToTop.tsx ✅
- ContactModalContext.tsx ✅
- ServiceLocation/index.tsx ✅

## Step-by-Step Fresh Start

If nothing works, try this complete reset:

```bash
# 1. Clean everything
rm -rf node_modules package-lock.json .next out

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

## Checking Installation

Verify Next.js is installed:

```bash
npx next --version
# Should show: 14.2.18

npm list next react react-dom
# Should show all three installed
```

## Development Server

Start the dev server:

```bash
npm run dev
```

Visit: http://localhost:3000

## Build for Production

```bash
npm run build
```

This creates static files in the `out/` directory.

## Key Files Changed

### Fixed Components:
1. **[src/pages/ServiceLocation/index.tsx](src/pages/ServiceLocation/index.tsx)**
   - Now accepts `params` as props instead of using `useParams` hook
   - Fixed all `to=` attributes to `href=`
   - Added proper TypeScript interface

2. **[src/app/services/[service]/[city]/page.tsx](src/app/services/[service]/[city]/page.tsx)**
   - Passes params from Next.js to ServiceLocation component

3. **[src/components/Header.tsx](src/components/Header.tsx)**
   - Uses `next/link` instead of `react-router-dom`
   - All navigation updated to `href` prop

4. **[src/components/Footer.tsx](src/components/Footer.tsx)**
   - Uses `next/link` instead of `react-router-dom`

5. **[src/components/ScrollToTop.tsx](src/components/ScrollToTop.tsx)**
   - Uses `usePathname` from `next/navigation`

## Still Having Issues?

### Check these files exist:
- ✅ `src/app/layout.tsx`
- ✅ `src/app/page.tsx`
- ✅ `next.config.js`
- ✅ `tsconfig.json`

### Verify package.json:
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### Check for leftover Vite files:
These should NOT exist:
- ❌ `vite.config.ts`
- ❌ `index.html`
- ❌ `src/main.tsx`
- ❌ `src/App.tsx`

## Environment Variables

Create `.env.local` if you need API keys:

```env
# Server-side only (secure)
GEMINI_API_KEY=your_api_key_here
```

## Getting Help

If you're still stuck:
1. Check the terminal error messages carefully
2. Look for the line number and file causing the issue
3. Refer to [Next.js Documentation](https://nextjs.org/docs)
4. Check [Migration Summary](MIGRATION_SUMMARY.md) for complete list of changes

## Common Error Messages

### "Cannot find module 'react-router-dom'"
✅ **Fixed**: All react-router imports have been replaced

### "useParams must be used within a component"
✅ **Fixed**: ServiceLocation now receives params as props

### "Invalid href prop"
Make sure all Link components use `href` not `to`:
```tsx
// ✅ Correct
<Link href="/about">About</Link>

// ❌ Wrong
<Link to="/about">About</Link>
```

## Success Indicators

You'll know everything is working when:
- ✅ `npm run dev` starts without errors
- ✅ Browser shows "localhost:3000" without errors
- ✅ Navigation works (clicking links)
- ✅ `npm run build` completes successfully
- ✅ Terminal shows "compiled successfully"
