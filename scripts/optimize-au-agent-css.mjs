/** Keep the first render on the three AU agent pages off the full utility stylesheet. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';
export const routes = [
  '/au/document-intake-ai-agents',
  '/au/sales-order-automation-ai-agents',
  '/au/accounts-receivable-automation',
];

const stylesheet = /<link\b(?=[^>]*\srel="stylesheet")(?=[^>]*\shref="(\/_next\/static\/css\/[a-z0-9]+\.css)")[^>]*>/gi;
const simpleClass = /^\.((?:[\w-]|\\[^a-fA-F0-9\n\r])+)(?::(?:hover|focus|focus-visible|active|disabled|checked|first-child|last-child|placeholder-shown|:placeholder|:before|:after))*$/;
const activate = "const s=this.previousElementSibling;const ready=()=>{if(s?.hasAttribute('data-fj-critical'))s.remove()};const existing=[...document.querySelectorAll('link[rel=stylesheet]')].find(l=>l.href===this.href&&!l.disabled&&(!l.media||matchMedia(l.media).matches));if(existing){if(existing.sheet)ready();else existing.addEventListener('load',ready,{once:true});this.remove()}else{this.onload=ready;this.setAttribute('data-precedence','next');this.rel='stylesheet';this.removeAttribute('as')}";

export const interactionFiles = [
  'src/components/v2/SiteHeader.tsx',
  'src/components/v2/MegaNav.tsx',
  'src/components/v2/UsSiteFooter.tsx',
  'src/components/v2/ModalCTAButton.tsx',
  'src/components/MobileStickyCTA.tsx',
  'src/components/HeroInlineForm.tsx',
  'src/components/ContactFormModal.tsx',
  'src/components/lead/LeadEnrichModal.tsx',
];

function renderedClasses(html) {
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
  const tokens = new Set();
  for (const [, value] of markup.matchAll(/\sclass="([^"]*)"/g)) {
    // Next's static JSX serializer uses double-quoted attributes and these entities.
    const decoded = value.replace(/&(amp|quot|lt|gt|#x27|#39);/g, (_, entity) => ({
      amp: '&', quot: '"', lt: '<', gt: '>', '#x27': "'", '#39': "'",
    })[entity]);
    for (const name of decoded.split(/\s+/)) tokens.add(name);
  }
  return tokens;
}

function initialCss(css, classes, interactiveSource, parse) {
  const utilities = css.startsWith('*,:after,:before{--tw-');
  if (!utilities || /<\/style|@import|url\(\s*["']?(?!["']|\/|data:|https?:|#)/i.test(css)) return null;

  const tree = parse(css);
  tree.walkRules(rule => {
    if (rule.parent.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    const match = rule.selector.match(simpleClass);
    if (!match) return;
    const className = match[1].replace(/\\([^a-fA-F0-9\n\r])/g, '$1');
    if (!classes.has(className) && !interactiveSource.includes(className)) rule.remove();
  });
  const result = tree.toString();
  return result && gzipSync(css).length - gzipSync(result).length >= 1024 ? result : null;
}

export function optimizeDocument(pathname, html, readCss, parse, interactiveSource) {
  if (!routes.includes(pathname) || !html.includes('</head>') || html.includes('data-fj-critical')) {
    return { html, sheets: [] };
  }
  const classes = renderedClasses(html);
  if (!classes.size) return { html, sheets: [] };
  const sheets = [];
  const end = html.indexOf('</head>');
  const head = html.slice(0, end).replace(stylesheet, (tag, href) => {
    if (/\s(?:media|onload)=/.test(tag) || !tag.includes('data-precedence="next"')) return tag;
    const css = readCss(href);
    const critical = initialCss(css, classes, interactiveSource, parse);
    if (!critical) return tag;
    sheets.push({ href, fullGzip: gzipSync(css).length, criticalGzip: gzipSync(critical).length });
    const asyncLink = tag.replace('rel="stylesheet"', 'rel="preload" as="style" fetchpriority="low"')
      .replace(/\sdata-precedence="next"/, '')
      .replace(/\/?\s*>$/, ` onload="${activate}"/>`);
    return `<style data-fj-critical>${critical}</style>${asyncLink}<noscript>${tag}</noscript>`;
  });
  return { html: head + html.slice(end), sheets };
}

async function main() {
  const out = resolve('out');
  if (!existsSync(out)) return;
  const { default: postcss } = await import('postcss');
  const interactiveSource = interactionFiles.map(file => readFileSync(file, 'utf8')).join('\n');
  const previewComparison = process.env.CF_PAGES_BRANCH === 'visual/batch-10-shared-css';
  for (const route of routes) {
    const files = [`${out}${route}.html`, `${out}${route}/index.html`].filter(existsSync);
    if (files.length !== 1) throw new Error(`Expected one exported HTML file for ${route}`);
    const file = files[0];
    const source = readFileSync(file, 'utf8');
    const result = optimizeDocument(route, source, href => readFileSync(out + href, 'utf8'), postcss.parse, interactiveSource);
    // The immutable comparison build serves both versions with identical assets.
    if (previewComparison) {
      const control = `${out}/au/__fj-css-reference/${route.split("/").at(-1)}.html`;
      mkdirSync(dirname(control), { recursive: true });
      writeFileSync(control, source);
    }
    if (result.sheets.length) writeFileSync(file, result.html);
    console.log('optimize-au-loading', route, JSON.stringify(result.sheets));
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
