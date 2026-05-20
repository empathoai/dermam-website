import { NavItem } from '../types/common';

export const navigationLinks: NavItem[] = [
  { 
    label: 'Faciales', 
    href: '/es/tratamientos-faciales',
    submenu: [
      { label: 'Plasma Rico en Plaquetas (PRF)', href: '/es/plasma-rico-en-plaquetas-west-palm-beach' },
      { label: 'Limpieza Facial Profunda', href: '/es/limpieza-facial-profunda' },
      { label: 'Hidrofacial', href: '/es/hidrofacial' },
      { label: 'Microneedling', href: '/es/microneedling' },
      { label: 'Peel Coreano', href: '/es/peel-coreano' }
    ]
  },
  { 
    label: 'Corporales', 
    href: '/es/tratamientos-corporales',
    submenu: [
      { label: 'Post-Operatorio', href: '/es/postoperatorio-west-palm-beach' },
      { label: 'Cavitación', href: '/es/cavitacion' },
      { label: 'Radiofrecuencia Corporal', href: '/es/radiofrecuencia-corporal' },
      { label: 'Drenaje Linfático', href: '/es/drenaje-linfatico-corporal' }
    ]
  },
  { 
    label: 'Láser & Luz', 
    href: '/es/laser-y-luz',
    submenu: [
      { label: 'Radiofrecuencia Facial', href: '/es/radiofrecuencia-facial' },
      { label: 'Oxigenoterapia Facial', href: '/es/oxigenoterapia-facial' }
    ]
  },
  { 
    label: 'Dental', 
    href: '/es/dental',
    submenu: [
      { label: 'Blanqueamiento Dental', href: '/es/blanqueamiento-dental' },
      { label: 'Limpieza Dental', href: '/es/limpieza-dental' }
    ]
  },
  { label: 'Nosotros', href: '/es/sobre-nosotros' },
  { label: 'Contacto', href: '/es/contacto' }
];

export const footerLinks = {
  treatments: [
    { label: 'Plasma Rico en Plaquetas (PRF)', href: '/es/plasma-rico-en-plaquetas-west-palm-beach' },
    { label: 'Post-Operatorio', href: '/es/postoperatorio-west-palm-beach' },
    { label: 'Limpieza Facial Profunda', href: '/es/limpieza-facial-profunda' },
    { label: 'IV Therapy', href: '/es/iv-therapy' },
    { label: 'Reservar Cita', href: '/es/reservar' }
  ],
  company: [
    { label: 'Nosotros', href: '/es/sobre-nosotros' },
    { label: 'Contacto', href: '/es/contacto' },
    { label: 'Reservar', href: '/es/reservar' },
    { label: 'Políticas de Privacidad', href: '#' }
  ]
};
