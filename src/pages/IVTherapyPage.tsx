import React, { useRef } from 'react';
import { ivTherapyContent } from '../data/ivTherapyContent';
import { ivKits } from '../data/ivKits';
import IVTherapyHeroSection from '../components/sections/iv-therapy/IVTherapyHeroSection';
import IVTherapyEducationSection from '../components/sections/iv-therapy/IVTherapyEducationSection';
import IVKitsGridSection from '../components/sections/iv-therapy/IVKitsGridSection';
import IVTherapyFAQSection from '../components/sections/iv-therapy/IVTherapyFAQSection';
import IVTherapyFinalCTA from '../components/sections/iv-therapy/IVTherapyFinalCTA';
import WhatsAppFAB from '../components/ui/WhatsAppFAB';
import { Helmet } from 'react-helmet-async';

export default function IVTherapyPage() {
  const kitsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToKits = () => {
    kitsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      <Helmet>
        <title>{ivTherapyContent.seo.title}</title>
        <meta name="description" content={ivTherapyContent.seo.description} />
        <link rel="canonical" href={ivTherapyContent.seo.canonical} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="es" href="https://dermamskinhealth.com/es/iv-therapy/" />
        <link rel="alternate" hrefLang="en" href="https://dermamskinhealth.com/en/iv-therapy/" />
        <link rel="alternate" hrefLang="x-default" href="https://dermamskinhealth.com/es/iv-therapy/" />

        {/* Open Graph */}
        <meta property="og:title" content={ivTherapyContent.seo.title} />
        <meta property="og:description" content={ivTherapyContent.seo.description} />
        <meta property="og:image" content={ivTherapyContent.seo.ogImage} />
        <meta property="og:url" content={ivTherapyContent.seo.canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 01 Hero */}
      <IVTherapyHeroSection 
        content={ivTherapyContent.hero} 
        onScrollToKits={scrollToKits}
      />

      {/* 02 Qué es IV Therapy */}
      <IVTherapyEducationSection content={ivTherapyContent.education} />

      {/* 03 Los 7 kits disponibles */}
      <div ref={kitsSectionRef}>
        <IVKitsGridSection 
          id="kits"
          title={ivTherapyContent.kitsSection.title}
          subtitle={ivTherapyContent.kitsSection.subtitle}
          kits={ivKits}
        />
      </div>

      {/* 04 FAQ IV Therapy */}
      <IVTherapyFAQSection items={ivTherapyContent.faqs} />

      {/* 05 CTA Final */}
      <IVTherapyFinalCTA content={ivTherapyContent.finalCTA} />

      {/* 06 WhatsApp FAB */}
      <WhatsAppFAB 
        phoneNumber="15615663762"
        message="Hola, quiero información sobre IV Therapy en DERMA.M."
      />
    </main>
  );
}
