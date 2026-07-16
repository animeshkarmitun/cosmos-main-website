# DESIGN.md

Design source of truth for UI consistency across the **Cosmos Group website**.

Every agent and developer **must read this file before making any UI, styling, or layout change**. This ensures visual consistency when multiple agents work on different pages simultaneously.

---

## 1) Core Principles

- Keep section backgrounds consistent and intentional.
- Avoid random dark/black blocks that break visual rhythm.
- Use alternating dark shades for dark-theme landing sections.
- Do not introduce decorative separator lines unless explicitly requested.
- **Consistency over creativity** — follow the tokens below, even if you think something else looks better.

---

## 2) Color System

### 2.1 Dark Theme — Landing Page

Use these for alternating sections on the **home/landing page**:

| Token | Value | Usage |
|-------|-------|-------|
| `dark-a` | `#07122B` | Primary landing section background |
| `dark-b` | `#081730` | Alternating landing section background |
| `dark-border` | `#13294A` | Borders between dark landing sections |

Rule:
- Adjacent dark sections should alternate between `dark-a` and `dark-b`.
- Do not use `bg-slate-950` or random dark hex values on the landing page.

### 2.2 Dark Theme — Inner Pages

Use these for **inner pages** (About, Team, Services, Policies, etc.):

| Token | Value | Usage |
|-------|-------|-------|
| `page-dark` | `#04060f` | Full-page dark background (`bg-[#04060f]`) |
| `card-dark` | `#0B132B` | Dark cards, hero banners, featured sections |
| `card-dark-surface` | `bg-white/[0.03]` or `bg-slate-900/50` | Glass-effect card backgrounds |
| `card-dark-border` | `border-slate-800/60` | Card borders on dark pages |

### 2.3 Light Theme Pages

Use these for **light-theme pages** (CSR, Careers, etc.):

| Token | Value | Usage |
|-------|-------|-------|
| `page-light` | `bg-slate-50` | Full-page light background |
| `card-light` | `bg-white` | Card backgrounds |
| `card-light-border` | `border-slate-200/80` | Card borders |
| `card-light-shadow` | `shadow-sm` | Card elevation |

### 2.4 Accent Colors

| Color | Class | Usage |
|-------|-------|-------|
| Primary Red | `text-red-500` | Kickers, badges, accent text (dark theme) |
| Primary Red | `text-red-600` | Kickers, badges, accent text (light theme) |
| Red Button | `bg-red-700` | Primary CTA buttons |
| Cyan Accent | `text-cyan-400` | Secondary accent (use sparingly — Contact, Founder only) |
| Emerald | `text-emerald-500` | Success states, confirmations |

> **Rule**: Do not mix `text-red-400` and `text-red-500` on dark pages. Use `text-red-500` consistently. On light pages, use `text-red-600`.

### 2.5 Text Colors

| Context | Class |
|---------|-------|
| Headings (dark) | `text-white` |
| Headings (light) | `text-slate-900` |
| Body text (dark) | `text-slate-400` |
| Body text (light) | `text-slate-600` |
| Muted/labels | `text-slate-500` |

---

## 3) Typography Scale

### 3.1 Font Families

Defined in `index.css` via `@theme`:

| Token | Font | Usage |
|-------|------|-------|
| `font-sans` | Inter | Body text, paragraphs, UI elements |
| `font-display` | Space Grotesk | All headings (H1, H2, H3) |
| `font-mono` | JetBrains Mono | Kicker labels, badges, stats, code |

### 3.2 Heading Hierarchy

| Element | Classes | Notes |
|---------|---------|-------|
| **H1** (page title) | `text-4xl md:text-6xl font-bold font-display tracking-tight uppercase` | Always use `font-display` and `uppercase` |
| **H2** (section title) | `text-2xl md:text-4xl font-bold font-display tracking-tight uppercase` | Same weight as H1 |
| **H3** (sub-section) | `text-xl md:text-2xl font-semibold font-display tracking-tight` | No `uppercase` |
| **Kicker/Badge** | `text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase` | Always `font-mono` |

> **Rule**: Never omit `font-display` on headings. Never use `font-black` or `font-extrabold` — the standard is `font-bold`.

### 3.3 Body Text

| Context | Classes |
|---------|---------|
| Subtitle (under H1) | `text-sm md:text-lg font-light leading-relaxed` |
| Body paragraph | `text-sm md:text-base font-light leading-relaxed` |
| Small/caption | `text-xs font-light` |

---

## 4) Spacing System

### 4.1 Container

All page content uses a single standard container:

```
max-w-7xl mx-auto px-4 md:px-6
```

> **Rule**: Do not use `max-w-6xl`. The standard is `max-w-7xl`.

### 4.2 Section Padding

| Context | Classes |
|---------|---------|
| Page-level top padding | `pt-24` (accounts for fixed navbar) |
| Section vertical padding | `py-20 md:py-28` |
| Section spacing (between) | `mb-16 md:mb-24` |

