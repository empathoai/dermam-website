import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import AboutFounderStorySection from '../components/sections/about/AboutFounderStorySection';
import TeamSection from '../components/sections/about/TeamSection';
import ValuesSection from '../components/sections/about/ValuesSection';
import CertificationsSection from '../components/sections/about/CertificationsSection';
import AboutFinalCTA from '../components/sections/about/AboutFinalCTA';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageShell
      title="Sobre Nosotros | DERMA.M Skin Health WPB"
      description="Conoce al equipo de DERMA.M Skin Health en West Palm Beach. Especialistas certificados, diagnóstico personalizado y cuidado profesional para tu piel."
      ogImage="https://dermamskinhealth.com/og/dermam-about.jpg"
      ogType="website"
    >
      <AboutHeroSection />
      <AboutFounderStorySection />
      <TeamSection />
      <ValuesSection />
      <CertificationsSection />
      <AboutFinalCTA />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/sobre-nosotros/index',
  routeUrl: '/es/sobre-nosotros',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/sobre-nosotros'] }, children)
    );
  }
};
