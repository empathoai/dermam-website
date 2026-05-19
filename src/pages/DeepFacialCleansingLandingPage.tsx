import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import DeepFacialHeroSection from '../components/sections/deep-facial/DeepFacialHeroSection';
import DeepFacialAudienceSection from '../components/sections/deep-facial/DeepFacialAudienceSection';
import DeepFacialProtocolSection from '../components/sections/deep-facial/DeepFacialProtocolSection';
import DeepFacialBenefitsSection from '../components/sections/deep-facial/DeepFacialBenefitsSection';
import DeepFacialUpsellSection from '../components/sections/deep-facial/DeepFacialUpsellSection';
import DeepFacialResultsSection from '../components/sections/deep-facial/DeepFacialResultsSection';
import DeepFacialTestimonialsSection from '../components/sections/deep-facial/DeepFacialTestimonialsSection';
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

  const seoProps = {
    title: 'Limpieza Facial Profunda West Palm Beach | DERMA.M',
    description: 'Limpieza facial profunda en West Palm Beach con diagnóstico de piel incluido. Mejora poros, textura y luminosidad. Reserva tu cita en DERMA.M.',
    canonical: `https://dermamskinhealth.com/es/limpieza-facial-profunda/`,
    hreflangEs: 'https://dermamskinhealth.com/es/limpieza-facial-profunda/',
    hreflangEn: 'https://dermamskinhealth.com/en/deep-facial-cleansing/',
    hreflangDefault: 'https://dermamskinhealth.com/es/limpieza-facial-profunda/',
    ogImage: 'https://dermamskinhealth.com/og/limpieza-facial-profunda.jpg',
    ogType: 'article'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />
      <DeepFacialHeroSection />
      <DeepFacialAudienceSection />
      <DeepFacialProtocolSection />
      <DeepFacialBenefitsSection />
      <DeepFacialUpsellSection />
      <DeepFacialResultsSection />
      <DeepFacialTestimonialsSection />
      <DeepFacialFounderSection />
      <DeepFacialFAQSection />
      <DeepFacialFinalCTA />
      <DeepFacialRelatedTreatments />
    </PageShell>
  );
}
