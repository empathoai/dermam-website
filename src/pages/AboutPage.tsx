import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
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

  const seoProps = {
    title: 'Sobre Nosotros | DERMA.M Skin Health WPB',
    description: 'Conoce al equipo de DERMA.M Skin Health en West Palm Beach. Especialistas certificados, diagnóstico personalizado y cuidado profesional para tu piel.',
    canonical: 'https://dermamskinhealth.com/es/sobre-nosotros/',
    hreflangEs: 'https://dermamskinhealth.com/es/sobre-nosotros/',
    hreflangEn: 'https://dermamskinhealth.com/en/about/',
    hreflangDefault: 'https://dermamskinhealth.com/es/sobre-nosotros/',
    ogImage: 'https://dermamskinhealth.com/og/dermam-about.jpg',
    ogType: 'website'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />
      <AboutHeroSection />
      <AboutFounderStorySection />
      <TeamSection />
      <ValuesSection />
      <CertificationsSection />
      <AboutFinalCTA />
    </PageShell>
  );
}
