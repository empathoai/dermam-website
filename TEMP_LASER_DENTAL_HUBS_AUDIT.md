# DERMA.M Temporary Laser & Dental Hubs Audit

## Audit Scope
- **Audited routes**:
  - `/es/laser-y-luz` (Laser & Light Hub)
  - `/es/dental` (Dental Hub)
  - English equivalents: `/en/laser-and-light`, `/en/dental`
- **Date/time**: 2026-06-10 10:25:00 (Local Time)
- **Branch name**: `main`
- **Statement**: “Read-only audit. No production code changed.”

---

## Laser & Light Hub Current Implementation
- **Route File**: [src/App.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/App.tsx)
- **Page/Component Ownership**: [src/pages/LaserLightHubPage.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/pages/LaserLightHubPage.tsx) which acts as a wrapper that imports `laserLightHubContent` from `src/data/laserLightHubContent` and renders [src/components/templates/HubPageTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/HubPageTemplate.tsx).
- **Render Order**:
  1. `PageShell`
  2. `HubHeroSection`
  3. `HubIntroSection`
  4. `HubFeaturedTreatments`
  5. `HubAllTreatmentsGrid`
  6. `GoogleReviews`
  7. `HubFAQSection`
  8. `HubFinalCTA`
- **Components Used**:
  - `PageShell` ([src/components/layout/PageShell.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/PageShell.tsx))
  - `SEO` ([src/components/layout/SEO.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/SEO.tsx))
  - `Navbar` ([src/components/layout/Navbar.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/Navbar.tsx))
  - `Footer` ([src/components/layout/Footer.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/Footer.tsx))
  - `WhatsAppFAB` ([src/components/ui/WhatsAppFAB.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/WhatsAppFAB.tsx))
  - `HubHeroSection` ([src/components/sections/hubs/HubHeroSection.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubHeroSection.tsx))
  - `HubIntroSection` ([src/components/sections/hubs/HubIntroSection.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubIntroSection.tsx))
  - `HubFeaturedTreatments` ([src/components/sections/hubs/HubFeaturedTreatments.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubFeaturedTreatments.tsx))
  - `HubAllTreatmentsGrid` ([src/components/sections/hubs/HubAllTreatmentsGrid.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubAllTreatmentsGrid.tsx))
  - `TreatmentCardRail` ([src/components/ui/TreatmentCardRail.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/TreatmentCardRail.tsx))
  - `ResponsiveCardGroup` ([src/components/ui/ResponsiveCardGroup.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/ResponsiveCardGroup.tsx))
  - `GoogleReviews` ([src/components/GoogleReviews.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/GoogleReviews.tsx))
  - `HubFAQSection` ([src/components/sections/hubs/HubFAQSection.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubFAQSection.tsx))
  - `FAQAccordion` ([src/components/ui/FAQAccordion.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/FAQAccordion.tsx))
  - `HubFinalCTA` ([src/components/sections/hubs/HubFinalCTA.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubFinalCTA.tsx))
- **Data Sources**:
  - `laserLightHubContent` ([src/data/laserLightHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/laserLightHubContent.ts))
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
- **Visible Sections**:
  - Hero (Title, Trust Pill, Description, Primary CTA)
  - Intro (Stats row, Description, 3 Benefits column list)
  - Featured Treatments (Header, card rail showing 3 highlighted services)
  - All Treatments Grid (Header, card rail showing all 6 laser/light services)
  - Google Reviews (Header, rating badge, 3 slider review cards)
  - FAQ (Header, accordion with 8 Q&A items)
  - Final CTA (Header, description, background image, primary & secondary buttons)
- **Services Shown**:
  - *Featured*: IPL / Luz Pulsada, Láser Facial, Radiofrecuencia Fraccionada.
  - *All Grid*: IPL / Luz Pulsada, Láser Facial, Radiofrecuencia Fraccionada, Evefus 10, Plasma Frío, Carboxiterapia Facial.
- **Links**: All services link to `/es/reservar` (configured in `laserLightHubContent.ts` as placeholders). No active individual page routes are linked on this page.
- **CTAs**:
  - Hero Button: `"Evalúa tu piel — gratis"` -> `/es/reservar` (internal route)
  - Featured Cards: `"Ver tratamiento →"` -> `/es/reservar` (internal route)
  - All Grid Cards: `"Ver más →"` -> `/es/reservar` (internal route)
  - Final CTA Primary: `"Evalúa tu piel — gratis"` -> `/es/reservar` (internal route)
  - Final CTA Secondary: `"Escríbenos por WhatsApp"` -> WhatsApp link with custom pre-filled message (type: WhatsApp)
