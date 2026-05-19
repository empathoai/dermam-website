import { TeamMember } from '../../../types/team';
import MotionAvatar from '../../ui/MotionAvatar';
import VCardButton from '../../ui/VCardButton';
import { motion } from 'motion/react';

interface TeamMemberCardProps {
  member: TeamMember;
  idx: number;
}

export default function TeamMemberCard({ member, idx }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className={`group flex flex-col items-center bg-white p-6 rounded-3xl border transition-all duration-500 hover:border-sage-soft/50 hover:shadow-2xl hover:shadow-sage-soft/10 ${member.featured ? 'border-sage-soft ring-1 ring-sage-soft/20' : 'border-border-soft'}`}
    >
      <div className="mb-6">
        <MotionAvatar
          name={member.name}
          videoSrc={member.videoSrc}
          posterSrc={member.posterSrc}
          alt={`Foto de ${member.name}`}
          size="md"
          className={member.featured ? 'ring-sage-soft ring-offset-4 ring-offset-white' : ''}
        />
      </div>

      <div className="text-center mb-6 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-serif text-text-primary mb-1">{member.name}</h3>
            <div className="mb-3">
                <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${member.featured ? 'bg-sage text-white' : 'bg-canvas text-text-secondary'}`}>
                {member.role.split(' · ')[1] || member.role}
                </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed px-2">
            {member.shortBio}
            </p>
        </div>
      </div>

      <div className="w-full mt-auto">
        <VCardButton 
            memberId={member.id} 
            vcardUrl={member.vcardUrl} 
            qrImage={member.qrImage}
            disabled={!member.vcardUrl || member.vcardUrl === '#'}
        />
      </div>
    </motion.div>
  );
}
