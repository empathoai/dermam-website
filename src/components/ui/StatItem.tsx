import React from 'react';
import { StatItem as StatItemType } from '../../types/common';

interface StatItemProps {
  stat: StatItemType;
}

const StatItem: React.FC<StatItemProps> = ({ stat }) => {
  return (
    <div className="flex flex-col">
      <span className="text-3xl md:text-4xl font-serif text-text-primary mb-1">
        {stat.value}
      </span>
      <span className="text-xs uppercase tracking-widest text-text-secondary">
        {stat.label}
      </span>
    </div>
  );
};

export default StatItem;
