/**
 * =============================================================================
 * File: IndustriesPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Industries page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all Industries page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 *
 * Page Structure:
 * 1. Industries Hero
 * 2. Industries We Serve
 * 3. Why Choose Sandtongrid
 * 4. Industries CTA
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  IndustriesHero,
  IndustriesList,
  WhyChooseUs,
  IndustriesCTA,
} from "../components/sections/Industries";

const IndustriesPage = () => {
  return (
    <>
      <SEO
        title="Industries"
        description="Cloud transformation solutions tailored for finance, healthcare, education, government, retail and other industries."
        canonical="/industries"
      />

      {/* ==========================================================
                Industries Hero
            ========================================================== */}
      <IndustriesHero />

      {/* ==========================================================
                Industries We Serve
            ========================================================== */}
      <IndustriesList />

      {/* ==========================================================
                Why Choose Sandtongrid
            ========================================================== */}
      <WhyChooseUs />

      {/* ==========================================================
                Industries CTA
            ========================================================== */}
      <IndustriesCTA />
    </>
  );
};

export default IndustriesPage;