### 4.3 Common Spacing Values

| Purpose | Value |
|---------|-------|
| Gap between grid items | `gap-6` or `gap-8` |
| Card internal padding | `p-6` or `p-8` |
| Badge padding | `px-3 py-1.5` or `px-4 py-2` |

---

## 5) Component Patterns

### 5.1 Back Button (All Pages)

Use the bordered pill style consistently:

**Dark pages:**
```
text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest
```

**Light pages:**
```
text-slate-600 hover:text-red-700 bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest
```

> **Rule**: Do not use bare text links for back navigation.

### 5.2 Kicker/Badge Label

```
text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase
```

Colors:
- Dark theme: `text-red-500`
- Light theme: `text-red-600`
- With background pill: `bg-red-950/50 border border-red-900/30 rounded-full px-3 py-1.5`

### 5.3 Cards

**Dark theme card:**
```
bg-white/[0.03] border border-slate-800/60 rounded-2xl p-6
```

**Light theme card:**
```
bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6
```

### 5.4 Border Radii

| Element | Radius |
|---------|--------|
| Page-level hero banners | `rounded-3xl` |
| Content cards | `rounded-2xl` |
| Buttons, inputs | `rounded-xl` |
| Badge pills, CTAs | `rounded-full` |

---

## 6) Animation Standards

### 6.1 Standard Easing

Use this cubic-bezier everywhere:

```
[0.16, 1, 0.3, 1]
```

> **Rule**: Do not use `[0.25, 0.46, 0.45, 0.94]` or other custom easings unless explicitly requested.

### 6.2 Standard Variants

**fadeUp** (for individual elements):
```ts
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
```

**Container with stagger** (for card grids):
```ts
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}
```

### 6.3 Duration Guidelines

| Animation Type | Duration |
|---------------|----------|
| Element fade-in | `0.6s – 0.8s` |
| Stagger delay | `0.1s` per child |
| Container delay | `0.2s` |
| Hover transitions | `0.2s – 0.3s` |
| Accordion open/close | `0.25s` |

---

## 7) Page Templates

### 7.1 Dark Theme Page

```tsx
<div className="bg-[#04060f] min-h-screen text-white">
  {/* Back button */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24">
    <BackButton />
  </div>

  {/* Hero section */}
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <Kicker />
      <H1 />
      <Subtitle />
    </div>
  </section>

  {/* Content sections */}
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      ...
    </div>
  </section>
</div>
```

### 7.2 Light Theme Page

```tsx
<div className="bg-slate-50 min-h-screen">
  {/* Back button */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
    <BackButton variant="light" />
  </div>

  {/* Content sections */}
  <section className="mb-16 md:mb-24">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      ...
    </div>
  </section>
</div>
```

---

## 8) Section Transition Rules (Landing Page)

- Use subtle shade transitions (gradient bridges) between dark sections.
- Keep transitions soft and short (no harsh bands).
- Do not use visible red/cyan divider lines for section separation.
- Separation should be achieved through shade shift, spacing, and surface depth only.

### Landing-Specific Component Guidance

- `Hero` base/background layers follow `dark-a`/`dark-b`. Hero is slider-only — do **not** overlay Mission/Vision/Values cards on the hero.
- Mission / Vision / Values live in `MissionVisionValues` and attach under About:
  - Home `#about` (`About.tsx`): dark variant after the text + gallery block
  - Full About page (`AboutPage.tsx`): dark variant after the page banner, before impact/metrics
  - Light home (`AboutLight.tsx`): light variant in the same About attachment position
- `NewsTicker` must use the same dark system as adjacent sections.
- `LogoMarquee` must continue the same tone rhythm.
- `ExploreTeaser` variants must preserve shade-only separation.
- `ContactSection` must use alternating dark tones, not pure black blocks.

If one section is retuned, verify neighboring sections too.

---

## 9) Allowed vs Not Allowed

**Allowed:**

- Palette tuning within the tokens defined above.
- Border updates using canonical border tokens.
- Overlay opacity adjustments for readability.

**Not Allowed (without explicit request):**

- New accent separator lines (red/cyan/etc.).
- Isolated pure-black backgrounds that break flow.
- Section-specific color systems unrelated to the palette above.
- Custom hex colors not listed in this document.
- Different font weights for headings.

---

## 10) Verification Checklist (Before Finishing)

- Desktop screenshot: top stack (`Navbar` + `NewsTicker` + `Hero` + `LogoMarquee`).
- Mid-page screenshot: at least one dark-to-dark section boundary.
- Contact area screenshot: confirm no abrupt black patch.
- Ensure text contrast remains accessible after palette changes.
- Confirm the changed page uses tokens from this document, not custom values.

Store screenshots locally for review; do not commit generated image outputs.
