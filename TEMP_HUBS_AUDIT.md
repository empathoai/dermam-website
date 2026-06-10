# DERMA.M Temporary Hubs Audit

## Audit Scope

- **Audited Routes**:
  - `/es/tratamientos-faciales` (Facial Hub)
  - `/es/tratamientos-corporales` (Corporate/Body Hub)
- **Audit Date/Time**: 2026-06-10 03:10:00 (Local Time)
- **Current Branch Name**: `main`
- **Local URL**: `http://localhost:3000`
- **Statement**: “Read-only audit. No production code changed.”

---

## Facial Hub Current Implementation

Documenting the current implementation of `/es/tratamientos-faciales`:

- **Route File**: [src/App.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/App.tsx)
- **Page/Component Ownership**: [src/pages/FacialTreatmentsHubPage.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/pages/FacialTreatmentsHubPage.tsx) which acts as a wrapper that imports `facialHubContent` from `src/data/facialHubContent` and renders [src/components/templates/HubPageTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/HubPageTemplate.tsx).
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
- **Data Sources Used**:
  - `facialHubContent` ([src/data/facialHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/facialHubContent.ts))
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
- **Current Visible Sections**:
  - Hero (Title, Trust Pill, Description, Primary CTA)
  - Intro (Stats row, Description, 3 Benefits column list)
  - Featured Treatments (Header, card rail showing 4 highlighted services)
  - All Treatments Grid (Header, card rail showing all 21 facial services)
  - Google Reviews (Header, rating badge, 3 slider review cards)
  - FAQ (Header, accordion with 6 Q&A items)
  - Final CTA (Header, description, background image, primary & secondary buttons)
- **Current Treatments Shown**:
  - *Featured*: Limpieza Facial Profunda, Hidrofacial, Plasma Rico en Plaquetas (PRP) y Fibrina, Microneedling Dermapen 3.
  - *All Grid*: Limpieza Facial Profunda, Hidrofacial, Peel Coreano, Oxigenoterapia Facial, Evefus 10 (Radiofrecuencia Fraccionada), Radiofrecuencia Facial, Ultrasonido Facial, Microneedling Dermapen 3, Plasma Rico en Plaquetas (PRP) y Fibrina, Plasma Ozono, Plasma Frío, Carboxiterapia Facial, EMS Facial + Enyong, Masajes Faciales para Marcación Mandibular, Manchas y Cicatrices de Acné, Acné, Rejuvenecimiento Facial / Lifting, Dermabrasión Facial, Masajes Relajantes Faciales, Maderoterapia Facial, HIFU Facial.
- **Current Treatment Links**:
  - Limpieza Facial Profunda -> `/es/limpieza-facial-profunda`
  - Hidrofacial -> `/es/hidrofacial`
  - PRP y Fibrina -> `/es/plasma-rico-en-plaquetas-west-palm-beach`
  - Microneedling Dermapen 3 -> `/es/microneedling`
  - Peel Coreano -> `/es/peel-coreano`
  - Oxigenoterapia Facial -> `/es/oxigenoterapia-facial`
  - Evefus 10 (Radiofrecuencia Fraccionada) -> `/es/evefus-10-radiofrecuencia-fraccionada`
  - Radiofrecuencia Facial -> `/es/radiofrecuencia-facial`
  - Ultrasonido Facial -> `/es/ultrasonido-facial`
  - Plasma Ozono -> `/es/plasma-ozono`
  - Plasma Frío -> `/es/plasma-frio`
  - Carboxiterapia Facial -> `/es/carboxiterapia-facial`
  - EMS Facial + Enyong -> `/es/ems-facial-enyong`
  - Masajes Faciales para Marcación Mandibular -> `/es/masajes-faciales-marcacion-mandibular`
  - Manchas y Cicatrices de Acné -> `/es/reservar` (Placeholder)
  - Acné -> `/es/reservar` (Placeholder)
  - Rejuvenecimiento Facial / Lifting -> `/es/reservar` (Placeholder)
  - Dermabrasión Facial -> `/es/dermabrasion-facial`
  - Masajes Relajantes Faciales -> `/es/masajes-relajantes-faciales`
  - Maderoterapia Facial -> `/es/maderoterapia-facial`
  - HIFU Facial -> `/es/hifu-facial`
