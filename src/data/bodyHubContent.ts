import { HubPageContent } from '../types/hub';
import { siteConfig } from './siteConfig';

export const bodyHubContent: HubPageContent = {
  type: 'body',
  seo: {
    title: 'Tratamientos Corporales West Palm Beach | DERMA.M',
    description: 'Tratamientos corporales en West Palm Beach. Post-operatorio, drenaje linfÃ¡tico, cavitaciÃ³n y protocolos personalizados. EvalÃºa tu caso en DERMA.M.',
    canonical: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEs: 'https://dermamskinhealth.com/es/tratamientos-corporales/',
    hreflangEn: 'https://dermamskinhealth.com/en/body-treatments/',
    ogImage: 'https://dermamskinhealth.com/og/tratamientos-corporales.jpg'
  },
  hero: {
    eyebrow: 'West Palm Beach Â· MedSpa Certificado',
    headline: 'Tratamientos Corporales en DERMA.M',
    subheadline: 'Protocolos corporales clÃ­nicos. Desde post-operatorio hasta remodelaciÃ³n corporal.',
    ctaLabel: 'EvalÃºa tu caso â€” gratis',
    trustLine: '4.9 Google Â· Protocolos corporales Â· BilingÃ¼e ES/EN',
    image: {
      src: '/assets/treatments/tratamientos-corporales/hero.jpg',
      alt: 'Tratamiento corporal en DERMA.M',
      prompt: 'Bright premium body treatment room for a premium aesthetics center, calm patient receiving professional body wellness treatment with modest coverage, white linens, soft sage and ivory palette, warm natural light, clinical wellness atmosphere, professional hands, no surgery visuals, no bruising, no explicit nudity, no harsh equipment, high-end medspa photography, 16:9 horizontal.'
    }
  },
  intro: {
    stats: [
      { value: '10+', label: 'AÃ±os de experiencia' },
      { value: '1,000+', label: 'Pacientes atendidas' },
      { value: '100%', label: 'DiagnÃ³stico personalizado' }
    ],
    editorialLabel: 'Cuidado corporal con criterio',
    editorialBody: 'Los tratamientos corporales no deberÃ­an sentirse genÃ©ricos. Revisamos tu objetivo, tu momento del proceso y la respuesta de tu cuerpo para orientar un protocolo realista, seguro y profesional.',
    benefits: [
      {
        title: 'EvaluaciÃ³n antes de protocolo',
        description: 'Cada cuerpo y cada recuperaciÃ³n requieren una estrategia distinta.'
      },
      {
        title: 'Protocolos corporales especializados',
        description: 'Trabajamos con tÃ©cnicas adaptadas a tu objetivo y momento del proceso.'
      },
      {
        title: 'Cuidado profesional y seguimiento',
        description: 'Te orientamos antes, durante y despuÃ©s del tratamiento.'
      }
    ]
  },
  featured: {
    headline: 'Nuestros tratamientos principales',
    subheadline: 'Los protocolos mÃ¡s solicitados en DERMA.M West Palm Beach',
    items: [
      {
        id: 'post-op',
        title: 'Post-Operatorio',
        description: 'Drenaje linfÃ¡tico especializado para recuperaciÃ³n post-cirugÃ­a.',
        ctaLabel: 'Ver tratamiento â†’',
        href: '/es/postoperatorio-west-palm-beach',
        badge: 'MÃ¡s solicitado',
        image: {
          src: '/assets/treatments/postoperatorio/hero.jpg',
          alt: 'Post-Operatorio'
        }
      },
      {
        id: 'cavitacion',
        title: 'CavitaciÃ³n',
        description: 'ReducciÃ³n de medidas localizada.',
        ctaLabel: 'Ver tratamiento â†’',
        href: '/es/cavitacion',
        image: {
          src: '/assets/images/body-massage-oil.jpg',
          alt: 'CavitaciÃ³n',
          prompt: 'Premium non-invasive body contouring treatment image, aesthetic device applied gently over modestly framed body area, clean ivory room, soft sage accents, calm professional medspa atmosphere, no pain, no redness, no explicit nudity, 4:3 ratio.'
        }
      },
      {
        id: 'estrias-celulitis',
        title: 'EstrÃ­as y Celulitis',
        description: 'Protocolos combinados de mejora corporal.',
        ctaLabel: 'Ver tratamiento â†’',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: {
          src: '/assets/images/body-stretching.jpg',
          alt: 'EstrÃ­as y Celulitis',
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
        category: 'ReafirmaciÃ³n',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/radiofrecuencia-corporal',
        image: { src: '/assets/images/consultation-room.jpg', alt: 'RF Corporal', prompt: 'Body RF' }
      },
      {
        id: 'drenaje-corp',
        title: 'Drenaje LinfÃ¡tico Corporal',
        category: 'DesinflamaciÃ³n',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/drenaje-linfatico-corporal',
        image: { src: '/assets/images/body-massage.jpg', alt: 'Drenaje Corporal', prompt: 'Drainage' }
      },
      {
        id: 'cavitacion-grid',
        title: 'CavitaciÃ³n',
        category: 'ReducciÃ³n',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/cavitacion',
        image: { src: '/assets/images/body-massage-oil.jpg', alt: 'CavitaciÃ³n', prompt: 'Cavitation' }
      },
      {
        id: 'postop-grid',
        title: 'Post-Operatorio',
        category: 'RecuperaciÃ³n',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/postoperatorio-west-palm-beach',
        image: { src: '/assets/treatments/postoperatorio/hero.jpg', alt: 'Post-Operatorio' }
      },
      {
        id: 'estrias-grid',
        title: 'EstrÃ­as y Celulitis',
        category: 'Textura',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/body-stretching.jpg', alt: 'EstrÃ­as', prompt: 'Stretch marks' }
      },
      {
        id: 'remodelacion',
        title: 'RemodelaciÃ³n Corporal',
        category: 'Contorno',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/skincare-products.jpg', alt: 'RemodelaciÃ³n', prompt: 'Body contour' }
      },
      {
        id: 'maderoterapia',
        title: 'Maderoterapia',
        category: 'Firmeza',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/laser-treatment.jpg', alt: 'Maderoterapia', prompt: 'Wood therapy' }
      },
      {
        id: 'reduccion',
        title: 'ReducciÃ³n de Medidas',
        category: 'PÃ©rdida localizada',
        ctaLabel: 'Ver mÃ¡s â†’',
        href: '/es/reservar',
        isPlaceholderRoute: true,
        image: { src: '/assets/images/skin-therapy.jpg', alt: 'ReducciÃ³n', prompt: 'Weight loss' }
      }
    ]
  },
  faqs: {
    headline: 'Preguntas frecuentes sobre tratamientos corporales',
    items: [
      {
        question: 'Â¿CÃ³mo sÃ© quÃ© tratamiento corporal necesito?',
        answer: 'Cada cuerpo es Ãºnico. El primer paso es una evaluaciÃ³n profesional donde analizaremos tus objetivos y el estado actual de los tejidos para diseÃ±ar un plan a medida.'
      },
      {
        question: 'Â¿El post-operatorio se agenda igual que otros tratamientos?',
        answer: 'SÃ­, pero recomendamos agendarlo con anticipaciÃ³n a tu cirugÃ­a o inmediatamente despuÃ©s para asegurar la continuidad del drenaje linfÃ¡tico en los dÃ­as crÃ­ticos de recuperaciÃ³n.'
      },
      {
        question: 'Â¿CuÃ¡ndo debo empezar drenaje despuÃ©s de cirugÃ­a?',
        answer: 'Generalmente se recomienda empezar 24 a 48 horas despuÃ©s de la cirugÃ­a, siempre bajo la autorizaciÃ³n de tu cirujano y siguiendo nuestros protocolos profesionales.'
      },
      {
        question: 'Â¿Los tratamientos corporales duelen?',
        answer: 'La mayorÃ­a son indoloros y relajantes, como el drenaje linfÃ¡tico. Otros pueden generar una sensaciÃ³n de calor o presiÃ³n, pero siempre dentro de un umbral cÃ³modo y seguro.'
      },
      {
        question: 'Â¿CuÃ¡ntas sesiones necesito?',
        answer: 'Depende del objetivo. Para remodelaciÃ³n o reducciÃ³n, se suelen recomendar ciclos de 6 a 10 sesiones. En post-operatorio, la frecuencia es mayor durante las primeras semanas.'
      },
      {
        question: 'Â¿Puedo combinar tratamientos corporales?',
        answer: 'Absolutamente. Combinar tecnologÃ­as como cavitaciÃ³n con radiofrecuencia suele potenciar los resultados tanto en reducciÃ³n como en firmeza.'
      },
      {
        question: 'Â¿Los resultados son inmediatos?',
        answer: 'En tratamientos como el drenaje linfÃ¡tico verÃ¡s desinflamaciÃ³n inmediata. En reducciÃ³n de medidas o mejora de textura (celulitis), los resultados se vuelven notorios a partir de la 3Âª o 4Âª sesiÃ³n.'
      },
      {
        question: 'Â¿Necesito evaluaciÃ³n antes de empezar?',
        answer: 'SÃ­. En DERMA.M no aplicamos protocolos estÃ¡ndar. Una evaluaciÃ³n previa garantiza que el tratamiento sea el correcto para tu caso especÃ­fico.'
      }
    ]
  },
  socialProof: {
    headline: 'Pacientes que confiaron en nuestro cuidado corporal',
    googleRating: '4.9',
    googleLink: siteConfig.mapsUrl,
    items: [
      {
        quote: 'La recuperaciÃ³n de mi cirugÃ­a fue mucho mÃ¡s rÃ¡pida gracias a sus masajes post-operatorios.',
        author: 'Laura P.',
        role: 'Post-Operatorio',
        isPlaceholder: true
      },
      {
        quote: 'Me ayudaron a recuperar mi confianza despuÃ©s de mi embarazo.',
        author: 'Marta G.',
        role: 'RemodelaciÃ³n Corporal',
        isPlaceholder: true
      },
      {
        quote: 'AtenciÃ³n profesional y resultados reales. Muy recomendadas.',
        author: 'Sofia D.',
        role: 'Drenaje LinfÃ¡tico',
        isPlaceholder: true
      }
    ]
  },
  finalCTA: {
    headline: 'EvalÃºa tu caso corporal',
    description: 'CuÃ©ntanos tu objetivo y te orientamos sobre el protocolo mÃ¡s adecuado para ti.',
    primaryCTA: 'EvalÃºa tu caso â€” gratis',
    secondaryCTA: 'EscrÃ­benos por WhatsApp',
    whatsappMessage: 'Hola, quiero informaciÃ³n sobre tratamientos corporales en DERMA.M.',
    image: {
      src: '/assets/treatments/tratamientos-corporales/cta.jpg',
      alt: 'Cuidado corporal DERMA.M',
      prompt: 'Minimal premium body care scene, ivory palette, sage accents.'
    }
  }
};
