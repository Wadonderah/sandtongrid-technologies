/******************************************************************************
File: caseStudies.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Case Studies page.

Responsibilities:
- Store all Case Studies page content.
- Separate business content from presentation.
- Support future CMS/API integration.
- Keep React components focused only on rendering.
******************************************************************************/

import type { ButtonVariant } from "@/components/ui/Button";

interface CTAButton {
  label: string;
  to: string;
  variant: ButtonVariant;
}

interface CaseStudiesData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  featured: {
    title: string;
    description: string;
    studies: {
      title: string;
      industry: string;
      challenge: string;
      solution: string;
      outcome: string;
    }[];
  };

  metrics: {
    title: string;
    description: string;
    items: {
      value: string;
      label: string;
      description: string;
    }[];
  };

  testimonials: {
    title: string;
    description: string;
    items: {
      quote: string;
      author: string;
      role: string;
    }[];
  };

  benefits: {
    title: string;
    items: string[];
  };

  cta: {
    title: string;
    description: string;
    primaryButton: CTAButton;
    secondaryButton: CTAButton;
  };
}

/* =============================================================================
   Case Studies Page Data
============================================================================= */

const caseStudies: CaseStudiesData = {
  /* =========================================================================
     Hero Section
  ========================================================================= */

  hero: {
    eyebrow: "Case Studies",

    title: "Real Cloud Transformation Success Stories",

    description:
      "Discover how Sandtongrid Technologies helps organizations modernize infrastructure, improve security and accelerate innovation through cloud engineering and DevOps.",
  },

  /* =========================================================================
     Featured Case Studies
  ========================================================================= */

  featured: {
    title: "Featured Success Stories",

    description:
      "A selection of transformation projects demonstrating measurable business outcomes across cloud migration, DevOps automation, cost optimization and modern infrastructure.",

    studies: [
      {
        title: "Enterprise AWS Cloud Migration",

        industry: "Financial Services",

        challenge:
          "Legacy on-premises infrastructure limited scalability, disaster recovery and operational agility while increasing maintenance costs.",

        solution:
          "Designed a secure AWS landing zone, migrated workloads using Infrastructure as Code with Terraform, implemented automated CI/CD pipelines and modernized networking following AWS Well-Architected principles.",

        outcome:
          "Improved platform availability, strengthened security posture, reduced infrastructure management effort and enabled future cloud scalability.",
      },

      {
        title: "DevOps Platform Modernization",

        industry: "Technology",

        challenge:
          "Manual deployments created inconsistent environments, frequent release delays and increased operational risk.",

        solution:
          "Implemented GitHub Actions CI/CD, Docker containerization, Kubernetes orchestration and Infrastructure as Code to standardize deployment processes.",

        outcome:
          "Accelerated software delivery, reduced deployment failures, improved developer productivity and increased release confidence.",
      },

      {
        title: "Cloud Cost Optimization Program",

        industry: "Healthcare",

        challenge:
          "Rapid cloud adoption resulted in increasing AWS costs with limited visibility into resource utilization.",

        solution:
          "Introduced governance, resource tagging standards, monitoring dashboards, rightsizing recommendations and FinOps reporting.",

        outcome:
          "Reduced unnecessary cloud expenditure while maintaining application performance, reliability and operational visibility.",
      },
    ],
  },

  /* =========================================================================
     Success Metrics
  ========================================================================= */

  metrics: {
    title: "Results That Matter",

    description:
      "Our success is measured by the outcomes we deliver for our clients through reliable cloud engineering, DevOps automation and modern infrastructure.",

    items: [
      {
        value: "99.9%",

        label: "System Availability",

        description:
          "Highly available cloud platforms built for business continuity.",
      },

      {
        value: "70%",

        label: "Faster Deployments",

        description:
          "CI/CD automation significantly reduced software release cycles.",
      },

      {
        value: "40%",

        label: "Cost Optimization",

        description:
          "Infrastructure optimization lowered cloud operational expenses.",
      },

      {
        value: "100+",

        label: "Successful Deliveries",

        description:
          "Projects delivered using secure and scalable engineering practices.",
      },
    ],
  },

  /* =========================================================================
     Client Testimonials
  ========================================================================= */

  testimonials: {
    title: "What Our Clients Say",

    description:
      "Long-term partnerships are built on trust, measurable results and consistent delivery.",

    items: [
      {
        quote:
          "Sandtongrid Technologies modernized our cloud infrastructure and significantly improved our deployment process. Their expertise exceeded our expectations.",

        author: "James Mwangi",

        role: "Head of Technology, Financial Services",
      },

      {
        quote:
          "The DevOps transformation delivered by the team reduced manual work and improved our software delivery speed across multiple environments.",

        author: "Sarah Otieno",

        role: "Engineering Manager, Healthcare",
      },

      {
        quote:
          "Professional, knowledgeable and committed to delivering high-quality solutions. We continue to rely on them for cloud consulting.",

        author: "David Kimani",

        role: "Operations Director, Retail",
      },
    ],
  },

  /* =========================================================================
     Customer Benefits
  ========================================================================= */

  benefits: {
    title: "Business Outcomes",

    items: [
      "Improved Security",
      "Lower Cloud Costs",
      "Higher Availability",
      "Faster Deployments",
      "Infrastructure Automation",
      "Scalable Cloud Platforms",
    ],
  },

  /* =========================================================================
     Call To Action
  ========================================================================= */

  cta: {
    title: "Let's Build Your Success Story",

    description:
      "Our cloud engineers are ready to help you modernize infrastructure and accelerate digital transformation.",

    primaryButton: {
      label: "Contact Us",

      to: "/contact",

      variant: "secondary",
    },

    secondaryButton: {
      label: "View Services",

      to: "/services",

      variant: "outline",
    },
  },
};

/* =============================================================================
   Export
============================================================================= */

export default caseStudies;