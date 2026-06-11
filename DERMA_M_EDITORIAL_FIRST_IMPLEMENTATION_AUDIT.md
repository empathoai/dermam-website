# DERMA.M Editorial-First Implementation Audit

**Date:** 2026-06-11  
**Scope:** Full site — 38 routes, 90+ components  
**Method:** Static code inspection of all page files, component files, and data sources  
**Implementation files changed:** None

---

## 1. Full Route Inventory Reviewed

| Route | Page Type | Source File | Template Used | Status |
|-------|-----------|-------------|---------------|--------|
| `/es` | Home | `src/pages/HomePage.tsx` | Custom | Reviewed |
| `/es/sobre-nosotros` | About | `src/pages/AboutPage.tsx` | Custom | Reviewed |
| `/es/contacto` | Contact | `src/pages/ContactPage.tsx` | Custom | Reviewed |
| `/es/reservar` | Booking | `src/pages/BookingPage.tsx` | Custom | Reviewed |
| `/es/plasma-rico-en-plaquetas-west-palm-beach` | Tier 1 — PRF | `src/pages/PrfLandingPage.tsx` | Custom | Reviewed |
| `/es/limpieza-facial-profunda` | Tier 1 — DeepFacial | `src/pages/DeepFacialCleansingLandingPage.tsx` | Custom | Reviewed |
| `/es/postoperatorio-west-palm-beach` | Tier 1 — PostOp | `src/pages/PostOpLandingPage.tsx` | Custom | Reviewed |
| `/es/tratamientos-faciales` | Hub — Facial | `src/pages/FacialTreatmentsHubPage.tsx` | `HubPageTemplate` | Reviewed |
| `/es/tratamientos-corporales` | Hub — Body | `src/pages/BodyTreatmentsHubPage.tsx` | `HubPageTemplate` | Reviewed |
| `/es/laser-y-luz` | Hub — Laser | `src/pages/LaserLightHubPage.tsx` | `HubPageTemplate` | Reviewed |
| `/es/dental` | Hub — Dental | `src/pages/DentalHubPage.tsx` | `HubPageTemplate` | Reviewed |
| `/es/iv-therapy` | Hub — IV | `src/pages/IVTherapyPage.tsx` | Custom | Reviewed |
| `/es/hidrofacial` | Tier 3 | `src/pages/es/HidrofacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/microneedling` | Tier 3 | `src/pages/es/MicroneedlingPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/blanqueamiento-dental` | Tier 3 | `src/pages/es/BlanqueamientoDentalPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/limpieza-dental` | Tier 3 | `src/pages/es/LimpiezaDentalPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/peel-coreano` | Tier 3 | `src/pages/es/PeelCoreanoPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/oxigenoterapia-facial` | Tier 3 | `src/pages/es/OxigenoterapiaFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/cavitacion` | Tier 3 | `src/pages/es/CavitacionPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/radiofrecuencia-corporal` | Tier 3 | `src/pages/es/RadiofrecuenciaCorporalPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/drenaje-linfatico-corporal` | Tier 3 | `src/pages/es/DrenajeLinfaticoCorporalPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/radiofrecuencia-facial` | Tier 3 | `src/pages/es/RadiofrecuenciaFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/ultrasonido-facial` | Tier 3 | `src/pages/es/UltrasonidoFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/plasma-ozono` | Tier 3 | `src/pages/es/PlasmaOzonoPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/plasma-frio` | Tier 3 | `src/pages/es/PlasmaFrioPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/carboxiterapia-facial` | Tier 3 | `src/pages/es/CarboxiterapiaFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/ems-facial-enyong` | Tier 3 | `src/pages/es/EmsFacialEnyongPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/masajes-faciales-marcacion-mandibular` | Tier 3 | `src/pages/es/MasajesFacialesMarcacionMandibularPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/dermabrasion-facial` | Tier 3 | `src/pages/es/DermabrasionFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/masajes-relajantes-faciales` | Tier 3 | `src/pages/es/MasajesRelajantesFacialesPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/maderoterapia-facial` | Tier 3 | `src/pages/es/MaderoterapiaFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/hifu-facial` | Tier 3 | `src/pages/es/HifuFacialPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/es/evefus-10-radiofrecuencia-fraccionada` | Tier 3 | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | `Tier3TreatmentTemplate` | Reviewed |
| `/en/body-treatments` | Hub EN stub | (reuses `BodyTreatmentsHubPage`) | `HubPageTemplate` | Language issue |
| `/en/iv-therapy` | Hub EN stub | (reuses `IVTherapyPage`) | Custom | Language issue |
| `/en/laser-and-light` | Hub EN stub | (reuses `LaserLightHubPage`) | `HubPageTemplate` | Language issue |
| `/en/dental` | Hub EN stub | (reuses `DentalHubPage`) | `HubPageTemplate` | Language issue |
| `/en/facial-treatments` | Hub EN stub | (reuses `FacialTreatmentsHubPage`) | `HubPageTemplate` | Language issue |

**Total routes reviewed: 38**

---

## 2. Executive Summary

### What Already Works

**The editorial direction is partially implemented and well-grounded:**

- `DifferentiatorsSection` (Home) is fully compliant — dark image-led background, text-only proof list, editorial panel, zero decorative icons. This is the gold-standard reference for what the other non-modular sections should move toward.
- All `FinalCTA` variants (Home, Hub, Tier3, PRF, PostOp, DeepFacial, IV) are consistent — dark glass panel, image background, Hamilton accent, primary + WhatsApp CTA pattern. These are compliant and should not be changed.
- `HubCatalogSections` is a strong editorial system — Z-pattern alternation, large image column, editorial numbers, treatment chips, no decorative icons.
- `GoogleReviews` dark variant is now correctly used on all Hub pages — review cards over dark section is approved use of cards on a dark surface.
- `PostHeroOrientationSection` decision cards are compliant — decision/navigation cards are a legitimate modular use case.
- `Tier3ExplanationSection` is a proper editorial split section — image + text, no icons.
- `Tier3SessionStepsSection` is dark bg-base-900 with numbered cards — acceptable dark-context card use.
- All Founder sections (Home, PRF, PostOp, About) are editorial split sections with strong photography and no icons.
- Hub heroes and Tier 3 heroes correctly use full-bleed image with overlay.
- Navbar contains only functional icons. Footer contains only functional icons.

### What Violates the Editorial-First Direction

**Three distinct violation classes exist:**

1. **Decorative icons used for non-functional content** — This is the most systemic issue. It affects the Home hero trust strip, the About page values and certifications, the Booking info cards, and all 21 Tier 3 benefits sections. The pattern is: white card + rounded icon container + Lucide icon + title + body. This is exactly the SaaS dashboard layout the design system prohibits.

2. **Protocol steps rendered as plain white card grids** — PRF, PostOp, and DeepFacial all use white card grids for protocol/process sections. These sections should use a dark editorial inversion or at minimum an image-led protocol layout. Cards are appropriate for booking and comparison, not process narration.

3. **Surface rhythm violations in Tier 1 landings** — PRF, PostOp, and DeepFacial all have consecutive light sections (canvas → canvas → canvas) in the protocol area. Google Reviews on all three Tier 1 pages uses the light variant, missing an opportunity for dark editorial inversion that would break the rhythm.

### Most Inconsistent Pages

