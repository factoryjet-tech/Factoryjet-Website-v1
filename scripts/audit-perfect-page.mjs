#!/usr/bin/env node
/**
 * Perfect-Page Audit — deterministic scorer for docs/PERFECT-PAGE-RUBRIC.md
 *
 * Fetches every live URL in the sitemap index and scores it against the rubric.
 * Only the countable checks run here. Checks marked `ai` in the rubric are left
 * `pending` and their evidence is written into the JSON so the judge agents read
 * measurements instead of re-fetching pages.
 *
 * MEASUREMENT PROTOCOL (rulebook §4b): word count and density are measured on
 * RENDERED HTML, never on .tsx source. Source roughly doubles the count. The
 * renderedWords() implementation below is byte-identical in behaviour to
 * scripts/audit-rendered.mjs and pipeline/research/dfs_citation_anatomy.py so
 * figures stay comparable with the n=58 benchmark.
 *
 * Usage:
 *   node scripts/audit-perfect-page.mjs --region us
 *   node scripts/audit-perfect-page.mjs --region all --out path/to.json
 *
 * Regions: us | india | uk | uae | au | blog | pages | case-studies | all
 *
 * Note on check A5 (inbound links): computed across the crawled set only. Run
 * --region all for a true inbound count; partial runs mark inboundScope=partial.
 */
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://factoryjet.com';
const HERE = dirname(fileURLToPath(import.meta.url));

// ── args ─────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf(name);
  return i > -1 ? argv[i + 1] : fallback;
};
const REGION = (arg('--region', 'all') || 'all').toLowerCase();
const LIMIT = Number(arg('--limit', Infinity));
const CONCURRENCY = Number(arg('--concurrency', 8));
const TODAY = new Date().toISOString().slice(0, 10);
const OUT = arg('--out', `pipeline/research/data/perfect-page-audit-${REGION}-${TODAY}.json`);

// ── benchmark, from AI-SEO-RULEBOOK §2 (n=58 AI-Overview-cited pages) ────────
const BENCH = { words: 2813, h2: 11, liAll: 110 };

// ── page-type profiles ───────────────────────────────────────────────────────
const PROFILES = {
  service:     { words: [2500, 5000], h2: 10, liMain: 30, faq: 20, compares: true },
  city:        { words: [2000, 4500], h2: 10, liMain: 25, faq: 20, compares: false },
  commercial:  { words: [2500, 5000], h2: 10, liMain: 30, faq: 15, compares: true },
  blog:        { words: [1800, 5000], h2: 8,  liMain: 20, faq: 8,  compares: false },
  'case-study':{ words: [900, 2500],  h2: 5,  liMain: 10, faq: 0,  compares: false },
  hub:         { words: [0, Infinity], h2: 3, liMain: 0,  faq: 0,  compares: false },
};

const HUB_PATHS = new Set([
  '/', '/about', '/contact', '/portfolio', '/pricing', '/glossary', '/sitemap',
  '/privacy', '/terms', '/refund-policy', '/thank-you', '/faq', '/services',
  '/blog', '/case-studies', '/ai-visibility-checker',
]);

// Explicit, because inferring "is this segment a city?" from shape alone
// misclassifies /seo/local-seo and /replatforming/wix-to-shopify.
const CITIES = new Set([
  // India
  'ahmedabad','bangalore','bhubaneswar','chennai','coimbatore','delhi','gurgaon','hyderabad',
  'indore','jaipur','kochi','kolkata','madurai','mumbai','nagpur','noida','pune','rajkot','surat',
  'thiruvananthapuram','vadodara','visakhapatnam','chandigarh','lucknow',
  // US
  'austin','miami','denver','nashville','portland','charlotte','raleigh','cleveland','new-york',
  'tampa','boise','chattanooga','fargo','lincoln','sioux-falls','colorado-springs','providence',
  'arlington','corpus-christi','huntington-beach','lakewood-ranch',
  // UK
  'london','leeds','manchester','birmingham','bristol','edinburgh','sheffield','nottingham',
  'leicester','liverpool','cardiff','glasgow','newcastle','southampton','brighton','oxford',
  'cambridge','derby','coventry','hull','plymouth',
  // UAE / AU
  'dubai','abu-dhabi','sharjah','sydney','melbourne','brisbane','perth',
]);

