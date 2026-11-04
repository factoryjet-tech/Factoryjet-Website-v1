import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';

export const comparisonPath = '/comparisons/netsuite-vs-quickbooks';
export const interactionFiles = [
  'src/components/v2/SiteHeader.tsx',
  'src/components/v2/MegaNav.tsx',
  'src/components/v2/FooterRegionSwitcher.tsx',
  'src/components/MobileStickyCTA.tsx',
  'src/components/HeroInlineForm.tsx',
  'src/components/ContactFormModal.tsx',
  'src/components/lead/LeadEnrichModal.tsx',
];

const stylesheet = /<link\b(?=[^>]*\srel="stylesheet")(?=[^>]*\shref="(\/_next\/static\/css\/[a-z0-9]+\.css)")[^>]*>/gi;
const singleUtility = /^\.((?:[\w-]|\\[^a-fA-F0-9\n\r])+)(?::(?:hover|focus|focus-visible|active|disabled|checked|first-child|last-child|placeholder-shown|:placeholder|:before|:after))*$/;
const activate = "this.media='all';const initial=this.previousElementSibling;if(initial?.hasAttribute('data-fj-comparison-critical'))initial.remove()";

function renderedClasses(html) {
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
  const classes = new Set();
  for (const [, value] of markup.matchAll(/\sclass="([^"]*)"/g)) {
    const decoded = value.replace(/&(amp|quot|lt|gt|#x27|#39);/g, (_, entity) => ({
      amp: '&', quot: '"', lt: '<', gt: '>', '#x27': "'", '#39': "'",
    })[entity]);
    for (const name of decoded.split(/\s+/)) classes.add(name);
  }
  return classes;
}

function reduceUtilities(css, classes, interactionSource, parse) {
  const tree = parse(css);
  tree.walkRules(rule => {
    if (rule.parent.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    const match = rule.selector.match(singleUtility);
    if (!match) return;
    const name = match[1].replace(/\\([^a-fA-F0-9\n\r])/g, '$1');
    if (!classes.has(name) && !interactionSource.includes(name)) rule.remove();
  });
  return tree.toString();
}

export function optimizeComparisonDocument(pathname, html, readCss, parse, interactionSource) {
  const end = html.indexOf('</head>');
  if (pathname !== comparisonPath || end < 0 || html.includes('data-fj-comparison-critical')) return { html, sheets: [] };

  const classes = renderedClasses(html);
  if (!classes.size) return { html, sheets: [] };
  const sheets = [];
  const head = html.slice(0, end).replace(stylesheet, (tag, href) => {
    if (/\s(?:media|onload|integrity)=/.test(tag) || !tag.includes('data-precedence="next"')) return tag;
    const css = readCss(href);
    if (/<\/style|@import/i.test(css)) return tag;

    const utilities = css.startsWith('*,:after,:before{--tw-');
    const initial = utilities ? reduceUtilities(css, classes, interactionSource, parse) : css;
    const fullGzip = gzipSync(css).length;
    if (!initial || (utilities && fullGzip - gzipSync(initial).length < 1024)) return tag;

    // next/font URLs are relative to the original stylesheet, not the document.
    const inline = initial.replace(/url\(\s*(["']?)((?:\.\.?\/)[^\s"')]+)\1\s*\)/gi, (_, _quote, path) => {
      const asset = new URL(path, 'https://factoryjet.com' + href);
      return `url("${asset.pathname}${asset.search}${asset.hash}")`;
    });
    const initialGzip = gzipSync(inline).length;
    if (initialGzip > (utilities ? 13 * 1024 : 4 * 1024)) return tag;

    const fullLink = tag.replace(/\/?\s*>$/, ` media="print" fetchpriority="low" onload="${activate}"/>`);
    sheets.push({ href, fullGzip, initialGzip });
    return `<style data-fj-comparison-critical>${inline}</style>${fullLink}<noscript>${tag}</noscript>`;
  });
  // Avoid growing the response when a future build no longer produces the
  // expected utility bundle or the initial CSS no longer fits the budget.
  if (!sheets.some(({ fullGzip, initialGzip }) => fullGzip - initialGzip >= 1024)) return { html, sheets: [] };
  if (sheets.reduce((sum, sheet) => sum + sheet.initialGzip, 0) > 20 * 1024) return { html, sheets: [] };
  return { html: head + html.slice(end), sheets };
}

async function main() {
  const out = resolve('out');
  if (!existsSync(out)) return;
  const { default: postcss } = await import('postcss');
  const candidates = [`${out}${comparisonPath}.html`, `${out}${comparisonPath}/index.html`].filter(existsSync);
  if (candidates.length !== 1) throw new Error(`Expected one export for ${comparisonPath}`);
  const file = candidates[0];
  const source = readFileSync(file, 'utf8');
  const interactionSource = interactionFiles.map(file => readFileSync(file, 'utf8')).join('\n');
  const result = optimizeComparisonDocument(comparisonPath, source, href => readFileSync(out + href, 'utf8'), postcss.parse, interactionSource);
  if (result.sheets.length) writeFileSync(file, result.html);
  console.log('optimize-comparison-css', JSON.stringify(result.sheets));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