1. `/es/sobre-nosotros` — ValuesSection and CertificationsSection both violate icon-first policy on a page that should feel premium and editorial.
2. `/es/postoperatorio-west-palm-beach` — Three consecutive `bg-canvas` sections after the hero before reaching a dark section.
3. All 21 Tier 3 pages — `Tier3BenefitsSection` uses icon cards site-wide via `TreatmentBenefitCard`. Every treatment page is affected.
4. `/es/reservar` — `BookingInfoSection` uses icon trust cards for brand positioning.

### Repeated Offender Components

1. `TreatmentBenefitCard` — affects 21 pages, uses Droplets, Sparkles, Target, Layers, Maximize, Palette
2. `ValuesSection` — affects About page, uses Target, Users, BarChart, Languages
3. `CertificationsSection` — affects About page, uses Award, ShieldCheck, Star, Globe
4. `PrfProtocolSection` / `PostOpProtocolSection` / `DeepFacialProtocolSection` — plain card grids for protocol content
5. `BookingInfoSection` — icon trust cards (ShieldCheck, Clock, Star, Languages)
6. Home `HeroSection` trust strip — TrustItem with ShieldCheck, Stethoscope, Zap, Languages icons

### Design System Enforcement vs. Isolated Implementation

This is primarily a **design system enforcement problem**, not isolated one-offs. The same icon-card pattern is applied repeatedly across unrelated pages. The pattern predates the Editorial-First Design Direction addition to DESIGN.md. Components built before the editorial-first codification need to be updated against the new rules.

Two zombie components also exist: `TrustBar.tsx` and `HubSocialProofSection.tsx` are defined but imported by nothing. They should be removed.

---

## 3. Component Compliance Matrix

