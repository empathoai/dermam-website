import React from 'react';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentBenefitCard from '../../ui/TreatmentBenefitCard';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

interface Tier3BenefitsSectionProps {
  benefits: Array<{ title: string; description: string; icon?: string }>;
}

export default function Tier3BenefitsSection({ benefits }: Tier3BenefitsSectionProps) {
  return (
    <section className="py-24 bg-base-200">
      <Container>
        <SectionHeader
          headline="Beneficios clave"
          subheadline="Por qué elegir este tratamiento para tu rutina de cuidado profesional."
          align="center"
          className="mb-16"
        />

        <ResponsiveCardGroup desktopColumns={3} desktopItemClassName="h-full" mobileCardWidth="84vw">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="h-full">
              <TreatmentBenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            </div>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
