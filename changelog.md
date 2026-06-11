# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **`DERMA_M_EDITORIAL_FIRST_IMPLEMENTATION_AUDIT.md`** — full-site editorial-first compliance audit. 38 routes reviewed, 90+ components evaluated. Documents critical violations (TreatmentBenefitCard icon system, ValuesSection, zombie components), high-priority violations (protocol card grids, HeroSection trust strip, CertificationsSection, Navbar missing CTA), surface rhythm problems per page, typography constant adoption gaps, icon policy violations with recommended replacements, conversion flow issues, and a 6-phase refactor plan. No implementation files were changed.
- **`DESIGN.md` — Editorial-First Design Direction** — new top-level section inserted after the Section Surface Rhythm block. Covers: core principle (do not solve every section with cards), four editorial layout patterns (Dark Editorial Inversion, Editorial Split Section, Full-Bleed Interstitial, Editorial Proof List), Iconography Policy with approved functional icon list and decorative icon restrictions, Surface Rhythm Anti-Flat Rule, Card Usage Rules (approved vs rejected contexts), Home Differentiators Rule, Implementation Enforcement checklist, and Anti-Patterns list. No tokens, colors, fonts, or component specs changed.
- `DERMA_M_TYPOGRAPHY_AND_ICON_AUDIT.md` — documents all arbitrary heading classes, decorative icon usage per component, keep/remove classification for every icon import, and priority action list against DESIGN.md roles.
- `src/lib/typography.ts` — canonical Tailwind class string constants for every DESIGN.md typography role (`displayHeroClass`, `headingSectionClass`, `headingSectionSoftClass`, `headingSubsectionClass`, `cardTitleClass`, `bodyLgClass`, `bodyMdClass`, `bodySmClass`, `eyebrowClass`, `statNumberClass`, `statLabelClass`). Single source of truth; call sites add color token separately.
- `src/components/sections/shared/PostHeroOrientationSection.tsx` — canonical post-hero orientation primitive shared by all hub intro and Tier 1 landing audience sections. Exports `OrientationCard` and `PostHeroOrientationSectionProps`. Typography locked to `headingSectionClass` from `src/lib/typography.ts`. Cards use `min-h-[280px]`, `01`/`02`/`03` index, thin divider, title (`text-[1.05rem] lg:text-[1.15rem] font-bold uppercase`), body (`text-base font-light leading-[1.65]`), and plain `text-sm font-medium` labels joined with ` · `. 2-card dental layout auto-centers with `max-w-4xl`. Optional per-card CTA and section-level CTA.
- `decisionCards` field added to `HubPageContent['intro']` type. Populated with 3 cards each in `facialHubContent.ts`, `bodyHubContent.ts`, `laserLightHubContent.ts`, and 2 cards in `dentalHubContent.ts`.

### Changed
- **`DifferentiatorsSection` (home)** — full editorial rebuild. Background image retained with `bg-base-900/35` full-section wash. Layout: `py-28 lg:py-32`, `lg:grid-cols-[0.9fr_1.1fr]`. Left panel: `bg-base-900/82 backdrop-blur-sm border border-white/10 rounded-[1.5rem] p-8 lg:p-12`; contains eyebrow `NUESTRO ENFOQUE`, H2 `DIAGNÓSTICO, PROTOCOLO Y SEGUIMIENTO` (`headingSectionClass`), `w-10 h-px` divider, `bodyLgClass` body copy, text-only mini-list with `border-white/10` dividers, and `Agendar diagnóstico →` editorial link. Right: three `bg-base-100/92 backdrop-blur-sm border border-[rgba(20,19,19,0.12)] rounded-[1rem]` proof blocks using `cardTitleClass` titles (sentence case) + `bodyMdClass` body. Stats (`10+`, `1,000+`, `100%`) removed from this section entirely — no strip, no panel placement, no hidden markup. All decorative Lucide icon imports removed.
- **Hub intro sections** — `HubIntroSection` rebuilt as a thin adapter over `PostHeroOrientationSection`. Old pill-navigation strip replaced with editorial decision cards. Two-column layout (`lg:grid-cols-[0.9fr_1.1fr]`) removed in favor of the shared centered-header + card-grid pattern. Chips still present in data for backwards compat but no longer rendered.
- **Tier 1 audience sections** — `PrfAudienceSection`, `DeepFacialAudienceSection`, `PostOpSurgeryTypesSection` chip-strips replaced with `PostHeroOrientationSection`. Treatment-specific eyebrow, headline, description, and 3 decision cards per page. Post-Op includes a `sectionCta` WhatsApp link via `siteConfig.whatsappMessagePostOp`. Typography scale, card height, spacing, and label treatment now identical across all 7 affected routes.
- **`GoogleReviews`** — added `variant?: 'light' | 'dark'` prop. Dark variant: `bg-base-900`, `text-base-100`/`text-base-300` hierarchy, `bg-white/5 border-white/10` cards, uppercase `VER TODAS LAS RESEÑAS EN GOOGLE →` CTA. `ReviewText` updated with `isDark` param for correct toggle-button colors. `HubPageTemplate` now passes `variant="dark"` so all four hub pages render the dark reviews section.

### Earlier session history (committed cfb1920 and prior)
- Standardized all page heroes to fullscreen responsive hero contract (`100svh`, header CSS vars, `hero-viewport`/`hero-content-viewport` classes).
- Added `HubCatalogSections` editorial Z-pattern catalog component with Stitch-inspired layout (watermark numbers, treatment chips, `Ideal para` checklist, solid/outline CTA hierarchy).
- Migrated all four hubs (Facial, Corporal, Láser/Luz, Dental) to catalog-sections layout; aligned catalog content with official service lists.
- Replaced post-hero check-card sections on PRF, Limpieza Facial, and Postoperatorio with compact orientation strips.
- Rebuilt `PrfEducationSection` as premium editorial split (image + numbered differentiator cards); removed dark PRP vs PRF comparison table.
- Converted `PostOpUrgencySection` from fear-based warning block to premium two-column image-led editorial section; removed fear language.
- Redesigned `Tier3QuickFitSection` as horizontal metrics strip + centered candidate-pills card.
- Replaced `border-l-4` founder quote tabs across Home, About, PRF, Limpieza Facial, and Postoperatorio with `border-y border-border-subtle` editorial pull-quote treatment.
- Full PRF page text rewrite: removed absolute claims, applied soft language throughout.
- Remapped broken image paths across all hub, Tier 1, Tier 3, About, Booking, Contact, and Home sections to existing repository assets.
- Added `CLAUDE.md` at repository root with dev commands, architecture overview, design token summary, and Tier 3 page guide.
- Added `catalogSections` data and `HubCatalogSection` type; added optional `chips` field to hub intro type.
- Created `changelog.md` and registered it in `AGENTS.md` as mandatory edit registry.
