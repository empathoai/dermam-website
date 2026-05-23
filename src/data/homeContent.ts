export const homeContent = {
  hero: {
    eyebrow: '4.9 Google · MedSpa Certificado · WPB',
    headlinePrefix: 'Salud profesional para ',
    headlineAccent: 'tu',
    headlineSuffix: ' piel',
    subheadline: 'Tratamientos estéticos personalizados para cuidar tu piel, realzar tu belleza natural y lograr resultados visibles con un enfoque profesional.',
    primaryCTA: 'Reserva tu evaluación',
    secondaryCTA: 'Ver tratamientos',
    trustItems: [
      { icon: 'Shield', label: 'Protocolos certificados' },
      { icon: 'Microscope', label: 'Productos profesionales' },
      { icon: 'Cpu', label: 'Tecnología avanzada' },
      { icon: 'Globe', label: 'Ambiente bilingüe' },
    ],
    image: {
      src: '/assets/pages/home/hero-home.jpg',
      alt: 'DERMA.M Skin Health - Salud profesional para tu piel',
      prompt: 'Bright premium spa wellness editorial scene for a premium aesthetics center, soft white curtains, warm ivory light, mother and daughter in white spa robes enjoying a gentle facial mask moment, cucumber slices, serene and natural expressions, luxury but approachable, pastel sage and ivory harmony, clean clinical wellness environment, soft botanical decor, candles and folded white towels on the side, airy composition, high-end skincare clinic photography, no dark background, no harsh shadows, no exaggerated beauty retouching, realistic skin texture, 16:9 horizontal, bright soft clinical wellness aesthetic. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    },
    video: {
      src: '', // Agregar ruta al video local (ej. '/assets/pages/home/hero-video.mp4') para activar fondo de video
      poster: '/assets/pages/home/hero-home.jpg'
    }
  },
  treatmentsSection: {
    eyebrow: 'Tratamientos destacados',
    headline: 'Soluciones efectivas para cada necesidad',
    subheadline: 'Protocolos estéticos diseñados para cuidar tu piel con seguridad, precisión y resultados reales.'
  },
  differentiators: {
    stats: [
      { value: '10+', label: 'Años experiencia' },
      { value: '1,000+', label: 'Pacientes atendidas' },
      { value: '100%', label: 'Personalizado' }
    ],
    benefits: [
      {
        title: 'Diagnóstico antes de tratamiento',
        description: 'Evaluamos tu piel antes de recomendar cualquier protocolo.'
      },
      {
        title: 'Protocolos profesionales certificados',
        description: 'Cada tratamiento sigue un proceso profesional, seguro y personalizado.'
      },
      {
        title: 'Resultados documentados',
        description: 'Acompañamos cada caso con criterio, seguimiento y expectativas realistas.'
      }
    ],
    bgImage: {
      src: '/assets/pages/home/home-botanical.jpg',
      alt: 'Botanical background',
      prompt: 'Minimal botanical spa still life, soft sage leaves, white ceramic vase, folded ivory towel, subtle candle, empty negative space for text, premium wellness clinic aesthetic, very light background, soft natural shadows, no people, no strong color, 16:9 horizontal. Main subject must remain visible visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  founder: {
    eyebrow: 'Conoce a tu especialista',
    name: 'Nancy Nieto',
    title: 'Fundadora de DERMA.M Skin Health',
    bio: 'Con más de 10 años de experiencia en estética profesional, Nancy Nieto combina diagnóstico personalizado, protocolos seguros y criterio profesional para ayudarte a sentirte bien en tu piel.',
    quote: '“Diagnóstico antes de tratamiento. Siempre.”',
    cta: 'Conoce mi enfoque',
    image: {
      src: '/assets/pages/home/nancy-nieto-founder-home.jpg',
      alt: 'Nancy Nieto - Fundadora de DERMA.M',
      prompt: 'Premium editorial portrait of a Latina woman aesthetic clinic founder, 35-45 years old, warm confident expression, long dark hair styled naturally, wearing elegant white clinical uniform, seated at a light treatment desk with hands visible, soft ivory and warm gray treatment room, candle and minimal DERMA.M branded object on desk, subtle botanical decor, professional but approachable, not corporate, not hospital, not white coat cliché, luxury wellness clinic portrait, bright natural light, 4:5 vertical.'
    },
    backgroundMedia: undefined
  },
  finalCTA: {
    headlinePrefix: 'Tu mejor piel comienza con una ',
    headlineAccent: 'decisión',
    headlineSuffix: '',
    body: 'Agenda tu consulta y recibe una evaluación personalizada de tu piel.',
    primaryCTA: 'Reserva tu evaluación',
    secondaryCTA: 'Escríbenos por WhatsApp',
    bgImage: {
      src: '/assets/pages/home/home-final-cta.jpg',
      alt: 'Botanical final CTA background',
      prompt: 'Soft botanical line-art inspired wellness background, pale sage leaves, ivory canvas, minimal spa aesthetic, elegant negative space, very subtle watercolor texture, no people, no strong contrast, premium feminine clinical wellness mood, horizontal background image, 16:9. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  }
};
