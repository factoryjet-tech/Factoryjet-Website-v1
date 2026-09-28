import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveServiceCategory } from '../src/utils/leadService.ts';
import { fireLeadConversion, rememberLeadContext } from '../src/utils/leadConversion.ts';
import { resolveCategory, countryFromPhone } from '../functions/api/notify-lead.js';

const cases = [
  ['', '/services/ecommerce-development', 'E-commerce'],
  ['', '/services/ai-seo', 'SEO & AI Search'],
  ['', '/services/ai-agent-development', 'AI Agent Development'],
  ['', '/au/web-design', 'Website Design'],
  ['', '/contact', 'Other'],
  ['Ecommerce Replatforming: Magento -> Shopify', '/', 'E-commerce'],
  ['AI Agent', '/', 'AI Agent Development'],
  ['maintenance', '/', 'Website Design'],
  ['', '/blog/ecommerce-replatforming-without-losing-seo-2026', 'E-commerce'],
  ['', '/blog/how-long-does-seo-take-2026-month-by-month-timeline', 'SEO & AI Search'],
];

test('browser and server agree on the service category', () => {
  for (const [service, page, want] of cases) {
    assert.equal(resolveServiceCategory(service, page), want, `${service} ${page}`);
    assert.equal(resolveCategory({ service, page }), want, `server ${service} ${page}`);
  }
  assert.equal(resolveCategory({ serviceCategory: 'not-a-category', page: '/shopify' }), 'E-commerce');
});

test('country only from an unambiguous international prefix', () => {
  assert.equal(countryFromPhone('5152361833'), '');
  assert.equal(countryFromPhone('+1 515 236 1833'), '');
  assert.equal(countryFromPhone('+44 7700 900123'), 'United Kingdom');
  assert.equal(countryFromPhone('+971 50 123 4567'), 'United Arab Emirates');
});

test('conversion carries service and landing page when remembered', () => {
  const m = new Map();
  const storage = { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => { m.set(k, v); } };
  rememberLeadContext('L9', { service: 'E-commerce', landingPage: '/b2b-ecommerce', aiAssistant: 'chatgpt' }, storage);
  const pushed = [];
  fireLeadConversion({ lid: 'L9', region: 'us', source: 'x' }, { push: (d) => pushed.push(d), storage });
  assert.deepEqual(pushed, [{ event: 'lead_converted', region: 'us', lead_source: 'x', lead_id: 'L9', service: 'E-commerce', landing_page: '/b2b-ecommerce', ai_assistant: 'chatgpt' }]);
});
