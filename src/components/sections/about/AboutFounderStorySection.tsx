import { aboutContent } from '../../../data/aboutContent';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import SectionMedia from '../../ui/SectionMedia';

export default function AboutFounderStorySection() {
  const { story } = aboutContent;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {story.backgroundMedia && (
        <SectionMedia
          {...story.backgroundMedia}
          overlay={story.backgroundMedia.overlay || 'ivory'}
        />
      )}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-base-200 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:scale-105" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <ResponsiveImage
                src={story.image.src}
                alt={story.image.alt}
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
                {story.eyebrow}
            </span>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-4 font-sans leading-tight">
                {story.headline}
            </h2>
            <p className="text-text-secondary font-medium mb-8 text-sm uppercase tracking-[0.15em]">
                {story.subcopy}
            </p>
            
            <div className="prose prose-sage max-w-none mb-10">
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {story.storyCopy}
                </p>
            </div>

            <div className="border-l-4 border-base-900 pl-8 py-2 mb-12">
                <p className="text-2xl font-sans text-text-primary italic leading-relaxed">
                    {story.quote}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border-soft">
                {story.stats.map((stat, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                        <div className="text-3xl font-sans text-text-primary mb-1">{stat.value}</div>
                        <div className="text-[10px] text-text-secondary uppercase tracking-[0.1em] font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
