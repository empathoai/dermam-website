import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/es" element={<HomePage />} />
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
        
        {/* English Route Placeholders (Building later) */}
        <Route path="/en/body-treatments" element={<BodyTreatmentsHubPage />} />
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
