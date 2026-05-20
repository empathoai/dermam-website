import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './styles/globals.css';

const container = document.getElementById('root')!;

// Use isomorphic hydration if container contains pre-rendered children (SSG), fallback to createRoot
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
} else {
  createRoot(container).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}

