/**
 * =============================================================================
 * File: SEO.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Reusable SEO component used across all pages.
 *
 * Responsibilities:
 * - Page title
 * - Meta description
 * - Canonical URL
 * - Open Graph metadata
 * - Twitter Card metadata
 * - Organization structured data
 * - Website structured data
 * - Professional Service structured data
 *
 * Notes:
 * - Uses centralized configuration from src/config.
 * =============================================================================
 */

import { Helmet } from "react-helmet-async";

import siteConfig from "../../config/site";
import seoConfig from "../../config/seo";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const SEO = ({ title, description, canonical = "/" }: SEOProps) => {
  const pageTitle = title
    ? `${title} | ${siteConfig.company.name}`
    : seoConfig.title;

  const pageDescription = description ?? seoConfig.description;

  const pageUrl =
    canonical === "/"
      ? siteConfig.website.url
      : `${siteConfig.website.url}${canonical}`;

  return (
    <Helmet>
      {/* ==========================================================
          Primary SEO
      ========================================================== */}

      <html lang={seoConfig.language} />

      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <meta name="author" content={seoConfig.author} />

      <meta name="keywords" content={seoConfig.keywords.join(", ")} />

      <meta name="robots" content={seoConfig.robots} />

      <meta name="theme-color" content="#0f172a" />

      <link rel="canonical" href={pageUrl} />

      {/* ==========================================================
          Open Graph
      ========================================================== */}

      <meta property="og:type" content={seoConfig.openGraph.type} />

      <meta property="og:site_name" content={siteConfig.company.name} />

      <meta property="og:title" content={pageTitle} />

      <meta property="og:description" content={pageDescription} />

      <meta property="og:url" content={pageUrl} />

      <meta
        property="og:image"
        content={`${siteConfig.website.url}${seoConfig.openGraph.image}`}
      />

      <meta property="og:locale" content={seoConfig.locale} />

      {/* ==========================================================
          Twitter
      ========================================================== */}

      <meta name="twitter:card" content={seoConfig.twitter.card} />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={pageDescription} />

      <meta
        name="twitter:image"
        content={`${siteConfig.website.url}${seoConfig.twitter.image}`}
      />

      {/* ==========================================================
          Structured Data
      ========================================================== */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.company.name,
          url: siteConfig.website.url,
          logo: `${siteConfig.website.url}${siteConfig.branding.logo}`,
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.phone,
          sameAs: [siteConfig.social.linkedin, siteConfig.social.github].filter(
            Boolean,
          ),
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.company.name,
          url: siteConfig.website.url,
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: siteConfig.company.name,
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.address.city,
            addressCountry: siteConfig.address.countryCode,
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
