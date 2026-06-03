import React from 'react';
import { TeamMember } from '../../../types/team';
import MotionAvatar from '../../ui/MotionAvatar';
import VCardButton from '../../ui/VCardButton';
import { motion } from 'motion/react';

interface TeamMemberCardProps {
  member: TeamMember;
  idx: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className={`group flex flex-col items-center bg-white p-6 rounded-[2rem] border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-base-900 hover:-translate-y-1 hover:shadow-subtle ${member.featured ? 'border-base-900 ring-1 ring-base-900/10' : 'border-border-card'}`}
    >
      <div className="mb-6">
        <MotionAvatar
          name={member.name}
          videoSrc={member.videoSrc}
          posterSrc={member.posterSrc}
          alt={`Foto de ${member.name}`}
          size="md"
          className={member.featured ? 'ring-base-200 ring-offset-4 ring-offset-white' : ''}
        />
      </div>

      <div className="text-center mb-6 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-sans text-text-primary mb-1">{member.name}</h3>
            <div className="mb-3">
                <span className={`inline-block text-label-xs uppercase tracking-[0.15em] font-medium px-2.5 py-1 rounded-full ${member.featured ? 'bg-base-900 text-base-100' : 'bg-canvas text-text-secondary'}`}>
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
};

export default TeamMemberCard;
