import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PostOpRelatedTreatments() {
  const { relatedTreatments } = postOpContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-3xl text-center mb-16 font-serif">Otros servicios corporales en DERMA.M</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTreatments.map((treatment) => (
            <Card key={treatment.id} className="group hover:-translate-y-2 transition-transform duration-300 border-none shadow-subtle hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                 <ResponsiveImage
                    src={treatment.image.src}
                    alt={treatment.image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-8">
                <h3 className="text-xl mb-3">{treatment.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{treatment.description}</p>
                <Link to={treatment.href} className="inline-flex items-center text-sm font-semibold text-text-primary group/link">
                  Ver tratamiento <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
