/**
 * =============================================================================
 * File: routes.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized application routing configuration.
 *
 * Responsibilities:
 * - Define application routes.
 * - Generate Header navigation.
 * - Generate Footer navigation.
 * - Support sitemap generation.
 * - Support breadcrumbs.
 * - Support SEO metadata.
 * =============================================================================
 */

export interface AppRoute {
  path: string;

  name: string;

  navigation: boolean;

  footer: boolean;

  priority: number;

  changeFrequency:
    "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    name: "Home",
    navigation: true,
    footer: true,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    name: "About",
    navigation: true,
    footer: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    name: "Services",
    navigation: true,
    footer: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    navigation: true,
    footer: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/industries",
    name: "Industries",
    navigation: true,
    footer: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/resources",
    name: "Resources",
    navigation: true,
    footer: true,
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/careers",
    name: "Careers",
    navigation: true,
    footer: true,
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    name: "Contact",
    navigation: true,
    footer: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
];

export default appRoutes;
