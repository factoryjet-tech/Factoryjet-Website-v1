/**
 * leadService: one short answer to "which service is this lead about?".
 *
 * Why this exists (2026-09-28):
 *   Many forms (hero inline, blog capture, exit intent) ask only for a name and
 *   an email, so their leads reached the inbox and ERPNext as "Service: Not
 *   specified", even when the visitor filled the form on the e-commerce page.
 *   Other forms send free text ("AI Agent ROI Audit: ...", "E-commerce").
 *   This file turns all of that into one of five categories the founder uses.
 *
 * Rules: what the visitor picked wins; otherwise the form page decides;
 * otherwise the landing page; otherwise "Other". No imports on purpose, so the
 * Cloudflare function and Node tests can mirror or load it.
 */

export type ServiceCategory =
  | 'AI Agent Development'
  | 'E-commerce'
  | 'SEO & AI Search'
  | 'Website Design'
  | 'Other';

/** The options shown in a service dropdown, in the order we want buyers to see them. */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'AI Agent Development',
  'E-commerce',
  'SEO & AI Search',
  'Website Design',
  'Other',
];

/**
 * Category from a page path. Order matters: AI search terms ("ai-seo", "geo")
 * are checked before the general "ai-" agent rule, and SEO before e-commerce so
 * "/shopify-seo" counts as an SEO inquiry.
 */
export function serviceFromPath(path: string | null | undefined): ServiceCategory | '' {
  const p = String(path || '').toLowerCase().split('?')[0];
  if (!p || p === '/') return '';
  if (/(ai-seo|generative-engine|(^|[/-])geo([/-]|$)|(^|[/-])aeo([/-]|$)|ai-visibility|answer-engine|llm-seo|ai-search)/.test(p)) return 'SEO & AI Search';
  if (/(ai-agent|ai-automation|ai-receptionist|ai-chatbot|ai-consult|ai-development|ai-integration|ai-workflow|ai-voice|agentic|jetagent|jetsdr|jetdocs|(^|\/)services\/ai-|(^|\/)ai(\/|$))/.test(p)) return 'AI Agent Development';
  // Store-migration pages ("replatforming without losing SEO") are e-commerce inquiries.
  if (/(replatform|-to-shopify|migration)/.test(p)) return 'E-commerce';
  if (/(seo)/.test(p)) return 'SEO & AI Search';
  if (/(ecommerce|e-commerce|shopify|woocommerce|magento|bigcommerce|commerceflo|replatform|b2b-commerce|wholesale|marketplace|tiktok-shop|headless-commerce)/.test(p)) return 'E-commerce';
  if (/(web-design|website|web-development|webflow|wordpress|landing-page|redesign)/.test(p)) return 'Website Design';
  return '';
}

/** Category from whatever a form sent as `service` (slug, label or free text). */
export function serviceFromValue(value: string | null | undefined): ServiceCategory | '' {
  const v = String(value || '').trim().toLowerCase();
  if (!v || v === 'unknown') return '';
  const exact = SERVICE_CATEGORIES.find((c) => c.toLowerCase() === v);
  if (exact) return exact;
  if (/(ai-seo|ai seo|\bgeo\b|\baeo\b|ai search|seo|\bsearch\b)/.test(v)) return 'SEO & AI Search';
  if (/(ai-agents?|\bai agents?\b|\bagents?\b|\bagentic\b|automation|chatbot|receptionist)/.test(v)) return 'AI Agent Development';
  if (/(e-?commerce|shopify|woocommerce|magento|bigcommerce|replatform|marketplace|wholesale|store)/.test(v)) return 'E-commerce';
  if (/(website|web design|web|maintenance|amc|landing|brand)/.test(v)) return 'Website Design';
  if (/^other/.test(v)) return 'Other';
  return '';
}

/** The one category for a lead: picked value, then form page, then landing page. */
export function resolveServiceCategory(
  service: string | null | undefined,
  formPage: string | null | undefined,
  landingPage?: string | null,
): ServiceCategory {
  return serviceFromValue(service) || serviceFromPath(formPage) || serviceFromPath(landingPage) || 'Other';
}
