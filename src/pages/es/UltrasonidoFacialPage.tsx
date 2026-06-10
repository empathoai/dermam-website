import React from 'react';
import { Navigate } from 'react-router-dom';
import { tier3Treatments } from '../../data/tier3Treatments';
import Tier3TreatmentTemplate from '../../components/templates/Tier3TreatmentTemplate';

export default function UltrasonidoFacialPage() {
  const treatment = tier3Treatments.find(t => t.id === 'ultrasonido-facial');

  if (!treatment) {
    return <Navigate to="/es" replace />;
  }

  return <Tier3TreatmentTemplate treatment={treatment} />;
}

export const ssgOptions = {
  slug: 'es/ultrasonido-facial/index',
  routeUrl: '/es/ultrasonido-facial',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/ultrasonido-facial'] }, children)
    );
  }
};
