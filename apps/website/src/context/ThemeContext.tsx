/**
 * =============================================================================
 * File: ThemeContext.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Application theme provider.
 *
 * Responsibilities:
 * - Manage Light, Dark and System themes.
 * - Persist the selected theme.
 * - Detect operating system theme.
 * - Apply the theme to the HTML element.
 * =============================================================================
 */

import { useEffect, useMemo, useState } from "react";

import type { ReactNode } from "react";

import {
  ThemeContext,
  type Theme,
  type ThemeContextValue,
} from "./ThemeContextValue";

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "sandtongrid-theme";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;

    return saved ?? "system";
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolvedTheme =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;

      document.documentElement.setAttribute("data-theme", resolvedTheme);
    };

    applyTheme();

    media.addEventListener("change", applyTheme);

    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;