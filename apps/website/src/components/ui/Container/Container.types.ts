/******************************************************************************
File: Container.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Container component.

Responsibilities:
- Define supported width variants.
- Provide a strongly typed public API.
- Forward native HTML div attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/* =============================================================================
   Container Width Variants
============================================================================= */

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

/* =============================================================================
   Container Props
============================================================================= */

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content rendered inside the container.
   */
  children: ReactNode;

  /**
   * Controls the maximum width.
   *
   * @default "xl"
   */
  size?: ContainerSize;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
