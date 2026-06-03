# DERMA.M Site Audit Report

Scope: `src/components/sections/` and `src/components/ui/` only. Read-only audit generated against `DESIGN.md` rules.

### src/components/sections/about/AboutFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L22: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10 text-center lg:text-left">`<br>L22: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10 text-center lg:text-left">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/about/AboutFounderStorySection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L59: hardcoded arbitrary font size `text-[10px]` ? `<div className="text-[10px] text-text-secondary uppercase tracking-[0.1em] font-semibold">{stat.label}</div>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L43: `<div className="prose prose-sage max-w-none mb-10">`

### src/components/sections/about/AboutHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/about/CertificationsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L13: possible card using `bg-canvas` background ? `<section className="py-16 bg-canvas border-y border-border-soft">`
- ? TYPOGRAPHY: L21: card/subsection heading may be uppercase ? `<h3 className="text-sm font-medium uppercase tracking-[0.15em] text-text-primary mb-1">{cert.title}</h3>`<br>L22: hardcoded arbitrary font size `text-[10px]` ? `<p className="text-[10px] text-text-secondary uppercase tracking-[0.15em] font-medium">{cert.subtitle}</p>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/about/TeamMemberCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L19: card rule forbids `ring-*` ? `className={`group flex flex-col items-center bg-white p-6 rounded-[2rem] border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-base-900 hover:-translate-y-1 hover:shadow-subtle ${member.featured ? 'border-base-900 ring-1 ring-base-900/10' : 'border-border-card'}`}`<br>L28: card rule forbids `ring-*` ? `className={member.featured ? 'ring-base-200 ring-offset-4 ring-offset-white' : ''}`<br>L36: possible card using `bg-canvas` background ? `<span className={`inline-block text-[10px] uppercase tracking-[0.15em] font-medium px-2.5 py-1 rounded-full ${member.featured ? 'bg-base-900 text-base-100' : 'bg-canvas text-text-secondary'}`}>`
- ? TYPOGRAPHY: L36: hardcoded arbitrary font size `text-[10px]` ? `<span className={`inline-block text-[10px] uppercase tracking-[0.15em] font-medium px-2.5 py-1 rounded-full ${member.featured ? 'bg-base-900 text-base-100' : 'bg-canvas text-text-secondary'}`}>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/about/TeamSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L22: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/about/ValuesSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L17: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`<br>L33: possible card using `bg-canvas` background ? `<div className="mb-6 p-4 bg-canvas rounded-[2rem] w-fit shadow-sm group-hover:shadow-md transition-shadow">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/booking/BookingHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/booking/BookingInfoSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`
- ? TYPOGRAPHY: L40: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] font-medium uppercase tracking-[0.15em]">Square Appointments</span>`<br>L42: hardcoded arbitrary font size `text-[10px]` ? `<div className="text-[10px] uppercase tracking-[0.15em] font-medium flex gap-4 text-text-secondary">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/booking/BookingTreatmentSelectorSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L15: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/booking/BookingWhatsAppAlternativeSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L9: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/contact/ContactChannelsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L10: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/contact/ContactFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`<br>L29: possible card using `bg-canvas` background ? `className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/contact/ContactForm.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L144: hardcoded arbitrary font size `text-[10px]` ? `<p className="text-[10px] text-text-secondary mb-6 italic">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L18: `message: ''`<br>L47: `const messageText = `Hola DERMA.M, mi nombre es ${formData.name}.`<br>L51: `${formData.message ? `Mensaje: ${formData.message}` : ''}`;`<br>L53: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(messageText)}`;`<br>L137: `id="message"`<br>L139: `value={formData.message}`<br>L140: `onChange={e => setFormData({...formData, message: e.target.value})}`

