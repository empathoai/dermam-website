import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import HubTreatmentCard from '../../ui/HubTreatmentCard';
import SectionHeader from '../../ui/SectionHeader';

interface HubFeaturedTreatmentsProps {
  content: HubPageContent['featured'];
}

export default function HubFeaturedTreatments({ content }: HubFeaturedTreatmentsProps) {
  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader 
          headline={content.headline}
          subheadline={content.subheadline}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((treatment) => (
            <HubTreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  );
}
