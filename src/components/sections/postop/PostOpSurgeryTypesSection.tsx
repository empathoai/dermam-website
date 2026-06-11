import PostHeroOrientationSection from '../shared/PostHeroOrientationSection';
import { siteConfig } from '../../../data/siteConfig';

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessagePostOp)}`;

export default function PostOpSurgeryTypesSection() {
  return (
    <PostHeroOrientationSection
      eyebrow="ANTES DE COMENZAR"
      title="¿TU RECUPERACIÓN NECESITA ACOMPAÑAMIENTO?"
      description="Después de una cirugía, el cuerpo puede necesitar apoyo progresivo, criterio profesional y una evaluación previa antes de definir el protocolo adecuado."
      cards={[
        {
          title: 'Inflamación y sensibilidad',
          body: 'Para pacientes que sienten inflamación, tensión, sensibilidad o incomodidad durante el proceso de recuperación.',
          labels: ['Inflamación', 'Sensibilidad', 'Cuidado'],
        },
        {
          title: 'Drenaje y movilidad',
          body: 'Para apoyar la movilización de líquidos y acompañar el proceso postoperatorio con técnica y seguimiento.',
          labels: ['Drenaje', 'Recuperación', 'Evolución'],
        },
        {
          title: 'Caso personalizado',
          body: 'Para pacientes que necesitan explicar su cirugía, etapa de recuperación y recomendaciones antes de recibir indicaciones.',
          labels: ['Evaluación', 'WhatsApp', 'Protocolo'],
        },
      ]}
      sectionCta={{
        label: 'Cuéntanos tu caso por WhatsApp →',
        href: whatsappHref,
      }}
    />
  );
}
