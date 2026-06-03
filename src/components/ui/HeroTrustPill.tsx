import { Star } from '../../design-system/icons';

interface HeroTrustPillProps {
  children: string;
  className?: string;
}

export default function HeroTrustPill({ children, className = '' }: HeroTrustPillProps) {
  const label = children.replace(/⭐/g, '').replace(/\s*·\s*/g, ' · ').trim();

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-light tracking-normal text-base-200 backdrop-blur-sm ${className}`}>
      <span className="flex text-yellow-400" aria-hidden="true">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={10} fill="currentColor" />
        ))}
      </span>
      <span>{label}</span>
    </span>
  );
}
