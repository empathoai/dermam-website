import React from 'react';
import { Navigate } from 'react-router-dom';
import { tier3Treatments } from '../../data/tier3Treatments';
import Tier3TreatmentTemplate from '../../components/templates/Tier3TreatmentTemplate';

export default function EmsFacialEnyongPage() {
  const treatment = tier3Treatments.find(t => t.id === 'ems-facial-enyong');

  if (!treatment) {
    return <Navigate to="/es" replace />;
  }

  return <Tier3TreatmentTemplate treatment={treatment} />;
}

export const ssgOptions = {
  slug: 'es/ems-facial-enyong/index',
  routeUrl: '/es/ems-facial-enyong',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/ems-facial-enyong'] }, children)
    );
  }
};
