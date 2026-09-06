/**
 * =============================================================================
 * File: CareersPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Careers page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all Careers page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 *
 * Page Structure:
 * 1. Careers Hero
 * 2. Benefits
 * 3. Open Positions
 * 4. Hiring Process
 * 5. Careers CTA
 * =============================================================================
 */

import SEO from "../components/seo";
import siteConfig from "../config/site";
import careersData from "../data/careers/careers";

import {
  CareersHero,
  Benefits,
  OpenPositions,
  HiringProcess,
  CareersCTA,
} from "../components/sections/Careers";

const jobPostingSchemas = careersData.openPositions.jobs.map((job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
  identifier: {
    "@type": "PropertyValue",
    name: siteConfig.company.name,
    value: job.id,
  },
  datePosted: "2025-01-15",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: siteConfig.company.name,
    sameAs: siteConfig.website.url,
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Worldwide",
  },
}));

const CareersPage = () => {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Sandtongrid Technologies and help build secure, scalable cloud solutions for organizations worldwide."
        canonical="/careers"
        schema={jobPostingSchemas}
      />

      {/* ==========================================================
                Careers Hero
            ========================================================== */}
      <CareersHero />

      {/* ==========================================================
                Employee Benefits
            ========================================================== */}
      <Benefits />

      {/* ==========================================================
                Open Positions
            ========================================================== */}
      <OpenPositions />

      {/* ==========================================================
                Hiring Process
            ========================================================== */}
      <HiringProcess />

      {/* ==========================================================
                Careers CTA
            ========================================================== */}
      <CareersCTA />
    </>
  );
};

export default CareersPage;
