import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SEO from '../components/layout/SEO';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactChannelsSection from '../components/sections/contact/ContactChannelsSection';
import ContactMapSection from '../components/sections/contact/ContactMapSection';
import ContactFAQSection from '../components/sections/contact/ContactFAQSection';

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const seoProps = {
    title: 'Contacto DERMA.M Skin Health | West Palm Beach',
    description: 'Comunícate con DERMA.M Skin Health en West Palm Beach por WhatsApp, teléfono o formulario. Agenda tu evaluación y recibe orientación profesional.',
    canonical: 'https://dermamskinhealth.com/es/contacto/',
    hreflangEs: 'https://dermamskinhealth.com/es/contacto/',
    hreflangEn: 'https://dermamskinhealth.com/en/contact/',
    hreflangDefault: 'https://dermamskinhealth.com/es/contacto/',
    ogImage: 'https://dermamskinhealth.com/og/dermam-contacto.jpg',
    ogType: 'website'
  };

  return (
    <PageShell>
      <SEO {...seoProps} />

      <ContactHeroSection />
      <ContactChannelsSection />
      <ContactMapSection />
      <ContactFAQSection />
    </PageShell>
  );
}
