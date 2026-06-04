import { useState, useMemo } from 'react';
import { teamMembers } from '../../../data/teamMembers';
import Container from '../../ui/Container';
import SpecialtyFilter from '../../ui/SpecialtyFilter';
import TeamMemberCard from './TeamMemberCard';
import { TeamSpecialty } from '../../../types/team';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

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

        <ResponsiveCardGroup desktopColumns={4} desktopClassName="gap-6 lg:gap-8" mobileCardWidth="84vw">
          {filteredMembers.map((member, idx) => (
            <TeamMemberCard key={member.id} member={member} idx={idx} />
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
