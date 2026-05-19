import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrfLandingPage from './pages/PrfLandingPage';
import PostOpLandingPage from './pages/PostOpLandingPage';
import DeepFacialCleansingLandingPage from './pages/DeepFacialCleansingLandingPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/es" element={<HomePage />} />
        <Route path="/es/plasma-rico-en-plaquetas-west-palm-beach" element={<PrfLandingPage />} />
        <Route path="/es/postoperatorio-west-palm-beach" element={<PostOpLandingPage />} />
        <Route path="/es/limpieza-facial-profunda" element={<DeepFacialCleansingLandingPage />} />
        <Route path="/es/sobre-nosotros" element={<AboutPage />} />
        
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
