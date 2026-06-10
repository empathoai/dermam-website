import React from 'react';
import { Navigate } from 'react-router-dom';
import { tier3Treatments } from '../../data/tier3Treatments';
import Tier3TreatmentTemplate from '../../components/templates/Tier3TreatmentTemplate';

export default function Evefus10RadiofrecuenciaFraccionadaPage() {
  const treatment = tier3Treatments.find(t => t.id === 'evefus-10-radiofrecuencia-fraccionada');

  if (!treatment) {
    return <Navigate to="/es" replace />;
  }

  return <Tier3TreatmentTemplate treatment={treatment} />;
}

export const ssgOptions = {
  slug: 'es/evefus-10-radiofrecuencia-fraccionada/index',
  routeUrl: '/es/evefus-10-radiofrecuencia-fraccionada',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/evefus-10-radiofrecuencia-fraccionada'] }, children)
    );
  }
};
