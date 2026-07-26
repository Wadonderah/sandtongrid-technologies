/**
 * =============================================================================
 * File: SectionTitle.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Reusable section heading component.
 *
 * Responsibilities:
 * - Display a section title.
 * - Display an optional subtitle.
 * - Keep typography consistent throughout the application.
 * =============================================================================
 */

import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        align === "center" ? styles.center : styles.left
      }`}
    >
      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