- **Current CTA Labels and Destinations**:
  - Hero Button: `"Evalúa tu piel — gratis"` -> `/es/reservar`
  - Featured Cards: `"Ver tratamiento →"` -> Specific treatment pages or `/es/reservar`
  - All Grid Cards: `"Ver más →"` -> Specific treatment pages or `/es/reservar`
  - Final CTA Primary: `"Evalúa tu piel — gratis"` -> `/es/reservar`
  - Final CTA Secondary: `"Escríbenos por WhatsApp"` -> WhatsApp link using `whatsappMessage` template from config
- **Current Metadata Source**: `facialHubContent.seo` in [src/data/facialHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/facialHubContent.ts)
- **Shared Dependencies**: Shared template logic inside `HubPageTemplate`, core page layout shell `PageShell`, and utility styles in `src/index.css`.

---

## Corporate Hub Current Implementation

Documenting the current implementation of `/es/tratamientos-corporales`:

- **Route File**: [src/App.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/App.tsx)
- **Page/Component Ownership**: [src/pages/BodyTreatmentsHubPage.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/pages/BodyTreatmentsHubPage.tsx) which imports `bodyHubContent` from `src/data/bodyHubContent` and renders [src/components/templates/HubPageTemplate.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/templates/HubPageTemplate.tsx).
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
- **Data Sources Used**:
  - `bodyHubContent` ([src/data/bodyHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/bodyHubContent.ts))
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
- **Current Visible Sections**:
  - Hero (Title, Trust Pill, Description, Primary CTA)
  - Intro (Stats row, Description, 3 Benefits column list)
  - Featured Treatments (Header, card rail showing 4 highlighted services)
  - All Treatments Grid (Header, card rail showing all 13 corporate services)
  - Google Reviews (Header, rating badge, 3 slider review cards)
  - FAQ (Header, accordion with 6 Q&A items)
  - Final CTA (Header, description, background image, primary & secondary buttons)
- **Current Treatments Shown**:
  - *Featured*: Masajes Postoperatorios (Drenaje Linfático), Lipo 360 sin Cirugía, Maderoterapia Corporal, Estrías y Celulitis.
  - *All Grid*: Masajes Postoperatorios (Drenaje Linfático), Lipo 360 sin Cirugía, Levantamiento de Glúteos, Marcación Abdominal Corporal, Detox Corporal (Desintoxicación Iónica), BodyWrap & Scrub, Maderoterapia Corporal, Corrientes Rusas Corporales, EMS Tesla Power (Musculación sin esfuerzo), HIFU Corporal, Carboxiterapia Corporal, Estrías y Celulitis, Capilar Estético.
- **Current Treatment Links**:
  - Masajes Postoperatorios (Drenaje Linfático) -> `/es/postoperatorio-west-palm-beach`
  - Lipo 360 sin Cirugía -> `/es/reservar` (Placeholder)
  - Levantamiento de Glúteos -> `/es/reservar` (Placeholder)
  - Marcación Abdominal Corporal -> `/es/reservar` (Placeholder)
  - Detox Corporal (Desintoxicación Iónica) -> `/es/reservar` (Placeholder)
  - BodyWrap & Scrub -> `/es/reservar` (Placeholder)
  - Maderoterapia Corporal -> `/es/reservar` (Placeholder)
  - Corrientes Rusas Corporales -> `/es/reservar` (Placeholder)
  - EMS Tesla Power (Musculación sin esfuerzo) -> `/es/reservar` (Placeholder)
  - HIFU Corporal -> `/es/reservar` (Placeholder)
  - Carboxiterapia Corporal -> `/es/reservar` (Placeholder)
  - Estrías y Celulitis -> `/es/reservar` (Placeholder)
  - Capilar Estético -> `/es/reservar` (Placeholder)
  *Note*: Cavitación, Radiofrecuencia Corporal, and Drenaje Linfático Corporal pages exist in the codebase but are currently unlinked in `bodyHubContent.ts`.
- **Current CTA Labels and Destinations**:
  - Hero Button: `"Evalúa tu caso — gratis"` -> `/es/reservar`
  - Featured Cards: `"Ver tratamiento →"` or `"Ver más →"` -> `/es/postoperatorio-west-palm-beach` or `/es/reservar`
  - All Grid Cards: `"Ver más →"` -> `/es/postoperatorio-west-palm-beach` or `/es/reservar`
  - Final CTA Primary: `"Evalúa tu caso — gratis"` -> `/es/reservar`
  - Final CTA Secondary: `"Escríbenos por WhatsApp"` -> WhatsApp link using `whatsappMessage` template from config
