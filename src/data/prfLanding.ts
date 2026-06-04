import { FAQItem, ComparisonItem, BenefitItem, ProtocolStep, ResultItem } from '../types/landing';

export const prfContent = {
  hero: {
    eyebrow: 'West Palm Beach · MedSpa Certificado',
    headline: 'Plasma Rico en Fibrina en West Palm Beach',
    subheadline: 'Protocolo clínico avanzado para regeneración facial. Resultados desde la primera sesión.',
    cta: 'Agenda tu evaluación gratuita',
    trustBar: '4.9 Google · West Palm Beach · Miami, FL',
    image: {
      src: '/assets/images/hero-prf.jpg',
      alt: 'Plasma Rico en Plaquetas y Fibrina en DERMA.M',
      prompt: 'Premium clinical aesthetics editorial image for a PRF / PRP facial treatment landing page, gloved hands holding a small vial with golden plasma layer and subtle dark red lower layer, clean ivory clinical treatment room, blurred centrifuge and amber professional skincare vials in background, soft natural light, elegant professional precision, pastel ivory and muted sage environment, sober muted rose-plasma accent, luxury medspa photography, calm and professional, no blood spill, no aggressive needle close-up, no surgery, no hospital emergency feeling, no dark background, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  audience: {
    headline: '¿Tu piel necesita esto?',
    checks: [
      'Pérdida de volumen facial',
      'Piel opaca o sin luminosidad',
      'Líneas finas y arrugas tempranas',
      'Manchas y tono irregular',
      'Cicatrices de acné',
      'Piel que no responde a tratamientos convencionales'
    ]
  },
  education: {
    headline: 'Qué es el Plasma Rico en Plaquetas y Fibrina',
    copy: 'PRF es la evolución del PRP convencional. Utilizamos tu propia sangre, procesada con baja aceleración en un sistema cerrado sin anticoagulantes. Esto nos permite obtener una fibrina rica en factores de crecimiento que regeneran, reparan y rejuvenecen tu piel de manera natural.',
    comparison: [
      { label: 'Liberación de factores', prp: 'Release único', prf: 'Release sostenido' },
      { label: 'Composición', prp: 'Puede usar anticoagulantes', prf: '100% natural' },
      { label: 'Duración del estímulo', prp: 'Resultado más corto', prf: 'Resultado más largo' }
    ] as ComparisonItem[],
    image: {
        src: '/assets/treatments/prf/prf-process.jpg',
        alt: 'Proceso de obtención de PRF',
        prompt: 'Close-up premium clinical PRF preparation scene, gloved hands placing a plasma vial near a centrifuge, clean white and ivory professional treatment surface, golden plasma visible, subtle muted rose accent, soft shallow depth of field, luxury clinical wellness aesthetic, professional and calm, no blood spill, no aggressive tools, 4:3 ratio.'
    }
  },
  benefits: [
    {
      title: 'Regeneración desde adentro',
      description: 'Tu propio plasma estimula colágeno y elastina de forma natural.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-1.jpg',
        alt: 'Beneficio de regeneración natural',
        prompt: 'Soft clinical facial rejuvenation treatment image, patient lying calmly with white headband, professional hands performing gentle PRF facial application, luminous realistic skin texture, warm ivory treatment room, pastel sage and muted rose accents, calm premium medspa photography, no redness, no bruising, no aggressive needle, 16:9 horizontal.'
      }
    },
    {
      title: 'Sin tiempo de recuperación',
      description: 'Protocolo clínico de 60–90 min. Vuelves a tu rutina el mismo día.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-2.jpg',
        alt: 'Rápida recuperación post-PRF',
        prompt: 'Elegant wellness-clinical image showing calm patient after facial treatment, soft towel, hydrated skin, professional hands gently applying soothing serum, ivory linens, soft natural light, clean medspa room, pastel sage atmosphere, no irritation, no redness, no procedure intensity, 16:9 horizontal.'
      }
    },
    {
      title: 'Resultados progresivos y duraderos',
      description: 'La fibrina libera factores de crecimiento durante 7–10 días.',
      image: {
        src: '/assets/treatments/prf/prf-benefit-3.jpg',
        alt: 'Resultados duraderos de PRF',
        prompt: 'Premium skincare editorial still-life with golden plasma vial, soft serum texture, glass dropper, ivory ceramic tray, folded towel, muted rose and sage botanical accent, calm clinical wellness style, lots of negative space, 16:9 horizontal.'
      }
    }
  ] as BenefitItem[],
  protocol: {
    headline: 'El protocolo PRF en DERMA.M',
    steps: [
      { title: 'Evaluación de piel', description: 'Análisis personalizado' },
      { title: 'Preparación', description: 'Extracción y centrifugado' },
      { title: 'Aplicación', description: 'Protocolo clínico' },
      { title: 'Post-tratamiento', description: 'Cuidados específicos' }
    ] as ProtocolStep[],
    info: 'Duración: 60–90 min · Sesiones recomendadas: 3–4 · Recuperación: mínima'
  },
  results: {
    headline: 'Resultados reales · Pacientes reales',
    disclaimer: 'Resultados individuales pueden variar.',
    items: [
      {
        title: 'Luminosidad y Textura',
        imageBefore: '/assets/treatments/prf/prf-result-1-before.jpg',
        imageAfter: '/assets/treatments/prf/prf-result-1-after.jpg',
        sessions: '3 sesiones'
      },
      {
        title: 'Tono y Cicatrices',
        imageBefore: '/assets/treatments/prf/prf-result-2-before.jpg',
        imageAfter: '/assets/treatments/prf/prf-result-2-after.jpg',
        sessions: '4 sesiones'
      }
    ] as ResultItem[]
  },
  faqs: [
    {
      question: '¿Es doloroso el tratamiento de PRF?',
      answer: 'Es un tratamiento tolerable. Utilizamos técnicas de aplicación suaves para minimizar cualquier molestia durante el procedimiento.'
    },
    {
      question: '¿Cuántas sesiones de PRF necesito?',
      answer: 'Generalmente recomendamos un protocolo inicial de 3 a 4 sesiones espaciadas mensualmente para obtener los mejores resultados regenerativos.'
    },
    {
      question: '¿Cuál es la diferencia entre PRF y PRP convencional?',
      answer: 'A diferencia del PRP, el PRF se procesa sin anticoagulantes y a una velocidad menor, lo que permite crear una matriz de fibrina que libera factores de crecimiento de forma sostenida durante varios días.'
    },
    {
      question: '¿En cuánto tiempo veo resultados?',
      answer: 'Muchos pacientes notan una mejora en la luminosidad en los primeros días, pero los resultados regenerativos profundos (colágeno) se desarrollan plenamente entre 4 a 6 semanas después de la sesión.'
    },
    {
      question: '¿Cuánto cuesta el PRF en West Palm Beach?',
      answer: 'El costo varía según las necesidades individuales y el número de sesiones en tu plan personalizado. Agenda tu evaluación gratuita para recibir un presupuesto detallado.'
    },
    {
      question: '¿Qué cuidados debo tener después del PRF?',
      answer: 'Recomendamos evitar el sol directo, no realizar ejercicio intenso por 24 horas y seguir el protocolo de hidratación específica que te entregaremos en nuestro centro.'
    },
    {
      question: '¿El PRF sirve para cicatrices de acné?',
      answer: 'Sí, es uno de los mejores tratamientos naturales para mejorar la textura de la piel y reducir la apariencia de cicatrices de acné gracias a su alto poder regenerativo.'
    },
    {
      question: '¿Puedo combinar PRF con microneedling?',
      answer: '¡Absolutamente! De hecho, es una de nuestras combinaciones favoritas para potenciar la penetración de los factores de crecimiento y maximizar la inducción de colágeno.'
    }
  ] as FAQItem[],
  founder: {
    eyebrow: '¿Por qué DERMA.M para tu PRF?',
    name: 'Nancy Nieto',
    title: 'Especialista en PRF · 10+ años · MedSpa Certificado',
    quote: '“Diagnóstico antes de tratamiento. Siempre.”',
    cta: 'Agenda tu evaluación gratuita',
    image: {
      src: '/assets/pages/home/nancy-nieto-founder-home.jpg',
      alt: 'Nancy Nieto especialista en PRF',
      prompt: 'Premium editorial portrait of a Latina woman aesthetic clinic founder, 35-45 years old, warm confident expression, long dark hair styled naturally, wearing elegant white clinical uniform, seated at a light treatment desk with hands visible, soft ivory and warm gray treatment room, candle and minimal DERMA.M branded object on desk, subtle botanical decor, professional but approachable, not corporate, not hospital, not white coat cliché, luxury wellness clinic portrait, bright natural light, 4:5 vertical.'
    },
    backgroundMedia: undefined
  },
  finalCTA: {
    headline: '¿Lista para tu evaluación?',
    body: 'Evaluación gratuita de piel. Sin compromiso. West Palm Beach, FL.',
    primaryCTA: 'Agenda tu evaluación gratuita',
    secondaryCTA: 'Escríbenos por WhatsApp',
    image: {
        src: '/assets/treatments/prf/prf-final-cta.jpg',
        alt: 'Final CTA PRF background',
        prompt: 'Soft premium clinical wellness still-life for PRF facial treatment, golden plasma vial, ivory candle, folded white towel, subtle baby’s breath flowers, ceramic tray, muted rose-plasma accent, sage botanical detail, warm pearl-gray background, lots of negative space for CTA text, elegant aesthetic spa mood, 16:9 horizontal. Main subject must remain visible within the center 60% of the frame for mobile crop safety. Leave soft negative space around edges. No important visual information near left or right edge.'
    }
  },
  relatedTreatments: [
    {
      id: 'microneedling',
      title: 'Microneedling',
      description: 'Complemento natural del PRF',
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
      description: 'El primer paso para tu piel',
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
      title: 'Hidratación Profunda',
      description: 'Potencia los resultados del PRF',
      category: 'Facial',
      href: '/es/hidrofacial',
      image: {
        src: '/assets/treatments/related-hydration.jpg',
        alt: 'Hidratación facial',
        prompt: 'Premium clinical facial hydration treatment, soft textures, luxury spa vibe, 4:3 ratio.'
      }
    }
  ]
};
