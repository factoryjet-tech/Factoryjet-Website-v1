import type { SiteFooterColumn } from '@/components/v2/SiteFooter';
import { pickFooterLinks } from './footerFeatured';

/**
 * AU-locale footer link columns. Added 2026-06-11 with the AU market launch.
 *
 * Pass these as `linkColumns` to <SiteFooter> on every /au/* page so that
 * footer links resolve to /au/* routes instead of the bare-path defaults
 * (which resolve to the India/global locale).
 *
 * NOTE (corrected 2026-07-26): this file previously pointed at /au/services/* and
 * /au/{city} URLs as a forward "contract" for pages on the AU roadmap. Those pages
 * were never built, so every link in the Services and Locations columns was a hard
 * 404 on every AU page. Links now resolve to the real service pages.
 *
 * 2026-10-31: rebuilt on the US footer's columns, order and component, so AU pages
 * carry the primary site's footer. Every slot points at the AU page where one
 * exists, and at a shared non-US page otherwise (US-only pages are left out). The
 * 19 AU pages shipped 29 Oct, which the old five columns did not list, are in.
 * The WhatsApp link was dropped: its +91 number states where the team is.
 *
 * Usage:
 *   import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
 *   <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
 */
export const AU_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Commerce',
    links: [
      { label: 'E-Commerce Development', href: '/au/ecommerce-development' },
      { label: 'Shopify Maintenance & Support', href: '/au/shopify-maintenance-services' },
      { label: 'Ecommerce Consultant',   href: '/au/ecommerce-consultant' },
      { label: 'Ecommerce Redesign',     href: '/au/ecommerce-redesign' },
      { label: 'B2B E-Commerce',         href: '/au/b2b-ecommerce' },
      { label: 'Omnichannel Commerce',   href: '/omnichannel-commerce' },
      { label: 'Replatforming',          href: '/replatforming' },
      { label: 'Shopify Migration',      href: '/au/shopify-migration' },
      { label: 'Headless Commerce',      href: '/headless-commerce' },
      { label: 'Agentic Commerce',       href: '/agentic-commerce' },
      { label: 'For Manufacturers',      href: '/ecommerce-for-manufacturers' },
      { label: 'Amazon Agency',          href: '/au/amazon-agency' },
      { label: 'TikTok Shop Agency',     href: '/services/tiktok-shop-agency' },
      { label: 'Shopify Xero Integration', href: '/au/shopify-xero-integration' },
      { label: 'Ecommerce ERP Integration', href: '/au/ecommerce-erp-integration' },
      { label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator' },
    ],
  },
  {
    heading: 'Platforms',
    links: [
      { label: 'Best Ecommerce Platform (AU)', href: '/blog/best-ecommerce-platform-australia-2026' },
      { label: 'Shopify Cost in Australia', href: '/blog/shopify-cost-australia-2026' },
      { label: 'Shopify Plus vs Headless', href: '/comparisons/shopify-plus-vs-custom-headless-nextjs' },
      { label: 'Shopify Plus vs BigCommerce', href: '/comparisons/shopify-plus-vs-bigcommerce' },
      { label: 'Shopify Plus vs Magento', href: '/comparisons/shopify-plus-vs-magento' },
      { label: 'Headless vs Monolithic',  href: '/comparisons/headless-commerce-vs-monolithic' },
      { label: 'Magento to Shopify',      href: '/replatforming/magento-to-shopify' },
      { label: 'WooCommerce to Shopify',  href: '/replatforming/woocommerce-to-shopify' },
      { label: 'Shopify Development',     href: '/au/shopify-development' },
      { label: 'Shopify Plus',            href: '/au/shopify-plus' },
      { label: 'WooCommerce Development', href: '/au/woocommerce' },
      { label: 'BigCommerce Development', href: '/bigcommerce-development' },
      { label: 'Commerceflo by FactoryJet', href: '/commerceflo' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
    ],
  },
  {
    heading: 'AI Agents & Automation',
    links: [
      { label: 'AI Consulting Services',      href: '/au/ai-consulting' },
      { label: 'AI Development Services',     href: '/au/ai-development' },
      { label: 'Custom AI Agent Development', href: '/au/ai-agents' },
      { label: 'AI Chatbot Development',      href: '/services/ai-chatbot-development' },
      { label: 'AI Integration Services',     href: '/au/ai-integration-services' },
      { label: 'ERP AI Agents',               href: '/au/erp-ai-agents' },
      { label: 'NetSuite AI Agents',          href: '/au/netsuite-ai-agents' },
      { label: 'Accounts Payable Automation', href: '/au/accounts-payable-automation' },
      { label: 'Accounts Receivable Automation', href: '/au/accounts-receivable-automation' },
      { label: 'Document Intake AI Agents',   href: '/au/document-intake-ai-agents' },
      { label: 'Sales Order Automation Agents', href: '/au/sales-order-automation-ai-agents' },
      { label: 'Legal AI Agents',             href: '/services/legal-ai-agents' },
      { label: 'Manufacturing AI Agents',     href: '/services/manufacturing-ai-agents' },
      { label: 'Healthcare AI Agents',        href: '/services/healthcare-ai-agents' },
      { label: 'Property Management AI Agents', href: '/services/property-management-ai-agents' },
      { label: 'AI Receptionist',             href: '/au/ai-receptionist' },
      { label: 'AI Customer Service',         href: '/au/ai-customer-service' },
      { label: 'Shopify AI Agents',           href: '/au/shopify-ai-agents' },
      { label: 'Ecommerce AI Agents',         href: '/au/ecommerce-ai-agents' },
      { label: 'AI SDR & BDR Agents',         href: '/services/ai-sdr' },
      { label: 'CRM AI Agents',               href: '/au/crm-ai-agents' },
      { label: 'AI Agent Monitoring & Support', href: '/services/ai-agent-monitoring' },
      { label: 'AI Agent ROI Calculator',     href: '/tools/ai-agent-roi-calculator' },
      { label: 'AI SEO & GEO',                href: '/au/ai-seo' },
      { label: 'AI Visibility Checker',       href: '/ai-visibility-checker' },
      { label: 'AI Cost in Australia',        href: '/blog/ai-cost-australia-2026' },
      { label: 'Best AI Agencies (AU)',       href: '/blog/best-ai-agencies-australia-2026' },
    ],
  },
  {
    heading: 'Services & SEO',
    links: [
      { label: 'Web Design',             href: '/au#web-design' },
      { label: 'Small Business Web Design', href: '/au/small-business-web-design' },
      { label: 'Websites for Tradies',   href: '/au/websites-for-tradies' },
      { label: 'Dental Website Design',  href: '/au/dental-website-design' },
      { label: 'NDIS Website Design',    href: '/au/ndis-website-design' },
      { label: 'Real Estate Websites',   href: '/au/real-estate-websites' },
      { label: 'Accountant Website Design', href: '/au/accountant-website-design' },
      { label: 'Website Maintenance',    href: '/au/website-maintenance' },
      { label: 'SEO Services',           href: '/au/seo' },
      { label: 'E-Commerce SEO',         href: '/au/ecommerce-seo' },
      { label: 'Local SEO',              href: '/au/local-seo' },
      { label: 'Small Business SEO',     href: '/au/small-business-seo' },
      { label: 'Law Firm SEO',           href: '/au/law-firm-seo' },
      { label: 'SEO Cost in Australia',  href: '/blog/seo-cost-australia-2026' },
      { label: 'Web App Development',    href: '/services/web-application-development' },
    ],
  },
  {
    heading: 'Australian Cities',
    links: [
      { label: 'Sydney',    href: '/au/sydney' },
      { label: 'Melbourne', href: '/au/melbourne' },
      { label: 'Brisbane',  href: '/au/brisbane' },
      { label: 'Adelaide',  href: '/au/adelaide' },
      { label: 'Canberra',  href: '/au/canberra' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About FactoryJet',   href: '/about' },
      { label: 'FactoryJet Australia', href: '/au' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'Blog',               href: '/blog' },
      { label: 'AI Citation Study',  href: '/ai-citation-study' },
      { label: 'Glossary',           href: '/glossary' },
      { label: 'FAQ',                href: '/faq' },
      { label: 'Website Cost Guide', href: '/blog/website-cost-australia-2026' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
];

/** Same four headings and six links per column as US_FOOTER_FEATURED_COLUMNS. */
export const AU_FOOTER_FEATURED_COLUMNS: ReadonlyArray<SiteFooterColumn> = pickFooterLinks(AU_FOOTER_COLUMNS, [
  ['Commerce', [
    '/au/ecommerce-development', '/au/ecommerce-consultant', '/au/b2b-ecommerce',
    '/omnichannel-commerce', '/replatforming', '/au/shopify-migration',
  ]],
  ['AI Agents & Automation', [
    '/au/ai-consulting', '/au/ai-development', '/au/ai-agents',
    '/au/ai-receptionist', '/au/ai-integration-services', '/au/erp-ai-agents',
  ]],
  ['Services & SEO', [
    '/au#web-design', '/au/small-business-web-design', '/au/website-maintenance',
    '/au/seo', '/au/ai-seo', '/au/local-seo',
  ]],
  ['Company', ['/about', '/case-studies', '/portfolio', '/blog', '/faq', '/contact']],
]);
