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
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">{headline}</h2>
      {subheadline && (
        <p className={`text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
