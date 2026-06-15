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
      { label: 'Website Design',         href: '/us/services/web-design' },
      { label: 'Website Redesign',        href: '/us/services/website-redesign' },
      { label: 'WordPress Development',   href: '/us/services/wordpress-development' },
      { label: 'Web App Development',     href: '/us/services/web-application-development' },
      { label: 'Small Business Websites', href: '/us/services/small-business-website-design' },
      { label: 'Law Firm Websites',       href: '/us/services/law-firm-website-design' },
      { label: 'Real Estate Websites',    href: '/us/services/real-estate-website-design' },
    ],
  },
  {
    heading: 'E-Commerce',
    links: [
      { label: 'Shopify Development',     href: '/us/services/shopify-development' },
      { label: 'Custom E-Commerce',       href: '/us/services/ecommerce-development' },
      { label: 'WooCommerce Development', href: '/us/services/woocommerce-development' },
      { label: 'Magento Development',     href: '/us/services/magento-development' },
      { label: 'E-Commerce SEO',          href: '/us/services/ecommerce-seo' },
      { label: 'Shopify SEO',             href: '/us/services/shopify-seo' },
    ],
  },
  {
    heading: 'SEO',
    links: [
      { label: 'SEO Services',       href: '/us/services/seo' },
      { label: 'Local SEO',          href: '/us/services/local-seo' },
      { label: 'Small Business SEO', href: '/us/services/small-business-seo' },
      { label: 'SEO Audit',          href: '/us/services/seo-audit' },
      { label: 'AI SEO',             href: '/us/services/ai-seo' },
      { label: 'Healthcare SEO',     href: '/us/services/healthcare-seo' },
      { label: 'Dental SEO',         href: '/us/services/dental-seo' },
      { label: 'Law Firm SEO',       href: '/us/services/law-firm-seo' },
    ],
  },
  {
    heading: 'AI Services',
    links: [
      { label: 'AI Agents',              href: '/us/services/ai-agents' },
      { label: 'AI Chatbot Development', href: '/us/services/ai-chatbot-development' },
      { label: 'AI Automation',          href: '/us/services/ai-automation' },
      { label: 'AI Integration',         href: '/us/services/ai-integration-services' },
      { label: 'AI Workflow Automation', href: '/us/services/ai-workflow-automation' },
      { label: 'AI Agency',              href: '/us/services/ai-agency' },
    ],
  },
  {
    heading: 'US Cities',
    links: [
      { label: 'Austin, TX',          href: '/us/austin/web-design' },
      { label: 'Miami, FL',           href: '/us/miami/web-design' },
      { label: 'Denver, CO',          href: '/us/denver/web-design' },
      { label: 'Nashville, TN',       href: '/us/nashville/web-design' },
      { label: 'New York, NY',        href: '/us/new-york/web-design' },
      { label: 'Charlotte, NC',       href: '/us/charlotte/web-design' },
      { label: 'Raleigh, NC',         href: '/us/raleigh/web-design' },
      { label: 'Tampa, FL',           href: '/us/tampa/web-design' },
      { label: 'Portland, OR',        href: '/us/portland/web-design' },
      { label: 'Colorado Springs, CO', href: '/us/colorado-springs/seo' },
      { label: 'Cleveland, OH',       href: '/us/cleveland/web-design' },
    ],
  },
  {
    heading: 'Knowledge Hub',
    links: [
      { label: 'Blog',               href: '/blog' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/us/portfolio' },
      { label: 'FAQ',                href: '/us/faq' },
      { label: 'Website Cost Guide', href: '/us/website-cost' },
      { label: 'About FactoryJet',  href: '/us/about' },
      { label: 'Pricing',            href: '/us/pricing' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
];
