import { IVTherapyPageContent } from '../types/ivTherapy';

export const ivTherapyContent: IVTherapyPageContent = {
  hero: {
    eyebrow: 'West Palm Beach · DERMA.M',
    headline: 'IV Therapy — Nutrición intravenosa',
    subheadline: 'Vitaminas y nutrientes directamente en tu torrente sanguíneo. Apoyo rápido para hidratación, energía y bienestar.',
    ctaLabel: 'Ver los kits disponibles',
    image: {
      src: '/assets/images/hero-iv-therapy.jpg',
      alt: 'IV Therapy en DERMA.M West Palm Beach',
      prompt: 'Bright premium IV therapy wellness editorial image for a medical aesthetics clinic, elegant IV bag on a clean stand with soft colorful vitamin-infused fluid, fresh citrus fruit, berries, cucumber water, folded white towels, warm ivory treatment room, pastel sage and pearl gray accents, clean clinical wellness atmosphere, vibrant colors only from fruits and IV fluid, premium medspa photography, no hospital feeling, no sick patient, no aggressive needle close-up, no blood, no dark background, 16:9 horizontal, main subject centered for mobile crop safety.'
    }
  },
  education: {
    title: '¿Por qué IV y no pastillas?',
    copyOral: 'Absorción oral: Una parte de los nutrientes se pierde durante el proceso digestivo.',
    copyIV: 'Absorción IV: Los nutrientes entran directamente al torrente sanguíneo para mayor disponibilidad.',
    stats: [
      { label: 'Administración directa', value: '100%*' },
      { label: 'Minutos por sesión', value: '30–45' },
      { label: 'Kits disponibles', value: '7' }
    ],
    image: {
      src: '/assets/treatments/iv-process.jpg',
      alt: 'Proceso de IV Therapy en DERMA.M',
      prompt: 'Premium clinical IV therapy process image, calm patient seated comfortably in a bright ivory wellness room receiving IV therapy, arm resting naturally, IV line visible but subtle, professional hands checking setup, soft sage accents, clean and reassuring clinical wellness environment, no pain expression, no blood, no hospital bed, no emergency feeling, high-end medspa photography, 4:3 ratio.'
    }
  },
  kitsSection: {
    title: 'Elige el kit para tu objetivo',
    subtitle: 'Cada kit está formulado para un objetivo específico. Nancy Nieto te orienta si no sabes cuál elegir.'
  },
  faqs: [
    {
      question: '¿Duele la colocación del IV?',
      answer: 'Es un procedimiento mínimamente invasivo. La mayoría de los pacientes solo sienten un pequeño "pinchazo" inicial, similar a cualquier toma de laboratorios. Una vez colocado, es indoloro y puedes relajarte.'
    },
    {
      question: '¿Cuánto tiempo dura una sesión?',
      answer: 'Típicamente dura entre 30 y 45 minutos, dependiendo del kit seleccionado y la velocidad de administración recomendada para tu comodidad.'
    },
    {
      question: '¿Cada cuánto tiempo puedo hacerme una sesión?',
      answer: 'Depende de tus objetivos. Algunos pacientes lo hacen semanalmente para apoyo inmunológico o energía, mientras que otros lo usan de forma ocasional para recuperación post-viaje o post-evento. Nancy Nieto evaluará tu caso.'
    },
    {
      question: '¿Tiene contraindicaciones?',
      answer: 'Sí, como cualquier terapia de apoyo. No se recomienda en personas con ciertas condiciones renales o cardíacas graves. Realizamos una evaluación breve antes de cada sesión.'
    },
    {
      question: '¿Necesito cita o puedo ir sin reserva?',
      answer: 'Recomendamos siempre reservar tu sesión para asegurar que tengamos el kit preparado y el espacio listo para tu relajación.'
    },
    {
      question: '¿Cómo sé qué kit necesito?',
      answer: 'Si te sientes deshidratado, el Quench es ideal. Si buscas claridad mental, Brainstorm es la opción. Nancy Nieto conversará contigo antes de iniciar para asegurar que el protocolo se alinee con lo que buscas.'
    },
    {
      question: '¿Puedo combinar IV Therapy con otros tratamientos?',
      answer: '¡Absolutamente! Es común recibir IV Therapy mientras realizas un tratamiento facial o corporal, maximizando tu tiempo en la clínica.'
    },
    {
      question: '¿Qué debo hacer antes de mi sesión?',
      answer: 'Recomendamos haber comido algo ligero y estar medianamente hidratado. No es necesario venir en ayunas.'
    }
  ],
  finalCTA: {
    title: '¿No sabes qué kit necesitas?',
    copy: 'Nancy Nieto te orienta y te ayuda a elegir el protocolo correcto para tu objetivo.',
    primaryCTA: {
      label: 'Reservar sesión',
      href: '/es/reservar'
    },
    secondaryCTA: {
      label: 'Consultar por WhatsApp',
      href: '#',
      whatsappMessage: 'Hola, quiero orientación sobre IV Therapy en DERMA.M.'
    },
    image: {
      src: '/assets/images/iv-final-cta.jpg',
      alt: 'Reserva tu sesión de IV Therapy',
      prompt: 'Premium IV therapy wellness still-life, elegant IV bag, folded white towel, fresh citrus, cucumber water, soft sage leaves, warm ivory background, lots of negative space for CTA text, bright clinical wellness atmosphere, no people, no needles close-up, no hospital look, 16:9 horizontal, main visual elements centered for mobile crop safety.'
    }
  },
  seo: {
    title: 'IV Therapy West Palm Beach | DERMA.M',
    description: 'IV Therapy en West Palm Beach con kits de hidratación, energía, inmunidad y bienestar. Conoce las opciones disponibles en DERMA.M.',
    canonical: 'https://dermamskinhealth.com/es/iv-therapy/',
    ogImage: 'https://dermamskinhealth.com/og/iv-therapy.jpg'
  }
};
