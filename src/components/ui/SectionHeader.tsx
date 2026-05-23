interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'left',
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{headline}</h2>
      {subheadline && (
        <p className={`text-text-secondary text-base md:text-lg max-w-2xl leading-[1.65] font-light tracking-normal ${align === 'center' ? 'mx-auto' : ''}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
