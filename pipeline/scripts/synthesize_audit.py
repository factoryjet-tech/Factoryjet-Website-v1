"""
Cross-site synthesis of the 20-site brand audit (Patch #5b).

Reads pipeline/brand-references/{slug}/extracted-tokens.json files and
emits two artifacts:

  1. pipeline/brand-references/_synthesis.json — structured consensus tables
     (colors, typography, spacing, radii, shadows, gradient avoidance, CSS-var
     surfaces). Sortable, machine-readable, paste-able to chat.

  2. pipeline/brand-references/_synthesis.md — short markdown summary highlighting
     consensus + outliers + qualitative observations the JSON can't carry.

No DESIGN.md authoring here — that's the next step, judgment work done in chat.
"""

import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent.parent / "brand-references"
SUMMARY = ROOT / "_audit-run.json"
OUT_JSON = ROOT / "_synthesis.json"
OUT_MD = ROOT / "_synthesis.md"

ANCHORS = {"stripe-com", "linear-app", "vercel-com", "resend-com", "mintlify-com"}

# ---- Helpers ----------------------------------------------------------

def hex_lightness(hex_str: str) -> float:
    """Approximate lightness (0..1) for a #RRGGBB string."""
    if not re.match(r'#[0-9A-Fa-f]{6}$', hex_str):
        return 0.5
    r = int(hex_str[1:3], 16) / 255
    g = int(hex_str[3:5], 16) / 255
    b = int(hex_str[5:7], 16) / 255
    return 0.299 * r + 0.587 * g + 0.114 * b


def classify_color(hex_str: str) -> str:
    """Classify a hex into near-white / light / mid / dark / near-black."""
    L = hex_lightness(hex_str)
    if L >= 0.97: return "near-white"
    if L >= 0.85: return "light"
    if L >= 0.40: return "mid"
    if L >= 0.15: return "dark"
    return "near-black"


def normalize_family(family_str: str) -> str:
    """Strip quotes, take first family in stack, lowercase."""
    if not family_str: return ""
    first = family_str.split(",")[0].strip().strip('"').strip("'").lower()
    return first


# ---- Load ------------------------------------------------------------

def load_sites():
    sites = []
    for site_dir in sorted(ROOT.iterdir()):
        if not site_dir.is_dir(): continue
        tokens_file = site_dir / "extracted-tokens.json"
        if not tokens_file.exists(): continue
        sites.append(json.loads(tokens_file.read_text()))
    return sites


# ---- Aggregations ----------------------------------------------------

def aggregate_colors(sites: list) -> dict:
    """Cross-site consensus on background, text, border palettes."""
    bg_all, text_all, border_all = Counter(), Counter(), Counter()
    bg_by_site = defaultdict(set)  # hex -> set of slugs that use it
    text_by_site = defaultdict(set)

    for s in sites:
        slug = s["slug"]
        site_bgs, site_texts = set(), set()
        for page in s["pages"].values():
            for c in page["tokens"]["colors"]["background"]:
                bg_all[c["hex"]] += c["count"]
                site_bgs.add(c["hex"])
            for c in page["tokens"]["colors"]["text"]:
                text_all[c["hex"]] += c["count"]
                site_texts.add(c["hex"])
            for c in page["tokens"]["colors"]["border"]:
                border_all[c["hex"]] += c["count"]
        for h in site_bgs: bg_by_site[h].add(slug)
        for h in site_texts: text_by_site[h].add(slug)

    def shape(counter, by_site_map, top=15):
        out = []
        for h, raw_count in counter.most_common(top):
            sites_using = sorted(by_site_map.get(h, []))
            out.append({
                "hex": h,
                "lightness_class": classify_color(h),
                "raw_count": raw_count,
                "sites_using_count": len(sites_using),
                "sites_using": sites_using,
            })
        return out

    return {
        "background_consensus": shape(bg_all, bg_by_site, 15),
        "text_consensus": shape(text_all, text_by_site, 12),
        "border_consensus": shape(border_all, defaultdict(set), 10),
    }


def aggregate_typography(sites: list) -> dict:
    """Cross-site font families, sizes, weights."""
    families = Counter()
    family_by_site = defaultdict(set)
    sizes = Counter()
    weights = Counter()

    for s in sites:
        slug = s["slug"]
        site_families = set()
        for page in s["pages"].values():
            for f in page["tokens"]["typography"]["font_families"]:
                fam = normalize_family(f["value"])
                if not fam or fam in ("inherit", "initial"): continue
                families[fam] += f["count"]
                site_families.add(fam)
            for sz in page["tokens"]["typography"]["font_sizes_px"]:
                sizes[sz] += 1
            for w in page["tokens"]["typography"]["font_weights"]:
                weights[w["value"]] += w["count"]
        for fam in site_families:
            family_by_site[fam].add(slug)

    return {
        "font_family_consensus": [
            {
                "family": fam,
                "raw_count": ct,
                "sites_using_count": len(family_by_site[fam]),
                "sites_using": sorted(family_by_site[fam]),
            }
            for fam, ct in families.most_common(15)
        ],
        "font_size_scale_px": [
            {"px": px, "site_page_occurrences": ct}
            for px, ct in sorted(sizes.items())
        ],
        "font_weight_consensus": [
            {"weight": w, "raw_count": ct}
            for w, ct in weights.most_common(8)
        ],
    }


