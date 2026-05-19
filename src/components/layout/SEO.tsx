import { Helmet } from 'react-helmet';
import { SEOConfig } from '../../types/seo';
import { getSiteSchema } from '../../data/schema';

interface SEOProps extends SEOConfig {}

export default function SEO({
  title,
  description,
  canonical,
  hreflangEs,
  hreflangEn,
  hreflangDefault,
  ogImage,
  ogType
}: SEOProps) {
  const schema = getSiteSchema();

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Language */}
      <link rel="alternate" href={hreflangEs} hrefLang="es" />
      <link rel="alternate" href={hreflangEn} hrefLang="en" />
      <link rel="alternate" href={hreflangDefault} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
