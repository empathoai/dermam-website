import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { ArrowRight } from '../../../design-system/icons';
import { Link } from 'react-router-dom';

export default function DeepFacialRelatedTreatments() {
  const { relatedTreatments } = deepFacialContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <h2 className="text-3xl text-center mb-16 font-sans">Tratamientos que pueden complementar tu limpieza</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTreatments.map((treatment) => (
            <Card key={treatment.id} className="group bg-white border border-border-card hover:border-base-900 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-subtle flex flex-col h-full overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                 <ResponsiveImage
                    src={treatment.image.src}
                    alt={treatment.image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
                 />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                     <span className="text-label-xs text-text-secondary font-medium uppercase tracking-[0.15em] px-3 py-1 bg-base-200/50 rounded-full">{treatment.category}</span>
                </div>
                <h3 className="text-xl mb-3">{treatment.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">{treatment.description}</p>
                <Link to={treatment.href} className="inline-flex items-center text-sm font-semibold text-text-primary group/link">
                  Ver tratamiento <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
