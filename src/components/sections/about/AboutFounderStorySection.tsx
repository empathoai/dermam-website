import { aboutContent } from '../../../data/aboutContent';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
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
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <ResponsiveImage
                    src={story.image.src}
                    alt={story.image.alt}
                    className="w-full aspect-[4/5] object-cover"
                />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <span className="text-sage font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
                {story.eyebrow}
            </span>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-4 font-sans leading-tight">
                {story.headline}
            </h2>
            <p className="text-sage/80 font-medium mb-8 text-sm uppercase tracking-[0.15em]">
                {story.subcopy}
            </p>
            
            <div className="prose prose-sage max-w-none mb-10">
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {story.storyCopy}
                </p>
            </div>

            <div className="border-l-4 border-sage pl-8 py-2 mb-12">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
