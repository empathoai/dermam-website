import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import HeroSection from '../components/sections/home/HeroSection';
import TrustBar from '../components/sections/home/TrustBar';
import TreatmentsSection from '../components/sections/home/TreatmentsSection';
import DifferentiatorsSection from '../components/sections/home/DifferentiatorsSection';
import FounderSection from '../components/sections/home/FounderSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import FinalCTA from '../components/sections/home/FinalCTA';

export default function HomePage() {
  const seoProps = {
    title: 'DERMA.M Skin Health | Estética Profesional en WPB',
    description: 'Tratamientos médico-estéticos personalizados en West Palm Beach. Agenda tu evaluación en DERMA.M Skin Health y cuida tu piel con confianza.',
    canonical: 'https://ais-dev-5b3b2kkzfslgmbwymdudl2-165930146839.us-east1.run.app/es/', // Using dev URL but normally canonical would be production
    hreflangEs: 'https://dermamskinhealth.com/es/',
    hreflangEn: 'https://dermamskinhealth.com/en/',
    hreflangDefault: 'https://dermamskinhealth.com/es/',
    ogImage: 'https://dermamskinhealth.com/og/dermam-home.jpg',
    ogType: 'website'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />
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
