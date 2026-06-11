# DERMA.M — Site Architecture Audit Input

> Documento generado automáticamente por inspección del código fuente.  
> No se modificó ningún archivo del proyecto.  
> Fecha de extracción: 2026-06-10

---

## 1. Project Overview

### Stack tecnológico
- **Framework:** React 19 (SPA con hidratación SSG)
- **Build tool:** Vite 6.2 con `vite-plugin-ssg` para pre-renderizado estático
- **Routing system:** `react-router-dom` v7.15 (BrowserRouter, client-side)
- **Styling system:** Tailwind CSS v4.1.14 (via `@tailwindcss/vite`) + CSS custom properties en `tokens.css` + `globals.css`
- **UI libraries:** Lucide React v0.546 (iconos monolínea)
- **Animation libraries:** Motion (Framer Motion) v12.23
- **CMS / content source:** Archivos TypeScript estáticos en `src/data/`. No hay CMS externo. Todo el contenido es hardcoded.
- **Image handling:** Imágenes estáticas en `/public/assets/`. Se referencian por ruta absoluta (`/assets/...`). No hay CDN ni optimización automática de imágenes.
- **Forms / booking integrations:** Square Appointments (enlaces externos `squareup.com`), WhatsApp (`wa.me`), formulario de contacto con campos controlados (sin backend conectado visible).
- **External services:** Google Fonts (Poppins), Google Maps Embed, Google Business Profile (reviews JSON local).
- **SEO:** `react-helmet-async` para meta tags + JSON-LD schema (LocalBusiness + HealthAndBeautyBusiness). Hreflang configurado en `src/config/routeMap.ts`.
- **Notes:** El proyecto incluye dependencias de `express` y `@google/genai` en `package.json` pero no se usan activamente en el front-end.

### Estructura del proyecto
- `src/pages/` — Componentes de página por ruta. Subdirectorio `es/` contiene páginas Tier 3.
- `src/components/` — Componentes reutilizables organizados en:
  - `layout/` — Navbar, Footer, PageShell, SEO
  - `ui/` — 33 componentes atómicos (Button, Card, FAQAccordion, WhatsAppFAB, etc.)
  - `sections/` — Secciones por página (home, prf, postop, deep-facial, tier3, about, booking, contact, iv-therapy, hubs)
  - `templates/` — Templates reutilizables (HubPageTemplate, Tier3TreatmentTemplate)
- `src/data/` — Archivos de contenido TypeScript (23 archivos). Incluye `reviews.json` y `reviews-raw.json`.
- `src/types/` — Interfaces TypeScript (11 archivos).
- `src/styles/` — `globals.css` (imports, base, utilities) + `tokens.css` (design tokens CSS custom properties y @theme Tailwind).
- `src/design-system/` — `icons.ts` (registro centralizado de iconos Lucide).
- `src/config/` — `routeMap.ts` (mapa hreflang ES/EN).
- `src/utils/` — Utilidades (no inspeccionado en detalle).
- `public/assets/` — Imágenes, fuentes (Hamilton woff2/woff), logos SVG.

---

## 2. Complete Route / Page Map

### Page: Home
- **Route:** `/es`
- **Source file:** `src/pages/HomePage.tsx`
- **Page purpose:** Página principal. Presenta la propuesta de valor, tratamientos destacados, diferenciadores, fundadora, reviews y CTA final.
- **Primary conversion goal:** Reserva de evaluación de piel
- **Secondary conversion goal:** WhatsApp contact
- **Main CTA:** "Reserva tu evaluación" → `/es/reservar`
- **Secondary CTA:** "Ver tratamientos" → scroll
- **Target user intent:** Conocer DERMA.M, explorar servicios, agendar primera visita
- **Notes:** Redirect automático de `/` a `/es`. Catch-all `*` también redirige a `/es`.

### Page: PRF Landing
- **Route:** `/es/plasma-rico-en-plaquetas-west-palm-beach`
- **Source file:** `src/pages/PrfLandingPage.tsx`
- **Page purpose:** Landing page de tratamiento Tier 1 — Plasma Rico en Plaquetas y Fibrina
- **Primary conversion goal:** Agendar evaluación de piel
- **Main CTA:** "Agenda tu evaluación de piel"
- **Target user intent:** Información detallada sobre PRF, confianza para agendar

### Page: PostOp Landing
- **Route:** `/es/postoperatorio-west-palm-beach`
- **Source file:** `src/pages/PostOpLandingPage.tsx`
- **Page purpose:** Landing page Tier 1 — Recuperación post-operatoria
- **Primary conversion goal:** Consultar caso por WhatsApp
- **Main CTA:** "Consulta tu caso"
- **Target user intent:** Paciente post-cirugía buscando drenaje linfático y recuperación

### Page: Deep Facial Cleansing Landing
- **Route:** `/es/limpieza-facial-profunda`
- **Source file:** `src/pages/DeepFacialCleansingLandingPage.tsx`
- **Page purpose:** Landing page Tier 1 — Limpieza Facial Profunda
- **Primary conversion goal:** Reservar cita
- **Main CTA:** "Reserva tu cita"
- **Target user intent:** Primera visita, limpieza base, diagnóstico de piel

### Page: Facial Treatments Hub
- **Route:** `/es/tratamientos-faciales`
- **Source file:** `src/pages/FacialTreatmentsHubPage.tsx`
- **Page purpose:** Catálogo hub de tratamientos faciales (6 categorías, 21+ tratamientos)
- **Primary conversion goal:** Evaluación gratuita de piel
- **Main CTA:** "Evalúa tu piel — gratis"
- **Data source:** `src/data/facialHubContent.ts`

### Page: Body Treatments Hub
- **Route:** `/es/tratamientos-corporales`
- **Source file:** `src/pages/BodyTreatmentsHubPage.tsx`
- **Page purpose:** Catálogo hub de tratamientos corporales (6 categorías)
- **Data source:** `src/data/bodyHubContent.ts`

### Page: Laser & Light Hub
- **Route:** `/es/laser-y-luz`
- **Source file:** `src/pages/LaserLightHubPage.tsx`
- **Page purpose:** Catálogo hub de tratamientos láser y luz (3 categorías)
- **Data source:** `src/data/laserLightHubContent.ts`

### Page: Dental Hub
- **Route:** `/es/dental`
- **Source file:** `src/pages/DentalHubPage.tsx`
- **Page purpose:** Catálogo hub de servicios dentales estéticos (2 categorías)
- **Data source:** `src/data/dentalHubContent.ts`

