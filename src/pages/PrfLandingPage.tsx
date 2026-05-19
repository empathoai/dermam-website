import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import PrfHeroSection from '../components/sections/prf/PrfHeroSection';
import PrfAudienceSection from '../components/sections/prf/PrfAudienceSection';
import PrfEducationSection from '../components/sections/prf/PrfEducationSection';
import PrfBenefitsSection from '../components/sections/prf/PrfBenefitsSection';
import PrfProtocolSection from '../components/sections/prf/PrfProtocolSection';
import PrfResultsSection from '../components/sections/prf/PrfResultsSection';
import PrfTestimonialsSection from '../components/sections/prf/PrfTestimonialsSection';
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

  const seoProps = {
    title: 'Plasma Rico en Plaquetas West Palm Beach | DERMA.M',
    description: 'Tratamiento clínico de Plasma Rico en Plaquetas y Fibrina en West Palm Beach. Protocolo avanzado, resultados reales. Agenda tu evaluación gratuita.',
    canonical: `https://dermamskinhealth.com/es/plasma-rico-en-plaquetas-west-palm-beach/`,
    hreflangEs: 'https://dermamskinhealth.com/es/plasma-rico-en-plaquetas-west-palm-beach/',
    hreflangEn: 'https://dermamskinhealth.com/en/platelet-rich-plasma-west-palm-beach/',
    hreflangDefault: 'https://dermamskinhealth.com/es/plasma-rico-en-plaquetas-west-palm-beach/',
    ogImage: 'https://dermamskinhealth.com/og/prf-west-palm-beach.jpg',
    ogType: 'article'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />
      <PrfHeroSection />
      <PrfAudienceSection />
      <PrfEducationSection />
      <PrfBenefitsSection />
      <PrfProtocolSection />
      <PrfResultsSection />
      <PrfTestimonialsSection />
      <PrfFounderSection />
      <PrfFAQSection />
      <PrfFinalCTA />
      <PrfRelatedTreatments />
    </PageShell>
  );
}
