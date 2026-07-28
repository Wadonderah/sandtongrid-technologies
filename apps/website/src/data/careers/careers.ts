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

    jobs: [] as Job[],
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