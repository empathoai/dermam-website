import { FAQItem, BenefitItem, ProtocolStep, ResultItem } from '../types/landing';

export const postOpContent = {
  hero: {
    eyebrow: 'West Palm Beach · Especialistas en Post-Operatorios',
    headline: 'Recuperación Post-Operatorio en West Palm Beach',
    subheadline: 'Protocolos especializados para acompañar tu recuperación con seguridad y resultados óptimos.',
    primaryCTA: 'Consulta tu caso',
    secondaryCTA: 'Escríbenos por WhatsApp',
    trustLine: '4.9 Google · Especialistas en Post-Operatorios · WPB, FL',
    image: {
      src: '/assets/images/hero-postop.jpg',
      alt: 'Recuperación Post-Operatorio en DERMA.M',
      prompt: 'Premium clinical wellness editorial image for post-operative recovery care at a premium aesthetics center, professional hands performing gentle lymphatic drainage on a calm patient, white and ivory linens, soft sage accents, warm natural light, clean treatment room, serene recovery atmosphere, aesthetic spa but not hospital, emotionally reassuring, no visible bruising, no scars, no surgical wounds, no blood, no dramatic bandages, no fear-based visuals, high-end post-op care photography, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  surgeryTypes: {
    headline: '¿Tuviste alguna de estas cirugías?',
    checks: [
      'Liposucción',
      'Abdominoplastia',
      'Rinoplastia',
      'Mastoplastia',
      'BBL (Brazilian Butt Lift)',
      'Cualquier procedimiento estético'
    ],
    image: {
      src: '/assets/treatments/postop-care.jpg',
      alt: 'Drenaje linfático post-operatorio',
      prompt: 'Soft clinical post-operative lymphatic drainage image, professional hands applying gentle pressure on torso or arm over clean white clinical linens, patient calm and covered appropriately, warm ivory treatment room, sage botanical detail, recovery-focused and safe, no exposed wounds, no bruising, no scars, no clinical alarm feeling, premium medspa photography, 4:3 ratio.'
    }
  },
  urgency: {
    headline: 'El post-operatorio define tu resultado final',
    blocks: [
      {
        title: 'Sin drenaje especializado',
        description: 'Acumulación de líquidos → inflamación prolongada → fibrosis',
        type: 'warning'
      },
      {
        title: 'Con el protocolo correcto',
        description: 'Recuperación más rápida, menos inflamación, mejores resultados finales',
        type: 'success'
      },
      {
        title: 'Los primeros 7-14 días son críticos',
        description: 'El momento del inicio del post-op impacta directamente el resultado final',
        type: 'info'
      }
    ],
    image: {
        src: '/assets/treatments/postop-urgency.jpg',
        alt: 'Planificación post-operatoria',
        prompt: 'Elegant clinical recovery still-life, folded compression garment, white towel, small notebook with recovery plan, glass of water, soft sage leaves, warm ivory background, calm aesthetic spa atmosphere, subtle visual metaphor for post-surgery planning, no people, no surgery tools, no blood, no alarm tone, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  protocol: {
    headline: 'Protocolo post-operatorio en DERMA.M',
    phases: [
      {
        id: '01',
        title: 'Fase 1 — Primeros 7 días',
        description: 'Drenaje linfático manual · reducción de inflamación inmediata'
      },
      {
        id: '02',
        title: 'Fase 2 — Semanas 2-4',
        description: 'Consolidación · prevención de fibrosis · optimización de resultados'
      },
      {
        id: '03',
        title: 'Fase 3 — Mantenimiento',
        description: 'Según evolución · número de sesiones variable por tipo de cirugía'
      }
    ],
    cta: '¿Cuántas sesiones necesito?',
    image: {
        src: '/assets/treatments/postop-protocol.jpg',
        alt: 'Sala de recuperación post-operatoria',
        prompt: 'Premium editorial image of a treatment room prepared for post-operative lymphatic drainage, clean massage table with white linens, soft warm light, sage and ivory palette, folded towel, subtle botanical decor, clinically clean but warm and reassuring, no people, no surgical equipment, no hospital aesthetic, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  founder: {
    name: 'Nancy Nieto',
    title: 'Especialista en recuperación post-quirúrgica · 10+ años · MedSpa Certificado',
    quote: '“Cada recuperación es distinta. Por eso evaluamos tu caso antes de recomendar un protocolo.”',
    cta: 'Consulta tu caso',
    image: {
      src: '/assets/pages/home/nancy-nieto-founder-home.jpg',
      alt: 'Nancy Nieto especialista en post-operatorio',
      prompt: 'Premium editorial portrait of a Latina woman aesthetic clinic founder and post-operative recovery specialist, 35-45 years old, warm confident expression, long dark hair styled naturally, wearing elegant white clinical uniform, seated in a bright treatment room with hands visible, soft ivory and sage clinical wellness environment, professional but deeply approachable, not corporate, not hospital, not white coat cliché, luxury medspa portrait, 4:5 vertical.'
    },
    backgroundMedia: undefined
  },
  testimonials: [
    {
      id: 1,
      quote: '“El drenaje post-lipo fue determinante en mi recuperación...”',
      name: 'Valeria R.',
      treatment: 'Post-Liposucción',
      isPlaceholder: true
    },
    {
      id: 2,
      quote: '“Me sentí segura desde la primera sesión...”',
      name: 'Sandra M.',
      treatment: 'Post-Abdominoplastia',
      isPlaceholder: true
    },
    {
      id: 3,
      quote: '“Recomendada por mi cirujano. Resultados increíbles.”',
      name: 'Andrea P.',
      treatment: 'Post-BBL',
      isPlaceholder: true
    }
  ],
  results: {
    headline: 'Recuperaciones reales · Pacientes reales',
    disclaimer: 'Resultados individuales pueden variar.',
    items: [
      {
        title: 'Post-Liposucción',
        imageBefore: '/assets/treatments/postop-result-1-before.jpg',
        imageAfter: '/assets/treatments/postop-result-1-after.jpg',
        sessions: '8 sesiones',
        prompt: 'Tasteful clinical before-and-after style post-liposuction recovery documentation image, same patient torso area shown in two adjacent panels, modest and non-graphic framing, improved inflammation and contour shown subtly, clean ivory background, no exposed wounds, no bruising, no scars, no explicit nudity, premium premium aesthetic documentation style, realistic, professional, 4:3 ratio.'
      },
      {
        title: 'Post-Abdominoplastia',
        imageBefore: '/assets/treatments/postop-result-2-before.jpg',
        imageAfter: '/assets/treatments/postop-result-2-after.jpg',
        sessions: '10 sesiones',
        prompt: 'Tasteful clinical before-and-after style abdominoplasty recovery documentation image, same patient abdominal contour shown in two adjacent panels, modest non-graphic framing, visible improvement in swelling and contour, clean ivory clinical background, no wounds, no scars, no bruising, no explicit nudity, professional post-op recovery documentation, 4:3 ratio.'
      }
    ]
  },
  faqs: [
    {
      question: '¿Cuándo puedo empezar las sesiones post-op?',
      answer: 'Depende de la instrucción de tu cirujano y el tipo de cirugía, pero generalmente los drenajes linfáticos manuales pueden comenzar entre las primeras 24 a 48 horas post-operatorias.'
    },
    {
      question: '¿Cuántas sesiones necesito después de liposucción?',
      answer: 'Aunque cada caso es único, el estándar para una recuperación completa suele ser de entre 10 a 15 sesiones, distribuidas con mayor frecuencia durante las primeras dos semanas.'
    },
    {
      question: '¿Es doloroso el drenaje linfático post-cirugía?',
      answer: 'No. El drenaje linfático manual post-operatorio debe ser suave y rítmico. Su objetivo es reducir la presión y el dolor, no causarlo. Si sientes dolor, la técnica no es la adecuada.'
    },
    {
      question: '¿Qué pasa si no hago post-operatorio?',
      answer: 'Sin drenaje especializado, el líquido acumulado (seroma) puede tardar mucho más en reabsorberse, aumentando el riesgo de inflamación crónica y la formación de fibrosis (tejido endurecido).'
    },
    {
      question: '¿Trabajan con mi cirujano?',
      answer: '¡Absolutamente! Nuestro equipo puede comunicarse con tu cirujano para alinear el protocolo de recuperación con sus instrucciones específicas y asegurar el mejor resultado.'
    },
    {
      question: '¿El drenaje ayuda a prevenir fibrosis?',
      answer: 'Sí. El drenaje linfático manual es la herramienta principal para movilizar los líquidos estancados y evitar que se metabolicen en tejido cicatricial endurecido (fibrosis).'
    },
    {
      question: '¿Puedo hacer post-op después de BBL?',
      answer: 'Sí, pero el protocolo es muy específico para proteger la grasa transferida. Utilizamos técnicas que drenan las áreas de liposucción sin presionar las zonas donde se realizó la transferencia.'
    },
    {
      question: '¿Qué debo llevar a mi primera sesión?',
      answer: 'Te recomendamos traer tu faja o prenda de compresión, las instrucciones por escrito de tu cirujano y venir con ropa cómoda que sea fácil de quitar y poner.'
    }
  ] as FAQItem[],
  finalCTA: {
    headline: 'Tu recuperación empieza aquí',
    body: 'Cuéntanos tu caso y te orientamos sobre el protocolo correcto para tu cirugía.',
    primaryCTA: 'Consulta tu caso',
    secondaryCTA: 'Escríbenos por WhatsApp',
    image: {
        src: '/assets/images/postop-final-cta.jpg',
        alt: 'Final CTA Post-Op background',
        prompt: 'Soft premium clinical recovery still-life, folded white towel, sage leaves, ivory candle, clean recovery care card, warm pearl-gray surface, calm post-operative support mood, lots of negative space for CTA text, reassuring aesthetic spa atmosphere, no people, no surgical imagery, no blood, no dark background, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  relatedTreatments: [
    {
      id: 'lymphatic-body',
      title: 'Drenaje Linfático Corporal',
      description: 'Mantenimiento continuo',
      category: 'Corporal',
      href: '#',
      image: {
        src: '/assets/treatments/related-postop-1.jpg',
        alt: 'Drenaje linfático corporal',
        prompt: 'Premium body lymphatic drainage treatment image, professional hands performing gentle manual drainage over covered body area, white linens, warm ivory light, soft sage clinical wellness room, calm and discreet, no surgery visuals, 4:3 ratio.'
      }
    },
    {
      id: 'radiofrequency-body',
      title: 'Radiofrecuencia Corporal',
      description: 'Complemento post-recuperación',
      category: 'Corporal',
      href: '#',
      image: {
        src: '/assets/treatments/related-postop-2.jpg',
        alt: 'Radiofrecuencia corporal',
        prompt: 'Premium non-invasive body treatment image, aesthetic device applied gently over covered or modestly framed body area, clean ivory clinical room, soft sage accents, professional wellness atmosphere, no pain, no redness, no aggressive machine look, 4:3 ratio.'
      }
    },
    {
      id: 'stretch-cellulite',
      title: 'Estrías y Celulitis',
      description: 'Siguiente paso post-recuperación',
      category: 'Corporal',
      href: '#',
      image: {
        src: '/assets/treatments/related-postop-3.jpg',
        alt: 'Tratamiento de estrías y celulitis',
        prompt: 'Soft premium body skin treatment image, close-up of natural skin texture on thigh or hip area in modest framing, clinical wellness light, warm ivory background, no extreme retouching, no explicit nudity, no harsh before/after, calm and professional, 4:3 ratio.'
      }
    }
  ]
};