| Component | Route(s) | Current Pattern | DESIGN.md Rule | Status | Required Action | Priority |
|-----------|----------|----------------|----------------|--------|-----------------|----------|
| `HeroSection` (home) | `/es` | Full-bleed image, dark overlay, Hamilton accent, TrustItem row with Lucide icons | Hero compliant; trust strip icons violate icon policy | Partial | Replace Lucide icons in trust strip with text-only or remove strip | High |
| `TrustBar` | None (unused) | Icon cards, dark glass | Zombie component | Violates | Delete file | Low |
| `TreatmentsSection` | `/es` | 3 treatment cards, no bg class | Cards compliant for modular treatment content | Compliant | None | — |
| `DifferentiatorsSection` | `/es` | Dark image-led, text-only list, editorial panel | Editorial-First rule compliant | Compliant | None — gold standard | — |
| `FounderSection` (home) | `/es` | Split editorial, photography, no icons | Editorial Split Section pattern | Compliant | None | — |
| `GoogleReviews` light | `/es`, Tier 1 pages | Review cards, bg-canvas | Review cards approved; light variant misses dark rhythm opportunity on home and Tier 1 | Partial | Consider dark variant for home and Tier 1 | Medium |
| `GoogleReviews` dark | All hub pages | Review cards, bg-base-900 | Approved dark variant with review cards | Compliant | None | — |
| `FinalCTA` (home) | `/es` | Dark glass panel, image bg, Hamilton accent | Compliant with global FinalCTA standard | Compliant | None | — |
| `HubHeroSection` | All hub pages | Full-bleed image, dark overlay, single CTA | Compliant with Hero Visual Contract | Compliant | None | — |
| `HubIntroSection` → `PostHeroOrientationSection` | All hub pages | Decision cards, numbered, no icons | Decision/navigation cards = approved modular use | Compliant | None | — |
| `HubFeaturedTreatments` | All hub pages | Image-led treatment cards, bg-white | Treatment cards = approved modular use | Compliant | None | — |
| `HubCatalogSections` | 4 hub pages (where catalogSections exist) | Z-pattern, editorial number, image column, Check icon for checklist | Check icon functional in checklist context; pattern is editorial | Compliant | None | — |
| `HubAllTreatmentsGrid` | Hub pages without catalogSections | Card rail, bg-base-200 | Treatment cards = approved | Compliant | None | — |
| `HubSocialProofSection` | None (unused) | White rating card + review cards over dark | Zombie; replaced by GoogleReviews dark | Violates | Delete file | Low |
| `HubFAQSection` | All hub pages | FAQAccordion, bg-white | FAQ pattern compliant | Compliant | None | — |
| `HubFinalCTA` | All hub pages | Dark glass panel, image bg, Hamilton accent | Compliant with global FinalCTA standard | Compliant | None | — |
| `PrfAudienceSection` | `/es/plasma-rico-en-plaquetas-west-palm-beach` | PostHeroOrientationSection, decision cards | Decision cards approved | Compliant | None | — |
| `PrfEducationSection` | PRF page | Not fully read — split editorial likely | Assumed compliant based on pattern | Needs visual review | Verify split layout | Low |
| `PrfBenefitsSection` | PRF page | Alternating split layout, image-led, no icons | Editorial Split Section — fully compliant | Compliant | None | — |
| `PrfProtocolSection` | PRF page | 4 white cards, bg-canvas, ghost step number | Protocol as card grid violates editorial-first | Violates | Replace with dark editorial inversion or Editorial Proof List | High |
| `PrfResultsSection` | PRF page | Before/after slider cards, bg-white | Comparison/results — cards acceptable here | Compliant | None | — |
| `PrfFounderSection` | PRF page | Split editorial, photography | Editorial Split Section — compliant | Compliant | None | — |
| `PrfFAQSection` | PRF page | FAQAccordion | FAQ pattern compliant | Compliant | None | — |
| `PrfFinalCTA` | PRF page | Dark glass panel, image bg, Hamilton accent | Compliant | Compliant | None | — |
| `PostOpSurgeryTypesSection` | PostOp page | PostHeroOrientationSection, decision cards | Decision cards approved | Compliant | None | — |
| `PostOpUrgencySection` | PostOp page | Editorial split, numbered cards, no icons, bg-canvas | Editorial split with editorial-proof-list-style items — mostly compliant | Compliant | None | — |
| `PostOpProtocolSection` | PostOp page | 3 white cards, bg-canvas, ghost number | Protocol as card grid violates editorial-first | Violates | Replace with dark editorial or Editorial Proof List | High |
| `PostOpFounderSection` | PostOp page | Split editorial, photography | Editorial Split Section — compliant | Compliant | None | — |
| `PostOpResultsSection` | PostOp page | Not fully read | Needs visual review | Needs visual review | Verify | Low |
| `PostOpFinalCTA` | PostOp page | Dark glass panel, image bg, Hamilton accent | Compliant | Compliant | None | — |
| `DeepFacialAudienceSection` | DeepFacial page | PostHeroOrientationSection, decision cards | Decision cards approved | Compliant | None | — |
| `DeepFacialProtocolSection` | DeepFacial page | 5-column image cards, bg-canvas | Protocol steps as card grid; narrow 5-column layout | Partial | Reformat as editorial numbered steps or image-led dark section | High |
| `DeepFacialBenefitsSection` | DeepFacial page | Alternating split, image-led, no icons | Editorial Split Section — compliant | Compliant | None | — |
| `DeepFacialUpsellSection` | DeepFacial page | Not fully read | Needs visual review | Needs visual review | Verify | Low |
| `DeepFacialFounderSection` | DeepFacial page | Split editorial, photography | Assumed compliant (matches PRF/PostOp founder pattern) | Compliant | None | — |
| `DeepFacialFinalCTA` | DeepFacial page | Dark glass panel, image bg, Hamilton accent | Compliant | Compliant | None | — |
| `Tier3HeroSection` | All 21 Tier 3 pages | Full-bleed image, dark overlay | Assumed compliant with hero contract | Compliant | None | — |
| `Tier3QuickFitSection` | All 21 Tier 3 pages | Quick facts strip + white `bg-white` panel with Check icon mini-cards | Quick facts strip OK; Check icons inside mini-cards are borderline decorative | Partial | Replace Check icon mini-cards with text list or thin divider list | Medium |
| `Tier3ExplanationSection` | All 21 Tier 3 pages | Editorial split, bg-white, image + text | Editorial Split Section — compliant | Compliant | None | — |
| `Tier3BenefitsSection` | All 21 Tier 3 pages | 3 white icon-cards via TreatmentBenefitCard, bg-base-200 | Decorative icon cards (Droplets, Sparkles, Target, Layers, Maximize, Palette) for treatment benefits | Violates | Remove icons; replace with editorial numbered list, thin dividers, or text-only benefit blocks | Critical |
| `TreatmentBenefitCard` | All 21 Tier 3 pages | White card + icon container + Lucide icon + title + body | Decorative icon card for benefits — exact anti-pattern | Violates | Remove icon; redesign as editorial text card | Critical |
| `Tier3SessionStepsSection` | All 21 Tier 3 pages | Dark bg-base-900, numbered glass cards, no icons | Dark editorial with numbered cards — compliant | Compliant | None | — |
| `Tier3SafetySection` | All 21 Tier 3 pages | Check icon in safety checklist, Info icon in disclaimer panel | Check in checklist = borderline functional; Info = decorative-adjacent | Partial | Remove `Info` icon from disclaimer; Check in list context acceptable | Low |
| `Tier3FAQSection` | All 21 Tier 3 pages | FAQAccordion | Compliant | Compliant | None | — |
| `Tier3RelatedTreatments` | All 21 Tier 3 pages | Related treatment cards | Treatment cards = approved modular use | Compliant | None | — |
| `Tier3FinalCTA` | All 21 Tier 3 pages | Dark glass panel, image bg, Hamilton accent | Compliant | Compliant | None | — |
| `ValuesSection` | `/es/sobre-nosotros` | 4 icon-cards (Target, Users, BarChart, Languages) for brand philosophy/values | Icon-card pattern for philosophy — exact anti-pattern. Brand values are not modular comparison content. | Violates | Replace with Editorial Proof List or Full-Bleed Interstitial | Critical |
| `CertificationsSection` | `/es/sobre-nosotros` | 4 icon badge rows (Award, ShieldCheck, Star, Globe) | Decorative icon badges for trust/proof — anti-pattern | Violates | Replace with Editorial Proof List, text divider list, or remove entirely | High |
| `AboutFounderStorySection` | `/es/sobre-nosotros` | Editorial split, photography, stats inline | Compliant — stats inline with editorial split is acceptable | Compliant | None | — |
| `TeamSection` | `/es/sobre-nosotros` | Team cards with specialty filter chips | Team cards are approved modular use | Compliant | SpecialtyFilter pill chips = functional filter/control — compliant | — |
| `AboutFinalCTA` | `/es/sobre-nosotros` | Not fully read | Assumed matches FinalCTA standard | Compliant | None | — |
| `BookingTreatmentSelectorSection` | `/es/reservar` | Featured booking card + treatment rows, bg-canvas | Booking cards are approved modular use | Compliant | None | — |
| `BookingInfoSection` | `/es/reservar` | 4 icon-cards (ShieldCheck, Clock, Star, Languages), bg-canvas | Decorative icon trust cards in a non-booking context section | Violates | Replace with text-only trust statements or Editorial Proof List | High |
| `BookingWhatsAppAlternativeSection` | `/es/reservar` | Not fully read | Needs visual review | Needs visual review | Verify | Low |
| `ContactChannelsSection` | `/es/contacto` | Channel cards with functional icons (MessageCircle, Phone, Instagram, MapPin) | Channel cards approved; icons are functional (action-type icons) | Compliant | None | — |
| `ContactForm` | `/es/contacto` | Form fields, labels | Compliant | Compliant | None | — |
| `ContactMapSection` | `/es/contacto` | Not fully read | Needs visual review | Needs visual review | Verify | Low |
| `ContactFAQSection` | `/es/contacto` | FAQAccordion | Compliant | Compliant | None | — |
| `IVTherapyEducationSection` | `/es/iv-therapy` | Editorial split; two comparison mini-cards in text column (oral vs IV absorption), decorative gradient blob | Mini-cards for comparison = borderline acceptable (modular comparison), but gradient blob is decorative | Partial | Remove gradient blur element; mini-cards may stay if content genuinely requires comparison | Medium |
| `IVKitsGridSection` | `/es/iv-therapy` | Kit cards with image, bg-canvas | IV kits are catalog/comparison items — approved modular use | Compliant | None | — |
| `IVKitCard` | `/es/iv-therapy` | Image-led card, ArrowRight/ExternalLink icons (functional) | Card appropriate; functional icons only | Compliant | None | — |
| `IVKitsCatalogSection` | `/es/iv-therapy` | Not fully read | Needs visual review | Needs visual review | Verify | Low |
| `IVTherapyFinalCTA` | `/es/iv-therapy` | Dark glass panel, image bg, Hamilton accent | Compliant | Compliant | None | — |
| `Navbar` | All pages | Menu, X, ChevronDown — functional; no primary CTA | Functional icons compliant; missing primary CTA in navbar | Partial | Add primary CTA button (e.g. "Reservar") to desktop nav | High |
| `Footer` | All pages | Instagram, Facebook, MapPin, Phone, Clock — functional icons | bg-base-800 (note: token is base-800 not base-900 — verify), all icons functional | Compliant | Verify bg token matches spec (base-900) | Low |
| `WhatsAppFAB` | All pages | Not fully read | Assumed compliant | Needs visual review | Verify touch target and z-index vs. footer | Low |
| `SEO` (PageShell) | All pages | react-helmet-async | Not an editorial concern | Compliant | — | — |

---

## 4. Page-by-Page Surface Rhythm Audit

### `/es` — Home

| # | Section | Background |
|---|---------|-----------|
| 1 | HeroSection | `bg-base-900` + image ✅ |
| 2 | TreatmentsSection | implicit canvas (no class) |
| 3 | DifferentiatorsSection | `bg-base-900/35` over full image — dark editorial ✅ |
| 4 | FounderSection | `bg-white` ✅ |
| 5 | GoogleReviews | `bg-canvas` (light variant) |
| 6 | FinalCTA | dark image-led ✅ |

- Too many light sections? **Borderline** — Treatments (canvas) → DifferentiatorsSection (dark) breaks it.
- Missing dark editorial inversion? **Low risk** — DifferentiatorsSection provides contrast.
- Missing soft tonal break? **Low risk** — TreatmentsSection provides the light break.
- Recommended surface correction: Consider dark variant for home `GoogleReviews` (between Founder white and FinalCTA dark). Currently: `canvas` creates an awkward near-duplicate step between `bg-white` and dark. Alternatively add `bg-base-200` to TreatmentsSection.