### Page: IV Therapy
- **Route:** `/es/iv-therapy`
- **Source file:** `src/pages/IVTherapyPage.tsx`
- **Page purpose:** Página de IV Therapy con catálogo de kits
- **Data source:** `src/data/ivTherapyContent.ts` + `src/data/ivKits.ts`

### Page: About
- **Route:** `/es/sobre-nosotros`
- **Source file:** `src/pages/AboutPage.tsx`
- **Page purpose:** Historia de la fundadora, equipo, valores, certificaciones
- **Data source:** `src/data/aboutContent.ts` + `src/data/teamMembers.ts`

### Page: Contact
- **Route:** `/es/contacto`
- **Source file:** `src/pages/ContactPage.tsx`
- **Page purpose:** Canales de contacto, formulario, mapa, FAQ
- **Data source:** `src/data/contactContent.ts`

### Page: Booking
- **Route:** `/es/reservar`
- **Source file:** `src/pages/BookingPage.tsx`
- **Page purpose:** Selector de tratamiento para reservar vía Square o WhatsApp
- **Data source:** `src/data/bookingContent.ts`

### Tier 3 Treatment Pages (21 páginas)

Todas usan `Tier3TreatmentTemplate` con datos de `src/data/tier3Treatments.ts`:

| Route | Source File | Treatment |
|-------|-----------|-----------|
| `/es/hidrofacial` | `src/pages/es/HidrofacialPage.tsx` | Hidrofacial |
| `/es/microneedling` | `src/pages/es/MicroneedlingPage.tsx` | Microneedling Dermapen 3 |
| `/es/blanqueamiento-dental` | `src/pages/es/BlanqueamientoDentalPage.tsx` | Blanqueamiento Dental |
| `/es/limpieza-dental` | `src/pages/es/LimpiezaDentalPage.tsx` | Limpieza Dental |
| `/es/peel-coreano` | `src/pages/es/PeelCoreanoPage.tsx` | Peel Coreano |
| `/es/oxigenoterapia-facial` | `src/pages/es/OxigenoterapiaFacialPage.tsx` | Oxigenoterapia Facial |
| `/es/cavitacion` | `src/pages/es/CavitacionPage.tsx` | Cavitación |
| `/es/radiofrecuencia-corporal` | `src/pages/es/RadiofrecuenciaCorporalPage.tsx` | Radiofrecuencia Corporal |
| `/es/drenaje-linfatico-corporal` | `src/pages/es/DrenajeLinfaticoCorporalPage.tsx` | Drenaje Linfático Corporal |
| `/es/radiofrecuencia-facial` | `src/pages/es/RadiofrecuenciaFacialPage.tsx` | Radiofrecuencia Facial |
| `/es/ultrasonido-facial` | `src/pages/es/UltrasonidoFacialPage.tsx` | Ultrasonido Facial |
| `/es/plasma-ozono` | `src/pages/es/PlasmaOzonoPage.tsx` | Plasma Ozono |
| `/es/plasma-frio` | `src/pages/es/PlasmaFrioPage.tsx` | Plasma Frío |
| `/es/carboxiterapia-facial` | `src/pages/es/CarboxiterapiaFacialPage.tsx` | Carboxiterapia Facial |
| `/es/ems-facial-enyong` | `src/pages/es/EmsFacialEnyongPage.tsx` | EMS Facial + Enyong |
| `/es/masajes-faciales-marcacion-mandibular` | `src/pages/es/MasajesFacialesMarcacionMandibularPage.tsx` | Masajes Marcación Mandibular |
| `/es/dermabrasion-facial` | `src/pages/es/DermabrasionFacialPage.tsx` | Dermabrasión Facial |
| `/es/masajes-relajantes-faciales` | `src/pages/es/MasajesRelajantesFacialesPage.tsx` | Masajes Relajantes Faciales |
| `/es/maderoterapia-facial` | `src/pages/es/MaderoterapiaFacialPage.tsx` | Maderoterapia Facial |
| `/es/hifu-facial` | `src/pages/es/HifuFacialPage.tsx` | HIFU Facial |
| `/es/evefus-10-radiofrecuencia-fraccionada` | `src/pages/es/Evefus10RadiofrecuenciaFraccionadaPage.tsx` | Evefus 10 |

### English Route Placeholders (sin contenido traducido)
- `/en/body-treatments` → reutiliza `BodyTreatmentsHubPage` (contenido en español)
- `/en/iv-therapy` → reutiliza `IVTherapyPage`
- `/en/laser-and-light` → reutiliza `LaserLightHubPage`
- `/en/dental` → reutiliza `DentalHubPage`
- `/en/facial-treatments` → reutiliza `FacialTreatmentsHubPage`

**Total rutas españolas:** 33 (12 páginas principales + 21 Tier 3)
**Total rutas inglesas:** 5 placeholders (contenido NO traducido)

---

## 3. Page-by-Page Section Breakdown

### Page: Home (`/es`)

**Section 1: HeroSection**
- Componente: `src/components/sections/home/HeroSection.tsx`
- Headline: "Salud profesional para *tu* piel"
- Subheadline: "Tratamientos estéticos personalizados para cuidar tu piel, realzar tu belleza natural y lograr resultados visibles con un enfoque profesional."
- CTA primario: "Reserva tu evaluación" → `/es/reservar`
- CTA secundario: "Ver tratamientos" → scroll
- Eyebrow: "4.9 Google · MedSpa Certificado · WPB"
- Trust items: Protocolos certificados / Productos profesionales / Tecnología avanzada / Ambiente bilingüe
- Imagen: `/assets/pages/home/hero-home.jpg`
- Video: campo vacío (no activado)

**Section 2: TreatmentsSection**
- Componente: `src/components/sections/home/TreatmentsSection.tsx`
- Eyebrow: "Tratamientos destacados"
- Headline: "Soluciones efectivas para cada necesidad"
- Muestra 3 tarjetas de tratamientos destacados (PRF, Post-Op, Limpieza Facial Profunda)
- Datos: `src/data/treatments.ts` → `featuredTreatments[]`

**Section 3: DifferentiatorsSection**
- Componente: `src/components/sections/home/DifferentiatorsSection.tsx`
- Stats: 10+ Años experiencia / 1,000+ Pacientes / 100% Personalizado
- 3 beneficios: Diagnóstico antes de tratamiento / Protocolos certificados / Resultados documentados
- Imagen de fondo: `/assets/pages/home/home-botanical.jpg`

**Section 4: FounderSection**
- Componente: `src/components/sections/home/FounderSection.tsx`
- Nombre: Nancy Nieto
- Título: "Fundadora de DERMA.M Skin Health"
- Bio: "Con más de 10 años de experiencia..."
- Quote: "Diagnóstico antes de tratamiento. Siempre."
- CTA: "Conoce mi enfoque"
- Imagen: `/assets/pages/home/nancy-nieto-founder-home.jpg`

