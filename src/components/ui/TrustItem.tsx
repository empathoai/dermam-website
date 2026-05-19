import { TrustItem as TrustItemType } from '../../types/common';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

interface TrustItemProps {
  item: TrustItemType;
}

export default function TrustItem({ item }: TrustItemProps) {
  // @ts-ignore - dynamic icon access
  const Icon = (Icons[item.icon as keyof typeof Icons] as ComponentType<LucideProps>) || Icons.Circle;

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="w-10 h-10 rounded-full bg-sage-soft flex items-center justify-center text-sage">
        <Icon size={20} />
      </div>
      <span className="text-sm font-medium text-text-primary">
        {item.label}
      </span>
    </div>
  );
}
