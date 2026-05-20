import React from 'react';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import TreatmentStepCard from '../../ui/TreatmentStepCard';
import { motion } from 'motion/react';

interface Tier3SessionStepsSectionProps {
  steps: Array<{ title: string; description: string }>;
}

export default function Tier3SessionStepsSection({ steps }: Tier3SessionStepsSectionProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          headline="Tu experiencia paso a paso"
          subheadline="¿Qué sucede durante tu sesión en DERMA.M? Transparencia y confianza en cada etapa."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx}>
              <TreatmentStepCard
                number={idx + 1}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
