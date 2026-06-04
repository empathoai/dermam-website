import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentCardRail from '../../ui/TreatmentCardRail';

interface HubAllTreatmentsGridProps {
  content: HubPageContent['allGrid'];
}

export default function HubAllTreatmentsGrid({ content }: HubAllTreatmentsGridProps) {
  return (
    // DESIGN.md Hub sequence: Full catalog → bg-base-200 (mid-tone surface break)
    <section className="py-24 bg-base-200">
      {/* Section heading inside Container */}
      <Container>
        <SectionHeader
          headline={content.headline}
          align="center"
          className="mb-14"
        />
      </Container>

      {/*
       * TreatmentCardRail is full-width (not inside Container).
       * It manages its own horizontal padding to align with Container's grid.
       * Shows partial right card on all viewport sizes to signal scrollability.
       * HubTreatment[] is structurally compatible with TreatmentRailItem[].
       */}
      <TreatmentCardRail items={content.items} />

      {/* Footer note */}
      <Container>
        <div className="mt-12 text-center">
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            ¿No encuentras lo que buscas? Contamos con más protocolos específicos en centro.{' '}
            <span className="text-text-primary font-medium">
              Escríbenos para una recomendación personalizada.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
