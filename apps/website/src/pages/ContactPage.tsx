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
import siteConfig from "../config/site";

import {
  ContactHero,
  ContactInformation,
  ContactForm,
  OfficeLocations,
  ContactCTA,
} from "../components/sections/Contact";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.company.name}`,
  url: `${siteConfig.website.url}/contact`,
  description:
    "Get in touch with Sandtongrid Technologies for enterprise AWS consulting, cloud architecture audits, and 24/7 managed DevOps.",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.website.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contact.email,
        availableLanguage: ["English"],
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Sandtongrid Technologies to discuss AWS consulting, DevOps, cloud migration or managed cloud services."
        canonical="/contact"
        schema={contactSchema}
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