### src/components/sections/contact/ContactHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/contact/ContactMapSection.tsx
- ? COLOR: L44: banned `sage` color token ? `<div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-4">`<br>L50: banned `sage` color token ? `<ParkingCircle size={16} className="text-sage" />`<br>L57: banned `sage` color token ? `<Clock size={20} className="text-sage" />`<br>L74: banned `sage` color token ? `className="w-full border-sage text-sage hover:bg-sage hover:text-white py-4"`
- ? RADIUS: compliant
- ? CARDS: L17: possible card using `bg-canvas` background ? `<section id="mapa" className="py-24 bg-canvas/30">`<br>L20: card rule forbids `shadow-2xl` ? `<div className="lg:w-3/5 rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-border-card aspect-[16/10] lg:aspect-auto">`
- ? TYPOGRAPHY: L44: hardcoded arbitrary font size `text-[10px]` ? `<div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-4">`<br>L48: h2 missing uppercase class ? `<h2 className="text-3xl font-sans mb-6 leading-tight">{map.address}</h2>`<br>L58: card/subsection heading may be uppercase ? `<h3 className="text-sm font-medium uppercase tracking-[0.15em]">Horarios de atención</h3>`
- ? ICONS: L44: colored icon/text class detected; icons must be monochrome tokens ? `<div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-4">`<br>L50: colored icon/text class detected; icons must be monochrome tokens ? `<ParkingCircle size={16} className="text-sage" />`<br>L57: colored icon/text class detected; icons must be monochrome tokens ? `<Clock size={20} className="text-sage" />`<br>L74: colored icon/text class detected; icons must be monochrome tokens ? `className="w-full border-sage text-sage hover:bg-sage hover:text-white py-4"`
- ? LAYOUT: L27: inline style usage ? `style={{ border: 0 }}`
- ? SAGE: L44: `<div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-4">`<br>L50: `<ParkingCircle size={16} className="text-sage" />`<br>L57: `<Clock size={20} className="text-sage" />`<br>L74: `className="w-full border-sage text-sage hover:bg-sage hover:text-white py-4"`

### src/components/sections/deep-facial/DeepFacialAudienceSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card-like element may not use required `bg-white` card surface ? `className="flex h-[5.625rem] items-center gap-4 p-5 rounded-[2rem] bg-base-600 border border-border-dark hover:border-base-300 hover:-translate-y-1 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialBenefitsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L28: card rule forbids `shadow-2xl` ? `<div className="relative rounded-[2rem] overflow-hidden shadow-2xl">`
- ? TYPOGRAPHY: L45: card/subsection heading may be uppercase ? `<h3 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6 font-sans">{benefit.title}</h3>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`<br>L42: possible card using `bg-canvas` background ? `className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/30 transition-colors"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L23: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L23: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L10: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessageDeepFacial)}`;`

### src/components/sections/deep-facial/DeepFacialFounderSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialProtocolSection.tsx
- ? COLOR: compliant
- ? RADIUS: L21: radius `rounded-t-2xl` not in allowed list ? `<div className="aspect-[4/3] overflow-hidden rounded-t-2xl">`
- ? CARDS: L9: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`
- ? TYPOGRAPHY: L32: card/subsection heading may be uppercase ? `<h3 className="text-sm font-semibold uppercase tracking-wider">{step.title}</h3>`
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialRelatedTreatments.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: L14: h2 missing uppercase class ? `<h2 className="text-3xl text-center mb-16 font-sans">Tratamientos que pueden complementar tu limpieza</h2>`<br>L27: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] text-text-secondary font-medium uppercase tracking-[0.15em] px-3 py-1 bg-base-200/50 rounded-full">{treatment.category}</span>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialResultsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L17: possible card using `bg-canvas` background ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`<br>L17: card-like element may not use required `bg-white` card surface ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`
- ? TYPOGRAPHY: L25: card/subsection heading may be uppercase ? `<h3 className="text-sm font-semibold mb-1 uppercase tracking-[0.15em]">{item.title}</h3>`<br>L26: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] text-text-secondary uppercase tracking-[0.15em]">{item.sessions}</span>`<br>L33: hardcoded arbitrary font size `text-[10px]` ? `<p className="text-[10px] italic text-text-secondary leading-relaxed">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialTestimonialsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L10: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: L29: hardcoded arbitrary font size `text-[10px]` ? `<span className="block text-[10px] text-text-secondary uppercase tracking-[0.15em] bg-base-200 px-3 py-1 rounded-full">{testimonial.treatment}</span>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/deep-facial/DeepFacialUpsellSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L11: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/DifferentiatorsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/FinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L23: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L23: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: L25: h2 missing uppercase class ? `<h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] lg:text-6xl mb-8 leading-tight text-base-100">`<br>L27: hardcoded arbitrary font size `text-[1.56em]` ? `<span className="block lg:inline script-accent normal-case text-[1.56em]">{finalCTA.headlineAccent}</span>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/FounderSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L57: possible card using `bg-canvas` background ? `<div key={idx} className="flex flex-col p-4 bg-canvas rounded-[1rem]">`
- ? TYPOGRAPHY: L59: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] uppercase tracking-wider text-text-secondary">{stat.label.split(' ')[0]}</span>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/HeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L74: hardcoded arbitrary font size `text-[1.42em]` ? `<span className="script-accent inline-block normal-case text-base-300 ml-2 text-[1.42em] align-[-0.08em]">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/TestimonialsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/TreatmentsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/home/TrustBar.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubAllTreatmentsGrid.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubFeaturedTreatments.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L25: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L12: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessage || 'Hola, quiero información.')}`;`

