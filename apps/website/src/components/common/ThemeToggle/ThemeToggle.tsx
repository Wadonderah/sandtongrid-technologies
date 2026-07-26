/******************************************************************************
File: ThemeToggle.tsx
------------------------------------------------------------------------------
Purpose:
Reusable theme toggle button.

Responsibilities:
- Toggle between light and dark themes.
- Consume ThemeContext.
- Display the appropriate icon.
- Integrate with the shared Button component.
******************************************************************************/

import { useContext } from "react";

import Button from "@/components/ui/Button";
import { ThemeContext } from "@/context/ThemeContext";

import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within ThemeProvider.");
  }

  const { theme, toggleTheme } = context;

  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Toggle theme"
      aria-pressed={resolvedTheme === "dark"}
      onClick={toggleTheme}
      className={styles.button}
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeToggle;