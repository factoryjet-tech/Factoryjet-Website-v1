"""
Brand reference audit (Patch #5).

Visits 20 reference sites and captures 5 pages each (homepage, service, pricing,
feature, blog) with full-page screenshots and computed-CSS token extraction.
Outputs feed white-background factoryjet.DESIGN.md authoring.

Run: cd pipeline/scripts && .venv/bin/python brand_audit.py
"""

import asyncio
import json
import re
import sys
import traceback
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin, urlparse

from bs4 import BeautifulSoup
from playwright.async_api import async_playwright, Browser, BrowserContext, Page


# ---- Constants ----------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
SITES_FILE = SCRIPT_DIR / "sites.json"
OUTPUT_DIR = SCRIPT_DIR.parent / "brand-references"
SUMMARY_FILE = OUTPUT_DIR / "_audit-run.json"

CATEGORIES = ["homepage", "service", "pricing", "feature", "blog"]
INTER_PAGE_DELAY_SEC = 1.5
INTER_SITE_DELAY_SEC = 3.0
NETWORKIDLE_TIMEOUT_MS = 45_000
DOMCONTENTLOADED_TIMEOUT_MS = 30_000
POST_LOAD_STABILIZE_SEC = 2.5

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

DISCOVERY_KEYWORDS = {
    "service":  ["services", "service", "products", "product", "what we do", "solutions", "platform", "features", "feature", "capabilities", "offerings"],
    "pricing":  ["pricing", "plans", "cost", "price"],
    "feature":  ["case study", "case studies", "customers", "showcase", "examples", "work", "portfolio", "stories", "case-studies", "our-work"],
    "blog":     ["blog", "articles", "insights", "resources", "news", "writing", "journal"],
}

COOKIE_SUPPRESS_CSS = """
[id*="cookie" i],
[class*="cookie" i],
[id*="consent" i],
[class*="consent" i],
[id*="gdpr" i],
[class*="gdpr" i],
[aria-label*="cookie" i],
[aria-label*="consent" i],
[role="dialog"][class*="cookie" i],
.cky-consent-container,
#onetrust-banner-sdk,
#CybotCookiebotDialog {
  display: none !important;
  visibility: hidden !important;
}
html { overflow: auto !important; }
body { overflow: auto !important; }
"""

EXTRACT_JS = r"""
() => {
    const all = document.querySelectorAll('*');
    const data = {
        colors: { background: [], text: [], border: [] },
        fontFamilies: [],
        fontSizes: [],
        fontWeights: [],
        lineHeights: [],
        letterSpacings: [],
        radii: [],
        shadows: [],
        spacings: { padding: [], margin: [], gap: [] },
        cssVariables: {},
        gradients: [],
    };

    const rootStyles = getComputedStyle(document.documentElement);
    for (let i = 0; i < rootStyles.length; i++) {
        const prop = rootStyles[i];
        if (prop.startsWith('--')) {
            data.cssVariables[prop] = rootStyles.getPropertyValue(prop).trim();
        }
    }

    const cap = 4000;
    const elements = Array.from(all).slice(0, cap);

    for (const el of elements) {
        const cs = getComputedStyle(el);

        if (cs.color && cs.color !== 'rgba(0, 0, 0, 0)') data.colors.text.push(cs.color);
        if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') {
            data.colors.background.push(cs.backgroundColor);
        }
        if (cs.borderColor && cs.borderTopWidth !== '0px') data.colors.border.push(cs.borderColor);

        if (cs.backgroundImage && cs.backgroundImage.includes('gradient')) {
            data.gradients.push(cs.backgroundImage);
        }

        if (cs.fontFamily) data.fontFamilies.push(cs.fontFamily);
        if (cs.fontSize) data.fontSizes.push(cs.fontSize);
        if (cs.fontWeight) data.fontWeights.push(cs.fontWeight);
        if (cs.lineHeight && cs.lineHeight !== 'normal') data.lineHeights.push(cs.lineHeight);
        if (cs.letterSpacing && cs.letterSpacing !== 'normal') data.letterSpacings.push(cs.letterSpacing);

        ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'].forEach(k => {
            if (cs[k] && cs[k] !== '0px') data.spacings.padding.push(cs[k]);
        });
        ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach(k => {
            if (cs[k] && cs[k] !== '0px' && cs[k] !== 'auto') data.spacings.margin.push(cs[k]);
        });
        if (cs.gap && cs.gap !== 'normal' && cs.gap !== '0px') data.spacings.gap.push(cs.gap);

        if (cs.borderRadius && cs.borderRadius !== '0px') data.radii.push(cs.borderRadius);

        if (cs.boxShadow && cs.boxShadow !== 'none') data.shadows.push(cs.boxShadow);
    }

    return data;
}
"""


# ---- Token distillation helpers ----------------------------------------

def rgb_to_hex(rgb: str) -> str | None:
    m = re.match(r'rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)', rgb)
    if not m:
        return None
    r, g, b = int(m.group(1)), int(m.group(2)), int(m.group(3))
    a = float(m.group(4)) if m.group(4) else 1.0
    if a < 0.5:
        return None
    return f'#{r:02X}{g:02X}{b:02X}'


def frequency_distill(values: list, top_n: int = 8) -> list[tuple[str, int]]:
    return Counter(values).most_common(top_n)


def hex_palette(rgb_list: list[str], top_n: int = 8) -> list[dict]:
    hexes = [h for h in (rgb_to_hex(v) for v in rgb_list) if h]
    return [{'hex': h, 'count': c} for h, c in frequency_distill(hexes, top_n)]


def parse_px(s: str) -> int | None:
    m = re.match(r'(\d+(?:\.\d+)?)px', s)
    return int(round(float(m.group(1)))) if m else None


def normalize_spacing(values: list[str]) -> list[int]:
    nums = sorted({n for n in (parse_px(v) for v in values) if n is not None and 0 < n <= 200})
    snapped: list[int] = []
    for n in nums:
        if any(abs(n - s) <= 2 for s in snapped):
            continue
        snapped.append(n)
    return snapped[:12]


def distill_tokens(raw: dict) -> dict:
    """Compress the raw EXTRACT_JS dump into a smaller, signal-rich token set."""
    return {
        "colors": {
            "background": hex_palette(raw["colors"]["background"]),
            "text":       hex_palette(raw["colors"]["text"]),
            "border":     hex_palette(raw["colors"]["border"]),
        },
        "typography": {
            "font_families":   [{"value": v, "count": c} for v, c in frequency_distill(raw["fontFamilies"], 6)],
            "font_sizes_px":   normalize_spacing(raw["fontSizes"]),
            "font_weights":    [{"value": v, "count": c} for v, c in frequency_distill(raw["fontWeights"], 6)],
            "line_heights":    [{"value": v, "count": c} for v, c in frequency_distill(raw["lineHeights"], 6)],
            "letter_spacings": [{"value": v, "count": c} for v, c in frequency_distill(raw["letterSpacings"], 6)],
        },
        "spacing": {
            "padding_px": normalize_spacing(raw["spacings"]["padding"]),
            "margin_px":  normalize_spacing(raw["spacings"]["margin"]),
            "gap_px":     normalize_spacing(raw["spacings"]["gap"]),
        },
        "radii":            [{"value": v, "count": c} for v, c in frequency_distill(raw["radii"], 8)],
        "shadows":          [{"value": v, "count": c} for v, c in frequency_distill(raw["shadows"], 6)],
        "gradients_used":   len(raw["gradients"]) > 0,
        "gradient_count":   len(raw["gradients"]),
        "css_variables":    raw["cssVariables"],
    }


# ---- URL discovery -----------------------------------------------------

def _strip_www(netloc: str) -> str:
    return netloc[4:] if netloc.startswith("www.") else netloc


def same_domain(a: str, b: str) -> bool:
    try:
        return _strip_www(urlparse(a).netloc.lower()) == _strip_www(urlparse(b).netloc.lower())
    except Exception:
        return False


def score_link(text: str, href: str, keywords: list[str]) -> int:
    haystack = (text + " " + href).lower()
    return sum(1 for kw in keywords if kw in haystack)