function classify(path) {
  const p = path.replace(/\/$/, '') || '/';
  if (HUB_PATHS.has(p)) return 'hub';
  const segs = p.split('/').filter(Boolean);
  if (segs[0] === 'author') return 'hub';
  if (segs[0] === 'blog') return 'blog';
  if (segs[0] === 'case-studies') return 'case-study';
  if (segs.some((s) => CITIES.has(s))) return 'city';
  if (segs[0] === 'services' || segs[0] === 'seo' || segs[0] === 'web-design' ||
      segs[0] === 'digital-marketing') return 'service';
  const SERVICE_ROOTS = new Set([
    'ai-seo','shopify-development','wordpress-development','n8n-automation','whatsapp-chatbot',
    'website-cost','ecommerce-consulting','bigcommerce-development',
  ]);
  if (SERVICE_ROOTS.has(segs[0]) && segs.length === 1) return 'service';
  if (segs[0] === 'uk' || segs[0] === 'uae' || segs[0] === 'au') {
    return segs.length === 1 ? 'commercial' : 'service';
  }
  return 'commercial';
}

// ── capability vocabulary (rubric N1/N2, tier BLUE) ──────────────────────────
const VOCAB = JSON.parse(readFileSync(join(HERE, 'data/capability-terms.json'), 'utf8'));
const SYSTEMS = [...VOCAB.systems].sort((a, b) => b.length - a.length);
const CAPS = [...VOCAB.capabilities].sort((a, b) => b.length - a.length);

const SLOP = [
  'unlock','elevate','leverage','seamless','robust','supercharge','game-changer','game changer',
  'dive in','delve','in today\'s','it\'s important to note','when it comes to','in conclusion',
  'rest assured','look no further','navigate the complexities','tapestry','testament to',
];

// ── fetch ────────────────────────────────────────────────────────────────────
/** Cache-buster + no-cache: Cloudflare serves stale HTML for up to ~20h post-deploy. */
async function get(url) {
  const bust = url + (url.includes('?') ? '&' : '?') + 'cb=' + Math.random().toString(36).slice(2);
  const res = await fetch(bust, { headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' } });
  return { status: res.status, body: await res.text() };
}
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

// ── text helpers ─────────────────────────────────────────────────────────────
/** Rendered word count. Matches dfs_citation_anatomy.py exactly. Do not "improve". */
function renderedWords(html) {
  return stripToText(html).split(/\s+/).filter(Boolean).length;
}
function stripToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ');
}
const count = (s, re) => (s.match(re) || []).length;

/** Flesch-Kincaid grade. Syllable counting is heuristic, so treat as +/- 1 grade. */
function fkGrade(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = (text.match(/[.!?]+(\s|$)/g) || []).length || 1;
  let syl = 0;
  for (const w of words) {
    const t = w.toLowerCase().replace(/[^a-z]/g, '');
    if (!t) continue;
    const groups = t.replace(/e$/, '').match(/[aeiouy]+/g);
    syl += Math.max(1, groups ? groups.length : 1);
  }
  if (!words.length) return 0;
  return 0.39 * (words.length / sentences) + 11.8 * (syl / words.length) - 15.59;
}

/** Content region: <main> with nav/footer/header stripped, so chrome lists don't count. */
function contentRegion(html) {
  const m = html.match(/<main[\s\S]*?<\/main>/i);
  const main = m ? m[0] : html;
  return main
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ');
}

/** All @type values anywhere in the parsed JSON-LD graph. */
function schemaTypes(blocks) {
  const types = new Set();
  const walk = (n) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (n && typeof n === 'object') {
      const t = n['@type'];
      if (typeof t === 'string') types.add(t);
      else if (Array.isArray(t)) t.forEach((x) => typeof x === 'string' && types.add(x));
      Object.values(n).forEach(walk);
    }
  };
  blocks.forEach(walk);
  return types;
}

