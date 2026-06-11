import { FAQItem, BenefitItem, ProtocolStep, ResultItem } from '../types/landing';

export const prfContent = {
  hero: {
    eyebrow: 'West Palm Beach · MedSpa Certificado',
    headline: 'Plasma Rico en Fibrina en West Palm Beach',
    subheadline: 'Una forma más natural y progresiva de apoyar la calidad de tu piel.',
    cta: 'Agenda tu evaluación de piel',
    trustBar: '4.9 Google · West Palm Beach · Miami, FL',
    image: {
      src: '/assets/treatments/prf/hero.jpg',
      alt: 'Plasma Rico en Plaquetas y Fibrina en DERMA.M',
      prompt: 'Premium clinical aesthetics editorial image for a PRF / PRP facial treatment landing page, gloved hands holding a small vial with golden plasma layer and subtle dark red lower layer, clean ivory clinical treatment room, blurred centrifuge and amber professional skincare vials in background, soft natural light, elegant professional precision, pastel ivory and muted sage environment, sober muted rose-plasma accent, luxury medspa photography, calm and professional, no blood spill, no aggressive needle close-up, no surgery, no hospital emergency feeling, no dark background, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  audience: {
    headline: '¿Tu piel necesita más frescura?',
    checks: [
      'Piel apagada',
      'Textura irregular',
      'Líneas finas',
      'Manchas visibles',
      'Cicatrices de acné',
      'Pérdida de luminosidad'
    ]
  },
  education: {
    eyebrow: 'Protocolo bioregenerativo DERMA.M',
    headline: 'Qué es el Plasma Rico en Plaquetas y Fibrina',
    copy: 'El Plasma Rico en Plaquetas y Fibrina es un protocolo que se obtiene a partir de una pequeña muestra de tu sangre. Luego se prepara y se aplica según las necesidades reales de tu piel para apoyar su apariencia, textura y luminosidad de forma progresiva.',
    differentiatorHeading: 'Por qué usamos PRF en DERMA.M',
    differentiators: [
      {
        title: 'Viene de tu propio cuerpo',
        body: 'Utiliza componentes obtenidos de tu sangre dentro de un protocolo estético personalizado.'
      },
      {
        title: 'Apoya la calidad de piel',
        body: 'Puede ayudar a mejorar la apariencia de luminosidad, textura y frescura de forma gradual.'
      },
      {
        title: 'Requiere diagnóstico',
        body: 'No todas las pieles necesitan lo mismo. Evaluamos tu piel antes de recomendarlo.'
      }
    ],
    image: {
      src: '/assets/treatments/prf/prf-process.jpg',
      alt: 'Proceso de obtención de PRF — viales y fibrina en DERMA.M',
      prompt: 'Close-up premium clinical PRF preparation scene, gloved hands placing a plasma vial near a centrifuge, clean white and ivory professional treatment surface, golden plasma visible, subtle muted rose accent, soft shallow depth of field, luxury clinical wellness aesthetic, professional and calm, no blood spill, no aggressive tools, 4:3 ratio.'
    }
  },
  benefits: [
    {
      title: 'Calidad de piel desde tu propia biología',
      description: 'Un protocolo que utiliza componentes obtenidos de tu cuerpo para apoyar una piel más revitalizada.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-1.jpg',
        alt: 'Beneficio de regeneración natural',
        prompt: 'Soft clinical facial rejuvenation treatment image, patient lying calmly with white headband, professional hands performing gentle PRF facial application, luminous realistic skin texture, warm ivory treatment room, pastel sage and muted rose accents, calm premium medspa photography, no redness, no bruising, no aggressive needle, 16:9 horizontal.'
      }
    },
    {
      title: 'Recuperación generalmente ligera',
      description: 'El tiempo de recuperación puede variar según la técnica, la zona tratada y la sensibilidad de cada piel.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-2.jpg',
        alt: 'Recuperación post-PRF',
        prompt: 'Elegant wellness-clinical image showing calm patient after facial treatment, soft towel, hydrated skin, professional hands gently applying soothing serum, ivory linens, soft natural light, clean medspa room, pastel sage atmosphere, no irritation, no redness, no procedure intensity, 16:9 horizontal.'
      }
    },
    {
      title: 'Resultados progresivos',
      description: 'La piel puede verse más luminosa y saludable de forma gradual, especialmente cuando el protocolo se acompaña con cuidado en casa.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-3.jpg',
        alt: 'Resultados progresivos de PRF',
        prompt: 'Premium skincare editorial still-life with golden plasma vial, soft serum texture, glass dropper, ivory ceramic tray, folded towel, muted rose and sage botanical accent, calm clinical wellness style, lots of negative space, 16:9 horizontal.'
      }
    }
  ] as BenefitItem[],
  protocol: {
    headline: 'El protocolo PRF en DERMA.M',
    steps: [
      { title: 'Diagnóstico de piel', description: 'Evaluamos textura, luminosidad, sensibilidad y objetivos.' },
      { title: 'Preparación del PRF', description: 'Obtenemos y preparamos la muestra bajo protocolo profesional.' },
      { title: 'Aplicación personalizada', description: 'Elegimos la técnica adecuada según tu piel y zona a tratar.' },
      { title: 'Cuidado posterior', description: 'Te guiamos con recomendaciones para acompañar mejor la evolución de tu piel.' }
    ] as ProtocolStep[],
    info: 'Cada protocolo se adapta a tu tipo de piel, estilo de vida y objetivos estéticos.'
  },
  results: {
    headline: 'Resultados reales · Piel real',
    disclaimer: 'Resultados individuales pueden variar.',
    items: [
      {
        title: 'Luminosidad y textura',
        imageBefore: '/assets/treatments/prf/prf-result-1-before.jpg',
        imageAfter: '/assets/treatments/prf/prf-result-1-after.jpg',
        sessions: '3 sesiones'
      },
      {
        title: 'Tono y cicatrices',
        imageBefore: '/assets/treatments/prf/prf-result-2-before.jpg',
        imageAfter: '/assets/treatments/prf/prf-result-2-after.jpg',
        sessions: '4 sesiones'
      }
    ] as ResultItem[]
  },
  faqs: [
    {
      question: '¿Qué es el Plasma Rico en Plaquetas y Fibrina?',
      answer: 'Es un protocolo que utiliza componentes obtenidos de tu propia sangre para apoyar la apariencia de la piel de forma progresiva.'
    },
    {
      question: '¿Cuál es la diferencia entre plasma rico en plaquetas y plasma con fibrina?',
      answer: 'La fibrina permite trabajar un concentrado con características distintas dentro del protocolo. En DERMA.M evaluamos cuál técnica tiene más sentido para tu piel.'
    },
    {
      question: '¿El PRF cambia mis facciones?',
      answer: 'No es un tratamiento diseñado para cambiar facciones. Su enfoque está en apoyar calidad de piel, luminosidad y apariencia revitalizada.'
    },
    {
      question: '¿Cuándo puedo ver cambios?',
      answer: 'Los resultados suelen ser progresivos y pueden variar según tu piel, técnica utilizada, rutina en casa y número de sesiones recomendadas.'
    },
    {
      question: '¿Sirve para manchas o cicatrices de acné?',
      answer: 'Puede formar parte de protocolos para mejorar la apariencia de textura, marcas o calidad de piel, pero siempre requiere diagnóstico previo.'
    },
    {
      question: '¿Necesito cuidado en casa?',
      answer: 'Sí. La rutina en casa ayuda a acompañar mejor la evolución del tratamiento y debe adaptarse a tu tipo de piel.'
    },
    {
      question: '¿Es adecuado para todos?',
      answer: 'No. Se requiere evaluación previa, especialmente si hay condiciones médicas, infecciones activas, alteraciones de coagulación, embarazo o medicamentos específicos.'
    }
  ] as FAQItem[],
  founder: {
    eyebrow: '¿Por qué DERMA.M para tu PRF?',
    name: 'Nancy Nieto',
    title: 'Especialista en estética avanzada y cuidado integral de la piel.',
    quote: '"Su enfoque combina diagnóstico, criterio estético y protocolos personalizados para ayudar a que cada piel se vea más saludable, luminosa y naturalmente cuidada."',
    cta: 'Agenda tu evaluación con Nancy',
    image: {
      src: '/assets/pages/home/nancy-nieto-founder-home.jpg',
      alt: 'Nancy Nieto especialista en PRF',
      prompt: 'Premium editorial portrait of a Latina woman aesthetic clinic founder, 35-45 years old, warm confident expression, long dark hair styled naturally, wearing elegant white clinical uniform, seated at a light treatment desk with hands visible, soft ivory and warm gray treatment room, candle and minimal DERMA.M branded object on desk, subtle botanical decor, professional but approachable, not corporate, not hospital, not white coat cliché, luxury wellness clinic portrait, bright natural light, 4:5 vertical.'
    },
    backgroundMedia: undefined
  },
  finalCTA: {
    headline: '¿Lista para entender qué necesita tu piel?',
    body: 'Agenda una evaluación personalizada y descubre si el Plasma Rico en Plaquetas y Fibrina es adecuado para tus objetivos de piel.',
    primaryCTA: 'Agendar evaluación personalizada',
    secondaryCTA: 'Hablar por WhatsApp',
    image: {
      src: '/assets/treatments/prf/cta.jpg',
      alt: 'Final CTA PRF background',
      prompt: "Soft premium clinical wellness still-life for PRF facial treatment, golden plasma vial, ivory candle, folded white towel, subtle baby's breath flowers, ceramic tray, muted rose-plasma accent, sage botanical detail, warm pearl-gray background, lots of negative space for CTA text, elegant aesthetic spa mood, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge."
    }
  },
  relatedTreatments: [
    {
      id: 'microneedling',
      title: 'Microneedling',
      description: 'Para apoyar textura, luminosidad y absorción de activos según indicación.',
      category: 'Facial',
      href: '/es/microneedling',
      image: {
        src: '/assets/treatments/related-microneedling.jpg',
        alt: 'Microneedling treatment',
        prompt: 'Premium clinical microneedling treatment editorial photo, professional device, soft clinical environment, 4:3 ratio.'
      }
    },
    {
      id: 'facial-deep',
      title: 'Limpieza Facial Profunda',
      description: 'Para preparar la piel y mejorar la base antes de protocolos avanzados.',
      category: 'Facial',
      href: '/es/limpieza-facial-profunda',
      image: {
        src: '/assets/treatments/related-facial-cleansing.jpg',
        alt: 'Limpieza facial',
        prompt: 'Premium deep facial cleansing treatment editorial photo, clinical spa environment, 4:3 ratio.'
      }
    },
    {
      id: 'hydration',
      title: 'Tratamientos Faciales',
      description: 'Opciones personalizadas según sensibilidad, hidratación y objetivos de piel.',
      category: 'Facial',
      href: '/es/hidrofacial',
      image: {
        src: '/assets/treatments/related-hydration.jpg',
        alt: 'Tratamientos faciales',
        prompt: 'Premium clinical facial hydration treatment, soft textures, luxury spa vibe, 4:3 ratio.'
      }
    }
  ]
};
