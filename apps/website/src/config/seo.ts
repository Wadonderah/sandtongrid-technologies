/**
 * =============================================================================
 * File: seo.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized SEO configuration.
 *
 * Responsibilities:
 * - Default SEO values
 * - Open Graph defaults
 * - Twitter Card defaults
 * - Robots directives
 * - Structured metadata defaults
 *
 * Notes:
 * - Used by the reusable SEO component.
 * - Prevents duplication across pages.
 * =============================================================================
 */

import siteConfig from "./site";

export const seoConfig = {
  title: siteConfig.company.name,

  titleTemplate: `%s | ${siteConfig.company.name}`,

  description: siteConfig.company.description,

  canonical: siteConfig.website.url,

  language: "en",

  locale: "en_US",

  author: siteConfig.company.name,

  keywords: [
    "AWS",
    "Cloud Computing",
    "Cloud Consulting",
    "DevOps",
    "Terraform",
    "Infrastructure as Code",
    "Kubernetes",
    "Docker",
    "Cloud Migration",
    "Cloud Security",
    "Managed Cloud Services",
    "Digital Transformation",
    "CI/CD",
    "Platform Engineering",
  ],

  robots: "index,follow",

  openGraph: {
    type: "website",
    image: siteConfig.branding.ogImage,
  },

  twitter: {
    card: "summary_large_image",
    image: siteConfig.branding.twitterImage,
  },
} as const;

export default seoConfig;
