import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';

export default function PostOpFounderSection() {
  const { founder } = postOpContent;

  const handleConsultClick = () => {
    const message = siteConfig.whatsappMessagePostOp;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-border-soft shadow-xl bg-canvas flex flex-col lg:flex-row">
          <div className="lg:w-2/5 aspect-[4/5] lg:aspect-auto">
             <ResponsiveImage
                src={founder.image.src}
                alt={founder.image.alt}
                className="w-full h-full object-cover"
             />
          </div>
          <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl mb-2">{founder.name}</h2>
            <p className="text-sage font-medium mb-8 text-sm uppercase tracking-widest">{founder.title}</p>
            
            <div className="border-l-4 border-sage pl-6 py-2 mb-10">
                <p className="text-xl font-serif text-text-primary italic leading-relaxed">
                {founder.quote}
            </p>
            </div>

            <Button 
                onClick={handleConsultClick}
                className="bg-sage hover:bg-sage-deep text-white w-full sm:w-auto px-10"
            >
              {founder.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
