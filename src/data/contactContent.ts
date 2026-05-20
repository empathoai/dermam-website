import { ContactPageContent } from '../types/contact';
import { siteConfig } from './siteConfig';

export const contactContent: ContactPageContent = {
  hero: {
    headline: 'Contáctanos',
    subheadline: 'Estamos disponibles por WhatsApp, teléfono o formulario. Respondemos en menos de 24 horas.',
    image: {
      src: '/assets/images/contact-hero.jpg',
      alt: 'Interior de clínica DERMA.M',
      prompt: 'Bright premium medical aesthetics clinic interior, warm ivory treatment room, soft sage accents, folded white towels, calm reception or treatment area, natural light, clean professional environment, welcoming and human, botanical minimal decor, luxury clinical wellness atmosphere, no people, no hospital feeling, no dark background, no clutter, 16:9 horizontal.'
    }
  },
  channels: {
    headline: 'Canales directos',
    subheadline: 'La forma más rápida de comunicarte',
    items: [
      {
        type: 'whatsapp',
        title: 'WhatsApp',
        value: siteConfig.phone,
        helper: 'Respuesta inmediata · preferido',
        cta: 'Escribir →',
        href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola, quiero contactar a DERMA.M para recibir información.')}`,
        emphasized: true
      },
      {
        type: 'phone',
        title: 'Teléfono',
        value: siteConfig.phone,
        helper: 'Lun–Sáb · 9am–7pm EST',
        cta: 'Llamar →',
        href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`
      },
      {
        type: 'instagram',
        title: 'Instagram',
        value: '@dermamskinhealth',
        helper: 'DM · respuesta en 24h',
        cta: 'Ver perfil →',
        href: 'https://instagram.com/dermamskinhealth'
      },
      {
        type: 'visit',
        title: 'Visítanos',
        value: siteConfig.address,
        helper: `${siteConfig.city}, ${siteConfig.state} ${siteConfig.zip}`,
        cta: 'Ver mapa →',
        href: '#mapa'
      }
    ]
  },
  form: {
    headline: 'Formulario de contacto',
    subheadline: '¿Prefieres que te contactemos?',
    treatments: [
      'Evaluación gratuita',
      'Plasma Rico en Plaquetas y Fibrina',
      'Post-Operatorio',
      'Limpieza Facial Profunda',
      'Tratamientos faciales',
      'Tratamientos corporales',
      'Láser & Luz',
      'Dental',
      'Otro'
    ],
    privacyNote: 'Al enviar este formulario aceptas nuestra política de privacidad.',
    submitCTA: 'Enviar mensaje'
  },
  map: {
    address: `${siteConfig.address}, ${siteConfig.city}, ${siteConfig.state} ${siteConfig.zip}`,
    hours: [
      { day: 'Lunes – Viernes', time: '10:00 AM – 6:00 PM' },
      { day: 'Sábado', time: '10:00 AM – 2:00 PM' },
      { day: 'Domingo', time: 'Cerrado' }
    ],
    logistics: 'Estacionamiento disponible · Acceso por Dixie Hwy',
    cta: 'Ver en Google Maps',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.419088517596!2d-80.0543666236966!3d26.66724397679313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d69784ed236b%3A0xb09c53c445657593!2s5707%20S%20Dixie%20Hwy%20Suite%20D%2C%20West%20Palm%20Beach%2C%20FL%2033405!5e0!3m2!1sen!2sus!4v1716145000000!5m2!1sen!2sus',
    image: {
      src: '/assets/images/contact-office.jpg',
      alt: 'Mapa de ubicación DERMA.M',
      prompt: 'Minimal elegant map-style visual for a West Palm Beach medical aesthetics clinic, soft ivory background, sage route line, subtle location pin, premium editorial map design, no bright Google map colors, no clutter, clean and readable, 16:9 horizontal.'
    },
    clinicImage: {
      src: '/assets/images/contact-consultation.jpg',
      alt: 'Recepción DERMA.M',
      prompt: 'Premium DERMA.M style reception and treatment space, bright ivory and pearl gray interiors, soft sage botanical accents, clean front desk or waiting area, warm natural light, calm wellness-clinical atmosphere, elegant and approachable, no people, no hospital equipment, no clutter, 16:9 horizontal.'
    }
  },
  faqs: [
    {
      question: '¿Necesito cita para una evaluación gratuita?',
      answer: 'Sí. Recomendamos agendar tu evaluación para asegurar disponibilidad y darte el tiempo necesario para revisar tu caso.'
    },
    {
      question: '¿Cuánto tiempo tarda en responder el equipo?',
      answer: 'Respondemos normalmente en menos de 24 horas. Para una respuesta más rápida, WhatsApp es el canal recomendado.'
    },
    {
      question: '¿Atienden en español y en inglés?',
      answer: 'Sí. DERMA.M atiende en español e inglés.'
    },
    {
      question: '¿Puedo ir sin cita?',
      answer: 'Recomendamos agendar antes de visitarnos para confirmar disponibilidad y evitar tiempos de espera.'
    },
    {
      question: '¿Cuál es la forma más rápida de comunicarme?',
      answer: 'WhatsApp es la forma más rápida de comunicarte con nuestro equipo.'
    }
  ]
};
