import { TeamSpecialty } from '../../types/team';

interface SpecialtyFilterProps {
  activeSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  specialties: string[];
}

export default function SpecialtyFilter({ activeSpecialty, onSpecialtyChange, specialties }: SpecialtyFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
      {specialties.map((specialty) => (
        <button
          key={specialty}
          onClick={() => onSpecialtyChange(specialty)}
          className={`px-5 py-2 rounded-full text-base font-medium normal-case tracking-normal transition-all duration-300 border ${
            activeSpecialty === specialty
              ? 'bg-sage border-sage text-white shadow-lg shadow-sage/20'
              : 'bg-white border-border-soft text-text-secondary hover:border-sage-soft hover:text-sage'
          }`}
          aria-pressed={activeSpecialty === specialty}
        >
          {specialty}
        </button>
      ))}
    </div>
  );
}
