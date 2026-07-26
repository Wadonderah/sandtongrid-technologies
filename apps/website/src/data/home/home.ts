/******************************************************************************
File: home.ts
------------------------------------------------------------------------------
Purpose:
Centralized content for the Home page.

Responsibilities:
- Hero
- Homepage CTA
- Newsletter
- FAQ
******************************************************************************/

const homeData = {
  hero: {
    eyebrow: "AWS Advanced Consulting Partner",

    title: "Modern Cloud Infrastructure Built for Growth",

    description:
      "We help organizations design, migrate and operate secure, scalable cloud platforms using AWS, Terraform, Kubernetes and DevOps best practices.",

    primaryButton: {
      label: "Get Started",

      link: "/contact",
    },

    secondaryButton: {
      label: "View Services",

      link: "/services",
    },
  },

  cta: {
    title: "Ready to Modernize Your Cloud?",

    description:
      "Partner with Sandtongrid Technologies to build secure, scalable and reliable cloud infrastructure using AWS, Terraform, Kubernetes and DevOps best practices.",

    primaryButton: {
      label: "Contact Us",

      link: "/contact",
    },

    secondaryButton: {
      label: "View Services",

      link: "/services",
    },
  },

  newsletter: {
    title: "Stay Updated",

    description:
      "Subscribe to receive cloud insights, DevOps best practices, AWS updates and technology news from Sandtongrid Technologies.",

    placeholder: "Enter your email",

    button: "Subscribe",
  },

  faq: {
    title: "Frequently Asked Questions",

    items: [
      {
        question: "Which cloud platforms do you support?",
        answer:
          "We specialize in AWS and provide cloud architecture, migration, automation and managed services.",
      },

      {
        question: "Do you offer DevOps consulting?",
        answer:
          "Yes. We implement CI/CD pipelines, Infrastructure as Code with Terraform, Docker and Kubernetes.",
      },

      {
        question: "Can you migrate existing applications?",
        answer:
          "Yes. We assess, plan and execute secure migrations with minimal downtime.",
      },

      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes. We offer monitoring, maintenance, security updates and operational support.",
      },
    ],
  },
};

export default homeData;