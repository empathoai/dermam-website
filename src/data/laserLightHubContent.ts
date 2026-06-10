import { HubPageContent } from '../types/hub';

import { siteConfig } from './siteConfig';



export const laserLightHubContent: HubPageContent = {

  type: 'laser-light',

  catalogSections: [
    {
      id: 'depilacion-laser-diodo',
      eyebrow: '01 · Depilación',
      title: 'Depilación Láser Diodo',
      description: 'Despídete del vello no deseado de forma rápida, segura y sin dolor. Utilizamos tecnología de diodo de última generación que actúa directamente sobre el folículo piloso, dejando la piel suave, libre de irritación y con resultados duraderos.',
      idealFor: [
        'Reducción progresiva del vello',
        'Piel más suave',
        'Apto para distintas zonas del cuerpo',
        'Alternativa a cera y rasuradoras'
      ],
      treatments: [
        'Depilación Láser Diodo'
      ],
      primaryCta: {
        label: 'Más información',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'ipl-luz-pulsada-intensa',
      eyebrow: '02 · Rejuvenecimiento',
      title: 'IPL – Luz Pulsada Intensa',
      description: 'Luz avanzada que transforma tu piel desde la primera sesión. Ideal para eliminar manchas solares, cerrar poros, atenuar rojeces y mejorar la textura. También estimula el colágeno, aportando un efecto de rejuvenecimiento visible y progresivo.',
      idealFor: [
        'Apoya la mejora de manchas solares',
        'Atenúa rojeces',
        'Mejora textura y poros',
        'Aporta luminosidad progresiva'
      ],
      treatments: [
        'IPL – Luz Pulsada Intensa'
      ],
      primaryCta: {
        label: 'Más información',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    },
    {
      id: 'laser-co2-fraccionado',
      eyebrow: '03 · Renovación profunda',
      title: 'Láser CO₂ Fraccionado',
      description: 'Tratamiento de renovación profunda de la piel que actúa en capas internas para mejorar arrugas, cicatrices, poros abiertos y manchas. Estimula la regeneración celular y la producción de colágeno.',
      idealFor: [
        'Mejora textura profunda',
        'Apoya cicatrices y poros abiertos',
        'Estimula colágeno',
        'Favorece renovación cutánea'
      ],
      treatments: [
        'Láser CO₂ Fraccionado'
      ],
      primaryCta: {
        label: 'Más información',
        href: '/es/reservar'
      },
      secondaryCta: {
        label: 'Escríbenos por WhatsApp',
        type: 'whatsapp'
      }
    }
  ],

  seo: {

    title: 'Láser y Luz West Palm Beach | DERMA.M',

    description: 'Tratamientos de láser y luz en West Palm Beach para manchas, textura y rejuvenecimiento. Agenda una evaluación de piel en DERMA.M.',

    canonical: 'https://dermamskinhealth.com/es/laser-y-luz/',

    hreflangEs: 'https://dermamskinhealth.com/es/laser-y-luz/',

    hreflangEn: 'https://dermamskinhealth.com/en/laser-and-light/',

    ogImage: 'https://dermamskinhealth.com/og/laser-y-luz.jpg'

  },

  hero: {

    eyebrow: 'West Palm Beach · Tecnología estética avanzada',

    headline: 'Tratamientos láser y luz',
    accentWord: 'láser y luz',

    subheadline: 'Tecnología estética para manchas, textura, luminosidad y rejuvenecimiento de la piel.',

    ctaLabel: 'Evalúa tu piel — gratis',

    trustLine: '4.9 Google · Tecnología avanzada · WPB, FL',

    image: {

      src: '/assets/treatments/laser-luz/hero.jpg',

      alt: 'Láser y luz en DERMA.M',

      prompt: 'Premium aesthetic laser and light treatment room, modern skin technology device in bright ivory clinical wellness space, soft pearl gray and sage accents, professional aesthetic specialist preparing treatment, calm patient with protective eyewear, no bright neon beams, no harsh hospital feeling, no dramatic sci-fi light, high-end medspa photography, clean and precise, 16:9 horizontal.'

    }

  },

  intro: {
    eyebrow: 'Guía de láser y luz',
    headline: 'Elige según lo que tu piel necesita',
    body: 'Organizamos los tratamientos de láser y luz por objetivo para orientar mejor tu evaluación.',
    stats: [],
    chips: [
      { label: 'Depilación láser', targetId: '#depilacion-laser-diodo' },
      { label: 'Luz pulsada', targetId: '#ipl-luz-pulsada-intensa' },
      { label: 'Láser CO2', targetId: '#laser-co2-fraccionado' }
    ]
  },

  featured: {
    headline: 'Nuestros tratamientos principales',
    subheadline: 'Los protocolos más solicitados en DERMA.M West Palm Beach',
    items: [
      {
        id: 'depilacion-laser-diodo',
        title: 'Depilación Láser Diodo',
        description: 'Despídete del vello no deseado de forma rápida, segura y sin dolor.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        badge: 'Depilación',
        image: {
          src: '/assets/images/laser-hair.jpg',
          alt: 'Depilación Láser Diodo'
        }
      },
      {
        id: 'ipl-luz-pulsada-intensa',
        title: 'IPL – Luz Pulsada Intensa',
        description: 'Luz avanzada que transforma tu piel desde la primera sesión para manchas, poros y textura.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        badge: 'Luz pulsada',
        image: {
          src: '/assets/images/laser-device.jpg',
          alt: 'IPL – Luz Pulsada Intensa'
        }
      },
      {
        id: 'laser-co2-fraccionado',
        title: 'Láser CO₂ Fraccionado',
        description: 'Tratamiento de renovación profunda de la piel para arrugas, cicatrices y manchas.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        badge: 'Láser CO₂',
        image: {
          src: '/assets/images/consultation-room.jpg',
          alt: 'Láser CO₂ Fraccionado'
        }
      }
    ]
  },

  allGrid: {
    headline: 'Catálogo de tecnología lumínica',
    items: [
      {
        id: 'depilacion-laser-diodo-grid',
        title: 'Depilación Láser Diodo',
        category: 'Depilación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-hair.jpg', alt: 'Depilación Láser Diodo' }
      },
      {
        id: 'ipl-grid',
        title: 'IPL – Luz Pulsada Intensa',
        category: 'Pigmentación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-device.jpg', alt: 'IPL – Luz Pulsada Intensa' }
      },
      {
        id: 'laser-co2-fraccionado-grid',
        title: 'Láser CO₂ Fraccionado',
        category: 'Renovación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/consultation-room.jpg', alt: 'Láser CO₂ Fraccionado' }
      }
    ]
  },

  faqs: {
    headline: 'Preguntas frecuentes sobre tecnología y luz',
    items: [
      {
        question: '¿Cómo sé si necesito láser o luz pulsada?',
        answer: 'Depende de la profundidad y tipo de manchas o afección cutánea. Realizamos una evaluación previa para determinar qué tecnología es la más eficiente para tu tipo de piel.'
      },
      {
        question: '¿Los tratamientos con láser duelen?',
        answer: 'La sensación varía según la tecnología. Algunos son totalmente indoloros, mientras que otros pueden generar un ligero pinchazo o calor. Siempre aplicamos medidas para tu total comodidad.'
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer: 'Generalmente se recomiendan de 3 a 5 sesiones para ver resultados significativos en manchas o textura, espaciadas según el protocolo específico.'
      },
      {
        question: '¿Puedo hacer láser si tengo manchas?',
        answer: 'Sí, de hecho el láser y la luz pulsada son de las herramientas más potentes para tratar hiperpigmentaciones, siempre que se elija el parámetro adecuado a tu fototipo.'
      },
      {
        question: '¿Qué cuidados debo tener después?',
        answer: 'El protector solar es no negociable. Además, solemos recomendar cremas reparadoras y evitar la exposición solar directa durante los días posteriores.'
      },
      {
        question: '¿Hay tiempo de recuperación?',
        answer: 'Muchos de nuestros protocolos son "lunchtime procedures" sin tiempo de inactividad. Algunos más intensos pueden dejar un enrojecimiento leve de 24 horas.'
      },
      {
        question: '¿Puedo combinar láser con otros tratamientos?',
        answer: 'Sí. Mezclar tecnologías con hidratación profunda o limpieza facial suele maximizar los resultados de renovación cutánea.'
      },
      {
        question: '¿Necesito evaluación antes?',
        answer: 'En tratamientos con aparatología avanzada, la evaluación es obligatoria para garantizar la seguridad de tu piel y la efectividad del protocolo.'
      }
    ]
  },

  socialProof: {
    headline: 'Resultados con tecnología de precisión',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'Mis manchas de sol mejoraron muchísimo después de solo dos sesiones de luz pulsada.',
        author: 'Elena R.',
        role: 'IPL',
        isPlaceholder: true
      },
      {
        quote: 'La tecnología que usan es de primera. Me sentí muy segura en todo momento.',
        author: 'Patricia B.',
        role: 'Depilación Láser',
        isPlaceholder: true
      },
      {
        quote: 'Resultados reales y un trato muy profesional. La evaluación previa fue clave.',
        author: 'Clara S.',
        role: 'Láser CO₂',
        isPlaceholder: true
      }
    ]
  },

  finalCTA: {

    headline: 'Evalúa tu piel antes de elegir tecnología',

    description: 'Cada piel responde distinto. Agenda una evaluación para saber qué protocolo es más adecuado para ti.',

    primaryCTA: 'Evalúa tu piel — gratis',

    secondaryCTA: 'Escríbenos por WhatsApp',

    whatsappMessage: 'Hola, quiero información sobre tratamientos de láser y luz en DERMA.M.',

    image: {

      src: '/assets/treatments/laser-luz/cta.jpg',

      alt: 'Tecnología DERMA.M',

      prompt: 'Clean aesthetic technology scene, ivory and pearl gray, soft lighting.'

    }

  }

};

