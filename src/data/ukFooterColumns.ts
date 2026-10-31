import type { SiteFooterColumn } from '@/components/v2/SiteFooter';
import { pickFooterLinks } from './footerFeatured';

/**
 * UK-locale footer link columns (2026-10-31).
 *
 * Same columns, order and component as US_FOOTER_COLUMNS, so a UK page carries the
 * primary site's footer. Every slot points at the UK page where one exists, and at
 * the shared page otherwise. US-only pages (Walmart, Target Plus, Wayfair, US cost
 * guides, US city pages) are left out.
 *
 * This replaced src/app/uk/sections/Footer.tsx's own dark footer. Everything that
 * footer linked to is still here, including all 21 UK city roots: for several
 * cities this footer is the only inbound internal link (see the 2026-08-03 note in
 * the old file), so do not drop the "UK Cities" column.
 */
const UK_CITIES: ReadonlyArray<[string, string]> = [
  ['London', 'london'], ['Leeds', 'leeds'], ['Manchester', 'manchester'],
  ['Birmingham', 'birmingham'], ['Sheffield', 'sheffield'], ['Bristol', 'bristol'],
  ['Edinburgh', 'edinburgh'], ['Liverpool', 'liverpool'], ['Glasgow', 'glasgow'],
  ['Newcastle', 'newcastle'], ['Nottingham', 'nottingham'], ['Cardiff', 'cardiff'],
  ['Leicester', 'leicester'], ['Coventry', 'coventry'], ['Hull', 'hull'],
  ['Derby', 'derby'], ['Southampton', 'southampton'], ['Brighton', 'brighton'],
  ['Oxford', 'oxford'], ['Cambridge', 'cambridge'], ['Plymouth', 'plymouth'],
];

