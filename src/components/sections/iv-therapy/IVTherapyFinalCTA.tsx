import React from 'react';
import { IVTherapyFinalCTAContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import Button from '../../ui/Button';
import { MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

interface IVTherapyFinalCTAProps {
  content: IVTherapyFinalCTAContent;
}

export default function IVTherapyFinalCTA({ content }: IVTherapyFinalCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.secondaryCTA.whatsappMessage)}`;

  return (
    <section className="relative py-24 overflow-hidden bg-canvas isolation-isolate">
      <SectionMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay="soft"
        opacity={0.5}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-border-soft shadow-2xl flex flex-col md:flex-row items-stretch">
          {/* Text Content */}
          <div className="flex-1 p-10 md:p-16 border-b md:border-b-0 md:border-r border-border-soft">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {content.copy}
            </p>
          </div>

          {/* Actions */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center gap-6 bg-canvas/30">
            <Button 
              to={content.primaryCTA.href} 
              className="w-full justify-center gap-3 py-6 h-auto text-lg"
            >
              <Calendar size={20} />
              {content.primaryCTA.label}
            </Button>

            <Button 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline" 
              className="w-full justify-center gap-3 py-6 h-auto text-lg"
            >
              <MessageCircle size={20} />
              {content.secondaryCTA.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
