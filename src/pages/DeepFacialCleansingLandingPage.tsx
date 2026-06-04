import PageShell from '../components/layout/PageShell';
import DeepFacialHeroSection from '../components/sections/deep-facial/DeepFacialHeroSection';
import DeepFacialAudienceSection from '../components/sections/deep-facial/DeepFacialAudienceSection';
import DeepFacialProtocolSection from '../components/sections/deep-facial/DeepFacialProtocolSection';
import DeepFacialBenefitsSection from '../components/sections/deep-facial/DeepFacialBenefitsSection';
import DeepFacialUpsellSection from '../components/sections/deep-facial/DeepFacialUpsellSection';
import DeepFacialResultsSection from '../components/sections/deep-facial/DeepFacialResultsSection';
import GoogleReviews from '../components/GoogleReviews';
import DeepFacialFounderSection from '../components/sections/deep-facial/DeepFacialFounderSection';
import DeepFacialFAQSection from '../components/sections/deep-facial/DeepFacialFAQSection';
import DeepFacialFinalCTA from '../components/sections/deep-facial/DeepFacialFinalCTA';
import DeepFacialRelatedTreatments from '../components/sections/deep-facial/DeepFacialRelatedTreatments';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function DeepFacialCleansingLandingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageShell
      title="Limpieza Facial Profunda West Palm Beach | DERMA.M"
      description="Limpieza facial profunda en West Palm Beach con diagnóstico de piel incluido. Mejora poros, textura y luminosidad. Reserva tu cita en DERMA.M."
      ogImage="https://dermamskinhealth.com/og/limpieza-facial-profunda.jpg"
      ogType="article"
    >
      <DeepFacialHeroSection />
      <DeepFacialAudienceSection />
      <DeepFacialProtocolSection />
      <DeepFacialBenefitsSection />
      <DeepFacialUpsellSection />
      <DeepFacialResultsSection />
      <GoogleReviews filter="limpieza_facial" maxItems={3} />
      <DeepFacialFounderSection />
      <DeepFacialRelatedTreatments />
      <DeepFacialFAQSection />
      <DeepFacialFinalCTA />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/limpieza-facial-profunda/index',
  routeUrl: '/es/limpieza-facial-profunda',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/limpieza-facial-profunda'] }, children)
    );
  }
};
