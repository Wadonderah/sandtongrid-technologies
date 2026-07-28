/**
 * ============================================================================
 * File: navigation.ts
 * ----------------------------------------------------------------------------
 * Main navigation configuration.
 *
 * Purpose:
 * - Generate navigation from the centralized route configuration.
 * - Prevent duplicated route definitions.
 * - Ensure Header, Footer and Sitemap always stay synchronized.
 * ============================================================================
 */

import { appRoutes } from "@/config/routes";

export const NAVIGATION_ITEMS = appRoutes
  .filter((route) => route.navigation)
  .map((route) => ({
    label: route.name,
    path: route.path,
  }));