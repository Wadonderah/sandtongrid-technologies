/******************************************************************************
File: services.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Services page.

Responsibilities:
- Store all Services page content.
- Keep business content separate from UI components.
- Make future updates easy without editing components.
- Support future CMS/API integration.

Usage:
import services from "@/data/services/services";
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
 * Generic content card.
 */
interface ContentCard {
  title: string;
  description: string;
}

/**
 * Process step.
 */
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/**
 * Migration step.
 */
interface MigrationStep {
  title: string;
  description: string;
}

/**
 * Technology service card.
 */
interface TechnologyService {
  icon: string;
  title: string;
  description: string;
}

/**
 * Services page data model.
 */
interface ServicesData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  cloudConsulting: {
    eyebrow: string;
    title: string;
    description: string;
    services: ContentCard[];
  };

  cloudMigration: {
    eyebrow: string;
    title: string;
    description: string;
    steps: MigrationStep[];
  };

  devOpsAutomation: {
    title: string;
    services: TechnologyService[];
  };

  managedServices: {
    title: string;
    services: TechnologyService[];
  };

  process: {
    title: string;
    steps: ProcessStep[];
  };

  technologies: {
    title: string;
    items: string[];
  };

  cta: CTASection;
}

/* =============================================================================
   Services Page Data
============================================================================= */