- **Current Metadata Source**: `bodyHubContent.seo` in [src/data/bodyHubContent.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/bodyHubContent.ts)
- **Shared Dependencies**: Shared template logic inside `HubPageTemplate`, core page layout shell `PageShell`, and utility styles in `src/index.css`.

---

## Route Map

| Route | Type | Source File | Data Source | English Equivalent | Notes |
|---|---|---|---|---|---|
| `/es/tratamientos-faciales` | Spanish Hub | `src/pages/FacialTreatmentsHubPage.tsx` | `src/data/facialHubContent.ts` | `/en/facial-treatments` | Main facial services directory |
| `/es/tratamientos-corporales` | Spanish Hub | `src/pages/BodyTreatmentsHubPage.tsx` | `src/data/bodyHubContent.ts` | `/en/body-treatments` | Main corporate services directory |
| `/en/facial-treatments` | English Hub Placeholder | `src/pages/FacialTreatmentsHubPage.tsx` | `src/data/facialHubContent.ts` | `/en/facial-treatments` | Shares Spanish template (SUPPORT_ENGLISH = false) |
| `/en/body-treatments` | English Hub Placeholder | `src/pages/BodyTreatmentsHubPage.tsx` | `src/data/bodyHubContent.ts` | `/en/body-treatments` | Shares Spanish template (SUPPORT_ENGLISH = false) |
| `/es/limpieza-facial-profunda` | Spanish Tier 1 | `src/pages/DeepFacialCleansingLandingPage.tsx` | Custom component properties | None | Fully custom landing page |
| `/es/plasma-rico-en-plaquetas-west-palm-beach` | Spanish Tier 1 | `src/pages/PrfLandingPage.tsx` | Custom component properties | None | Fully custom landing page |
| `/es/postoperatorio-west-palm-beach` | Spanish Tier 1 | `src/pages/PostOpLandingPage.tsx` | Custom component properties | None | Fully custom landing page |
| `/es/hidrofacial` | Spanish Tier 3 | `src/pages/es/HidrofacialPage.tsx` | `src/data/tier3Treatments.ts` | `/en/hydrofacial` | Renders `Tier3TreatmentTemplate` |
| `/es/microneedling` | Spanish Tier 3 | `src/pages/es/MicroneedlingPage.tsx` | `src/data/tier3Treatments.ts` | `/en/microneedling` | Renders `Tier3TreatmentTemplate` |
| `/es/blanqueamiento-dental` | Spanish Tier 3 | `src/pages/es/BlanqueamientoDentalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/teeth-whitening` | Renders `Tier3TreatmentTemplate` |
| `/es/limpieza-dental` | Spanish Tier 3 | `src/pages/es/LimpiezaDentalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/dental-cleaning` | Renders `Tier3TreatmentTemplate` |
| `/es/peel-coreano` | Spanish Tier 3 | `src/pages/es/PeelCoreanoPage.tsx` | `src/data/tier3Treatments.ts` | `/en/korean-peel` | Renders `Tier3TreatmentTemplate` |
| `/es/oxigenoterapia-facial` | Spanish Tier 3 | `src/pages/es/OxigenoterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | `/en/oxygen-facial-therapy` | Renders `Tier3TreatmentTemplate` |
| `/es/cavitacion` | Spanish Tier 3 | `src/pages/es/CavitacionPage.tsx` | `src/data/tier3Treatments.ts` | `/en/cavitation` | Unlinked from corporate hub grid |
| `/es/radiofrecuencia-corporal` | Spanish Tier 3 | `src/pages/es/RadiofrecuenciaCorporalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/body-rf-therapy` | Unlinked from corporate hub grid |
| `/es/drenaje-linfatico-corporal` | Spanish Tier 3 | `src/pages/es/DrenajeLinfaticoCorporalPage.tsx` | `src/data/tier3Treatments.ts` | `/en/body-lymphatic-drainage` | Unlinked from corporate hub grid |
| `/es/radiofrecuencia-facial` | Spanish Tier 3 | `src/pages/es/RadiofrecuenciaFacialPage.tsx` | `src/data/tier3Treatments.ts` | `/en/facial-rf-therapy` | Renders `Tier3TreatmentTemplate` |
| `/es/ultrasonido-facial` | Spanish Tier 3 | `src/pages/es/UltrasonidoFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/plasma-ozono` | Spanish Tier 3 | `src/pages/es/PlasmaOzonoPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/plasma-frio` | Spanish Tier 3 | `src/pages/es/PlasmaFrioPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/carboxiterapia-facial` | Spanish Tier 3 | `src/pages/es/CarboxiterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/ems-facial-enyong` | Spanish Tier 3 | `src/pages/es/EmsFacialEnyongPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/masajes-faciales-marcacion-mandibular` | Spanish Tier 3 | `src/pages/es/MasajesFacialesMarcacionMandibularPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/dermabrasion-facial` | Spanish Tier 3 | `src/pages/es/DermabrasionFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/masajes-relajantes-faciales` | Spanish Tier 3 | `src/pages/es/MasajesRelajantesFacialesPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/maderoterapia-facial` | Spanish Tier 3 | `src/pages/es/MaderoterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/hifu-facial` | Spanish Tier 3 | `src/pages/es/HifuFacialPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |
| `/es/evefus-10-radiofrecuencia-fraccionada` | Spanish Tier 3 | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | `src/data/tier3Treatments.ts` | None | Renders `Tier3TreatmentTemplate` |

