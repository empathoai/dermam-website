import { facialHubContent } from '../data/facialHubContent';
import HubPageTemplate from '../components/templates/HubPageTemplate';

export default function FacialTreatmentsHubPage() {
  return <HubPageTemplate content={facialHubContent} />;
}

export const ssgOptions = {
  slug: 'es/tratamientos-faciales/index',
  routeUrl: '/es/tratamientos-faciales',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/tratamientos-faciales'] }, children)
    );
  }
};
