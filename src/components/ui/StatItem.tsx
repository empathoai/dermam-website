import React from 'react';
import { StatItem as StatItemType } from '../../types/common';

interface StatItemProps {
  stat: StatItemType;
}

const StatItem: React.FC<StatItemProps> = ({ stat }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-base-200 mb-1">
        {stat.value}
      </span>
      <span className="text-xs uppercase tracking-[0.15em] text-base-200">
        {stat.label}
      </span>
    </div>
  );
};

export default StatItem;
