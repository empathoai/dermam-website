import React, { useRef } from 'react';
import { ivTherapyContent } from '../data/ivTherapyContent';
import { ivKits } from '../data/ivKits';
import IVTherapyHeroSection from '../components/sections/iv-therapy/IVTherapyHeroSection';
import IVTherapyEducationSection from '../components/sections/iv-therapy/IVTherapyEducationSection';
import IVKitsGridSection from '../components/sections/iv-therapy/IVKitsGridSection';
import IVTherapyFAQSection from '../components/sections/iv-therapy/IVTherapyFAQSection';
import IVTherapyFinalCTA from '../components/sections/iv-therapy/IVTherapyFinalCTA';
import PageShell from '../components/layout/PageShell';

export default function IVTherapyPage() {
  const kitsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToKits = () => {
    kitsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageShell
      title={ivTherapyContent.seo.title}
      description={ivTherapyContent.seo.description}
      ogImage={ivTherapyContent.seo.ogImage}
      ogType="website"
    >

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
    </PageShell>
  );
}

export const ssgOptions = {
  slug: 'es/iv-therapy/index',
  routeUrl: '/es/iv-therapy',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/iv-therapy'] }, children)
    );
  }
};