**Section 5: GoogleReviews**
- Componente: `src/components/GoogleReviews.tsx`
- Props: `filter="featured" maxItems={3} showMeta`
- Datos: `src/data/reviews.json`

**Section 6: FinalCTA**
- Componente: `src/components/sections/home/FinalCTA.tsx`
- Headline: "Tu mejor piel comienza con una *decisión*"
- Body: "Agenda tu consulta y recibe una evaluación personalizada de tu piel."
- CTA primario: "Reserva tu evaluación"
- CTA secundario: "Escríbenos por WhatsApp"

---

### Page: PRF Landing (`/es/plasma-rico-en-plaquetas-west-palm-beach`)
Secciones en orden: PrfHeroSection → PrfAudienceSection → PrfEducationSection → PrfBenefitsSection → PrfProtocolSection → PrfResultsSection → GoogleReviews(prf) → PrfFounderSection → PrfRelatedTreatments → PrfFAQSection → PrfFinalCTA

### Page: PostOp Landing (`/es/postoperatorio-west-palm-beach`)
Secciones en orden: PostOpHeroSection → PostOpSurgeryTypesSection → PostOpUrgencySection → PostOpProtocolSection → PostOpFounderSection → GoogleReviews(postoperatorio) → PostOpResultsSection → PostOpRelatedTreatments → PostOpFAQSection → PostOpFinalCTA

### Page: Deep Facial Landing (`/es/limpieza-facial-profunda`)
Secciones en orden: DeepFacialHeroSection → DeepFacialAudienceSection → DeepFacialProtocolSection → DeepFacialBenefitsSection → DeepFacialUpsellSection → DeepFacialResultsSection → GoogleReviews(limpieza_facial) → DeepFacialFounderSection → DeepFacialRelatedTreatments → DeepFacialFAQSection → DeepFacialFinalCTA

### Hub Pages (Facial, Corporal, Láser, Dental)
Todas usan `HubPageTemplate` que renderiza:
HubHeroSection → HubIntroSection → HubCatalogSections → HubFeaturedTreatments → HubAllTreatmentsGrid → HubSocialProofSection → HubFAQSection → HubFinalCTA

### Tier 3 Treatment Pages (21 páginas)
Todas usan `Tier3TreatmentTemplate` que renderiza:
Tier3HeroSection → Tier3QuickFitSection → Tier3ExplanationSection → Tier3BenefitsSection → Tier3SessionStepsSection → Tier3SafetySection → Tier3FAQSection → Tier3RelatedTreatments → Tier3FinalCTA

---

## 4. Full Copy Extraction

> El copy completo se encuentra en los archivos de datos. A continuación se documenta la fuente de cada bloque de copy.

| Página | Archivo de datos |
|--------|-----------------|
| Home | `src/data/homeContent.ts` |
| PRF | `src/data/prfLanding.ts` |
| Post-Op | `src/data/postOpLanding.ts` |
| Limpieza Facial | `src/data/deepFacialLanding.ts` |
| Faciales Hub | `src/data/facialHubContent.ts` |
| Corporales Hub | `src/data/bodyHubContent.ts` |
| Láser Hub | `src/data/laserLightHubContent.ts` |
| Dental Hub | `src/data/dentalHubContent.ts` |
| IV Therapy | `src/data/ivTherapyContent.ts` + `src/data/ivKits.ts` |
| About | `src/data/aboutContent.ts` + `src/data/teamMembers.ts` |
| Contact | `src/data/contactContent.ts` |
| Booking | `src/data/bookingContent.ts` |
| Tier 3 (21 pág) | `src/data/tier3Treatments.ts` |
| Reviews | `src/data/reviews.json` |
| Navegación | `src/data/navigation.ts` |
| Site config | `src/data/siteConfig.ts` |

### Copy clave del sitio (headlines principales)

- **Home hero:** "Salud profesional para *tu* piel"
- **Home tagline:** "Tratamientos estéticos personalizados para cuidar tu piel, realzar tu belleza natural y lograr resultados visibles con un enfoque profesional."
- **Home CTA final:** "Tu mejor piel comienza con una *decisión*"
- **PRF hero:** "Plasma Rico en Fibrina en West Palm Beach"
- **PostOp hero:** "Recuperación Post-Operatorio en West Palm Beach"
- **Deep Facial hero:** "Limpieza Facial Profunda en West Palm Beach"
- **Facial Hub hero:** "Tratamientos *faciales*"
- **Body Hub hero:** "Tratamientos *corporales*"
- **Laser Hub hero:** "Tratamientos *láser y luz*"
- **Dental Hub hero:** "Tratamientos dentales *estéticos*"
- **IV Therapy hero:** "IV Therapy nutrición *intravenosa*"
- **About hero:** "El equipo detrás de tu piel"
- **Contact hero:** "Contáctanos"
- **Booking hero:** "Agenda tu cita"

### Founder quote (consistente en todas las apariciones):
"Diagnóstico antes de tratamiento. Siempre."

---

## 5. Navigation Architecture

### Header
- **Componente:** `src/components/layout/Navbar.tsx`
- **Desktop nav items (10):** Faciales · PRF · Limpieza Facial · Corporales · Post-Operatorio · Láser & Luz · Dental · IV Therapy · Nosotros · Contacto
- **Mobile nav items:** Mismos 10 items en overlay full-screen blanco
- **CTA button:** NO hay botón CTA en la navbar (solo links de navegación)
- **Dropdowns:** Soporte para submenús (`link.submenu`) pero ningún nav item actual los usa
- **Active state:** Font bold + opacity 100% para ruta activa (`location.pathname === link.href`)
- **Sticky:** Fijo en `top-0`, `z-50`. Background `bg-base-900` (oscuro). Se comprime de `py-5` a `py-3` al hacer scroll.
- **Logo:** `/assets/logos/logo_dermam_footer.svg` (mismo SVG para navbar y footer, 80px height)
- **Nota:** La navbar NO tiene botón de CTA (ej. "Reservar" o "Agendar"). Solo links de navegación.

### Footer
- **Componente:** `src/components/layout/Footer.tsx`
- **Background:** `bg-base-800` con texto `text-base-100`
- **4 columnas:**
  1. Logo + tagline + social icons (Instagram, Facebook)
  2. Tratamientos: PRF, Post-Operatorio, Limpieza Facial Profunda, IV Therapy, Reservar Cita
  3. Empresa: Nosotros, Contacto, Reservar, Políticas de Privacidad (href="#")
  4. Centro: Dirección, Teléfono, Horario
