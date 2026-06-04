import { homeContent } from '../../../data/homeContent';
import { featuredTreatments } from '../../../data/treatments';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentCard from '../../ui/TreatmentCard';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

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
        
        <ResponsiveCardGroup desktopColumns={3} desktopClassName="gap-5" mobileCardWidth="84vw">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