---

## Component Inventory

| Page | Component | File Path | Purpose | Shared With Other Pages |
|---|---|---|---|---|
| Hubs | `PageShell` | `src/components/layout/PageShell.tsx` | Global structural wrapper setting layout bounds | Yes, used by every page on the site |
| Hubs | `SEO` | `src/components/layout/SEO.tsx` | Centralized injection of meta tags, canonical link, alternates, and schema | Yes, loaded inside `PageShell` |
| Hubs | `Navbar` | `src/components/layout/Navbar.tsx` | Main website navigation header (desktop/mobile) | Yes, loaded inside `PageShell` |
| Hubs | `HubHeroSection` | `src/components/sections/hubs/HubHeroSection.tsx` | Renders large editorial background hero | Yes, shared by facial and body hubs |
| Hubs | `HubIntroSection` | `src/components/sections/hubs/HubIntroSection.tsx` | Stats grid, description block, and three benefits checklist | Yes, shared by facial and body hubs |
| Hubs | `HubFeaturedTreatments` | `src/components/sections/hubs/HubFeaturedTreatments.tsx` | Section header and featured cards container | Yes, shared by facial and body hubs |
| Hubs | `TreatmentCardRail` | `src/components/ui/TreatmentCardRail.tsx` | Manages display layout (rail on mobile, grid on desktop) | Yes, used in hubs and landing pages |
| Hubs | `RailCard` | `src/components/ui/TreatmentCardRail.tsx` (RailCard) | Individual card mapping image, title, description, and link | Yes, sub-component of `TreatmentCardRail` |
| Hubs | `ResponsiveCardGroup` | `src/components/ui/ResponsiveCardGroup.tsx` | Renders items as mobile horizontal scroll rail and desktop grid | Yes, core layout helper used globally |
| Hubs | `HubAllTreatmentsGrid` | `src/components/sections/hubs/HubAllTreatmentsGrid.tsx` | Section header and comprehensive services rail | Yes, shared by facial and body hubs |
| Hubs | `GoogleReviews` | `src/components/GoogleReviews.tsx` | Renders Google rating trust score and user reviews | Yes, homepage, post-op, and deep facial landings |
| Hubs | `HubFAQSection` | `src/components/sections/hubs/HubFAQSection.tsx` | FAQ layout container rendering the accordion wrapper | Yes, shared by facial and body hubs |
| Hubs | `FAQAccordion` | `src/components/ui/FAQAccordion.tsx` | Dynamic accordion for Q&A interaction | Yes, used across hubs and custom landing pages |
| Hubs | `HubFinalCTA` | `src/components/sections/hubs/HubFinalCTA.tsx` | Double action section (booking / WhatsApp consultation) | Yes, shared by facial and body hubs |
| Hubs | `Footer` | `src/components/layout/Footer.tsx` | Links lists, contact details, social links, and copyrights | Yes, loaded inside `PageShell` |
| Hubs | `WhatsAppFAB` | `src/components/ui/WhatsAppFAB.tsx` | Persistent WhatsApp floating action button | Yes, loaded inside `PageShell` |

---

## Data Source Inventory

