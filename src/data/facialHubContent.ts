import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const facialHubContent: HubPageContent = {
  type: 'facial',
  seo: {
    title: 'Tratamientos Faciales West Palm Beach | DERMA.M',
    description: 'Tratamientos faciales en West Palm Beach con diagnóstico personalizado. PRF, limpieza facial, microneedling, manchas y acné. Evalúa tu piel gratis.',
    canonical: 'https://dermamskinhealth.com/es/tratamientos-faciales/',
    hreflangEs: 'https://dermamskinhealth.com/es/tratamientos-faciales/',
    hreflangEn: 'https://dermamskinhealth.com/en/facial-treatments/',
    ogImage: 'https://dermamskinhealth.com/og/tratamientos-faciales.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach · Miami · MedSpa Certificado',
    headline: 'Tratamientos Faciales en DERMA.M',
    subheadline: 'Protocolos profesionales para cada tipo de piel. Diagnóstico personalizado antes de cualquier tratamiento.',
    ctaLabel: 'Evalúa tu piel — gratis',
    trustLine: '4.9 Google · MedSpa Certificado · Bilingüe ES/EN',
    image: {
      src: '/assets/images/laser-treatment.jpg',
      alt: 'Tratamiento facial en DERMA.M',
      prompt: 'Bright premium aesthetics facial treatment hero image, calm woman receiving a gentle facial treatment in a clean ivory treatment room, white headband, luminous realistic skin, soft sage and pearl gray accents, warm natural light, botanical minimal decor, professional DERMA.M-style medspa environment, clinical but welcoming, no redness, no harsh tools, no aggressive procedure, no dark background, 16:9 horizontal.'
    }
  },
  intro: {
    stats: [
      { value: '10+', label: 'Años de experiencia' },
      { value: '1,000+', label: 'Pacientes atendidas' },
      { value: '100%', label: 'Diagnóstico personalizado' }
    ],
    editorialLabel: 'Diagnóstico facial profesional',
    editorialBody: 'Cada piel tiene una historia distinta. En DERMA.M evaluamos textura, luminosidad, manchas, poros y sensibilidad antes de recomendar un protocolo facial, para que tu tratamiento tenga dirección clínica y resultados medibles.',
    benefits: [
      {
        title: 'Diagnóstico antes de tratamiento',
        description: 'Evaluamos tu piel antes de recomendar cualquier protocolo. Sin suposiciones.'
      },
      {
        title: 'Protocolos profesionales certificados',
        description: 'Cada tratamiento sigue un protocolo estético validado. No improvisamos.'
      },
      {
        title: 'Resultados documentados',
        description: 'Antes y después reales de pacientes atendidas en DERMA.M West Palm Beach · Miami.'
      }
    ]
  },
  featured: {
    headline: 'Nuestros tratamientos principales',
    subheadline: 'Los protocolos más solicitados en DERMA.M West Palm Beach · Miami',
    items: [
      {
        id: 'prf',
        title: 'Plasma Rico en Plaquetas y Fibrina',
        description: 'Regeneración facial avanzada desde la primera sesión.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/plasma-rico-en-plaquetas-west-palm-beach',
        badge: 'Más solicitado',
        image: {
          src: '/assets/images/hero-prf.jpg',
          alt: 'Tratamiento PRF'
        }
      },
      {
        id: 'limpieza-profunda',
        title: 'Limpieza Facial Profunda',
        description: 'El primer paso para conocer y cuidar tu piel.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/limpieza-facial-profunda',
        badge: 'Ideal para empezar',
        image: {
          src: '/assets/treatments/limpieza-facial/hero-deep-facial.jpg',
          alt: 'Limpieza Facial Profunda'
        }
      },
      {
        id: 'microneedling',
        title: 'Microneedling',
        description: 'Textura, poros y cicatrices de acné con resultados progresivos.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/microneedling',
        image: {
          src: '/assets/treatments/microneedling/hero.jpg',
          alt: 'Tratamiento Microneedling'
        }
      }
    ]
  },
  allGrid: {
    headline: 'Todos nuestros tratamientos faciales',
    items: [
      {
        id: 'limpieza-grid',
        title: 'Limpieza Facial Profunda',
        category: 'Limpieza centro',
        ctaLabel: 'Ver más →',
        href: '/es/limpieza-facial-profunda',
        image: {
          src: '/assets/treatments/limpieza-facial/hero-deep-facial.jpg',
          alt: 'Limpieza Facial'
        }
      },
      {
        id: 'hidrofacial',
        title: 'Hidrofacial',
        category: 'Hidratación',
        ctaLabel: 'Ver más →',
        href: '/es/hidrofacial',
        image: {
          src: '/assets/images/laser-machine.jpg',
          alt: 'Hidrofacial',
          prompt: 'Premium hydrofacial skincare treatment image, soft hydrating facial device gently used on client’s cheek, white headband, luminous skin, clean ivory room, watery blue-green and sage accents, luxury medspa photography, no redness, no harsh suction close-up, 4:3 ratio.'
        }
      },
      {
        id: 'peel-coreano',
        title: 'Peel Coreano',
        category: 'Exfoliación',
        ctaLabel: 'Ver más →',
        href: '/es/peel-coreano',
        image: {
          src: '/assets/treatments/peel-treatment.jpg',
          alt: 'Peel Coreano',
          prompt: 'Premium Korean peel skincare image, aesthetic specialist applying a gentle transparent peel solution with soft brush, client calm, luminous skin, clean white linens, pastel sage and ivory room, no peeling skin, no irritation, elegant clinical spa photography, 4:3 ratio.'
        }
      },
      {
        id: 'oxigenoterapia',
        title: 'Oxigenoterapia Facial',
        category: 'Vitalidad',
        ctaLabel: 'Ver más →',
        href: '/es/oxigenoterapia-facial',
        image: {
          src: '/assets/images/facial-scrub.jpg',
          alt: 'Oxigenoterapia',
          prompt: 'Premium oxygen facial therapy image, soft oxygen infusion device near client’s face, clean ivory treatment room, white headband, gentle light, pastel sage accents, calm professional medspa atmosphere, no hospital equipment feeling, 4:3 ratio.'
        }
      },
      {
        id: 'radiofrecuencia',
        title: 'Radiofrecuencia Facial',
        category: 'Firmeza',
        ctaLabel: 'Ver más →',
        href: '/es/radiofrecuencia-facial',
        image: {
          src: '/assets/images/consultation-room.jpg',
          alt: 'Radiofrecuencia',
          prompt: 'Premium radiofrequency facial treatment image, aesthetic device gently applied to jawline or cheek, client calm, clean ivory medspa room, warm natural light, soft sage accents, no redness, no pain, no aggressive machine look, 4:3 ratio.'
        }
      },
      {
        id: 'acne',
        title: 'Tratamiento de Acné',
        category: 'Cuidado clínico',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        image: {
          src: '/assets/images/facial-care.jpg',
          alt: 'Tratamiento Acné',
          prompt: 'Premium acne care facial consultation image, aesthetic specialist examining skin gently under soft clinical light, calm patient with natural skin texture, no graphic acne close-up, no inflamed skin dramatization, clean ivory and sage clinic environment, professional and reassuring, 4:3 ratio.'
        }
      },
      {
        id: 'manchas',
        title: 'Tratamiento de Manchas',
        category: 'Despigmentación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        image: {
          src: '/assets/images/skin-therapy.jpg',
          alt: 'Tratamiento Manchas',
          prompt: 'Premium facial pigmentation treatment consultation image, aesthetic specialist reviewing skin tone with client using mirror or tablet, warm ivory room, sage accents, natural skin texture, no harsh before-after, no dramatic pigmentation close-up, professional skincare clinic atmosphere, 4:3 ratio.'
        }
      },
      {
        id: 'rejuvenecimiento',
        title: 'Rejuvenecimiento / Lifting',
        category: 'Antiedad',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        image: {
          src: '/assets/images/skincare-products.jpg',
          alt: 'Rejuvenecimiento',
          prompt: 'Elegant woman with luminous skin, ivory medspa background, soft focus.'
        }
      }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre tratamientos faciales',
    items: [
      {
        question: '¿Cómo sé qué tratamiento facial necesito?',
        answer: 'Lo ideal es empezar con una evaluación gratuita. Nuestros especialistas analizarán tu tipo de piel, necesidades y objetivos para recomendarte el protocolo más efectivo.'
      },
      {
        question: '¿Cuál es el mejor tratamiento para empezar?',
        answer: 'Recomendamos la Limpieza Facial Profunda como punto de partida. Permite limpiar impurezas y realizar un análisis real de tu piel bajo condiciones centros.'
      },
      {
        question: '¿Puedo combinar varios tratamientos faciales?',
        answer: 'Sí. De hecho, muchos de nuestros protocolos ganan efectividad cuando se combinan, como la radiofrecuencia con oxigenoterapia para mejorar firmeza y luminosidad.'
      },
      {
        question: '¿Cada cuánto debo hacerme un tratamiento facial?',
        answer: 'Para mantenimiento preventivo, una vez al mes es lo ideal (siguiendo el ciclo de renovación celular). Sin embargo, esto depende de tu tipo de piel y el tratamiento específico.'
      },
      {
        question: '¿Qué tratamiento ayuda con manchas?',
        answer: 'Contamos con protocolos de peelings químicos, microneedling y láser especializados en despigmentación, siempre adaptados a tu fototipo de piel.'
      },
      {
        question: '¿Qué tratamiento ayuda con acné?',
        answer: 'Desde limpiezas centros profundas hasta carboxiterapia y luz pulsada, diseñamos planes para controlar brotes activos y tratar secuelas cicatriciales.'
      },
      {
        question: '¿Los tratamientos faciales tienen tiempo de recuperación?',
        answer: 'La mayoría no requieren tiempo de inactividad. Algunos, como el Microneedling o peelings intensos, pueden generar un enrojecimiento leve por 24-48 horas.'
      },
      {
        question: '¿Necesito evaluación antes de elegir?',
        answer: 'Es altamente recomendado. En DERMA.M priorizamos la seguridad y los resultados, por lo que una evaluación diagnóstica asegura que recibas lo que tu piel realmente necesita.'
      }
    ]
  },
  socialProof: {
    headline: 'Pacientes que empezaron con un diagnóstico',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'Me explicaron qué necesitaba mi piel antes de recomendarme cualquier tratamiento.',
        author: 'Carolina M.',
        role: 'Diagnóstico Facial',
        isPlaceholder: true
      },
      {
        quote: 'DERMA.M cambió la forma en que entiendo mi piel.',
        author: 'Valeria R.',
        role: 'Facial',
        isPlaceholder: true
      },
      {
        quote: 'No sentí presión. Me orientaron con mucha claridad.',
        author: 'Andrea S.',
        role: 'Evaluación de piel',
        isPlaceholder: true
      }
    ]
  },
  finalCTA: {
    headline: 'Empieza con una evaluación de piel',
    description: 'Si no sabes qué tratamiento necesitas, el primer paso es evaluar tu piel y recibir una recomendación profesional.',
    primaryCTA: 'Evalúa tu piel — gratis',
    secondaryCTA: 'Escríbenos por WhatsApp',
    image: {
      src: '/assets/images/laser-treatment.jpg',
      alt: 'Cuidado facial DERMA.M',
      prompt: 'Soft premium facial skincare still-life, serum bottle, white towel, ceramic tray, sage leaves, watery blue-green accent, warm pearl-gray background, calm clean skin wellness mood, lots of negative space for CTA text, no people, no dark background, 16:9 horizontal.'
    },
    whatsappMessage: 'Hola, quiero información sobre tratamientos faciales en DERMA.M.'
  }
};
