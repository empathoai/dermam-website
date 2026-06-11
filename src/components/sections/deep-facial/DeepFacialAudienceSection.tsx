import PostHeroOrientationSection from '../shared/PostHeroOrientationSection';

export default function DeepFacialAudienceSection() {
  return (
    <PostHeroOrientationSection
      eyebrow="ANTES DE COMENZAR"
      title="¿TU PIEL NECESITA UNA BASE MÁS LIMPIA?"
      description="La limpieza facial profunda ayuda a preparar la piel, retirar acumulación superficial y crear una mejor base antes de otros protocolos."
      cards={[
        {
          title: 'Congestión y poros',
          body: 'Para pieles con textura cargada, poros visibles, puntos negros o sensación de acumulación.',
          labels: ['Poros', 'Congestión', 'Limpieza'],
        },
        {
          title: 'Luminosidad apagada',
          body: 'Para pieles que se ven opacas, cansadas o con poca uniformidad después de rutina diaria, maquillaje o exposición ambiental.',
          labels: ['Frescura', 'Hidratación', 'Oxigenación'],
        },
        {
          title: 'Preparación de piel',
          body: 'Para quienes quieren mejorar la base de la piel antes de PRF, peel, microneedling u otros tratamientos.',
          labels: ['Diagnóstico', 'Preparación', 'Seguimiento'],
        },
      ]}
    />
  );
}
