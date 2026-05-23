import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import CompactTreatmentCard from '../../ui/CompactTreatmentCard';
import SectionHeader from '../../ui/SectionHeader';

interface HubAllTreatmentsGridProps {
  content: HubPageContent['allGrid'];
}

export default function HubAllTreatmentsGrid({ content }: HubAllTreatmentsGridProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader 
          headline={content.headline}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {content.items.map((treatment) => (
            <CompactTreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-text-secondary text-sm max-w-2xl mx-auto">
                ¿No encuentras lo que buscas? Contamos con más protocolos específicos en centro. Escríbenos para una recomendación personalizada.
            </p>
        </div>
      </Container>
    </section>
  );
}
