import PageShell from '../components/layout/PageShell';
import PostOpHeroSection from '../components/sections/postop/PostOpHeroSection';
import PostOpSurgeryTypesSection from '../components/sections/postop/PostOpSurgeryTypesSection';
import PostOpUrgencySection from '../components/sections/postop/PostOpUrgencySection';
import PostOpProtocolSection from '../components/sections/postop/PostOpProtocolSection';
import PostOpFounderSection from '../components/sections/postop/PostOpFounderSection';
import GoogleReviews from '../components/GoogleReviews';
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

  return (
    <PageShell
      title="Masaje Post Operatorio West Palm Beach | DERMA.M"
      description="Protocolos especializados de recuperación post-operatoria en West Palm Beach. Drenaje linfático, reducción de inflamación y fibrosis. Consulta tu caso hoy."
      ogImage="https://dermamskinhealth.com/og/postoperatorio-west-palm-beach.jpg"
      ogType="article"
    >
      <PostOpHeroSection />
      <PostOpSurgeryTypesSection />
      <PostOpUrgencySection />
      <PostOpProtocolSection />
      <PostOpFounderSection />
      <GoogleReviews filter="postoperatorio" maxItems={3} />
      <PostOpResultsSection />
      <PostOpRelatedTreatments />
      <PostOpFAQSection />
      <PostOpFinalCTA />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/postoperatorio-west-palm-beach/index',
  routeUrl: '/es/postoperatorio-west-palm-beach',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/postoperatorio-west-palm-beach'] }, children)
    );
  }
};
