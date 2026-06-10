# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Created `changelog.md` to track all project modifications.
- Added `catalogSections` data to facial and corporate hub content files (`src/data/facialHubContent.ts` and `src/data/bodyHubContent.ts`).
- Added type definition for `HubCatalogSection` in `src/types/hub.ts` and added optional `catalogSections` field to `HubPageContent`.
- Created `HubCatalogSections.tsx` component ([src/components/sections/hubs/HubCatalogSections.tsx](file:///d:/Derma_Content/DermaM-WebSite/src/components/sections/hubs/HubCatalogSections.tsx)) to render alternating editorial split blocks with white content panels, custom metadata, and custom CTAs.

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