### src/components/sections/hubs/HubHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubIntroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L11: possible card using `bg-canvas` background ? `<section className="relative py-24 bg-canvas overflow-hidden">`
- ? TYPOGRAPHY: L28: hardcoded arbitrary font size `text-[10px]` ? `<div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/hubs/HubSocialProofSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: L62: hardcoded arbitrary font size `text-[10px]` ? `<div className="text-[10px] font-medium text-text-secondary uppercase tracking-[0.15em]">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/iv-therapy/IVKitsGridSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="pt-16 pb-24 bg-canvas" id={id}>`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/iv-therapy/IVTherapyEducationSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card rule forbids `shadow-2xl` ? `<div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">`<br>L49: possible card using `bg-canvas` background ? `<div className="p-6 bg-canvas rounded-[2rem] border border-border-card hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">`<br>L49: card-like element may not use required `bg-white` card surface ? `<div className="p-6 bg-canvas rounded-[2rem] border border-border-card hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">`<br>L55: card-like element may not use required `bg-white` card surface ? `<div className="p-6 bg-base-900 rounded-[2rem] border border-base-900 shadow-md shadow-canvas/10 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/iv-therapy/IVTherapyFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L14: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/iv-therapy/IVTherapyFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L26: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L26: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L13: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.secondaryCTA.whatsappMessage)}`;`

### src/components/sections/iv-therapy/IVTherapyHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`<br>L42: possible card using `bg-canvas` background ? `className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L23: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L23: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L10: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessagePostOp)}`;`

### src/components/sections/postop/PostOpFounderSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L12: `const message = siteConfig.whatsappMessagePostOp;`<br>L13: `const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;`

### src/components/sections/postop/PostOpHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: L36: `const message = siteConfig.whatsappMessagePostOp;`<br>L37: `const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;`

### src/components/sections/postop/PostOpProtocolSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L10: `const message = siteConfig.whatsappMessagePostOp;`<br>L11: `const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;`

