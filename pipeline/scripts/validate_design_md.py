"""
Structural validator for factoryjet.DESIGN.md.

Substitutes for `npx @google/design.md lint` when the upstream tool is broken
(as of this writing it crashes with "raw.match is not a function"). Covers the
same surface area: YAML structure, required keys, token-reference resolution,
color-value sanity, WCAG AA contrast on used text/background pairs, required
markdown body sections.

Usage: .venv/bin/python pipeline/scripts/validate_design_md.py [path]
       (defaults to factoryjet.DESIGN.md at repo root)
"""

import re
import subprocess
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Installing pyyaml into the active venv...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--quiet", "pyyaml"])
    import yaml


REQUIRED_TOP_LEVEL_KEYS = ["name", "description", "version", "colors", "typography", "rounded", "spacing", "components"]
REQUIRED_BODY_SECTIONS = [
    "## Overview", "## Colors", "## Typography", "## Layout",
    "## Motion", "## Imagery", "## Do's and Don'ts", "## Agent Prompt Guide",
]


def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip("#")
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))


def rel_luminance(rgb):
    def c(v):
        v = v / 255.0
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = rgb
    return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b)


def contrast_ratio(hex1, hex2):
    L1 = rel_luminance(hex_to_rgb(hex1))
    L2 = rel_luminance(hex_to_rgb(hex2))
    lighter, darker = max(L1, L2), min(L1, L2)
    return (lighter + 0.05) / (darker + 0.05)


def walk_strings(obj, path=""):
    if isinstance(obj, str):
        yield path, obj
    elif isinstance(obj, dict):
        for k, v in obj.items():
            yield from walk_strings(v, f"{path}.{k}" if path else k)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from walk_strings(v, f"{path}[{i}]")


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("factoryjet.DESIGN.md")
    if not path.exists():
        print(f"FAIL: {path} not found")
        return 1

    content = path.read_text()
    parts = content.split("---", 2)
    if len(parts) < 3:
        print("FAIL: no YAML frontmatter (expected --- delimited)")
        return 1
    frontmatter_text, body = parts[1], parts[2]

    print(f"Validating: {path} ({len(content):,} bytes, {content.count(chr(10))} lines)")
    print()

    # Check 1 — YAML parses
    try:
        fm = yaml.safe_load(frontmatter_text)
    except yaml.YAMLError as e:
        print(f"FAIL: YAML parse error: {e}")
        return 1
    print("✓ YAML frontmatter parses cleanly")

    # Check 2 — Required top-level keys present
    missing = [k for k in REQUIRED_TOP_LEVEL_KEYS if k not in fm]
    if missing:
        print(f"FAIL: missing required top-level keys: {missing}")
        return 1
    print(f"✓ All {len(REQUIRED_TOP_LEVEL_KEYS)} required top-level keys present")

    # Check 3 — Token references resolve
    token_ref_pattern = re.compile(r"\{([\w.-]+)\}")
    orphans = []
    total_refs = 0
    for ref_path, value in walk_strings(fm):
        for ref in token_ref_pattern.findall(value):
            total_refs += 1
            cursor = fm
            for segment in ref.split("."):
                if isinstance(cursor, dict) and segment in cursor:
                    cursor = cursor[segment]
                else:
                    orphans.append((ref_path, ref))
                    break
    if orphans:
        print(f"FAIL: {len(orphans)} orphan token references:")
        for ref_path, ref in orphans:
            print(f"    {{{ref}}} at {ref_path}")
        return 1
    print(f"✓ All {total_refs} token references resolve")

    # Check 4 — Color values are valid hex or rgba
    hex_pattern = re.compile(r"^#[0-9A-Fa-f]{6}$")
    rgba_pattern = re.compile(r"^rgba?\([\d.,\s]+\)$")
    for cname, cval in fm["colors"].items():
        if not (hex_pattern.match(cval) or rgba_pattern.match(cval)):
            print(f"FAIL: invalid color format for colors.{cname}: {cval!r}")
            return 1
    print(f"✓ All {len(fm['colors'])} color values are valid hex or rgba")

    # Check 5 — WCAG AA contrast on every text/background pairing the components use
    c = fm["colors"]
    # Pairs the components actually use. ink-disabled is intentionally NOT
    # checked — it is reserved for disabled controls and placeholder text per
    # WCAG 1.4.3 ("Inactive user interface components" carry no contrast
    # requirement). Any use of ink-disabled for content text violates the
    # token contract documented in factoryjet.DESIGN.md.
    critical_pairs = [
        ("ink on surface",                  c["ink"],         c["surface"],       4.5),
        ("ink on surface-alt",              c["ink"],         c["surface-alt"],   4.5),
        ("ink on surface-2",                c["ink"],         c["surface-2"],     4.5),
        ("ink-muted on surface",            c["ink-muted"],   c["surface"],       4.5),
        ("ink-muted on surface-alt",        c["ink-muted"],   c["surface-alt"],   4.5),
        ("ink-muted on surface-2",          c["ink-muted"],   c["surface-2"],     4.5),
        ("primary-on on primary",           c["primary-on"],  c["primary"],       4.5),
        ("primary-on on primary-hover",     c["primary-on"],  c["primary-hover"], 4.5),
        ("primary on surface (links)",      c["primary"],     c["surface"],       4.5),
        ("ink-subtle on surface (large)",   c["ink-subtle"],  c["surface"],       3.0),
        ("ink-subtle on surface-alt (large)", c["ink-subtle"], c["surface-alt"],  3.0),
    ]
    failures = []
    print()
    print("WCAG AA contrast on used text/background pairs:")
    for label, fg, bg, required in critical_pairs:
        ratio = contrast_ratio(fg, bg)
        status = "✓" if ratio >= required else "✗"
        print(f"  {status} {label:42s} {ratio:5.2f}  (need ≥{required})")
        if ratio < required:
            failures.append(label)
    if failures:
        print()
        print(f"FAIL: {len(failures)} contrast pairings below WCAG AA:")
        for f in failures:
            print(f"    {f}")
        return 1

    # Check 6 — Required markdown body sections present
    print()
    missing_sections = [s for s in REQUIRED_BODY_SECTIONS if s not in body]
    if missing_sections:
        print(f"FAIL: missing required body sections: {missing_sections}")
        return 1
    print(f"✓ All {len(REQUIRED_BODY_SECTIONS)} required body sections present")

    print()
    print("══════════════════════════════════════════")
    print("✓ ALL STRUCTURAL CHECKS PASSED")
    print("══════════════════════════════════════════")
    return 0


if __name__ == "__main__":
    sys.exit(main())
