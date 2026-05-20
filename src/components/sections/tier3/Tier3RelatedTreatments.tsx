import React from 'react';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import { Tier3Treatment } from '../../../types/tier3Treatment';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Tier3RelatedTreatmentsProps {
  currentTreatmentId: string;
  relatedIds: string[];
  allTreatments: Tier3Treatment[];
}

export default function Tier3RelatedTreatments({ currentTreatmentId, relatedIds, allTreatments }: Tier3RelatedTreatmentsProps) {
  const relatedTreatments = allTreatments.filter(t => 
    relatedIds.includes(t.id) && t.id !== currentTreatmentId && t.isPublished
  ).slice(0, 3);

  if (relatedTreatments.length === 0) return null;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader
          headline="Tratamientos Complementarios"
          subheadline="Descubre otras opciones que pueden potenciar tus resultados."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={`/es/${treatment.slugEs}`}
                className="group block bg-white rounded-[32px] overflow-hidden border border-border-soft shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    src={treatment.heroMedia.src}
                    alt={treatment.heroMedia.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-bold text-sage uppercase tracking-widest mb-3 block">
                    {treatment.category}
                  </span>
                  <h3 className="text-xl font-serif text-text-primary mb-4 group-hover:text-sage transition-colors">
                    {treatment.shortTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-sage text-sm font-bold group-hover:gap-3 transition-all">
                    <span>Ver detalle</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
