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
    eyebrow: "Cloud Strategy • Infrastructure • Automation",

    title: "Secure Cloud Systems That Help Your Business Move Faster",

    description:
      "Sandtongrid helps organizations modernize their infrastructure, reduce operational drag, and ship with more confidence through AWS, DevOps, Kubernetes, automation, and security-first delivery.",

    trustSignals: [
      "Infrastructure Modernization",
      "Cloud Security",
      "DevOps Automation",
      "Operational Resilience",
    ],

    primaryButton: {
      label: "Book a Consultation",

      link: "/contact",
    },

    secondaryButton: {
      label: "Explore Services",

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
    title: "What We Help You Improve",

    description:
      "From strategy to operations, we help businesses simplify cloud complexity and build platforms that are faster, safer, and easier to scale.",

    items: [
      {
        title: "Cloud Architecture",

        description:
          "Design resilient AWS platforms that support growth, strengthen security, and reduce infrastructure complexity.",
      },

      {
        title: "Cloud Migration",

        description:
          "Move critical workloads with less risk, less disruption, and a clearer path to a more scalable future state.",
      },

      {
        title: "DevOps & Automation",

        description:
          "Accelerate delivery with reliable CI/CD, automation, container orchestration, and cleaner operational workflows.",
      },

      {
        title: "Managed Cloud Operations",

        description:
          "Keep production systems healthy with proactive monitoring, support, security improvements, and continuous optimization.",
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
    title: "Ready to Build a Better Cloud Foundation?",

    description:
      "Whether you are modernizing legacy systems or scaling a cloud-first platform, Sandtongrid can help you reduce risk, improve efficiency, and move with more confidence.",

    primaryButton: {
      label: "Book a Strategy Call",

      link: "/contact",
    },

    secondaryButton: {
      label: "Review Services",

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
