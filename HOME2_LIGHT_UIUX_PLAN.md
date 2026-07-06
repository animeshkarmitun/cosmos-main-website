# Cosmos Group — Home 2 (Light Theme) UI/UX Plan

> **Status:** Planning phase — no code written yet.  
> **Goal:** Create a second Home page with a clean, light color theme, reachable from the existing header menu’s “Home” submenu, so both dark and light home versions can be demoed to the supervisor.  
> **Target feel:** Premium corporate site — clean, spacious, confident, worth $5,000+.

---

## 1. Header / Navigation Change

### Current State
- Navbar is fixed, dark (`bg-slate-950/95`), with a single “Home” link.
- Only “Sectors” has a dropdown today.

### Proposed Change
- Convert **“Home”** into a compact dropdown in the desktop navbar.
- Options:
  - **Home (Default)** — existing dark-themed home page.
  - **Home 2** — new light-themed alternative home page.
- On mobile, Home becomes an accordion item with the same two choices.
- Active state: selected home version shows a small blue underline pill or dot.

### Home 2 Navbar Behavior
- When on Home 2, the entire navbar switches to a **light glass style**:
  - Background: `bg-white/80` with `backdrop-blur-md`
  - Border: subtle `border-stone-200/60`
  - Text: `text-slate-900`
  - Logo: use Cosmos logo in its original/dark variant
  - Hover/focus accent: `sky-700`
  - Investor Hub CTA: switch from red to `bg-sky-700 hover:bg-sky-600` to match the light theme accent

### Rationale
- Light navbar makes Home 2 feel like a fully separate, premium landing experience.
- Supervisor can toggle instantly between dark and light personalities.
- Keeps both pages discoverable under “Home” without cluttering the nav.

---

## 2. Theme Direction — “Warm Ivory & Corporate Sky”

The existing site is very dark (`slate-950`, heavy red accents, film-grain overlay). Home 2 should feel premium, breathable, and intentionally different — like a top-tier corporate site.

### Final Palette

| Role | Color | Tailwind Suggestion |
|------|-------|---------------------|
| Page background | Warm ivory / off-white | `bg-[#FAF8F5]` or `bg-stone-50` |
| Surface cards | Pure white | `bg-white` |
| Primary text | Deep charcoal | `text-slate-900` |
| Secondary text | Soft slate | `text-slate-500` |
| Accent color | Corporate sky / deep blue | `text-sky-700`, `bg-sky-700` |
| Accent hover | Slightly deeper blue | `hover:bg-sky-600`, `hover:text-sky-600` |
| Subtle borders | Warm light gray | `border-stone-200` |
| Section alternate | Very subtle warm gray | `bg-stone-100` |

### Why This Palette?
- **Premium & trustworthy:** Sky blue is widely associated with corporate reliability, finance, and technology.
- **Light but warm:** Warm ivory avoids the sterile hospital-white look.
- **High contrast & readable:** Charcoal on ivory passes WCAG AA comfortably.
- **Clear separation from Home 1:** Red becomes blue, dark becomes light.

---

## 3. Typography & Premium Hierarchy

- Keep the existing font families (`Inter`, `Space Grotesk`, `JetBrains Mono`).
- On Home 2, use a lighter, airier typography treatment:
  - **Hero headline:** `Space Grotesk`, `font-bold`, large tracking-tight, `text-slate-900`
  - **Section labels:** uppercase, `tracking-[0.2em]`, `text-sky-700`, `font-mono`, `text-[11px]`
  - **Body text:** `Inter`, `font-light`/`font-normal`, `text-slate-600`, generous line-height (`leading-relaxed`)
  - **Stats/numbers:** `Space Grotesk`, `font-extrabold`, `text-sky-700`

### Premium touches
- Use **asymmetric layouts** instead of perfectly centered blocks everywhere.
- Large section spacing: `py-24 md:py-32` between major sections.
- Section labels always paired with a thin accent line or small sky dot.

---

## 4. Page Structure for Home 2

