import { useState, useMemo } from 'react';
import { teamMembers } from '../../../data/teamMembers';
import Container from '../../ui/Container';
import SpecialtyFilter from '../../ui/SpecialtyFilter';
import TeamMemberCard from './TeamMemberCard';
import { motion, AnimatePresence } from 'motion/react';
import { TeamSpecialty } from '../../../types/team';

export default function TeamSection() {
  const [activeSpecialty, setActiveSpecialty] = useState('Todos');

  const specialties = ['Todos', 'Faciales', 'Corporales', 'Láser', 'Dental'];

  const filteredMembers = useMemo(() => {
    if (activeSpecialty === 'Todos') return teamMembers;
    return teamMembers.filter(member => 
      member.specialties.includes(activeSpecialty as TeamSpecialty)
    );
  }, [activeSpecialty]);

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="max-w-4xl mb-16 text-center lg:text-left">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6 font-sans leading-tight">
            Nuestros especialistas
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            Cada miembro del equipo tiene su área de especialización. Todos comparten la misma filosofía centro: diagnóstico, seguridad y resultados.
          </p>
        </div>

        <div className="mb-12">
            <SpecialtyFilter 
                activeSpecialty={activeSpecialty}
                onSpecialtyChange={setActiveSpecialty}
                specialties={specialties}
            />
        </div>

        <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, idx) => (
              <TeamMemberCard key={member.id} member={member} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
