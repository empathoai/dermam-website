import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import PostOpHeroSection from '../components/sections/postop/PostOpHeroSection';
import PostOpSurgeryTypesSection from '../components/sections/postop/PostOpSurgeryTypesSection';
import PostOpUrgencySection from '../components/sections/postop/PostOpUrgencySection';
import PostOpProtocolSection from '../components/sections/postop/PostOpProtocolSection';
import PostOpFounderSection from '../components/sections/postop/PostOpFounderSection';
import PostOpTestimonialsSection from '../components/sections/postop/PostOpTestimonialsSection';
import PostOpResultsSection from '../components/sections/postop/PostOpResultsSection';
import PostOpFAQSection from '../components/sections/postop/PostOpFAQSection';
import PostOpFinalCTA from '../components/sections/postop/PostOpFinalCTA';
import PostOpRelatedTreatments from '../components/sections/postop/PostOpRelatedTreatments';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function PostOpLandingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const seoProps = {
    title: 'Masaje Post Operatorio West Palm Beach | DERMA.M',
    description: 'Protocolos especializados de recuperación post-operatoria en West Palm Beach. Drenaje linfático, reducción de inflamación y fibrosis. Consulta tu caso hoy.',
    canonical: `https://dermamskinhealth.com/es/postoperatorio-west-palm-beach/`,
    hreflangEs: 'https://dermamskinhealth.com/es/postoperatorio-west-palm-beach/',
    hreflangEn: 'https://dermamskinhealth.com/en/post-surgery-recovery-west-palm-beach/',
    hreflangDefault: 'https://dermamskinhealth.com/es/postoperatorio-west-palm-beach/',
    ogImage: 'https://dermamskinhealth.com/og/postoperatorio-west-palm-beach.jpg',
    ogType: 'article'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />
      <PostOpHeroSection />
      <PostOpSurgeryTypesSection />
      <PostOpUrgencySection />
      <PostOpProtocolSection />
      <PostOpFounderSection />
      <PostOpTestimonialsSection />
      <PostOpResultsSection />
      <PostOpFAQSection />
      <PostOpFinalCTA />
      <PostOpRelatedTreatments />
    </PageShell>
  );
}
