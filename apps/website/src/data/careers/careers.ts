/******************************************************************************
File: careers.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Careers page.

Responsibilities:
- Store all Careers page content.
- Separate business content from presentation.
- Support future CMS/API integration.
******************************************************************************/

/* ============================================================================
   Types
============================================================================ */

export interface Job {
  id: string;

  title: string;

  location: string;

  employmentType:
    | "Full Time"
    | "Part Time"
    | "Contract"
    | "Internship"
    | "Remote";

  department: string;

  description: string;
}

/* ============================================================================
   Careers Data
============================================================================ */

const careers = {
  hero: {
    eyebrow: "Careers",

    title: "Build the Future of Cloud Technology",

    description:
      "Join Sandtongrid Technologies and help organizations transform their businesses through cloud engineering, DevOps, cybersecurity and modern software development.",
  },

  benefits: {
    title: "Why Work With Us",

    description:
      "We invest in people, continuous learning and building an engineering culture focused on innovation.",

    items: [
      "Continuous Learning",

      "Remote Friendly",

      "Career Growth",

      "Competitive Compensation",

      "Modern Technology Stack",

      "Collaborative Engineering Culture",
    ],
  },

  openPositions: {
    title: "Open Positions",

    description:
      "We're always looking for talented engineers passionate about cloud technologies.",

    emptyState: {
      title: "No Open Positions",

      description:
        "We don't have any active vacancies at the moment, but we'd still love to hear from you.",

      buttonText: "Contact Us",

      buttonLink: "/contact",
    },

    jobs: [
      {
        id: "senior-aws-cloud-architect",
        title: "Senior AWS Cloud Architect",
        location: "Remote / Hybrid",
        employmentType: "Full Time",
        department: "Cloud Engineering",
        description:
          "Architect enterprise-scale AWS landing zones, Well-Architected governance frameworks, and migration strategies for global clients.",
      },
      {
        id: "devops-sre-engineer",
        title: "DevOps & SRE Infrastructure Engineer",
        location: "Remote",
        employmentType: "Full Time",
        department: "DevOps & Automation",
        description:
          "Design and automate Terraform IaC, Kubernetes (Amazon EKS) clusters, CI/CD pipelines with GitHub Actions, and 24/7 observability suites.",
      },
      {
        id: "cloud-security-specialist",
        title: "Cloud Security & Compliance Engineer",
        location: "Remote",
        employmentType: "Full Time",
        department: "Cloud Security",
        description:
          "Implement Zero-Trust architectures, AWS WAF, GuardDuty, KMS key governance, and automated SOC2 / ISO compliance guardrails.",
      },
    ] as Job[],
  },

  hiringProcess: {
    title: "Our Hiring Process",

    description:
      "A transparent recruitment process designed to help both you and our team succeed.",

    steps: [
      "Application Review",

      "Technical Assessment",

      "Team Interview",

      "Final Discussion",

      "Offer & Onboarding",
    ],
  },

  cta: {
    title: "Ready to Join Our Team?",

    description:
      "We're always interested in meeting passionate cloud engineers and technology professionals.",

    primaryButton: {
      label: "Apply Now",

      to: "/contact",

      variant: "secondary" as const,
    },

    secondaryButton: {
      label: "Contact HR",

      to: "/contact",

      variant: "outline" as const,
    },
  },
};

export default careers;