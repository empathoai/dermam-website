import PageShell from '../components/layout/PageShell';
import HeroSection from '../components/sections/home/HeroSection';
import TrustBar from '../components/sections/home/TrustBar';
import TreatmentsSection from '../components/sections/home/TreatmentsSection';
import DifferentiatorsSection from '../components/sections/home/DifferentiatorsSection';
import FounderSection from '../components/sections/home/FounderSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import FinalCTA from '../components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <PageShell
      title="DERMA.M Skin Health | Estética Profesional en WPB"
      description="Tratamientos médico-estéticos personalizados en West Palm Beach. Agenda tu evaluación en DERMA.M Skin Health y cuida tu piel con confianza."
      ogImage="https://dermamskinhealth.com/og/dermam-home.jpg"
      ogType="website"
    >
      <HeroSection />
      <TrustBar />
      <TreatmentsSection />
      <DifferentiatorsSection />
      <FounderSection />
      <TestimonialsSection />
      <FinalCTA />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/index',
  routeUrl: '/es',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es'] }, children)
    );
  }
};
