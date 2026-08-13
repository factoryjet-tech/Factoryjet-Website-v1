#!/usr/bin/env node
/**
 * Insert a mid-page CTA into the 46 service/commercial pages that have none.
 *
 * The defect, measured on live pages 2026-08-12 by scripts/audit-perfect-page.mjs:
 * these pages carry a hero form at the top and a closing CTA at roughly 96%, with NOTHING in
 * between. On /b2b-ecommerce that is ~90,000 characters of body a convinced reader must scroll
 * past before they can act. /b2b-ecommerce is our single best asset (score 88, 18 inbound links,
 * the only page ChatGPT has ever cited) and it never asks for the business in the body.
 *
 * Copy is authored per page below, NOT generated. A single reusable "Ready to get started?"
 * across 46 pages is precisely the interchangeable filler the house style bans, and it would be
 * worse than the gap it closes.
 *
 * Codemod discipline (each rule here was learned by shipping a defect on an earlier sweep):
 *   - anchor on top-level </section> closings at a per-file detected indent, never a loose regex
 *   - insert nearest the 50% mark of <main> so it lands inside the audit's 20-85% window
 *   - skip, never guess, when a file's structure does not match
 *   - idempotent
 *   - VERIFY THE RESULT: re-read after write, restore the original if anything looks wrong
 *
 * Usage: node scripts/wire-midpage-cta.mjs [--dry] [--only <path-substring>]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DRY = process.argv.includes('--dry');
const ONLY = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;

const IMPORT_LINE = "import MidPageCTA from '@/components/v2/MidPageCTA';";

// route -> { h: headline, s: sub, l: button label }
// Written to be specific to what the page actually sells and what happens after the click.
const COPY = {
  '/uk/web-design': { h: 'Want to see what your site could do?', s: 'Send us the URL. We will come back with the three things costing you the most enquiries, and what it would take to fix them.', l: 'Get a free UK site review' },
  '/uk/shopify-development': { h: 'Thinking about a Shopify build or rebuild?', s: 'Tell us what you sell and where the current setup slows you down. We will tell you honestly whether a rebuild is worth it.', l: 'Talk about your Shopify build' },
  '/uk/ecommerce-seo': { h: 'Not sure why your products are not ranking?', s: 'Send us your store and two competitors. We will show you which collection and product pages are losing, and why.', l: 'Get a free store SEO review' },
  '/uk/ai-seo': { h: 'Want to know if AI answers mention you?', s: 'We will run your brand and your main terms through ChatGPT, Perplexity and Google AI Overviews and send you what they actually say.', l: 'Check your AI visibility' },
  '/uk/seo': { h: 'Want to see where you really stand?', s: 'Send your domain and the terms that matter. We will show you the gap to page one and what closes it, with no retainer talk.', l: 'Get a free UK SEO review' },
  '/uk/ecommerce-development': { h: 'Planning a new store or a replatform?', s: 'Tell us your platform and your order volume. We will tell you what we would build, and what we would leave alone.', l: 'Talk about your store' },
  '/uk/ai-agents': { h: 'Have a process eating your team alive?', s: 'Describe the workflow. We will tell you whether an agent genuinely helps or whether you just need better software.', l: 'Talk about your workflow' },
  '/uk/seo-audit': { h: 'Want the audit before you commit to anything?', s: 'We run the full technical and content audit first, then you decide whether to work with us. No obligation attached.', l: 'Request your SEO audit' },
  '/b2b-ecommerce': { h: 'Buyers still phoning in orders?', s: 'Tell us how your trade customers order today and what your ERP is. We will map what self-serve would actually look like.', l: 'Get a B2B commerce audit' },
  '/ecommerce-for-manufacturers': { h: 'Distributors still ordering by email?', s: 'Send us your catalogue size and your ERP. We will show you what a trade portal changes and what it does not.', l: 'Talk about your trade portal' },
  '/ai-citation-study': { h: 'Want to know if AI cites you?', s: 'We will run your brand through the same test used in this study and send you the raw answers, cited sources included.', l: 'Test your own pages' },
  '/replatforming': { h: 'Weighing up a migration?', s: 'Tell us the platform you are on and what is driving the move. We will tell you honestly whether it is worth the disruption.', l: 'Talk about your migration' },
  '/replatforming/magento-to-shopify': { h: 'Magento costs climbing?', s: 'Send us your SKU count and extension list. We will map what carries over to Shopify and what has to be rebuilt.', l: 'Scope your Magento migration' },
  '/replatforming/woocommerce-to-shopify': { h: 'WooCommerce getting fragile?', s: 'Tell us your plugin stack and order volume. We will tell you what breaks in a move and how we handle it.', l: 'Scope your WooCommerce migration' },
  '/replatforming/squarespace-to-shopify': { h: 'Outgrowing Squarespace?', s: 'Send us your store. We will tell you what transfers cleanly, what needs rebuilding, and whether you should move at all.', l: 'Scope your Squarespace migration' },
  '/replatforming/wix-to-shopify': { h: 'Hitting the limits of Wix?', s: 'Tell us what you cannot do today. We will tell you whether Shopify solves it or whether the problem is somewhere else.', l: 'Scope your Wix migration' },
  '/replatforming/wordpress-to-shopify': { h: 'WooCommerce or WordPress holding you back?', s: 'Send us your setup. We will map the content, the URLs and the redirects before anyone talks about a build.', l: 'Scope your WordPress migration' },
  '/replatforming/salesforce-commerce-cloud-to-shopify-plus': { h: 'Reviewing your Commerce Cloud renewal?', s: 'Tell us your integration list and order volume. We will map what a move to Shopify Plus would really involve.', l: 'Scope your SFCC migration' },
  '/omnichannel-commerce': { h: 'Stock and orders living in different systems?', s: 'Tell us which channels you sell on and what your inventory source of truth is. We will map where it is breaking.', l: 'Talk about your channels' },
  '/ecommerce-consulting': { h: 'Want a second opinion before you commit?', s: 'Bring us the decision you are stuck on. We will give you a straight answer, including when the answer is do nothing.', l: 'Book a consulting call' },
  '/bigcommerce-development': { h: 'Building or fixing a BigCommerce store?', s: 'Tell us what you sell and what is not working. We will tell you whether BigCommerce is still the right home for it.', l: 'Talk about your BigCommerce store' },
  '/headless-commerce': { h: 'Not sure headless is worth it?', s: 'Most stores do not need it. Tell us your setup and we will tell you honestly whether it would pay for itself.', l: 'Get a straight answer' },
  '/best-ecommerce-platforms': { h: 'Still not sure which platform fits?', s: 'Tell us what you sell, your order volume, and who has to run it day to day. We will recommend one and say why.', l: 'Get a platform recommendation' },
  '/services/web-application-development': { h: 'Have an idea that needs building?', s: 'Describe what the software has to do. We will tell you the shortest honest path to a working version.', l: 'Talk about your app' },
  '/services/local-seo': { h: 'Not showing in the map pack?', s: 'Send us your business name and city. We will check your profile, your categories and your competitors, and tell you what is holding you down.', l: 'Get a free map pack check' },
  '/services/ecommerce-seo': { h: 'Products buried on page three?', s: 'Send us your store and two competitors. We will show you which pages are losing and the fastest fixes.', l: 'Get a free store SEO review' },
  '/services/small-business-seo': { h: 'Want to know what is actually stopping you?', s: 'Send your site and the terms you want. We will show you the real gap and what closes it, with no retainer pitch.', l: 'Get a free SEO review' },
  '/services/seo-audit': { h: 'Want the audit before any commitment?', s: 'We run the full technical, content and link audit first. You keep the findings whether or not you work with us.', l: 'Request your free audit' },
  '/services/dental-seo': { h: 'Patients finding the practice down the road instead?', s: 'Send us your practice name and city. We will check your profile, reviews and categories and tell you what is losing you bookings.', l: 'Get a free practice check' },
  '/services/law-firm-seo': { h: 'Losing cases to firms with worse reviews?', s: 'Send us your firm and your practice areas. We will show you which pages are losing and what the leaders are doing differently.', l: 'Get a free firm SEO review' },
  '/services/generative-engine-optimization': { h: 'Want to know what AI says about you?', s: 'We will run your brand and your main terms through ChatGPT, Perplexity and Google AI Overviews and send you the raw answers.', l: 'Check your AI visibility' },
  '/services/shopify-plus-agency': { h: 'Outgrowing standard Shopify?', s: 'Tell us your order volume and where the current setup strains. We will tell you honestly whether Plus is worth it yet.', l: 'Talk about Shopify Plus' },
  '/services/ai-agent-development/rfq-bidding-agent': { h: 'Quoting team buried in RFQs?', s: 'Tell us how many you handle a week and where they come from. We will map which parts an agent can safely take.', l: 'Talk about your RFQ flow' },
  '/services/ai-agent-development/manufacturing-operations-agent': { h: 'Operations running on spreadsheets and chase emails?', s: 'Describe the process that eats the most time. We will tell you whether an agent helps or whether it needs fixing first.', l: 'Talk about your operations' },
  '/services/ai-agent-development/procurement-supply-chain-agent': { h: 'Procurement drowning in supplier email?', s: 'Tell us your systems and where the manual work sits. We will map what an agent can take and what stays human.', l: 'Talk about your procurement' },
  '/website-cost': { h: 'Want a real number for your project?', s: 'Tell us your page count, integrations and deadline. We will scope it properly and quote it before any work starts.', l: 'Get your project scoped' },
  '/services/real-estate-website-design': { h: 'Site not turning traffic into showings?', s: 'Send us your current site and your MLS feed. We will tell you what is losing enquiries and what IDX setup fits.', l: 'Talk about your listings site' },
  '/services/b2b-website-design': { h: 'Site not surviving procurement review?', s: 'Send us your site and tell us who signs off. We will show you what the buying committee cannot find today.', l: 'Get a free B2B site review' },
  '/services/saas-website-design': { h: 'Visitors not reaching signup?', s: 'Send us your marketing site and your trial flow. We will show you where people drop and what usually fixes it.', l: 'Get a free SaaS site review' },
  '/services/restaurant-website-design': { h: 'Menu still living in a PDF?', s: 'Send us your site. We will tell you what search and AI answers cannot read today, and what it takes to fix.', l: 'Get a free menu check' },
  '/services/nonprofit-website-design': { h: 'Donations stalling at the second step?', s: 'Send us your giving flow. We will walk it as a donor would and tell you exactly where people are dropping out.', l: 'Get a free donation flow review' },
  '/services/ai-agents-for-real-estate': { h: 'Leads going cold overnight?', s: 'Tell us your CRM and how enquiries arrive. We will map what an agent can answer and where a human must take over.', l: 'Talk about your lead flow' },
  '/services/ai-agents-for-healthcare': { h: 'Front desk buried in scheduling calls?', s: 'Tell us your systems and your patient volume. We will map the administrative work an agent can take, and what it never touches.', l: 'Talk about your front office' },
  '/services/ecommerce-app-development': { h: 'Not sure an app is worth building?', s: 'Most stores do not need one. Tell us your repeat purchase rate and we will give you an honest yes or no.', l: 'Get a straight answer' },
  '/uae/ecommerce-development': { h: 'Planning a store for the UAE market?', s: 'Tell us what you sell and which payment and delivery partners matter. We will map what the build actually needs.', l: 'Talk about your store' },
  '/au': { h: 'Want to see what your site could do?', s: 'Send us the URL. We will come back with the three things costing you the most enquiries, and what it would take to fix them.', l: 'Get a free site review' },
};

function detectSectionIndent(main) {
  // Top-level sections inside <main> all share one indent. Take the most common.
  const counts = new Map();
  for (const m of main.matchAll(/\n([ \t]+)<\/section>/g)) {
    counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  }
  let best = null, bestN = 0;
  for (const [ind, n] of counts) if (n > bestN) { best = ind; bestN = n; }
  return bestN >= 3 ? best : null;
}

let wired = 0, skipped = 0, failed = 0, nocopy = 0;

// Derive the target list from the audit output rather than a /tmp scratch file, so this is
// reproducible after a reboot and re-runnable against a fresh audit.
const AUDIT = path.join(ROOT, 'pipeline/research/data/perfect-page-audit-all-2026-08-12.json');
const rawAudit = JSON.parse(fs.readFileSync(AUDIT, 'utf8'));
const pages = Array.isArray(rawAudit)
  ? rawAudit
  : (rawAudit.pages || rawAudit.results || Object.values(rawAudit).find(Array.isArray) || []);
const routes = pages
  .filter((p) => (p.profile === 'service' || p.profile === 'commercial') && !p.ctaCount)
  .map((p) => String(p.path));
if (!routes.length) { console.error('No pages found needing a mid-page CTA. Re-run the audit first.'); process.exit(1); }
console.log(`${routes.length} pages measured with no CTA inside <main>\n`);

for (const route of routes) {
  if (ONLY && !route.includes(ONLY)) continue;
  const rel = 'src/app' + route + '/page.tsx';
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { console.log(`  MISS   ${route}`); failed++; continue; }

  const copy = COPY[route];
  if (!copy) { console.log(`  NOCOPY ${route} (no authored copy, skipping rather than shipping filler)`); nocopy++; continue; }

  const before = fs.readFileSync(file, 'utf8');
  if (before.includes('MidPageCTA')) { console.log(`  skip   ${route} (already wired)`); skipped++; continue; }

  const mainMatch = before.match(/([ \t]*)<main[^>]*>([\s\S]*?)\n([ \t]*)<\/main>/);
  if (!mainMatch) { console.log(`  SKIP   ${route} (no single <main> block found)`); skipped++; continue; }
  const mainBody = mainMatch[2];
  const indent = detectSectionIndent(mainBody);
  if (!indent) { console.log(`  SKIP   ${route} (no consistent top-level </section> indent)`); skipped++; continue; }

  // Closing tags at that indent, and the one nearest the 50% mark.
  const closes = [...mainBody.matchAll(new RegExp(`\\n${indent}</section>`, 'g'))];
  if (closes.length < 2) { console.log(`  SKIP   ${route} (only ${closes.length} top-level section)`); skipped++; continue; }
  const target = closes.reduce((a, b) =>
    Math.abs(b.index / mainBody.length - 0.5) < Math.abs(a.index / mainBody.length - 0.5) ? b : a);
  const ratio = target.index / mainBody.length;
  if (ratio < 0.15 || ratio > 0.8) { console.log(`  SKIP   ${route} (best anchor at ${Math.round(ratio * 100)}%, outside safe window)`); skipped++; continue; }

  const insertAt = mainMatch.index + mainMatch[1].length + (mainMatch[0].indexOf(mainBody)) + target.index + target[0].length;
  const esc = (s) => s.replace(/'/g, "\\'");
  const block =
    `\n\n${indent}<MidPageCTA\n` +
    `${indent}  headline={'${esc(copy.h)}'}\n` +
    `${indent}  sub={'${esc(copy.s)}'}\n` +
    `${indent}  label={'${esc(copy.l)}'}\n` +
    `${indent}/>`;

  let after = before.slice(0, insertAt) + block + before.slice(insertAt);

  // Import goes after the last existing @/components import, else after the first import line.
  const imports = [...after.matchAll(/^import .*from '@\/components\/[^']+';$/gm)];
  if (imports.length) {
    const last = imports[imports.length - 1];
    after = after.slice(0, last.index + last[0].length) + '\n' + IMPORT_LINE + after.slice(last.index + last[0].length);
  } else {
    const first = after.match(/^import .*$/m);
    after = after.slice(0, first.index + first[0].length) + '\n' + IMPORT_LINE + after.slice(first.index + first[0].length);
  }

  if (DRY) { console.log(`  [dry]  ${route}  anchor ${Math.round(ratio * 100)}%  indent ${indent.length}sp`); wired++; continue; }

  fs.writeFileSync(file, after);

  // VERIFY THE RESULT. Restore on any doubt.
  const w = fs.readFileSync(file, 'utf8');
  const ok =
    w.includes(IMPORT_LINE) &&
    (w.match(/<MidPageCTA\b/g) || []).length === 1 &&
    (w.match(/MidPageCTA/g) || []).length === 3 &&
    (w.match(/<\/main>/g) || []).length === (before.match(/<\/main>/g) || []).length &&
    (w.match(/<\/section>/g) || []).length === (before.match(/<\/section>/g) || []).length &&
    w.length > before.length;
  if (!ok) {
    fs.writeFileSync(file, before);
    console.log(`  FAIL   ${route} (verification failed, original restored)`);
    failed++;
    continue;
  }
  console.log(`  wired  ${route}  at ${Math.round(ratio * 100)}%`);
  wired++;
}

console.log(`\n${wired} wired, ${skipped} skipped, ${nocopy} without authored copy, ${failed} failed`);
if (failed) process.exit(1);
