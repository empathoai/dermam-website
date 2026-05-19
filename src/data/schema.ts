import { siteConfig } from './siteConfig';

export const getSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": siteConfig.businessName,
    "image": `${siteConfig.baseUrl}/og/dermam-home.jpg`,
    "telephone": siteConfig.phoneRaw,
    "url": siteConfig.baseUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.state,
      "postalCode": siteConfig.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.6617,
      "longitude": -80.0573
    },
    "openingHoursSpecification": [
       {
         "@type": "OpeningHoursSpecification",
         "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
         "opens": "09:00",
         "closes": "18:00"
       }
    ],
    "sameAs": [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook
    ]
  };
};
