import React from 'react';
import { IVTherapyFinalCTAContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';

interface IVTherapyFinalCTAProps {
  content: IVTherapyFinalCTAContent;
}

export default function IVTherapyFinalCTA({ content }: IVTherapyFinalCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.secondaryCTA.whatsappMessage)}`;

  return (
    <section className="py-32 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay="soft"
        opacity={1}
      />

      <Container className="relative z-10">
        <div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] uppercase lg:text-6xl mb-8 leading-tight text-base-100">
              {content.title}
            </h2>
            <p className="text-lg text-base-300 leading-[1.65] font-light">
              {content.copy}
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button 
              variant="primary"
              to={content.primaryCTA.href} 
              className="py-4 w-full"
            >
              {content.primaryCTA.label}
            </Button>

            <Button 
              variant="outline"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
            >
              {content.secondaryCTA.label}
            </Button>
            
            <p className="text-xs text-center text-base-300 uppercase tracking-[0.15em] mt-2">
              Evaluación gratuita · Sin compromiso
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
