import { bodyHubContent } from '../data/bodyHubContent';
import HubPageTemplate from '../components/templates/HubPageTemplate';

export default function BodyTreatmentsHubPage() {
  return <HubPageTemplate content={bodyHubContent} />;
}

export const ssgOptions = {
  slug: 'es/tratamientos-corporales/index',
  routeUrl: '/es/tratamientos-corporales',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/tratamientos-corporales'] }, children)
    );
  }
};
