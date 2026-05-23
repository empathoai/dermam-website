import { BookingPageContent } from '../types/booking';
import { siteConfig } from './siteConfig';

export const bookingContent: BookingPageContent = {
  hero: {
    headline: 'Agenda tu cita',
    subheadline: 'Evaluación gratuita de piel o reserva directa de tu tratamiento. Sin compromiso.',
    trustLine: '⭐ 4.9 Google · MedSpa Certificado · Bilingüe ES/EN',
    image: {
      src: '/assets/images/booking-hero.jpg',
      alt: 'Preparación de tratamiento en DERMA.M',
      prompt: 'Bright premium aesthetics center booking scene, warm ivory treatment room, professional hands preparing a treatment tray with folded white towels and skincare tools, soft sage accents, calm clinical wellness environment, subtle DERMA.M style, natural light, no people faces, no surgery tools, no blood, no hospital feeling, no dark background, premium medspa photography, 16:9 horizontal.'
    }
  },
  selector: {
    headline: 'Selecciona tu tratamiento',
    subheadline: 'Cada opción te lleva al canal correcto para reservar o consultar tu caso.',
    treatments: [
      {
        id: 'free-evaluation',
        title: 'Evaluación gratuita de piel',
        description: 'Diagnóstico personalizado · 30 min · Sin costo',
        bookingType: 'square',
        squareUrl: 'https://squareup.com/appointments/book/dermam/free-eval',
        ctaLabel: 'Agendar gratis',
        featured: true,
        trackingLabel: 'booking_free_evaluation_click'
      },
      {
        id: 'prf',
        title: 'Plasma Rico en Plaquetas y Fibrina (PRF)',
        description: 'Regeneración facial avanzada',
        bookingType: 'square',
        squareUrl: 'https://squareup.com/appointments/book/dermam/prf',
        ctaLabel: 'Reservar',
        trackingLabel: 'booking_treatment_click'
      },
      {
        id: 'deep-facial',
        title: 'Limpieza Facial Profunda',
        description: 'Análisis + limpieza centro',
        bookingType: 'square',
        squareUrl: 'https://squareup.com/appointments/book/dermam/limpieza',
        ctaLabel: 'Reservar',
        trackingLabel: 'booking_treatment_click'
      },
      {
        id: 'microneedling',
        title: 'Microneedling',
        description: 'Textura, poros y cicatrices',
        bookingType: 'square',
        squareUrl: 'https://squareup.com/appointments/book/dermam/microneedling',
        ctaLabel: 'Reservar',
        trackingLabel: 'booking_treatment_click'
      },
      {
        id: 'post-op',
        title: 'Post-Operatorio',
        description: 'Recuperación y drenaje especializado',
        bookingType: 'whatsapp',
        whatsappMessage: 'Hola, necesito orientación para recuperación post-operatoria en DERMA.M.',
        ctaLabel: 'Consultar',
        trackingLabel: 'booking_intent_whatsapp'
      },
      {
        id: 'body-treatments',
        title: 'Tratamientos Corporales',
        description: 'Evaluación según objetivo',
        bookingType: 'whatsapp',
        whatsappMessage: 'Hola, quiero consultar sobre tratamientos corporales en DERMA.M.',
        ctaLabel: 'Consultar',
        trackingLabel: 'booking_intent_whatsapp'
      },
      {
        id: 'laser-light',
        title: 'Láser & Luz',
        description: 'Evaluación según tipo de piel',
        bookingType: 'whatsapp',
        whatsappMessage: 'Hola, quiero consultar sobre tratamientos de láser y luz en DERMA.M.',
        ctaLabel: 'Consultar',
        trackingLabel: 'booking_intent_whatsapp'
      },
      {
        id: 'dental',
        title: 'Dental',
        description: 'Consulta y orientación',
        bookingType: 'whatsapp',
        whatsappMessage: 'Hola, quiero consultar sobre servicios dentales en DERMA.M.',
        ctaLabel: 'Consultar',
        trackingLabel: 'booking_intent_whatsapp'
      }
    ]
  },
  whatsappAlternative: {
    headline: '¿Prefieres WhatsApp?',
    cards: [
      {
        title: 'Escríbenos por WhatsApp',
        copy: `${siteConfig.phone} · Respondemos en menos de 2 horas`,
        cta: 'Escribir ahora',
        href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola, quiero agendar una cita en DERMA.M.')}`,
        type: 'whatsapp',
        emphasized: true
      },
      {
        title: 'Llamar',
        copy: `${siteConfig.phone} · Lun–Sáb · 9am–7pm EST`,
        cta: 'Llamar →',
        href: `tel:${siteConfig.phoneRaw}`,
        type: 'phone'
      }
    ]
  },
  info: {
    cards: [
      {
        title: '¿Qué pasa después de reservar?',
        description: 'Recibirás la confirmación de tu cita desde Square o nuestro equipo te responderá por WhatsApp si tu caso requiere orientación previa.'
      },
      {
        title: '¿Por qué algunos tratamientos van por WhatsApp?',
        description: 'Algunos servicios, como Post-Operatorio, requieren entender tu caso antes de confirmar una sesión.'
      },
      {
        title: '¿Los precios están en el sitio?',
        description: 'No. Los precios no se muestran en el sitio. Cuando aplica, Square mostrará la información configurada para el servicio correspondiente.'
      },
      {
        title: '¿Puedo cambiar mi cita?',
        description: 'Sí. Puedes gestionar cambios desde Square o escribirnos por WhatsApp.'
      }
    ]
  }
};