def aggregate_spacing(sites: list) -> dict:
    """Cross-site spacing scale (padding + gap unioned), radii, shadow patterns."""
    spacing_vals = Counter()
    radii_vals = Counter()
    shadow_vals = Counter()

    for s in sites:
        for page in s["pages"].values():
            for px in page["tokens"]["spacing"]["padding_px"]: spacing_vals[px] += 1
            for px in page["tokens"]["spacing"]["gap_px"]: spacing_vals[px] += 1
            for r in page["tokens"]["radii"]:
                # radii values are objects {value, count}; value is "Npx Npx Npx Npx" or "Npx"
                v = r["value"]
                m = re.match(r'(\d+(?:\.\d+)?)px', v)
                if m: radii_vals[int(round(float(m.group(1))))] += r["count"]
            for sh in page["tokens"]["shadows"]:
                shadow_vals[sh["value"]] += sh["count"]

    return {
        "spacing_scale_px": [
            {"px": px, "site_page_occurrences": ct}
            for px, ct in sorted(spacing_vals.items())
        ],
        "radius_scale_px": [
            {"px": px, "raw_count": ct}
            for px, ct in sorted(radii_vals.items())
        ],
        "top_shadows": [
            {"shadow": sh, "raw_count": ct}
            for sh, ct in shadow_vals.most_common(10)
        ],
    }


def aggregate_gradients(sites: list) -> dict:
    """How many sites use gradients, how aggressively."""
    per_site = []
    for s in sites:
        page_count = len(s["pages"])
        if page_count == 0: continue
        total_gradients = sum(
            page["tokens"].get("gradient_count", 0)
            for page in s["pages"].values()
        )
        any_used = any(
            page["tokens"].get("gradients_used", False)
            for page in s["pages"].values()
        )
        per_site.append({
            "slug": s["slug"],
            "category": s["category"],
            "pages_captured": page_count,
            "total_gradient_instances": total_gradients,
            "gradients_present": any_used,
            "avg_gradients_per_page": round(total_gradients / page_count, 1),
        })
    sites_with_gradients = sum(1 for p in per_site if p["gradients_present"])
    sites_without = sum(1 for p in per_site if not p["gradients_present"])
    return {
        "sites_with_gradients": sites_with_gradients,
        "sites_without_gradients": sites_without,
        "per_site": sorted(per_site, key=lambda x: x["total_gradient_instances"], reverse=True),
    }


def aggregate_css_variables(sites: list) -> dict:
    """Sites that publish design-system CSS custom properties on :root."""
    out = []
    for s in sites:
        # Get CSS vars from the homepage page (first capture)
        homepage = s["pages"].get("homepage")
        if not homepage: continue
        css_vars = homepage["tokens"].get("css_variables", {})
        out.append({
            "slug": s["slug"],
            "category": s["category"],
            "css_var_count": len(css_vars),
            "publishes_design_system": len(css_vars) >= 20,
        })
    return {
        "by_site": sorted(out, key=lambda x: x["css_var_count"], reverse=True),
        "sites_with_design_system": sum(1 for s in out if s["publishes_design_system"]),
    }


# ---- Markdown summary ------------------------------------------------

