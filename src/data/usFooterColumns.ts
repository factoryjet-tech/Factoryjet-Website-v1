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
 *
 * 2026-09-17: the SiteHeader dropdown panels only mount on hover, so none of their
 * links exist in the HTML crawlers receive. This footer is the crawlable path to
 * money pages. 13 menu destinations in the AI agent, ecommerce and replatforming
 * lines had no crawlable sitewide link and were added. City pages stay out on
 * purpose (see point 1).
 *
 * 2026-09-17 (later): the duplicate workflow automation page under the AI agent
 * hub was merged by 301 into /services/ai-workflow-automation, so the "AI
 * Workflow Automation" link below now points at the kept page directly.
 *
 * 2026-09-20 (Tier 1 content swarm): added /services/ecommerce-audit (free
 * commerce audit offer page) and /services/dtc-ecommerce-agency (DTC scaling
 * partner page) to Commerce for the same crawlable-path reason as the
 * 2026-09-17 note above.
 *
 * 2026-09-17 (wave 1 wiring): added the two new support pages
 * (/services/shopify-maintenance-services, /services/ai-agent-monitoring) and
 * renamed the Commerceflo link to "Commerceflo by FactoryJet" so the maker's
 * name sits in the sitewide crawl path.
 */
export const US_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Commerce',
    links: [
      { label: 'E-Commerce Development', href: '/services/ecommerce-development' },
      { label: 'DTC Ecommerce Agency',   href: '/services/dtc-ecommerce-agency' },
      { label: 'Free Ecommerce Audit',   href: '/services/ecommerce-audit' },
      { label: 'Shopify Maintenance & Support', href: '/services/shopify-maintenance-services' },
      { label: 'Ecommerce Consulting',   href: '/ecommerce-consulting' },
      { label: 'Ecommerce Growth Agency', href: '/services/ecommerce-growth-agency' },
      { label: 'Ecommerce CRO Agency',   href: '/services/ecommerce-cro-agency' },
      { label: 'B2B E-Commerce',         href: '/b2b-ecommerce' },
      { label: 'Omnichannel Commerce',   href: '/omnichannel-commerce' },
      { label: 'Marketplace Management', href: '/marketplace-management' },
      { label: 'Replatforming',          href: '/replatforming' },
      { label: 'Headless Commerce',      href: '/headless-commerce' },
      { label: 'Agentic Commerce',       href: '/agentic-commerce' },
      { label: 'For Manufacturers',      href: '/ecommerce-for-manufacturers' },
      { label: 'Amazon Agency',          href: '/services/amazon-agency' },
      { label: 'TikTok Shop Agency',     href: '/services/tiktok-shop-agency' },
      { label: 'Walmart Marketplace Agency', href: '/services/walmart-marketplace-agency' },
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
      { label: 'Magento to Shopify',      href: '/replatforming/magento-to-shopify' },
      { label: 'WooCommerce to Shopify',  href: '/replatforming/woocommerce-to-shopify' },
      { label: 'Salesforce CC to Shopify Plus', href: '/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
      { label: 'Shopify Development',     href: '/services/shopify-development' },
      { label: 'Shopify Plus B2B',        href: '/services/shopify-plus-b2b' },
      { label: 'Magento Development',     href: '/services/magento-development' },
      { label: 'WooCommerce Development', href: '/services/woocommerce-development' },
      { label: 'BigCommerce Development', href: '/bigcommerce-development' },
      { label: 'BigCommerce B2B Edition', href: '/services/bigcommerce-b2b' },
      { label: 'Commerceflo by FactoryJet', href: '/commerceflo' },
      { label: 'WordPress Development',   href: '/services/wordpress-development' },
    ],
  },
  {
    heading: 'AI Agents & Automation',
    links: [
      { label: 'Custom AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'AI Automation Agency',        href: '/services/ai-automation' },
      { label: 'AI Chatbot Development',      href: '/services/ai-chatbot-development' },
      { label: 'AI Integration Services',     href: '/services/ai-integration-services' },
      { label: 'Chemical & Pharma AI Agents', href: '/services/chemical-pharmaceutical-ai-agents' },
      { label: 'Ag Equipment AI Agents',      href: '/services/agriculture-equipment-ai-agents' },
      { label: 'Legal AI Agents',             href: '/services/legal-ai-agents' },
      { label: 'Automotive AI Voice Agents',  href: '/services/automotive-ai-voice-agents' },
      { label: 'Manufacturing AI Agents',     href: '/services/manufacturing-ai-agents' },
      { label: 'Restaurant AI Voice Agents',  href: '/services/restaurant-ai-voice-agents' },
      { label: 'Healthcare AI Agents',        href: '/services/healthcare-ai-agents' },
      { label: 'Property Management AI Agents', href: '/services/property-management-ai-agents' },
      { label: 'DSO & Dental Group AI Agents', href: '/services/dental-support-organization-ai-agents' },
      { label: 'AI Receptionist',              href: '/services/ai-receptionist' },
      { label: 'AI Customer Support Agents',  href: '/services/ai-customer-support-agents' },
      { label: 'AI SDR & BDR Agents',         href: '/services/ai-sdr' },
      { label: 'AI Agent Monitoring & Support', href: '/services/ai-agent-monitoring' },
      { label: 'AI Agent ROI Calculator',     href: '/tools/ai-agent-roi-calculator' },
      { label: 'AI Workflow Automation',      href: '/services/ai-workflow-automation' },
      { label: 'n8n vs LangChain vs CrewAI',  href: '/comparisons/n8n-vs-langchain-vs-crewai-enterprise' },
      { label: 'Voice AI Agents',             href: '/services/ai-agent-development/ai-voice-agent' },
      { label: 'n8n Automation',              href: '/n8n-automation' },
      { label: 'AI SEO & Visibility',         href: '/services/ai-seo' },
      { label: 'GEO Agency',                  href: '/services/generative-engine-optimization' },
      { label: 'AI Visibility Checker',       href: '/ai-visibility-checker' },
    ],
  },
  {
    heading: 'Services & SEO',
    links: [
      { label: 'Web Design',             href: '/services/web-design' },
      { label: 'SEO Services',           href: '/services/seo' },
      { label: 'E-Commerce SEO',         href: '/services/ecommerce-seo' },
      { label: 'Shopify SEO',            href: '/services/shopify-seo' },
      { label: 'Local SEO',              href: '/services/local-seo' },
      { label: 'Healthcare SEO',         href: '/services/healthcare-seo' },
      { label: 'Web App Development',    href: '/services/web-application-development' },
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
