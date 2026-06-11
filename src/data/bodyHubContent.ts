import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const bodyHubContent: HubPageContent = {
  type: 'body',
  catalogSections: [
    {
      id: 'recuperacion-postoperatoria',
      eyebrow: '01 · Recuperación guiada',
      title: 'Recuperación postoperatoria',
      description: 'Protocolos corporales especializados para acompañar la recuperación después de cirugía estética con drenaje, cuidado y seguimiento adecuado.',
      idealFor: [
        'Liposucción, BBL o abdominoplastia',
        'Inflamación postoperatoria',
        'Recuperación guiada después de cirugía'
      ],
      treatments: [
        'Masajes Postoperatorios / Drenaje Linfático'
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
      id: 'remodelacion-reduccion-corporal',
      eyebrow: '02 · Contorno corporal',
      title: 'Remodelación y reducción corporal',
      description: 'Tratamientos diseñados para trabajar zonas localizadas, mejorar contorno corporal y apoyar objetivos de reducción sin cirugía.',
      idealFor: [
        'Grasa localizada',
        'Medidas resistentes',
        'Contorno corporal poco definido'
      ],
      treatments: [
        'Lipo 360 sin Cirugía',
        'Marcación Abdominal Corporal',
        'Carboxiterapia Corporal'
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
      id: 'firmeza-tonificacion-musculacion',
      eyebrow: '03 · Tonificación',
      title: 'Firmeza, tonificación y musculación',
      description: 'Protocolos enfocados en activar, tonificar y reafirmar el cuerpo mediante tecnología y estimulación muscular.',
      idealFor: [
        'Flacidez corporal',
        'Falta de tono muscular',
        'Definición corporal'
      ],
      treatments: [
        'EMS Tesla Power',
        'Corrientes Rusas Corporales',
        'HIFU Corporal'
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
      id: 'gluteos-contorno-corporal',
      eyebrow: '04 · Silueta corporal',
      title: 'Glúteos y contorno corporal',
      description: 'Tratamientos enfocados en mejorar apariencia, firmeza y proyección del contorno corporal de forma no quirúrgica.',
      idealFor: [
        'Glúteos con poca firmeza',
        'Pérdida de definición',
        'Mejora de silueta corporal'
      ],
      treatments: [
        'Levantamiento de Glúteos',
        'Maderoterapia Corporal',
        'Lipo 360 sin Cirugía'
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
      id: 'textura-piel-celulitis-estrias',
      eyebrow: '05 · Calidad de piel corporal',
      title: 'Textura de piel, celulitis y estrías',
      description: 'Protocolos orientados a mejorar la apariencia de la piel corporal, trabajar textura irregular y apoyar la calidad del tejido.',
      idealFor: [
        'Celulitis',
        'Estrías',
        'Piel irregular o con textura'
      ],
      treatments: [
        'Estrías y Celulitis',
        'Carboxiterapia Corporal',
        'Maderoterapia Corporal'
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
      id: 'bienestar-corporal-tratamientos-complementarios',
      eyebrow: '06 · Bienestar corporal',
      title: 'Bienestar corporal y tratamientos complementarios',
      description: 'Tratamientos corporales complementarios para mantenimiento, relajación, renovación de piel y bienestar general.',
      idealFor: [
        'Mantenimiento corporal',
        'Sensación de pesadez',
        'Renovación y cuidado de piel corporal'
      ],
      treatments: [
        'BodyWrap & Scrub',
        'Detox Corporal / Desintoxicación Iónica',
        'Capilar Estético'
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
    title: 'Tratamientos Corporales West Palm Beach | DERMA.M',
    description: 'Tratamientos corporales en West Palm Beach: masajes postoperatorios, Lipo 360 sin cirugía, glúteos, marcación abdominal, detox, BodyWrap, maderoterapia, EMS, HIFU, carboxiterapia y más.',
    canonical: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEs: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEn: 'https://dermamskinhealth.com/en/body-treatments/',
    ogImage: 'https://dermamskinhealth.com/og/tratamientos-corporales.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach · Catálogo corporal profesional',
    headline: 'Tratamientos corporales',
    accentWord: 'corporales',
    subheadline: 'Protocolos corporales del catálogo DERMA.M para recuperación, moldeado, firmeza, drenaje, textura, detox y bienestar corporal.',
    ctaLabel: 'Evalúa tu caso — gratis',
    trustLine: '4.9 Google · Catálogo corporal · Bilingüe ES/EN',
    image: {
      src: '/assets/treatments/tratamientos-corporales/hero.jpg',
      alt: 'Tratamiento corporal en DERMA.M',
      prompt: 'Bright premium body treatment room for a premium aesthetics center, calm patient receiving professional body wellness treatment with modest coverage, white linens, soft sage and ivory palette, warm natural light, clinical wellness atmosphere, professional hands, no surgery visuals, no bruising, no explicit nudity, no harsh equipment, high-end medspa photography, 16:9 horizontal.'
    }
  },
  intro: {
    eyebrow: 'Guía de tratamientos corporales',
    headline: 'Elige según tu objetivo corporal',
    body: 'Organizamos el catálogo por recuperación, contorno, firmeza, textura y bienestar para orientar mejor tu evaluación.',
    stats: [],
    chips: [
      { label: 'Postoperatorio', targetId: '#recuperacion-postoperatoria' },
      { label: 'Remodelación', targetId: '#remodelacion-reduccion-corporal' },
      { label: 'Tonificación', targetId: '#firmeza-tonificacion-musculacion' },
      { label: 'Glúteos y contorno', targetId: '#gluteos-contorno-corporal' },
      { label: 'Celulitis y estrías', targetId: '#textura-piel-celulitis-estrias' },
      { label: 'Bienestar corporal', targetId: '#bienestar-corporal-tratamientos-complementarios' }
    ],
    decisionCards: [
      {
        title: 'Reducir volumen localizado',
        body: 'Para grasa resistente, perímetros y zonas específicas que no responden al ejercicio ni a la dieta.',
        labels: ['Cavitación', 'Criolipólisis', 'Carboxiterapia'],
        href: '#remodelacion-reduccion-corporal',
      },
      {
        title: 'Mejorar drenaje y recuperación',
        body: 'Para postoperatorio, retención de líquidos, circulación linfática o recuperación tras procedimientos.',
        labels: ['Drenaje linfático', 'Presoterapia', 'Masajes post-op'],
        href: '#recuperacion-postoperatoria',
      },
      {
        title: 'Reafirmar y moldear',
        body: 'Para flacidez, tonicidad, contorno corporal y protocolos de estimulación muscular o firmeza dérmica.',
        labels: ['Radiofrecuencia', 'EMS corporal', 'Glúteos'],
        href: '#firmeza-tonificacion-musculacion',
      },
    ]
  },
  featured: {
    headline: 'Tratamientos corporales destacados',
    subheadline: 'Servicios corporales del catálogo DERMA.M para recuperación, moldeado, firmeza y textura.',
    items: [
      {
        id: 'masajes-postoperatorios',
        title: 'Masajes Postoperatorios (Drenaje Linfático)',
        description: 'Manejo especializado para reducir inflamación, acelerar recuperación y apoyar resultados post-cirugía.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/postoperatorio-west-palm-beach',
        badge: 'Recuperación',
        image: {
          src: '/assets/treatments/postoperatorio/hero.jpg',
          alt: 'Masajes Postoperatorios'
        }
      },
      {
        id: 'lipo-360-sin-cirugia',
        title: 'Lipo 360 sin Cirugía',
        description: 'Moldeo corporal progresivo para reducir grasa localizada, cintura y contorno sin intervención quirúrgica.',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        badge: 'Moldeo',
        isPlaceholderRoute: true,
        image: {
          src: '/assets/treatments/tratamientos-corporales/hero.jpg',
          alt: 'Lipo 360 sin Cirugía',
          prompt: 'Premium non-invasive body contouring treatment image, aesthetic device applied gently over modestly framed body area, clean ivory room, soft sage accents, calm professional medspa atmosphere, no pain, no redness, no explicit nudity, 4:3 ratio.'
        }
      }
    ]
  },
  allGrid: {
    headline: 'Todos nuestros tratamientos corporales',
    items: [
      {
        id: 'masajes-postoperatorios-grid',
        title: 'Masajes Postoperatorios (Drenaje Linfático)',
        category: 'Recuperación',
        ctaLabel: 'Ver más →',
        href: '/es/postoperatorio-west-palm-beach',
        image: { src: '/assets/treatments/postoperatorio/hero.jpg', alt: 'Masajes Postoperatorios' }
      },
      {
        id: 'lipo-360-sin-cirugia-grid',
        title: 'Lipo 360 sin Cirugía',
        category: 'Moldeo corporal',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/hero.jpg', alt: 'Lipo 360 sin Cirugía', prompt: 'Non-invasive body contouring' }
      },
      {
        id: 'levantamiento-gluteos-grid',
        title: 'Levantamiento de Glúteos',
        category: 'Tonificación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'Levantamiento de Glúteos', prompt: 'Glute lifting body treatment' }
      },
      {
        id: 'marcacion-abdominal-grid',
        title: 'Marcación Abdominal Corporal',
        category: 'Definición',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/hero.jpg', alt: 'Marcación Abdominal Corporal', prompt: 'Abdominal contouring treatment' }
      },
      {
        id: 'detox-corporal-grid',
        title: 'Detox Corporal (Desintoxicación Iónica)',
        category: 'Detox',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'Detox Corporal', prompt: 'Ionic detox treatment' }
      },
      {
        id: 'bodywrap-scrub-grid',
        title: 'BodyWrap & Scrub',
        category: 'Exfoliación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/hero.jpg', alt: 'BodyWrap & Scrub', prompt: 'Body wrap and scrub' }
      },
      {
        id: 'maderoterapia-corporal-grid',
        title: 'Maderoterapia Corporal',
        category: 'Moldeo natural',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/body-massage.jpg', alt: 'Maderoterapia Corporal', prompt: 'Wood therapy body treatment' }
      },
      {
        id: 'corrientes-rusas-grid',
        title: 'Corrientes Rusas Corporales',
        category: 'Tonificación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'Corrientes Rusas Corporales', prompt: 'Body electrostimulation treatment' }
      },
      {
        id: 'ems-tesla-power-grid',
        title: 'EMS Tesla Power (Musculación sin esfuerzo)',
        category: 'Musculación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'EMS Tesla Power', prompt: 'EMS body sculpting treatment' }
      },
      {
        id: 'hifu-corporal-grid',
        title: 'HIFU Corporal',
        category: 'Firmeza',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/hero.jpg', alt: 'HIFU Corporal', prompt: 'HIFU body treatment' }
      },
      {
        id: 'carboxiterapia-corporal-grid',
        title: 'Carboxiterapia Corporal',
        category: 'Celulitis',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/hero.jpg', alt: 'Carboxiterapia Corporal', prompt: 'Body carboxytherapy treatment' }
      },
      {
        id: 'estrias-celulitis-grid',
        title: 'Estrías y Celulitis',
        category: 'Textura',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'Estrías y Celulitis', prompt: 'Stretch marks and cellulite treatment' }
      },
      {
        id: 'capilar-estetico-grid',
        title: 'Capilar Estético',
        category: 'Cabello',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/tratamientos-corporales/cta.jpg', alt: 'Capilar Estético', prompt: 'Aesthetic hair wellness treatment' }
      }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre tratamientos corporales',
    items: [
      {
        question: '¿Cómo sé qué tratamiento corporal necesito?',
        answer: 'Cada cuerpo es único. El primer paso es una evaluación profesional donde analizamos tus objetivos y el estado actual de los tejidos para orientar el protocolo adecuado.'
      },
      {
        question: '¿Qué tratamientos corporales ofrece DERMA.M?',
        answer: 'El catálogo incluye masajes postoperatorios, Lipo 360 sin cirugía, levantamiento de glúteos, marcación abdominal, detox iónico, BodyWrap & Scrub, maderoterapia, corrientes rusas, EMS Tesla Power, HIFU corporal, carboxiterapia, estrías y celulitis, y capilar estético.'
      },
      {
        question: '¿Los tratamientos corporales duelen?',
        answer: 'La mayoría son no invasivos. Algunas tecnologías pueden generar calor, presión o estimulación muscular, pero siempre se ajustan a tu tolerancia y evaluación previa.'
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer: 'Depende del objetivo, la zona y la respuesta de tu cuerpo. En evaluación te orientamos sobre frecuencia y cantidad de sesiones recomendadas.'
      },
      {
        question: '¿Puedo combinar tratamientos corporales?',
        answer: 'Sí. Muchos tratamientos corporales se combinan según objetivo: moldeado, firmeza, drenaje, textura, detox o tonificación.'
      },
      {
        question: '¿Necesito evaluación antes de empezar?',
        answer: 'Sí. En DERMA.M priorizamos seguridad, claridad y personalización antes de recomendar un protocolo corporal.'
      }
    ]
  },
  socialProof: {
    headline: 'Pacientes que confiaron en nuestro cuidado corporal',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'Me orientaron con claridad antes de empezar mi tratamiento corporal.',
        author: 'Laura P.',
        role: 'Tratamiento corporal',
        isPlaceholder: true
      },
      {
        quote: 'El equipo fue profesional y cuidadoso durante todo el proceso.',
        author: 'Marta G.',
        role: 'Cuidado corporal',
        isPlaceholder: true
      },
      {
        quote: 'Atención profesional y recomendaciones realistas para mi caso.',
        author: 'Sofia D.',
        role: 'Evaluación corporal',
        isPlaceholder: true
      }
    ]
  },
  finalCTA: {
    headline: 'Evalúa tu caso corporal',
    description: 'Cuéntanos tu objetivo y te orientamos sobre el tratamiento corporal del catálogo DERMA.M más adecuado para ti.',
    primaryCTA: 'Evalúa tu caso — gratis',
    secondaryCTA: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, quiero información sobre tratamientos corporales en DERMA.M.',
    image: {
      src: '/assets/treatments/tratamientos-corporales/cta.jpg',
      alt: 'Cuidado corporal DERMA.M',
      prompt: 'Minimal premium body care scene, ivory palette, sage accents.'
    }
  }
};