export const UK_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Commerce',
    links: [
      { label: 'E-Commerce Development', href: '/uk/ecommerce-development' },
      { label: 'Free Ecommerce Audit',   href: '/uk/ecommerce-audit' },
      { label: 'Shopify Maintenance & Support', href: '/uk/shopify-maintenance-services' },
      { label: 'Ecommerce Consultant',   href: '/uk/ecommerce-consultant' },
      { label: 'Ecommerce Redesign',     href: '/uk/ecommerce-redesign' },
      { label: 'B2B E-Commerce',         href: '/uk/b2b-ecommerce' },
      { label: 'Omnichannel Commerce',   href: '/omnichannel-commerce' },
      { label: 'Replatforming',          href: '/replatforming' },
      { label: 'Shopify Migration',      href: '/uk/shopify-migration' },
      { label: 'Headless Commerce',      href: '/headless-commerce' },
      { label: 'Agentic Commerce',       href: '/agentic-commerce' },
      { label: 'For Manufacturers',      href: '/ecommerce-for-manufacturers' },
      { label: 'Amazon Agency',          href: '/uk/amazon-agency' },
      { label: 'TikTok Shop Agency',     href: '/services/tiktok-shop-agency' },
      { label: 'Shopify Xero Integration', href: '/uk/shopify-xero-integration' },
      { label: 'Ecommerce ERP Integration', href: '/uk/ecommerce-erp-integration' },
      { label: 'Shopify EDI Integration', href: '/uk/shopify-edi-integration' },
      { label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator' },
    ],
  },
  {
    heading: 'Platforms',
    links: [
      { label: 'Best Ecommerce Platforms',href: '/best-ecommerce-platforms' },
      { label: 'Shopify vs WooCommerce (UK)', href: '/blog/ecommerce-development-uk-shopify-woocommerce-2026' },
      { label: 'Shopify Plus vs Headless', href: '/comparisons/shopify-plus-vs-custom-headless-nextjs' },
      { label: 'Shopify Plus vs BigCommerce', href: '/comparisons/shopify-plus-vs-bigcommerce' },
      { label: 'Shopify Plus vs Magento', href: '/comparisons/shopify-plus-vs-magento' },
      { label: 'Headless vs Monolithic',  href: '/comparisons/headless-commerce-vs-monolithic' },
      { label: 'Magento to Shopify',      href: '/replatforming/magento-to-shopify' },
      { label: 'WooCommerce to Shopify',  href: '/replatforming/woocommerce-to-shopify' },
      { label: 'Shopify Development',     href: '/uk/shopify-development' },
      { label: 'Shopify Plus',            href: '/uk/shopify-plus' },
      { label: 'Shopify Plus B2B',        href: '/uk/shopify-plus-b2b' },
      { label: 'Headless Shopify Development', href: '/uk/headless-shopify-development' },
      { label: 'Magento Development',     href: '/uk/magento' },
      { label: 'WooCommerce Development', href: '/uk/woocommerce' },
      { label: 'BigCommerce Development', href: '/bigcommerce-development' },
      { label: 'BigCommerce B2B Edition', href: '/uk/bigcommerce-b2b' },
      { label: 'Commerceflo by FactoryJet', href: '/commerceflo' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
    ],
  },
  {
    heading: 'AI Agents & Automation',
    links: [
      { label: 'AI Consulting Services',      href: '/uk/ai-consulting' },
      { label: 'AI Development Services',     href: '/uk/ai-development' },
      { label: 'Custom AI Agent Development', href: '/uk/ai-agents' },
      { label: 'AI Automation Agency',        href: '/uk/ai-automation' },
      { label: 'AI Chatbot Development',      href: '/services/ai-chatbot-development' },
      { label: 'AI Integration Services',     href: '/uk/ai-integration-services' },
      { label: 'ERP AI Agents',               href: '/uk/erp-ai-agents' },
      { label: 'NetSuite AI Agents',          href: '/uk/netsuite-ai-agents' },
      { label: 'Odoo AI Agents',              href: '/uk/odoo-ai-agents' },
      { label: 'Accounts Payable Automation', href: '/uk/accounts-payable-automation' },
      { label: 'Accounts Receivable Automation', href: '/uk/accounts-receivable-automation' },
      { label: 'Document Intake AI Agents',   href: '/uk/document-intake-ai-agents' },
      { label: 'Sales Order Automation Agents', href: '/uk/sales-order-automation-ai-agents' },
      { label: 'Legal AI Agents',             href: '/services/legal-ai-agents' },
      { label: 'Manufacturing AI Agents',     href: '/services/manufacturing-ai-agents' },
      { label: 'Healthcare AI Agents',        href: '/services/healthcare-ai-agents' },
      { label: 'Property Management AI Agents', href: '/services/property-management-ai-agents' },
      { label: 'AI Receptionist',             href: '/uk/ai-receptionist' },
      { label: 'AI Customer Service',         href: '/uk/ai-customer-service' },
      { label: 'WhatsApp AI Agents',          href: '/uk/whatsapp-ai-agents' },
      { label: 'Shopify AI Agents',           href: '/uk/shopify-ai-agents' },
      { label: 'Ecommerce AI Agents',         href: '/uk/ecommerce-ai-agents' },
      { label: 'AI SDR & BDR Agents',         href: '/services/ai-sdr' },
      { label: 'CRM AI Agents',               href: '/uk/crm-ai-agents' },
      { label: 'AI Agent Monitoring & Support', href: '/services/ai-agent-monitoring' },
      { label: 'AI Agent ROI Calculator',     href: '/tools/ai-agent-roi-calculator' },
      { label: 'AI SEO & Visibility',         href: '/uk/ai-seo' },
      { label: 'AI Visibility Checker',       href: '/ai-visibility-checker' },
      { label: 'Best AI Consultancies (UK)',  href: '/blog/best-ai-consultancies-uk-2026' },
    ],
  },
  {
    heading: 'Services & SEO',
    links: [
      { label: 'Web Design',             href: '/uk/web-design' },
      { label: 'London Web Design',      href: '/uk/london/web-design' },
      { label: 'Website Maintenance',    href: '/uk/website-maintenance' },
      { label: 'SEO Services',           href: '/uk/seo' },
      { label: 'London SEO',             href: '/uk/london/seo' },
      { label: 'SEO Audit',              href: '/uk/seo-audit' },
      { label: 'E-Commerce SEO',         href: '/uk/ecommerce-seo' },
      { label: 'Shopify SEO',            href: '/uk/shopify-seo' },
      { label: 'Local SEO',              href: '/uk/local-seo' },
      { label: 'Web App Development',    href: '/services/web-application-development' },
    ],
  },
  {
    heading: 'UK Cities',
    links: UK_CITIES.map(([label, slug]) => ({ label, href: `/uk/${slug}` })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About FactoryJet',   href: '/about' },
      { label: 'FactoryJet UK',      href: '/uk' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'Blog',               href: '/blog' },
      { label: 'AI Citation Study',  href: '/ai-citation-study' },
      { label: 'Glossary',           href: '/glossary' },
      { label: 'FAQ',                href: '/faq' },
      { label: 'Website Cost Guide', href: '/blog/uk-web-design-agency-pricing-2026-smb-guide' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
];

/** Same four headings and six links per column as US_FOOTER_FEATURED_COLUMNS. */
export const UK_FOOTER_FEATURED_COLUMNS: ReadonlyArray<SiteFooterColumn> = pickFooterLinks(UK_FOOTER_COLUMNS, [
  ['Commerce', [
    '/uk/ecommerce-development', '/uk/ecommerce-consultant', '/uk/b2b-ecommerce',
    '/omnichannel-commerce', '/replatforming', '/uk/ecommerce-audit',
  ]],
  ['AI Agents & Automation', [
    '/uk/ai-consulting', '/uk/ai-development', '/uk/ai-agents',
    '/uk/ai-automation', '/uk/ai-integration-services', '/uk/erp-ai-agents',
  ]],
  ['Services & SEO', [
    '/uk/web-design', '/uk/website-maintenance', '/uk/seo',
    '/uk/ecommerce-seo', '/uk/ai-seo', '/uk/local-seo',
  ]],
  ['Company', ['/about', '/case-studies', '/portfolio', '/blog', '/faq', '/contact']],
]);
