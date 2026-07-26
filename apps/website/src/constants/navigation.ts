/**
 * ============================================================================
 * File: navigation.ts
 * ----------------------------------------------------------------------------
 * Main navigation configuration.
 *
 * Purpose:
 * - Keeps the navigation menu reusable.
 * - Prevents duplicated menu definitions.
 * - Allows Header and future Mobile Menu to use the same data.
 * ============================================================================
 */

import { ROUTES } from "./routes";

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "About",
    path: ROUTES.ABOUT,
  },
  {
    label: "Services",
    path: ROUTES.SERVICES,
  },
  {
    label: "Contact",
    path: ROUTES.CONTACT,
  },
];
