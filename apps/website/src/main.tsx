/**
 * =============================================================================
 * File: main.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Application entry point.
 *
 * Responsibilities:
 * - Bootstrap React.
 * - Register global styles.
 * - Register application providers.
 * - Render the root application.
 * =============================================================================
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import ThemeProvider from "./context/ThemeContext";

/* ============================================================================
   Global Styles (Load Order Matters)
============================================================================ */

import "./index.css";

/* ============================================================================
   Design System
============================================================================ */

import "./styles/design-tokens.css";
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/spacing.css";
import "./styles/surfaces.css";
import "./styles/backgrounds.css";
import "./styles/shadows.css";
import "./styles/animations.css";

/* ============================================================================
   Accessibility
============================================================================ */

import "./styles/accessibility.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