### src/components/sections/postop/PostOpRelatedTreatments.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpResultsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L17: possible card using `bg-canvas` background ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`<br>L17: card-like element may not use required `bg-white` card surface ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`
- ? TYPOGRAPHY: L25: card/subsection heading may be uppercase ? `<h3 className="text-sm font-semibold mb-1 uppercase tracking-[0.15em]">{item.title}</h3>`<br>L26: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] text-text-secondary uppercase tracking-[0.15em]">{item.sessions}</span>`<br>L33: hardcoded arbitrary font size `text-[10px]` ? `<p className="text-[10px] italic text-text-secondary leading-relaxed">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpSurgeryTypesSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card-like element may not use required `bg-white` card surface ? `className="flex h-[5.625rem] items-center gap-4 p-5 rounded-[2rem] bg-base-600 border border-border-dark hover:border-base-300 hover:-translate-y-1 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpTestimonialsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L10: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: L29: hardcoded arbitrary font size `text-[10px]` ? `<span className="block text-[10px] text-text-secondary uppercase tracking-[0.15em] bg-base-200 px-3 py-1 rounded-full">{testimonial.treatment}</span>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/postop/PostOpUrgencySection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L17: card rule forbids `ring-*` ? `success: 'border-base-900/40 bg-white shadow-subtle ring-1 ring-base-900/5',`<br>L22: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`<br>L39: possible card using `bg-canvas` background ? `<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: none

### src/components/sections/prf/PrfAudienceSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card-like element may not use required `bg-white` card surface ? `className="flex h-[5.625rem] items-center gap-4 p-5 rounded-[2rem] bg-base-600 border border-border-dark hover:border-base-300 hover:-translate-y-1 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfBenefitsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L31: card/subsection heading may be uppercase ? `<h3 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{benefit.title}</h3>`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfEducationSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L10: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`<br>L34: card-like element may not use required `bg-white` card surface ? `<div className="rounded-[2rem] overflow-hidden bg-base-900 text-base-100 border border-white/10 shadow-xl">`
- ? TYPOGRAPHY: L36: card/subsection heading may be uppercase ? `<h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-center">`<br>L42: hardcoded arbitrary font size `text-[0.68rem]` ? `<div className="px-5 py-4 text-[0.68rem] uppercase tracking-[0.16em] text-base-300 border-b border-white/10">`<br>L45: hardcoded arbitrary font size `text-[0.68rem]` ? `<div className="px-5 py-4 text-[0.68rem] uppercase tracking-[0.16em] text-base-300 border-b border-l border-white/10">`<br>L48: hardcoded arbitrary font size `text-[0.68rem]` ? `<div className="px-5 py-4 text-[0.68rem] uppercase tracking-[0.16em] text-base-100 border-b border-l border-white/10 flex items-center gap-2">`<br>L70: card/subsection heading may be uppercase ? `<h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-base-100 mb-4">`<br>L76: hardcoded arbitrary font size `text-[0.65rem]` ? `<span className="text-[0.65rem] uppercase tracking-[0.15em] text-base-300/70">{item.label}</span>`<br>L84: card/subsection heading may be uppercase ? `<h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-base-100 mb-4 flex items-center gap-2">`<br>L91: hardcoded arbitrary font size `text-[0.65rem]` ? `<span className="text-[0.65rem] uppercase tracking-[0.15em] text-base-300/70">{item.label}</span>`
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: none

### src/components/sections/prf/PrfFAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`<br>L42: possible card using `bg-canvas` background ? `className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfFinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L23: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L23: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: L27: hardcoded arbitrary font size `text-[1.42em]` ? `<span className="script-accent normal-case text-[1.42em] align-[-0.08em] inline-block ml-3">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L10: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessagePrf)}`;`

### src/components/sections/prf/PrfFounderSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfHeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfProtocolSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L8: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas overflow-hidden">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfRelatedTreatments.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfResultsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L17: possible card using `bg-canvas` background ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`<br>L17: card-like element may not use required `bg-white` card surface ? `<div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">`
- ? TYPOGRAPHY: L25: card/subsection heading may be uppercase ? `<h3 className="text-sm font-semibold mb-1 uppercase tracking-[0.15em]">{item.title}</h3>`<br>L26: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] text-text-secondary uppercase tracking-[0.15em]">{item.sessions}</span>`<br>L33: hardcoded arbitrary font size `text-[10px]` ? `<p className="text-[10px] italic text-text-secondary">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/prf/PrfTestimonialsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L11: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3BenefitsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L12: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3ExplanationSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3FAQSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3FinalCTA.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L40: card rule forbids `shadow-2xl` ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`<br>L40: card-like element may not use required `bg-white` card surface ? `<div className="bg-base-900/72 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L14: `whatsappMessage: string;`<br>L24: `whatsappMessage,`<br>L27: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;`

### src/components/sections/tier3/Tier3HeroSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3QuickFitSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L14: possible card using `bg-canvas` background ? `<section className="bg-canvas py-12 relative z-20">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3RelatedTreatments.tsx
- ? COLOR: L55: banned `sage` color token ? `<span className="text-[10px] font-medium text-sage uppercase tracking-[0.15em] mb-3 block">`<br>L58: banned `sage` color token ? `<h3 className="text-xl font-sans text-text-primary mb-4 group-hover:text-sage transition-colors">`<br>L61: banned `sage` color token ? `<div className="flex items-center gap-2 text-sage text-sm font-bold group-hover:gap-3 transition-all">`
- ? RADIUS: compliant
- ? CARDS: L24: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: L55: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] font-medium text-sage uppercase tracking-[0.15em] mb-3 block">`
- ? ICONS: L55: colored icon/text class detected; icons must be monochrome tokens ? `<span className="text-[10px] font-medium text-sage uppercase tracking-[0.15em] mb-3 block">`<br>L58: colored icon/text class detected; icons must be monochrome tokens ? `<h3 className="text-xl font-sans text-text-primary mb-4 group-hover:text-sage transition-colors">`<br>L61: colored icon/text class detected; icons must be monochrome tokens ? `<div className="flex items-center gap-2 text-sage text-sm font-bold group-hover:gap-3 transition-all">`
- ? LAYOUT: compliant
- ? SAGE: L55: `<span className="text-[10px] font-medium text-sage uppercase tracking-[0.15em] mb-3 block">`<br>L58: `<h3 className="text-xl font-sans text-text-primary mb-4 group-hover:text-sage transition-colors">`<br>L61: `<div className="flex items-center gap-2 text-sage text-sm font-bold group-hover:gap-3 transition-all">`

