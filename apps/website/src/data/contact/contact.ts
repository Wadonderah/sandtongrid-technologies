/******************************************************************************
File: contact.ts
------------------------------------------------------------------------------
Purpose:
Centralized content source for the Contact page.

Responsibilities:
- Store all Contact page content.
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

interface ContactData {
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };

    information: {
        title: string;
        description: string;
        email: string;
        phone: string;
        address: string;
        businessHours: string;
    };

    form: {
        title: string;
        description: string;
        submitButton: string;
    };

    faq: {
        title: string;
        description: string;
        questions: {
            question: string;
            answer: string;
        }[];
    };

    locations: {
        title: string;
        description: string;
        offices: {
            title: string;
            address: string;
            region: string;
        }[];
    };

    cta: {
        title: string;
        description: string;
        primaryButton: CTAButton;
        secondaryButton: CTAButton;
    };
}

/* =============================================================================
   Contact Page Data
============================================================================= */

const contact: ContactData = {
  /* =========================================================================
       Hero Section
       -------------------------------------------------------------------------
       Main introduction displayed at the top of the Contact page.
    ========================================================================= */

  hero: {
    /* ---------------------------------------------------------------------
           Small Heading
        --------------------------------------------------------------------- */

    eyebrow: "Contact Us",

    /* ---------------------------------------------------------------------
           Main Heading
        --------------------------------------------------------------------- */

    title: "Let's Build Something Great Together",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description:
      "Whether you're planning a cloud migration, modernizing infrastructure or looking for DevOps expertise, our team is ready to help.",
  },

  /* =========================================================================
       Contact Information
       -------------------------------------------------------------------------
       Primary company contact details.
    ========================================================================= */

  information: {
    /* ---------------------------------------------------------------------
           Section Heading
        --------------------------------------------------------------------- */

    title: "Get In Touch",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description:
      "Reach out using any of the contact methods below. We'll respond as quickly as possible.",

    /* ---------------------------------------------------------------------
           Email Address
        --------------------------------------------------------------------- */

    email: "info@sandtongridtechnologies.com",

    /* ---------------------------------------------------------------------
           Phone Number
        --------------------------------------------------------------------- */

    phone: "+254 700 000 000",

    /* ---------------------------------------------------------------------
           Physical Address
        --------------------------------------------------------------------- */

    address: "Nairobi, Kenya",

    /* ---------------------------------------------------------------------
           Business Hours
        --------------------------------------------------------------------- */

    businessHours: "Monday - Friday • 8:00 AM - 5:00 PM",
  },

  /* =========================================================================
       Contact Form
       -------------------------------------------------------------------------
       Content displayed above the enquiry form.
    ========================================================================= */

  form: {
    /* ---------------------------------------------------------------------
           Section Heading
        --------------------------------------------------------------------- */

    title: "Send Us A Message",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description:
      "Complete the form below and one of our cloud consultants will contact you shortly.",

    /* ---------------------------------------------------------------------
           Submit Button
        --------------------------------------------------------------------- */

    submitButton: "Send Message",
  },

  /* =========================================================================
       Frequently Asked Questions
       -------------------------------------------------------------------------
       Common questions asked by prospective clients.
    ========================================================================= */

  faq: {
    /* ---------------------------------------------------------------------
           Section Heading
        --------------------------------------------------------------------- */

    title: "Frequently Asked Questions",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description: "Answers to some of the most common questions we receive.",

    /* ---------------------------------------------------------------------
           Frequently Asked Questions List
        --------------------------------------------------------------------- */

    questions: [
      {
        question: "Which cloud platforms do you support?",

        answer:
          "We primarily specialize in Amazon Web Services (AWS), while following cloud-native and vendor best practices.",
      },

      {
        question: "Do you provide managed cloud services?",

        answer:
          "Yes. We provide monitoring, infrastructure management, security, optimization and ongoing operational support.",
      },

      {
        question: "Can you help migrate existing infrastructure to AWS?",

        answer:
          "Absolutely. We assess your current environment, design the migration strategy, execute the migration and optimize workloads after deployment.",
      },

      {
        question: "Do you build CI/CD pipelines?",

        answer:
          "Yes. We design and implement automated CI/CD pipelines using GitHub Actions, Jenkins and Infrastructure as Code with Terraform.",
      },
    ],
  },

  /* =========================================================================
       Office Locations
       -------------------------------------------------------------------------
       Physical office locations and operational regions.
    ========================================================================= */

  locations: {
    /* ---------------------------------------------------------------------
           Section Heading
        --------------------------------------------------------------------- */

    title: "Our Locations",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description:
      "We support businesses locally and internationally through flexible delivery models.",

    /* ---------------------------------------------------------------------
           Office Locations
        --------------------------------------------------------------------- */

    offices: [
      {
        title: "Head Office",

        address: "Nairobi, Kenya\nServing clients across Africa and globally.",

        region: "East Africa",
      },

      {
        title: "Remote Operations",

        address:
          "Distributed engineering team supporting cloud and technology projects worldwide.",

        region: "Global",
      },
    ],
  },

  /* =========================================================================
       Final Call To Action
       -------------------------------------------------------------------------
       Closing section encouraging visitors to start a conversation.
    ========================================================================= */

  cta: {
    /* ---------------------------------------------------------------------
           Section Heading
        --------------------------------------------------------------------- */

    title: "Ready To Start Your Cloud Journey?",

    /* ---------------------------------------------------------------------
           Supporting Description
        --------------------------------------------------------------------- */

    description:
      "Speak with our cloud engineers and discover how we can help your organization build secure, scalable and reliable cloud solutions.",

    /* ---------------------------------------------------------------------
           Primary Button
        --------------------------------------------------------------------- */

    primaryButton: {
      label: "Schedule A Consultation",

      to: "/contact",

      variant: "secondary",
    },

    /* ---------------------------------------------------------------------
           Secondary Button
        --------------------------------------------------------------------- */

    secondaryButton: {
      label: "Explore Services",

      to: "/services",

      variant: "outline",
    },
  },
};

/* =============================================================================
   Export
============================================================================= */

export default contact;