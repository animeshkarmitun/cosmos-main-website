# DESIGN.md

Design source of truth for UI consistency across the Cosmos Group website.

This document defines the visual system that all agents and developers should follow when editing landing sections.

---

## 1) Core Principle

- Keep section backgrounds consistent and intentional.
- Avoid random dark/black blocks that break visual rhythm.
- Use alternating dark shades for dark-theme landing sections.
- Do not introduce decorative separator lines unless explicitly requested.

---

## 2) Canonical Dark Palette (Landing)

Use only these two base tones for alternating dark sections:

- `--dark-a`: `#07122B`
- `--dark-b`: `#081730`

Related border tone:

- `--dark-border`: `#13294A`

Rule:

- Adjacent dark sections should alternate between `dark-a` and `dark-b`.
- Avoid fallback to near-black (`#04060f`, `bg-slate-950`) for section backgrounds in landing flow, unless the user asks for a high-contrast variant.

---

## 3) Section Transition Rules

- Use subtle shade transitions (gradient bridges) between dark sections.
- Keep transitions soft and short (no harsh bands).
- Do not use visible red/cyan divider lines for section separation.
- Separation should be achieved through shade shift, spacing, and surface depth only.

---

## 4) Component-Level Guidance

When editing the default dark home flow, keep these aligned:

- `Hero` base/background layers follow `dark-a`/`dark-b`.
- `NewsTicker` must use the same dark system as adjacent sections.
- `LogoMarquee` must continue the same tone rhythm.
- `ExploreTeaser` variants must preserve shade-only separation.
- `ContactSection` must use alternating dark tones, not pure black blocks.

If one section is retuned, verify neighboring sections too.

---

## 5) Allowed vs Not Allowed

Allowed:

- Palette tuning within `dark-a`/`dark-b` family.
- Border updates using `dark-border`.
- Overlay opacity adjustments for readability.

Not Allowed (without explicit request):

- New accent separator lines (red/cyan/etc.).
- Isolated pure-black backgrounds that break flow.
- Section-specific color systems unrelated to the landing palette.

---

## 6) Verification Checklist (Before Finishing)

- Desktop screenshot: top stack (`Navbar` + `NewsTicker` + `Hero` + `LogoMarquee`).
- Mid-page screenshot: at least one dark-to-dark section boundary.
- Contact area screenshot: confirm no abrupt black patch.
- Ensure text contrast remains accessible after palette changes.

Store screenshots locally for review; do not commit generated image outputs.

