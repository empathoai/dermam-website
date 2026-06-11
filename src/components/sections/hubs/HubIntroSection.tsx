import { HubPageContent } from '../../../types/hub';
import PostHeroOrientationSection from '../shared/PostHeroOrientationSection';

interface HubIntroSectionProps {
  content: HubPageContent['intro'];
}

export default function HubIntroSection({ content }: HubIntroSectionProps) {
  if (!content.decisionCards?.length && !content.headline) return null;

  const cards = (content.decisionCards ?? []).map((c) => ({
    title: c.title,
    body: c.body,
    labels: c.labels,
    href: c.href,
    ctaLabel: 'Ver protocolos →',
  }));

  return (
    <PostHeroOrientationSection
      eyebrow={content.eyebrow ?? ''}
      title={content.headline ?? ''}
      description={content.body ?? ''}
      cards={cards}
    />
  );
}
