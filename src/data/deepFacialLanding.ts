import { FAQItem, BenefitItem, ProtocolStep, ResultItem } from '../types/landing';

export const deepFacialContent = {
  hero: {
    eyebrow: 'West Palm Beach · MedSpa Certificado',
    headline: 'Limpieza Facial Profunda en West Palm Beach',
    subheadline: 'El primer paso para entender qué necesita tu piel. Resultados visibles desde la primera sesión.',
    primaryCTA: 'Reserva tu cita',
    trustLine: 'Evaluación incluida · ⭐ 4.9 Google · WPB, FL',
    image: {
      src: '/assets/images/hero-deep-facial.jpg',
      alt: 'Limpieza Facial Profunda en DERMA.M',
      prompt: 'Bright premium skincare clinic editorial image for deep facial cleansing, woman lying calmly with white headband receiving a gentle hydrating facial treatment, luminous natural skin texture, soft white treatment room, warm ivory light, pastel sage and watery blue-green accents, clean clinical spa environment, folded towels and skincare serum nearby, calm and approachable luxury medspa photography, no redness, no pore extraction, no harsh tools, no dark background, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  audience: {
    headline: '¿Reconoces alguno de estos en tu piel?',
    checks: [
      'Poros dilatados',
      'Puntos negros o blancos',
      'Piel opaca o sin brillo',
      'Exceso de sebo',
      'Primera visita a especialista',
      'Quiero saber el estado de mi piel'
    ]
  },
  protocol: {
    headline: 'Tu sesión paso a paso',
    steps: [
      { 
        title: 'Análisis de piel', 
        description: 'Evaluamos tu tipo de piel y sus necesidades específicas.',
        image: {
            src: '/assets/treatments/deepfacial-step-1.jpg',
            alt: 'Análisis de piel',
            prompt: 'Premium clinical skin analysis scene, aesthetic specialist gently examining client’s skin with soft magnifying light or tablet consultation, client calm and comfortable, white and ivory treatment room, sage accents, professional but approachable, no harsh medical device, no anxiety, no skin problems shown dramatically, 4:3 ratio.'
        }
      },
      { 
        title: 'Limpieza profunda', 
        description: 'Limpieza clínica adaptada a tu tipo de piel.',
        image: {
            src: '/assets/treatments/deepfacial-step-2.jpg',
            alt: 'Limpieza clínica',
            prompt: 'Soft luxury facial cleansing treatment image, professional hands applying gentle cleanser with soft gauze or brush on client’s face, white headband, clean ivory linens, luminous skin, warm natural light, pastel sage environment, calm premium medspa photography, no extraction, no redness, no harsh tools, 4:3 ratio.'
        }
      },
      { 
        title: 'Extracción', 
        description: 'Puntos negros y comedones con técnica especializada.',
        image: {
            src: '/assets/treatments/deepfacial-step-3.jpg',
            alt: 'Técnica de extracción suave',
            prompt: 'Tasteful clinical facial treatment image representing deep pore cleansing without graphic extraction, professional gloved hands near client face with soft cotton pads and gentle tools, clean white treatment room, calm expression, no visible blackheads, no redness, no discomfort, premium skincare clinic aesthetic, 4:3 ratio.'
        }
      },
      { 
        title: 'Hidratación', 
        description: 'Sello final con activos hidratantes.',
        image: {
            src: '/assets/treatments/deepfacial-step-4.jpg',
            alt: 'Sellado de hidratación',
            prompt: 'Premium hydration facial treatment image, glass dropper applying serum to clean luminous skin, soft ivory linens, white headband, watery blue-green and sage accents, bright spa-clinical environment, calm and elegant skincare photography, no heavy makeup, realistic skin texture, 4:3 ratio.'
        }
      },
      { 
        title: 'Recomendación personalizada', 
        description: 'Tu especialista te orienta sobre los tratamientos que pueden mejorar tus resultados.',
        isKeyMoment: true,
        image: {
            src: '/assets/treatments/deepfacial-step-5.jpg',
            alt: 'Consulta personalizada',
            prompt: 'Premium consultation moment after facial treatment, aesthetic specialist showing client a simple skincare plan on tablet or card, clean treatment room, white and sage palette, client relaxed and confident, professional hands visible, warm natural light, clinical wellness setting, no sales pressure, trust-building atmosphere, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
        }
      }
    ],
    info: 'Duración: 60–75 min · Incluye diagnóstico de piel'
  },
  benefits: [
    {
      title: 'Piel visible desde la primera sesión',
      description: 'Resultados inmediatos — poros limpios, piel luminosa, textura renovada.',
      image: {
        src: '/assets/treatments/deepfacial-benefit-1.jpg',
        alt: 'Piel luminosa inmediata'
      }
    },
    {
      title: 'Diagnóstico incluido',
      description: 'Saldrás con un mapa claro de lo que tu piel necesita. No suposiciones.',
      image: {
        src: '/assets/treatments/deepfacial-benefit-2.jpg',
        alt: 'Mapa de piel personalizado'
      }
    },
    {
      title: 'Primer paso para tratamientos avanzados',
      description: 'Prepara tu piel para mejores resultados en protocolos como PRF, microneedling o manchas.',
      image: {
        src: '/assets/treatments/deepfacial-benefit-3.jpg',
        alt: 'Base para tratamientos avanzados'
      }
    }
  ] as BenefitItem[],
  upsell: {
    headline: 'Más que una limpieza: el inicio de tu plan de piel',
    copy: 'Durante tu sesión, evaluamos cómo responde tu piel, qué necesita realmente y qué protocolo puede ayudarte a mejorar textura, luminosidad, manchas, acné o signos de envejecimiento.',
    keyPoints: [
      'No adivinamos tu tratamiento',
      'Observamos tu piel en consulta',
      'Te orientamos con un plan personalizado',
      'Si necesitas algo más avanzado, te lo explicamos sin presión'
    ],
    cta: 'Reserva tu primera sesión'
  },
  results: {
    headline: 'Resultados visibles desde la primera sesión',
    disclaimer: 'Resultados individuales pueden variar.',
    items: [
      {
        title: 'Luminosidad y Textura',
        imageBefore: '/assets/treatments/facial-result-1-before.jpg',
        imageAfter: '/assets/treatments/facial-result-1-after.jpg',
        sessions: '1 sesión'
      },
      {
        title: 'Limpieza de Poros',
        imageBefore: '/assets/treatments/facial-result-2-before.jpg',
        imageAfter: '/assets/treatments/facial-result-2-after.jpg',
        sessions: '1 sesión'
      },
      {
        title: 'Healthy Glow',
        imageBefore: '/assets/treatments/facial-result-3-before.jpg',
        imageAfter: '/assets/treatments/facial-result-3-after.jpg',
        sessions: '1 sesión'
      }
    ]
  },
  testimonials: [
    {
      id: 1,
      quote: '“Mi piel salió limpia, suave y con un glow increíble.”',
      name: 'Andrea S.',
      treatment: 'Limpieza Facial',
      isPlaceholder: true
    },
    {
      id: 2,
      quote: '“Me explicaron qué necesitaba mi piel antes de recomendarme cualquier tratamiento.”',
      name: 'Carolina M.',
      treatment: 'Diagnóstico Facial',
      isPlaceholder: true
    },
    {
      id: 3,
      quote: '“Fue mi primera visita y me sentí en confianza desde el inicio.”',
      name: 'Valeria R.',
      treatment: 'Limpieza Facial',
      isPlaceholder: true
    }
  ],
  founder: {
    name: 'Nancy Nieto',
    title: 'Fundadora de DERMA.M Skin Health · 10+ años de experiencia',
    quote: '“La limpieza facial no es solo limpiar la piel. Es entender qué necesita.”',
    cta: 'Conoce mi enfoque',
    image: {
      src: '/assets/avatars/nancy-nieto-founder-cleansing.jpg',
      alt: 'Nancy Nieto fundadora',
      prompt: 'Premium editorial portrait of a Latina woman aesthetic clinic founder, 35-45 years old, warm confident expression, long dark hair styled naturally, wearing elegant white clinical uniform, seated in a bright skincare treatment room with hands visible, soft ivory, sage, and pearl gray environment, professional and approachable, not corporate, not hospital, not white coat cliché, luxury wellness clinic portrait, bright natural light, 4:5 vertical.'
    },
    backgroundMedia: undefined
  },
  faqs: [
    {
      question: '¿Cada cuánto debo hacerme una limpieza facial profunda?',
      answer: 'Para mantener la piel sana y libre de impurezas, recomendamos una limpieza profunda cada 4 a 6 semanas, dependiendo de tu tipo de piel.'
    },
    {
      question: '¿La limpieza facial duele?',
      answer: 'La limpieza es un proceso cómodo. Las extracciones pueden generar una ligera molestia momentánea, pero utilizamos técnicas avanzadas para que la experiencia sea relajante.'
    },
    {
      question: '¿Puedo hacerme limpieza facial si tengo acné?',
      answer: 'Sí, de hecho es fundamental para controlar brotes, limpiar poros obstruidos y reducir la inflamación bajo supervisión profesional.'
    },
    {
      question: '¿Cuánto dura la sesión?',
      answer: 'La sesión completa dura entre 60 y 75 minutos, incluyendo el diagnóstico inicial y la recomendación final.'
    },
    {
      question: '¿Puedo maquillarme después?',
      answer: 'Recomendamos esperar al menos 24 horas para maquillarte, permitiendo que los poros se cierren y la piel absorba los activos aplicados.'
    },
    {
      question: '¿La limpieza facial incluye extracción?',
      answer: 'Sí, incluimos extracción manual y técnica de comedones para asegurar que la piel quede realmente limpia y libre de impurezas.'
    },
    {
      question: '¿Es buena para piel sensible?',
      answer: 'Adaptamos los productos y la intensidad de la limpieza para pieles sensibles, utilizando activos calmantes y técnicas menos invasivas.'
    },
    {
      question: '¿Qué tratamiento me recomiendan después?',
      answer: 'Durante tu sesión, tu especialista te indicará si tu piel se beneficiaría más de una hidratación profunda, PRF o microneedling según tus metas.'
    }
  ] as FAQItem[],
  finalCTA: {
    headline: 'Empieza por conocer tu piel',
    body: 'Reserva tu limpieza facial profunda y recibe una orientación personalizada para cuidar tu piel con criterio profesional.',
    primaryCTA: 'Reserva tu cita',
    secondaryCTA: 'Escríbenos por WhatsApp',
    image: {
        src: '/assets/images/deepfacial-final-cta.jpg',
        alt: 'Final CTA Deep Facial Cleansing',
        prompt: 'Soft premium skincare still-life, glass serum bottle, white towel, ivory candle, ceramic bowl, soft sage leaves, watery blue-green accent, warm pearl-gray surface, clean hydrated skin wellness mood, lots of negative space for CTA text, calm feminine clinical spa atmosphere, no people, no dark background, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  relatedTreatments: [
    {
      id: 'prf',
      title: 'Plasma Rico en Plaquetas',
      description: 'Regeneración facial avanzada',
      category: 'Facial',
      href: '/es/plasma-rico-en-plaquetas-west-palm-beach',
      image: {
        src: '/assets/treatments/related-facial-1.jpg',
        alt: 'PRF facial'
      }
    },
    {
      id: 'microneedling',
      title: 'Microneedling',
      description: 'Textura, poros y marcas',
      category: 'Facial',
      href: '#',
      image: {
        src: '/assets/treatments/related-facial-2.jpg',
        alt: 'Microneedling facial'
      }
    },
    {
      id: 'hydration',
      title: 'Hidratación Profunda',
      description: 'Refuerza luminosidad y barrera cutánea',
      category: 'Facial',
      href: '#',
      image: {
        src: '/assets/treatments/related-facial-3.jpg',
        alt: 'Hidratación profunda'
      }
    }
  ]
};
