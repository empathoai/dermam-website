import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { hreflangMap, SUPPORT_ENGLISH } from '../../config/routeMap';
import { siteConfig } from '../../data/siteConfig';
import { getSiteSchema } from '../../data/schema';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = siteConfig.businessName,
  description = siteConfig.tagline,
  ogImage = `${siteConfig.baseUrl}/og/dermam-home.jpg`,
  ogType = 'website'
}: SEOProps) {
  const schema = getSiteSchema();
  const { pathname } = useLocation();

  // Normalize path by removing trailing slash (except for single slash)
  const normalizedPath = pathname === '/' ? '/es' : pathname.replace(/\/$/, '');
  
  // Resolve mapping, fallback defensively to Home
  const mapping = hreflangMap[normalizedPath] || hreflangMap['/es'];

  // Base domain
  const baseDomain = siteConfig.baseUrl;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Centralized Canonical Link */}
      <link rel="canonical" href={`${baseDomain}${mapping.es}`} />

      {/* Centralized Language Alternates */}
      <link rel="alternate" hrefLang="es" href={`${baseDomain}${mapping.es}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseDomain}${mapping.es}`} />

      {/* Double condition guard for future English translation */}
      {SUPPORT_ENGLISH && mapping?.en && (
        <link rel="alternate" hrefLang="en" href={`${baseDomain}${mapping.en}`} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`${baseDomain}${mapping.es}`} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