- **Metadata Source**: `laserLightHubContent.seo` in [src/data/laserLightHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/laserLightHubContent.ts)
- **Shared Dependencies**: Shared template logic inside `HubPageTemplate`, core page layout shell `PageShell`, and utility styles in `src/index.css`.

---

## Dental Hub Current Implementation
- **Route File**: [src/App.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/App.tsx)
- **Page/Component Ownership**: [src/pages/DentalHubPage.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/pages/DentalHubPage.tsx) which imports `dentalHubContent` from `src/data/dentalHubContent` and renders [src/components/templates/HubPageTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/HubPageTemplate.tsx).
- **Render Order**:
  1. `PageShell`
  2. `HubHeroSection`
  3. `HubIntroSection`
  4. `HubFeaturedTreatments`
  5. `HubAllTreatmentsGrid`
  6. `GoogleReviews`
  7. `HubFAQSection`
  8. `HubFinalCTA`
- **Components Used**: Renders the exact same layout tree as the Laser & Light Hub using `HubPageTemplate`.
- **Data Sources**:
  - `dentalHubContent` ([src/data/dentalHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/dentalHubContent.ts))
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
- **Visible Sections**:
  - Hero (Title, Trust Pill, Description, Primary CTA)
  - Intro (Stats row, Description, 3 Benefits column list)
  - Featured Treatments (Header, card rail showing 3 highlighted services)
  - All Treatments Grid (Header, card rail showing all 7 dental services)
  - Google Reviews (Header, rating badge, 3 slider review cards)
  - FAQ (Header, accordion with 8 Q&A items)
  - Final CTA (Header, description, background image, primary & secondary buttons)
- **Services Shown**:
  - *Featured*: Evaluación Dental, Blanqueamiento Dental, Limpieza Dental.
  - *All Grid*: Evaluación Dental, Limpieza Dental, Blanqueamiento Dental, Diseño de Sonrisa, Carillas, Cuidado Preventivo, Consulta Estética.
- **Links**:
  - Featured:
    - Evaluación Dental -> `/es/reservar` (placeholder)
    - Blanqueamiento Dental -> `/es/blanqueamiento-dental` (Active Tier 3 page)
    - Limpieza Dental -> `/es/limpieza-dental` (Active Tier 3 page)
  - All Grid: All items are configured to route to `/es/reservar` (placeholders).
- **CTAs**:
  - Hero Button: `"Agenda una evaluación"` -> `/es/reservar` (internal route)
  - Featured Cards:
    - Evaluación Dental: `"Primer paso"` -> `/es/reservar` (internal route)
    - Blanqueamiento Dental: `"Ver servicio →"` -> `/es/blanqueamiento-dental` (internal route)
    - Limpieza Dental: `"Ver servicio →"` -> `/es/limpieza-dental` (internal route)
  - All Grid Cards: `"Ver más →"` -> `/es/reservar` (internal route)
  - Final CTA Primary: `"Agenda una evaluación"` -> `/es/reservar` (internal route)
  - Final CTA Secondary: `"Escríbenos por WhatsApp"` -> WhatsApp link with custom pre-filled message (type: WhatsApp)
- **Metadata Source**: `dentalHubContent.seo` in [src/data/dentalHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/dentalHubContent.ts)
- **Shared Dependencies**: Shared template logic inside `HubPageTemplate`, core page layout shell `PageShell`, and utility styles in `src/index.css`.

---

## Route Map

