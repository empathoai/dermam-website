import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import BookingHeroSection from '../components/sections/booking/BookingHeroSection';
import BookingTreatmentSelectorSection from '../components/sections/booking/BookingTreatmentSelectorSection';
import BookingWhatsAppAlternativeSection from '../components/sections/booking/BookingWhatsAppAlternativeSection';
import BookingInfoSection from '../components/sections/booking/BookingInfoSection';

export default function BookingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageShell
      title="Reservar Cita | DERMA.M Skin Health WPB"
      description="Agenda tu evaluación o tratamiento en DERMA.M Skin Health en West Palm Beach. Reserva por Square o consulta tu caso por WhatsApp."
      ogImage="https://dermamskinhealth.com/og/dermam-reservar.jpg"
      ogType="website"
    >

      <BookingHeroSection />
      <BookingTreatmentSelectorSection />
      <BookingWhatsAppAlternativeSection />
      <BookingInfoSection />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/reservar/index',
  routeUrl: '/es/reservar',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/reservar'] }, children)
    );
  }
};
