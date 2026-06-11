import PostHeroOrientationSection from '../shared/PostHeroOrientationSection';

export default function PrfAudienceSection() {
  return (
    <PostHeroOrientationSection
      eyebrow="ANTES DE COMENZAR"
      title="¿TU PIEL NECESITA MÁS FRESCURA?"
      description="A veces la piel no necesita verse diferente. Necesita recuperar luminosidad, textura uniforme y una apariencia más descansada con un protocolo progresivo."
      cards={[
        {
          title: 'Piel apagada o cansada',
          body: 'Para pieles que han perdido luminosidad, frescura o sensación de vitalidad y necesitan una estimulación gradual.',
          labels: ['Luminosidad', 'Textura', 'Calidad de piel'],
        },
        {
          title: 'Textura irregular o marcas',
          body: 'Para personas que notan poros, líneas finas, cicatrices de acné o cambios visibles en la superficie de la piel.',
          labels: ['Poros', 'Líneas finas', 'Marcas'],
        },
        {
          title: 'Bioestimulación progresiva',
          body: 'Para quienes buscan apoyar la regeneración natural de la piel sin promesas inmediatas ni cambios artificiales.',
          labels: ['PRF', 'Colágeno', 'Recuperación gradual'],
        },
      ]}
    />
  );
}