| Data File | Export Name | Used By | Treatments Included | Contains Slugs | Contains CTAs | Notes |
|---|---|---|---|---|---|---|
| `src/data/facialHubContent.ts` | `facialHubContent` | `FacialTreatmentsHubPage.tsx` | 21 facial treatments total (4 featured) | Yes, in `href` links | Yes, in `ctaLabel` | Primary structure for facial hub |
| `src/data/bodyHubContent.ts` | `bodyHubContent` | `BodyTreatmentsHubPage.tsx` | 13 corporate treatments total (4 featured) | Yes, in `href` links | Yes, in `ctaLabel` | Primary structure for corporate hub |
| `src/data/tier3Treatments.ts` | `tier3Treatments`, `facialCatalogTreatments` | Tier 3 Pages (`src/pages/es/*.tsx`) | 21 treatments total | Yes, in `slugEs` and `canonicalEs` | Yes, in `primaryCta` / `secondaryCta` | Central catalog database for Tier 3 pages |
| `src/data/navigation.ts` | `navigationLinks`, `footerLinks` | `Navbar.tsx`, `Footer.tsx` | None | No | No | Defines navbar, header, and footer paths |
| `src/data/siteConfig.ts` | `siteConfig` | Global config access | None | No | No | Houses central contact number, address, and base URL |
| `src/data/bookingContent.ts` | `bookingContent` | `BookingPage.tsx` | 8 selectors (1 featured) | No | Yes, `ctaLabel` and Square/WhatsApp URLs | Feeds booking options |

---

## Current Treatments Shown

### Facial Treatments