// ── measurement ──────────────────────────────────────────────────────────────
function measure(url, html) {
  const path = url.replace(ORIGIN, '') || '/';
  const profile = classify(path);
  const content = contentRegion(html);
  const contentText = stripToText(content);
  const fullText = stripToText(html);

  const ldRaw = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1]);
  const ldBlocks = [];
  let ldParseError = false;
  for (const raw of ldRaw) {
    try { ldBlocks.push(JSON.parse(raw)); } catch { ldParseError = true; }
  }
  const types = schemaTypes(ldBlocks);
  const ldText = ldRaw.join(' ');

  // headings, in document order, for descent checking
  const headings = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  let skips = 0;
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) skips++;
  }

  // links inside content only
  const contentLinks = [...content.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  // Same-page anchors (#faq-start) are not internal links. Without this filter they
  // collapse to '/' and both invent an outbound link and inflate the homepage's
  // inbound count by hundreds.
  const internal = [...new Set(contentLinks
    .filter((h) => !h.startsWith('#'))
    .filter((h) => h.startsWith('/') || h.startsWith(ORIGIN))
    .map((h) => h.replace(ORIGIN, '').split('#')[0].split('?')[0].replace(/\/$/, '') || '/')
    .filter((h) => h && h !== (path.replace(/\/$/, '') || '/')))];
  const externalHosts = [...new Set(contentLinks
    .filter((h) => /^https?:\/\//i.test(h) && !h.startsWith(ORIGIN))
    .map((h) => { try { return new URL(h).hostname.replace(/^www\./, ''); } catch { return null; } })
    .filter(Boolean)
    // Anchored: an unanchored `x.com` also matched any domain that happens to END in
    // that substring (e.g. marchex.com), silently dropping a real citation. Only
    // exclude the actual x.com host (or a subdomain of it).
    .filter((h) => !/facebook|twitter|linkedin|instagram|youtube|wa\.me|whatsapp|calendly|goo\.gl|maps\.google/i.test(h) && !/(^|\.)x\.com$/i.test(h)))];

  // images
  // alt="" is the CORRECT markup for a decorative image, so an attribute-present
  // check is the accessibility question. Non-empty alt is a separate, softer signal.
  const imgs = [...html.matchAll(/<img[^>]*>/gi)].map((m) => m[0]);
  const imgsWithAltAttr = imgs.filter((t) => /\salt=/i.test(t)).length;
  const imgsWithAlt = imgs.filter((t) => /\salt=["'][^"']+["']/i.test(t)).length;
  const imgsWithDims = imgs.filter((t) => /\swidth=/i.test(t) && /\sheight=/i.test(t)).length;

  // FAQ
  const faqSchemaQs = count(ldText, /"@type"\s*:\s*"Question"/g);
  const faqHeadingVisible = /<h[1-6][^>]*>[^<]*(FAQ|Frequently Asked|Questions? (people|buyers) ask|Common questions)/i.test(content);
  const faqSectionId = /id=["'][^"']*faq/i.test(content);

  // answer-first candidate: first substantial <p> in the opening quarter of content
  const paras = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => stripToText(m[1]).trim());
  const headWords = Math.max(1, Math.round(contentText.split(/\s+/).length * 0.3));
  let answerFirst = null;
  let seen = 0;
  for (const p of paras) {
    const w = p.split(/\s+/).filter(Boolean).length;
    seen += w;
    if (seen > headWords) break;
    if (w >= 30 && w <= 110) { answerFirst = { words: w, text: p.slice(0, 400) }; break; }
  }

  // Two different questions, so two different scopes.
  // E5 asks "can a reader reach us at all" -> whole document, chrome counts.
  // E6 asks "is there a CTA before the footer" -> content only, chrome must not count.
  const ctaRe = /<a[^>]+href=["'][^"']*(contact|quote|book|call|audit|get-started|thank-you|wa\.me|calendly\.com|tel:)[^"']*["'][^>]*>/gi;
  const ctaAnywhere = count(html, ctaRe);
  const ctaPositions = [...content.matchAll(ctaRe)].map((m) => m.index / content.length);
  const midCta = ctaPositions.some((r) => r > 0.2 && r < 0.85);

  // capability vocabulary
  const lower = ' ' + contentText.toLowerCase().replace(/\s+/g, ' ') + ' ';
  const countTerms = (list) => {
    let total = 0; const hits = [];
    for (const term of list) {
      const re = new RegExp('(?<![a-z0-9])' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![a-z0-9])', 'g');
      const n = (lower.match(re) || []).length;
      if (n) { total += n; hits.push(term); }
    }
    return { total, distinct: hits };
  };
  const sys = countTerms(SYSTEMS);
  const cap = countTerms(CAPS);
  const words = renderedWords(html);
  const contentWords = contentText.split(/\s+/).filter(Boolean).length;

  const slopHits = SLOP.filter((s) => lower.includes(' ' + s.toLowerCase()));
  // Match the whole amount first, then inspect what follows. Doing the magnitude
  // exclusion as a regex lookahead lets the engine backtrack to a shorter match
  // and "succeed", which silently reported ₹4,03,000Cr as the price "₹4,03".
  const MAGNITUDE = /^\s?(Cr|crore|lakh|lakhs|mn|bn|million|billion|trillion|[LMBK])\b/i;
  const priceHits = [];
  for (const mm of contentText.matchAll(/[$£€₹]\s?\d[\d,]{2,}(?:\.\d+)?|\b\d[\d,]{2,}\s?(?:USD|GBP|INR|AED)\b/g)) {
    const after = contentText.slice(mm.index + mm[0].length, mm.index + mm[0].length + 12);
    if (MAGNITUDE.test(after)) continue;
    priceHits.push(mm[0]);
    if (priceHits.length >= 5) break;
  }

  const canonical = (html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                     html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i) || [])[1] || null;
  // Decode entities BEFORE measuring length. The rendered HTML carries "&amp;"
  // where the author wrote "&", so a raw .length counts one ampersand as five
  // characters and reports a compliant title as four over the limit. Measured
  // 2026-08-25: this produced two false T8 failures on /uk pages whose real
  // titles were 57 and 58 characters.
  const entities = (s) => s
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"').replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&nbsp;/gi, ' ').replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘');

  const title = entities((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim() || '');
  const desc = entities((html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i) || [])[1] || '');
  const robots = (html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i) || [])[1] || '';

  let dateModified = null;
  const dm = ldText.match(/"dateModified"\s*:\s*"([^"]+)"/);
  if (dm) dateModified = dm[1];

  return {
    url, path, profile, words, contentWords,
    h1: count(html, /<h1[\s>]/gi),
    h2: count(html, /<h2[\s>]/gi),
    h3: count(html, /<h3[\s>]/gi),
    headingSkips: skips,
    liAll: count(html, /<li[\s>]/gi),
    liMain: count(content, /<li[\s>]/gi),
    tables: count(content, /<table[\s>]/gi),
    landmarks: ['<main', '<header', '<nav', '<section', '<article', '<footer', '<figure']
      .filter((t) => new RegExp(t + '[\\s>]', 'i').test(html)),
    canonical, title, titleLen: title.length, desc, descLen: desc.length, robots,
    noindex: /noindex/i.test(robots),
    hreflangCount: count(html, /hreflang=/gi),
    hasXDefault: /hreflang=["']x-default["']/i.test(html),
    imgTotal: imgs.length, imgsWithAltAttr, imgsWithAlt, imgsWithDims,
    ldBlocks: ldRaw.length, ldParseError,
    schemaTypes: [...types],
    dateModified,
    faqSchemaQs, faqHeadingVisible, faqSectionId,
    // Note: as of 2026-08-04 the site has no visible breadcrumb component at all.
    // BreadcrumbSchema.tsx emits JSON-LD only. This check is expected to fail sitewide.
    visibleBreadcrumb: /aria-label=["']breadcrumb["']/i.test(html) ||
      /class=["'][^"']*breadcrumb/i.test(html) ||
      /itemtype=["'][^"']*BreadcrumbList/i.test(html),
    internalLinks: internal, internalLinkCount: internal.length,
    externalHosts, externalCitations: externalHosts.length,
    answerFirst, midCta, ctaCount: ctaPositions.length, ctaAnywhere,
    systemsDistinct: sys.distinct.length, systemsTotal: sys.total,
    capsDistinct: cap.distinct.length, capsTotal: cap.total,
    capabilityDensity: words ? Number((((sys.total + cap.total) / words) * 1000).toFixed(1)) : 0,
    topTerms: [...sys.distinct.slice(0, 12), ...cap.distinct.slice(0, 12)],
    emDashes: count(contentText, /—/g),
    slopHits,
    fkGrade: Number(fkGrade(contentText).toFixed(1)),
    priceHits,
    videoOrEmbed: /<video[\s>]|<iframe[^>]+(youtube|vimeo|wistia)/i.test(content),
    downloadable: /href=["'][^"']*\.(pdf|xlsx|docx)["']/i.test(content),
    inlineSvgFigures: count(content, /<figure[\s>]/gi) + count(content, /<svg[\s>]/gi),
  };
}

// ── scoring ──────────────────────────────────────────────────────────────────
// weight: rubric weight. tier BLUE checks are already halved in these numbers.
// ai: true  -> left pending here, judged by agents, excluded from the deterministic denominator.
const CHECKS = [
  // T
  ['T1','technical','Exactly one <h1>',5,(m)=>m.h1===1],
  ['T2','technical','No skipped heading levels',4,(m)=>m.headingSkips===0],
  ['T3','technical','Semantic landmarks',3,(m)=>m.landmarks.includes('<main')&&m.landmarks.length>=3],
  ['T4','technical','Canonical self-referential',4,(m)=>!!m.canonical&&m.canonical.replace(ORIGIN,'').replace(/\/$/,'')===(m.path.replace(/\/$/,'')||'')],
  ['T5','technical','hreflang incl. x-default',3,(m)=>m.hreflangCount>0&&m.hasXDefault],
  ['T6','technical','Indexable',5,(m)=>!m.noindex],
  ['T7','technical','In sitemap',3,()=>true],
  ['T8','technical','Title 15-60 chars',2,(m)=>m.titleLen>=15&&m.titleLen<=60],
  ['T9','technical','Meta description 70-160',2,(m)=>m.descLen>=70&&m.descLen<=160],
  ['T10','technical','Images have alt attribute',3,(m)=>m.imgTotal===0?null:m.imgsWithAltAttr/m.imgTotal>=0.95],
  ['T11','technical','Images have width/height',2,(m)=>m.imgTotal===0?null:m.imgsWithDims/m.imgTotal>=0.9],
  ['T12','technical','Server-rendered text',5,(m)=>m.profile==='hub'?m.words>=80:m.words>=300],
  // S
  ['S1','schema','JSON-LD present and parses',4,(m)=>m.ldBlocks>0&&!m.ldParseError],
  ['S2','schema','Organization',2,(m)=>m.schemaTypes.includes('Organization')],
  ['S3','schema','BreadcrumbList',3,(m)=>m.path==='/'?null:m.schemaTypes.includes('BreadcrumbList')],
  ['S4','schema','WebPage or Service',2,(m)=>m.schemaTypes.some((t)=>['WebPage','Service','ProfessionalService','LocalBusiness','Article','BlogPosting'].includes(t))],
  ['S5','schema','Person (named author)',4,(m)=>m.schemaTypes.includes('Person')],
  ['S6','schema','FAQPage where FAQ visible',2,(m)=>(m.faqHeadingVisible||m.faqSectionId)?m.schemaTypes.includes('FAQPage'):null],
  ['S7','schema','dateModified present and sane',4,(m)=>{
    if(!m.dateModified) return false;
    const d=Date.parse(m.dateModified);
    return !Number.isNaN(d)&&d<=Date.now()+86400000;
  }],
  ['S9','schema','Schema matches visible content',5,null,true],
  // A
  ['A1','architecture','Answer-first block present',5,(m)=>m.profile==='hub'?null:!!m.answerFirst],
  ['A2','architecture','H2 count meets profile',4,(m)=>m.h2>=PROFILES[m.profile].h2],
  ['A3','architecture','Sections read as answerable questions',3,null,true],
  ['A4','architecture','5+ in-content internal links',4,(m)=>m.internalLinkCount>=5],
  ['A5','architecture','2+ inbound internal links',4,(m)=>m.inbound>=2],
  ['A6','architecture','Visible breadcrumb',2,(m)=>m.path==='/'?null:m.visibleBreadcrumb],
  // D
  ['D1','depth','Word count in profile band',6,(m)=>{
    const [lo]=PROFILES[m.profile].words;
    if(lo===0) return null;
    if(m.words>=lo) return true;
    return m.words>=lo*0.75?0.5:false;
  }],
  ['D2','depth','Under the 5,000-word ceiling',4,(m)=>{
    if(m.profile==='hub') return null;
    if(m.words<=5000) return true;
    return m.words<=6000?0.5:false;
  }],
  // X
  ['X1','extractability','<li> in <main> meets profile',7,(m)=>{
    const t=PROFILES[m.profile].liMain;
    if(t===0) return null;
    if(m.liMain>=t) return true;
    return m.liMain>=t*0.6?0.5:false;
  }],
  ['X2','extractability','Whole-page <li> vs 110 benchmark',2,(m)=>m.profile==='hub'?null:m.liAll>=BENCH.liAll?true:(m.liAll>=BENCH.liAll*0.6?0.5:false)],
  ['X3','extractability','Visible FAQ section',5,(m)=>PROFILES[m.profile].faq===0?null:(m.faqHeadingVisible||m.faqSectionId)],
  ['X4','extractability','FAQ count meets profile min',4,(m)=>{
    const t=PROFILES[m.profile].faq;
    if(t===0) return null;
    if(m.faqSchemaQs>=t) return true;
    return m.faqSchemaQs>=t*0.6?0.5:false;
  }],
  ['X5','extractability','FAQ answers self-contained',3,null,true],
  ['X6','extractability','FAQ phrased like buyers ask',2,null,true],
  ['X7','extractability','Definition sentences present',2,null,true],
  // E
  ['E1','trust','Named author visible on page',4,(m)=>/by\s+(Bhavesh|Rajesh|Vikram|Priya|Anjali)/i.test(m.pageTextSample||'')||m.schemaTypes.includes('Person')],
  ['E2','trust','2-3 external citations',4,(m)=>m.externalCitations>=2],
  ['E3','trust','Trust signals real, not decorative',5,null,true],
  ['E4','trust','No invented stats, clients, awards',6,null,true],
  ['E5','trust','Clear contact path',2,(m)=>m.ctaAnywhere>=1],
  ['E6','trust','Mid-page CTA',3,(m)=>m.profile==='hub'?null:m.midCta],
  ['E7','trust','sameAs on Organization',1,(m)=>/"sameAs"/.test(m.ldTextSample||'')],
  // N
  ['N1','entity','Capability density 25+/1k',4,(m)=>{
    if(!['service','commercial'].includes(m.profile)) return null;
    if(m.capabilityDensity>=25) return true;
    return m.capabilityDensity>=15?0.5:false;
  }],
  ['N2','entity','Real third-party system names',3,(m)=>m.profile==='hub'?null:m.systemsDistinct>=8?true:(m.systemsDistinct>=4?0.5:false)],
  ['N3','entity','Entity coverage matches topic',3,null,true],
  // W
  ['W1','writing','Zero em dashes',3,(m)=>m.emDashes===0],
  ['W2','writing','No AI-slop vocabulary',3,(m)=>m.slopHits.length===0?true:(m.slopHits.length<=2?0.5:false)],
  ['W3','writing','Plain register (FK grade <= 10)',3,(m)=>m.fkGrade<=10?true:(m.fkGrade<=12?0.5:false)],
  ['W4','writing','Not commodity copy',4,null,true],
  // Deterministic detection cannot tell OUR price from a competitor's price or a
  // third-party API cost quoted as market context. Verified 2026-08-04: most hits
  // are comparison-table and pass-through costs, not FactoryJet pricing. Judged.
  //
  // 2026-08-04, policy change by the owner: publishing prices is DELIBERATE. The blog
  // carries directional costing on purpose, to qualify buyers before the call. So this
  // is no longer "no pricing figures" (a house rule masquerading as a quality signal,
  // which flagged 40 pages that were working as intended). It is now a FRAMING check:
  // a price must read as what it is. Fails only when a bare number could be mistaken
  // for a firm quote, or when it contradicts a scoping-call promise on the same page.
  ['W5','writing','Price figures unambiguously framed',2,null,true],
  // M
  ['M1','media','Comparison table where topic compares',2,(m)=>PROFILES[m.profile].compares?m.tables>=1:null],
  ['M2','media','3+ content images with alt',2,(m)=>m.profile==='hub'?null:m.imgsWithAlt>=3],
];

const HARD_FAIL = ['E4', 'S9', 'T6', 'T12', 'S8'];

function score(m) {
  const results = {};
  let earned = 0, possible = 0;
  const pending = [];
  for (const [id, cat, label, weight, fn, isAi] of CHECKS) {
    if (isAi) { results[id] = { cat, label, weight, status: 'pending' }; pending.push(id); continue; }
    const v = fn(m);
    if (v === null) { results[id] = { cat, label, weight, status: 'na' }; continue; }
    const got = v === true ? weight : v === false ? 0 : weight * v;
    earned += got; possible += weight;
    results[id] = { cat, label, weight, status: v === true ? 'pass' : v === false ? 'fail' : 'partial', earned: got };
  }
  const byCat = {};
  for (const [id, r] of Object.entries(results)) {
    if (r.status === 'na' || r.status === 'pending') continue;
    byCat[r.cat] ??= { earned: 0, possible: 0 };
    byCat[r.cat].earned += r.earned; byCat[r.cat].possible += r.weight;
  }
  for (const c of Object.values(byCat)) c.pct = Math.round((c.earned / c.possible) * 100);
  return {
    deterministicScore: possible ? Math.round((earned / possible) * 100) : null,
    earned: Number(earned.toFixed(1)), possible, byCat, checks: results, pendingAi: pending,
    hardFailRisk: HARD_FAIL.filter((id) => results[id] && results[id].status === 'fail'),
  };
}

// ── run ──────────────────────────────────────────────────────────────────────
const REGION_MAP = {
  us: 'sitemap-us', india: 'sitemap-india', uk: 'sitemap-uk', uae: 'sitemap-uae',
  au: 'sitemap-au', blog: 'sitemap-blog', pages: 'sitemap-pages', 'case-studies': 'sitemap-case-studies',
};

const index = await get(`${ORIGIN}/sitemap.xml`);
let childMaps = locs(index.body);
if (REGION !== 'all') {
  const want = REGION_MAP[REGION];
  if (!want) { console.error(`Unknown region "${REGION}". One of: ${Object.keys(REGION_MAP).join(', ')}, all`); process.exit(1); }
  childMaps = childMaps.filter((u) => u.includes(want));
}
let urls = [];
for (const m of childMaps) {
  const r = await get(m);
  const found = locs(r.body);
  console.error(`${m.replace(ORIGIN, '')}: ${found.length}`);
  urls.push(...found);
}
urls = [...new Set(urls)].slice(0, LIMIT);
console.error(`\nScoring ${urls.length} URLs against PERFECT-PAGE-RUBRIC v1.0 (region=${REGION})\n`);

async function pool(items, fn, n) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      try { out[idx] = await fn(items[idx]); }
      catch (e) { out[idx] = { url: items[idx], error: String(e) }; }
    }
  }));
  return out;
}

