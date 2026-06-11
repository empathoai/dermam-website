/**
 * Canonical Tailwind class strings for each DESIGN.md typography role.
 * Import these constants instead of writing clamp/tracking values inline.
 * Add the color token at the call site (e.g. + ' text-base-900').
 */

export const displayHeroClass =
  'text-[clamp(3.25rem,7.8vw,6.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase font-sans';

export const displayHeroCompactClass =
  'text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase font-sans';

export const headingSectionClass =
  'text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans';

export const headingSectionSoftClass =
  'text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.025em] font-sans';

export const headingSubsectionClass =
  'text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.015em] font-sans';

export const cardTitleClass =
  'text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em] font-sans';

export const bodyLgClass = 'text-[1.125rem] font-light leading-[1.65]';

export const bodyMdClass = 'text-base font-light leading-[1.6]';

export const bodySmClass = 'text-sm font-light leading-[1.5]';

export const eyebrowClass =
  'text-[0.75rem] font-medium tracking-[0.15em] uppercase';

export const statNumberClass =
  'text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] font-sans';

export const statLabelClass =
  'text-[0.75rem] font-medium tracking-[0.15em] uppercase';
