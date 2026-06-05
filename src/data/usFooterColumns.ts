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
    heading: 'Services',
    links: [
      { label: 'Web Design',             href: '/us/services/web-design' },
      { label: 'E-Commerce',             href: '/us/services/ecommerce-development' },
      { label: 'Shopify Development',    href: '/us/services/shopify-development' },
      { label: 'WordPress Development',  href: '/us/services/wordpress-development' },
      { label: 'Web App Development',    href: '/us/services/web-application-development' },
      { label: 'AI Agents',              href: '/us/services/ai-agents' },
      { label: 'AI Automation',          href: '/us/services/ai-automation' },
      { label: 'AI Agency',              href: '/us/services/ai-agency' },
      { label: 'AI SEO',                 href: '/us/services/ai-seo' },
      { label: 'Small Business Design',  href: '/us/services/small-business-website-design' },
      { label: 'Magento Development',    href: '/us/services/magento-development' },
      { label: 'WooCommerce Dev',        href: '/us/services/woocommerce-development' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',           href: '/us/about' },
      { label: 'Portfolio',       href: '/us/portfolio' },
      { label: 'Pricing',         href: '/us/pricing' },
      { label: 'Website Cost',    href: '/us/website-cost' },
      { label: 'FAQ',             href: '/us/faq' },
      { label: 'Case Studies',    href: '/case-studies' },
      { label: 'Blog',            href: '/blog' },
      { label: 'Contact',         href: '/contact' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'Austin, TX',    href: '/us/austin/web-design' },
      { label: 'Miami, FL',     href: '/us/miami/web-design' },
      { label: 'Denver, CO',    href: '/us/denver/web-design' },
      { label: 'Nashville, TN', href: '/us/nashville/web-design' },
      { label: 'New York, NY',  href: '/us/new-york/web-design' },
      { label: 'Charlotte, NC', href: '/us/charlotte/web-design' },
      { label: 'Raleigh, NC',   href: '/us/raleigh/web-design' },
      { label: 'Tampa, FL',     href: '/us/tampa/web-design' },
      { label: 'Portland, OR',  href: '/us/portland/web-design' },
      { label: 'Cleveland, OH', href: '/us/cleveland/web-design' },
    ],
  },
];
