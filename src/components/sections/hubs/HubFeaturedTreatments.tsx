import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import HubTreatmentCard from '../../ui/HubTreatmentCard';
import SectionHeader from '../../ui/SectionHeader';

interface HubFeaturedTreatmentsProps {
  content: HubPageContent['featured'];
}

export default function HubFeaturedTreatments({ content }: HubFeaturedTreatmentsProps) {
  return (
    <section className="py-24 bg-canvas/30">
      <Container>
        <SectionHeader 
          headline={content.headline}
          subheadline={content.subheadline}
          align="center"
          className="mb-16"
        />

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {content.items.map((treatment) => (
            <HubTreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  );
}