const measured = await pool(urls, async (u) => {
  const { status, body } = await get(u);
  if (status !== 200) return { url: u, error: `HTTP ${status}` };
  const m = measure(u, body);
  m.pageTextSample = stripToText(contentRegion(body)).slice(0, 1200);
  m.ldTextSample = body.match(/"sameAs"/) ? '"sameAs"' : '';
  return m;
}, CONCURRENCY);

const ok = measured.filter((r) => !r.error);
const failed = measured.filter((r) => r.error);

// inbound link counts, across the crawled set only
const inbound = new Map();
for (const m of ok) for (const l of m.internalLinks) inbound.set(l, (inbound.get(l) || 0) + 1);
for (const m of ok) m.inbound = inbound.get(m.path.replace(/\/$/, '') || '/') || 0;

const scored = ok.map((m) => {
  const s = score(m);
  const { pageTextSample, ldTextSample, internalLinks, ...rest } = m;
  return { ...rest, ...s, evidenceForJudge: {
    answerFirst: m.answerFirst, topTerms: m.topTerms, slopHits: m.slopHits,
    priceHits: m.priceHits, externalHosts: m.externalHosts, openingText: pageTextSample.slice(0, 700),
  } };
});

// ── report ───────────────────────────────────────────────────────────────────
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : 0; };
const byProfile = {};
for (const r of scored) (byProfile[r.profile] ??= []).push(r);

