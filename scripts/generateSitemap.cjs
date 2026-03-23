/**
 * Dynamic Sitemap Generator
 *
 * Auto-discovers all pages from the filesystem and generates:
 * - /public/sitemap.xml          → Sitemap index
 * - /public/sitemap-pages.xml    → Core pages (home, about, contact, etc.)
 * - /public/sitemap-services.xml → All service pages (India + US + AI agents + Shopify)
 * - /public/sitemap-blog.xml     → Blog posts
 * - /public/sitemap-cases.xml    → Case studies
 */

const fs = require('fs');
const path = require('path');

// ─── Config ────────────────────────────────────────────────────────────────────
const BASE_URL = 'https://factoryjet.com';
const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const currentDate = new Date().toISOString().split('T')[0];

// ─── Blog & Case Study slugs (extracted from source data) ──────────────────────
function extractSlugs(filePath, varName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slugs = [];
  const regex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const blogSlugs = extractSlugs(
  path.join(__dirname, '..', 'src', 'lib', 'legacy-pages', 'Blog', 'posts.tsx'),
  'POSTS'
);

const caseSlugs = extractSlugs(
  path.join(__dirname, '..', 'src', 'lib', 'legacy-pages', 'Case', 'data.constants.ts'),
  'CASE_STUDIES'
);

// ─── Auto-discover static pages from filesystem ────────────────────────────────
function discoverPages(dir, basePath = '') {
  const routes = [];

  if (!fs.existsSync(dir)) return routes;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const dirName = entry.name;

    // Skip dynamic route segments and internal Next.js dirs
    if (dirName.startsWith('[') || dirName.startsWith('_') || dirName.startsWith('.')) continue;

    const fullPath = path.join(dir, dirName);
    const routePath = `${basePath}/${dirName}`;

    // Check if this directory has a page.tsx
    if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.jsx'))) {
      routes.push(routePath);
    }

    // Recurse into subdirectories
    routes.push(...discoverPages(fullPath, routePath));
  }

  return routes;
}

// Check if root has a page
const allDiscoveredRoutes = ['/'];
allDiscoveredRoutes.push(...discoverPages(APP_DIR));

// ─── Categorize routes ─────────────────────────────────────────────────────────

// Service-related paths
const servicePatterns = ['/services/', '/ecommerce-development/', '/us/services/', '/us/ecommerce-development/'];
const isServiceRoute = (route) => servicePatterns.some(p => route.includes(p));

// Legal/utility pages (low priority)
const legalPages = ['/privacy', '/terms', '/refund-policy', '/sitemap'];
const isLegalPage = (route) => legalPages.includes(route);

// Core pages (everything that's not a service, legal, blog listing, or case listing)
const coreListingPages = ['/blog', '/case'];

function categorizeRoute(route) {
  if (isServiceRoute(route)) return 'service';
  if (isLegalPage(route)) return 'legal';
  return 'page';
}

function getPriority(route) {
  if (route === '/') return '1.0';
  if (isLegalPage(route)) return '0.3';
  if (isServiceRoute(route)) {
    // Main service pages get higher priority
    const depth = route.split('/').filter(Boolean).length;
    if (depth <= 2) return '0.9';
    // City-specific or sub-service pages
    return '0.8';
  }
  if (route === '/pricing') return '0.9';
  if (['/about', '/contact', '/blog', '/case'].includes(route)) return '0.8';
  // US/UAE pages
  if (route.startsWith('/us') || route.startsWith('/uae')) return '0.7';
  return '0.7';
}

function getChangefreq(route) {
  if (route === '/') return 'daily';
  if (isLegalPage(route)) return 'yearly';
  if (['/blog', '/case'].includes(route)) return 'weekly';
  if (isServiceRoute(route)) return 'weekly';
  return 'monthly';
}

// ─── Split routes into categories ──────────────────────────────────────────────
const pageUrls = [];
const serviceUrls = [];

for (const route of allDiscoveredRoutes) {
  const entry = {
    loc: `${BASE_URL}${route}`,
    lastmod: currentDate,
    changefreq: getChangefreq(route),
    priority: getPriority(route),
  };

  if (isServiceRoute(route)) {
    serviceUrls.push(entry);
  } else {
    pageUrls.push(entry);
  }
}

// Blog URLs
const blogUrls = blogSlugs.map(slug => ({
  loc: `${BASE_URL}/blog/${slug}`,
  lastmod: currentDate,
  changefreq: 'monthly',
  priority: '0.6',
}));

// Case study URLs
const caseUrls = caseSlugs.map(slug => ({
  loc: `${BASE_URL}/case/${slug}`,
  lastmod: currentDate,
  changefreq: 'monthly',
  priority: '0.7',
}));

// ─── XML generation helpers ────────────────────────────────────────────────────
function generateUrlsetXml(urls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const url of urls) {
    xml += `  <url>\n`;
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;
  return xml;
}

function generateSitemapIndex(sitemapFiles) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const file of sitemapFiles) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE_URL}/${file}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>`;
  return xml;
}

// ─── Write sitemap files ───────────────────────────────────────────────────────
const sitemapFiles = [];

// 1. Pages sitemap
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pages.xml'), generateUrlsetXml(pageUrls), 'utf8');
sitemapFiles.push('sitemap-pages.xml');

// 2. Services sitemap
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-services.xml'), generateUrlsetXml(serviceUrls), 'utf8');
sitemapFiles.push('sitemap-services.xml');

// 3. Blog sitemap
if (blogUrls.length > 0) {
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-blog.xml'), generateUrlsetXml(blogUrls), 'utf8');
  sitemapFiles.push('sitemap-blog.xml');
}

// 4. Case studies sitemap
if (caseUrls.length > 0) {
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-cases.xml'), generateUrlsetXml(caseUrls), 'utf8');
  sitemapFiles.push('sitemap-cases.xml');
}

// 5. Sitemap index
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), generateSitemapIndex(sitemapFiles), 'utf8');

// ─── Summary ───────────────────────────────────────────────────────────────────
console.log('\n✅ Sitemap generated successfully!\n');
console.log('📁 Files created:');
console.log(`   sitemap.xml          → Sitemap index (${sitemapFiles.length} sitemaps)`);
console.log(`   sitemap-pages.xml    → ${pageUrls.length} core pages`);
console.log(`   sitemap-services.xml → ${serviceUrls.length} service pages`);
console.log(`   sitemap-blog.xml     → ${blogUrls.length} blog posts`);
console.log(`   sitemap-cases.xml    → ${caseUrls.length} case studies`);
console.log(`\n📊 Total URLs: ${pageUrls.length + serviceUrls.length + blogUrls.length + caseUrls.length}`);

// List all discovered routes for verification
console.log('\n🔍 Discovered routes:');
console.log('\n  Pages:');
pageUrls.forEach(u => console.log(`    ${u.loc.replace(BASE_URL, '')}`));
console.log('\n  Services:');
serviceUrls.forEach(u => console.log(`    ${u.loc.replace(BASE_URL, '')}`));
console.log('\n  Blog posts:', blogUrls.length);
console.log('  Case studies:', caseUrls.length);
