import { AboutContent } from '../types/team';

export const aboutContent: AboutContent = {
  hero: {
    headline: 'El equipo detrás de tu piel',
    subheadline: 'Especialistas certificados en cada área. Un solo objetivo: resultados reales para tu piel.',
    image: {
      src: '/assets/images/hero-team.jpg',
      alt: 'Equipo DERMA.M Skin Health',
      prompt: 'Premium editorial group portrait of a medical aesthetics clinic team in a bright treatment room, Latina founder and diverse team of specialists, elegant white or soft neutral clinical uniforms, warm confident expressions, soft ivory and sage environment, professional but approachable, clean medspa setting, botanical minimal decor, natural light, no hospital feeling, no corporate stiffness, luxury wellness clinic team photography, 16:9 horizontal.'
    }
  },
  story: {
    eyebrow: 'Nuestra historia',
    headline: 'Nancy Nieto · Fundadora',
    subcopy: 'Especialista en Salud Dermal · MedSpa Certificado desde 2024',
    storyCopy: 'Nancy Nieto creó DERMA.M para ofrecer una experiencia estética basada en diagnóstico, criterio profesional y protocolos personalizados. La evolución de DERMA.M a MedSpa certificado marcó un paso importante: pasar de tratamientos aislados a un sistema de cuidado de piel con mayor seguridad, tecnología y seguimiento.',
    quote: '“Diagnóstico antes de tratamiento. Siempre.”',
    image: {
      src: '/assets/avatars/nancy-nieto-founder-about.jpg',
      alt: 'Nancy Nieto Fundadora',
      prompt: 'Premium editorial portrait of Nancy Nieto, Latina woman aesthetic clinic founder, 35-45 years old, warm confident expression, elegant white or ivory clinical uniform, hands visible, seated or standing inside a bright DERMA.M treatment room, soft sage and ivory palette, botanical minimal decor, professional but approachable, no corporate headshot, no hospital look, no white coat cliché, luxury clinical wellness portrait, 4:5 vertical.'
    },
    backgroundMedia: undefined,
    stats: [
      { label: 'Años de Experiencia', value: '10+' },
      { label: 'Pacientes Satisfechos', value: '1K+' },
      { label: 'Especialistas', value: '8' }
    ]
  },
  values: {
    headline: 'Nuestra filosofía clínica',
    items: [
      {
        title: 'Diagnóstico antes de tratamiento',
        description: 'No recomendamos protocolos sin entender primero tu piel, tu historia y tu objetivo.'
      },
      {
        title: 'Especialistas por área',
        description: 'Cada tratamiento es realizado por profesionales enfocados en su especialidad.'
      },
      {
        title: 'Resultados reales y seguimiento',
        description: 'Buscamos resultados visibles, seguros y coherentes con cada caso.'
      },
      {
        title: 'Atención bilingüe',
        description: 'Acompañamos a nuestras pacientes en español e inglés.'
      }
    ]
  }
};
