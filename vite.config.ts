import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { ssgPlugin } from 'vite-plugin-ssg';
import { hreflangMap } from './src/config/routeMap';

export default defineConfig(() => {
  // Dynamically map Spanish routes from hreflangMap to their physical page component files
  const spanishRoutes = Object.keys(hreflangMap).filter(k => k.startsWith('/es'));
  
  const pages = spanishRoutes.map(route => {
    if (route === '/es') return 'src/pages/HomePage.tsx';
    if (route === '/es/sobre-nosotros') return 'src/pages/AboutPage.tsx';
    if (route === '/es/contacto') return 'src/pages/ContactPage.tsx';
    if (route === '/es/reservar') return 'src/pages/BookingPage.tsx';
    if (route === '/es/tratamientos-faciales') return 'src/pages/FacialTreatmentsHubPage.tsx';
    if (route === '/es/tratamientos-corporales') return 'src/pages/BodyTreatmentsHubPage.tsx';
    if (route === '/es/laser-y-luz') return 'src/pages/LaserLightHubPage.tsx';
    if (route === '/es/dental') return 'src/pages/DentalHubPage.tsx';
    if (route === '/es/iv-therapy') return 'src/pages/IVTherapyPage.tsx';
    if (route === '/es/plasma-rico-en-plaquetas-west-palm-beach') return 'src/pages/PrfLandingPage.tsx';
    if (route === '/es/postoperatorio-west-palm-beach') return 'src/pages/PostOpLandingPage.tsx';
    if (route === '/es/limpieza-facial-profunda') return 'src/pages/DeepFacialCleansingLandingPage.tsx';
    
    // Tier 3 treatments in src/pages/es/
    const slug = route.split('/').pop() || '';
    const camelized = slug.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    return `src/pages/es/${camelized}Page.tsx`;
  });

  return {
    plugins: [
      react(),
      tailwindcss(),
      ssgPlugin({
        pages,
        config: {
          outDir: 'dist',
          baseUrl: '',
          html: {
            lang: 'es'
          }
        },
        devMiddleware: false
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    ssr: {
      noExternal: ['react-router-dom', 'react-router', 'react-helmet-async'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
