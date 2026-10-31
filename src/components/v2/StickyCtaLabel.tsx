/**
 * Tells the sitewide MobileStickyCTA which offer this page leads with.
 *
 * The sticky bar is mounted once in the root layout, so a page cannot pass it a
 * prop. A page that leads with a different primary CTA renders this marker; the
 * bar reads it on every route change and falls back to "Get my quote" without it.
 * Added 2026-10-31: AI agent pages lead with "See a demo on my data" while the bar
 * said "Get my quote" (31 Oct QA, finding E6). Both open the same contact form.
 *
 * Pure server component; renders one hidden, empty element.
 */
export default function StickyCtaLabel({ label, title }: { label: string; title?: string }) {
  return <span hidden data-sticky-cta-label={label} data-sticky-cta-title={title} />;
}
