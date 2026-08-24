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

const REPLATFORMING_EVALUATION_CRITERIA_CODE = `
const EVALUATION_CRITERIA = [
  {
    label: 'Technical Execution Model',
    factoryjet: 'Senior commerce systems architects write custom ETL scripts and Shopify Functions with 100% full IP ownership.',
    traditional: 'Junior agency generalists relying on generic third-party migration apps that cause database bloat.',
  },
  {
    label: 'SEO & 301 URL Preservation',
    factoryjet: '1-to-1 exact path mapping of 100% legacy URLs with single-hop 301 redirects and schema retention.',
    traditional: 'Wildcard home-page redirects that result in massive Google ranking and organic revenue drops.',
  },
  {
    label: 'ERP & Warehouse Synchronization',
    factoryjet: 'Direct GraphQL webhook pipeline syncing NetSuite, SAP, and Manhattan WMS in under 150ms.',
    traditional: 'Batch CSV file uploads or slow third-party middleware with frequent inventory sync failures.',
  },
  {
    label: 'Commercial Terms & Accountability',
    factoryjet: 'Transparent fixed-price milestone scope with guaranteed zero-downtime cutover SLA.',
    traditional: 'Open-ended hourly retainer billing with frequent scope creep and unexpected overages.',
  },
];
`;

const REPLATFORMING_DUE_DILIGENCE_JSX = `
        {/* ── AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Migration Partners: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare senior engineering replatforming against traditional design agency retainers before you commit:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
`;

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

function processReplatformingHub(relPath) {
  const filePath = path.join(ROOT, relPath);
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');

  // Fix dateModified
  code = code.replace(/PAGE_MODIFIED\s*=\s*['"]2026-08-23['"]/, "PAGE_MODIFIED = '2026-08-24'");
  code = code.replace(/dateModified:\s*['"]2026-08-23['"]/, "dateModified: '2026-08-24'");

  // Fix em-dash
  if (relPath.includes('salesforce-commerce-cloud-to-shopify-plus')) {
    code = code.replace(/Shopify Functions—lightweight/g, 'Shopify Functions (lightweight serverless scripts that run in under 5 milliseconds directly on Shopify checkout without slowing down the page).');
  }

  // Ensure Evaluation criteria constant exists
  if (!code.includes('const EVALUATION_CRITERIA = [')) {
    code = code.replace('export default function', `${REPLATFORMING_EVALUATION_CRITERIA_CODE}\nexport default function`);
  }

  // Ensure Due Diligence table exists
  if (!code.includes('Evaluating Migration Partners: What to Ask') && code.includes('<CommerceRoiCalculator')) {
    code = code.replace('<CommerceRoiCalculator', `${REPLATFORMING_DUE_DILIGENCE_JSX}\n        <CommerceRoiCalculator`);
  } else if (!code.includes('Evaluating Migration Partners: What to Ask') && code.includes('<FAQ')) {
    code = code.replace('<FAQ', `${REPLATFORMING_DUE_DILIGENCE_JSX}\n        <FAQ`);
  }

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✅ Refined Replatforming Hub: ${relPath}`);
}

REPLATFORMING_PAGES.forEach(processReplatformingHub);

console.log('Finished updating replatforming evaluation tables and dates.');
