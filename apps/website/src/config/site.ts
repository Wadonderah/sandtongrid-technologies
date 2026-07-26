/**
 * =============================================================================
 * File: site.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized site configuration.
 * =============================================================================
 */

export const siteConfig = {
  company: {
    name: "Sandtongrid Technologies",
    legalName: "Sandtongrid Technologies",
    tagline: "Cloud Consulting & Digital Transformation",
    description:
      "Helping organizations modernize their infrastructure with AWS Cloud, DevOps, Kubernetes, Terraform, Security and Managed Cloud Services.",
  },

  website: {
    url: "https://www.sandtongridtech.com",
    domain: "www.sandtongridtech.com",
  },

  contact: {
    email: "info@sandtongridtech.com",
    phone: "+254 XXX XXX XXX",
  },

  address: {
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
  },

  social: {
    linkedin: "https://linkedin.com/company/sandtongrid",
    github: "https://github.com/sandtongrid",
    x: "",
    facebook: "",
  },

  branding: {
    logo: "/logo.png",
    favicon: "/favicon.ico",
    ogImage: "/og-image.jpg",
    twitterImage: "/twitter-image.jpg",
  },

  footer: {
    companyLinks: [
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Careers",
        path: "/careers",
      },
      {
        label: "Contact",
        path: "/contact",
      },
    ],

    serviceLinks: [
      {
        label: "Cloud Consulting",
        path: "/services",
      },
      {
        label: "Cloud Migration",
        path: "/services",
      },
      {
        label: "DevOps",
        path: "/services",
      },
      {
        label: "Managed Services",
        path: "/services",
      },
    ],

    resourceLinks: [
      {
        label: "Resources",
        path: "/resources",
      },
      {
        label: "Case Studies",
        path: "/case-studies",
      },
      {
        label: "Industries",
        path: "/industries",
      },
    ],
  },
} as const;

export default siteConfig;
