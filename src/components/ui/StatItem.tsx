import React from 'react';
import { StatItem as StatItemType } from '../../types/common';

interface StatItemProps {
  stat: StatItemType;
}

const StatItem: React.FC<StatItemProps> = ({ stat }) => {
  return (
    <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-base-200 bg-white px-6 py-5 text-center shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-base-900">
      <span className="text-xl md:text-2xl font-semibold leading-tight tracking-[-0.02em] uppercase font-sans text-text-primary mb-1">
        {stat.value}
      </span>
      <span className="text-label-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        {stat.label}
      </span>
    </div>
  );
};

export default StatItem;
