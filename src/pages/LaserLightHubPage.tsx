import { laserLightHubContent } from '../data/laserLightHubContent';
import HubPageTemplate from '../components/templates/HubPageTemplate';

export default function LaserLightHubPage() {
  return <HubPageTemplate content={laserLightHubContent} />;
}

export const ssgOptions = {
  slug: 'es/laser-y-luz/index',
  routeUrl: '/es/laser-y-luz',
  context: async (children: any) => {
    const React = await import('react');
    const { MemoryRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    return React.createElement(
      HelmetProvider,
      null,
      React.createElement(MemoryRouter, { initialEntries: ['/es/laser-y-luz'] }, children)
    );
  }
};
