import { homeContent } from '../../../data/homeContent';
import { featuredTreatments } from '../../../data/treatments';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentCard from '../../ui/TreatmentCard';

export default function TreatmentsSection() {
  const { treatmentsSection } = homeContent;

  return (
    <section className="py-24" id="treatments">
      <Container>
        <SectionHeader
          eyebrow={treatmentsSection.eyebrow}
          headline={treatmentsSection.headline}
          subheadline={treatmentsSection.subheadline}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  );
}
