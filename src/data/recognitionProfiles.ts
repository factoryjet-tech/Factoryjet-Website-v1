/**
 * Independent third-party directory profiles for FactoryJet — trust signals,
 * NOT review-count/rating claims (no reviews collected on these portals yet).
 * Single source of truth for the footer "Recognized on" strips (v2 SiteFooter
 * renders its own Tailwind version; the dark UK footers use <RecognitionStrip/>).
 */
export interface RecognitionProfile {
  label: string;
  href: string;
}

export const RECOGNITION_PROFILES: ReadonlyArray<RecognitionProfile> = [
  { label: 'Clutch',          href: 'https://clutch.co/profile/factoryjet-private' },
  { label: 'GoodFirms',       href: 'https://www.goodfirms.co/company/factoryjet-private-limited' },
  { label: 'DesignRush',      href: 'https://www.designrush.com/agency/profile/factoryjet' },
  { label: 'SoftwareSuggest', href: 'https://www.softwaresuggest.com/factoryjet' },
  { label: 'Crunchbase',      href: 'https://www.crunchbase.com/organization/factoryjet' },
];
