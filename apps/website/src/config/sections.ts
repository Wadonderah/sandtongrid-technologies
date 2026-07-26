/**
 * =============================================================================
 * File: sections.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized section identifiers.
 *
 * Responsibilities:
 * - Provide a single source of truth for section IDs.
 * - Prevent hardcoded IDs throughout the application.
 * - Support navigation and smooth scrolling.
 * =============================================================================
 */

export const SECTION_IDS = {
  HOME_HERO: "home-hero",

  ABOUT: "about",

  SERVICES: "services",

  CLOUD_CONSULTING: "cloud-consulting",

  CLOUD_MIGRATION: "cloud-migration",

  DEVOPS_AUTOMATION: "devops-automation",

  MANAGED_SERVICES: "managed-services",

  WHY_CHOOSE_US: "why-choose-us",

  PROCESS: "process",

  TECHNOLOGIES: "technologies",

  FEATURED_PROJECTS: "featured-projects",

  FEATURED_INSIGHTS: "featured-insights",

  CASE_STUDIES: "case-studies",

  INDUSTRIES: "industries",

  RESOURCE_LIBRARY: "resource-library",

  CONTACT_FORM: "contact-form",

  CAREERS: "careers",

  OPEN_POSITIONS: "open-positions",

  JOB_APPLICATION: "job-application",

  FAQ: "faq",
} as const;

export default SECTION_IDS;
