import PageShell from '../layout/PageShell';
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
    <PageShell
      title={content.seo.title}
      description={content.seo.description}
      ogImage={content.seo.ogImage}
      ogType="website"
    >
      
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
