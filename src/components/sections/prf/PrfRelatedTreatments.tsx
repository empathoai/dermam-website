import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import TreatmentCardRail from '../../ui/TreatmentCardRail';

export default function PrfRelatedTreatments() {
  const { relatedTreatments } = prfContent;

  return (
    // DESIGN.md Tier 1 sequence: Related → bg-base-200
    <section className="py-24 bg-base-200">
      {/* Heading inside Container */}
      <Container>
        <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase text-center mb-14 font-sans">
          Protocolos que pueden acompañar tu PRF
        </h2>
      </Container>

      {/*
       * Mobile: horizontal snap scroll (partial next card visible).
       * Desktop: same rail — 3 items fill ~3 cards visible at lg width.
       * relatedTreatments items are structurally compatible with TreatmentRailItem[].
       */}
      <TreatmentCardRail items={relatedTreatments} />
    </section>
  );
}
