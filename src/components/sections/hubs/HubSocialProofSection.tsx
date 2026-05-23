import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import { Star } from 'lucide-react';

interface HubSocialProofSectionProps {
  content: HubPageContent['socialProof'];
}

export default function HubSocialProofSection({ content }: HubSocialProofSectionProps) {
  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader 
          headline={content.headline}
          align="center"
          className="mb-20"
        />

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
          {/* Rating Summary */}
          <div className="lg:w-1/3 bg-white rounded-[2rem] p-10 text-center flex flex-col items-center justify-center border border-border-soft border-dashed">
            <div className="text-5xl md:text-6xl font-sans text-text-primary mb-4">
              {content.googleRating}
            </div>
            <div className="flex gap-1 mb-6 text-text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <div className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-4">
                Google Reviews
            </div>
            <a 
              href={content.googleLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold text-text-primary hover:text-base-600 underline underline-offset-4"
            >
              Ver todas las reseñas →
            </a>
          </div>

          {/* Review Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {content.items.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-border-soft rounded-[2.5rem] p-8 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md hover:border-base-300"
              >
                <p className="text-lg text-text-primary italic mb-6 leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-base-900/10 flex items-center justify-center font-bold text-base-900">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary">
                        {review.author}
                    </div>
                    <div className="text-[10px] font-medium text-text-secondary uppercase tracking-[0.15em]">
                        {review.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
