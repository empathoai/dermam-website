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
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "DERMA.M Skin Health",
          "image": "https://dermamskinhealth.com/og/dermam-contacto.jpg",
          "telePhone": "+15612535384",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5707 S Dixie Hwy Suite D",
            "addressLocality": "West Palm Beach",
            "addressRegion": "FL",
            "postalCode": "33405",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.6698",
            "longitude": "-80.0528"
          },
          "url": "https://dermamskinhealth.com/es/contacto/",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "16:00"
            }
          ]
        })}
      </script>

      <ContactHeroSection />
      <ContactChannelsSection />
      <ContactMapSection />
      <ContactFAQSection />
    </PageShell>
  );
}