console.log(`\n=== PERFECT-PAGE AUDIT: ${scored.length} pages (${failed.length} failed) ===`);
console.log(`Rubric v1.0 | deterministic checks only | AI-judged checks left pending\n`);

console.log(`Profile        n   median   words    h2   liMain   FAQ   density`);
for (const [p, rows] of Object.entries(byProfile).sort((a, b) => b[1].length - a[1].length)) {
  console.log(
    `${p.padEnd(13)} ${String(rows.length).padStart(3)}   ` +
    `${String(med(rows.map((r) => r.deterministicScore))).padStart(6)}   ` +
    `${String(med(rows.map((r) => r.words))).padStart(5)}   ` +
    `${String(med(rows.map((r) => r.h2))).padStart(3)}   ` +
    `${String(med(rows.map((r) => r.liMain))).padStart(6)}   ` +
    `${String(med(rows.map((r) => r.faqSchemaQs))).padStart(3)}   ` +
    `${String(med(rows.map((r) => r.capabilityDensity))).padStart(7)}`
  );
}

const catTotals = {};
for (const r of scored) for (const [c, v] of Object.entries(r.byCat)) {
  catTotals[c] ??= { earned: 0, possible: 0 };
  catTotals[c].earned += v.earned; catTotals[c].possible += v.possible;
}
console.log(`\n--- Category health (all pages in scope) ---`);
for (const [c, v] of Object.entries(catTotals).sort((a, b) => (a[1].earned / a[1].possible) - (b[1].earned / b[1].possible))) {
  console.log(`  ${c.padEnd(16)} ${String(Math.round((v.earned / v.possible) * 100)).padStart(3)}%`);
}