- **Language switcher:** Botones ES/EN en footer (no funcionales — solo visual)
- **Legal:** "© {year} DERMA.M Skin Health · Todos los derechos reservados."
- **Nota:** "Políticas de Privacidad" apunta a `#` — no existe página real.

### Internal linking
- Home → PRF, Post-Op, Limpieza Facial (featured treatments cards)
- PRF → Microneedling, Limpieza Facial, Hidrofacial (related treatments)
- PostOp → Drenaje Linfático (#), Radiofrecuencia Corporal (#), Estrías y Celulitis (#) — algunos links rotos (href="#")
- Deep Facial → PRF, Microneedling (#), Hidratación (#) — algunos links rotos
- Hub pages → tratamientos individuales + `/es/reservar`
- Tier 3 → related treatments (cross-links entre Tier 3 pages)

---

## 6. Booking / CTA / Conversion Flows

### CTAs principales por página

| Página | CTA texto | Destino | Tipo |
|--------|----------|---------|------|
| Home hero | "Reserva tu evaluación" | `/es/reservar` | Internal route |
| Home hero secondary | "Ver tratamientos" | Scroll | Scroll anchor |
| Home final CTA | "Reserva tu evaluación" | `/es/reservar` | Internal route |
| Home final CTA secondary | "Escríbenos por WhatsApp" | wa.me | WhatsApp |
| PRF hero | "Agenda tu evaluación de piel" | Scroll to content | Scroll |
| PRF final CTA | "Agendar evaluación personalizada" | UNKNOWN / NOT FOUND IN CODEBASE (likely `/es/reservar` or WhatsApp) | UNKNOWN |
| PostOp hero | "Consulta tu caso" | WhatsApp (postop message) | WhatsApp |
| Deep Facial hero | "Reserva tu cita" | UNKNOWN (likely `/es/reservar`) | Internal route |
| All Hub pages | "Evalúa tu piel — gratis" | `/es/reservar` | Internal route |
| All Hub sections | "Agenda tu evaluación" + "Escríbenos por WhatsApp" | `/es/reservar` + wa.me | Mixed |
| Tier 3 pages | "Agendar Evaluación" | `/es/reservar` | Internal route |
| Tier 3 secondary | "Consultar por WhatsApp" | wa.me | WhatsApp |

### WhatsApp FAB (global)
- **Componente:** `src/components/ui/WhatsAppFAB.tsx`
- **Posición:** Fixed bottom-right, z-50
- **Ícono:** MessageCircle (Lucide), bg-base-900, 56x56px circular
- **Mensajes prefill dinámicos por ruta:**
  - PRF pages: "Hola, me interesa el tratamiento de PRF en DERMA.M."
  - PostOp pages: "Hola, me interesa el tratamiento de Post-Operatorio en DERMA.M. Cuéntanos tu caso."
  - Deep Facial pages: "Hola, me interesa agendar una Limpieza Facial Profunda en DERMA.M."
  - IV Therapy pages: "Hola, me interesa el tratamiento de IV Therapy en DERMA.M."
  - Default: "Hola, me interesa agendar una evaluación en DERMA.M."
- **Nota:** Las Tier 3 pages y Hub pages usan el mensaje default genérico.

### Booking Page Flow
- **8 opciones de tratamiento** en selector:
  1. Evaluación gratuita → Square URL (featured)
  2. PRF → Square URL
  3. Limpieza Facial → Square URL
  4. Microneedling → Square URL
  5. Post-Operatorio → WhatsApp
  6. Tratamientos Corporales → WhatsApp
  7. Láser & Luz → WhatsApp
  8. Dental → WhatsApp
- **Square URLs:** Todas apuntan a `squareup.com/appointments/book/dermam/...` — URLs placeholder, necesitan verificación de funcionamiento real.
- **Tracking labels:** Presentes en data (`tracking_label` field) pero NO hay implementación de analytics visible en el código.

### Contact Form
- **Componente:** `src/components/sections/contact/ContactForm.tsx`
- **Campos:** Nombre, Email, Teléfono, Tratamiento (select con 9 opciones), Mensaje (textarea)
- **Required fields:** UNKNOWN / NOT FOUND IN CODEBASE (necesita inspección del componente)
- **Submission destination:** NO hay endpoint de backend visible. El formulario probablemente no envía datos.
- **Success/error states:** UNKNOWN / NOT FOUND IN CODEBASE

---

## 7. Reusable Component Inventory

### Layout Components

| Componente | Archivo | Usado en |
|-----------|---------|----------|
| PageShell | `src/components/layout/PageShell.tsx` | Todas las páginas |
| Navbar | `src/components/layout/Navbar.tsx` | Via PageShell |
| Footer | `src/components/layout/Footer.tsx` | Via PageShell |
| SEO | `src/components/layout/SEO.tsx` | Via PageShell |

### Templates

| Componente | Archivo | Usado en |
|-----------|---------|----------|
| HubPageTemplate | `src/components/templates/HubPageTemplate.tsx` | 4 hub pages |
| Tier3TreatmentTemplate | `src/components/templates/Tier3TreatmentTemplate.tsx` | 21 tier 3 pages |

### UI Components (33 total)

| Componente | Archivo | Propósito |
|-----------|---------|-----------|
| Button | `ui/Button.tsx` | Botón con variants: primary, secondary, outline, ghost. Soporta `to` (Link), `href` (anchor), o button. |
| Card | `ui/Card.tsx` | Wrapper card genérico |
| Container | `ui/Container.tsx` | Container con max-width y padding |
| WhatsAppFAB | `ui/WhatsAppFAB.tsx` | Floating action button WhatsApp |
| FAQAccordion | `ui/FAQAccordion.tsx` | Acordeón FAQ con expand/collapse |
| SectionHeader | `ui/SectionHeader.tsx` | Header de sección con eyebrow + headline |
| HeroMedia | `ui/HeroMedia.tsx` | Imagen/video hero con overlay |
| HeroTrustPill | `ui/HeroTrustPill.tsx` | Pill de confianza en hero |
| TreatmentCard | `ui/TreatmentCard.tsx` | Tarjeta de tratamiento |
| CompactTreatmentCard | `ui/CompactTreatmentCard.tsx` | Tarjeta compacta |
| HubTreatmentCard | `ui/HubTreatmentCard.tsx` | Tarjeta para hub grids |
| TreatmentCardRail | `ui/TreatmentCardRail.tsx` | Rail horizontal de tarjetas |
| TreatmentBadge | `ui/TreatmentBadge.tsx` | Badge de categoría |
| TreatmentBenefitCard | `ui/TreatmentBenefitCard.tsx` | Tarjeta de beneficio |
| TreatmentStepCard | `ui/TreatmentStepCard.tsx` | Tarjeta de paso del protocolo |
| ResponsiveCardGroup | `ui/ResponsiveCardGroup.tsx` | Grupo de cards responsive |
| ResponsiveImage | `ui/ResponsiveImage.tsx` | Imagen responsive |
| SectionMedia | `ui/SectionMedia.tsx` | Media de sección |
| StatItem | `ui/StatItem.tsx` | Item de estadística |
| TrustItem | `ui/TrustItem.tsx` | Item de confianza |
| MotionAvatar | `ui/MotionAvatar.tsx` | Avatar animado |
| BeforeAfterSlider | `ui/BeforeAfterSlider.tsx` | Slider antes/después |
| BookingFeaturedCard | `ui/BookingFeaturedCard.tsx` | Card featured en booking |
| BookingTreatmentRow | `ui/BookingTreatmentRow.tsx` | Row de tratamiento en booking |
| ChannelCard | `ui/ChannelCard.tsx` | Card de canal de contacto |
| ContactChannelCard | `ui/ContactChannelCard.tsx` | Card de canal en contacto |
| ExternalBookingButton | `ui/ExternalBookingButton.tsx` | Botón de booking externo |
| FormField | `ui/FormField.tsx` | Campo de formulario |
| SelectField | `ui/SelectField.tsx` | Select field |
| TextareaField | `ui/TextareaField.tsx` | Textarea field |
| SpecialtyFilter | `ui/SpecialtyFilter.tsx` | Filtro por especialidad |
| IVKitCard | `ui/IVKitCard.tsx` | Tarjeta de kit IV |
| VCardButton | `ui/VCardButton.tsx` | Botón para descargar vCard |

### Google Reviews
- **Componente:** `src/components/GoogleReviews.tsx`
- **Props:** filter (string), maxItems (number), showMeta (boolean)
- **Datos:** `src/data/reviews.json` (41KB, reviews pre-procesadas)
- **Usado en:** Home, PRF, PostOp, DeepFacial (con filtros diferentes)

---

## 8. Design System / Styling Extraction

### DESIGN.MD
- **¿Existe?** SÍ
- **Archivo:** `D:\Derma_Content\DermaM-WebSite\DESIGN.md` (40,359 bytes)
- **Summary:** Documento extenso que define paleta monocromática (base-900 a base-100), tipografía (Poppins + Hamilton), reglas de layout, botones, cards, sombras, bordes, overlays, hero, FAB, motion, y componentes. Es la fuente de verdad oficial para decisiones visuales.

### Color system (de `tokens.css` + `DESIGN.md`)

```
--color-base-900: #141313 (texto primario, botones primarios, navbar, footer)
--color-base-800: #191818 (footer bg, superficies oscuras)
--color-base-700: #333232
--color-base-600: #4e4d4d (texto secundario)
--color-base-500: #666666 (texto muted)
--color-base-400: #b3b2b2
--color-base-300: #cccaca (texto en superficies oscuras)
--color-base-200: #e6e4e4 (superficie soft)
--color-base-100: #f2f0f1 (canvas / bg principal)
--color-surface: #ffffff (cards, surfaces)
```

Semánticos:
```
--color-canvas: var(--color-base-100)
--color-surface: #ffffff
--color-text-primary: var(--color-base-900)
--color-text-secondary: var(--color-base-600)
--color-border-subtle: rgba(20, 19, 19, 0.12)
--color-border-card: rgba(20, 19, 19, 0.18)
--color-border-card-hover: rgba(20, 19, 19, 0.32)
--color-border-featured: rgba(20, 19, 19, 0.70)
```

Legacy mappings (transición monocromática):
```
--color-sage: var(--color-base-600)
--color-lavender-soft: var(--color-base-200)
--color-linen: var(--color-base-200)
--color-pearl: var(--color-base-300)
```

### Typography
- **Primary font:** Poppins (Google Fonts: 300, 400, 500, 600, 700, 800)
- **Accent font:** Hamilton (custom @font-face, woff2/woff, `/assets/fonts/Hamilton.woff2`)
- **Body weight:** 300 (Light) — definido en `globals.css` body
- **Heading hierarchy:** H1-H3 uppercase, body sentence case (per DESIGN.md)
- **Font CSS vars:** `--font-sans: 'Poppins'`, `--font-script: 'Hamilton'`
- **Custom text sizes en @theme:**
  - `text-label-xs`: 0.625rem (10px), letter-spacing 0.15em, weight 500
  - `text-label-2xs`: 0.5625rem (9px)
  - `text-label-sm`: 0.6875rem (11px)

### Spacing / layout
- **Container max:** 1280px (`--container-max-width`)
- **Container padding:** `px-6 md:px-8` (via `.container-custom`)
- **Section padding:** Variable por sección — generalmente `py-20` a `py-24`
- **Base unit:** 8px (DESIGN.md)
- **Grid gap:** 1.25rem (DESIGN.md)

### Buttons (de `Button.tsx`)
- **Base:** `px-8 py-3 rounded-[0.625rem] font-medium text-base`
- **Primary:** `bg-base-900 text-base-100 hover:bg-base-800 shadow-subtle`
- **Secondary/Outline:** `border border-border-card-hover bg-transparent text-base-900 hover:border-border-featured hover:bg-base-200`
- **Ghost:** `bg-transparent text-base-900 hover:bg-base-200`
- **Hover animation:** `hover:-translate-y-0.5` (lift effect)
- **Focus:** `focus:ring-2 focus:ring-offset-2 focus:ring-base-900`

### Cards / surfaces
- **Border radius:** `rounded-[0.625rem]` (buttons), `rounded-[1rem]` (cards), `rounded-[1.25rem]`–`rounded-[1.5rem]` (large sections)
- **Shadow:** `--shadow-subtle: 0 12px 40px rgba(20,19,19,0.04)` — un solo shadow permitido
- **Card borders:** `border-border-card` (rgba 0.18)

### Icons
- **Library:** Lucide React
- **Registry:** `src/design-system/icons.ts` — exporta ~50 iconos + aliases semánticos
- **Pattern:** Todos los componentes importan de `design-system/icons.ts`, nunca directamente de `lucide-react`
- **Sizing:** Variable por contexto (18-28px)
- **Colors:** Monochrome, heredan `currentColor`

### Motion / animation
- **Library:** Motion (Framer Motion) v12.23 — instalado pero uso limitado
- **Section reveals:** UNKNOWN / limitado — la mayoría de las secciones no tienen animaciones de entrada visibles en el código revisado
- **Hover animations:** Button lift (`-translate-y-0.5`), navbar link color transitions (300ms)
- **Reduced motion:** Respetado via `@media (prefers-reduced-motion: reduce)` en `globals.css`

### Glass / Navbar
```css
.glass-nav {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-soft);
}
```
**Nota:** `.glass-nav` está definida pero la navbar actual usa `bg-base-900` sólido, no glass.

---

## 9. Existing DESIGN.MD

- **¿Existe DESIGN.MD?** SÍ
- **Archivo:** `D:\Derma_Content\DermaM-WebSite\DESIGN.md`
- **Tamaño:** 40,359 bytes
- **Tokens documentados:** Paleta monocromática completa (base-900 a base-100), semánticos (canvas, surface, text-primary, etc.), bordes, sombras, tipografía (Poppins + Hamilton), spacing, border-radius
- **Componentes documentados:** Botones, Cards, Inputs, Chips/Badges, Listas, Acordeones, Trust Bar, Hero overlays
- **Reglas de uso documentadas:** Photography-first, section rhythm (canvas→dark→surface alternation), uppercase authority for H1-H3, Hamilton max 1 word per section, body weight 300
- **Contradiciones entre docs e implementación:**
  1. DESIGN.md define `glass-nav` con backdrop-blur, pero la navbar actual usa `bg-base-900` sólido
  2. DESIGN.md menciona a "Gretchen Grueiro" como autoridad clínica, pero el código solo referencia a "Nancy Nieto"
  3. DESIGN.md habla de `border-card-hover` transition 240ms, pero la implementación no siempre aplica esto
  4. `index.html` tiene `lang="en"` pero el contenido principal es en español

---

## 10. Treatment / Service Content Model

### Tier 1 Landings (3 páginas — modelo custom por landing)
- **PRF:** `src/data/prfLanding.ts` — hero, audience, education, benefits, protocol, results, faqs, founder, finalCTA, relatedTreatments
- **PostOp:** `src/data/postOpLanding.ts` — hero, surgeryTypes, urgency, protocol, founder, testimonials, results, faqs, finalCTA, relatedTreatments
- **Deep Facial:** `src/data/deepFacialLanding.ts` — hero, audience, protocol, benefits, upsell, results, testimonials, founder, faqs, finalCTA, relatedTreatments

### Hub Pages (4 hubs — modelo `HubPageContent` de `src/types/hub.ts`)
Campos: type, catalogSections[], seo, hero, intro, featured, allGrid, faqs, socialProof, finalCTA

Cada `catalogSection` tiene: id, eyebrow, title, description, idealFor[], treatments[], primaryCta, secondaryCta

| Hub | Categorías | Tratamientos listados |
|-----|-----------|----------------------|
| Facial | 6 | 21+ |
| Corporal | 6 | 13 |
| Láser | 3 | 3 |
| Dental | 2 | 2 |

### Tier 3 Treatments (modelo `Tier3Treatment` de `src/types/tier3Treatment.ts`)
Campos: id, slugEs, category, title, shortTitle, seoTitle, metaDescription, canonicalEs, eyebrow, h1, subheadline, primaryCta, secondaryCta, heroMedia, quickFacts[], quickFit, explanation, benefits[], sessionSteps[], candidates[], safety, faqs[], relatedTreatmentIds[], finalCta, showPrice, whatsappMessage, isPublished

**Fuente de datos:** `src/data/tier3Treatments.ts` (63KB, 1135 líneas)

**Estructura:** 
- 2 tratamientos custom detallados (Hidrofacial, Microneedling)
- 2 tratamientos dentales custom (Blanqueamiento, Limpieza Dental)
- 3 tratamientos custom adicionales (Peel Coreano, Oxigenoterapia, Cavitación + más)
- 11 tratamientos generados via factory function `createFacialCatalogTreatment()` con estructura estandarizada

### Inconsistencias detectadas en el modelo de datos:
1. Algunos `relatedTreatmentIds` referencian IDs que no existen como Tier 3 pages (ej. `prf-facial`, `carillas`, `dental-evaluacion`, `cuidado-preventivo-dental`)
2. Varios tratamientos corporales en hubs apuntan a `/es/reservar` como placeholder — no tienen página Tier 3 propia
3. El modelo PostOp tiene `testimonials` con `isPlaceholder: true` — contenido no real
4. Deep Facial `relatedTreatments` tienen `href: '#'` — links rotos

---

## 11. Assets / Images Inventory

### Estructura de assets (basado en referencias en datos)
- `/assets/pages/home/` — hero-home.jpg, home-botanical.jpg, nancy-nieto-founder-home.jpg, home-final-cta.jpg, prp-card.jpg, postop-card.jpg, facial-card.jpg
- `/assets/treatments/prf/` — hero.jpg, prf-process.jpg, prf-benefit-1/2/3.jpg, prf-result-1-before/after.jpg, cta.jpg
- `/assets/treatments/postoperatorio/` — hero.jpg, cta.jpg
- `/assets/treatments/limpieza-facial/` — hero.jpg, deepfacial-step-1 a 5.jpg, deepfacial-benefit-1 a 3.jpg, facial-result-1/2-before/after.jpg, cta.jpg
- `/assets/treatments/{treatment-slug}/` — hero.jpg, explanation.jpg, cta.jpg (para cada Tier 3)
- `/assets/treatments/tratamientos-faciales/` — hero.jpg, cta.jpg
- `/assets/treatments/tratamientos-corporales/` — hero.jpg, cta.jpg
- `/assets/treatments/laser-luz/` — hero.jpg, cta.jpg
- `/assets/treatments/dental/` — hero.jpg, cta.jpg
- `/assets/treatments/iv-therapy/` — hero.jpg, cta.jpg
- `/assets/avatars/` — nancy-nieto-founder.jpg, nancy-nieto-founder-about.jpg, specialist-1 a 7.jpg
- `/assets/logos/` — logo_dermam_footer.svg
- `/assets/fonts/` — Hamilton.woff2, Hamilton.woff
- `/assets/images/` — Imágenes genéricas usadas como placeholders en hubs

### Problemas detectados:
1. **Alt text presente en todos los datos** — bien implementado
2. **Imágenes genéricas:** Varios items de hub (body, laser, dental) usan paths genéricos como `/assets/images/body-massage-oil.jpg`, `/assets/images/consultation-room.jpg`, `/assets/images/skin-therapy.jpg` — probablemente stock/placeholder
3. **Imagen de Nancy Nieto reutilizada:** La misma imagen (`nancy-nieto-founder-home.jpg`) se usa en Home, PRF, PostOp y Deep Facial founder sections
4. **No hay optimización de imágenes:** Sin lazy loading, sin srcset, sin formatos WebP/AVIF

---

## 12. Mobile / Responsive Behavior

### Breakpoints usados
- Tailwind defaults: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Navbar desktop/mobile split: `lg:` (1024px)

### Header mobile
- Hamburger menu (`lg:hidden`) → overlay full-screen blanco con links verticales
- Accordion submenu support para items con `submenu[]`
- Menu top offset: `top-[70px]` fijo
- Cierra al hacer click en un link

### Hero mobile
- La mayoría de los heroes usan grid con breakpoint lg: imagen encima, texto debajo en mobile
- Image prompts incluyen "Main subject must remain visible within the center 60% of the frame for mobile crop safety"

### Cards mobile
- Grid cards generalmente `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `TreatmentCardRail` usa scroll horizontal con `scrollbar-hide`

### CTA mobile
- Botones stack verticalmente en mobile (flex-col)
- WhatsApp FAB siempre visible: `fixed bottom-6 right-6`

### Posibles problemas:
1. No hay test de overflow visible en el código
2. Algunas secciones con mucho texto (FAQ, protocol steps) podrían ser demasiado densas en mobile
3. Footer 4 columnas → `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` — correcto

---

## 13. Accessibility / Technical UX Notes

### Implementado
- **Skip to content:** `<a href="#main-content" className="sr-only focus:not-sr-only...">Saltar al contenido principal</a>` en PageShell
- **Semantic HTML:** `<header>`, `<main id="main-content">`, `<footer>`, `<nav>` correctamente usados
- **Focus states:** Todos los botones y links tienen `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900` (visible focus ring)
- **ARIA en navbar:** `aria-label="Cerrar menú"/"Abrir menú"`, `aria-expanded`, `role="dialog"`, `aria-modal="true"`
- **sr-only labels:** WhatsApp FAB, social icons tienen `<span className="sr-only">` text
- **Alt text:** Presente en todas las imágenes referenciadas en datos
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` en globals.css
- **Dark-on-light/light-on-dark:** Navbar (dark bg, light text), body (light bg, dark text), footer (dark bg, light text) — contraste parece adecuado

### Potenciales problemas
1. **Heading hierarchy:** No verificada — posible uso de H3 antes de H2 en algunas secciones
2. **index.html `lang="en"`** pero contenido es en español — debería ser `lang="es"`
3. **Links que usan `<a>` vs `<Link>`:** Footer usa `<a href>` en lugar de React Router `<Link>`, causando full page reload
4. **Formulario de contacto:** Sin `<label>` visible verificada — necesita inspección del componente FormField
5. **Color contrast:** Base-300 (#cccaca) sobre base-800 (#191818) — ratio 6.8:1 (pasa AA). Base-600 (#4e4d4d) sobre surface (#fff) — ratio 7.0:1 (pasa AA). Parece correcto.
6. **WhatsApp FAB z-index:** z-50 puede competir con navbar z-50 — potencial overlap
7. **Keyboard trap potencial:** Mobile menu overlay no tiene focus trap implementado

---

## 14. Known Issues / Inconsistencies Found During Extraction

### Issue: `index.html` lang attribute incorrecto
- **Location:** `index.html` line 2
- **Evidence:** `<html lang="en">` pero todo el contenido principal es en español
- **Why it may matter:** Afecta SEO, screen readers, y browser locale detection
- **Needs auditor review:** Sí

### Issue: Links rotos en related treatments
- **Location:** `src/data/postOpLanding.ts` lines 188, 200, 212; `src/data/deepFacialLanding.ts` lines 231, 242
- **Evidence:** `href: '#'` en tratamientos relacionados (Drenaje Linfático, Radiofrecuencia Corporal, Microneedling, Hidratación)
- **Why it may matter:** UX dead-end, usuario no puede navegar al tratamiento
- **Needs auditor review:** Sí

### Issue: RelatedTreatmentIds con IDs inexistentes
- **Location:** `src/data/tier3Treatments.ts`
- **Evidence:** IDs como `prf-facial`, `carillas`, `dental-evaluacion`, `cuidado-preventivo-dental` no tienen match en `tier3Treatments` array
- **Why it may matter:** Related treatments section mostrará cards vacías o errores
- **Needs auditor review:** Sí

### Issue: Testimonios placeholder
- **Location:** `src/data/postOpLanding.ts` (testimonials), `src/data/bodyHubContent.ts`, `src/data/laserLightHubContent.ts`, `src/data/dentalHubContent.ts`, `src/data/facialHubContent.ts`
- **Evidence:** `isPlaceholder: true` en múltiples testimonials
- **Why it may matter:** Reviews falsas pueden afectar credibilidad y cumplimiento FTC
- **Needs auditor review:** Sí

### Issue: Navbar sin CTA button
- **Location:** `src/components/layout/Navbar.tsx`
- **Evidence:** Solo links de navegación, sin botón destacado de "Reservar" o "Agendar"
- **Why it may matter:** Pierde conversión en la experiencia de navegación — el CTA principal no está accesible sin scroll
- **Needs auditor review:** Sí

### Issue: Privacy policy no existe
- **Location:** `src/data/navigation.ts` line 28
- **Evidence:** `{ label: 'Políticas de Privacidad', href: '#' }`
- **Why it may matter:** Legal compliance, confianza del usuario, formulario de contacto referencia política
- **Needs auditor review:** Sí

### Issue: Formulario de contacto sin backend
- **Location:** `src/components/sections/contact/ContactForm.tsx`
- **Evidence:** No se encontró endpoint de envío, API, ni integración con servicio de email
- **Why it may matter:** El formulario puede no enviar nada — UX frustrante
- **Needs auditor review:** Sí

### Issue: Square URLs placeholder
- **Location:** `src/data/bookingContent.ts`
- **Evidence:** URLs como `squareup.com/appointments/book/dermam/free-eval` — parecen placeholder no verificadas
- **Why it may matter:** Click en "Agendar" puede llevar a 404 en Square
- **Needs auditor review:** Sí

### Issue: English routes sirven contenido en español
- **Location:** `src/App.tsx` lines 91-95
- **Evidence:** `/en/body-treatments`, `/en/iv-therapy`, etc. renderizan el mismo componente español
- **Why it may matter:** SEO confuso, user experience inconsistente para usuarios angloparlantes
- **Needs auditor review:** Sí

### Issue: Duplicación de scroll-to-top
- **Location:** `src/App.tsx` (ScrollToTop component) + landing pages (useEffect scrollTo)
- **Evidence:** `ScrollToTop` en App level + `window.scrollTo(0,0)` en PrfLandingPage, PostOpLandingPage, DeepFacialCleansingLandingPage
- **Why it may matter:** Redundancia leve, no es un bug pero indica falta de estandarización
- **Needs auditor review:** No

### Issue: Poppins weight 800 missing en index.html
- **Location:** `index.html` line 19
- **Evidence:** Google Fonts carga `wght@300;400;500;600;700` pero `globals.css` carga `wght@300;400;500;600;700;800`. Discrepancia — la primera carga (HTML) no incluye 800.
- **Why it may matter:** FOUT para headlines que usan weight 800 (display-hero)
- **Needs auditor review:** Sí

### Issue: Glass-nav utility definida pero no usada
- **Location:** `src/styles/globals.css` line 31-35
- **Evidence:** `.glass-nav` con backdrop-blur definida pero la navbar usa `bg-base-900` sólido
- **Why it may matter:** Código muerto, posible intención de diseño no implementada
- **Needs auditor review:** No

### Issue: DESIGN.md menciona Gretchen Grueiro, código usa Nancy Nieto
- **Location:** DESIGN.md vs todas las referencias en `src/data/`
- **Evidence:** DESIGN.md: "Clinical funnel CTA logic and authority positioning around Gretchen Grueiro" vs código: `Nancy Nieto` en todos los datos
- **Why it may matter:** DESIGN.md puede estar desactualizado o referir a un nombre anterior
- **Needs auditor review:** Sí

---

## 15. Files Reviewed

| Archivo | Razón | Hallazgo clave |
|---------|-------|---------------|
| `package.json` | Stack tecnológico | React 19, Vite 6, TW4, Motion, Lucide |
| `vite.config.ts` | Build config | SSG plugin, hreflang routing |
| `index.html` | Entry point | lang="en" incorrecto, Poppins 800 falta |
| `src/main.tsx` | App bootstrap | Hydration/createRoot isomórfico |
| `src/App.tsx` | Routes | 33 rutas ES + 5 EN placeholder |
| `src/config/routeMap.ts` | SEO hreflang | SUPPORT_ENGLISH = false |
| `src/styles/tokens.css` | Design tokens | Paleta monocromática completa |
| `src/styles/globals.css` | Global styles | Fonts, utilities, base |
| `src/design-system/icons.ts` | Icon registry | ~50 Lucide icons + aliases |
| `src/data/siteConfig.ts` | Business config | Dirección, teléfono, WhatsApp, social |
| `src/data/navigation.ts` | Nav links | 10 desktop nav items, footer links |
| `src/data/homeContent.ts` | Home content | Hero, differentiators, founder, CTA |
| `src/data/treatments.ts` | Featured treatments | 3 treatments (PRF, PostOp, Facial) |
| `src/data/prfLanding.ts` | PRF content | Full landing page data |
| `src/data/postOpLanding.ts` | PostOp content | Full landing page data |
| `src/data/deepFacialLanding.ts` | Deep Facial content | Full landing page data |
| `src/data/facialHubContent.ts` | Facial hub | 6 categories, 21+ treatments |
| `src/data/bodyHubContent.ts` | Body hub | 6 categories, 13 treatments |
| `src/data/laserLightHubContent.ts` | Laser hub | 3 categories |
| `src/data/dentalHubContent.ts` | Dental hub | 2 categories |
| `src/data/ivTherapyContent.ts` | IV Therapy | 8 kits, FAQ, CTA |
| `src/data/aboutContent.ts` | About | Founder story, values |
| `src/data/teamMembers.ts` | Team | 8 members (1 founder + 7) |
| `src/data/contactContent.ts` | Contact | Channels, form, map, FAQ |
| `src/data/bookingContent.ts` | Booking | 8 treatment options, Square URLs |
| `src/data/schema.ts` | JSON-LD | LocalBusiness schema |
| `src/data/trustItems.ts` | Trust | 4 trust items |
| `src/data/tier3Treatments.ts` | Tier 3 | 21+ treatments, factory function |
| `src/components/layout/Navbar.tsx` | Navigation | Dark navbar, no CTA button |
| `src/components/layout/Footer.tsx` | Footer | 4-col, dark bg, lang switcher |
| `src/components/layout/PageShell.tsx` | Page wrapper | Skip link, navbar, footer, FAB |
| `src/components/layout/SEO.tsx` | SEO head | Helmet, OG, Twitter, hreflang, schema |
| `src/components/ui/Button.tsx` | Button | 4 variants, lift hover |
| `src/components/ui/WhatsAppFAB.tsx` | WhatsApp FAB | Dynamic prefill by route |
| `src/components/templates/HubPageTemplate.tsx` | Hub template | 8 sections |
| `src/components/templates/Tier3TreatmentTemplate.tsx` | Tier 3 template | 9 sections + FAQ schema |
| `src/pages/HomePage.tsx` | Home page | 6 sections |
| `src/pages/PrfLandingPage.tsx` | PRF page | 11 sections |
| `src/pages/PostOpLandingPage.tsx` | PostOp page | 10 sections |
| `src/pages/DeepFacialCleansingLandingPage.tsx` | Deep Facial page | 11 sections |
| All `src/components/sections/` dirs | Section inventory | 10 section groups, 63 section components |
| All `src/components/ui/` | UI inventory | 33 UI components |

---

## 16. Missing Information Needed for External Audit

1. **Screenshots del sitio en producción** — No se pudieron generar (localhost no accesible desde agente cloud)
2. **Google Analytics / conversion tracking data** — No hay implementación visible de GA, GTM, Meta Pixel, o tracking alguno en el código
3. **Métricas de conversión actuales** — UNKNOWN
4. **Booking flow real en Square** — Las URLs de Square necesitan verificación manual
5. **Formulario de contacto backend** — No hay endpoint visible — ¿Envía datos? ¿A dónde?
6. **Imágenes reales** — Los archivos de imagen no fueron inspeccionados visualmente (solo rutas)
7. **Performance metrics** — Sin Lighthouse, Core Web Vitals, o análisis de bundle size
8. **Real Google Reviews data** — `reviews.json` existe (41KB) pero contenido no fue extraído en detalle
9. **Competitor analysis** — No disponible en codebase
10. **Business priorities** — ¿Cuáles son los tratamientos más rentables? ¿Cuál es el embudo de conversión prioritario?
11. **Target audience demographics** — ¿Edad, género, idioma, ubicación geográfica precisa?
12. **Precios** — `showPrice: false` en todos los tratamientos — ¿Es intencional?
13. **Estado del dominio dermamskinhealth.com** — ¿Está desplegado? ¿Hosting?
14. **Privacy Policy content** — No existe como página
15. **Mobile user percentage** — Para priorizar optimización mobile vs desktop
