import { Tier3Treatment } from '../types/tier3Treatment';

const commonImagePrompt = 'Bright premium DERMA.M clinical wellness aesthetic, warm ivory treatment room, soft sage and pearl gray accents, realistic skin texture, calm professional medspa atmosphere, no dark background, no harsh hospital look, no exaggerated retouching, main subject centered for mobile crop safety.';

export const tier3Treatments: Tier3Treatment[] = [
  {
    id: 'hidrofacial',
    slugEs: 'hidrofacial',
    category: 'facial',
    title: 'Hidrofacial',
    shortTitle: 'Hidrofacial',
    seoTitle: 'Hidrofacial West Palm Beach | DERMA.M',
    metaDescription: 'Conoce el Hidrofacial en West Palm Beach en DERMA.M. Tratamiento personalizado de hidratación profunda, luminosidad y limpieza. Agenda tu evaluación.',
    canonicalEs: 'https://dermamskinhealth.com/es/hidrofacial/',
    eyebrow: 'Limpieza y Luminosidad',
    h1: 'Hidrofacial en West Palm Beach',
    subheadline: 'El tratamiento de hidratación profunda que tu piel necesita para brillar.',
    primaryCta: {
      label: 'Agendar Evaluación',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'hidrofacial_primary_cta'
    },
    secondaryCta: {
      label: 'Consultar por WhatsApp',
      href: '#',
      mode: 'whatsapp',
      trackingLabel: 'hidrofacial_whatsapp_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/hidro_hero/1920/1080',
      alt: 'Hidrofacial en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45-60 min' },
      { label: 'Recuperación', value: 'Inmediata' },
      { label: 'Resultados', value: 'Desde la 1ª sesión' }
    ],
    quickFit: {
      title: 'Este tratamiento puede ayudarte si...',
      items: [
        'Sientes tu piel opaca o deshidratada',
        'Notas poros obstruidos o puntos negros',
        'Buscas un brillo instantáneo para un evento',
        'Quieres una limpieza profunda pero gentil'
      ]
    },
    explanation: {
      title: '¿Qué es el Hidrofacial?',
      body: 'El Hidrofacial es una tecnología avanzada que combina limpieza, exfoliación, extracción e hidratación simultánea. Utiliza una punta de succión especial para eliminar impurezas mientras infunde sueros nutritivos profundamente en la dermis, dejando la piel visiblemente más limpia, suave y radiante.',
      media: {
        src: 'https://picsum.photos/seed/hidro_exp/1200/900',
        alt: 'Proceso de Hidrofacial',
        prompt: `IMAGE PROMPT — HIDROFACIAL PROCESS: ${commonImagePrompt} ${'Professional hands performing a hydro-facial treatment on a calm patient, visible water-based glow on skin, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Hidratación Extrema',
        description: 'Repone la humedad perdida y calma la piel seca al instante.',
        icon: 'droplets'
      },
      {
        title: 'Luminosidad Inmediata',
        description: 'Elimina células muertas para revelar una piel fresca y con brillo natural.',
        icon: 'sparkles'
      },
      {
        title: 'Poros Limpios',
        description: 'Extracción suave de impurezas sin el trauma de limpiezas manuales agresivas.',
        icon: 'focus'
      }
    ],
    sessionSteps: [
      { title: 'Limpieza y Exfoliación', description: 'Eliminamos la capa superficial de células muertas.' },
      { title: 'Extracción Hidro-vortex', description: 'Succión suave para limpiar poros sin irritación.' },
      { title: 'Infusión de Nutrientes', description: 'Aplicación de sueros con antioxidantes y péptidos.' },
      { title: 'Protección', description: 'Sellamos el tratamiento con hidratación final y SPF.' }
    ],
    candidates: [
      'Todo tipo de piel',
      'Pieles sensibles',
      'Personas con poco tiempo que buscan resultados rápidos'
    ],
    safety: {
      title: 'Seguridad y Expectativas',
      items: [
        'Tratamiento indoloro y relajante',
        'Puede haber un ligero enrojecimiento por 15-30 minutos',
        'No requiere tiempo de inactividad',
        'Se puede aplicar maquillaje inmediatamente después'
      ],
      disclaimer: 'Aunque es gentil, Nancy evaluará tu piel para asegurar que no haya contraindicaciones activas.'
    },
    faqs: [
      {
        question: '¿Con qué frecuencia puedo hacerme un Hidrofacial?',
        answer: 'Recomendamos una sesión mensual para mantener los resultados óptimos y la salud de la piel a largo plazo.'
      },
      {
        question: '¿Es mejor que una limpieza facial tradicional?',
        answer: 'Es diferente. Es más tecnológico y menos manual, lo que suele ser más cómodo para personas con piel sensible o que odian las extracciones manuales.'
      }
    ],
    relatedTreatmentIds: ['peel-coreano', 'microneedling', 'limpieza-facial-profunda'],
    finalCta: {
      title: '¿Lista para brillar?',
      copy: 'Tu piel merece este respiro de hidratación profunda. Reserva hoy tu evaluación.',
      primaryLabel: 'Agendar Cita',
      secondaryLabel: 'Consultar por WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/hidro_cta/1920/1080',
        alt: 'Final CTA Hidrofacial',
        prompt: `IMAGE PROMPT — HIDROFACIAL CTA: ${commonImagePrompt} ${'Soft still-life with fresh water droplets, sage leaves and ivory towels, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre el Hidrofacial en DERMA.M.',
    isPublished: true
  },
  {
    id: 'microneedling',
    slugEs: 'microneedling',
    category: 'facial',
    title: 'Microneedling',
    shortTitle: 'Microneedling',
    seoTitle: 'Microneedling West Palm Beach | DERMA.M',
    metaDescription: 'Mejora la textura, poros y cicatrices con Microneedling en West Palm Beach. Tratamiento profesional de inducción de colágeno en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/microneedling/',
    eyebrow: 'Textura y Colágeno',
    h1: 'Microneedling en West Palm Beach',
    subheadline: 'Inducción natural de colágeno para una piel más firme y uniforme.',
    primaryCta: {
      label: 'Agendar Evaluación',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'microneedling_primary_cta'
    },
    secondaryCta: {
      label: 'Contactar Especialista',
      href: '#',
      mode: 'whatsapp',
      trackingLabel: 'microneedling_whatsapp_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/micro_hero/1920/1080',
      alt: 'Microneedling Dermapen 3 en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '60 min' },
      { label: 'Recuperación', value: '24-48 horas' },
      { label: 'Dolor', value: 'Mínimo (con anestesia tópica)' }
    ],
    quickFit: {
      title: 'Es ideal para ti si buscas mejorar...',
      items: [
        'Cicatrices de acné',
        'Poros dilatados',
        'Líneas de expresión finas',
        'Textura irregular de la piel'
      ]
    },
    explanation: {
      title: '¿Cómo funciona?',
      body: 'Utilizamos tecnología Dermapen 3 para crear micro-canales controlados en la piel. Esto estimula la respuesta natural de curación del cuerpo, produciendo nuevo colágeno y elastina, mientras permite que sueros de grado médico penetren profundamente.',
      media: {
        src: 'https://picsum.photos/seed/micro_exp/1200/900',
        alt: 'Dispositivo Dermapen 3',
        prompt: `IMAGE PROMPT — MICRONEEDLING PROCESS: ${commonImagePrompt} ${'Close up of a professional microneedling device held by gloved hands, calm clinical background, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Estimulación de Colágeno',
        description: 'Piel más firme y elástica a largo plazo.',
        icon: 'layers'
      },
      {
        title: 'Reducción de Pores',
        description: 'La piel se tensa y los poros se vuelven menos visibles.',
        icon: 'maximize'
      },
      {
        title: 'Tono Uniforme',
        description: 'Ayuda a desvanecer manchas y marcas superficiales.',
        icon: 'palette'
      }
    ],
    sessionSteps: [
      { title: 'Preparación', description: 'Limpieza profunda y aplicación de anestesia tópica.' },
      { title: 'Procedimiento', description: 'Deslizamiento del vial/dispositivo sobre las zonas a tratar.' },
      { title: 'Calmante', description: 'Mascarilla hidratante post-procedimiento para reducir rojez.' },
      { title: 'Instrucciones', description: 'Guía de cuidados post-sesión.' }
    ],
    candidates: [
      'Pieles con cicatrices de acné',
      'Pieles con signos de envejecimiento prematuro',
      'Pieles con textura rugosa'
    ],
    safety: {
      title: 'Cuidados y Seguridad',
      items: [
        'La piel estará roja por 24-48 horas',
        'Evitar ejercicio intenso y sol por 48 horas',
        'Uso obligatorio de bloqueador solar',
        'Evitar maquillaje por las primeras 12-24 horas'
      ]
    },
    faqs: [
      {
        question: '¿Cuántas sesiones necesito?',
        answer: 'Para mejores resultados en cicatrices o textura, recomendamos un ciclo de 3 a 6 sesiones espaciadas de 4 a 6 semanas.'
      }
    ],
    relatedTreatmentIds: ['prf-facial', 'peel-coreano', 'hidrofacial'],
    finalCta: {
      title: 'Renueva tu piel',
      copy: 'El colágeno es la estructura de tu juventud. Actívalo con nosotros.',
      primaryLabel: 'Reservar Evaluación',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/micro_cta/1920/1080',
        alt: 'Final CTA Microneedling',
        prompt: `IMAGE PROMPT — MICRONEEDLING CTA: ${commonImagePrompt} ${'Still-life with medical vials and sage botanical leaves, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre el Microneedling en DERMA.M.',
    isPublished: true
  },
  {
    id: 'blanqueamiento-dental',
    slugEs: 'blanqueamiento-dental',
    category: 'dental',
    title: 'Blanqueamiento Dental',
    shortTitle: 'Blanqueamiento',
    seoTitle: 'Blanqueamiento Dental West Palm Beach | DERMA.M',
    metaDescription: 'Mejora tu sonrisa con el blanqueamiento dental profesional en West Palm Beach. Resultados visibles y cuidado especializado en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/blanqueamiento-dental/',
    eyebrow: 'Estética Dental',
    h1: 'Blanqueamiento Dental en West Palm Beach',
    subheadline: 'Una sonrisa más brillante y segura con tecnología profesional.',
    primaryCta: {
      label: 'Agendar Evaluación',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'blanqueamiento_primary_cta'
    },
    secondaryCta: {
      label: 'WhatsApp',
      href: '#',
      mode: 'whatsapp',
      trackingLabel: 'blanqueamiento_whatsapp_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/dental_white_hero/1920/1080',
      alt: 'Blanqueamiento dental en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '60 min' },
      { label: 'Resultados', value: 'Inmediatos' },
      { label: 'Sensibilidad', value: 'Baja/Mínima' }
    ],
    quickFit: {
      title: 'Ideal si buscas...',
      items: [
        'Eliminar manchas de café, té o vino',
        'Aclarar el tono natural de tus dientes',
        'Una mejora estética rápida para un evento',
        'Resultados más seguros que kits caseros'
      ]
    },
    explanation: {
      title: '¿En qué consiste?',
      body: 'Nuestro blanqueamiento dental utiliza agentes aclaradores de alta concentración supervisados por profesionales. El proceso elimina manchas profundas en el esmalte sin comprometer la estructura dental, logrando varios tonos de aclarado en una sola sesión.',
      media: {
        src: 'https://picsum.photos/seed/dental_white_exp/1200/900',
        alt: 'Proceso de blanqueamiento',
        prompt: `IMAGE PROMPT — BLANQUEAMIENTO DENTAL PROCESS: ${commonImagePrompt} ${'Professional dental whitening setup, protective gel applied to gums, bright clinical setting, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Sonrisa Radiante',
        description: 'Dientes visiblemente más blancos desde la primera cita.',
        icon: 'sparkles'
      },
      {
        title: 'Autoestima',
        description: 'Siente la confianza de sonreír sin inhibiciones.',
        icon: 'focus'
      }
    ],
    sessionSteps: [
      { title: 'Evaluación inicial', description: 'Revisamos que tus encías y dientes estén sanos.' },
      { title: 'Protección', description: 'Cubrimos las encías para evitar sensibilidad.' },
      { title: 'Aplicación', description: 'Colocamos el gel blanqueador profesional.' },
      { title: 'Finalización', description: 'Limpieza y recomendaciones de dieta blanca.' }
    ],
    candidates: [
      'Personas con dientes sanos',
      'Dientes manchados por hábitos alimenticios',
      'Mayores de 18 años'
    ],
    safety: {
      title: 'Seguridad Dental',
      items: [
        'Realizado bajo supervisión profesional',
        'Puede haber sensibilidad temporal (12-24h)',
        'No daña el esmalte si se sigue el protocolo',
        'Resultados dependen de la porosidad del diente'
      ]
    },
    faqs: [
      {
        question: '¿Cuánto dura el efecto?',
        answer: 'Depende de tus hábitos. Con buena higiene y evitando alimentos colorantes, puede durar de 6 meses a un año o más.'
      }
    ],
    relatedTreatmentIds: ['limpieza-dental', 'carillas', 'dental-evaluacion'],
    finalCta: {
      title: 'Tu sonrisa, tu carta de presentación',
      copy: 'No ocultes tu sonrisa. Dale luz en una sola sesión profesional.',
      primaryLabel: 'Agendar Evaluación',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/dental_white_cta/1920/1080',
        alt: 'Final CTA Blanqueamiento',
        prompt: `IMAGE PROMPT — BLANQUEAMIENTO DENTAL CTA: ${commonImagePrompt} ${'Clean white clinical still-life with dental mirror and sage branch, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre el Blanqueamiento Dental en DERMA.M.',
    isPublished: true
  },
  {
    id: 'limpieza-dental',
    slugEs: 'limpieza-dental',
    category: 'dental',
    title: 'Limpieza Dental',
    shortTitle: 'Limpieza Dental',
    seoTitle: 'Limpieza Dental West Palm Beach | DERMA.M',
    metaDescription: 'Mantén tu salud oral con una limpieza dental profesional en West Palm Beach. Cuidado preventivo y profundo en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/limpieza-dental/',
    eyebrow: 'Salud Oral',
    h1: 'Limpieza Dental en West Palm Beach',
    subheadline: 'Frescura y salud preventiva para tus dientes y encías.',
    primaryCta: {
      label: 'Agendar Cita',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'limpieza_dental_primary_cta'
    },
    secondaryCta: {
      label: 'WhatsApp',
      href: '#',
      mode: 'whatsapp',
      trackingLabel: 'limpieza_dental_whatsapp_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/dental_clean_hero/1920/1080',
      alt: 'Limpieza dental profesional en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45-60 min' },
      { label: 'Frecuencia', value: 'Cada 6 meses' },
      { label: 'Procedimiento', value: 'No invasivo' }
    ],
    quickFit: {
      title: 'Es tiempo de tu limpieza si...',
      items: [
        'Han pasado más de 6 meses desde tu última visita',
        'Sientes placa o sarro acumulado',
        'Quieres prevenir caries y enfermedades de encías',
        'Buscas un aliento más fresco'
      ]
    },
    explanation: {
      title: 'Importancia de la profilaxis',
      body: 'La limpieza dental profesional o profilaxis elimina la placa bacteriana y el sarro que el cepillado diario no alcanza. Es la base fundamental para prevenir problemas mayores y mantener una estética dental saludable.',
      media: {
        src: 'https://picsum.photos/seed/dental_clean_exp/1200/900',
        alt: 'Higiene dental profesional',
        prompt: `IMAGE PROMPT — LIMPIEZA DENTAL PROCESS: ${commonImagePrompt} ${'Close up of clean dental instruments on a white tray, soft ivory background, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Prevención de Caries',
        description: 'Eliminamos los focos bacterianos antes de que dañen el diente.',
        icon: 'focus'
      },
      {
        title: 'Encías Sanas',
        description: 'Previene la gingivitis y el sangrado de encías.',
        icon: 'layers'
      }
    ],
    sessionSteps: [
      { title: 'Revisión', description: 'Inspeccionamos el estado general de encías y dientes.' },
      { title: 'Tartrectomía', description: 'Eliminación del sarro con ultrasonido o instrumentos manuales.' },
      { title: 'Pulido', description: 'Uso de pasta profiláctica para eliminar manchas superficiales.' },
      { title: 'Flúor', description: 'Aplicación opcional para fortalecer el esmalte.' }
    ],
    candidates: [
      'Pacientes de todas las edades',
      'Personas con brackets o implantes',
      'Cualquier persona que busque salud preventiva'
    ],
    safety: {
      title: 'Recomendaciones',
      items: [
        'Se recomienda cada 6 meses',
        'Puede haber sensibilidad leve al frío o calor por un día',
        'Higiene diaria es clave para mantener los resultados'
      ]
    },
    faqs: [
      {
        question: '¿Duele?',
        answer: 'Para nada. Es un procedimiento preventivo muy tolerable. Si tienes mucha sensibilidad, podemos usar gel anestésico tópico.'
      }
    ],
    relatedTreatmentIds: ['blanqueamiento-dental', 'dental-evaluacion', 'cuidado-preventivo-dental'],
    finalCta: {
      title: 'Prioriza tu salud dental',
      copy: 'Una sonrisa sana es la base de todo. Agenda tu limpieza hoy.',
      primaryLabel: 'Agendar Limpieza',
      secondaryLabel: 'Dudas por WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/dental_clean_cta/1920/1080',
        alt: 'Final CTA Limpieza Dental',
        prompt: `IMAGE PROMPT — LIMPIEZA DENTAL CTA: ${commonImagePrompt} ${'Soft white dental still-life, fresh mint or sage, ivory background, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero agendar mi Limpieza Dental en DERMA.M.',
    isPublished: true
  },
  {
    id: 'peel-coreano',
    slugEs: 'peel-coreano',
    category: 'facial',
    title: 'Peel Coreano',
    shortTitle: 'Peel Coreano',
    seoTitle: 'Peel Coreano West Palm Beach | DERMA.M',
    metaDescription: 'Descubre el Peel Coreano en West Palm Beach. Exfoliación suave, luminosidad instantánea y renovación celular en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/peel-coreano/',
    eyebrow: 'Renovación y Brillo',
    h1: 'Peel Coreano en West Palm Beach',
    subheadline: 'El secreto de la piel de porcelana, ahora a tu alcance.',
    primaryCta: {
      label: 'Agendar Evaluación',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'peel_coreano_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/peel_hero/1920/1080',
      alt: 'Peel Coreano en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45 min' },
      { label: 'Recuperación', value: 'Inmediata' },
      { label: 'Tipo de Piel', value: 'Todas, incluso sensibles' }
    ],
    quickFit: {
      title: 'Este tratamiento te encantará si...',
      items: [
        'Buscas la famosa "Glass Skin" o piel de porcelana',
        'Quieres una exfoliación que no irrite ni pele la piel',
        'Necesitas un efecto "glow" inmediato',
        'Tienes piel sensible pero quieres renovarla'
      ]
    },
    explanation: {
      title: 'Renovación sin drama',
      body: 'A diferencia de los peelings químicos tradicionales que pueden causar descamación agresiva, el Peel Coreano utiliza una mezcla de ácidos suaves y extractos botánicos que trabajan en sintonía con la piel. Remueve impurezas y células muertas mientras calma e hidrata simultáneamente.',
      media: {
        src: 'https://picsum.photos/seed/peel_exp/1200/900',
        alt: 'Aplicación de Peel Coreano',
        prompt: `IMAGE PROMPT — PEEL COREANO PROCESS: ${commonImagePrompt} ${'Aesthetic specialist applying a gentle solution with a brush, luminous skin, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Textura Sedosa',
        description: 'Suaviza la superficie de la piel al instante.',
        icon: 'sparkles'
      },
      {
        title: 'Tono Uniforme',
        description: 'Ayuda a aclarar manchas superficiales y emparejar el color.',
        icon: 'palette'
      }
    ],
    sessionSteps: [
      { title: 'Limpieza Doble', description: 'Eliminamos restos de maquillaje e impurezas.' },
      { title: 'Activación', description: 'Aplicación del complejo exfoliante coreano.' },
      { title: 'Nutrición', description: 'Uso de mascarillas calmantes y sueros regeneradores.' }
    ],
    candidates: [
      'Pieles opacas',
      'Pieles sensibles',
      'Antes de un evento especial'
    ],
    safety: {
      title: 'Expectativas',
      items: [
        'No hay pelado visible en la mayoría de los casos',
        'Luminosidad instantánea que mejora en los días siguientes',
        'Uso de protector solar es fundamental'
      ]
    },
    faqs: [
      {
        question: '¿Me voy a pelar?',
        answer: 'Normalmente no. Está diseñado para ser un peeling de "tiempo cero", permitiéndote retomar tus actividades sociales de inmediato.'
      }
    ],
    relatedTreatmentIds: ['hidrofacial', 'oxigenoterapia-facial', 'microneedling'],
    finalCta: {
      title: 'Consigue tu Glow Coreano',
      copy: 'La piel que siempre quisiste comienza con el cuidado correcto.',
      primaryLabel: 'Agendar Evaluación',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/peel_cta/1920/1080',
        alt: 'Final CTA Peel Coreano',
        prompt: `IMAGE PROMPT — PEEL COREANO CTA: ${commonImagePrompt} ${'Soft still-life with botanical glass bottles and sage, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre el Peel Coreano en DERMA.M.',
    isPublished: true
  },
  {
    id: 'oxigenoterapia-facial',
    slugEs: 'oxigenoterapia-facial',
    category: 'facial',
    title: 'Oxigenoterapia Facial',
    shortTitle: 'Oxigenoterapia',
    seoTitle: 'Oxigenoterapia Facial West Palm Beach | DERMA.M',
    metaDescription: 'Revitaliza tu rostro con Oxigenoterapia en West Palm Beach. Infusión de oxígeno puro y sueros vitamínicos para una piel radiante en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/oxigenoterapia-facial/',
    eyebrow: 'Vitalidad e Infusión',
    h1: 'Oxigenoterapia Facial en West Palm Beach',
    subheadline: 'Un respiro de vida y vitaminas para tu piel.',
    primaryCta: {
      label: 'Agendar Cita',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'oxigeno_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/oxy_hero/1920/1080',
      alt: 'Oxigenoterapia facial en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45 min' },
      { label: 'Sensación', value: 'Refrescante / Airado' },
      { label: 'Resultados', value: 'Efecto flash inmediato' }
    ],
    quickFit: {
      title: 'Es ideal para ti si...',
      items: [
        'Sientes tu piel "asfixiada" por la contaminación o el estrés',
        'Buscas recuperar la vitalidad después de un viaje o poco sueño',
        'Sufres de piel cansada o cetrina',
        'Quieres un tratamiento relajante y efectivo'
      ]
    },
    explanation: {
      title: 'Oxígeno que renueva',
      body: 'Utilizamos una corriente de oxígeno puro a presión controlada para introducir sueros cargados de vitaminas, antioxidantes y ácido hialurónico. Esto acelera la regeneración celular y devuelve el volumen y brillo que la piel pierde con el cansancio diario.',
      media: {
        src: 'https://picsum.photos/seed/oxy_exp/1200/900',
        alt: 'Infusión de oxígeno',
        prompt: `IMAGE PROMPT — OXIGENOTERAPIA PROCESS: ${commonImagePrompt} ${'Soft oxygen airbrush device used on skin, misty refreshing feel, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Revitalización',
        description: 'La piel recupera su color sonrosado y saludable.',
        icon: 'sparkles'
      },
      {
        title: 'Hidratación Profunda',
        description: 'El oxígeno actúa como vehículo para nutrientes esenciales.',
        icon: 'droplets'
      }
    ],
    sessionSteps: [
      { title: 'Limpieza', description: 'Preparación de la superficie cutánea.' },
      { title: 'Infusión', description: 'Pase del aerógrafo de oxígeno con sueros personalizados.' },
      { title: 'Masaje', description: 'Drenaje manual suave para potenciar la absorción.' }
    ],
    candidates: [
      'Pieles maduras',
      'Pieles estresadas',
      'Hombres y mujeres por igual'
    ],
    safety: {
      title: 'Seguridad',
      items: [
        'Tratamiento 100% no invasivo',
        'Sin agujas ni dolor',
        'Perfecto para pieles con rosácea o extrema sensibilidad'
      ]
    },
    faqs: [
      {
        question: '¿Puedo hacerlo antes de un evento?',
        answer: '¡Es el tratamiento ideal! No deja marcas y el efecto de luminosidad es inmediato y espectacular.'
      }
    ],
    relatedTreatmentIds: ['hidrofacial', 'peel-coreano', 'rejuvenecimiento-facial-lifting'],
    finalCta: {
      title: 'Dale un respiro a tu piel',
      copy: 'Oxigenación real para resultados que se notan.',
      primaryLabel: 'Reservar Ahora',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/oxy_cta/1920/1080',
        alt: 'Final CTA Oxigenoterapia',
        prompt: `IMAGE PROMPT — OXIGENOTERAPIA CTA: ${commonImagePrompt} ${'Airy light still-life with glass and clear water, sage accents, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre la Oxigenoterapia Facial en DERMA.M.',
    isPublished: true
  },
  {
    id: 'cavitacion',
    slugEs: 'cavitacion',
    category: 'body',
    title: 'Cavitación',
    shortTitle: 'Cavitación',
    seoTitle: 'Cavitación West Palm Beach | DERMA.M',
    metaDescription: 'Reduce medidas localizadas con cavitación en West Palm Beach. Tratamiento no invasivo de remodelación corporal en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/cavitacion/',
    eyebrow: 'Reducción y Contorno',
    h1: 'Cavitación en West Palm Beach',
    subheadline: 'Eliminación selectiva de grasa localizada sin cirugía.',
    primaryCta: {
      label: 'Agendar Evaluación',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'cavitacion_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/cav_hero/1920/1080',
      alt: 'Cavitación corporal en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45-60 min' },
      { label: 'Sesiones', value: '6–10' },
      { label: 'Dolor', value: 'Nulo' }
    ],
    quickFit: {
      title: 'Es para ti si buscas...',
      items: [
        'Reducir medidas en zonas difíciles (abdomen, muslos, brazos)',
        'Remodelar tu silueta de forma no invasiva',
        'Complementar tu estilo de vida saludable',
        'Resultados visibles sin tiempo de recuperación'
      ]
    },
    explanation: {
      title: '¿Cómo funciona?',
      body: 'La cavitación utiliza ultrasonidos de baja frecuencia que generan micro-burbujas en el tejido graso. Estas burbujas colapsan y rompen selectivamente las células adiposas, convirtiéndolas en una sustancia líquida que el cuerpo elimina naturalmente a través del sistema linfático y la orina.',
      media: {
        src: 'https://picsum.photos/seed/cav_exp/1200/900',
        alt: 'Proceso de cavitación',
        prompt: `IMAGE PROMPT — CAVITACION PROCESS: ${commonImagePrompt} ${'Non-invasive body device gently applied to a modestly framed abdominal area, professional setting, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Reducción Localizada',
        description: 'Ataca la grasa donde más la necesitas.',
        icon: 'target'
      },
      {
        title: 'Mejora de Textura',
        description: 'Ayuda a suavizar la apariencia de la piel de naranja.',
        icon: 'sparkles'
      }
    ],
    sessionSteps: [
      { title: 'Medición', description: 'Tomamos medidas iniciales para seguir tu progreso.' },
      { title: 'Tratamiento', description: 'Deslizamiento del cabezal de cavitación sobre la zona.' },
      { title: 'Drenaje', description: 'Usualmente seguido de un masaje para ayudar a la eliminación.' }
    ],
    candidates: [
      'Personas con grasa localizada rebelde',
      'Pacientes con peso saludable que buscan contorno',
      'Quienes desean evitar liposucciones quirúrgicas'
    ],
    safety: {
      title: 'Seguridad y Salud',
      items: [
        'Beber mucha agua antes y después es fundamental',
        'Evaluación previa de salud hepática y renal',
        'No invasivo, sin hematomas ni cortes',
        'Se recomienda actividad física ligera post-sesión'
      ]
    },
    faqs: [
      {
        question: '¿Cuántos centímetros bajo?',
        answer: 'Varía según el paciente, pero se pueden ver reducciones de 1 a 3 cm después de un ciclo completo de sesiones combinadas.'
      }
    ],
    relatedTreatmentIds: ['radiofrecuencia-corporal', 'drenaje-linfatico-corporal', 'maderoterapia'],
    finalCta: {
      title: 'Redescubre tu figura',
      copy: 'La remodelación que buscas, con la tecnología que mereces.',
      primaryLabel: 'Evaluar mi Caso',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/cav_cta/1920/1080',
        alt: 'Final CTA Cavitación',
        prompt: `IMAGE PROMPT — CAVITACION CTA: ${commonImagePrompt} ${'Soft minimalist still-life with measuring tape and sage, pearl gray background, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre la Cavitación en DERMA.M.',
    isPublished: true
  },
  {
    id: 'radiofrecuencia-corporal',
    slugEs: 'radiofrecuencia-corporal',
    category: 'body',
    title: 'Radiofrecuencia Corporal',
    shortTitle: 'Radiofrecuencia',
    seoTitle: 'Radiofrecuencia Corporal West Palm Beach | DERMA.M',
    metaDescription: 'Reafirma tu piel y mejora el contorno corporal con Radiofrecuencia en West Palm Beach. Tecnología clínica para la flacidez en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/radiofrecuencia-corporal/',
    eyebrow: 'Firmeza y Tensión',
    h1: 'Radiofrecuencia Corporal en West Palm Beach',
    subheadline: 'Tensa y reafirma tu cuerpo estimulando su propio colágeno.',
    primaryCta: {
      label: 'Agendar Cita',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'rf_corp_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/rf_hero/1920/1080',
      alt: 'Radiofrecuencia corporal en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45 min' },
      { label: 'Sensación', value: 'Calor agradable' },
      { label: 'Zonas', value: 'Abdomen, Brazos, Glúteos' }
    ],
    quickFit: {
      title: 'Te ayudará si presentas...',
      items: [
        'Flacidez leve a moderada después de perder peso',
        'Piel con aspecto "suelto" o sin tono',
        'Celulitis edematosa',
        'Deseo de mejorar la calidad de piel en zonas específicas'
      ]
    },
    explanation: {
      title: 'Tecnología de calor profundo',
      body: 'La radiofrecuencia entrega energía térmica a las capas profundas de la piel sin dañar la superficie. Este calor estimula la contracción de las fibras de colágeno existentes y promueve la formación de nuevas, resultando en una piel más tersa y firme.',
      media: {
        src: 'https://picsum.photos/seed/rf_exp/1200/900',
        alt: 'Tratamiento de radiofrecuencia',
        prompt: `IMAGE PROMPT — RADIOFRECUENCIA CORPORAL PROCESS: ${commonImagePrompt} ${'Professional device generating gentle warmth on skin, calm aesthetics, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Tensión Cutánea',
        description: 'Efecto lifting en zonas con laxitud.',
        icon: 'maximize'
      },
      {
        title: 'Remodelación',
        description: 'Mejora visible del contorno y suavidad de la piel.',
        icon: 'sparkles'
      }
    ],
    sessionSteps: [
      { title: 'Preparación', description: 'Aplicación de glicerina o gel conductor.' },
      { title: 'Inducción', description: 'Movimientos circulares con el cabezal para elevar la temperatura.' },
      { title: 'Control', description: 'Monitoreamos la temperatura para máxima seguridad y confort.' }
    ],
    candidates: [
      'Post-parto (con autorización)',
      'Después de dietas de adelgazamiento',
      'Mantenimiento preventivo de firmeza'
    ],
    safety: {
      title: 'Cuidados',
      items: [
        'Piel puede quedar rosada por un par de horas',
        'Indispensable la hidratación oral frecuente',
        'No doloroso, se siente como un masaje con piedras calientes'
      ]
    },
    faqs: [
      {
        question: '¿Cuándo veo resultados?',
        answer: 'Hay un efecto de tensión inmediata por contracción de fibras, pero el resultado real de nuevo colágeno se aprecia a partir de la 6ª u 8ª semana.'
      }
    ],
    relatedTreatmentIds: ['cavitacion', 'maderoterapia', 'estrias-celulitis'],
    finalCta: {
      title: 'Recupera la firmeza',
      copy: 'Dale a tu piel el estímulo que necesita para volver a su lugar.',
      primaryLabel: 'Agendar Evaluación',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/rf_cta/1920/1080',
        alt: 'Final CTA Radiofrecuencia',
        prompt: `IMAGE PROMPT — RADIOFRECUENCIA CORPORAL CTA: ${commonImagePrompt} ${'Warm abstract clinical scene, soft light, ivory towels, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre la Radiofrecuencia Corporal en DERMA.M.',
    isPublished: true
  },
  {
    id: 'drenaje-linfatico-corporal',
    slugEs: 'drenaje-linfatico-corporal',
    category: 'body',
    title: 'Drenaje Linfático Corporal',
    shortTitle: 'Drenaje Corporal',
    seoTitle: 'Drenaje Linfático West Palm Beach | DERMA.M',
    metaDescription: 'Reduce desinflamación y mejora la circulación con drenaje linfático corporal en West Palm Beach. Cuidado profesional en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/drenaje-linfatico-corporal/',
    eyebrow: 'Circulación y Bienestar',
    h1: 'Drenaje Linfático en West Palm Beach',
    subheadline: 'Masaje técnico para eliminar toxinas y reducir retención de líquidos.',
    primaryCta: {
      label: 'Agendar Sesión',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'drenaje_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/dren_hero/1920/1080',
      alt: 'Drenaje linfático en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45-60 min' },
      { label: 'Presión', value: 'Muy suave / Rítmica' },
      { label: 'Objetivo', value: 'Desintoxicación' }
    ],
    quickFit: {
      title: 'Es perfecto para ti si buscas...',
      items: [
        'Aliviar piernas cansadas o pesadas',
        'Reducir la hinchazón (edema) general',
        'Mejorar el sistema inmunológico',
        'Un soporte detox natural para tu cuerpo'
      ]
    },
    explanation: {
      title: 'El arte del toque suave',
      body: 'A diferencia de los masajes reductores intensos, el drenaje linfático utiliza maniobras extremadamente suaves y lentas. El objetivo es estimular los ganglios y conductos linfáticos para facilitar el transporte de líquidos y desechos del cuerpo hacia su eliminación natural.',
      media: {
        src: 'https://picsum.photos/seed/dren_exp/1200/900',
        alt: 'Técnica de drenaje',
        prompt: `IMAGE PROMPT — DRENAJE LINFATICO PROCESS: ${commonImagePrompt} ${'Gentle hands performing Rhythmic massage over white linens, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Desinflamación',
        description: 'Siente tu cuerpo más ligero inmediatamente.',
        icon: 'droplets'
      },
      {
        title: 'Relax Profundo',
        description: 'Calma el sistema nervioso mientras cuidas tu salud.',
        icon: 'sparkles'
      }
    ],
    sessionSteps: [
      { title: 'Apertura', description: 'Estimulación suave de los principales ganglios linfáticos.' },
      { title: 'Maniobras', description: 'Movimientos de arrastre rítmicos hacia las zonas de drenaje.' },
      { title: 'Reposo', description: 'Breve descanso para permitir que el sistema se estabilice.' }
    ],
    candidates: [
      'Personas con retención de líquidos',
      'Después de largos viajes en avión',
      'Mantenimiento de bienestar corporal'
    ],
    safety: {
      title: 'Importante',
      items: [
        'Si es post-cirugía, Nancy te evaluará específicamente',
        'Aumenta la necesidad de orinar post-tratamiento',
        'No doloroso, es altamente relajante'
      ],
      disclaimer: 'Si buscas drenaje después de una cirugía estética, por favor visita nuestra sección de Post-Operatorio.'
    },
    faqs: [
      {
        question: '¿Cuántas veces a la semana?',
        answer: 'De 1 a 2 veces por semana es lo ideal para casos de retención persistente. Como mantenimiento, una sesión quincenal es suficiente.'
      }
    ],
    relatedTreatmentIds: ['post-operatorio', 'maderoterapia', 'radiofrecuencia-corporal'],
    finalCta: {
      title: 'Siente la ligereza',
      copy: 'Tu cuerpo merece fluir sin obstáculos.',
      primaryLabel: 'Agendar Ahora',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/dren_cta/1920/1080',
        alt: 'Final CTA Drenaje',
        prompt: `IMAGE PROMPT — DRENAJE LINFATICO CTA: ${commonImagePrompt} ${'Calm water ripples still-life, pearl gray background, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre el Drenaje Linfático en DERMA.M.',
    isPublished: true
  },
  {
    id: 'radiofrecuencia-facial',
    slugEs: 'radiofrecuencia-facial',
    category: 'laser-light',
    title: 'Radiofrecuencia Facial',
    shortTitle: 'Radiofrecuencia',
    seoTitle: 'Radiofrecuencia Facial West Palm Beach | DERMA.M',
    metaDescription: 'Recupera la firmeza de tu rostro con Radiofrecuencia Facial en West Palm Beach. Tensa la piel y estimula colágeno en DERMA.M.',
    canonicalEs: 'https://dermamskinhealth.com/es/radiofrecuencia-facial/',
    eyebrow: 'Firmeza y Lifting Natural',
    h1: 'Radiofrecuencia Facial en West Palm Beach',
    subheadline: 'Tensa la piel y redefine el contorno facial sin agujas ni cirugía.',
    primaryCta: {
      label: 'Agendar Cita',
      href: '/es/reservar',
      mode: 'evaluation',
      trackingLabel: 'rf_facial_primary_cta'
    },
    heroMedia: {
      type: 'image',
      src: 'https://picsum.photos/seed/rf_face_hero/1920/1080',
      alt: 'Radiofrecuencia facial en DERMA.M',
      position: 'center'
    },
    quickFacts: [
      { label: 'Duración', value: '45-60 min' },
      { label: 'Sensación', value: 'Calor relajante' },
      { label: 'Resultados', value: 'Progresivos' }
    ],
    quickFit: {
      title: 'Es tu tratamiento ideal si notas...',
      items: [
        'Pérdida de definición en el óvalo facial',
        'Líneas de expresión finas',
        'Piel con aspecto cansado o flácido',
        'Deseo de un efecto "lifting" preventivo'
      ]
    },
    explanation: {
      title: 'Estimulación térmica profunda',
      body: 'La radiofrecuencia utiliza ondas que elevan la temperatura de las capas más profundas de la dermis de forma segura. Este calor controlado provoca la contracción inmediata de las fibras de colágeno y activa a los fibroblastos para producir colágeno nuevo en los meses siguientes.',
      media: {
        src: 'https://picsum.photos/seed/rf_face_exp/1200/900',
        alt: 'Sesión de radiofrecuencia facial',
        prompt: `IMAGE PROMPT — RADIOFRECUENCIA FACIAL PROCESS: ${commonImagePrompt} ${'Professional device gently applied to jawline, calm patient, 4:3 ratio.'}`
      }
    },
    benefits: [
      {
        title: 'Firmeza Instantánea',
        description: 'La piel se siente más rellena y tensa después de la sesión.',
        icon: 'maximize'
      },
      {
        title: 'Reducción de Líneas',
        description: 'Suaviza las arrugas finas y mejora la textura general.',
        icon: 'sparkles'
      }
    ],
    sessionSteps: [
      { title: 'Limpieza', description: 'Eliminación de impurezas superficiales.' },
      { title: 'Aplicación', description: 'Uso de gel conductor y pase del cabezal térmico.' },
      { title: 'Finalización', description: 'Aplicación de suero calmante y protección solar.' }
    ],
    candidates: [
      'Pieles maduras',
      'Pieles jóvenes que buscan prevención',
      'Todo fototipo de piel'
    ],
    safety: {
      title: 'Seguridad',
      items: [
        'Tratamiento indoloro y no invasivo',
        'Ligera rojez que remite en poco tiempo',
        'Se recomienda una serie de sesiones para resultados duraderos'
      ]
    },
    faqs: [
      {
        question: '¿Cuántas sesiones necesito?',
        answer: 'Aunque se nota un cambio desde la primera, recomendamos un ciclo de 4 a 6 sesiones para un resultado regenerativo profundo.'
      }
    ],
    relatedTreatmentIds: ['hidrofacial', 'peel-coreano', 'rejuvenecimiento-facial-lifting'],
    finalCta: {
      title: 'Tu rostro, con más firmeza',
      copy: 'Activa la juventud de tu piel desde el interior.',
      primaryLabel: 'Agendar Cita',
      secondaryLabel: 'WhatsApp',
      image: {
        src: 'https://picsum.photos/seed/rf_face_cta/1920/1080',
        alt: 'Final CTA Radiofrecuencia Facial',
        prompt: `IMAGE PROMPT — RADIOFRECUENCIA FACIAL CTA: ${commonImagePrompt} ${'Soft warm clinical abstract image, ivory and sage palette, 16:9 horizontal.'}`
      }
    },
    showPrice: false,
    whatsappMessage: 'Hola, quiero información sobre la Radiofrecuencia Facial en DERMA.M.',
    isPublished: true
  }
];
