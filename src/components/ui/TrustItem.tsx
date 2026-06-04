import { TrustItem as TrustItemType } from '../../types/common';
import * as Icons from '../../design-system/icons';
import { LucideProps } from '../../design-system/icons';
import { ComponentType } from 'react';

interface TrustItemProps {
  item: TrustItemType;
}

export default function TrustItem({ item }: TrustItemProps) {
  // @ts-ignore - dynamic icon access
  const Icon = (Icons[item.icon as keyof typeof Icons] as ComponentType<LucideProps>) || Icons.Circle;

  return (
    <div className="flex w-full flex-row items-center gap-2.5 rounded-[1.125rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur-sm">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-base-300">
        <Icon size={18} />
      </div>
      <span className="line-clamp-2 text-left text-sm font-medium leading-[1.6] tracking-normal text-base-300">
        {item.label}
      </span>
    </div>
  );
}
