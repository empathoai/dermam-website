import { HubPageContent } from '../types/hub';

import { siteConfig } from './siteConfig';



export const dentalHubContent: HubPageContent = {

  type: 'dental',

  catalogSections: [
    {
      id: 'blanqueamiento-dental-estetico',
      eyebrow: '01 · Estética',
      title: 'Blanqueamiento Dental Estético',
      description: 'Recupera el blanco natural de tu sonrisa con un tratamiento seguro, rápido y sin sensibilidad. Aclara varios tonos del esmalte en una sola sesión, devolviéndote una sonrisa más brillante, juvenil y segura.',
      idealFor: [
        'Ayuda a aclarar el tono del esmalte',
        'Sonrisa más brillante',
        'Tratamiento rápido',
        'Enfoque estético profesional'
      ],
      treatments: [
        'Blanqueamiento Dental Estético'
      ],
      primaryCta: {
        label: 'Más información',
        href: '/es/blanqueamiento-dental'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'limpieza-dental-profesional',
      eyebrow: '02 · Higiene',
      title: 'Limpieza Dental Profesional',
      description: 'El primer paso hacia una sonrisa saludable y radiante. Eliminamos sarro, placa bacteriana y manchas superficiales con técnicas suaves y efectivas. Ayuda a prevenir enfermedades bucales y deja tu sonrisa visiblemente más limpia, fresca y cuidada.',
      idealFor: [
        'Elimina sarro y placa bacteriana',
        'Ayuda con manchas superficiales',
        'Sonrisa más limpia y fresca',
        'Base para tratamientos dentales estéticos'
      ],
      treatments: [
        'Limpieza Dental Profesional'
      ],
      primaryCta: {
        label: 'Más información',
        href: '/es/limpieza-dental'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    }
  ],

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

    headline: 'Tratamientos dentales estéticos',
    accentWord: 'estéticos',
    accentClassName: 'text-left pr-0 pl-[0.18em] mt-[0.06em] md:text-right md:pl-0 md:pr-[1.12em] md:-mt-[0.12em]',

    subheadline: 'Cuidado dental estético en un entorno profesional, cómodo y personalizado.',

    ctaLabel: 'Agenda una evaluación',

    trustLine: '4.9 Google · Servicios dentales estéticos · WPB, FL',

    image: {

      src: '/assets/treatments/dental/hero.jpg',

      alt: 'Servicio dental en DERMA.M',

      prompt: 'Premium aesthetic dental care image in a bright ivory clinical wellness room, calm patient smiling subtly in dental chair, professional dental specialist preparing consultation, pearl gray and soft sage accents, clean modern environment, not cold hospital, no tools inside mouth, no exaggerated smile, no harsh dental stock feel, premium approachable dental aesthetic photography, 16:9 horizontal.'

    }

  },

  intro: {
    eyebrow: 'Guía dental estética',
    headline: 'Elige según el objetivo de tu sonrisa',
    body: 'Organizamos los servicios dentales estéticos por limpieza y blanqueamiento profesional.',
    stats: [],
    chips: [
      { label: 'Blanqueamiento', targetId: '#blanqueamiento-dental-estetico' },
      { label: 'Limpieza profesional', targetId: '#limpieza-dental-profesional' }
    ]
  },

  featured: {
    headline: 'Nuestros servicios principales',
    subheadline: 'Cuidado dental con enfoque estético en WPB',
    items: [
      {
        id: 'blanqueamiento-dental-estetico',
        title: 'Blanqueamiento Dental Estético',
        description: 'Recupera el blanco natural de tu sonrisa con un tratamiento seguro, rápido y sin sensibilidad.',
        ctaLabel: 'Ver servicio →',
        href: '/es/blanqueamiento-dental',
        image: {
          src: '/assets/treatments/dental/hero.jpg',
          alt: 'Blanqueamiento Dental Estético'
        }
      },
      {
        id: 'limpieza-dental-profesional',
        title: 'Limpieza Dental Profesional',
        description: 'El primer paso hacia una sonrisa saludable y radiante, eliminando sarro y placa.',
        ctaLabel: 'Ver servicio →',
        href: '/es/limpieza-dental',
        image: {
          src: '/assets/treatments/dental/cta.jpg',
          alt: 'Limpieza Dental Profesional'
        }
      }
    ]
  },

  allGrid: {
    headline: 'Todos los servicios dentales',
    items: [
      {
        id: 'blanqueamiento-dental-estetico-grid',
        title: 'Blanqueamiento Dental Estético',
        category: 'Estética',
        ctaLabel: 'Ver más →',
        href: '/es/blanqueamiento-dental',
        image: { src: '/assets/treatments/dental/hero.jpg', alt: 'Blanqueamiento Dental Estético' }
      },
      {
        id: 'limpieza-dental-profesional-grid',
        title: 'Limpieza Dental Profesional',
        category: 'Higiene',
        ctaLabel: 'Ver más →',
        href: '/es/limpieza-dental',
        image: { src: '/assets/treatments/dental/cta.jpg', alt: 'Limpieza Dental Profesional' }
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
        role: 'Limpieza Dental',
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

      src: '/assets/treatments/dental/cta.jpg',

      alt: 'Sonrisa DERMA.M',

      prompt: 'Clean bright dental wellness scene, ivory palette, minimalist.'

    }

  }

};

