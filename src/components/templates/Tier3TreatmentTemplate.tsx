import React, { useRef } from 'react';
import { Tier3Treatment } from '../../types/tier3Treatment';
import { Helmet } from 'react-helmet-async';
import Tier3HeroSection from '../sections/tier3/Tier3HeroSection';
import Tier3QuickFitSection from '../sections/tier3/Tier3QuickFitSection';
import Tier3ExplanationSection from '../sections/tier3/Tier3ExplanationSection';
import Tier3BenefitsSection from '../sections/tier3/Tier3BenefitsSection';
import Tier3SessionStepsSection from '../sections/tier3/Tier3SessionStepsSection';
import Tier3SafetySection from '../sections/tier3/Tier3SafetySection';
import Tier3FAQSection from '../sections/tier3/Tier3FAQSection';
import Tier3RelatedTreatments from '../sections/tier3/Tier3RelatedTreatments';
import Tier3FinalCTA from '../sections/tier3/Tier3FinalCTA';
import PageShell from '../layout/PageShell';
import { tier3Treatments } from '../../data/tier3Treatments';

interface Tier3TreatmentTemplateProps {
  treatment: Tier3Treatment;
}

export default function Tier3TreatmentTemplate({ treatment }: Tier3TreatmentTemplateProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageShell
      title={treatment.seoTitle}
      description={treatment.metaDescription}
      ogImage={treatment.heroMedia.src}
      ogType="website"
    >
      {treatment.faqs && treatment.faqs.length > 0 && (
        <Helmet>
          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": treatment.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        </Helmet>
      )}

      {/* 01 Hero */}
      <Tier3HeroSection
        eyebrow={treatment.eyebrow}
        h1={treatment.h1}
        subheadline={treatment.subheadline}
        media={treatment.heroMedia}
        ctaLabel={treatment.primaryCta.label}
        onScrollToContent={scrollToContent}
      />

      <div ref={contentRef}>
        {/* 02 Quick Fit */}
        <Tier3QuickFitSection 
            quickFacts={treatment.quickFacts}
            quickFit={treatment.quickFit}
        />

        {/* 03 Explanation */}
        <Tier3ExplanationSection 
            title={treatment.explanation.title}
            body={treatment.explanation.body}
            media={treatment.explanation.media}
        />

        {/* 04 Benefits */}
        <Tier3BenefitsSection benefits={treatment.benefits} />

        {/* 05 Session Steps */}
        <Tier3SessionStepsSection steps={treatment.sessionSteps} />

        {/* 07 Safety */}
        <Tier3SafetySection 
            title={treatment.safety.title}
            items={treatment.safety.items}
            disclaimer={treatment.safety.disclaimer}
        />

        {/* 09 FAQ */}
        <Tier3FAQSection 
            faqs={treatment.faqs}
            category={treatment.shortTitle}
        />

        {/* 10 Related Treatments */}
        <Tier3RelatedTreatments 
            currentTreatmentId={treatment.id}
            relatedIds={treatment.relatedTreatmentIds}
            allTreatments={tier3Treatments}
        />

        {/* 11 Final CTA */}
        <Tier3FinalCTA 
            title={treatment.finalCta.title}
            copy={treatment.finalCta.copy}
            primaryLabel={treatment.finalCta.primaryLabel}
            secondaryLabel={treatment.finalCta.secondaryLabel}
            primaryHref={treatment.primaryCta.href}
            whatsappMessage={treatment.whatsappMessage}
            image={treatment.finalCta.image}
        />
      </div>
    </PageShell>
  );
}
