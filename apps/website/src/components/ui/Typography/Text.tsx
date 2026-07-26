/**
 * =============================================================================
 * File: Text.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Reusable text component.
 *
 * Responsibilities:
 * - Maintain typography consistency.
 * - Support common text sizes.
 * =============================================================================
 */

import type { ReactNode } from "react";

import styles from "./Text.module.css";

type TextSize = "small" | "medium" | "large";

interface TextProps {
  children: ReactNode;
  size?: TextSize;
}

const Text = ({ children, size = "medium" }: TextProps) => {
  return <p className={`${styles.text} ${styles[size]}`}>{children}</p>;
};

export default Text;
