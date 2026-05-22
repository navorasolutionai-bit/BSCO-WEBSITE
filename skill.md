# Malaysian Legal Firm Website — Skill Reference

> Derived from the production build of **Tetuan Bila Salehuddin & Co.**  
> Use this file as the founding brief for any future Malaysian law firm static website project.

---

## Table of Contents

1. [Project Philosophy](#1-project-philosophy)
2. [Folder Structure](#2-folder-structure)
3. [Design Principles](#3-design-principles)
4. [Branding Guidelines](#4-branding-guidelines)
5. [Typography Standards](#5-typography-standards)
6. [Color System](#6-color-system)
7. [Component Architecture](#7-component-architecture)
8. [Coding Conventions](#8-coding-conventions)
9. [SEO Best Practices](#9-seo-best-practices)
10. [Accessibility Standards](#10-accessibility-standards)
11. [Mobile Responsiveness](#11-mobile-responsiveness)
12. [Animation Guidelines](#12-animation-guidelines)
13. [Performance Optimisation](#13-performance-optimisation)
14. [Legal Industry UX](#14-legal-industry-ux)
15. [Trust-Building Elements](#15-trust-building-elements)
16. [Content Writing Tone](#16-content-writing-tone)
17. [Malaysian Legal Specifics](#17-malaysian-legal-specifics)
18. [Reusable Sections & Components](#18-reusable-sections--components)
19. [Calculator Implementation](#19-calculator-implementation)
20. [Deployment Workflow](#20-deployment-workflow)
21. [Shared Chrome Protocol](#21-shared-chrome-protocol)
22. [Quick-Start Checklist](#22-quick-start-checklist)

---

## 1. Project Philosophy

### Core Stance
Build **static HTML/CSS/JS** — no framework, no bundler, no build step. Law firm clients rarely have developer support for maintenance; a plain file server or shared hosting is the realistic target.

### Guiding Principles
- **Additive over disruptive.** New features slot in beside existing ones without forcing a redesign.
- **Production-quality from day one.** Accessibility, SEO, and performance are not afterthoughts.
- **Honest restraint.** Law firms need to project authority and trustworthiness — ornamental excess undermines this. Every design decision should earn its place.
- **Durability over novelty.** Avoid CSS tricks or JS patterns that will look dated in two years.
- **Content-first.** The copy and the firm's credentials carry the weight; the design amplifies them.

### What this is NOT
- Not a React/Next.js app — no `npm install`, no build pipeline.
- Not a CMS — content lives directly in HTML.
- Not a design portfolio — restraint is a feature, not a bug.

---

## 2. Folder Structure

```
project-root/
│
├── index.html              ← Homepage
├── about.html              ← Firm & team
├── contact.html            ← Contact + map
├── book.html               ← Consultation booking form
├── calculator.html         ← Legal fee & stamp duty calculator
│
├── eviction.html           ← Practice area pages
├── contracts.html
├── conveyancing.html
├── litigation.html
├── ip.html
├── accident.html
│
├── assets/
│   ├── styles.css          ← Single global stylesheet (all tokens + components)
│   ├── main.js             ← Single shared JS file (nav, drawer, animations, counters)
│   ├── logo.svg            ← Favicon / brand mark
│   └── logo-circle.jpg     ← Circular photo logo for nav & footer
│
├── skill.md                ← This file
├── discovery-questions.md  ← Client brief answers
└── .claude/
    ├── settings.json
    ├── serve.ps1           ← PowerShell static file server (port 5500)
    └── launch.json         ← Preview launch config (name: "static")
```

### Rules
- Keep **one** `styles.css` and **one** `main.js`. Page-specific logic goes in inline `<script>` blocks at the bottom of that page (before `main.js`).
- Never create per-page CSS files — use additive blocks inside `styles.css` with a clear named comment header.
- All images live in `assets/`. Optimise before committing (WebP preferred, JPEG acceptable for photos).

---

## 3. Design Principles

### Visual Language
| Principle | Application |
|-----------|-------------|
| **Authority** | Deep teal primary palette; serif headings; ample whitespace |
| **Warmth** | Gold accent throughout; cream background (not stark white) |
| **Precision** | 2px border-radius (near-sharp corners); thin 1px borders; hairline dividers |
| **Hierarchy** | Large serif display headings > small-caps eyebrows > body Inter |
| **Restraint** | Maximum two typefaces; three-colour palette with deliberate gold accents |

### Spatial Rhythm
- Section vertical padding: `6rem 0` (desktop), `4rem 0` (mobile).
- Container max-width: `1200px` (standard), `820px` (prose/narrow content).
- Grid gaps: `2rem` (cards), `3rem–4rem` (split layouts).
- Component internal padding: `2.5rem` (cards), `1.5rem` (form groups).

### What to Avoid
- Rounded cards with large border-radius — looks tech/startup, not legal.
- Bright saturated colours — teal + gold is the ceiling.
- Centered body text — left-aligned prose only.
- Full-bleed hero photos — uses bandwidth, ages quickly; geometric/colour-based heroes are safer.
- Carousels / auto-advancing sliders — inaccessible and distracting.

---

## 4. Branding Guidelines

### Logo Usage
- Use a **circular cropped photo** logo (`logo-circle.jpg`) in the nav and footer — 36px nav, 44px footer.
- Always render with `border-radius: 50%; object-fit: cover`.
- Pair with the firm name in Cormorant Garamond beside the logo mark.

### Firm Name Formats
| Context | Format |
|---------|--------|
| Legal / formal | Tetuan Bila Salehuddin & Co. |
| Nav / footer brand | Bila Salehuddin & Co. |
| Tagline sub-line | Advocates & Solicitors |
| HTML entities | `&amp;` for `&` inside attributes; literal `&` inside visible text is fine |

### Gold Accent Rules
- Use gold (`--color-gold`) for: eyebrow labels, divider lines, hover underlines, CTA buttons, stat numbers, FAQ `+` toggles, card left-border reveals.
- Never use gold as a background for large blocks — it's an accent, not a fill.
- Gold on dark: use `--color-gold-light` for readability on `--color-primary-dark` backgrounds.

---

## 5. Typography Standards

### Typeface Stack
```css
--font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
--font-sans:  'Inter', system-ui, -apple-system, sans-serif;
```

Load via Google Fonts with `preconnect`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Scale
```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 3.5vw, 2.75rem); }
h3 { font-size: 1.5rem; }
```

- All headings: `font-family: var(--font-serif); font-weight: 500; letter-spacing: -0.01em; line-height: 1.2`
- Body: `font-size: 1rem; line-height: 1.6; font-family: var(--font-sans)`
- Body text colour: `--color-text-muted` (`#6B6B6B`) for paragraphs, `--color-text` (`#1A1A1A`) for important content.
- Eyebrow labels: `font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 600; color: --color-gold-deep`

### When to Use Serif vs. Sans
| Serif (Cormorant) | Sans (Inter) |
|-------------------|--------------|
| H1–H4 headings | Body paragraphs |
| Firm name in nav/footer | Nav links |
| Stat numbers | Labels, captions, buttons |
| Pull quotes | Form labels, metadata |
| FAQ summaries | Footer columns |

---

## 6. Color System

### CSS Custom Properties
```css
:root {
  /* Brand greens */
  --color-primary:       #2D4A47;   /* Main teal — nav hover, btn, icons */
  --color-primary-dark:  #1F3D3A;   /* Dark teal — headings, CTA bands, footer hero */
  --color-primary-light: #4A6B68;   /* Lighter teal — secondary accents */

  /* Backgrounds */
  --color-cream:         #F8F6F1;   /* Page background */
  --color-cream-dark:    #EEEAE0;   /* Subtle section alternation, input bg fallback */

  /* Gold accents */
  --color-gold:          #B8964E;   /* Primary accent — buttons, dividers, highlights */
  --color-gold-light:    #C9A961;   /* Gold on dark surfaces */
  --color-gold-deep:     #8A6E2F;   /* Eyebrows, deep emphasis */

  /* Text */
  --color-text:          #1A1A1A;
  --color-text-muted:    #6B6B6B;
  --color-border:        #E5E1D6;
  --color-focus:         #8A6E2F;   /* Focus ring — same as gold-deep */
}
```

### Usage Matrix
| Token | Used On |
|-------|---------|
| `--color-primary` | Nav link hover, `.btn-primary` bg, card icons, service dots |
| `--color-primary-dark` | H1–H4, `.page-header` bg gradient, `.cta-band` bg, `.footer` bg top layer |
| `--color-cream` | `<body>` bg, card backgrounds on dark |
| `--color-cream-dark` | Hero gradient end, `<details>` panel bg, input background |
| `--color-gold` | `.btn-gold`, eyebrow text, stat numbers, FAQ toggle, gold-divider, card left-border |
| `--color-gold-light` | Text on dark, footer eyebrow headings, hover states on dark |
| `--color-gold-deep` | Eyebrow labels, `--color-focus`, select arrow |
| `#1A2E2C` | Footer bg (slightly darker than primary-dark) |

### Dark Surface Text Rule
On `--color-primary-dark` backgrounds:
- Headings: `--color-cream`
- Body: `rgba(248,246,241,0.75)`
- Muted/meta: `rgba(248,246,241,0.55)`
- Gold accents: `--color-gold-light`

---

## 7. Component Architecture

All components are plain CSS classes. No JS frameworks. Components live in `styles.css` under clearly labelled comment blocks.

### Core Layout Components
```
.container          → max-width 1200px, centered, padded
.container-narrow   → max-width 820px (prose pages)
.section            → padding 6rem 0
.section-sm         → padding 4rem 0
.section-dark       → dark background variant
.grid-2 / .grid-3 / .grid-4  → CSS grid layouts
.split              → two-column 1:1 or 1.2:1 split
```

### Navigation
```
.nav                → sticky, frosted-glass blur, border-bottom
.nav-inner          → flex, max-width, centered
.nav-logo           → logo + brand name
.nav-links          → desktop link row
.nav-dropdown       → practice areas mega-link (hover + click)
.dropdown-menu      → absolute dropdown panel
.nav-toggle         → hamburger (mobile only, display:none on desktop)
```

### Mobile Drawer
```
.mobile-menu-overlay   → fixed dim overlay
.mobile-drawer         → slide-in right panel (translateX)
.mobile-drawer-header  → logo + close button
.mobile-drawer-close   → X button
.mobile-drawer-section-title → uppercase category label (e.g. "Practice Areas")
.btn-mobile-book       → full-width CTA at drawer bottom
```

### Page Header (inner pages)
```html
<header class="page-header" id="main-content" tabindex="-1">
  <div class="container">
    <span class="eyebrow">Practice Area</span>
    <h1>Page Title</h1>
    <p>Subtitle or description.</p>
  </div>
</header>
```
Background: linear gradient from `--color-primary-dark` to `--color-primary`.

### Practice Card
```html
<a href="page.html" class="practice-card reveal">
  <div class="icon"><!-- SVG --></div>
  <h3>Area Name</h3>
  <p>Brief description.</p>
  <span class="arrow">Learn more →</span>
</a>
```
On hover: `translateY(-4px)`, left gold border scales in.

### Stats Bar
```html
<div class="stats-bar">
  <div class="stats-bar-inner">
    <div class="stat-item">
      <span class="stat-num" data-count="20" data-suffix="+">20+</span>
      <span class="stat-label">Years experience</span>
    </div>
    <!-- repeat -->
  </div>
</div>
```
Animated via IntersectionObserver in `main.js`.

### CTA Band
```html
<section class="cta-band">
  <div class="container">
    <h2>Call to action headline</h2>
    <p>Supporting sentence.</p>
    <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
      <a href="book.html" class="btn btn-gold">Book a Consultation →</a>
      <a href="https://wa.me/..." class="btn btn-outline" style="color:#fff; border-color:rgba(255,255,255,0.4);">WhatsApp Us</a>
    </div>
  </div>
</section>
```

### FAQ Accordion
```html
<details class="faq-item reveal">
  <summary>Question text here?</summary>
  <p>Answer paragraph.</p>
</details>
```
CSS-only expand/collapse using `<details>`/`<summary>`. `+` rotates to `×` on open.

### Buttons
```
.btn            → base: inline-flex, gap, padding, border-radius 2px, transition
.btn-primary    → teal fill
.btn-outline    → transparent + border
.btn-gold       → gold fill, dark text
```

### WhatsApp FAB
Fixed bottom-right. Always links to HQ number unless context-specific.
```html
<a href="https://wa.me/60134101183" target="_blank" rel="noopener" class="whatsapp-fab" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><!-- WhatsApp path --></svg>
</a>
```

### Back to Top
```html
<button class="back-to-top" aria-label="Back to top">
  <svg><!-- chevron up --></svg>
</button>
```
Appears after 400px scroll, managed in `main.js`.

### Footer
Four-column grid: Brand + social | Navigate | Practice | Contact.
```
.footer-grid        → grid-template-columns: 2fr 1fr 1fr 1fr
.footer-brand       → logo + firm name + tagline
.footer-social      → flex row of circular icon buttons (Facebook, WhatsApp, LinkedIn)
.footer-bottom      → copyright + disclaimer, border-top
```

### Footer Social Icons
```html
<div class="footer-social">
  <a href="https://www.facebook.com/..." target="_blank" rel="noopener" aria-label="Facebook">
    <svg viewBox="0 0 24 24"><!-- F path --></svg>
  </a>
  <a href="https://wa.me/60134101183" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24"><!-- WA path --></svg>
  </a>
  <a href="https://www.linkedin.com/company/..." target="_blank" rel="noopener" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24"><!-- LI path --></svg>
  </a>
</div>
```
Style: 34px circles, `border: 1px solid rgba(248,246,241,0.18)`, hover to gold border + tint.

---

## 8. Coding Conventions

### HTML
- `lang="en"` on `<html>`.
- `<meta charset="UTF-8" />` first in `<head>`.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` second.
- Always encode `&` as `&amp;` inside attribute values and `href`s; inside visible text it's fine either way.
- Use `<section>` for thematic content blocks; `<header>` for page intro; `<footer>` for footer; `<aside>` for related/sidebar content.
- Every page needs `<a class="skip-link" href="#main-content">Skip to content</a>` as the first child of `<body>`.
- `id="main-content"` on the first meaningful content element (usually `<header class="page-header">`).
- Add `tabindex="-1"` to `#main-content` so skip-link focus lands correctly.
- Add `<script>document.documentElement.classList.add('js');</script>` in `<head>` before stylesheet — enables progressive JS-enhanced CSS.

### CSS
- All design tokens as CSS custom properties in `:root`.
- Use `clamp()` for fluid type scales.
- `box-sizing: border-box` applied globally via `* { box-sizing: border-box; margin: 0; padding: 0; }`.
- No `!important` except inside `@media (prefers-reduced-motion: reduce)` overrides.
- Organise stylesheet with comment headers: `/* ─── SECTION NAME ─── */`.
- Mobile breakpoints: `@media (max-width: 860px)` (main), `@media (max-width: 520px)` (small).
- Use `will-change: opacity, transform` only on `.reveal` animation elements.

### JavaScript
- All shared JS in `main.js`, loaded at bottom of `<body>` with `<script src="assets/main.js"></script>`.
- Page-specific JS in an inline `<script>` block directly above `main.js`, wrapped in an IIFE `(function(){ ... })()`.
- Use `DOMContentLoaded` in `main.js`; IIFE inline scripts run after DOM is parsed (bottom of body), so no wrapper needed.
- Prefer `addEventListener` with `{ passive: true }` for scroll listeners.
- Use `IntersectionObserver` for scroll-triggered effects — never `scroll` event polling.
- No jQuery, no external libraries unless absolutely necessary.
- Respect `prefers-reduced-motion` — check via `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and skip animations if true.

### File Naming
- All lowercase, hyphen-separated: `conveyancing.html`, `main.js`, `styles.css`.
- No spaces in filenames.

---

## 9. SEO Best Practices

### Per-Page Head Template
```html
<title>[Page Name] — [Firm Name]</title>
<meta name="description" content="[150–160 char description with location + service keywords]" />
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
```

### Title Patterns
| Page | Title Format |
|------|-------------|
| Homepage | `[Firm Name] — Advocates & Solicitors, [City]` |
| Practice area | `[Area] — [Firm Name]` |
| Calculator | `Legal Fee & Stamp Duty Calculator — [Firm Name]` |
| Contact | `Contact Us — [Firm Name]` |

### Meta Description Patterns
- Include: city/state, practice area keyword, one differentiator.
- Example: `"Property conveyancing in Malaysia — Sale & Purchase Agreements, loan documentation, and title transfers by Bila Salehuddin & Co., Ipoh and Kuala Lumpur."`

### Structural SEO
- One `<h1>` per page.
- Logical heading hierarchy: `h1 → h2 → h3` (never skip levels).
- Descriptive `alt` text on all images; empty `alt=""` for purely decorative images.
- `rel="noopener"` on all `target="_blank"` links.
- Internal links use relative paths (`href="conveyancing.html"`).

### Local SEO Signals
- Mention city names in `<meta name="description">` and in body text.
- Include full addresses, phone numbers, and emails as crawlable text (not just in images).
- Use `<a href="tel:...">` and `<a href="mailto:...">` for all contact details.

---

## 10. Accessibility Standards

### Skip Navigation
```html
<a class="skip-link" href="#main-content">Skip to content</a>
```
```css
.skip-link {
  position: absolute; left: 1rem; top: -100px; z-index: 200;
  background: var(--color-primary-dark); color: var(--color-cream);
  padding: 0.75rem 1.25rem;
  transition: top 0.2s ease;
}
.skip-link:focus { top: 1rem; outline: none; }
```

### Focus Rings
```css
a:focus-visible, button:focus-visible, input:focus-visible,
select:focus-visible, textarea:focus-visible, summary:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 2px;
}
/* Lighten on dark surfaces */
.footer a:focus-visible, .cta-band a:focus-visible {
  outline-color: var(--color-gold-light);
}
```

### ARIA Patterns
- Mobile nav toggle: `aria-label="Menu"`, `aria-expanded="false/true"`.
- Mobile drawer: `role="dialog"`, `aria-label="Navigation menu"`.
- Dropdown: `aria-haspopup="true"`, `aria-expanded="false/true"` on toggle button.
- Dropdown menu: `role="menu"`.
- WhatsApp FAB: `aria-label="Chat on WhatsApp"`.
- Back to top: `aria-label="Back to top"`.
- Social icons: `aria-label="Facebook"`, etc. (icon-only links must always have aria-label).
- Stats with animated counters: provide `aria-live="polite"` or ensure static fallback.
- Calculator results: `aria-live="polite"` on output container.

### Keyboard Navigation
- Dropdowns open on click and hover (`hover: hover` media query gates hover behaviour).
- Dropdown stays open when keyboard focus moves into it (`:focus-within` CSS).
- `Escape` key closes both dropdown and mobile drawer.
- All interactive elements reachable by `Tab`; logical focus order matches visual order.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
  html.js .reveal { opacity: 1 !important; transform: none !important; }
}
```
In JS: check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before running counter animations and scroll effects.

### Screen Reader Utilities
```css
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
```

---

## 11. Mobile Responsiveness

### Breakpoints
| Breakpoint | Trigger | Changes |
|------------|---------|---------|
| `max-width: 860px` | Tablet/mobile main | Nav → hamburger; grids → 1 col; split → stacked; sections → 4rem padding |
| `max-width: 520px` | Small mobile | Footer → 1 col; stats bar adjusts; brand font shrinks |

### Nav Behaviour
- Desktop (>860px): horizontal `.nav-links`, dropdown on hover/click.
- Mobile (≤860px): `.nav-links { display: none }`, `.nav-toggle { display: block }`, slide-in `.mobile-drawer`.
- Never hide the mobile drawer via `display:none` on the drawer itself — use `transform: translateX(100%)`.

### Grid Collapse Pattern
```css
.grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
.split { grid-template-columns: 1fr; gap: 2.5rem; }
.service-list { grid-template-columns: 1fr; }
.footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
```

### Touch Targets
- Minimum 44×44px for all tap targets (nav links, FAB, buttons, drawer links).
- Mobile drawer links: `padding: 0.7rem 0` (naturally meets target).
- Back-to-top button: 40px diameter.
- WhatsApp FAB: 56px diameter.

### Calculator Responsive
```css
.calc-wrap { grid-template-columns: 1fr; }
.calc-results { position: static; } /* remove sticky */
```
Stack input panel above results card on mobile.

### Viewport Testing
When using the Claude Preview tool, **always pass explicit `width: 1280` for desktop** rather than the "desktop" preset (which can render narrow and trigger the mobile nav). Use `preset: "mobile"` or `width: 375` for mobile testing.

---

## 12. Animation Guidelines

### Scroll Reveal (`.reveal`)
All content sections use this pattern for progressive disclosure:
```css
html.js .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
  will-change: opacity, transform;
}
html.js .reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
/* up to .reveal-delay-5 */
```
Triggered by `IntersectionObserver` with `threshold: 0.12` in `main.js`.  
Only add `.reveal` to `html.js` — the class guard ensures no invisible content if JS fails.

### Stat Counter Animation
Counters animate from 0 to target on IntersectionObserver entry. Use ease-out cubic easing. Skip if `prefers-reduced-motion`.

### Hover Micro-interactions
- Cards: `translateY(-4px)` + box-shadow on hover.
- Buttons: `translateY(-1px)` + box-shadow.
- Button icons: `translateX(2px)` on arrow SVGs.
- Practice card left border: `scaleY(0) → scaleY(1)` (transform-origin: top).
- Nav underline: `scaleX(0) → scaleX(1)` (transform-origin: left).
- All hover transitions: `0.2s–0.3s ease`.

### What NOT to Animate
- No parallax scrolling — causes motion sickness and is overused.
- No spinning loaders — there is no async loading.
- No entrance animations that delay content visibility beyond 200ms.
- No animation on `<table>` or content grids with many rows.

---

## 13. Performance Optimisation

### Loading Strategy
- CSS: single `<link rel="stylesheet">` in `<head>`.
- Fonts: `preconnect` to both `fonts.googleapis.com` and `fonts.gstatic.com` before font link.
- JS: `<script src="assets/main.js"></script>` at end of `<body>` (no `defer` needed — already at bottom).
- Images: `loading="lazy"` on below-fold images; no lazy on hero/above-fold.

### Image Guidelines
- Logo circle: JPEG, optimised to <20KB.
- Team photos: JPEG, ≤150KB per image, 400×500px max display size.
- Hero/section images: WebP preferred, ≤100KB, sized to display dimensions.
- Always include `width` and `height` attributes to prevent layout shift.
- SVGs for icons, logo mark, and illustrations — never rasterise icons.

### No-Build Advantage
Zero build time, zero dependency drift, zero toolchain failures. The site loads from a file server with no pre-processing. Keep it that way unless the project genuinely requires templating (in which case consider a simple SSG like Eleventy, not a full SPA framework).

### CSS Efficiency
- No unused CSS — every class is used on at least one page.
- Shared chrome (nav, footer) uses identical markup so styles only need to be written once.
- Use CSS custom properties over Sass variables — no compile step.

---

## 14. Legal Industry UX

### Information Architecture
Standard page set for a Malaysian law firm:
1. **Homepage** — hero, brief firm overview, practice area grid, stats, team intro, CTA.
2. **About** — firm history, team members with credentials, offices, philosophy.
3. **Practice area pages** (one per area) — problem statement, what the firm handles, FAQ accordion, CTA.
4. **Contact** — offices, phone, email, WhatsApp, embedded map or directions, booking prompt.
5. **Book consultation** — structured form (name, contact, matter type, preferred office, time).
6. **Calculator** — self-service fee/duty estimates (see Section 19).

### Practice Area Page Formula
```
1. page-header (dark gradient) — area name + one-line hook
2. Opening paragraph — pain point the client faces
3. "What we handle" — service-list grid
4. 1–2 supporting sections (e.g. residential vs commercial, Islamic vs conventional)
5. FAQ accordion (3–5 items)
6. cta-band — "Have a [area] matter?" → Book / WhatsApp
```

### Client Journey Priorities
- **Reduce friction:** WhatsApp FAB always visible — clients prefer this over email forms.
- **Build confidence before contact:** Team credentials, Bar registration, years of experience, FAQ answers.
- **Answer cost questions proactively:** The calculator does this; link it from conveyancing pages.
- **Multiple contact paths:** Tel, email, WhatsApp, booking form — offer all; let clients choose.

### Form Best Practices
- `autocomplete="off"` on consultation forms (privacy-sensitive context).
- `novalidate` on form — use CSS `:user-invalid` for visual feedback, not browser popups.
- Required fields marked visually (not just with `required` attribute).
- Consultation type selection (meeting type) as accessible radio-button cards, not just a `<select>`.
- Success message on submission — never silent.

---

## 15. Trust-Building Elements

### Credibility Signals (Priority Order)
1. **Bar registration statement** in footer — "Registered with the Malaysian Bar."
2. **Years of experience** — stat counter or explicit copy.
3. **Named attorneys** with credentials (LL.B., CLP, year called to Bar).
4. **Dual-office presence** — signals scale without being a large impersonal firm.
5. **Client testimonials** (if available) — real quotes with first name and matter type.
6. **FAQ answers** — demonstrates expertise and transparency.
7. **Calculator** — radical transparency on cost builds trust faster than any copyline.
8. **Case types / industries served** — specificity signals experience.
9. **Google Maps embed** — proves physical presence.
10. **Professional photography** — headshots, office interior (avoid stock).

### Legal Disclaimer
Always include in footer-bottom:
```
Information on this site does not constitute legal advice.
```
On the calculator page, include a prominent disclaimer box:
```
This calculator provides estimates only and does not constitute legal advice 
or a binding quotation. For a precise fee, contact us.
```

### Social Proof Placement
- Stats bar: below hero or nav-adjacent — high visibility.
- Testimonials: after practice intro or before CTA band.
- Team section: after stats — put faces to credentials.

---

## 16. Content Writing Tone

### Voice Principles
| Do | Don't |
|----|-------|
| Direct, confident, specific | Vague, hedged, generic |
| Active voice | Passive constructions |
| Client-centric ("you", "your matter") | Firm-centric ("we are pleased to offer") |
| Precise legal terminology with brief plain-English gloss | Dense legal jargon with no explanation |
| Honest about what is and isn't covered | Overselling or exaggerating |

### Sentence Patterns
- Start with the client's situation, not the firm's capability:  
  ✅ *"Property transactions are high-value and procedurally strict."*  
  ❌ *"Our experienced team handles all aspects of property law."*
- Use short declarative sentences for key facts.
- Reserve longer explanatory sentences for FAQ and process sections.

### Practice Area Page Opening (Template)
```
[Client problem statement — what's at stake and why it's difficult].

We act for [buyer types / client types] — [brief scope of what the firm does].
```

### FAQ Writing
- Write questions exactly as a client would ask them, including colloquial phrasing.
- Answers: 2–4 sentences. Enough to genuinely help; short enough to read in 10 seconds.
- Include one actionable sentence at the end if relevant.

### What to Avoid
- Latin phrases without translation.
- "We are a dynamic team of legal professionals committed to excellence." (meaningless).
- Lists of every possible sub-service with no explanation of who they're for.
- Excessive use of "pursuant to", "hereinafter", "notwithstanding" outside of actual legal documents.

---

## 17. Malaysian Legal Specifics

### Regulatory Context
- Solicitors are registered with the **Malaysian Bar** (Peninsular Malaysia) or **Advocates Association of Sarawak** / **Sabah Law Association**.
- Correct designation: "Advocates & Solicitors".
- Firm name prefix: "Tetuan" (Malay) or "Messrs" (English) — both are acceptable.

### Fee Scales (as at 2025–2026)
**Solicitors' Remuneration Order 2023 — Legal Fees (SPA & Loan)**
| Price Tier | Rate |
|------------|------|
| First RM500,000 | 1.25% |
| Next RM7,000,000 (up to RM7.5m) | 1.00% |
| Excess above RM7,500,000 | Negotiable (max 1.00%) |

Minimum fee: RM500.  
Service Tax (SST): 8% on legal fees (current rate — verify each project).

**Stamp Duty — Memorandum of Transfer (MOT)**
| Price Tier | Rate |
|------------|------|
| First RM100,000 | 1% |
| RM100,001 – RM500,000 | 2% |
| RM500,001 – RM1,000,000 | 3% |
| Above RM1,000,000 | 4% |

**Loan Agreement Stamp Duty**: 0.5% of loan amount (rounded up to nearest RM per Stamp Act 1949).

### Practice Areas Typical to a Full-Service Malaysian Firm
- Conveyancing (SPA, MOT, loan documentation, redemption, refinancing)
- Litigation (civil, commercial, syariah-adjacent)
- Corporate & Contracts (M&A, joint ventures, shareholders agreements)
- Eviction & Tenancy (Section 7 / 8 Specific Relief Act, tenancy drafting)
- Intellectual Property (trademark filing, IP protection)
- Accident & Personal Injury (MACA claims, third-party claims)

### Islamic Banking Instruments
When referencing loan documents for Islamic finance, use correct terminology:
- Murabahah (cost-plus sale)
- AITAB (Al-Ijarah Thumma Al-Bai — hire-purchase)
- Musharakah Mutanaqisah (diminishing partnership)
- BBA (Bai Bithaman Ajil — deferred payment sale)

### Key Legislation to Reference by Practice Area
| Area | Statute |
|------|---------|
| Conveyancing | National Land Code 1965, Stamp Act 1949, SRO 2023 |
| Tenancy/Eviction | Specific Relief Act 1950, Distress Act 1951, Contracts Act 1950 |
| Litigation | Rules of Court 2012, Courts of Judicature Act 1964 |
| IP | Trade Marks Act 2019, Copyright Act 1987, Patents Act 1983 |
| Accident | Civil Law Act 1956, Motor Accidents Compensation Act, Limitation Act 1953 |

---

## 18. Reusable Sections & Components

### Page Shell (copy for each new page)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PAGE TITLE — Firm Name</title>
<meta name="description" content="PAGE DESCRIPTION" />
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="assets/styles.css" />
<script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="skip-link" href="#main-content">Skip to content</a>
<!-- NAV (copy from any existing page) -->
<!-- MOBILE DRAWER (copy from any existing page) -->

<header class="page-header" id="main-content" tabindex="-1">
  <div class="container">
    <span class="eyebrow">CATEGORY</span>
    <h1>PAGE HEADING</h1>
    <p>Supporting subtitle.</p>
  </div>
</header>

<!-- PAGE CONTENT SECTIONS -->

<!-- CTA BAND (copy from any existing page) -->
<!-- FOOTER (copy from any existing page) -->

<a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener" class="whatsapp-fab" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><!-- WA SVG --></svg>
</a>
<button class="back-to-top" aria-label="Back to top">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
</button>
<script src="assets/main.js"></script>
</body>
</html>
```

### Practice Area Page Section Blocks

**Service list** (two-column grid of items):
```html
<ul class="service-list reveal">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

**Process steps** (numbered 1–3):
```html
<div class="process-steps">
  <div class="process-step">
    <div class="step-circle">1</div>
    <h4>Step name</h4>
    <p>Brief description.</p>
  </div>
</div>
```

**Gold section divider**:
```html
<div class="gold-divider"></div>           <!-- centred -->
<div class="gold-divider gold-divider-left"></div>  <!-- left-aligned -->
```

---

## 19. Calculator Implementation

### When to Build
Every Malaysian conveyancing-focused law firm website should have a legal fee calculator. It is the single highest-trust feature possible — radical transparency about cost.

### Inputs Required
| Field | Default | Notes |
|-------|---------|-------|
| Property price / market value | — | Use whichever is higher |
| Financing toggle (loan / cash) | Loan | Controls loan section visibility |
| Margin of finance (%) | 90% | Auto-computes loan amount |
| Loan amount (RM) | Auto from margin | Editable; syncs back to margin |
| Interest / profit rate (%) | 4.0% | For monthly repayment |
| Loan tenure (years) | 35 | For monthly repayment |

### Calculation Functions
```js
function scaleLegalFee(amount) {
  if (amount <= 0) return 0;
  let fee = Math.min(amount, 500000) * 0.0125;
  if (amount > 500000) fee += Math.min(amount - 500000, 7000000) * 0.01;
  if (amount > 7500000) fee += (amount - 7500000) * 0.01;
  return fee;
}

function stampDutyMOT(price) {
  if (price <= 0) return 0;
  let d = Math.min(price, 100000) * 0.01;
  if (price > 100000) d += Math.min(price - 100000, 400000) * 0.02;
  if (price > 500000) d += Math.min(price - 500000, 500000) * 0.03;
  if (price > 1000000) d += (price - 1000000) * 0.04;
  return d;
}

const loanStampDuty = (loan) => loan > 0 ? Math.ceil(loan * 0.005) : 0;

function monthlyRepayment(loan, ratePct, years) {
  if (loan <= 0 || years <= 0) return 0;
  const r = (ratePct / 100) / 12, n = years * 12;
  if (r === 0) return loan / n;
  const f = Math.pow(1 + r, n);
  return loan * r * f / (f - 1);
}
```

### Output Summary Structure
```
Sale & Purchase Agreement
  ├─ SPA legal fee          (scaleLegalFee(price))
  ├─ SST on legal fee (8%)  (spaFee × 0.08)
  └─ Stamp duty / MOT       (stampDutyMOT(price))

Loan Agreement              [hidden if cash purchase]
  ├─ Loan legal fee         (scaleLegalFee(loanAmount))
  ├─ SST on legal fee (8%)  (loanFee × 0.08)
  └─ Stamp duty (0.5%)      (ceil(loan × 0.005))

─────────────────────────────
Estimated total

Indicative monthly repayment [shown if loan + rate + tenure > 0]
```

### Disclaimer (mandatory)
```
Estimates only. Does not constitute legal advice or a binding quotation.
Excludes disbursements. Rates apply to Malaysian citizens and permanent residents.
Different rules apply to foreign buyers and first-home exemption schemes.
```

---

## 20. Deployment Workflow

### Local Preview (no Node/Python on machine)
PowerShell static server at `.claude/serve.ps1`, port 5500:
```powershell
# From project root:
# Use the Claude Preview tool: preview_start name="static"
# Then navigate to http://localhost:5500/calculator.html
```

**Important:** Always set `width: 1280` explicitly for desktop preview — the "desktop" preset can trigger mobile layout in the harness.

### Production Deployment Options
1. **Shared hosting (cPanel)** — upload via FTP/File Manager; set `index.html` as default document.
2. **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the project folder or connect GitHub. Zero config required for a static site.
3. **GitHub Pages** — push to `main` or `gh-pages` branch, enable Pages in repo settings.

### Pre-Launch Checklist
- [ ] All phone numbers consistent across all pages (use grep to verify).
- [ ] All WhatsApp links use correct `wa.me/6XXXXXXXXXX` format (no `+`, no spaces).
- [ ] `tel:` links use `+6XXXXXXXXXX` format.
- [ ] Footer year auto-updates (`document.getElementById('year').textContent = new Date().getFullYear()`).
- [ ] All `target="_blank"` links have `rel="noopener"`.
- [ ] Meta descriptions are unique per page.
- [ ] Calculator disclaimer is visible.
- [ ] LinkedIn / Facebook / social links point to real pages (not placeholders).
- [ ] Test all forms submit correctly.
- [ ] Test mobile drawer opens and closes.
- [ ] Test WhatsApp FAB and back-to-top button.
- [ ] Test calculator at RM100k, RM500k, RM1m, RM2m.
- [ ] Run Chrome Lighthouse on homepage (target: Performance 90+, Accessibility 95+).

---

## 21. Shared Chrome Protocol

### The Core Rule
**Nav, mobile drawer, and footer are duplicated in every HTML file.** There is no templating. This means:

> Every change to shared chrome MUST be applied to all pages.

### Efficient Site-Wide Edits (PowerShell)
For identical-string replacements across all pages (phone numbers, nav links, footer content):

```powershell
$dir = "C:\path\to\project"
$enc = New-Object System.Text.UTF8Encoding($false)  # UTF-8, no BOM
$files = Get-ChildItem $dir -Filter *.html

foreach ($file in $files) {
  $t = [System.IO.File]::ReadAllText($file.FullName)
  if ($t.Contains("OLD_STRING")) {
    $t = $t.Replace("OLD_STRING", "NEW_STRING")
    [System.IO.File]::WriteAllText($file.FullName, $t, $enc)
    "Updated: $($file.Name)"
  }
}
```

Always:
- Use `ReadAllText` / `WriteAllText` with `UTF8Encoding($false)` (no BOM).
- Guard replacements with `.Contains("NEW_STRING")` check to prevent double-insertion.
- Handle CRLF vs LF: detect with `if ($t.Contains("`r`n"))` for multi-line insertions.

### When Adding a New Page
1. Create the page.
2. Copy nav + drawer + footer exactly from an existing page.
3. Add the new page's nav link to all other pages (PowerShell pass).
4. Add the new page's footer link to all other pages (PowerShell pass).
5. Update memory file to reflect new page count.

### Anatomy of the Desktop Nav Insertion Point
```html
      </div>  <!-- closes .nav-dropdown -->
      <a href="NEW-PAGE.html">New Page</a>   ← insert here
      <a href="contact.html">Contact</a>
      <a href="book.html" class="btn btn-primary">Book Consultation</a>
```

### Anatomy of the Mobile Drawer Insertion Point
```html
  <a href="accident.html">Accident &amp; Injury</a>
  <a href="NEW-PAGE.html" style="margin-top:0.5rem;">New Page</a>  ← insert here
  <a href="contact.html" style="margin-top:0.5rem;">Contact</a>
```

---

## 22. Quick-Start Checklist

Use this when starting a new Malaysian law firm website from scratch:

### Discovery (gather before writing a line of code)
- [ ] Firm name (Malay Tetuan / English Messrs form)
- [ ] Registered Bar members & year called
- [ ] Practice areas (which of the 6 standard areas?)
- [ ] Office locations (city, state, postcode, address)
- [ ] Phone numbers per office (formatted: 013-XXXX XXX)
- [ ] WhatsApp numbers per office (wa.me/6XXXXXXXXXX)
- [ ] Email addresses per office
- [ ] Facebook / LinkedIn / Instagram URLs
- [ ] Logo file (circle photo preferred, or SVG wordmark)
- [ ] Team headshots (optional but recommended)
- [ ] Brand colours (or use the default teal/gold system)
- [ ] Any existing testimonials or case summaries

### Build Order
1. `assets/styles.css` — full design system first.
2. `assets/main.js` — shared behaviours.
3. `index.html` — homepage (most complex; validates the design system).
4. Practice area pages (use page shell template; each 1–2 hours).
5. `about.html`, `contact.html`, `book.html`.
6. `calculator.html` — if conveyancing practice exists.
7. Site-wide nav wiring (PowerShell pass after all pages exist).
8. Pre-launch checklist.

### Files to Verify Before Handover
- [ ] `styles.css` — no unused classes from experimentation.
- [ ] `main.js` — no console.log statements, no commented-out dead code.
- [ ] All HTML — consistent indentation, valid markup.
- [ ] All phone numbers — identical across every page.
- [ ] All social links — live and correct.
- [ ] Footer year — uses JS auto-update.
- [ ] Disclaimer — present on calculator and in footer.

---

*Last updated from: Tetuan Bila Salehuddin & Co. website — Ipoh, Perak & Batu Caves, KL*  
*Skill version: 1.0 — May 2026*
