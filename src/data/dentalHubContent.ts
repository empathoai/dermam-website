import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const dentalHubContent: HubPageContent = {
  type: 'dental',
  seo: {
    title: 'Dental West Palm Beach | DERMA.M Skin Health',
    description: 'Servicios dentales en West Palm Beach en DERMA.M. Evaluación, limpieza, blanqueamiento y cuidado estético dental. Agenda una evaluación.',
    canonical: 'https://dermamskinhealth.com/es/dental/',
    hreflangEs: 'https://dermamskinhealth.com/es/dental/',
    hreflangEn: 'https://dermamskinhealth.com/en/dental/',
    ogImage: 'https://dermamskinhealth.com/og/dental.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach · Servicios dentales estéticos',
    headline: 'Dental en DERMA.M',
    subheadline: 'Cuidado dental estético en un entorno profesional, cómodo y personalizado.',
    ctaLabel: 'Agenda una evaluación',
    trustLine: '4.9 Google · Servicios dentales estéticos · WPB, FL',
    image: {
      src: '/assets/images/dental-office.jpg',
      alt: 'Servicio dental en DERMA.M',
      prompt: 'Premium aesthetic dental care image in a bright ivory clinical wellness room, calm patient smiling subtly in dental chair, professional dental specialist preparing consultation, pearl gray and soft sage accents, clean modern environment, not cold hospital, no tools inside mouth, no exaggerated smile, no harsh dental stock feel, premium approachable dental aesthetic photography, 16:9 horizontal.'
    }
  },
  intro: {
    stats: [
      { value: 'Personalizada', label: 'Atención' },
      { value: 'Bilingüe', label: 'Entorno' },
      { value: 'Profesional', label: 'Cuidado' }
    ],
    benefits: [
      {
        title: 'Evaluación antes de tratamiento',
        description: 'Revisamos tu caso antes de recomendar cualquier procedimiento.'
      },
      {
        title: 'Cuidado estético y funcional',
        description: 'Buscamos mejorar apariencia, comodidad y confianza.'
      },
      {
        title: 'Atención clara y profesional',
        description: 'Te explicamos opciones, proceso y próximos pasos.'
      }
    ]
  },
  featured: {
    headline: 'Nuestros servicios principales',
    subheadline: 'Cuidado dental con enfoque estético en WPB',
    items: [
      {
        id: 'evaluacion-dental',
        title: 'Evaluación Dental',
        description: 'Orientación inicial para definir el tratamiento adecuado.',
        ctaLabel: 'Primer paso',
        href: '/es/reservar',
        badge: 'Recomendado',
        image: {
          src: '/assets/images/dental-teeth.jpg',
          alt: 'Evaluación Dental',
          prompt: 'Premium dental consultation scene, specialist speaking with patient in bright ivory clinic room, tablet or mirror in hand, calm professional atmosphere, soft sage and pearl gray accents, no mouth close-up, no invasive tools, approachable dental wellness photography, 4:3 ratio.'
        }
      },
      {
        id: 'blanqueamiento',
        title: 'Blanqueamiento Dental',
        description: 'Mejora estética para una sonrisa más luminosa.',
        ctaLabel: 'Ver servicio →',
        href: '/es/blanqueamiento-dental',
        image: {
          src: '/assets/images/dental-office.jpg',
          alt: 'Blanqueamiento',
          prompt: 'Premium teeth whitening aesthetic image, calm patient in bright dental wellness room with protective setup, clean ivory and pearl gray palette, subtle soft smile, no exaggerated Hollywood smile, no harsh blue light, professional and approachable, 4:3 ratio.'
        }
      },
      {
        id: 'limpieza-dental',
        title: 'Limpieza Dental',
        description: 'Cuidado preventivo para mantener salud y frescura.',
        ctaLabel: 'Ver servicio →',
        href: '/es/limpieza-dental',
        image: {
          src: '/assets/images/dental-mouth.jpg',
          alt: 'Limpieza Dental',
          prompt: 'Premium dental cleaning consultation image, professional dental specialist preparing gentle cleaning in clean bright dental room, calm patient, no invasive close-up, no visible discomfort, ivory and soft sage aesthetic, modern and welcoming, 4:3 ratio.'
        }
      }
    ]
  },
  allGrid: {
    headline: 'Todos los servicios dentales',
    items: [
      {
        id: 'eval-grid',
        title: 'Evaluación Dental',
        category: 'Diagnóstico',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        image: { src: '/assets/images/dental-teeth.jpg', alt: 'Evaluación', prompt: 'Dental eval' }
      },
      {
        id: 'limpieza-grid',
        title: 'Limpieza Dental',
        category: 'Prevención',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-mouth.jpg', alt: 'Limpieza', prompt: 'Dental cleaning' }
      },
      {
        id: 'blanqueamiento-grid',
        title: 'Blanqueamiento Dental',
        category: 'Estética',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-office.jpg', alt: 'Blanqueamiento', prompt: 'Whitening' }
      },
      {
        id: 'sonrisa-grid',
        title: 'Diseño de Sonrisa',
        category: 'Transformación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-veneers.jpg', alt: 'Diseño Sonrisa', prompt: 'Smile design' }
      },
      {
        id: 'carillas-grid',
        title: 'Carillas',
        category: 'Estética avanzada',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-veneers.jpg', alt: 'Carillas', prompt: 'Veneers' }
      },
      {
        id: 'preventivo',
        title: 'Cuidado Preventivo',
        category: 'Salud oral',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-mouth.jpg', alt: 'Cuidado', prompt: 'Oral health' }
      },
      {
        id: 'consulta-estetica',
        title: 'Consulta Estética',
        category: 'Orientación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/dental-teeth.jpg', alt: 'Consulta', prompt: 'Aesthetic consult' }
      }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre servicios dentales',
    items: [
      {
        question: '¿Necesito evaluación antes de un tratamiento dental?',
        answer: 'Sí. Una evaluación inicial nos permite conocer el estado de tu salud oral y recomendarte el procedimiento que mejor se adapte a tus necesidades estéticas y funcionales.'
      },
      {
        question: '¿Qué servicios dentales ofrecen?',
        answer: 'Ofrecemos limpiezas profesionales, blanqueamiento, evaluaciones diagnósticas y orientación estética para mejoras en la sonrisa.'
      },
      {
        question: '¿Atienden en español e inglés?',
        answer: 'Sí, somos un centro bilingüe. Todo nuestro personal está capacitado para explicarte los procedimientos en el idioma que prefieras.'
      },
      {
        question: '¿El blanqueamiento dental duele?',
        answer: 'Puede generar una sensibilidad temporal en algunos pacientes, pero usamos protocolos y productos diseñados para minimizar cualquier molestia durante y después del tratamiento.'
      },
      {
        question: '¿Cuánto dura una limpieza dental?',
        answer: 'Generalmente toma entre 45 y 60 minutos, dependiendo del estado actual de limpieza y si se requieren limpiezas profundas adicionales.'
      },
      {
        question: '¿Puedo agendar por WhatsApp?',
        answer: '¡Por supuesto! Es una de las formas más rápidas de consultar disponibilidad y agendar tu evaluación dental.'
      },
      {
        question: '¿Qué debo llevar a mi primera cita?',
        answer: 'Solo tu identificación y, si cuentas con radiografías recientes de otros centros, puedes traerlas para complementar nuestra evaluación diagnóstica.'
      },
      {
        question: '¿Los precios se muestran en el sitio?',
        answer: 'Los precios pueden variar según la complejidad del caso. Por eso priorizamos la evaluación inicial para darte un presupuesto exacto y por escrito.'
      }
    ]
  },
  socialProof: {
    headline: 'Sonrisas que confían en DERMA.M',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'Excelente atención. Me explicaron todo con mucha paciencia y el resultado del blanqueamiento fue genial.',
        author: 'Ricardo V.',
        role: 'Blanqueamiento Dental',
        isPlaceholder: true
      },
      {
        quote: 'Un ambiente muy tranquilo y profesional. Hacen que la visita sea una experiencia agradable.',
        author: 'Monica F.',
        role: 'Limpieza Dental',
        isPlaceholder: true
      },
      {
        quote: 'Muy detallistas y profesionales. Recomiendo DERMA.M para cualquier servicio dental.',
        author: 'Gabriel T.',
        role: 'Evaluación Dental',
        isPlaceholder: true
      }
    ]
  },
  finalCTA: {
    headline: 'Agenda una evaluación dental',
    description: 'Cuéntanos qué necesitas y te orientamos sobre el tratamiento adecuado.',
    primaryCTA: 'Agenda una evaluación',
    secondaryCTA: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, quiero información sobre servicios dentales en DERMA.M.',
    image: {
      src: '/assets/images/dental-office.jpg',
      alt: 'Sonrisa DERMA.M',
      prompt: 'Clean bright dental wellness scene, ivory palette, minimalist.'
    }
  }
};
