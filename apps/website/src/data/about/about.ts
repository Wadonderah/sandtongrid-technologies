/******************************************************************************
File: about.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the About page.

Responsibilities:
- Hero
- Mission & Vision
- Core Values
- Why Sandtongrid Technologies

Rules:
- Keep all business content here.
- React components should only render this data.
- This file may also be reused by the Home page.
******************************************************************************/

export const about = {
  /* ==========================================================================
     Hero
  ========================================================================== */

  hero: {
    eyebrow: "About Sandtongrid Technologies",

    title: "Building Secure Cloud Platforms",

    description:
      "We help organizations modernize their infrastructure using AWS, DevOps, Kubernetes and Terraform while focusing on security, scalability and operational excellence.",
  },

  /* ==========================================================================
     Mission & Vision
  ========================================================================== */

  missionVision: {
    mission: {
      title: "Mission",

      description:
        "To empower organizations through secure, scalable and reliable cloud solutions.",
    },

    vision: {
      title: "Vision",

      description:
        "To become Africa's trusted cloud engineering and digital transformation partner.",
    },
  },

  /* ==========================================================================
     Core Values
  ========================================================================== */

  coreValues: {
    title: "Our Core Values",

    items: [
      {
        title: "Integrity",

        description:
          "We build trusted long-term relationships through transparency, accountability and ethical leadership.",
      },

      {
        title: "Innovation",

        description:
          "We continuously improve cloud solutions using modern technologies, automation and engineering best practices.",
      },

      {
        title: "Customer Success",

        description:
          "Every engagement is focused on measurable business outcomes and long-term value.",
      },

      {
        title: "Excellence",

        description:
          "We deliver secure, scalable, resilient and maintainable cloud platforms built for growth.",
      },
    ],
  },

  /* ==========================================================================
     Why Sandtongrid Technologies
     --------------------------------------------------------------------------
     This section is shared between the About page and the Home page.
  ========================================================================== */

  whySandtongrid: {
    /* ------------------------------------------------------------------------
       Section Label
    ------------------------------------------------------------------------ */

    eyebrow: "WHY SANDTONGRID",

    /* ------------------------------------------------------------------------
       Section Heading
    ------------------------------------------------------------------------ */

    title: "Why Businesses Choose Sandtongrid Technologies",

    /* ------------------------------------------------------------------------
       Introductory Description
    ------------------------------------------------------------------------ */

    description:
      "We combine AWS expertise, DevOps automation and cloud engineering best practices to help organizations build secure, scalable and cost-efficient cloud platforms that support long-term business growth.",

    /* ------------------------------------------------------------------------
       Competitive Advantages
    ------------------------------------------------------------------------ */

    highlights: [
      {
        title: "AWS Cloud Expertise",

        description:
          "Designing resilient, highly available and secure AWS environments using the AWS Well-Architected Framework.",
      },

      {
        title: "Cloud Migration",

        description:
          "Migrating business applications with minimal disruption while improving performance, resilience and operational efficiency.",
      },

      {
        title: "Infrastructure as Code",

        description:
          "Automating infrastructure deployment using Terraform to ensure consistency, repeatability and version control.",
      },

      {
        title: "DevOps & Kubernetes",

        description:
          "Accelerating software delivery through CI/CD pipelines, Docker containers and Kubernetes orchestration.",
      },

      {
        title: "Security & Cost Optimization",

        description:
          "Improving cloud security while continuously monitoring and optimizing infrastructure costs.",
      },
    ],

    /* ------------------------------------------------------------------------
       Section Call-To-Action
    ------------------------------------------------------------------------ */

    cta: {
      title: "Ready to modernize your cloud infrastructure?",

      button: "Talk to an AWS Expert",

      link: "/contact",
    },
  },
};

export default about;