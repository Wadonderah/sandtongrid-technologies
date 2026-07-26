/******************************************************************************
File: resources.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Resources page.

Responsibilities:
- Store all Resources page content.
- Keep business content separate from UI components.
- Support future CMS/API integration.
- Make updates possible without editing React components.
******************************************************************************/

import type { ButtonVariant } from "@/components/ui/Button";

/* =============================================================================
   Shared Types
============================================================================= */

/**
 * CTA button configuration.
 */
interface CTAButton {
    label: string;
    to: string;
    variant: ButtonVariant;
}

/**
 * CTA section.
 */
interface CTASection {
    title: string;
    description: string;
    primaryButton: CTAButton;
    secondaryButton: CTAButton;
}

/**
 * Featured resource.
 */
interface FeaturedResource {
    title: string;
    category: string;
    description: string;
}

/**
 * Resources page data model.
 */
interface ResourcesData {

    hero: {

        eyebrow: string;
        title: string;
        description: string;

    };

    featured: {

        title: string;
        description: string;
        resources: FeaturedResource[];

    };

    categories: {

        title: string;
        items: string[];

    };

    cta: CTASection;

}

/* =============================================================================
   Resources Page Data
============================================================================= */

const resources: ResourcesData = {
  /* =========================================================================
       Hero Section
       -------------------------------------------------------------------------
       Main introduction displayed at the top of the Resources page.
    ========================================================================= */

  hero: {
    eyebrow: "Resources",

    title: "Cloud Knowledge & Technical Resources",

    description:
      "Explore practical cloud engineering resources, DevOps insights, architecture guidance and best practices from Sandtongrid Technologies.",
  },

  /* =========================================================================
       Featured Resources
       -------------------------------------------------------------------------
       Featured articles and learning materials.
    ========================================================================= */

  featured: {
    title: "Featured Resources",

    description: "Helpful technical content created by our cloud engineers.",

    resources: [
      {
        title: "AWS Well-Architected Framework",

        category: "Cloud Architecture",

        description:
          "Learn the six pillars of the AWS Well-Architected Framework and how they improve cloud solutions.",
      },

      {
        title: "Infrastructure as Code with Terraform",

        category: "DevOps",

        description:
          "Discover how Terraform simplifies infrastructure provisioning through reusable and version-controlled code.",
      },

      {
        title: "CI/CD Best Practices",

        category: "Automation",

        description:
          "Improve deployment quality using automated testing, continuous integration and continuous delivery.",
      },
    ],
  },

  /* =========================================================================
       Learning Categories
       -------------------------------------------------------------------------
       High-level resource categories.
    ========================================================================= */

  categories: {
    title: "Browse by Category",

    items: [
      "AWS",

      "Terraform",

      "DevOps",

      "Kubernetes",

      "Security",

      "Cloud Migration",

      "Networking",

      "Monitoring",
    ],
  },

  /* =========================================================================
       Call To Action
       -------------------------------------------------------------------------
       Final conversion section.
    ========================================================================= */

  cta: {
    title: "Need Expert Guidance?",

    description:
      "Our cloud engineers can help you apply these best practices to your own organization.",

    primaryButton: {
      label: "Contact Us",

      to: "/contact",

      variant: "secondary",
    },

    secondaryButton: {
      label: "Explore Services",

      to: "/services",

      variant: "outline",
    },
  },
};

/* =============================================================================
   Export
============================================================================= */

export default resources;