import { Treatment } from '../types/treatment';

// Note: Using placeholders since Image Generation quota was reached
export const featuredTreatments: Treatment[] = [
  {
    id: 'prp-prf',
    title: 'Plasma Rico en Plaquetas',
    description: 'Bioestimulación regenerativa que mejora la calidad, firmeza y vitalidad de tu piel.',
    category: 'Facial',
    href: '#',
    featured: true,
    image: {
      src: 'https://picsum.photos/seed/dermam_prp/800/600',
      alt: 'Plasma Rico en Plaquetas en DERMA.M',
      width: 800,
      height: 600,
      prompt: 'Premium clinical aesthetics editorial photo, gloved hands holding a small PRP/PRF vial with golden plasma layer, clean ivory clinical surface, soft natural light, blurred centrifuge in background, elegant medical precision, no visible blood spill, no aggressive needle, no patient face, pastel ivory and soft sage environment, luxury skincare clinic photography, realistic, calm, professional, 4:3 ratio.'
    }
  },
  {
    id: 'post-op',
    title: 'Post-Operatorio',
    description: 'Cuidados especializados que apoyan tu recuperación y optimizan tus resultados.',
    category: 'Corporal',
    href: '#',
    featured: true,
    image: {
      src: 'https://picsum.photos/seed/dermam_postop/800/600',
      alt: 'Cuidado Post-Operatorio en DERMA.M',
      width: 800,
      height: 600,
      prompt: 'Soft luxury post-operative lymphatic drainage facial care image, professional hands gently touching patient’s jaw and cheek, patient lying down with white headband and ivory linens, calm recovery atmosphere, no visible bruising, no surgery, no hospital look, soft diffused light, pastel wellness aesthetic, high-end medspa photography, warm ivory and pearl gray tones, 4:3 ratio.'
    }
  },
  {
    id: 'facial-cleansing',
    title: 'Limpieza Facial Profunda',
    description: 'Limpieza avanzada que purifica, hidrata y devuelve luminosidad a tu piel.',
    category: 'Facial',
    href: '#',
    featured: true,
    image: {
      src: 'https://picsum.photos/seed/dermam_facial/800/600',
      alt: 'Limpieza Facial Profunda en DERMA.M',
      width: 800,
      height: 600,
      prompt: 'Premium deep facial cleansing treatment editorial photo, woman lying down with white headband receiving a gentle facial cleansing or hydrating treatment, luminous natural skin, soft white treatment room, clean clinical spa environment, pastel sage accents, no pore extraction, no redness, no harsh tools, calm luxury skincare photography, 4:3 ratio.'
    }
  }
];
