/**
 * =============================================================================
 * File: AboutPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * About page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all About page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  AboutHero,
  MissionVision,
  CoreValues,
  WhySandtongrid,
} from "../components/sections/About";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sandtongrid Technologies, our mission, cloud expertise and commitment to delivering secure, scalable cloud solutions."
        canonical="/about"
      />

      <AboutHero />

      <MissionVision />

      <CoreValues />

      <WhySandtongrid />
    </>
  );
};

export default AboutPage;