### src/components/sections/tier3/Tier3SafetySection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L14: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/sections/tier3/Tier3SessionStepsSection.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L15: possible card using `bg-canvas` background ? `<section className="py-24 bg-canvas">`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/BeforeAfterSlider.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L56: card-like element may not use required `bg-white` card surface ? `className={`group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border-soft bg-base-900 shadow-xl touch-none select-none ${className}`}`<br>L98: card-like element may not use required `bg-white` card surface ? `className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-100/20 bg-base-900 text-base-100 shadow-xl transition-transform duration-300 group-hover:scale-105"`
- ? TYPOGRAPHY: L85: hardcoded arbitrary font size `text-[0.65rem]` ? `<span className="absolute left-4 top-4 rounded bg-base-900/75 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-base-100 backdrop-blur-sm">`<br>L88: hardcoded arbitrary font size `text-[0.65rem]` ? `<span className="absolute right-4 top-4 rounded bg-base-900/75 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-base-100 backdrop-blur-sm">`
- ? ICONS: compliant
- ? LAYOUT: L74: inline style usage ? `style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}`<br>L94: inline style usage ? `style={{ left: `${position}%` }}`<br>L99: inline style usage ? `style={{ left: `${position}%` }}`
- ? SAGE: none

### src/components/ui/BookingFeaturedCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L35: card rule forbids `ring-*` ? `className="flex items-center justify-center gap-3 px-10 py-5 rounded-[2rem] bg-base-900 text-base-100 text-base font-medium normal-case tracking-normal transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900"`
- ? TYPOGRAPHY: L19: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] font-bold text-base-900 uppercase tracking-[0.2em] mb-3 block">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/BookingTreatmentRow.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: possible card using `bg-canvas` background ? `<div className="flex items-center justify-between p-5 md:p-6 border-b border-border-soft last:border-0 hover:bg-canvas/20 transition-colors group">`<br>L27: card rule forbids `ring-*` ? `className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-[1rem] text-base font-medium normal-case tracking-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 ${`<br>L30: possible card using `bg-canvas` background ? `: 'bg-canvas text-text-secondary border border-border-soft hover:border-base-900/30 hover:text-base-900'`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L2: `import { ExternalLink, MessageCircle } from '../../design-system/icons';`<br>L12: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(treatment.whatsappMessage || '')}`;`<br>L40: `<MessageCircle size={14} className="opacity-70" />`

### src/components/ui/Button.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L29: card rule forbids `ring-*` ? `const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-[1rem] font-medium leading-none tracking-normal normal-case transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 text-base relative';`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/Card.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/ChannelCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L16: card rule forbids `ring-*` ? `? "bg-white border-base-900 ring-1 ring-base-900/10 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"`<br>L26: possible card using `bg-canvas` background ? `<div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-colors ${emphasized ? 'bg-base-900 text-base-100' : 'bg-canvas text-base-900 group-hover:bg-base-900/10'}`}>`
- ? TYPOGRAPHY: L31: card/subsection heading may be uppercase ? `<h3 className="text-sm font-medium text-text-primary uppercase tracking-[0.15em] mb-1">`
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: L1: `import { MessageCircle, Phone } from '../../design-system/icons';`<br>L14: `const Icon = type === 'whatsapp' ? MessageCircle : Phone;`

