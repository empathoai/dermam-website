import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import FAQAccordion from '../../ui/FAQAccordion';

export default function PostOpFAQSection() {
  const { faqs } = postOpContent;

  return (
    <section className="py-24 bg-white">
      {/* Structured Data FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase text-center mb-16">Preguntas frecuentes sobre post-operatorio</h2>
          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
