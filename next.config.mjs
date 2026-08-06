import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,

  // Output as static site (for SSG) - only for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),

  // Image optimization settings
  // 2026-05-26 PR #2 fix: unoptimized restored to TRUE.
  //   Why: output:'export' (static export) does not support /_next/image
  //   optimization. Cloudflare Pages static deploy returns 404 on every
  //   /_next/image?url=... request, leaving every <Image> component on
  //   the site silently broken. Verified via curl on factoryjet.com.
  //   Setting unoptimized:true forces <Image> to use raw /images/...
  //   paths, which Cloudflare serves correctly.
  //   Trade-off: no runtime AVIF/WebP conversion or responsive srcset,
  //   but our source files are already pre-optimized WebP at sensible
  //   widths, so the trade-off is acceptable.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'factoryjet.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Configure trailing slashes to match current setup
  trailingSlash: false,

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental optimizations
  experimental: {
    // NOTE (2026-07-07): 'firebase', 'firebase/firestore', 'firebase/app' were
    // REMOVED from this list. optimizePackageImports rewrites barrel imports and
    // fragments firebase's side-effectful service registration; under Next 16's
    // Turbopack the resulting chunk order is non-deterministic across rebuilds, so
    // a rebuild can emit a bundle where `getFirestore()`/`initializeFirestore()`
    // run BEFORE the firestore service registers -> "Service firestore is not
    // available" thrown at module eval -> React hydration crashes the whole page
    // (blank page / renderer OOM). This caused the 2026-07-07 homepage outage.
    // Firebase is small and modular; it does not need this optimization. Do NOT
    // re-add firebase here. (See src/firebase.ts createDb for the defensive guard.)
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // CSS delivery: external cached <link rel="stylesheet"> (Next default).
    //   2026-06-02: inlineCss:true was REVERTED. It inlined the entire ~278KB
    //   sitewide Tailwind utility bundle into every page's HTML. On desktop this
    //   is free (PSI desktop = 100), but on throttled mobile (Slow 4G + 4x CPU)
    //   the 278KB inline-CSS PARSE before first paint gated the text LCP, and
    //   clean PageSpeed Insights measured mobile 79 / LCP 4.7s — WORSE than the
    //   pre-inlineCss baseline of 84 / LCP 4.4s. A render-blocking external
    //   stylesheet (~35KB gzip, cacheable, reused across pages) parses far less
    //   per navigation. Verdict: inlining a large sitewide bundle is the wrong
    //   tool here; the 278KB is genuine utilities (no pathological bloat) so it
    //   cannot be slimmed to where inlining wins. See session 2026-06-02.
  },

  // Enable gzip compression
  compress: true,

  // 301 redirects. NOTE: redirects() is a no-op under output: 'export'
  // (production) and emits a build warning if present, so it is gated to
  // dev/preview only. The production-effective layer is /public/_redirects,
  // which Cloudflare Pages applies.
  ...(process.env.NODE_ENV !== 'production' && {
    redirects: async () => [
      // Cannibalization consolidation (2026-07-25) — prod layer is /public/_redirects
      // generative-engine-optimization redirect REMOVED 2026-08-06: the page was
      // rebuilt in full. GEO/AEO measured as a distinct ~1,900/mo US market at KD 0-6.
      // Repointed 2026-08-06 straight at the final destination, so ai-agency does
      // not become a 2-hop chain through the now-retired ai-agents URL.
      { source: '/services/ai-agency',                       destination: '/services/ai-agent-development', permanent: true },
      { source: '/services/ai-agents',                       destination: '/services/ai-agent-development', permanent: true },
      { source: '/services/whatsapp-chatbot',                destination: '/services/ai-chatbot-development', permanent: true },
      // UK sitemap legacy URLs
      { source: '/uk/sitemap-index.xml',    destination: '/sitemap.xml',            permanent: true },
      { source: '/uk/sitemap-cities.xml',   destination: '/sitemap-uk/sitemap.xml', permanent: true },
      { source: '/uk/sitemap-services.xml', destination: '/sitemap-uk/sitemap.xml', permanent: true },
      // UK platform route deprecation (2026-05-27, PR #3) — production-effective
      // layer is /public/_redirects. Mirror here for dev/preview parity.
      { source: '/uk/:city/:service/:platform', destination: '/uk/:city/:service', permanent: true },
      // Legacy page retirement (2026-05-14) — also in /public/_redirects for Cloudflare Pages
      { source: '/us/services/web-design/new-york/services',          destination: '/us/services/web-design/new-york',      permanent: true },
      { source: '/us/services/ecommerce-development/boise',           destination: '/us/services/ecommerce-development',    permanent: true },
      { source: '/us/services/ecommerce-development/chattanooga',     destination: '/us/services/ecommerce-development',    permanent: true },
      { source: '/us/services/ecommerce-development/fargo',           destination: '/us/services/ecommerce-development',    permanent: true },
      { source: '/us/services/ecommerce-development/lincoln',         destination: '/us/services/ecommerce-development',    permanent: true },
      { source: '/us/services/ecommerce-development/sioux-falls',     destination: '/us/services/ecommerce-development',    permanent: true },
      // India service URL migration (2026-05-16) — drop /services/ prefix
      // Production-effective layer is /public/_redirects (Cloudflare Pages)
      { source: '/services/web-design',                destination: '/web-design',                permanent: true },
      { source: '/services/web-design/ahmedabad',      destination: '/web-design/ahmedabad',      permanent: true },
      { source: '/services/web-design/bangalore',      destination: '/web-design/bangalore',      permanent: true },
      { source: '/services/web-design/chennai',        destination: '/web-design/chennai',        permanent: true },
      { source: '/services/web-design/delhi',          destination: '/web-design/delhi',          permanent: true },
      { source: '/services/web-design/hyderabad',      destination: '/web-design/hyderabad',      permanent: true },
      { source: '/services/web-design/madurai',        destination: '/web-design/madurai',        permanent: true },
      { source: '/services/web-design/mumbai',         destination: '/web-design/mumbai',         permanent: true },
      { source: '/services/web-design/pune',           destination: '/web-design/pune',           permanent: true },
      { source: '/services/web-design/surat',          destination: '/web-design/surat',          permanent: true },
      // NOTE (2026-06-05, FJ-003): Removed contradicting rules that sent
      // /services/ecommerce-development(/mumbai) → /ecommerce-development(/mumbai).
      // Canonical India ecommerce URL is /services/ecommerce-development/[city]
      // (matches sitemap-india + page source). The reverse migration in
      // public/_redirects (/ecommerce-development → /services/ecommerce-development)
      // is the single source of truth. Do not re-add the inverse here.
    ],
  }),

  // Optimize power consumption (better performance)
  poweredByHeader: false,

  // Turbopack configuration (Next.js 16+)
  // Pin the workspace root to this directory (website/) so Next does not infer
  // it from the stray ../package-lock.json at the repo root. The real lockfile
  // is website/pnpm-lock.yaml. Silences the "inferred workspace root" +
  // "additional lockfiles" warnings.
  turbopack: { root: __dirname },

  // Legacy webpack config (for non-Turbopack builds)
  webpack: (config, { dev }) => {
    if (dev) {
      // Comprehensive fix for Windows watchpack issues
      config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
      };

      // Override snapshot options
      config.snapshot = {
        ...config.snapshot,
        managedPaths: [],
        immutablePaths: [],
        buildDependencies: {
          ...config.snapshot?.buildDependencies,
        },
      };

      // Ensure output path is absolute
      if (!path.isAbsolute(config.output.path)) {
        config.output.path = path.resolve(__dirname, config.output.path);
      }
    }

    return config;
  },
};

export default nextConfig;