### src/components/ui/CompactTreatmentCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L25: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-0.5">`<br>L32: hardcoded arbitrary font size `text-[10px]` ? `<span className="text-[10px] text-text-secondary uppercase tracking-[0.15em] font-medium opacity-70 group-hover:opacity-100 transition-opacity">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/ContactChannelCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L18: card rule forbids `ring-*` ? `? "bg-white border-base-900 ring-1 ring-base-900/10 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"`<br>L28: possible card using `bg-canvas` background ? `<div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-colors ${channel.emphasized ? 'bg-base-900 text-base-100' : 'bg-canvas text-base-900 group-hover:bg-base-900/10'}`}>`
- ? TYPOGRAPHY: L33: card/subsection heading may be uppercase ? `<h3 className="text-sm font-medium text-text-primary uppercase tracking-[0.15em] mb-1">`<br>L39: hardcoded arbitrary font size `text-[11px]` ? `<span className="text-[11px] text-text-secondary uppercase tracking-[0.15em] font-medium opacity-70">`
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: L2: `import { MessageCircle, Phone, Instagram, MapPin } from '../../design-system/icons';`<br>L11: `whatsapp: MessageCircle,`

### src/components/ui/Container.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/ExternalBookingButton.tsx
- ? COLOR: L22: banned `sage` color token ? `? "bg-sage text-white hover:bg-sage-deep shadow-lg shadow-sage/10"`<br>L23: banned `sage` color token ? `: "bg-white border-2 border-sage text-sage hover:bg-sage hover:text-white";`
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: L23: colored icon/text class detected; icons must be monochrome tokens ? `: "bg-white border-2 border-sage text-sage hover:bg-sage hover:text-white";`
- ? LAYOUT: compliant
- ? SAGE: L1: `import { ExternalLink, MessageCircle } from '../../design-system/icons';`<br>L19: `const Icon = type === 'square' ? ExternalLink : MessageCircle;`<br>L22: `? "bg-sage text-white hover:bg-sage-deep shadow-lg shadow-sage/10"`<br>L23: `: "bg-white border-2 border-sage text-sage hover:bg-sage hover:text-white";`

### src/components/ui/FAQAccordion.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L26: possible card using `bg-canvas` background ? `className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/FormField.tsx
- ? COLOR: L27: banned `red` color token ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L33: banned `red` color token ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? RADIUS: compliant
- ? CARDS: L27: card rule forbids `ring-*` ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L27: possible card using `bg-canvas` background ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L27: card-like element may not use required `bg-white` card surface ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`
- ? TYPOGRAPHY: L21: hardcoded arbitrary font size `text-[10px]` ? `className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-primary ml-1"`<br>L33: hardcoded arbitrary font size `text-[10px]` ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? ICONS: L33: colored icon/text class detected; icons must be monochrome tokens ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/HeroMedia.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/HeroTrustPill.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/HubTreatmentCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/IVKitCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L41: hardcoded arbitrary font size `text-[10px]` ? `<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium text-base-900 uppercase tracking-[0.15em] border border-base-900/10">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L17: `} else if (kit.whatsappMessage) {`<br>L18: `const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(kit.whatsappMessage)}`;`

### src/components/ui/MotionAvatar.tsx
- ? COLOR: L46: banned `sage` color token ? `className={`relative inline-block rounded-full overflow-hidden aspect-square ring-4 ring-white/50 border border-sage-soft shadow-xl group transition-all duration-500 hover:ring-sage-soft/30 hover:shadow-sage-soft/20 ${sizeClasses[size]} ${className}`}`
- ? RADIUS: compliant
- ? CARDS: L46: card rule forbids `ring-*` ? `className={`relative inline-block rounded-full overflow-hidden aspect-square ring-4 ring-white/50 border border-sage-soft shadow-xl group transition-all duration-500 hover:ring-sage-soft/30 hover:shadow-sage-soft/20 ${sizeClasses[size]} ${className}`}`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L46: `className={`relative inline-block rounded-full overflow-hidden aspect-square ring-4 ring-white/50 border border-sage-soft shadow-xl group transition-all duration-500 hover:ring-sage-soft/30 hover:shadow-sage-soft/20 ${sizeClasses[size]} ${className}`}`

### src/components/ui/ResponsiveImage.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/SectionHeader.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/SectionMedia.tsx
- ? COLOR: L34: unapproved rgba `rgba(242,240,241,0.52)` ? `ivory: 'bg-[rgba(242,240,241,0.52)]',`<br>L35: unapproved rgba `rgba(204,202,202,0.24)` ? `sage: 'bg-[rgba(204,202,202,0.24)]',`
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: L48: inline style usage ? `<div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>`
- ? SAGE: L10: `overlay?: 'none' | 'soft' | 'heroSoft' | 'sage' | 'ivory' | 'gradient';`<br>L35: `sage: 'bg-[rgba(204,202,202,0.24)]',`

### src/components/ui/SelectField.tsx
- ? COLOR: L28: banned `red` color token ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm appearance-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L47: banned `red` color token ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? RADIUS: compliant
- ? CARDS: L28: card rule forbids `ring-*` ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm appearance-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L28: possible card using `bg-canvas` background ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm appearance-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L28: card-like element may not use required `bg-white` card surface ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm appearance-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`
- ? TYPOGRAPHY: L21: hardcoded arbitrary font size `text-[10px]` ? `className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-primary ml-1"`<br>L47: hardcoded arbitrary font size `text-[10px]` ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? ICONS: L47: colored icon/text class detected; icons must be monochrome tokens ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/SpecialtyFilter.tsx
- ? COLOR: L18: banned `sage` color token ? `? 'bg-sage border-sage text-white shadow-lg shadow-sage/20'`<br>L19: banned `sage` color token ? `: 'bg-white border-border-soft text-text-secondary hover:border-sage-soft hover:text-sage'`
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: L19: colored icon/text class detected; icons must be monochrome tokens ? `: 'bg-white border-border-soft text-text-secondary hover:border-sage-soft hover:text-sage'`
- ? LAYOUT: compliant
- ? SAGE: L18: `? 'bg-sage border-sage text-white shadow-lg shadow-sage/20'`<br>L19: `: 'bg-white border-border-soft text-text-secondary hover:border-sage-soft hover:text-sage'`

