/******************************************************************************
File: home.ts
------------------------------------------------------------------------------
Purpose:
Centralized content for the Home page.

Responsibilities:
- Hero
- Homepage CTA
- Newsletter
******************************************************************************/

const homeData = {
  hero: {
    eyebrow: "AWS Advanced Consulting Partner",

    title: "Modern Cloud Infrastructure Built for Growth",

    description:
      "We help organizations design, migrate and operate secure, scalable cloud platforms using AWS, Terraform, Kubernetes and DevOps best practices.",

    primaryButton: {
      label: "Get Started",

      link: "/contact",
    },

    secondaryButton: {
      label: "View Services",

      link: "/services",
    },
  },

  cta: {
    title: "Ready to Modernize Your Cloud?",

    description:
      "Partner with Sandtongrid Technologies to build secure, scalable and reliable cloud infrastructure using AWS, Terraform, Kubernetes and DevOps best practices.",

    primaryButton: {
      label: "Contact Us",

      link: "/contact",
    },

    secondaryButton: {
      label: "View Services",

      link: "/services",
    },
  },

  newsletter: {
    title: "Stay Updated",

    description:
      "Subscribe to receive cloud insights, DevOps best practices, AWS updates and technology news from Sandtongrid Technologies.",

    placeholder: "Enter your email",

    button: "Subscribe",
  },
};

export default homeData;