Home 2 tells the same Cosmos story but with a refined, premium editorial layout.

### 1. Hero Section
- **Full-width, light, premium hero.**
- Background options (choose one):
  - High-quality aerial/corporate image with a soft ivory gradient overlay on the left.
  - Abstract flowing gradient using sky/ivory tones.
  - Large typographic hero with subtle geometric line pattern.
- Layout: left-aligned text block, right-side reserved for a hero image or visual.
- Content:
  - Small label: “COSMOS GROUP · SINCE 1972”
  - Headline: “Building Tomorrow’s Infrastructure Today”
  - Subheadline: short, confident paragraph about the conglomerate.
  - Two CTAs: primary sky button + secondary outlined button.
- Animation: staggered fade-up entrance for label, headline, paragraph, and CTAs.

### 2. Floating Mission / Vision / Values Cards
- Three white cards that overlap the bottom of the hero by ~80px.
- Soft shadow, rounded-2xl, sky icon circles.
- Slight hover lift (`-translate-y-1`) and shadow increase.

### 3. About Section (Editorial Layout)
- Asymmetric two-column layout:
  - Left: large featured image with a small stat card overlapping the corner.
  - Right: section label, headline, body text, key numbers row.
- Use large whitespace and a clear vertical rhythm.

### 4. Stats / Infographics Strip
- Horizontal strip with 4–5 large numbers:
  - 30+ Years
  - 14 Business Units
  - 3.2k+ Associates
  - 6+ Sectors
- Clean divider lines between stats.
- Optional number count-up animation on scroll.

### 5. Business Units Grid
- Section label: “Our Conglomerate”
- Grid of white cards (3 columns on desktop, 2 on tablet, 1 on mobile).
- Each card:
  - Sky icon circle
  - Company name
  - Short subtitle
  - Hover: card lifts, border turns sky, icon circle darkens.
- Optionally add a subtle hover arrow that slides in.

### 6. Partnership / Services (Bento Grid)
- Modern bento-style grid with mixed card sizes.
- Featured cell uses a soft sky tint background (`bg-sky-50`).
- Standard cells are white.
- Includes:
  - Energy & Power
  - Shipping & Logistics
  - Advanced Technologies
  - Renewable Networks
  - Media Enterprises
  - Defense Systems

### 7. Why Cosmos Group
- Three-column feature grid with premium icons.
- Each item: icon, title, 2-line description.
- Use a subtle horizontal divider above the section.

### 8. Founder Message
- Large quote-style block.
- Left: founder portrait in rounded frame.
- Right: quote in larger, elegant typography, name + title below.
- Use a soft sky vertical line or quotation mark graphic as accent.

### 9. Client / Partner Logo Marquee (Optional)
- Subtle infinite-scroll logo strip.
- Grayscale logos, hover turns colored.
- Adds a premium “trusted by” feeling.

### 10. Contact / Footer
- Contact section on light background.
- Keep existing Footer but ensure it visually closes the page cleanly.

---

## 5. Visual Design Principles

- **Generous whitespace:** breathe. Sections should never feel cramped.
- **Soft, premium shadows:** `shadow-sm` / `shadow-md` only. No heavy dark glows.
- **Rounded corners:** keep `rounded-2xl` / `rounded-3xl` for consistency.
- **No film grain overlay** on Home 2.
- **Consistent accent discipline:** blue/sky is the only accent. Red appears nowhere on Home 2.
- **High-quality imagery only:** no generic stock-looking images. Use corporate, architectural, or industry-specific photography.
- **Asymmetric, editorial layouts:** avoid everything being perfectly centered.

---

## 6. Component Mapping