| Route | Type | Source File | Data Source | English Equivalent | Notes |
|---|---|---|---|---|---|
| `/es/laser-y-luz` | Spanish Hub | `src/pages/LaserLightHubPage.tsx` | `src/data/laserLightHubContent.ts` | `/en/laser-and-light` | Main laser/light category directory |
| `/es/dental` | Spanish Hub | `src/pages/DentalHubPage.tsx` | `src/data/dentalHubContent.ts` | `/en/dental` | Main dental category directory |
| `/en/laser-and-light` | English Hub Placeholder | `src/pages/LaserLightHubPage.tsx` | `src/data/laserLightHubContent.ts` | `/en/laser-and-light` | Shares Spanish template (`SUPPORT_ENGLISH = false`) |
| `/en/dental` | English Hub Placeholder | `src/pages/DentalHubPage.tsx` | `src/data/dentalHubContent.ts` | `/en/dental` | Shares Spanish template (`SUPPORT_ENGLISH = false`) |
| `/es/blanqueamiento-dental` | Spanish Tier 3 | `src/pages/es/BlanqueamientoDentalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/teeth-whitening` | Renders `Tier3TreatmentTemplate` |
| `/es/limpieza-dental` | Spanish Tier 3 | `src/pages/es/LimpiezaDentalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/dental-cleaning` | Renders `Tier3TreatmentTemplate` |
| `/es/plasma-frio` | Spanish Tier 3 | `src/pages/es/PlasmaFrioPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate`. Unlinked from Laser hub grid. |
| `/es/carboxiterapia-facial` | Spanish Tier 3 | `src/pages/es/CarboxiterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate`. Unlinked from Laser hub grid. |
| `/es/evefus-10-radiofrecuencia-fraccionada` | Spanish Tier 3 | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate`. Unlinked from Laser hub grid (points to `/es/reservar`). |

---

## Component Inventory

| Page | Component | File Path | Purpose | Shared With Other Pages |
|---|---|---|---|---|
| Hubs | `PageShell` | `src/components/layout/PageShell.tsx` | Global structural wrapper setting layout bounds | Yes, used by every page on the site |
| Hubs | `SEO` | `src/components/layout/SEO.tsx` | Centralized injection of meta tags, canonical link, alternates, and schema | Yes, loaded inside `PageShell` |
| Hubs | `Navbar` | `src/components/layout/Navbar.tsx` | Main website navigation header (desktop/mobile) | Yes, loaded inside `PageShell` |
| Hubs | `HubHeroSection` | `src/components/sections/hubs/HubHeroSection.tsx` | Renders large editorial background hero | Yes, shared by all hub pages |
| Hubs | `HubIntroSection` | `src/components/sections/hubs/HubIntroSection.tsx` | Stats grid, description block, and three benefits checklist | Yes, shared by all hub pages |
| Hubs | `HubFeaturedTreatments` | `src/components/sections/hubs/HubFeaturedTreatments.tsx` | Section header and featured cards container | Yes, shared by all hub pages |
| Hubs | `TreatmentCardRail` | `src/components/ui/TreatmentCardRail.tsx` | Manages display layout (rail on mobile, grid on desktop) | Yes, used in hubs and landing pages |
| Hubs | `RailCard` | `src/components/ui/TreatmentCardRail.tsx` | Individual card mapping image, title, description, and link | Yes, sub-component of `TreatmentCardRail` |
| Hubs | `ResponsiveCardGroup` | `src/components/ui/ResponsiveCardGroup.tsx` | Renders items as mobile horizontal scroll rail and desktop grid | Yes, core layout helper used globally |
| Hubs | `HubAllTreatmentsGrid` | `src/components/sections/hubs/HubAllTreatmentsGrid.tsx` | Section header and comprehensive services rail | Yes, shared by all hub pages |
| Hubs | `GoogleReviews` | `src/components/GoogleReviews.tsx` | Renders Google rating trust score and user reviews | Yes, homepage, other hubs, and landing pages |
| Hubs | `HubFAQSection` | `src/components/sections/hubs/HubFAQSection.tsx` | FAQ layout container rendering the accordion wrapper | Yes, shared by all hub pages |
| Hubs | `FAQAccordion` | `src/components/ui/FAQAccordion.tsx` | Dynamic accordion for Q&A interaction | Yes, used across hubs and custom landing pages |
| Hubs | `HubFinalCTA` | `src/components/sections/hubs/HubFinalCTA.tsx` | Double action section (booking / WhatsApp consultation) | Yes, shared by all hub pages |
| Hubs | `Footer` | `src/components/layout/Footer.tsx` | Links lists, contact details, social links, and copyrights | Yes, loaded inside `PageShell` |
| Hubs | `WhatsAppFAB` | `src/components/ui/WhatsAppFAB.tsx` | Persistent WhatsApp floating action button | Yes, loaded inside `PageShell` |

---

## Data Source Inventory

| Data File | Export Name | Used By | Services Included | Contains Slugs | Contains CTAs | Notes |
|---|---|---|---|---|---|---|
| `src/data/laserLightHubContent.ts` | `laserLightHubContent` | `LaserLightHubPage.tsx` | 6 laser/light treatments total (3 featured) | Yes, in `href` links | Yes, in `ctaLabel` | Primary structure for Laser & Light Hub |
| `src/data/dentalHubContent.ts` | `dentalHubContent` | `DentalHubPage.tsx` | 7 dental treatments total (3 featured) | Yes, in `href` links | Yes, in `ctaLabel` | Primary structure for Dental Hub |
| `src/data/tier3Treatments.ts` | `tier3Treatments`, `facialCatalogTreatments` | Tier 3 Pages (`src/pages/es/*.tsx`) | 21 treatments total | Yes, in `slugEs` and `canonicalEs` | Yes, in `primaryCta`/`secondaryCta` | Central catalog database for Tier 3 pages |
| `src/data/navigation.ts` | `navigationLinks`, `footerLinks` | `Navbar.tsx`, `Footer.tsx` | None | No | No | Defines navbar, header, and footer paths |
| `src/data/siteConfig.ts` | `siteConfig` | Global config access | None | No | No | Houses central contact number, address, and base URL |
| `src/data/bookingContent.ts` | `bookingContent` | `BookingPage.tsx` | 8 selectors (1 featured) | No | Yes, `ctaLabel` and Square/WhatsApp URLs | Feeds booking options |

---

## Current Services Shown

### Laser & Light Hub Services
| Service | Displayed On Hub | Link Destination | Source Data/File | Notes |
|---|---|---|---|---|
| IPL / Luz Pulsada | Yes (Featured & All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |
| Láser Facial | Yes (Featured & All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |
| Radiofrecuencia Fraccionada | Yes (Featured & All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |
| Evefus 10 | Yes (All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |
| Plasma Frío | Yes (All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |
| Carboxiterapia Facial | Yes (All Grid) | `/es/reservar` | `laserLightHubContent.ts` | Placeholder (Direct to Booking) |

### Dental Hub Services
| Service | Displayed On Hub | Link Destination | Source Data/File | Notes |
|---|---|---|---|---|
| Evaluación Dental | Yes (Featured & All Grid) | `/es/reservar` | `dentalHubContent.ts` | Featured points to `/es/reservar`, Grid points to `/es/reservar` |
| Blanqueamiento Dental | Yes (Featured & All Grid) | `/es/blanqueamiento-dental` (Featured)<br>`/es/reservar` (All Grid) | `dentalHubContent.ts` | Inconsistency: featured cards link to active page, grid card links to placeholder |
| Limpieza Dental | Yes (Featured & All Grid) | `/es/limpieza-dental` (Featured)<br>`/es/reservar` (All Grid) | `dentalHubContent.ts` | Inconsistency: featured cards link to active page, grid card links to placeholder |
| Diseño de Sonrisa | Yes (All Grid) | `/es/reservar` | `dentalHubContent.ts` | Placeholder (Direct to Booking) |
| Carillas | Yes (All Grid) | `/es/reservar` | `dentalHubContent.ts` | Placeholder (Direct to Booking) |
| Cuidado Preventivo | Yes (All Grid) | `/es/reservar` | `dentalHubContent.ts` | Placeholder (Direct to Booking) |
| Consulta Estética | Yes (All Grid) | `/es/reservar` | `dentalHubContent.ts` | Placeholder (Direct to Booking) |

---

## Individual Service Routes Found

| Service | Route | Hub | Source File | Data Source | Linked From Hub | Linked Elsewhere | Metadata Exists |
|---|---|---|---|---|---|---|---|
| Blanqueamiento Dental | `/es/blanqueamiento-dental` | Dental | `src/pages/es/BlanqueamientoDentalPage.tsx` | `src/data/tier3Treatments.ts` | Yes (Featured only) | Yes (Related cards) | Yes |
| Limpieza Dental | `/es/limpieza-dental` | Dental | `src/pages/es/LimpiezaDentalPage.tsx` | `src/data/tier3Treatments.ts` | Yes (Featured only) | Yes (Related cards) | Yes |
| Plasma Frío | `/es/plasma-frio` | Laser | `src/pages/es/PlasmaFrioPage.tsx` | `src/data/tier3Treatments.ts` | No (Landed on `/es/reservar`) | Yes (Related cards) | Yes |
| Carboxiterapia Facial | `/es/carboxiterapia-facial` | Laser | `src/pages/es/CarboxiterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | No (Landed on `/es/reservar`) | Yes (Related cards) | Yes |
| Evefus 10 | `/es/evefus-10-radiofrecuencia-fraccionada` | Laser | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | `src/data/tier3Treatments.ts` | No (Landed on `/es/reservar`) | Yes (Related cards) | Yes |

---

## Navigation and Link Exposure

| Location | File Path | Links Found | Notes |
|---|---|---|---|
| Navbar Header | `src/components/layout/Navbar.tsx` | `/es/laser-y-luz`, `/es/dental` | Retrieved dynamically from `navigationLinks` inside `src/data/navigation.ts`. |
| Footer Links | `src/components/layout/Footer.tsx` | None | Neither hubs nor sub-treatments are linked in `footerLinks` inside `src/data/navigation.ts`. |
| Sitemap | N/A | None | No sitemap exists in the codebase. |
| Breadcrumbs | N/A | None | No breadcrumb component exists. |
| Booking Page | `src/pages/BookingPage.tsx` | None | Mapped to WhatsApp consultation CTAs for the respective hubs, but no internal links to the hub pages themselves. |
| Related Treatments | `src/components/sections/tier3/Tier3RelatedTreatments.tsx` | `/es/blanqueamiento-dental`, `/es/limpieza-dental` | Dental services are linked in reciprocal related treatment rails. Laser/light services are referenced in other facial related sections. |
| Language Switcher | `src/components/layout/Footer.tsx` | None | Static labels `"ES"` and `"EN"` exist without active translation click handlers. |
| Hardcoded internal links | N/A | None | No additional hardcoded internal links pointing to these hubs were found in the codebase. |

---

## CTA Audit

| Page | Label | Source File | Destination | Type |
|---|---|---|---|---|
| `/es/laser-y-luz` | `"Evalúa tu piel — gratis"` | `HubHeroSection.tsx` | `/es/reservar` | internal route |
| `/es/laser-y-luz` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/reservar` (3 featured items) | internal route |
| `/es/laser-y-luz` | `"Ver más →"` | `TreatmentCardRail.tsx` | `/es/reservar` (6 grid items) | internal route |
| `/es/laser-y-luz` | `"Evalúa tu piel — gratis"` | `HubFinalCTA.tsx` | `/es/reservar` | internal route |
| `/es/laser-y-luz` | `"Escríbenos por WhatsApp"` | `HubFinalCTA.tsx` | WhatsApp API link with custom message | WhatsApp |
| `/es/dental` | `"Agenda una evaluación"` | `HubHeroSection.tsx` | `/es/reservar` | internal route |
| `/es/dental` | `"Primer paso"` | `TreatmentCardRail.tsx` | `/es/reservar` (for Evaluación Dental) | internal route |
| `/es/dental` | `"Ver servicio →"` | `TreatmentCardRail.tsx` | `/es/blanqueamiento-dental` | internal route |
| `/es/dental` | `"Ver servicio →"` | `TreatmentCardRail.tsx` | `/es/limpieza-dental` | internal route |
| `/es/dental` | `"Ver más →"` | `TreatmentCardRail.tsx` | `/es/reservar` (7 grid items) | internal route |
| `/es/dental` | `"Agenda una evaluación"` | `HubFinalCTA.tsx` | `/es/reservar` | internal route |
| `/es/dental` | `"Escríbenos por WhatsApp"` | `HubFinalCTA.tsx` | WhatsApp API link with custom message | WhatsApp |

---

## SEO and Metadata Audit

| Page | Title Source | Description Source | Canonical | Hreflang | Schema | Sitemap |
|---|---|---|---|---|---|---|
| `/es/laser-y-luz` | `laserLightHubContent.seo.title` | `laserLightHubContent.seo.description` | `https://dermamskinhealth.com/es/laser-y-luz/` | `es` & `x-default` alternate (English mapped but disabled by `SUPPORT_ENGLISH = false`) | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/dental` | `dentalHubContent.seo.title` | `dentalHubContent.seo.description` | `https://dermamskinhealth.com/es/dental/` | `es` & `x-default` alternate (English mapped but disabled by `SUPPORT_ENGLISH = false`) | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/blanqueamiento-dental` | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/blanqueamiento-dental/` | `es` & `x-default` alternate | `LocalBusiness`, `HealthAndBeautyBusiness` & `FAQPage` | No |
| `/es/limpieza-dental` | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/limpieza-dental/` | `es` & `x-default` alternate | `LocalBusiness`, `HealthAndBeautyBusiness` & `FAQPage` | No |
| `/es/plasma-frio` | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/plasma-frio/` | `es` & `x-default` alternate (English missing in routeMap) | `LocalBusiness`, `HealthAndBeautyBusiness` & `FAQPage` | No |
| `/es/carboxiterapia-facial` | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/carboxiterapia-facial/` | `es` & `x-default` alternate (English missing in routeMap) | `LocalBusiness`, `HealthAndBeautyBusiness` & `FAQPage` | No |
| `/es/evefus-10-radiofrecuencia-fraccionada` | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/evefus-10-radiofrecuencia-fraccionada/` | `es` & `x-default` alternate (English missing in routeMap) | `LocalBusiness`, `HealthAndBeautyBusiness` & `FAQPage` | No |

---

## Shared Dependencies

- **Shared Components**:
  - `PageShell` ([src/components/layout/PageShell.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/PageShell.tsx))
  - `Navbar` ([src/components/layout/Navbar.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/Navbar.tsx))
  - `Footer` ([src/components/layout/Footer.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/Footer.tsx))
  - `WhatsAppFAB` ([src/components/ui/WhatsAppFAB.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/WhatsAppFAB.tsx))
  - `GoogleReviews` ([src/components/GoogleReviews.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/GoogleReviews.tsx))
  - `HubPageTemplate` ([src/components/templates/HubPageTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/HubPageTemplate.tsx))
  - `Tier3TreatmentTemplate` ([src/components/templates/Tier3TreatmentTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/Tier3TreatmentTemplate.tsx))
- **Layout Wrappers**:
  - `PageShell` acts as the primary layout wrapper.
- **Card Components**:
  - `TreatmentCardRail` (handles horizontal swipe rail logic on mobile / static grid on desktop)
  - `RailCard` (maps individual card metadata)
  - `ResponsiveCardGroup`
- **CTA Components**:
  - `Button` ([src/components/ui/Button.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/Button.tsx))
- **Data Files**:
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
  - `navigationLinks` / `footerLinks` ([src/data/navigation.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/navigation.ts))
  - `getSiteSchema` ([src/data/schema.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/schema.ts))
- **Style Files**:
  - Tailwind styles defined in `src/index.css`.
- **Utilities**:
  - Framer motion components via `motion/react`.
- **SEO Helpers**:
  - `SEO` ([src/components/layout/SEO.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/SEO.tsx))
- **Route Helpers**:
  - `hreflangMap` / `SUPPORT_ENGLISH` ([src/config/routeMap.ts](file:///d:/Derma_Content/DermaM-WebSite/src/config/routeMap.ts))

---

## Current State Summary

- Both hubs are dynamic, template-driven category pages powered by a shared `HubPageTemplate.tsx` component and populated by static configuration files (`laserLightHubContent.ts` and `dentalHubContent.ts`).
- For `/es/laser-y-luz`, all featured and grid services are currently hardcoded to point to the `/es/reservar` route as placeholders, meaning no active individual treatment pages are linked on this page. This is despite the existence of active routes/pages for `Evefus 10`, `Plasma Frío`, and `Carboxiterapia Facial` in the codebase (`/es/evefus-10-radiofrecuencia-fraccionada`, `/es/plasma-frio`, `/es/carboxiterapia-facial`).
- For `/es/dental`, the featured treatments block links to two active pages (`/es/blanqueamiento-dental` and `/es/limpieza-dental`), while the grid block redirects all items to `/es/reservar` (meaning the grid has a placeholder redirect for those same two services). Other dental services, such as "Diseño de Sonrisa" and "Carillas", point to `/es/reservar` as placeholders.
- English route placeholders exist in `src/App.tsx` (`/en/laser-and-light` and `/en/dental`) and are mapped in `routeMap.ts`, but are currently inaccessible as the `SUPPORT_ENGLISH` flag is set to `false`. No individual English treatment routes exist in the routing table.
- Canonical URLs, schemas (`LocalBusiness` & `HealthAndBeautyBusiness`), and language alternates are handled dynamically via `routeMap.ts` but are restricted by the `SUPPORT_ENGLISH` flag.
