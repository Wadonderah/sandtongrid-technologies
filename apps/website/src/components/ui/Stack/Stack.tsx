/******************************************************************************
File: Stack.tsx
------------------------------------------------------------------------------
Purpose:
Reusable vertical layout component.

Responsibilities:
- Arrange children vertically.
- Apply reusable spacing.
- Support alignment.
******************************************************************************/

import type { FC } from "react";

import styles from "./Stack.module.css";

import type { StackProps } from "./Stack.types";

import { classNames, resolveVariant } from "../../../utils";

/******************************************************************************
Variant Maps
******************************************************************************/

const SPACING_VARIANTS = {
  xs: styles.xs,

  sm: styles.sm,

  md: styles.md,

  lg: styles.lg,

  xl: styles.xl,

  "2xl": styles.twoXl,

  "3xl": styles.threeXl,
} as const;

const ALIGNMENT_VARIANTS = {
  start: styles.start,

  center: styles.center,

  end: styles.end,

  stretch: styles.stretch,
} as const;

/******************************************************************************
Stack Component
******************************************************************************/

const Stack: FC<StackProps> = ({
  children,
  spacing = "lg",
  align = "stretch",
  className = "",
}) => {
  const spacingClass = resolveVariant(spacing, SPACING_VARIANTS);

  const alignmentClass = resolveVariant(align, ALIGNMENT_VARIANTS);

  return (
    <div
      className={classNames(
        styles.stack,
        spacingClass,
        alignmentClass,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