| Treatment | Displayed On Hub | Link Destination | Source Data/File | Notes |
|---|---|---|---|---|
| Limpieza Facial Profunda | Yes (Featured & All Grid) | `/es/limpieza-facial-profunda` | `facialHubContent.ts` | Points to Tier 1 Landing |
| Hidrofacial | Yes (Featured & All Grid) | `/es/hidrofacial` | `facialHubContent.ts` | Points to Tier 3 page |
| Plasma Rico en Plaquetas (PRP) y Fibrina | Yes (Featured & All Grid) | `/es/plasma-rico-en-plaquetas-west-palm-beach` | `facialHubContent.ts` | Points to Tier 1 Landing |
| Microneedling Dermapen 3 | Yes (Featured & All Grid) | `/es/microneedling` | `facialHubContent.ts` | Points to Tier 3 page |
| Peel Coreano | Yes (All Grid) | `/es/peel-coreano` | `facialHubContent.ts` | Points to Tier 3 page |
| Oxigenoterapia Facial | Yes (All Grid) | `/es/oxigenoterapia-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| Evefus 10 (Radiofrecuencia Fraccionada) | Yes (All Grid) | `/es/evefus-10-radiofrecuencia-fraccionada` | `facialHubContent.ts` | Points to Tier 3 page |
| Radiofrecuencia Facial | Yes (All Grid) | `/es/radiofrecuencia-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| Ultrasonido Facial | Yes (All Grid) | `/es/ultrasonido-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| Plasma Ozono | Yes (All Grid) | `/es/plasma-ozono` | `facialHubContent.ts` | Points to Tier 3 page |
| Plasma Frío | Yes (All Grid) | `/es/plasma-frio` | `facialHubContent.ts` | Points to Tier 3 page |
| Carboxiterapia Facial | Yes (All Grid) | `/es/carboxiterapia-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| EMS Facial + Enyong | Yes (All Grid) | `/es/ems-facial-enyong` | `facialHubContent.ts` | Points to Tier 3 page |
| Masajes Faciales para Marcación Mandibular | Yes (All Grid) | `/es/masajes-faciales-marcacion-mandibular` | `facialHubContent.ts` | Points to Tier 3 page |
| Manchas y Cicatrices de Acné | Yes (All Grid) | `/es/reservar` | `facialHubContent.ts` | Placeholder (Direct to Booking) |
| Acné | Yes (All Grid) | `/es/reservar` | `facialHubContent.ts` | Placeholder (Direct to Booking) |
| Rejuvenecimiento Facial / Lifting | Yes (All Grid) | `/es/reservar` | `facialHubContent.ts` | Placeholder (Direct to Booking) |
| Dermabrasión Facial | Yes (All Grid) | `/es/dermabrasion-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| Masajes Relajantes Faciales | Yes (All Grid) | `/es/masajes-relajantes-faciales` | `facialHubContent.ts` | Points to Tier 3 page |
| Maderoterapia Facial | Yes (All Grid) | `/es/maderoterapia-facial` | `facialHubContent.ts` | Points to Tier 3 page |
| HIFU Facial | Yes (All Grid) | `/es/hifu-facial` | `facialHubContent.ts` | Points to Tier 3 page |

### Corporate Treatments

| Treatment | Displayed On Hub | Link Destination | Source Data/File | Notes |
|---|---|---|---|---|
| Masajes Postoperatorios (Drenaje Linfático) | Yes (Featured & All Grid) | `/es/postoperatorio-west-palm-beach` | `bodyHubContent.ts` | Points to Tier 1 Landing |
| Lipo 360 sin Cirugía | Yes (Featured & All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Maderoterapia Corporal | Yes (Featured & All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Estrías y Celulitis | Yes (Featured & All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Levantamiento de Glúteos | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Marcación Abdominal Corporal | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Detox Corporal (Desintoxicación Iónica) | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| BodyWrap & Scrub | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Corrientes Rusas Corporales | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| EMS Tesla Power (Musculación sin esfuerzo) | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| HIFU Corporal | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Carboxiterapia Corporal | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |
| Capilar Estético | Yes (All Grid) | `/es/reservar` | `bodyHubContent.ts` | Placeholder (Direct to Booking) |

---

## Individual Treatment Routes Found

| Treatment | Route | Hub | Source File | Data Source | Linked From Hub | Linked Elsewhere | Metadata Exists |
|---|---|---|---|---|---|---|---|
| Limpieza Facial Profunda | `/es/limpieza-facial-profunda` | Facial | `src/pages/DeepFacialCleansingLandingPage.tsx` | Custom component properties | Yes (Featured & All) | Yes (Nav, Footer) | Yes |
| Plasma Rico en Plaquetas y Fibrina | `/es/plasma-rico-en-plaquetas-west-palm-beach` | Facial | `src/pages/PrfLandingPage.tsx` | Custom component properties | Yes (Featured & All) | Yes (Nav, Footer) | Yes |
| Masajes Postoperatorios (Drenaje Linfático) | `/es/postoperatorio-west-palm-beach` | Corporate | `src/pages/PostOpLandingPage.tsx` | Custom component properties | Yes (Featured & All) | Yes (Nav, Footer) | Yes |
| Hidrofacial | `/es/hidrofacial` | Facial | `src/pages/es/HidrofacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (Featured & All) | Yes (Related cards) | Yes |
| Microneedling | `/es/microneedling` | Facial | `src/pages/es/MicroneedlingPage.tsx` | `src/data/tier3Treatments.ts` | Yes (Featured & All) | Yes (Booking, Related) | Yes |
| Peel Coreano | `/es/peel-coreano` | Facial | `src/pages/es/PeelCoreanoPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Oxigenoterapia Facial | `/es/oxigenoterapia-facial` | Facial | `src/pages/es/OxigenoterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Radiofrecuencia Facial | `/es/radiofrecuencia-facial` | Facial | `src/pages/es/RadiofrecuenciaFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Ultrasonido Facial | `/es/ultrasonido-facial` | Facial | `src/pages/es/UltrasonidoFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Plasma Ozono | `/es/plasma-ozono` | Facial | `src/pages/es/PlasmaOzonoPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Plasma Frío | `/es/plasma-frio` | Facial | `src/pages/es/PlasmaFrioPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Carboxiterapia Facial | `/es/carboxiterapia-facial` | Facial | `src/pages/es/CarboxiterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| EMS Facial + Enyong | `/es/ems-facial-enyong` | Facial | `src/pages/es/EmsFacialEnyongPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Masajes Marcación Mandibular | `/es/masajes-faciales-marcacion-mandibular` | Facial | `src/pages/es/MasajesFacialesMarcacionMandibularPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Dermabrasión Facial | `/es/dermabrasion-facial` | Facial | `src/pages/es/DermabrasionFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Masajes Relajantes Faciales | `/es/masajes-relajantes-faciales` | Facial | `src/pages/es/MasajesRelajantesFacialesPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Maderoterapia Facial | `/es/maderoterapia-facial` | Facial | `src/pages/es/MaderoterapiaFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| HIFU Facial | `/es/hifu-facial` | Facial | `src/pages/es/HifuFacialPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Evefus 10 (RF Fraccionada) | `/es/evefus-10-radiofrecuencia-fraccionada` | Facial | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | `src/data/tier3Treatments.ts` | Yes (All) | Yes (Related cards) | Yes |
| Cavitación | `/es/cavitacion` | Corporate | `src/pages/es/CavitacionPage.tsx` | `src/data/tier3Treatments.ts` | No | Yes (Related cards) | Yes |
| Radiofrecuencia Corporal | `/es/radiofrecuencia-corporal` | Corporate | `src/pages/es/RadiofrecuenciaCorporalPage.tsx` | `src/data/tier3Treatments.ts` | No | Yes (Related cards) | Yes |
| Drenaje Linfático Corporal | `/es/drenaje-linfatico-corporal` | Corporate | `src/pages/es/DrenajeLinfaticoCorporalPage.tsx` | `src/data/tier3Treatments.ts` | No | Yes (Related cards) | Yes |
| Blanqueamiento Dental | `/es/blanqueamiento-dental` | N/A (Dental Hub) | `src/pages/es/BlanqueamientoDentalPage.tsx` | `src/data/tier3Treatments.ts` | No | Yes (Dental Hub, Related) | Yes |
| Limpieza Dental | `/es/limpieza-dental` | N/A (Dental Hub) | `src/pages/es/LimpiezaDentalPage.tsx` | `src/data/tier3Treatments.ts` | No | Yes (Dental Hub, Related) | Yes |

---

## Navigation and Link Exposure

| Location | File Path | Links Found | Notes |
|---|---|---|---|
| Navbar Header | `src/components/layout/Navbar.tsx` | `/es`, `/es/tratamientos-faciales`, `/es/plasma-rico-en-plaquetas-west-palm-beach`, `/es/limpieza-facial-profunda`, `/es/tratamientos-corporales`, `/es/postoperatorio-west-palm-beach`, `/es/laser-y-luz`, `/es/dental`, `/es/iv-therapy`, `/es/sobre-nosotros`, `/es/contacto` | Fetched dynamically from `src/data/navigation.ts` |
| Footer Links | `src/components/layout/Footer.tsx` | `/es/plasma-rico-en-plaquetas-west-palm-beach`, `/es/postoperatorio-west-palm-beach`, `/es/limpieza-facial-profunda`, `/es/iv-therapy`, `/es/reservar`, `/es/sobre-nosotros`, `/es/contacto`, `#` (Privacy Policies) | Fetched dynamically from `src/data/navigation.ts` |
| Sitemap | N/A | None | No sitemap exists in public folder or routing config |
| Breadcrumbs | N/A | None | No breadcrumb trail component implemented |
| Booking Page | `src/pages/BookingPage.tsx` | `/es/contacto`, Square scheduling paths, WhatsApp links | Defined inside `src/data/bookingContent.ts` |
| Related Treatments | `src/components/sections/tier3/Tier3RelatedTreatments.tsx` | Dynamic paths based on `relatedTreatmentIds` mapping | Renders a rail with up to 3 links to similar catalog items |
| Language Switcher | `src/components/layout/Footer.tsx` | Static labels `"ES"` and `"EN"` | Text buttons without click routes (no translation logic binding) |

