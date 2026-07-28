/**
 * =============================================================================
 * File: HomePage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Home page.
 *
 * Responsibilities:
 * - Render the landing page.
 * - Compose reusable homepage blocks.
 * - Configure page SEO.
 * - Present the visitor journey from introduction to conversion.
 *
 * Homepage Flow
 * -----------------------------------------------------------------------------
 * 1. Hero
 * 2. Services Overview
 * 3. Why Sandtongrid
 * 4. Statistics
 * 5. Testimonials
 * 6. Frequently Asked Questions
 * 7. Call To Action
 * 8. Newsletter
 * =============================================================================
 */

import SEO from "../components/seo";

import Hero from "../components/blocks/Hero";
import FeatureGrid from "../components/blocks/FeatureGrid";
import Stats from "../components/blocks/Stats";
import TestimonialGrid from "../components/blocks/TestimonialGrid";
import FAQ from "../components/blocks/FAQ";
import CTA from "../components/blocks/CTA";
import Newsletter from "../components/blocks/Newsletter";

/* ============================================================================
   Reusable About Section
   ----------------------------------------------------------------------------
   Reused here to strengthen the homepage credibility without creating a
   duplicate component.
============================================================================ */

import WhySandtongrid from "../components/sections/About/WhySandtongrid";

const HomePage = () => {
  return (
    <>
      {/* ==========================================================
          SEO
      ========================================================== */}

      <SEO
        title="Cloud Consulting & AWS Solutions"
        description="Sandtongrid Technologies helps businesses modernize infrastructure using AWS Cloud, DevOps, Kubernetes, Terraform and Security best practices."
        canonical="/"
      />

      {/* ==========================================================
          Hero
      ========================================================== */}

      <Hero />

      {/* ==========================================================
          Services Overview
      ========================================================== */}

      <FeatureGrid />

      {/* ==========================================================
          Why Choose Sandtongrid
      ========================================================== */}

      <WhySandtongrid />

      {/* ==========================================================
          Statistics
      ========================================================== */}

      <Stats />

      {/* ==========================================================
          Testimonials
      ========================================================== */}

      <TestimonialGrid />

      {/* ==========================================================
          Frequently Asked Questions
      ========================================================== */}

      <FAQ />

      {/* ==========================================================
          Call To Action
      ========================================================== */}

      <CTA />

      {/* ==========================================================
          Newsletter
      ========================================================== */}

      <Newsletter />
    </>
  );
};

export default HomePage;