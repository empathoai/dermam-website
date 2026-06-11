# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run lint       # TypeScript type-check (no emitting)
npm run preview    # Preview production build
npm run clean      # Remove dist/ and server.js
```

No test suite is configured. Type-check is the only automated validator: `npm run lint`.

## Architecture

**Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4, React Router v7, Motion (Framer), react-helmet-async.

**Entry:** `src/main.tsx` — supports both CSR (`createRoot`) and SSG hydration (`hydrateRoot`). `src/App.tsx` defines all routes.

**Routing:** All live routes are prefixed `/es/`. English routes under `/en/` are placeholder stubs reusing Spanish page components. The root `/` redirects to `/es`. `src/config/routeMap.ts` tracks hreflang mappings.

**Page types and their data sources:**

| Page type | Location | Data source |
|-----------|----------|-------------|
| Home | `src/pages/HomePage.tsx` | `src/data/homeContent.ts` |
| Hub pages (4 treatment hubs) | `src/pages/*HubPage.tsx` | `src/data/*HubContent.ts` |
| Tier 1 landings (PRF, PostOp, DeepFacial, IVTherapy) | `src/pages/*LandingPage.tsx` / `IVTherapyPage.tsx` | `src/data/*Landing.ts` / `ivTherapyContent.ts` |
| Tier 3 treatment pages | `src/pages/es/*.tsx` | `src/data/tier3Treatments.ts` + inline |
| Utility pages (About, Contact, Booking) | `src/pages/*.tsx` | `src/data/aboutContent.ts`, `contactContent.ts`, `bookingContent.ts` |

**Tier 3 treatment pages** use `src/components/templates/Tier3TreatmentTemplate.tsx` — a shared layout wrapping treatment-specific data passed as props.

**Component organization:**
- `src/components/ui/` — atomic, reusable primitives (Button, Card, FAQAccordion, StatItem, etc.)
- `src/components/sections/` — page-section-level components, grouped by page/feature (home/, hubs/, tier3/, prf/, postop/, etc.)
- `src/components/layout/` — Navbar, Footer, PageShell, SEO

**Design system:** `DESIGN.md` is the single source of truth for all visual decisions. CSS custom properties are defined in `src/styles/tokens.css` and registered in Tailwind via `@theme {}`. Always use design tokens — never hardcode hex values or arbitrary spacing.

**Key tokens:**
- Canvas: `--color-canvas` (`#f2f0f1`, off-white default page background)
- Surface: `--color-surface` (`#ffffff`, content cards/forms)
- Primary dark: `--color-base-900` (`#141313`, hero/trust/footer)
- Font stack: `--font-sans` (Poppins), `--font-script` (Hamilton, H1 accent only)
- Header height vars: `--header-height` (96px desktop) / `--mobile-header-height` (72px)

**Business context:** DERMA.M Skin Health, West Palm Beach FL. Spanish-primary site. All user-facing copy is in Spanish. Business contact in `src/data/siteConfig.ts`.

## Critical constraints (from AGENTS.md)

- **`DESIGN.md` is authoritative** — verify any visual change against it before and after editing.
- **Never hardcode hex colors** or invent new tokens not defined in `DESIGN.md`.
- **Changelog required** — every code/style/copy/config change must be recorded in `changelog.md` at the root.
- **No production builds** unless the user explicitly requests one.
- **UTF-8 only** — all files must be read/written as UTF-8. Spanish accented characters (`á é í ó ú ü ñ ¿ ¡`) must never be corrupted via ANSI/Windows-1252 encoding.
- **Repository boundary** — only touch files inside `D:\Derma_Content\DermaM-WebSite`.

## Adding a new Tier 3 treatment page

1. Create `src/pages/es/[TreatmentName]Page.tsx` using `Tier3TreatmentTemplate`.
2. Add the route to `src/App.tsx`.
3. Add hreflang entry to `src/config/routeMap.ts`.
4. Register the treatment in `src/data/tier3Treatments.ts` and the relevant hub content file.
