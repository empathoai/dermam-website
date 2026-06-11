import PageShell from '../layout/PageShell';
import { HubPageContent } from '../../types/hub';
import HubHeroSection from '../sections/hubs/HubHeroSection';
import HubIntroSection from '../sections/hubs/HubIntroSection';
import HubFeaturedTreatments from '../sections/hubs/HubFeaturedTreatments';
import HubAllTreatmentsGrid from '../sections/hubs/HubAllTreatmentsGrid';
import HubCatalogSections from '../sections/hubs/HubCatalogSections';
import HubFAQSection from '../sections/hubs/HubFAQSection';
import HubFinalCTA from '../sections/hubs/HubFinalCTA';
import GoogleReviews from '../GoogleReviews';

interface HubPageTemplateProps {
  content: HubPageContent;
}

export default function HubPageTemplate({ content }: HubPageTemplateProps) {
  const hasCatalogSections = content.catalogSections && content.catalogSections.length > 0;

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
      
      {hasCatalogSections ? (
        <HubCatalogSections sections={content.catalogSections!} />
      ) : (
        <HubAllTreatmentsGrid content={content.allGrid} />
      )}
      
      <GoogleReviews filter="featured" maxItems={3} showMeta variant="dark" />
      <HubFAQSection content={content.faqs} />
      <HubFinalCTA content={content.finalCTA} />
    </PageShell>
  );
}
