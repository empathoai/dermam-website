import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const bodyHubContent: HubPageContent = {
  type: 'body',
  seo: {
    title: 'Tratamientos Corporales West Palm Beach | DERMA.M',
    description: 'Tratamientos corporales en West Palm Beach. Post-operatorio, drenaje linfático, cavitación y protocolos personalizados. Evalúa tu caso en DERMA.M.',
    canonical: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEs: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEn: 'https://dermamskinhealth.com/en/body-treatments/',
    ogImage: 'https://dermamskinhealth.com/og/tratamientos-corporales.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach · MedSpa Certificado',
    headline: 'Tratamientos Corporales en DERMA.M',
    subheadline: 'Protocolos corporales clínicos. Desde post-operatorio hasta remodelación corporal.',
    ctaLabel: 'Evalúa tu caso — gratis',
    trustLine: '4.9 Google · Protocolos corporales · Bilingüe ES/EN',
    image: {
      src: '/assets/images/body-massage.jpg',
      alt: 'Tratamiento corporal en DERMA.M',
      prompt: 'Bright premium body treatment room for a premium aesthetics center, calm patient receiving professional body wellness treatment with modest coverage, white linens, soft sage and ivory palette, warm natural light, clinical wellness atmosphere, professional hands, no surgery visuals, no bruising, no explicit nudity, no harsh equipment, high-end medspa photography, 16:9 horizontal.'
    }
  },
  intro: {
    stats: [
      { value: '10+', label: 'Años de experiencia' },
      { value: '1,000+', label: 'Pacientes atendidas' },
      { value: '100%', label: 'Diagnóstico personalizado' }
    ],
    editorialLabel: 'Cuidado corporal con criterio',
    editorialBody: 'Los tratamientos corporales no deberían sentirse genéricos. Revisamos tu objetivo, tu momento del proceso y la respuesta de tu cuerpo para orientar un protocolo realista, seguro y profesional.',
    benefits: [
      {
        title: 'Evaluación antes de protocolo',
        description: 'Cada cuerpo y cada recuperación requieren una estrategia distinta.'
      },
      {
        title: 'Protocolos corporales especializados',
        description: 'Trabajamos con técnicas adaptadas a tu objetivo y momento del proceso.'
      },
      {
        title: 'Cuidado profesional y seguimiento',
        description: 'Te orientamos antes, durante y después del tratamiento.'
      }
    ]
  },
  featured: {
    headline: 'Nuestros tratamientos principales',
    subheadline: 'Los protocolos más solicitados en DERMA.M West Palm Beach',
    items: [
      {
        id: 'post-op',
        title: 'Post-Operatorio',
        description: 'Drenaje linfático especializado para recuperación post-cirugía.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/postoperatorio-west-palm-beach',
        badge: 'Más solicitado',
        image: {
          src: '/assets/treatments/peel-treatment.jpg',
          alt: 'Post-Operatorio',
          prompt: 'Premium post-operative lymphatic drainage image, professional hands performing gentle body drainage over white linens, patient modestly covered, warm ivory treatment room, sage accents, calm recovery atmosphere, no bruising, no scars, no surgery, no hospital look, high-end clinical wellness photography, 4:3 ratio.'
        }
      },
      {
        id: 'cavitacion',
        title: 'Cavitación',
        description: 'Reducción de medidas localizada.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/cavitacion',
        image: {
          src: '/assets/images/body-massage-oil.jpg',
          alt: 'Cavitación',
          prompt: 'Premium non-invasive body contouring treatment image, aesthetic device applied gently over modestly framed body area, clean ivory room, soft sage accents, calm professional medspa atmosphere, no pain, no redness, no explicit nudity, 4:3 ratio.'
        }
      },
      {
        id: 'estrias-celulitis',
        title: 'Estrías y Celulitis',
        description: 'Protocolos combinados de mejora corporal.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: {
          src: '/assets/images/body-stretching.jpg',
          alt: 'Estrías y Celulitis',
          prompt: 'Soft premium body skin treatment image, natural skin texture on modestly framed thigh or hip area, warm ivory clinical wellness light, sage accents, no explicit nudity, no harsh before-after, professional and discreet, 4:3 ratio.'
        }
      }
    ]
  },
  allGrid: {
    headline: 'Todos nuestros tratamientos corporales',
    items: [
      {
        id: 'radio-corp',
        title: 'Radiofrecuencia Corporal',
        category: 'Reafirmación',
        ctaLabel: 'Ver más →',
        href: '/es/radiofrecuencia-corporal',
        image: { src: '/assets/images/consultation-room.jpg', alt: 'RF Corporal', prompt: 'Body RF' }
      },
      {
        id: 'drenaje-corp',
        title: 'Drenaje Linfático Corporal',
        category: 'Desinflamación',
        ctaLabel: 'Ver más →',
        href: '/es/drenaje-linfatico-corporal',
        image: { src: '/assets/images/body-massage.jpg', alt: 'Drenaje Corporal', prompt: 'Drainage' }
      },
      {
        id: 'cavitacion-grid',
        title: 'Cavitación',
        category: 'Reducción',
        ctaLabel: 'Ver más →',
        href: '/es/cavitacion',
        image: { src: '/assets/images/body-massage-oil.jpg', alt: 'Cavitación', prompt: 'Cavitation' }
      },
      {
        id: 'postop-grid',
        title: 'Post-Operatorio',
        category: 'Recuperación',
        ctaLabel: 'Ver más →',
        href: '/es/postoperatorio-west-palm-beach',
        image: { src: '/assets/treatments/peel-treatment.jpg', alt: 'Post-Operatorio', prompt: 'Post-Op' }
      },
      {
        id: 'estrias-grid',
        title: 'Estrías y Celulitis',
        category: 'Textura',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/body-stretching.jpg', alt: 'Estrías', prompt: 'Stretch marks' }
      },
      {
        id: 'remodelacion',
        title: 'Remodelación Corporal',
        category: 'Contorno',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/skincare-products.jpg', alt: 'Remodelación', prompt: 'Body contour' }
      },
      {
        id: 'maderoterapia',
        title: 'Maderoterapia',
        category: 'Firmeza',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-treatment.jpg', alt: 'Maderoterapia', prompt: 'Wood therapy' }
      },
      {
        id: 'reduccion',
        title: 'Reducción de Medidas',
        category: 'Pérdida localizada',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/skin-therapy.jpg', alt: 'Reducción', prompt: 'Weight loss' }
      }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre tratamientos corporales',
    items: [
      {
        question: '¿Cómo sé qué tratamiento corporal necesito?',
        answer: 'Cada cuerpo es único. El primer paso es una evaluación profesional donde analizaremos tus objetivos y el estado actual de los tejidos para diseñar un plan a medida.'
      },
      {
        question: '¿El post-operatorio se agenda igual que otros tratamientos?',
        answer: 'Sí, pero recomendamos agendarlo con anticipación a tu cirugía o inmediatamente después para asegurar la continuidad del drenaje linfático en los días críticos de recuperación.'
      },
      {
        question: '¿Cuándo debo empezar drenaje después de cirugía?',
        answer: 'Generalmente se recomienda empezar 24 a 48 horas después de la cirugía, siempre bajo la autorización de tu cirujano y siguiendo nuestros protocolos profesionales.'
      },
      {
        question: '¿Los tratamientos corporales duelen?',
        answer: 'La mayoría son indoloros y relajantes, como el drenaje linfático. Otros pueden generar una sensación de calor o presión, pero siempre dentro de un umbral cómodo y seguro.'
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer: 'Depende del objetivo. Para remodelación o reducción, se suelen recomendar ciclos de 6 a 10 sesiones. En post-operatorio, la frecuencia es mayor durante las primeras semanas.'
      },
      {
        question: '¿Puedo combinar tratamientos corporales?',
        answer: 'Absolutamente. Combinar tecnologías como cavitación con radiofrecuencia suele potenciar los resultados tanto en reducción como en firmeza.'
      },
      {
        question: '¿Los resultados son inmediatos?',
        answer: 'En tratamientos como el drenaje linfático verás desinflamación inmediata. En reducción de medidas o mejora de textura (celulitis), los resultados se vuelven notorios a partir de la 3ª o 4ª sesión.'
      },
      {
        question: '¿Necesito evaluación antes de empezar?',
        answer: 'Sí. En DERMA.M no aplicamos protocolos estándar. Una evaluación previa garantiza que el tratamiento sea el correcto para tu caso específico.'
      }
    ]
  },
  socialProof: {
    headline: 'Pacientes que confiaron en nuestro cuidado corporal',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'La recuperación de mi cirugía fue mucho más rápida gracias a sus masajes post-operatorios.',
        author: 'Laura P.',
        role: 'Post-Operatorio',
        isPlaceholder: true
      },
      {
        quote: 'Me ayudaron a recuperar mi confianza después de mi embarazo.',
        author: 'Marta G.',
        role: 'Remodelación Corporal',
        isPlaceholder: true
      },
      {
        quote: 'Atención profesional y resultados reales. Muy recomendadas.',
        author: 'Sofia D.',
        role: 'Drenaje Linfático',
        isPlaceholder: true
      }
    ]
  },
  finalCTA: {
    headline: 'Evalúa tu caso corporal',
    description: 'Cuéntanos tu objetivo y te orientamos sobre el protocolo más adecuado para ti.',
    primaryCTA: 'Evalúa tu caso — gratis',
    secondaryCTA: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, quiero información sobre tratamientos corporales en DERMA.M.',
    image: {
      src: '/assets/images/body-massage.jpg',
      alt: 'Cuidado corporal DERMA.M',
      prompt: 'Minimal premium body care scene, ivory palette, sage accents.'
    }
  }
};
