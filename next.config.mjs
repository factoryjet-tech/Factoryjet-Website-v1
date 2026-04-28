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
  },

  // Enable gzip compression
  compress: true,

  // 301 redirects from old /uk/sitemap-*.xml URLs to the new native
  // sitemap-index. NOTE: redirects() is a no-op under output: 'export'
  // (production). The production-effective layer is /public/_redirects,
  // which Cloudflare Pages applies. These entries cover dev/preview only.
  async redirects() {
    return [
      { source: '/uk/sitemap-index.xml',    destination: '/sitemap.xml',            permanent: true },
      { source: '/uk/sitemap-cities.xml',   destination: '/sitemap-uk/sitemap.xml', permanent: true },
      { source: '/uk/sitemap-services.xml', destination: '/sitemap-uk/sitemap.xml', permanent: true },
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