// which checks fail most often, weighted — this is the fix-first list
const failTally = {};
for (const r of scored) for (const [id, c] of Object.entries(r.checks)) {
  if (c.status === 'fail' || c.status === 'partial') {
    failTally[id] ??= { label: c.label, weight: c.weight, n: 0, lost: 0 };
    failTally[id].n++; failTally[id].lost += c.weight - (c.earned || 0);
  }
}
console.log(`\n--- Fix first: checks by total weighted points lost ---`);
Object.entries(failTally).sort((a, b) => b[1].lost - a[1].lost).slice(0, 15)
  .forEach(([id, f]) => console.log(`  ${id.padEnd(4)} ${String(Math.round(f.lost)).padStart(5)} pts  ${String(f.n).padStart(3)} pages  ${f.label}`));

console.log(`\n--- Weakest 20 pages ---`);
[...scored].sort((a, b) => a.deterministicScore - b.deterministicScore).slice(0, 20)
  .forEach((r) => console.log(`  ${String(r.deterministicScore).padStart(3)}  ${r.profile.padEnd(11)} w=${String(r.words).padStart(5)} li=${String(r.liMain).padStart(3)}  ${r.path}`));

const risks = scored.filter((r) => r.hardFailRisk.length);
if (risks.length) {
  console.log(`\n--- HARD-FAIL RISK (deterministic subset) ---`);
  risks.forEach((r) => console.log(`  ${r.hardFailRisk.join(',')}  ${r.path}`));
}
if (failed.length) {
  console.log(`\n--- Fetch failures ---`);
  failed.forEach((r) => console.log(`  ${r.error}  ${r.url}`));
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({
  generated: new Date().toISOString(), rubric: 'PERFECT-PAGE-RUBRIC v1.0', region: REGION,
  inboundScope: REGION === 'all' ? 'complete' : 'partial',
  benchmark: BENCH, profiles: PROFILES, pages: scored, failed,
}, null, 2));
console.log(`\nWrote ${OUT}`);
console.log(`AI-judged checks still pending per page: ${CHECKS.filter((c) => c[5]).map((c) => c[0]).join(', ')}`);
