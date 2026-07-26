/******************************************************************************
File: Section.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Section component.

Responsibilities:
- Define supported spacing variants.
- Provide a strongly typed public API.
- Keep component logic free from inline types.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/* =============================================================================
   Section Size Variants
============================================================================= */

export type SectionSize = "sm" | "md" | "lg" | "xl";

/* =============================================================================
   Section Props
============================================================================= */

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content rendered inside the section.
   */
  children: ReactNode;

  /**
   * Controls the vertical spacing.
   *
   * @default "lg"
   */
  size?: SectionSize;

  /**
   * Optional section id for navigation.
   */
  id?: string;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
