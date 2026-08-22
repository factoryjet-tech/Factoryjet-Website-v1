import type { SiteFooterColumn } from '@/components/v2/SiteFooter';

/**
 * US-locale footer link columns.
 *
 * Rebuilt 2026-08-03, 58 links in 6 columns down to 30 in 4.
 *
 * What changed and why. Reference footers were pulled rather than guessed:
 * Anthropic ships 75 links, Stripe ~67, Linear 37. Link COUNT was never the
 * problem. Three things were, and only the first two live in this file:
 *
 *   1. A 16-item "US Cities" column reading "Austin, TX" next to "Austin SEO"
 *      next to "Charlotte SEO". That is a keyword list, not navigation, and no
 *      reference footer contains anything like it. Removed. City pages are reached
 *      from the service hubs, which is a stronger internal link.
 *   2. Duplication. "AI SEO" appeared in both the SEO and AI Services columns;
 *      E-Commerce carried 11 links including three marketplace agencies that
 *      already cross-link each other.
 *   3. (In the component) no typographic hierarchy across six identical columns.
 *
 * Before removing anything from this array, run:
 *     node scripts/footer-orphan-risk.mjs
 * It reports which footer links are the ONLY inbound internal link to their page.
 * It excludes sitemaps deliberately: a sitemap entry declares a URL, it does not
 * link to it, and counting sitemaps once made every US link look safe to cut.
 * At the last run, /colorado-springs/seo was the single US page at risk; it is
 * kept reachable from /services/seo.
 */
export const US_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Commerce',
    links: [
      { label: 'E-Commerce Development', href: '/services/ecommerce-development' },
      { label: 'B2B E-Commerce',         href: '/b2b-ecommerce' },
      { label: 'Omnichannel Commerce',   href: '/omnichannel-commerce' },
      { label: 'Marketplace Management', href: '/marketplace-management' },
      { label: 'Replatforming',          href: '/replatforming' },
      { label: 'Headless Commerce',      href: '/headless-commerce' },
      { label: 'Agentic Commerce',       href: '/agentic-commerce' },
      { label: 'For Manufacturers',      href: '/ecommerce-for-manufacturers' },
      { label: 'Amazon Agency',          href: '/services/amazon-agency' },
      { label: 'Faire Wholesale Agency', href: '/faire-wholesale-marketplace' },
    ],
  },
  {
    heading: 'Platforms',
    links: [
      { label: 'Best Ecommerce Platforms',href: '/best-ecommerce-platforms' },
      { label: 'Shopify Development',     href: '/services/shopify-development' },
      { label: 'Magento Development',     href: '/services/magento-development' },
      { label: 'WooCommerce Development', href: '/services/woocommerce-development' },
      { label: 'BigCommerce',             href: '/bigcommerce-development' },
      { label: 'Commerceflo',             href: '/commerceflo' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
    ],
  },
  {
    heading: 'AI Agents & Automation',
    links: [
      { label: 'Custom AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'AI Customer Support Agents',  href: '/services/ai-agent-development/ai-customer-support' },
      { label: 'AI Sales & SDR Agents',       href: '/services/ai-agent-development/ai-sales-agent' },
      { label: 'AI Workflow Automation',      href: '/services/ai-agent-development/ai-workflow-automation' },
      { label: 'Voice AI Agents',             href: '/services/ai-agent-development/ai-voice-agent' },
      { label: 'n8n Automation',              href: '/n8n-automation' },
      { label: 'AI SEO & Visibility',         href: '/services/ai-seo' },
      { label: 'AI Visibility Checker',       href: '/ai-visibility-checker' },
    ],
  },
  {
    heading: 'Services & SEO',
    links: [
      { label: 'Web Design',             href: '/services/web-design' },
      { label: 'SEO Services',           href: '/services/seo' },
      { label: 'E-Commerce SEO',         href: '/services/ecommerce-seo' },
      { label: 'Local SEO',              href: '/services/local-seo' },
      { label: 'All Services',           href: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About FactoryJet',   href: '/about' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'Blog',               href: '/blog' },
      { label: 'AI Citation Study',  href: '/ai-citation-study' },
      { label: 'Glossary',           href: '/glossary' },
      { label: 'FAQ',                href: '/faq' },
      { label: 'Website Cost Guide', href: '/website-cost' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
];
