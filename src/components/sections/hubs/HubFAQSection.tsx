import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import FAQAccordion from '../../ui/FAQAccordion';
import SectionHeader from '../../ui/SectionHeader';

interface HubFAQSectionProps {
  content: HubPageContent['faqs'];
}

export default function HubFAQSection({ content }: HubFAQSectionProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            headline={content.headline}
            align="center"
            className="mb-16"
          />
          
          <FAQAccordion items={content.items} />
        </div>
      </Container>
    </section>
  );
}
