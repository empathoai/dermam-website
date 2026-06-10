import { IVKit } from '../types/ivTherapy';

export const ivKits: IVKit[] = [
  {
    id: 'tri-immune-boost-formula-iv-kit',
    name: 'Tri-Immune Boost Formula IV Kit',
    description: 'Boost de vitaminas para tu bienestar: más energía, mejor salud y un sistema inmune fuerte. Protégete y comienza tu cambio ahora.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Tri-Immune Boost Formula IV Kit',
    imagePrompt: 'Premium tri-immune boost IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_tri_immune',
    benefits: [
      'Incrementa la respuesta inmune',
      'Mantiene un sistema inmune saludable',
      'Disminuye la inflamación',
      'Optimiza la función celular',
      'Ayuda en la cicatrización de heridas'
    ],
    iconPoints: ['Inmunidad', 'Función celular', 'Recuperación']
  },
  {
    id: 'get-up-and-go-iv-kit',
    name: 'Get-Up-And-Go IV Kit',
    description: 'Un boost que acelera tu metabolismo, aumenta tu energía y te ayuda a lucir mejor.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Get-Up-And-Go IV Kit',
    imagePrompt: 'Premium energy boost IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_get_up_and_go',
    benefits: [
      'Reducción de fatiga',
      'Mejora del metabolismo',
      'Mayor quema de grasa'
    ],
    iconPoints: ['Energía', 'Metabolismo', 'Vitalidad']
  },
  {
    id: 'immunity-iv-kit',
    name: 'Immunity IV Kit',
    description: 'Cuida tu salud desde adentro: mejora tu inmunidad, reduce la inflamación y recupera tu energía.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Immunity IV Kit',
    imagePrompt: 'Premium immunity support IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_immunity',
    benefits: [
      'Mejora de la inmunidad',
      'Reducción de inflamación',
      'Apoyo celular y antioxidante'
    ],
    iconPoints: ['Inmunidad', 'Antioxidantes', 'Energía']
  },
  {
    id: 'brainstorm-iv-kit',
    name: 'Brainstorm IV Kit',
    description: 'Haz que tu mente brille: mayor claridad mental, mejor aprendizaje y más enfoque.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Brainstorm IV Kit',
    imagePrompt: 'Premium focus and brainstorm IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_brainstorm',
    benefits: [
      'Apoya la claridad mental',
      'Favorece el enfoque',
      'Apoya el aprendizaje'
    ],
    iconPoints: ['Claridad mental', 'Enfoque', 'Rendimiento']
  },
  {
    id: 'alleviate-iv-kit',
    name: 'Alleviate IV Kit',
    description: 'Tu alivio en esos días difíciles: un IV diseñado para disminuir síntomas de PMS y devolver tu energía.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Alleviate IV Kit',
    imagePrompt: 'Premium alleviation and PMS support IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_alleviate',
    benefits: [
      'Alivia cólicos, hinchazón y cambios de humor',
      'Reduce cólicos, dolor de cabeza e irritabilidad',
      'Alivia dolor abdominal, irritabilidad y malestar general'
    ],
    iconPoints: ['PMS', 'Alivio', 'Energía']
  },
  {
    id: 'quench-iv-kit',
    name: 'Quench IV Kit',
    description: 'Despídete de la deshidratación: un IV perfecto para hidratar, revitalizar y recargar tu cuerpo.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Quench IV Kit',
    imagePrompt: 'Premium hydration Quench IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_quench',
    benefits: [
      'Apoya la hidratación',
      'Revitaliza el cuerpo',
      'Ayuda a recargar energía'
    ],
    iconPoints: ['Hidratación', 'Revitalización', 'Energía']
  },
  {
    id: 'reboot-iv-kit',
    name: 'Reboot IV Kit',
    description: 'Recárgate después de la resaca: hidratación profunda y alivio inmediato para que tu cuerpo vuelva a sentirse fresco y lleno de energía.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Reboot IV Kit',
    imagePrompt: 'Premium recovery Reboot IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_reboot',
    benefits: [
      'Hidratación profunda',
      'Apoyo después de resaca',
      'Ayuda a recuperar energía'
    ],
    iconPoints: ['Rehidratación', 'Recuperación', 'Frescura']
  },
  {
    id: 'recovery-performance-iv-kit',
    name: 'Recovery & Performance IV Kit',
    description: 'El aliado de tu rendimiento: reduce el tiempo de recuperación, mejora tu desempeño atlético y disminuye la inflamación.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Recovery & Performance IV Kit',
    imagePrompt: 'Premium athletic recovery performance IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_recovery_performance',
    benefits: [
      'Reduce el tiempo de recuperación',
      'Apoya el desempeño atlético',
      'Disminuye la inflamación'
    ],
    iconPoints: ['Rendimiento', 'Recuperación', 'Inflamación']
  },
  {
    id: 'snow-bright-iv-kit',
    name: 'Snow Bright IV Kit',
    description: 'Ilumina tu piel desde adentro: rejuvenece, unifica el tono y devuelve luminosidad natural con antioxidantes poderosos.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Snow Bright IV Kit',
    imagePrompt: 'Premium skin brightening Snow Bright IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_snow_bright',
    benefits: [
      'Apoya luminosidad de la piel',
      'Favorece tono más uniforme',
      'Aporta antioxidantes'
    ],
    iconPoints: ['Luminosidad', 'Antioxidantes', 'Tono uniforme']
  },
  {
    id: 'timeless-iv-kit',
    name: 'Timeless IV Kit',
    description: 'Tu secreto anti-edad: apoya la función celular, aumenta tu energía y retrasa el envejecimiento.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'Timeless IV Kit',
    imagePrompt: 'Premium anti-aging Timeless IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_timeless',
    benefits: [
      'Apoya la función celular',
      'Aumenta la energía',
      'Apoya el cuidado anti-edad'
    ],
    iconPoints: ['Anti-edad', 'Función celular', 'Energía']
  },
  {
    id: 'el-b-lean-iv-kit',
    name: 'El B-Lean IV Kit',
    description: 'Moldea tu figura de manera natural: quema grasa, acelera el metabolismo y eleva tus niveles de energía.',
    image: '/assets/treatments/iv-therapy/hero.jpg',
    alt: 'El B-Lean IV Kit',
    imagePrompt: 'Premium metabolism and shaping B-Lean IV kit, fallback image.',
    showPrice: false,
    ctaLabel: 'Reservar →',
    trackingLabel: 'iv_kit_b_lean',
    benefits: [
      'Aumenta la concentración',
      'Eleva los niveles de energía',
      'Convierte grasa almacenada en energía útil',
      'Mantiene la hidratación celular adecuada',
      'Mejora el enfoque y el rendimiento mental',
      'Reduce la fatiga',
      'Favorece el rendimiento físico',
      'Aporta vitaminas del complejo B',
      'Ayuda a mantener piel y células sanguíneas saludables',
      'Convierte los nutrientes en energía de forma eficiente'
    ],
    iconPoints: ['Metabolismo', 'Energía', 'Enfoque']
  }
];
