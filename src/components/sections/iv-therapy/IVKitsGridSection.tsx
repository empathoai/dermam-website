import React from 'react';
import { IVKit } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import IVKitCard from '../../ui/IVKitCard';
import SectionHeader from '../../ui/SectionHeader';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';
import { motion } from 'motion/react';

interface IVKitsGridSectionProps {
  title: string;
  subtitle: string;
  kits: IVKit[];
}

export default function IVKitsGridSection({ title, subtitle, kits, id }: IVKitsGridSectionProps & { id?: string }) {
  return (
    <section className="pt-16 pb-24 bg-canvas" id={id}>
      <Container>
        <SectionHeader
          headline={title}
          subheadline={subtitle}
          align="center"
          className="mb-16"
        />

        <ResponsiveCardGroup desktopColumns={3} desktopClassName="lg:gap-12" mobileCardWidth="84vw">
          {kits.map((kit, idx) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <IVKitCard kit={kit} />
            </motion.div>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
