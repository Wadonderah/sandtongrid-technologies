/**
 * =============================================================================
 * File: ContactPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Contact page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Assemble all Contact page sections.
 * - Keep the page free from business logic.
 * - Import reusable section components.
 *
 * Page Structure:
 * 1. Contact Hero
 * 2. Contact Information
 * 3. Contact Form
 * 4. Office Locations
 * 5. Contact CTA
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  ContactHero,
  ContactInformation,
  ContactForm,
  OfficeLocations,
  ContactCTA,
} from "../components/sections/Contact";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Sandtongrid Technologies to discuss AWS consulting, DevOps, cloud migration or managed cloud services."
        canonical="/contact"
      />

      {/* ==========================================================
                Contact Hero
            ========================================================== */}
      <ContactHero />

      {/* ==========================================================
                Contact Information
            ========================================================== */}
      <ContactInformation />

      {/* ==========================================================
                Contact Form
            ========================================================== */}
      <ContactForm />

      {/* ==========================================================
                Office Locations
            ========================================================== */}
      <OfficeLocations />

      {/* ==========================================================
                Contact CTA
            ========================================================== */}
      <ContactCTA />
    </>
  );
};

export default ContactPage;
