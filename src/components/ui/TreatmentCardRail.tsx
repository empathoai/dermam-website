import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';
import ResponsiveCardGroup from './ResponsiveCardGroup';
import { ArrowRight } from '../../design-system/icons';

// Flexible interface compatible with HubTreatment and landing relatedTreatments
export interface TreatmentRailItem {
  id: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  href: string;
  image: { src: string; alt: string; prompt?: string };
  badge?: string;
  category?: string;
  isPlaceholderRoute?: boolean;
}

interface TreatmentCardRailProps {
  items: TreatmentRailItem[];
  className?: string;
}

// Individual card rendered inside the rail
function RailCard({ item }: { item: TreatmentRailItem }) {
  const rawLabel = item.ctaLabel ?? 'Ver tratamiento';
  // Strip trailing arrow symbol if present in source data
  const ctaLabel = rawLabel.replace(/\s*→\s*$/, '');

  return (
    <div className="group flex flex-col h-full rounded-[1rem] overflow-hidden bg-white border border-border-card hover:border-border-card-hover hover:-translate-y-1 hover:shadow-subtle transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
      {/* Image: 4:3 ratio, cover */}
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        <ResponsiveImage
          src={item.image.src}
          alt={item.image.alt}
          className="w-full h-full object-cover transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
        />
        {/* Category/badge pill: glass, bottom-left */}
        {(item.badge || item.category) && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-block bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 text-xs font-light normal-case tracking-normal text-text-secondary">
              {item.badge ?? item.category}
            </span>
          </div>
        )}
      </div>

      {/* Content body */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-text-primary normal-case mb-3">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-text-secondary text-sm leading-[1.55] font-light mb-6 flex-grow">
            {item.description}
          </p>
        )}
        <Link
          to={item.href}
          className="inline-flex items-center gap-2 text-base font-medium leading-[1.2] text-text-primary normal-case group-hover:text-base-600 transition-colors duration-[180ms] mt-auto"
        >
          {ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-[180ms]" />
        </Link>
      </div>
    </div>
  );
}

// Rail container: mobile scrolls horizontally; desktop displays as a static centered layout
export default function TreatmentCardRail({ items, className = '' }: TreatmentCardRailProps) {
  return (
    <ResponsiveCardGroup
      className={className}
      desktopColumns={Math.min(items.length, 4) as 1 | 2 | 3 | 4 | 5}
      desktopItemClassName="w-full"
      mobileCardWidth="82vw"
    >
      {items.map((item) => (
        <div key={item.id} className="h-full">
          <RailCard item={item} />
        </div>
      ))}
    </ResponsiveCardGroup>
  );
}
