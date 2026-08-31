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

    trustSignals: [
      "Cloud expertise",
      "Security-first delivery",
      "Business-focused outcomes",
      "Long-term partnerships",
    ],
  },

  /* ==========================================================================
     Mission & Vision
  ========================================================================== */

  missionVision: {
    eyebrow: "What drives us",

    mission: {
      title: "Mission",

      description:
        "To help organizations build secure, scalable and resilient cloud foundations that support operational confidence and long-term business growth.",
    },

    vision: {
      title: "Vision",

      description:
        "To become a trusted cloud engineering partner for businesses that need practical technology execution, sustainable modernization and dependable delivery.",
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
      "We combine AWS-focused cloud engineering, thoughtful automation and hands-on delivery to help organizations build secure platforms that are easier to operate, cheaper to scale and safer to trust.",

    trustPoints: [
      "AWS-focused delivery",
      "Secure by default",
      "Practical modernization",
      "Business-first execution",
    ],

    /* ------------------------------------------------------------------------
       Competitive Advantages
    ------------------------------------------------------------------------ */

    highlights: [
      {
        title: "Secure Cloud Architecture",

        description:
          "Designing resilient, highly available and secure AWS environments that align with operational realities and long-term growth goals.",
      },

      {
        title: "Migration with Minimal Disruption",

        description:
          "Helping teams move applications and workloads with a clear plan that reduces risk, supports continuity and improves platform performance.",
      },

      {
        title: "Infrastructure as Code",

        description:
          "Automating infrastructure deployment with Terraform to increase consistency, reduce human error and make scale predictable.",
      },

      {
        title: "Modern Delivery Practices",

        description:
          "Improving software delivery through CI/CD pipelines, containerization and DevOps workflows designed to reduce friction and speed execution.",
      },

      {
        title: "Operational Clarity",

        description:
          "Combining security, observability and cloud cost awareness so teams can run better systems with more confidence and fewer surprises.",
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
