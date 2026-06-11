import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const facialHubContent: HubPageContent = {
  type: 'facial',
  catalogSections: [
    {
      id: 'limpieza-hidratacion-preparacion-piel',
      eyebrow: '01 · Preparación de piel',
      title: 'Limpieza, hidratación y preparación de piel',
      description: 'Protocolos diseñados para limpiar, oxigenar, hidratar y preparar la piel antes de tratamientos más avanzados.',
      idealFor: [
        'Piel opaca o congestionada',
        'Poros obstruidos',
        'Primera visita o mantenimiento facial'
      ],
      treatments: [
        'Limpieza Facial Profunda',
        'Hidrofacial',
        'Oxigenoterapia Facial',
        'Ultrasonido Facial'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'textura-poros-renovacion',
      eyebrow: '02 · Renovación superficial',
      title: 'Textura, poros y renovación',
      description: 'Tratamientos enfocados en renovar la superficie de la piel, mejorar textura, suavizar poros y aportar luminosidad.',
      idealFor: [
        'Textura irregular',
        'Poros visibles',
        'Piel apagada'
      ],
      treatments: [
        'Peel Coreano',
        'Dermabrasión Facial',
        'Microneedling Dermapen 3'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'regeneracion-colageno-calidad-piel',
      eyebrow: '03 · Bioestimulación',
      title: 'Regeneración, colágeno y calidad de piel',
      description: 'Protocolos que estimulan colágeno, elastina y regeneración dérmica para mejorar firmeza, tono y calidad general de la piel.',
      idealFor: [
        'Pérdida de firmeza',
        'Líneas finas',
        'Piel con pérdida de luminosidad'
      ],
      treatments: [
        'Plasma Rico en Plaquetas y Fibrina',
        'Evefus 10 / Radiofrecuencia Fraccionada',
        'Radiofrecuencia Facial',
        'Carboxiterapia Facial'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'acne-manchas-piel-sensible',
      eyebrow: '04 · Balance y recuperación',
      title: 'Acné, manchas y piel sensible',
      description: 'Protocolos personalizados para equilibrar, calmar y mejorar pieles con brotes, manchas, sensibilidad o cicatrices.',
      idealFor: [
        'Acné activo o recurrente',
        'Manchas y cicatrices de acné',
        'Piel inflamada o sensibilizada'
      ],
      treatments: [
        'Manchas y Cicatrices de Acné',
        'Acné',
        'Plasma Ozono',
        'Plasma Frío'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'firmeza-lifting-contorno-facial',
      eyebrow: '05 · Firmeza y contorno',
      title: 'Firmeza, lifting y contorno facial',
      description: 'Tratamientos diseñados para reafirmar, tensar, definir contornos y mejorar la apariencia del rostro sin cirugía.',
      idealFor: [
        'Flacidez leve o moderada',
        'Pérdida de definición facial',
        'Contorno mandibular poco marcado'
      ],
      treatments: [
        'HIFU Facial',
        'EMS Facial + Enyong',
        'Rejuvenecimiento Facial / Lifting',
        'Masajes Faciales para Marcación Mandibular',
        'Maderoterapia Facial'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'bienestar-facial-relajacion',
      eyebrow: '06 · Bienestar facial',
      title: 'Bienestar facial y relajación',
      description: 'Tratamientos manuales orientados a relajar tensiones, mejorar circulación, oxigenar tejidos y aportar una apariencia descansada.',
      idealFor: [
        'Tensión facial',
        'Rostro cansado',
        'Bienestar y mantenimiento'
      ],
      treatments: [
        'Masajes Relajantes Faciales',
        'Técnicas manuales complementarias'
      ],
      primaryCta: {
        label: 'Agenda tu evaluación',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    }
  ],
  seo: {
    title: 'Catálogo de Tratamientos Faciales West Palm Beach | DERMA.M',
    description: 'Catálogo facial DERMA.M en West Palm Beach: limpieza profunda, hidrofacial, peel coreano, oxigenoterapia, radiofrecuencia, PRP, plasma, HIFU, masajes faciales y más.',
    canonical: 'https://dermamskinhealth.com/es/tratamientos-faciales/',
    hreflangEs: 'https://dermamskinhealth.com/es/tratamientos-faciales/',
    hreflangEn: 'https://dermamskinhealth.com/en/facial-treatments/',
    ogImage: 'https://dermamskinhealth.com/og/tratamientos-faciales.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach · Miami · Catálogo facial profesional',
    headline: 'Tratamientos faciales',
    accentWord: 'faciales',
    subheadline: 'Un catálogo completo de protocolos faciales para limpiar, hidratar, renovar, reafirmar y mejorar la calidad de tu piel con diagnóstico personalizado.',
    ctaLabel: 'Evalúa tu piel — gratis',
    trustLine: '4.9 Google · Catálogo facial completo · Bilingüe ES/EN',
    image: {
      src: '/assets/treatments/tratamientos-faciales/hero.jpg',
      alt: 'Tratamiento facial en DERMA.M',
      prompt: 'Bright premium aesthetics facial treatment hero image, calm woman receiving a gentle facial treatment in a clean ivory treatment room, white headband, luminous realistic skin, soft sage and pearl gray accents, warm natural light, botanical minimal decor, professional DERMA.M-style medspa environment, clinical but welcoming, no redness, no harsh tools, no aggressive procedure, no dark background, 16:9 horizontal.'
    }
  },
  intro: {
    eyebrow: 'Guía de tratamientos faciales',
    headline: 'Elige según lo que tu piel necesita',
    body: 'Organizamos el catálogo por objetivo para que puedas encontrar el protocolo adecuado sin comparar 21 servicios individuales.',
    stats: [],
    chips: [
      { label: 'Limpieza e hidratación', targetId: '#limpieza-hidratacion-preparacion-piel' },
      { label: 'Textura y poros', targetId: '#textura-poros-renovacion' },
      { label: 'Regeneración y colágeno', targetId: '#regeneracion-colageno-calidad-piel' },
      { label: 'Acné y manchas', targetId: '#acne-manchas-piel-sensible' },
      { label: 'Firmeza y contorno', targetId: '#firmeza-lifting-contorno-facial' },
      { label: 'Bienestar facial', targetId: '#bienestar-facial-relajacion' }
    ],
    decisionCards: [
      {
        title: 'Preparar y equilibrar',
        body: 'Para pieles que necesitan limpieza profunda, hidratación, oxigenación o una base saludable antes de tratamientos más avanzados.',
        labels: ['Limpieza facial', 'Hidrofacial', 'Oxigenoterapia'],
        href: '#limpieza-hidratacion-preparacion-piel',
      },
      {
        title: 'Renovar textura y tono',
        body: 'Para poros, textura irregular, manchas superficiales, acné activo o piel sensible que requiere renovación progresiva.',
        labels: ['Peel coreano', 'Microneedling', 'Dermabrasión'],
        href: '#textura-poros-renovacion',
      },
      {
        title: 'Estimular firmeza y colágeno',
        body: 'Para pérdida de firmeza, contorno facial, calidad de piel y protocolos de bioestimulación personalizados.',
        labels: ['PRF', 'HIFU', 'Radiofrecuencia'],
        href: '#regeneracion-colageno-calidad-piel',
      },
    ]
  },
  featured: {
    headline: 'Tratamientos faciales destacados',
    subheadline: 'Protocolos base del catálogo DERMA.M para empezar o potenciar tu plan facial.',
    items: [
      { id: 'prf', title: 'Plasma Rico en Plaquetas (PRP) y Fibrina', description: 'Tratamiento bioregenerativo con factores de crecimiento del propio paciente.', ctaLabel: 'Ver tratamiento →', href: '/es/plasma-rico-en-plaquetas-west-palm-beach', badge: 'Regeneración', image: { src: '/assets/treatments/prf/hero.jpg', alt: 'Plasma Rico en Plaquetas y Fibrina' } },
      { id: 'limpieza-profunda', title: 'Limpieza Facial Profunda', description: 'Tratamiento imprescindible para limpiar impurezas, exceso de grasa, células muertas y puntos negros.', ctaLabel: 'Ver tratamiento →', href: '/es/limpieza-facial-profunda', badge: 'Base facial', image: { src: '/assets/treatments/limpieza-facial/hero.jpg', alt: 'Limpieza Facial Profunda' } },
      { id: 'microneedling', title: 'Microneedling Dermapen 3', description: 'Microperforaciones controladas para estimular colágeno, elastina y absorción de activos.', ctaLabel: 'Ver tratamiento →', href: '/es/microneedling', badge: 'Textura', image: { src: '/assets/treatments/microneedling/hero.jpg', alt: 'Microneedling Dermapen 3' } },
      { id: 'hidrofacial', title: 'Hidrofacial', description: 'Limpieza avanzada que combina exfoliación, hidratación profunda y succión de impurezas.', ctaLabel: 'Ver tratamiento →', href: '/es/hidrofacial', badge: 'Hidratación', image: { src: '/assets/treatments/hidrofacial/hero.jpg', alt: 'Hidrofacial en DERMA.M' } }
    ]
  },
  allGrid: {
    headline: 'Todos nuestros tratamientos faciales',
    items: [
      { id: 'limpieza-grid', title: 'Limpieza Facial Profunda', category: 'Limpieza', ctaLabel: 'Ver más →', href: '/es/limpieza-facial-profunda', image: { src: '/assets/treatments/limpieza-facial/hero.jpg', alt: 'Limpieza Facial Profunda' } },
      { id: 'hidrofacial', title: 'Hidrofacial', category: 'Hidratación', ctaLabel: 'Ver más →', href: '/es/hidrofacial', image: { src: '/assets/treatments/hidrofacial/hero.jpg', alt: 'Hidrofacial en DERMA.M' } },
      { id: 'peel-coreano', title: 'Peel Coreano', category: 'Renovación', ctaLabel: 'Ver más →', href: '/es/peel-coreano', image: { src: '/assets/treatments/peel-coreano/hero.jpg', alt: 'Peel Coreano en DERMA.M' } },
      { id: 'oxigenoterapia', title: 'Oxigenoterapia Facial', category: 'Vitalidad', ctaLabel: 'Ver más →', href: '/es/oxigenoterapia-facial', image: { src: '/assets/treatments/oxigenoterapia-facial/hero.jpg', alt: 'Oxigenoterapia Facial en DERMA.M' } },
      { id: 'evefus-10', title: 'Evefus 10 (Radiofrecuencia Fraccionada)', category: 'Tecnología', ctaLabel: 'Ver más →', href: '/es/evefus-10-radiofrecuencia-fraccionada', image: { src: '/assets/treatments/evefus-10-radiofrecuencia-fraccionada/hero.jpg', alt: 'Evefus 10 Radiofrecuencia Fraccionada' } },
      { id: 'radiofrecuencia', title: 'Radiofrecuencia Facial', category: 'Firmeza', ctaLabel: 'Ver más →', href: '/es/radiofrecuencia-facial', image: { src: '/assets/treatments/radiofrecuencia-facial/hero.jpg', alt: 'Radiofrecuencia Facial' } },
      { id: 'ultrasonido-facial', title: 'Ultrasonido Facial', category: 'Absorción', ctaLabel: 'Ver más →', href: '/es/ultrasonido-facial', image: { src: '/assets/treatments/ultrasonido-facial/hero.jpg', alt: 'Ultrasonido Facial' } },
      { id: 'microneedling', title: 'Microneedling Dermapen 3', category: 'Colágeno', ctaLabel: 'Ver más →', href: '/es/microneedling', image: { src: '/assets/treatments/microneedling/hero.jpg', alt: 'Microneedling Dermapen 3' } },
      { id: 'prp-fibrina', title: 'Plasma Rico en Plaquetas (PRP) y Fibrina', category: 'Regeneración', ctaLabel: 'Ver más →', href: '/es/plasma-rico-en-plaquetas-west-palm-beach', image: { src: '/assets/treatments/prf/hero.jpg', alt: 'Plasma Rico en Plaquetas y Fibrina' } },
      { id: 'plasma-ozono', title: 'Plasma Ozono', category: 'Oxigenación', ctaLabel: 'Ver más →', href: '/es/plasma-ozono', image: { src: '/assets/treatments/plasma-ozono/hero.jpg', alt: 'Plasma Ozono' } },
      { id: 'plasma-frio', title: 'Plasma Frío', category: 'Regeneración', ctaLabel: 'Ver más →', href: '/es/plasma-frio', image: { src: '/assets/treatments/plasma-frio/hero.jpg', alt: 'Plasma Frío' } },
      { id: 'carboxiterapia-facial', title: 'Carboxiterapia Facial', category: 'Oxigenación', ctaLabel: 'Ver más →', href: '/es/carboxiterapia-facial', image: { src: '/assets/treatments/carboxiterapia-facial/hero.jpg', alt: 'Carboxiterapia Facial' } },
      { id: 'ems-facial-enyong', title: 'EMS Facial + Enyong', category: 'Tonicidad', ctaLabel: 'Ver más →', href: '/es/ems-facial-enyong', image: { src: '/assets/treatments/ems-facial-enyong/hero.jpg', alt: 'EMS Facial + Enyong' } },
      { id: 'masajes-mandibular', title: 'Masajes Faciales para Marcación Mandibular', category: 'Contorno', ctaLabel: 'Ver más →', href: '/es/masajes-faciales-marcacion-mandibular', image: { src: '/assets/treatments/masajes-faciales-marcacion-mandibular/hero.jpg', alt: 'Masajes Faciales para Marcación Mandibular' } },
      { id: 'manchas-acne', title: 'Manchas y Cicatrices de Acné', category: 'Despigmentación', ctaLabel: 'Ver más →', href: '/es/reservar', image: { src: '/assets/treatments/tratamientos-faciales/cta.jpg', alt: 'Manchas y Cicatrices de Acné' } },
      { id: 'acne', title: 'Acné', category: 'Cuidado clínico', ctaLabel: 'Ver más →', href: '/es/reservar', image: { src: '/assets/treatments/tratamientos-faciales/hero.jpg', alt: 'Acné' } },
      { id: 'rejuvenecimiento', title: 'Rejuvenecimiento Facial / Lifting', category: 'Antiedad', ctaLabel: 'Ver más →', href: '/es/reservar', image: { src: '/assets/treatments/tratamientos-faciales/cta.jpg', alt: 'Rejuvenecimiento Facial / Lifting' } },
      { id: 'dermabrasion-facial', title: 'Dermabrasión Facial', category: 'Exfoliación', ctaLabel: 'Ver más →', href: '/es/dermabrasion-facial', image: { src: '/assets/treatments/dermabrasion-facial/hero.jpg', alt: 'Dermabrasión Facial' } },
      { id: 'masajes-relajantes-faciales', title: 'Masajes Relajantes Faciales', category: 'Bienestar', ctaLabel: 'Ver más →', href: '/es/masajes-relajantes-faciales', image: { src: '/assets/treatments/masajes-relajantes-faciales/hero.jpg', alt: 'Masajes Relajantes Faciales' } },
      { id: 'maderoterapia-facial', title: 'Maderoterapia Facial', category: 'Lifting manual', ctaLabel: 'Ver más →', href: '/es/maderoterapia-facial', image: { src: '/assets/treatments/maderoterapia-facial/hero.jpg', alt: 'Maderoterapia Facial' } },
      { id: 'hifu-facial', title: 'HIFU Facial', category: 'Lifting no invasivo', ctaLabel: 'Ver más →', href: '/es/hifu-facial', image: { src: '/assets/treatments/hifu-facial/hero.jpg', alt: 'HIFU Facial' } }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre tratamientos faciales',
    items: [
      { question: '¿Cómo sé qué tratamiento facial necesito?', answer: 'Lo ideal es empezar con una evaluación gratuita. Analizamos tu tipo de piel, textura, sensibilidad, manchas, acné, firmeza y objetivos antes de recomendar un protocolo.' },
      { question: '¿Cuál es el mejor tratamiento para empezar?', answer: 'La Limpieza Facial Profunda suele ser el punto de partida porque prepara la piel, elimina impurezas y permite evaluar mejor qué necesita tu rostro.' },
      { question: '¿Puedo combinar varios tratamientos faciales?', answer: 'Sí. Muchos protocolos se potencian al combinar limpieza, hidratación, tecnología, plasma, oxigenoterapia o masajes faciales según diagnóstico.' },
      { question: '¿Los tratamientos faciales tienen tiempo de recuperación?', answer: 'La mayoría no requiere inactividad. Tratamientos como Microneedling, HIFU o tecnologías más intensas pueden requerir cuidados específicos que te explicamos antes de iniciar.' },
      { question: '¿Qué tratamientos ayudan con manchas o cicatrices de acné?', answer: 'Podemos trabajar con peel coreano, microneedling, plasma, carboxiterapia, dermabrasión y protocolos combinados, siempre según fototipo y sensibilidad.' },
      { question: '¿También ofrecen tratamientos manuales faciales?', answer: 'Sí. El catálogo incluye masajes relajantes, marcación mandibular y maderoterapia facial para drenaje, tonicidad, contorno y bienestar.' }
    ]
  },
  socialProof: {
    headline: 'Pacientes que empezaron con un diagnóstico',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      { quote: 'Me explicaron qué necesitaba mi piel antes de recomendarme cualquier tratamiento.', author: 'Carolina M.', role: 'Diagnóstico Facial', isPlaceholder: true },
      { quote: 'DERMA.M cambió la forma en que entiendo mi piel.', author: 'Valeria R.', role: 'Facial', isPlaceholder: true },
      { quote: 'No sentí presión. Me orientaron con mucha claridad.', author: 'Andrea S.', role: 'Evaluación de piel', isPlaceholder: true }
    ]
  },
  finalCTA: {
    headline: 'Empieza con una evaluación de piel',
    description: 'Si no sabes qué tratamiento necesitas, el primer paso es evaluar tu piel y recibir una recomendación profesional basada en el catálogo facial DERMA.M.',
    primaryCTA: 'Evalúa tu piel — gratis',
    secondaryCTA: 'Escríbenos por WhatsApp',
    image: {
      src: '/assets/treatments/tratamientos-faciales/cta.jpg',
      alt: 'Cuidado facial DERMA.M',
      prompt: 'Soft premium facial skincare still-life, serum bottle, white towel, ceramic tray, sage leaves, watery blue-green accent, warm pearl-gray background, calm clean skin wellness mood, lots of negative space for CTA text, no people, no dark background, 16:9 horizontal.'
    },
    whatsappMessage: 'Hola, quiero información sobre tratamientos faciales en DERMA.M.'
  }
};
