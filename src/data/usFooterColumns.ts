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
      { label: 'Shopify Development',    href: '/us/services/shopify-development' },
      { label: 'AI Agents',              href: '/us/services/ai-agents' },
      { label: 'E-Commerce',             href: '/us/services/ecommerce-development' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',      href: '/us/about' },
      { label: 'Portfolio',  href: '/us/portfolio' },
      { label: 'Pricing',    href: '/us/pricing' },
      { label: 'FAQ',        href: '/us/faq' },
      { label: 'Blog',       href: '/blog' },
      { label: 'Contact',    href: '/contact' },
    ],
  },
];
