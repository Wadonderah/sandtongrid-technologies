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

import Button from "@/components/ui/Button";

import useTheme from "@/hooks/useTheme";

import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Toggle theme"
      aria-pressed={resolvedTheme === "dark"}
      onClick={handleToggle}
      className={styles.button}
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeToggle;