import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const laserLightHubContent: HubPageContent = {
  type: 'laser-light',
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
    headline: 'Tratamientos Láser y Luz en DERMA.M',
    subheadline: 'Tecnología estética para manchas, textura, luminosidad y rejuvenecimiento de la piel.',
    ctaLabel: 'Evalúa tu piel — gratis',
    trustLine: '4.9 Google · Tecnología avanzada · WPB, FL',
    image: {
      src: '/assets/images/laser-device.jpg',
      alt: 'Láser y luz en DERMA.M',
      prompt: 'Premium aesthetic laser and light treatment room, modern skin technology device in bright ivory clinical wellness space, soft pearl gray and sage accents, professional aesthetic specialist preparing treatment, calm patient with protective eyewear, no bright neon beams, no harsh hospital feeling, no dramatic sci-fi light, high-end medspa photography, clean and precise, 16:9 horizontal.'
    }
  },
  intro: {
    stats: [
      { value: 'Tecnología', label: 'Avanzada' },
      { value: 'Protocolos', label: 'Personalizados' },
      { value: 'Evaluación', label: 'Antes de iniciar' }
    ],
    benefits: [
      {
        title: 'Tecnología con criterio profesional',
        description: 'No usamos aparatología sin antes entender tu piel.'
      },
      {
        title: 'Protocolos según objetivo',
        description: 'Manchas, textura, luminosidad o rejuvenecimiento requieren enfoques distintos.'
      },
      {
        title: 'Seguridad y seguimiento',
        description: 'Cuidamos la preparación, aplicación y post-tratamiento.'
      }
    ]
  },
  featured: {
    headline: 'Nuestros tratamientos principales',
    subheadline: 'Los protocolos más solicitados en DERMA.M West Palm Beach',
    items: [
      {
        id: 'ipl',
        title: 'IPL / Luz Pulsada',
        description: 'Ayuda a mejorar manchas, tono irregular y luminosidad.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        badge: 'Más solicitado',
        image: {
          src: '/assets/images/laser-hair.jpg',
          alt: 'IPL',
          prompt: 'Premium IPL light treatment image, aesthetic specialist using modern IPL device near patient’s cheek, patient wearing protective eyewear, clean ivory room, pearl gray and sage accents, no harsh flash, no redness, no discomfort, professional medspa photography, 4:3 ratio.'
        }
      },
      {
        id: 'laser-facial',
        title: 'Láser Facial',
        description: 'Protocolos para textura, manchas y renovación de piel.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: {
          src: '/assets/images/laser-device.jpg',
          alt: 'Láser Facial',
          prompt: 'Premium facial laser treatment image, modern aesthetic laser handpiece near calm patient’s face, protective eyewear, clean ivory medspa room, soft clinical light, no redness, no pain, no sci-fi glow, elegant technical precision, 4:3 ratio.'
        }
      },
      {
        id: 'rf-fraccionada',
        title: 'Radiofrecuencia Fraccionada',
        description: 'Estimulación de colágeno para firmeza y textura.',
        ctaLabel: 'Ver tratamiento →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: {
          src: '/assets/images/consultation-room.jpg',
          alt: 'RF Fraccionada',
          prompt: 'Premium fractional radiofrequency facial treatment image, aesthetic device applied gently to jawline or cheek, calm patient, white headband, ivory clinical wellness room, soft sage accents, no redness, no aggressive machine look, high-end medspa photography, 4:3 ratio.'
        }
      }
    ]
  },
  allGrid: {
    headline: 'Catálogo de tecnología lumínica',
    items: [
      {
        id: 'ipl-grid',
        title: 'IPL / Luz Pulsada',
        category: 'Pigmentación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-hair.jpg', alt: 'IPL', prompt: 'IPL' }
      },
      {
        id: 'laser-facial-grid',
        title: 'Láser Facial',
        category: 'Renovación',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-device.jpg', alt: 'Láser', prompt: 'Laser' }
      },
      {
        id: 'rf-frac-grid',
        title: 'Radiofrecuencia Fraccionada',
        category: 'Textura',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/consultation-room.jpg', alt: 'RF Fraccionada', prompt: 'RF' }
      },
      {
        id: 'rf-facial-grid',
        title: 'Radiofrecuencia Facial',
        category: 'Firmeza',
        ctaLabel: 'Ver más →',
        href: '/es/radiofrecuencia-facial',
        image: { src: '/assets/images/laser-treatment.jpg', alt: 'RF Facial', prompt: 'RF' }
      },
      {
        id: 'evefus',
        title: 'Evefus 10',
        category: 'Tecnología coreana',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/treatments/peel-treatment.jpg', alt: 'Evefus', prompt: 'Evefus' }
      },
      {
        id: 'plasma-frio',
        title: 'Plasma Frío',
        category: 'Regeneración',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/facial-massage.jpg', alt: 'Plasma', prompt: 'Cold Plasma' }
      },
      {
        id: 'oxigeno-grid',
        title: 'Oxigenoterapia Facial',
        category: 'Luminosidad',
        ctaLabel: 'Ver más →',
        href: '/es/oxigenoterapia-facial',
        image: { src: '/assets/images/facial-scrub.jpg', alt: 'Oxígeno', prompt: 'Oxygen' }
      },
      {
        id: 'carbox-face',
        title: 'Carboxiterapia Facial',
        category: 'Vitalidad',
        ctaLabel: 'Ver más →',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/skin-therapy.jpg', alt: 'Carbox', prompt: 'Carboxy' }
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
        role: 'Láser Facial',
        isPlaceholder: true
      },
      {
        quote: 'Resultados reales y un trato muy profesional. La evaluación previa fue clave.',
        author: 'Clara S.',
        role: 'Radiofrecuencia',
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
      src: '/assets/images/laser-device.jpg',
      alt: 'Tecnología DERMA.M',
      prompt: 'Clean aesthetic technology scene, ivory and pearl gray, soft lighting.'
    }
  }
};
