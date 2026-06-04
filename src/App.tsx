import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrfLandingPage from './pages/PrfLandingPage';
import PostOpLandingPage from './pages/PostOpLandingPage';
import DeepFacialCleansingLandingPage from './pages/DeepFacialCleansingLandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import FacialTreatmentsHubPage from './pages/FacialTreatmentsHubPage';
import BodyTreatmentsHubPage from './pages/BodyTreatmentsHubPage';
import LaserLightHubPage from './pages/LaserLightHubPage';
import DentalHubPage from './pages/DentalHubPage';
import IVTherapyPage from './pages/IVTherapyPage';
import HidrofacialPage from './pages/es/HidrofacialPage';
import MicroneedlingPage from './pages/es/MicroneedlingPage';
import BlanqueamientoDentalPage from './pages/es/BlanqueamientoDentalPage';
import LimpiezaDentalPage from './pages/es/LimpiezaDentalPage';
import PeelCoreanoPage from './pages/es/PeelCoreanoPage';
import OxigenoterapiaFacialPage from './pages/es/OxigenoterapiaFacialPage';
import CavitacionPage from './pages/es/CavitacionPage';
import RadiofrecuenciaCorporalPage from './pages/es/RadiofrecuenciaCorporalPage';
import DrenajeLinfaticoCorporalPage from './pages/es/DrenajeLinfaticoCorporalPage';
import RadiofrecuenciaFacialPage from './pages/es/RadiofrecuenciaFacialPage';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/es" element={<HomePage />} />
        <Route path="/es/iv-therapy" element={<IVTherapyPage />} />
        <Route path="/es/plasma-rico-en-plaquetas-west-palm-beach" element={<PrfLandingPage />} />
        <Route path="/es/postoperatorio-west-palm-beach" element={<PostOpLandingPage />} />
        <Route path="/es/limpieza-facial-profunda" element={<DeepFacialCleansingLandingPage />} />
        <Route path="/es/sobre-nosotros" element={<AboutPage />} />
        <Route path="/es/contacto" element={<ContactPage />} />
        <Route path="/es/reservar" element={<BookingPage />} />
        <Route path="/es/tratamientos-faciales" element={<FacialTreatmentsHubPage />} />
        <Route path="/es/tratamientos-corporales" element={<BodyTreatmentsHubPage />} />
        <Route path="/es/laser-y-luz" element={<LaserLightHubPage />} />
        <Route path="/es/dental" element={<DentalHubPage />} />
        
        {/* Static Tier 3 Treatment Routes */}
        <Route path="/es/hidrofacial" element={<HidrofacialPage />} />
        <Route path="/es/microneedling" element={<MicroneedlingPage />} />
        <Route path="/es/blanqueamiento-dental" element={<BlanqueamientoDentalPage />} />
        <Route path="/es/limpieza-dental" element={<LimpiezaDentalPage />} />
        <Route path="/es/peel-coreano" element={<PeelCoreanoPage />} />
        <Route path="/es/oxigenoterapia-facial" element={<OxigenoterapiaFacialPage />} />
        <Route path="/es/cavitacion" element={<CavitacionPage />} />
        <Route path="/es/radiofrecuencia-corporal" element={<RadiofrecuenciaCorporalPage />} />
        <Route path="/es/drenaje-linfatico-corporal" element={<DrenajeLinfaticoCorporalPage />} />
        <Route path="/es/radiofrecuencia-facial" element={<RadiofrecuenciaFacialPage />} />

        
        {/* English Route Placeholders (Building later) */}
        <Route path="/en/body-treatments" element={<BodyTreatmentsHubPage />} />
        <Route path="/en/iv-therapy" element={<IVTherapyPage />} />
        <Route path="/en/laser-and-light" element={<LaserLightHubPage />} />
        <Route path="/en/dental" element={<DentalHubPage />} />
        <Route path="/en/facial-treatments" element={<FacialTreatmentsHubPage />} />

        {/* Redirects */}
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
