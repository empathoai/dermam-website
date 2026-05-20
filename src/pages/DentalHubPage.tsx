import { dentalHubContent } from '../data/dentalHubContent';
import HubPageTemplate from '../components/templates/HubPageTemplate';

export default function DentalHubPage() {
  return <HubPageTemplate content={dentalHubContent} />;
}

export const ssgOptions = {
  slug: 'es/dental/index',
  routeUrl: '/es/dental',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/dental'] }, children)
    );
  }
};
