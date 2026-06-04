import React, { Children, ReactNode, useState } from 'react';

type DesktopColumns = 1 | 2 | 3 | 4 | 5;

interface ResponsiveCardGroupProps {
  children: ReactNode;
  className?: string;
  desktopColumns?: DesktopColumns;
  desktopClassName?: string;
  desktopItemClassName?: string;
  mobileCardWidth?: string;
  mobileGapClassName?: string;
  mobileItemClassName?: string;
  indicatorTone?: 'dark' | 'light';
}

const desktopColumnClasses: Record<DesktopColumns, string> = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
  5: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
};

const defaultDesktopMaxWidth: Record<DesktopColumns, string> = {
  1: 'max-w-none',
  2: 'max-w-5xl',
  3: 'max-w-7xl',
  4: 'max-w-7xl',
  5: 'max-w-7xl',
};

export default function ResponsiveCardGroup({
  children,
  className = '',
  desktopColumns = 3,
  desktopClassName = '',
  desktopItemClassName = '',
  mobileCardWidth = '82vw',
  mobileGapClassName = 'gap-5',
  mobileItemClassName = '',
  indicatorTone = 'dark',
}: ResponsiveCardGroupProps) {
  const items = Children.toArray(children).filter(Boolean);
  const [scrollProgress, setScrollProgress] = useState(0);
  const hasMultipleItems = items.length > 1;
  const indicatorTrackClass =
    indicatorTone === 'light' ? 'bg-white/20' : 'bg-base-300/40';
  const indicatorFillClass =
    indicatorTone === 'light' ? 'bg-base-100' : 'bg-base-900';

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    setScrollProgress(maxScroll > 0 ? target.scrollLeft / maxScroll : 0);
  };

  if (items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="md:hidden">
        <div
          onScroll={handleScroll}
          className={`relative left-1/2 flex w-screen -translate-x-1/2 snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-6 ${mobileGapClassName}`}
          style={{
            ['--mobile-card-width' as string]: mobileCardWidth,
            scrollPaddingInline: `calc((100vw - ${mobileCardWidth}) / 2)`,
            paddingInline: `calc((100vw - ${mobileCardWidth}) / 2)`,
          }}
        >
          {items.map((child, index) => (
            <div
              key={index}
              className={`w-[var(--mobile-card-width)] flex-none snap-center ${mobileItemClassName}`}
            >
              {child}
            </div>
          ))}
        </div>

        {hasMultipleItems && (
          <div className="flex justify-center mt-2" aria-hidden="true">
            <div className={`relative h-[2px] w-16 overflow-hidden rounded-full ${indicatorTrackClass}`}>
              <div
                className={`absolute inset-y-0 left-0 w-[30%] rounded-full transition-transform duration-75 ${indicatorFillClass}`}
                style={{ transform: `translateX(${scrollProgress * 233.33}%)` }}
              />
            </div>
          </div>
        )}
      </div>

      <div
        className={[
          'hidden md:grid items-stretch justify-center gap-8 mx-auto',
          defaultDesktopMaxWidth[desktopColumns],
          desktopColumnClasses[desktopColumns],
          desktopClassName,
        ].join(' ')}
      >
        {items.map((child, index) => (
          <div key={index} className={`h-full ${desktopItemClassName}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
