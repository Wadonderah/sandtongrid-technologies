/**
 * ============================================================================
 * File: theme.ts
 * ----------------------------------------------------------------------------
 * Central application theme.
 *
 * Purpose:
 * - Centralize colors, typography, spacing and layout values.
 * - Prevent hardcoded design values.
 * - Keep the UI consistent across the application.
 * ============================================================================
 */

export const THEME = {
  colors: {
    primary: "#0F172A",
    secondary: "#334155",

    text: "#1E293B",
    textLight: "#64748B",

    background: "#FFFFFF",
    surface: "#F8FAFC",

    border: "#E2E8F0",

    white: "#FFFFFF",
  },

  layout: {
    containerWidth: "1200px",

    headerHeight: "80px",
  },

  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "4rem",
    xxl: "6rem",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
} as const;
