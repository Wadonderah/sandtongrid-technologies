/**
 * ============================================================================
 * File: routes.ts
 * ----------------------------------------------------------------------------
 * Centralized application routes.
 *
 * Purpose:
 * - Prevent hardcoded route strings.
 * - Make route management easier.
 * - Provide a single source of truth for navigation.
 * ============================================================================
 */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
} as const;
