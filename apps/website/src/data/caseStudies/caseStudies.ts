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

    title: "Proven Cloud Transformation Outcomes",

    description:
      "See how we've helped organizations achieve measurable results through secure cloud architecture, operational automation and modern infrastructure engineering.",
  },

  /* =========================================================================
     Featured Case Studies
  ========================================================================= */

  featured: {
    title: "Featured Success Stories",

    description:
      "A selection of cloud transformation projects where we delivered measurable business outcomes: from scaling infrastructure to accelerating deployment velocity to reducing operational costs.",

    studies: [
      {
        title: "Enterprise AWS Cloud Migration",

        industry: "Financial Services",

        challenge:
          "Legacy on-premises infrastructure created operational bottlenecks, limited disaster recovery capability, high maintenance costs and blocked business scaling.",

        solution:
          "Designed a secure AWS landing zone using Well-Architected Framework, migrated workloads with Terraform Infrastructure as Code, implemented automated CI/CD pipelines and modernized networking with zero downtime.",

        outcome:
          "Achieved 99.95% uptime, improved security posture by 60%, reduced infrastructure spend by 35% and enabled 10x faster deployment cycles.",
      },

      {
        title: "DevOps Platform Modernization",

        industry: "Technology",

        challenge:
          "Manual deployment processes created inconsistent environments, unpredictable release delays, frequent production issues and developer frustration.",

        solution:
          "Implemented GitHub Actions CI/CD pipelines, Docker containerization, Kubernetes orchestration and complete Infrastructure as Code to eliminate manual steps.",

        outcome:
          "Reduced deployment time from hours to minutes, cut production incidents by 75%, increased team velocity and gave developers confidence in every release.",
      },

      {
        title: "Cloud Cost Optimization Program",

        industry: "Healthcare",

        challenge:
          "Rapid cloud adoption without governance created cost surprises, poor resource utilization and limited visibility into cloud spending.",

        solution:
          "Introduced AWS governance policies, resource tagging standards, cost monitoring dashboards, rightsizing analysis and FinOps reporting.",

        outcome:
          "Reduced monthly AWS costs by 40% without impacting performance, gained real-time cost visibility and built sustainable cloud operations practices.",
      },
    ],
  },

  /* =========================================================================
     Success Metrics
  ========================================================================= */

  metrics: {
    title: "Measurable Business Impact",

    description:
      "Our success is measured by real outcomes delivered for our clients through secure cloud engineering, DevOps automation and modern infrastructure practices.",

    items: [
      {
        value: "99.95%",

        label: "System Availability",

        description:
          "Highly reliable cloud platforms built for continuous operations.",
      },

      {
        value: "75%",

        label: "Faster Deployments",

        description:
          "CI/CD automation dramatically reduced software release cycles.",
      },

      {
        value: "40%",

        label: "Cost Reduction",

        description:
          "Infrastructure optimization lowered cloud operational expenses.",
      },

      {
        value: "100+",

        label: "Successful Projects",

        description:
          "Delivered using secure and scalable engineering practices.",
      },
    ],
  },

  /* =========================================================================
     Client Testimonials
  ========================================================================= */

  testimonials: {
    title: "What Our Clients Say",

    description:
      "Long-term partnerships are built on delivery, measurable results and proven technical leadership across cloud transformation.",

    items: [
      {
        quote:
          "Sandtongrid Technologies completely modernized our cloud infrastructure and cut our deployment time from hours to minutes. Their technical depth and execution exceeded every expectation.",

        author: "Michael Anderson",

        role: "CTO, Financial Services Firm",
      },

      {
        quote:
          "The DevOps transformation delivered by this team reduced manual work by 75% and gave us confidence in every release. They understand the challenges of scaling infrastructure.",

        author: "Emily Thompson",

        role: "VP Engineering, Healthcare Tech",
      },

      {
        quote:
          "Professional, technically exceptional and truly committed to long-term success. We continue to rely on them for strategic cloud engineering decisions.",

        author: "David Kimani",

        role: "Head of Operations, E-Commerce",
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
      "Reduced Cloud Costs",
      "Higher Reliability",
      "Faster Deployments",
      "Operational Automation",
      "Scalable Infrastructure",
    ],
  },

  /* =========================================================================
     Call To Action
  ========================================================================= */

  cta: {
    title: "Ready to Achieve Similar Results?",

    description:
      "Our cloud engineers are ready to discuss your infrastructure goals, assess your current architecture and build a secure, practical path forward that works for your business.",

    primaryButton: {
      label: "Start Your Transformation",

      to: "/contact",

      variant: "secondary",
    },

    secondaryButton: {
      label: "View Our Services",

      to: "/services",

      variant: "outline",
    },
  },
};

/* =============================================================================
   Export
============================================================================= */

export default caseStudies;