---

## CTA Audit

| Page | Label | Source File | Destination | Type |
|---|---|---|---|---|
| `/es/tratamientos-faciales` | `"Evalúa tu piel — gratis"` | `HubHeroSection.tsx` | `/es/reservar` | internal route |
| `/es/tratamientos-faciales` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/limpieza-facial-profunda` | internal route |
| `/es/tratamientos-faciales` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/hidrofacial` | internal route |
| `/es/tratamientos-faciales` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/plasma-rico-en-plaquetas-west-palm-beach` | internal route |
| `/es/tratamientos-faciales` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/microneedling` | internal route |
| `/es/tratamientos-faciales` | `"Ver más →"` | `TreatmentCardRail.tsx` | `/es/peel-coreano` (and 13 more) | internal route |
| `/es/tratamientos-faciales` | `"Ver más →"` | `TreatmentCardRail.tsx` | `/es/reservar` (for 3 placeholders) | internal route |
| `/es/tratamientos-faciales` | `"Evalúa tu piel — gratis"` | `HubFinalCTA.tsx` | `/es/reservar` | internal route |
| `/es/tratamientos-faciales` | `"Escríbenos por WhatsApp"` | `HubFinalCTA.tsx` | WhatsApp API with message template | WhatsApp |
| `/es/tratamientos-corporales` | `"Evalúa tu caso — gratis"` | `HubHeroSection.tsx` | `/es/reservar` | internal route |
| `/es/tratamientos-corporales` | `"Ver tratamiento →"` | `TreatmentCardRail.tsx` | `/es/postoperatorio-west-palm-beach` | internal route |
| `/es/tratamientos-corporales` | `"Ver más →"` | `TreatmentCardRail.tsx` | `/es/reservar` (for 12 placeholders) | internal route |
| `/es/tratamientos-corporales` | `"Evalúa tu caso — gratis"` | `HubFinalCTA.tsx` | `/es/reservar` | internal route |
| `/es/tratamientos-corporales` | `"Escríbenos por WhatsApp"` | `HubFinalCTA.tsx` | WhatsApp API with message template | WhatsApp |

