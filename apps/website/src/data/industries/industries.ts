/******************************************************************************
File: industries.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Industries page.

Responsibilities:
- Store all Industries page content.
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
 * Industry card.
 */
interface Industry {
    title: string;
    challenge: string;
    solution: string;
    outcome: string;
}

/**
 * Company differentiator.
 */
interface Differentiator {
    title: string;
    description: string;
}

/**
 * Industries page data model.
 */
interface IndustriesData {

    hero: {

        eyebrow: string;
        title: string;
        description: string;

    };

    list: {

        title: string;
        description: string;
        industries: Industry[];

    };

    whyChooseUs: {

        title: string;
        description: string;
        items: Differentiator[];

    };

    cta: CTASection;

}

/* =============================================================================
   Industries Page Data
============================================================================= */

const industries: IndustriesData = {
  /* =========================================================================
       Hero Section
       -------------------------------------------------------------------------
       Main introduction for the Industries page.
    ========================================================================= */

  hero: {
    eyebrow: "Industries",

    title: "Technology Solutions Built For Every Industry",

    description:
      "We help organizations across multiple industries modernize infrastructure, improve security and accelerate digital transformation using cloud technologies.",
  },

  /* =========================================================================
       Industries Section
       -------------------------------------------------------------------------
       Industries served by Sandtongrid Technologies.
    ========================================================================= */

  list: {
    title: "Helping Organizations Across Multiple Industries",

    description:
      "Every organization is different, but the need for secure, scalable and reliable cloud infrastructure remains the same.",

    industries: [
      {
        title: "Financial Services",

        challenge:
          "Meeting compliance requirements while modernizing legacy infrastructure.",

        solution:
          "Secure AWS architectures, encryption, monitoring and disaster recovery.",

        outcome: "Improved security, compliance and operational resilience.",
      },

      {
        title: "Healthcare",

        challenge:
          "Protecting sensitive patient information while ensuring high availability.",

        solution:
          "Cloud-native platforms with secure networking and continuous monitoring.",

        outcome: "Reliable healthcare systems with stronger data protection.",
      },

      {
        title: "Education",

        challenge:
          "Supporting growing numbers of students through scalable digital platforms.",

        solution: "Elastic cloud infrastructure and automated deployments.",

        outcome: "Better performance during peak academic periods.",
      },

      {
        title: "Government",

        challenge:
          "Delivering secure public services with strict governance requirements.",

        solution:
          "Infrastructure as Code, IAM best practices and audit-ready environments.",

        outcome: "Improved transparency, security and operational efficiency.",
      },

      {
        title: "Retail & E-Commerce",

        challenge:
          "Handling unpredictable traffic while maintaining fast customer experiences.",

        solution:
          "Scalable cloud platforms with CDN integration and monitoring.",

        outcome: "Improved customer experience and reduced downtime.",
      },

      {
        title: "Technology Startups",

        challenge: "Growing rapidly without accumulating technical debt.",

        solution:
          "Modern DevOps pipelines, Kubernetes and Terraform automation.",

        outcome: "Faster product delivery with lower operational costs.",
      },
    ],
  },

  /* =========================================================================
       Why Choose Sandtongrid
       -------------------------------------------------------------------------
       Key differentiators that set Sandtongrid Technologies apart.
    ========================================================================= */

  whyChooseUs: {
    title: "Why Organizations Choose Sandtongrid",

    description:
      "We combine technical expertise with proven cloud engineering practices to deliver secure, scalable and future-ready solutions.",

    items: [
      {
        title: "AWS Expertise",

        description:
          "We design secure, scalable and cost-effective cloud solutions using AWS best practices.",
      },

      {
        title: "Security First",

        description:
          "Security is integrated into every stage of delivery through least privilege, encryption and continuous monitoring.",
      },

      {
        title: "DevOps Automation",

        description:
          "Infrastructure as Code, CI/CD pipelines and automation reduce manual effort while increasing deployment reliability.",
      },

      {
        title: "Scalable Architecture",

        description:
          "Our cloud platforms are designed to grow alongside your business while maintaining performance and resilience.",
      },

      {
        title: "Operational Excellence",

        description:
          "Monitoring, logging and proactive maintenance ensure workloads remain healthy and available.",
      },

      {
        title: "Long-Term Partnership",

        description:
          "We work alongside your team through knowledge transfer, continuous improvement and long-term support.",
      },
    ],
  },

  /* =========================================================================
       Call To Action
       -------------------------------------------------------------------------
       Final conversion section encouraging visitors to contact the company.
    ========================================================================= */

  cta: {
    title: "Ready to Modernize Your Industry?",

    description:
      "Whether you're in finance, healthcare, government, education or technology, Sandtongrid Technologies can help you build secure, scalable and resilient cloud solutions tailored to your business goals.",

    primaryButton: {
      label: "Talk to an Expert",

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

export default industries;