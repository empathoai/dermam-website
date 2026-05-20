import React from 'react';
import { Navigate } from 'react-router-dom';
import { tier3Treatments } from '../../data/tier3Treatments';
import Tier3TreatmentTemplate from '../../components/templates/Tier3TreatmentTemplate';

export default function DrenajeLinfaticoCorporalPage() {
  const treatment = tier3Treatments.find(t => t.id === 'drenaje-linfatico-corporal');

  if (!treatment) {
    return <Navigate to="/es" replace />;
  }

  return <Tier3TreatmentTemplate treatment={treatment} />;
}

export const ssgOptions = {
  slug: 'es/drenaje-linfatico-corporal/index',
  routeUrl: '/es/drenaje-linfatico-corporal',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/drenaje-linfatico-corporal'] }, children)
    );
  }
};
