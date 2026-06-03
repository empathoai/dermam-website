import React from 'react';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import Button from '../../ui/Button';
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
 <section className="py-32 relative overflow-hidden isolation-isolate">
 <SectionMedia
 type="image"
 src={image.src}
 alt={image.alt}
 overlay="soft"
 opacity={1}
 />

 <Container className="relative z-10">
 <div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">
 <div className="lg:max-w-xl text-center lg:text-left">
 <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] uppercase lg:text-6xl mb-8 leading-tight text-base-100">
 {title}
 </h2>
 <p className="text-lg text-base-300 leading-[1.65] font-light">
 {copy}
 </p>
 </div>

 <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
 <Button 
 variant="primary"
 to={primaryHref} 
 className="py-4 w-full"
 >
 {primaryLabel}
 </Button>

 <Button 
 variant="outline"
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
 >
 {secondaryLabel}
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
