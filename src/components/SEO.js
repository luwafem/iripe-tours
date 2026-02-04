import React from 'react';
import { Helmet } from 'react-helmet-async';
import { websiteConfig } from '../config/websiteConfig';

const SEO = ({ title, description, image, slug, type = 'website' }) => {
  const pageTitle = title ? `${title} | ${websiteConfig.company.name}` : websiteConfig.seo.siteName;
  const pageDescription = description || websiteConfig.company.description;
  const pageImage = image || websiteConfig.seo.defaultImage;
  const pageUrl = slug ? `${websiteConfig.seo.siteUrl}/${slug}` : websiteConfig.seo.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={websiteConfig.seo.keywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={websiteConfig.company.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:site" content={websiteConfig.seo.twitterHandle} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={websiteConfig.company.name} />
      <meta name="publisher" content={websiteConfig.company.name} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": websiteConfig.company.name,
          "description": websiteConfig.company.description,
          "url": websiteConfig.seo.siteUrl,
          "logo": `${websiteConfig.seo.siteUrl}/logo.png`,
          "telephone": websiteConfig.company.phone,
          "email": websiteConfig.company.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": websiteConfig.company.address,
            "addressCountry": "NG"
          },
          "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
          "sameAs": Object.values(websiteConfig.socialMedia)
        })}
      </script>
    </Helmet>
  );
};

export default SEO;