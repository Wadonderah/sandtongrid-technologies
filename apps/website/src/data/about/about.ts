/******************************************************************************
File: about.ts
------------------------------------------------------------------------------
Purpose:
Central content source for the About page.

Responsibilities:
- Hero content
- Mission & Vision
- Core Values
- Why Sandtongrid
******************************************************************************/

export const about = {
  hero: {
    eyebrow: "About Sandtongrid Technologies",

    title: "Building Secure Cloud Platforms",

    description:
      "We help organizations modernize their infrastructure using AWS, DevOps, Kubernetes and Terraform while focusing on security, scalability and operational excellence.",
  },

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

  coreValues: {
    title: "Our Core Values",

    items: [
      {
        title: "Integrity",

        description:
          "We build trusted long-term relationships through transparency and accountability.",
      },

      {
        title: "Innovation",

        description:
          "We continuously improve cloud solutions using modern technologies and automation.",
      },

      {
        title: "Customer Success",

        description:
          "Every solution is designed around measurable business outcomes.",
      },

      {
        title: "Excellence",

        description:
          "We deliver secure, scalable and maintainable cloud platforms.",
      },
    ],
  },

  whySandtongrid: {
    title: "Why Choose Sandtongrid Technologies?",

    description:
      "We combine cloud engineering expertise, DevOps automation and enterprise security practices to deliver reliable digital transformation projects.",

    highlights: [
      "AWS cloud architecture and migration",

      "Infrastructure as Code using Terraform",

      "Kubernetes and container platforms",

      "CI/CD automation and DevOps practices",

      "Security, monitoring and cost optimization",
    ],
  },
};

export default about;
