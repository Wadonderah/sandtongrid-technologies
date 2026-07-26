/**
 * =============================================================================
 * File: CaseStudiesPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Case Studies page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all Case Studies page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 *
 * Page Structure:
 * 1. Case Studies Hero
 * 2. Case Studies Grid
 * 3. Success Metrics
 * 4. Testimonials
 * 5. Case Studies CTA
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  CaseStudiesHero,
  CaseStudiesGrid,
  SuccessMetrics,
  Testimonials,
  CaseStudiesCTA,
} from "../components/sections/CaseStudies";

const CaseStudiesPage = () => {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Discover how Sandtongrid Technologies has helped organizations modernize infrastructure, improve software delivery, and achieve measurable business outcomes."
        canonical="/case-studies"
      />

      {/* ==========================================================
                Case Studies Hero
            ========================================================== */}
      <CaseStudiesHero />

      {/* ==========================================================
                Featured Case Studies
            ========================================================== */}
      <CaseStudiesGrid />

      {/* ==========================================================
                Success Metrics
            ========================================================== */}
      <SuccessMetrics />

      {/* ==========================================================
                Client Testimonials
            ========================================================== */}
      <Testimonials />

      {/* ==========================================================
                Final Call To Action
            ========================================================== */}
      <CaseStudiesCTA />
    </>
  );
};

export default CaseStudiesPage;