def discover_inner_urls(homepage_html: str, homepage_url: str) -> dict[str, str | None]:
    """Parse <nav>, <header>, <footer>, first <main> for category links."""
    soup = BeautifulSoup(homepage_html, "html.parser")
    candidates: list = []
    for region in soup.find_all(["nav", "header", "footer"]):
        candidates.extend(region.find_all("a", href=True))
    main = soup.find("main")
    if main:
        candidates.extend(main.find_all("a", href=True))

    # Deduplicate by href
    seen: set[str] = set()
    unique = []
    for a in candidates:
        href = a.get("href", "").strip()
        if not href or href in seen or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        seen.add(href)
        unique.append(a)

    discovered: dict[str, str | None] = {}
    for category in ("service", "pricing", "feature", "blog"):
        keywords = DISCOVERY_KEYWORDS[category]
        best: tuple[int, str] | None = None
        for a in unique:
            text = a.get_text(strip=True) or ""
            href = a["href"]
            absolute = urljoin(homepage_url, href)
            if not same_domain(absolute, homepage_url):
                continue
            score = score_link(text, href, keywords)
            if score < 1:
                continue
            if best is None or score > best[0]:
                best = (score, absolute)
        discovered[category] = best[1] if best else None
    return discovered


# ---- Page capture ------------------------------------------------------

async def capture_page(
    context: BrowserContext,
    url: str,
    screenshot_path: Path,
) -> tuple[str, dict]:
    """Load a URL, suppress banners, take screenshot, extract tokens. Returns (final_url, raw_tokens)."""
    page: Page = await context.new_page()
    try:
        try:
            await page.goto(url, wait_until="networkidle", timeout=NETWORKIDLE_TIMEOUT_MS)
        except Exception:
            # Fallback: many heavy sites never reach networkidle. Settle for DOM.
            await page.goto(url, wait_until="domcontentloaded", timeout=DOMCONTENTLOADED_TIMEOUT_MS)

        await asyncio.sleep(POST_LOAD_STABILIZE_SEC)

        try:
            await page.add_style_tag(content=COOKIE_SUPPRESS_CSS)
        except Exception:
            # Style injection failure is non-fatal — continue with screenshot.
            pass

        screenshot_path.parent.mkdir(parents=True, exist_ok=True)
        await page.screenshot(path=str(screenshot_path), full_page=True)

        raw = await page.evaluate(EXTRACT_JS)
        final_url = page.url
        return final_url, raw
    finally:
        await page.close()


# ---- Main per-site loop ------------------------------------------------

async def fetch_homepage_html(context: BrowserContext, url: str) -> str | None:
    """Get raw HTML of a homepage for discovery use. Returns None on failure."""
    page = await context.new_page()
    try:
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=DOMCONTENTLOADED_TIMEOUT_MS)
        except Exception:
            return None
        await asyncio.sleep(1.0)
        return await page.content()
    finally:
        await page.close()


async def process_site(browser: Browser, site: dict) -> dict:
    """Capture all 5 categories for one site. Returns per-site result dict."""
    slug = site["slug"]
    homepage = site["homepage"]
    site_dir = OUTPUT_DIR / slug
    screenshots_dir = site_dir / "screenshots"
    screenshots_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n=== {slug} ({site['category']}) ===")
    print(f"    homepage: {homepage}")

    context = await browser.new_context(
        viewport={'width': 1440, 'height': 900},
        color_scheme='light',
        user_agent=USER_AGENT,
    )

    pages_out: dict[str, dict] = {}
    missing: list[str] = []
    urls_visited: dict[str, str] = {}

    try:
        # Step 1 — capture homepage and grab its HTML for discovery
        try:
            final_url, raw_tokens = await capture_page(
                context, homepage, screenshots_dir / "homepage.png"
            )
            pages_out["homepage"] = {
                "url": final_url,
                "screenshot": "screenshots/homepage.png",
                "tokens": distill_tokens(raw_tokens),
            }
            urls_visited["homepage"] = final_url
            print(f"    [OK]  homepage")
        except Exception as e:
            print(f"    [ERR] homepage: {e}")
            missing.append("homepage")

        await asyncio.sleep(INTER_PAGE_DELAY_SEC)

        # Step 2 — discover inner URLs from homepage HTML (best effort)
        homepage_html = await fetch_homepage_html(context, homepage)
        discovered: dict[str, str | None] = {"service": None, "pricing": None, "feature": None, "blog": None}
        if homepage_html:
            try:
                discovered = discover_inner_urls(homepage_html, homepage)
            except Exception as e:
                print(f"    [WARN] discovery failed: {e}")

        # Step 3 — process the four inner categories
        for category in ("service", "pricing", "feature", "blog"):
            override = site.get("urls", {}).get(category)
            target = override if override else discovered.get(category)
            if not target:
                print(f"    [SKIP] {category}: no URL (override null, discovery empty)")
                missing.append(category)
                continue
            try:
                final_url, raw_tokens = await capture_page(
                    context, target, screenshots_dir / f"{category}.png"
                )
                pages_out[category] = {
                    "url": final_url,
                    "screenshot": f"screenshots/{category}.png",
                    "tokens": distill_tokens(raw_tokens),
                }
                urls_visited[category] = final_url
                print(f"    [OK]  {category}: {target}")
            except Exception as e:
                print(f"    [ERR] {category} ({target}): {e}")
                missing.append(category)
            await asyncio.sleep(INTER_PAGE_DELAY_SEC)
    finally:
        await context.close()

    # Step 4 — write per-site extracted-tokens.json
    site_output = {
        "slug": slug,
        "category": site["category"],
        "homepage": homepage,
        "captured_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "pages": pages_out,
        "missing_categories": missing,
    }
    site_dir.mkdir(parents=True, exist_ok=True)
    (site_dir / "extracted-tokens.json").write_text(
        json.dumps(site_output, indent=2, ensure_ascii=False)
    )

    return {
        "slug": slug,
        "captured": list(pages_out.keys()),
        "missing": missing,
    }


