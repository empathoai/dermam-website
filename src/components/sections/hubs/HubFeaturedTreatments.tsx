import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentCardRail from '../../ui/TreatmentCardRail';

interface HubFeaturedTreatmentsProps {
  content: HubPageContent['featured'];
}

export default function HubFeaturedTreatments({ content }: HubFeaturedTreatmentsProps) {
  return (
    // DESIGN.md Hub sequence: Featured → bg-white (content surface over canvas)
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          headline={content.headline}
          subheadline={content.subheadline}
          align="center"
          className="mb-14"
        />
      </Container>

      <TreatmentCardRail items={content.items} />
    </section>
  );
}
