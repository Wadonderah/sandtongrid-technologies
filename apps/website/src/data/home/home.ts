/******************************************************************************
File: home.ts
------------------------------------------------------------------------------
Purpose:
Centralized content for the Home page.

Responsibilities:
- Hero
- Feature Grid
- Frequently Asked Questions (FAQ)
- Homepage Call-To-Action (CTA)
- Newsletter

Modification History
------------------------------------------------------------------------------
✓ Updated Homepage FAQ.
✓ Replaced generic FAQs with enterprise-focused questions.
✓ Added one high-value question for each core service.
✓ Improved SEO-friendly wording.
✓ Preserved existing homepage structure.
******************************************************************************/

const homeData = {
  /* ==========================================================================
     Hero Section
     --------------------------------------------------------------------------
     Purpose:
     Primary landing section introducing Sandtongrid Technologies and guiding
     visitors toward the company's core cloud consulting services.
  ========================================================================== */

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

  /* ==========================================================================
     Feature Grid
     --------------------------------------------------------------------------
     Purpose:
     Highlight Sandtongrid Technologies' primary service offerings.
  ========================================================================== */

  featureGrid: {
    title: "Our Core Cloud Services",

    description:
      "We help organizations modernize, secure and optimize their cloud environments through end-to-end consulting, implementation and managed services.",

    items: [
      {
        title: "Cloud Architecture",

        description:
          "Design secure, scalable and highly available AWS architectures aligned with the AWS Well-Architected Framework.",
      },

      {
        title: "Cloud Migration",

        description:
          "Plan and execute low-risk migrations from on-premises or legacy environments into AWS.",
      },

      {
        title: "DevOps & Automation",

        description:
          "Accelerate software delivery using CI/CD, Infrastructure as Code, Docker, Kubernetes and GitHub Actions.",
      },

      {
        title: "Managed Cloud Services",

        description:
          "24/7 monitoring, proactive maintenance, cloud security and continuous optimization for production workloads.",
      },
    ],
  },

  /* ==========================================================================
     Statistics
     --------------------------------------------------------------------------
     Purpose:
     Highlight key business achievements and build trust with prospective
     customers.
  ========================================================================== */

  stats: {
    title: "Trusted Cloud Engineering Partner",

    description:
      "We deliver secure, scalable and reliable cloud solutions that help organizations innovate faster while reducing operational complexity.",

    items: [
      {
        value: "100+",
        label: "Projects Delivered",
      },

      {
        value: "50+",
        label: "Enterprise Clients",
      },

      {
        value: "99.9%",
        label: "Platform Availability",
      },

      {
        value: "24/7",
        label: "Managed Support",
      },
    ],
  },

  /* ==========================================================================
     Frequently Asked Questions
     --------------------------------------------------------------------------
     Purpose:
     Address the most common questions asked by prospective enterprise clients.

     Design Notes:
     - One question represents each core service.
     - Questions are written specifically for Sandtongrid Technologies.
     - Answers are concise, professional and business-focused.
  ========================================================================== */

  faq: {
    title: "Frequently Asked Questions",

    items: [
      {
        question:
          "How can AWS help my business grow while keeping costs under control?",

        answer:
          "AWS provides secure and scalable infrastructure that allows your business to grow without large upfront investments. We design cost-efficient cloud architectures, optimize resource usage, and continuously monitor cloud spending so you receive maximum value from your AWS investment.",
      },

      {
        question:
          "Can you migrate our existing applications to AWS with minimal downtime?",

        answer:
          "Yes. Our migration specialists assess your current environment, develop a tailored migration strategy, and execute the migration using proven AWS best practices to minimize downtime while protecting your applications and business data.",
      },

      {
        question:
          "How can DevOps improve the speed and reliability of our software releases?",

        answer:
          "DevOps enables faster and more reliable software delivery through CI/CD automation, Infrastructure as Code, continuous testing, and deployment best practices. This reduces manual errors while improving deployment consistency and release frequency.",
      },

      {
        question:
          "Do you provide ongoing monitoring and management after deployment?",

        answer:
          "Absolutely. Our managed cloud services include infrastructure monitoring, proactive maintenance, security updates, backup management, performance optimization, and operational support to keep your cloud environment secure and available.",
      },

      {
        question:
          "How do you protect cloud environments from security threats and unauthorized access?",

        answer:
          "Security is integrated into every solution we build. We implement least-privilege IAM policies, encryption, network security controls, continuous monitoring, vulnerability management, and AWS security best practices to protect your workloads and sensitive business data.",
      },

      {
        question:
          "Can you help us deploy and manage Kubernetes workloads on AWS?",

        answer:
          "Yes. We design, deploy, and manage Kubernetes environments using Amazon EKS, enabling organizations to run modern containerized applications with greater scalability, resilience, automation, and operational efficiency.",
      },

      {
        question:
          "How can we reduce our monthly AWS costs without sacrificing performance?",

        answer:
          "We perform detailed cloud cost assessments, identify underutilized resources, recommend the appropriate AWS pricing models, and implement FinOps best practices that reduce unnecessary spending while maintaining application performance.",
      },

      {
        question:
          "Why should I choose Sandtongrid Technologies for my cloud transformation journey?",

        answer:
          "Sandtongrid Technologies combines expertise in AWS, DevOps, Kubernetes, Infrastructure as Code, cloud security, and managed services to deliver scalable, secure, and future-ready cloud solutions that align with your business objectives and long-term growth strategy.",
      },
    ],
  },

  /* ==========================================================================
     Homepage Call-To-Action
     --------------------------------------------------------------------------
     Purpose:
     Encourage visitors to engage with the company after reviewing the
     homepage content.
  ========================================================================== */

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

  /* ==========================================================================
     Newsletter
     --------------------------------------------------------------------------
     Purpose:
     Encourage visitors to subscribe for cloud insights, AWS updates and
     DevOps best practices.
  ========================================================================== */

  newsletter: {
    title: "Stay Updated",

    description:
      "Subscribe to receive cloud insights, DevOps best practices, AWS updates and technology news from Sandtongrid Technologies.",

    placeholder: "Enter your email",

    button: "Subscribe",
  },
};

export default homeData;