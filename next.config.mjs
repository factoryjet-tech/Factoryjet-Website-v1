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
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Only disable for static export
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
    optimizePackageImports: ['lucide-react', 'framer-motion', 'firebase', 'firebase/firestore', 'firebase/app'],
    // Inline critical CSS and defer the rest — reduces render-blocking CSS chunk
    optimizeCss: true,
  },

  // Enable gzip compression
  compress: true,

  // 301 redirects from old /uk/sitemap-*.xml URLs to the new native
  // sitemap-index. NOTE: redirects() is a no-op under output: 'export'
  // (production). The production-effective layer is /public/_redirects,
  // which Cloudflare Pages applies. These entries cover dev/preview only.
  async redirects() {
    return [
      // UK sitemap legacy URLs
      { source: '/uk/sitemap-index.xml',    destination: '/sitemap.xml',            permanent: true },
      { source: '/uk/sitemap-cities.xml',   destination: '/sitemap-uk/sitemap.xml', permanent: true },
      { source: '/uk/sitemap-services.xml', destination: '/sitemap-uk/sitemap.xml', permanent: true },
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
      { source: '/services/ecommerce-development',           destination: '/ecommerce-development',           permanent: true },
      { source: '/services/ecommerce-development/mumbai',    destination: '/ecommerce-development/mumbai',    permanent: true },
    ]
  },

  // Optimize power consumption (better performance)
  poweredByHeader: false,

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

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