---

## SEO and Metadata Audit

| Page | Title Source | Description Source | Canonical | Hreflang | Schema | Sitemap |
|---|---|---|---|---|---|---|
| `/es/tratamientos-faciales` | `facialHubContent.seo.title` | `facialHubContent.seo.description` | `https://dermamskinhealth.com/es/tratamientos-faciales` | `es` & `x-default` alternate | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/tratamientos-corporales` | `bodyHubContent.seo.title` | `bodyHubContent.seo.description` | `https://dermamskinhealth.com/es/tratamientos-corporales` | `es` & `x-default` alternate | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/limpieza-facial-profunda` | Hardcoded string | Hardcoded string | `https://dermamskinhealth.com/es/limpieza-facial-profunda` | `es` & `x-default` alternate | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/plasma-rico-en-plaquetas-west-palm-beach` | Hardcoded string | Hardcoded string | `https://dermamskinhealth.com/es/plasma-rico-en-plaquetas-west-palm-beach` | `es` & `x-default` alternate | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/postoperatorio-west-palm-beach` | Hardcoded string | Hardcoded string | `https://dermamskinhealth.com/es/postoperatorio-west-palm-beach` | `es` & `x-default` alternate | `LocalBusiness` & `HealthAndBeautyBusiness` | No |
| `/es/hidrofacial` (and other Tier 3) | `treatment.seoTitle` in `tier3Treatments.ts` | `treatment.metaDescription` in `tier3Treatments.ts` | `https://dermamskinhealth.com/es/<id>` | `es` & `x-default` alternate | `LocalBusiness` & `FAQPage` | No |

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
  - `PageShell` acts as the primary structure.
- **Card Components**:
  - `TreatmentCardRail` (wraps horizontal scroll logic for mobile cards).
  - `RailCard` (handles individual treatment representation).
  - `ResponsiveCardGroup` (handles desktop grid columns and mobile scroll indicator details).
- **CTA Components**:
  - `Button` ([src/components/ui/Button.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/Button.tsx))
- **Data Files**:
  - `siteConfig` ([src/data/siteConfig.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/siteConfig.ts))
  - `navigationLinks` / `footerLinks` ([src/data/navigation.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/navigation.ts))
  - `getSiteSchema` ([src/data/schema.ts](file:///d:/Derma_Content/DermaM-WebSite/src/data/schema.ts))
- **Style Files**:
  - Tailwind CSS configuration and imports in `src/index.css`.
- **Utilities**:
  - `motion` animation wrappers using `motion/react` framework.
- **SEO Helpers**:
  - `SEO` ([src/components/layout/SEO.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/layout/SEO.tsx))
- **Sitemap Helpers**:
  - None present.
- **Route Helpers**:
  - `hreflangMap` / `SUPPORT_ENGLISH` ([src/config/routeMap.ts](file:///d:/Derma_Content/DermaM-WebSite/src/config/routeMap.ts))

---

## Current State Summary

- Both hubs are built dynamically using a shared template (`HubPageTemplate.tsx`) that reads structured page configurations from `facialHubContent.ts` and `bodyHubContent.ts`.
- The template renders sections sequentially (Hero, Intro, Featured Treatments, All Treatments, Google Reviews, FAQs, and a Final double-CTA box).
- On mobile, treatments lists render as horizontal scroll bars (`TreatmentCardRail` using `ResponsiveCardGroup`), whereas on desktop they align in multi-column grids (3 or 4 columns).
- Page alternate mappings and canonical properties are centralized within `src/config/routeMap.ts` using `hreflangMap`. 
- Alternates for English routes exist in the map, but are omitted in the rendered DOM as the boolean toggle `SUPPORT_ENGLISH` is set to `false`.
- Structured data is injected automatically on every page utilizing a common schema template from `src/data/schema.ts`.
- Out of 21 listed facial treatments, 18 resolve to active pages (15 Tier 3 dynamic pages + 3 Tier 1 custom landings) and 3 route to the `/es/reservar` path as placeholders.
- Out of 13 listed corporate treatments, only 1 resolves to an active page (Masajes Postoperatorios -> `/es/postoperatorio-west-palm-beach`), 12 point to the `/es/reservar` path as placeholders, and 3 existing corporate treatment pages (`/es/cavitacion`, `/es/radiofrecuencia-corporal`, and `/es/drenaje-linfatico-corporal`) remain completely unlinked in the hub data.