const services: ServicesData = {
  /* =========================================================================
     Hero Section
     -------------------------------------------------------------------------
     Top section of the Services page.
  ========================================================================= */

  hero: {
    eyebrow: "Our Services",

    title: "Cloud Solutions Designed for Modern Businesses",

    description:
      "We help organizations adopt cloud technologies, automate infrastructure, improve software delivery and operate secure, scalable platforms.",
  },

  /* =========================================================================
     Cloud Consulting Section
     -------------------------------------------------------------------------
     Advisory and architecture services.
  ========================================================================= */

  cloudConsulting: {
    eyebrow: "Cloud Consulting",

    title: "Expert Guidance For Every Stage",

    description:
      "Our consultants help organizations design secure, scalable and cost-effective cloud solutions.",

    services: [
      {
        title: "Cloud Strategy",

        description:
          "Develop cloud adoption roadmaps aligned with business goals.",
      },

      {
        title: "Architecture Reviews",

        description:
          "Assess existing cloud environments and recommend improvements.",
      },

      {
        title: "AWS Well-Architected",

        description:
          "Improve reliability, security, performance and cost optimization.",
      },
    ],
  },

  /* =========================================================================
     Cloud Migration Section
     -------------------------------------------------------------------------
     Migration methodology and process.
  ========================================================================= */

  cloudMigration: {
    eyebrow: "Cloud Migration",

    title: "Migrate With Confidence",

    description:
      "We help organizations modernize their infrastructure through structured migration planning, secure execution and continuous optimization.",

    steps: [
      {
        title: "Assessment",

        description:
          "Evaluate infrastructure, applications and workloads to determine migration readiness.",
      },

      {
        title: "Planning",

        description:
          "Create a migration roadmap with timelines, architecture and risk mitigation.",
      },

      {
        title: "Migration",

        description:
          "Move workloads securely using proven AWS migration practices.",
      },

      {
        title: "Validation",

        description:
          "Verify application functionality, security and performance after migration.",
      },

      {
        title: "Optimization",

        description:
          "Improve reliability, security and cost efficiency after deployment.",
      },
    ],
  },

  /* =========================================================================
     DevOps & Automation Section
     -------------------------------------------------------------------------
     DevOps engineering capabilities.
  ========================================================================= */

  devOpsAutomation: {
    title: "DevOps & Automation",

    services: [
      {
        icon: "CI",

        title: "CI/CD Pipelines",

        description:
          "Design and implement automated build, testing and deployment pipelines that accelerate software delivery while improving quality.",
      },

      {
        icon: "IaC",

        title: "Infrastructure as Code",

        description:
          "Provision and manage cloud infrastructure using Terraform with reusable, version-controlled and secure configurations.",
      },

      {
        icon: "K8",

        title: "Container Orchestration",

        description:
          "Deploy and manage containerized workloads using Docker and Kubernetes for resilient, scalable applications.",
      },

      {
        icon: "Ops",

        title: "Monitoring & Automation",

        description:
          "Improve operational visibility with monitoring, alerting and automated operational workflows that reduce manual effort.",
      },
    ],
  },

  /* =========================================================================
     Managed Services Section
     -------------------------------------------------------------------------
     Ongoing support and cloud operations.
  ========================================================================= */

  managedServices: {
    title: "Managed Cloud Services",

    services: [
      {
        icon: "24",

        title: "24/7 Infrastructure Monitoring",

        description:
          "Continuous monitoring of cloud resources with proactive alerting and rapid incident response.",
      },

      {
        icon: "SEC",

        title: "Cloud Security Management",

        description:
          "Protect workloads through identity management, patching, vulnerability monitoring and security best practices.",
      },

      {
        icon: "DR",

        title: "Backup & Disaster Recovery",

        description:
          "Implement automated backups and disaster recovery strategies to ensure business continuity.",
      },

      {
        icon: "OPT",

        title: "Performance Optimization",

        description:
          "Continuously optimize cloud environments for performance, reliability and cost efficiency.",
      },
    ],
  },

    /* =========================================================================
     Delivery Process Section
     -------------------------------------------------------------------------
     Standard project delivery approach.
  ========================================================================= */

  process: {
    title: "Our Delivery Process",

    /* ---------------------------------------------------------------------
       Delivery Workflow

       Purpose:
       Describe the typical engagement lifecycle followed by
       Sandtongrid Technologies for cloud consulting,
       migration and modernization projects.

       This content is intentionally business-focused and
       mirrors a real consulting engagement without copying
       competitor wording.
    --------------------------------------------------------------------- */

    steps: [
      {
        number: "01",

        title: "Discovery & Assessment",

        description:
          "We begin by understanding your business objectives, reviewing your current environment, identifying technical constraints and evaluating opportunities for cloud adoption.",
      },

      {
        number: "02",

        title: "Solution Design",

        description:
          "Our architects design a secure, scalable and cost-efficient solution tailored to your business, including architecture diagrams, migration plans and implementation roadmaps.",
      },

      {
        number: "03",

        title: "Implementation & Migration",

        description:
          "We deploy cloud infrastructure, automate provisioning, migrate workloads and validate every stage to minimize operational disruption and ensure a smooth transition.",
      },

      {
        number: "04",

        title: "Operate & Continuous Improvement",

        description:
          "After deployment, we continuously monitor performance, strengthen security, optimize cloud costs and provide ongoing operational support as your business evolves.",
      },
    ],
  },

  /* =========================================================================
     Technologies Section
     -------------------------------------------------------------------------
     Technologies and platforms used by Sandtongrid Technologies.
  ========================================================================= */

  technologies: {
    title: "Technologies We Use",

    items: [
      "Amazon Web Services (AWS)",

      "Terraform",

      "Docker",

      "Kubernetes",

      "GitHub Actions",

      "Jenkins",

      "Linux",

      "Python",

      "Node.js",

      "React",

      "TypeScript",

      "CloudWatch",
    ],
  },

  /* =========================================================================
     Call To Action Section
     -------------------------------------------------------------------------
     Final conversion section encouraging visitors to contact the company or
     explore previous client success stories.
  ========================================================================= */

  cta: {
    /* ---------------------------------------------------------------------
       Section Heading
    --------------------------------------------------------------------- */

    title: "Ready to Modernize Your Cloud?",

    /* ---------------------------------------------------------------------
       Supporting Description
    --------------------------------------------------------------------- */

    description:
      "Whether you're starting your cloud journey or optimizing an existing platform, our engineers are ready to help.",

    /* ---------------------------------------------------------------------
       Primary Action Button
    --------------------------------------------------------------------- */

    primaryButton: {
      label: "Talk to an Expert",

      to: "/contact",

      variant: "secondary",
    },

    /* ---------------------------------------------------------------------
       Secondary Action Button
    --------------------------------------------------------------------- */

    secondaryButton: {
      label: "View Case Studies",

      to: "/case-studies",

      variant: "ghost",
    },
  },
};

/* =============================================================================
   Export
============================================================================= */

export default services;