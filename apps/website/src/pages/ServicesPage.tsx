/**
 * =============================================================================
 * File: ServicesPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Services page for Sandtongrid Technologies.
 * =============================================================================
 */

import SEO from "../components/seo";

import {
  ServicesHero,
  CloudConsulting,
  CloudMigration,
  DevOpsAutomation,
  ManagedServices,
  Technologies,
  ServiceProcess,
  ServicesCTA,
} from "../components/sections/Services";

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Cloud Services"
        description="Explore AWS consulting, cloud migration, DevOps, Kubernetes, infrastructure automation, security and managed cloud services."
        canonical="/services"
      />

      <ServicesHero />

      <CloudConsulting />

      <CloudMigration />

      <DevOpsAutomation />

      <ManagedServices />

      <Technologies />

      <ServiceProcess />

      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
