/******************************************************************************
File: Grid.tsx
------------------------------------------------------------------------------
Purpose:
Reusable responsive Grid component.

Responsibilities:
- Arrange content into responsive columns.
- Apply consistent spacing.
- Never control typography.
******************************************************************************/

import type { FC } from "react";

import styles from "./Grid.module.css";

import type { GridProps } from "./Grid.types";

import { classNames, resolveVariant } from "../../../utils";

/******************************************************************************
Variant Maps
******************************************************************************/

const COLUMN_VARIANTS = {
  1: styles.cols1,

  2: styles.cols2,

  3: styles.cols3,

  4: styles.cols4,
} as const;

const GAP_VARIANTS = {
  sm: styles.sm,

  md: styles.md,

  lg: styles.lg,

  xl: styles.xl,
} as const;

/******************************************************************************
Grid Component
******************************************************************************/

const Grid: FC<GridProps> = ({
  children,
  columns = 2,
  gap = "lg",
  className = "",
}) => {
  const columnClass = resolveVariant(columns, COLUMN_VARIANTS);

  const gapClass = resolveVariant(gap, GAP_VARIANTS);

  return (
    <div className={classNames(styles.grid, columnClass, gapClass, className)}>
      {children}
    </div>
  );
};

export default Grid;
