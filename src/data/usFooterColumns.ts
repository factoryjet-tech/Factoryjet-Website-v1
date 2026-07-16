import type { SiteFooterColumn } from '@/components/v2/SiteFooter';

/**
 * US-locale footer link columns.
 *
 * Pass these as `linkColumns` to <SiteFooter> on every /us/* page so that
 * footer links resolve to /us/* routes instead of the bare-path defaults
 * (which resolve to the India/global locale).
 *
 * Usage:
 *   import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
 *   <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
 */
export const US_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Web & Design',
    links: [
      { label: 'Website Design',         href: '/services/web-design' },
      { label: 'Website Redesign',        href: '/services/website-redesign' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
      { label: 'Web App Development',     href: '/services/web-application-development' },
      { label: 'Small Business Websites', href: '/services/small-business-website-design' },
      { label: 'Law Firm Websites',       href: '/services/law-firm-website-design' },
      { label: 'Real Estate Websites',    href: '/services/real-estate-website-design' },
    ],
  },
  {
    heading: 'E-Commerce',
    links: [
      { label: 'Shopify Development',     href: '/services/shopify-development' },
      { label: 'Custom E-Commerce',       href: '/services/ecommerce-development' },
      { label: 'Agentic Commerce',        href: '/agentic-commerce' },
      { label: 'Ecommerce Growth Agency', href: '/services/ecommerce-growth-agency' },
      { label: 'Amazon Agency',           href: '/services/amazon-agency' },
      { label: 'TikTok Shop Agency',      href: '/services/tiktok-shop-agency' },
      { label: 'Walmart Marketplace Agency', href: '/services/walmart-marketplace-agency' },
      { label: 'WooCommerce Development', href: '/services/woocommerce-development' },
      { label: 'Magento Development',     href: '/services/magento-development' },
      { label: 'E-Commerce SEO',          href: '/services/ecommerce-seo' },
      { label: 'Shopify SEO',             href: '/services/shopify-seo' },
    ],
  },
  {
    heading: 'SEO',
    links: [
      { label: 'SEO Services',       href: '/services/seo' },
      { label: 'Local SEO',          href: '/services/local-seo' },
      { label: 'Small Business SEO', href: '/services/small-business-seo' },
      { label: 'SEO Audit',          href: '/services/seo-audit' },
      { label: 'AI SEO',             href: '/services/ai-seo' },
      { label: 'Healthcare SEO',     href: '/services/healthcare-seo' },
      { label: 'Dental SEO',         href: '/services/dental-seo' },
      { label: 'Law Firm SEO',       href: '/services/law-firm-seo' },
    ],
  },
  {
    heading: 'AI Services',
    links: [
      { label: 'AI Agents',              href: '/services/ai-agents' },
      { label: 'AI Chatbot Development', href: '/services/ai-chatbot-development' },
      { label: 'AI Automation',          href: '/services/ai-automation' },
      { label: 'AI Integration',         href: '/services/ai-integration-services' },
      { label: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
      { label: 'AI Agency',              href: '/services/ai-agency' },
    ],
  },
  {
    heading: 'US Cities',
    links: [
      { label: 'Austin, TX',          href: '/austin/web-design' },
      { label: 'Miami, FL',           href: '/miami/web-design' },
      { label: 'Denver, CO',          href: '/denver/web-design' },
      { label: 'Nashville, TN',       href: '/nashville/web-design' },
      { label: 'New York, NY',        href: '/new-york/web-design' },
      { label: 'Charlotte, NC',       href: '/charlotte/web-design' },
      { label: 'Raleigh, NC',         href: '/raleigh/web-design' },
      { label: 'Tampa, FL',           href: '/tampa/web-design' },
      { label: 'Portland, OR',        href: '/portland/web-design' },
      { label: 'Colorado Springs, CO', href: '/colorado-springs/seo' },
      { label: 'Cleveland, OH',       href: '/cleveland/web-design' },
      { label: 'Austin SEO',          href: '/austin/seo' },
      { label: 'Charlotte SEO',       href: '/charlotte/seo' },
      { label: 'Cleveland SEO',       href: '/cleveland/seo' },
      { label: 'Nashville SEO',       href: '/nashville/seo' },
      { label: 'Boise SEO',           href: '/boise/seo' },
    ],
  },
  {
    heading: 'Knowledge Hub',
    links: [
      { label: 'Blog',               href: '/blog' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'FAQ',                href: '/faq' },
      { label: 'Glossary',           href: '/glossary' },
      { label: 'Website Cost Guide', href: '/website-cost' },
      { label: 'About FactoryJet',  href: '/about' },
      { label: 'Pricing',            href: '/pricing' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
];
