/**
 * =============================================================================
 * File: constants.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized accessibility constants.
 *
 * Responsibilities:
 * - Reusable ARIA labels
 * - Accessibility roles
 * - Skip navigation identifiers
 * - External link attributes
 *
 * Notes:
 * - Avoid hardcoding accessibility strings across components.
 * =============================================================================
 */

export const ACCESSIBILITY = {
  SKIP_TO_CONTENT_ID: "main-content",

  ARIA: {
    MAIN_NAVIGATION: "Main navigation",
    FOOTER_NAVIGATION: "Footer navigation",
    PRIMARY_CONTENT: "Primary content",
    SITE_HEADER: "Site header",
    SITE_FOOTER: "Site footer",
  },

  EXTERNAL_LINK: {
    REL: "noopener noreferrer",
    TARGET: "_blank",
  },
} as const;

export default ACCESSIBILITY;