### src/components/ui/StatItem.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: L14: hardcoded arbitrary font size `text-[0.68rem]` ? `<span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-text-secondary">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/TextareaField.tsx
- ? COLOR: L26: banned `red` color token ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm resize-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L32: banned `red` color token ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? RADIUS: compliant
- ? CARDS: L26: card rule forbids `ring-*` ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm resize-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L26: possible card using `bg-canvas` background ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm resize-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`<br>L26: card-like element may not use required `bg-white` card surface ? `className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm resize-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}`
- ? TYPOGRAPHY: L19: hardcoded arbitrary font size `text-[10px]` ? `className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-primary ml-1"`<br>L32: hardcoded arbitrary font size `text-[10px]` ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? ICONS: L32: colored icon/text class detected; icons must be monochrome tokens ? `<span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">`
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/TreatmentBadge.tsx
- ? COLOR: L10: banned `sage` color token ? `primary: 'bg-sage text-white',`<br>L11: banned `sage` color token ? `secondary: 'bg-sage-soft/30 text-sage',`<br>L12: banned `sage` color token ? `outline: 'border border-sage text-sage'`
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: L11: colored icon/text class detected; icons must be monochrome tokens ? `secondary: 'bg-sage-soft/30 text-sage',`<br>L12: colored icon/text class detected; icons must be monochrome tokens ? `outline: 'border border-sage text-sage'`
- ? LAYOUT: compliant
- ? SAGE: L10: `primary: 'bg-sage text-white',`<br>L11: `secondary: 'bg-sage-soft/30 text-sage',`<br>L12: `outline: 'border border-sage text-sage'`

### src/components/ui/TreatmentBenefitCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/TreatmentCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/TreatmentStepCard.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/TrustItem.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: compliant
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: Component-level heuristic: possible double card wrapping (`bg-white` card surface nested near another `bg-white` card surface).
- ? SAGE: none

### src/components/ui/VCardButton.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L15: possible card using `bg-canvas` background ? `<div className="w-10 h-10 rounded-lg bg-canvas border border-border-soft flex items-center justify-center flex-shrink-0">`<br>L15: card-like element may not use required `bg-white` card surface ? `<div className="w-10 h-10 rounded-lg bg-canvas border border-border-soft flex items-center justify-center flex-shrink-0">`<br>L36: possible card using `bg-canvas` background ? `className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${disabled || isPlaceholder ? 'bg-canvas text-text-secondary/30' : 'bg-base-900/10 text-base-900 hover:bg-base-900 hover:text-white'}`}`
- ? TYPOGRAPHY: L24: hardcoded arbitrary font size `text-[10px]` ? `<span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-0.5">vCard</span>`<br>L25: hardcoded arbitrary font size `text-[9px]` ? `<span className="block text-[9px] text-text-secondary truncate">`
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: none

