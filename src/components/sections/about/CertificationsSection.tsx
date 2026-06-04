import Container from '../../ui/Container';
import { Award, ShieldCheck, Star, Globe } from '../../../design-system/icons';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function CertificationsSection() {
  const certifications = [
    { icon: <Award />, title: 'MedSpa Certificado', subtitle: 'Desde 2024' },
    { icon: <ShieldCheck />, title: 'Protocolos Clínicos', subtitle: 'Validados' },
    { icon: <Star />, title: '4.9 Google Reviews', subtitle: 'West Palm Beach' },
    { icon: <Globe />, title: 'Atención Bilingüe', subtitle: 'ES · EN' },
  ];

  return (
    <section className="py-16 bg-canvas border-y border-border-soft">
      <Container>
        <ResponsiveCardGroup desktopColumns={4} desktopClassName="lg:gap-12" mobileCardWidth="78vw">
            {certifications.map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-base-900/5 text-base-900 mb-4">
                        {cert.icon}
                    </div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-text-primary mb-1">{cert.title}</h3>
                    <p className="text-label-xs text-text-secondary uppercase tracking-[0.15em] font-medium">{cert.subtitle}</p>
                </div>
            ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
