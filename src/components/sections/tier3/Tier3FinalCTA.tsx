import React from 'react';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import Button from '../../ui/Button';
import { MessageCircle, Calendar } from 'lucide-react';
import { ImageAsset } from '../../../types/common';
import { siteConfig } from '../../../data/siteConfig';

interface Tier3FinalCTAProps {
  title: string;
  copy: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref: string;
  whatsappMessage: string;
  image: ImageAsset;
}

export default function Tier3FinalCTA({ 
    title, 
    copy, 
    primaryLabel, 
    secondaryLabel, 
    primaryHref, 
    whatsappMessage, 
    image 
}: Tier3FinalCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative py-24 overflow-hidden bg-canvas isolation-isolate">
      <SectionMedia
        type="image"
        src={image.src}
        alt={image.alt}
        overlay="soft"
        opacity={0.5}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-[40px] overflow-hidden border border-border-soft shadow-2xl flex flex-col md:flex-row items-stretch">
          {/* Text Content */}
          <div className="flex-1 p-10 md:p-16 border-b md:border-b-0 md:border-r border-border-soft">
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {copy}
            </p>
          </div>

          {/* Actions */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center gap-6 bg-canvas/30">
            <Button 
              to={primaryHref}
              className="w-full justify-center gap-3 py-6 h-auto text-lg"
            >
              <Calendar size={20} />
              {primaryLabel}
            </Button>

            <Button 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline" 
              className="w-full justify-center gap-3 py-6 h-auto text-lg"
            >
              <MessageCircle size={20} />
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
