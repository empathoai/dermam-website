import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactChannelsSection from '../components/sections/contact/ContactChannelsSection';
import ContactMapSection from '../components/sections/contact/ContactMapSection';
import ContactFAQSection from '../components/sections/contact/ContactFAQSection';

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageShell
      title="Contacto DERMA.M Skin Health | West Palm Beach"
      description="Comunícate con DERMA.M Skin Health en West Palm Beach por WhatsApp, teléfono o formulario. Agenda tu evaluación y recibe orientación profesional."
      ogImage="https://dermamskinhealth.com/og/dermam-contacto.jpg"
      ogType="website"
    >

      <ContactHeroSection />
      <ContactChannelsSection />
      <ContactMapSection />
      <ContactFAQSection />
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/contacto/index',
  routeUrl: '/es/contacto',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/contacto'] }, children)
    );
  }
};
