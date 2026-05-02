/**
 * Shared shape used by every MockSite component. Each MockSite
 * accepts this from <HeroSection>'s `mockups` prop, so the same
 * data envelope works across all five service variants.
 */
export interface MockSiteData {
  /** Business name shown in mock-site nav (e.g. "Hartwell & Co.") */
  businessName: string;
  /** Mock-site H1 (e.g. "Wealth management, considered.") */
  businessTagline: string;
  /** Optional 2-line subhead under tagline */
  subhead?: string;
  /** CTA label inside the mock site (e.g. "Book an introduction") */
  ctaLabel?: string;
  /** Mock-nav items (e.g. ["About", "Services", "Insights"]) */
  navItems?: string[];
  /** Bottom stat strip — usually 1-2 stats */
  statStrip?: Array<{ value: string; label: string }>;
}
