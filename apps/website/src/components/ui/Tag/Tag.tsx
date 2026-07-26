/******************************************************************************
File: Tag.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Tag component.

Responsibilities:
- Display reusable labels.
- Support variants.
- Support sizes.
- Forward native HTML attributes.
******************************************************************************/

import type { FC } from "react";

import styles from "./Tag.module.css";

import type { TagProps } from "./Tag.types";

const Tag: FC<TagProps> = ({
  children,
  variant = "soft",
  size = "md",
  className = "",
  ...rest
}) => {
  const variantClass = {
    filled: styles.filled,
    outlined: styles.outlined,
    soft: styles.soft,
  }[variant];

  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
  }[size];

  return (
    <span
      className={[styles.tag, variantClass, sizeClass, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Tag;
