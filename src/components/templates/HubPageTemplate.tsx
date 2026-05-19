import PageShell from '../layout/PageShell';
import SEO from '../layout/SEO';
import { HubPageContent } from '../../types/hub';
import HubHeroSection from '../sections/hubs/HubHeroSection';
import HubIntroSection from '../sections/hubs/HubIntroSection';
import HubFeaturedTreatments from '../sections/hubs/HubFeaturedTreatments';
import HubAllTreatmentsGrid from '../sections/hubs/HubAllTreatmentsGrid';
import HubFAQSection from '../sections/hubs/HubFAQSection';
import HubSocialProofSection from '../sections/hubs/HubSocialProofSection';
import HubFinalCTA from '../sections/hubs/HubFinalCTA';

interface HubPageTemplateProps {
  content: HubPageContent;
}

export default function HubPageTemplate({ content }: HubPageTemplateProps) {
  return (
    <PageShell>
      <SEO 
        {...content.seo} 
        ogType="website"
        hreflangDefault={content.seo.canonical} 
      />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "DERMA.M Skin Health",
          "telePhone": "+15612535384",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5707 S Dixie Hwy Suite D",
            "addressLocality": "West Palm Beach",
            "addressRegion": "FL",
            "postalCode": "33405",
            "addressCountry": "US"
          },
          "url": content.seo.canonical
        })}
      </script>

      <HubHeroSection content={content.hero} />
      <HubIntroSection content={content.intro} />
      <HubFeaturedTreatments content={content.featured} />
      <HubAllTreatmentsGrid content={content.allGrid} />
      <HubFAQSection content={content.faqs} />
      <HubSocialProofSection content={content.socialProof} />
      <HubFinalCTA content={content.finalCTA} />
    </PageShell>
  );
}
