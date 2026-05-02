import type { ComponentType } from 'react';
import type { MockSiteData } from './types';
import { HartwellMockSite } from './HartwellMockSite';
import { FieldNotesEcommerceMockSite } from './FieldNotesEcommerceMockSite';

export type ServiceVariant =
  | 'web-design'
  | 'ai-websites'
  | 'ecommerce'
  | 'seo'
  | 'ai-agents';

export type MockSiteComponent = ComponentType<{ data: MockSiteData }>;

/**
 * Per-variant default. M1.5 ships two real mock sites:
 *   - HartwellMockSite             (web-design — Mayfair financial advisory)
 *   - FieldNotesEcommerceMockSite  (ecommerce — UK food brand)
 *
 * The other three variants fall back to HartwellMockSite for now —
 * graceful degradation. M2/M3 add purpose-built mock sites for
 * ai-websites / seo / ai-agents.
 */
const REGISTRY: Record<ServiceVariant, MockSiteComponent> = {
  'web-design': HartwellMockSite,
  ecommerce: FieldNotesEcommerceMockSite,
  'ai-websites': HartwellMockSite,
  seo: HartwellMockSite,
  'ai-agents': HartwellMockSite,
};

export function getMockSiteComponent(
  variant: ServiceVariant,
): MockSiteComponent {
  return REGISTRY[variant] ?? HartwellMockSite;
}

export type { MockSiteData };
export { HartwellMockSite, FieldNotesEcommerceMockSite };