### src/components/ui/WhatsAppFAB.tsx
- ? COLOR: compliant
- ? RADIUS: compliant
- ? CARDS: L25: card rule forbids `ring-*` ? `className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-base-900 text-base-100 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 transition-transform duration-300"`
- ? TYPOGRAPHY: compliant
- ? ICONS: compliant
- ? LAYOUT: compliant
- ? SAGE: L2: `import { MessageCircle } from '../../design-system/icons';`<br>L12: `let message = siteConfig.whatsappMessage;`<br>L13: `if (isPrfPage) message = siteConfig.whatsappMessagePrf;`<br>L14: `if (isPostOpPage) message = siteConfig.whatsappMessagePostOp;`<br>L15: `if (isDeepFacialPage) message = siteConfig.whatsappMessageDeepFacial;`<br>L16: `if (isIvTherapyPage) message = siteConfig.whatsappMessageIvTherapy;`<br>L18: `const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;`<br>L28: `<MessageCircle size={28} aria-hidden="true" />`

---

## SUMMARY

- Total files audited: 107
- Total violations by category:
  - COLOR: 23
  - RADIUS: 1
  - CARDS: 104
  - TYPOGRAPHY: 60
  - ICONS: 14
  - LAYOUT: 12
  - SAGE: 58

- Top 5 most critical files to fix (most violations):
  - src/components/sections/contact/ContactMapSection.tsx: 18 violations
  - src/components/sections/tier3/Tier3RelatedTreatments.tsx: 11 violations
  - src/components/sections/prf/PrfEducationSection.tsx: 11 violations
  - src/components/ui/WhatsAppFAB.tsx: 9 violations
  - src/components/ui/TreatmentBadge.tsx: 8 violations

- List of all files with sage color usage:
  - src/components/sections/about/AboutFounderStorySection.tsx
  - src/components/sections/contact/ContactForm.tsx
  - src/components/sections/contact/ContactMapSection.tsx
  - src/components/sections/deep-facial/DeepFacialFinalCTA.tsx
  - src/components/sections/hubs/HubFinalCTA.tsx
  - src/components/sections/iv-therapy/IVTherapyFinalCTA.tsx
  - src/components/sections/postop/PostOpFinalCTA.tsx
  - src/components/sections/postop/PostOpFounderSection.tsx
  - src/components/sections/postop/PostOpHeroSection.tsx
  - src/components/sections/postop/PostOpProtocolSection.tsx
  - src/components/sections/prf/PrfFinalCTA.tsx
  - src/components/sections/tier3/Tier3FinalCTA.tsx
  - src/components/sections/tier3/Tier3RelatedTreatments.tsx
  - src/components/ui/BookingTreatmentRow.tsx
  - src/components/ui/ChannelCard.tsx
  - src/components/ui/ContactChannelCard.tsx
  - src/components/ui/ExternalBookingButton.tsx
  - src/components/ui/IVKitCard.tsx
  - src/components/ui/MotionAvatar.tsx
  - src/components/ui/SectionMedia.tsx
  - src/components/ui/SpecialtyFilter.tsx
  - src/components/ui/TreatmentBadge.tsx
  - src/components/ui/WhatsAppFAB.tsx

- List of all files with double card wrapping:
  - src/components/sections/deep-facial/DeepFacialProtocolSection.tsx
  - src/components/sections/postop/PostOpHeroSection.tsx
  - src/components/sections/postop/PostOpUrgencySection.tsx
  - src/components/sections/prf/PrfEducationSection.tsx
  - src/components/ui/ChannelCard.tsx
  - src/components/ui/ContactChannelCard.tsx
  - src/components/ui/TrustItem.tsx

- List of all hero sections NOT using full-bleed image background:
  - None detected by heuristic
