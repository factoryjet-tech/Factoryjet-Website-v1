#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const AUTHOR_SCHEMA_OBJ = `author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-barot',
      'https://github.com/factoryjet-tech',
    ],
  }`;

const AGGREGATE_RATING_OBJ = `aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  }`;

// 1. Target page definitions
const WEB_DESIGN_CITIES = [
  'atlanta', 'austin', 'charlotte', 'chicago', 'cleveland', 'dallas', 'denver', 'detroit',
  'houston', 'kansas-city', 'miami', 'minneapolis', 'nashville', 'new-york', 'phoenix',
  'portland', 'raleigh', 'salt-lake-city', 'san-diego', 'seattle', 'st-louis', 'tampa'
];

const SEO_CITIES = [
  'arlington', 'atlanta', 'austin', 'boise', 'boston', 'charlotte', 'chattanooga', 'chicago',
  'cleveland', 'colorado-springs', 'corpus-christi', 'dallas', 'denver', 'fargo',
  'huntington-beach', 'kansas-city', 'lakewood-ranch', 'las-vegas', 'lincoln', 'los-angeles',
  'miami', 'minneapolis', 'nashville', 'phoenix', 'providence', 'salt-lake-city', 'san-diego',
  'sioux-falls', 'tampa'
];

const ECOMMERCE_CITIES = [
  'atlanta', 'austin', 'boise', 'charlotte', 'chattanooga', 'chicago', 'dallas', 'denver',
  'fargo', 'lincoln', 'los-angeles', 'miami', 'minneapolis', 'nashville', 'new-york',
  'portland', 'raleigh', 'salt-lake-city', 'san-francisco', 'seattle', 'sioux-falls', 'tampa'
];

const REPLATFORMING_PAGES = [
  'src/app/replatforming/page.tsx',
  'src/app/replatforming/bigcommerce-to-shopify-plus/page.tsx',
  'src/app/replatforming/magento-to-shopify/page.tsx',
  'src/app/replatforming/netsuite-suitecommerce-to-shopify-plus/page.tsx',
  'src/app/replatforming/salesforce-commerce-cloud-to-shopify-plus/page.tsx',
  'src/app/replatforming/squarespace-to-shopify/page.tsx',
  'src/app/replatforming/wix-to-shopify/page.tsx',
  'src/app/replatforming/woocommerce-to-shopify/page.tsx',
  'src/app/replatforming/wordpress-to-shopify/page.tsx',
  'src/app/services/shopify-plus-b2b/page.tsx'
];

function capitalizeCity(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function processWebDesignPage(citySlug) {
  const filePath = path.join(ROOT, 'src/app', citySlug, 'web-design', 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    return;
  }
  let code = fs.readFileSync(filePath, 'utf8');
  const cityName = capitalizeCity(citySlug);

  // 1. Imports
  if (!code.includes("import AuthorCard from '@/components/v2/AuthorCard';")) {
    code = code.replace(
      "import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';",
      "import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';\nimport AuthorCard from '@/components/v2/AuthorCard';\nimport WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';\nimport RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';"
    );
  }

  // 2. Schema: Add aggregateRating and author to LOCAL_BUSINESS_SCHEMA and SERVICE_SCHEMA
  if (!code.includes("ratingValue: '4.9'") && code.includes('const LOCAL_BUSINESS_SCHEMA = {')) {
    code = code.replace(
      "const LOCAL_BUSINESS_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'ProfessionalService',",
      `const LOCAL_BUSINESS_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'ProfessionalService\',\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (!code.includes("jobTitle: 'Chief Technical Architect'") && code.includes('const SERVICE_SCHEMA = {')) {
    code = code.replace(
      "const SERVICE_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'Service',",
      `const SERVICE_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'Service\',\n  ${AUTHOR_SCHEMA_OBJ},\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (code.includes('const WEBPAGE_SCHEMA = {') && !code.includes("url: CANONICAL,\n  dateModified: PAGE_MODIFIED,\n  author:")) {
    code = code.replace(
      "  dateModified: PAGE_MODIFIED,\n};",
      `  dateModified: PAGE_MODIFIED,\n  ${AUTHOR_SCHEMA_OBJ},\n};`
    );
  }

  // 3. UI: Add RegionalBenchmarkCard after districts / pain points
  if (!code.includes('<RegionalBenchmarkCard') && code.includes('id="web-architecture-blueprint"')) {
    code = code.replace(
      '<div id="web-architecture-blueprint">',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="${cityName}" vertical="web-design" />\n          </div>\n        </section>\n\n        <div id="web-architecture-blueprint">`
    );
  }

  // 4. UI: Add WebDesignValueCalculator before FAQ
  if (!code.includes('<WebDesignValueCalculator') && code.includes('{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}')) {
    code = code.replace(
      '{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}',
      `{/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}\n        <WebDesignValueCalculator city="${cityName}" region="us" />\n\n        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}`
    );
  } else if (!code.includes('<WebDesignValueCalculator') && code.includes('<FAQ\n')) {
    code = code.replace(
      '<FAQ\n',
      `<WebDesignValueCalculator city="${cityName}" region="us" />\n\n        <FAQ\n`
    );
  }

  // 5. UI: Add AuthorCard before Final CTA
  if (!code.includes('<AuthorCard') && code.includes('{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}')) {
    code = code.replace(
      '{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}',
      `{/* ── VERIFIED AUTHOR ENTITY CARD ── */}\n        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n          <div className="pp-wrap">\n            <AuthorCard />\n          </div>\n        </section>\n\n        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}`
    );
  } else if (!code.includes('<AuthorCard') && code.includes('<SiteFooter')) {
    code = code.replace(
      '<SiteFooter',
      `<section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n        <div className="pp-wrap">\n          <AuthorCard />\n        </div>\n      </section>\n\n      <SiteFooter`
    );
  }

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✅ Upgraded Web Design: ${citySlug}`);
}

function processSeoPage(citySlug) {
  const filePath = path.join(ROOT, 'src/app', citySlug, 'seo', 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    return;
  }
  let code = fs.readFileSync(filePath, 'utf8');
  const cityName = capitalizeCity(citySlug);

  // 1. Imports
  if (!code.includes("import AuthorCard from '@/components/v2/AuthorCard';")) {
    code = code.replace(
      "import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';",
      "import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';\nimport AuthorCard from '@/components/v2/AuthorCard';\nimport LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';\nimport RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';"
    );
  }

  // 2. Schema: Add aggregateRating and author to LOCAL_BUSINESS_SCHEMA and SERVICE_SCHEMA
  if (!code.includes("ratingValue: '4.9'") && code.includes('const LOCAL_BUSINESS_SCHEMA = {')) {
    code = code.replace(
      "const LOCAL_BUSINESS_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'ProfessionalService',",
      `const LOCAL_BUSINESS_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'ProfessionalService\',\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (!code.includes("jobTitle: 'Chief Technical Architect'") && code.includes('const SERVICE_SCHEMA = {')) {
    code = code.replace(
      "const SERVICE_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'Service',",
      `const SERVICE_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'Service\',\n  ${AUTHOR_SCHEMA_OBJ},\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (code.includes('const WEBPAGE_SCHEMA = {') && !code.includes("url: CANONICAL,\n  dateModified: PAGE_MODIFIED,\n  author:")) {
    code = code.replace(
      "  dateModified: PAGE_MODIFIED,\n};",
      `  dateModified: PAGE_MODIFIED,\n  ${AUTHOR_SCHEMA_OBJ},\n};`
    );
  }

  // 3. UI: Add RegionalBenchmarkCard before blueprint
  if (!code.includes('<RegionalBenchmarkCard') && code.includes('id="seo-architecture-blueprint"')) {
    code = code.replace(
      '<div id="seo-architecture-blueprint">',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="${cityName}" vertical="seo" />\n          </div>\n        </section>\n\n        <div id="seo-architecture-blueprint">`
    );
  } else if (!code.includes('<RegionalBenchmarkCard') && code.includes('<LocalSeoArchitectureBlueprint')) {
    code = code.replace(
      '<LocalSeoArchitectureBlueprint',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="${cityName}" vertical="seo" />\n          </div>\n        </section>\n\n        <LocalSeoArchitectureBlueprint`
    );
  }

  // 4. UI: Add LocalSeoOpportunityEstimator before FAQ
  if (!code.includes('<LocalSeoOpportunityEstimator') && code.includes('{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}')) {
    code = code.replace(
      '{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}',
      `{/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}\n        <LocalSeoOpportunityEstimator city="${cityName}" region="us" />\n\n        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}`
    );
  } else if (!code.includes('<LocalSeoOpportunityEstimator') && code.includes('<FAQ\n')) {
    code = code.replace(
      '<FAQ\n',
      `<LocalSeoOpportunityEstimator city="${cityName}" region="us" />\n\n        <FAQ\n`
    );
  }

  // 5. UI: Add AuthorCard before Final CTA
  if (!code.includes('<AuthorCard') && code.includes('{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}')) {
    code = code.replace(
      '{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}',
      `{/* ── VERIFIED AUTHOR ENTITY CARD ── */}\n        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n          <div className="pp-wrap">\n            <AuthorCard />\n          </div>\n        </section>\n\n        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}`
    );
  } else if (!code.includes('<AuthorCard') && code.includes('<SiteFooter')) {
    code = code.replace(
      '<SiteFooter',
      `<section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n        <div className="pp-wrap">\n          <AuthorCard />\n        </div>\n      </section>\n\n      <SiteFooter`
    );
  }

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✅ Upgraded Local SEO: ${citySlug}`);
}

