/**
 * =============================================================================
 * File: ThemeContextValue.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Shared Theme Context definitions.
 *
 * Responsibilities:
 * - Export Theme type.
 * - Export ThemeContextValue interface.
 * - Export ThemeContext.
 *
 * This file exists to satisfy the React Fast Refresh ESLint rule by ensuring
 * ThemeContext.tsx only exports React components.
 * =============================================================================
 */

import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);