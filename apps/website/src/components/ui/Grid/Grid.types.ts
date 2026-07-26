/******************************************************************************
File: Grid.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Grid component.

Responsibilities:
- Define responsive column layouts.
- Define spacing variants.
- Forward native HTML div attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/******************************************************************************
Grid Column Variants
******************************************************************************/

export type GridColumns = 1 | 2 | 3 | 4;

/******************************************************************************
Grid Gap Variants
******************************************************************************/

export type GridGap = "sm" | "md" | "lg" | "xl";

/******************************************************************************
Grid Component Props
******************************************************************************/

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content rendered inside the grid.
   */
  children: ReactNode;

  /**
   * Number of columns.
   *
   * @default 2
   */
  columns?: GridColumns;

  /**
   * Gap between grid items.
   *
   * @default "lg"
   */
  gap?: GridGap;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
