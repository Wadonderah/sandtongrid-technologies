/**
 * =============================================================================
 * File: ServicesPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Services page for Sandtongrid Technologies.
 * =============================================================================
 */

import SEO from "../components/seo";
import siteConfig from "../config/site";
import CloudAssessmentEstimator from "../components/blocks/CloudAssessmentEstimator";

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

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Consulting & Architecture",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.website.url,
    },
    areaServed: "Worldwide",
    description:
      "Enterprise AWS cloud architecture, Well-Architected reviews, multi-account governance, and scalable cloud adoption.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "DevOps & Infrastructure Automation",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.website.url,
    },
    areaServed: "Worldwide",
    description:
      "Terraform IaC, GitHub Actions, automated CI/CD pipelines, GitOps workflows, and release velocity engineering.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Migration & Modernization",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.website.url,
    },
    areaServed: "Worldwide",
    description:
      "Zero-downtime workload migration to AWS, Kubernetes container modernization, database migration, and re-platforming.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Sandtongrid Technologies optimize AWS cloud infrastructure costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We apply AWS Well-Architected FinOps methodologies, rightsizing compute resources, leveraging AWS Graviton processors, spot fleets, automated scheduling, and Savings Plans to typically reduce monthly spend by 25% to 40%.",
        },
      },
      {
        "@type": "Question",
        name: "What DevOps and Infrastructure as Code (IaC) tools do you implement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team implements production-grade Terraform and OpenTofu modules, GitHub Actions, AWS CodePipeline, ArgoCD, Docker, and Kubernetes (Amazon EKS) to deliver reliable, automated multi-account environments.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure zero-downtime cloud migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We execute structured multi-phase migrations following AWS migration frameworks, using pilot workloads, database replication, and blue-green DNS cutovers to guarantee continuous business operations.",
        },
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Cloud Services"
        description="Explore AWS consulting, cloud migration, DevOps, Kubernetes, infrastructure automation, security and managed cloud services."
        canonical="/services"
        schema={servicesSchema}
      />

      <ServicesHero />

      <CloudConsulting />

      <CloudMigration />

      <DevOpsAutomation />

      <ManagedServices />

      {/* Interactive Architecture & Cost Estimator */}
      <CloudAssessmentEstimator />

      <Technologies />

      <ServiceProcess />

      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
