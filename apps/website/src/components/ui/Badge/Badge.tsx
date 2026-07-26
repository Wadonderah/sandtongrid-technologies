/******************************************************************************
File: Badge.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Badge component.

Responsibilities:
- Display small status indicators.
- Support reusable variants.
- Support reusable sizes.
******************************************************************************/

import type { FC } from "react";

import styles from "./Badge.module.css";

import type { BadgeProps } from "./Badge.types";

const Badge: FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) => {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    success: styles.success,
    warning: styles.warning,
    danger: styles.danger,
    neutral: styles.neutral,
  }[variant];

  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
  }[size];

  return (
    <span
      className={[styles.badge, variantClass, sizeClass, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;
