/**
 * =============================================================================
 * File: useTheme.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Custom hook for accessing the application theme.
 *
 * Responsibilities:
 * - Expose ThemeContext.
 * - Ensure the hook is used inside ThemeProvider.
 * =============================================================================
 */

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContextValue";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
};

export default useTheme;