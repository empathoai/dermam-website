import React from 'react';
import { IVKit } from '../../types/ivTherapy';
import { motion } from 'motion/react';
import ResponsiveImage from './ResponsiveImage';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '../../data/siteConfig';

interface IVKitCardProps {
  kit: IVKit;
}

export default function IVKitCard({ kit }: IVKitCardProps) {
  const handleCTAClick = () => {
    if (kit.squareUrl) {
      window.open(kit.squareUrl, '_blank', 'noopener,noreferrer');
    } else if (kit.whatsappMessage) {
      const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(kit.whatsappMessage)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = '/es/reservar';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden border border-border-soft shadow-sm hover:shadow-md hover:border-base-300 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col h-full group"
    >
      {/* Kit Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ResponsiveImage
          src={kit.image}
          alt={kit.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
        />
        {kit.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium text-base-900 uppercase tracking-[0.15em] border border-base-900/10">
              {kit.badge}
            </span>
          </div>
        )}
      </div>

      {/* Kit Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-sans text-text-primary mb-3">
          {kit.name}
        </h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">
          {kit.description}
        </p>

        {kit.showPrice && kit.price && (
          <div className="mb-6">
            <span className="text-2xl font-sans text-base-900">${kit.price}</span>
          </div>
        )}

        <Button
          onClick={handleCTAClick}
          className="w-full justify-between group/btn"
          variant="outline"
        >
          <span>{kit.ctaLabel}</span>
          {kit.squareUrl ? (
            <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1" />
          ) : (
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