| Existing Component | Home 2 Approach |
|--------------------|-----------------|
| `Hero.tsx` | Create `HeroLight.tsx` — premium single-scene hero. |
| `About.tsx` | Create `AboutLight.tsx` — editorial asymmetric layout. |
| `CosmosStats.tsx` | Create `StatsLight.tsx` — large number strip. |
| `BusinessUnits.tsx` | Create `BusinessUnitsLight.tsx` — card grid with blue accent. |
| `PartnershipServices.tsx` | Create `ServicesLight.tsx` — bento grid. |
| `WhyCosmosGroup.tsx` | Create `WhyCosmosLight.tsx` — 3-column feature grid. |
| `FounderMessage.tsx` | Create `FounderLight.tsx` — quote block. |
| `ContactSection.tsx` | Create `ContactLight.tsx` or adapt with light styling. |
| `Navbar.tsx` | Update to support light mode + Home submenu. |
| `Footer.tsx` | Reuse as-is if dark global footer works; otherwise adapt. |

### Recommendation
- Create a dedicated `Home2.tsx` parent component that composes all light variants.
- Keep light variants separate from dark variants to avoid messy conditional classes.

---

## 7. Animations & Micro-interactions

- Keep animations subtle and premium — never flashy.
- Hero: staggered fade-up (`y: 30 → 0`, opacity, 0.5s–0.7s).
- Scroll reveal: reuse existing `scroll-reveal-item` from `index.css`.
- Card hover:
  - `translateY(-6px)`
  - `shadow-lg`
  - border color transition to sky
- Button hover: background color transition + slight scale (`active:scale-95`).
- Stats: optional count-up animation when section enters viewport.
- Logo marquee: slow infinite horizontal scroll, pause on hover.
- Page transition: when switching Home ↔ Home 2, use existing `AnimatePresence` fade/slide.

---

## 8. State / Navigation Plan

- Add `home2` to the `currentPage` union in `App.tsx`.
- Navbar “Home” submenu calls `onPageChange('home')` or `onPageChange('home2')`.
- Navbar should detect when `currentPage === 'home2'` and apply light styles.
- Ensure `window.scrollTo({ top: 0 })` fires on every page switch.
- Hash links (#about, #contact) inside Home 2 scroll within Home 2.

---

## 9. Responsive & Accessibility

- Mobile: light navbar collapses into hamburger drawer.
- Home submenu becomes accordion inside mobile drawer.
- Touch targets minimum 44px.
- Focus rings: `focus-visible:ring-sky-600` on Home 2.
- Color contrast: charcoal on ivory + sky on white must pass WCAG AA.
- Images must have proper `alt` text.

---

## 10. Demo / Screenshot Strategy

Puppeteer is already installed (`puppeteer@^25.3.0`). We will capture both home pages for side-by-side comparison.

### Demo Flow
1. Open Home 1 → capture full-page screenshot (dark).
2. Open Home 2 → capture full-page screenshot (light).
3. Capture desktop (1440px) and mobile (375px) viewports.
4. Save screenshots to `/screenshots/home-comparison/`.
5. Optionally generate a simple HTML comparison gallery.

This gives the supervisor an immediate, professional visual comparison.

---

## 11. Final Decisions Log

| Decision | Chosen Option |
|----------|---------------|
| Accent color | Corporate sky/blue |
| Home 2 navbar | Light glass navbar |
| Scope | Only Home 2 gets light theme |
| Theme feel | Warm ivory, premium corporate |
| Animations | Subtle, staggered, scroll-driven |
| Hero style | Single-scene premium editorial hero |

---

## 12. Suggested Implementation Steps (After Approval)

1. Update `App.tsx` type union + add `home2` page branch.
2. Update `Navbar.tsx` — add Home submenu + light navbar mode for `home2`.
3. Create `src/components/Home2.tsx` as the light home composer.
4. Build light variants one by one:
   - `HeroLight.tsx`
   - `AboutLight.tsx`
   - `StatsLight.tsx`
   - `BusinessUnitsLight.tsx`
   - `ServicesLight.tsx`
   - `WhyCosmosLight.tsx`
   - `FounderLight.tsx`
   - `ContactLight.tsx`
5. Wire up all `onPageChange('home2')` calls.
6. Add Puppeteer screenshot script for demo.
7. Run dev server, verify responsive behavior, take screenshots.

---

**Prepared for review. No code changes made yet.**