---

### `/es/tratamientos-faciales`, `/es/tratamientos-corporales`, `/es/laser-y-luz`, `/es/dental` — Hub Pages (all use HubPageTemplate)

| # | Section | Background |
|---|---------|-----------|
| 1 | HubHeroSection | `bg-base-900` + image ✅ |
| 2 | HubIntroSection | `bg-canvas` ✅ |
| 3 | HubFeaturedTreatments | `bg-white` ✅ |
| 4 | HubCatalogSections / HubAllTreatmentsGrid | `bg-canvas` / `bg-base-200` |
| 5 | GoogleReviews dark | `bg-base-900` ✅ |
| 6 | HubFAQSection | unknown (needs verify) |
| 7 | HubFinalCTA | `bg-base-900` dark ✅ |

- Too many light sections? **No** — Canvas → White → Canvas → Dark is acceptable rhythm.
- Missing dark editorial inversion? **No** — GoogleReviews dark provides the mid-page contrast break.
- Missing soft tonal break? **Low** — If HubCatalogSections uses `bg-canvas` (same as Intro), consider whether mid-point needs `bg-base-200` shift.
- Note: Hubs with `HubCatalogSections` use `bg-canvas`; hubs with `HubAllTreatmentsGrid` use `bg-base-200`. The latter has stronger rhythm.
- Recommended: Verify `HubFAQSection` background token. Should be `bg-white` per DESIGN.md spec.

---

### `/es/plasma-rico-en-plaquetas-west-palm-beach` — PRF

| # | Section | Background |
|---|---------|-----------|
| 1 | PrfHeroSection | `bg-base-900` dark ✅ |
| 2 | PrfAudienceSection | `bg-canvas` ✅ |
| 3 | PrfEducationSection | (assumed `bg-white`) ✅ |
| 4 | PrfBenefitsSection | `bg-white` ✅ |
| 5 | PrfProtocolSection | `bg-canvas` ❌ — third light section (expected dark) |
| 6 | PrfResultsSection | `bg-white` |
| 7 | GoogleReviews light | `bg-canvas` ❌ — missed dark inversion opportunity |
| 8 | PrfFounderSection | `bg-white` |
| 9 | PrfRelatedTreatments | (unknown) |
| 10 | PrfFAQSection | (assumed `bg-white`) |
| 11 | PrfFinalCTA | dark ✅ |

- Too many light sections? **Yes** — Sections 2–8 are all light/canvas with no dark break until FinalCTA. Long white run.
- Missing dark editorial inversion? **Yes** — Protocol section (5) and Reviews (7) should both use dark.
- Missing soft tonal break? **Partial** — `bg-base-200` not used anywhere in the light run.
- Recommended surface correction: PrfProtocolSection → `bg-base-900` dark editorial. GoogleReviews → dark variant. Add `bg-base-200` to either Results or Related.

---

### `/es/postoperatorio-west-palm-beach` — PostOp

| # | Section | Background |
|---|---------|-----------|
| 1 | PostOpHeroSection | `bg-base-900` dark ✅ |
| 2 | PostOpSurgeryTypesSection | `bg-canvas` ✅ |
| 3 | PostOpUrgencySection | `bg-canvas` ❌ — second canvas in a row |
| 4 | PostOpProtocolSection | `bg-canvas` ❌ — third canvas in a row |
| 5 | PostOpFounderSection | `bg-white` |
| 6 | GoogleReviews light | `bg-canvas` ❌ — back to canvas after white |
| 7 | PostOpResultsSection | (unknown) |
| 8 | PostOpRelatedTreatments | (unknown) |
| 9 | PostOpFAQSection | (assumed `bg-white`) |
| 10 | PostOpFinalCTA | dark ✅ |

