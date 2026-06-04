import PageShell from '../components/layout/PageShell';
import PrfHeroSection from '../components/sections/prf/PrfHeroSection';
import PrfAudienceSection from '../components/sections/prf/PrfAudienceSection';
import PrfEducationSection from '../components/sections/prf/PrfEducationSection';
import PrfBenefitsSection from '../components/sections/prf/PrfBenefitsSection';
import PrfProtocolSection from '../components/sections/prf/PrfProtocolSection';
import PrfResultsSection from '../components/sections/prf/PrfResultsSection';
import GoogleReviews from '../components/GoogleReviews';
import PrfFounderSection from '../components/sections/prf/PrfFounderSection';
import PrfFAQSection from '../components/sections/prf/PrfFAQSection';
import PrfFinalCTA from '../components/sections/prf/PrfFinalCTA';
import PrfRelatedTreatments from '../components/sections/prf/PrfRelatedTreatments';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrfLandingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageShell
      title="Plasma Rico en Plaquetas West Palm Beach | DERMA.M"
      description="Tratamiento clínico de Plasma Rico en Plaquetas y Fibrina en West Palm Beach. Protocolo avanzado, resultados reales. Agenda tu evaluación gratuita."
      ogImage="https://dermamskinhealth.com/og/prf-west-palm-beach.jpg"
      ogType="article"
    >
      <PrfHeroSection />
      <PrfAudienceSection />
      <PrfEducationSection />
      <PrfBenefitsSection />
      <PrfProtocolSection />
      <PrfResultsSection />
      <GoogleReviews filter="prf" maxItems={3} />
      <PrfFounderSection />
      <PrfRelatedTreatments />
      <PrfFAQSection />
      <PrfFinalCTA />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/plasma-rico-en-plaquetas-west-palm-beach/index',
  routeUrl: '/es/plasma-rico-en-plaquetas-west-palm-beach',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/plasma-rico-en-plaquetas-west-palm-beach'] }, children)
    );
  }
};
