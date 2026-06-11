# DERMA.M Typography & Icon Audit

Generated: 2026-06-11. References DESIGN.md v1.0.0.

---

## 1. Typography Roles (from DESIGN.md)

| Role | Tailwind classes |
|------|-----------------|
| `display-hero` | `text-[clamp(3.25rem,7.8vw,6.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase` |
| `display-hero-compact` | `text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase` |
| `heading-section` | `text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase` |
| `heading-section-soft` | `text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.025em]` |
| `heading-subsection` | `text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.015em]` |
| `title-card` | `text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em]` |
| `body-lg` | `text-[1.125rem] font-light leading-[1.65]` |
| `body-md` | `text-base font-light leading-[1.6]` |
| `body-sm` | `text-sm font-light leading-[1.5]` |
| `label-uppercase` | `text-[0.75rem] font-medium tracking-[0.15em] uppercase` |
| `stat-number` | `text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]` |
| `stat-label` | `text-[0.75rem] font-medium tracking-[0.15em] uppercase` |

---

## 2. Arbitrary Heading Classes Audit

### Correct — matches DESIGN.md role exactly
These are fine and should not be changed.

| File | Role |
|------|------|
| `HeroSection.tsx:70` — `clamp(3.25rem,7.8vw,6.25rem) font-extrabold leading-[0.96] tracking-[-0.045em]` | `display-hero` ✓ |
| `HubHeroSection.tsx:95` — `clamp(3rem,6.6vw,5.35rem) font-extrabold leading-[0.96] tracking-[-0.045em]` | `display-hero-compact` ✓ |
| `DeepFacialHeroSection.tsx:92` — same | `display-hero-compact` ✓ |
| `PostOpHeroSection.tsx:95` — same | `display-hero-compact` ✓ |
| Multiple `clamp(1.9rem,3.6vw,3rem) font-bold leading-[1.05] tracking-[-0.035em] uppercase` | `heading-section` ✓ (section H2s) |

### Divergent — needs shared utility

| File | Current | Should be | Action |
|------|---------|-----------|--------|
| `PostHeroOrientationSection.tsx` | `clamp(2rem,3.8vw,3.35rem) font-extrabold leading-[0.98] tracking-[-0.04em]` | `heading-section` | Replace with `headingSectionClass` |
| `DifferentiatorsSection.tsx:52` | `clamp(1.9rem,3.6vw,3rem) font-bold ... uppercase text-base-100` | `heading-section` | Apply via shared class + color |
| `DifferentiatorsSection.tsx:37` | `clamp(2.2rem,3vw,3.5rem) font-extrabold leading-[1.05] tracking-[-0.03em]` | `stat-number` | Apply via `statNumberClass` |
| `DifferentiatorsSection.tsx:69` | `text-lg font-semibold` on card h3 | `title-card` | Replace |
| `DeepFacialBenefitsSection.tsx:45` | `clamp(1.9rem,3.6vw,3rem) font-bold` on h3 benefit title | `heading-section` used on h3 — oversized | Reduce to `heading-subsection` |
| `GoogleReviews.tsx:92` | `clamp(1.9rem,3.6vw,3rem) font-bold` | `heading-section` ✓ | Fine, just apply shared class |

### PostHeroOrientationSection — canonical mismatch
The current `PostHeroOrientationSection` H2 uses `clamp(2rem,3.8vw,3.35rem)` which is not a DESIGN.md role. Should be `heading-section` = `clamp(1.9rem,3.6vw,3rem)`.

---

## 3. Decorative Icon Audit

### Keep — functional icons
These serve navigation, UI mechanics, or direct affordance.