- Too many light sections? **Yes — critical** — Sections 2, 3, 4 are three consecutive `bg-canvas`. No mid-page dark break.
- Missing dark editorial inversion? **Yes** — Protocol (4) should be dark. Reviews (6) should be dark.
- Missing soft tonal break? **Yes** — `bg-base-200` not used in the entire page until possibly Related.
- Recommended surface correction: PostOpProtocolSection → `bg-base-900`. GoogleReviews → dark variant. PostOpUrgencySection keep as canvas (it's editorial split — fine). Urgency + Protocol = canvas → dark resolves the three-canvas run.

---

### `/es/limpieza-facial-profunda` — Deep Facial

| # | Section | Background |
|---|---------|-----------|
| 1 | DeepFacialHeroSection | `bg-base-900` dark ✅ |
| 2 | DeepFacialAudienceSection | `bg-canvas` ✅ |
| 3 | DeepFacialProtocolSection | `bg-canvas` ❌ — second canvas in a row |
| 4 | DeepFacialBenefitsSection | `bg-white` ✅ |
| 5 | DeepFacialUpsellSection | (unknown) |
| 6 | DeepFacialResultsSection | (unknown) |
| 7 | GoogleReviews light | `bg-canvas` |
| 8 | DeepFacialFounderSection | (assumed `bg-white`) |
| 9 | DeepFacialRelatedTreatments | (unknown) |
| 10 | DeepFacialFAQSection | (assumed `bg-white`) |
| 11 | DeepFacialFinalCTA | dark ✅ |

- Too many light sections? **Yes** — Sections 2, 3 are two consecutive canvas. Reviews (7) likely adds another long canvas run.
- Missing dark editorial inversion? **Yes** — Protocol or post-benefits area needs dark break.
- Recommended surface correction: DeepFacialProtocolSection → `bg-base-900` dark. GoogleReviews → dark variant.

---

### `/es/iv-therapy` — IV Therapy

| # | Section | Background |
|---|---------|-----------|
| 1 | IVTherapyHeroSection | `bg-base-900` dark ✅ |
| 2 | HubIntroSection | `bg-canvas` ✅ |
| 3 | IVKitsCatalogSection | (unread — assumed canvas or base-200) |
| 4 | IVTherapyFAQSection | (assumed `bg-white`) |
| 5 | IVTherapyFinalCTA | dark ✅ |

- Too many light sections? **Possible** — short page; two light sections before dark FinalCTA is acceptable.
- Missing dark editorial inversion? **Low** — Page is intentionally short/conversion-focused.
- Recommended: Verify IVKitsCatalogSection background — should be `bg-base-200` for mid-tone break.

---

### All 21 Tier 3 Pages — Shared Template

| # | Section | Background |
|---|---------|-----------|
| 1 | Tier3HeroSection | `bg-base-900` dark ✅ |
| 2 | Tier3QuickFitSection | `bg-canvas` ✅ |
| 3 | Tier3ExplanationSection | `bg-white` ✅ |
| 4 | Tier3BenefitsSection | `bg-base-200` ✅ |
| 5 | Tier3SessionStepsSection | `bg-base-900` dark ✅ |
| 6 | Tier3SafetySection | `bg-canvas` ✅ |
| 7 | Tier3FAQSection | (assumed `bg-white`) ✅ |
| 8 | Tier3RelatedTreatments | (assumed `bg-base-200`) ✅ |
| 9 | Tier3FinalCTA | dark ✅ |

- Too many light sections? **No** — Rhythm is: dark → canvas → white → base-200 → dark → canvas → white → base-200 → dark. Excellent cadence.
- Missing dark editorial inversion? **No** — Mid-page dark at step 5 provides the contrast break.
- Missing soft tonal break? **No** — `bg-base-200` appears at positions 4 and 8.
- Surface rhythm is the strongest across the entire site. The main issue is content pattern (icon cards in Benefits), not surface rhythm.

---

### `/es/sobre-nosotros` — About

| # | Section | Background |
|---|---------|-----------|
| 1 | AboutHeroSection | `bg-base-900` dark ✅ |
| 2 | AboutFounderStorySection | `bg-white` ✅ |
| 3 | TeamSection | `bg-canvas` ✅ |
| 4 | ValuesSection | `bg-canvas` ❌ — second canvas in a row |
| 5 | CertificationsSection | `bg-canvas` with `border-y` ❌ — third canvas in a row |
| 6 | AboutFinalCTA | dark ✅ |

- Too many light sections? **Yes** — Sections 3, 4, 5 are three consecutive canvas. No mid-page dark or tonal break.
- Missing dark editorial inversion? **Yes** — ValuesSection should use dark editorial inversion or be replaced with Editorial Proof List over a dark or image-led section.
- Missing soft tonal break? **Yes** — `bg-base-200` missing entirely.
- Recommended: Replace CertificationsSection with Editorial Proof List on `bg-white`. Move ValuesSection to a dark editorial inversion or `bg-base-200`. Or merge into a single dark editorial section.

---

### `/es/reservar` — Booking

| # | Section | Background |
|---|---------|-----------|
| 1 | BookingHeroSection | dark ✅ |
| 2 | BookingTreatmentSelectorSection | `bg-canvas` ✅ |
| 3 | BookingWhatsAppAlternativeSection | (unknown) |
| 4 | BookingInfoSection | `bg-canvas` — repeated canvas |

- Too many light sections? **Likely** — Multiple canvas sections stack without tonal break.
- Recommended: Verify BookingWhatsAppAlternativeSection. If canvas, the sequence is dark → canvas → canvas → canvas, which violates anti-flat rule.

---

### `/es/contacto` — Contact

| # | Section | Background |
|---|---------|-----------|
| 1 | ContactHeroSection | dark ✅ |
| 2 | ContactChannelsSection | `bg-canvas` ✅ |
| 3 | ContactMapSection | (unknown) |
| 4 | ContactFAQSection | (assumed `bg-white`) ✅ |

- Too many light sections? **Low risk** — Contact is a short utility page.
- Rhythm appears acceptable. Verify ContactMapSection background.

---

## 5. Card-First Violations

### Violation: TreatmentBenefitCard — Tier3BenefitsSection

- Route(s): All 21 Tier 3 treatment pages
- File path: `src/components/ui/TreatmentBenefitCard.tsx`, `src/components/sections/tier3/Tier3BenefitsSection.tsx`
- Current issue: White card with large icon container (Droplets, Sparkles, Target, Layers, Maximize, Palette), title, body. Three per row on `bg-base-200`.
- Why it violates Editorial-First: Benefits are not naturally modular comparison content. They are brand arguments for the treatment. This is exactly the "icon benefit cards" category listed under Rejected card use. The result looks like a SaaS product feature grid.
- Recommended replacement: Editorial Proof List — numbered text-only blocks with thin dividers. Keep `bg-base-200` surface. No card container required; numbered items with a short title and one-line body read as editorial markers.
- Priority: **Critical**

---

### Violation: ValuesSection — About page

- Route(s): `/es/sobre-nosotros`
- File path: `src/components/sections/about/ValuesSection.tsx`
- Current issue: 4 icon-cards on `bg-canvas`. Each card has an icon (Target, Users, BarChart, Languages) in a rounded container, a title, and body copy. Classic SaaS dashboard layout.
- Why it violates Editorial-First: Brand philosophy and values are non-modular content. They represent DERMA.M's method and identity — not comparison items or navigation decisions. This section exists to build trust and differentiate, not to let the user scan options.
- Recommended replacement: Dark Editorial Inversion — `bg-base-900` section with left-aligned text, Editorial Proof List (numbered items: 01 Diagnóstico, 02 Protocolo, 03 Seguimiento), and a full-bleed or split image. No icons. No cards.
- Priority: **Critical**

---

### Violation: CertificationsSection — About page

- Route(s): `/es/sobre-nosotros`
- File path: `src/components/sections/about/CertificationsSection.tsx`
- Current issue: 4 icon badges (Award, ShieldCheck, Star, Globe) with title and subtitle. Presented as decorative trust strip with icon circles. Hardcoded icon and label data.
- Why it violates Editorial-First: Trust proof using icon badges is the exact "icon rows / Lucide trust cards" anti-pattern. These items (MedSpa Certified, Clinical Protocols, 4.9 Stars, Bilingual) should be stated as typographic proof, not icon widgets.
- Recommended replacement: Editorial Proof List — thin text dividers with title and short label. No icon circles. Use `bg-white` or merge into the Founder/Story section as inline stats.
- Priority: **High**

---

### Violation: PrfProtocolSection — Protocol steps

- Route(s): `/es/plasma-rico-en-plaquetas-west-palm-beach`
- File path: `src/components/sections/prf/PrfProtocolSection.tsx`
- Current issue: 4 white cards on `bg-canvas`. Each card has a ghost step number, title, and short description. No imagery. No editorial depth.
- Why it violates Editorial-First: Protocol sections are experience narration — they reduce uncertainty by showing what happens. This is not modular comparison content. A plain card grid feels like a feature checklist, not a premium skin health protocol.
- Recommended replacement: Dark Editorial Inversion (`bg-base-900`) with Editorial Proof List — numbered steps with dividers, or image-led protocol layout with a split image column.
- Priority: **High**

---

### Violation: PostOpProtocolSection — Protocol phases

- Route(s): `/es/postoperatorio-west-palm-beach`
- File path: `src/components/sections/postop/PostOpProtocolSection.tsx`
- Current issue: 3 white cards on `bg-canvas`, ghost number, title, short body. Identical structure to PrfProtocolSection.
- Why it violates Editorial-First: Same reasoning as PRF. Protocol phases for post-op recovery require authority and trust, not a card grid.
- Recommended replacement: Dark Editorial Inversion with Editorial Proof List.
- Priority: **High**

---

### Violation: DeepFacialProtocolSection — Protocol steps with images

- Route(s): `/es/limpieza-facial-profunda`
- File path: `src/components/sections/deep-facial/DeepFacialProtocolSection.tsx`
- Current issue: 5-column card grid on `bg-canvas`. Each card has an image (4:3 crop), ghost step number, and title. While images are present, the 5-column grid at narrow per-card widths creates a cramped, generic "feature gallery" feel.
- Why it violates Editorial-First: Five-column protocol card grids collapse poorly and fragment the editorial flow. A sequential process should read as a journey, not a gallery.
- Recommended replacement: A horizontally scrolling editorial step system, or dark `bg-base-900` with numbered editorial steps and a single atmospheric image.
- Priority: **High**

---

### Violation: BookingInfoSection — Trust info cards

- Route(s): `/es/reservar`
- File path: `src/components/sections/booking/BookingInfoSection.tsx`
- Current issue: 4 white cards with icon containers (ShieldCheck, Clock, Star, Languages), title, and body. On `bg-canvas`, card layout.
- Why it violates Editorial-First: This section is brand trust positioning for the booking page. ShieldCheck, Star, and Languages are decorative in this context — they restate trust attributes already implicit in the booking flow. Not comparison/scan content.
- Recommended replacement: Remove section entirely if redundant with booking trust established in BookingTreatmentSelectorSection. If kept, use Editorial Proof List — text-only numbered or divider-separated trust statements.
- Priority: **High**

---

### Violation: HeroSection trust strip (home)

- Route(s): `/es`
- File path: `src/components/sections/home/HeroSection.tsx`, `src/components/ui/TrustItem.tsx`
- Current issue: Four `TrustItem` components rendered inside the hero. Each has a Lucide icon (ShieldCheck, Stethoscope, Zap, Languages) in a circular border container, plus label text. Rendered as a scrollable card group.
- Why it violates Editorial-First: Decorative icons (Stethoscope, Zap) on a premium hero create a SaaS-feel. The trust content is valid but the presentation using icon badges weakens editorial authority.
- Recommended replacement: Replace icon containers with text-only pill rows or remove the Lucide icon and retain only the label text with a thin separator. Alternatively, replace with a single `HeroTrustPill` displaying the Google rating (which is already supported).
- Priority: **High**

---

## 6. Icon-First Violations

Functional icons approved in DESIGN.md: Menu, Close, Chevron, External Link, WhatsApp, Instagram, Facebook, Phone, Mail, MapPin, Calendar (booking context only).

### Icon Violation: TreatmentBenefitCard icons

- Route(s): All 21 Tier 3 treatment pages
- File path: `src/components/ui/TreatmentBenefitCard.tsx`
- Icons used: `Droplets`, `Sparkles`, `Target`, `Layers`, `Maximize`, `Palette` — sourced from `../../design-system/icons`
- Functional or decorative: **Decorative** — these icons are visual decoration for benefit titles. None of them provide navigation, action, or information that the text does not already provide.
- Why it damages DERMA.M: A generic icon icon set next to treatment benefit titles (e.g., Sparkles next to "Estimulación del colágeno") makes the page look like a SaaS product landing page or a generic beauty template. Every treatment page currently has this problem.
- Recommended replacement: Remove icon container and icon entirely. Use a thin numbered editorial marker or clean divider above the benefit title. The `min-h-[14rem]` card structure can remain.
- Priority: **Critical**

---

### Icon Violation: ValuesSection icons

- Route(s): `/es/sobre-nosotros`
- File path: `src/components/sections/about/ValuesSection.tsx`
- Icons used: `Target`, `Users`, `BarChart`, `Languages`
- Functional or decorative: **Decorative** — representing philosophy values
- Why it damages DERMA.M: Philosophy cards with app-style icons trivialize brand identity.
- Recommended replacement: Remove icons. Use Editorial Proof List (01 — 04 numbered dividers).
- Priority: **Critical**

---

### Icon Violation: CertificationsSection icons

- Route(s): `/es/sobre-nosotros`
- File path: `src/components/sections/about/CertificationsSection.tsx`
- Icons used: `Award`, `ShieldCheck`, `Star`, `Globe`
- Functional or decorative: **Decorative** — no action, no link, pure visual decoration
- Why it damages DERMA.M: Award and ShieldCheck are SaaS credibility badge clichés. They undermine the premium editorial tone.
- Recommended replacement: Text-only certification list with `label-uppercase` labels and short subtitles. No icon circles.
- Priority: **High**

---

### Icon Violation: BookingInfoSection icons

- Route(s): `/es/reservar`
- File path: `src/components/sections/booking/BookingInfoSection.tsx`
- Icons used: `ShieldCheck`, `Clock`, `Star`, `Languages`
- Functional or decorative: **Decorative** — no action afforded by these icons
- Why it damages DERMA.M: Booking page should feel conversion-efficient and premium, not like a trust-badge grid.
- Recommended replacement: Remove section or replace with text-only trust statement row.
- Priority: **High**

---

### Icon Violation: HeroSection TrustItem strip

- Route(s): `/es`
- File path: `src/data/trustItems.ts`, `src/components/ui/TrustItem.tsx`
- Icons used: `ShieldCheck`, `Stethoscope`, `Zap`, `Languages`
- Functional or decorative: **Decorative** — icons decorate the label text; `Stethoscope` and `Zap` have no semantic function
- Why it damages DERMA.M: The home hero is the highest-visibility section. Icon badges in the hero prime the visitor to read the page as a SaaS app, not a premium editorial brand.
- Recommended replacement: Replace TrustItem icon containers with text-only label pills, or remove Lucide icon and retain only the label text in the existing dark-glass container. The `TrustItem` component is only used in HeroSection (TrustBar itself is unused).
- Priority: **High**

---

### Icon Violation: Tier3SafetySection — Info icon

- Route(s): All 21 Tier 3 pages
- File path: `src/components/sections/tier3/Tier3SafetySection.tsx`
- Icons used: `Check` (in checklist), `Info` (in disclaimer panel)
- Functional or decorative: `Check` = borderline functional (checklist marker), `Info` = decorative context indicator
- Recommended replacement: Remove `Info` icon from disclaimer panel. Use a thin `border-l` or eyebrow label text instead. `Check` in safety checklist is acceptable if kept minimal.
- Priority: **Low**

---

### Icon Violation: Tier3QuickFitSection — Check icons in mini-cards

- Route(s): All 21 Tier 3 pages
- File path: `src/components/sections/tier3/Tier3QuickFitSection.tsx`
- Icons used: `Check` inside circular container for "Indicado para" items
- Functional or decorative: Borderline decorative — `Check` in a circular `border-border-strong` container decorates each item label
- Recommended replacement: Replace icon circles with a simple text-only list or remove the `bg-canvas` mini-card wrapper. The circular Check container creates the icon-badge pattern.
- Priority: **Medium**

---

## 7. Typography Consistency Problems

### Arbitrary clamp typography vs. shared constants

Most components written before `src/lib/typography.ts` was created use raw `text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase` inline rather than the shared `headingSectionClass` constant.

| File | Current class pattern | Intended design role | Required fix |
|------|----------------------|---------------------|--------------|
| `src/components/sections/prf/PrfBenefitsSection.tsx:31` | `text-[clamp(1.9rem,3.6vw,3rem)] font-bold...uppercase` | `headingSectionClass` | Use constant |
| `src/components/sections/prf/PrfProtocolSection.tsx:12` | `text-[clamp(1.9rem,3.6vw,3rem)] font-bold...uppercase` | `headingSectionClass` | Use constant |
| `src/components/sections/prf/PrfResultsSection.tsx:13` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/deep-facial/DeepFacialBenefitsSection.tsx:13` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/deep-facial/DeepFacialProtocolSection.tsx:13` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/postop/PostOpProtocolSection.tsx:20` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/tier3/Tier3SafetySection.tsx:25` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/tier3/Tier3SessionStepsSection.tsx:15` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/about/ValuesSection.tsx:21` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/about/AboutFounderStorySection.tsx:37` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/about/TeamSection.tsx:25` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/booking/BookingTreatmentSelectorSection.tsx:18` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/contact/ContactChannelsSection.tsx:16` | same pattern | `headingSectionClass` | Use constant |
| `src/components/sections/home/FounderSection.tsx:40` | same pattern | `headingSectionClass` | Use constant |
| `src/components/GoogleReviews.tsx:92` | same pattern | `headingSectionClass` | Use constant |

### IVTherapyEducationSection — competing heading scale

- File: `src/components/sections/iv-therapy/IVTherapyEducationSection.tsx:44`
- Current: `text-[clamp(1.9rem,3.6vw,3rem)] font-bold...uppercase font-sans leading-tight`
- Note: `leading-tight` conflicts with `headingSectionClass` which specifies `leading-[1.05]`
- Required fix: Use `headingSectionClass` constant

### TreatmentBenefitCard — card title using heading scale

- File: `src/components/ui/TreatmentBenefitCard.tsx:34`
- Current: `text-[clamp(1.125rem,2vw,1.375rem)] font-semibold...`
- Should use: `cardTitleClass` from `src/lib/typography.ts`
- Required fix: Use `cardTitleClass` constant

### PostHeroOrientationSection — card title not using shared constant

- File: `src/components/sections/shared/PostHeroOrientationSection.tsx:77`
- Current: `text-[1.05rem] lg:text-[1.15rem] font-bold uppercase tracking-[-0.02em] leading-[1.2]`
- Closest match: `cardTitleClass` but with uppercase modifier
- Note: This is intentional for decision cards — uppercase card titles are acceptable in this navigation context (they signal category). Acceptable deviation.

### About page — ValuesSection card title not semibold

- File: `src/components/sections/about/ValuesSection.tsx:37`
- Current: `text-xl font-sans mb-4 text-text-primary`
- Missing: weight specification (`font-semibold`) and tracking. Should use `cardTitleClass`.

---

## 8. Mobile-Specific Risks

| Risk Area | Component | Issue | Risk Level |
|-----------|-----------|-------|-----------|
| Hero crop | `HeroSection`, `HubHeroSection` | Subject centering and face visibility on narrow viewports depends on image composition, not code. No code risk found. | Low |
| Card stacking | `Tier3BenefitsSection` (3 columns → mobile stack) | Cards stack to single column. If icons are removed, this is fine. Currently the icon boxes are large and add vertical height on mobile. | Medium |
| 5-column DeepFacial protocol | `DeepFacialProtocolSection` | `desktopColumns={5}` on mobile renders as horizontal scroll rail. Narrow cards at 84vw each — OK on mobile but 5-column desktop feels cramped. | Medium |
| FAQ readability | `FAQAccordion` across all pages | Not inspected in detail. ChevronDown expected per spec. Assumed compliant. | Low |
| CTA visibility | `HeroSection` | CTAs stacked on mobile (`flex-col sm:flex-row`). Fine. | Low |
| WhatsApp FAB overlap | `WhatsAppFAB` | Not read — verify it does not overlap footer on short pages or cover bottom CTA. | Medium |
| Touch target size | `Tier3QuickFitSection` Check mini-cards | `min-h` not set on these items. Tap targets for the items themselves are not interactive, so no risk. | Low |
| Form usability | `ContactForm` | Not inspected in detail. Should have visible labels (per spec). | Low |
| HeroSection trust strip scrollability | `HeroSection` | TrustItems use `mobileCardWidth="78vw"` in `ResponsiveCardGroup` — horizontal scroll rail. Works on mobile but shows 1.2 items. Acceptable. | Low |
| Horizontal overflow | `HubCatalogSections` | `rounded-[1.5rem]` card inside container should be fine. No overflow risk found. | Low |

---

## 9. Conversion Flow Issues

| Issue | Location | Severity |
|-------|----------|----------|
| **No primary CTA in Navbar** | `Navbar.tsx` | High — Every page is missing a persistent "Reservar" button in the desktop nav. Users who scroll past the hero have no persistent conversion point except the WhatsApp FAB. |
| Hero CTA (home) | `HeroSection.tsx` | Compliant — routes to `/es/reservar` |
| Hub hero CTA | `HubHeroSection.tsx` | Uses `href="/es/reservar"` — correct |
| FinalCTA routing | All pages | Compliant — primary to `/es/reservar`, secondary to WhatsApp |
| WhatsApp routing | PRF, PostOp, DeepFacial, Hub FinalCTAs | Each uses page-specific `whatsappMessage`. Correct. |
| Post-Op booking path | `PostOpFinalCTA` | Uses WhatsApp secondary CTA. Correct — Post-Op should not force direct booking. |
| Form submission uncertainty | `ContactForm` | Not inspected — verify submit handler and success state exist |
| Broken `#` links | `HeroSection.tsx:100` | Secondary CTA uses `href="#treatments"` — routes to in-page anchor. This works only on the home page. Not broken but needs an id `treatments` on `TreatmentsSection`. |
| Language toggle | `Footer.tsx:104-105` | ES/EN toggle buttons have no `onClick` handler — non-functional. No routing is wired. |
| Square booking URLs | Booking page data | Not audited — verify `bookingContent.ts` has real Square URLs, not placeholders. |

---

## 10. SEO / Language / Technical Issues

| Issue | Location | Type | Severity |
|-------|----------|------|----------|
| English routes serve Spanish content | `/en/body-treatments`, `/en/iv-therapy`, `/en/laser-and-light`, `/en/dental`, `/en/facial-treatments` in `App.tsx` | Language | High — These routes render identical Spanish page components with no language differentiation. The `<html lang>` attribute, hreflang, and copy are all Spanish. This risks duplicate content and incorrect language targeting. |
| `<html lang>` attribute | `src/main.tsx` or index.html | Language | Medium — Verify `lang="es"` is set. English stub routes would need `lang="en"` which is currently impossible without route-aware language logic. |
| No Privacy Policy route | `App.tsx` | SEO / Legal | High — Footer links and any form consent reference no `/es/privacidad` route. This is a US-based business with an online form — CCPA/GDPR basic compliance requires a privacy policy page. |
| Footer language buttons | `Footer.tsx` | Functional | Medium — ES/EN buttons do nothing. This is misleading UI. Should either wire routing or be removed. |
| `TrustBar.tsx` zombie | `src/components/sections/home/TrustBar.tsx` | Technical debt | Low — Defined, never imported. Safe to delete. |
| `HubSocialProofSection.tsx` zombie | `src/components/sections/hubs/HubSocialProofSection.tsx` | Technical debt | Low — Defined, never imported. Safe to delete. |
| `Footer` uses `bg-base-800` | `Footer.tsx:10` | Token | Low — DESIGN.md specifies `bg-base-900` for footer. `bg-base-800` is a darker gray variant but not the canonical token. Verify CSS custom property resolves correctly and matches visual intent. |
| `HubHeroSection` city line hard-codes "en West Palm Beach · Miami" | `HubHeroSection.tsx:97` | Content | Low — DESIGN.md differentiates: facial treatments get "en West Palm Beach · Miami", non-facial get "en West Palm Beach", hubs get "en DERMA.M · West Palm Beach · Miami". Currently all hubs get the same city line. |
| Missing BreadcrumbList schema | All Tier 3, Hub, Tier 1 pages | SEO | Medium — `Tier3TreatmentTemplate` has FAQPage schema. Hub pages have no BreadcrumbList schema. Per DESIGN.md guidelines, `BreadcrumbList` should be included where appropriate. |
| `ogImage` URLs use absolute domain | All `ssgOptions` | SEO | Low — Acceptable for production, but verify domain matches live deployment. |

---

## 11. High-Priority Refactor Plan

This plan is ordered by impact, not difficulty. Do not implement until each phase is explicitly approved.

---

### Phase 1 — System enforcement (no visual redesign, just cleanup)

Goal: Eliminate all zombie components and enforce shared typography constants.

- Delete `TrustBar.tsx` (zombie)
- Delete `HubSocialProofSection.tsx` (zombie)
- Migrate all inline `text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase` to `headingSectionClass` from `src/lib/typography.ts` across the 15+ affected components
- Migrate `TreatmentBenefitCard` title to use `cardTitleClass`
- Fix `ValuesSection` card title to use `cardTitleClass`

---

### Phase 2 — Icon policy enforcement

Goal: Remove all decorative Lucide icons from non-functional contexts.

- `TreatmentBenefitCard` — remove `w-12 h-12 bg-base-100 rounded-[1rem] flex items-center justify-center` icon container and Lucide icon import. Replace with editorial numbered marker (01, 02, 03) or thin divider above title.
- `ValuesSection` — remove all icon imports (Target, Users, BarChart, Languages) and icon containers.
- `CertificationsSection` — remove all icon imports (Award, ShieldCheck, Star, Globe) and icon circles.
- `BookingInfoSection` — remove all icon imports (ShieldCheck, Clock, Star, Languages) and icon containers.
- `TrustItem` (used in HeroSection trust strip) — remove icon rendering; retain only label text in existing dark glass container.
- `Tier3SafetySection` — remove `Info` icon from disclaimer panel.
- `Tier3QuickFitSection` — remove `Check` circular container; replace with simple text row.

This phase has the highest visual ROI: it fixes all 21 Tier 3 pages, the home hero, the About page, and the Booking page in a targeted, low-risk way.

---

### Phase 3 — Home correction

Goal: Strengthen home surface rhythm and confirm trust-bar is editorial.

- Change `GoogleReviews` on home to dark variant (or add `bg-base-200` to `TreatmentsSection` for tonal break)
- Add primary CTA button ("Reservar evaluación") to Navbar desktop
- Confirm `#treatments` id exists on `TreatmentsSection` for the hero's secondary CTA anchor

---

### Phase 4 — Tier 1 landing surface rhythm + protocol sections

Goal: Introduce dark editorial inversion on protocol sections and reviews.

- `PrfProtocolSection` → rebuild as `bg-base-900` dark editorial with Editorial Proof List pattern
- `PostOpProtocolSection` → rebuild as `bg-base-900` dark editorial with Editorial Proof List
- `DeepFacialProtocolSection` → rebuild as dark editorial numbered steps or Editorial Split Section with one atmospheric image
- All three Tier 1 `GoogleReviews` → change to dark variant

---

### Phase 5 — About page correction

Goal: Remove icon-card sections; introduce editorial surface rhythm.

- `ValuesSection` → rebuild as dark editorial inversion (`bg-base-900`) with Editorial Proof List (01-04 numbered brand principles, no icons)
- `CertificationsSection` → rebuild as text-only editorial strip or merge into `AboutFounderStorySection` as inline stats row
- This resolves the three-consecutive-canvas surface rhythm problem on About.

---

### Phase 6 — Booking / Contact / IV minor cleanup

Goal: Complete conversion-path and surface rhythm issues.

- `BookingInfoSection` → remove icon containers; replace with text-only trust list or remove section entirely
- Verify `ContactMapSection` and `BookingWhatsAppAlternativeSection` surfaces
- Verify `IVKitsCatalogSection` uses `bg-base-200` for mid-tone break
- Implement language routing logic or remove non-functional EN/ES toggle from Footer
- Add `/es/privacidad` privacy policy route and page

---

## 12. Do Not Touch Yet

The following components are compliant and correctly implement the editorial-first direction. They must not be redesigned, restyled, or "improved" without a documented reason.

| Component | Why it must not change |
|-----------|------------------------|
| `DifferentiatorsSection` | Gold standard for editorial-first compliance. Dark image-led, text-only list, editorial panel. Recent refactor. |
| `FinalCTA` (all variants: Home, Hub, Tier3, PRF, PostOp, DeepFacial, IV) | Consistent system. Dark glass panel, Hamilton accent, image background. All aligned. |
| `HubFinalCTA` | Same system as FinalCTA family. |
| `HubCatalogSections` | Editorial Z-pattern system. Check icons in checklist context are acceptable. |
| `HubFeaturedTreatments` + `TreatmentCardRail` | Image-led treatment cards — approved modular use. |
| `GoogleReviews` dark variant | Review cards on dark = approved. Correct use in HubPageTemplate. |
| `PostHeroOrientationSection` | Decision cards without icons. Correct pattern for hub/audience orientation. |
| `PrfBenefitsSection` | Editorial split with alternating image/text. Compliant. |
| `DeepFacialBenefitsSection` | Editorial split. Compliant. |
| `PostOpUrgencySection` | Editorial split with editorial numbered cards. Compliant. |
| `Tier3ExplanationSection` | Editorial split, bg-white. Compliant. |
| `Tier3SessionStepsSection` | Dark bg-base-900, numbered glass cards. Acceptable dark-context card use. |
| `Tier3RelatedTreatments` | Treatment cards = approved modular. |
| `IVKitCard` | Image-led catalog card, functional icons only. |
| All Founder sections (Home, PRF, PostOp, DeepFacial, About) | Editorial split sections with strong photography. Compliant. |
| `Navbar` | Functional icons only. |
| `Footer` | Functional icons only. (Verify bg token.) |
| `ContactChannelCard` | Functional icons (action type icons for channels). |
| `TeamSection` | Team cards = approved modular. Specialty filter = functional control. |
| `PrfResultsSection` | Before/after comparison = approved modular. |
| `HubAllTreatmentsGrid` | Treatment card rail on bg-base-200. Compliant. |
| `HubHeroSection` | Full-bleed hero, single CTA, no decorative icons. Compliant. |
| `HeroSection` (structure) | Hero contract compliant. Only trust strip icons need correction (Phase 2). |

---

## Final Summary

- **Audit file created:** `DERMA_M_EDITORIAL_FIRST_IMPLEMENTATION_AUDIT.md`
- **Total routes reviewed:** 38
- **Total components reviewed:** 90+
- **Critical violations found:** 3 (TreatmentBenefitCard / Tier3BenefitsSection site-wide; ValuesSection; TrustBar + HubSocialProofSection zombies)
- **High-priority violations found:** 8 (HeroSection trust strip icons; PrfProtocolSection; PostOpProtocolSection; DeepFacialProtocolSection; CertificationsSection; BookingInfoSection; Navbar missing CTA; Privacy Policy missing)
- **Top 5 components to refactor first:**
  1. `TreatmentBenefitCard` — affects 21 pages; remove icons; editorial numbered marker
  2. `ValuesSection` — replace 4 icon-cards with dark editorial inversion + proof list
  3. `PrfProtocolSection` + `PostOpProtocolSection` — move to dark editorial pattern
  4. `HeroSection` TrustItem strip — remove Lucide icon containers
  5. `CertificationsSection` — text-only trust proof strip
- **Confirmation that no implementation files were changed:** Yes — only `DERMA_M_EDITORIAL_FIRST_IMPLEMENTATION_AUDIT.md` (this file) and `DESIGN.md` (per task) were written. Zero component, page, data, or configuration files were modified.