# ---- Entrypoint --------------------------------------------------------

async def main() -> int:
    if not SITES_FILE.exists():
        print(f"ERROR: {SITES_FILE} not found", file=sys.stderr)
        return 1

    sites_data = json.loads(SITES_FILE.read_text())
    sites = sites_data.get("sites", [])
    if not sites:
        print("ERROR: sites.json has no sites", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    started_at = datetime.now(timezone.utc)
    print(f"Brand audit started: {started_at.isoformat()}")
    print(f"Sites to process: {len(sites)}")

    per_site_results: list[dict] = []

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        try:
            for idx, site in enumerate(sites, start=1):
                print(f"\n[{idx}/{len(sites)}] processing {site['slug']}")
                try:
                    result = await process_site(browser, site)
                except Exception as e:
                    print(f"    [FATAL] site-level failure: {e}")
                    traceback.print_exc()
                    result = {
                        "slug": site["slug"],
                        "captured": [],
                        "missing": list(CATEGORIES),
                    }
                per_site_results.append(result)
                if idx < len(sites):
                    await asyncio.sleep(INTER_SITE_DELAY_SEC)
        finally:
            await browser.close()

    completed_at = datetime.now(timezone.utc)

    # Summary aggregates
    total_captures = sum(len(r["captured"]) for r in per_site_results)
    sites_with_all_5 = sum(1 for r in per_site_results if len(r["captured"]) == 5)
    sites_failed = sum(1 for r in per_site_results if len(r["captured"]) == 0)
    sites_partial = len(per_site_results) - sites_with_all_5 - sites_failed

    missing_by_category: Counter = Counter()
    for r in per_site_results:
        for cat in r["missing"]:
            missing_by_category[cat] += 1

    summary = {
        "audit_started_at":           started_at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "audit_completed_at":         completed_at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "total_sites":                len(sites),
        "sites_with_all_5_captures":  sites_with_all_5,
        "sites_with_partial_captures": sites_partial,
        "sites_failed_entirely":      sites_failed,
        "total_captures":             total_captures,
        "missing_by_category":        dict(missing_by_category),
        "per_site":                   per_site_results,
    }
    SUMMARY_FILE.write_text(json.dumps(summary, indent=2, ensure_ascii=False))

    # Human-readable summary
    print("\n" + "=" * 60)
    print(f"Brand audit complete: {completed_at.isoformat()}")
    print(f"Duration: {completed_at - started_at}")
    print(f"Total captures: {total_captures} / {len(sites) * 5}")
    print(f"Sites with all 5 captures: {sites_with_all_5}")
    print(f"Sites with partial captures: {sites_partial}")
    print(f"Sites failed entirely: {sites_failed}")
    print("\nMissing-by-category:")
    for cat in ("homepage", "service", "pricing", "feature", "blog"):
        print(f"  {cat:10s}: {missing_by_category.get(cat, 0)}")
    print("\nPer-site:")
    print(f"  {'slug':30s} {'captured':3s}  missing")
    for r in per_site_results:
        captured_n = len(r["captured"])
        miss = ",".join(r["missing"]) if r["missing"] else "—"
        print(f"  {r['slug']:30s} {captured_n}/5  {miss}")
    print(f"\nSummary written to {SUMMARY_FILE}")

    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
