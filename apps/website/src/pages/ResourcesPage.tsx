/**
 * =============================================================================
 * File: ResourcesPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Resources page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all Resources page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 *
 * Page Structure:
 * 1. Resources Hero
 * 2. Resource Library
 * 3. Featured Insights
 * 4. Resources CTA
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  ResourcesHero,
  ResourceLibrary,
  FeaturedInsights,
  ResourcesCTA,
} from "../components/sections/Resources";

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="Resources"
        description="Browse cloud articles, guides, best practices and technical resources from Sandtongrid Technologies."
        canonical="/resources"
      />

      {/* ==========================================================
                Resources Hero
            ========================================================== */}
      <ResourcesHero />

      {/* ==========================================================
                Resource Library
            ========================================================== */}
      <ResourceLibrary />

      {/* ==========================================================
                Featured Insights
            ========================================================== */}
      <FeaturedInsights />

      {/* ==========================================================
                Resources CTA
            ========================================================== */}
      <ResourcesCTA />
    </>
  );
};

export default ResourcesPage;
