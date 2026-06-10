# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Created `changelog.md` to track all project modifications.
- Added `catalogSections` data to facial and corporate hub content files (`src/data/facialHubContent.ts` and `src/data/bodyHubContent.ts`).
- Added type definition for `HubCatalogSection` in `src/types/hub.ts` and added optional `catalogSections` field to `HubPageContent`.
- Created `HubCatalogSections.tsx` component ([src/components/sections/hubs/HubCatalogSections.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubCatalogSections.tsx)) to render alternating editorial split blocks with white content panels, custom metadata, and custom CTAs.
- Added `catalogSections` data to laser/light and dental hub content files (`src/data/laserLightHubContent.ts` and `src/data/dentalHubContent.ts`).
- Added image and benefit icon mappings for Laser/Light and Dental hub sections in `src/components/sections/hubs/HubCatalogSections.tsx`.

### Modified
- Registered `changelog.md` in `AGENTS.md` as a mandatory registry for future edits.
- Replaced `HubIntroSection.tsx` with a compact objective navigation strip on the off-white canvas, rendering eyebrow, headline, description, and clickable chips/pills linking to the corresponding catalog section anchors.
- Added `chips` optional property in `src/types/hub.ts` and updated metadata files `src/data/facialHubContent.ts` and `src/data/bodyHubContent.ts` with the new navigation copy and chip target ids.
- Added `id={section.id}` and `scroll-mt-24` to the `<section>` elements in `HubCatalogSections.tsx` to enable smooth anchor jumps to each catalog section.
- Updated `TreatmentCardRail.tsx` ([src/components/ui/TreatmentCardRail.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/ui/TreatmentCardRail.tsx)) to dynamically set the desktop columns count to `Math.min(items.length, 4)`, ensuring that groups of cards with fewer than 4 items (like the 2 featured cards in the Corporate Hub) are horizontally centered on desktop.
- Updated featured treatments selection/order on both facial and corporate hubs.
- Refactored `HubCatalogSections.tsx` component ([src/components/sections/hubs/HubCatalogSections.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubCatalogSections.tsx)) to render each service module as a large, horizontal editorial card. Normalized all desktop modules to a consistent fixed height of `420px` with uniform image/content/benefits dimensions.
- Enforced a visual Z-pattern on desktop (odd modules: image left, even modules: image right) while keeping identical visual sizing.
- Placed circular icons in Column 1 and benefits checklist in Column 2 (limited to a maximum of 3 items using slice). Applied line-clamping (`line-clamp-3` for description, `line-clamp-2` for bullet items and icon captions) to prevent vertical overflows, and changed alignment to `justify-start` (rather than `justify-between`) inside the left content column to prevent icons from drifting to the absolute bottom edge or colliding with the CTA divider row.
- Vertically aligned all CTA buttons to the exact bottom of the card using flex layout (`flex-col justify-between h-full`).
- Stacks all elements vertically on mobile (`[Image] [Eyebrow] [Treatment name] [Description] [Compact benefits] [Benefits list] [CTAs]`) with no horizontal scroll or image-right order.
- Confirmed that no routes, SEO, sitemap, public assets, or Tier 3 pages were modified.
- Migrated `/es/laser-y-luz` and `/es/dental` hubs to the updated catalog-sections Z-pattern layout structure, bypassing the old dense grid and adding objective navigation chips.
- Centered featured treatments on desktop for Laser/Light and Dental hubs, preserving mobile scroll behavior.
- Aligned `/es/laser-y-luz` content with the official catalog, displaying only three services: `Depilación Láser Diodo`, `IPL – Luz Pulsada Intensa`, and `Láser CO₂ Fraccionado`. Removed unconfirmed/outdated services from display.
- Aligned `/es/dental` content with the official catalog, displaying only two services: `Blanqueamiento Dental Estético` and `Limpieza Dental Profesional`. Removed unconfirmed/outdated services from display.
- Updated both `laserLightHubContent.ts` and `dentalHubContent.ts` data files (`catalogSections`, `featured`, `allGrid`, and `socialProof` lists) to strictly match official catalog services.
- Updated `/es/iv-therapy` intro section to align with the objective navigation strip of the hub system, adding objective chips linking to kit anchors.
- Replaced the IV Kit grid section on `/es/iv-therapy` with detailed Z-pattern service modules (`IVKitsCatalogSection`) matching the hub layouts.
- Updated `ivKits.ts` to display exactly the 11 official IV kits, removing all pricing, e-commerce checkout links, and unconfirmed kits.
- Updated types in `src/types/ivTherapy.ts` and configurations in `src/data/ivTherapyContent.ts` to support the new layout structure.


