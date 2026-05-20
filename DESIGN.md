---
colors:
  base-900: "#141313"
  base-800: "#191818"
  base-700: "#333232"
  base-600: "#4e4d4d"
  base-500: "#666666"
  base-400: "#b3b2b2"
  base-300: "#cccaca"
  base-200: "#e6e4e4"
  base-100: "#f2f0f1"
fonts:
  sans: "'Poppins', ui-sans-serif, system-ui, sans-serif"
  script: "'Hamilton', cursive, sans-serif"
---

# UI Architecture & Design System — DERMA.M

This document is the Single Source of Truth (SSOT) for the front-end development of the DERMA.M project. It strictly defines design tokens, the monochromatic color palette, typographic hierarchy, and component rules.

**⚠️ STRICT DIRECTIVE FOR AI AGENTS AND DEVELOPERS:**
Under NO circumstances should you hardcode hex colors, arbitrary font sizes, or utility classes that are not defined in this document. Doing so creates unacceptable technical debt. Always consume the defined Tailwind variables.

## Overview

The ecosystem uses a strictly monochromatic UI palette. The strategic goal is to reduce cognitive load, allowing the full-color photography of treatments (skin, clinical textures, before/after results) to be the sole focal point ("Color Pop").

The React/TSX code must reflect the clinical funnel strategy in its naming conventions and structure:

* **Authority & Leadership:** All "Founder", "Lead Specialist", and "Medical Authority" blocks MUST render the data and credentials of **Gretchen Grueiro**. She is the clinical face and founder of the institution. Biographical references and anchor testimonials must be associated with her.
* **Routing Logic (Call to Actions):** CTAs change dynamically based on the visitor's psychological state in each Tier.
    * **Tier 1 Landings (High Intent):** Direct CTA → `"Reserva tu cita"`. Routes to the booking system (Square).
    * **Tier 1 Landings (High Vulnerability):** Empathetic CTA → `"Consulta tu caso"`. Routes to conversational channels (WhatsApp).
    * **Tier 2 Hubs (Education):** Orientative CTA → `"Evalúa tu piel"`.

## Colors

### Accessibility & Contrast Rules (Dark/Light Inversion)
* **On Light Backgrounds (`100`, `200`):** Main text MUST be `900` (Headings) and `600` (Paragraphs).
* **On Dark Backgrounds (`900`, `800`):** Main text MUST be `100` (Headings/Metrics) and `300` (Paragraphs). NEVER use `600` or `500` on dark backgrounds (WCAG failure).

## Typography

The system uses a dual-font approach to balance clinical authority with personalized care.

### Poppins (Geometric Sans-Serif)
Main font for the entire UI system (Navigation, Headings, Paragraphs, Buttons).
* **Allowed Weights:** `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
* **Line Heights (Leading):**
    * `tight` (1.2) → For Headings (H1, H2).
    * `snug` (1.375) → For Subheadings (H3, H4).
    * `normal` (1.5) → For Paragraphs and Body copy.

### Hamilton (Script)
Accent font used for personal branding, signatures, and highlighted keywords within Headings (e.g., "Professional health for *your* skin").
* **Usage:** Exclusively to break the grid. Use as inline decorative text or as a background watermark (using `color-base-300` or very low opacities).

## Components

### Buttons (CTAs)
* **Primary CTA (`cta-box`):** Background `base-900`, Text `base-100` (`font-medium`, `text-sm` or `base`). Rounded corners (`rounded-md`).
* **Secondary CTA (`cta-secondary`):** Transparent background, Border `1.5px solid base-900`, Text `base-900`.

### Cards
* **Light Cards:** Background `base-100` or Pure White, Border `0.5px solid base-300`. Usage: Treatment lists, feature benefits.
* **Dark Cards (Trust / Social Proof):** Background `base-800`, no border or subtle `base-700` border. Usage: Metrics ("10+ Years"), Testimonials, Certifications.

### Images & Overlays (Hero Sections)
Any full-color photograph used as a section background (Hero) MUST have a protective overlay to ensure text contrast/accessibility.
* **Standard Overlay:** Vertical gradient from `black/60` (top) through `transparent` (center) to `black/40` (bottom).
* **Object-fit:** Always use `cover` to ensure responsiveness across mobile and desktop.

### Global Component (WhatsApp FAB)
* A WhatsApp Floating Action Button (FAB) MUST be present in the bottom-right corner across all views.
* The `wa.me` link must contain a dynamic pre-filled message based on the user's current URL (e.g., "Hola, me interesa el tratamiento de PRF").