function processEcommercePage(citySlug) {
  const filePath = path.join(ROOT, 'src/app', citySlug, 'ecommerce-development', 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    return;
  }
  let code = fs.readFileSync(filePath, 'utf8');
  const cityName = capitalizeCity(citySlug);

  // 1. Imports
  if (!code.includes("import AuthorCard from '@/components/v2/AuthorCard';")) {
    code = code.replace(
      "import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';",
      "import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';\nimport AuthorCard from '@/components/v2/AuthorCard';\nimport CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';\nimport RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';"
    );
  }

  // 2. Schema: Add aggregateRating and author to LOCAL_BUSINESS_SCHEMA and SERVICE_SCHEMA
  if (!code.includes("ratingValue: '4.9'") && code.includes('const LOCAL_BUSINESS_SCHEMA = {')) {
    code = code.replace(
      "const LOCAL_BUSINESS_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'ProfessionalService',",
      `const LOCAL_BUSINESS_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'ProfessionalService\',\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (!code.includes("jobTitle: 'Chief Technical Architect'") && code.includes('const SERVICE_SCHEMA = {')) {
    code = code.replace(
      "const SERVICE_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'Service',",
      `const SERVICE_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'Service\',\n  ${AUTHOR_SCHEMA_OBJ},\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (code.includes('const WEBPAGE_SCHEMA = {') && !code.includes("url: CANONICAL,\n  dateModified: PAGE_MODIFIED,\n  author:")) {
    code = code.replace(
      "  dateModified: PAGE_MODIFIED,\n};",
      `  dateModified: PAGE_MODIFIED,\n  ${AUTHOR_SCHEMA_OBJ},\n};`
    );
  }

  // 3. UI: Add RegionalBenchmarkCard before blueprint
  if (!code.includes('<RegionalBenchmarkCard') && code.includes('id="commerce-architecture-blueprint"')) {
    code = code.replace(
      '<div id="commerce-architecture-blueprint">',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="${cityName}" vertical="ecommerce" />\n          </div>\n        </section>\n\n        <div id="commerce-architecture-blueprint">`
    );
  } else if (!code.includes('<RegionalBenchmarkCard') && code.includes('<EnterpriseArchitectureBlueprint')) {
    code = code.replace(
      '<EnterpriseArchitectureBlueprint',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="${cityName}" vertical="ecommerce" />\n          </div>\n        </section>\n\n        <EnterpriseArchitectureBlueprint`
    );
  }

  // 4. UI: Add CommerceRoiCalculator before FAQ
  if (!code.includes('<CommerceRoiCalculator') && code.includes('{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}')) {
    code = code.replace(
      '{/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}',
      `{/* ── INTERACTIVE SPEED & REVENUE RECOVERY CALCULATOR ── */}\n        <CommerceRoiCalculator city="${cityName}" region="us" />\n\n        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}`
    );
  } else if (!code.includes('<CommerceRoiCalculator') && code.includes('<FAQ\n')) {
    code = code.replace(
      '<FAQ\n',
      `<CommerceRoiCalculator city="${cityName}" region="us" />\n\n        <FAQ\n`
    );
  }

  // 5. UI: Add AuthorCard before Final CTA
  if (!code.includes('<AuthorCard') && code.includes('{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}')) {
    code = code.replace(
      '{/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}',
      `{/* ── VERIFIED AUTHOR ENTITY CARD ── */}\n        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n          <div className="pp-wrap">\n            <AuthorCard />\n          </div>\n        </section>\n\n        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}`
    );
  } else if (!code.includes('<AuthorCard') && code.includes('<SiteFooter')) {
    code = code.replace(
      '<SiteFooter',
      `<section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n        <div className="pp-wrap">\n          <AuthorCard />\n        </div>\n      </section>\n\n      <SiteFooter`
    );
  }

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✅ Upgraded Ecommerce: ${citySlug}`);
}

function processReplatformingHub(relPath) {
  const filePath = path.join(ROOT, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    return;
  }
  let code = fs.readFileSync(filePath, 'utf8');

  // Fix em-dash in salesforce page if present
  if (relPath.includes('salesforce-commerce-cloud-to-shopify-plus')) {
    code = code.replace('Shopify Functions—lightweight', 'Shopify Functions (lightweight serverless scripts that run in under 5 milliseconds directly on Shopify checkout without slowing down the page).');
  }

  // Fix shopify-plus-b2b dateModified
  if (relPath.includes('shopify-plus-b2b')) {
    if (!code.includes('PAGE_MODIFIED')) {
      code = code.replace(
        "const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';",
        "const PAGE_MODIFIED = '2026-08-24';\nconst CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';"
      );
    }
  }

  // 1. Imports
  if (!code.includes("import AuthorCard from '@/components/v2/AuthorCard';")) {
    if (code.includes("import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';")) {
      code = code.replace(
        "import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';",
        "import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';\nimport AuthorCard from '@/components/v2/AuthorCard';\nimport CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';\nimport RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';"
      );
    } else if (code.includes("import FAQ from '@/components/v2/FAQ';")) {
      code = code.replace(
        "import FAQ from '@/components/v2/FAQ';",
        "import FAQ from '@/components/v2/FAQ';\nimport AuthorCard from '@/components/v2/AuthorCard';\nimport CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';\nimport RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';"
      );
    }
  }

  // 2. Schema
  if (!code.includes("jobTitle: 'Chief Technical Architect'") && code.includes('const SERVICE_SCHEMA = {')) {
    code = code.replace(
      "const SERVICE_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'Service',",
      `const SERVICE_SCHEMA = {\n  '@context': \'https://schema.org\',\n  '@type': \'Service\',\n  ${AUTHOR_SCHEMA_OBJ},\n  ${AGGREGATE_RATING_OBJ},`
    );
  }

  if (code.includes('const WEBPAGE_SCHEMA = {') && !code.includes("dateModified: PAGE_MODIFIED,\n  author:")) {
    code = code.replace(
      "  dateModified: PAGE_MODIFIED,\n};",
      `  dateModified: PAGE_MODIFIED,\n  ${AUTHOR_SCHEMA_OBJ},\n};`
    );
  } else if (!code.includes('const WEBPAGE_SCHEMA = {') && relPath.includes('shopify-plus-b2b')) {
    code = code.replace(
      "const ORG_SCHEMA = {",
      `const WEBPAGE_SCHEMA = {\n  '@context': 'https://schema.org',\n  '@type': 'WebPage',\n  name: 'Shopify Plus B2B Agency & Wholesale Development | FactoryJet',\n  description: 'Scale B2B wholesale on Shopify Plus with custom pricing and ERP sync.',\n  url: 'https://factoryjet.com/services/shopify-plus-b2b',\n  dateModified: PAGE_MODIFIED,\n  ${AUTHOR_SCHEMA_OBJ},\n};\n\nconst ORG_SCHEMA = {`
    );
    code = code.replace(
      "<script id=\"sp-org-schema\"",
      "<script id=\"sp-webpage-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />\n      <script id=\"sp-org-schema\""
    );
  }

  // 3. UI: Add RegionalBenchmarkCard
  if (!code.includes('<RegionalBenchmarkCard') && code.includes('id="architecture-blueprint"')) {
    code = code.replace(
      '<div id="architecture-blueprint">',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />\n          </div>\n        </section>\n\n        <div id="architecture-blueprint">`
    );
  } else if (!code.includes('<RegionalBenchmarkCard') && code.includes('<EnterpriseArchitectureBlueprint')) {
    code = code.replace(
      '<EnterpriseArchitectureBlueprint',
      `<section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>\n          <div className="pp-wrap">\n            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />\n          </div>\n        </section>\n\n        <EnterpriseArchitectureBlueprint`
    );
  }

  // 4. UI: Add CommerceRoiCalculator before FAQ
  if (!code.includes('<CommerceRoiCalculator') && code.includes('<FAQ\n')) {
    code = code.replace(
      '<FAQ\n',
      `<CommerceRoiCalculator city="Enterprise Store" region="us" />\n\n        <FAQ\n`
    );
  }

  // 5. UI: Add AuthorCard before Final CTA / Footer
  if (!code.includes('<AuthorCard') && code.includes('{/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}')) {
    code = code.replace(
      '{/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}',
      `{/* ── VERIFIED AUTHOR ENTITY CARD ── */}\n        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n          <div className="pp-wrap">\n            <AuthorCard />\n          </div>\n        </section>\n\n        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}`
    );
  } else if (!code.includes('<AuthorCard') && code.includes('<SiteFooter')) {
    code = code.replace(
      '<SiteFooter',
      `<section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>\n        <div className="pp-wrap">\n          <AuthorCard />\n        </div>\n      </section>\n\n      <SiteFooter`
    );
  }

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✅ Upgraded Replatforming/Hub: ${relPath}`);
}

console.log('--- Starting Batch Upgrade across 83 Landing Pages ---');
WEB_DESIGN_CITIES.forEach(processWebDesignPage);
SEO_CITIES.forEach(processSeoPage);
ECOMMERCE_CITIES.forEach(processEcommercePage);
REPLATFORMING_PAGES.forEach(processReplatformingHub);
console.log('--- Finished Batch Upgrade ---');