def write_markdown_summary(sites, colors, typography, spacing, gradients, css_vars):
    lines = []
    lines.append("# Brand audit synthesis — cross-site consensus")
    lines.append("")
    lines.append(f"_Generated: {datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}_")
    lines.append(f"_Sites analyzed: {len(sites)} ({len(ANCHORS)} anchors + {len(sites) - len(ANCHORS)} taste)_")
    lines.append("")

    # Backgrounds
    lines.append("## Background palette consensus")
    lines.append("")
    lines.append("| hex | lightness | sites | top users |")
    lines.append("|---|---|---|---|")
    for c in colors["background_consensus"][:10]:
        sites_str = ", ".join(c["sites_using"][:4]) + ("…" if len(c["sites_using"]) > 4 else "")
        lines.append(f"| `{c['hex']}` | {c['lightness_class']} | {c['sites_using_count']}/{len(sites)} | {sites_str} |")
    lines.append("")

    # Text
    lines.append("## Text color consensus")
    lines.append("")
    lines.append("| hex | lightness | sites | top users |")
    lines.append("|---|---|---|---|")
    for c in colors["text_consensus"][:8]:
        sites_str = ", ".join(c["sites_using"][:4]) + ("…" if len(c["sites_using"]) > 4 else "")
        lines.append(f"| `{c['hex']}` | {c['lightness_class']} | {c['sites_using_count']}/{len(sites)} | {sites_str} |")
    lines.append("")

    # Fonts
    lines.append("## Font family consensus")
    lines.append("")
    lines.append("| family | sites | raw_count |")
    lines.append("|---|---|---|")
    for f in typography["font_family_consensus"][:10]:
        lines.append(f"| `{f['family']}` | {f['sites_using_count']}/{len(sites)} | {f['raw_count']} |")
    lines.append("")

    # Type scale
    lines.append("## Font size scale (consensus across sites)")
    lines.append("")
    sizes_str = ", ".join(
        f"{s['px']}px" for s in typography["font_size_scale_px"]
        if s["site_page_occurrences"] >= 3
    )
    lines.append(f"Sizes appearing in 3+ site-pages: {sizes_str}")
    lines.append("")

    # Spacing
    lines.append("## Spacing scale (px — consensus)")
    lines.append("")
    spacing_str = ", ".join(
        f"{s['px']}" for s in spacing["spacing_scale_px"]
        if s["site_page_occurrences"] >= 5
    )
    lines.append(f"Padding/gap values appearing in 5+ site-pages: {spacing_str}")
    lines.append("")

    # Radii
    lines.append("## Border-radius scale")
    lines.append("")
    radii_str = ", ".join(
        f"{r['px']}px ({r['raw_count']})" for r in spacing["radius_scale_px"][:10]
    )
    lines.append(f"Top radii: {radii_str}")
    lines.append("")

    # Gradients
    lines.append("## Gradient usage")
    lines.append("")
    lines.append(f"- Sites using gradients (any page): **{gradients['sites_with_gradients']}/{len(sites)}**")
    lines.append(f"- Sites with zero gradients: **{gradients['sites_without_gradients']}/{len(sites)}**")
    lines.append("")
    lines.append("### Top gradient users")
    lines.append("")
    lines.append("| site | category | total gradient instances | avg per page |")
    lines.append("|---|---|---|---|")
    for p in gradients["per_site"][:6]:
        lines.append(f"| {p['slug']} | {p['category']} | {p['total_gradient_instances']} | {p['avg_gradients_per_page']} |")
    lines.append("")
    lines.append("### Zero-gradient sites (anti-slop reference set)")
    lines.append("")
    zero = [p["slug"] for p in gradients["per_site"] if p["total_gradient_instances"] == 0]
    lines.append(", ".join(zero) if zero else "_(none)_")
    lines.append("")

    # CSS Variables
    lines.append("## CSS variable surfaces (proxy for published design systems)")
    lines.append("")
    lines.append("| site | category | css var count | design system |")
    lines.append("|---|---|---|---|")
    for s in css_vars["by_site"][:10]:
        ds = "✓" if s["publishes_design_system"] else ""
        lines.append(f"| {s['slug']} | {s['category']} | {s['css_var_count']} | {ds} |")
    lines.append("")

    # Top shadows
    lines.append("## Most-used shadow patterns")
    lines.append("")
    for sh in spacing["top_shadows"][:5]:
        lines.append(f"- `{sh['shadow']}` (×{sh['raw_count']})")
    lines.append("")

    OUT_MD.write_text("\n".join(lines))
    return len(lines)


# ---- Main ------------------------------------------------------------

def main():
    if not SUMMARY.exists():
        print(f"ERROR: {SUMMARY} not found"); return 1

    sites = load_sites()
    print(f"Loaded {len(sites)} sites")

    colors = aggregate_colors(sites)
    typography = aggregate_typography(sites)
    spacing = aggregate_spacing(sites)
    gradients = aggregate_gradients(sites)
    css_vars = aggregate_css_variables(sites)

    synthesis = {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "sites_analyzed": len(sites),
        "anchor_sites": sorted(s["slug"] for s in sites if s["slug"] in ANCHORS),
        "taste_sites": sorted(s["slug"] for s in sites if s["slug"] not in ANCHORS),
        "colors": colors,
        "typography": typography,
        "spacing": spacing,
        "gradients": gradients,
        "css_variables": css_vars,
    }

    OUT_JSON.write_text(json.dumps(synthesis, indent=2, ensure_ascii=False))
    md_lines = write_markdown_summary(sites, colors, typography, spacing, gradients, css_vars)

    print(f"Wrote {OUT_JSON} ({OUT_JSON.stat().st_size:,} bytes)")
    print(f"Wrote {OUT_MD} ({OUT_MD.stat().st_size:,} bytes, {md_lines} lines)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
