/**
 * =============================================================================
 * File: HomePage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Home page.
 *
 * Responsibilities:
 * - Render the landing page.
 * - Compose reusable blocks.
 * - Configure SEO.
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

const HomePage = () => {
  return (
    <>
      <SEO
        title="Cloud Consulting & AWS Solutions"
        description="Sandtongrid Technologies helps businesses modernize infrastructure using AWS Cloud, DevOps, Kubernetes, Terraform and Security best practices."
        canonical="/"
      />

      <Hero />

      <FeatureGrid />

      <Stats />

      <TestimonialGrid />

      <FAQ />

      <CTA />

      <Newsletter />
    </>
  );
};

export default HomePage;