| Component | Icon | Reason to keep |
|-----------|------|----------------|
| `Navbar.tsx` | `Menu`, `X`, `ChevronDown` | Navigation toggle |
| `Footer.tsx` | `Instagram`, `Facebook`, `MapPin`, `Phone`, `Clock` | Contact/social links |
| `FAQAccordion.tsx` | `ChevronDown` | Expand/collapse affordance |
| `WhatsAppFAB.tsx` | `MessageCircle` | WhatsApp channel |
| `ContactForm.tsx` | `Check` | Form success state |
| `GoogleReviews.tsx` | `Star` | Google ratings (approved exception) |
| `HubSocialProofSection.tsx` | `Star` | Same |
| `PrfTestimonialsSection.tsx` | `Star` | Same |
| `DeepFacialTestimonialsSection.tsx` | `Star` | Same |
| `PostOpTestimonialsSection.tsx` | `Star` | Same |
| `ExternalBookingButton.tsx` | `ExternalLink` | Opens external booking |
| `BookingFeaturedCard.tsx` | `ExternalLink` | Same |
| `VCardButton.tsx` | `QrCode`, `Download` | Contact card download |
| `ContactMapSection.tsx` | `Clock`, `MapPin`, `ParkingCircle` | Location/hours info |
| `AboutFinalCTA.tsx` | `MapPin`, `Phone` | Contact info |
| `HubCatalogSections.tsx` | `Check` (lucide-react) | Treatment checklist items |
| `BookingTreatmentSelectorSection.tsx` | `ArrowRight` | Directional nav |
| `HubTreatmentCard.tsx` | `ArrowRight` | Card CTA |
| `TreatmentCard.tsx` | `ArrowRight` | Card CTA |
| `TreatmentCardRail.tsx` | `ArrowRight` | Card CTA |
| `IVKitCard.tsx` | `ExternalLink`, `ArrowRight` | CTAs |
| `ChannelCard.tsx` | `MessageCircle`, `Phone` | Channel type |
| `ContactChannelCard.tsx` | `MessageCircle`, `Phone`, `Instagram`, `MapPin` | Contact channels |

### Remove / Replace — decorative icons
These decorate cards/stats without adding meaning. Replace with editorial numbers or remove circular containers.

| Component | Icon | Action |
|-----------|------|--------|
| `DifferentiatorsSection.tsx` | `Award`, `Users`, `ShieldCheck` (stat circles) | Remove circular containers; stat number is the visual |
| `DifferentiatorsSection.tsx` | `Microscope`, `BadgeCheck`, `BarChart` (benefit circles) | Replace with `01`/`02`/`03` editorial index |
| `CertificationsSection.tsx` | `Award`, `ShieldCheck`, `Star`, `Globe` | Evaluate per card — Star on cert may be decorative |
| `ValuesSection.tsx` | `Target`, `Users`, `BarChart`, `Languages` | Replace with editorial numbers |
| `TreatmentBenefitCard.tsx` | `Droplets`, `Sparkles`, `Target`, `Layers`, `Maximize`, `Palette` | Replace with editorial numbers or remove |
| `BookingInfoSection.tsx` | `ShieldCheck`, `Star`, `Clock`, `Languages` | `Star` = trust cue OK; `ShieldCheck`/`Clock`/`Languages` = decorative → remove |
| `Tier3SafetySection.tsx` | `ShieldCheck`, `Info` | Evaluate — `ShieldCheck` on safety context may be borderline decorative |
| `TrustItem.tsx` | Dynamic icon lookup | Evaluate per usage site |

### Borderline — keep for now
| Component | Icon | Status |
|-----------|------|--------|
| `HeroTrustPill.tsx` | `Star` | Trust pill Google rating — keep |
| `DeepFacialUpsellSection.tsx` | `Check` | Checklist items — keep |
| `Tier3QuickFitSection.tsx` | `Check` | Checklist — keep |
| `Tier3RelatedTreatments.tsx` | `ArrowRight` | Navigation — keep |

---

## 4. IVKitsCatalogSection (lucide-react)
`IVKitsCatalogSection.tsx` imports from `lucide-react` directly (not design-system/icons). These should be reviewed and migrated or removed in a future pass. Not blocking.

---

## 5. Shared Components — Current vs Needed

| Pattern | Current state | Recommended |
|---------|--------------|-------------|
| Post-hero orientation | ✅ `PostHeroOrientationSection` exists | Align H2 to `heading-section` |
| Section H2 | ❌ Duplicated inline across 30+ files | Create `sectionTitleClass` constant |
| Eyebrow/label | ❌ Duplicated inline | Create `eyebrowClass` constant |
| Stat number | ❌ Custom per section | Create `statNumberClass` constant |
| Card title | ❌ Mixed `text-lg font-semibold` and custom | Create `cardTitleClass` constant |
| Body copy | ❌ Mixed `text-sm font-light` variants | Create `bodyMdClass`, `bodyLgClass` |
| DifferentiatorsSection | ❌ Lucide decorative icons in stat and benefit cards | Rebuild without icons |

---

## 6. Priority Action Items

1. **Create `src/lib/typography.ts`** — shared class constants for all DESIGN.md roles
2. **Fix `PostHeroOrientationSection` H2** — align to `heading-section` clamp value
3. **Rebuild `DifferentiatorsSection`** — remove all decorative Lucide icons from stat/benefit cards
4. **Future pass:** `ValuesSection`, `TreatmentBenefitCard`, `BookingInfoSection` decorative icon removal
