import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import StatItem from '../../ui/StatItem';
import Card from '../../ui/Card';
import { ShieldCheck } from 'lucide-react';

export default function DifferentiatorsSection() {
  const { differentiators } = homeContent;

  return (
    <section className="py-24 bg-canvas relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
        <img 
          src={differentiators.bgImage.src} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <Container>
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {differentiators.stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>

        <div className="border-t border-border-soft pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Por qué DERMA.M</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-12">
                Nos enfocamos en un enfoque médico-estético integral, donde la salud de tu piel es lo primero. Nuestro compromiso es ofrecer resultados naturales a través de diagnósticos precisos y protocolos personalizados.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {differentiators.benefits.map((benefit, idx) => (
                <Card key={idx} className="p-8 flex gap-6 bg-white/50 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-sage-soft flex items-center justify-center text-sage flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
