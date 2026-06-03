import React from 'react';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentBenefitCard from '../../ui/TreatmentBenefitCard';

interface Tier3BenefitsSectionProps {
  benefits: Array<{ title: string; description: string; icon?: string }>;
}

export default function Tier3BenefitsSection({ benefits }: Tier3BenefitsSectionProps) {
  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader
          headline="Beneficios clave"
          subheadline="Por qué elegir este tratamiento para tu rutina de cuidado profesional."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="h-full">
              <TreatmentBenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
