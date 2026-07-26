/******************************************************************************
File: careers.ts
------------------------------------------------------------------------------
Purpose:
Single source of truth for the Careers page.

Responsibilities:
- Store all Careers page content.
- Store current job openings.
- Store empty-state configuration.
- Keep business data separate from UI components.
******************************************************************************/

/* =============================================================================
   Types
============================================================================= */

export interface Job {
  id: string;

  title: string;

  location: string;

  employmentType:
    "Full Time" | "Part Time" | "Contract" | "Internship" | "Remote";

  department: string;

  description: string;
}

/* =============================================================================
   Careers Page Data
============================================================================= */

const careers = {
  page: {
    sectionTitle: "Open Positions",

    sectionDescription:
      "Join our growing team and help us deliver secure, scalable and innovative technology solutions for clients around the world.",
  },

  emptyState: {
    title: "No Open Positions",

    description:
      "We currently don't have any open vacancies. We're always interested in meeting talented professionals. Feel free to contact us and we'll reach out when a suitable opportunity becomes available.",

    buttonText: "Contact Us",

    buttonLink: "/contact",
  },

  jobs: [] as Job[],
};

export default careers;
