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

import {
  CareersHero,
  Benefits,
  OpenPositions,
  HiringProcess,
  CareersCTA,
} from "../components/sections/Careers";

const CareersPage = () => {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Sandtongrid Technologies and help build secure, scalable cloud solutions for organizations worldwide."
        canonical="/careers"
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
