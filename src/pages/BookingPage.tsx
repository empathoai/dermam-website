import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import BookingHeroSection from '../components/sections/booking/BookingHeroSection';
import BookingTreatmentSelectorSection from '../components/sections/booking/BookingTreatmentSelectorSection';
import BookingWhatsAppAlternativeSection from '../components/sections/booking/BookingWhatsAppAlternativeSection';
import BookingInfoSection from '../components/sections/booking/BookingInfoSection';

export default function BookingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const seoProps = {
    title: 'Reservar Cita | DERMA.M Skin Health WPB',
    description: 'Agenda tu evaluación o tratamiento en DERMA.M Skin Health en West Palm Beach. Reserva por Square o consulta tu caso por WhatsApp.',
    canonical: 'https://dermamskinhealth.com/es/reservar/',
    hreflangEs: 'https://dermamskinhealth.com/es/reservar/',
    hreflangEn: 'https://dermamskinhealth.com/en/book/',
    hreflangDefault: 'https://dermamskinhealth.com/es/reservar/',
    ogImage: 'https://dermamskinhealth.com/og/dermam-reservar.jpg',
    ogType: 'website'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />

      <BookingHeroSection />
      <BookingTreatmentSelectorSection />
      <BookingWhatsAppAlternativeSection />
      <BookingInfoSection />
    </PageShell>
  );
}
