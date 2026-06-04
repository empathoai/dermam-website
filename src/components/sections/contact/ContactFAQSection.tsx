import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import FAQAccordion from '../../ui/FAQAccordion';

export default function ContactFAQSection() {
  const { faqs } = contactContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-4">Preguntas frecuentes</h2>
            <p className="text-text-secondary">Dudas log?sticas comunes al contactarnos.</p>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
