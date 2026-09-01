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
      { label: 'Ecommerce CRO Agency',   href: '/services/ecommerce-cro-agency' },
      { label: 'B2B E-Commerce',         href: '/b2b-ecommerce' },
      { label: 'Omnichannel Commerce',   href: '/omnichannel-commerce' },
      { label: 'Marketplace Management', href: '/marketplace-management' },
      { label: 'Replatforming',          href: '/replatforming' },
      { label: 'Headless Commerce',      href: '/headless-commerce' },
      { label: 'Agentic Commerce',       href: '/agentic-commerce' },
      { label: 'For Manufacturers',      href: '/ecommerce-for-manufacturers' },
      { label: 'Amazon Agency',          href: '/services/amazon-agency' },
      { label: 'Target Plus Marketplace',href: '/target-plus-marketplace' },
      { label: 'Faire Wholesale Agency', href: '/faire-wholesale-marketplace' },
      { label: 'Replatforming Calculator', href: '/tools/replatforming-cost-calculator' },
      { label: 'Marketplace Fee Calculator', href: '/marketplace-fee-calculator' },
      { label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator' },
    ],
  },
  {
    heading: 'Platforms',
    links: [
      { label: 'Best Ecommerce Platforms',href: '/best-ecommerce-platforms' },
      { label: 'Shopify Plus vs Headless', href: '/comparisons/shopify-plus-vs-custom-headless-nextjs' },
      { label: 'Shopify vs WooCommerce',  href: '/comparisons/shopify-vs-woocommerce' },
      { label: 'Shopify Plus vs BigCommerce', href: '/comparisons/shopify-plus-vs-bigcommerce' },
      { label: 'Shopify Plus vs Magento', href: '/comparisons/shopify-plus-vs-magento' },
      { label: 'Headless vs Monolithic',  href: '/comparisons/headless-commerce-vs-monolithic' },
      { label: 'BigCommerce to Shopify',  href: '/replatforming/bigcommerce-to-shopify-plus' },
      { label: 'SuiteCommerce to Shopify',href: '/replatforming/netsuite-suitecommerce-to-shopify-plus' },
      { label: 'Shopify Development',     href: '/services/shopify-development' },
      { label: 'Shopify Plus B2B',        href: '/services/shopify-plus-b2b' },
      { label: 'Magento Development',     href: '/services/magento-development' },
      { label: 'WooCommerce Development', href: '/services/woocommerce-development' },
      { label: 'BigCommerce Development', href: '/bigcommerce-development' },
      { label: 'BigCommerce B2B Edition', href: '/services/bigcommerce-b2b' },
      { label: 'Commerceflo',             href: '/commerceflo' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
    ],
  },
  {
    heading: 'AI Agents & Automation',
    links: [
      { label: 'Custom AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'Healthcare AI Agents',        href: '/services/healthcare-ai-agents' },
      { label: 'Contractor AI Receptionist',   href: '/services/contractor-ai-receptionist' },
      { label: 'AI Customer Support Agents',  href: '/services/ai-customer-support-agents' },
      { label: 'AI SDR Development',          href: '/services/ai-sdr-development' },
      { label: 'AI Agent ROI Calculator',     href: '/tools/ai-agent-roi-calculator' },
      { label: 'AI Workflow Automation',      href: '/services/ai-agent-development/ai-workflow-automation' },
      { label: 'n8n vs LangChain vs CrewAI',  href: '/comparisons/n8n-vs-langchain-vs-crewai-enterprise' },
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
